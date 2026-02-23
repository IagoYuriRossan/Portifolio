import React, { useRef, useEffect, useState } from 'react';
import { Animated, Platform } from 'react-native';
import PropTypes from 'prop-types';

const FadeInSection = ({ children, delay = 0, direction = 'up', style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(getInitialTranslate())).current;
  const viewRef = useRef(null);

  function getInitialTranslate() {
    switch (direction) {
      case 'up': return 40;
      case 'down': return -40;
      case 'left': return 40;
      case 'right': return -40;
      default: return 40;
    }
  }

  useEffect(() => {
    if (Platform.OS === 'web' && viewRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(viewRef.current);

      return () => observer.disconnect();
    } else {
      // Para mobile, aparece direto
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          delay: delay,
          useNativeDriver: true,
        }),
        Animated.timing(translateAnim, {
          toValue: 0,
          duration: 600,
          delay: delay,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [isVisible]);

  const isHorizontal = direction === 'left' || direction === 'right';

  return (
    <Animated.View
      ref={viewRef}
      style={[
        style,
        {
          opacity: fadeAnim,
          transform: isHorizontal 
            ? [{ translateX: translateAnim }]
            : [{ translateY: translateAnim }]
        }
      ]}
    >
      {children}
    </Animated.View>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default FadeInSection;

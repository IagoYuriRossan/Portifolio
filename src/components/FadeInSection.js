import React, { useRef, useEffect, useState, useCallback } from 'react';
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

  const resetAnimation = useCallback(() => {
    fadeAnim.setValue(0);
    translateAnim.setValue(getInitialTranslate());
  }, []);

  const runAnimation = useCallback(() => {
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
  }, [delay]);

  useEffect(() => {
    if (Platform.OS === 'web' && viewRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Elemento entrou na viewport
            setIsVisible(true);
            runAnimation();
          } else {
            // Elemento saiu da viewport - reseta para animar de novo
            setIsVisible(false);
            resetAnimation();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px'
        }
      );

      observer.observe(viewRef.current);

      return () => observer.disconnect();
    } else {
      // Para mobile, aparece direto
      setIsVisible(true);
      runAnimation();
    }
  }, [runAnimation, resetAnimation]);

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

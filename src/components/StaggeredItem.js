import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Animated, Platform } from 'react-native';
import PropTypes from 'prop-types';

const StaggeredItem = ({ children, index, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const viewRef = useRef(null);

  const resetAnimation = useCallback(() => {
    fadeAnim.setValue(0);
    translateAnim.setValue(30);
    scaleAnim.setValue(0.95);
  }, []);

  const runAnimation = useCallback(() => {
    const delay = index * 100; // Stagger delay based on index

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 500,
        delay: delay,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 8,
        delay: delay,
        useNativeDriver: true,
      })
    ]).start();
  }, [index]);

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
          rootMargin: '0px 0px -20px 0px'
        }
      );

      observer.observe(viewRef.current);

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
      runAnimation();
    }
  }, [runAnimation, resetAnimation]);

  return (
    <Animated.View
      ref={viewRef}
      style={[
        style,
        {
          opacity: fadeAnim,
          transform: [
            { translateY: translateAnim },
            { scale: scaleAnim }
          ]
        }
      ]}
    >
      {children}
    </Animated.View>
  );
};

StaggeredItem.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default StaggeredItem;

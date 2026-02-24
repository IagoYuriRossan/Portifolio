import React, { useRef, useEffect, useState, useCallback, FC } from 'react';
import { Animated, Platform } from 'react-native';
import { FadeInSectionProps } from '../types';

const FadeInSection: FC<FadeInSectionProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  style 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(getInitialTranslate())).current;
  const viewRef = useRef<any>(null);

  function getInitialTranslate(): number {
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
      const observer = new (window as any).IntersectionObserver(
        ([entry]: any) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            runAnimation();
          } else {
            setIsVisible(false);
            resetAnimation();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px'
        }
      );

      observer.observe(viewRef.current as any);

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
      runAnimation();
    }
  }, [runAnimation, resetAnimation]);

  const isHorizontal = direction === 'left' || direction === 'right';

  const AnimatedView = Animated.View as any;

  return React.createElement(
    AnimatedView,
    {
      ref: viewRef,
      style: [
        style,
        {
          opacity: fadeAnim,
          transform: isHorizontal 
            ? [{ translateX: translateAnim }]
            : [{ translateY: translateAnim }]
        }
      ]
    },
    children
  );
};

export default FadeInSection;

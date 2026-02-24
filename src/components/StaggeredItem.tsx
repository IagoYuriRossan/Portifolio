import React, { useRef, useEffect, useState, useCallback, FC } from 'react';
import { Animated, Platform } from 'react-native';
import { StaggeredItemProps } from '../types';

const StaggeredItem: FC<StaggeredItemProps> = ({ children, index, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const viewRef = useRef<any>(null);

  const resetAnimation = useCallback(() => {
    fadeAnim.setValue(0);
    translateAnim.setValue(30);
    scaleAnim.setValue(0.95);
  }, []);

  const runAnimation = useCallback(() => {
    const delay = index * 100;

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
          rootMargin: '0px 0px -20px 0px'
        }
      );

      observer.observe(viewRef.current as any);

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
      runAnimation();
    }
  }, [runAnimation, resetAnimation]);

  const AnimatedView = Animated.View as any;

  return React.createElement(
    AnimatedView,
    {
      ref: viewRef,
      style: [
        style,
        {
          opacity: fadeAnim,
          transform: [
            { translateY: translateAnim },
            { scale: scaleAnim }
          ]
        }
      ]
    },
    children
  );
};

export default StaggeredItem;

import React, { useRef, useEffect, FC } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, Platform, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';

const Hero: FC = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const isWeb = Platform.OS === 'web';
  const localWebPath = '/profile.JPG';
  const fallback = 'https://via.placeholder.com/400.png?text=Iago';

  const fadeLeft = useRef(new Animated.Value(0)).current;
  const translateLeft = useRef(new Animated.Value(-50)).current;
  const fadeRight = useRef(new Animated.Value(0)).current;
  const translateRight = useRef(new Animated.Value(50)).current;
  const fadeSocial = useRef(new Animated.Value(0)).current;
  const translateSocial = useRef(new Animated.Value(30)).current;
  const scaleGreeting = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeLeft, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateLeft, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleGreeting, {
          toValue: 1,
          tension: 50,
          friction: 6,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    Animated.parallel([
      Animated.timing(fadeRight, {
        toValue: 1,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateRight, {
        toValue: 0,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.parallel([
      Animated.timing(fadeSocial, {
        toValue: 1,
        duration: 600,
        delay: 600,
        useNativeDriver: true,
      }),
      Animated.timing(translateSocial, {
        toValue: 0,
        duration: 600,
        delay: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const AnimatedView = Animated.View as any;
  const AnimatedText = Animated.Text as any;

  return (
    <View style={styles.hero}>
      {React.createElement(
        AnimatedView,
        {
          style: [
            styles.heroLeft, 
            { 
              opacity: fadeLeft, 
              transform: [{ translateX: translateLeft }] 
            }
          ]
        },
        <>
          {React.createElement(
            AnimatedText,
            {
              style: [
                styles.greeting, 
                { transform: [{ scale: scaleGreeting }] }
              ]
            },
            'Hello, World!'
          )}
          <Text style={styles.heroTitle}>
            Eu sou <Text style={styles.highlight}>IAGO YURI ROSSAN</Text>
          </Text>
          <Text style={styles.heroDesc}>
            Sou um rapaz com muita energia, espontâneo e sociável. Gosto de conversar e
            construir boas relações. Tenho experiência em TI, desenvolvimento Full‑Stack
            e Mobile, e gosto de criar soluções focadas no usuário.
          </Text>
        </>
      )}

      {React.createElement(
        AnimatedView,
        {
          style: [
            styles.heroRight, 
            { 
              opacity: fadeRight, 
              transform: [{ translateX: translateRight }] 
            }
          ]
        },
        <>
          <Image source={{ uri: isWeb ? localWebPath : fallback }} style={styles.heroAvatar} />
          <Text style={styles.emailText}>iagorossan321@gmail.com</Text>
        </>
      )}

      {React.createElement(
        AnimatedView,
        {
          style: [
            styles.socialLeft, 
            { 
              opacity: fadeSocial, 
              transform: [{ translateY: translateSocial }] 
            }
          ]
        },
        <>
          <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL('https://github.com/IagoYuriRossan')}>
            <Text style={styles.socialIconText}>GH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL('https://www.linkedin.com/in/iago-yuri-rossan-ab792419b/')}>
            <Text style={styles.socialIconText}>in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL('mailto:iagorossan321@gmail.com')}>
            <Text style={styles.socialIconText}>@</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Hero;

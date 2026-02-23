import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import styles from './styles';

const Hero = () => {
  const isWeb = Platform.OS === 'web';
  const localWebPath = '/assets/profile.jpg';
  const fallback = 'https://via.placeholder.com/400.png?text=Iago';

  return (
    <View style={styles.hero}>
      <View style={styles.heroLeft}>
        <Text style={styles.greeting}>Hello, World!</Text>
        <Text style={styles.heroTitle}>
          Eu sou <Text style={styles.highlight}>IAGO YURI ROSSAN</Text>
        </Text>
        <Text style={styles.heroDesc}>
          Sou um rapaz com muita energia, espontâneo e sociável. Gosto de conversar e
          construir boas relações. Tenho experiência em TI, desenvolvimento Full‑Stack
          e Mobile, e gosto de criar soluções focadas no usuário.
        </Text>
        <TouchableOpacity style={styles.heroButton} onPress={() => Linking.openURL('#divSobre')}>
          <Text style={styles.heroButtonText}>Conheça mais sobre mim</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heroRight}>
        <Image source={{ uri: isWeb ? localWebPath : fallback }} style={styles.heroAvatar} />
      </View>

      <View style={styles.socialLeft}>
        <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL('https://github.com/IagoYuriRossan')}>
          <Text style={styles.socialIconText}>GH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL('https://linkedin.com/in/iago-yuri-rossan')}>
          <Text style={styles.socialIconText}>in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL('mailto:iagorossan321@gmail.com')}>
          <Text style={styles.socialIconText}>@</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.emailRight}>
        <Text style={styles.emailText}>iagorossan321@gmail.com</Text>
      </View>
    </View>
  );
};

export default Hero;

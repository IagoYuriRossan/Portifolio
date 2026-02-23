import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Experiences from './src/components/Experiences';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import styles from './src/components/styles';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with React Native · Responsive for web & mobile</Text>
        </View>
      </View>
    </ScrollView>
  );
}

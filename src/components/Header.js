import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';

const Header = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { width } = Dimensions.get('window');
  const isMobileView = width < 768;

  const navItems = [
    { label: 'Sobre mim', id: 'divSobre' },
    { label: 'Experiências', id: 'divExperiencias' },
    { label: 'Projetos', id: 'divProjetos' },
    { label: 'Habilidades', id: 'divHabilidades' },
    { label: 'Contato', id: 'divContato' },
  ];

  const scrollToSection = (sectionId) => {
    if (Platform.OS === 'web') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <View style={styles.topbar}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoMain}>IY</Text>
        <Text style={styles.logoSub}>IAGO ROSSAN</Text>
      </View>

      {isMobileView ? (
        <>
          <View style={styles.mobileHeaderRight}>
            <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
              <Text style={styles.themeToggleText}>{isDark ? '☀️' : '🌙'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hamburger} onPress={() => setMenuOpen(!menuOpen)}>
              <Text style={styles.hamburgerText}>{menuOpen ? '✕' : '☰'}</Text>
            </TouchableOpacity>
          </View>
          
          {menuOpen && (
            <View style={styles.mobileMenu}>
              {navItems.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => scrollToSection(item.id)} style={styles.mobileMenuItem}>
                  <Text style={styles.mobileMenuText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </>
      ) : (
        <View style={styles.topNavRight}>
          {navItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => scrollToSection(item.id)}>
              <Text style={styles.navLink}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
            <Text style={styles.themeToggleText}>{isDark ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;

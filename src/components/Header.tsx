import React, { useState, FC } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import { NavItem } from '../types';

const Header: FC = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isThemeHovered, setIsThemeHovered] = useState(false);
  
  const { width } = Dimensions.get('window');
  const isMobileView = width < 768;
  const isWeb = Platform.OS === 'web';

  const navItems: NavItem[] = [
    { label: 'Sobre mim', id: 'divSobre' },
    { label: 'Experiências', id: 'divExperiencias' },
    { label: 'Projetos', id: 'divProjetos' },
    { label: 'Habilidades', id: 'divHabilidades' },
    { label: 'Contato', id: 'divContato' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (Platform.OS === 'web') {
      const element = (document as any).getElementById(sectionId);
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
          {navItems.map((item, index) => {
            const itemHoverProps = isWeb ? {
              onMouseEnter: () => setHoveredItem(index),
              onMouseLeave: () => setHoveredItem(null),
            } : {};
            
            const navLinkStyle = [
              styles.navLink,
              hoveredItem === index && {
                color: theme.accent,
                transform: [{ scale: 1.1 }],
              }
            ];

            return (
              <TouchableOpacity 
                key={index} 
                onPress={() => scrollToSection(item.id)}
                {...itemHoverProps}
              >
                <Text style={navLinkStyle}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
          
          <View {...(isWeb ? {
            onMouseEnter: () => setIsThemeHovered(true),
            onMouseLeave: () => setIsThemeHovered(false),
          } : {})}>
            <TouchableOpacity 
              style={[
                styles.themeToggle,
                isThemeHovered && {
                  transform: [{ scale: 1.2 }, { rotate: '20deg' }],
                }
              ]} 
              onPress={toggleTheme}
            >
              <Text style={styles.themeToggleText}>{isDark ? '☀️' : '🌙'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;

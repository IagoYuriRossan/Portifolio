import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';

const Header = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.topbar}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoMain}>IY</Text>
        <Text style={styles.logoSub}>IAGO ROSSAN</Text>
      </View>
      <View style={styles.topNavRight}>
        <TouchableOpacity onPress={() => Linking.openURL('#divSobre')}>
          <Text style={styles.navLink}>Sobre mim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('#divExperiencias')}>
          <Text style={styles.navLink}>Experiências</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('#divProjetos')}>
          <Text style={styles.navLink}>Projetos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('#divHabilidades')}>
          <Text style={styles.navLink}>Habilidades</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('#divContato')}>
          <Text style={styles.navLink}>Contato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
          <Text style={styles.themeToggleText}>{isDark ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

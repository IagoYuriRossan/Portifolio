import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const Header = () => {
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
      </View>
    </View>
  );
};

export default Header;

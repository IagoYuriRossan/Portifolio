import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const Contact = () => {
  const email = 'iagorossan321@gmail.com';
  const phone = '+5515992849046';
  const github = 'https://github.com/IagoYuriRossan';
  const linkedin = 'https://linkedin.com/in/iago-yuri-rossan';

  return (
    <View style={styles.section} nativeID="divContato">
      <Text style={styles.sectionTitle}>Contato</Text>
      <Text style={styles.paragraph}>Localização: Sorocaba – SP</Text>
      <Text style={styles.paragraph}>Telefone: (15) 99284-9046</Text>
      <Text style={styles.paragraph}>Email: iagorossan321@gmail.com</Text>

      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)} style={styles.heroButton}>
        <Text style={styles.heroButtonText}>Enviar email</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
          <Text style={styles.highlight}>Ligar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(github)}>
          <Text style={styles.highlight}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(linkedin)}>
          <Text style={styles.highlight}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;

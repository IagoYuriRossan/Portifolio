import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import StaggeredItem from './StaggeredItem';

const Contact: FC = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const email = 'iagorossan321@gmail.com';
  const phone = '+5515992849046';
  const github = 'https://github.com/IagoYuriRossan';
  const linkedin = 'https://www.linkedin.com/in/iago-yuri-rossan-ab792419b/';

  return (
    <FadeInSection style={styles.section} direction="up">
      <View nativeID="divContato">
        <Text style={styles.sectionTitle}>Contato</Text>
        <StaggeredItem index={0}>
          <Text style={styles.paragraph}>Localização: Sorocaba – SP</Text>
        </StaggeredItem>
        <StaggeredItem index={1}>
          <Text style={styles.paragraph}>Telefone: (15) 99284-9046</Text>
        </StaggeredItem>
        <StaggeredItem index={2}>
          <Text style={styles.paragraph}>Email: iagorossan321@gmail.com</Text>
        </StaggeredItem>

        <StaggeredItem index={3}>
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)} style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Enviar email</Text>
          </TouchableOpacity>
        </StaggeredItem>

        <StaggeredItem index={4}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
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
        </StaggeredItem>
      </View>
    </FadeInSection>
  );
};

export default Contact;

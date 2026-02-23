import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <View style={styles.section} nativeID="divSobre">
      <Text style={styles.sectionTitle}>Sobre</Text>
      <Text style={styles.paragraph}>
        Sou um rapaz com muita energia, espontâneo e sociável. Gosto de conversar, fazer as
        pessoas rirem e construir boas relações, ao mesmo tempo que valorizo conversas
        profundas e profissionais sobre tecnologia e negócios. Namoro desde 2019 e, no tempo
        livre, assisto filmes, séries e animes; também jogo futebol e saio com amigos.
      </Text>

      <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Resumo Profissional</Text>
      <Text style={styles.paragraph}>
        Minha paixão por tecnologia começou com a manutenção de computadores. Hoje, com 5
        anos de experiência em TI, construo aplicações Full‑Stack e Mobile. Uno minha bagagem
        prática de infraestrutura com desenvolvimento para entregar soluções robustas,
        sempre focadas na necessidade do usuário e na ponte entre cliente e time técnico.
      </Text>
    </View>
  );
};

export default About;

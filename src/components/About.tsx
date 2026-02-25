import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import HoverCard from './HoverCard';

const About: FC = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection direction="up">
      <HoverCard style={styles.section}>
        <View nativeID="divSobre">
        <Text style={styles.sectionTitle}>Sobre</Text>
        <Text style={styles.paragraph}>
          Tenho 24 anos, nascido e criado em Sorocaba. Sou um rapaz com muita energia, espontâneo e sociável, me desenvolvendo bem tanto em situações informais e pessoais quanto profissionais. Gosto de interagir, fazer as pessoas rirem e construir boas relações, ao mesmo tempo que valorizo conversas profundas e profissionais sobre tecnologia e negócios. Namoro a mesma parceira faz 6 anos, com a qual construo nosso futuro juntos e, no tempo livre, assisto filmes, séries e animes; também jogo futebol e saio com amigos.
        </Text>

        <FadeInSection direction="up" delay={200}>
          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Trajetória Profissional</Text>
          <Text style={styles.paragraph}>
            Meu interesse em tecnologia se iniciou com jogos online, e se tornou a minha paixão quando comecei a trabalhar na área de manutenção de computadores. Trabalhei em uma loja de assistência técnica por 2 anos, na qual desenvolvi tanto a minha análise e criticidade de hardware e software de computadores quanto habilidades sociais com suporte e atendimento ao cliente e logística, além de cursar Tecnico em TI no SENAC para explorar melhor a área.
          </Text>
          <Text style={styles.paragraph}>
            Quando trabalhei na SELBETTI, tive novamente contato com essas duas áreas: passei um tempo dentro da produção, trabalhando com a manutenção de notebooks, análise de produto e logística empresarial. E, posteriormente, trabalhei na área comercial, aprimorando a minha comunicação, interatividade em equipe, sistema fiscal e de vendas empresarial.
          </Text>
          <Text style={styles.paragraph}>
            Agora, com essa experiência na Faktory Softwares, tenho a possibilidade de aplicar o melhor das minhas habilidades, além de me desenvolver na programação e TI em conjunto ao meu curso na FATEC, através do suporte aos clientes, auxílio no desenvolvimento dos softwares, reflexão e discussão sobre suas aplicabilidades técnicas e como adaptá-las para cada situação/cliente.
          </Text>
        </FadeInSection>
        </View>
      </HoverCard>
    </FadeInSection>
  );
};

export default About;

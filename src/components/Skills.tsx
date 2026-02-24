import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import StaggeredItem from './StaggeredItem';
import { SkillsCategory } from '../types';

const skills: SkillsCategory = {
  'Linguagens & Tecnologias': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 'Python', 'MySQL', 'MongoDB'],
  'Infraestrutura & DevOps': ['Docker', 'Git', 'GitHub Actions (CI/CD)', 'Configuração de redes', 'Manutenção de hardware'],
  'IoT & Sistemas Embarcados': ['Arduino', 'ESP32', 'ThingSpeak'],
  'Metodologias': ['Engenharia de Software', 'Kanban', 'Scrum', 'Metodologias Ágeis'],
  'Soft Skills & Business': ['Customer Success', 'Atendimento consultivo', 'Comunicação intermediadora', 'Levantamento de requisitos', 'Troubleshooting'],
  'Idiomas': ['Inglês (Intermediário)']
};

const Skills: FC = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection style={styles.section} direction="up">
      <View nativeID="divHabilidades">
        <Text style={styles.sectionTitle}>Habilidades</Text>
        {Object.keys(skills).map((cat, index) => (
          <StaggeredItem key={cat} index={index} style={{ marginBottom: 20 }}>
            <Text style={styles.expRole}>{cat}</Text>
            <Text style={styles.paragraph}>{skills[cat].join(' · ')}</Text>
          </StaggeredItem>
        ))}
      </View>
    </FadeInSection>
  );
};

export default Skills;

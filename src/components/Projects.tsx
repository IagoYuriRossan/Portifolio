import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import StaggeredItem from './StaggeredItem';
import HoverCard from './HoverCard';
import { Project } from '../types';

const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'DelBicos (Projeto Integrador - Fatec)',
    desc: 'Aplicativo mobile para conectar prestadores de serviços a clientes. Consumo de API ViaCEP, gráficos de ganhos, CRUD completo e suporte a modo claro/escuro.',
    url: 'https://github.com/fershibli/DelBicosV2'
  },
  {
    id: 2,
    title: 'DelBicos Backend',
    desc: 'Back-end do projeto DelBicos com operações CRUD e integração com banco MySQL.',
    url: 'https://github.com/fershibli/DelBicosBackend'
  },
  {
    id: 3,
    title: 'Automação e IoT',
    desc: 'Projetos com ESP32 e Arduino: controle remoto via ThingSpeak, sensor de estacionamento com ultrassom e prototipagem de alarmes e displays.',
    url: '#'
  },
  {
    id: 4,
    title: 'Automação de Deploy (CI/CD)',
    desc: 'Fluxos de trabalho com Docker e GitHub Actions para automação de build e deploy, integrando DockerHub e pipelines de entrega contínua.',
    url: 'https://github.com/IagoYuriRossan/AtividadeFinal-CI-CE'
  }
];

const ProjectCard: FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const isWeb = Platform.OS === 'web';
  const isActive = isHovered || isPressed;

  const hoverProps = isWeb ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  } : {};

  const cardStyle = [
    styles.projectCard,
    isActive && {
      borderColor: theme.primary,
      transform: [{ scale: 1.01 }],
    }
  ];

  return (
    <StaggeredItem index={index} style={cardStyle}>
      <View {...hoverProps}>
        <TouchableOpacity 
          onPress={() => Linking.openURL(project.url)}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          activeOpacity={0.8}
        >
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.paragraph}>{project.desc}</Text>
        </TouchableOpacity>
      </View>
    </StaggeredItem>
  );
};

const Projects: FC = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection direction="up">
      <HoverCard style={styles.section}>
        <View nativeID="divProjetos">
          <Text style={styles.sectionTitle}>Projetos</Text>
          <View style={styles.projectsRow}>
            {sampleProjects.map((p, index) => (
              <ProjectCard key={p.id} project={p} index={index} />
            ))}
          </View>
        </View>
      </HoverCard>
    </FadeInSection>
  );
};

export default Projects;
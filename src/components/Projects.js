import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const sampleProjects = [
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
    url: '#'
  }
];

const Projects = () => {
  return (
    <View style={styles.section} nativeID="divProjetos">
      <Text style={styles.sectionTitle}>Projetos</Text>
      <View style={styles.projectsRow}>
        {sampleProjects.map(p => (
          <TouchableOpacity key={p.id} onPress={() => Linking.openURL(p.url)} style={styles.projectCard}>
            <Text style={styles.projectTitle}>{p.title}</Text>
            <Text style={styles.paragraph}>{p.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Projects;

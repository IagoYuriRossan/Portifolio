import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from './themedStyles';
import FadeInSection from './FadeInSection';
import StaggeredItem from './StaggeredItem';
import HoverCard from './HoverCard';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Estagiário de Implantação',
    company: 'Faktory Softwares',
    period: 'Jan/2026 – atual',
    desc: 'Implantação de software, suporte operacional, diagnóstico de dúvidas e levantamento de feedbacks para melhoria da experiência do usuário; comunicação entre cliente e equipe de desenvolvimento.'
  },
  {
    id: 2,
    role: 'Assistente Comercial',
    company: 'Selbetti Tecnologia S.A',
    period: 'Mai/2024 – Mai/2025',
    desc: 'Levantamento de necessidades junto a clientes e suporte na elaboração de propostas comerciais.'
  },
  {
    id: 3,
    role: 'Técnico de TI',
    company: 'Selbetti Tecnologia S.A',
    period: 'Jun/2023 – Mai/2024',
    desc: 'Atendimento técnico presencial e remoto; diagnóstico e resolução de falhas em hardware e software; configuração de equipamentos.'
  },
  {
    id: 4,
    role: 'Técnico de TI',
    company: 'Nocauti Informática',
    period: 'Jan/2020 – Jun/2023',
    desc: 'Suporte e manutenção de computadores e notebooks; atendimento a clientes e configuração de sistemas e redes.'
  },
  {
    id: 5,
    role: 'Auxiliar de Escritório / Guarda Mirim',
    company: 'Santa Casa de Misericórdia de Sorocaba',
    period: 'Projeto de Primeiro Emprego',
    desc: 'Atuação em setor financeiro e contabilidade com rotinas administrativas e alimentação do sistema financeiro.'
  }
];

const Experiences: FC = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <FadeInSection direction="up">
      <HoverCard style={styles.section}>
        <View nativeID="divExperiencias">
        <Text style={styles.sectionTitle}>Experiências</Text>
        {experiences.map((e, index) => (
          <StaggeredItem key={e.id} index={index} style={{ marginBottom: 20 }}>
            <Text style={styles.expRole}>{e.role} — {e.company}</Text>
            <Text style={styles.expPeriod}>{e.period}</Text>
            <Text style={styles.paragraph}>{e.desc}</Text>
          </StaggeredItem>
        ))}
        </View>
      </HoverCard>
    </FadeInSection>
  );
};

export default Experiences;

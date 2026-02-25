import React, { FC, useState, ReactNode } from 'react';
import { View, Platform, ViewStyle } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface HoverCardProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
}

const HoverCard: FC<HoverCardProps> = ({ children, style, disabled = false }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const isWeb = Platform.OS === 'web';

  if (disabled) {
    return <View style={style}>{children}</View>;
  }

  const hoverStyle = isHovered ? {
    borderWidth: 2,
    borderColor: theme.primary,
    transform: [{ scale: 1.01 }],
  } : {
    borderWidth: 2,
    borderColor: 'transparent',
  };

  const hoverProps = isWeb ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  } : {};

  return (
    <View 
      style={[style, hoverStyle, { transition: 'all 0.3s ease' } as any]}
      {...hoverProps}
    >
      {children}
    </View>
  );
};

export default HoverCard;

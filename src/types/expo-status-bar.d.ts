declare module 'expo-status-bar' {
  import { Component } from 'react';
  import { ViewProps } from 'react-native';

  export interface StatusBarProps extends ViewProps {
    barStyle?: 'light-content' | 'dark-content' | 'default';
    translucent?: boolean;
    backgroundColor?: string;
    animated?: boolean;
    showHideTransition?: 'fade' | 'slide';
    hidden?: boolean;
    networkActivityIndicatorVisible?: boolean;
    statusBarTranslucent?: boolean;
  }

  export const StatusBar: React.ComponentType<StatusBarProps>;
}

import { DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#222F3E',
        secondary: '#FE013D',
        background: '#E5E5E5',
    },
    typography: {
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    margins: 24,
};

export type ThemeProps = typeof theme;

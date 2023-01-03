import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import AzaliaLogo from './Logo.svg';

interface LogoProps {
    style?: StyleProp<ViewStyle>;
}

export const Logo: React.FC<LogoProps> = ({ style }) => {
    return (
        <View style={style}>
            <AzaliaLogo />
        </View>
    );
};

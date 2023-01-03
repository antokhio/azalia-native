import React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

type StackProps = {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
};

export const Stack: React.FC<StackProps> = ({ children, style }) => {
    return (
        <View style={[{ display: 'flex', justifyContent: 'center', alignItems: 'center' }, style]}>
            {children}
        </View>
    );
};

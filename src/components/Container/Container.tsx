import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewProps } from 'react-native';
import { theme } from '../../theme';

export const Container: React.FC<ViewProps> = ({ children, style, ...props }) => {
    return (
        <View style={[styles.container, style]} {...props}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.margins,
    },
});

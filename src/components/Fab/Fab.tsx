import React from 'react';
import { Button, GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';
import AddTask from './AddNewTask.svg';

interface FabProps {
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const Fab: React.FC<FabProps> = ({ onPress }) => {
    return (
        <Pressable style={styles.fab} onPress={onPress}>
            <AddTask />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 32,
        right: 0,
        bottom: 0,
        borderRadius: 32,
    },
});

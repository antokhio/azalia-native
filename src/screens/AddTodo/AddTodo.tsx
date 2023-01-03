import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../../../App';
import { useTypedDispatch } from '../../store';
import { addTodo } from '../../store/slices';
import { theme } from '../../theme';

interface AddTodoProps {
    navigation: NativeStackNavigationProp<RootStackParams>;
}

export const AddTodo: React.FC<AddTodoProps> = ({ navigation }) => {
    const dispatch = useTypedDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        dispatch(
            addTodo({
                title: value,
                completedAt: null,
            })
        );
        setValue('');
    };

    const disabled = !(value.trim().length > 0);

    return (
        <SafeAreaView style={styles.screen}>
            <TextInput value={value} style={styles.input} onChangeText={setValue} />
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    {
                        opacity: disabled || pressed ? 0.5 : 1,
                    },
                ]}
                onPress={handleSubmit}
                disabled={disabled}
            >
                <Text style={styles.text}>Добавить</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        marginHorizontal: theme.margins,
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: theme.colors.background,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: theme.colors.primary,
        marginVertical: 8,
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
    },
    input: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        backgroundColor: '#FAFAFE',
        borderRadius: 8,
        elevation: 3,
        marginVertical: 8,
    },
});

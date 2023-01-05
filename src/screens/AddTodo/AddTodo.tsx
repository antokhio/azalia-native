import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
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
            <TextInput underlineStyle={{display:'none'}} value={value} style={styles.input} onChangeText={setValue} />
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: theme.colors.background,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
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
        borderTopLeftRadius:theme.borderRadius,
        borderTopRightRadius:12,
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
        elevation: 3,
        marginVertical: 8,
    },
});

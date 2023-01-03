import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Container, Fab, Logo, Space, Stack, Todo } from '../../components';
import { useTypedSelector } from '../../store';
import { theme } from '../../theme';

interface HomeProps {
    navigation: NativeStackNavigationProp<RootStackParams>;
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const handleAddTodo = () => navigation.navigate('AddTodo');
    const todos = useTypedSelector((state) => state.todos);
    return (
        <SafeAreaView style={styles.screen}>
            <Space height={32} />
            <Logo />
            <FlatList
                style={styles.todos}
                data={todos}
                renderItem={(item) => <Todo todo={item.item} i={item.index} />}
                contentContainerStyle={{ paddingBottom: 200 }}
            />
            <Fab onPress={handleAddTodo} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
    },
    todos: {
        marginTop: theme.margins,
    },
});

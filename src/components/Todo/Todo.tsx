import React, { useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Checkbox } from 'react-native-paper';
import { useTypedDispatch } from '../../store';
import { deleteTodo, Todo as TodoItem, updateTodo } from '../../store/slices';
import { theme } from '../../theme';

interface TodoProps {
    todo: TodoItem;
    i: number;
}

export const Todo: React.FC<TodoProps> = ({ todo, i }) => {
    const ref = useRef<Swipeable | null>(null);
    const dispatch = useTypedDispatch();

    const handleCompleted = () => {
        dispatch(
            updateTodo({
                i,
                todo: {
                    completedAt: todo.completedAt ? null : Date.now(),
                },
            })
        );
    };
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const handleDelete = () => {
        ref.current?.close();
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            dispatch(deleteTodo({ i }));
            fadeAnim.setValue(1);
        });
    };

    const renderRightActions = (
        progress: Animated.AnimatedInterpolation<number>,
        dragX: Animated.AnimatedInterpolation<number>
    ) => (
        <Animated.View style={[styles.action, { opacity: progress }]}>
            <Text>Удалить</Text>
        </Animated.View>
    );

    return (
        <Swipeable
            ref={ref}
            renderRightActions={renderRightActions}
            onSwipeableOpen={(dir) => dir === 'right' && handleDelete()}
            overshootRight={false}
        >
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <Checkbox.Android
                    color={theme.colors.primary}
                    status={todo.completedAt !== null ? 'checked' : 'unchecked'}
                    onPress={handleCompleted}
                />
                <Text
                    style={[
                        styles.text,
                        {
                            textDecorationLine: todo.completedAt ? 'line-through' : 'none',
                            opacity: todo.completedAt ? 0.5 : 1.0
                        },
                    ]}
                >
                    {todo.title}
                </Text>
            </Animated.View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: theme.margins,
        padding: 8,
        paddingVertical: 12,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFE',
        elevation: 6,
        borderRadius: theme.borderRadius,
    },
    text: {
        flex: 1,
        marginLeft: 8,
        fontFamily: theme.typography.fontFamily,
        fontSize: 24,
    },
    checkbox: {
        color: theme.colors.primary,
    },
    action: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
});

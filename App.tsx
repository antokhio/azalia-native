import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { Provider as ThemeProvider } from 'react-native-paper';
//@ts-expect-error
import AnimatedSplash from 'react-native-animated-splash';
import { AddTodo, Home } from './src/screens';
import { store } from './src/store';
import { theme } from './src/theme';

export type RootStackParams = {
    Home: undefined;
    AddTodo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
    useEffect(() => {
        AnimatedSplash.hide();
    }, []);
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <Stack.Navigator
                            screenOptions={{
                                contentStyle: {
                                    backgroundColor: theme.colors.background,
                                },
                            }}
                        >
                            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                            <Stack.Screen name='AddTodo' options={{headerTitle:''}} component={AddTodo} />
                        </Stack.Navigator>
                    </GestureHandlerRootView>
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
};

export default App;

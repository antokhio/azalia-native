import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { Provider as ThemeProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';

import { AddTodo, Home } from './src/screens';
import { persistor, store } from './src/store';
import { theme } from './src/theme';

export type RootStackParams = {
    Home: undefined;
    AddTodo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
    return (
        <PersistGate persistor={persistor} loading={null}>
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
                                <Stack.Screen name='AddTodo' component={AddTodo} />
                            </Stack.Navigator>
                        </GestureHandlerRootView>
                    </NavigationContainer>
                </ThemeProvider>
            </Provider>
        </PersistGate>
    );
};

export default App;

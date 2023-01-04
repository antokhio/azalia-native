import { configureStore } from '@reduxjs/toolkit';

import { todosReducer } from './slices';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

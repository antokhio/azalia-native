import type { RootState } from '../.';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
    title: string;
    completedAt: number | null;
};

const slice = createSlice({
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, { payload }: PayloadAction<Todo>) => {
            state.push(payload);
        },
        updateTodo: (state, { payload }: PayloadAction<{ i: number; todo: Partial<Todo> }>) => {
            state[payload.i] = {
                ...state[payload.i],
                ...payload.todo,
            };
        },
        deleteTodo: (state, { payload }: PayloadAction<{ i: number }>) => {
            return state.filter((_, i) => i !== payload.i);
        },
    },
});

export const todosReducer = slice.reducer;
export const { addTodo, updateTodo, deleteTodo } = slice.actions;

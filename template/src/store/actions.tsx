import { ADD_TODO } from './actionTypes'

export const addTodo = (content: any) => ({
    type: ADD_TODO,
    payload: content
})

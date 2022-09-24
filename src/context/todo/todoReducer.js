import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS
} from "../types"

const handlers = {
    [ADD_TODO]: (state, { title, id }) => ({
        ...state,
        todos: [
            ...state.todos,
            {
                id,
                title: title
            }
        ]
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state,
        todos: state.todos.filter(el => el.id !== id)
    }),
    [UPDATE_TODO]: (state, { title, id }) => ({
        ...state,
        todos: state.todos.map(el => {
            if (el.id === id) {
                el.title = title
            }
            return el
        })
    }),
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [HIDE_LOADER]: state => ({ ...state, loading: false }),
    [CLEAR_ERROR]: state => ({ ...state, error: null }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error: error }),
    [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
    DEFAUTL: state => state
}


export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAUTL
    return handler(state, action)
}
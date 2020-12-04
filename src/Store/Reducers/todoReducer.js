import { SET_TODOS, SET_TODO } from '../Actions'
const initialState = {
    todos: [],
    todo: { title: '' }

}

function Reducer(state = initialState, action) {
    const { type, payload } = action
    // console.log({ state });
    switch (type) {
        case SET_TODOS:
            return { ...state, todos: payload }

        case SET_TODO:
            return { ...state, todo: payload }

        default:
            return state
    }
}

export default Reducer

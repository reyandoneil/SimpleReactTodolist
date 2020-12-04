import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_TODO, SET_TODOS } from '.'

export const addTodo = (payload) => {
    console.log("add acttion");
    return {
        type: ADD_TODO,
        payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const setTodos = (payload) => {
    // console.log("action :", payload);
    return {
        type: SET_TODOS,
        payload
    }
}

export const setTodo = (payload) => {
    console.log("action :", payload);
    return {
        type: SET_TODO,
        payload
    }
}


export const fetchTodo = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/tasks')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                dispatch(setTodos(result))
            })
    }
}

export const postTodo = (payload) => {
    console.log("ADD TODO ", payload);
    return () => {
        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => {
            res.json()
            const { status, statusText } = res
            console.log({ status, statusText });
        })
            .catch(e => console.error(e))
    }
}

export const putTodo = (payload) => {
    console.log("UPDATE TODO ", payload);
    const { id, data } = payload
    return () => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => {
            res.json()
            const { status, statusText } = res
            console.log({ status, statusText });
        })
            .catch(e => console.error(e))
    }
}

export const removeTodo = (payload) => {
    console.log("DELETE TODO ", payload);
    return (dispatch, getState) => {
        const state = getState()
        fetch(`http://localhost:3000/tasks/${payload}`, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(res => {
            const { Todo } = state
            const newState = Todo.todos.filter(d => d.id !== payload)
            dispatch(setTodos(newState))
            const { status, statusText } = res
            console.log({ status, statusText });
        })
            .catch(e => console.error(e))
    }
}

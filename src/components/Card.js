import React from 'react'
import { useDispatch } from 'react-redux'
import Remove from '../assets/remove.svg'
import { removeTodo } from '../Store/Actions/actionTodo'

function Card({ todo }) {
    const dispatch = useDispatch()
    const removeTodos = () => {
        dispatch(removeTodo(todo.id))
    }
    return (
        <div className='cards'>
            <div className='card-title'>
                <p>{todo.title}</p>
            </div>
            <div className='card-icon' onClick={() => removeTodos()}>
                <img src={Remove} height={'30px'} />
            </div>
        </div>
    )
}

export default Card

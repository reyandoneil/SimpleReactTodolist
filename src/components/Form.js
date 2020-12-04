import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postTodo, fetchTodo } from '../Store/Actions/actionTodo'

function FormTodo() {
    const dispatch = useDispatch()

    const [data, setData] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const submit = (e) => {
        // e.preventDefault()
        dispatch(postTodo(data))
    }
    return (
        <div>
            <Form onSubmit={(e) => submit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>My Todo List </Form.Label>
                    <Form.Control name="title" type="Text" placeholder="Insert Todo" onChange={(e) => handleChange(e)} />
                    <Form.Text className="text-muted">
                        Insert your Todo.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className='submit-btn'>
                    Submit
            </Button>
            </Form>
        </div>
    )
}

export default FormTodo

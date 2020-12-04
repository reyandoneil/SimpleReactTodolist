import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import Cards from './components/Card'
import { fetchTodo } from './Store/Actions/actionTodo'
import Ilustration from './assets/undraw_Accept_request_re_d81h.svg'

function App() {
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state.Todo)
  const [data, setData] = useState([])

  useEffect(() => {
    dispatch(fetchTodo())
  }, [])
  useEffect(() => {
    setData(todos)
  }, [todos])

  console.log(data, 'todos');
  return (
    <div className='App' >
      <div className='ls'>
        <div>
          <img src={Ilustration} width={'400px'}/>
        </div>
        <div>
          <Form />
        </div>
      </div>
      <div>
        {data.map((todo, index) => {
          return <Cards todo={todo} key={index} />
        })}
      </div>
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    </div>
  );
}

export default App;

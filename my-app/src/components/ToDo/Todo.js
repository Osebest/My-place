import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import AddTodo from './Addtodo';
import axios from 'axios';
import '../css/ToDo.css';
import HomeBtn from '../HomeBtn';
import BackBtn from '../BackBtn';


function Todos() {
  const [todos, setComplete] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setComplete(res.data))
  }, [])

  const markComplete = (id)=>{
    const news = [...todos];
    news.map((todo)=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo;
    });
    setComplete(news)
  }

  const delTodo = (index) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${index}`)
      .then((res)=>{
        const news = [...todos];
        news.splice(index, 1);
        setComplete(news)
      })
  }

  const addTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then((res)=>{
        let newTodo=[...todos, res.data];
        setComplete(newTodo)
      })
  }

  return (
    <React.Fragment>
      <div className='back'>
        <BackBtn />
        <h2>ToDo App</h2>
      </div>
      <main className='main2'>
        <h2 style={{paddingBottom:'15px'}}>Your ToDo(s)</h2>
        <AddTodo addTodo={addTodo}/>
        <TodoItem todos={todos} markComplete={markComplete} delTodo={delTodo}/>
      </main>
      <HomeBtn />
    </React.Fragment>
  );
}

export default Todos;

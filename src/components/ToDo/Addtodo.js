import React, {useState} from 'react';

export default function AddTodo({addTodo}) {
  const [title, setTitle] = useState('');

  const useValue= (e)=>{
    setTitle(e.target.value)
  }
  const submit=(e)=>{
    e.preventDefault();
    if(title.length>0){
      addTodo(title);
      setTitle('');
    }
  }

  return (
    <form onSubmit={submit} className="form">
      <input 
      className='field' 
        name='title'
        type="text" 
        placeholder="Add Todo..."
        value={title}
        onChange={useValue}
      />
      <input className="subBtn" type="submit" value ="Submit"/>
    </form>
  )
}

function TodoItem({todos, markComplete, delTodo}){
  const getstyle = (completed) => {
    return {
      textDecorationLine: completed ? "line-through" : "none",
    };
  };

  return(
    todos.map((todo, index)=>(
      <div className="H1style" style={getstyle(todo.completed)} key={index}>
        <div className="hmm">
          <input
            className="checkbox"
            style={{ width: "15px", height: "15px" }}
            type="checkbox"
            onChange={markComplete.bind(this, todo.id)}
          />
          <h2 className="h2">{todo.title}</h2>
        </div>
        <button className="btnX" onClick={delTodo.bind(this, index)}>
          x
        </button>
      </div>
    ))
  )
}

export default TodoItem;
import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({ todold,createdAt}) {
  return (<tr>
    <td>
      <p>{todold}</p>
    </td>
    <td>
      <input placeholder='Enter text here'/>
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>);
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const reverseOrdr= ()=>{
    setTodos([...todos].reverse());
  };

  return (
    <div id="main">
      <button onClick={reverseOrdr}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo)=>(
            <ToDo key = {todo.id }
            todold = {todo.createdAt}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default App;

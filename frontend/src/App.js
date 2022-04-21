import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import TodoList from './TodoList';

function App() {
  const [getMessage, setGetMessage] = useState([])

  useEffect(()=>{
      axios.get('http://localhost:5000/hello').then(response => response.json().then(data => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    }) 
      );
  }, [])

  return (
    <>
   <TodoList todos={getMessage}/> 
   <input type = "text"></input>
   <button>Add Todo</button>
   <button>Clear Completed Todos</button>
   <div>hello world</div>
   </>
  )
}

export default App;
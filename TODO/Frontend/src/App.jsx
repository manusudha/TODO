import { useState,useEffect } from 'react'
import {Addtodos} from "../Components/Addtodos"
import {Todos} from "../Components/Todos"
 function App() {
   const[todos,setTodos]=useState([]);



   useEffect(()=>{
    fetch("http://localhost:3000/showtodo")
    .then(async(e)=>{
      const json=await e.json();
      setTodos(json.todos);
    })
   },[])

    
  return (
    <div  style={{marginLeft:"35em"}}>
    <Addtodos/>
    <Todos todos={todos}/>
    </div>
  )
}

export default App

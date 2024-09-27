export function Todos({todos}){
      
    const sendTrueOrFalse=(completed,id)=>{
            fetch("http://localhost:3000/completed/",{
               method:"PUT",
               body:JSON.stringify({
                id,
                completed:true
             
            }),
               headers:{"content-type":"application/json" },

           })
           .then(()=>{alert("the changes has been made")})
        

    }
   


      return <>
                {
                    todos.map((e)=>{
                            return <div style={{marginLeft:"7em"}}>
                                    <h4>{e.title}</h4>
                                    <h4>{e.description}</h4>
                                    <button  onClick={()=>sendTrueOrFalse(e.completed,e._id)}>{e.completed==true?"completed":"mark as completed"}</button>
                                </div>
                                })
                }
            </>
}

      
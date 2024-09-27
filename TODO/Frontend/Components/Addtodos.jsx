import{useState} from"react"
export  function Addtodos(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    return < >

            <input onChange={(e)=>{ 
              const value=e.target.value;
              setTitle(e.target.value)}}      
            style={{margin:"10px",textAlign:"center",height:"40px",width:"20em", borderRadius:"10px"}} 
            type ="text"   placeholder="Title"
            /><br></br>


            <input onChange={(e)=>{
                const value=e.target.value;
              setDescription(e.target.value)}} 
            style={{margin:"10px",textAlign:"center",height:"40px",width:"20em", borderRadius:"10px"}} type ="text"   placeholder="Description"
            /><br></br>

            <button style={{marginLeft:"75px",textAlign:"center",height:"30px",width:"10em", borderRadius:"20px",backgroundColor:"#7ff55b",color:"black"}} 
               onClick={()=>{
               fetch("http://localhost:3000/todos",{
               method:"POST",
               body:JSON.stringify({
                 title:title,
                 description:description
               }),
               headers:{"content-type":"application/json"}
              })
              .then(()=>{alert("todo added")})  
        }}        
           >Add Todo</button>
        </>
}
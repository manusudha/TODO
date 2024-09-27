const express= require("express");
const app = express()
require("dotenv").config();
const {CheckTitleDescription,CheckId} =require("./Check.js")
const {todo} =require("./DB/db.js");
const cors =require("cors")
app.use(cors());
app.use(express.json());

// post 
const port =3000
app.post("/todos",async(req,res)=>{
const payLoad=req.body
const title=req.body.title;
const description=req.body.description;
//check whther the body is valid or not
const isCorrect= CheckTitleDescription.safeParse(payLoad)
if(!isCorrect.success){
     res.status(401).json({
        msg:"you sent the wrong input"
     })
     return ;
   }
  await todo.create({
    title:title,
    description:description,
    completed:false
}).then(()=>{
     res.status(404).json({msg:"todo created"})
})
})
//get
app.get("/showtodo",async(req,res)=>{
     const todos= await todo.find({});
     res.json({
        todos
     })
      
})

//update 
app.put("/completed",async(req,res)=>{
    const IdBody=req.body
    const isCorrect= CheckId.safeParse(IdBody)
    if(!isCorrect.success){
          res.status(411).json({msg:"u have sent a wrong input"})
          return
    }
     await todo.updateOne({ 
        _id:IdBody.id
     },{
           completed:IdBody.completed,
           
   
     })
     res.status(402).json({
        msg:"todo updated"
     })

    
})





app.listen(port,()=>console.log(`app running on port ${port} enjoy ! `))


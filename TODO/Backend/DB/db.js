const mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_CONNECTION_LINK)
const Description_Title_Schema= mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean
})
const todo= mongoose.model("Description_Title_Table",Description_Title_Schema);

module.exports={todo};
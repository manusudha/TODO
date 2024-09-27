const z =require("zod")
const CheckTitleDescription=z.object({
    title:z.string(),
    description:z.string()

});
const CheckId=z.object({
    id :z.string(),
    completed:z.boolean()
});


module.exports={
CheckTitleDescription,
CheckId
}

import express from "express";
const app = express();

const PORT = 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${8080}`));

app.get("/",(req,res)=>{
    res.send("<h1>Versiones git</h1>")
});

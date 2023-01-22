import express from "express";
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.get("/",(req,res)=>{
    res.send("<h1>Versiones git</h1>")
});

app.get("/home",(req,res)=>{
    res.send("<h1>Bienvenido</h1>")
});

app.get("/users",(req,res)=>{
    res.json({
        users:[
            {username:"gian"},
            {username:"enzo"},
            {username:"maxi"}
        ]
    })
})
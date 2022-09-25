const express=require ("express");
const app = express();

const DBconnect=require("./DBconncet");

DBconnect();
app.get("/",(req,res)=>{
    res.send("hello");
});


const PORT = 3000;
app.listen(PORT,(err)=> err? console.log(err) : console.log("server is running")
);

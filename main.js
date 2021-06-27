const express=require("express");
app=express();
const Manager=require("./index");
const emailManager=new Manager({email:guest});
app.get('/', (req, res)=>{
    console.log(req.secrets.login);
    //outputs "guest"
    emailManager.addSecret("password", "new secret");
    console.log(req.secrets.password);
    //outputs "new secret"
});
app.get('/n', (req, res)=>{
    res.send(req.secrets.password);
})
app.listen(port, console.log(`listening on ${port}`))

const express=require("express");
const colors=require("colors");
const modulee=require("./hello.cc");
console.log(modulee);
const port=process.env.PORT || 3000;
app=express();
const Manager=require("./index");
const emailManager=new Manager();
app.use(emailManager.middleware);
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
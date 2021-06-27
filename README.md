# This package is a middleware for managing secrets to not show the client
## This is mainly meant to be used with express.js
## Installation
`npm install secretify`
## Usage
```
const express=require("express");
app=express();
const Secret=require("secretify");
const port=process.env.PORT || 3000;
const manager=new Secret({login:'guest'});
app.use(manager.secretify);
app.get('/', (req, res)=>{
    console.log(secrets.login);
    //outputs "guest"
    secretify.addSecret("password", "new secret");
    console.log(req.secrets.password);
    //outputs "new secret"
})
app.listen(port, console.log(`listening on ${port}`));
```
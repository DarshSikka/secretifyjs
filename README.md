# This package is a middleware for managing secrets to not show the client
## This is mainly meant to be used with express.js
## Installation
```sh
npm i secretkeeper
```
## Usage
``` js
const express=require("express");
const app=express();
const secretmaker=require("./index");
const secrets=new secretmaker.Manager({username:"guest"});
const port=process.env.PORT || 3000;
app.use(secrets.middleware);
app.get('/', (req, res)=>{
    const {usernam}=req.query;
    secrets.addSecret("username", usernam);
    res.send("logged in");
});
app.get('/dashboard', (req, res)=>{
    console.log(req.secrets);
 if(req.secrets.username && req.secrets.username!="guest"){
     res.send("Logged in")
 }
 else{
     res.status(405).redirect("/");
 }
})
app.listen(port, console.log(`listening on ${port}`));
```
## Explanation
*the secretmaker package gives you a **Manager** class. we create an instance of the manager class using. Creating this needs an object, the default value for secrets*
```js
const secrets=new secretmaker.manager({username:"guest"});
```
*Secretmaker middleware needs to be used to store secrets inside of the session.*
```js
app.use(secrets.middleware);
```
*To add a secret we call:*
```js
secrets.addSecret(id, value);
//Remember, secrets is the instance of Manager class we created
```
*Whenever you specify secrets.middleware in app.use, all the secrets get stored in **req.secrets** where req is the request variable in the callback when specifying a route*
**There are 2 ways to get a secret. If you have specified the middleware, `req.secrets[secret_id]` will give you access to the secret with id of the secret_id variable. Or you can also call `secrets.getSecret(secret_id)` to get the same result**
**The third method is the `deleteSecret(id) `method- This deletes a secret with the given id**

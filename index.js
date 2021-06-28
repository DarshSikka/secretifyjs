class Manager{
    constructor(defaultSecrets){
    this.secrets=defaultSecrets;
    this.middleware=this.middleware.bind(this);
    this.addSecret=this.addSecret.bind(this);
    this.getSecret=this.getSecret.bind(this);
    if(typeof defaultSecrets!=="object"){
        console.warn("Default secrets are empty, taking them as blank");
    }
    }
    middleware(req, res, next){
        req.secrets=this.secrets;
        next();
    };
    addSecret(id, val){
        this.secrets[id]=val;
    }
    getSecret(id){
        return this.secrets[id];
    }
}
class LocalManager{
    constructor(defaultSecrets)
    {
    this.secrets=defaultSecrets;
    this.addSecret=this.addSecret.bind(this);
    }
    addSecret(id, secret){
       this.secrets[id]=secret;
    }
    getSecret(id){
        return this.secrets[id];
    }
}
module.exports=Manager;
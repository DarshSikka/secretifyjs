class Manager{
    constructor(defaultSecrets){
    this.secrets=defaultSecrets;
    this.middleware=this.middleware.bind(this);
    this.addSecret=this.addSecret.bind(this);
    this.getSecret=this.getSecret.bind(this);
    if(typeof defaultSecrets!=="object"){
        console.warn("\x1b[33m%s\x1b[0m","Default secrets are not an object, taking them as blank object");
        this.secrets={};
    }
    }
    middleware(req, res, next){
        req.secrets=this.secrets;
        console.log(this.secrets);
        next();
    };
    addSecret(id, val){
        this.secrets[id]=val;
    }
    getSecret(id){
        return this.secrets[id];
    }
    deleteSecret(id){
        delete this.secrets[id];
    }
}
module.exports={Manager};
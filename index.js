class Manager{
    constructor(env){
    this.secrets=env;
    this.secretify=this.secretify.bind(this);
    this.addSecret=this.addSecret.bind(this);
    }
    secretify(req, res, next){
        if(req){
            console.log("exists");
        }
        else{
            console.log("not exists");
        }
        req.secrets=this.secrets;
        next();
    };
    addSecret(id, val){
        this.secrets[id]=val;
    }
}
module.exports=Manager;
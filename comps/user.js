let user ={
    name:"guest",
    login:()=>{
        fetch('/user/login', {body:{name:"erkintek@gmail.com", password:"123456"}}). then(r=>r.json()).then(r=>{
            if(!r.err){
                this.name   = r.err;
                this.status = r.status;
                return
            }
            console.log(r.err)
           })
    }
};
export user;
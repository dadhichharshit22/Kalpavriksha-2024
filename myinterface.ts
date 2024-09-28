interface User {
    readonly dbId:number,
    email:string,
    UserId: number,
    googleId?:string,
    //startTrail:()=>string
    startTrail():string,
    getCoupan(Coupanname:string,value:number):number,
}
// This is called Reopening interface 
interface User{
    githubToken:string
}

interface Admin extends User{
    role:"Admin" | "ta" | "learner"
}

const hitesh :Admin = {dbId:734,email:"h@h.com",role:"Admin",UserId:234,googleId:"hars",githubToken:"github",startTrail:()=>{
    return "Trail started";
},getCoupan:(name:"hjcdbc",off:383)=>{
    return 23;
}};

hitesh.email = "hah@gmail.com";
//hitesh.dbId = 33;   this can't work
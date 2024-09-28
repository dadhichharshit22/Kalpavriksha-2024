function addTwo(num:number):number{
   // num.toUpperCase(); // this convert the  num into string using 
   // return num+2;
   return 9;   // in next video we can return accurat value
}
let myvalue = addTwo(5);

function getUpper(val:string){
return val.toUpperCase();
}
//getUpper(4) // this is show the error in this function 
getUpper("harshit");


function SignUpUser(name:string,emailid:string,isPaid:boolean){

}


let loginUser = (name:string,emailid:string,isPaid:boolean = false)=>{

}
loginUser("h","h@gmail.com");

// var loginUser = function (name,email,isPaid){
    
//         if(isPaid==void 0)
//         {
//             isPaid = false;
//         }
    
// };

// function getValue(myValue):boolean{
// if(myValue>5){
//     return true;
// }
// return "200 ok"
// }

const getHello = (s:string):string =>{
    return "";
}
const heros = ["thor","sipderman","ironman"];
//const heros=[1,2,3];
heros.map((hero:string):string=>{
    return 'hero is ${hero}'
})


function consoleError(errmsg:string):void{
console.log(errmsg);
}

function handleError(errmsg:string):never{
  throw new Error(errmsg);
}
export {};
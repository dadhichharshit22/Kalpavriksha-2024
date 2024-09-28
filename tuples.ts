//  const User: (string | number)[] = [1,"hc"];
let tUser:[string,number,boolean] 
tUser = ["hc",1,true];

let rgb : [number,number,number] = [255,123,121];

type User = [number,string];
const newUser:User = [112,"harshit@gmail.com"];
newUser[0] = 1;
newUser[1]= "dad";
newUser.push(1); // do not support true in this
export {};
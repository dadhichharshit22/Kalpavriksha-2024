let score: number | string = 33
score = 33
score = "55"


type User = {
    name:string
    id:number
}


type Admin = {
    username:string
    id:number
}


let hitesh: User | Admin = {name:"hitesh", id:334};

hitesh = {username:"hc",id:334};


// function getDBID(id:number | string){
//  // making some API calls

//  console.log('DB id is: ${id}');
// }
getDBID(3);
getDBID("3");

function getDBID(id:number | string){
    if(typeof id === "string"){
     id.toLowerCase();
    }
   }

   // array

   const data:number[] = [1,2,3,4]
   const data1:string[] = ["1","2","3","4"]
   const data2:string[] | number[] = ["1","2","3","4"] // it all the number or string not both 
   const data3:(string | number | boolean)[] = ["1","2","3","4",6,true]
   const data4:any[] = ["1","2","3","4",6,true]


   let pi:3.14 = 3.14  // this strict towards the pi value
   //pi = 32;  // this can't change the value of pi it is fixed 

   let seatallotment : "aisle" | "middle" | "window"

   seatallotment = "aisle"
   //seatallotment = "crew"; // this is not allowed to allocated these 
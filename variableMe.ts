let greetings: string = "Harshit dadhich";

//greetings = 6;
greetings.toLowerCase();
console.log(greetings);

let mynum = 6;
//mynum.toUpperCase();  does not support a these function 

//mynum.toLowerCase();  does not suport a these function 



// number

let UserId:number =  742898277.548;
// for good  pratice 
//var UserId = 742898277.548;
// for bad pratice
//var num: number = 378748328;
UserId.toFixed();
//UserId = "harshit";

// boolean
let isLoggedIn: boolean = false;

// any
let hero:string;
function gethero(){
    return "thor"; // true    //=> this break the consistence of the code

}
hero = gethero();
export {};
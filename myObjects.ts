// const User = {
//     name:"harshit",
//     Email:"hitesh@gmail.com",
//     isActive:true

// }

// function createUser({name:string,isPaid:boolean}){

// }
// let newUser = {name:"harshit",isPaid:false,email:"h@gmail.com"};
// createUser(newUser);


// function CreateCourse():{name:string,price:number}{
//     return {name:"ReactJS",price:300};
// }



// // Type Aliases
// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// //type Mystring = string; // i don't understand but technically allowed

// function createUser(user:User):User{
// return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true});


// ReadOnly and optional in typescript

// type User={
//     readonly _id:string
//     name:string
//     email:string
//     isActive:boolean
//     creditcardDetails?:number // it look like optional it does not required to fill
// }

//exports.__esModule = true;
// var myUser:User = {
//     _id:"1245",
//     name:"h",
//     email:"h@gmail.coim",
//     isActive:false,


// }


//myUser.email = "h@gmail.com";
//myUser._id = "268";

type CardNumber = {
    cardnumber:string
}

type CardDate = {
    cardDate:string
}

type cardDetails = CardNumber & CardDate & {
   cvv:number
}

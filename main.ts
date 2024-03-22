#! /usr/bin/env node  //it is called SHAHBANG.
import inquirer from "inquirer";
async function calculator(){
let answer=await inquirer.prompt([
    {message:"Enter Your First Number",type:"number",name:"firstnumber"},
    {message:"Enter Your Second Number",type:"number",name:"Secondnumber"},
    {
        message:"Select one operator to perform task",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division","percentage" ,"Modulas","Exponent"]  
    },

]);
if(answer.operator==="Addition"){
    console.log(answer.firstnumber+answer.Secondnumber);
}
else if(answer.operator==="Subtraction"){
    console.log(answer.firstnumber-answer.Secondnumber);
    
}
else if(answer.operator==="Multiplication"){
    console.log(answer.firstnumber*answer.Secondnumber);
    
}
else if(answer.operator==="Division"){
    console.log(answer.firstnumber/answer.Secondnumber);
}

else if(answer.operator==="percentage"){
    console.log(answer.firstnumber/answer.Secondnumber*100,"%");
}
else if(answer.operator==="Modulas"){
    console.log(answer.firstnumber%answer.Secondnumber);
}
else if(answer.operator==="Exponent"){
    console.log(answer.firstnumber**answer.Secondnumber);
}
else{
    console.log("You Entered Invalid operator");
    return calculator(); //Ask for input again
}


const {again} =await inquirer.prompt({
    type:"confirm",
    name:"again",
    message:"Do you want to perform another calculation",

})
if(again)
calculator();
else 
     console.log("Allahafiz....");
     
    }

calculator();






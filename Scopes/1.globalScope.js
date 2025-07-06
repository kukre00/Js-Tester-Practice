//Global Scopes

//The Variables are declared outside of the function

var varID = "02-02-02";
let letID = "10-20-30";
const iD = "24-12-42";

function globalScope(){

    console.log(varID);
    console.log(letID);
    console.log(iD);
}

/*
console.log(`Global VarID: ${varID}`);
console.log(`Global LetID: ${letID}`);
console.log(`GLobal ConstID: ${iD}`);
*/

//Another way to show the output
globalScope()
//Block Scope

//The variable declared with let and const inside in the block

function blockScope(){
    let firstWord = "Hello";

    //The variable declared with let in this block is only accessible on this block
    if (true){
        let secondWord = "World";
        console.log(secondWord);

    }

    console.log(firstWord); //When you try to print the secondWord here, the code will cause an error
    
}

blockScope();
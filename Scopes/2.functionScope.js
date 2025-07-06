//Function Scope

//The Variable declared with var inside of the block

function functionScope(){

    var firstWord = "Hello";

    if (true){
        var secondWord = "World";

    }

    console.log(firstWord);
    console.log(secondWord);

}

functionScope()

/*
The Function scope are for the inside of the function only.
If you try to declared the inside variable to the outside variable, the output will be error
*/
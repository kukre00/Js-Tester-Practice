/*
For Loop
 for(let i = 0; i < 5; i++){
    console.log("Print" +  i)
 }
*/

/*For in loop
let obj ={a: 5, b: 10, c: 15}
for(let key in obj){
    console.log(key + obj[key])
}
*/

/* For of loop
let arrayList = [1,2,3,4,5]

for(let value of arrayList){
    console.log(value);
}
*/

//Nested Loop
let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <= num; i++) {    //first 'for loop' for horizontal lines
        for (let j = 1; j <= i; j++) {      //second 'for loop' to print star
            pattern += "* ";    //adding * to pattern string
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}

/*
While loop
let i = 0

while(i < 5){
    console.log("Print "+i)
    i++
}
*/

/*
Do while
key = 0

do{
 console.log("Press this key " + key)
 key++
}while(key < 5)
*/

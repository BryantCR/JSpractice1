/*let num1 = 24;
let num2 = 11;
let num3 = 35;

if(num1>=num2&&num1>=num3){
    if(num3>=num2){
        console.log("Order of the numbres: ", num1, num3, num2 );
    }
    else{
        console.log("Order of the numbres: ", num1, num2, num3 );
    }
}
else{
    if(num2>=num1&&num2>=num3){
        if(num1>=num3){
            console.log("Order of the numbres: ", num2, num1, num3 );
        }
        else{
            console.log("Order of the numbres: ", num2, num3, num1 );
        }
    }
    else{
        if(num3>=num1&&num3>=num2){
            if(num2>=num1){
                console.log("Order of the numbres: ", num3, num2, num1 );
            }
            else{
                console.log("Order of the numbres: ", num3, num1, num2 );
            }
        }
    }
}*/
/*
    if( condition/expression ){
        // Do something here if it is true
    }
    else{
        // Do something if it is false
    }
*/

let weather = "windy";

if( weather === "sunny" ){
    console.log( "It is a good day to go to beach" );
}
else{
    if( weather === "rainy"){
        console.log( "It is raining, not good to go to the beach =( " );
    }
    else{
        if( weather === "cloudy" ){
            console.log( "Might not be a good day to go to the beach, as it may raining later" );
        }
        else{
            console.log( "It might be windy, maybe we could go to the beach" );
        }
    }
}


let examGrade = 60;

if( examGrade >= 70 ){
    console.log( "Congratulations you passed!" )
    if( examGrade === 100 ){
        console.log( "You nailed the exam!!!" );
    }
}
else{
    console.log( "You didn't pass today, but you may attempt it a second time!" );
}
let numers;
console.log( numers );
let num1 = 24;
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
}
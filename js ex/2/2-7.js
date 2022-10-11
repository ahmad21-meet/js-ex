const mers = (char , num1 , num2) =>{
    if(char == "+"){
        return console.log(num1+num2);
    }
    else if (char == "*"){
        return console.log(num1*num2);
    }

    else if (char == "-"){
        return console.log(num1-num2);
    }

    else if (char == "/"){
        return console.log(num1/num2);
    }

}
mers("+" , 3 ,5)
mers("*" , 3 ,5)
mers("-" , 3 ,5)
mers("/" , 15 ,5)
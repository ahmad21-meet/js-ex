
const repeatStr = (number, string) =>{
    let str = '';
    for (let index = 0; index < number; index++) {
        str += string;
    }
    return str;
 };
 console.log(repeatStr(6, "I"));
 console.log(repeatStr(5, "Hello"));
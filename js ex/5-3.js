const toCamelCase = (string) => {
    string = string.split('');
    let res = string.map((el,i)=>{
       if( el == '-' || el == '_' ){
          el = string[i+1].toUpperCase();
          string.splice(i+1,1);
       }
       return el
    }).join('');
    return res;
 };
 console.log( toCamelCase("The_stealth_warrior"));
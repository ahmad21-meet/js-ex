
const abbreviateTwoWords = (string) => {
    let array = string.split(' ');
    return array.map((el)=>{
       return el[0].toUpperCase()
    }).join('.');
 };
 console.log(abbreviateTwoWords('Sam Harris'));
 console.log(abbreviateTwoWords('Patrick Feeney'));

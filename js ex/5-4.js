function toWeirdCase(string){
    let array = string.split(' ');
    return array.map((el,i)=>{
       let arr = el.split('')
       return arr.map((element,index)=>{
          if( index == 0 || index % 2 == 0 ) {   
             element = arr[index].toUpperCase();
          }
          if(  index % 2 !== 0 ) {   
             element = arr[index].toLowerCase();
          }
          return element
       }).join('');
    }).join(' ');
 };
 console.log(toWeirdCase("String"));
 console.log(toWeirdCase("sTrInG"));
 console.log(toWeirdCase("wEiRd sTrInG cAsE"));
 console.log(toWeirdCase("WEiRd sTrInG case"))
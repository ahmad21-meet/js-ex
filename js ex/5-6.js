function maskify(string){
    let array = string.split('');
    if(array.length>4){
       for(let i = 0; i < (array.length-4); i++){
          array[i]='#';
       };
    };
    return array.join('');
 }; 
 
 console.log(maskify("4556364607935616"));
 console.log(maskify("64607935616"));
 console.log(maskify("1"));
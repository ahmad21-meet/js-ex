function trimming(string){
    if(string.length==2){
       return string
    }
    else{
       let array = string.split('');
       array.pop();
       array.shift();
       array.join('')
       return array.join('');
    }
 };
 let str='Ahmad';
 console.log(trimming(str));
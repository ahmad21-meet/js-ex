let str = 'ass babe goood nikeee adidass boozzzzz marijuana';
const shortestWords = (string)=>{
   return string.split(' ').sort( (a,b) => a.length-b.length).shift().length
};
console.log(shortestWords(str));
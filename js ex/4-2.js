const tribonacci = (num = 1) => {
    if (num === 0 || num === 1 || num === 2){
       return 0;
    };
    if (num == 3){
       return 1;
    }else{
       return tribonacci(num - 1) +
       tribonacci(num - 2) +
       tribonacci(num - 3);
    }
 }
 const trib = num => {
    const res = [];
    for (let i = 1; i <= num; i++){
       res.push(tribonacci(i));
    };
    return res
 };
 console.log(trib(9));
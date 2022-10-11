function findNextSquare(sq){
    var root1;
    var nextroot;
    if(Math.sqrt(sq)%1 ===0){
         root1=Math.sqrt(sq)
         nextroot=root1+1
    }else{
        return console.log(-1) ;
    }
    return console.log (`${nextroot*nextroot} is a perfect number`);
}

findNextSquare(114) 
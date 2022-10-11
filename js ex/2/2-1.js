function sumTwoSmallestNumbers(numbers) {  
    var ordered = numbers.sort(function(a,b){return a-b;});
    var result=0;
    
    for(i=0; i<ordered.length; i++){
      if(i==0){
        result+=ordered[0];
      }
      if(i==1){
        result+=ordered[1];
      }
    }
    return  console.log(result);
  };
  sumTwoSmallestNumbers([5, 1, 12, 19, 22]);

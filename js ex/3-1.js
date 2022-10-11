function nbYear(p0, percent, aug, p) {
      var finalCatch = [];
    var percent = percent / 100;
    for(var p0; p0 < p; p0+=p0*percent+aug) {
          currValue = p0 + p0 * percent + aug;
          finalCatch.push(currValue);
      }
    
      return console.log(finalCatch.length);
    }
    nbYear(1500, 5, 100, 5000);
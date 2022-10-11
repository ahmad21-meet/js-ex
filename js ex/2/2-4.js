function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return console.log(arr[0]==arr[1]?arr.pop():arr[0])
  }
  findUniq([2,2,2,2,2,9,2,2,2])
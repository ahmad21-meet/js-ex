const arr =[[10,5], [13,2],[15,8],[50,55],[30,25]];
let count_on= 0;
let count_of = 0;
let x =0;

const lek =(arr) =>{
    for (let element of arr){
        count_on+=element[0]
        count_of+=element[1]
     }
    x = count_on - count_of;
    return console.log(x);

}
lek(arr)
const number = [1,2,3,4,5,6,7,8,9];

let result = number.filter((ele,index)=>{
    return ele%2==0
})

console.log(result);
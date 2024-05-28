const user = [
    {
        name : "Faiz",
        age : 20
    },
    {
        name : "Vidhi",
        age : 50
    },
    {
        name : "Mayank",
        age : 25
    }
]
var ageSum = 0;


user.forEach((ele,index)=>{
    ageSum = ageSum + ele.age;
})

console.log(ageSum);


// Pending
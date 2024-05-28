const users = [
    {
        name : "Faiz",
        age : 20
    },
    {
        name : "Faisal",
        age : 50
    },
    {
        name : "Vidhi",
        age : 80
    },
    {
        name : "Monku",
        age : 10
    },
    {
        name : "Raj",
        age : 18
    },
    {
        name : "Raj",
        age : 15
    }
]

const result = users.filter((ele,index)=>{
    return ele.age > 18
})

console.log(result);









const user=[
    {
        firstName : "Faiz",
        lastName : "Samjani"
    },
    {
        firstName : "Faisal",
        lastName : "Baadi"
    },
    {
        firstName : "Vidhi",
        lastName : "Bhimani"
    }
]

user.forEach((ele,index)=>{
    console.log(ele.firstName + " " + ele.lastName);
})
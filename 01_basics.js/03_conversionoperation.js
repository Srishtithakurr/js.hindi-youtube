let score = 33
console.log(score) //prints 33

let wrong_score = "33abc"
console.log(wrong_score)//prints 33abc

//now trying to convert it into number
console.log(Number(wrong_score))//prints NaN(means not a number)

let srishti = true
let according_to_me = Number(srishti)
let srish = false
let according_to_Parth = Number(srish)
console.log(according_to_me,according_to_Parth)

//now we will convert into boolean
let Srishti = 0
let Parth = 1
console.log(Boolean(Srishti,Parth))//will print only false 
//Boolean designed for only one single value

console.table([Boolean(Srishti),Boolean(Parth)]) //correct way

const the_reality_table = [
    { name: 'Srishti', result: Boolean(Srishti)},
    { name: 'Parth', result: Boolean(Parth)}
]

console.table(the_reality_table)
console.log(the_reality_table)





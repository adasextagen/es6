
const onloadFuncion = function() {
    let name, last_name, full_name
    if(true){
        //var name = 'bertilda'
        name = 'bertilda'
        last_name = 'perez'
        full_name = `${name} ${last_name}`
    }
    //console.log(name)
    //console.log(last_name)
    //console.log('Hola, mi nombre es '+ name + ' ' + last_name)
    
    //String Literal
    //console.log(greet(name))
    //greet(name)
}

// arrow functions
const printName = (a, b) => `${a} ${b}` 

// ES6
const greet = name => `Hola, ${name}, es un placer.`

// ES5
var greetEs5 = function(name){
    var greet = 'Hola, '+name+' '+', es un placer.'
    return greet
}

let character = ['toñio', 'cecilia']
let deadCharacters = ['lord friendzone', 'Drogón']
let newCharacters = [...character, ...deadCharacters]

let person = {
    name:'juan',
    last_name:'de las nieves',
    role: 'Rey del norte',
    pet:{
        pet_name:'ghost', 
        color:'white', 
        type:'wolf', 
        isLoved: false
    }
}


const greetJonAndGhost = ({name, pet:{pet_name}}) =>{
    console.log(`hola ${name} y ${pet_name}`)
}
/*
const greetJonAndGhost = (data) =>{
    console.log(`hola ${data.name} ${data.last_name}`)
}
*/

//greetJonAndGhost(person)

let newPerson = {...person, role:'exiliado'}

//console.log(person, newPerson)

let personal_information = {
    first_name:'',
    last_name:'',
    email:'',
    dni:''
}

let values = {
    first_name:'',
    last_name:'',
}

let newInformation = {...personal_information, ...values}

//newCharacters[2] = 'Jaime el mocho'
//console.log(newCharacters)


const dragons = [
    {name:'drogon', color:'black', status:undefined},
    {name:'viseryon', color:'green', status:'dead'},
    {name:'Raeghar', color:'red', status:'dead'}
]
let newDragon = {...dragons[0], name:'pity'}
//console.log(newDragon)
dragons.push(newDragon)

dragons.map( ({name}) => {
    //console.log(name)
})

const sumar = (params) => params.a + params.b

console.log(sumar({a:2,b:4}))




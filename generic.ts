function fruits<T>(name:T):T{
    return name
}

let onlyFruit=fruits("apple")
let onlyNum=fruits(100)
let onlyBool=fruits(true)

// <T> declares a generic type parameter.

//Using Arrays

function Users20<T>(names:T):T{
    return names
}

let usersCollection=Users20(['A','B','C','D'])
let usersCollection2=Users20([10,20,30,40])

console.log(usersCollection2);

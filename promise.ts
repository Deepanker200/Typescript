// function complexLogic():Promise<string> {
//     return new Promise((resolved) => {
//         setTimeout(() => resolved("Result is here"), 2000)
//     })
// }

// complexLogic().then((data:string) => {
//     console.log(data)
//     test2()
// })

// function test2() {
//     console.log("Test 2");
// }

type resultType={
    name:string,
    id:number
    email:string
}

function complexLogic():Promise<resultType> {
    return new Promise((resolved) => {
        setTimeout(() => resolved({
            name:"Deep",
            id:101,
            email:"Deep@gmail.com"
        }), 2000)
    })
}

complexLogic().then((data:resultType) => {
    console.log(data)
    test2()
})

function test2() {
    console.log("Test 2");
}
function getInfo(){
    const nameInput=document.getElementById('username') as  HTMLInputElement
    // console.log(nameInput);
    // console.log(nameInput.value);
    const name:string=nameInput.value
    
    const emailInput=document.getElementById('email') as  HTMLInputElement
    const email:string=emailInput.value

    const ageInput=document.getElementById('age') as  HTMLInputElement
    const age:number=Number(ageInput.value)
    
    console.log(name,email,age);
    
}
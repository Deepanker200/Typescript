interface Info{
    name:string,
    age:number,
    college:string
}

interface TeacherType extends Info{
    subject:string
}

var studentObj:Info={
    name:"Deepanker",
    age:30,
    college:"SIMS"
}

var teacherObj:TeacherType={
    name:"Rakesh",
    age:55,
    college:"SIMS",
    subject:"Python"
}

console.log(teacherObj);

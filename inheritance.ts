export class Auth{
    login(name:string,password:string){
        if(name && password){
            return "Login Successfully"
        }else{
            return "Not Logined"
        }
    }

}


class Student extends Auth{
    
    result(marks:number){
        if(marks<33){
            return 'Fail'
        }
        else{
            return "Pass"
        }
    }
}

var s1=new Student()
console.log(s1.result(79))


class Teacher extends Auth{


    subject(subject:string){
        return `He teaches ${subject}`
    }
}

var t1=new Teacher()
console.log(t1.login("Ram",'Ram123'));

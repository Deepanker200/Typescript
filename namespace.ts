export namespace UserNameSpace {
    export class Auth {
        login() {
            console.log("User Login Function");
        }
    }

    export function getList() {
        console.log('List of users: ',apiURL);
    }

    const apiURL="www.typescript.com"

}

export namespace AdminSpace {
    export class Auth {
        login() {
            console.log("User Login Function");
        }
    }

    export function getList() {
        console.log('List of users');
    }
}

// var user8 = new UserNameSpace.Auth()
// user8.login()

// UserNameSpace.getList()
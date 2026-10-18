export var UserNameSpace;
(function (UserNameSpace) {
    class Auth {
        login() {
            console.log("User Login Function");
        }
    }
    UserNameSpace.Auth = Auth;
    function getList() {
        console.log('List of users: ', apiURL);
    }
    UserNameSpace.getList = getList;
    const apiURL = "www.typescript.com";
})(UserNameSpace || (UserNameSpace = {}));
export var AdminSpace;
(function (AdminSpace) {
    class Auth {
        login() {
            console.log("User Login Function");
        }
    }
    AdminSpace.Auth = Auth;
    function getList() {
        console.log('List of users');
    }
    AdminSpace.getList = getList;
})(AdminSpace || (AdminSpace = {}));
// var user8 = new UserNameSpace.Auth()
// user8.login()
// UserNameSpace.getList()
//# sourceMappingURL=namespace.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WhoType;
(function (WhoType) {
    WhoType["s"] = "student";
    WhoType["t"] = "teacher";
    WhoType["m"] = "management";
    WhoType["l"] = "labStaff";
})(WhoType || (WhoType = {}));
var who = WhoType.m;
console.log(who);
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["user"] = 1] = "user";
    Roles[Roles["superuser"] = 2] = "superuser";
})(Roles || (Roles = {}));
var role = Roles.user;
console.log(role);
//# sourceMappingURL=enum.js.map
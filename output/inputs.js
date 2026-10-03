"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    const nameInput = document.getElementById('username');
    // console.log(nameInput);
    // console.log(nameInput.value);
    const name = nameInput.value;
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const ageInput = document.getElementById('age');
    const age = Number(ageInput.value);
    console.log(name, email, age);
}
//# sourceMappingURL=inputs.js.map
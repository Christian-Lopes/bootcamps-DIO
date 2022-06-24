"use strict";
const nameInput = document.getElementById('name');
const btnName = document.getElementById('btn-name');
function printName(name) {
    return console.log(name);
}
if (btnName) {
    btnName.addEventListener('click', () => {
        printName(nameInput.value);
    });
}

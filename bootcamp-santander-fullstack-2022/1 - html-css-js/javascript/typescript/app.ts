
const nameInput = document.getElementById('name') as HTMLInputElement;
const btnName = document.getElementById('btn-name');

function printName(name: string){
    return console.log(name);
}

if(btnName){
    btnName.addEventListener('click', () => {
        printName(nameInput.value);
    })
}

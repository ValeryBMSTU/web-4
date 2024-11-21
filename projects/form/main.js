function myFunc() {
    let nameInput = document.getElementById("name");
    let surnameInput = document.getElementById("surname");
    if (nameInput.value != "" && surnameInput.value !=""){
        let resultElement = document.getElementById("result");  
        resultElement.textContent = "Здравствуйте, " + nameInput.value + " " + surnameInput.value + "!";
    } else{
        alert("Вы не заполнили поля!");
    }
}  
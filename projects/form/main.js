btn = document.querySelector("#button")
result= document.querySelector("#result")
inputName = document.querySelector("[name=inputName]")
inputSurname = document.querySelector("[name=inputSurname]")

btn.addEventListener("click",function(){
    result.textContent = `Здравствуйте,  ${inputName.value} ${inputSurname.value}`;
})
btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result"); 
radioButtons = document.querySelectorAll('[name="food"]');
resultElement.textContent = "0 руб"

btnElement.addEventListener("click", function(){ 
    let selectedContactValues = [];                
    for (const radioButton of radioButtons){     
        if(radioButton.checked){                  
            selectedContactValues.push(radioButton.value); 
        }
    }
    resultElement.textContent = `${selectedContactValues.reduce((a, b) => parseInt(a) + parseInt(b), 0)} руб`;
});

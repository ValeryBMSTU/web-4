checkBoxes = document.querySelectorAll('[name=food]'); 
btnElement = document.querySelector('.btn');
result = document.querySelector('.result');

btnElement.addEventListener('click', function(){
    total = 0; 
    for (const checkBox of checkBoxes){
        if(checkBox.checked){
            total=total + parseInt(checkBox.value)
        }
    }
    result.textContent = `${total} руб.`;
})
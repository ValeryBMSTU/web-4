btnElement = document.querySelector(".btn"); //получаем элемент с классом btn
resultElement = document.querySelector(".result"); //получаем элемент с классом result
radioButtons = document.querySelectorAll('[name="food"]'); //получаем список всех checkbox элементов

btnElement.addEventListener("click", function(){  //по нажатию на кнопку Отправить
    let cost=0;
    for (const radioButton of radioButtons){      //для каждой checkbox-кнопки из списка checkbox-кнопок
        if(radioButton.checked){                  //если checkbox-кнопка выбрана
            cost += parseFloat(radioButton.value)
        }
    }
    if (cost != 0) { //если список не пустой (т.е. длина списка  не равна 0)
        resultElement.textContent = cost + " руб"
    } else {
        resultElement.textContent = "ничего не выбрано." //иначе записываем в result, что ничего не выбрано
    }
});

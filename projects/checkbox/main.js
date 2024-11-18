let total = 0;  
let check = document.querySelectorAll('[name = "food"]');
let btn = document.getElementById("btn");
let rez = document.getElementById("result");
let k = document.querySelectorAll('[name = "kol"]');
btn.addEventListener("click", function(){
    total = 0;
    for(let i = 0; i < check.length; i++){
        if(parseInt(k[i].value) < 0){
            alert("Количество товаров не может быть отрицательным");
            return;
        }
        if(check[i].checked){
            total += (parseInt(check[i].value)*parseInt(k[i].value));
        }
    }
    rez.innerHTML = total;
}); 

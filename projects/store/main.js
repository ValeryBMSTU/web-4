let btn = document.querySelector("#btn");
let goods = document.querySelectorAll('[name = "good"]');
let k = document.querySelectorAll('[name = "kol"]');

function onCheckboxEvent(obj){
    if(obj.checked){
        obj.parentElement.querySelector(".num").value = "1";

    }else{
        obj.parentElement.querySelector(".num").value = "0";
    }
}
btn.addEventListener("click",function(){
    let total = 0;
    
    for(let i = 0; i < goods.length;i++){
        if(goods[i].checked){
            console.log(parseInt(k[i].value));
            total += parseInt(goods[i].value)*parseInt(k[i].value);
            if(isNaN(parseInt(k[i].value)) || parseInt(k[i].value) < 0 || k[i].value != String(parseInt(k[i].value))){
                alert("Введите корректное число всех товаров");
                total = 0;
                for(let i = 0; i < k.length; i++){
                    k[i].value = "0";
                }
                return;
            }
        }   
    }
    alert(`Общая стоимость товаров ${total}`)
}); 
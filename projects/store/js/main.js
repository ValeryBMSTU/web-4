const userSurname = document.querySelector('[name="surname"]');
const userName = document.querySelector('[name="name"]');

const goodsElements = document.querySelectorAll('[name="goods"]');
const countElements = document.querySelectorAll('[type="number"]');

const btn = document.querySelector(".btn");
const resultElem = document.querySelector(".sum");

let s = 0;

const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

function count() {
    s = 0;
    for (var key in countGoods) {
        s += countGoods[key] * choicePriceGoods[key];
    }
    resultElem.textContent = `${s} руб.`
}

countElements.forEach(elem => {
    elem.addEventListener("change", function(){
        countGoods[elem.id] = elem.value;
        if (elem.value < 0) {
            elem.value = 0;
            countGoods[elem.id] = 0;
        }
        elem.value = elem.value.replace(/^0+/, '');
        count();
    })
})

goodsElements.forEach(product => {
    product.addEventListener("change", function() {
        if (product.checked) {
            choicePriceGoods[product.dataset.goods] = product.value;
            if (countGoods[product.dataset.goods] === 0) {
                countGoods[product.dataset.goods] = 1;
                document.querySelector(`#${product.dataset.goods}`).value = 1;
            }
        } else {
            choicePriceGoods[product.dataset.goods] = 0;
            document.querySelector(`#${product.dataset.goods}`).value = 0;
            countGoods[product.dataset.goods] = 0;
        }
        count();
    })
});

btn.addEventListener("click", function() {
    let st = "";
    if (userName.value != "" || userSurname.value != "") {
        st += `Заказчик: ${userSurname.value} ${userName.value}\n`
    }
    st += `Итого: ${s} р.`
    alert(st);
})

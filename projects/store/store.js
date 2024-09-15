let buttonPlaceAnOrder = document.querySelector(".place__an__order");
let inputFirstName = document.querySelector("input[name='first__name']");
let inputSecondName = document.querySelector("input[name='second__name']");
let checkboxCoffee = document.querySelectorAll("input[name='coffee']")
let inputCountCoffee = document.querySelectorAll(".count")
let spanAmount = document.querySelector(".amountResult")

let user = {
	firstName: "",
	secondName: "",
	amount: 0
};

inputFirstName.addEventListener("change", function() {
	user.firstName = inputFirstName.value;
})

inputSecondName.addEventListener("change", function() {
	user.secondName = inputSecondName.value;
})

function calculateAmount() {
	let total = 0;
	for (let k = 0; k < checkboxCoffee.length; k++) {
		if (checkboxCoffee[k].checked) {
			total +=  parseInt(checkboxCoffee[k].dataset.price) * parseInt(inputCountCoffee[k].value);
		}
	}
	return total;
}

for (let k = 0; k < checkboxCoffee.length; k++) {
	checkboxCoffee[k].addEventListener("change", function() {
		if (checkboxCoffee[k].checked) {
			inputCountCoffee[k].value = 1;
		}
		else {
			inputCountCoffee[k].value = 0;
		}
		user.amount = calculateAmount();
		spanAmount.textContent = user.amount;
	})
}
for (let k = 0; k < checkboxCoffee.length; k++) {
inputCountCoffee[k].addEventListener("change", function() {
    if (inputCountCoffee[k].value<=0 ||((inputCountCoffee[k].value).toString().length>1 && (String(inputCountCoffee[k].value)[0]==="0"))) {
        inputCountCoffee[k].value=0;
        checkboxCoffee[k].checked=false;
    }
})
}

for (let k = 0; k < inputCountCoffee.length; k++) {
	inputCountCoffee[k].addEventListener("change", function() {
		user.amount = calculateAmount();
		spanAmount.textContent = user.amount;
	})
}

buttonPlaceAnOrder.addEventListener("click", function() {
	user.amount = document.querySelector(".amountResult").textContent;
	alert(`Заказчик: ${user.firstName} ${user.secondName}\nИтого: ${user.amount} рублей`);
})
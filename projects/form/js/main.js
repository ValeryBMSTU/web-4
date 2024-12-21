btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
first_name = document.querySelector('[name="first_name"]');
second_name = document.querySelector('[name="second_name"]');

btnElement.addEventListener("click", function() {
    resultElement.textContent = `Здравствуйте, ${first_name.value} ${second_name.value}!`
});

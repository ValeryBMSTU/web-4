let nam = document.getElementById('name');
let sur = document.getElementById('surname');
let btn = document.getElementById('btn');
let rez = document.getElementById('rez');
btn.addEventListener("click", function(){
    rez.innerHTML = `Здравствуйте, ${nam.value} ${sur.value}!`;

});

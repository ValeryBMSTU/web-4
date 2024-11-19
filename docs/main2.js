// Функция для пересчета общей суммы
function updateTotalPrice() {
    let total = 0;
    
    // Получаем все товары
    const products = document.querySelectorAll('.product');
    
    products.forEach(function(product) {
        // Проверяем, выбран ли товар (чекбокс активен)
        if (product.checked) {
            // Получаем цену и количество товара
            const price = parseFloat(product.getAttribute('data-price'));
            const quantityField = document.getElementById(`quantity${product.id.slice(-1)}`);
            let quantity = parseInt(quantityField.value);
            
            // Проверка на корректность ввода
            if (isNaN(quantity) || quantity <= 0) {
                quantity = 0; // Обнуляем некорректные значения
            }
            
            // Если товар выбран, добавляем его стоимость к общей сумме
            total += price * quantity;
        }
    });

    // Обновляем итоговую сумму на странице
    document.getElementById('totalPrice').textContent = total;
}

// Функция для обработки выбора товара (чекбокса)
function handleCheckboxChange(event) {
    const checkbox = event.target;
    const quantityField = document.getElementById(`quantity${checkbox.id.slice(-1)}`);
    
    // Если чекбокс отмечен, устанавливаем количество 1, если снят - 0
    if (checkbox.checked) {
        quantityField.value = 1;
    } else {
        quantityField.value = 0;
    }
    
    // Пересчитываем итоговую сумму
    updateTotalPrice();
}

// Функция для обработки изменения количества
function handleQuantityChange(event) {
    const quantityField = event.target;
    const value = parseInt(quantityField.value);

    // Если количество некорректное, обнуляем его
    if (isNaN(value) || value < 0) {
        quantityField.value = 0;
    }

    // Если товар не выбран, обнуляем количество
    const productCheckbox = document.getElementById(`item${quantityField.id.slice(-1)}`);
    if (!productCheckbox.checked) {
        quantityField.value = 0;
    }

    // Пересчитываем итоговую сумму
    updateTotalPrice();
}

// Функция для оформления заказа
function handleOrder() {
    const lastName = document.getElementById('lastName').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const totalPrice = document.getElementById('totalPrice').textContent;

    // Выводим модальное окно с информацией о заказе
    alert(`Заказчик: ${lastName} ${firstName}\nИтого: ${totalPrice} руб.`);
}

// Добавляем обработчики событий
document.querySelectorAll('.product').forEach(function(checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
});

document.querySelectorAll('.quantity').forEach(function(quantityField) {
    quantityField.addEventListener('input', handleQuantityChange);
});

document.getElementById('orderBtn').addEventListener('click', handleOrder);

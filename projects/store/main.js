function calculateTotal() {
    let total = 0;

    const items = [
        { checkbox: document.getElementById("item1"), qty: document.getElementById("qty1"), price: 50 },
        { checkbox: document.getElementById("item2"), qty: document.getElementById("qty2"), price: 30 },
        { checkbox: document.getElementById("item3"), qty: document.getElementById("qty3"), price: 40 },
        { checkbox: document.getElementById("item4"), qty: document.getElementById("qty4"), price: 40 },
    ];

    items.forEach(item => {
        if (item.checkbox.checked) {
            let quantity = parseInt(item.qty.value);
            if (quantity > 0 && quantity !== NaN) {
                total += item.price * quantity;
            }
        }
    });


    document.getElementById("total").textContent = total;
}

function submitOrder() {
    const firstName = document.getElementById("first-name").value || "";
    const lastName = document.getElementById("last-name").value || "";

    const total = document.getElementById("total").textContent;

    alert(`Client：${firstName} ${lastName}\n Total：${total}p`);
}

document.querySelectorAll("input[type='checkbox'], input[type='number']").forEach(input => {
    input.addEventListener("change", calculateTotal);
});

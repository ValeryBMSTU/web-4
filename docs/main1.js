document.getElementById('Btn').addEventListener('click', function() {
  
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    

    let totalCost = 0;

 
    checkboxes.forEach(function(checkbox) {
        totalCost += parseInt(checkbox.value); 
    });


    document.getElementById('totalCost').textContent = totalCost;
});

document.addEventListener('DOMContentLoaded', () => {
    $('#send').on('click', () => {
        let name = $('#name').val()
        let lastname = $('#lastname').val()
        if (name.match('^[A-Za-zа-яА-ЯёЁ]{2,15}$') && lastname.match('^[A-Za-zа-яА-ЯёЁ]{2,15}$')) {
            $('#res').text(`Здравствуйте, ${name} ${lastname}!`)
        } else {
            alert(`Имя и/или фамилия ${name} ${lastname} некорректные!`)
        }
    })
})
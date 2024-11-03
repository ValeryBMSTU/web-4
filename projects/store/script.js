var l = console.log
document.addEventListener('DOMContentLoaded', () => {
    $('.check_n_text').map((idx, el) => {
        $(el).on('click', function (){
            let check_n_text = $(this)
            let checkbox = $(this).children('.custom_checkbox').eq(0)
            let count = check_n_text.siblings('input.product_count').eq(0)

            if (checkbox.data('checked')) {
                checkbox.css('background-color', '#817170')
                checkbox.data('checked', false)
                count.val(0)
                count.attr('disabled', 'disabled')
                
            } else {
                checkbox.data('checked', true)
                checkbox.css('background-color', '#6A4546')
                count.val(1)
                count.removeAttr('disabled')
            }

            recalc()
        })

    })

    $('.product_count').map((idx, el) => {
        let input = $(el)

        input.on('input', () => {
            input.val(input.val().replace(/^0+/, ''))
            if (Number(input.val()) > 99) input.val(99)
            if (Number(input.val()) < 1) input.val(1)

            recalc()
        })
    })

    $('.size_selector').map((idx, el) => $(el).on('click', () => {
        let cost = $(el).parent().siblings('.check_n_text').eq(0).children('.product_cost').eq(0)

        // Установка стоимости
        cost.html(Number(cost.data('default')) * Number($(el).data('koef')))

        // Изменение бордера для селекторов размера
        $(el).addClass('size_selector_actived')
        $(el).siblings().map((i, some_selector) => $(some_selector).removeClass('size_selector_actived'))

        recalc()
    }))

    $('#order_btn').on('click', function () {
        let sum = Number($('#result_cost').text())
        let name = $('#user_name').val()
        let lastname = $('#user_lastname').val()

        if (sum == 0) {
            alert('Не выбран товар!')
            return
        }
        if (name == '') {
            alert('Введите имя!')
            return
        }
        if (lastname == '') {
            alert('Введите фамилию!')
            return
        }

        alert(`Здравствуйте, ${name} ${lastname}!\nСумма заказа: ${sum}₽`)
    })
})

function recalc() {
    let sum = 0

    $('.product_cost').map((idx, el) => {
        let count = Number($(el).parent().siblings('.product_count').eq(0).val())
        sum = sum + Number($(el).text()) * count
    })
    $('#result_cost').html(sum)
}
var l = console.log
document.addEventListener("DOMContentLoaded", () => {
        $(".form_checkbox").map((id, el) => {
            let cost = $(el).siblings('label').first().children('.form_element_cost')
            cost.html($(el).val())
        })

    $(".form_checkbox").map((id, el) => $(el).on("change", function() {
        let sum = 0
        $('.form_checkbox').map((id, el) => {
            if ($(el).is(':checked')) {
                sum = sum + Number($(el).val())
            }
        })
        $('#form_value').html(sum)
    }))
})

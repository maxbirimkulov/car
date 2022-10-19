
let btn = document.querySelector('.example__btn')
let overlay = document.querySelector('.overlay')

btn.addEventListener('click', function () {
    overlay.style.display = 'flex'
})

overlay.addEventListener('click', function (e) {
    if (e.target.className === 'overlay') {
        overlay.style.display = 'none'
    }
})

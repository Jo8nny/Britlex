const menu = document.querySelector('.menu__burger')

if (menu) {
    const menuBody = document.querySelector('.menu__body')
    const headerButton = document.querySelector('.header__button')
    menu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock')
        menu.classList.toggle('active')
        menuBody.classList.toggle('active')
        headerButton.classList.toggle('active')
    })
}

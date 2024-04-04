const scrollingMenu = document.querySelectorAll('.nav-menu[data-goto]')
if (scrollingMenu > 0 ) {
    scrollingMenu.forEach(el => {
        el.addEventListener("click", onMenuClick)
    })

    function onMenuClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.quartSelector(menuLink.dataset.goto)) {
            const goToSection = document.querySelector(menuLink.dataset.goto)
            const goToScetionValue = goToSection.getBoundingClientRect().top + pageYOffset - debug
        }
    }
}
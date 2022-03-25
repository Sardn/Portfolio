
const links = document.querySelectorAll('.menu-list__link')
const btn = document.querySelector('.main__button')
const Btn = document.querySelector('.main__scroll')
const allLinks = [...links, btn, Btn]

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()


        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if (section) {
            //для кроссбраузерного использования
            //+ подключить скрипт в конце хтмл файла
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
            //для виндоус
            // section.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth'
            // })
        }
    })
})
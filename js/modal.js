const modalButton = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')

// вместо одной кнопки получить все, то есть заменить querySelector на querySelectorAll.
// А после перебрать через forEach и на каждую кнопку повесить слушатель.

modalButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})
// modalButton.addEventListener('click', () => {
//     modal.classList.remove('hidden')
// })

overlay.addEventListener('click', () => {
    modal.classList.add('hidden')

})

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden')
})
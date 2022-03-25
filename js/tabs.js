// const titleDocument = document.querySelector("title");
// const tabButtons = document.querySelectorAll(".design-list__item");
// const tabDescriptions = document.querySelectorAll(".design__descr");
// const tabImages = document.querySelectorAll(".design-images");
// const tabImage = document.querySelectorAll(".design-block__img");
// const tabTitle = document.querySelectorAll(".design__title");

// const changeContent = (array, value) => {
//   array.forEach((elem) => {
//     if (elem.dataset.tabsField === value) {
//       elem.classList.remove("hidden");
//     } else {
//       elem.classList.add("hidden");
//     }
//   });
// };

// const changeTitle = (array, value) => {
//   array.forEach((elem) => {
//     if (elem.dataset.tabsField === value) {
//       titleDocument.textContent = elem.textContent;
//     }
//   });
// };

// tabButtons.forEach((tabButton) => {
//   tabButton.addEventListener("click", (event) => {
//     const dataValue = tabButton.dataset.tabsHandler;

//     changeContent(tabDescriptions, dataValue);
//     changeContent(tabImages, dataValue);
//     changeContent(tabImage, dataValue);
//     changeContent(tabTitle, dataValue);
//     changeTitle(tabTitle, dataValue);

//     tabButtons.forEach((btn) => {
//       if (btn === event.target) {
//         btn.classList.add("design-list__item_active");
//       } else {
//         btn.classList.remove("design-list__item_active");
//       }
//     });
//   });
// });



const titleDocument = document.querySelector('title');
const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabTitle = document.querySelectorAll('.design__title')
const designBlock = document.querySelectorAll('.design-block__img')
// const startTitle = document.querySelector(".design-list__item").innerHTML;
// document.title = startTitle;


const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}

const changeTitle = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            titleDocument.textContent = elem.textContent;
        }
    });
};

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler

        changeContent(tabDescriptions, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(designBlock, dataValue)
        changeContent(tabTitle, dataValue);
        changeTitle(tabTitle, dataValue);

        //отображение и скрытие подчеркивания при нажатии на кнопку
        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })

        // tabTitle.forEach((title, indexTitle) => {
        //     if (index === indexTitle) {
        //         title.classList.remove("hidden");
        //         document.title = title.innerHTML;
        //     } else {
        //         title.classList.add("hidden");
        //     }
        // });
    })
})


let image = document.querySelector('img[data-img]')
let btns = document.querySelectorAll('button[data-btn]')
let modal = document.querySelector('.modal')
let btnsModal = document.querySelectorAll('button[data-modal]')
let exit = document.querySelector('div[data-close]')


btnsModal.forEach((btn) => {
    btn.onclick = () => {
        modal.style.display = 'block'
    }
})

exit.onclick = () => {
    modal.style.display = 'none'
}

btns.forEach((btn) => {
    btn.onclick = () => {
        let btnData = btn.getAttribute('data-btn')
        if(btnData == '01') {
            image.setAttribute('src', './img/slider/pepper.jpg')
        } else if(btnData == '02') {
            image.setAttribute('src', './img/slider/food-12.jpg')
        }  else if(btnData == '03') {
            image.setAttribute('src', './img/slider/olive-oil.jpg')
        } else { 
            image.setAttribute('src', './img/slider/paprika.jpg')
        }
    }
})
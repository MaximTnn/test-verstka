const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')
const buttonCall = document.querySelector('.intro__btn')
const modalWindow = document.querySelector('.modal-window')
const inputs = document.querySelectorAll('input')
const checkAgreement = document.querySelector('.form__input-agreement')

modalWindow.addEventListener('click',modalWindowOpen())



function modalWindowOpen(a) {
    const modalWindow = document.querySelector('.modal-window')
    modalWindow.classList.toggle('active')
    if (!modalWindow.classList.contains('active')) {
        header.classList.add('active')
        header.style.boxShadow = "0 5px 5px #00000021"
    } else {
        header.classList.remove('active')
        header.style.boxShadow = "none"
    }

}

menuBtn.addEventListener('click', function() {
    let subMenuActive = document.querySelectorAll('.sub-menu')
    subMenuActive.forEach(el => el.classList.remove('active'))
    let arrowActive = document.querySelectorAll('.menu-list__arrow')
    arrowActive.forEach(el => el.classList.remove('active'))
    menu.classList.toggle('active')
    header.classList.toggle('active')
    menuBtn.classList.toggle('active')
})

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body=document.querySelector('body');

if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.menu-list__arrow-wraper');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
            let thisArrow=arrow[i].childNodes[1]

		thisLink.addEventListener('click', function(){
			subMenu.classList.toggle('active');
            thisArrow.classList.toggle('active');
        })
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('active');
            thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

window.addEventListener('scroll', function(){
    let maxScroll = 500
    const videoBg = document.querySelector('.video')
    let scroll = window.scrollY
    let opacity
   
    if (scroll <= maxScroll) {
        opacity = 1 - (scroll / maxScroll)
    }
    if (scroll > 200) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
    videoBg.style.opacity = opacity
    if (menu.classList.contains('active') || !modalWindow.classList.contains('active')) {
        header.classList.add('active')
    }
});




checkAgreement.addEventListener('click', checkSubmit())
inputs.forEach(el => el.addEventListener("keyup", event => validation(event)))

function validation(event) {
    if (!event.target.validity.valid) {
        event.target.parentElement.querySelector('.form__invalid').classList.add('active')
        event.target.parentElement.querySelector('.form__valid').classList.remove('active')
    } else {
        event.target.parentElement.querySelector('.form__invalid').classList.remove('active')
        event.target.parentElement.querySelector('.form__valid').classList.add('active')
    }
    checkSubmit()
}

function checkSubmit() {
    const name = document.querySelector('.form__input-name')
    const phone = document.querySelector('.form__input-phone')
    const email = document.querySelector('.form__input-email')
    const agreement = document.querySelector('.form__input-agreement')
    const submitBtn = document.querySelector('.form__submit')

    if (name.validity.valid &
        phone.validity.valid &
        email.validity.valid &
        agreement.validity.valid) 
        {
            submitBtn.removeAttribute("disabled")
        }
        else
        {
            submitBtn.setAttribute("disabled", "disabled")
        }
}   

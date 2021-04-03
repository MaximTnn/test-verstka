let menuBtn = document.querySelector('.menu__btn')
let menu = document.querySelector('.menu')
let header = document.querySelector('.header')

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
            console.log(thisArrow)

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
    console.log(scroll, opacity)
    if (scroll <= maxScroll) {
        opacity = 1 - (scroll / maxScroll)
    }
    if (scroll > 200) {
        header.style.backgroundColor = '#ffffff'
    }
    videoBg.style.opacity = opacity
});

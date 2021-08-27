//==========================Menu=======================

const nav=document.querySelector('#header nav');

const toggle=document.querySelectorAll('nav .toggle')



for (const element of toggle){

    element.addEventListener('click',()=>{
        
        nav.classList.toggle('show')

    })

}


const links=document.querySelectorAll('nav ul li a')

        for(const link of links){

        link.addEventListener('click',()=>{

            nav.classList.remove("show")

})

}

//==========================Menu===========================

////===================Shadow header=======================

let header=document.querySelector('#header')

const navHeight=document.offsetHeight;

window.addEventListener('scroll',function(){

    if(window.scrollY>=100){

        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }


})


////==========================Swiper=======================

let swiper = new Swiper('.swiper-container', {

    slidesPerView:1,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel:true,
    keyboard:true,
    breakpoints:{
        767:{
            slidesPerView:2,
            setWrapperSize:true
        }

    }
    

}
);




//=====================Scroll reveal========================

const scrollReveal=ScrollReveal({

    origin:'top',
    distance:'30px',
    duration:720,
    reset:true



})
scrollReveal.reveal(`
#home .text,
#home .image,
#about .text,
#services header,
#services .card,
#testimonials header,
#testimonials .testimonials,
#contact .text,
#contact .links,
#footer .logo,
#footer p,
#footer .social


`,{interval:100})


//=====================Back to top========================


const ButtBack=document.querySelector('.back')

window.addEventListener('scroll',function(){

    if(window.scrollY>=1100){

        ButtBack.classList.add('back-show')
    }else{

        ButtBack.classList.remove('back-show')
    }

})


const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
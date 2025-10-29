export default function brouillon(){

const body = document.querySelector('body')
const methodeGauche = document.querySelector('#methode-gauche')
const sectionMethode = document.querySelector('#section-methode')

gsap.to(methodeGauche,{

    scrollTrigger:{
        scroller:body,
        trigger:sectionMethode,
        scrub:2,
        
        start:"top bottom"
    },

    y:10,
    duration:1,
})

}
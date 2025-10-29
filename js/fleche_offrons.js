export default function fleche_offrons(){


const sectionOffrons = document.querySelector("#section-offrons")
const flecheOffrons = document.querySelector("#fleche-offrons")
const flecheOffronsSvg = document.querySelector("#fleche_offrons_svg")
const chevronOffrons = document.querySelector("#chevron_offrons")
const body = document.querySelector("body")


gsap.from(flecheOffronsSvg,{
    drawSVG:1,
    scrollTrigger:{
        scroller:body,
        trigger: sectionOffrons,
        
        scrub:2,
        start:"top top",
        end:"bottom 80",
        
    },


})
gsap.to(chevronOffrons,{
    
    scrollTrigger:{
        scroller:body,
        trigger: sectionOffrons,
       
        
        start:"top top",
        end:"bottom 80",
        
    },
    opacity:1,
})

gsap.to(chevronOffrons,{
    
    scrollTrigger:{
        scroller:body,
        trigger: sectionOffrons,
        
        scrub:2,
        start:"top top",
        end:"bottom 80",
        
    },
    motionPath:{
        path:flecheOffronsSvg,
        align:flecheOffronsSvg,
        alignOrigin:[0.5,1],
       
        autoRotate:-90,
    },
      
})



}
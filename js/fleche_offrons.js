export default function fleche_offrons(){


const sectionOffrons = document.querySelector("#section-offrons")
const flecheOffrons = document.querySelector("#fleche-offrons")
const flecheOffronsSvg = document.querySelector("#fleche_offrons_svg")
const body = document.querySelector("body")
const compas = document.querySelector("#compas")
const outilDeux = document.querySelector("#outil_deux")
const outilTrois = document.querySelector("#outil_trois")
const outilQuatre = document.querySelector("#outil_quatre")
const sectionBouton = document.querySelector("#section-bouton")
const titreOffrons = document.querySelector("#titre-offrons")




gsap.from(flecheOffronsSvg,{
    drawSVG:1,
    scrollTrigger:{
        trigger: sectionOffrons,
        invalidateOnRefresh: true,
       
        scrub:2,
        start:"top 40%",
       
        
    },


})

gsap.to(sectionOffrons,{

    scrollTrigger:{
          trigger: sectionOffrons,
        
        invalidateOnRefresh: true,
        start:"top 90%",
        end:"bottom 80",
      
    },
   
    opacity:1,
    duration:2

})

gsap.to(sectionBouton,{

    scrollTrigger:{
        trigger:sectionBouton,
        start:"top 50%",
        end:"top 10%",
        invalidateOnRefresh: true,
      
    },
   
    opacity:1,
    duration:1

})

gsap.from(compas,{
    scrollTrigger:{
        trigger:sectionOffrons,
        invalidateOnRefresh: true,
        scrub:2
    },
    y: -250,
    rotate: 10
})

gsap.from(outilDeux,{
    scrollTrigger:{
        trigger:sectionOffrons,
      invalidateOnRefresh: true,
        scrub:2
    },
    y: -10,
    rotate: -10
})


gsap.from(outilTrois,{
    scrollTrigger:{
        trigger:sectionOffrons,
       invalidateOnRefresh: true,
        scrub:2
    },
    y: -20,
    rotate: 20
})


gsap.from(outilQuatre,{
    scrollTrigger:{
        trigger:sectionOffrons,
        invalidateOnRefresh: true,
        scrub:2
    },
    y: -5,
    rotate: -6
})

}
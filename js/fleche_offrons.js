export default function fleche_offrons(){


const sectionOffrons = document.querySelector("#section-offrons")
const flecheOffrons = document.querySelector("#fleche-offrons")
const flecheOffronsSvg = document.querySelector("#fleche_offrons_svg")
const chevronOffrons = document.querySelector("#chevron_offrons")
const body = document.querySelector("body")
const compas = document.querySelector("#compas")
const outilDeux = document.querySelector("#outil_deux")
const outilTrois = document.querySelector("#outil_trois")
const outilQuatre = document.querySelector("#outil_quatre")
const groupeChevron = document.querySelector("#groupe-chevron")
const sectionBouton = document.querySelector("#section-bouton")
const titreOffrons = document.querySelector("#titre-offrons")




gsap.from(flecheOffronsSvg,{
    drawSVG:1,
    scrollTrigger:{
        scroller:body,
        trigger: sectionOffrons,
        
        scrub:2,
        start:"top 40%",
        end:"bottom 80",
        
    },


})
// gsap.to(chevronOffrons,{
    
//     scrollTrigger:{
//         scroller:body,
//         trigger: sectionOffrons,
       
        
//         start:"top top",
//         end:"bottom 80",
        
//     },
//     opacity:1,
// })

gsap.to(chevronOffrons,{
    
    scrollTrigger:{
        
        trigger: sectionOffrons,
        
        scrub:2,
        start:"top 40%",
        end:"bottom 80",
        
    },
    motionPath:{
        path:flecheOffronsSvg,
        align:flecheOffronsSvg,
        alignOrigin:[0.5,1],
       
        autoRotate:-90,
    },
      
})
gsap.to(sectionOffrons,{

    scrollTrigger:{
          trigger: sectionOffrons,
        
        
        start:"top 90%",
        end:"bottom 80",
      
    },
   
    opacity:1,
    duration:2

})
gsap.to(groupeChevron,{

    scrollTrigger:{
          trigger: sectionOffrons,
        
        
        start:"top 40%",
        end:"bottom 80",
      
    },
   
    opacity:1,
    duration:1

})
gsap.to(sectionBouton,{

    scrollTrigger:{
        trigger:sectionBouton,
        start:"top 50%",
        end:"top 10%",
        
      
    },
   
    opacity:1,
    duration:1

})

gsap.from(compas,{
    scrollTrigger:{
        trigger:sectionOffrons,
        scroller:body,
        scrub:2
    },
    y: -30,
    rotate: 10
})

gsap.from(outilDeux,{
    scrollTrigger:{
        trigger:sectionOffrons,
        scroller:body,
        scrub:2
    },
    y: -10,
    rotate: -10
})


gsap.from(outilTrois,{
    scrollTrigger:{
        trigger:sectionOffrons,
        scroller:body,
        scrub:2
    },
    y: -20,
    rotate: 20
})


gsap.from(outilQuatre,{
    scrollTrigger:{
        trigger:sectionOffrons,
        scroller:body,
        scrub:2
    },
    y: -5,
    rotate: -6
})
}
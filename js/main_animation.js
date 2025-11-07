

export default function main_animation(){

    const main= document.querySelector("#main")
    const biographie=document.querySelector("#biographie")

    gsap.from(main,{

        scrollTrigger:{

            trigger:main,
            scrub: 1,
            invalidateOnRefresh: true,
            
        },
        
        y:250,
        x:250
    })
 
    gsap.to(biographie,{
      
        scrollTrigger:{
            trigger:biographie,
            start:"top 30%",
            invalidateOnRefresh: true,
            
        },
          opacity:1,
        duration:1.5,
    })


}
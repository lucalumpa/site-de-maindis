export default function main_animation(){

    const main= document.querySelector("#main")

    gsap.from(main,{

        scrollTrigger:{

            trigger:main,
            scrub: 1,
            
        },
        
        y:250,
        x:250
    })
 



}
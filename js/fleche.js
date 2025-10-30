export default function fleche(){
    
document.addEventListener("DOMContentLoaded", (event) => {
          
            gsap.set("#chevron", {rotate:(100)})
            gsap.to("#chevron",{
                
                motionPath:{
                    path: "#fleche",
                    align: "#fleche",
                    alignOrigin: [0.5, 1],
                    autoRotate: -90
                    
                },
                duration:3,
               
                scrollTrigger: {

                    trigger: "#section-video-animation",
                    start: "top 60%",
                    
                    scrub:2

                }
            })

            

            gsap.from("#fleche",{

                drawSVG:1,
                duration:3,
                  scrollTrigger: {

                    trigger: "#section-video-animation",
                    start: "top 60%",
                 
                    scrub: 2

                }

            })

            gsap.to("#chevron",{
                opacity:1,
                scrollTrigger:{
                    trigger:"#section-video-animation",
                    start: "top 60%",
                }
            })

            gsap.to("#section-banniere",{
                duration:2,
                opacity:1
            })
               gsap.to("#section-video-animation",{
                duration:2,
                opacity:1
            })


        });

    }
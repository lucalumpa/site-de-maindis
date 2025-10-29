export default function fleche_jardin(){
    
document.addEventListener("DOMContentLoaded", (event) => {
          
            gsap.set("#chevron_jardin", {rotate:(100)})
            gsap.to("#chevron_jardin",{
                
                motionPath:{
                    path: "#fleche_jardin",
                    align: "#fleche_jardin",
                    alignOrigin: [0.5, 1],
                    autoRotate: -90
                    
                },
                duration:3,
               
                scrollTrigger: {

                    trigger: "#main",
                    start: "bottom 100%",
                    
                    
                    scrub:2

                }
            })

            

            gsap.from("#fleche_jardin",{

                drawSVG:1,
                duration:3,
                  scrollTrigger: {

                    trigger: "#main",
                    start: "bottom 100%",
                 
                    scrub: 2

                }

            })



        });

    }
export default function fleche_jardin(){
        

            gsap.from("#fleche_jardin",{

                drawSVG:1,
                duration:3,
                  scrollTrigger: {
                    invalidateOnRefresh: true,
                    trigger: "#fleche_jardin", 
                    start: "center 100%", 
                    
                    scrub: 2

                }

            });



       
}
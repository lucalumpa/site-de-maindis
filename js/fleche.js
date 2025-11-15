export default function fleche(){
    
            

            gsap.from("#fleche",{

                drawSVG:1,
                duration:3,
                  scrollTrigger: {

                    trigger: "#section-video-animation",
                    start: "top 60%",
                 invalidateOnRefresh: true,
                    scrub: 2

                }

            })
            gsap.from("#fleche_mobile",{

                drawSVG:1,
                duration:3,
                  scrollTrigger: {
                    invalidateOnRefresh: true,
                    trigger: "#section-video-animation",
                    start: "top 20%",
                    
                    scrub: 2

                }

            })

       

            gsap.to("#section-banniere",{
                duration:2,
                opacity:1,
                invalidateOnRefresh: true,
            })
               gsap.to("#section-video-animation",{
                duration:2,
                opacity:1,
                invalidateOnRefresh: true,
            });


      

    }
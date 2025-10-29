// Code obligatoire
export default function philo() {
    // on recupere tout les calss/id
  const masqueVideoPhilo = document.querySelector('#masque-video-philo')
  const conteneurPhilo = document.querySelector('#conteneur-philo')
  //on ajoute cette ligne


  // DEBUT DE L'ANIMATION

            
            gsap.from(masqueVideoPhilo,{

                scrollTrigger:{
                    scroller:"body",
                    trigger:conteneurPhilo,
                //    markers:true,
                    scrub:2,
                    end:"top top"
                },
                duration:1,
                width:0
            })
}
// On importe les fonctions (modules)
// Les chemins indiquent où se trouvent les fichiers
import philo from './philo.js'
import carousel from './carousel.js'
import fleche from './fleche.js'
import brouillon from './brouillon.js'
import main_animation from './main_animation.js'
import fleche_jardin from './fleche_jardin.js'
import jardin_cercles from './jardin_cercles.js'
import fleche_offrons from './fleche_offrons.js'
import popup_box_video from './popup-box-video.js'
import gallerie from './gallerie.js'
import menu from './menu.js'
import loader from './loader.js'
import cta from './cta.js'

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,DrawSVGPlugin,SplitText)

loader()
gallerie()
menu()
carousel()
jardin_cercles()
popup_box_video()
// On exécute les fonctions pour lancer les animations

window.addEventListener("load",()=>{

fleche()
philo()
cta()
brouillon()
main_animation()
fleche_jardin()
fleche_offrons()
scrollTrigger.refresh();

})



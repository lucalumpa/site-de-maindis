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

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,DrawSVGPlugin)
// On exécute les fonctions pour lancer les animations
philo()
carousel()
fleche()
brouillon()
main_animation()
fleche_jardin()
jardin_cercles()
fleche_offrons()
// On importe les fonctions (modules)
// Les chemins indiquent où se trouvent les fichiers
import philo from './philo.js'
import carousel from './carousel.js'
import fleche from './fleche.js'

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,DrawSVGPlugin)
// On exécute les fonctions pour lancer les animations
philo()
carousel()
fleche()

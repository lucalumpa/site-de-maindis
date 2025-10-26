// On importe les fonctions (modules)
// Les chemins indiquent où se trouvent les fichiers
import philo from './philo.js'
import carousel from './carousel.js'

gsap.registerPlugin(ScrollTrigger)
// On exécute les fonctions pour lancer les animations
philo()
carousel()

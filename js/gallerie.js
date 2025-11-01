export default function gallerie() {
  // 1. On récupère tout
  const images = [...document.querySelectorAll('.bloc-image')];
  const imageBoxImg   = document.querySelector("#box-lightbox-photo img");
  const imageBox      = document.querySelector("#lightbox_photo");
  const overlayPhoto  = document.querySelector("#overlay_lightbox_photo");
  const closeBtnImg   = document.querySelector("#close_button_photo");
  const rightBtnImg   = document.querySelector("#box_right_button_photo");
  const leftBtnImg    = document.querySelector("#box_left_button_photo");

  // index de l'image affichée dans la lightbox
  let currentIndex = 0;

  // 2. Quand on clique sur une vignette
  images.forEach((bloc, index) => {
    bloc.addEventListener("click", (eventClick) => {

      // on récupère l’image VRAIE dans le bloc
      // (si tu cliques sur un overlay, on prend quand même l’img)
      const imgDansBloc = bloc.querySelector("img") || eventClick.target;

      const idPhoto  = imgDansBloc.id;
      const urlPhoto = imgDansBloc.src;

      // on met ça dans la grande image
      imageBoxImg.src = urlPhoto;
      imageBoxImg.id  = idPhoto;

      // on mémorise où on en est
      currentIndex = index;

      // on affiche la lightbox
      imageBox.style.opacity = "1";
      imageBox.style.visibility = "visible";
      overlayPhoto.style.opacity = "1";
      overlayPhoto.style.visibility = "visible";
    });
  });

  // 3. Flèche droite → image suivante
  rightBtnImg.addEventListener("click", () => {
    // avancer
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0; // on revient au début
    }

    // on récupère l’image correspondante
    const blocSuivant = images[currentIndex];
    const imgSuivante = blocSuivant.querySelector("img") || blocSuivant;

    imageBoxImg.src = imgSuivante.src;
    imageBoxImg.id  = imgSuivante.id;
  });

  // 4. Flèche gauche → image précédente
  leftBtnImg.addEventListener("click", () => {
    // reculer
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // on repart à la dernière
    }

    const blocPrecedent = images[currentIndex];
    const imgPrecedente = blocPrecedent.querySelector("img") || blocPrecedent;

    imageBoxImg.src = imgPrecedente.src;
    imageBoxImg.id  = imgPrecedente.id;
  });

  // 5. Bouton fermer
  closeBtnImg.addEventListener("click", () => {
    imageBox.style.opacity = "0";
    imageBox.style.visibility = "hidden";
    overlayPhoto.style.opacity = "0";
    overlayPhoto.style.visibility = "hidden";
  });
}

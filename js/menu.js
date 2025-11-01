export default function menu() {
  const menu = document.querySelector("header");

  let lastScrollPosition = 0;
  let isHidden = false; // état du menu

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    const diff = currentScrollPosition - lastScrollPosition;

    // 1. si le scroll bouge à peine, on ne fait rien
    if (Math.abs(diff) < 5) {
      return;
    }

    // 2. si on est tout en haut, on montre le menu
    if (currentScrollPosition <= 0) {
      if (isHidden) {
        gsap.killTweensOf(menu);
        gsap.to(menu, { duration: 0.4, y: 0, ease: "power2.out" });
        isHidden = false;
      }
      lastScrollPosition = currentScrollPosition;
      return;
    }

    // 3. scroll vers le bas → cacher
    if (diff > 0 && !isHidden) {
      gsap.killTweensOf(menu); // on évite de cumuler les anims
      gsap.to(menu, { duration: 0.8, y: -100, ease: "power2.out" });
      isHidden = true;
    }

    // 4. scroll vers le haut → montrer
    if (diff < 0 && isHidden) {
      gsap.killTweensOf(menu);
      gsap.to(menu, { duration: 0.8, y: 0, ease: "power2.out" });
      isHidden = false;
    }

    // 5. on met à jour la position
    lastScrollPosition = currentScrollPosition;
  });
}

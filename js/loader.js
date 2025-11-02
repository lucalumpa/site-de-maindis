export default function loader(){


    window.addEventListener("load", () => {
  // on enlève le blocage du scroll
  document.documentElement.classList.remove("is-loading");
  document.body.classList.remove("is-loading");

  // on masque le loader
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
    // on le supprime du DOM après l’anim
    setTimeout(() => {
      loader.remove();
    }, 500);
  }

  // 👉 ici tu peux lancer tes inits GSAP / ScrollTrigger tranquilles
  // initScrollAnimations();
});

}
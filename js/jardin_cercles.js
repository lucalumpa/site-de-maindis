export default function jardin_cercles(){


    const jardinExceptionGauche = document.querySelector("#jardin-exception-gauche")
    const viewboxCercles = document.querySelector("#viewbox_cercles")
    const ellipseUne = document.querySelector("#ellipse_une")
    const ellipseDeux = document.querySelector("#ellipse_deux")


    gsap.to(viewboxCercles,{

        rotate:360,
        
        repeat:-1,
        duration:30,
        ease:"linear"
        
    })






}
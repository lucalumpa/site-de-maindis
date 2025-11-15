export default function cta(){

    const split_cta= document.querySelector(".split_cta");
    const split_bloc= document.querySelector("#call-to-action")
// split elements with the class "split" into words and characters
let split = new SplitText(split_cta, { type: "words", wordsClass:"word++", });


// now animate the characters in a staggered fashion
gsap.from(split.words, {
  duration: 1, 
  y: 100,   
  mask:"line",    // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05, // 0.05 seconds between each
  
  scrollTrigger:{
    trigger: split_cta,
    start: "center bottom",
    

  }
  
});


gsap.to(split_bloc,{

    
    scale:1.9,
    scrollTrigger:{
        trigger: split_bloc,
        scrub:2,
        invalidateOnRefresh:true
    }
}); 

}   
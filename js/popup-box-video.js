export default function popup_box_video (){

    const boxPlay = document.querySelector("#box-play img")
    const videoPopupOverlay = document.querySelector("#video-popup-overlay")
    const svgCroix = document.querySelector("#svg-croix")
    const overlay = document.querySelector("#overlay")
    let video = document.querySelector("#video-popup-overlay video")

    boxPlay.addEventListener("click", popUp);
    svgCroix.addEventListener("click", closePopup);

    function popUp() {

        video.src = video.dataset.src;
        video.load();
        video.play();

        videoPopupOverlay.style.visibility = "visible";
        overlay.style.visibility = "visible";
        videoPopupOverlay.style.opacity = "100";
        overlay.style.opacity = "100";
        
    }

    function closePopup(){

        videoPopupOverlay.style.visibility = "hidden";
        videoPopupOverlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
            video.pause();    // arrêt propre
    video.currentTime = 0; // rewind


    }
}
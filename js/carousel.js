export default function carousel(){

    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#image-carousel', {
            type: 'loop',
            perPage: 3,
             breakpoints: {
                1025: {
                perPage: 2,
            },
            },
            autoplay: true,
            gap: '1rem',
           
        }).mount();
    });
  }
// Glide Js Carousel


let slider1 = document.getElementById("glide_1")
let slider2 = document.getElementById("glide_2")

// Hero

if(slider1){
    new Glide(slider1, {
        type: "carousel",
        startAt: 0, 
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "linear"

    }).mount();
}

// Latest Products


if(slider2){
    new Glide(slider2, {
        type: "corousel",
        startAt: 0, 
        hoverpause: true,
        perView: 5,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            1920: {
                perView: 4,
            },
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            
        }

    }).mount();
}
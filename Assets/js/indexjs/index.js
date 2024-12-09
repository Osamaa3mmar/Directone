const textReveal=document.querySelectorAll(".text-reveal");
const cardReveal=document.querySelectorAll(".card-reveal");
const listingCardReveal=document.querySelectorAll(".listing-card");
console.log(listingCardReveal);
const textRevealTextOptions ={
    delay: 300,
    distance: '200px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom:0,
        left: 0,
    },
    afterReset: function (el) {},
    afterReveal: function (el) {},
    beforeReset: function (el) {},
    beforeReveal: function (el) {},
}


ScrollReveal().reveal(textReveal,textRevealTextOptions);



for(let i=0;i<listingCardReveal.length;i++){
    ScrollReveal().reveal(listingCardReveal[i],{ delay: 300,distance: '300px',origin: 'left',reset: true});
}



const cardContent=Array.from(document.querySelectorAll(".card-contint"));
console.log(cardContent);

for(let i=0;i<cardContent.length;i++){
    ScrollReveal().reveal(cardContent[i],{ delay: (30*(i+1)),distance: '200px',origin: 'bottom',reset: true,rotate: {
        x: 40,
        y: 0,
        z: 0,
    }});
}
for(let i=0;i<cardReveal.length;i++){
   
    ScrollReveal().reveal(cardReveal[i],{ delay: (30*(i+1)),distance: '200px',origin: 'bottom',reset: true,rotate: {
        x: 40,
        y: 40,
        z: 40,
    }});
}

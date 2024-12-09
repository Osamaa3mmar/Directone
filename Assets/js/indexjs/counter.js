let count_50=document.querySelector(".count-50");
let count_210=document.querySelector(".count-210");
let count_450=document.querySelector(".count-450");
let count_100=document.querySelector(".count-100");
console.log(count_50);


const count =(target , letter,step,object)=>{
let counter=0;
setInterval(()=>{
    if(counter>=target){
        clearInterval(count);
    }
    else{
        counter+=step;
        object.innerHTML= counter + letter;
    }
},20)

}

let isCounted=false;

document.onscroll=function(e){
    if(scrollY>=1985 &&!isCounted){
    
count(50,"",1,count_50);
count(210,"K",2,count_210);
count(450,"",5,count_450);
count(100,"",1,count_100);
    isCounted=true;
}
}


ScrollReveal().reveal(count_50,{ delay: 400,distance: '200px',origin: 'bottom',reset: true,rotate: {
    x: 40,
    y: 0,
    z: 0,
}});
ScrollReveal().reveal(count_100,{ delay: 400,distance: '200px',origin: 'bottom',reset: true,rotate: {
    x: 40,
    y: 0,
    z: 0,
}});
ScrollReveal().reveal(count_450,{ delay: 400,distance: '200px',origin: 'bottom',reset: true,rotate: {
    x: 40,
    y: 0,
    z: 0,
}});
ScrollReveal().reveal(count_210,{ delay: 400,distance: '200px',origin: 'bottom',reset: true,rotate: {
    x: 40,
    y: 0,
    z: 0,
}});

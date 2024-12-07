


window.onscroll=()=>{
    if(window.scrollY>400){
        document.querySelector(".nav").classList.add("nav-scroll");
        document.querySelector(".brand-text").style.color="var(--primary)";
        document.querySelector(".brand-logo").style.color="var(--primary)";
        document.querySelector(".nav").style.padding="0px ";

    }
    else{
        document.querySelector(".brand-text").style.color="var(--white)";
        document.querySelector(".brand-logo").style.color="var(--white)";
        document.querySelector(".nav").classList.remove("nav-scroll");
        document.querySelector(".nav").style.padding="10px 0px ";
        
    }
}
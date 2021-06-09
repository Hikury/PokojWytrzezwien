// PRELOADER

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('close-preloader');
});

// SWITCHER

    // checkbox input value
    var themeSwitcher = document.querySelector('.theme-switcher input');
    // get current theme from localStorage
    var currentTheme = localStorage.getItem('theme');
    
    // check what is current theme right now and activate it
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeSwitcher.checked = true;
        }
    }
    
    // swithc between themes
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }
    
    // event listener on checkbox change
    themeSwitcher.addEventListener('change', switchTheme, false);

// UNFOLDING FOOTER

const socialLinks = document.querySelector('.footer-social').addEventListener("click", function(){
    const socialMediaDiv = document.querySelector(".social-media");
    socialMediaDiv.classList.toggle("social-media-visible");
});

// TIMER

// READ MORE TEXT

function readMore(btn){
    
const moreText = document.getElementsByClassName("more-text");
const dots = document.getElementsByClassName("dots");

moreText.classList.toggle('dnone');
dots.classList.toggle('dnone');

if(btn.innerHTML === 'czytaj więcej'){
  btn.innerHTML = 'czytaj mniej';
}else{
  btn.innerHTML = 'czytaj więcej';
}

}
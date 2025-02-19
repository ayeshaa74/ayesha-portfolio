// Add this script just before the closing </body> tag in your HTML

window.onscroll = function() {
    var navbar = document.querySelector('nav');
    
    if (window.scrollY > 50) { // Make navbar more transparent after scrolling 50px
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
};


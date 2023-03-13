

// -------------------------smooth-scrolling--------------------------
const smoothLinks = document.querySelectorAll('a.smooth-scrolling');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
// ||||||||||||||||||||||||smooth-scrolling||||||||||||||||||||||||||||||


// -------------------------Toggle menu--------------------------

let butt = document.getElementById('toggle-button');
let menu = document.getElementById('menu');
butt.addEventListener('click', function(e){
    menu.classList.toggle('show');
});

// ||||||||||||||||||||||||Toggle menu||||||||||||||||||||||||||||||
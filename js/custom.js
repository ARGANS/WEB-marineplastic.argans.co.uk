// fade animation
AOS.init()

// wave animation
let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 0.25 + 'px';
    wave2.style.backgroundPositionX = 300 + value * -0.25 + 'px';
    wave3.style.backgroundPositionX = 200 + value * 0.1 + 'px';
    wave4.style.backgroundPositionX = 100 + value * -0.1 + 'px';
});

// hamburger toggle
const btn = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-list');
btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const links = document.querySelectorAll('li.menu-item');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

// more button
function readMore(sec) {
    var more = document.querySelector(`.content[data-sec="${sec}"] .more`);
    var label = document.querySelector(`.content[data-sec="${sec}"] .label`);
    var btn = document.querySelector(`.content[data-sec="${sec}"] .button i`);
    if (more.style.display === "none") {
        more.style.display = "inline";
        label.innerHTML = "";
        btn.className = "fa fa-chevron-circle-up"
    } else {
        more.style.display = "none";
        label.innerHTML = "read more";
        btn.className = "fa fa-chevron-circle-right"
    }
};

// navbar effect
const sections = document.querySelectorAll('.wrapper');
const navlinks = document.querySelectorAll('nav li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    navlinks.forEach( li => {
        li.classList.remove('selected');
        if(li.classList.contains(current)) {
            li.classList.add('selected')
        }
    })
});

// collapsable panel scroll
$('#privacy').on('shown.bs.collapse', function () {
    $('html, body').animate({
        scrollTop: $("#privacy").offset().top
    }, 200);
});

$('#disclaimer').on('shown.bs.collapse', function () {
    $('html, body').animate({
        scrollTop: $("#disclaimer").offset().top
    }, 200);
});

$('#copyright').on('shown.bs.collapse', function () {
    $('html, body').animate({
        scrollTop: $("#copyright").offset().top
    }, 200);
});

// email obfuscation
function decode(encoded) {

    var address = atob(encoded);
    window.location.href = "mailto:" + address + "?subject=ML-OPSI Registration";

}
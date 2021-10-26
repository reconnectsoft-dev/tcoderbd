// Change Color on Click
var selector, elems, makeActive;

selector = '.navbar li a';

elems = document.querySelectorAll(selector);

makeActive = function() {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('navbar__active');

    this.classList.add('navbar__active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);



//  Add class on Scroll Navbar and Change Navbar Color 

var navbar = document.querySelector('nav')
var navbarCollapse = document.querySelector('.navbar-collapse')
var sections = document.querySelectorAll("section");

onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;

    // pageYOffset or scrollY
    if (window.pageYOffset > 500) {
        navbar.classList.add('navbar_scrolled')
        navbarCollapse.classList.add('navbar-collapse_color');
    } else {
        navbar.classList.remove('navbar_scrolled')
        navbarCollapse.classList.remove('navbar-collapse_color');
    }
    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function() {
    document.querySelectorAll("nav li a").forEach((el) => {
        el.classList.remove("navbar__active");
    });
};

var addActiveClass = function(id) {
    // console.log(id);
    var selector = `navbar li a[href="#${id}"]`;
    document.querySelector(selector).classList.add("navbar__active");
};

var navLinks = document.querySelectorAll("nav li a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        var currentId = e.target.attributes.href.value;
        var section = document.querySelector(currentId);
        var sectionPos = section.offsetTop;
        section.scrollIntoView({
            behavior: "smooth",
        });

        window.scroll({
            top: sectionPos,
            behavior: "smooth",
        });
    });
});




// Portfolio Sections Js

document.getElementById("portfolio_print").style.display = "none";
document.getElementById("portfolio_position").style.display = "none";
document.getElementById("portfolio_identity").style.display = "none";
document.getElementById("portfolio_branding").style.display = "none";


function all_menu() {

    // Take Menu ID
    document.getElementById("all_menu").classList.add('list_group_item_active');
    document.getElementById("print_menu").classList.remove('list_group_item_active');
    document.getElementById("position_menu").classList.remove('list_group_item_active');
    document.getElementById("identity_menu").classList.remove('list_group_item_active');
    document.getElementById("branding_menu").classList.remove('list_group_item_active');



    // Display Section
    document.getElementById("portfolio_all").style.display = "block";
    document.getElementById("portfolio_print").style.display = "none";
    document.getElementById("portfolio_position").style.display = "none";
    document.getElementById("portfolio_identity").style.display = "none";
    document.getElementById("portfolio_branding").style.display = "none";
}

function print_menu() {

    // Take Menu ID
    document.getElementById("all_menu").classList.remove('list_group_item_active');
    document.getElementById("print_menu").classList.add('list_group_item_active');
    document.getElementById("position_menu").classList.remove('list_group_item_active');
    document.getElementById("identity_menu").classList.remove('list_group_item_active');
    document.getElementById("branding_menu").classList.remove('list_group_item_active');



    // Display Section
    document.getElementById("portfolio_all").style.display = "none";
    document.getElementById("portfolio_print").style.display = "block";
    document.getElementById("portfolio_position").style.display = "none";
    document.getElementById("portfolio_identity").style.display = "none";
    document.getElementById("portfolio_branding").style.display = "none";
}

function position_menu() {

    // Take Menu ID
    document.getElementById("all_menu").classList.remove('list_group_item_active');
    document.getElementById("print_menu").classList.remove('list_group_item_active');
    document.getElementById("position_menu").classList.add('list_group_item_active');
    document.getElementById("identity_menu").classList.remove('list_group_item_active');
    document.getElementById("branding_menu").classList.remove('list_group_item_active');



    // Display Section
    document.getElementById("portfolio_all").style.display = "none";
    document.getElementById("portfolio_print").style.display = "none";
    document.getElementById("portfolio_position").style.display = "block";
    document.getElementById("portfolio_identity").style.display = "none";
    document.getElementById("portfolio_branding").style.display = "none";
}

function identity_menu() {

    // Take Menu ID
    document.getElementById("all_menu").classList.remove('list_group_item_active');
    document.getElementById("print_menu").classList.remove('list_group_item_active');
    document.getElementById("position_menu").classList.remove('list_group_item_active');
    document.getElementById("identity_menu").classList.add('list_group_item_active');
    document.getElementById("branding_menu").classList.remove('list_group_item_active');



    // Display Section
    document.getElementById("portfolio_all").style.display = "none";
    document.getElementById("portfolio_print").style.display = "none";
    document.getElementById("portfolio_position").style.display = "none";
    document.getElementById("portfolio_identity").style.display = "block";
    document.getElementById("portfolio_branding").style.display = "none";
}

function branding_menu() {

    // Take Menu ID
    document.getElementById("all_menu").classList.remove('list_group_item_active');
    document.getElementById("print_menu").classList.remove('list_group_item_active');
    document.getElementById("position_menu").classList.remove('list_group_item_active');
    document.getElementById("identity_menu").classList.remove('list_group_item_active');
    document.getElementById("branding_menu").classList.add('list_group_item_active');



    // Display Section
    document.getElementById("portfolio_all").style.display = "none";
    document.getElementById("portfolio_print").style.display = "none";
    document.getElementById("portfolio_position").style.display = "none";
    document.getElementById("portfolio_identity").style.display = "none";
    document.getElementById("portfolio_branding").style.display = "block";
}


// Loading Preloader
function onload_function() {
    document.getElementById('tCoder-preloader').style.display = "none";
}

// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('section').scrollIntoView({
    behavior: 'smooth'
});
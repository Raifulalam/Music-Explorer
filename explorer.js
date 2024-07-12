// for navbar responsive (togglenav)

function toggleNav() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}
const toggle = document.querySelector('.icon')
toggle.addEventListener('click', toggleNav)
toggle.style.color = 'green'

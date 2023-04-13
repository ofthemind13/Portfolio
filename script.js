window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function scrollWin() {

    window.scrollTo(0, 600);
}

function scrollWin1() {

    window.scrollTo(0, 1200);
}

function scrollWin2() {

    window.scrollTo(0, 1900);
}
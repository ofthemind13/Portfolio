window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function scrollWin() {

    window.scrollTo(0, 500);
}

function scrollWin1() {

    window.scrollTo(0, 900);
}
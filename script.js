window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function scrollAbout() {

    window.scrollTo(0, 700);
}

function scrollContact() {

    window.scrollTo(0, 1375);
}

function scrollWork() {

    window.scrollTo(0, 2200);
}
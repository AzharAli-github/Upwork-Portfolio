let navbar = document.querySelector(".navbar");
let x = true;

document.addEventListener("scroll", function() {
    if (x == true) {
        navbar.classList.add("scroll");
        x = false;
    }
});
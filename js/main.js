// When the user scrolls the page, execute myFunction
const sticky = header.offsetTop;
window.onscroll = (() => {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
})
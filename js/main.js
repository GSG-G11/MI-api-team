const sticky = header.offsetTop;
window.onscroll = (() => {
    if (window.pageYOffset > sticky) {
        header.style.transition = "all 1s";
        header.classList.add("sticky");
        faceBtn.style.transition = "all 1s";
        faceBtn.classList.add("face-ch");
        instaBtn.style.transition = "all 1s";
        instaBtn.classList.add("face-ch");
        twitterBtn.style.transition = "all 1s";
        twitterBtn.classList.add("face-ch");
    } else {
        header.classList.remove("sticky");
        faceBtn.classList.remove("face-ch");
        instaBtn.classList.remove("face-ch");
        twitterBtn.classList.remove("face-ch");
    }
})
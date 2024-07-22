document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 3;
        slides.style.transform = `translateX(${-index * 33.33}%)`;
    }, 5000);
});

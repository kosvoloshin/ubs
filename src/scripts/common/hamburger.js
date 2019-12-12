window.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".header").length > 0) {
        const header = document.querySelector(".header");
        const btn = document.querySelector(".hamburger");
        const menu = document.querySelector(".menu");

        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            menu.classList.toggle("active");
        });

        header.addEventListener("click", event => {
            if (event.target.classList.contains("menu__link") && btn.classList.contains("active")) {
                btn.classList.toggle("active");
                menu.classList.toggle("active");
            }
        });
    }
});

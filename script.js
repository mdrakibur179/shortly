const primaryNavigation = document.querySelector(".primary-navigation");
const navMenuToggler = document.querySelector(".nav-menu-toggler");

const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

const mainBody = document.querySelector(".main-body");

navMenuToggler.addEventListener("click", () => {
    const isExpanded = primaryNavigation.getAttribute("aria-expanded");

    if(isExpanded === "false") {
        primaryNavigation.setAttribute("aria-expanded", "true");
        mainBody.classList.add("scroll-off");
        iconHamburger.classList.add("icon-hidden");
        iconClose.classList.remove("icon-hidden");
    } else {
        primaryNavigation.setAttribute("aria-expanded", "false");
        mainBody.classList.remove("scroll-off");
        iconHamburger.classList.remove("icon-hidden");
        iconClose.classList.add("icon-hidden");
    }
});
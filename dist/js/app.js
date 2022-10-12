(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const html = document.querySelector("html");
    const headerList = document.querySelector(".header__container");
    document.addEventListener("click", (function(e) {
        if (headerList.classList.contains("_active-menu") && !e.target.closest(".main-header__list")) {
            html.classList.toggle("menu-open");
            headerList.classList.toggle("_active-menu");
        } else if (e.target.closest(".menu__icon")) {
            html.classList.toggle("menu-open");
            headerList.classList.toggle("_active-menu");
        }
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const menuItem = document.querySelector(".menu__item:nth-child(1)>.menu__link");
        const menuSublist = document.querySelector(".menu__sublist");
        menuItem.addEventListener("click", (function(e) {
            e.preventDefault();
            e.target;
            menuItem.classList.toggle("menu-bottom");
            if ("inline-grid" == menuSublist.style.display) {
                menuSublist.style.display = "none";
                menuSublist.classList.remove("show");
            } else {
                menuSublist.style.display = "inline-grid";
                menuSublist.classList.add("show");
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();
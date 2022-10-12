// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
/*
const menu = document.querySelector('.menu__list');
const menuList = document.querySelectorAll('.menu__item');

document.addEventListener("DOMContentLoaded", function () {
	let i = 2;
	let widthViewport = Math.max(
		document.documentElement.scrollWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
	resz();
	noStatic()
	window.onresize = function () {
		resz();
	};
	function noStatic() {
		if (widthViewport < menu.getBoundingClientRect().width) {
			resz()
		}
	}

	function resz() {

		if (menu.getBoundingClientRect().height > 25) {
			if (menu.lastElementChild.style.display == 'none') {
				menu.children[menu.children.length - i].style.display = 'none'
				i++;
			}
			console.log('111');
			menu.lastElementChild.style.display = 'none';
		}
	}
});
*/

const html = document.querySelector('html');
const headerList = document.querySelector('.header__container');

document.addEventListener("click", function (e) {
	if (headerList.classList.contains('_active-menu') && !e.target.closest('.main-header__list')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	} else if (e.target.closest('.menu__icon')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const menuItem = document.querySelector('.menu__item:nth-child(1)>.menu__link');
	const menuSublist = document.querySelector('.menu__sublist');

	menuItem.addEventListener("click", function (e) {
		e.preventDefault();
		const target = e.target;

		menuItem.classList.toggle('menu-bottom');

		if (menuSublist.style.display == 'inline-grid') {
			menuSublist.style.display = 'none';
			menuSublist.classList.remove('show');
		} else {
			menuSublist.style.display = 'inline-grid';
			menuSublist.classList.add('show');
		}
	});
});
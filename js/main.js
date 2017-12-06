var iconOpenMenu = document.getElementById('iconOpenMenu');
var navigation = document.getElementById('navigation');
var logoMenu = document.getElementById('logoMenu');

function toggleMenu() {
	navigation.classList.toggle('toggleMenu');
	logoMenu.classList.toggle('hiddenMainLogo');
	iconOpenMenu.classList.toggle('menu-bg--exit');
}

iconOpenMenu.addEventListener('click', toggleMenu);
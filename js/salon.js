/* TOGGLE THE MOBILE MENU FUNCTION */
const toggleMobileMenu = () => {
	const hamburger = document.getElementsByClassName("hamburger")[0];
	const homepage = document.getElementsByClassName("homepage")[0];
	const navbar = document.getElementsByClassName("navbar")[0];
	const menu_container = document.getElementsByClassName("menu-container")[0];
	const isVisible = homepage.classList.contains("scroll-stop");
	if (isVisible) {
		homepage.classList.remove("scroll-stop");
		navbar.classList.remove("active");
		menu_container.classList.remove("active");
		hamburger.classList.remove("active");
	} else {
		homepage.classList.add("scroll-stop");
		navbar.classList.add("active");
		menu_container.classList.add("active");
		hamburger.classList.add("active");
	}
};
/* SHOW OR HIDE THE NAVBAR ON SCROLL FUNCTION */
const scrollToggleNavbar = () => {
	let lastScroll = 0;
	const navbar = document.getElementsByClassName("navbar")[0];
	window.addEventListener("scroll", () => {
		const scrollTop = window.scrollY;
		if (scrollTop <= 100) {
			lastScroll = 0;
			navbar.classList.remove("scroll-down");
			navbar.classList.remove("scroll-up");
			return;
		}
		if (scrollTop > lastScroll) {
			lastScroll = scrollTop;
			navbar.classList.add("scroll-down");
			navbar.classList.remove("scroll-up");
		} else if (scrollTop < lastScroll) {
			lastScroll = scrollTop;
			navbar.classList.remove("scroll-down");
			navbar.classList.add("scroll-up");
		}
	});
};
scrollToggleNavbar();

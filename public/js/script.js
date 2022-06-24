let hamburger = document.querySelector('nav input');
let navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', function(){
	// navItems.classList.toggle('-top-[44rem]')
	navItems.classList.toggle('-left-[70rem]')
	navItems.classList.toggle('-left-[0rem]')

})

	var posisiY = 0;
	var jarak = 20;
	function smoothScroll(id){
		var target = document.getElementById(id).offsetTop;
		var scrollAnimate = setTimeout(function(){
			smoothScroll(id);
		}, 5)

		posisiY = posisiY + jarak;

		if (posisiY >= target) {
			clearTimeout(scrollAnimate);
			posisiY = 0;
		}else {
			window.scroll(0, posisiY)
		}
	}
let hamburger = document.querySelector('nav input');
let navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', function(){
	navItems.classList.toggle('-top-[44rem]')
	navItems.classList.toggle('top-16')
	document.querySelector('body').classList.toggle('fixed')
})


const fill = document.querySelectorAll('.fill');

for (let i = 0; i < fill.length; i++) {
	let val = fill[i].dataset.width;
	fill[i].style.width = `${val}%`;
	fill[i].animate([{
		width: '0%'
	}, {
		width: `${val}%`
	}], {
		duration: 4000
	});
}

const btn = document.querySelector('.scroll');
const links = document.querySelectorAll('.list a.link');

btn.addEventListener('click', function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})


window.onscroll = function () {
	if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
		btn.style.opacity = '0.8';
		btn.style.visibility = 'visible';
	} else {
		btn.style.opacity = '0';
		btn.style.visibility = 'hidden';
	}
}

const sections = document.querySelectorAll('section');

function changeLinkState() {
	let index = sections.length;
	while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
	links.forEach((link) => link.classList.remove('active'));
	links[index].classList.add('active');

}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
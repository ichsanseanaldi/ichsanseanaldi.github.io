// const link = document.querySelectorAll('.link');

// for (let i = 0; i < link.length; i++) {
// 	link[i].addEventListener('click', function (e) {
// 		let active = document.querySelectorAll('.active');

// 		if (active.length > 0) {
// 			document.querySelector('.active').classList.remove('active');
// 			e.target.classList.toggle('active');
// 		} else {
// 			e.target.classList.add('active');
// 		}
// 	});
// }

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

btn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})


window.onscroll = () => {
	if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
		btn.style.opacity = '0.8';
		btn.style.visibility = 'visible';
	} else {
		btn.style.opacity = '0';
		btn.style.visibility = 'hidden';
	}

	// Script below is not effective, but it's the best i can do, Dont repeat urself!!

	// if (document.documentElement.scrollTop >= 0 & document.documentElement.scrollTop < 500) {
	// 	links[0].classList.add('active');
	// } else {
	// 	links[0].classList.remove('active');
	// }
	// if (document.documentElement.scrollTop >= 550 & document.documentElement.scrollTop < 1000) {
	// 	links[1].classList.add('active');
	// } else {
	// 	links[1].classList.remove('active');
	// }
	// if (document.documentElement.scrollTop >= 1100 & document.documentElement.scrollTop < 2640) {
	// 	links[2].classList.add('active');
	// } else {
	// 	links[2].classList.remove('active');
	// }


}

//script below are from stack overflow

const sections = document.querySelectorAll('section');

function changeLinkState() {
	let index = sections.length;
	while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

	links.forEach((link) => link.classList.remove('active'));
	links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
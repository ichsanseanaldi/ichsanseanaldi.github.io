const fill = document.querySelectorAll('.fill');
const btn = document.querySelector('.scroll');
const links = document.querySelectorAll('.list a.link');
const sections = document.querySelectorAll('section');
const numbers = document.querySelectorAll('.number');

numbers.forEach(el => {
	let f = el.dataset.number;
	let b = 0;
	let ct = setInterval(() => {
		if (b <= f) {
			el.innerText = `${b}%`;
			b++;
		} else {
			clearInterval(ct);
		}
	}, 16, 'linear');
})

fill.forEach(e => {
	let v = e.dataset.width;
	let a = 0;
	let c = setInterval(() => {
		if (a <= v) {
			e.style.width = `${a}%`;
			a++;
		} else {
			clearInterval(c);
		}
	}, 16, 'linear');
})

btn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', () => {
	if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
		btn.style.opacity = '0.8';
		btn.style.visibility = 'visible';
	} else {
		btn.style.opacity = '0';
		btn.style.visibility = 'hidden';
	}
})

window.addEventListener('scroll', () => {
	let index = sections.length;
	while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
	links.forEach((link) => link.classList.remove('active'));
	links[index].classList.add('active');
})
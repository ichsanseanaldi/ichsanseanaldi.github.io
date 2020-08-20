const z = document.querySelectorAll('.fill');
const l = document.querySelectorAll('.list a.link');
const s = document.querySelectorAll('section');
const n = document.querySelectorAll('.number');
const g = document.querySelector('.scroll');

n.forEach(el => {
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

z.forEach(e => {
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

g.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', () => {
	if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
		g.style.opacity = '0.8';
		g.style.visibility = 'visible';
	} else {
		g.style.opacity = '0';
		g.style.visibility = 'hidden';
	}
})

window.addEventListener('scroll', () => {
	let index = s.length;
	while (--index && window.scrollY + 50 < s[index].offsetTop) {}
	l.forEach((link) => link.classList.remove('active'));
	l[index].classList.add('active');
})
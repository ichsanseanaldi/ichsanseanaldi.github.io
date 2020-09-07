const z = document.querySelectorAll('.fill');
const l = document.querySelectorAll('.list a.link');
const s = document.querySelectorAll('section');
const n = document.querySelectorAll('.number');
const g = document.querySelector('.scroll');

g.addEventListener('click', () => {
	if (document.scrollingElement.scrollTop === 0) return;

	const totalScrollDistance = document.scrollingElement.scrollTop;

	let scrollY = totalScrollDistance;
	let oldTimestamp = null;

	function step(newTimestamp) {
		if (oldTimestamp !== null) {
			scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / 700;
			if (scrollY <= 0) {
				return document.scrollingElement.scrollTop = 0;
			}
			document.scrollingElement.scrollTop = scrollY;
		}
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
});

setTimeout(() => {
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
		}, 1000 / 60, 'linear');
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
		}, 1000 / 60, 'linear');
	})
}, 1000);


window.addEventListener('scroll', () => {
	(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) ? g.classList.add('show'): g.classList.remove('show');
})

window.addEventListener('scroll', () => {
	let index = s.length;
	while (--index && window.scrollY + 50 < s[index].offsetTop) {}
	l.forEach((link) => link.classList.remove('active'));
	l[index].classList.add('active');
	history.pushState(null, null, '#' + s[index].getAttribute('id'));
})
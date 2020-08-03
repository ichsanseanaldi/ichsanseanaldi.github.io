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
	fill[i].animate([{ width: '0%' }, { width: `${val}%` }], { duration: 1000 });
}

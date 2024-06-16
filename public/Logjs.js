var sa = [...document.querySelectorAll('.switcher')];
sa.forEach(item => {
	item.addEventListener('click', function () {
		sa.forEach(switcher => switcher.parentElement.classList.remove('is-active'));
		this.parentElement.classList.add('is-active');
	});
});

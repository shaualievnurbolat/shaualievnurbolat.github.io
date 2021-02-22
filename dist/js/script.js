const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const link = document.querySelectorAll('.menu__link');

link.forEach( (item) => {
	item.addEventListener('click', () => {
		menu.classList.remove('active');
	})
});

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: 'POST',
		url: 'mailer/smart.php',
		data: $(this).serailize()
	}).done(function() {
		$(this).find('input').val('');

		$('form').trigger('reset');
	});
	return false;
});


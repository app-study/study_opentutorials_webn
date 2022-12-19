function set_color(color) {
	var list_a = document.querySelectorAll('a');
	var no = 0;
	while (no < list_a.length) {
		list_a[no].style.color = color;
		no += 1;
	}
}

var Links = {
	setColor: function(color) {
		var list_a = document.querySelectorAll('a');
		var no = 0;
		while (no < list_a.length) {
			list_a[no].style.color = color;
			no += 1;
		}
	}
}

var Body = {
	setColor: function(color) {
		document.querySelector('body').style.color = color;
	},
	setBackgroundColor: function(color) {
		document.querySelector('body').style.backgroundColor = color;
	}
}

function night_day_handler(self) {
	 // var target = document.querySelector('body');

	if(self.value === 'night') {
		// target.style.backgroundColor = 'black';
		// target.style.color = 'white';

		Body.setBackgroundColor('black');
		Body.setColor('white');

		// color: 글씨 색깔
		self.value = 'day';
		document.querySelector('#night_day2').value = 'day';

		// set_color('powderblue');
		Links.setColor('powderblue');
	}
	else {
		// target.style.backgroundColor = 'white';
		// target.style.color = 'black';

		Body.setBackgroundColor('white');
		Body.setColor('black');

		self.value = 'night';
		document.querySelector('#night_day2').value = 'night';

		// set_color('blue');
		Links.setColor('blue');
	}
}
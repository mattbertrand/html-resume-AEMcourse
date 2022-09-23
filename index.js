import Contact from './Contact.js';

const formInfo = document.getElementById('formInfo');
let hasJob = true;

if (hasJob) {
	showMessage('Thanks for visiting, I am currently employed.');
} else {
	showMessage('Please look around, I am currently looking for a position.');
}

let today = new Date();
let dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
	showMessage(
		'Since it is the weekend, please be patient with my returning your email'
	);
} else {
	showMessage('I am available from 8am PST to 6pm PST');
}

function showMessage(message) {
	formInfo.innerHTML = '<p>' + message + '</p>';
}

function clearMessage() {
	formInfo.innerHTML = '';
}

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const contact = new Contact(contactForm);
	contact.send();
});

const experiences = document.getElementsByClassName('experience');

for (let x = 0; x < experiences.length; x++) {
	const item = experiences[x];
	item.addEventListener('mouseenter', function (event) {
		event.target.style = 'background-color: #999999;';
	});
	item.addEventListener('mouseleave', function (event) {
		event.target.style = '';
	});
}

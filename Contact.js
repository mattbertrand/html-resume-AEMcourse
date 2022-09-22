export default class Contact {
	constructor(form) {
		this.fullName = form.elements['fullName'].value;
		this.email = form.elements['email'].value;
		this.subject = form.elements['subject'].value;
		this.body = form.elements['body'].value;
	}

	fullName = '';
	email = '';
	subject = '';
	body = '';

	send() {
		console.info(this.formatMessage());
		document.getElementById('formInfo').innerHTML =
			'Please wait, sending your email... Thank you';
	}

	formatMessage() {
		return `To: ${this.fullName}
                Email: ${this.email}
                Subject: ${this.subject}
                Body: ${this.body}`;
	}
}

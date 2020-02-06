function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "somasumbe@gmail.com",
	Password : "Shivansh@9028",
	To : 'somasumbe@gmail.com',
	From : "somasumbe@gmail.com",
	Subject : "gurukul",
	Body : "hii",
	}).then(
		message => alert("mail sent successfully")
	);
}
function sendEmail() {
	var name = document.getElementById("name").innerHTML = name;
	console.log(name);
	Email.send({
		
	Host: "smtp.gmail.com",
	Username : "anssoftware2013@gmail.com",
	Password : "Anssoftware@2013",
	To : 'anssoftware2013@gmail.com',
	From : "anssoftware2013@gmail.com",
	Subject : "gurukul i how are you ",
	Body : "hii hii  sdasda  da da d  adada   dadad",
	}).then(
		message => alert("mail sent successfully")
	);
}
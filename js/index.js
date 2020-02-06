function sendEmail() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var mass = document.getElementById("mass").value;
	Email.send({
		Host: "smtp.gmail.com",
		Username: "anssoftware2013@gmail.com",
		Password: "Anssoftware@2013",
		To: 'anssoftware2013@gmail.com',
		From: "anssoftware2013@gmail.com",
		Subject:subject,
		Body: " Name: "+ name+ "</br>" + " Email: "+ email+" </br>" +" Massage: "+ mass ,
		
	}).then(
		message => alert("mail sent successfully")
	);
}
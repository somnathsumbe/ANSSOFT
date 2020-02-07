function sendEmail() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("subject").value;
	var mass = document.getElementById("mass").value;
	Email.send({
		Host: "smtp.gmail.com",
		Username: "anssoftware2013@gmail.com",
		Password: "Anssoftware@2013",
		To: 'anssoftware2013@gmail.com',
		From: "anssoftware2013@gmail.com",
		Body: " Name: "+ name+ "" + "Mobile Number:"+mobile+" Email: "+ email+"" +" Massage: "+ mass ,
		
	}).then(
		 message=>"mail sent successfully"
	);
		alert('mail sent successfully');
  }



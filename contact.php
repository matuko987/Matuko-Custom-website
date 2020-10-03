<?php 
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_subject = "הודעה חדשה מלקוח";
	$email_body = "שם: .$name.\n".
						"אימייל: .$visitor_email.\n".
							"הודעה: .$message.\n";
	$to = "matoko6654@gmail.com";

	$headers = "מ: ".$visitor_email;

	mail($to,$email_subject,$email_body,$headers);

	header("Location: contact.html?mailsend");

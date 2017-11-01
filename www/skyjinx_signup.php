<?php


$email = $_POST["email"];
  
$hash = sprintf("%06d", mt_rand(1, 999999));
  






include('Mailer/PHPMailerAutoload.php');
    // include ('Mailer/class.phpmailer.php');
$mail = new PHPMailer;



$mail->SMTPDebug = 1;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = 'aksharsoftwaresolution@gmail.com';                 
$mail->Password = 'akshar1234';                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;                 



 
// To address and name
$mail->SetFrom("aksharsoftwaresolution@gmail.com", "Admin_Sky Jinx");
 // Recipient name is optional
$mail->AddAddress($email);


// Send HTML or Plain Text email
$mail->isHTML(true);

    $mail->Subject = "Sky Jinx: Login credentials";
    $mail->Body = 'Thanks for signing up!<br/>
    Your account has been created, you can login with the following credentials.<br/>
 
------------------------<br/>
Username: '.$email.'<br/>
Password: '.$hash.'<br/>
------------------------<br/>

 ';
 $mail->send();   

?>
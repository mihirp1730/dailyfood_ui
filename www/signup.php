


<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection



     $unm = $_POST["unm"];
	 $pswd = $_POST["pswd"];
	 $eml = $_POST["eml"];
	 $mnum = $_POST["mnum"];
	
	 $add1 = $_POST["add1"];
	 $add2 = $_POST["add2"];
	 $add3 = $_POST["add3"];
	 $hash = md5(rand(0,1000));
	 $acnt = "Customer"; 
	 $otp = mt_rand(100000, 999999);
     $token = bin2hex(mcrypt_create_iv(128, MCRYPT_DEV_RANDOM));



$result = mysqli_query($conn, "INSERT INTO logindaily (email, pswrd, uname, mobnum, account, otp, add1, add2, add3, hash, token) VALUES ('".$eml."','". $pswd."','". $unm."','". $mnum."', '". $acnt."','".$otp."','".$add1."','".$add2."','".$add3."', '".$hash."','".$token."');");



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
$mail->Username = 'daksheshpatel93@gmail.com';                 
$mail->Password = '89809104@dd';                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;                 



 
// To address and name
$mail->SetFrom("daksheshpatel93@gmail.com", "Admin_Daily Food");
 // Recipient name is optional
$mail->AddAddress($eml);


// Send HTML or Plain Text email
$mail->isHTML(true);

				$mail->Subject = "Daily Food: Activation Link";
				$mail->Body = 'Thanks for signing up!<br/>
				Your account has been created, you can login with the following credentials after you have activated your account by clicking the url below.<br/>
 
------------------------<br/>
Username: '.$unm.'<br/>
Password: '.$pswd.'<br/>
------------------------<br/>
 
Please click this link to verify your account:<br/>
http://cssent.com/demo/coffee/verify.php?email='.$eml.'&hash='.$hash.'
 ';
	//$mail->send();			





$utoh=mysqli_affected_rows($conn);

if($utoh==1)

{   
$api_key = '25826B565DECB6';
//$contacts = '8980910402';
$from = 'DLFOOD';
$sms_text = urlencode($otp. " is your daily food verification code");

//Submit to server

$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, "http://sms.smsroot.com/app/smsapi/index.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "key=".$api_key."&campaign=0&routeid=5&type=text&contacts=".$mnum."&senderid=".$from."&msg=".$sms_text);
$response = curl_exec($ch);
curl_close($ch);
$mail->send($eml,$hash);
}

else
{
	$cim=0; 
	echo $cim;
	
}
    



	 


?>
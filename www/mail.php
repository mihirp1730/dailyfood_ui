


<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";
		

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
 


$frgtmail= $_POST["frgtmail"];

$res = mysqli_query($conn, "SELECT pswrd, uname FROM logindaily WHERE email = '".$frgtmail."'");


$cxmm = array();


//if (mysqli_num_rows($result) > 0) {
    // output data of each row
  while ($row = mysqli_fetch_array($res)) {
  $cxmm = $row['pswrd'];
  $cxmm1 = $row['uname'];
  
}
   

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
$mail->AddAddress($frgtmail);


// Send HTML or Plain Text email
$mail->isHTML(true);

				$mail->Subject = "Daily Food: Account Recovery";
				$mail->Body = 'Username: '.$cxmm1.'<br/>
                               Password: '.$cxmm.'<br/>';

 


				if(mysqli_num_rows($res)===0)
				{
				    $cdd=0;
				    echo $cdd;
				} 
				else 
				{
				    $cdd="gyujcvb"; 
				     echo $cdd;
				     $mail->send();
				}
 

?>
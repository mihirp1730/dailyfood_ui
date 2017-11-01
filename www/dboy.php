


<?php

$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection



     $dunm = $_POST["dunm"];
	 $dpswd = $_POST["dpswd"];
	 $mobile = $_POST["mobile"];
	 $acnt = "Deliveryboy"; 
	
    

$result = mysqli_query($conn, "INSERT IGNORE INTO logindaily (uname, pswrd, account, mobnum) VALUES ('". $dunm."','". $dpswd."','". $acnt."', '". $mobile."');");




	 


?>
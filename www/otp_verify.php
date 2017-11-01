


<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
$unm = $_POST["unm"];
$otp = $_POST["otp"];


$result = mysqli_query($conn, "SELECT * FROM logindaily WHERE uname='". $_POST["unm"]."' AND otp='". $_POST["otp"]."'");




$otp_status= array();

if (mysqli_num_rows($result)!=0){
    // output data of each row

$result11 = mysqli_query($conn, "UPDATE logindaily SET otp_status='true' WHERE uname='".$unm."'");
 
 $otp_status=1;
}

else
{
$otp_status=0;

}


  echo json_encode($otp_status);    







	


?>
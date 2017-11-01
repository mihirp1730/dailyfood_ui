


<?php
date_default_timezone_set('Asia/Kolkata');


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection



     $unamell = $_POST["unamell"];
	 $tfn = $_POST["name"];
	 $eml = $_POST["tfn"];
	 $plm = $_POST["plm"];
	 $qntity = $_POST["qntity"];
	  $price = $_POST["price"];
	   $cdate = date('F d, Y');
        $ctime = date('H:i');




$result = mysqli_query($conn, "INSERT INTO orderlist (uname,tfntype, tfntime, qty, price, cdate, ctime) VALUES ('".$_POST["unamell"]."','".$_POST["name"]."','".$_POST["tfn"]."','". $_POST["plm"]."','". $_POST["qntity"]."','".$_POST["price"]."', '".$cdate."','".$ctime."');");



//if (mysqli_num_rows($result) > 0){
    // output data of each row
$utoh = mysqli_affected_rows($conn);


echo $utoh;

	 


?>
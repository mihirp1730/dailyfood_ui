<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
$add1 = $_POST["add1"];
$add2 = $_POST["add2"];
$add3 = $_POST["add3"];
$add4 = $_POST["add4"];
$unamell = $_POST["unamell"];


     
	 
	


$result = mysqli_query($conn, "UPDATE logindaily SET add1='".$add1."',add2='".$add2."', 
	add3='".$add3."', mobnum='".$add4."' WHERE uname='".$unamell."'");   




//if (mysqli_num_rows($result) > 0){
    // output data of each row 

	 


?>
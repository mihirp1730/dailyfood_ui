<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

 
   $rwv = $_POST["rwv"];
   $tname = $_POST["tname"];
   $rating = $_POST["rating"];
    
	
$result = mysqli_query($conn, "INSERT INTO review (tname, review, rating) VALUES ('".$tname."','". $rwv."','". $rating."');");

?>
<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
$id = $_POST["id"];


     
	 
	


$result = mysqli_query($conn, "UPDATE tfnprovider SET active='1' WHERE id='".$id."' AND active='0'");   




//if (mysqli_num_rows($result) > 0){
    // output data of each row 

	 


?>
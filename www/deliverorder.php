<?php

$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
$id = $_POST["id"];

	


$result = mysqli_query($conn, "UPDATE orderlist SET active='Delivered', payment_status='completed' WHERE id='".$id."'");   





?>
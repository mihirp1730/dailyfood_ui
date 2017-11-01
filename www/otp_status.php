<?php

$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection


	
$request_arr = json_decode( file_get_contents('php://input') );
$angular_var = $request_arr->angular_var;

$result = mysqli_query($conn, "UPDATE logindaily SET otp_status='true' WHERE uname='$angular_var'");   





?>
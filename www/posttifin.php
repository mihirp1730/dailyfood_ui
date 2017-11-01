<?php

$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection



     $unamell = $_POST["unamell"];
	  
	  $img = $_POST["img"];
	 $roti = $_POST["roti"];
	 $qroti = $_POST["qroti"];
	 $sabji = $_POST["sabji"];
	 $rice = $_POST["rice"];
	 $other = $_POST["other"];
	 $pfull = $_POST["pfull"];
	 $phalf = $_POST["phalf"];
	 $act = "1";
	

	$result = mysqli_query($conn, "UPDATE tfnprovider SET roti='".$roti."', qroti='".$qroti."', sabji='".$sabji."',rice='".$rice."', other='".$other."', fprice='".$pfull."', hprice='".$phalf."', docs='uploads/".$img."' WHERE active='mtoday'");   


//if (mysqli_num_rows($result) > 0){
    // output data of each row

	 


?>
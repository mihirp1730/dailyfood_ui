<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

 
   $review_edit = $_POST["review_edit"];
   $tname = $_POST["tname"];
   $rating = $_POST["rating"];
    


$result = mysqli_query($conn, "UPDATE review SET review='".$review_edit."',rating='".$rating."' WHERE tname='".$tname."'"); 

?>
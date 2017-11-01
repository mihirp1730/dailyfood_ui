<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

 
   $e_lunch = $_POST["e_lunch"];
   $e_tolunch = $_POST["e_tolunch"];
   $e_dinner = $_POST["e_dinner"];
   $e_todinner = $_POST["e_todinner"];
   $to = " to ";

  
    
   $d_lunchdetail =  $e_lunch . $to .$e_tolunch;

  

   $d_dinnerdetail =  $e_dinner . $to .$e_todinner;


$result = mysqli_query($conn, "UPDATE dailyfood_time SET lunch_estimated='".$d_lunchdetail."',dinner_estimated='".$d_dinnerdetail."'"); 

?>
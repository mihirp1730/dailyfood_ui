<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

 
   $d_lunch = $_POST["d_lunch"];
   $d_tolunch = $_POST["d_tolunch"];
   $o_lunch = $_POST["o_lunch"];
   $d_dinner = $_POST["d_dinner"];
   $d_todinner = $_POST["d_todinner"];
   $o_dinner = $_POST["o_dinner"];
   $t_lunch = $_POST["t_lunch"];
   $t_dinner = $_POST["t_dinner"];
   $to = " to ";

  
    
   $d_lunchdetail = "Delivery time for lunch: " .$d_lunch . $to .$d_tolunch;

   $o_lunchdetail = "You must have to order lunch before " .$o_lunch;


   
   $d_dinnerdetail = "Delivery time for dinner: " .$d_dinner . $to .$d_todinner;

   $o_dinnerdetail = "You must have to order dinner before " .$o_dinner;

   $t_dinneradd = $t_dinner+12;


   

$result = mysqli_query($conn, "UPDATE dailyfood_time SET lunch_time='".$d_lunchdetail."',lunch_order='".$o_lunchdetail."',dinner_time='".$d_dinnerdetail."',dinner_order='".$o_dinnerdetail."',toast_lunch='".$t_lunch."',toast_dinner='".$t_dinneradd."'"); 

?>
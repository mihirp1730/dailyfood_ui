


<?php

date_default_timezone_set('Asia/Kolkata');

$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

$request_arr = json_decode( file_get_contents('php://input') );
$angular_var = $request_arr->angular_var;

 
 
$result = mysqli_query($conn,"SELECT id,uname,add4,qty,tfntype,tfntime,price,cdate,payment_id,payment_status,TIME_FORMAT(ctime , '%h:%i %p') As ctime, (SELECT SUM(price) FROM orderlist WHERE cdate='$angular_var') FROM orderlist WHERE cdate='$angular_var'");



$records = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row

	 

	 while ($row = mysqli_fetch_array($result)) {
     
     $records[] = $row;
    
     
      }



 echo json_encode($records);
     
   

 

   

?>
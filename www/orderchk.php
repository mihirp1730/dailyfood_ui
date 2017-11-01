<?php

date_default_timezone_set('Asia/Kolkata');
$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
//$unamell = $_POST["unamell"];

$request_arr = json_decode( file_get_contents('php://input') );
$angular_var = $request_arr->angular_var;
 $cdate = date('F d, Y');


$result = mysqli_query($conn,"SELECT id,uname,rotyquantity,rotiname,sabjiname,ricename,othername,qty,tfntype,tfntime,price,cdate,
TIME_FORMAT(ctime , '%h:%i %p') As ctime, payment_id, payment_status, active FROM orderlist WHERE uname = '$angular_var' AND cdate = '".$cdate."'");


$confrm= array();

if (mysqli_num_rows($result)!=0){
    // output data of each row


	  while ($row = mysqli_fetch_array($result)) {

      $confrm[] = $row;
  
  
   
}
}

else
{
$confrm=0;

}


  echo json_encode($confrm);    




	
	
  


?>
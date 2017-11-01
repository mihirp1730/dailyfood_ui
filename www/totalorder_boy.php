


<?php

date_default_timezone_set('Asia/Kolkata');
$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
   $cdate = date('F d, Y');

$result = mysqli_query($conn, "SELECT SUM(qty) as 'total' FROM orderlist WHERE cdate='".$cdate."' AND active != 'Pending'");



$totalboy = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row
 
	  while ($row = mysqli_fetch_array($result)) {

      $totalboy[] = $row;
      
   
}





	echo json_encode($totalboy);

?>



<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
$request_arr = json_decode( file_get_contents('php://input') );
$angular_var1 = $request_arr->angular_var1;
$angular_var2 = $request_arr->angular_var2;

$result = mysqli_query($conn, "SELECT SUM(qty) as 'weekorder' FROM orderlist WHERE cdate BETWEEN '$angular_var1' AND '$angular_var2'");

$weekorder = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row

	  while ($row = mysqli_fetch_array($result)) {

      $weekorder[] = $row;
      
   
}





	echo json_encode($weekorder);

?>
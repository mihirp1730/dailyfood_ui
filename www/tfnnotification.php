


<?php


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



$result = mysqli_query($conn, "SELECT * FROM orderlist WHERE csname = '$angular_var'");

$tfn = array();

//if (mysqli_num_rows($result) > 0){
    // output data of each row


	  while ($row = mysqli_fetch_array($result)) {

      $tfn[] = $row;
      
   
}





	echo json_encode($tfn);
	
  


?>
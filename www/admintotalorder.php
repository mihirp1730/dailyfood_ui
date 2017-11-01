


<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
 $cdate = date('F d, Y');

$result = mysqli_query($conn, "SELECT * FROM orderlist");

$admintotal = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row
 $admintotal = mysqli_num_rows($result);
    // output data of each row
echo json_encode($admintotal);

?>
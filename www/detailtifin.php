


<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

$request_arr = json_decode( file_get_contents('php://input') );
$angular_var = $request_arr->angular_var;

$result = mysqli_query($conn,"SELECT * FROM tfnprovider");

$detailcxm = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row
  while ($row = mysqli_fetch_array($result)) {
  $detailcxm[] = $row;
}
    echo json_encode($detailcxm);

?>
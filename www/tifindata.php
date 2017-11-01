


<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection


$result = mysqli_query($conn, "SELECT * FROM tfnprovider WHERE active='1'");

$cxm = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row
  while ($row = mysqli_fetch_array($result)) {
  $cxm[] = $row;
}
    echo json_encode($cxm);

?>
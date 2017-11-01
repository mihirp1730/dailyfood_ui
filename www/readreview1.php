


<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

  $page = $_GET["review"];
   $items_per_page = 10;
   $offset = ($page - 1) * $items_per_page; 

$result = mysqli_query($conn, "SELECT * FROM review LIMIT $offset, $items_per_page");

$review = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row
  while ($row = mysqli_fetch_array($result)) {
  $review[] = $row;
}
    echo json_encode($review);

?>
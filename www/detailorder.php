


<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

$request_arr = json_decode( file_get_contents('php://input') );
$angular_var = $request_arr->angular_var;

$result = mysqli_query($conn,"SELECT id,uname,add1, add2, add3, add4, rotyquantity, rotiname, sabjiname, ricename, othername, qty,tfntype,tfntime,price,cdate,payment_id,payment_status,TIME_FORMAT(ctime , '%h:%i %p') As ctime, payment_id FROM orderlist WHERE id = '$angular_var'");

$detailcxm11 = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row
  while ($row = mysqli_fetch_array($result)) {
  $detailcxm11[] = $row;
}
    echo json_encode($detailcxm11);

?>



<?php
date_default_timezone_set('Asia/Kolkata');
$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
 $page = $_GET["pageresbill"];
 $daa = $_GET["daa"];
 $dbb = $_GET["dbb"];

//$page = $_GET["pageres"];
   $items_per_page = 4;
   $offset = ($page - 1) * $items_per_page; 
 
$result = mysqli_query($conn, "SELECT id,uname,add4,qty,tfntype,tfntime,price,cdate,payment_id,payment_status,TIME_FORMAT(ctime , '%h:%i %p') As ctime, (SELECT SUM(price) FROM orderlist WHERE cdate BETWEEN '".$daa."' AND '".$dbb."' LIMIT $offset, $items_per_page) FROM orderlist WHERE cdate BETWEEN '".$daa."' AND '".$dbb."' LIMIT $offset, $items_per_page");


$betrecords = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row

	 

	 while ($row = mysqli_fetch_array($result)) {
     
     $betrecords[] = $row;
    
     
      }



 echo json_encode($betrecords);
     
   

 

   

?>
<?php
    $servername = "css1036407030722.db.6503658.hostedresource.com";
    $username = "css1036407030722";
    $password = "csDev123";
    $dbname = "css1036407030722";
         
        
    $conn = mysqli_connect($servername, $username, $password, $dbname);
         
       
         
         /* Get total number of records */
   $page = $_GET["pageres"];
   $items_per_page = 4;
   $offset = ($page - 1) * $items_per_page; 
  
  $retval = mysqli_query($conn,"SELECT id,uname,add4,qty,tfntype,tfntime,price,cdate,payment_id,payment_status,TIME_FORMAT(ctime , '%h:%i %p') As ctime FROM orderlist LIMIT $offset, $items_per_page");    
            
      
      $dashorder = array();

//if (mysqli_num_rows($result) > 0) {
    // output data of each row
  while ($row = mysqli_fetch_array($retval)) {
  $dashorder[] = $row;
}
    echo json_encode($dashorder);
      ?>
      
   
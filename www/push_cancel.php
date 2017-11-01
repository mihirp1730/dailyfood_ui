<?php
date_default_timezone_set('Asia/Kolkata');


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);


// Check connection
//orderlist.php
     $uname=$_POST["unamell"];
    
     $add1 = $_POST["add1"];
     $add2 = $_POST["add2"];
     $add3 = $_POST["add3"];
     $add4 = $_POST["add4"];
     $rotyquantity = $_POST["rotyquantity"];
     $rotiname = $_POST["rotiname"];
     $sabjiname = $_POST["sabjiname"];
     $ricename = $_POST["ricename"];
     $othername = $_POST["othername"];
     $qntity = $_POST["qntity"];
     $tfn = $_POST["tfn"];
     $plm = $_POST["plm"];
     $price = $_POST["price"];
    // $paymentid = $_POST["paymentid"];
     $payment_status = "awaited";
     $cdate = date('F d, Y');
     $ctime = date('H:i');
     $test = "hii"; 

$result = mysqli_query($conn, "INSERT INTO orderlist (uname, add1, add2, add3, add4, rotyquantity, rotiname, sabjiname, ricename, othername, qty, tfntype, tfntime, price, cdate, ctime, payment_id, payment_status) VALUES ('".$uname."','".$add1."','".$add2."','".$add3."','".$add4."','".$rotyquantity."','".$rotiname."','".$sabjiname."','".$ricename."','".$othername."','".$qntity."','".$tfn."','".$plm."','".$price."','".$cdate."','".$ctime."','".$paymentid."','".$payment_status."');");







?>
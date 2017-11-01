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
     $paymentid = $_POST["paymentid"];
     $payment_status = "completed";
     $cdate = date('F d, Y');
     $ctime = date('H:i');
     $test = "hii"; 

$result = mysqli_query($conn, "INSERT INTO orderlist (uname, add1, add2, add3, add4, rotyquantity, rotiname, sabjiname, ricename, othername, qty, tfntype, tfntime, price, cdate, ctime, payment_id, payment_status) VALUES ('".$uname."','".$add1."','".$add2."','".$add3."','".$add4."','".$rotyquantity."','".$rotiname."','".$sabjiname."','".$ricename."','".$othername."','".$qntity."','".$tfn."','".$plm."','".$price."','".$cdate."','".$ctime."','".$paymentid."','".$payment_status."'');");



if($test=='hii'){
$result11 = mysqli_query($conn, "SELECT gcm FROM logindaily WHERE account = 'Admin'");
}

$cfff = array();

     while ($row = mysqli_fetch_array($result11)) {
    $cvb = $row['gcm'];
   
   
    }




$to=$cvb;  
$title="Daily food";
$message='New order from ' . $uname;
sendPush($to,$title,$message);

function sendPush($to,$title,$message)
{
// API access key from Google API's Console
// replace API
define( 'API_ACCESS_KEY', 'AIzaSyCX9loUr7_jBONBCfgIZop0Q7fpK138eQY');
$registrationIds = array($to);
$msg = array
(
'message' => $message,
'title' => $title,
'vibrate' => 1,
'sound' => 1
//'tickerText' => 'Ticker text here...Ticker text here...Ticker text here'
 //'largeIcon' => 1
 

// you can also add images, additionalData
);
$fields = array
(
'registration_ids' => $registrationIds,
'data' => $msg
);
$headers = array
(
'Authorization: key=' . API_ACCESS_KEY,
'Content-Type: application/json'
);
$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );
echo $result;
}






?>
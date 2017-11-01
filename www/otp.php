<?php
$api_key = '25826B565DECB6';
$contacts = '8980910402';
$otp = mt_rand(100000, 999999);
$from = 'DLFOOD';
$sms_text = urlencode($otp. " is your daily food verification code" );

//Submit to server

$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, "http://sms.smsroot.com/app/smsapi/index.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "key=".$api_key."&campaign=0&routeid=5&type=text&contacts=".$contacts."&senderid=".$from."&msg=".$sms_text);

$response = curl_exec($ch);

curl_close($ch);
echo $response;

?>

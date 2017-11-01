


<?php


$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
$unamell = $_POST["unamell"];
$pswrdll = $_POST["pswrdll"];
$gcm = $_POST["gcm"];
$test="hii";


$result = mysqli_query($conn, "SELECT * FROM logindaily WHERE uname='". $_POST["unamell"]."' AND pswrd='". $_POST["pswrdll"]."' AND otp_status='true'");

//$lgnn = array();
if($test="hii"){

	$result11 = mysqli_query($conn, "UPDATE logindaily SET gcm='".$gcm."' WHERE uname='".$unamell."'");

}



if (mysqli_num_rows($result) > 0){

 while ($row = mysqli_fetch_array($result)) {
           $lgnn=$row;
         
	  		# code..
	  		  echo json_encode($lgnn);
	  	
	  	}
	  



}

    // output data of each row


	 
	  
     else

     {

     	$lgnn=0;
     		
	  		 echo json_encode($lgnn);
	  	
     }
      
   







	


?>

<?php

$servername = "css1036407030722.db.6503658.hostedresource.com";
$username = "css1036407030722";
$password = "csDev123";
$dbname = "css1036407030722";
		

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

    // Verify data
    $email = $_GET['email']; // Set email variable
    $hash = $_GET['hash']; // Set hash variable
                 
    $search = mysqli_query($conn, "SELECT email, hash, active FROM logindaily WHERE email='".$_GET['email']."' AND hash='".$_GET['hash']."' AND active='0'") or die(mysql_error()); 
   
                 
    if(mysqli_num_rows($search) > 0){
        // We have a match, activate the account
        mysqli_query($conn, "UPDATE logindaily SET active='1' WHERE email='".$_GET['email']."' AND hash='".$_GET['hash']."' AND active='0'") or die(mysql_error());
        echo '<div class="statusmsg">Your email address verified successfully</div>';
    }else{
        // No match -> invalid url or account has already been activated.
        echo '<div class="statusmsg">The url is either invalid or you already have activated your account.</div>';
    }
                 


?>
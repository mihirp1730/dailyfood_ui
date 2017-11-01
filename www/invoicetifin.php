


<?php


$servername = "mysql.hostinger.in";
$username = "u617895561_ass";
$password = "S90wWvh3TT";
$dbname = "u617895561_ass";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection




$result = mysqli_query($conn, "SELECT MIN(id) AS id, name, city, rating
FROM tfnprovider WHERE active='1' GROUP BY name ");

$tfndata = array();

//if (mysqli_num_rows($result) > 0){
    // output data of each row


	  while ($row = mysqli_fetch_array($result)) {

      $tfndata[] = $row;
      
   
}





	echo json_encode($tfndata);
  


?>
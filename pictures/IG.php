<?PHP

$servername = "localhost";
$username = "cjmario";
$password = "cjmario";
$dbname = "CJMario";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

date_default_timezone_set('Asia/Taipei');
$clicks = $_POST['clicks'];
$date = date("Y-m-d H:i:s");

if(!empty($_SERVER["HTTP_client_IP"])){
	$ip = $_SERVER["HTTP_client_IP"];
}else if(!(empty($_SERVER["HTTP_X_FORWARDED_FOR"]))){
	$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
}else{
	$ip = $_SERVER["REMOTE_ADDR"];
}

$sql = "INSERT INTO IG (click, CDT, ip)
VALUES ('$clicks', '$date', '$ip')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
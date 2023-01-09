// http://localhost:8888/phpMyAdmin/index.php?route=/sql&server=1&db=orderinfo&table=users&pos=0
<?php
class Database{

    private $host = "localhost";
    private $user = "root";
    private $pass = "root";
    private $db = "orderinfo";

    protected $conn;

 
    public function __construct(){
        $this->conn = mysqli_connect($this->host, $this->user, $this->pass, $this->db);
        if(!$this->conn){
            die("Error connecting to db");
        }
    }
}


// get the post records
$username = $_POST['username'];
$password = $_POST['password'];


// database insert SQL code
$sql = "INSERT INTO `users` (`username`, `password`) VALUES ('$username', '$password')";


// insert in database
$rs = mysqli_query($conn, $sql);

    if($rs){
        header("Location: /html/login.html");
        exit();
    }
?>
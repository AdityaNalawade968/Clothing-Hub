<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "127.0.0.1:3306";
$username = "u356193240_clothinghub";
$password = "Adipatil@007";  
$dbname = "u356193240_clothinghub"; 
 
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

// Utility function for hashing passwords
function hashPassword($password) {
    return password_hash($password, PASSWORD_BCRYPT);
}

// Utility function for verifying passwords
function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}

// Read input
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($data['action'] === 'register') {
        $username = $data['username'];
        $email = $data['email'];
        $password = hashPassword($data['password']);

        $query = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $query->bind_param("sss", $username, $email, $password);

        if ($query->execute()) {
            echo json_encode(["status" => "success", "message" => "User registered successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Registration failed"]);
        }
    } elseif ($data['action'] === 'login') {
        $email = $data['email'];
        $password = $data['password'];

        $query = $conn->prepare("SELECT password FROM users WHERE email = ?");
        $query->bind_param("s", $email);
        $query->execute();
        $query->bind_result($hash);
        $query->fetch();

        if (verifyPassword($password, $hash)) {
            echo json_encode(["status" => "success", "message" => "Login successful"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
        }
    }
}
$conn->close();
?>

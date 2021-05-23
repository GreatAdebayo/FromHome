<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'index.php';
header("Access-Control-Allow-Origin: $localhostUrl");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Accept, Authorization, X-Requested-With");
$authorize = getallheaders()['Authorization'];
$tmpLocation = $_FILES['myFile']['tmp_name'];
$filename = basename($_FILES['myFile']['name']);
$ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
$currentTime = time();
$arr = ['jpg', 'jpeg'];
$newIndex = new MyIndex;
$newIndex->profilePics($authorize, $tmpLocation, $filename, $ext, $currentTime, $arr);
?>
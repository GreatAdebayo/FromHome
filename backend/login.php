<?php
include 'index.php';
header("Access-Control-Allow-Origin: $localhostUrl");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Accept, Authorization, X-Requested-With");
$details = json_decode(file_get_contents('php://input'));
function trimInputs($val){
  return trim($val);
 } 
 $email = trimInputs($details->email); 
 $password = trimInputs($details->password);
 $newIndex = new MyIndex;
 $newIndex->loginUser($email, $password);
?>
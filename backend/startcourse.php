<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

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
 $token = trimInputs($details->token); 
 $code = trimInputs($details->code);
 $title = trimInputs($details->title);
 $desc = trimInputs($details->desc);
 $tutor = trimInputs($details->tutor);
 $cost = trimInputs($details->cost);
 $pic = trimInputs($details->pic);
 $newIndex = new MyIndex;
 $newIndex->startCourse($token,  $code, $title, $desc, $tutor, $pic, $cost);
?>
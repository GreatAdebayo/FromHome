<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

include 'index.php';
header("Access-Control-Allow-Origin: $localhostUrl");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type");
$course = json_decode(file_get_contents('php://input'));
function trimInputs($val){
  return trim($val);
 } 
$category = trimInputs($course->category); 
$cost = trimInputs($course->cost);
$desc = trimInputs($course->desc);
$title = trimInputs($course->title);
$userId = trimInputs($course->userId);
$courseCode = trimInputs($course->code);
$section = $course->section;
$newIndex = new MyIndex;
$newIndex->postCourse($category, $cost, $desc, $title, $userId, $courseCode, $section);
?>
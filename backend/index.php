<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception; 
require('vendor/autoload.php');
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
use \Firebase\JWT\JWT;
$localhostUrl = "http://localhost:3000";


class MyIndex {
 //API STARTS//
 public $response = array('UserExists'=>'', 'AccountCreated'=>'', 'VerifyCodeSent'=>'', 
 'CodeExpired'=>'', 'CodeCorrect'=>'', 'CodeWrong'=>'', 'VerifyCodeReSent'=>'', 'EmailNotFound'=>'',
 'Auth'=>'', 'LoginSuccess'=>'', 'UserInfo'=>'', 'Verify'=>'', 'CoursePosted'=>'', 'CreatedCourse'=>'', 
 'SearchedCourses'=>'', 'CourseDetails'=>'', 'CourseSection'=>'', 'FileLarge'=>'', 'FileUploaded'=>'', 
 'FileNotUploaded'=>'', 'FileNotSupported'=>'', 'AlreadySaved'=>'', 'CourseSaved'=>'', 'SavedCourse'=>'', 'WelcomeBack'=>'',
 'HappyLearning'=>'', 'MyLearning'=>'', 'Sections'=>'');
//API ENDS//


//DATABASE CONNECTION STARTS//
 public function __construct(){
   $servername = $_ENV['SERVERNAME'];
   $username = $_ENV['USERNAME'];
   $password =$_ENV['PASSWORD'];
   $dbname = $_ENV['DBNAME'];
   $this->conn = new mysqli($servername, $username, $password, $dbname); 
   if(!$this->conn){
        die();
     }
   }
 //DATABASE CONNECTION ENDS//


 //ACCOUNT CREATION STARTS//
 public function createAccount($firstName, $lastName, $email, $hashedPassword){
     $checkAlreadyExistAccount = "SELECT * FROM users_tb WHERE email = ?";
     $stmt = $this->conn->prepare($checkAlreadyExistAccount);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $res = $stmt->get_result();
     if($res->num_rows > 0){
      $myFetchedUser = $res->fetch_assoc();
      $status = $myFetchedUser['verification_status'];
      if($status == 'false'){
        $response['Verify'] = 'Verify';
      }else{
       $response['UserExists'] = 'UserExists';
      }
        }else{
        $createSql = "INSERT INTO users_tb(first_name, last_name, email, password) 
        VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($createSql); 
        $stmt->bind_param("ssss", $firstName, $lastName, $email, $hashedPassword);
     if($stmt->execute()){
       $response['AccountCreated'] = 'AccountCreated';
       $checkEmail = "SELECT * FROM users_tb WHERE email = ?";
       $stmt = $this->conn->prepare($checkEmail);
       $stmt->bind_param("s", $email);
       $stmt->execute();
       $res = $stmt->get_result();
           if($res->num_rows > 0){
       $myFetchedUser = $res->fetch_assoc();
       $userId = $myFetchedUser['user_id'];
       $InsertVerifyCode = "INSERT INTO verification_tb(user_id) 
       VALUES (?)";
       $stmt = $this->conn->prepare($InsertVerifyCode); 
       $stmt->bind_param("s",  $userId);
       $stmt->execute();
                   }
           } 
          }
    echo json_encode($response);
    $stmt->close();
 } 
//ACCOUNT CREATION ENDS//




  // SEND VERIFICATION CODE STARTS//
   public function sendVerificationCode($email){
  //verify if email exists starts//
   $code = rand();
   $checkEmail = "SELECT * FROM users_tb WHERE email = ?";
   $stmt = $this->conn->prepare($checkEmail);
   $stmt->bind_param("s", $email);
   $stmt->execute();
   $res = $stmt->get_result();
   if($res->num_rows > 0){
   $myFetchedUser = $res->fetch_assoc();
   $userId = $myFetchedUser['user_id'];
   $lastName = $myFetchedUser['last_name'];
   //verify if email exists ends//


   //phpMailer sends verification code starts//
   $mail = new PHPMailer(true);
   try {
   //Server settings
   $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
   $mail->isSMTP();                                           
   $mail->Host       = 'smtp.gmail.com';                     
   $mail->SMTPAuth   = true;                               
   $mail->Username   = 'thriftappng@gmail.com';                    
   $mail->Password   = 'Libertycity2020$';                              
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         
   $mail->Port       = 465;                                   
   $mail->SMTPOptions = array(
   'ssl' => array(
   'verify_peer' => false,
   'verify_peer_name' => false,
   'allow_self_signed' => true
   )
   );
   $mail->SMTPDebug = 0;
   //Recipients
   $mail->setFrom('thriftappng@gmail.com', 'FromHome');
   $mail->addAddress($email, $lastName);    
   $mail->addAddress($email);             
   
   $mail->isHTML(true);                                  
   $mail->Subject = 'Confirmation code';
   $mail->Body    = $code;
   $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
   
   $mail->send();
   } catch (Exception $e) {
   echo 'error';
   }
   //phpMailer verification code ends//

  //send verification code to database starts//
  $ExpiringTime = time() + (60 * 2);
  $UpdateVerifyCode = "UPDATE verification_tb SET code = ?, expiring_time = ? WHERE user_id = ?";
  $stmt = $this->conn->prepare($UpdateVerifyCode); 
  $stmt->bind_param("sss", $code, $ExpiringTime, $userId);
  if($stmt->execute()){
  $response['VerifyCodeSent'] = 'VerifyCodeSent';
  }
   }else{
    $response['EmailNotFound'] = 'EmailNotFound'; 
   }
   echo json_encode($response);
   $stmt->close();
  //send verification code to database ends//
  }
  //SEND VERIFICATION CODE ENDS//



  //CONFIRM VERIFICATION STARTS//
  public function confirmCode($email, $code){
    $CurrentTime = time();
    $x = [];
    $checkEmail  = "SELECT * FROM users_tb WHERE email = ?";
    $stmt = $this->conn->prepare($checkEmail);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();
    if($res->num_rows > 0){
    $myFetchedUser = $res->fetch_assoc();
    $userId = $myFetchedUser['user_id'];
    $checkCode = "SELECT * FROM verification_tb WHERE user_id = ?";
    $stmt = $this->conn->prepare($checkCode);
    $stmt->bind_param("s", $userId);
    $stmt->execute();
      $res = $stmt->get_result();
      if($res->num_rows > 0){
      while($row = $res->fetch_array()){
      $x[] = $row; 
      foreach($x as $c);
      $fetchedCode = $c['code'];
      $fetchedExpTime = $c['expiring_time'];
  
      if($fetchedCode == $code){
      if($CurrentTime > $fetchedExpTime){
      $response['CodeExpired'] = 'CodeExpired';    
      }
      else{
      $response['CodeCorrect'] = 'CodeCorrect';
      $true = 'true';
      $UpdateVerifyStatus = "UPDATE users_tb SET verification_status
      = ? WHERE user_id = ?";
      $stmt = $this->conn->prepare($UpdateVerifyStatus); 
      $stmt->bind_param("ss", $true, $userId);
      $stmt->execute();
      }
      }else {
        $response['CodeWrong'] = 'CodeWrong'; 
      }
      }    
         }
        }else{
     $response['EmailNotFound'] = 'EmailNotFound'; 
        }
     echo json_encode($response);
     }
//CONFIRM VERIFICATION ENDS//


  //USER LOGIN STARTS//
    public function loginUser($email, $password){
      $checkEmail = "SELECT * FROM users_tb WHERE email = ?";
      $stmt = $this->conn->prepare($checkEmail);
      $stmt->bind_param("s", $email);
      $stmt->execute();
      $res = $stmt->get_result();
      if($res->num_rows > 0){
      $myFetchedUser = $res->fetch_assoc();
      $fetchedPass =   $myFetchedUser['password'];
      $fetchedUserId = $myFetchedUser['user_id'];
      $verifyPassword = password_verify($password, $fetchedPass);
      if($verifyPassword){
        $data = array(
          'iss'=>'localhost/3000',
          'iat'=>time(),        
          'exp'=>time() + 86400,
          'user'=>$fetchedUserId,
        );
        $auth= JWT::encode($data, $_ENV['SECRET']);
        $response['Auth'] = json_encode($auth); 
        $response['LoginSuccess'] = 'LoginSuccess';  
        }else{
        $response['IncorrectPwd'] = 'IncorrectPwd'; 
        } 
      }else{
        $response['EmailNotFound'] = 'EmailNotFound';
     }
     echo json_encode($response);
    }
    //USER'S LOGIN ENDS//



    //FETCH USERS BASIC PROFILE STARTS//
   public function profile($auth){
    $token = json_decode($auth);
    $decoded = JWT::decode($token, $_ENV['SECRET'], array('HS256')); 
    $userId = $decoded->user;
    $checkUser = "SELECT * FROM users_tb WHERE user_id = ?";
    $stmt = $this->conn->prepare($checkUser);
    $stmt->bind_param("s", $userId);
    $stmt->execute();
    $res = $stmt->get_result();
    if($res->num_rows > 0){
    $myFetchedUser = $res->fetch_assoc();
    $fetchedUserId =   $myFetchedUser['user_id'];
    $fetchedFname =   $myFetchedUser['first_name'];
    $fetchedLname = $myFetchedUser['last_name'];
    $fetchedEmail = $myFetchedUser['email'];
    $fetchedVerStatus = $myFetchedUser['verification_status'];
    $fetchedBalance = $myFetchedUser['balance'];
    $fetchedEarning = $myFetchedUser['earning'];
    $userInfo = array('fname'=>$fetchedFname , 'lname'=>$fetchedLname, 'email'=>$fetchedEmail, 
    'status'=>$fetchedVerStatus, 'balance'=>$fetchedBalance, 'userid'=>$fetchedUserId, 'earning'=>$fetchedEarning);
    $response['UserInfo'] = $userInfo;
  }
    echo json_encode($response);
   }

    //FETCH USER'S BASIC PROFILE ENDS//



  //POST COURSE STARTS//
public function postCourse($lowCategory , $cost, $desc, $title, $userId, $courseCode, $section){
   $fee =  '';
   $checkUser = "SELECT * FROM users_tb WHERE user_id = ?";
   $stmt = $this->conn->prepare($checkUser);
     $stmt->bind_param("s", $userId);
     $stmt->execute();
     $res = $stmt->get_result();
     if($res->num_rows > 0){
      $myFetchedUser = $res->fetch_assoc();
      $fetchedLname = $myFetchedUser['last_name'];
      if($cost == ''){
       $fee = "Free";
      }else{
        $fee = $cost;
      }
      $courseSql = "INSERT INTO courses_tb(user_id, tutor_name, title, description, category, cost, course_code) 
      VALUES (?, ?, ?, ?, ?, ?, ?)";
      $stmt = $this->conn->prepare($courseSql); 
      $stmt->bind_param("sssssss", $userId,  $fetchedLname, $title, $desc, $lowCategory , $fee, $courseCode);
      if($stmt->execute()){
      $checkCourseId = "SELECT * FROM courses_tb WHERE user_id = ? and course_code = ?";
      $stmt = $this->conn->prepare($checkCourseId);
      $stmt->bind_param("ss", $userId, $courseCode);
      $stmt->execute();
      $res = $stmt->get_result();
      if($res->num_rows > 0){
       $myFetchedCourse = $res->fetch_assoc();
       $courseId = $myFetchedCourse['course_id'];
       $courseCode = $myFetchedCourse['course_code'];
       $sectionName  = '';
       $sectionContent  = '';
       foreach ($section as $value) {
       $sectionName = rtrim($value->name, '.');
       $sectionContent  = rtrim($value->content, '.');
       $sectionSql = "INSERT INTO course_section_tb(course_id, course_code, section_name, content) 
       VALUES (?, ?, ?, ?)";
       $stmt = $this->conn->prepare($sectionSql); 
       $stmt->bind_param("ssss", $courseId, $courseCode, $sectionName, $sectionContent);
       if($stmt->execute()){
       $response['CoursePosted'] = 'CoursePosted';
          }
       }
       }else{
        echo 'error';
             }
      // if(!$stmt->execute()) 
      // echo $stmt->error;
      $stmt->close();
     
     }  
    }

    echo json_encode($response);
   }

   //POST COURSE ENDS//



   // FETCH CREATED COURSES STARTS //
  public function createdCourses($auth){
    $x = [];
    $token = json_decode($auth);
    $decoded = JWT::decode($token, $_ENV['SECRET'], array('HS256')); 
    $userId = $decoded->user;
    $checkCourse = "SELECT * FROM courses_tb WHERE user_id = ?";
    $stmt = $this->conn->prepare($checkCourse);
    $stmt->bind_param("s", $userId);
    $stmt->execute();
    $res = $stmt->get_result();
    if($res->num_rows > 0){
    while($row = $res->fetch_array()){
    $x[] = $row;
    $response['CreatedCourse'] = $x;
    // $response['Lname'] = $lname;
    }
  }

   
  echo json_encode($response);
   
}
// FETCH CREATED COURSES ENDS//


  
// SEARCH FOR AVAILABLE COURSES STARTS//
 public function availableCourses($course){
   $x = [];
  $checkCourse = "SELECT * FROM courses_tb WHERE category = ?";
  $stmt = $this->conn->prepare($checkCourse);
  $stmt->bind_param("s", $course);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  while($row = $res->fetch_array()){
  $x[] = $row;
  $response['SearchedCourses'] = $x;
  // $response['Lname'] = $lname;
  }
 }
 echo json_encode($response);

}
// SEARCH FOR AVAILABLE COURSES ENDS//



//FETCH COURSE DETAILS STARTS //
public function courseDetails($code){
  $checkCourse = "SELECT * FROM courses_tb WHERE course_code = ?";
  $stmt = $this->conn->prepare($checkCourse);
  $stmt->bind_param("s", $code);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  $myFetchedCourse = $res->fetch_assoc();
  $response['CourseDetails'] = $myFetchedCourse;
  }
  echo json_encode($response);
}

//FETCH COURSE DETAILS ENDS //


//FETCH COURSE SECTION STARTS//
public function courseSections($code){
  $x = [];
  $checkSection = "SELECT * FROM course_section_tb WHERE course_id = ?";
  $stmt = $this->conn->prepare($checkSection);
  $stmt->bind_param("s", $code);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  while($row = $res->fetch_array()){
  $x[] = $row;
  $response['CourseSection'] = $x;
  }
}
echo json_encode($x);
}
//FETCH COURSE SECTION ENDS//




//ADD FILES STARTS//
public function postFiles($authorize, $tmpLocation, $filename, $ext, $currentTime, $arr){
  if($_FILES['myFile']['size']>83886080){
  $response['FileLarge'] = 'FileLarge';
  }else{
  if(in_array($ext, $arr)){
  $newFilename = $authorize."file".$currentTime.".".$ext; 
  $finalLocation = "uploads/". $newFilename;
  $uploadFile = move_uploaded_file($tmpLocation, $finalLocation);
  if($uploadFile){
  $insertFilename = "INSERT INTO files_tb(file_name, section_id) 
  VALUES (?, ?)";
  $stmt = $this->conn->prepare($insertFilename); 
  $stmt->bind_param("ss", $newFilename,  $authorize);
  if($stmt->execute()){
  $response['FileUploaded'] = 'FileUploaded';
  $checkSection = "SELECT * FROM course_section_tb WHERE section_id = ?";
  $stmt = $this->conn->prepare($checkSection);
  $stmt->bind_param("s", $authorize);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
   $myFetchedSection = $res->fetch_assoc();
   $noFiles = $myFetchedSection['files'];
   $newNoFiles = $noFiles + 1;
   $UpdateFileStatus = "UPDATE course_section_tb SET files = ? WHERE section_id = ?";
   $stmt = $this->conn->prepare($UpdateFileStatus); 
   $stmt->bind_param("ss", $newNoFiles, $authorize);
   $stmt->execute();
  }
    }
  }else{
  $response['FileNotUploaded'] = 'FileNotUploaded';
  }
  }else{
  $response['FileNotSupported'] = 'FileNotSupported';
  }
  }
  echo json_encode($response);
}
//ADD FILES ENDS//



//SAVE COURSE STARTS//
public function saveCourse($token, $code, $title, $desc, $tutor,  $cost){
  $decoded = JWT::decode($token, $_ENV['SECRET'], array('HS256')); 
  $userId = $decoded->user;
  $checkCourse = "SELECT * FROM saved_courses WHERE user_id = ? and course_code = ?";
  $stmt = $this->conn->prepare($checkCourse);
  $stmt->bind_param("ss", $userId, $code);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  $response['AlreadySaved'] = 'AlreadySaved';
  }else{
    $insertCourse = "INSERT INTO saved_courses(user_id, course_code, course_title, description, tutor, cost)
    VALUES (?,?,?,?,?,?)";
    $stmt = $this->conn->prepare($insertCourse); 
    $stmt->bind_param("ssssss", $userId,  $code, $title,  $desc, $tutor, $cost);
    if($stmt->execute()){
    $response['CourseSaved'] = 'CourseSaved';
    }
  }
  echo json_encode($response);
}
//SAVE COURSE ENDS//



//FETCH SAVED COURSES STARTS//
public function getSavedCourse($token){
  $x = [];
  $courseCode = '';
  $decoded = JWT::decode($token, $_ENV['SECRET'], array('HS256')); 
  $userId = $decoded->user;
  $checkUser = "SELECT * FROM saved_courses WHERE user_id = ?";
  $stmt = $this->conn->prepare($checkUser);
  $stmt->bind_param("s", $userId);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  while($row = $res->fetch_array()){
  $x[] = $row;
  $response['SavedCourse'] = $x; 
 
}

echo json_encode($response);

}

  }
//FETCH SAVED COURSES ENDS//



//START COURSE STARTS//

public function startCourse($token,  $code, $title, $desc, $tutor,  $cost){
  $decoded = JWT::decode($token, $_ENV['SECRET'], array('HS256')); 
  $userId = $decoded->user;
  $checkCourse = "SELECT * FROM my_learning WHERE user_id = ? and course_code = ?";
  $stmt = $this->conn->prepare($checkCourse);
  $stmt->bind_param("ss", $userId, $code);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  $response['WelcomeBack'] = 'WelcomeBack';
  // echo 'ddd';
  }
  else{
  $insertCourse = "INSERT INTO my_learning(user_id, course_code, course_title, description, tutor, cost)
  VALUES (?,?,?,?,?,?)";
  $stmt = $this->conn->prepare($insertCourse); 
  $stmt->bind_param("ssssss", $userId,  $code, $title,  $desc, $tutor, $cost);
  if($stmt->execute()){
  $response['HappyLearning'] = 'HappyLearning';
    }
  }
  echo json_encode($response);
}

//START COURSE ENDS//


//FETCH MY LEARNING STARTS//
public function getMyLearning($token){
  $x = [];
  $courseCode = '';
  $decoded = JWT::decode($token, $_ENV['SECRET'], array('HS256')); 
  $userId = $decoded->user;
  $checkUser = "SELECT * FROM my_learning WHERE user_id = ?";
  $stmt = $this->conn->prepare($checkUser);
  $stmt->bind_param("s", $userId);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  while($row = $res->fetch_array()){
  $x[] = $row;
  $response['MyLearning'] = $x; 
 
}

echo json_encode($response);

}

}

//FETCH MY LEARNING ENDS


//TAKE COURSE STARTS//

public function takeCourse($course){
  $x = [];
  $checkSection = "SELECT * FROM course_section_tb LEFT JOIN files_tb 
  ON course_section_tb.section_id = files_tb.section_id WHERE course_code = ?";
  $stmt = $this->conn->prepare($checkSection);
  $stmt->bind_param("s", $course);
  $stmt->execute();
  $res = $stmt->get_result();
  if($res->num_rows > 0){
  while($row = $res->fetch_array()){
  $x[] = $row;
  $response['Sections'] = $x; 
  
 }

  }
echo json_encode($response); 
}

//TAKE COURSE ENDS//

}















?>
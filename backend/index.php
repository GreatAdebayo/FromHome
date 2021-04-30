<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception; 
require('vendor/autoload.php');
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
use \Firebase\JWT\JWT;
$localhostUrl = 'http://localhost:3000';


class MyIndex {
 //API STARTS//
 public $response = array('UserExists'=>'', 'AccountCreated'=>'', 'VerifyCodeSent'=>'', 
 'CodeExpired'=>'', 'CodeCorrect'=>'', 'CodeWrong'=>'', 'VerifyCodeReSent'=>'', 'EmailNotFound'=>'',
 'Auth'=>'', 'LoginSuccess'=>'', 'UserInfo'=>'');
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
        $response['UserExists'] = 'UserExists';
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
          'user'=>$fetchedUserId
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
    $fetchedFname =   $myFetchedUser['first_name'];
    $fetchedLname = $myFetchedUser['last_name'];
    $fetchedEmail = $myFetchedUser['email'];
    $fetchedVerStatus = $myFetchedUser['verification_status'];
    $fetchedBalance = $myFetchedUser['balance'];
    $userInfo = array('fname'=>$fetchedFname , 'lname'=>$fetchedLname, 'email'=>$fetchedEmail, 
    'status'=>$fetchedVerStatus, 'balance'=>$fetchedBalance);
    $response['UserInfo'] = $userInfo;
  }
    echo json_encode($response);
   }

    //FETCH USER'S BASIC PROFILE ENDS//
}
?>
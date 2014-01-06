<?php

require './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();  
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Port       = 465;                                     // Set mailer to use SMTP
$mail->Host = 'gator3233.hostgator.com';  // Specify main and backup server
$mail->Username = 'brian@ethoswebsolutions.com';                            // SMTP username
$mail->Password = 'a55CrazyPants!';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

$mail->From = $_POST['yourEmail'];
$mail->FromName = $_POST['yourName'];
$mail->addAddress('brian@ethoswebsolutions.com', 'Brian Case');  // Add a recipient
$mail->Subject = 'Ethos Form Email';
$mail->Body    = $_POST['yourMessage'];

if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}
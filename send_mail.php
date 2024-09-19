use PHPMailer\PHPMailer\PHPMailer;
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.yandex.ru';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'otpravitelpisem2021@yandex.ru';
        $mail->Password   = 'poyiekzchaulqohz';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        $mail->CharSet    = "UTF-8";
        
        $mail->setFrom('otpravitelpisem2021@yandex.ru', 'Mailer');
        $mail->addAddress('clientsites@yandex.ru', '');

        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission';
        $mail->Body    = "Full Name: $fullName <br> Email: $email";
        
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo 'Method Not Allowed';
}

<?php
// Check if form submitted
if (isset($_POST['submit'])) {
  // Get form input
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate input
  if (empty($name) || empty($email) || empty($message)) {
    $response = array(
      'status' => 'error',
      'message' => 'Please fill in all the fields.'
    );
  } else {
    // Set headers
    $to = 'your-email@example.com';
    $subject = 'New message from contact form';
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
      $response = array(
        'status' => 'success',
        'message' => 'Message sent successfully.'
      );
    } else {
      $response = array(
        'status' => 'error',
        'message' => 'Error sending message. Please try again later.'
      );
    }
  }

  // Return response message as JSON
  header('Content-type: application/json');
  echo json_encode($response);
}
?>

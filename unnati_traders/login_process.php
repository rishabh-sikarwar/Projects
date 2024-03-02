<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the submitted username and password
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate the username and password (You can replace this with your own validation logic)
    if ($username === "admin" && $password === "password") {
        // Username and password are correct, redirect to the dashboard or home page
        header("Location: dashboard.php");
        exit();
    } else {
        // Invalid username or password, redirect back to the login page with an error message
        header("Location: login.php?error=invalid_credentials");
        exit();
    }
} else {
    // If the form is not submitted, redirect back to the login page
    header("Location: login.php");
    exit();
}
?>

<?php
    error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
    header('Access-Control-Allow-Origin: *');

    $dbConn['host']			= "uvdb54.active24.cz";
    $dbConn['username']		= "theworldofchaos";
    $dbConn['password']		= "1RKatxH7SN";
    $dbConn['dbname']		= "theworldofchaos";

    $conn = new mysqli($dbConn['host'], $dbConn['username'], $dbConn['password'], $dbConn['dbname']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO subscribers (email, country) VALUES(?, ?)");
    $stmt->bind_param("ss", $email, $country);

    $email = $_POST['email'];
    $country = $_POST['country'];
    

    if (empty($email || $country)) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        $sql_get_email 	= "SELECT email FROM subscribers";
        $result_get_email = $conn->query($sql_get_email);

        $emailDb = [];

        while($row_get_email = $result_get_email->fetch_assoc()) {
            array_push($emailDb, $row_get_email['email']);
        }

        if (!in_array($email, $emailDb)) {
            $stmt->execute();
        } else {
            die("Connection failed: " . $conn->connect_error);
        }
    }

    $stmt->close();
    $conn->close();
?>
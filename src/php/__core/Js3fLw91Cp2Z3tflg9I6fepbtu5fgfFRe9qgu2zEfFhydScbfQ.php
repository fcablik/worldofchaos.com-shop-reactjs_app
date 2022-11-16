<?php
    // error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
    header('Access-Control-Allow-Origin: *');

    $servername = "uvdb54.active24.cz";
    $username = "theworldofchaos";
    $password = "rM3Aj7IlAD";
    $dbname = "theworldofchaos";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
    $stmt = $conn->prepare("INSERT INTO subscribers (email, country) VALUES(?, ?);");
    $stmt->bind_param("si", $email, $country);

    // $email = $_POST['email'];
    // $country = $_POST['country'];

    $email = 'hello111@theworld.cz';
    $country = 'Czechia';

    if (!empty($email || $country)){
        $sql_get_email 	= "SELECT email FROM subscribers";
        $result_get_email = $conn->query($sql_get_email);

        $emailDb = [];

        while($row_get_email = $result_get_email->fetch_assoc()) {
            array_push($emailDb, $row_get_email['email']);
        }

        if (!in_array($email, $emailDb)) {
            $stmt->execute();
            echo "New records created successfully";
        } else {
            die("Connection failed: " . $conn->connect_error);
            echo "Couldn't create the record, connection failed.";
        }
    }

    $stmt->close();
    $conn->close();
?>
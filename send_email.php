<?php
    $toEmail = "silasabiodun25@gmail.com";
    $mailHeaders = "From: " . $_POST["inputName"] . "<". $_POST["inputEmail"] .">\r\n";
    if(mail($toEmail, $_POST["exampleFormControlTextarea1"], $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>
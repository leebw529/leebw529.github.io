<?php
    $p = isset($_POST["pass"]) ? $_POST["pass"] : $_GET["pass"];
    // $id = isset($_POST["id"]) ? $_POST["id"] : $_GET["id"];
    if($p == "1208" || $p == "20001208"){
        echo 'success';
    }
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
?>
<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/inc/ajax.inc.php'; 

try { 

    if ($_SERVER['REQUEST_METHOD'] !== "POST") {
        throw new Exception('Invalid Request', 2000);
    } else {
        // status is true if everything is fine
        exit(json_encode(
            array(
                'status' => true
            )
        ));
    }


} catch(Exception $e) {
    
    echo json_encode(
        array(
            'status' => false,
            'error' => $e -> getMessage(),
            'error_code' => $e -> getCode()
        )
    );

    exit;

}
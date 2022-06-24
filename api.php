<?php
require_once __DIR__ . '/database.php';

header('Content-Type: application/json');

$response = $students;

// Logica di filtraggio
if(is_numeric($_GET['index'])) {
    $response = $students[$_GET['index']];
}

echo json_encode($response);
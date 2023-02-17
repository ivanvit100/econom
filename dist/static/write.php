<?php
$post = json_decode(file_get_contents('php://input'));
file_put_contents("./Tasks.json", "var Tasks = ".json_encode($post));
echo json_encode(array('result' => true));
?>
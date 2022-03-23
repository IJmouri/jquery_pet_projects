<?php
include 'db.php';
if(isset($_POST['username'])){
    $username = mysqli_real_escape_string($link, $_POST['username']);
    if(!empty($username)){
        $query = mysqli_query($link,"SELECT COUNT('user_id') FROM `user` WHERE  `username` = '$username'");
        $result = mysqli_fetch_array($query);
    }
    if($result[0] == 0){
        echo 'Username does not exist';
    }elseif($result[0] == 1){
        echo 'Username exist';
    }

}
?>
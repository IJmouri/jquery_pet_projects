<?php
$link = mysqli_connect('localhost', 'root', '', 'a_database1');
if(isset($_POST['search'])){
    $search = $_POST['search'];
    if(!empty($search)){
        $query = mysqli_query($link, "SELECT `email` FROM `user` WHERE `username` = '$search'");
        $res = mysqli_num_rows($query);

        while($res = mysqli_fetch_assoc($query)){
            echo $res['email'];
        }

    }
}
?>
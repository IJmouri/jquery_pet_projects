<?php
$link = mysqli_connect('localhost', 'root', '', 'polling_platform_with_qrcode');
function user_joined($username)
{
    global $link;
    $query = mysqli_query($link, "INSERT INTO user (username) VALUES ('$username')");
}

function user_left($username)
{
    global $link;
    $query = mysqli_query($link, "DELETE FROM `user` WHERE `username`='$username'");

}

function user_list()
{
    $list = array();
    global $link;
    $query = mysqli_query($link, "SELECT `username` FROM `user`");
    while ($res = mysqli_fetch_assoc($query)) {
        $list[] = $res['username'];
    }
    return $list;
}

if (isset($_POST['user_name']) || isset($_POST['action'])) {

    $action = $_POST['action'];

    if ($action == 'joined') {
    $username = $_POST['user_name'];

        user_joined($username);
    } else if ($action == 'list') {
        foreach (user_list() as $user) {
            echo $user . "\n";
        }
    }else if($action == 'left'){
        $username = $_POST['user_name'];
  
        user_left($username);
    }
}

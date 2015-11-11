(function(window) {
	var app = window.app || {},
		document = window.document;

	app.version = "0.1.0";

	/*script from https://css-tricks.com/inline-svg-grunticon-fallback*/
	app.svgSupport = function() {
	 	var div = document.createElement('div');
	 	div.innerHTML = '<svg/>';
		return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
	};

 	if (app.svgSupport()) {
 		var ajax = new XMLHttpRequest();
		ajax.open("GET", "images/svg-defs.svg", true);
		ajax.responseType = "document";
		ajax.onload = function(e) {
		  document.body.insertBefore(ajax.responseXML.documentElement,document.body.childNodes[0]);
		}
		ajax.send();
 	}

	window.app = app;
})(window);
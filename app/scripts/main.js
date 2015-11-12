(function(window) {
	var app = window.MODELER || {},
		document = window.document;

	app.version = "0.1.0";

	/*script from https://css-tricks.com/inline-svg-grunticon-fallback*/
	function hasSvgSupport() {
	 	var div = document.createElement('div');
	 	div.innerHTML = '<svg/>';
		return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
	};

	function getSVGDocument(filePath, containerId, callback) {
		var ajax = new XMLHttpRequest();
		ajax.open("GET", filePath, true);
		ajax.responseType = "document";
		ajax.onload = function(e) {
			if (containerId) {
				var c = document.getElementById(containerId);
				c && c.appendChild(ajax.responseXML.documentElement);
			} else {
				document.body.insertBefore(ajax.responseXML.documentElement,document.body.childNodes[0]);
			}
			if (callback && typeof callback == "function") {
				callback();
			}
		}
		ajax.send();
	};

 	if (hasSvgSupport()) {
		getSVGDocument("images/svg-defs.svg");
		getSVGDocument("images/modeler-defs.svg", "modelerContainer", function() {
			Modeler.init("modeler");	
		});
 	}

	window.MODELER = app;
})(window);
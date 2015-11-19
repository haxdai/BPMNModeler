(function(window) {
	var app = window.MODELER || {version:"0.1.0"},
		document = window.document,
		SVG = window.SVG;

	if (SVG && !SVG.supported) {
		return app;
	}

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

	app.initToolbar = function(mainBarId) {
		var mainBar = $('.modeler-toolbar-container').find("ul.modeler-toolbar");
		var subbars = $('.modeler-subbar');

		$('a.subbar-close').on("click", function(e) {
			e.preventDefault();
			e.stopPropagation();
			console.log($(this).closest("ul").attr("id"));
			$(this).closest("ul").removeClass("visible");
			$(mainBar).addClass("visible");
		});

		$('.modeler-toolbar a').on("click", function(e) {
			e.preventDefault();
			e.stopPropagation();
			var target = $(this).data("toggle");
			if (target) {
				$(mainBar).removeClass("visible");
				$("#"+target).addClass("visible");
			}
		});
	};

	app.initToolbar("mainBar");
	window.MODELER = app;

	//load toolbar and SVG BPMN assets
	getSVGDocument("images/svg-defs.svg", null, function() {
		getSVGDocument("images/modeler-defs.svg", "modelerContainer", function() {
			app.svg = SVG.adopt(document.getElementById("modeler"));
			app.svg.size(2000, 2000);
		});
	});

})(window);
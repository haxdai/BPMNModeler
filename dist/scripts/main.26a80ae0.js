!function(a){function b(a,b,c){var e=new XMLHttpRequest;e.open("GET",a,!0),e.responseType="document",e.onload=function(){if(b){var a=d.getElementById(b);a&&a.appendChild(e.responseXML.documentElement)}else d.body.insertBefore(e.responseXML.documentElement,d.body.childNodes[0]);c&&"function"==typeof c&&c()},e.send()}var c=a.MODELER||{version:"0.1.0"},d=a.document,e=a.SVG;return e&&!e.supported?c:(c.initToolbar=function(){{var a=$(".modeler-toolbar-container").find("ul.modeler-toolbar");$(".modeler-subbar")}$("a.subbar-close").on("click",function(b){b.preventDefault(),b.stopPropagation(),console.log($(this).closest("ul").attr("id")),$(this).closest("ul").removeClass("visible"),$(a).addClass("visible")}),$(".modeler-toolbar a").on("click",function(b){b.preventDefault(),b.stopPropagation();var c=$(this).data("toggle");c&&($(a).removeClass("visible"),$("#"+c).addClass("visible"))})},c.initToolbar("mainBar"),a.MODELER=c,void b("images/svg-defs.svg",null,function(){b("images/modeler-defs.svg","modelerContainer",function(){c.svg=e.adopt(d.getElementById("modeler")),c.svg.size(2e3,2e3)})}))}(window);
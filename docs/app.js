"use strict";function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}!function(e){var o={};function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==_typeof(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e){t.d(n,a,function(o){return e[o]}.bind(null,a))}return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(1)},function(e,o,t){function n(e,o){var t=document.querySelector(o);t instanceof Element&&(t.hasAttribute("tabindex")||t.setAttribute("tabindex","0"),e.addEventListener("click",function(e){e.preventDefault(),t.focus()}),e.addEventListener("keypress",function(e){["Spacebar","Enter"," "].includes(e.key)&&(e.preventDefault(),t.focus())}))}t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16),t(17),t(18),t(19),t(20),t(21),t(22),t(23),t(24),t(25),t(26),t(27),t(28),t(29),t(30),t(31),t(32),t(33),t(34),t(35),t(36),yodasws.page("home").setRoute({template:"pages/home.html",route:"/"}).on("load",function(){var e=document.querySelector("body > nav");e instanceof Element&&e.setAttribute("hidden","")}).on("unload",function(){var e=document.querySelector("body > nav");e instanceof Element&&e.removeAttribute("hidden")}),yodasws.on("page-loaded",function(){var e=document.querySelector("[role=\"doc-toc\"] [role=\"directory\"]"),o=/^(?:ch|note|ref)((?:-[a-z0-9]+)+)/;_toConsumableArray(document.querySelectorAll("[itemtype=\"https://schema.org/Chapter\"] [itemprop=\"name\"]")).forEach(function(t){var a=t.closest("[id]");if(!(a instanceof Element))return;var i=document.createElement("a");i.innerHTML=t.innerHTML,_toConsumableArray(i.querySelectorAll("a")).forEach(function(e){return e.remove()});var s=o.exec(a.getAttribute("id"))[1];i.setAttribute("href","#ch"+s);var l=document.createElement("li");l.appendChild(i),e.appendChild(l),n(i,"h3#ch".concat(s,", h4#ch").concat(s,", #ch").concat(s," [itemprop=\"name\"]"))}),_toConsumableArray(document.querySelectorAll("[role=\"doc-noteref\"]")).forEach(function(e){var t=o.exec(e.closest("[id]").getAttribute("id"))[1];n(e,"#note".concat(t,"[role=\"doc-backlink\"], #note").concat(t," [role=\"doc-backlink\"]"))}),_toConsumableArray(document.querySelectorAll("[role=\"doc-backlink\"]")).forEach(function(e){var t=o.exec(e.closest("[id]").getAttribute("id"))[1];n(e,"#ref".concat(t,"[role=\"doc-noteref\"], #ref").concat(t," [role=\"doc-noteref\"]"))})})},function(e,o){yodasws.page("license").setRoute({title:"License Information",template:"pages/license/license.html",canonicalRoute:"/license/",route:"/license/?"})},function(e,o){yodasws.page("pageCreation").setRoute({title:"History of the Creation of the World",template:"pages/creation/creation.html",canonicalRoute:"/creation/",route:"/creation/?"}).on("load.page",function(){var e=document.querySelector("[name=\"collapse\"]");e instanceof Element&&e.addEventListener("input",function(o){_toConsumableArray(document.querySelectorAll("details")).forEach(function(o){e.checked?o.setAttribute("open","open"):o.removeAttribute("open")})})})},function(e,o){yodasws.page("cypria").setRoute({title:"Cypria",template:"pages/cypria/cypria.html",canonicalRoute:"/cypria/",route:"/cypria/?"})},function(e,o){yodasws.page("iliad").setRoute({title:"The Iliad",canonicalRoute:"/iliad/",template:function template(e){for(var _len=arguments.length,o=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){o[_key-1]=arguments[_key]}var t=o.join("/").split("/").filter(function(e){return""!=e});if(0===t.length)return"pages/iliad/index.html";var n=t.join("/").match(/^book(\d+)/)[1];return{title:"The Iliad, Book "+n,canonicalRoute:"/iliad/book".concat(n,"/"),template:"pages/iliad/book".concat(n,".html")}},route:"/iliad(/book\\d+)?/?"})},function(e,o){yodasws.page("aethiopis").setRoute({title:"\xC6thiopis",template:"pages/aethiopis/aethiopis.html",canonicalRoute:"/aethiopis/",route:"/aethiopis/?"})},function(e,o){yodasws.page("littleIliad").setRoute({title:"The Little Iliad",template:"pages/littleIliad/littleIliad.html",canonicalRoute:"/littleIliad/",route:"/little(I|-i)liad/?"})},function(e,o){yodasws.page("iliouPersis").setRoute({title:"Iliou Persis",template:"pages/iliouPersis/iliouPersis.html",canonicalRoute:"/iliouPersis/",route:"/ilio?u[Pp]ersis/?"})},function(e,o){yodasws.page("nostoi").setRoute({title:"Nostoi",template:"pages/nostoi/nostoi.html",canonicalRoute:"/nostoi/",route:"/nostoi/?"})},function(e,o){yodasws.page("odyssey").setRoute({title:"The Odyssey, table of contents",canonicalRoute:"/odyssey/",template:function template(e){for(var _len2=arguments.length,o=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){o[_key2-1]=arguments[_key2]}var t=o.join("/").split("/").filter(function(e){return""!=e});if(0===t.length)return"pages/odyssey/index.html";var n=t.join("/").match(/^book(\d+)/)[1];return{title:"The Odyssey, Book "+n,canonicalRoute:"/odyssey/book".concat(n,"/"),template:"pages/odyssey/book".concat(n,".html")}},route:"/odyssey(/book\\d+)?/?"})},function(e,o){yodasws.page("telegony").setRoute({title:"Telegony",template:"pages/telegony/telegony.html",canonicalRoute:"/telegony/",route:"/telegony/?"})},function(e,o){yodasws.page("aeneid").setRoute({title:"The Aeneid, table of contents",template:"pages/aeneid/aeneid.html",canonicalRoute:"/aeneid/",route:"/aeneid/?"})},function(e,o){yodasws.page("aeneid/book1").setRoute({title:"The Aeneid, Book 1",template:"pages/aeneid/book1/book1.html",canonicalRoute:"/aeneid/book1/",route:"/aeneid/book1/?"})},function(e,o){yodasws.page("aeneid/book2").setRoute({title:"The Aeneid, Book 2",template:"pages/aeneid/book2/book2.html",canonicalRoute:"/aeneid/book2/",route:"/aeneid/book2/?"})},function(e,o){yodasws.page("aeneid/book3").setRoute({title:"The Aeneid, Book 3",template:"pages/aeneid/book3/book3.html",canonicalRoute:"/aeneid/book3/",route:"/aeneid/book3/?"})},function(e,o){yodasws.page("aeneid/book4").setRoute({title:"The Aeneid, Book 4",template:"pages/aeneid/book4/book4.html",canonicalRoute:"/aeneid/book4/",route:"/aeneid/book4/?"})},function(e,o){yodasws.page("aeneid/book5").setRoute({title:"The Aeneid, Book 5",template:"pages/aeneid/book5/book5.html",canonicalRoute:"/aeneid/book5/",route:"/aeneid/book5/?"})},function(e,o){yodasws.page("aeneid/book6").setRoute({title:"The Aeneid, Book 6",template:"pages/aeneid/book6/book6.html",canonicalRoute:"/aeneid/book6/",route:"/aeneid/book6/?"})},function(e,o){yodasws.page("aeneid/book7").setRoute({title:"The Aeneid, Book 7",template:"pages/aeneid/book7/book7.html",canonicalRoute:"/aeneid/book7/",route:"/aeneid/book7/?"})},function(e,o){yodasws.page("aeneid/book8").setRoute({title:"The Aeneid, Book 8",template:"pages/aeneid/book8/book8.html",canonicalRoute:"/aeneid/book8/",route:"/aeneid/book8/?"})},function(e,o){yodasws.page("aeneid/book9").setRoute({title:"The Aeneid, Book 9",template:"pages/aeneid/book9/book9.html",canonicalRoute:"/aeneid/book9/",route:"/aeneid/book9/?"})},function(e,o){yodasws.page("aeneid/book10").setRoute({title:"The Aeneid, Book 10",template:"pages/aeneid/book10/book10.html",canonicalRoute:"/aeneid/book10/",route:"/aeneid/book10/?"})},function(e,o){yodasws.page("aeneid/book11").setRoute({title:"The Aeneid, Book 11",template:"pages/aeneid/book11/book11.html",canonicalRoute:"/aeneid/book11/",route:"/aeneid/book11/?"})},function(e,o){yodasws.page("aeneid/book12").setRoute({title:"The Aeneid, Book 12",template:"pages/aeneid/book12/book12.html",canonicalRoute:"/aeneid/book12/",route:"/aeneid/book12/?"})},function(e,o){yodasws.page("ScholaAetii").setRoute({title:"Schola Aetii, table of contents",template:"pages/ScholaAetii/index.html",canonicalRoute:"/ScholaAetii/",route:"/ScholaAetii/?"})},function(e,o){yodasws.page("pageThesesOfReformation").setRoute({title:"Theses of the Reformed Roman Religion",template:"pages/ScholaAetii/thesesOfReformation/thesesOfReformation.html",canonicalRoute:"/ScholaAetii/thesesOfReformation/",route:"/ScholaAetii/thesesOfReformation/?"})},function(e,o){yodasws.page("ScholaAetii/epistleRomans").setRoute({title:"First Epistle to the Romans",template:"pages/ScholaAetii/epistleRomans/epistleRomans.html",canonicalRoute:"/ScholaAetii/epistleRomans/",route:"/ScholaAetii/epistleRomans/?"})},function(e,o){yodasws.page("ApologeticsOfEvil").setRoute({title:"Apologetics of Evil",template:"pages/ApologeticsOfEvil/ApologeticsOfEvil.html",canonicalRoute:"/ApologeticsOfEvil/",route:"/ApologeticsOfEvil/?"})},function(e,o){yodasws.page("annals").setRoute({template:"pages/annals/annals.html",canonicalRoute:"/annals/",route:"/annals/?"}).on("load",function(){});[35.227199,-80.843088].join(","),Date.now();var t=new Date("1 Jan 2010 12:00:00 -0700");console.log("now:",t.toLocaleString());var n=2440587.5+t.valueOf()/1e3/60/60/24,a=(n-2451545)/365.25/100;console.log("Julian Day (F2):",n),console.log("Julian Century (G2):",a);var i=a,s=(280.46646+a*(36000.76983+3032e-7*a))%360;console.log("Geom Mean Long Sun (deg) (I2):",s);var l=357.52911+a*(35999.05029-1537e-7*a);console.log("Geom Mean Anom Sun (deg) (J2):",l);var c=.016708634-a*(42037e-8+1.267e-7*a);console.log("Eccent Earth Orbit (K2):",c);var u=Math.sin(l*Math.PI/180)*(1.914602-i*(.004817+14e-6*i))+Math.sin(2*l*Math.PI/180)*(.019993-101e-6*i)+289e-6*Math.sin(3*l*Math.PI/180);console.log("Sun Eq of Ctr (L2):",u);var r=s+u;console.log("Sun True Long (deg) (M2):",r);var d=l+u;console.log("Sun True Anom (deg) (N2):",d);var p=1.000001018*(1-c*c)/(1+c*Math.cos(d*Math.PI/180));console.log("Sun Rad Vector (AUs) (O2):",p);var m=r-.00569-.00478*Math.sin(125.04-1934.136*i);console.log("Sun App Long (deg):",m);var h=23+(26+(21.448-i*(46.815+i*(59e-5-.001813*i)))/60)/60;console.log("Mean Obliq Ecliptic (deg):",h);var g=h+.00256*Math.cos(Math.PI/180*(125.04-1934.136*i));console.log("Obliq Corr (deg):",g);var f=180/Math.PI*Math.atan2(Math.cos(Math.PI/180*g)*Math.sin(Math.PI/180*m),Math.cos(Math.PI/180*m));console.log("Sun Rt Ascen (deg):",f);var b=180/Math.PI*Math.asin(Math.sin(Math.PI/180*g)*Math.sin(Math.PI/180*m));console.log("Sun Declin (deg):",b)},function(e,o){yodasws.page("pageMetamorphoses").setRoute({title:"Metamorphoses",canonicalRoute:"/metamorphoses/",template:function template(e){for(var _len3=arguments.length,o=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){o[_key3-1]=arguments[_key3]}var t=o.join("/").split("/").filter(function(e){return""!=e});if(0===t.length)return"pages/metamorphoses/metamorphoses.html";var n=t.join("/").match(/^book(\d+)/)[1];return{title:"Metamorphoses, Book "+n,canonicalRoute:"/metamorphoses/book".concat(n,"/"),template:"pages/metamorphoses/book".concat(n,".html")}},route:"/metamorphoses(/book\\d+)?/?"})},function(e,o){yodasws.page("pageAesop").setRoute({title:"Aesop\u2019s Fables",template:"pages/aesop/aesop.html",canonicalRoute:"/aesop/",route:"/aesop/?"})},function(e,o){yodasws.page("pageHomericHymns").setRoute({title:"Homeric Hymns",template:"pages/homericHymns/homericHymns.html",canonicalRoute:"/homericHymns/",route:"/homeric-?[Hh]ymns/?"})},function(e,o){yodasws.page("pageOrphicHymns").setRoute({title:"Orphic Hymns",template:"pages/orphicHymns/orphicHymns.html",canonicalRoute:"/orphicHymns/",route:"/orphic-?[Hh]ymns/?"})},function(e,o){yodasws.page("pageTrueDoctrine").setRoute({title:"On the True Doctrine",template:"pages/trueDoctrine/trueDoctrine.html",canonicalRoute:"/trueDoctrine/",route:"/true-?[Dd]octrine/?"})},function(e,o){yodasws.page("pageTheReligionOfNuma").setRoute({title:"The Religion of Numa",canonicalRoute:"/TheReligionOfNuma/",template:function template(e){for(var _len4=arguments.length,o=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){o[_key4-1]=arguments[_key4]}var t=o.join("/").replace(/\/+/g,"/").replace(/^\/|\/$/g,"").split("/").filter(function(e){return""!=e});return 0===t.length?"pages/TheReligionOfNuma/index.html":{canonicalRoute:"/TheReligionOfNuma/"+t.join("/")+"/",template:"pages/TheReligionOfNuma/"+t.join(".")+".html"}},route:"/TheReligionOfNuma(/.*)*"}).on("load",function(){console.log("Page loaded!")})},function(e,o){yodasws.page("pageRomanQuestions").setRoute({title:"Roman Questions",template:"pages/RomanQuestions/RomanQuestions.html",canonicalRoute:"/RomanQuestions/",route:"/RomanQuestions/?"}).on("load",function(){})}]);
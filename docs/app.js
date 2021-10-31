"use strict";function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}!function(e){var o={};function t(a){if(o[a])return o[a].exports;var s=o[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==_typeof(e)&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e){t.d(a,s,function(o){return e[o]}.bind(null,s))}return a},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(1)},function(e,o,t){t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16),t(17),t(18),t(19),t(20),t(21),t(22),t(23),t(24),t(25),t(26),t(27),t(28),t(29),t(30),t(31),t(32),t(33),t(34),t(35),t(36),t(37),t(38),t(39),t(40),t(41),t(42),t(43),t(44),t(45),t(46),t(47),t(48),t(49),t(50),t(51),t(52),t(53),t(54),t(55),t(56),t(57),t(58),t(59),t(60),t(61),t(62),t(63),t(64),t(65),t(66),t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(81),yodasws.page("home").setRoute({template:"pages/home.html",route:"/"}).on("load",function(){var e=document.querySelector("body > nav");e instanceof Element&&e.setAttribute("hidden","")}).on("unload",function(){var e=document.querySelector("body > nav");e instanceof Element&&e.removeAttribute("hidden")}),yodasws.on("page-loaded",function(){function e(e,o){var t=document.querySelector(o);t instanceof Element&&(t.hasAttribute("tabindex")||t.setAttribute("tabindex","0"),e.addEventListener("click",function(e){e.preventDefault(),t.focus()}),e.addEventListener("keypress",function(e){["Spacebar","Enter"," "].includes(e.key)&&(e.preventDefault(),t.focus())}))}var o=document.querySelector("[role=\"doc-toc\"] [role=\"directory\"]"),t=/^(?:ch|note|ref)((?:-\d+)+)/;_toConsumableArray(document.querySelectorAll("[itemtype=\"https://schema.org/Chapter\"] [itemprop=\"name\"]")).forEach(function(a){var s=a.closest("[id]");if(!(s instanceof Element))return;var i=document.createElement("a");i.innerHTML=a.innerHTML;var l=t.exec(s.getAttribute("id"))[1];i.setAttribute("href","#ch"+l);var n=document.createElement("li");n.appendChild(i),o.appendChild(n),e(i,"h3#ch".concat(l,", #ch").concat(l," h3"))}),_toConsumableArray(document.querySelectorAll("[role=\"doc-noteref\"]")).forEach(function(o){var a=t.exec(o.closest("[id]").getAttribute("id"))[1];e(o,"#note".concat(a,"[role=\"doc-backlink\"], #note").concat(a," [role=\"doc-backlink\"]"))}),_toConsumableArray(document.querySelectorAll("[role=\"doc-backlink\"]")).forEach(function(o){var a=t.exec(o.closest("[id]").getAttribute("id"))[1];e(o,"#ref".concat(a,"[role=\"doc-noteref\"], #ref").concat(a," [role=\"doc-noteref\"]"))})})},function(e,o){yodasws.page("license").setRoute({title:"License Information",template:"pages/license/license.html",canonicalRoute:"/license/",route:"/license/?"})},function(e,o){yodasws.page("pageCreation").setRoute({title:"History of the Creation of the World",template:"pages/creation/creation.html",canonicalRoute:"/creation/",route:"/creation/?"}).on("load.page",function(){var e=document.querySelector("[name=\"collapse\"]");e instanceof Element&&e.addEventListener("input",function(o){_toConsumableArray(document.querySelectorAll("details")).forEach(function(o){e.checked?o.setAttribute("open","open"):o.removeAttribute("open")})})})},function(e,o){yodasws.page("cypria").setRoute({title:"Cypria",template:"pages/cypria/cypria.html",canonicalRoute:"/cypria/",route:"/cypria/?"})},function(e,o){yodasws.page("iliad").setRoute({title:"The Iliad, table of contents",template:"pages/iliad/iliad.html",canonicalRoute:"/iliad/",route:"/iliad/?"})},function(e,o){yodasws.page("pageIliadBook1").setRoute({title:"The Iliad, Book 1",template:"pages/iliad/book1/book1.html",route:"/iliad/book1/"})},function(e,o){yodasws.page("pageIliadBook2").setRoute({title:"The Iliad, Book 2",template:"pages/iliad/book2/book2.html",route:"/iliad/book2/"})},function(e,o){yodasws.page("pageIliadBook3").setRoute({title:"The Iliad, Book 3",template:"pages/iliad/book3/book3.html",route:"/iliad/book3/"})},function(e,o){yodasws.page("pageIliadBook4").setRoute({title:"The Iliad, Book 4",template:"pages/iliad/book4/book4.html",route:"/iliad/book4/"})},function(e,o){yodasws.page("pageIliadBook5").setRoute({title:"The Iliad, Book 5",template:"pages/iliad/book5/book5.html",route:"/iliad/book5/"})},function(e,o){yodasws.page("pageIliadBook6").setRoute({title:"The Iliad, Book 6",template:"pages/iliad/book6/book6.html",route:"/iliad/book6/"})},function(e,o){yodasws.page("pageIliadBook7").setRoute({title:"The Iliad, Book 7",template:"pages/iliad/book7/book7.html",route:"/iliad/book7/"})},function(e,o){yodasws.page("pageIliadBook8").setRoute({title:"The Iliad, Book 8",template:"pages/iliad/book8/book8.html",route:"/iliad/book8/"})},function(e,o){yodasws.page("pageIliadBook9").setRoute({title:"The Iliad, Book 9",template:"pages/iliad/book9/book9.html",route:"/iliad/book9/"})},function(e,o){yodasws.page("pageIliadBook10").setRoute({title:"The Iliad, Book 10",template:"pages/iliad/book10/book10.html",route:"/iliad/book10/"})},function(e,o){yodasws.page("pageIliadBook11").setRoute({title:"The Iliad, Book 11",template:"pages/iliad/book11/book11.html",route:"/iliad/book11/"})},function(e,o){yodasws.page("pageIliadBook12").setRoute({title:"The Iliad, Book 12",template:"pages/iliad/book12/book12.html",route:"/iliad/book12/"})},function(e,o){yodasws.page("pageIliadBook13").setRoute({title:"The Iliad, Book 13",template:"pages/iliad/book13/book13.html",route:"/iliad/book13/"})},function(e,o){yodasws.page("pageIliadBook14").setRoute({title:"The Iliad, Book 14",template:"pages/iliad/book14/book14.html",route:"/iliad/book14/"})},function(e,o){yodasws.page("pageIliadBook15").setRoute({title:"The Iliad, Book 15",template:"pages/iliad/book15/book15.html",route:"/iliad/book15/"})},function(e,o){yodasws.page("pageIliadBook16").setRoute({title:"The Iliad, Book 16",template:"pages/iliad/book16/book16.html",route:"/iliad/book16/"})},function(e,o){yodasws.page("pageIliadBook17").setRoute({title:"The Iliad, Book 17",template:"pages/iliad/book17/book17.html",route:"/iliad/book17/"})},function(e,o){yodasws.page("pageIliadBook18").setRoute({title:"The Iliad, Book 18",template:"pages/iliad/book18/book18.html",route:"/iliad/book18/"})},function(e,o){yodasws.page("pageIliadBook19").setRoute({title:"The Iliad, Book 19",template:"pages/iliad/book19/book19.html",route:"/iliad/book19/"})},function(e,o){yodasws.page("pageIliadBook20").setRoute({title:"The Iliad, Book 20",template:"pages/iliad/book20/book20.html",route:"/iliad/book20/"})},function(e,o){yodasws.page("pageIliadBook21").setRoute({title:"The Iliad, Book 21",template:"pages/iliad/book21/book21.html",route:"/iliad/book21/"})},function(e,o){yodasws.page("pageIliadBook22").setRoute({title:"The Iliad, Book 22",template:"pages/iliad/book22/book22.html",route:"/iliad/book22/"})},function(e,o){yodasws.page("pageIliadBook23").setRoute({title:"The Iliad, Book 23",template:"pages/iliad/book23/book23.html",route:"/iliad/book23/"})},function(e,o){yodasws.page("pageIliadBook24").setRoute({title:"The Iliad, Book 24",template:"pages/iliad/book24/book24.html",route:"/iliad/book24/"})},function(e,o){yodasws.page("aethiopis").setRoute({title:"\xC6thiopis",template:"pages/aethiopis/aethiopis.html",canonicalRoute:"/aethiopis/",route:"/aethiopis/?"})},function(e,o){yodasws.page("littleIliad").setRoute({title:"The Little Iliad",template:"pages/littleIliad/littleIliad.html",canonicalRoute:"/littleIliad/",route:"/little(I|-i)liad/?"})},function(e,o){yodasws.page("iliouPersis").setRoute({title:"Iliou Persis",template:"pages/iliouPersis/iliouPersis.html",canonicalRoute:"/iliouPersis/",route:"/ilio?u[Pp]ersis/?"})},function(e,o){yodasws.page("nostoi").setRoute({title:"Nostoi",template:"pages/nostoi/nostoi.html",canonicalRoute:"/nostoi/",route:"/nostoi/?"})},function(e,o){yodasws.page("odyssey").setRoute({title:"The Odyssey, table of contents",template:"pages/odyssey/odyssey.html",canonicalRoute:"/odyssey/",route:"/odyssey/?"})},function(e,o){yodasws.page("odyssey/book1").setRoute({title:"The Odyssey, Book 1",template:"pages/odyssey/book1/book1.html",canonicalRoute:"/odyssey/book1/",route:"/odyssey/book1/?"})},function(e,o){yodasws.page("odyssey/book2").setRoute({title:"The Odyssey, Book 2",template:"pages/odyssey/book2/book2.html",route:"/odyssey/book2/"})},function(e,o){yodasws.page("odyssey/book3").setRoute({title:"The Odyssey, Book 3",template:"pages/odyssey/book3/book3.html",route:"/odyssey/book3/"})},function(e,o){yodasws.page("odyssey/book4").setRoute({title:"The Odyssey, Book 4",template:"pages/odyssey/book4/book4.html",route:"/odyssey/book4/"})},function(e,o){yodasws.page("odyssey/book5").setRoute({title:"The Odyssey, Book 5",template:"pages/odyssey/book5/book5.html",route:"/odyssey/book5/"})},function(e,o){yodasws.page("odyssey/book6").setRoute({title:"The Odyssey, Book 6",template:"pages/odyssey/book6/book6.html",route:"/odyssey/book6/"})},function(e,o){yodasws.page("odyssey/book7").setRoute({title:"The Odyssey, Book 7",template:"pages/odyssey/book7/book7.html",route:"/odyssey/book7/"})},function(e,o){yodasws.page("odyssey/book8").setRoute({title:"The Odyssey, Book 8",template:"pages/odyssey/book8/book8.html",route:"/odyssey/book8/"})},function(e,o){yodasws.page("odyssey/book9").setRoute({title:"The Odyssey, Book 9",template:"pages/odyssey/book9/book9.html",route:"/odyssey/book9/"})},function(e,o){yodasws.page("odyssey/book10").setRoute({title:"The Odyssey, Book 10",template:"pages/odyssey/book10/book10.html",route:"/odyssey/book10/"})},function(e,o){yodasws.page("odyssey/book11").setRoute({title:"The Odyssey, Book 11",template:"pages/odyssey/book11/book11.html",route:"/odyssey/book11/"})},function(e,o){yodasws.page("odyssey/book12").setRoute({title:"The Odyssey, Book 12",template:"pages/odyssey/book12/book12.html",route:"/odyssey/book12/"})},function(e,o){yodasws.page("odyssey/book13").setRoute({title:"The Odyssey, Book 13",template:"pages/odyssey/book13/book13.html",route:"/odyssey/book13/"})},function(e,o){yodasws.page("odyssey/book14").setRoute({title:"The Odyssey, Book 14",template:"pages/odyssey/book14/book14.html",route:"/odyssey/book14/"})},function(e,o){yodasws.page("odyssey/book15").setRoute({title:"The Odyssey, Book 15",template:"pages/odyssey/book15/book15.html",route:"/odyssey/book15/"})},function(e,o){yodasws.page("odyssey/book16").setRoute({title:"The Odyssey, Book 16",template:"pages/odyssey/book16/book16.html",route:"/odyssey/book16/"})},function(e,o){yodasws.page("odyssey/book17").setRoute({title:"The Odyssey, Book 17",template:"pages/odyssey/book17/book17.html",route:"/odyssey/book17/"})},function(e,o){yodasws.page("odyssey/book18").setRoute({title:"The Odyssey, Book 18",template:"pages/odyssey/book18/book18.html",route:"/odyssey/book18/"})},function(e,o){yodasws.page("odyssey/book19").setRoute({title:"The Odyssey, Book 19",template:"pages/odyssey/book19/book19.html",route:"/odyssey/book19/"})},function(e,o){yodasws.page("odyssey/book20").setRoute({title:"The Odyssey, Book 20",template:"pages/odyssey/book20/book20.html",route:"/odyssey/book20/"})},function(e,o){yodasws.page("odyssey/book21").setRoute({title:"The Odyssey, Book 21",template:"pages/odyssey/book21/book21.html",route:"/odyssey/book21/"})},function(e,o){yodasws.page("odyssey/book22").setRoute({title:"The Odyssey, Book 22",template:"pages/odyssey/book22/book22.html",route:"/odyssey/book22/"})},function(e,o){yodasws.page("odyssey/book23").setRoute({title:"The Odyssey, Book 23",template:"pages/odyssey/book23/book23.html",route:"/odyssey/book23/"})},function(e,o){yodasws.page("odyssey/book24").setRoute({title:"The Odyssey, Book 24",template:"pages/odyssey/book24/book24.html",route:"/odyssey/book24/"})},function(e,o){yodasws.page("telegony").setRoute({title:"Telegony",template:"pages/telegony/telegony.html",canonicalRoute:"/telegony/",route:"/telegony/?"})},function(e,o){yodasws.page("aeneid").setRoute({title:"The Aeneid, table of contents",template:"pages/aeneid/aeneid.html",canonicalRoute:"/aeneid/",route:"/aeneid/?"})},function(e,o){yodasws.page("aeneid/book1").setRoute({title:"The Aeneid, Book 1",template:"pages/aeneid/book1/book1.html",canonicalRoute:"/aeneid/book1/",route:"/aeneid/book1/?"})},function(e,o){yodasws.page("aeneid/book2").setRoute({title:"The Aeneid, Book 2",template:"pages/aeneid/book2/book2.html",canonicalRoute:"/aeneid/book2/",route:"/aeneid/book2/?"})},function(e,o){yodasws.page("aeneid/book3").setRoute({title:"The Aeneid, Book 3",template:"pages/aeneid/book3/book3.html",canonicalRoute:"/aeneid/book3/",route:"/aeneid/book3/?"})},function(e,o){yodasws.page("aeneid/book4").setRoute({title:"The Aeneid, Book 4",template:"pages/aeneid/book4/book4.html",canonicalRoute:"/aeneid/book4/",route:"/aeneid/book4/?"})},function(e,o){yodasws.page("aeneid/book5").setRoute({title:"The Aeneid, Book 5",template:"pages/aeneid/book5/book5.html",canonicalRoute:"/aeneid/book5/",route:"/aeneid/book5/?"})},function(e,o){yodasws.page("aeneid/book6").setRoute({title:"The Aeneid, Book 6",template:"pages/aeneid/book6/book6.html",canonicalRoute:"/aeneid/book6/",route:"/aeneid/book6/?"})},function(e,o){yodasws.page("aeneid/book7").setRoute({title:"The Aeneid, Book 7",template:"pages/aeneid/book7/book7.html",canonicalRoute:"/aeneid/book7/",route:"/aeneid/book7/?"})},function(e,o){yodasws.page("aeneid/book8").setRoute({title:"The Aeneid, Book 8",template:"pages/aeneid/book8/book8.html",canonicalRoute:"/aeneid/book8/",route:"/aeneid/book8/?"})},function(e,o){yodasws.page("aeneid/book9").setRoute({title:"The Aeneid, Book 9",template:"pages/aeneid/book9/book9.html",canonicalRoute:"/aeneid/book9/",route:"/aeneid/book9/?"})},function(e,o){yodasws.page("aeneid/book10").setRoute({title:"The Aeneid, Book 10",template:"pages/aeneid/book10/book10.html",canonicalRoute:"/aeneid/book10/",route:"/aeneid/book10/?"})},function(e,o){yodasws.page("aeneid/book11").setRoute({title:"The Aeneid, Book 11",template:"pages/aeneid/book11/book11.html",canonicalRoute:"/aeneid/book11/",route:"/aeneid/book11/?"})},function(e,o){yodasws.page("aeneid/book12").setRoute({title:"The Aeneid, Book 12",template:"pages/aeneid/book12/book12.html",canonicalRoute:"/aeneid/book12/",route:"/aeneid/book12/?"})},function(e,o){yodasws.page("ScholaAetii").setRoute({title:"Schola Aetii, table of contents",template:"pages/ScholaAetii/index.html",canonicalRoute:"/ScholaAetii/",route:"/ScholaAetii/?"})},function(e,o){yodasws.page("pageThesesOfReformation").setRoute({title:"Theses of the Reformed Roman Religion",template:"pages/ScholaAetii/thesesOfReformation/thesesOfReformation.html",canonicalRoute:"/ScholaAetii/thesesOfReformation/",route:"/ScholaAetii/thesesOfReformation/?"})},function(e,o){yodasws.page("ScholaAetii/epistleRomans").setRoute({title:"First Epistle to the Romans",template:"pages/ScholaAetii/epistleRomans/epistleRomans.html",canonicalRoute:"/ScholaAetii/epistleRomans/",route:"/ScholaAetii/epistleRomans/?"})},function(e,o){yodasws.page("ApologeticsOfEvil").setRoute({title:"Apologetics of Evil",template:"pages/ApologeticsOfEvil/ApologeticsOfEvil.html",canonicalRoute:"/ApologeticsOfEvil/",route:"/ApologeticsOfEvil/?"})},function(e,o){yodasws.page("pageMetamorphoses").setRoute({title:"Metamorphoses",canonicalRoute:"/metamorphoses/",template:function template(e){for(var _len=arguments.length,o=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){o[_key-1]=arguments[_key]}var t=o.join("/").split("/").filter(function(e){return""!=e});if(0===t.length)return"pages/metamorphoses/metamorphoses.html";var a=t.join("/").match(/^book(\d+)/)[1];return{title:"Metamorphoses, Book "+a,canonicalRoute:"/metamorphoses/book".concat(a,"/"),template:"pages/metamorphoses/book".concat(a,".html")}},route:"/metamorphoses(/book\\d+)?/?"})},function(e,o){yodasws.page("pageAesop").setRoute({title:"Aesop\u2019s Fables",template:"pages/aesop/aesop.html",canonicalRoute:"/aesop/",route:"/aesop/?"})},function(e,o){yodasws.page("pageHomericHymns").setRoute({title:"Homeric Hymns",template:"pages/homericHymns/homericHymns.html",canonicalRoute:"/homericHymns/",route:"/homeric-?[Hh]ymns/?"})},function(e,o){yodasws.page("pageOrphicHymns").setRoute({title:"Orphic Hymns",template:"pages/orphicHymns/orphicHymns.html",canonicalRoute:"/orphicHymns/",route:"/orphic-?[Hh]ymns/?"})},function(e,o){yodasws.page("pageTrueDoctrine").setRoute({title:"On the True Doctrine",template:"pages/trueDoctrine/trueDoctrine.html",canonicalRoute:"/trueDoctrine/",route:"/true-?[Dd]octrine/?"})}]);
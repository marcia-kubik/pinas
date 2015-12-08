/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-bgpositionshorthand-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-createelementattrs_createelement_attrs-cssanimations-csscalc-cssgradients-cssinvalid-cssvalid-fileinput-formattribute-json-localizednumber-mediaqueries-notification-nthchild-objectfit-opacity-placeholder-queryselector-rgba-textshadow-touchevents-video-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,a,s;for(var d in b)if(b.hasOwnProperty(d)){if(e=[],t=b[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function o(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?x.className.baseVal=t:x.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function d(e,n,i,r){var o,d,l,u,c="modernizr",p=a("div"),f=s();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=r?r[i]:c+(i+1),p.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+c,(f.fake?f:p).appendChild(o),f.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(f)),d=n(p,e),f.fake?(f.parentNode.removeChild(f),x.style.overflow=u,x.offsetHeight):p.parentNode.removeChild(p),!!d}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return!!~(""+e).indexOf(t)}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?c(r,n||t):r);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(f(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+f(t[r])+":"+i+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,o){function s(){c&&(delete O.style,delete O.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var d=m(e,r);if(!i(d,"undefined"))return d}for(var c,p,f,h,v,g=["modernizr","tspan"];!O.style;)c=!0,O.modElem=a(g.shift()),O.style=O.modElem.style;for(f=e.length,p=0;f>p;p++)if(h=e[p],v=O.style[h],u(h,"-")&&(h=l(h)),O.style[h]!==n){if(o||i(r,"undefined"))return s(),"pfx"==t?h:!0;try{O.style[h]=r}catch(y){}if(O.style[h]!=v)return s(),"pfx"==t?h:!0}return s(),!1}function v(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+E.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?h(s,t,r,o):(s=(e+" "+j.join(a+" ")+a).split(" "),p(s,t,n))}function g(e,t,i){return v(e,n,n,t,i)}var y=[],b=[],T={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("notification","Notification"in e&&"permission"in e.Notification&&"requestPermission"in e.Notification),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t);var x=t.documentElement,C="svg"===x.nodeName.toLowerCase(),w=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];T._prefixes=w,Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+w.join(t+e),!!n.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=w.length-1;o>r;r++)e=0===r?"to ":"",i+=t+w[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var s=a("a"),d=s.style;return d.cssText=i,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=w.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("createelementattrs",function(){try{return"test"==a('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]}),Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=a("input");return e.type="file",!e.disabled}),Modernizr.addTest("formattribute",function(){var e,n=a("form"),i=a("input"),r=a("div"),o="formtest"+(new Date).getTime(),s=!1;n.id=o;try{i.setAttribute("form",o)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=o,i.setAttributeNode(e))}return r.appendChild(n),r.appendChild(i),x.appendChild(r),s=n.elements&&1===n.elements.length&&i.form==n,r.parentNode.removeChild(r),s});var S=T.testStyles=d;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");S(i,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("cssinvalid",function(){return S("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),S("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),Modernizr.addTest("cssvalid",function(){return S("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=a("input");return e.appendChild(t),t.clientWidth>10})}),Modernizr.addTest("formvalidation",function(){var t=a("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,i=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required><button></button>',S("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),i});var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return d("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();T.mq=z,Modernizr.addTest("mediaqueries",z("only all"));var k=a("input"),P="search tel url email datetime date month week time datetime-local number range color".split(" "),N={};Modernizr.inputtypes=function(e){for(var i,r,o,a=e.length,s="1)",d=0;a>d;d++)k.setAttribute("type",i=e[d]),o="text"!==k.type&&"style"in k,o&&(k.value=s,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&k.style.WebkitAppearance!==n?(x.appendChild(k),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(k,null).WebkitAppearance&&0!==k.offsetHeight,x.removeChild(k)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?k.checkValidity&&k.checkValidity()===!1:k.value!=s)),N[e[d]]=!!o;return N}(P),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=a("div"),i=s(),r=function(){return x.insertBefore(i,x.firstElementChild||x.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var o=n.childNodes[0];r.appendChild(n),o.focus();try{t.execCommand("InsertText",!1,"1,1")}catch(d){}return e="number"===o.type&&1.1===o.valueAsNumber&&o.checkValidity(),r.removeChild(n),i.fake&&r.parentNode.removeChild(r),e});var _="Moz O ms Webkit",E=T._config.usePrefixes?_.split(" "):[];T._cssomPrefixes=E;var A=function(t){var i,r=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var a=0;r>a;a++){var s=w[a],d=s.toUpperCase()+"_"+i;if(d in o)return"@-"+s.toLowerCase()+"-"+t}return!1};T.atRule=A;var j=T._config.usePrefixes?_.toLowerCase().split(" "):[];T._domPrefixes=j;var L={elem:a("modernizr")};Modernizr._q.push(function(){delete L.elem});var O={style:L.elem.style};Modernizr._q.unshift(function(){delete O.style});var q=T.testProp=function(e,t,i){return h([e],n,t,i)};Modernizr.addTest("textshadow",q("textShadow","1px 1px")),T.testAllProps=v,T.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("backgroundsize",g("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",g("backgroundSize","cover")),Modernizr.addTest("borderimage",g("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",g("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",g("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",g("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7));var $=T.prefixed=function(e,t,n){return 0===e.indexOf("@")?A(e):(-1!=e.indexOf("-")&&(e=l(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("objectfit",!!$("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),r(),o(y),delete T.addTest,delete T.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);
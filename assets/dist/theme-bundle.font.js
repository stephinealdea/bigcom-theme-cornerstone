!function(){var t={15371:function(t,n,i){var e;!function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function s(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function a(t,n,i){return(a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:s).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var f=!!window.FontFace;function h(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function l(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,a=0;a<e.length;a+=1)if(n[o]===e[a]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function d(t,n,i){function e(){r&&o&&s&&(r(a),r=null)}n=h(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,a=null,r=i||null;f?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),e()}):setTimeout((function(){o=!0,e()}),0),l(t,"head",n)}function v(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=h(t,"script",{src:n}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout((function(){a||(a=!0,i&&i(Error("Script load timeout")))}),e||5e3),s}return null}function m(){this.a=0,this.c=null}function w(t){return t.a++,function(){t.a--,b(t)}}function y(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function j(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function _(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function k(t){return t.a+t.f}function T(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function S(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function A(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new x("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function C(t){if(t.g){var n=g(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),p(t.f,i,e)}N(t,"inactive")}function N(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,k(i)):t.h[n]())}function E(){this.c={}}function I(t,n){this.c=t,this.f=n,this.a=h(this.c,"span",{"aria-hidden":"true"},this.f)}function O(t){l(t.c,"body",t.a)}function P(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(t.c)+";font-style:"+T(t)+";font-weight:"+t.f+"00;"}function W(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}function B(t,n,i,e,o,s,a){this.v=t,this.B=n,this.c=i,this.a=e,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.m=this.j=this.h=this.g=null,this.g=new I(this.c,this.s),this.h=new I(this.c,this.s),this.j=new I(this.c,this.s),this.m=new I(this.c,this.s),t=P(t=new j(this.a.c+",serif",k(this.a))),this.g.a.style.cssText=t,t=P(t=new j(this.a.c+",sans-serif",k(this.a))),this.h.a.style.cssText=t,t=P(t=new j("serif",k(this.a))),this.j.a.style.cssText=t,t=P(t=new j("sans-serif",k(this.a))),this.m.a.style.cssText=t,O(this.g),O(this.h),O(this.j),O(this.m)}x.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},W.prototype.start=function(){var t=this.c.o.document,n=this,i=r(),e=new Promise((function(e,o){!function s(){r()-i>=n.f?o():t.fonts.load(function(t){return T(t)+" "+t.f+"00 300px "+_(t.c)}(n.a),n.h).then((function(t){1<=t.length?e():setTimeout(s,25)}),(function(){o()}))}()})),o=null,s=new Promise((function(t,i){o=setTimeout(i,n.f)}));Promise.race([s,e]).then((function(){o&&(clearTimeout(o),o=null),n.g(n.a)}),(function(){n.j(n.a)}))};var F={D:"serif",C:"sans-serif"},L=null;function D(){if(null===L){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);L=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return L}function $(t,n,i){for(var e in F)if(F.hasOwnProperty(e)&&n===t.f[F[e]]&&i===t.f[F[e]])return!0;return!1}function q(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=D()&&$(t,i,e)),n?r()-t.A>=t.w?D()&&$(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?H(t,t.v):H(t,t.B):function(t){setTimeout(a((function(){q(this)}),t),50)}(t):H(t,t.v)}function H(t,n){setTimeout(a((function(){u(this.g.a),u(this.h.a),u(this.j.a),u(this.m.a),n(this.a)}),t),0)}function M(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),q(this)};var z=null;function G(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&p(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),N(t,"active")):C(t.a))}function K(t){this.j=t,this.a=new E,this.h=0,this.f=this.g=!0}function R(t,n,i,e,o){var s=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=e||{};if(0===i.length&&s)C(n.a);else{n.f+=i.length,s&&(n.j=s);var c,f=[];for(c=0;c<i.length;c++){var h=i[c],l=r[h.c],u=n.a,g=h;if(u.g&&p(u.f,[u.a.c("wf",g.c,k(g).toString(),"loading")]),N(u,"fontloading",g),u=null,null===z)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);z=g?42<parseInt(g[1],10):!d}else z=!1;u=z?new W(a(n.g,n),a(n.h,n),n.c,h,n.s,l):new B(a(n.g,n),a(n.h,n),n.c,h,n.s,t,l),f.push(u)}for(c=0;c<f.length;c++)f[c].start()}}),0)}function U(t,n){this.c=t,this.a=n}function V(t,n){this.c=t,this.a=n}function X(t,n){this.c=t||J,this.a=[],this.f=[],this.g=n||""}M.prototype.g=function(t){var n=this.a;n.g&&p(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),N(n,"fontactive",t),this.m=!0,G(this)},M.prototype.h=function(t){var n=this.a;if(n.g){var i=g(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),p(n.f,e,o)}N(n,"fontinactive",t),G(this)},K.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,i){var e=[],o=i.timeout;!function(t){t.g&&p(t.f,[t.a.c("wf","loading")]),N(t,"loading")}(n),e=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var s=t.c[e];s&&o.push(s(n[e],i))}return o}(t.a,i,t.c);var s=new M(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load((function(n,i,e){R(t,s,n,i,e)}))}(this,new A(this.c,t),t)},U.prototype.load=function(t){function n(){if(s["__mti_fntLst"+e]){var i,o=s["__mti_fntLst"+e](),a=[];if(o)for(var r=0;r<o.length;r++){var c=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,a.push(new j(c,i))):a.push(new j(c))}t(a)}else setTimeout((function(){n()}),50)}var i=this,e=i.a.projectId,o=i.a.version;if(e){var s=i.c.o;v(this.c,(i.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(o?"?v="+o:""),(function(o){o?t([]):(s["__MonotypeConfiguration__"+e]=function(){return i.a},n())})).id="__MonotypeAPIScript__"+e}else t([])},V.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},a=new m;for(n=0,i=e.length;n<i;n++)d(this.c,e[n],w(a));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new j(e[0],c[f]));else r.push(new j(e[0]));y(a,(function(){t(r,s)}))};var J="https://fonts.googleapis.com/css";function Q(t){this.f=t,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Z={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},tt={i:"i",italic:"i",n:"n",normal:"n"},nt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function it(t,n){this.c=t,this.a=n}var et={Arimo:!0,Cousine:!0,Tinos:!0};function ot(t,n){this.c=t,this.a=n}function st(t,n){this.c=t,this.f=n,this.a=[]}it.prototype.load=function(t){var n=new m,i=this.c,e=new X(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var s="";2==o.length&&""!=o[1]&&(s=":"),t.a.push(o.join(s))}}(e,o);var s=new Q(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),s=["n4"];if(2<=e.length){var a;if(a=[],r=e[1])for(var r,c=(r=r.split(",")).length,f=0;f<c;f++){var h;if((h=r[f]).match(/^[\w-]+$/))if(null==(l=nt.exec(h.toLowerCase())))h="";else{if(h=null==(h=l[2])||""==h?"n":tt[h],null==(l=l[1])||""==l)l="4";else var l=Z[l]||(isNaN(l)?"4":l.substr(0,1));h=[h,l].join("")}else h="";h&&a.push(h)}0<a.length&&(s=a),3==e.length&&(a=[],0<(e=(e=e[2])?e.split(","):a).length&&(e=Y[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=Y[o])&&(t.c[o]=e),e=0;e<s.length;e+=1)t.a.push(new j(o,s[e]))}}(s),d(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),w(n)),y(n,(function(){t(s.a,s.c,et)}))},ot.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var s=n[o],a=n[o+1],r=0;r<a.length;r++)e.push(new j(s,a[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(e)}}),2e3):t([])},st.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,s=i.fonts.length;o<s;++o){var a=i.fonts[o];e.a.push(new j(a.name,S("font-weight:"+a.weight+";font-style:"+a.style)))}t(e.a)},v(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var at=new K(window);at.a.c.custom=function(t,n){return new V(n,t)},at.a.c.fontdeck=function(t,n){return new st(n,t)},at.a.c.monotype=function(t,n){return new U(n,t)},at.a.c.typekit=function(t,n){return new ot(n,t)},at.a.c.google=function(t,n){return new it(n,t)};var rt={load:a(at.load,at)};void 0===(e=function(){return rt}.call(n,i,n,t))||(t.exports=e)}()}},n={},i=function i(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,i),s.exports}(15371),e=document.querySelector('link[href*="https://fonts.googleapis.com/css"]').getAttribute("href"),o=/family=([^&]*)/gm.exec(e)[1].replace(/\+/gm," ").split("|");i.load({custom:{families:o},classes:!1})}();
//# sourceMappingURL=theme-bundle.font.js.map

(()=>{"use strict";var n={122:(n,r,t)=>{t.d(r,{Z:()=>c});var e=t(537),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),a.push([n.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\ntable {\n  width: 100%;\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.resultado {\n  font-size: 2em;\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 3px;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\ntable {\n  width: 100%;\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.resultado {\n  font-size: 2em;\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 3px;\n}"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},537:n=>{n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],s=e.base?u[0]+e.base:u[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=t(p),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)r[f].references++,r[f].updater(A);else{var m=o(A,e);e.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);r[c].references--}for(var u=e(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=u}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0,(()=>{function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(r)}function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function e(r,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,t){if("object"!==n(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var o=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:r.replace(/\D+/g,"")})}var t,o,i;return t=n,i=[{key:"gerarDigito",value:function(n){var t,e=0,o=n.length+1,i=function(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;e+=o*Number(a),o--}}catch(n){i.e(n)}finally{i.f()}var c=11-e%11;return c<=9?String(c):"0"}}],(o=[{key:"gerarNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),t=n.gerarDigito(r),e=n.gerarDigito(r+t);this.novoCpf=r+t+e}},{key:"éSequencia",value:function(){return this.cpfLimpo.charAt(0).replace(11)===this.cpfLimpo}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequencia()&&(this.gerarNovoCpf(),this.novoCpf===this.cpfLimpo)}}])&&e(t.prototype,o),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),n}();function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function a(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(void 0,o=function(n,r){if("object"!==i(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!==i(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(e.key),"symbol"===i(o)?o:String(o)),e)}var o}new o("140.279.197-69").valida();var c,u=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,t;return r=n,t=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),r=o.gerarDigito(n),t=n+r+o.gerarDigito(n+r);return this.formatado(t)}}],t&&a(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),n}(),s=t(379),l=t.n(s),p=t(795),f=t.n(p),A=t(569),m=t.n(A),d=t(565),g=t.n(d),v=t(216),y=t.n(v),b=t(589),h=t.n(b),C=t(122),E={};E.styleTagTransform=h(),E.setAttributes=g(),E.insert=m().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=y(),l()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals,c=new u,document.querySelector(".resultado").innerHTML=c.geraNovoCpf()})()})();
//# sourceMappingURL=bundle.js.map
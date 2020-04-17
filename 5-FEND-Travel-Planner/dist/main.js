var Client=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new B(r||[]);return a._invoke=function(t,e,n){var r=s;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=I(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?h:d,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s="suspendedStart",d="suspendedYield",f="executing",h="completed",p={};function y(){}function m(){}function g(){}var v={};v[a]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==n&&r.call(E,a)&&(v=E);var L=g.prototype=y.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var c=l(t[n],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=L.constructor=g,g.constructor=m,g[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,o){var a=new x(u(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(L),L[c]="Generator",L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){n(0),t.exports=n(6)},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);const r={place:"",country:"",latitude:"",longitude:"",departure:""},o=console.log,a="deejay08",i=(t,e)=>`http://api.geonames.org/postalCodeSearchJSON?placename=${encodeURIComponent(t)}&username=${e}`+"&maxRows=2&style=short",c=t=>`https://restcountries.eu/rest/v2/alpha/${t}`,u=t=>document.getElementById("whats-happening").innerHTML=t;function l(t){t.preventDefault(),document.getElementById("new-travel-date").disabled=!1,u("Great! Please enter your travel date...")}function s(t){t.preventDefault(),document.getElementById("save-trip-button").disabled=!1,u("Awesome! Please click Save Trip button to confirm!")}const d=()=>{return!!(""!=document.getElementById("travel-to-city").value&&""!=document.getElementById("new-travel-date").value)||(alert("Please enter valid Travel Destination and Dates!"),!1)};const f=()=>{localStorage.setItem("travelAppHistory",JSON.stringify({place:document.getElementById("travel-to-city").value,departure:document.getElementById("new-travel-date").value}))},h=()=>{const t=localStorage.getItem("travelAppHistory");if(t){const e=JSON.parse(t)||{place:"",departure:""};document.getElementById("new-travel-date").value=e.departure,document.getElementById("travel-to-city").value=e.place,document.getElementById("save-trip-button").disabled=!1,document.getElementById("new-travel-date").disabled=!1}};async function p(t){t.preventDefault(),u("Thanks! Saving Trip...");let e=d();f(),function(){document.createElement("div").class="upcoming-trip-details";const t=document.getElementById("upcoming-trip-holder"),e=document.createElement("div");e.id="upcoming-trip-details";const n=document.createElement("h2");n.id="upcoming-trip-location",n.innerHTML="Fetching Destination Coordinates...";const r=document.createElement("h2");r.id="days-to-go";const o=document.createElement("h3");o.id="weather",o.innerHTML="Fetching Weather at Destination...";const a=document.createElement("img");a.id="place-img",e.appendChild(n),e.appendChild(r),e.appendChild(o),t.innerHTML="",t.appendChild(a),t.appendChild(e)}(),function(){r.departure=document.getElementById("new-travel-date").valueAsNumber;const t=y(r.departure);document.getElementById("days-to-go").innerHTML=`${t} days to go!`}(),async function(){const t=document.getElementById("travel-to-city").value;fetch(i(t,a)).then(t=>t.json()).then(t=>{const e=t.postalCodes.shift(),n=e.placeName,o=e.countryCode;return r.latitude=e.lat,r.longitude=e.lng,r.place=n,r.country=o,{lat:e.lat,lng:e.lng,place:n,country:o}}).then(t=>(async function(t){const e=t.country;return await fetch(c(e)).then(t=>t.json()).then(e=>{t.country=e.name,r.country=e.name}).catch(t=>o("Country's Full name fetch failed: ",t)),t})(t)).then(t=>(async function(t){return document.getElementById("upcoming-trip-location").innerHTML=`${t.place}, ${t.country}`,t})(t)).then(t=>(async function(t){const e={latitude:t.lat,longitude:t.lng,date:r.departure,placeName:t.place},n=await fetch("/getPlaceDetails",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{const t=await n.json();document.getElementById("weather").innerHTML=`\nForecast: ${t.summary}\nL: ${t.tempLow} F, H: ${t.tempHigh} F\n        `,document.getElementById("place-img").src=t.image}catch(t){o("Failed to location details: ",t)}})(t)).catch(t=>o("Something went wrong in fetching API results: ",t)),r.latitude,r.longitude}(),u(e?"Trip Saved. Please enter next destination.":"Sorry -- something went wrong. Please try again.")}const y=t=>Math.round((t-new Date)/864e5);n(0),n(2),n(3),n(4),n(5);n.d(e,"activateDateField",(function(){return l})),n.d(e,"activateSaveButton",(function(){return s})),n.d(e,"saveTripAndQuery",(function(){return p})),n.d(e,"getFromLocalStorage",(function(){return h})),document.addEventListener("DOMContentLoaded",()=>{Client.getFromLocalStorage();const t=document.getElementById("travel-to-city"),e=document.getElementById("new-travel-date"),n=document.getElementById("save-trip-button");t.addEventListener("input",Client.activateDateField),e.addEventListener("input",Client.activateSaveButton),n.addEventListener("click",Client.saveTripAndQuery)})}]);
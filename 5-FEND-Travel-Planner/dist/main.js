var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){const r=n(1),a=n(2);function o(e){console.log(`[dotenv][DEBUG] ${e}`)}const i=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,c=/\\n/g,s=/\n|\r|\r\n/;function l(e,t){const n=Boolean(t&&t.debug),r={};return e.toString().split(s).forEach((function(e,t){const a=e.match(i);if(null!=a){const e=a[1];let t=a[2]||"";const n=t.length-1,o='"'===t[0]&&'"'===t[n];"'"===t[0]&&"'"===t[n]||o?(t=t.substring(1,n),o&&(t=t.replace(c,"\n"))):t=t.trim(),r[e]=t}else n&&o(`did not match key and value when parsing line ${t+1}: ${e}`)})),r}e.exports.config=function(e){let t=a.resolve(process.cwd(),".env"),n="utf8",i=!1;e&&(null!=e.path&&(t=e.path),null!=e.encoding&&(n=e.encoding),null!=e.debug&&(i=!0));try{const e=l(r.readFileSync(t,{encoding:n}),{debug:i});return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?i&&o(`"${t}" is already defined in \`process.env\` and will not be overwritten`):process.env[t]=e[t]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=l},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"handleSubmit",(function(){return s})),n.d(t,"init",(function(){return d})),n(0).config();const r=(e=0)=>{let t=(new Date).addDays(e),n=t.getMonth();n<10?n=`0${n+1}`:n++;let r=t.getDate();return r<10&&(r=`0${r}`),`${t.getFullYear()}-${n}-${r}`},a=e=>{let t=document.getElementById("errorMessage");t.innerHTML=e,t.style.display="block"},o=async e=>{const t=(n=e,"http://api.geonames.org/searchJSON?username="+process.env.GEONAMESUN+"&fuzzy=0.8&maxRows=10&name="+n);var n;const r=await fetch(t);try{const e=await r.json();return console.log(e),e}catch(e){console.log("getGeoNames error: ",e),a(`There was and error: ${e}`)}},i=async(e,t,n)=>{const r=((e,t,n)=>"http://api.weatherbit.io/v2.0/forecast/daily"+("?units=I&key="+process.env.WEATHERBITKEY)+"&days="+e+"&lat="+t+"&lon="+n)(e,t,n),o=await fetch(r);try{const e=await o.json();return console.log(e),e}catch(e){console.log("getWeatherBit error: ",e),a(`There was and error: ${e}`)}},c=async e=>{const t=(n=e,"https://pixabay.com/api/?key="+process.env.PIXELBAYKEY+"&per_page=3&image_type=photo&q="+n);var n;const r=await fetch(t);try{const e=await r.json();return console.log(e),e}catch(e){console.log("getPixabay error: ",e),a(`There was and error: ${e}`)}},s=e=>{e.preventDefault(),(()=>{let e=document.getElementById("errorMessage");e.innerHTML="",e.style.display="none"})();const t=document.getElementById("cityName").value,n=document.getElementById("tripDate").value;let r=Math.round((s=new Date,(new Date(n).getTime()-s.getTime())/864e5))+1;var s;0==r&&r++,console.log(r),t?n?o(t).then((function(e){e&&e.totalResultsCount&&e.totalResultsCount>0&&e.geonames[0]?i(r,e.geonames[0].lat,e.geonames[0].lng).then((function(t){t&&t.data&&c(e.geonames[0].name+"+"+e.geonames[0].countryName).then((function(n){let r={latitude:t.lat,longitude:t.lon,cityName:e.geonames[0].name,country:e.geonames[0].countryName,max_temp:t.data[t.data.length-1].max_temp,min_temp:t.data[t.data.length-1].min_temp,weatherDesc:t.data[t.data.length-1].weather.description,weatherIcon:t.data[t.data.length-1].weather.icon,tripDate:t.data[t.data.length-1].valid_date,imageUrl:n.hits[0]?n.hits[0].webformatURL:null};localStorage.setItem("tripData",JSON.stringify(r)),(async(e="",t={})=>{const n=await fetch(""+e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();console.log(e)}catch(e){console.log("postData error: ",e),a("There was and error. Please, try it again.")}})("/addTripData",r)})).then(l)})):a("Sorry, not found your city. Please enter different one")})):a("Fill the date trip."):a("Fill the city name you want to travel to.")},l=async()=>{const e=await fetch("/tripData");try{const t=await e.json();console.log(t),u(t)}catch(e){console.log("update UI error: ",e),a("There was and error. Please, try it again.")}},u=e=>{document.getElementById("tripCard").classList.remove("hidden"),e.imageUrl?(document.getElementById("tripImage").setAttribute("src",e.imageUrl),document.getElementById("tripImage").classList.remove("hidden")):document.getElementById("tripImage").classList.add("hidden"),document.getElementById("tripHeading").innerHTML=`Travel to: ${e.cityName}, ${e.country}`,document.getElementById("departureDate").innerHTML=`Departure date: ${e.tripDate}`,document.getElementById("tempHigh").innerHTML=`Temperature high: ${e.max_temp}`,document.getElementById("tempLow").innerHTML=`Temperature low: ${e.min_temp}`,document.getElementById("weatherIcon").setAttribute("src",`https://www.weatherbit.io/static/img/icons/${e.weatherIcon}.png`),document.getElementById("weatherText").innerHTML=`${e.weatherDesc}`},d=()=>{document.getElementById("submitForm").addEventListener("click",s);let e=document.getElementById("tripDate");e.value=r(),e.setAttribute("min",r()),e.setAttribute("max",r(16));let t=localStorage.getItem("tripData");t&&u(JSON.parse(t))};Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};n(3),n(4),n(5),n(6),n(7),n(8);d()}]);
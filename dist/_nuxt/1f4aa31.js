(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{279:function(e,t,r){"use strict";r(72);var o=r(9),n=r(1),c=(r(73),r(274)),l=r.n(c);n.a.use(l.a),t.a={data:function(){return{}},mounted:function(){gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})},methods:{isVerify:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$cookies.isKey("token")){t.next=14;break}return t.prev=1,t.next=4,e.$axios.$post("/api/auth/verify",{},{headers:{token:e.$cookies.get("token")}});case 4:t.sent.result&&(e.token.verify=!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e.logout(),e.token.verify=!1;case 12:t.next=15;break;case 14:e.token.verify=!1;case 15:case"end":return t.stop()}}),t,null,[[1,8]])})))()},logout:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$post("/api/auth/logout",{},{headers:{token:e.$cookies.get("token")}});case 3:e.googleSignOut(),e.kakaoSignOut(),e.$cookies.remove("token"),e.$cookies.remove("user"),window.location.href="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},googleSignOut:function(){gapi.auth2.getAuthInstance().signOut().then((function(){}))},kakaoSignOut:function(){window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728"),Kakao.Auth.getAccessToken()?Kakao.Auth.logout((function(){console.log(Kakao.Auth.getAccessToken())})):console.log("kakao oauth has not logged in.")}}}},423:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce((function(e,t){return e[t]=source[t],e}),e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var o=t[i],c=o.obj[o.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],m=c[d];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(t.push({obj:c,prop:d}),r.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],c=0;c<r.length;++c)void 0!==r[c]&&o.push(r[c]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var n="",i=0;i<o.length;++i){var l=o.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?n+=o.charAt(i):l<128?n+=c[l]:l<2048?n+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?n+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(i)),n+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(n(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!o.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return n(t)&&!n(source)&&(c=l(t,r)),n(t)&&n(source)?(source.forEach((function(n,i){if(o.call(t,i)){var c=t[i];c&&"object"==typeof c&&n&&"object"==typeof n?t[i]=e(c,n,r):t.push(n)}else t[i]=n})),t):Object.keys(source).reduce((function(t,n){var c=source[n];return o.call(t,n)?t[n]=e(t[n],c,r):t[n]=c,t}),c)}}},424:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},446:function(e,t,r){"use strict";var o=r(447),n=r(448),c=r(424);e.exports={formats:c,parse:n,stringify:o}},447:function(e,t,r){"use strict";var o=r(423),n=r(424),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,m=function(e,t){d.apply(e,f(t)?t:[t])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},k=function e(object,t,r,n,c,l,filter,d,h,k,y,x,w){var O=object;if("function"==typeof filter?O=filter(t,O):O instanceof Date?O=k(O):"comma"===r&&f(O)&&(O=O.join(",")),null===O){if(n)return l&&!x?l(t,v.encoder,w):t;O=""}if("string"==typeof O||"number"==typeof O||"boolean"==typeof O||o.isBuffer(O))return l?[y(x?t:l(t,v.encoder,w))+"="+y(l(O,v.encoder,w))]:[y(t)+"="+y(String(O))];var j,S=[];if(void 0===O)return S;if(f(filter))j=filter;else{var _=Object.keys(O);j=d?_.sort(d):_}for(var i=0;i<j.length;++i){var C=j[i];c&&null===O[C]||(f(O)?m(S,e(O[C],"function"==typeof r?r(t,C):t,r,n,c,l,filter,d,h,k,y,x,w)):m(S,e(O[C],t+(h?"."+C:"["+C+"]"),r,n,c,l,filter,d,h,k,y,x,w)))}return S};e.exports=function(object,e){var t,r=object,o=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!c.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],filter=v.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof o.filter?r=(0,o.filter)("",r):f(o.filter)&&(t=o.filter);var d,h=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var y=l[d];t||(t=Object.keys(r)),o.sort&&t.sort(o.sort);for(var i=0;i<t.length;++i){var x=t[i];o.skipNulls&&null===r[x]||m(h,k(r[x],x,y,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var w=h.join(o.delimiter),O=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?O+="utf8=%26%2310003%3B&":O+="utf8=%E2%9C%93&"),w.length>0?O+w:""}},448:function(e,t,r){"use strict";var o=r(423),n=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},f=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(o),f=l?o.slice(0,l.index):o,d=[];if(f){if(!r.plainObjects&&n.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;null!==(l=c.exec(o))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+o.slice(l.index)+"]"),function(e,t,r){for(var o=t,i=e.length-1;i>=0;--i){var n,c=e[i];if("[]"===c&&r.parseArrays)n=[].concat(o);else{n=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(n=[])[f]=o:n[l]=o:n={0:o}}o=n}return o}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var d="string"==typeof e?function(e,t){var i,r={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,m=f.split(t.delimiter,d),h=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var k,y,x=m[i],w=x.indexOf("]="),O=-1===w?x.indexOf("="):w+1;-1===O?(k=t.decoder(x,c.decoder,v),y=t.strictNullHandling?null:""):(k=t.decoder(x.slice(0,O),c.decoder,v),y=t.decoder(x.slice(O+1),c.decoder,v)),y&&t.interpretNumericEntities&&"iso-8859-1"===v&&(y=l(y)),y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(",")),n.call(r,k)?r[k]=o.combine(r[k],y):r[k]=y}return r}(e,r):e,m=r.plainObjects?Object.create(null):{},h=Object.keys(d),i=0;i<h.length;++i){var v=h[i],k=f(v,d[v],r);m=o.merge(m,k,r)}return o.compact(m)}},467:function(e,t,r){var o=r(2),n=r(194).entries;o({target:"Object",stat:!0},{entries:function(e){return n(e)}})},471:function(e,t,r){e.exports=r.p+"img/logo-img.fd72df0.png"},472:function(e,t,r){e.exports=r.p+"img/logo-google.f858a76.png"},473:function(e,t,r){e.exports=r.p+"img/auth-banner-min.5bf96c9.jpeg"},496:function(e,t,r){e.exports=r.p+"img/logo-kakao-long.fdf836c.png"},497:function(e,t,r){"use strict";r(44),r(45),r(27),r(467);var o=r(24),n=(r(72),r(9)),c=r(1),l=(r(73),r(274)),f=r.n(l);c.a.use(f.a),t.a={data:function(){return{redirectUri:{dev:{login:"http://localhost:3000/auth",register:"http://localhost:3000/auth/register"},deploy:{login:"https://wehobby.kr/auth",register:"https://wehobby.kr/auth/register"},envNow:""}}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l,f,d,m,h,v,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.envNow="production",null==e.$route.query.code){t.next=26;break}for(t.prev=2,e.formDisplay=!1,window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728"),r="","auth"==e.$route.name?r="development"===e.envNow?e.redirectUri.dev.login:e.redirectUri.deploy.login:"auth-register"==e.$route.name&&(r="development"===e.envNow?e.redirectUri.dev.register:e.redirectUri.deploy.register),n={grant_type:"authorization_code",client_id:"8b57101aea076db519cf1d2e77e54a30",redirect_uri:r,code:e.$route.query.code,client_secret:"l25wcjyHChkjNsuSVFxMKPqh4svBMeuD"},c="https://kauth.kakao.com/oauth/token?",l=0,f=Object.entries(n);l<f.length;l++)d=Object(o.a)(f[l],2),m=d[0],h=d[1],c+="".concat(m,"=").concat(h,"&");return c=c.slice(0,-1),t.next=13,e.$axios.$post(c,{},{headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}});case 13:return v=t.sent,console.log(v),Kakao.Auth.setAccessToken(v.access_token),k=Kakao.API.request({url:"/v2/user/me"}),t.next=19,k;case 19:"auth"==e.$route.name?(e.form={id:k._result.id,pw:k._result.id},e.loginSend()):"auth-register"==e.$route.name&&(e.form={nickname:k._result.kakao_account.profile.nickname,id:k._result.id,pw:k._result.id,pwc:k._result.id,email:k._result.kakao_account.email,name:k._result.kakao_account.profile.nickname,oauth:"kakao",check:!0},e.registerSend()),console.log(e.form),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(2),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[2,23]])})))()},methods:{googleLogin:function(){document.getElementsByClassName("abcRioButton")[0].click()},googleRegister:function(){document.getElementsByClassName("abcRioButton")[0].click()},kakaoLogin:function(){window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728"),Kakao.Auth.authorize({redirectUri:this.redirectUri.dev.login})},kakaoRegister:function(){window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728"),Kakao.Auth.authorize({redirectUri:this.redirectUri.dev.register})}}}},522:function(e,t,r){var content=r(575);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(62).default)("37bfec74",content,!0,{sourceMap:!1})},574:function(e,t,r){"use strict";r(522)},575:function(e,t,r){var o=r(61),n=r(190),c=r(473);t=o(!1);var l=n(c);t.push([e.i,".back[data-v-3476b4e2]{width:100%;height:100%;top:0;left:0;background-image:url("+l+");background-size:cover;background-position:50%;filter:brightness(70%)}#form[data-v-3476b4e2],.back[data-v-3476b4e2]{position:absolute}#form[data-v-3476b4e2]{width:400px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);border:5px solid hsla(0,0%,100%,.219);border-radius:25px;padding:40px 30px;text-align:center;top:35%;left:50%;margin:-200px auto 0 -200px}#form h1[data-v-3476b4e2]{font-size:40px}#form .sub[data-v-3476b4e2]{margin:0 0 20px!important;font-size:16px;color:#fff}#form button[data-v-3476b4e2]{width:100%;margin-top:10px;font-size:15px;font-weight:700}#form button.submit[data-v-3476b4e2]{background-color:#ff4e54!important}#form p.link-to-register[data-v-3476b4e2]{color:#fff;text-decoration:underline;margin-top:20px}#form .sub[data-v-3476b4e2]{margin-bottom:23px}.forms[data-v-3476b4e2]{margin-bottom:10px}.input-form[data-v-3476b4e2]{margin-bottom:5px!important}#form .form-agree[data-v-3476b4e2]{position:relative;display:flex}#form .form-agree .check[data-v-3476b4e2]{width:20px;background-color:grey}#form .form-agree p[data-v-3476b4e2]{width:100%;height:20px;position:relative;top:7px;text-align:left;color:#fff}.w-btn[data-v-3476b4e2]{display:block;width:100%;background-color:#f5f5f5;padding:10px;border-radius:28px;margin-top:10px;font-weight:500;cursor:pointer;transition:.2s;transition-timing-function:ease}.w-btn[data-v-3476b4e2]:hover{background-color:#e6e6e6}.w-btn .logo-social[data-v-3476b4e2]{width:25px;margin-bottom:-7px;margin-right:5px}.btn-kakao .logo-social[data-v-3476b4e2]{width:50px;margin-bottom:-3px}#form button.submit[data-v-3476b4e2]{margin-top:20px}",""]),e.exports=t},718:function(e,t,r){"use strict";r.r(t);r(72);var o=r(9),n=r(1),c=(r(73),r(279)),l=r(497),f=r(274),d=r.n(f);r(446);n.a.use(d.a);var m={mixins:[c.a,l.a],data:function(){return{token:null,form:{id:null,pw:null},formDisplay:!0,sendLoading:!1}},mounted:function(){},methods:{onSignIn:function(e){this.formDisplay=!1,console.log(e),this.form={id:e.wa,pw:e.wa},console.log(this.form),this.loginSend()},loginSend:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""!=e.form.id&&""!=e.form.pw){t.next=4;break}throw alert("아이디와 비밀번호를 모두 입력해주세요."),{};case 4:return e.sendLoading=!0,t.next=7,e.$axios.$post("/api/auth/login",{id:e.form.id,pw:e.form.pw});case 7:return r=t.sent,e.token=r.data.token,e.$cookies.isKey("token")?(e.$cookies.remove("token"),e.$cookies.set("token",e.token,"30d")):e.$cookies.set("token",e.token,"30d"),t.next=12,e.$axios.$post("/api/profile/read",{},{headers:{token:e.$cookies.get("token")}});case 12:o=t.sent,n={key:parseInt(o.data.key),nickname:o.data.nickname,id:o.data.user_id,image:o.data.imgRepre},e.$cookies.isKey("user")?(e.$cookies.remove("user"),e.$cookies.set("user",n,"30d")):e.$cookies.set("user",n,"30d"),window.location.href="/",t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),e.sendLoading=!1,alert(t.t0.response.data.message);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})))()}}},h=(r(574),r(63)),v=r(127),k=r.n(v),y=r(519),x=r(455),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"back"}),e._v(" "),o("div",{attrs:{id:"form"}},[o("img",{staticStyle:{width:"200px"},attrs:{src:r(471)}}),e._v(" "),o("p",{staticClass:"sub"},[e._v("인연과 취미를 만나는 공간")]),e._v(" "),o("div",{staticClass:"forms"},[e.formDisplay?o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"아이디","hide-details":"",solo:"",flat:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginSend()}},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}):o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"아이디","hide-details":"",solo:"",flat:""}}),e._v(" "),e.formDisplay?o("v-text-field",{staticClass:"input-form",attrs:{type:"password",placeholder:"비밀번호","hide-details":"",solo:"",flat:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginSend()}},model:{value:e.form.pw,callback:function(t){e.$set(e.form,"pw",t)},expression:"form.pw"}}):o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"비밀번호","hide-details":"",solo:"",flat:""}})],1),e._v(" "),o("v-btn",{staticClass:"login",attrs:{loading:e.sendLoading,depressed:"",rounded:"",large:""},on:{click:function(t){return e.loginSend()}}},[e._v("\n      로그인\n    ")]),e._v(" "),o("div",{staticClass:"w-btn",on:{click:function(t){return e.googleLogin()}}},[o("img",{staticClass:"logo-social",attrs:{src:r(472)}}),e._v("\n      Google으로 로그인하기\n    ")]),e._v(" "),o("v-btn",{staticClass:"social-google",staticStyle:{display:"none"},attrs:{id:"google-signin-btn",depressed:"",rounded:"",large:"","data-width":"150","data-onsuccess":"onSignIn"}}),e._v(" "),o("div",{staticClass:"w-btn btn-kakao",on:{click:function(t){return e.kakaoLogin()}}},[o("img",{staticClass:"logo-social",attrs:{src:r(496)}}),e._v("\n      카카오계정으로 로그인하기\n    ")]),e._v(" "),o("nuxt-link",{attrs:{to:"/auth/register"}},[o("p",{staticClass:"link-to-register"},[e._v("위하비 계정 만들기")])])],1)])}),[],!1,null,"3476b4e2",null);t.default=component.exports;k()(component,{VBtn:y.a,VTextField:x.a})}}]);
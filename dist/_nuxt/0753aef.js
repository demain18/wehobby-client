(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{278:function(t,e,o){t.exports=o.p+"img/logo-img.fd72df0.png"},279:function(t,e,o){"use strict";o(72);var n=o(9),r=o(1),c=(o(73),o(275)),l=o.n(c);r.a.use(l.a),e.a={data:function(){return{}},mounted:function(){gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})},methods:{isVerify:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$cookies.isKey("token")){e.next=14;break}return e.prev=1,e.next=4,t.$axios.$post("/api/auth/verify",{},{headers:{token:t.$cookies.get("token")}});case 4:e.sent.result&&(t.token.verify=!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.logout(),t.token.verify=!1;case 12:e.next=15;break;case 14:t.token.verify=!1;case 15:case"end":return e.stop()}}),e,null,[[1,8]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/api/auth/logout",{},{headers:{token:t.$cookies.get("token")}});case 3:t.googleSignOut(),t.$cookies.remove("token"),t.$cookies.remove("user"),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},googleSignOut:function(){gapi.auth2.getAuthInstance().signOut().then((function(){}))}}}},468:function(t,e,o){t.exports=o.p+"img/auth-banner-min.5bf96c9.jpeg"},479:function(t,e,o){t.exports=o.p+"img/logo-google.f858a76.png"},550:function(t,e,o){var content=o(648);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("154679a1",content,!0,{sourceMap:!1})},647:function(t,e,o){"use strict";o(550)},648:function(t,e,o){var n=o(61),r=o(190),c=o(468);e=n(!1);var l=r(c);e.push([t.i,".back[data-v-3ca49642]{width:100%;height:100%;top:0;left:0;background-image:url("+l+");background-size:cover;background-position:50%;filter:brightness(70%)}#form[data-v-3ca49642],.back[data-v-3ca49642]{position:absolute}#form[data-v-3ca49642]{width:400px;background-color:hsla(0,0%,100%,.85);border-radius:5px;padding:40px 30px;text-align:center;top:35%;left:50%;margin:-200px auto 0 -200px}#form h1[data-v-3ca49642]{font-size:40px}#form .sub[data-v-3ca49642]{margin:0 0 20px!important;font-size:16px;color:#5e5e5e}#form button[data-v-3ca49642]{width:100%;margin-top:10px;font-size:15px;font-weight:700}#form button.submit[data-v-3ca49642]{background-color:#ff4e54!important}#form button.social[data-v-3ca49642]{text-transform:none}#form button.social-google[data-v-3ca49642]{background-color:#fff!important}#form button.social-facebook[data-v-3ca49642]{background-color:#4267b2!important;color:#fff}#form .logo-google[data-v-3ca49642]{width:20px;margin-right:8px;margin-bottom:2px}#form .icon-social[data-v-3ca49642]{font-size:23px;margin-right:8px;margin-bottom:2px}#form .sub[data-v-3ca49642]{margin-bottom:23px}.forms[data-v-3ca49642]{margin-bottom:10px}.input-form[data-v-3ca49642]{margin-bottom:5px!important}#form .form-agree[data-v-3ca49642]{position:relative;display:flex}#form .form-agree .check[data-v-3ca49642]{width:20px;background-color:grey}#form .form-agree p[data-v-3ca49642]{width:100%;height:20px;position:relative;top:7px;text-align:left}#form button.submit[data-v-3ca49642]{margin-top:20px}",""]),t.exports=e},718:function(t,e,o){"use strict";o.r(e);o(27),o(72);var n=o(9),r=o(1),c=(o(73),o(445),o(279)),l=o(275),f=o.n(l);r.a.use(f.a);var m={mixins:[c.a],data:function(){return{form:{nickname:null,id:null,pw:null,pwc:null,email:null,check:!1,name:null,oauth:null},list:null,sendLoading:!1}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{registerSend:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1==t.form.check){e.next=4;break}return alert("개인정보 처리방침 및 이용약관에 동의해주세요."),e.abrupt("return");case 4:return t.sendLoading=!0,e.next=7,t.$axios.$post("/api/auth/register",{email:t.form.email,nickname:t.form.nickname,id:t.form.id,pw:t.form.pw,pwc:t.form.pwc,name:t.form.name,oauth:t.form.oauth});case 7:return o=e.sent,t.token=o.data.token,t.$cookies.isKey("token")?(t.$cookies.remove("token"),t.$cookies.set("token",t.token,"30d")):t.$cookies.set("token",t.token,"30d"),e.next=12,t.$axios.$post("/api/profile/read",{},{headers:{token:t.$cookies.get("token")}});case 12:n=e.sent,r={key:parseInt(n.data.key),nickname:n.data.nickname,image:n.data.imgRepre},t.$cookies.isKey("user")?(t.$cookies.remove("user"),t.$cookies.set("user",r,"30d")):t.$cookies.set("user",r,"30d"),window.location.href="/",e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),t.sendLoading=!1,alert(e.t0.response.data.message);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))()},googleRegister:function(){document.getElementsByClassName("abcRioButton")[0].click()},onSignIn:function(t){console.log(t);var e=t.gt;this.form={nickname:e.rU,id:e.GS,pw:e.GS,pwc:e.GS,email:e.Rt,name:e.rU,oauth:"google",check:!0},this.registerSend()}}},d=(o(647),o(63)),v=o(127),k=o.n(v),h=o(514),x=o(708),w=o(456),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"back"}),t._v(" "),n("div",{attrs:{id:"form"}},[n("img",{staticStyle:{width:"200px"},attrs:{src:o(278)}}),t._v(" "),n("p",{staticClass:"sub"},[t._v("인연과 취미를 만나는 공간")]),t._v(" "),n("div",{staticClass:"forms"},[n("v-text-field",{staticClass:"input-form",attrs:{placeholder:"닉네임","hide-details":"",solo:"",flat:""},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}}),t._v(" "),n("v-text-field",{staticClass:"input-form",attrs:{placeholder:"아이디","hide-details":"",solo:"",flat:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),t._v(" "),n("v-text-field",{staticClass:"input-form",attrs:{placeholder:"비밀번호","hide-details":"",solo:"",flat:""},model:{value:t.form.pw,callback:function(e){t.$set(t.form,"pw",e)},expression:"form.pw"}}),t._v(" "),n("v-text-field",{staticClass:"input-form",attrs:{placeholder:"비밀번호 확인","hide-details":"",solo:"",flat:""},model:{value:t.form.pwc,callback:function(e){t.$set(t.form,"pwc",e)},expression:"form.pwc"}}),t._v(" "),n("v-text-field",{staticClass:"input-form",attrs:{placeholder:"이메일","hide-details":"",solo:"",flat:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),n("div",{staticClass:"form-agree"},[n("v-checkbox",{model:{value:t.form.check,callback:function(e){t.$set(t.form,"check",e)},expression:"form.check"}}),t._v(" "),n("p",[n("nuxt-link",{staticClass:"highlight",attrs:{to:"/notice/personal-information-policy",target:"_blank"}},[t._v("개인정보 처리방침")]),t._v(" 및\n        "),n("nuxt-link",{staticClass:"highlight",attrs:{to:"/notice/term-and-conditions",target:"_blank"}},[t._v("이용약관")]),t._v("를 숙지했으며 이에 동의합니다\n      ")],1)],1),t._v(" "),n("v-btn",{staticClass:"submit",attrs:{depressed:"",rounded:"",large:"",dark:"",loading:t.sendLoading},on:{click:function(e){return t.registerSend()}}},[t._v("\n      계정 생성\n    ")]),t._v(" "),n("v-btn",{staticClass:"social social-google",attrs:{depressed:"",rounded:"",large:""},on:{click:function(e){return t.googleRegister()}}},[n("img",{staticClass:"logo-google",attrs:{src:o(479)}}),t._v("\n      Google으로 계정 생성하기\n    ")]),t._v(" "),n("v-btn",{staticClass:"social-google",staticStyle:{display:"none"},attrs:{id:"google-signin-btn",depressed:"",rounded:"",large:"","data-width":"150","data-onsuccess":"onSignIn"}})],1)])}),[],!1,null,"3ca49642",null);e.default=component.exports;k()(component,{VBtn:h.a,VCheckbox:x.a,VTextField:w.a})}}]);
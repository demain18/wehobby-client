(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{279:function(t,e,n){t.exports=n.p+"img/logo-img.fd72df0.png"},280:function(t,e,n){"use strict";n(72);var o=n(9),r=n(1),c=n(73),l=n.n(c),d=n(274),f=n.n(d);r.a.use(f.a),e.a={data:function(){return{}},mounted:function(){gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})},methods:{isVerify:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$cookies.isKey("token")){e.next=14;break}return e.prev=1,e.next=4,l.a.post("/api/auth/verify",{},{headers:{token:t.$cookies.get("token")}});case 4:e.sent.data.result&&(t.token.verify=!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.logout(),t.token.verify=!1;case 12:e.next=15;break;case 14:t.token.verify=!1;case 15:case"end":return e.stop()}}),e,null,[[1,8]])})))()},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("/api/auth/logout",{},{headers:{token:t.$cookies.get("token")}});case 3:t.googleSignOut(),t.$cookies.remove("token"),t.$cookies.remove("user"),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},googleSignOut:function(){gapi.auth2.getAuthInstance().signOut().then((function(){}))}}}},465:function(t,e,n){t.exports=n.p+"img/auth-banner-min.5bf96c9.jpeg"},474:function(t,e,n){t.exports=n.p+"img/logo-google.f858a76.png"},495:function(t,e,n){"use strict";var o=n(1),r=n(12);e.a=o.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.h}}})},542:function(t,e,n){var content=n(642);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("59887686",content,!0,{sourceMap:!1})},641:function(t,e,n){"use strict";n(542)},642:function(t,e,n){var o=n(61),r=n(190),c=n(465);e=o(!1);var l=r(c);e.push([t.i,".back[data-v-39db46a4]{width:100%;height:100%;top:0;left:0;background-image:url("+l+");background-size:cover;background-position:50%;filter:brightness(70%)}#form[data-v-39db46a4],.back[data-v-39db46a4]{position:absolute}#form[data-v-39db46a4]{width:400px;background-color:hsla(0,0%,100%,.85);border-radius:5px;padding:40px 30px;text-align:center;top:35%;left:50%;margin:-200px auto 0 -200px}#form h1[data-v-39db46a4]{font-size:40px}#form .sub[data-v-39db46a4]{margin:0 0 20px!important;font-size:16px;color:#5e5e5e}#form button[data-v-39db46a4]{width:100%;margin-top:10px;font-size:15px;font-weight:700}#form button.submit[data-v-39db46a4]{background-color:#ff4e54!important}#form button.social[data-v-39db46a4]{text-transform:none}#form button.social-google[data-v-39db46a4]{background-color:#fff!important}#form button.social-facebook[data-v-39db46a4]{background-color:#4267b2!important;color:#fff}#form .logo-google[data-v-39db46a4]{width:20px;margin-right:8px;margin-bottom:2px}#form .icon-social[data-v-39db46a4]{font-size:23px;margin-right:8px;margin-bottom:2px}#form .sub[data-v-39db46a4]{margin-bottom:23px}.forms[data-v-39db46a4]{margin-bottom:10px}.input-form[data-v-39db46a4]{margin-bottom:5px!important}#form .form-agree[data-v-39db46a4]{position:relative;display:flex}#form .form-agree .check[data-v-39db46a4]{width:20px;background-color:grey}#form .form-agree p[data-v-39db46a4]{width:100%;height:20px;position:relative;top:7px;text-align:left}#form button.submit[data-v-39db46a4]{margin-top:20px}",""]),t.exports=e},643:function(t,e,n){var content=n(644);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("12a190a6",content,!0,{sourceMap:!1})},644:function(t,e,n){(e=n(61)(!1)).push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=e},710:function(t,e,n){"use strict";n.r(e);n(27),n(72);var o=n(9),r=n(1),c=n(73),l=n.n(c),d=(n(294),n(280)),f=n(274),m=n.n(f);r.a.use(m.a);var h={mixins:[d.a],data:function(){return{form:{nickname:null,id:null,pw:null,pwc:null,email:null,check:!1,name:null,oauth:null},list:null,sendLoading:!1}},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{registerSend:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1==t.form.check){e.next=4;break}return alert("개인정보 처리방침 및 이용약관에 동의해주세요."),e.abrupt("return");case 4:return t.sendLoading=!0,e.next=7,l.a.post("/api/auth/register",{email:t.form.email,nickname:t.form.nickname,id:t.form.id,pw:t.form.pw,pwc:t.form.pwc,name:t.form.name,oauth:t.form.oauth});case 7:return n=e.sent,t.token=n.data.data.token,t.$cookies.isKey("token")?(t.$cookies.remove("token"),t.$cookies.set("token",t.token,"30d")):t.$cookies.set("token",t.token,"30d"),e.next=12,l.a.post("/api/profile/read",{},{headers:{token:t.$cookies.get("token")}});case 12:o=e.sent,r={key:parseInt(o.data.data.key),nickname:o.data.data.nickname,image:o.data.data.imgRepre},t.$cookies.isKey("user")?(t.$cookies.remove("user"),t.$cookies.set("user",r,"30d")):t.$cookies.set("user",r,"30d"),window.location.href="/",e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),t.sendLoading=!1,alert(e.t0.response.data.message);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))()},googleRegister:function(){document.getElementsByClassName("abcRioButton")[0].click()},onSignIn:function(t){console.log(t);var e=t.gt;this.form={nickname:e.rU,id:e.GS,pw:e.GS,pwc:e.GS,email:e.Rt,name:e.rU,oauth:"google",check:!0},this.registerSend()}}},v=(n(641),n(63)),k=n(127),x=n.n(k),w=n(508),y=(n(20),n(34),n(25),n(42),n(43),n(35),n(7),n(14),n(26),n(8)),$=(n(643),n(543),n(278)),O=n(477);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=n(560).a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return _(_({},O.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement($.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",_(_({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),I=n(476),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"back"}),t._v(" "),o("div",{attrs:{id:"form"}},[o("img",{staticStyle:{width:"200px"},attrs:{src:n(279)}}),t._v(" "),o("p",{staticClass:"sub"},[t._v("인연과 취미를 만나는 공간")]),t._v(" "),o("div",{staticClass:"forms"},[o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"닉네임","hide-details":"",solo:"",flat:""},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}}),t._v(" "),o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"아이디","hide-details":"",solo:"",flat:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),t._v(" "),o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"비밀번호","hide-details":"",solo:"",flat:""},model:{value:t.form.pw,callback:function(e){t.$set(t.form,"pw",e)},expression:"form.pw"}}),t._v(" "),o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"비밀번호 확인","hide-details":"",solo:"",flat:""},model:{value:t.form.pwc,callback:function(e){t.$set(t.form,"pwc",e)},expression:"form.pwc"}}),t._v(" "),o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"이메일","hide-details":"",solo:"",flat:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),o("div",{staticClass:"form-agree"},[o("v-checkbox",{model:{value:t.form.check,callback:function(e){t.$set(t.form,"check",e)},expression:"form.check"}}),t._v(" "),o("p",[o("nuxt-link",{staticClass:"highlight",attrs:{to:"/notice/personal-information-policy",target:"_blank"}},[t._v("개인정보 처리방침")]),t._v(" 및\n        "),o("nuxt-link",{staticClass:"highlight",attrs:{to:"/notice/term-and-conditions",target:"_blank"}},[t._v("이용약관")]),t._v("를 숙지했으며 이에 동의합니다\n      ")],1)],1),t._v(" "),o("v-btn",{staticClass:"submit",attrs:{depressed:"",rounded:"",large:"",dark:"",loading:t.sendLoading},on:{click:function(e){return t.registerSend()}}},[t._v("\n      계정 생성\n    ")]),t._v(" "),o("v-btn",{staticClass:"social social-google",attrs:{depressed:"",rounded:"",large:""},on:{click:function(e){return t.googleRegister()}}},[o("img",{staticClass:"logo-google",attrs:{src:n(474)}}),t._v("\n      Google으로 계정 생성하기\n    ")]),t._v(" "),o("v-btn",{staticClass:"social-google",staticStyle:{display:"none"},attrs:{id:"google-signin-btn",depressed:"",rounded:"",large:"","data-width":"150","data-onsuccess":"onSignIn"}})],1)])}),[],!1,null,"39db46a4",null);e.default=component.exports;x()(component,{VBtn:w.a,VCheckbox:S,VTextField:I.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{459:function(e,t,o){e.exports=o.p+"img/banner_2.6476e61.jpg"},528:function(e,t,o){var content=o(629);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(62).default)("5620bca6",content,!0,{sourceMap:!1})},628:function(e,t,o){"use strict";o(528)},629:function(e,t,o){var r=o(61),n=o(190),f=o(459);t=r(!1);var d=n(f);t.push([e.i,".back[data-v-6e5915ef]{width:100%;height:100%;top:0;left:0;background-image:url("+d+");background-size:cover;background-position:50%;filter:brightness(70%)}#form[data-v-6e5915ef],.back[data-v-6e5915ef]{position:absolute}#form[data-v-6e5915ef]{width:400px;background-color:hsla(0,0%,100%,.85);border-radius:5px;padding:40px 30px;text-align:center;top:35%;left:50%;margin:-200px auto 0 -200px}#form h1[data-v-6e5915ef]{font-size:40px}#form .sub[data-v-6e5915ef]{margin:3px 0 15px!important;font-size:14px;font-weight:700}#form button[data-v-6e5915ef]{width:100%;margin-top:10px;font-size:15px;font-weight:700}#form button.submit[data-v-6e5915ef]{background-color:#ff4e54!important}#form button.social-google[data-v-6e5915ef]{background-color:#fff!important;margin-top:20px}#form button.social-facebook[data-v-6e5915ef]{background-color:#4267b2!important;color:#fff}#form .logo-google[data-v-6e5915ef]{width:20px;margin-right:3px;margin-bottom:2px}#form .icon-social[data-v-6e5915ef]{font-size:23px!important;margin-right:3px;margin-bottom:2px}#form .sub[data-v-6e5915ef]{margin-bottom:23px}.forms[data-v-6e5915ef]{margin-bottom:10px}.input-form[data-v-6e5915ef]{margin-bottom:5px!important}#form .form-agree[data-v-6e5915ef]{position:relative;display:flex}#form .form-agree .check[data-v-6e5915ef]{width:20px;background-color:grey}#form .form-agree p[data-v-6e5915ef]{width:100%;height:20px;position:relative;top:7px;text-align:left}#form button.submit[data-v-6e5915ef]{margin-top:20px}",""]),e.exports=t},690:function(e,t,o){"use strict";o.r(t);o(72);var r=o(9),n=o(1),f=o(73),d=o.n(f),c=o(276),m=o.n(c);n.a.use(m.a);var l={data:function(){return{token:null,form:{id:"guest",pw:"guest"}}},mounted:function(){},methods:{formSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""!=e.form.id&&""!=e.form.pw){t.next=4;break}return alert("아이디와 비밀번호를 모두 입력해주세요."),t.abrupt("return");case 4:return t.next=6,d.a.post("/api/auth/login",{id:e.form.id,pw:e.form.pw});case 6:return o=t.sent,e.token=o.data.data.token,e.$cookies.isKey("token")?(e.$cookies.remove("token"),e.$cookies.set("token",e.token,"30d")):e.$cookies.set("token",e.token,"30d"),t.next=11,d.a.post("/api/profile/read",{},{headers:{token:e.$cookies.get("token")}});case 11:r=t.sent,n={key:parseInt(r.data.data.key),nickname:r.data.data.nickname,image:r.data.data.imgRepre},e.$cookies.isKey("user")?(e.$cookies.remove("user"),e.$cookies.set("user",n,"30d")):e.$cookies.set("user",n,"30d"),window.location.href="/",t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),alert(t.t0.response.data.message);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}},k=(o(628),o(63)),v=o(127),x=o.n(v),h=o(672),w=o(467),component=Object(k.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"back"}),e._v(" "),o("div",{attrs:{id:"form"}},[o("h1",[e._v("동네친구")]),e._v(" "),o("p",{staticClass:"sub"},[e._v("함께 즐기는 취미")]),e._v(" "),o("div",{staticClass:"forms"},[o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"아이디","hide-details":"",solo:"",flat:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.formSubmit()}},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),e._v(" "),o("v-text-field",{staticClass:"input-form",attrs:{placeholder:"비밀번호","hide-details":"",solo:"",flat:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.formSubmit()}},model:{value:e.form.pw,callback:function(t){e.$set(e.form,"pw",t)},expression:"form.pw"}})],1),e._v(" "),o("v-btn",{staticClass:"login",attrs:{depressed:"",rounded:"",large:""},on:{click:function(t){return e.formSubmit()}}},[e._v("\n      로그인\n    ")])],1)])}),[],!1,null,"6e5915ef",null);t.default=component.exports;x()(component,{VBtn:h.a,VTextField:w.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{278:function(t,e,o){t.exports=o.p+"img/logo-img.fd72df0.png"},279:function(t,e,o){"use strict";o(72);var n=o(9),r=o(1),c=(o(73),o(275)),l=o.n(c);r.a.use(l.a),e.a={data:function(){return{}},mounted:function(){gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})},methods:{isVerify:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$cookies.isKey("token")){e.next=14;break}return e.prev=1,e.next=4,t.$axios.$post("/api/auth/verify",{},{headers:{token:t.$cookies.get("token")}});case 4:e.sent.result&&(t.token.verify=!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.logout(),t.token.verify=!1;case 12:e.next=15;break;case 14:t.token.verify=!1;case 15:case"end":return e.stop()}}),e,null,[[1,8]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/api/auth/logout",{},{headers:{token:t.$cookies.get("token")}});case 3:t.googleSignOut(),t.$cookies.remove("token"),t.$cookies.remove("user"),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},googleSignOut:function(){gapi.auth2.getAuthInstance().signOut().then((function(){}))}}}},280:function(t,e,o){var content=o(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("46bc0813",content,!0,{sourceMap:!1})},281:function(t,e,o){var content=o(428);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("7cf17db0",content,!0,{sourceMap:!1})},282:function(t,e,o){var content=o(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("09b3211a",content,!0,{sourceMap:!1})},283:function(t,e,o){var content=o(433);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("27dd90d3",content,!0,{sourceMap:!1})},284:function(t,e,o){var content=o(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("33164fa7",content,!0,{sourceMap:!1})},285:function(t,e,o){"use strict";o(192),o(102),o(27),o(7),o(30),o(14),o(53),o(64);var n=o(272),r=o.n(n);e.a={inheritAttrs:!1,data:function(){return{globalVal:!0}},methods:{findKey:function(t,e){return null==e?e:(e-=1,"area"==t?this.filterItems.citysArea[e].key:"subway"==t?this.filterItems.citysSubway[e].key:"genre"==t?this.filterItems.categoryDetail[e].key:void 0)},findName:function(t,e){return null==e?e:(e-=1,"area"==t?this.filterItems.citysArea[e].name:"subway"==t?this.filterItems.citysSubway[e].name:"genre"==t?this.filterItems.categoryDetail[e].name:void 0)},findAreaName:function(t){var e=this;return 0==this.postItems[t].area?"":this.filterItems.citysArea.find((function(o){return o.key==e.postItems[t].area})).name},agoCalc:function(t,time){var e=r()().subtract(1969,"years").format("YYYY/MM/DD HH:mm:ss"),o=r()(new Date(t+" "+time)).subtract(-31,"minutes").format("YYYY/MM/DD HH:mm:ss"),n=r.a.utc(r()(e,"YYYY/MM/DD HH:mm:ss").diff(r()(o,"YYYY/MM/DD HH:mm:ss")));return n.format("Y")>1?n.format("Y년"):n.format("M")>1?n.format("M개월"):n.format("D")>1?n.format("D일"):n.format("H")>0?n.format("H시간"):n.format("m")>1?n.format("m분"):n.format("m")>0?n.format("방금"):void 0},markupReplace:function(content){if(0==content)return"";for(var desc=String(content),t=["<p>","</p>","<strong>","</strong>","<i>","</i>","<stricke>","</strike>","<li>","</li>","<ul>","</ul>","<ol>","</ol>","<em>","</em>","<u>","</u>","<br>","</br>"],i=0;i<t.length;i++)desc=desc.split(t[i]).join("");return desc},thousandComma:function(content,t){return 0==t?content.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"원":content.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},repreImageRead:function(image){return null==image||0==image.length||null==image[0]?"https://wehobby-real.s3.us-east-2.amazonaws.com/static/placeholder.png":image[0]}}}},425:function(t,e,o){"use strict";o(280)},426:function(t,e,o){(e=o(61)(!1)).push([t.i,".v-list-item{min-height:30px!important;padding:3px 10px!important}[v-cloak]{display:none!important}",""]),t.exports=e},427:function(t,e,o){"use strict";o(281)},428:function(t,e,o){var n=o(61),r=o(190),c=o(191);e=n(!1);var l=r(c);e.push([t.i,'@font-face{font-family:notoKr;src:local("../lib/font/NotoSansKR-Regular.otf")}html{height:100%}body{min-height:100%;margin:0;color:#535353;font-family:notoKr,sans-serif!important;font-size:16px;position:relative}[v-cloak]{display:none!important}p{font-size:16px;margin-top:0;margin-bottom:3px!important}h2{font-size:20px}h1{font-size:24px}input{min-height:30px}button{min-height:34px}.btn-more{color:#cecece;transition:.1s;cursor:pointer}.btn-more:hover{color:#535353}a{color:#535353!important;text-decoration:none;transition:.1s;padding:0!important}a:hover{color:#cecece!important}a.actionDisabled:hover{color:#535353!important}a.highlight{color:#4267b2!important}a.highlight:hover{color:#97abd4!important}input.input-text{height:40px;background-color:#fff;border-radius:3px;border:1px solid #cecece;padding-left:10px}button.btn-main-color{background-color:#ff4e54!important}button.btn-main-color,button.btn-warn{color:#fff!important;font-weight:700!important}button.btn-warn{background-color:red!important}#wrap .info{background-color:hsla(0,0%,100%,0)!important;border-color:hsla(0,0%,100%,0)!important}#wrap{max-width:1040px;min-height:500px;margin:0 auto;position:relative;padding-top:50px!important;padding-bottom:200px}@media(max-width:769px){#wrap{padding-bottom:130px!important}}#gnb{background-color:#fff;border-bottom:1px solid #e9e9e9;position:fixed;top:0;width:100%;z-index:9!important}#gnb .pc{display:block}#gnb .mobile{display:none}#gnb .wrap{position:relative;max-width:1040px;margin:0 auto;padding:0 15px;font-size:14px}#gnb .wrap .item{line-height:50px;position:relative;top:2px;cursor:pointer;font-weight:700}#gnb .wrap .lft{float:left;margin-right:10px}#gnb .wrap .mid{display:inline-block;position:absolute;left:50%;margin-left:-240px}#gnb .wrap .rgt{float:right;margin-left:10px}#gnb .wrap .logo{font-size:20px}#gnb .wrap .span-a-tag:hover{color:#cecece!important}#gnb .wrap .mid a{padding:15px!important}#gnb .wrap .mid .active{padding-bottom:14px!important;border-bottom:2px solid #e20000;color:#e20000}#gnb .wrap .mid .active:hover{color:#e20000!important}#gnb .wrap .mid a:last-child{margin-right:0}#gnb .wrap .user-icon{width:30px!important;height:30px!important;border-radius:100px;position:relative;top:10px;cursor:pointer}#gnb .wrap .user-icon img.repre{-o-object-fit:cover;object-fit:cover}@media(max-width:769px){#gnb{height:50px}#gnb .pc{display:none}#gnb .mobile{display:block}#gnb .wrap .mid{margin-left:-70px;line-height:50px}#gnb .wrap .icon-left-menu{margin-top:8px;position:relative}}#wrap .snb{min-width:240px;margin-left:18px}#wrap .snb .ad{width:100%;height:370px;background-image:url('+l+");background-size:70%;background-position:50%;border:1px solid #e7e7e7;border-radius:10px;margin-bottom:50px}@media(max-width:769px){#wrap .snb{width:100%!important;padding:0 10px;margin-left:0!important}#wrap .snb .ad{margin-bottom:15px}}#wrap .snb-wrap{min-width:170px;font-size:18px;font-weight:700;padding-right:15px}#wrap .snb-wrap .snb-btn{padding:10px 15px;margin-bottom:3px;border-radius:10px;cursor:pointer;transition:.1s}#wrap .snb-wrap .active{background-color:#ececec!important}#wrap .snb-wrap .snb-btn:hover{background-color:#ececec}#wrap input{width:100%;border-radius:5px;box-sizing:border-box}#wrap .form{margin-bottom:15px}#wrap .form-flex-full{width:100%}#wrap .form .label{color:#717171;font-size:14px;margin-bottom:5px}#wrap .form-flex{display:flex}#wrap .form-flex .form{margin-right:20px}#wrap .form-flex .form:last-child{margin-right:0}#wrap .avator-facebook{width:40px;height:40px;padding:7px;border-radius:100%;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#fff!important}.smlist{width:50%;display:flex;flex-wrap:nowrap;margin-bottom:10px}.smlist .img{min-height:50px;min-width:50px;max-height:50px;max-width:50px;-o-object-fit:cover;object-fit:cover;border-radius:3px;margin-right:8px}.smlist .content{width:100%}.smlist .content p{font-size:14px}.smlist .content .title{font-size:18px!important;line-height:10px!important;font-weight:700}.article{border-bottom:1px solid #cecece;min-height:100px;display:flex;padding:10px 0;box-sizing:border-box}.article:last-child{padding-bottom:20px;border-bottom:2px solid #cecece}.article .img-repre{width:80px;height:80px;-o-object-fit:cover;object-fit:cover;border-radius:5px}.article .content{width:100%;margin-left:10px;position:relative}.article .content .title{padding-right:50px;font-size:18px!important;font-weight:700;line-height:20px!important;cursor:pointer;transition:.1s}.article .content .title:hover{color:#cecece}.article .content .info{padding-right:50px;font-size:14px;color:#7b7b7b}.article .content .info span.bold{font-weight:700;color:#535353}.article .content .txt{padding-right:50px;max-width:100%;font-size:14px;white-space:nowrap;position:absolute;overflow:hidden;text-overflow:ellipsis}.article .content .time{font-size:14px;color:#7b7b7b;position:absolute;top:0;right:0}.paging-wrap{margin-top:20px;display:flex}.paging-wrap .count{display:flex}.paging-wrap .count div.btn{padding:0 10px;height:17px;border-right:1px solid #7b7b7b;cursor:pointer}.paging-wrap .count div.btn:last-child{border-right:0}.paging-wrap .v-btn{margin-right:0}.paging-wrap .elevator-btn{color:#e20000!important}#wrap .list-header-line{border-bottom:2px solid #cecece;padding-bottom:3px;margin-bottom:15px}#wrap .list-header .title{font-size:20px;font-weight:700}#wrap .list-header .btn-more{float:right;position:relative;top:5px}#wrap .bread-crumb{font-size:14px}#wrap .bread-crumb span{cursor:pointer}#wrap .bread-crumb .v-icon{position:relative;top:-1px}#footer{width:100%;padding:15px 0;text-align:center;background-color:#f5f5f5;position:absolute;bottom:0;margin-bottom:0}#footer .btn-wrap{margin-bottom:10px}",""]),t.exports=e},429:function(t,e,o){"use strict";o(282)},430:function(t,e,o){(e=o(61)(!1)).push([t.i,"",""]),t.exports=e},431:function(t,e,o){t.exports=o.p+"img/placeholder1.9d4cf57.jpg"},432:function(t,e,o){"use strict";o(283)},433:function(t,e,o){(e=o(61)(!1)).push([t.i,".drawer-wrap{width:100%;height:100%;background-color:rgba(0,0,0,.3);position:fixed;top:0;left:0;display:flex;z-index:10!important;display:none;opacity:0;transition:opacity .15s linear}.drawerWrapActive{display:block;opacity:1;transition:opacity .15s linear}.drawer{width:230px;height:100%;background-color:#fff;position:absolute;top:0;left:0}.drawer-close{width:100%;height:100%;z-index:2}.drawer .content{padding:10px 15px}.drawer .title{font-size:18px;font-weight:700;margin-left:5px;position:relative;top:1px}.drawer .v-list-item{padding-left:15px!important}",""]),t.exports=e},434:function(t,e,o){"use strict";o(284)},435:function(t,e,o){var n=o(61),r=o(190),c=o(191);e=n(!1);var l=r(c);e.push([t.i,'@font-face{font-family:notoKr;src:local("../lib/font/NotoSansKR-Regular.otf")}html{height:100%}body{min-height:100%;margin:0;color:#535353;font-family:notoKr,sans-serif!important;font-size:16px;position:relative}[v-cloak]{display:none!important}p{font-size:16px;margin-top:0;margin-bottom:3px!important}h2{font-size:20px}h1{font-size:24px}input{min-height:30px}button{min-height:34px}.btn-more{color:#cecece;transition:.1s;cursor:pointer}.btn-more:hover{color:#535353}a{color:#535353!important;text-decoration:none;transition:.1s;padding:0!important}a:hover{color:#cecece!important}a.actionDisabled:hover{color:#535353!important}a.highlight{color:#4267b2!important}a.highlight:hover{color:#97abd4!important}input.input-text{height:40px;background-color:#fff;border-radius:3px;border:1px solid #cecece;padding-left:10px}button.btn-main-color{background-color:#ff4e54!important}button.btn-main-color,button.btn-warn{color:#fff!important;font-weight:700!important}button.btn-warn{background-color:red!important}#wrap .info{background-color:hsla(0,0%,100%,0)!important;border-color:hsla(0,0%,100%,0)!important}#wrap{max-width:1040px;min-height:500px;margin:0 auto;position:relative;padding-top:50px!important;padding-bottom:200px}@media(max-width:769px){#wrap{padding-bottom:130px!important}}#gnb{background-color:#fff;border-bottom:1px solid #e9e9e9;position:fixed;top:0;width:100%;z-index:9!important}#gnb .pc{display:block}#gnb .mobile{display:none}#gnb .wrap{position:relative;max-width:1040px;margin:0 auto;padding:0 15px;font-size:14px}#gnb .wrap .item{line-height:50px;position:relative;top:2px;cursor:pointer;font-weight:700}#gnb .wrap .lft{float:left;margin-right:10px}#gnb .wrap .mid{display:inline-block;position:absolute;left:50%;margin-left:-240px}#gnb .wrap .rgt{float:right;margin-left:10px}#gnb .wrap .logo{font-size:20px}#gnb .wrap .span-a-tag:hover{color:#cecece!important}#gnb .wrap .mid a{padding:15px!important}#gnb .wrap .mid .active{padding-bottom:14px!important;border-bottom:2px solid #e20000;color:#e20000}#gnb .wrap .mid .active:hover{color:#e20000!important}#gnb .wrap .mid a:last-child{margin-right:0}#gnb .wrap .user-icon{width:30px!important;height:30px!important;border-radius:100px;position:relative;top:10px;cursor:pointer}#gnb .wrap .user-icon img.repre{-o-object-fit:cover;object-fit:cover}@media(max-width:769px){#gnb{height:50px}#gnb .pc{display:none}#gnb .mobile{display:block}#gnb .wrap .mid{margin-left:-70px;line-height:50px}#gnb .wrap .icon-left-menu{margin-top:8px;position:relative}}#wrap .snb{min-width:240px;margin-left:18px}#wrap .snb .ad{width:100%;height:370px;background-image:url('+l+");background-size:70%;background-position:50%;border:1px solid #e7e7e7;border-radius:10px;margin-bottom:50px}@media(max-width:769px){#wrap .snb{width:100%!important;padding:0 10px;margin-left:0!important}#wrap .snb .ad{margin-bottom:15px}}#wrap .snb-wrap{min-width:170px;font-size:18px;font-weight:700;padding-right:15px}#wrap .snb-wrap .snb-btn{padding:10px 15px;margin-bottom:3px;border-radius:10px;cursor:pointer;transition:.1s}#wrap .snb-wrap .active{background-color:#ececec!important}#wrap .snb-wrap .snb-btn:hover{background-color:#ececec}#wrap input{width:100%;border-radius:5px;box-sizing:border-box}#wrap .form{margin-bottom:15px}#wrap .form-flex-full{width:100%}#wrap .form .label{color:#717171;font-size:14px;margin-bottom:5px}#wrap .form-flex{display:flex}#wrap .form-flex .form{margin-right:20px}#wrap .form-flex .form:last-child{margin-right:0}#wrap .avator-facebook{width:40px;height:40px;padding:7px;border-radius:100%;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#fff!important}.smlist{width:50%;display:flex;flex-wrap:nowrap;margin-bottom:10px}.smlist .img{min-height:50px;min-width:50px;max-height:50px;max-width:50px;-o-object-fit:cover;object-fit:cover;border-radius:3px;margin-right:8px}.smlist .content{width:100%}.smlist .content p{font-size:14px}.smlist .content .title{font-size:18px!important;line-height:10px!important;font-weight:700}.article{border-bottom:1px solid #cecece;min-height:100px;display:flex;padding:10px 0;box-sizing:border-box}.article:last-child{padding-bottom:20px;border-bottom:2px solid #cecece}.article .img-repre{width:80px;height:80px;-o-object-fit:cover;object-fit:cover;border-radius:5px}.article .content{width:100%;margin-left:10px;position:relative}.article .content .title{padding-right:50px;font-size:18px!important;font-weight:700;line-height:20px!important;cursor:pointer;transition:.1s}.article .content .title:hover{color:#cecece}.article .content .info{padding-right:50px;font-size:14px;color:#7b7b7b}.article .content .info span.bold{font-weight:700;color:#535353}.article .content .txt{padding-right:50px;max-width:100%;font-size:14px;white-space:nowrap;position:absolute;overflow:hidden;text-overflow:ellipsis}.article .content .time{font-size:14px;color:#7b7b7b;position:absolute;top:0;right:0}.paging-wrap{margin-top:20px;display:flex}.paging-wrap .count{display:flex}.paging-wrap .count div.btn{padding:0 10px;height:17px;border-right:1px solid #7b7b7b;cursor:pointer}.paging-wrap .count div.btn:last-child{border-right:0}.paging-wrap .v-btn{margin-right:0}.paging-wrap .elevator-btn{color:#e20000!important}#wrap .list-header-line{border-bottom:2px solid #cecece;padding-bottom:3px;margin-bottom:15px}#wrap .list-header .title{font-size:20px;font-weight:700}#wrap .list-header .btn-more{float:right;position:relative;top:5px}#wrap .bread-crumb{font-size:14px}#wrap .bread-crumb span{cursor:pointer}#wrap .bread-crumb .v-icon{position:relative;top:-1px}#footer{width:100%;padding:15px 0;text-align:center;background-color:#f5f5f5;position:absolute;bottom:0;margin-bottom:0}#footer .btn-wrap{margin-bottom:10px}",""]),t.exports=e},436:function(t,e,o){"use strict";o.r(e);var n={},r=o(63),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"gnb","data-app":""}},[e("div",{staticClass:"wrap"},[e("GnbPc"),this._v(" "),e("GnbMobile")],1)]),this._v(" "),e("GnbDrawer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GnbPc:o(438).default,GnbMobile:o(439).default,GnbDrawer:o(440).default})},437:function(t,e,o){"use strict";o.r(e);var n={methods:{link:function(t){null==t?this.$router.push("/"):window.open(t,"_blank")}}},r=(o(434),o(63)),c=o(127),l=o.n(c),d=o(515),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"footer"}},[o("div",{staticClass:"btn-wrap"},[o("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return t.link(null)}}},[t._v("\n      홈\n    ")]),t._v(" "),o("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return t.link("https://sparklejunserver.web.app/")}}},[t._v("\n      회사 홈페이지\n    ")]),t._v(" "),o("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return t.link("https://www.instagram.com/baeksan01/")}}},[t._v("\n      연락하기\n    ")])],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("© Infinia, Inc. All rights reserved.")])])}],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a})},438:function(t,e,o){"use strict";o.r(e);o(192),o(25),o(27),o(30),o(64),o(26),o(72);var n=o(9),r=o(1),c=(o(73),o(275)),l=o.n(c),d=o(279),m=o(285);r.a.use(l.a);var f={mixins:[d.a,m.a],computed:{list:function(){return this.$store.state.urls.list}},created:function(){var t=this;if(this.routeList[this.list.category.key]=!0,1!=this.$cookies.isKey("user")&&this.routeAccessDisabledList.find((function(e){return e==t.$route.name.split("-")[0]})))return"write"==this.$route.name.split("-")[0]?alert("글 작성하기 기능은 로그인 후 이용할 수 있습니다."):alert("접근할 수 없는 페이지입니다."),void this.$router.push("/")},data:function(){return{token:{verify:null},user:null,city:null,cityItems:[],routeItems:[],routeList:[!1,!1,!1,!1,!1,!1],routeAccessDisabledList:["write","edit","setting"],path:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isVerify(),!t.$cookies.isKey("user")){e.next=13;break}return t.user=t.$cookies.get("user"),e.prev=3,e.next=6,t.$axios.$get("/api/profile/read",{params:{id:t.user.key}});case 6:o=e.sent,t.user.image=o.data.imgRepre,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:if(t.path=t.$router.currentRoute.path,null==t.$cookies.get("city")){e.next=27;break}return e.prev=15,e.next=18,t.$axios.$get("/api/info/citys");case 18:n=e.sent,t.cityItems=n.data.citys,t.cityItems.unshift({key:0,name:"선택안함(전국)"}),t.city=t.cityItems.find((function(e){return e.key==t.$cookies.get("city")})).name,e.next=27;break;case 24:e.prev=24,e.t1=e.catch(15),console.log(e.t1);case 27:gapi.signin2.render("google-signin-btn",{onsuccess:t.onSignIn}),t.$router.options.routes.forEach((function(e){t.routeItems.push({title:e.name,url:e.path})}));case 29:case"end":return e.stop()}}),e,null,[[3,10],[15,24]])})))()},methods:{toggleCityDialog:function(){this.$store.commit("dialog/toggleCityDialogActive")},pageLink:function(t){this.$router.push("/board?category="+t)},onSignIn:function(t){}}},h=(o(425),o(63)),v=o(127),x=o.n(v),w=o(539),k=o(515),y=o(538),j=o(504),_=o(273),z=o(540),C=o(565),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pc",attrs:{"data-app":""}},[n("DialogCity"),t._v(" "),n("nuxt-link",{staticClass:"item lft logo",attrs:{to:"/"}},[n("img",{staticStyle:{width:"100px",position:"relative",top:"4px"},attrs:{src:o(278)}})]),t._v(" "),null!=t.city?n("span",{staticClass:"item lft span-a-tag",on:{click:function(e){return t.toggleCityDialog()}}},[t._v(t._s(t.city))]):t._e(),t._v(" "),null==t.city?n("span",{staticClass:"item lft span-a-tag",on:{click:function(e){return t.toggleCityDialog()}}},[t._v("도시 선택")]):t._e(),t._v(" "),"/"==t.path?n("span",{staticClass:"item mid"},[n("a",{on:{click:function(e){return t.pageLink(1)}}},[t._v("회원 모집")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(2)}}},[t._v("중고 물품")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(3)}}},[t._v("아르바이트")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(4)}}},[t._v("재능교환/판매")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(5)}}},[t._v("이벤트")])]):n("span",{staticClass:"item mid"},[n("a",{class:{active:1==t.list.category.key},on:{click:function(e){return t.pageLink(1)}}},[t._v("회원 모집")]),t._v(" "),n("a",{class:{active:2==t.list.category.key},on:{click:function(e){return t.pageLink(2)}}},[t._v("중고 물품")]),t._v(" "),n("a",{class:{active:3==t.list.category.key},on:{click:function(e){return t.pageLink(3)}}},[t._v("아르바이트")]),t._v(" "),n("a",{class:{active:4==t.list.category.key},on:{click:function(e){return t.pageLink(4)}}},[t._v("재능교환/판매")]),t._v(" "),n("a",{class:{active:5==t.list.category.key},on:{click:function(e){return t.pageLink(5)}}},[t._v("이벤트")])]),t._v(" "),n("v-btn",{staticStyle:{display:"none"},attrs:{"data-width":"150","data-onsuccess":"onSignIn",id:"google-signin-btn"}}),t._v(" "),1==t.token.verify?n("v-menu",{attrs:{left:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-avatar",t._g(t._b({staticClass:"item rgt user-icon"},"v-avatar",r,!1),o),[n("img",{staticClass:"repre",attrs:{src:t.repreImageRead(t.user.image)}})])]}}],null,!1,1218581476)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.user.nickname))])],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/profile/"+t.user.key}},[n("v-list-item-content",[n("v-list-item-title",[t._v("내 프로필 보기")])],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/setting"}},[n("v-list-item-content",[n("v-list-item-title",[t._v("설정")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.logout()}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("로그아웃")])],1)],1)],1)],1)],1):0==t.token.verify?n("nuxt-link",{staticClass:"item rgt",attrs:{to:"/auth"}},[t._v("로그인/회원가입")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{DialogCity:o(441).default}),x()(component,{VAvatar:w.a,VBtn:k.a,VList:y.a,VListItem:j.a,VListItemContent:_.a,VListItemGroup:z.a,VListItemTitle:_.b,VMenu:C.a})},439:function(t,e,o){"use strict";o.r(e);var n={computed:{},data:function(){return{}},mounted:function(){},methods:{toggle:function(){this.$store.commit("gnb/toggleDrawer")}}},r=(o(429),o(63)),c=o(127),l=o.n(c),d=o(709),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile"},[n("v-app-bar-nav-icon",{staticClass:"icon-left-menu",on:{click:function(e){return e.stopPropagation(),t.toggle()}}}),t._v(" "),n("nuxt-link",{staticClass:"item mid logo",attrs:{to:"/"}},[n("img",{staticStyle:{width:"100px",position:"relative",top:"4px"},attrs:{src:o(278)}})])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBarNavIcon:d.a})},440:function(t,e,o){"use strict";o.r(e);o(20),o(34),o(25),o(42),o(43),o(35),o(26);var n=o(8),r=o(279),c=o(52);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={name:"GnbDrawer",mixins:[r.a],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({isActive:"gnb/getToggleDrawer"})),data:function(){return{selectedItem:1,user:{},token:{verify:null},menuList:[{text:"회원모집",icon:"mdi-account-multiple",link:"/board?category=1"},{text:"중고물품",icon:"mdi-basket",link:"/board?category=2"},{text:"아르바이트",icon:"mdi-smart-card",link:"/board?category=3"},{text:"재능교환/판매",icon:"mdi-book-open-variant",link:"/board?category=4"},{text:"이벤트",icon:"mdi-calendar",link:"/board?category=5"}]}},mounted:function(){this.isVerify(),this.user=this.$cookies.get("user")},methods:{toggle:function(){this.$store.commit("gnb/toggleDrawer")},logout:function(){this.$cookies.remove("token"),this.$cookies.remove("user"),window.location.href="/"},toggleCityDialog:function(){this.$store.commit("dialog/toggleCityDialogActive")}}},m=(o(432),o(63)),f=o(127),h=o.n(f),v=o(539),x=o(531),w=o(534),k=o(538),y=o(504),j=o(273),_=o(540),z=o(505),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"drawer-wrap",class:{drawerWrapActive:t.isActive}},[n("div",{staticClass:"drawer"},[1==t.token.verify?n("div",{staticClass:"content"},[n("v-avatar",[n("img",{attrs:{src:o(431),alt:"John"}})]),t._v(" "),n("span",{staticClass:"title"},[t._v("\n          백산\n        ")])],1):0==t.token.verify?n("p",{staticStyle:{padding:"15px 0px 11px 20px"}},[n("nuxt-link",{attrs:{to:"/auth"}},[t._v("로그인/회원가입")])],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",{on:{click:function(e){return t.toggleCityDialog()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-domain")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("도시 선택")])],1)],1),t._v(" "),1==t.token.verify?n("div",[n("v-list-item",{attrs:{to:"/profile/"+t.user.key}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("프로필")])],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/setting"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-cog")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("설정")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-exit-to-app")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("로그아웃")])],1)],1)],1):t._e()],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.menuList,(function(e,o){return n("div",{key:o},[n("v-list-item",{attrs:{to:e.link}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)],1)})),0)],1)],1),t._v(" "),n("div",{staticClass:"drawer-close",on:{click:function(e){return t.toggle()}}})])])}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAvatar:v.a,VDivider:x.a,VIcon:w.a,VList:k.a,VListItem:y.a,VListItemContent:j.a,VListItemGroup:_.a,VListItemIcon:z.a,VListItemTitle:j.b})},441:function(t,e,o){"use strict";o.r(e);o(72);var n=o(9),r=o(1),c=(o(73),o(275)),l=o.n(c);r.a.use(l.a);var d={computed:{dialog:function(){return this.$store.state.dialog.cityDialogActive}},data:function(){return{select:0,items:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/info/citys");case 3:o=e.sent,t.items=o.data.citys,t.items.unshift({key:0,name:"선택안함(전국)"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:t.select=parseInt(t.$cookies.get("city"));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{toggleDialog:function(){this.$store.commit("dialog/toggleCityDialogActive")},cityCookieUpdate:function(){this.$cookies.isKey("city")?(this.$cookies.remove("city"),this.$cookies.set("city",this.select,"7d")):this.$cookies.set("city",this.select,"7d"),window.location.href="/"}}},m=(o(427),o(63)),f=o(127),h=o.n(f),v=o(515),x=o(524),w=o(274),k=o(705),y=o(728),j=o(531),_=o(707),z=o(713),C=o(708),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"400"},on:{"click:outside":function(e){return t.toggleDialog()}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("\n        도시 선택\n      ")]),t._v(" "),o("v-card-text",[o("p",[t._v("활동하고자 하는 도시(시,도)를 선택해주세요.")]),t._v(" "),o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{sm:""}},[o("v-select",{attrs:{items:t.items,"item-text":"name","item-value":"key",dense:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{text:""},on:{click:function(e){return t.toggleDialog()}}},[t._v("\n          닫기\n        ")]),t._v(" "),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.cityCookieUpdate()}}},[t._v("\n          변경\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:x.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:k.a,VDialog:y.a,VDivider:j.a,VRow:_.a,VSelect:z.a,VSpacer:C.a})},450:function(t,e,o){var map={"./af":291,"./af.js":291,"./ar":292,"./ar-dz":293,"./ar-dz.js":293,"./ar-kw":294,"./ar-kw.js":294,"./ar-ly":295,"./ar-ly.js":295,"./ar-ma":296,"./ar-ma.js":296,"./ar-sa":297,"./ar-sa.js":297,"./ar-tn":298,"./ar-tn.js":298,"./ar.js":292,"./az":299,"./az.js":299,"./be":300,"./be.js":300,"./bg":301,"./bg.js":301,"./bm":302,"./bm.js":302,"./bn":303,"./bn-bd":304,"./bn-bd.js":304,"./bn.js":303,"./bo":305,"./bo.js":305,"./br":306,"./br.js":306,"./bs":307,"./bs.js":307,"./ca":308,"./ca.js":308,"./cs":309,"./cs.js":309,"./cv":310,"./cv.js":310,"./cy":311,"./cy.js":311,"./da":312,"./da.js":312,"./de":313,"./de-at":314,"./de-at.js":314,"./de-ch":315,"./de-ch.js":315,"./de.js":313,"./dv":316,"./dv.js":316,"./el":317,"./el.js":317,"./en-au":318,"./en-au.js":318,"./en-ca":319,"./en-ca.js":319,"./en-gb":320,"./en-gb.js":320,"./en-ie":321,"./en-ie.js":321,"./en-il":322,"./en-il.js":322,"./en-in":323,"./en-in.js":323,"./en-nz":324,"./en-nz.js":324,"./en-sg":325,"./en-sg.js":325,"./eo":326,"./eo.js":326,"./es":327,"./es-do":328,"./es-do.js":328,"./es-mx":329,"./es-mx.js":329,"./es-us":330,"./es-us.js":330,"./es.js":327,"./et":331,"./et.js":331,"./eu":332,"./eu.js":332,"./fa":333,"./fa.js":333,"./fi":334,"./fi.js":334,"./fil":335,"./fil.js":335,"./fo":336,"./fo.js":336,"./fr":337,"./fr-ca":338,"./fr-ca.js":338,"./fr-ch":339,"./fr-ch.js":339,"./fr.js":337,"./fy":340,"./fy.js":340,"./ga":341,"./ga.js":341,"./gd":342,"./gd.js":342,"./gl":343,"./gl.js":343,"./gom-deva":344,"./gom-deva.js":344,"./gom-latn":345,"./gom-latn.js":345,"./gu":346,"./gu.js":346,"./he":347,"./he.js":347,"./hi":348,"./hi.js":348,"./hr":349,"./hr.js":349,"./hu":350,"./hu.js":350,"./hy-am":351,"./hy-am.js":351,"./id":352,"./id.js":352,"./is":353,"./is.js":353,"./it":354,"./it-ch":355,"./it-ch.js":355,"./it.js":354,"./ja":356,"./ja.js":356,"./jv":357,"./jv.js":357,"./ka":358,"./ka.js":358,"./kk":359,"./kk.js":359,"./km":360,"./km.js":360,"./kn":361,"./kn.js":361,"./ko":362,"./ko.js":362,"./ku":363,"./ku.js":363,"./ky":364,"./ky.js":364,"./lb":365,"./lb.js":365,"./lo":366,"./lo.js":366,"./lt":367,"./lt.js":367,"./lv":368,"./lv.js":368,"./me":369,"./me.js":369,"./mi":370,"./mi.js":370,"./mk":371,"./mk.js":371,"./ml":372,"./ml.js":372,"./mn":373,"./mn.js":373,"./mr":374,"./mr.js":374,"./ms":375,"./ms-my":376,"./ms-my.js":376,"./ms.js":375,"./mt":377,"./mt.js":377,"./my":378,"./my.js":378,"./nb":379,"./nb.js":379,"./ne":380,"./ne.js":380,"./nl":381,"./nl-be":382,"./nl-be.js":382,"./nl.js":381,"./nn":383,"./nn.js":383,"./oc-lnc":384,"./oc-lnc.js":384,"./pa-in":385,"./pa-in.js":385,"./pl":386,"./pl.js":386,"./pt":387,"./pt-br":388,"./pt-br.js":388,"./pt.js":387,"./ro":389,"./ro.js":389,"./ru":390,"./ru.js":390,"./sd":391,"./sd.js":391,"./se":392,"./se.js":392,"./si":393,"./si.js":393,"./sk":394,"./sk.js":394,"./sl":395,"./sl.js":395,"./sq":396,"./sq.js":396,"./sr":397,"./sr-cyrl":398,"./sr-cyrl.js":398,"./sr.js":397,"./ss":399,"./ss.js":399,"./sv":400,"./sv.js":400,"./ta":401,"./ta.js":401,"./te":402,"./te.js":402,"./tet":403,"./tet.js":403,"./tg":404,"./tg.js":404,"./th":405,"./th.js":405,"./tk":406,"./tk.js":406,"./tl-ph":407,"./tl-ph.js":407,"./tlh":408,"./tlh.js":408,"./tr":409,"./tr.js":409,"./tzl":410,"./tzl.js":410,"./tzm":411,"./tzm-latn":412,"./tzm-latn.js":412,"./tzm.js":411,"./ug-cn":413,"./ug-cn.js":413,"./uk":414,"./uk.js":414,"./ur":415,"./ur.js":415,"./uz":416,"./uz-latn":417,"./uz-latn.js":417,"./uz.js":416,"./vi":418,"./vi.js":418,"./x-pseudo":419,"./x-pseudo.js":419,"./yo":420,"./yo.js":420,"./zh-cn":421,"./zh-cn.js":421,"./zh-hk":422,"./zh-hk.js":422,"./zh-mo":423,"./zh-mo.js":423,"./zh-tw":424,"./zh-tw.js":424};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=450},555:function(t,e,o){var content=o(666);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("31652466",content,!0,{sourceMap:!1})},665:function(t,e,o){"use strict";o(555)},666:function(t,e,o){(e=o(61)(!1)).push([t.i,"body[data-v-eb6ef638]{background-color:#f7f7f7!important}#wrap .article-wrap[data-v-eb6ef638]{width:100%;min-height:300px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);position:relative;top:15px;border-radius:5px}#wrap .article-wrap .banner[data-v-eb6ef638]{width:100%;height:50px;background-color:#ff7b7f;border-radius:5px 5px 0 0;color:#fff;padding-left:20px;display:flex}#wrap .article-wrap .banner .icon[data-v-eb6ef638]{color:#fff}#wrap .article-wrap .banner p[data-v-eb6ef638]{line-height:50px;font-size:20px;margin-left:5px}#wrap .article-wrap .header[data-v-eb6ef638]{border-bottom:1px solid #cecece;padding:15px 20px;position:relative}#wrap .article-wrap .header .title[data-v-eb6ef638]{font-size:24px;font-weight:700}#wrap .article-wrap .header .time[data-v-eb6ef638]{font-size:14px;color:#7b7b7b}#wrap .article-wrap .btn .icon[data-v-eb6ef638]{position:relative;top:-2px}#wrap .article-wrap .content[data-v-eb6ef638]{padding:15px 20px}@media (max-width:769px){#wrap[data-v-eb6ef638]{padding:0 10px}}",""]),t.exports=e},724:function(t,e,o){"use strict";o.r(e);o(72);var n=o(9),r=o(1),c=(o(73),o(275)),l=o.n(c);r.a.use(l.a);var d={created:function(){this.param=this.$route.params.id},data:function(){return{content:{}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/notice/read",{params:{uniqueId:t.param}});case 3:o=e.sent,t.content=o.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},m=(o(665),o(63)),f=o(127),h=o.n(f),v=o(534),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Gnb"),t._v(" "),o("div",{attrs:{id:"wrap"}},[o("div",{staticClass:"article-wrap"},[o("div",{staticClass:"banner"},[o("v-icon",{staticClass:"icon"},[t._v("mdi-bell")]),t._v(" "),o("p",[t._v(t._s(t.content.type))])],1),t._v(" "),o("div",{staticClass:"header"},[o("p",{staticClass:"title"},[t._v(t._s(t.content.title))]),t._v(" "),o("p",{staticClass:"time"},[t._v(t._s(t.content.date))])]),t._v(" "),o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content.desc)}})])]),t._v(" "),o("Footer")],1)}),[],!1,null,"eb6ef638",null);e.default=component.exports;h()(component,{Gnb:o(436).default,Footer:o(437).default}),h()(component,{VIcon:v.a})}}]);
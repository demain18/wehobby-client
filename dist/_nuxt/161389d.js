(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{279:function(t,e,o){t.exports=o.p+"img/logo-img.fd72df0.png"},280:function(t,e,o){"use strict";o(72);var n=o(9),r=o(1),c=o(73),l=o.n(c),m=o(274),d=o.n(m);r.a.use(d.a),e.a={data:function(){return{}},mounted:function(){gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})},methods:{isVerify:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$cookies.isKey("token")){e.next=14;break}return e.prev=1,e.next=4,l.a.post("/api/auth/verify",{},{headers:{token:t.$cookies.get("token")}});case 4:e.sent.data.result&&(t.token.verify=!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.logout(),t.token.verify=!1;case 12:e.next=15;break;case 14:t.token.verify=!1;case 15:case"end":return e.stop()}}),e,null,[[1,8]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("/api/auth/logout",{},{headers:{token:t.$cookies.get("token")}});case 3:t.googleSignOut(),t.$cookies.remove("token"),t.$cookies.remove("user"),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},googleSignOut:function(){gapi.auth2.getAuthInstance().signOut().then((function(){}))}}}},282:function(t,e,o){var content=o(432);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("46bc0813",content,!0,{sourceMap:!1})},283:function(t,e,o){var content=o(434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("7cf17db0",content,!0,{sourceMap:!1})},285:function(t,e,o){var content=o(436);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("09b3211a",content,!0,{sourceMap:!1})},286:function(t,e,o){var content=o(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("27dd90d3",content,!0,{sourceMap:!1})},287:function(t,e,o){var content=o(441);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("33164fa7",content,!0,{sourceMap:!1})},288:function(t,e,o){"use strict";o(193),o(102),o(27),o(7),o(30),o(14),o(53),o(64);var n=o(272),r=o.n(n);e.a={inheritAttrs:!1,data:function(){return{globalVal:!0}},methods:{findKey:function(t,e){return null==e?e:(e-=1,"area"==t?this.filterItems.citysArea[e].key:"subway"==t?this.filterItems.citysSubway[e].key:"genre"==t?this.filterItems.categoryDetail[e].key:void 0)},findName:function(t,e){return null==e?e:(e-=1,"area"==t?this.filterItems.citysArea[e].name:"subway"==t?this.filterItems.citysSubway[e].name:"genre"==t?this.filterItems.categoryDetail[e].name:void 0)},findAreaName:function(t){var e=this;return 0==this.postItems[t].area?"":this.filterItems.citysArea.find((function(o){return o.key==e.postItems[t].area})).name},agoCalc:function(t,time){var e=r()().subtract(1969,"years").format("YYYY/MM/DD HH:mm:ss"),o=r()(new Date(t+" "+time)).subtract(-31,"minutes").format("YYYY/MM/DD HH:mm:ss"),n=r.a.utc(r()(e,"YYYY/MM/DD HH:mm:ss").diff(r()(o,"YYYY/MM/DD HH:mm:ss")));return n.format("Y")>1?n.format("Y년"):n.format("M")>1?n.format("M개월"):n.format("D")>1?n.format("D일"):n.format("H")>0?n.format("H시간"):n.format("m")>1?n.format("m분"):n.format("m")>0?n.format("방금"):void 0},markupReplace:function(content){if(0==content)return"";for(var desc=String(content),t=["<p>","</p>","<strong>","</strong>","<i>","</i>","<stricke>","</strike>","<li>","</li>","<ul>","</ul>","<ol>","</ol>","<em>","</em>","<u>","</u>"],i=0;i<t.length;i++)desc=desc.split(t[i]).join("");return desc},thousandComma:function(content,t){return 0==t?content.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"원":content.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},repreImageRead:function(image){return null==image||0==image.length||null==image[0]?"https://wehobby-real.s3.us-east-2.amazonaws.com/static/placeholder.png":image[0]}}}},289:function(t,e,o){"use strict";o.r(e);var n={},r=o(63),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"gnb","data-app":""}},[e("div",{staticClass:"wrap"},[e("GnbPc"),this._v(" "),e("GnbMobile")],1)]),this._v(" "),e("GnbDrawer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GnbPc:o(444).default,GnbMobile:o(445).default,GnbDrawer:o(446).default})},290:function(t,e,o){"use strict";o.r(e);var n={methods:{link:function(t){null==t?this.$router.push("/"):window.open(t,"_blank")}}},r=(o(440),o(63)),c=o(127),l=o.n(c),m=o(508),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"footer"}},[o("div",{staticClass:"btn-wrap"},[o("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return t.link(null)}}},[t._v("\n      홈\n    ")]),t._v(" "),o("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return t.link("https://sparklejunserver.web.app/")}}},[t._v("\n      회사 정보\n    ")]),t._v(" "),o("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return t.link("https://www.instagram.com/100___mountain/")}}},[t._v("\n      연락하기\n    ")])],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("© Infinia, Inc. All rights reserved.")])])}],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a})},431:function(t,e,o){"use strict";o(282)},432:function(t,e,o){(e=o(61)(!1)).push([t.i,".v-list-item{min-height:30px!important;padding:3px 10px!important}[v-cloak]{display:none!important}",""]),t.exports=e},433:function(t,e,o){"use strict";o(283)},434:function(t,e,o){var n=o(61),r=o(190),c=o(192);e=n(!1);var l=r(c);e.push([t.i,'@font-face{font-family:notoKr;src:local("../lib/font/NotoSansKR-Regular.otf")}html{height:100%}body{min-height:100%;margin:0;color:#535353;font-family:notoKr,sans-serif!important;font-size:16px;position:relative}[v-cloak]{display:none!important}p{font-size:16px;margin-top:0;margin-bottom:3px!important}h2{font-size:20px}h1{font-size:24px}input{min-height:30px}button{min-height:34px}.btn-more{color:#cecece;transition:.1s;cursor:pointer}.btn-more:hover{color:#535353}a{color:#535353!important;text-decoration:none;transition:.1s;padding:0!important}a:hover{color:#cecece!important}a.actionDisabled:hover{color:#535353!important}a.highlight{color:#4267b2!important}a.highlight:hover{color:#97abd4!important}input.input-text{height:40px;background-color:#fff;border-radius:3px;border:1px solid #cecece;padding-left:10px}button.btn-main-color{background-color:#ff4e54!important}button.btn-main-color,button.btn-warn{color:#fff!important;font-weight:700!important}button.btn-warn{background-color:red!important}#wrap .info{background-color:hsla(0,0%,100%,0)!important;border-color:hsla(0,0%,100%,0)!important}#wrap{max-width:1040px;min-height:500px;margin:0 auto;position:relative;padding-top:50px!important;padding-bottom:200px}@media(max-width:769px){#wrap{padding-bottom:130px!important}}#gnb{background-color:#fff;border-bottom:1px solid #e9e9e9;position:fixed;top:0;width:100%;z-index:9!important}#gnb .pc{display:block}#gnb .mobile{display:none}#gnb .wrap{position:relative;max-width:1040px;margin:0 auto;padding:0 15px;font-size:14px}#gnb .wrap .item{line-height:50px;position:relative;top:2px;cursor:pointer;font-weight:700}#gnb .wrap .lft{float:left;margin-right:10px}#gnb .wrap .mid{display:inline-block;position:absolute;left:50%;margin-left:-240px}#gnb .wrap .rgt{float:right;margin-left:10px}#gnb .wrap .logo{font-size:20px}#gnb .wrap .span-a-tag:hover{color:#cecece!important}#gnb .wrap .mid a{padding:15px!important}#gnb .wrap .mid .active{padding-bottom:14px!important;border-bottom:2px solid #e20000;color:#e20000}#gnb .wrap .mid .active:hover{color:#e20000!important}#gnb .wrap .mid a:last-child{margin-right:0}#gnb .wrap .user-icon{width:30px!important;height:30px!important;border-radius:100px;position:relative;top:10px;cursor:pointer}#gnb .wrap .user-icon img.repre{-o-object-fit:cover;object-fit:cover}@media(max-width:769px){#gnb{height:50px}#gnb .pc{display:none}#gnb .mobile{display:block}#gnb .wrap .mid{margin-left:-70px;line-height:50px}#gnb .wrap .icon-left-menu{margin-top:8px;position:relative}}#wrap .snb{min-width:240px;margin-left:18px}#wrap .snb .ad{width:100%;height:370px;background-image:url('+l+");background-size:70%;background-position:50%;border:1px solid #e7e7e7;border-radius:10px;margin-bottom:50px}@media(max-width:769px){#wrap .snb{width:100%!important;padding:0 10px;margin-left:0!important}#wrap .snb .ad{margin-bottom:15px}}#wrap .snb-wrap{min-width:170px;font-size:18px;font-weight:700;padding-right:15px}#wrap .snb-wrap .snb-btn{padding:10px 15px;margin-bottom:3px;border-radius:10px;cursor:pointer;transition:.1s}#wrap .snb-wrap .active{background-color:#ececec!important}#wrap .snb-wrap .snb-btn:hover{background-color:#ececec}#wrap input{width:100%;border-radius:5px;box-sizing:border-box}#wrap .form{margin-bottom:15px}#wrap .form-flex-full{width:100%}#wrap .form .label{color:#717171;font-size:14px;margin-bottom:5px}#wrap .form-flex{display:flex}#wrap .form-flex .form{margin-right:20px}#wrap .form-flex .form:last-child{margin-right:0}#wrap .avator-facebook{width:40px;height:40px;padding:7px;border-radius:100%;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#fff!important}.smlist{width:50%;display:flex;flex-wrap:nowrap;margin-bottom:10px}.smlist .img{min-height:50px;min-width:50px;max-height:50px;max-width:50px;-o-object-fit:cover;object-fit:cover;border-radius:3px;margin-right:8px}.smlist .content{width:100%}.smlist .content p{font-size:14px}.smlist .content .title{font-size:18px!important;line-height:10px!important;font-weight:700}.article{border-bottom:1px solid #cecece;min-height:100px;display:flex;padding:10px 0;box-sizing:border-box}.article:last-child{padding-bottom:20px;border-bottom:2px solid #cecece}.article .img-repre{width:80px;height:80px;-o-object-fit:cover;object-fit:cover;border-radius:5px}.article .content{width:100%;margin-left:10px;position:relative}.article .content .title{padding-right:50px;font-size:18px!important;font-weight:700;line-height:20px!important;cursor:pointer;transition:.1s}.article .content .title:hover{color:#cecece}.article .content .info{padding-right:50px;font-size:14px;color:#7b7b7b}.article .content .info span.bold{font-weight:700;color:#535353}.article .content .txt{padding-right:50px;max-width:100%;font-size:14px;white-space:nowrap;position:absolute;overflow:hidden;text-overflow:ellipsis}.article .content .time{font-size:14px;color:#7b7b7b;position:absolute;top:0;right:0}.paging-wrap{margin-top:20px;display:flex}.paging-wrap .count{display:flex}.paging-wrap .count div.btn{padding:0 10px;height:17px;border-right:1px solid #7b7b7b;cursor:pointer}.paging-wrap .count div.btn:last-child{border-right:0}.paging-wrap .v-btn{margin-right:0}.paging-wrap .elevator-btn{color:#e20000!important}#wrap .list-header-line{border-bottom:2px solid #cecece;padding-bottom:3px;margin-bottom:15px}#wrap .list-header .title{font-size:20px;font-weight:700}#wrap .list-header .btn-more{float:right;position:relative;top:5px}#wrap .bread-crumb{font-size:14px}#wrap .bread-crumb span{cursor:pointer}#wrap .bread-crumb .v-icon{position:relative;top:-1px}#footer{width:100%;padding:15px 0;text-align:center;background-color:#f5f5f5;position:absolute;bottom:0;margin-bottom:0}#footer .btn-wrap{margin-bottom:10px}",""]),t.exports=e},435:function(t,e,o){"use strict";o(285)},436:function(t,e,o){(e=o(61)(!1)).push([t.i,"",""]),t.exports=e},437:function(t,e,o){t.exports=o.p+"img/placeholder1.9d4cf57.jpg"},438:function(t,e,o){"use strict";o(286)},439:function(t,e,o){(e=o(61)(!1)).push([t.i,".drawer-wrap{width:100%;height:100%;background-color:rgba(0,0,0,.3);position:fixed;top:0;left:0;display:flex;z-index:10!important;display:none;opacity:0;transition:opacity .15s linear}.drawerWrapActive{display:block;opacity:1;transition:opacity .15s linear}.drawer{width:230px;height:100%;background-color:#fff;position:absolute;top:0;left:0}.drawer-close{width:100%;height:100%;z-index:2}.drawer .content{padding:10px 15px}.drawer .title{font-size:18px;font-weight:700;margin-left:5px;position:relative;top:1px}.drawer .v-list-item{padding-left:15px!important}",""]),t.exports=e},440:function(t,e,o){"use strict";o(287)},441:function(t,e,o){var n=o(61),r=o(190),c=o(192);e=n(!1);var l=r(c);e.push([t.i,'@font-face{font-family:notoKr;src:local("../lib/font/NotoSansKR-Regular.otf")}html{height:100%}body{min-height:100%;margin:0;color:#535353;font-family:notoKr,sans-serif!important;font-size:16px;position:relative}[v-cloak]{display:none!important}p{font-size:16px;margin-top:0;margin-bottom:3px!important}h2{font-size:20px}h1{font-size:24px}input{min-height:30px}button{min-height:34px}.btn-more{color:#cecece;transition:.1s;cursor:pointer}.btn-more:hover{color:#535353}a{color:#535353!important;text-decoration:none;transition:.1s;padding:0!important}a:hover{color:#cecece!important}a.actionDisabled:hover{color:#535353!important}a.highlight{color:#4267b2!important}a.highlight:hover{color:#97abd4!important}input.input-text{height:40px;background-color:#fff;border-radius:3px;border:1px solid #cecece;padding-left:10px}button.btn-main-color{background-color:#ff4e54!important}button.btn-main-color,button.btn-warn{color:#fff!important;font-weight:700!important}button.btn-warn{background-color:red!important}#wrap .info{background-color:hsla(0,0%,100%,0)!important;border-color:hsla(0,0%,100%,0)!important}#wrap{max-width:1040px;min-height:500px;margin:0 auto;position:relative;padding-top:50px!important;padding-bottom:200px}@media(max-width:769px){#wrap{padding-bottom:130px!important}}#gnb{background-color:#fff;border-bottom:1px solid #e9e9e9;position:fixed;top:0;width:100%;z-index:9!important}#gnb .pc{display:block}#gnb .mobile{display:none}#gnb .wrap{position:relative;max-width:1040px;margin:0 auto;padding:0 15px;font-size:14px}#gnb .wrap .item{line-height:50px;position:relative;top:2px;cursor:pointer;font-weight:700}#gnb .wrap .lft{float:left;margin-right:10px}#gnb .wrap .mid{display:inline-block;position:absolute;left:50%;margin-left:-240px}#gnb .wrap .rgt{float:right;margin-left:10px}#gnb .wrap .logo{font-size:20px}#gnb .wrap .span-a-tag:hover{color:#cecece!important}#gnb .wrap .mid a{padding:15px!important}#gnb .wrap .mid .active{padding-bottom:14px!important;border-bottom:2px solid #e20000;color:#e20000}#gnb .wrap .mid .active:hover{color:#e20000!important}#gnb .wrap .mid a:last-child{margin-right:0}#gnb .wrap .user-icon{width:30px!important;height:30px!important;border-radius:100px;position:relative;top:10px;cursor:pointer}#gnb .wrap .user-icon img.repre{-o-object-fit:cover;object-fit:cover}@media(max-width:769px){#gnb{height:50px}#gnb .pc{display:none}#gnb .mobile{display:block}#gnb .wrap .mid{margin-left:-70px;line-height:50px}#gnb .wrap .icon-left-menu{margin-top:8px;position:relative}}#wrap .snb{min-width:240px;margin-left:18px}#wrap .snb .ad{width:100%;height:370px;background-image:url('+l+");background-size:70%;background-position:50%;border:1px solid #e7e7e7;border-radius:10px;margin-bottom:50px}@media(max-width:769px){#wrap .snb{width:100%!important;padding:0 10px;margin-left:0!important}#wrap .snb .ad{margin-bottom:15px}}#wrap .snb-wrap{min-width:170px;font-size:18px;font-weight:700;padding-right:15px}#wrap .snb-wrap .snb-btn{padding:10px 15px;margin-bottom:3px;border-radius:10px;cursor:pointer;transition:.1s}#wrap .snb-wrap .active{background-color:#ececec!important}#wrap .snb-wrap .snb-btn:hover{background-color:#ececec}#wrap input{width:100%;border-radius:5px;box-sizing:border-box}#wrap .form{margin-bottom:15px}#wrap .form-flex-full{width:100%}#wrap .form .label{color:#717171;font-size:14px;margin-bottom:5px}#wrap .form-flex{display:flex}#wrap .form-flex .form{margin-right:20px}#wrap .form-flex .form:last-child{margin-right:0}#wrap .avator-facebook{width:40px;height:40px;padding:7px;border-radius:100%;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#fff!important}.smlist{width:50%;display:flex;flex-wrap:nowrap;margin-bottom:10px}.smlist .img{min-height:50px;min-width:50px;max-height:50px;max-width:50px;-o-object-fit:cover;object-fit:cover;border-radius:3px;margin-right:8px}.smlist .content{width:100%}.smlist .content p{font-size:14px}.smlist .content .title{font-size:18px!important;line-height:10px!important;font-weight:700}.article{border-bottom:1px solid #cecece;min-height:100px;display:flex;padding:10px 0;box-sizing:border-box}.article:last-child{padding-bottom:20px;border-bottom:2px solid #cecece}.article .img-repre{width:80px;height:80px;-o-object-fit:cover;object-fit:cover;border-radius:5px}.article .content{width:100%;margin-left:10px;position:relative}.article .content .title{padding-right:50px;font-size:18px!important;font-weight:700;line-height:20px!important;cursor:pointer;transition:.1s}.article .content .title:hover{color:#cecece}.article .content .info{padding-right:50px;font-size:14px;color:#7b7b7b}.article .content .info span.bold{font-weight:700;color:#535353}.article .content .txt{padding-right:50px;max-width:100%;font-size:14px;white-space:nowrap;position:absolute;overflow:hidden;text-overflow:ellipsis}.article .content .time{font-size:14px;color:#7b7b7b;position:absolute;top:0;right:0}.paging-wrap{margin-top:20px;display:flex}.paging-wrap .count{display:flex}.paging-wrap .count div.btn{padding:0 10px;height:17px;border-right:1px solid #7b7b7b;cursor:pointer}.paging-wrap .count div.btn:last-child{border-right:0}.paging-wrap .v-btn{margin-right:0}.paging-wrap .elevator-btn{color:#e20000!important}#wrap .list-header-line{border-bottom:2px solid #cecece;padding-bottom:3px;margin-bottom:15px}#wrap .list-header .title{font-size:20px;font-weight:700}#wrap .list-header .btn-more{float:right;position:relative;top:5px}#wrap .bread-crumb{font-size:14px}#wrap .bread-crumb span{cursor:pointer}#wrap .bread-crumb .v-icon{position:relative;top:-1px}#footer{width:100%;padding:15px 0;text-align:center;background-color:#f5f5f5;position:absolute;bottom:0;margin-bottom:0}#footer .btn-wrap{margin-bottom:10px}",""]),t.exports=e},444:function(t,e,o){"use strict";o.r(e);o(193),o(25),o(27),o(30),o(64),o(26),o(72);var n=o(9),r=o(1),c=o(73),l=o.n(c),m=o(274),d=o.n(m),f=o(280),h=o(288);r.a.use(d.a);var v={mixins:[f.a,h.a],computed:{list:function(){return this.$store.state.urls.list}},created:function(){var t=this;if(this.routeList[this.list.category.key]=!0,1!=this.$cookies.isKey("user")&&this.routeAccessDisabledList.find((function(e){return e==t.$route.name.split("-")[0]})))return"write"==this.$route.name.split("-")[0]?alert("글 작성하기 기능은 로그인 후 이용할 수 있습니다."):alert("접근할 수 없는 페이지입니다."),void this.$router.push("/")},data:function(){return{token:{verify:null},user:null,city:null,cityItems:[],routeItems:[],routeList:[!1,!1,!1,!1,!1,!1],routeAccessDisabledList:["write","edit","setting"],path:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isVerify(),!t.$cookies.isKey("user")){e.next=13;break}return t.user=t.$cookies.get("user"),e.prev=3,e.next=6,l.a.get("/api/profile/read",{params:{id:t.user.key}});case 6:o=e.sent,t.user.image=o.data.data.imgRepre,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:if(t.path=t.$router.currentRoute.path,null==t.$cookies.get("city")){e.next=27;break}return e.prev=15,e.next=18,l.a.get("/api/info/citys");case 18:n=e.sent,t.cityItems=n.data.data.citys,t.cityItems.unshift({key:0,name:"선택안함(전국)"}),t.city=t.cityItems.find((function(e){return e.key==t.$cookies.get("city")})).name,e.next=27;break;case 24:e.prev=24,e.t1=e.catch(15),console.log(e.t1);case 27:gapi.signin2.render("google-signin-btn",{onsuccess:t.onSignIn}),t.$router.options.routes.forEach((function(e){t.routeItems.push({title:e.name,url:e.path})}));case 29:case"end":return e.stop()}}),e,null,[[3,10],[15,24]])})))()},methods:{toggleCityDialog:function(){this.$store.commit("dialog/toggleCityDialogActive")},pageLink:function(t){this.$router.push("/board?category="+t)},onSignIn:function(t){}}},x=(o(431),o(63)),w=o(127),k=o.n(w),j=o(532),y=o(508),_=o(531),z=o(496),C=o(273),D=o(533),$=o(558),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pc",attrs:{"data-app":""}},[n("DialogCity"),t._v(" "),n("nuxt-link",{staticClass:"item lft logo",attrs:{to:"/"}},[n("img",{staticStyle:{width:"100px",position:"relative",top:"4px"},attrs:{src:o(279)}})]),t._v(" "),null!=t.city?n("span",{staticClass:"item lft span-a-tag",on:{click:function(e){return t.toggleCityDialog()}}},[t._v(t._s(t.city))]):t._e(),t._v(" "),null==t.city?n("span",{staticClass:"item lft span-a-tag",on:{click:function(e){return t.toggleCityDialog()}}},[t._v("도시 선택")]):t._e(),t._v(" "),"/"==t.path?n("span",{staticClass:"item mid"},[n("a",{on:{click:function(e){return t.pageLink(1)}}},[t._v("회원 모집")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(2)}}},[t._v("중고 물품")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(3)}}},[t._v("아르바이트")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(4)}}},[t._v("재능교환/판매")]),t._v(" "),n("a",{on:{click:function(e){return t.pageLink(5)}}},[t._v("이벤트")])]):n("span",{staticClass:"item mid"},[n("a",{class:{active:1==t.list.category.key},on:{click:function(e){return t.pageLink(1)}}},[t._v("회원 모집")]),t._v(" "),n("a",{class:{active:2==t.list.category.key},on:{click:function(e){return t.pageLink(2)}}},[t._v("중고 물품")]),t._v(" "),n("a",{class:{active:3==t.list.category.key},on:{click:function(e){return t.pageLink(3)}}},[t._v("아르바이트")]),t._v(" "),n("a",{class:{active:4==t.list.category.key},on:{click:function(e){return t.pageLink(4)}}},[t._v("재능교환/판매")]),t._v(" "),n("a",{class:{active:5==t.list.category.key},on:{click:function(e){return t.pageLink(5)}}},[t._v("이벤트")])]),t._v(" "),n("v-btn",{staticStyle:{display:"none"},attrs:{"data-width":"150","data-onsuccess":"onSignIn",id:"google-signin-btn"}}),t._v(" "),1==t.token.verify?n("v-menu",{attrs:{left:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-avatar",t._g(t._b({staticClass:"item rgt user-icon"},"v-avatar",r,!1),o),[n("img",{staticClass:"repre",attrs:{src:t.repreImageRead(t.user.image)}})])]}}],null,!1,1218581476)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.user.nickname))])],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/profile/"+t.user.key}},[n("v-list-item-content",[n("v-list-item-title",[t._v("내 프로필 보기")])],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/setting"}},[n("v-list-item-content",[n("v-list-item-title",[t._v("설정")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.logout()}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("로그아웃")])],1)],1)],1)],1)],1):0==t.token.verify?n("nuxt-link",{staticClass:"item rgt",attrs:{to:"/auth"}},[t._v("로그인/회원가입")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{DialogCity:o(447).default}),k()(component,{VAvatar:j.a,VBtn:y.a,VList:_.a,VListItem:z.a,VListItemContent:C.a,VListItemGroup:D.a,VListItemTitle:C.b,VMenu:$.a})},445:function(t,e,o){"use strict";o.r(e);var n={computed:{},data:function(){return{}},mounted:function(){},methods:{toggle:function(){this.$store.commit("gnb/toggleDrawer")}}},r=(o(435),o(63)),c=o(127),l=o.n(c),m=o(703),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile"},[n("v-app-bar-nav-icon",{staticClass:"icon-left-menu",on:{click:function(e){return e.stopPropagation(),t.toggle()}}}),t._v(" "),n("nuxt-link",{staticClass:"item mid logo",attrs:{to:"/"}},[n("img",{staticStyle:{width:"100px",position:"relative",top:"4px"},attrs:{src:o(279)}})])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBarNavIcon:m.a})},446:function(t,e,o){"use strict";o.r(e);o(20),o(34),o(25),o(42),o(43),o(35),o(26);var n=o(8),r=o(280),c=o(52);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var m={name:"GnbDrawer",mixins:[r.a],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({isActive:"gnb/getToggleDrawer"})),data:function(){return{selectedItem:1,user:{},token:{verify:null},menuList:[{text:"회원모집",icon:"mdi-account-multiple",link:"/board?category=1"},{text:"중고물품",icon:"mdi-basket",link:"/board?category=2"},{text:"아르바이트",icon:"mdi-smart-card",link:"/board?category=3"},{text:"재능교환/판매",icon:"mdi-book-open-variant",link:"/board?category=4"},{text:"이벤트",icon:"mdi-calendar",link:"/board?category=5"}]}},mounted:function(){this.isVerify(),this.user=this.$cookies.get("user")},methods:{toggle:function(){this.$store.commit("gnb/toggleDrawer")},logout:function(){this.$cookies.remove("token"),this.$cookies.remove("user"),window.location.href="/"},toggleCityDialog:function(){this.$store.commit("dialog/toggleCityDialogActive")}}},d=(o(438),o(63)),f=o(127),h=o.n(f),v=o(532),x=o(524),w=o(527),k=o(531),j=o(496),y=o(273),_=o(533),z=o(497),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"drawer-wrap",class:{drawerWrapActive:t.isActive}},[n("div",{staticClass:"drawer"},[1==t.token.verify?n("div",{staticClass:"content"},[n("v-avatar",[n("img",{attrs:{src:o(437),alt:"John"}})]),t._v(" "),n("span",{staticClass:"title"},[t._v("\n          백산\n        ")])],1):0==t.token.verify?n("p",{staticStyle:{padding:"15px 0px 11px 20px"}},[n("nuxt-link",{attrs:{to:"/auth"}},[t._v("로그인/회원가입")])],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",{on:{click:function(e){return t.toggleCityDialog()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-domain")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("도시 선택")])],1)],1),t._v(" "),1==t.token.verify?n("div",[n("v-list-item",{attrs:{to:"/profile/"+t.user.key}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("프로필")])],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/setting"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-cog")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("설정")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-exit-to-app")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("로그아웃")])],1)],1)],1):t._e()],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.menuList,(function(e,o){return n("div",{key:o},[n("v-list-item",{attrs:{to:e.link}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)],1)})),0)],1)],1),t._v(" "),n("div",{staticClass:"drawer-close",on:{click:function(e){return t.toggle()}}})])])}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAvatar:v.a,VDivider:x.a,VIcon:w.a,VList:k.a,VListItem:j.a,VListItemContent:y.a,VListItemGroup:_.a,VListItemIcon:z.a,VListItemTitle:y.b})},447:function(t,e,o){"use strict";o.r(e);o(72);var n=o(9),r=o(1),c=o(73),l=o.n(c),m=o(274),d=o.n(m);r.a.use(d.a);var f={computed:{dialog:function(){return this.$store.state.dialog.cityDialogActive}},data:function(){return{select:0,items:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/api/info/citys");case 3:o=e.sent,t.items=o.data.data.citys,t.items.unshift({key:0,name:"선택안함(전국)"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 11:t.select=parseInt(t.$cookies.get("city"));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{toggleDialog:function(){this.$store.commit("dialog/toggleCityDialogActive")},cityCookieUpdate:function(){this.$cookies.isKey("city")?(this.$cookies.remove("city"),this.$cookies.set("city",this.select,"7d")):this.$cookies.set("city",this.select,"7d"),window.location.href="/"}}},h=(o(433),o(63)),v=o(127),x=o.n(v),w=o(508),k=o(517),j=o(275),y=o(699),_=o(725),z=o(524),C=o(701),D=o(712),$=o(702),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"400"},on:{"click:outside":function(e){return t.toggleDialog()}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("\n        도시 선택\n      ")]),t._v(" "),o("v-card-text",[o("p",[t._v("활동하고자 하는 도시(시,도)를 선택해주세요.")]),t._v(" "),o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{sm:""}},[o("v-select",{attrs:{items:t.items,"item-text":"name","item-value":"key",dense:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{text:""},on:{click:function(e){return t.toggleDialog()}}},[t._v("\n          닫기\n        ")]),t._v(" "),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.cityCookieUpdate()}}},[t._v("\n          변경\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:w.a,VCard:k.a,VCardActions:j.a,VCardText:j.b,VCardTitle:j.c,VCol:y.a,VDialog:_.a,VDivider:z.a,VRow:C.a,VSelect:D.a,VSpacer:$.a})},461:function(t,e,o){var map={"./af":295,"./af.js":295,"./ar":296,"./ar-dz":297,"./ar-dz.js":297,"./ar-kw":298,"./ar-kw.js":298,"./ar-ly":299,"./ar-ly.js":299,"./ar-ma":300,"./ar-ma.js":300,"./ar-sa":301,"./ar-sa.js":301,"./ar-tn":302,"./ar-tn.js":302,"./ar.js":296,"./az":303,"./az.js":303,"./be":304,"./be.js":304,"./bg":305,"./bg.js":305,"./bm":306,"./bm.js":306,"./bn":307,"./bn-bd":308,"./bn-bd.js":308,"./bn.js":307,"./bo":309,"./bo.js":309,"./br":310,"./br.js":310,"./bs":311,"./bs.js":311,"./ca":312,"./ca.js":312,"./cs":313,"./cs.js":313,"./cv":314,"./cv.js":314,"./cy":315,"./cy.js":315,"./da":316,"./da.js":316,"./de":317,"./de-at":318,"./de-at.js":318,"./de-ch":319,"./de-ch.js":319,"./de.js":317,"./dv":320,"./dv.js":320,"./el":321,"./el.js":321,"./en-au":322,"./en-au.js":322,"./en-ca":323,"./en-ca.js":323,"./en-gb":324,"./en-gb.js":324,"./en-ie":325,"./en-ie.js":325,"./en-il":326,"./en-il.js":326,"./en-in":327,"./en-in.js":327,"./en-nz":328,"./en-nz.js":328,"./en-sg":329,"./en-sg.js":329,"./eo":330,"./eo.js":330,"./es":331,"./es-do":332,"./es-do.js":332,"./es-mx":333,"./es-mx.js":333,"./es-us":334,"./es-us.js":334,"./es.js":331,"./et":335,"./et.js":335,"./eu":336,"./eu.js":336,"./fa":337,"./fa.js":337,"./fi":338,"./fi.js":338,"./fil":339,"./fil.js":339,"./fo":340,"./fo.js":340,"./fr":341,"./fr-ca":342,"./fr-ca.js":342,"./fr-ch":343,"./fr-ch.js":343,"./fr.js":341,"./fy":344,"./fy.js":344,"./ga":345,"./ga.js":345,"./gd":346,"./gd.js":346,"./gl":347,"./gl.js":347,"./gom-deva":348,"./gom-deva.js":348,"./gom-latn":349,"./gom-latn.js":349,"./gu":350,"./gu.js":350,"./he":351,"./he.js":351,"./hi":352,"./hi.js":352,"./hr":353,"./hr.js":353,"./hu":354,"./hu.js":354,"./hy-am":355,"./hy-am.js":355,"./id":356,"./id.js":356,"./is":357,"./is.js":357,"./it":358,"./it-ch":359,"./it-ch.js":359,"./it.js":358,"./ja":360,"./ja.js":360,"./jv":361,"./jv.js":361,"./ka":362,"./ka.js":362,"./kk":363,"./kk.js":363,"./km":364,"./km.js":364,"./kn":365,"./kn.js":365,"./ko":366,"./ko.js":366,"./ku":367,"./ku.js":367,"./ky":368,"./ky.js":368,"./lb":369,"./lb.js":369,"./lo":370,"./lo.js":370,"./lt":371,"./lt.js":371,"./lv":372,"./lv.js":372,"./me":373,"./me.js":373,"./mi":374,"./mi.js":374,"./mk":375,"./mk.js":375,"./ml":376,"./ml.js":376,"./mn":377,"./mn.js":377,"./mr":378,"./mr.js":378,"./ms":379,"./ms-my":380,"./ms-my.js":380,"./ms.js":379,"./mt":381,"./mt.js":381,"./my":382,"./my.js":382,"./nb":383,"./nb.js":383,"./ne":384,"./ne.js":384,"./nl":385,"./nl-be":386,"./nl-be.js":386,"./nl.js":385,"./nn":387,"./nn.js":387,"./oc-lnc":388,"./oc-lnc.js":388,"./pa-in":389,"./pa-in.js":389,"./pl":390,"./pl.js":390,"./pt":391,"./pt-br":392,"./pt-br.js":392,"./pt.js":391,"./ro":393,"./ro.js":393,"./ru":394,"./ru.js":394,"./sd":395,"./sd.js":395,"./se":396,"./se.js":396,"./si":397,"./si.js":397,"./sk":398,"./sk.js":398,"./sl":399,"./sl.js":399,"./sq":400,"./sq.js":400,"./sr":401,"./sr-cyrl":402,"./sr-cyrl.js":402,"./sr.js":401,"./ss":403,"./ss.js":403,"./sv":404,"./sv.js":404,"./sw":405,"./sw.js":405,"./ta":406,"./ta.js":406,"./te":407,"./te.js":407,"./tet":408,"./tet.js":408,"./tg":409,"./tg.js":409,"./th":410,"./th.js":410,"./tk":411,"./tk.js":411,"./tl-ph":412,"./tl-ph.js":412,"./tlh":413,"./tlh.js":413,"./tr":414,"./tr.js":414,"./tzl":415,"./tzl.js":415,"./tzm":416,"./tzm-latn":417,"./tzm-latn.js":417,"./tzm.js":416,"./ug-cn":418,"./ug-cn.js":418,"./uk":419,"./uk.js":419,"./ur":420,"./ur.js":420,"./uz":421,"./uz-latn":422,"./uz-latn.js":422,"./uz.js":421,"./vi":423,"./vi.js":423,"./x-pseudo":424,"./x-pseudo.js":424,"./yo":425,"./yo.js":425,"./zh-cn":426,"./zh-cn.js":426,"./zh-hk":427,"./zh-hk.js":427,"./zh-mo":428,"./zh-mo.js":428,"./zh-tw":429,"./zh-tw.js":429};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=461}}]);
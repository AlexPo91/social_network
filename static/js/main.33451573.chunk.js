(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(34),c=n(3),a="social-network/messagesPageReducer/ADD_MESSAGE",o={dialogsData:[{id:1,name:"Alex"},{id:2,name:"Karina"},{id:3,name:"Dima"},{id:4,name:"Tania"},{id:5,name:"Vitalik"},{id:6,name:"Anna"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Well done"}]},u=function(e){return{type:a,newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=e.messagesData.length,u={id:++n,message:t.newMessage};return Object(c.a)(Object(c.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[u])});default:return e}}},120:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return P})),n.d(t,"b",(function(){return _})),n.d(t,"f",(function(){return k}));var r=n(8),c=n.n(r),a=n(13),o=n(34),u=n(3),i=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),r):e}))},s=n(14),l="social-network/usersPageReducer/FOLLOW",f="social-network/usersPageReducer/UNFOLLOW",d="social-network/usersPageReducer/SET_USERS",j="social-network/usersPageReducer/SET_TOTAL_COUNT",p="social-network/usersPageReducer/SET_CURRENT_PAGE",b="social-network/usersPageReducer/TOGGLE_IS_FETCHING",h="social-network/usersPageReducer/TOGGLE_IS_FOLLOW",O={users:[],totalCount:0,currentPage:1,pageSize:100,isFetching:!1,followInPropgress:[]},g=function(e){return{type:l,id:e}},m=function(e){return{type:f,id:e}},v=function(e){return{type:p,currentPage:e}},x=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:h,followInPropgress:e,userId:t}},P=function(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(v(e)),n.next=4,s.d.getUsers(e,t);case 4:a=n.sent,r(x(!1)),r((o=a.items,{type:d,users:o})),r((c=a.totalCount,{type:j,totalCount:c}));case 8:case"end":return n.stop()}var c,o}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),_=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=s.d.followUser.bind(e),y(n,e,r,g);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=s.d.unFollowUser.bind(e),y(n,e,r,m);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{users:i(e.users,t.id,"id",{followed:!0})});case f:return Object(u.a)(Object(u.a)({},e),{},{users:i(e.users,t.id,"id",{followed:!1})});case d:return Object(u.a)(Object(u.a)({},e),{},{users:Object(o.a)(t.users)});case j:return Object(u.a)(Object(u.a)({},e),{},{totalCount:t.totalCount});case p:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case b:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case h:return Object(u.a)(Object(u.a)({},e),{},{followInPropgress:t.followInPropgress?[].concat(Object(o.a)(e.followInPropgress),[t.userId]):e.followInPropgress.filter((function(e){return e!==t.userId}))});default:return e}}},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s}));var r=n(3),c="https://social-network.samuraijs.com/api/1.0/",a={credentials:"include",headers:{"API-Key":"3ca3c32f-3cf4-4af0-8468-8675dc4867d3_"}},o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return fetch("".concat(c,"users?page=").concat(e,"&count=").concat(t),a).then((function(e){return e.json()}))},getProfile:function(e){return console.warn("Use new Method"),u.getProfile(e)},unFollowUser:function(e){return fetch("".concat(c,"follow/").concat(e),Object(r.a)(Object(r.a)({},a),{},{method:"DELETE"})).then((function(e){return e.json()}))},followUser:function(e){return fetch("".concat(c,"follow/").concat(e),Object(r.a)(Object(r.a)({},a),{},{method:"POST"})).then((function(e){return e.json()}))}},u={getProfile:function(e){return fetch("".concat(c,"profile/").concat(e),a).then((function(e){return e.json()}))},getUserStatus:function(e){return fetch("".concat(c,"profile/status/").concat(e),a).then((function(e){return e.json()}))},updateStatus:function(e){return fetch("".concat(c,"/profile/status"),Object(r.a)(Object(r.a)({},a),{},{method:"PUT",headers:Object(r.a)(Object(r.a)({},a.headers),{},{"Content-Type":"application/json"}),body:JSON.stringify({status:e})})).then((function(e){return e.json()}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),fetch("".concat(c,"/profile/photo"),Object(r.a)(Object(r.a)({},a),{},{method:"PUT",body:t})).then((function(e){return e.json()}))},saveProfile:function(e){return fetch("".concat(c,"/profile"),Object(r.a)(Object(r.a)({},a),{},{method:"PUT",headers:Object(r.a)(Object(r.a)({},a.headers),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)})).then((function(e){return e.json()}))}},i={me:function(){return fetch("".concat(c,"auth/me"),Object(r.a)(Object(r.a)({},a),{},{method:"GET"})).then((function(e){return e.json()}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return fetch("".concat(c,"auth/login"),Object(r.a)(Object(r.a)({},a),{},{method:"POST",headers:Object(r.a)(Object(r.a)({},a.headers),{},{"Content-Type":"application/json"}),body:JSON.stringify({email:e,password:t,captcha:n,rememberMe:o})})).then((function(e){return e.json()}))},logOut:function(){return fetch("".concat(c,"auth/login"),Object(r.a)(Object(r.a)({},a),{},{method:"DELETE"})).then((function(e){return e.json()}))}},s={getCaptchaUrl:function(){return fetch("".concat(c,"security/get-captcha-url"),Object(r.a)(Object(r.a)({},a),{},{method:"GET"})).then((function(e){return e.json()}))}}},151:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},161:function(e,t,n){},18:function(e,t,n){e.exports={nav:"Navbar_nav__1tya8",item:"Navbar_item__21tl4",activeLink:"Navbar_activeLink__DIT6B"}},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(3),c=n(92),a=n(1),o=(n(0),n(85)),u=n(35),i=n.n(u),s=function(e){var t=e.input,n=e.meta,o=Object(c.a)(e,["input","meta"]),u=n.touched&&n.error;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(u?i.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),o))}),u&&Object(a.jsx)("span",{children:n.error})]})},l=function(e){var t=e.input,n=e.meta,o=Object(c.a)(e,["input","meta"]),u=n.touched&&n.error;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(u?i.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),o))}),u&&Object(a.jsx)("span",{children:n.error})]})},f=function(e,t,n,r,c){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(o.a,{type:e,component:t,name:n,placeholder:r,validate:c}),u]})}},260:function(e,t,n){"use strict";n.r(t);var r=n(1),c=(n(151),function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,271)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))}),a=n(0),o=n.n(a),u=n(63),i=n.n(u),s=n(51),l=n(52),f=n(62),d=n(61),j=n(11),p=n(21),b=(n(155),n(156),function(){return Object(r.jsx)("div",{children:"Music"})}),h=n(18),O=n.n(h),g=function(){return Object(r.jsxs)("nav",{className:O.a.nav,children:[Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:O.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:"".concat(O.a.item," ").concat(O.a.active),children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:O.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(p.b,{to:"/news",activeClassName:O.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(p.b,{to:"/music",activeClassName:O.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(p.b,{to:"/users",activeClassName:O.a.activeLink,children:"Users"})})]})},m=(n(161),function(){return Object(r.jsx)("div",{children:"News"})}),v=n(3),x=n(20),w=n(89),P=n.n(w),y=n.p+"static/media/logo_1.4eded866.png";console.log(y);var _=function(e){var t=e.isAuth,n=e.login,c=e.logOut;return Object(r.jsxs)("header",{className:P.a.header,children:[Object(r.jsx)("img",{src:y}),Object(r.jsx)("div",{className:P.a.loginAuth,children:t?Object(r.jsxs)("div",{children:[n,Object(r.jsx)("button",{onClick:c,children:"Log Out"})]}):Object(r.jsx)(p.b,{to:"/login",children:"Login"})})]})},k=n(8),C=n.n(k),S=n(13),E=n(30),T=n(14),N="social-network/auth-reducer/SET_USER_AUTH",U="social-network/auth-reducer/SET_CAPTCHA_URL",L={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},D=function(e,t,n,r){return{type:N,userData:{id:e,email:t,login:n,isAuth:r}}},A=function(e){return{type:U,captchaUrl:e}},I=function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){var n,r,c,a,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,a=r.login,o=r.email,t(D(c,o,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(A(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(v.a)(Object(v.a)({},e),t.userData);case U:return Object(v.a)(Object(v.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},M=n(70),z=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(_,Object(v.a)({},this.props))}}]),n}(o.a.Component),H=Object(x.b)((function(e){return{isAuth:Object(M.d)(e),login:Object(M.f)(e)}}),{logOut:function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.logOut();case 2:0===e.sent.resultCode&&t(D(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(z),G=n(118),J=n(44),V=n(25),W=n(35),B=n.n(W),K=Object(J.a)(20),X=Object(G.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,c=e.captchaUrl;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(V.c)("text",V.a,"email","Login",[J.b,K]),Object(V.c)("password",V.a,"password","Password",[J.b,K]),Object(V.c)("checkbox",V.a,"rememberMe",null,null,"Remember Me"),c&&Object(r.jsx)("img",{src:c}),c&&Object(V.c)("text",V.a,"captcha","Captcha",[J.b]),n&&Object(r.jsx)("div",{className:B.a.formSummuryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),q=Object(x.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var c=Object(S.a)(C.a.mark((function c(a){var o,u;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,T.a.login(e,t,n,r);case 2:0===(o=c.sent).resultCode?a(I()):(10===o.resultCode&&a(R()),u=o.messages.length>0?o.messages[0]:"Some Error",a(Object(E.a)("login",{_error:u})));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth,c=e.captchaUrl;return n?Object(r.jsx)(j.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(X,{onSubmit:function(e){t(e.email,e.password,e.captcha)},captchaUrl:c})]})})),Z="social-network/app-reducer/INITIALIZED_SUCCES",Q={initialized:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},$=n(95),ee=n(10),te=n(119),ne=n(93),re=n(117),ce=n(120),ae=n(123),oe=Object(ee.c)({profilePage:ne.b,messagesPage:re.b,usersPage:ce.a,auth:F,form:te.a,app:Y}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,ie=Object(ee.e)(oe,ue(Object(ee.a)(ae.a)));window.store=ie;var se=ie,le=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(r.jsx)(e,Object(v.a)({},t))})}},fe=o.a.lazy((function(){return n.e(3).then(n.bind(null,273))})),de=o.a.lazy((function(){return n.e(5).then(n.bind(null,274))})),je=o.a.lazy((function(){return n.e(4).then(n.bind(null,272))})),pe=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(H,{}),Object(r.jsx)(g,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/dialogs",render:le(fe)}),Object(r.jsx)(j.b,{path:"/profile/:userId?",render:le(je)}),Object(r.jsx)(j.b,{path:"/news",component:m}),Object(r.jsx)(j.b,{path:"/music",component:b}),Object(r.jsx)(j.b,{path:"/users",render:le(de)}),Object(r.jsx)(j.b,{path:"/login",component:q}),Object(r.jsx)(j.a,{from:"/",to:"/profile"})]})})]}):Object(r.jsx)($.a,{})}}]),n}(o.a.Component),be=Object(ee.d)(j.g,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(I());Promise.all([t]).then((function(){return e({type:Z})}))}}}))(pe),he=function(e){return Object(r.jsx)(p.a,{children:Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(x.a,{store:se,children:Object(r.jsx)(be,{})})})})};i.a.render(Object(r.jsx)(he,{}),document.getElementById("root")),c()},35:function(e,t,n){e.exports={formControl:"FormsControl_formControl__fvx5N",error:"FormsControl_error__61EPN",formSummuryError:"FormsControl_formSummuryError__feNx_"}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Value is required"},c=function(e){return function(t){if(t.length>e)return"Value max is ".concat(e)}}},70:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"k",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return j}));var r=function(e){return e.profilePage.profile},c=function(e){return e.profilePage.status},a=function(e){return e.auth.id},o=function(e){return e.auth.isAuth},u=function(e){return e.auth.login},i=function(e){return e.usersPage.users},s=function(e){return e.usersPage.isFetching},l=function(e){return e.usersPage.currentPage},f=function(e){return e.usersPage.pageSize},d=function(e){return e.usersPage.totalCount},j=function(e){return e.usersPage.followInPropgress}},89:function(e,t,n){e.exports={header:"Header_header__2bvKi",loginAuth:"Header_loginAuth__3kE1y"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),c=n.n(r),a=n(13),o=n(34),u=n(3),i=n(30),s=n(14),l="social-network/profilePageReducer/ADD_POST",f="social-network/profilePageReducer/DELETE_POST",d="social-network/profilePageReducer/SET_USER_PROFILE",j="social-network/profilePageReducer/SET_STATUS",p="social-network/profilePageReducer/SAVE_PHOTO",b={postsData:[{id:1,message:"Helo! How are you?",likeCount:10},{id:2,message:"Hello World",likeCount:20},{id:3,message:"I'm fine!",likeCount:0}],profile:null,status:""},h=function(e){return{type:l,postMessage:e}},O=function(e){return{type:j,status:e}},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:r=t.sent,n({type:d,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getUserStatus(e);case 2:r=t.sent,n(O(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.b.updateStatus(e);case 3:0===t.sent.resultCode&&n(O(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((c=r.data.photos,{type:p,photos:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,s.b.saveProfile(e);case 3:if(0!==(o=t.sent).resultCode){t.next=8;break}n(g(a)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:o.messages})),t.abrupt("return",Promise.reject(o.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=e.postsData.length,r={id:++n,message:t.postMessage,likeCount:0};return Object(u.a)(Object(u.a)({},e),{},{postsData:[].concat(Object(o.a)(e.postsData),[r])});case f:return Object(u.a)(Object(u.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case d:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case j:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case p:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}},95:function(e,t,n){"use strict";var r=n(1),c=(n(0),n.p+"static/media/spinning-circles.cff806a7.svg"),a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:c})})};t.a=a}},[[260,1,2]]]);
//# sourceMappingURL=main.33451573.chunk.js.map
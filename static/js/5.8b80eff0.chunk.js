(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[5],{262:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(94);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(l){r=!0,s=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw s}}return n}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},263:function(e,t,n){e.exports={usersPage:"Users_usersPage__1S163",selected:"Users_selected__1L7Wf"}},267:function(e,t,n){e.exports={selected:"Paginator_selected__s-Cen"}},273:function(e,t,n){"use strict";n.r(t);var o=n(50),r=n(51),s=n(61),i=n(60),c=n(2),l=n(0),a=n.n(l),u=n(20),d=n(120),p=n(263),j=n.n(p),b=n(262),h=n(267),f=n.n(h),g=function(e){for(var t=e.currentPage,n=e.onPageChanged,o=e.totalCount,r=e.pageSize,s=e.portionSize,i=void 0===s?10:s,a=Math.ceil(o/r),u=[],d=1;d<=a;d++)u.push(d);var p=Math.ceil(a/i),j=Object(l.useState)(1),h=Object(b.a)(j,2),g=h[0],O=h[1],w=(g-1)*i+1,v=g*i;return console.log(p,g,w,v),Object(c.jsxs)("div",{className:f.a.paginator,children:[g>1&&Object(c.jsx)("button",{onClick:function(){O(g-1)},children:"PREV"}),u.filter((function(e){return e>=w&&e<=v})).map((function(e){return Object(c.jsx)("span",{className:t===e?f.a.selected:null,onClick:function(){n(e)},children:e},e)})),p>g&&Object(c.jsx)("button",{onClick:function(){O(g+1)},children:"NEXT"})]})},O=n.p+"static/media/photo.a00ce18b.png",w=n(21),v=function(e){var t=e.user,n=e.followInPropgress,o=e.unFollow,r=e.follow;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:j.a.usersPage,children:[Object(c.jsx)(w.b,{to:"/profile/"+t.id,children:Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:null!==t.photos.large?t.photos.large:O})})}),Object(c.jsx)("div",{children:t.followed?Object(c.jsx)("button",{disabled:n.includes(t.id),onClick:function(){o(t.id)},children:"Unfollowed"}):Object(c.jsx)("button",{disabled:n.includes(t.id),onClick:function(){r(t.id)},children:"Followed"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:t.name}),Object(c.jsx)("div",{children:t.status})]}),Object(c.jsx)("div",{})]})})},x=function(e){var t=e.users,n=e.currentPage,o=e.onPageChanged,r=e.totalCount,s=e.pageSize,i=e.followInPropgress,l=e.unFollow,a=e.follow;return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{currentPage:n,onPageChanged:o,totalCount:r,pageSize:s}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(v,{user:e,followInPropgress:i,unFollow:l,follow:a},e.id)}))})]})},P=n(95),C=n(70),m=n(9),y=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).onPageChanged=function(e){r.props.getUsers(e,r.props.pageSize)},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[this.props.isFetching?Object(c.jsx)(P.a,{}):null,Object(c.jsx)(x,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followInPropgress:this.props.followInPropgress,unFollow:this.props.unFollow,follow:this.props.follow})]})}}]),n}(a.a.Component);t.default=Object(m.d)(Object(u.b)((function(e){return{users:Object(C.k)(e),isFetching:Object(C.e)(e),currentPage:Object(C.b)(e),pageSize:Object(C.g)(e),totalCount:Object(C.j)(e),followInPropgress:Object(C.c)(e)}}),{follow:d.b,unFollow:d.f,setCurrentPage:d.d,toggleIsFollow:d.e,getUsers:d.c}))(y)}}]);
//# sourceMappingURL=5.8b80eff0.chunk.js.map
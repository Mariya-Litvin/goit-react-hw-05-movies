"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{618:function(n,e,t){t.d(e,{Q0:function(){return s},uG:function(){return p},wu:function(){return l},xZ:function(){return f},z1:function(){return o}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="3ad9f44e380b266d75ea33742d9ec7ef",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(i,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},342:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,u,c,i,o=t(861),s=t(439),p=t(757),f=t.n(p),l=t(618),d=t(791),x=t(87),h=t(686),g=t.n(h),v=t(689),m=t(168),b=t(444),y=b.ZP.section(r||(r=(0,m.Z)(["\n  width: 1280px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),w=b.ZP.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 18px;\n"]))),Z=t(184),k=function(n){var e=n.titles,t=(0,v.TH)();return(0,Z.jsx)(y,{children:(0,Z.jsx)(w,{children:e.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(x.rU,{to:"".concat(n.id),state:{from:t},children:n.title})},n.id)}))})})},j=b.ZP.form(u||(u=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding-top: 20px;\n"]))),S=b.ZP.input(c||(c=(0,m.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n  ::placeholder {\n    font-size: 16px;\n  }\n"]))),_=b.ZP.button(i||(i=(0,m.Z)(["\n  width: 80px;\n  height: 37px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 16px;\n  border-radius: 5px;\n  border-color: #007bff;\n  background-color: #abcdef;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    background-color: #6495ed;\n  }\n"]))),P=function(){var n,e=(0,d.useState)(""),t=(0,s.Z)(e,2),r=t[0],a=t[1],u=(0,x.lr)(),c=(0,s.Z)(u,2),i=c[0],p=c[1],h=null!==(n=i.get("query"))&&void 0!==n?n:"";return(0,d.useEffect)((function(){function n(){return(n=(0,o.Z)(f().mark((function n(){var e,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.wu)(h);case 3:if(e=n.sent,(t=e.map((function(n){return{title:n.title,id:n.id}})))&&t.length>0&&a(t),0!==t.length){n.next=8;break}return n.abrupt("return",g().Notify.info("Sorry, the movie you requested was not found. Please try again."));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),g().Notify.failure("Sorry, something went wrong, please try again later");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}""!==h&&function(){n.apply(this,arguments)}()}),[h]),(0,Z.jsxs)("main",{children:[(0,Z.jsxs)(j,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;p({query:e.elements.movie.value.trim()}),e.reset()},children:[(0,Z.jsx)(S,{type:"text",placeholder:"Search movie...",name:"movie"}),(0,Z.jsx)(_,{type:"submit",children:"Search"})]}),r&&(0,Z.jsx)(k,{titles:r})]})}}}]);
//# sourceMappingURL=342.18755f20.chunk.js.map
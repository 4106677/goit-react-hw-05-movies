"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{413:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n,a,u,s,c=t(439),i=t(791),o=t(689),p=t(933),f=t(168),l=t(444),d=l.ZP.ul(n||(n=(0,f.Z)(["\n  display: flex;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  /* justify-content: center; */\n"]))),h=l.ZP.li(a||(a=(0,f.Z)(["\n  width: 200px;\n"]))),v=l.ZP.img(u||(u=(0,f.Z)(["\n  border-radius: 5px;\n"]))),m=l.ZP.div(s||(s=(0,f.Z)(["\n  width: 200px;\n  margin-top: 10px;\n"]))),x=t(184),w=function(){var e=(0,o.UO)().movieId,r=(0,i.useState)([]),t=(0,c.Z)(r,2),n=t[0],a=t[1],u=(0,i.useState)(null),s=(0,c.Z)(u,2),f=s[0],l=s[1];return(0,i.useEffect)((function(){(0,p.u3)(e).then((function(e){a(e),l(null)})).catch((function(e){console.log(e.message),l(e),a([])}))}),[e]),(0,x.jsxs)(x.Fragment,{children:[n.length>0&&(0,x.jsx)(d,{children:n.map((function(e){var r=e.id,t=e.name,n=e.profile_path,a=e.character;return(0,x.jsxs)(h,{children:[(0,x.jsx)(v,{src:p.yA+n,alt:t,width:200}),(0,x.jsxs)(m,{children:[(0,x.jsx)("b",{children:t}),(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{children:"Character:"})," ",a]})]})]},r)}))}),0===n.length&&!f&&(0,x.jsx)("p",{children:"Not actors"})]})}},933:function(e,r,t){t.d(r,{GS:function(){return p},V$:function(){return l},ng:function(){return d},u3:function(){return f},yA:function(){return i},z5:function(){return o}});var n=t(861),a=t(757),u=t.n(a),s=t(388);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="fccf9db5f8a12104e5720aa899b6f5b7",i="https://image.tmdb.org/t/p/w500",o=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/trending/movie/day",{params:{api_key:c}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a,i,o,p,f,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,n=t.data,a=n.title,i=n.poster_path,o=n.release_date,p=n.genres,f=n.overview,l=n.vote_average,e.abrupt("return",{title:a,posterPath:i,releaseDate:o,genres:p,overview:f,voteAverage:l});case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{api_key:c,query:r,page:1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=413.4420c7eb.chunk.js.map
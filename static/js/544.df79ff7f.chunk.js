"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{544:function(e,t,r){r.r(t);var n=r(439),a=r(928),u=r(791),s=r(689),c=r(933),i=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,n.Z)(e,2),r=t[0],o=t[1],p=(0,u.useState)(null),f=(0,n.Z)(p,2),l=f[0],v=f[1],d=(0,s.TH)();return(0,u.useEffect)((function(){(0,c.z5)().then((function(e){o(e),v(null)})).catch((function(e){console.log(e),v(e),o([])}))}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trending today"}),l&&(0,i.jsx)("p",{children:l.message}),(null===r||void 0===r?void 0:r.length)>0&&(0,i.jsx)(a.Z,{movies:r,location:d})]})}},928:function(e,t,r){var n=r(87),a=r(933),u=r(184);t.Z=function(e){var t=e.movies,r=e.location;return(0,u.jsxs)("ul",{children:[(0,u.jsx)("h2",{children:"header"}),t.map((function(e){var t=e.id,s=e.title,c=e.poster_path,i=e.release_date;return(0,u.jsx)("li",{children:(0,u.jsxs)(n.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,u.jsxs)("p",{children:[s,", ",i?new Date(i).getFullYear():"---"]}),(0,u.jsx)("img",{src:a.yA+c,alt:s,loading:"lazy",width:250})]})},t)}))]})}},933:function(e,t,r){r.d(t,{GS:function(){return p},V$:function(){return l},ng:function(){return v},u3:function(){return f},yA:function(){return i},z5:function(){return o}});var n=r(861),a=r(757),u=r.n(a),s=r(388);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="fccf9db5f8a12104e5720aa899b6f5b7",i="https://image.tmdb.org/t/p/w500",o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/trending/movie/day",{params:{api_key:c}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,i,o,p,f,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(t),{params:{api_key:c}});case 2:return r=e.sent,n=r.data,a=n.title,i=n.poster_path,o=n.release_date,p=n.genres,f=n.overview,l=n.vote_average,e.abrupt("return",{title:a,posterPath:i,releaseDate:o,genres:p,overview:f,voteAverage:l});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{api_key:c,query:t,page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.df79ff7f.chunk.js.map
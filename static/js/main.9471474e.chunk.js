(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},34:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=(a(32),a(34),a(36),a(8)),s=a(22),l=a(12),u=a(3),p=a(9),d=a(1),m=a(18),f=a(24),g=a(16),h={OK:"ok",LOADING:"loading",ERROR:"error"},v=a(5),E=a.n(v),y=a(10),b=a(26),O=a(25),w=a(17),A=a.n(w);window.queryString=A.a;var k=new Array(100).fill().map(function(e,t){return{to:String(Math.random()).substring(2,12),date:Date.now()+1e5*t,type:["call_missed","call_missed_outgoing","call_made","call_received"][Math.floor(4*Math.random())]}}),D=k.length/10;window.networkConditions={offline:!1,serverIntermitent:!1,latency:400};var j=function(e){return new Promise(function(t,a){e.startsWith("https://api.fakevox.com/callhistory")?window.networkConditions.offline?a(new TypeError("Failed to fetch")):setTimeout(function(){window.networkConditions.serverIntermitent&&Math.round(Math.random())&&t(new Response(JSON.stringify({message:"Internal Server Error. Please try again"}),{status:500}));var a=e.split("?"),n=Object(O.a)(a,2),r=(n[0],n[1]),i=A.a.parse(r).page,c=10*(i-1),o=c+10,s={meta:{page:parseInt(i),perPage:10,pages:D},data:k.slice(c,o)};t(new Response(JSON.stringify(s),{type:"text/json"}))},window.networkConditions.latency||400):window.fetch(e).then(t).catch(a)})},R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),t}(Object(b.a)(Error)),N={getData:function(){var e=Object(y.a)(E.a.mark(function e(t){var a,n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.fakevox.com/callhistory?page=".concat(t),e.prev=1,e.next=4,j(a);case 4:if((n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:throw r=e.sent,new R(r.message);case 10:return e.abrupt("return",n.json());case 13:if(e.prev=13,e.t0=e.catch(1),!(e.t0 instanceof R)){e.next=17;break}throw e.t0;case 17:throw new Error("We couldn't connect to the service. Check your internet connection");case 18:case"end":return e.stop()}},e,this,[[1,13]])}));return function(t){return e.apply(this,arguments)}}()},x={DATA_LOADED:"loaded",DATA_REQUESTED:"requested",DATA_ERROR:"error"},C=function(e){return{type:x.DATA_LOADED,payload:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(y.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:x.DATA_REQUESTED,payload:{}}),t.prev=1,t.next=4,N.getData(e);case 4:n=t.sent,a(C(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a((r=t.t0,{type:x.DATA_ERROR,payload:{error:r}}));case 11:case"end":return t.stop()}var r},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},_={isInitalState:!0,status:h.OK,data:[],error:{},pagination:{}};var S=Object(d.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.DATA_LOADED:return{status:h.OK,data:t.payload.data,pagination:t.payload.meta,error:null,isInitialState:!1};case x.DATA_REQUESTED:return Object(g.a)({},e,{status:h.LOADING,error:null});case x.DATA_ERROR:return Object(g.a)({},e,{status:h.ERROR,error:t.payload.error});case"reset":return _}return e},Object(d.a)(f.a)),I=a(11),H=a.n(I),L=function(e){var t=e.children;return r.a.createElement("i",{className:"material-icons ".concat(t)},t)},P=function(e){var t=e.disabled,a=e.active,n=e.onClick,i=e.text;return r.a.createElement("button",{className:H()("pagination-button",{active:a}),disabled:t,onClick:n},i)},M=function(e){var t=e.isLoading,a=e.page,n=e.pages,i=e.changePage;return r.a.createElement("div",{className:"pagination"},r.a.createElement(P,{disabled:t||1===a,onClick:function(){return i(a-1)},text:r.a.createElement(L,null,"chevron_left")}),Array(n).fill().map(function(e,n){return r.a.createElement(P,{key:n,disabled:t,active:a===n+1,onClick:function(){return i(n+1)},text:n+1})}),r.a.createElement(P,{disabled:t||a===n,onClick:function(){return i(a+1)},text:r.a.createElement(L,null,"chevron_right")}))},G=a(7),J=function(e){var t=e.error,a=e.big,n=e.tryAgain;return r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"error-message"},r.a.createElement(L,null,"error"),t.message),a&&r.a.createElement("button",{onClick:n},"Try again"))},K=function(e){var t=e.big;return r.a.createElement("div",{style:{transform:t?"scale(3)":"none"},className:"lds-ellipsis"},r.a.createElement("div",null)," ",r.a.createElement("div",null)," ",r.a.createElement("div",null)," ",r.a.createElement("div",null))},Q=function(e){var t,a=e.callHistory,n=e.big,i=e.tryAgain,c=(t={},Object(G.a)(t,h.ERROR,r.a.createElement(J,{big:n,tryAgain:i,error:a.error})),Object(G.a)(t,h.LOADING,r.a.createElement(K,{big:n})),t);return r.a.createElement("div",{className:H()("feedback-container",{big:n})},c[a.status])},U=function(e){var t=e.to,a=e.date,n=e.type;return r.a.createElement("li",{className:"history-item"},r.a.createElement("span",{className:"history-item--number"},r.a.createElement(L,null,n),"".concat(t[0]," ").concat(t.slice(1,3)," ").concat(t.slice(4))),r.a.createElement("span",{className:"history-item--date"},new Date(a).toLocaleDateString()+" "+new Date(a).toLocaleTimeString()))},q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).changePage=function(e){a.props.getCallHistory(e)},a.props.getCallHistory(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderInitialState",value:function(){var e=this,t=this.props.callHistory;return r.a.createElement("div",{className:"app-container loading"},r.a.createElement(Q,{big:!0,callHistory:t,tryAgain:function(){return e.props.getCallHistory()}}))}},{key:"renderApp",value:function(){var e=this.props.callHistory;return r.a.createElement("div",{className:"app-container"},r.a.createElement(M,Object.assign({isLoading:e.status===h.LOADING,changePage:this.changePage},e.pagination)),r.a.createElement(Q,{callHistory:e}),e.data.map(function(e){return r.a.createElement(U,Object.assign({key:e.to},e))}))}},{key:"render",value:function(){return this.props.callHistory.isInitalState?this.renderInitialState():this.renderApp()}}]),t}(r.a.Component),W=Object(m.b)(function(e){return{callHistory:e}},function(e){return{getCallHistory:Object(d.b)(T,e)}})(q);c.a.render(r.a.createElement(function(){return r.a.createElement(m.a,{store:S},r.a.createElement(W,null))},null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.9471474e.chunk.js.map
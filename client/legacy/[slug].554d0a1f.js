import{M as t,N as e,_ as r,a as s,i as a,s as n,b as o,S as c,c as i,e as u,t as l,H as f,g as h,h as p,d,f as m,j as v,k as b,m as x,n as g,q as y,u as E,v as R,J as j,w,x as k,K as A,O as L}from"./client.2cc28c03.js";function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var G=A.document;function H(t){var e,r,s,a,n,o,c,j,w,k,A,L,D,H,S=t[0].titre+"",T=t[0].html+"";return G.title=e=t[0].titre,{c:function(){r=i(),s=u("aside"),a=u("a"),n=l(" "),o=i(),c=u("a"),j=l(" "),w=i(),k=u("article"),A=u("h1"),L=l(S),D=i(),H=u("div"),this.h()},l:function(t){f('[data-svelte="svelte-1ns4ar5"]',G.head).forEach(h),r=p(t),s=d(t,"ASIDE",{class:!0});var e=m(s);a=d(e,"A",{href:!0,title:!0,class:!0});var i=m(a);n=v(i," "),i.forEach(h),o=p(e),c=d(e,"A",{href:!0,title:!0,class:!0});var u=m(c);j=v(u," "),u.forEach(h),e.forEach(h),w=p(t),k=d(t,"ARTICLE",{class:!0,"data-title":!0});var l=m(k);A=d(l,"H1",{});var b=m(A);L=v(b,S),b.forEach(h),D=p(l),H=d(l,"DIV",{class:!0}),m(H).forEach(h),l.forEach(h),this.h()},h:function(){b(a,"href","https://github.com/oisiflorus/ressources/blob/master/journees-cogitation/prix-libre-et-dialogue.md"),b(a,"title","Voir sur Github"),b(a,"class","blobGhLink tooltip"),b(c,"href","https://github.com/oisiflorus/ressources/edit/master/journees-cogitation/prix-libre-et-dialogue.md"),b(c,"title","Éditer sur Github"),b(c,"class","blobGhEdit tooltip"),b(s,"class","blobTools"),b(H,"class","content svelte-1cbm39"),b(k,"class","blobContent"),b(k,"data-title","content")},m:function(t,e){x(t,r,e),x(t,s,e),g(s,a),g(a,n),g(s,o),g(s,c),g(c,j),x(t,w,e),x(t,k,e),g(k,A),g(A,L),g(k,D),g(k,H),H.innerHTML=T},p:function(t,r){var s=y(r,1)[0];1&s&&e!==(e=t[0].titre)&&(G.title=e),1&s&&S!==(S=t[0].titre+"")&&E(L,S),1&s&&T!==(T=t[0].html+"")&&(H.innerHTML=T)},i:R,o:R,d:function(t){t&&h(r),t&&h(s),t&&h(w),t&&h(k)}}}function S(t){return T.apply(this,arguments)}function T(){return(T=t(e.mark((function t(r){var s,a,n;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r.params,r.query,t.next=3,this.fetch("ressources/".concat(s.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(n=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:n});case 11:this.error(a.status,n.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function q(r,s,a){j(t(e.mark((function t(){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(document.querySelectorAll('a[href^="#"]')).map((function(t){return t.href=document.location+new URL(t.href).hash}));case 1:case"end":return t.stop()}}),t)}))));var n=s.post;return r.$set=function(t){"post"in t&&a(0,n=t.post)},[n]}var I=function(t){r(u,c);var e,i=(e=u,function(){var t,r=w(e);if(D()){var s=w(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return k(this,t)});function u(t){var e;return s(this,u),e=i.call(this),a(o(e),t,q,H,n,{post:0}),e}return u}();export default I;export{S as preload};
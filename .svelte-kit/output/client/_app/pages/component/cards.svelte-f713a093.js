var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,c=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(r)for(var t of r(a))n.call(a,t)&&o(e,t,a[t]);return e},l=(e,r)=>a(e,t(r));import{S as i,i as $,s as f,K as d,F as p,e as h,t as m,k as u,j as g,c as v,a as b,g as y,d as w,n as I,m as V,b as E,f as P,I as j,o as k,v as D,r as O,w as x,A as C,V as R,p as A,q as B,R as S,h as q}from"../../chunks/vendor-c14c2a3b.js";import{T as z,I as T,f as N}from"../../chunks/helpers-3b89587a.js";function F(e){let a,t;const r=[e[0].reduce(G,{})];let s={};for(let n=0;n<r.length;n+=1)s=C(s,r[n]);return a=new R({props:s}),{c(){g(a.$$.fragment)},l(e){V(a.$$.fragment,e)},m(e,r){k(a,e,r),t=!0},p(e,t){const s=1&t?A(r,[B(e[0].reduce(G,{}))]):{};a.$set(s)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){O(a.$$.fragment,e),t=!1},d(e){x(a,e)}}}function H(e){let a,t=`<Cards\n${N(e[0])} />`;return{c(){a=m(t)},l(e){a=y(e,t)},m(e,t){P(e,a,t)},p(e,r){1&r&&t!==(t=`<Cards\n${N(e[0])} />`)&&q(a,t)},d(e){e&&w(a)}}}function K(e){let a,t,r,s,n,o;return t=new T({props:{demoProps:e[0],changeProp:e[2]}}),n=new S({props:{$$slots:{default:[H]},$$scope:{ctx:e}}}),{c(){a=h("div"),g(t.$$.fragment),r=u(),s=h("div"),g(n.$$.fragment)},l(e){a=v(e,"DIV",{});var o=b(a);V(t.$$.fragment,o),o.forEach(w),r=I(e),s=v(e,"DIV",{});var c=b(s);V(n.$$.fragment,c),c.forEach(w)},m(e,c){P(e,a,c),k(t,a,null),P(e,r,c),P(e,s,c),k(n,s,null),o=!0},p(e,a){const r={};1&a&&(r.demoProps=e[0]),t.$set(r);const s={};9&a&&(s.$$scope={dirty:a,ctx:e}),n.$set(s)},i(e){o||(D(t.$$.fragment,e),D(n.$$.fragment,e),o=!0)},o(e){O(t.$$.fragment,e),O(n.$$.fragment,e),o=!1},d(e){e&&w(a),x(t),e&&w(r),e&&w(s),x(n)}}}function _(e){let a,t,r,s,n,o,c,l,i,$,f,C,R,A,B,S,q,T,N,H,_,G,J,L,M,Q,U,W,X,Y="<slot />";return c=new d({props:{name:"github",size:30}}),i=new z({props:{props:e[1]}}),M=new p({props:{$$slots:{default:[F]},$$scope:{ctx:e}}}),W=new p({props:{gutter:20,$$slots:{default:[K]},$$scope:{ctx:e}}}),{c(){a=h("div"),t=h("div"),r=h("h1"),s=m("Cards"),n=u(),o=h("a"),g(c.$$.fragment),l=u(),g(i.$$.fragment),$=m('\n\n  This component renders a "card hand" which can be customized in various ways\n  and it\'s reactive to how many cards are being rendered.'),f=h("br"),C=h("br"),R=m("\n  Due to limitations of svelte "),A=h("span"),B=m(Y),S=m(" I\n  highly suggest you copy the code over from the component file itself and add\n  your own business logic directly into the file."),q=h("br"),T=h("br"),N=m("\n  In order to prevent a stack of shadows, the card hand hides all cards but one whenever\n  "),H=h("span"),_=m("spread"),G=m(" is equal to 0."),J=u(),L=h("div"),g(M.$$.fragment),Q=u(),U=h("div"),g(W.$$.fragment),this.h()},l(e){a=v(e,"DIV",{class:!0});var d=b(a);t=v(d,"DIV",{class:!0});var p=b(t);r=v(p,"H1",{});var h=b(r);s=y(h,"Cards"),h.forEach(w),n=I(p),o=v(p,"A",{href:!0,target:!0});var m=b(o);V(c.$$.fragment,m),m.forEach(w),p.forEach(w),l=I(d),V(i.$$.fragment,d),$=y(d,'\n\n  This component renders a "card hand" which can be customized in various ways\n  and it\'s reactive to how many cards are being rendered.'),f=v(d,"BR",{}),C=v(d,"BR",{}),R=y(d,"\n  Due to limitations of svelte "),A=v(d,"SPAN",{class:!0});var u=b(A);B=y(u,Y),u.forEach(w),S=y(d," I\n  highly suggest you copy the code over from the component file itself and add\n  your own business logic directly into the file."),q=v(d,"BR",{}),T=v(d,"BR",{}),N=y(d,"\n  In order to prevent a stack of shadows, the card hand hides all cards but one whenever\n  "),H=v(d,"SPAN",{class:!0});var g=b(H);_=y(g,"spread"),g.forEach(w),G=y(d," is equal to 0."),d.forEach(w),J=I(e),L=v(e,"DIV",{class:!0});var E=b(L);V(M.$$.fragment,E),E.forEach(w),Q=I(e),U=v(e,"DIV",{class:!0});var P=b(U);V(W.$$.fragment,P),P.forEach(w),this.h()},h(){E(o,"href","https://github.com/kkortes/svelte-component-kit/blob/master/Cards.svelte"),E(o,"target","_blank"),E(t,"class","title"),E(A,"class","highlight"),E(H,"class","highlight"),E(a,"class","content"),E(L,"class","component"),E(U,"class","panel")},m(e,d){P(e,a,d),j(a,t),j(t,r),j(r,s),j(t,n),j(t,o),k(c,o,null),j(a,l),k(i,a,null),j(a,$),j(a,f),j(a,C),j(a,R),j(a,A),j(A,B),j(a,S),j(a,q),j(a,T),j(a,N),j(a,H),j(H,_),j(a,G),P(e,J,d),P(e,L,d),k(M,L,null),P(e,Q,d),P(e,U,d),k(W,U,null),X=!0},p(e,[a]){const t={};9&a&&(t.$$scope={dirty:a,ctx:e}),M.$set(t);const r={};9&a&&(r.$$scope={dirty:a,ctx:e}),W.$set(r)},i(e){X||(D(c.$$.fragment,e),D(i.$$.fragment,e),D(M.$$.fragment,e),D(W.$$.fragment,e),X=!0)},o(e){O(c.$$.fragment,e),O(i.$$.fragment,e),O(M.$$.fragment,e),O(W.$$.fragment,e),X=!1},d(e){e&&w(a),x(c),x(i),e&&w(J),e&&w(L),x(M),e&&w(Q),e&&w(U),x(W)}}}const G=(e,{name:a,defaultValue:t})=>l(c({},e),{[a]:t});function J(e,a,t){let r=[{name:"spread",optional:!0,defaultValue:.25,type:"float"},{name:"distance",optional:!0,defaultValue:150,type:"integer"},{name:"flipped",optional:!0,defaultValue:!1,type:"boolean"}],s=r;return[s,r,(e,a)=>t(0,s=s.map((t=>t.name===e?l(c({},t),{defaultValue:a}):t)))]}export default class extends i{constructor(e){super(),$(this,e,J,_,f,{})}}

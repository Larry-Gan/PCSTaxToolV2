import{S as q0,i as H0,s as U0,k as _,q as d,a as E,l as h,m as S,r as T,h as o,c as I,n as H,J as k0,b as L,G as s,K as B0,L as s0,M as U,N as F0,u as w,H as n0,O as M0,P as D0,Q as Y0}from"../chunks/index.0cafa8c3.js";const y0=[{value:"2018",label:"2018"},{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"}],O0=[{value:"single",label:"Single"},{value:"seperate",label:"Seperate"},{value:"together",label:"Together"},{value:"head",label:"Head"}],G0={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9525,38700,82500,157500,2e5,5e5],seperate:[0,9525,38700,82500,157500,2e5,3e5],together:[0,19050,77400,165e3,315e3,4e5,6e5],head:[0,13600,51800,82500,157500,2e5,5e5],ss:128400,budget:63e11,budget_percents:[.1678,.1646,.1577,.1103,.0868,.0848,.0685,.0326,.0209,.0205,.0184,.0134,.0122,.0121,.009,.006,.0045,.0029,.0069]},J0={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9700,39475,84200,160725,204100,510300],seperate:[0,9700,39475,84200,160725,204100,306175],together:[0,19400,78950,168400,321450,408200,612350],head:[0,13850,52850,84200,160700,204100,510300],ss:132900,budget:66e11,budget_percents:[.1756,.1651,.1597,.1098,.0859,.0884,.0608,.0328,.0195,.0235,.0181,.0092,.011,.0124,.0079,.0059,.0061,.0037,.0048]},K0={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9875,40125,85525,163300,207350,518400],seperate:[0,9875,40125,85525,163300,207350,311025],together:[0,19750,80250,171050,326600,414700,622050],head:[0,14100,53700,85500,163300,207350,518400],ss:137700,budget_percents:[.1452,.1261,.1203,.1038,.1592,.0604,.0649,.0269,.0102,.0313,.0215,.0201,.0084,.0101,.0714,.0045,.0045,.0034,.0077]},Q0={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9950,40525,86375,164925,209425,523600],seperate:[0,9950,40525,86375,164925,209425,314150],together:[0,19900,81050,172750,329850,418850,628301],head:[0,14200,54200,86350,164900,209400,523600],ss:142800,budget_percents:[.1374,.1178,.1111,.0998,.1987,.0576,.0696,.0256,.0195,.0505,.0218,.0125,.0078,.0087,.0387,.0041,.0036,.0018,.0131]},V0={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,10275,41775,89075,170050,215950,539900],seperate:[0,10275,41775,89075,170050,215950,332925],together:[0,20550,83550,178150,340100,431900,647850],head:[0,14650,55900,89050,170050,215950,539900],ss:147e3,budget_percents:[.1649,.1528,.1395,.1305,.104,.0894,.0513,.033,.0094,.0254,.0332,.0111,.0098,.0106,.0086,.0049,.0037,.0019,.016]},j0={2018:G0,2019:J0,2020:K0,2021:Q0,2022:V0};function A0(a,n,t){const f=a.slice();return f[9]=n[t],f}function N0(a,n,t){const f=a.slice();return f[12]=n[t],f}function R0(a){let n,t=a[12].label+"",f,b;return{c(){n=_("option"),f=d(t),b=E(),this.h()},l(p){n=h(p,"OPTION",{});var i=S(n);f=T(i,t),b=I(i),i.forEach(o),this.h()},h(){n.__value=a[12].value,n.value=n.__value},m(p,i){L(p,n,i),s(n,f),s(n,b)},p:n0,d(p){p&&o(n)}}}function C0(a){let n,t=a[9].label+"",f,b;return{c(){n=_("option"),f=d(t),b=E(),this.h()},l(p){n=h(p,"OPTION",{});var i=S(n);f=T(i,t),b=I(i),i.forEach(o),this.h()},h(){n.__value=a[9].value,n.value=n.__value},m(p,i){L(p,n,i),s(n,f),s(n,b)},p:n0,d(p){p&&o(n)}}}function w0(a){let n,t,f,b,p,i,D,Q,V,Y,j,u,v,M,B,P,O,c,k,r0,o0,i0,f0,G,z,A,p0,W,X,N,u0,Z,$,R,c0,x,e0,C,_0,l0,t0,F,h0,a0,b0,T0,J=y0,m=[];for(let e=0;e<J.length;e+=1)m[e]=R0(N0(a,J,e));let K=O0,g=[];for(let e=0;e<K.length;e+=1)g[e]=C0(A0(a,K,e));return{c(){n=_("div"),t=_("form"),f=_("label"),b=d("Yearly Income:"),p=E(),i=_("input"),D=_("br"),Q=_("br"),V=E(),Y=_("label"),j=d("Fiscal Year:"),u=E(),v=_("select");for(let e=0;e<m.length;e+=1)m[e].c();M=E(),B=_("label"),P=d("Marital Status:"),O=E(),c=_("select");for(let e=0;e<g.length;e+=1)g[e].c();k=E(),r0=_("br"),o0=E(),i0=_("br"),f0=E(),G=_("input"),z=E(),A=_("p"),p0=d("Year: "),W=d(a[1]),X=E(),N=_("p"),u0=d("Marital Status: "),Z=d(a[2]),$=E(),R=_("p"),c0=d("Income: "),x=d(a[0]),e0=E(),C=_("p"),_0=d("Total Taxes paid: "),l0=d(a[3]),t0=E(),F=_("p"),h0=d("After Tax Income: "),a0=d(a[4]),this.h()},l(e){n=h(e,"DIV",{class:!0});var r=S(n);t=h(r,"FORM",{});var l=S(t);f=h(l,"LABEL",{for:!0});var y=S(f);b=T(y,"Yearly Income:"),y.forEach(o),p=I(l),i=h(l,"INPUT",{type:!0,class:!0}),D=h(l,"BR",{}),Q=h(l,"BR",{}),V=I(l),Y=h(l,"LABEL",{for:!0});var I0=S(Y);j=T(I0,"Fiscal Year:"),I0.forEach(o),u=I(l),v=h(l,"SELECT",{});var S0=S(v);for(let q=0;q<m.length;q+=1)m[q].l(S0);S0.forEach(o),M=I(l),B=h(l,"LABEL",{for:!0});var P0=S(B);P=T(P0,"Marital Status:"),P0.forEach(o),O=I(l),c=h(l,"SELECT",{});var L0=S(c);for(let q=0;q<g.length;q+=1)g[q].l(L0);L0.forEach(o),k=I(l),r0=h(l,"BR",{}),o0=I(l),i0=h(l,"BR",{}),f0=I(l),G=h(l,"INPUT",{type:!0}),l.forEach(o),r.forEach(o),z=I(e),A=h(e,"P",{});var v0=S(A);p0=T(v0,"Year: "),W=T(v0,a[1]),v0.forEach(o),X=I(e),N=h(e,"P",{});var m0=S(N);u0=T(m0,"Marital Status: "),Z=T(m0,a[2]),m0.forEach(o),$=I(e),R=h(e,"P",{});var g0=S(R);c0=T(g0,"Income: "),x=T(g0,a[0]),g0.forEach(o),e0=I(e),C=h(e,"P",{});var d0=S(C);_0=T(d0,"Total Taxes paid: "),l0=T(d0,a[3]),d0.forEach(o),t0=I(e),F=h(e,"P",{});var E0=S(F);h0=T(E0,"After Tax Income: "),a0=T(E0,a[4]),E0.forEach(o),this.h()},h(){H(f,"for","fname"),H(i,"type","number"),H(i,"class","income-entry svelte-109025x"),H(Y,"for","pin"),a[1]===void 0&&k0(()=>a[7].call(v)),H(B,"for","pin"),a[2]===void 0&&k0(()=>a[8].call(c)),H(G,"type","submit"),G.value="Calculate Taxes!",H(n,"class","index svelte-109025x")},m(e,r){L(e,n,r),s(n,t),s(t,f),s(f,b),s(t,p),s(t,i),B0(i,a[0]),s(t,D),s(t,Q),s(t,V),s(t,Y),s(Y,j),s(t,u),s(t,v);for(let l=0;l<m.length;l+=1)m[l].m(v,null);s0(v,a[1]),s(t,M),s(t,B),s(B,P),s(t,O),s(t,c);for(let l=0;l<g.length;l+=1)g[l].m(c,null);s0(c,a[2]),s(t,k),s(t,r0),s(t,o0),s(t,i0),s(t,f0),s(t,G),L(e,z,r),L(e,A,r),s(A,p0),s(A,W),L(e,X,r),L(e,N,r),s(N,u0),s(N,Z),L(e,$,r),L(e,R,r),s(R,c0),s(R,x),L(e,e0,r),L(e,C,r),s(C,_0),s(C,l0),L(e,t0,r),L(e,F,r),s(F,h0),s(F,a0),b0||(T0=[U(i,"input",a[6]),U(i,"input",a[5]),U(v,"change",a[7]),U(v,"change",a[5]),U(c,"change",a[8]),U(c,"change",a[5]),U(G,"click",a[5])],b0=!0)},p(e,[r]){if(r&1&&F0(i.value)!==e[0]&&B0(i,e[0]),r&0){J=y0;let l;for(l=0;l<J.length;l+=1){const y=N0(e,J,l);m[l]?m[l].p(y,r):(m[l]=R0(y),m[l].c(),m[l].m(v,null))}for(;l<m.length;l+=1)m[l].d(1);m.length=J.length}if(r&2&&s0(v,e[1]),r&0){K=O0;let l;for(l=0;l<K.length;l+=1){const y=A0(e,K,l);g[l]?g[l].p(y,r):(g[l]=C0(y),g[l].c(),g[l].m(c,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=K.length}r&4&&s0(c,e[2]),r&2&&w(W,e[1]),r&4&&w(Z,e[2]),r&1&&w(x,e[0]),r&8&&w(l0,e[3]),r&16&&w(a0,e[4])},i:n0,o:n0,d(e){e&&o(n),M0(m,e),M0(g,e),e&&o(z),e&&o(A),e&&o(X),e&&o(N),e&&o($),e&&o(R),e&&o(e0),e&&o(C),e&&o(t0),e&&o(F),b0=!1,D0(T0)}}}function z0(a,n,t){let f=0,b="2022",p="single",i=0,D=0;function Q(){let u=f,v=0,M=j0[b],B=M.percents,P=M[p];M.budget_percents;for(let k=1;k<P.length;k++)if(u>=P[k])v+=(P[k]-P[k-1])*B[k-1];else{v+=(u-P[k-1])*B[k-1];break}u>P[P.length-1]&&(v+=(u-P[P.length-1])*B[B.length-1]);let O=0;u>M.ss?O=M.ss*.062:O=u*.062;let c=0;p=="single"||p=="head"?u>2e5?(c=u*.0145,c+=(u-2e5)*.0235):c=u*.0145:p=="seperate"?u>125e3?(c=u*.0145,c+=(u-125e3)*.0235):c=u*.0145:p=="together"&&(u>25e4?(c=u*.0145,c+=(u-25e4)*.0235):c=u*.0145),t(3,i=v+O+c),t(4,D=u-i)}function V(){f=F0(this.value),t(0,f)}function Y(){b=Y0(this),t(1,b)}function j(){p=Y0(this),t(2,p)}return[f,b,p,i,D,Q,V,Y,j]}class X0 extends q0{constructor(n){super(),H0(this,n,z0,w0,U0,{})}}export{X0 as default};

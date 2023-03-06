(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function L(){}function Ae(e){return e()}function ge(){return Object.create(null)}function Q(e){e.forEach(Ae)}function Ie(e){return typeof e=="function"}function xe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ce(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function me(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function b(){return k(" ")}function M(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function P(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e){return e===""?null:+e}function Me(e){return Array.from(e.childNodes)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function be(e,t){e.value=t??""}function R(e,t){for(let n=0;n<e.options.length;n+=1){const s=e.options[n];if(s.__value===t){s.selected=!0;return}}e.selectedIndex=-1}function ve(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let fe;function G(e){fe=e}const Y=[],ye=[],U=[],$e=[],Pe=Promise.resolve();let ue=!1;function je(){ue||(ue=!0,Pe.then(Ne))}function J(e){U.push(e)}const ie=new Set;let j=0;function Ne(){if(j!==0)return;const e=fe;do{try{for(;j<Y.length;){const t=Y[j];j++,G(t),Ye(t.$$)}}catch(t){throw Y.length=0,j=0,t}for(G(null),Y.length=0,j=0;ye.length;)ye.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];ie.has(n)||(ie.add(n),n())}U.length=0}while(Y.length);for(;$e.length;)$e.pop()();ue=!1,ie.clear(),G(e)}function Ye(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const qe=new Set;function Be(e,t){e&&e.i&&(qe.delete(e),e.i(t))}function Fe(e,t,n,s){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),s||J(()=>{const p=e.$$.on_mount.map(Ae).filter(Ie);e.$$.on_destroy?e.$$.on_destroy.push(...p):Q(p),e.$$.on_mount=[]}),r.forEach(J)}function He(e,t){const n=e.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ke(e,t){e.$$.dirty[0]===-1&&(Y.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ze(e,t,n,s,o,r,p,A=[-1]){const O=fe;G(e);const a=e.$$={fragment:null,ctx:[],props:r,update:L,not_equal:o,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(O?O.$$.context:[])),callbacks:ge(),dirty:A,skip_bound:!1,root:t.target||O.$$.root};p&&p(a.root);let I=!1;if(a.ctx=n?n(e,t.props||{},(d,f,...w)=>{const T=w.length?w[0]:f;return a.ctx&&o(a.ctx[d],a.ctx[d]=T)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](T),I&&Ke(e,d)),f}):[],a.update(),I=!0,Q(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const d=Me(t.target);a.fragment&&a.fragment.l(d),d.forEach(v)}else a.fragment&&a.fragment.c();t.intro&&Be(e.$$.fragment),Fe(e,t.target,t.anchor,t.customElement),Ne()}G(O)}class De{$destroy(){He(this,1),this.$destroy=L}$on(t,n){if(!Ie(n))return L;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!Ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ke=[{value:"2018",label:"2018"},{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"}],we=[{value:"single",label:"Single"},{value:"seperate",label:"Seperate"},{value:"together",label:"Together"},{value:"head",label:"Head"}],Ge={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9525,38700,82500,157500,2e5,5e5],seperate:[0,9525,38700,82500,157500,2e5,3e5],together:[0,19050,77400,165e3,315e3,4e5,6e5],head:[0,13600,51800,82500,157500,2e5,5e5],ss:128400,budget:63e11,budget_percents:[.1678,.1646,.1577,.1103,.0868,.0848,.0685,.0326,.0209,.0205,.0184,.0134,.0122,.0121,.009,.006,.0045,.0029,.0069]},Je={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9700,39475,84200,160725,204100,510300],seperate:[0,9700,39475,84200,160725,204100,306175],together:[0,19400,78950,168400,321450,408200,612350],head:[0,13850,52850,84200,160700,204100,510300],ss:132900,budget:66e11,budget_percents:[.1756,.1651,.1597,.1098,.0859,.0884,.0608,.0328,.0195,.0235,.0181,.0092,.011,.0124,.0079,.0059,.0061,.0037,.0048]},Qe={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9875,40125,85525,163300,207350,518400],seperate:[0,9875,40125,85525,163300,207350,311025],together:[0,19750,80250,171050,326600,414700,622050],head:[0,14100,53700,85500,163300,207350,518400],ss:137700,budget_percents:[.1452,.1261,.1203,.1038,.1592,.0604,.0649,.0269,.0102,.0313,.0215,.0201,.0084,.0101,.0714,.0045,.0045,.0034,.0077]},Re={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,9950,40525,86375,164925,209425,523600],seperate:[0,9950,40525,86375,164925,209425,314150],together:[0,19900,81050,172750,329850,418850,628301],head:[0,14200,54200,86350,164900,209400,523600],ss:142800,budget_percents:[.1374,.1178,.1111,.0998,.1987,.0576,.0696,.0256,.0195,.0505,.0218,.0125,.0078,.0087,.0387,.0041,.0036,.0018,.0131]},Ue={percents:[.1,.12,.22,.24,.32,.35,.37],single:[0,10275,41775,89075,170050,215950,539900],seperate:[0,10275,41775,89075,170050,215950,332925],together:[0,20550,83550,178150,340100,431900,647850],head:[0,14650,55900,89050,170050,215950,539900],ss:147e3,budget_percents:[.1649,.1528,.1395,.1305,.104,.0894,.0513,.033,.0094,.0254,.0332,.0111,.0098,.0106,.0086,.0049,.0037,.0019,.016]},Ve={2018:Ge,2019:Je,2020:Qe,2021:Re,2022:Ue};function Se(e,t,n){const s=e.slice();return s[9]=t[n],s}function Te(e,t,n){const s=e.slice();return s[12]=t[n],s}function Ee(e){let t,n=e[12].label+"",s,o;return{c(){t=_("option"),s=k(n),o=b(),t.__value=e[12].value,t.value=t.__value},m(r,p){$(r,t,p),u(t,s),u(t,o)},p:L,d(r){r&&v(t)}}}function Oe(e){let t,n=e[9].label+"",s,o;return{c(){t=_("option"),s=k(n),o=b(),t.__value=e[9].value,t.value=t.__value},m(r,p){$(r,t,p),u(t,s),u(t,o)},p:L,d(r){r&&v(t)}}}function We(e){let t,n,s,o,r,p,A,O,a,I,d,f,w,T,h,S,N,y,E,V,q,ce,W,X,B,ae,Z,ee,F,pe,te,ne,H,de,le,re,K,_e,se,oe,he,x=ke,g=[];for(let l=0;l<x.length;l+=1)g[l]=Ee(Te(e,x,l));let C=we,m=[];for(let l=0;l<C.length;l+=1)m[l]=Oe(Se(e,C,l));return{c(){t=_("div"),n=_("form"),s=_("label"),s.textContent="Yearly Income:",o=b(),r=_("input"),p=_("br"),A=_("br"),O=b(),a=_("label"),a.textContent="Fiscal Year:",I=b(),d=_("select");for(let l=0;l<g.length;l+=1)g[l].c();f=b(),w=_("label"),w.textContent="Marital Status:",T=b(),h=_("select");for(let l=0;l<m.length;l+=1)m[l].c();S=b(),N=_("br"),y=b(),E=_("br"),V=b(),q=_("p"),ce=k("Year: "),W=k(e[1]),X=b(),B=_("p"),ae=k("Marital Status: "),Z=k(e[2]),ee=b(),F=_("p"),pe=k("Income: "),te=k(e[0]),ne=b(),H=_("p"),de=k("Total Taxes paid: "),le=k(e[3]),re=b(),K=_("p"),_e=k("After Tax Income: "),se=k(e[4]),P(s,"for","fname"),P(r,"type","number"),P(r,"class","income-entry svelte-7fxvud"),P(a,"for","pin"),e[1]===void 0&&J(()=>e[7].call(d)),P(w,"for","pin"),e[2]===void 0&&J(()=>e[8].call(h)),P(t,"class","index svelte-7fxvud")},m(l,c){$(l,t,c),u(t,n),u(n,s),u(n,o),u(n,r),be(r,e[0]),u(n,p),u(n,A),u(n,O),u(n,a),u(n,I),u(n,d);for(let i=0;i<g.length;i+=1)g[i].m(d,null);R(d,e[1]),u(n,f),u(n,w),u(n,T),u(n,h);for(let i=0;i<m.length;i+=1)m[i].m(h,null);R(h,e[2]),u(n,S),u(n,N),u(n,y),u(n,E),$(l,V,c),$(l,q,c),u(q,ce),u(q,W),$(l,X,c),$(l,B,c),u(B,ae),u(B,Z),$(l,ee,c),$(l,F,c),u(F,pe),u(F,te),$(l,ne,c),$(l,H,c),u(H,de),u(H,le),$(l,re,c),$(l,K,c),u(K,_e),u(K,se),oe||(he=[M(r,"input",e[6]),M(r,"input",e[5]),M(d,"change",e[7]),M(d,"change",e[5]),M(h,"change",e[8]),M(h,"change",e[5])],oe=!0)},p(l,[c]){if(c&1&&Le(r.value)!==l[0]&&be(r,l[0]),c&0){x=ke;let i;for(i=0;i<x.length;i+=1){const z=Te(l,x,i);g[i]?g[i].p(z,c):(g[i]=Ee(z),g[i].c(),g[i].m(d,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=x.length}if(c&2&&R(d,l[1]),c&0){C=we;let i;for(i=0;i<C.length;i+=1){const z=Se(l,C,i);m[i]?m[i].p(z,c):(m[i]=Oe(z),m[i].c(),m[i].m(h,null))}for(;i<m.length;i+=1)m[i].d(1);m.length=C.length}c&4&&R(h,l[2]),c&2&&D(W,l[1]),c&4&&D(Z,l[2]),c&1&&D(te,l[0]),c&8&&D(le,l[3]),c&16&&D(se,l[4])},i:L,o:L,d(l){l&&v(t),me(g,l),me(m,l),l&&v(V),l&&v(q),l&&v(X),l&&v(B),l&&v(ee),l&&v(F),l&&v(ne),l&&v(H),l&&v(re),l&&v(K),oe=!1,Q(he)}}}function Xe(e,t,n){let s=0,o="2022",r="single",p=0,A=0;function O(){let f=s,w=0,T=Ve[o],h=T.percents,S=T[r];T.budget_percents;for(let E=1;E<S.length;E++)if(f>=S[E])w+=(S[E]-S[E-1])*h[E-1];else{w+=(f-S[E-1])*h[E-1];break}f>S[S.length-1]&&(w+=(f-S[S.length-1])*h[h.length-1]);let N=0;f>T.ss?N=T.ss*.062:N=f*.062;let y=0;r=="single"||r=="head"?f>2e5?(y=f*.0145,y+=(f-2e5)*.0235):y=f*.0145:r=="seperate"?f>125e3?(y=f*.0145,y+=(f-125e3)*.0235):y=f*.0145:r=="together"&&(f>25e4?(y=f*.0145,y+=(f-25e4)*.0235):y=f*.0145),n(3,p=w+N+y),n(4,A=f-p)}function a(){s=Le(this.value),n(0,s)}function I(){o=ve(this),n(1,o)}function d(){r=ve(this),n(2,r)}return[s,o,r,p,A,O,a,I,d]}class Ze extends De{constructor(t){super(),ze(this,t,Xe,We,xe,{})}}new Ze({target:document.getElementById("app")});

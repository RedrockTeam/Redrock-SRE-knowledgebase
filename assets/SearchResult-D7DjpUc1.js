import{u as Y,d as se,e as le,f as B,g as ae,P as te,t as ue,r as re,h as F,i as Q,j as ie,w as M,k as l,l as ne,R as j,m as oe,n as ce,p as ve,C as pe,q as de,s as he,v as ye,x as me,y as xe,z as ge,A as fe,B as _,D as I,E as He,F as q,G as Re}from"./app-CERPX3WB.js";const ke=["/","/linux/","/linux/env-conf/","/linux/linux-base/","/linux/linux-base/linux-concepts/","/linux/linux-base/linux-concepts/how-to-learn-linux.html","/linux/linux-base/linux-concepts/what-is-linux.html","/linux/linux-base/server-concepts/","/404.html"],we="SEARCH_PRO_QUERY_HISTORY",x=Y(we,[]),Qe=()=>{const{queryHistoryCount:a}=q,t=a>0;return{enabled:t,queryHistory:x,addQueryHistory:u=>{t&&(x.value=Array.from(new Set([u,...x.value.slice(0,a-1)])))},removeQueryHistory:u=>{x.value=[...x.value.slice(0,u),...x.value.slice(u+1)]}}},P=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,g=Y(qe,[]),be=()=>{const a=U>0;return{enabled:a,resultHistory:g,addResultHistory:t=>{if(a){const u={link:P(t),display:t.display};"header"in t&&(u.header=t.header),g.value=[u,...g.value.slice(0,U-1)]}},removeResultHistory:t=>{g.value=[...g.value.slice(0,t),...g.value.slice(t+1)]}}},Se=a=>{const t=pe(),u=B(),b=de(),i=F(0),R=Q(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:S}=me(),f=He(c=>{const H=c.join(" "),{searchFilter:C=d=>d,splitWord:D,suggestionsFilter:O,...m}=t.value;H?(i.value+=1,y(c.join(" "),u.value,m).then(d=>C(d,H,u.value,b.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},q.searchDelay-q.suggestDelay);M([a,u],([c])=>f(c),{immediate:!0}),xe(()=>{S()})}),{isSearching:R,results:h}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:t}){const u=le(),b=B(),i=ae(te),{enabled:R,addQueryHistory:h,queryHistory:y,removeQueryHistory:S}=Qe(),{enabled:f,resultHistory:c,addResultHistory:H,removeResultHistory:C}=be(),D=R||f,O=ue(a,"queries"),{results:m,isSearching:d}=Se(O),r=re({isQuery:!0,index:0}),v=F(0),p=F(0),T=Q(()=>D&&(y.value.length>0||c.value.length>0)),L=Q(()=>m.value.length>0),A=Q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=r;s===0?(r.isQuery=!e,r.index=e?c.value.length-1:y.value.length-1):r.index=s-1},G=()=>{const{isQuery:e,index:s}=r;s===(e?y.value.length-1:c.value.length-1)?(r.isQuery=!e,r.index=0):r.index=s+1},V=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=A.value.contents.length-1},J=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<A.value.contents.length-1?p.value+=1:J()},N=()=>{p.value>0?p.value-=1:V()},E=e=>e.map(s=>Re(s)?s:l(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[n,w=""]=fe(s)?s[b.value].split("$content"):s.split("$content");return e.display.map(o=>l("div",E([n,...o,w])))}return e.display.map(s=>l("div",E(s)))},k=()=>{v.value=0,p.value=0,t("updateQuery",""),t("close")},X=()=>R?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>l("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===s}],onClick:()=>{t("updateQuery",e)}},[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),S(s)}})]))])):null,Z=()=>f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>l(j,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===s}],onClick:()=>{k()}},()=>[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(n=>E(n)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),C(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=A.value.contents[p.value];h(a.queries.join(" ")),H(s),u.push(P(s)),k()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=r;r.isQuery?(t("updateQuery",y.value[s]),e.preventDefault()):(u.push(c.value[s].link),k())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!T.value}],id:"search-pro-results"},a.queries.length?d.value?l(ne,{hint:i.value.searching}):L.value?l("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const w=v.value===n;return l("li",{class:["search-pro-result-list-item",{active:w}]},[l("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((o,ee)=>{const $=w&&p.value===ee;return l(j,{to:P(o),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{h(a.queries.join(" ")),H(o),k()}},()=>[o.type==="text"?null:l(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?l("div",{class:"content-header"},o.header):null,l("div",W(o))])])})])})):i.value.emptyResult:D?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};

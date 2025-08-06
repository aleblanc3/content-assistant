import{$ as K,$a as U,A as Zt,Aa as ap,Ab as J,B as er,Ba as sp,Bb as D,C as Hn,Ca as lp,Cb as pt,D as Rl,Da as cp,Db as nt,E as Zd,Ea as up,Fa as dp,Fb as pe,G as Qd,Ga as pp,Gb as Gn,H as Ml,Ha as Di,Hb as ee,I as Xd,Ia as Aa,Ib as te,J as at,Ja as hp,Jb as Kl,K as Jd,Ka as fp,Kb as yp,L as st,La as y,Lb as Ut,M as le,Ma as xi,Mb as De,N as hn,Na as nr,Nb as $e,O as I,Oa as mp,Ob as vt,P as ie,Pa as $t,Pb as _p,Q as ep,Qa as B,Qb as rr,R as Z,Ra as gp,Rb as or,S as Ll,Sa as Ei,Sb as ar,T as z,Ta as Vl,Tb as ue,U as S,Ub as Cp,V as zn,Va as vp,Vb as Vt,Wa as Ia,Wb as Fa,X as tp,Xa as W,Y as qn,Ya as re,Z as Nt,Za as ne,Zb as Ra,_ as Qe,_a as ka,a as Wd,aa as Y,ac as wp,b as Gd,ba as je,bb as k,c as Kd,ca as R,cb as jl,cc as Me,d as Il,da as Ol,db as ir,dc as Le,e as kl,ea as Qt,eb as bp,f as Je,fa as Pl,fb as oo,fc as mn,g as Pt,gb as Hl,gc as Sp,h as An,ha as Ta,hb as zl,i as Ge,ia as G,ib as M,ic as Ct,j as q,ja as gt,jb as b,jc as Dp,k as to,ka as Nl,kb as Wn,kc as xp,l as jn,la as fn,lb as _t,lc as Ep,m as Yd,ma as dt,mb as Xt,mc as j,na as Be,nb as Q,nc as wt,oa as np,ob as lt,oc as St,p as me,pa as Bl,pb as ql,pc as Dt,q as xa,qa as ip,qb as Wl,qc as ao,r as mt,ra as Bt,rb as Gl,rc as Tp,s as no,sb as x,t as io,ta as $l,tb as T,u as Ji,ua as rp,ub as L,uc as so,v as Ea,va as Ul,vb as et,vc as Ti,w as pn,wa as op,wb as tt,x as wi,xa as ro,xb as He,xc as Kn,y as Yt,ya as Si,yb as Ae,yc as Ma,z as Fl,za as tr,zc as Ai}from"./chunk-H7RCGQRR.js";import{a as E,b as _e,e as qb,f as Wb,h as Ce}from"./chunk-C3GRVDOV.js";var Am=qb((Tm,_u)=>{"use strict";(function(t){function i(){var n=t();return n.default||n}if(typeof Tm=="object"&&typeof _u=="object")_u.exports=i();else if(typeof define=="function"&&define.amd)define(i);else{var e=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:this||{};e.prettierPlugins=e.prettierPlugins||{},e.prettierPlugins.html=i()}})(function(){"use strict";var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,r=o=>{throw TypeError(o)},s=(o,a,c)=>a in o?t(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c,l=(o,a)=>{for(var c in a)t(o,c,{get:a[c],enumerable:!0})},d=(o,a,c,u)=>{if(a&&typeof a=="object"||typeof a=="function")for(let p of e(a))!n.call(o,p)&&p!==c&&t(o,p,{get:()=>a[p],enumerable:!(u=i(a,p))||u.enumerable});return o},h=o=>d(t({},"__esModule",{value:!0}),o),m=(o,a,c)=>s(o,typeof a!="symbol"?a+"":a,c),v=(o,a,c)=>a.has(o)||r("Cannot "+c),C=(o,a,c)=>(v(o,a,"read from private field"),c?c.call(o):a.get(o)),w=(o,a,c)=>a.has(o)?r("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(o):a.set(o,c),A=(o,a,c,u)=>(v(o,a,"write to private field"),u?u.call(o,c):a.set(o,c),c),$={};l($,{languages:()=>Rv,options:()=>Lv,parsers:()=>md,printers:()=>Hb});var P=(o,a,c,u)=>{if(!(o&&a==null))return a.replaceAll?a.replaceAll(c,u):c.global?a.replace(c,u):a.split(c).join(u)},O=P,ge="string",Ee="array",ve="cursor",Oe="indent",Rt="align",yt="trim",On="group",Dn="fill",Pn="if-break",Nn="indent-if-break",hi="line-suffix",fi="line-suffix-boundary",Mt="line",Bn="label",$n="break-parent",mi=new Set([ve,Oe,Rt,yt,On,Dn,Pn,Nn,hi,fi,Mt,Bn,$n]),$i=(o,a,c)=>{if(!(o&&a==null))return Array.isArray(a)||typeof a=="string"?a[c<0?a.length+c:c]:a.at(c)},dn=$i;function Ui(o){if(typeof o=="string")return ge;if(Array.isArray(o))return Ee;if(!o)return;let{type:a}=o;if(mi.has(a))return a}var gi=Ui,Vi=o=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(o);function ji(o){let a=o===null?"null":typeof o;if(a!=="string"&&a!=="object")return`Unexpected doc '${a}', 
Expected it to be 'string' or 'object'.`;if(gi(o))throw new Error("doc is valid.");let c=Object.prototype.toString.call(o);if(c!=="[object Object]")return`Unexpected doc '${c}'.`;let u=Vi([...mi].map(p=>`'${p}'`));return`Unexpected doc.type '${o.type}'.
Expected it to be ${u}.`}var Xo=class extends Error{name="InvalidDocError";constructor(o){super(ji(o)),this.doc=o}},Jo=Xo;function $r(o,a){if(typeof o=="string")return a(o);let c=new Map;return u(o);function u(f){if(c.has(f))return c.get(f);let g=p(f);return c.set(f,g),g}function p(f){switch(gi(f)){case Ee:return a(f.map(u));case Dn:return a(_e(E({},f),{parts:f.parts.map(u)}));case Pn:return a(_e(E({},f),{breakContents:u(f.breakContents),flatContents:u(f.flatContents)}));case On:{let{expandedStates:g,contents:_}=f;return g?(g=g.map(u),_=g[0]):_=u(_),a(_e(E({},f),{contents:_,expandedStates:g}))}case Rt:case Oe:case Nn:case Bn:case hi:return a(_e(E({},f),{contents:u(f.contents)}));case ge:case ve:case yt:case fi:case Mt:case $n:return a(f);default:throw new Jo(f)}}}function ft(o,a=eg){return $r(o,c=>typeof c=="string"?zi(a,c.split(`
`)):c)}var Ur=()=>{},xn=Ur,ea=Ur,Qs=Ur;function Lt(o){return xn(o),{type:Oe,contents:o}}function ta(o,a){return xn(a),{type:Rt,contents:a,n:o}}function Ne(o,a={}){return xn(o),ea(a.expandedStates,!0),{type:On,id:a.id,contents:o,break:!!a.shouldBreak,expandedStates:a.expandedStates}}function Xs(o){return ta(Number.NEGATIVE_INFINITY,o)}function Js(o){return ta({type:"root"},o)}function na(o){return Qs(o),{type:Dn,parts:o}}function Hi(o,a="",c={}){return xn(o),a!==""&&xn(a),{type:Pn,breakContents:o,flatContents:a,groupId:c.groupId}}function el(o,a){return xn(o),{type:Nn,contents:o,groupId:a.groupId,negate:a.negate}}var vi={type:$n},tl={type:Mt,hard:!0},nl={type:Mt,hard:!0,literal:!0},Pe={type:Mt},Ze={type:Mt,soft:!0},Fe=[tl,vi],eg=[nl,vi];function zi(o,a){xn(o),ea(a);let c=[];for(let u=0;u<a.length;u++)u!==0&&c.push(o),c.push(a[u]);return c}var ia="'",Tu='"';function tg(o,a){let c=a===!0||a===ia?ia:Tu,u=c===ia?Tu:ia,p=0,f=0;for(let g of o)g===c?p++:g===u&&f++;return p>f?u:c}var ng=tg;function ig(o){if(typeof o!="string")throw new TypeError("Expected a string");return o.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var Wt,rg=class{constructor(o){w(this,Wt),A(this,Wt,new Set(o))}getLeadingWhitespaceCount(o){let a=C(this,Wt),c=0;for(let u=0;u<o.length&&a.has(o.charAt(u));u++)c++;return c}getTrailingWhitespaceCount(o){let a=C(this,Wt),c=0;for(let u=o.length-1;u>=0&&a.has(o.charAt(u));u--)c++;return c}getLeadingWhitespace(o){let a=this.getLeadingWhitespaceCount(o);return o.slice(0,a)}getTrailingWhitespace(o){let a=this.getTrailingWhitespaceCount(o);return o.slice(o.length-a)}hasLeadingWhitespace(o){return C(this,Wt).has(o.charAt(0))}hasTrailingWhitespace(o){return C(this,Wt).has(dn(!1,o,-1))}trimStart(o){let a=this.getLeadingWhitespaceCount(o);return o.slice(a)}trimEnd(o){let a=this.getTrailingWhitespaceCount(o);return o.slice(0,o.length-a)}trim(o){return this.trimEnd(this.trimStart(o))}split(o,a=!1){let c=`[${ig([...C(this,Wt)].join(""))}]+`,u=new RegExp(a?`(${c})`:c,"u");return o.split(u)}hasWhitespaceCharacter(o){let a=C(this,Wt);return Array.prototype.some.call(o,c=>a.has(c))}hasNonWhitespaceCharacter(o){let a=C(this,Wt);return Array.prototype.some.call(o,c=>!a.has(c))}isWhitespaceOnly(o){let a=C(this,Wt);return Array.prototype.every.call(o,c=>a.has(c))}};Wt=new WeakMap;var og=rg,ag=["	",`
`,"\f","\r"," "],sg=new og(ag),En=sg,lg=class extends Error{name="UnexpectedNodeError";constructor(o,a,c="type"){super(`Unexpected ${a} node ${c}: ${JSON.stringify(o[c])}.`),this.node=o}},cg=lg;function ug(o){return o?.type==="front-matter"}var ra=ug,dg=new Set(["sourceSpan","startSourceSpan","endSourceSpan","nameSpan","valueSpan","keySpan","tagDefinition","tokens","valueTokens","switchValueSourceSpan","expSourceSpan","valueSourceSpan"]),pg=new Set(["if","else if","for","switch","case"]);function Au(o,a){var c;if(o.type==="text"||o.type==="comment"||ra(o)||o.type==="yaml"||o.type==="toml")return null;if(o.type==="attribute"&&delete a.value,o.type==="docType"&&delete a.value,o.type==="angularControlFlowBlock"&&(c=o.parameters)!=null&&c.children)for(let u of a.parameters.children)pg.has(o.name)?delete u.expression:u.expression=u.expression.trim();o.type==="angularIcuExpression"&&(a.switchValue=o.switchValue.trim()),o.type==="angularLetDeclarationInitializer"&&delete a.value}Au.ignoredProperties=dg;var hg=Au;function fg(o,a){return Ce(this,null,function*(){if(o.language==="yaml"){let c=o.value.trim(),u=c?yield a(c,{parser:"yaml"}):"";return Js([o.startDelimiter,o.explicitLanguage,Fe,u,u?Fe:"",o.endDelimiter])}})}var mg=fg;function oa(o,a=!0){return[Lt([Ze,o]),a?Ze:""]}function qi(o,a){let c=o.type==="NGRoot"?o.node.type==="NGMicrosyntax"&&o.node.body.length===1&&o.node.body[0].type==="NGMicrosyntaxExpression"?o.node.body[0].expression:o.node:o.type==="JsExpressionRoot"?o.node:o;return c&&(c.type==="ObjectExpression"||c.type==="ArrayExpression"||(a.parser==="__vue_expression"||a.parser==="__vue_ts_expression")&&(c.type==="TemplateLiteral"||c.type==="StringLiteral"))}function Gt(o,a,c,u){return Ce(this,null,function*(){c=E({__isInHtmlAttribute:!0,__embeddedInHtml:!0},c);let p=!0;u&&(c.__onHtmlBindingRoot=(g,_)=>{p=u(g,_)});let f=yield a(o,c,a);return p?Ne(f):oa(f)})}function gg(o,a,c,u){let{node:p}=c,f=u.originalText.slice(p.sourceSpan.start.offset,p.sourceSpan.end.offset);return/^\s*$/u.test(f)?"":Gt(f,o,{parser:"__ng_directive",__isInHtmlAttribute:!1},qi)}var vg=gg,bg=(o,a)=>{if(!(o&&a==null))return a.toReversed||!Array.isArray(a)?a.toReversed():[...a].reverse()},yg=bg;function _g(o){return Array.isArray(o)&&o.length>0}var il=_g,Iu,ku,Fu,Ru,Mu,Cg=((Iu=globalThis.Deno)==null?void 0:Iu.build.os)==="windows"||((Fu=(ku=globalThis.navigator)==null?void 0:ku.platform)==null?void 0:Fu.startsWith("Win"))||((Mu=(Ru=globalThis.process)==null?void 0:Ru.platform)==null?void 0:Mu.startsWith("win"))||!1;function Lu(o){if(o=o instanceof URL?o:new URL(o),o.protocol!=="file:")throw new TypeError(`URL must be a file URL: received "${o.protocol}"`);return o}function wg(o){return o=Lu(o),decodeURIComponent(o.pathname.replace(/%(?![0-9A-Fa-f]{2})/g,"%25"))}function Sg(o){o=Lu(o);let a=decodeURIComponent(o.pathname.replace(/\//g,"\\").replace(/%(?![0-9A-Fa-f]{2})/g,"%25")).replace(/^\\*([A-Za-z]:)(\\|$)/,"$1\\");return o.hostname!==""&&(a=`\\\\${o.hostname}${a}`),a}function Dg(o){return Cg?Sg(o):wg(o)}var xg=Dg,Eg=o=>String(o).split(/[/\\]/u).pop();function Ou(o,a){if(!a)return;let c=Eg(a).toLowerCase();return o.find(({filenames:u})=>u?.some(p=>p.toLowerCase()===c))??o.find(({extensions:u})=>u?.some(p=>c.endsWith(p)))}function Tg(o,a){if(a)return o.find(({name:c})=>c.toLowerCase()===a)??o.find(({aliases:c})=>c?.includes(a))??o.find(({extensions:c})=>c?.includes(`.${a}`))}function Pu(o,a){if(a){if(String(a).startsWith("file:"))try{a=xg(a)}catch{return}if(typeof a=="string")return o.find(({isSupported:c})=>c?.({filepath:a}))}}function Ag(o,a){let c=yg(!1,o.plugins).flatMap(p=>p.languages??[]),u=Tg(c,a.language)??Ou(c,a.physicalFile)??Ou(c,a.file)??Pu(c,a.physicalFile)??Pu(c,a.file)??(a.physicalFile,void 0);return u?.parsers[0]}var aa=Ag,Ig="inline",Nu={area:"none",base:"none",basefont:"none",datalist:"none",head:"none",link:"none",meta:"none",noembed:"none",noframes:"none",param:"block",rp:"none",script:"block",style:"none",template:"inline",title:"none",html:"block",body:"block",address:"block",blockquote:"block",center:"block",dialog:"block",div:"block",figure:"block",figcaption:"block",footer:"block",form:"block",header:"block",hr:"block",legend:"block",listing:"block",main:"block",p:"block",plaintext:"block",pre:"block",search:"block",xmp:"block",slot:"contents",ruby:"ruby",rt:"ruby-text",article:"block",aside:"block",h1:"block",h2:"block",h3:"block",h4:"block",h5:"block",h6:"block",hgroup:"block",nav:"block",section:"block",dir:"block",dd:"block",dl:"block",dt:"block",menu:"block",ol:"block",ul:"block",li:"list-item",table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell",input:"inline-block",button:"inline-block",fieldset:"block",details:"block",summary:"block",marquee:"inline-block",source:"block",track:"block",meter:"inline-block",progress:"inline-block",object:"inline-block",video:"inline-block",audio:"inline-block",select:"inline-block",option:"block",optgroup:"block"},kg="normal",Bu={listing:"pre",plaintext:"pre",pre:"pre",xmp:"pre",nobr:"nowrap",table:"initial",textarea:"pre-wrap"};function Fg(o){return o.type==="element"&&!o.hasExplicitNamespace&&!["html","svg"].includes(o.namespace)}var Vr=Fg,Rg=o=>O(!1,o,/^[\t\f\r ]*\n/gu,""),$u=o=>Rg(En.trimEnd(o)),Mg=o=>{let a=o,c=En.getLeadingWhitespace(a);c&&(a=a.slice(c.length));let u=En.getTrailingWhitespace(a);return u&&(a=a.slice(0,-u.length)),{leadingWhitespace:c,trailingWhitespace:u,text:a}};function Uu(o,a){return!!(o.type==="ieConditionalComment"&&o.lastChild&&!o.lastChild.isSelfClosing&&!o.lastChild.endSourceSpan||o.type==="ieConditionalComment"&&!o.complete||Wi(o)&&o.children.some(c=>c.type!=="text"&&c.type!=="interpolation")||al(o,a)&&!Tn(o,a)&&o.type!=="interpolation")}function sa(o){return o.type==="attribute"||!o.parent||!o.prev?!1:Lg(o.prev)}function Lg(o){return o.type==="comment"&&o.value.trim()==="prettier-ignore"}function Ot(o){return o.type==="text"||o.type==="comment"}function Tn(o,a){return o.type==="element"&&(o.fullName==="script"||o.fullName==="style"||o.fullName==="svg:style"||o.fullName==="svg:script"||o.fullName==="mj-style"&&a.parser==="mjml"||Vr(o)&&(o.name==="script"||o.name==="style"))}function Og(o,a){return o.children&&!Tn(o,a)}function Pg(o,a){return Tn(o,a)||o.type==="interpolation"||Vu(o)}function Vu(o){return Yu(o).startsWith("pre")}function Ng(o,a){var c,u;let p=f();if(p&&!o.prev&&(u=(c=o.parent)==null?void 0:c.tagDefinition)!=null&&u.ignoreFirstLf)return o.type==="interpolation";return p;function f(){return ra(o)||o.type==="angularControlFlowBlock"?!1:(o.type==="text"||o.type==="interpolation")&&o.prev&&(o.prev.type==="text"||o.prev.type==="interpolation")?!0:!o.parent||o.parent.cssDisplay==="none"?!1:Wi(o.parent)?!0:!(!o.prev&&(o.parent.type==="root"||Wi(o)&&o.parent||Tn(o.parent,a)||ca(o.parent,a)||!Wg(o.parent.cssDisplay))||o.prev&&!Yg(o.prev.cssDisplay))}}function Bg(o,a){return ra(o)||o.type==="angularControlFlowBlock"?!1:(o.type==="text"||o.type==="interpolation")&&o.next&&(o.next.type==="text"||o.next.type==="interpolation")?!0:!o.parent||o.parent.cssDisplay==="none"?!1:Wi(o.parent)?!0:!(!o.next&&(o.parent.type==="root"||Wi(o)&&o.parent||Tn(o.parent,a)||ca(o.parent,a)||!Gg(o.parent.cssDisplay))||o.next&&!Kg(o.next.cssDisplay))}function $g(o,a){return Zg(o.cssDisplay)&&!Tn(o,a)}function la(o){return ra(o)||o.next&&o.sourceSpan.end&&o.sourceSpan.end.line+1<o.next.sourceSpan.start.line}function Ug(o){return ju(o)||o.type==="element"&&o.children.length>0&&(["body","script","style"].includes(o.name)||o.children.some(a=>jg(a)))||o.firstChild&&o.firstChild===o.lastChild&&o.firstChild.type!=="text"&&zu(o.firstChild)&&(!o.lastChild.isTrailingSpaceSensitive||qu(o.lastChild))}function ju(o){return o.type==="element"&&o.children.length>0&&(["html","head","ul","ol","select"].includes(o.name)||o.cssDisplay.startsWith("table")&&o.cssDisplay!=="table-cell")}function rl(o){return Wu(o)||o.prev&&Vg(o.prev)||Hu(o)}function Vg(o){return Wu(o)||o.type==="element"&&o.fullName==="br"||Hu(o)}function Hu(o){return zu(o)&&qu(o)}function zu(o){return o.hasLeadingSpaces&&(o.prev?o.prev.sourceSpan.end.line<o.sourceSpan.start.line:o.parent.type==="root"||o.parent.startSourceSpan.end.line<o.sourceSpan.start.line)}function qu(o){return o.hasTrailingSpaces&&(o.next?o.next.sourceSpan.start.line>o.sourceSpan.end.line:o.parent.type==="root"||o.parent.endSourceSpan&&o.parent.endSourceSpan.start.line>o.sourceSpan.end.line)}function Wu(o){switch(o.type){case"ieConditionalComment":case"comment":case"directive":return!0;case"element":return["script","select"].includes(o.name)}return!1}function ol(o){return o.lastChild?ol(o.lastChild):o}function jg(o){var a;return(a=o.children)==null?void 0:a.some(c=>c.type!=="text")}function Gu(o){if(o)switch(o){case"module":case"text/javascript":case"text/babel":case"text/jsx":case"application/javascript":return"babel";case"application/x-typescript":return"typescript";case"text/markdown":return"markdown";case"text/html":return"html";case"text/x-handlebars-template":return"glimmer";default:if(o.endsWith("json")||o.endsWith("importmap")||o==="speculationrules")return"json"}}function Hg(o,a){let{name:c,attrMap:u}=o;if(c!=="script"||Object.prototype.hasOwnProperty.call(u,"src"))return;let{type:p,lang:f}=o.attrMap;return!f&&!p?"babel":aa(a,{language:f})??Gu(p)}function zg(o,a){if(!al(o,a))return;let{attrMap:c}=o;if(Object.prototype.hasOwnProperty.call(c,"src"))return;let{type:u,lang:p}=c;return aa(a,{language:p})??Gu(u)}function qg(o,a){if(o.name==="style"){let{lang:c}=o.attrMap;return c?aa(a,{language:c}):"css"}if(o.name==="mj-style"&&a.parser==="mjml")return"css"}function Ku(o,a){return Hg(o,a)??qg(o,a)??zg(o,a)}function jr(o){return o==="block"||o==="list-item"||o.startsWith("table")}function Wg(o){return!jr(o)&&o!=="inline-block"}function Gg(o){return!jr(o)&&o!=="inline-block"}function Kg(o){return!jr(o)}function Yg(o){return!jr(o)}function Zg(o){return!jr(o)&&o!=="inline-block"}function Wi(o){return Yu(o).startsWith("pre")}function Qg(o,a){let c=o;for(;c;){if(a(c))return!0;c=c.parent}return!1}function Xg(o,a){var c;if(Gi(o,a))return"block";if(((c=o.prev)==null?void 0:c.type)==="comment"){let p=o.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);if(p)return p[1]}let u=!1;if(o.type==="element"&&o.namespace==="svg")if(Qg(o,p=>p.fullName==="svg:foreignObject"))u=!0;else return o.name==="svg"?"inline-block":"block";switch(a.htmlWhitespaceSensitivity){case"strict":return"inline";case"ignore":return"block";default:if(o.type==="element"&&(!o.namespace||u||Vr(o))&&Object.prototype.hasOwnProperty.call(Nu,o.name))return Nu[o.name]}return Ig}function Yu(o){return o.type==="element"&&(!o.namespace||Vr(o))&&Object.prototype.hasOwnProperty.call(Bu,o.name)?Bu[o.name]:kg}function Jg(o){let a=Number.POSITIVE_INFINITY;for(let c of o.split(`
`)){if(c.length===0)continue;let u=En.getLeadingWhitespaceCount(c);if(u===0)return 0;c.length!==u&&u<a&&(a=u)}return a===Number.POSITIVE_INFINITY?0:a}function Zu(o,a=Jg(o)){return a===0?o:o.split(`
`).map(c=>c.slice(a)).join(`
`)}function Qu(o){return O(!1,O(!1,o,"&apos;","'"),"&quot;",'"')}function Un(o){return Qu(o.value)}var e0=new Set(["template","style","script"]);function ca(o,a){return Gi(o,a)&&!e0.has(o.fullName)}function Gi(o,a){return a.parser==="vue"&&o.type==="element"&&o.parent.type==="root"&&o.fullName.toLowerCase()!=="html"}function al(o,a){return Gi(o,a)&&(ca(o,a)||o.attrMap.lang&&o.attrMap.lang!=="html")}function t0(o){let a=o.fullName;return a.charAt(0)==="#"||a==="slot-scope"||a==="v-slot"||a.startsWith("v-slot:")}function n0(o,a){let c=o.parent;if(!Gi(c,a))return!1;let u=c.fullName,p=o.fullName;return u==="script"&&p==="setup"||u==="style"&&p==="vars"}function Xu(o,a=o.value){return o.parent.isWhitespaceSensitive?o.parent.isIndentationSensitive?ft(a):ft(Zu($u(a)),Fe):zi(Pe,En.split(a))}function Ju(o,a){return Gi(o,a)&&o.name==="script"}var ed=/\{\{(.+?)\}\}/su;function i0(o,a){return Ce(this,null,function*(){let c=[];for(let[u,p]of o.split(ed).entries())if(u%2===0)c.push(ft(p));else try{c.push(Ne(["{{",Lt([Pe,yield Gt(p,a,{parser:"__ng_interpolation",__isInHtmlInterpolation:!0})]),Pe,"}}"]))}catch{c.push("{{",ft(p),"}}")}return c})}function sl({parser:o}){return(a,c,u)=>Gt(Un(u.node),a,{parser:o},qi)}var r0=sl({parser:"__ng_action"}),o0=sl({parser:"__ng_binding"}),a0=sl({parser:"__ng_directive"});function s0(o,a){if(a.parser!=="angular")return;let{node:c}=o,u=c.fullName;if(u.startsWith("(")&&u.endsWith(")")||u.startsWith("on-"))return r0;if(u.startsWith("[")&&u.endsWith("]")||/^bind(?:on)?-/u.test(u)||/^ng-(?:if|show|hide|class|style)$/u.test(u))return o0;if(u.startsWith("*"))return a0;let p=Un(c);if(/^i18n(?:-.+)?$/u.test(u))return()=>oa(na(Xu(c,p.trim())),!p.includes("@@"));if(ed.test(p))return f=>i0(p,f)}var l0=s0;function c0(o,a){let{node:c}=o,u=Un(c);if(c.fullName==="class"&&!a.parentParser&&!u.includes("{{"))return()=>u.trim().split(/\s+/u).join(" ")}var u0=c0;function td(o){return o==="	"||o===`
`||o==="\f"||o==="\r"||o===" "}var d0=/^[ \t\n\r\u000c]+/,p0=/^[, \t\n\r\u000c]+/,h0=/^[^ \t\n\r\u000c]+/,f0=/[,]+$/,nd=/^\d+$/,m0=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function g0(o){let a=o.length,c,u,p,f,g,_=0,F;function H(he){let Re,qe=he.exec(o.substring(_));if(qe)return[Re]=qe,_+=Re.length,Re}let N=[];for(;;){if(H(p0),_>=a){if(N.length===0)throw new Error("Must contain one or more image candidate strings.");return N}F=_,c=H(h0),u=[],c.slice(-1)===","?(c=c.replace(f0,""),se()):be()}function be(){for(H(d0),p="",f="in descriptor";;){if(g=o.charAt(_),f==="in descriptor")if(td(g))p&&(u.push(p),p="",f="after descriptor");else if(g===","){_+=1,p&&u.push(p),se();return}else if(g==="(")p+=g,f="in parens";else if(g===""){p&&u.push(p),se();return}else p+=g;else if(f==="in parens")if(g===")")p+=g,f="in descriptor";else if(g===""){u.push(p),se();return}else p+=g;else if(f==="after descriptor"&&!td(g))if(g===""){se();return}else f="in descriptor",_-=1;_+=1}}function se(){let he=!1,Re,qe,Xe,ot,V={},fe,We,Ve,ut,Xi;for(ot=0;ot<u.length;ot++)fe=u[ot],We=fe[fe.length-1],Ve=fe.substring(0,fe.length-1),ut=parseInt(Ve,10),Xi=parseFloat(Ve),nd.test(Ve)&&We==="w"?((Re||qe)&&(he=!0),ut===0?he=!0:Re=ut):m0.test(Ve)&&We==="x"?((Re||qe||Xe)&&(he=!0),Xi<0?he=!0:qe=Xi):nd.test(Ve)&&We==="h"?((Xe||qe)&&(he=!0),ut===0?he=!0:Xe=ut):he=!0;if(!he)V.source={value:c,startOffset:F},Re&&(V.width={value:Re}),qe&&(V.density={value:qe}),Xe&&(V.height={value:Xe}),N.push(V);else throw new Error(`Invalid srcset descriptor found in "${o}" at "${fe}".`)}}var v0=g0;function b0(o){if(o.node.fullName==="srcset"&&(o.parent.fullName==="img"||o.parent.fullName==="source"))return()=>_0(Un(o.node))}var id={width:"w",height:"h",density:"x"},y0=Object.keys(id);function _0(o){let a=v0(o),c=y0.filter(N=>a.some(be=>Object.prototype.hasOwnProperty.call(be,N)));if(c.length>1)throw new Error("Mixed descriptor in srcset is not supported");let[u]=c,p=id[u],f=a.map(N=>N.source.value),g=Math.max(...f.map(N=>N.length)),_=a.map(N=>N[u]?String(N[u].value):""),F=_.map(N=>{let be=N.indexOf(".");return be===-1?N.length:be}),H=Math.max(...F);return oa(zi([",",Pe],f.map((N,be)=>{let se=[N],he=_[be];if(he){let Re=g-N.length+1,qe=H-F[be],Xe=" ".repeat(Re+qe);se.push(Hi(Xe," "),he+p)}return se})))}var C0=b0;function w0(o,a){let{node:c}=o,u=Un(o.node).trim();if(c.fullName==="style"&&!a.parentParser&&!u.includes("{{"))return p=>Ce(null,null,function*(){return oa(yield p(u,{parser:"css",__isHTMLStyleAttribute:!0}))})}var ll=new WeakMap;function S0(o,a){let{root:c}=o;return ll.has(c)||ll.set(c,c.children.some(u=>Ju(u,a)&&["ts","typescript"].includes(u.attrMap.lang))),ll.get(c)}var cl=S0;function D0(o,a,c){let{node:u}=c,p=Un(u);return Gt(`type T<${p}> = any`,o,{parser:"babel-ts",__isEmbeddedTypescriptGenericParameters:!0},qi)}function x0(o,a,{parseWithTs:c}){return Gt(`function _(${o}) {}`,a,{parser:c?"babel-ts":"babel",__isVueBindings:!0})}function E0(o,a,c,u){return Ce(this,null,function*(){let p=Un(c.node),{left:f,operator:g,right:_}=T0(p),F=cl(c,u);return[Ne(yield Gt(`function _(${f}) {}`,o,{parser:F?"babel-ts":"babel",__isVueForBindingLeft:!0}))," ",g," ",yield Gt(_,o,{parser:F?"__ts_expression":"__js_expression"})]})}function T0(o){let a=/(.*?)\s+(in|of)\s+(.*)/su,c=/,([^,\]}]*)(?:,([^,\]}]*))?$/u,u=/^\(|\)$/gu,p=o.match(a);if(!p)return;let f={};if(f.for=p[3].trim(),!f.for)return;let g=O(!1,p[1].trim(),u,""),_=g.match(c);_?(f.alias=g.replace(c,""),f.iterator1=_[1].trim(),_[2]&&(f.iterator2=_[2].trim())):f.alias=g;let F=[f.alias,f.iterator1,f.iterator2];if(!F.some((H,N)=>!H&&(N===0||F.slice(N+1).some(Boolean))))return{left:F.filter(Boolean).join(","),operator:p[2],right:f.for}}function A0(o,a){if(a.parser!=="vue")return;let{node:c}=o,u=c.fullName;if(u==="v-for")return E0;if(u==="generic"&&Ju(c.parent,a))return D0;let p=Un(c),f=cl(o,a);if(t0(c)||n0(c,a))return g=>x0(p,g,{parseWithTs:f});if(u.startsWith("@")||u.startsWith("v-on:"))return g=>I0(p,g,{parseWithTs:f});if(u.startsWith(":")||u.startsWith(".")||u.startsWith("v-bind:"))return g=>k0(p,g,{parseWithTs:f});if(u.startsWith("v-"))return g=>rd(p,g,{parseWithTs:f})}function I0(u,p,f){return Ce(this,arguments,function*(o,a,{parseWithTs:c}){var g;try{return yield rd(o,a,{parseWithTs:c})}catch(_){if(((g=_.cause)==null?void 0:g.code)!=="BABEL_PARSER_SYNTAX_ERROR")throw _}return Gt(o,a,{parser:c?"__vue_ts_event_binding":"__vue_event_binding"},qi)})}function k0(o,a,{parseWithTs:c}){return Gt(o,a,{parser:c?"__vue_ts_expression":"__vue_expression"},qi)}function rd(o,a,{parseWithTs:c}){return Gt(o,a,{parser:c?"__ts_expression":"__js_expression"},qi)}var F0=A0;function R0(o,a){let{node:c}=o;if(c.value){if(/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(a.originalText.slice(c.valueSpan.start.offset,c.valueSpan.end.offset))||a.parser==="lwc"&&c.value.startsWith("{")&&c.value.endsWith("}"))return[c.rawName,"=",c.value];for(let u of[C0,w0,u0,F0,l0]){let p=u(o,a);if(p)return M0(p)}}}function M0(o){return(a,c,u,p)=>Ce(null,null,function*(){let f=yield o(a,c,u,p);if(f)return f=$r(f,g=>typeof g=="string"?O(!1,g,'"',"&quot;"):g),[u.node.rawName,'="',Ne(f),'"']})}var L0=R0,O0=new Proxy(()=>{},{get:()=>O0});function Hr(o){return o.sourceSpan.start.offset}function ua(o){return o.sourceSpan.end.offset}function ul(o,a){return[o.isSelfClosing?"":P0(o,a),zr(o,a)]}function P0(o,a){return o.lastChild&&Gr(o.lastChild)?"":[N0(o,a),dl(o,a)]}function zr(o,a){return(o.next?yi(o.next):Wr(o.parent))?"":[qr(o,a),bi(o,a)]}function N0(o,a){return Wr(o)?qr(o.lastChild,a):""}function bi(o,a){return Gr(o)?dl(o.parent,a):da(o)?hl(o.next,a):""}function dl(o,a){if(od(o,a))return"";switch(o.type){case"ieConditionalComment":return"<!";case"element":if(o.hasHtmComponentClosingTag)return"<//";default:return`</${o.rawName}`}}function qr(o,a){if(od(o,a))return"";switch(o.type){case"ieConditionalComment":case"ieConditionalEndComment":return"[endif]-->";case"ieConditionalStartComment":return"]><!-->";case"interpolation":return"}}";case"angularIcuExpression":return"}";case"element":if(o.isSelfClosing)return"/>";default:return">"}}function od(o,a){return!o.isSelfClosing&&!o.endSourceSpan&&(sa(o)||Uu(o.parent,a))}function yi(o){return o.prev&&o.prev.type!=="docType"&&o.type!=="angularControlFlowBlock"&&!Ot(o.prev)&&o.isLeadingSpaceSensitive&&!o.hasLeadingSpaces}function Wr(o){var a;return((a=o.lastChild)==null?void 0:a.isTrailingSpaceSensitive)&&!o.lastChild.hasTrailingSpaces&&!Ot(ol(o.lastChild))&&!Wi(o)}function Gr(o){return!o.next&&!o.hasTrailingSpaces&&o.isTrailingSpaceSensitive&&Ot(ol(o))}function da(o){return o.next&&!Ot(o.next)&&Ot(o)&&o.isTrailingSpaceSensitive&&!o.hasTrailingSpaces}function B0(o){let a=o.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);return a?a[1]?a[1].split(/\s+/u):!0:!1}function pa(o){return!o.prev&&o.isLeadingSpaceSensitive&&!o.hasLeadingSpaces}function $0(o,a,c){var u;let{node:p}=o;if(!il(p.attrs))return p.isSelfClosing?" ":"";let f=((u=p.prev)==null?void 0:u.type)==="comment"&&B0(p.prev.value),g=typeof f=="boolean"?()=>f:Array.isArray(f)?be=>f.includes(be.rawName):()=>!1,_=o.map(({node:be})=>g(be)?ft(a.originalText.slice(Hr(be),ua(be))):c(),"attrs"),F=p.type==="element"&&p.fullName==="script"&&p.attrs.length===1&&p.attrs[0].fullName==="src"&&p.children.length===0,H=a.singleAttributePerLine&&p.attrs.length>1&&!Gi(p,a)?Fe:Pe,N=[Lt([F?" ":Pe,zi(H,_)])];return p.firstChild&&pa(p.firstChild)||p.isSelfClosing&&Wr(p.parent)||F?N.push(p.isSelfClosing?" ":""):N.push(a.bracketSameLine?p.isSelfClosing?" ":"":p.isSelfClosing?Pe:Ze),N}function U0(o){return o.firstChild&&pa(o.firstChild)?"":fl(o)}function pl(o,a,c){let{node:u}=o;return[Kr(u,a),$0(o,a,c),u.isSelfClosing?"":U0(u)]}function Kr(o,a){return o.prev&&da(o.prev)?"":[_i(o,a),hl(o,a)]}function _i(o,a){return pa(o)?fl(o.parent):yi(o)?qr(o.prev,a):""}var ad="<!doctype";function hl(o,a){switch(o.type){case"ieConditionalComment":case"ieConditionalStartComment":return`<!--[if ${o.condition}`;case"ieConditionalEndComment":return"<!--<!";case"interpolation":return"{{";case"docType":{if(o.value==="html"){let{filepath:u}=a;if(u&&/\.html?$/u.test(u))return ad}let c=Hr(o);return a.originalText.slice(c,c+ad.length)}case"angularIcuExpression":return"{";case"element":if(o.condition)return`<!--[if ${o.condition}]><!--><${o.rawName}`;default:return`<${o.rawName}`}}function fl(o){switch(o.type){case"ieConditionalComment":return"]>";case"element":if(o.condition)return"><!--<![endif]-->";default:return">"}}function V0(o,a){if(!o.endSourceSpan)return"";let c=o.startSourceSpan.end.offset;o.firstChild&&pa(o.firstChild)&&(c-=fl(o).length);let u=o.endSourceSpan.start.offset;return o.lastChild&&Gr(o.lastChild)?u+=dl(o,a).length:Wr(o)&&(u-=qr(o.lastChild,a).length),a.originalText.slice(c,u)}var sd=V0,j0=new Set(["if","else if","for","switch","case"]);function H0(o,a){let{node:c}=o;switch(c.type){case"element":if(Tn(c,a)||c.type==="interpolation")return;if(!c.isSelfClosing&&al(c,a)){let u=Ku(c,a);return u?(p,f)=>Ce(null,null,function*(){let g=sd(c,a),_=/^\s*$/u.test(g),F="";return _||(F=yield p($u(g),{parser:u,__embeddedInHtml:!0}),_=F===""),[_i(c,a),Ne(pl(o,a,f)),_?"":Fe,F,_?"":Fe,ul(c,a),bi(c,a)]}):void 0}break;case"text":if(Tn(c.parent,a)){let u=Ku(c.parent,a);if(u)return p=>Ce(null,null,function*(){let f=u==="markdown"?Zu(c.value.replace(/^[^\S\n]*\n/u,"")):c.value,g={parser:u,__embeddedInHtml:!0};if(a.parser==="html"&&u==="babel"){let _="script",{attrMap:F}=c.parent;F&&(F.type==="module"||(F.type==="text/babel"||F.type==="text/jsx")&&F["data-type"]==="module")&&(_="module"),g.__babelSourceType=_}return[vi,_i(c,a),yield p(f,g),bi(c,a)]})}else if(c.parent.type==="interpolation")return u=>Ce(null,null,function*(){let p={__isInHtmlInterpolation:!0,__embeddedInHtml:!0};return a.parser==="angular"?p.parser="__ng_interpolation":a.parser==="vue"?p.parser=cl(o,a)?"__vue_ts_expression":"__vue_expression":p.parser="__js_expression",[Lt([Pe,yield u(c.value,p)]),c.parent.next&&yi(c.parent.next)?" ":Pe]});break;case"attribute":return L0(o,a);case"front-matter":return u=>mg(c,u);case"angularControlFlowBlockParameters":return j0.has(o.parent.name)?vg:void 0;case"angularLetDeclarationInitializer":return u=>Gt(c.value,u,{parser:"__ng_binding",__isInHtmlAttribute:!1})}}var z0=H0,Yr=null;function Zr(o){if(Yr!==null&&typeof Yr.property){let a=Yr;return Yr=Zr.prototype=null,a}return Yr=Zr.prototype=o??Object.create(null),new Zr}var q0=10;for(let o=0;o<=q0;o++)Zr();function W0(o){return Zr(o)}function G0(o,a="type"){W0(o);function c(u){let p=u[a],f=o[p];if(!Array.isArray(f))throw Object.assign(new Error(`Missing visitor keys for '${p}'.`),{node:u});return f}return c}var K0=G0,Y0={"front-matter":[],root:["children"],element:["attrs","children"],ieConditionalComment:["children"],ieConditionalStartComment:[],ieConditionalEndComment:[],interpolation:["children"],text:["children"],docType:[],comment:[],attribute:[],cdata:[],angularControlFlowBlock:["children","parameters"],angularControlFlowBlockParameters:["children"],angularControlFlowBlockParameter:[],angularLetDeclaration:["init"],angularLetDeclarationInitializer:[],angularIcuExpression:["cases"],angularIcuCase:["expression"]},Z0=Y0,Q0=K0(Z0),X0=Q0,J0="format",ev=/^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u,tv=/^\s*<!--\s*@(?:format|prettier)\s*-->/u;function nv(o){return tv.test(o)}function iv(o){return ev.test(o)}function rv(o){return`<!-- @${J0} -->

${o}`}var ov=new Map([["if",new Set(["else if","else"])],["else if",new Set(["else if","else"])],["for",new Set(["empty"])],["defer",new Set(["placeholder","error","loading"])],["placeholder",new Set(["placeholder","error","loading"])],["error",new Set(["placeholder","error","loading"])],["loading",new Set(["placeholder","error","loading"])]]);function ld(o){let a=ua(o);return o.type==="element"&&!o.endSourceSpan&&il(o.children)?Math.max(a,ld(dn(!1,o.children,-1))):a}function Qr(o,a,c){let u=o.node;if(sa(u)){let p=ld(u);return[_i(u,a),ft(En.trimEnd(a.originalText.slice(Hr(u)+(u.prev&&da(u.prev)?hl(u).length:0),p-(u.next&&yi(u.next)?qr(u,a).length:0)))),bi(u,a)]}return c()}function ha(o,a){return Ot(o)&&Ot(a)?o.isTrailingSpaceSensitive?o.hasTrailingSpaces?rl(a)?Fe:Pe:"":rl(a)?Fe:Ze:da(o)&&(sa(a)||a.firstChild||a.isSelfClosing||a.type==="element"&&a.attrs.length>0)||o.type==="element"&&o.isSelfClosing&&yi(a)?"":!a.isLeadingSpaceSensitive||rl(a)||yi(a)&&o.lastChild&&Gr(o.lastChild)&&o.lastChild.lastChild&&Gr(o.lastChild.lastChild)?Fe:a.hasLeadingSpaces?Pe:Ze}function ml(o,a,c){let{node:u}=o;if(ju(u))return[vi,...o.map(f=>{let g=f.node,_=g.prev?ha(g.prev,g):"";return[_?[_,la(g.prev)?Fe:""]:"",Qr(f,a,c)]},"children")];let p=u.children.map(()=>Symbol(""));return o.map((f,g)=>{let _=f.node;if(Ot(_)){if(_.prev&&Ot(_.prev)){let Re=ha(_.prev,_);if(Re)return la(_.prev)?[Fe,Fe,Qr(f,a,c)]:[Re,Qr(f,a,c)]}return Qr(f,a,c)}let F=[],H=[],N=[],be=[],se=_.prev?ha(_.prev,_):"",he=_.next?ha(_,_.next):"";return se&&(la(_.prev)?F.push(Fe,Fe):se===Fe?F.push(Fe):Ot(_.prev)?H.push(se):H.push(Hi("",Ze,{groupId:p[g-1]}))),he&&(la(_)?Ot(_.next)&&be.push(Fe,Fe):he===Fe?Ot(_.next)&&be.push(Fe):N.push(he)),[...F,Ne([...H,Ne([Qr(f,a,c),...N],{id:p[g]})]),...be]},"children")}function av(o,a,c){let{node:u}=o,p=[];sv(o)&&p.push("} "),p.push("@",u.name),u.parameters&&p.push(" (",Ne(c("parameters")),")"),p.push(" {");let f=cd(u);return u.children.length>0?(u.firstChild.hasLeadingSpaces=!0,u.lastChild.hasTrailingSpaces=!0,p.push(Lt([Fe,ml(o,a,c)])),f&&p.push(Fe,"}")):f&&p.push("}"),Ne(p,{shouldBreak:!0})}function cd(o){var a,c;return!(((a=o.next)==null?void 0:a.type)==="angularControlFlowBlock"&&(c=ov.get(o.name))!=null&&c.has(o.next.name))}function sv(o){let{previous:a}=o;return a?.type==="angularControlFlowBlock"&&!sa(a)&&!cd(a)}function lv(o,a,c){return[Lt([Ze,zi([";",Pe],o.map(c,"children"))]),Ze]}function cv(o,a,c){let{node:u}=o;return[Kr(u,a),Ne([u.switchValue.trim(),", ",u.clause,u.cases.length>0?[",",Lt([Pe,zi(Pe,o.map(c,"cases"))])]:"",Ze]),zr(u,a)]}function uv(o,a,c){let{node:u}=o;return[u.value," {",Ne([Lt([Ze,o.map(({node:p,isLast:f})=>{let g=[c()];return p.type==="text"&&(p.hasLeadingSpaces&&g.unshift(Pe),p.hasTrailingSpaces&&!f&&g.push(Pe)),g},"expression")]),Ze]),"}"]}function dv(o,a,c){let{node:u}=o;if(Uu(u,a))return[_i(u,a),Ne(pl(o,a,c)),ft(sd(u,a)),...ul(u,a),bi(u,a)];let p=u.children.length===1&&(u.firstChild.type==="interpolation"||u.firstChild.type==="angularIcuExpression")&&u.firstChild.isLeadingSpaceSensitive&&!u.firstChild.hasLeadingSpaces&&u.lastChild.isTrailingSpaceSensitive&&!u.lastChild.hasTrailingSpaces,f=Symbol("element-attr-group-id"),g=N=>Ne([Ne(pl(o,a,c),{id:f}),N,ul(u,a)]),_=N=>p?el(N,{groupId:f}):(Tn(u,a)||ca(u,a))&&u.parent.type==="root"&&a.parser==="vue"&&!a.vueIndentScriptAndStyle?N:Lt(N),F=()=>p?Hi(Ze,"",{groupId:f}):u.firstChild.hasLeadingSpaces&&u.firstChild.isLeadingSpaceSensitive?Pe:u.firstChild.type==="text"&&u.isWhitespaceSensitive&&u.isIndentationSensitive?Xs(Ze):Ze,H=()=>(u.next?yi(u.next):Wr(u.parent))?u.lastChild.hasTrailingSpaces&&u.lastChild.isTrailingSpaceSensitive?" ":"":p?Hi(Ze,"",{groupId:f}):u.lastChild.hasTrailingSpaces&&u.lastChild.isTrailingSpaceSensitive?Pe:(u.lastChild.type==="comment"||u.lastChild.type==="text"&&u.isWhitespaceSensitive&&u.isIndentationSensitive)&&new RegExp(`\\n[\\t ]{${a.tabWidth*(o.ancestors.length-1)}}$`,"u").test(u.lastChild.value)?"":Ze;return u.children.length===0?g(u.hasDanglingSpaces&&u.isDanglingSpaceSensitive?Pe:""):g([Ug(u)?vi:"",_([F(),ml(o,a,c)]),H()])}function fa(o){return o>=9&&o<=32||o==160}function gl(o){return 48<=o&&o<=57}function ma(o){return o>=97&&o<=122||o>=65&&o<=90}function pv(o){return o>=97&&o<=102||o>=65&&o<=70||gl(o)}function vl(o){return o===10||o===13}function ud(o){return 48<=o&&o<=55}function bl(o){return o===39||o===34||o===96}var hv=/-+([a-z0-9])/g;function fv(o){return o.replace(hv,(...a)=>a[1].toUpperCase())}var yl=class Sm{constructor(a,c,u,p){this.file=a,this.offset=c,this.line=u,this.col=p}toString(){return this.offset!=null?`${this.file.url}@${this.line}:${this.col}`:this.file.url}moveBy(a){let c=this.file.content,u=c.length,p=this.offset,f=this.line,g=this.col;for(;p>0&&a<0;)if(p--,a++,c.charCodeAt(p)==10){f--;let _=c.substring(0,p-1).lastIndexOf(`
`);g=_>0?p-_:p}else g--;for(;p<u&&a>0;){let _=c.charCodeAt(p);p++,a--,_==10?(f++,g=0):g++}return new Sm(this.file,p,f,g)}getContext(a,c){let u=this.file.content,p=this.offset;if(p!=null){p>u.length-1&&(p=u.length-1);let f=p,g=0,_=0;for(;g<a&&p>0&&(p--,g++,!(u[p]==`
`&&++_==c)););for(g=0,_=0;g<a&&f<u.length-1&&(f++,g++,!(u[f]==`
`&&++_==c)););return{before:u.substring(p,this.offset),after:u.substring(this.offset,f+1)}}return null}},dd=class{constructor(o,a){this.content=o,this.url=a}},ce=class{constructor(o,a,c=o,u=null){this.start=o,this.end=a,this.fullStart=c,this.details=u}toString(){return this.start.file.content.substring(this.start.offset,this.end.offset)}},ga;(function(o){o[o.WARNING=0]="WARNING",o[o.ERROR=1]="ERROR"})(ga||(ga={}));var pd=class{constructor(o,a,c=ga.ERROR,u){this.span=o,this.msg=a,this.level=c,this.relatedError=u}contextualMessage(){let o=this.span.start.getContext(100,3);return o?`${this.msg} ("${o.before}[${ga[this.level]} ->]${o.after}")`:this.msg}toString(){let o=this.span.details?`, ${this.span.details}`:"";return`${this.contextualMessage()}: ${this.span.start}${o}`}},mv=[vv,bv,_v,wv,Sv,Ev,Dv,xv,Tv,Cv];function gv(o,a){for(let c of mv)c(o,a);return o}function vv(o){o.walk(a=>{if(a.type==="element"&&a.tagDefinition.ignoreFirstLf&&a.children.length>0&&a.children[0].type==="text"&&a.children[0].value[0]===`
`){let c=a.children[0];c.value.length===1?a.removeChild(c):c.value=c.value.slice(1)}})}function bv(o){let a=c=>{var u,p;return c.type==="element"&&((u=c.prev)==null?void 0:u.type)==="ieConditionalStartComment"&&c.prev.sourceSpan.end.offset===c.startSourceSpan.start.offset&&((p=c.firstChild)==null?void 0:p.type)==="ieConditionalEndComment"&&c.firstChild.sourceSpan.start.offset===c.startSourceSpan.end.offset};o.walk(c=>{if(c.children)for(let u=0;u<c.children.length;u++){let p=c.children[u];if(!a(p))continue;let f=p.prev,g=p.firstChild;c.removeChild(f),u--;let _=new ce(f.sourceSpan.start,g.sourceSpan.end),F=new ce(_.start,p.sourceSpan.end);p.condition=f.condition,p.sourceSpan=F,p.startSourceSpan=_,p.removeChild(g)}})}function yv(o,a,c){o.walk(u=>{if(u.children)for(let p=0;p<u.children.length;p++){let f=u.children[p];if(f.type!=="text"&&!a(f))continue;f.type!=="text"&&(f.type="text",f.value=c(f));let g=f.prev;!g||g.type!=="text"||(g.value+=f.value,g.sourceSpan=new ce(g.sourceSpan.start,f.sourceSpan.end),u.removeChild(f),p--)}})}function _v(o){return yv(o,a=>a.type==="cdata",a=>`<![CDATA[${a.value}]]>`)}function Cv(o){let a=c=>{var u,p;return c.type==="element"&&c.attrs.length===0&&c.children.length===1&&c.firstChild.type==="text"&&!En.hasWhitespaceCharacter(c.children[0].value)&&!c.firstChild.hasLeadingSpaces&&!c.firstChild.hasTrailingSpaces&&c.isLeadingSpaceSensitive&&!c.hasLeadingSpaces&&c.isTrailingSpaceSensitive&&!c.hasTrailingSpaces&&((u=c.prev)==null?void 0:u.type)==="text"&&((p=c.next)==null?void 0:p.type)==="text"};o.walk(c=>{if(c.children)for(let u=0;u<c.children.length;u++){let p=c.children[u];if(!a(p))continue;let f=p.prev,g=p.next;f.value+=`<${p.rawName}>`+p.firstChild.value+`</${p.rawName}>`+g.value,f.sourceSpan=new ce(f.sourceSpan.start,g.sourceSpan.end),f.isTrailingSpaceSensitive=g.isTrailingSpaceSensitive,f.hasTrailingSpaces=g.hasTrailingSpaces,c.removeChild(p),u--,c.removeChild(g)}})}function wv(o,a){if(a.parser==="html")return;let c=/\{\{(.+?)\}\}/su;o.walk(u=>{if(Og(u,a))for(let p of u.children){if(p.type!=="text")continue;let f=p.sourceSpan.start,g=null,_=p.value.split(c);for(let F=0;F<_.length;F++,f=g){let H=_[F];if(F%2===0){g=f.moveBy(H.length),H.length>0&&u.insertChildBefore(p,{type:"text",value:H,sourceSpan:new ce(f,g)});continue}g=f.moveBy(H.length+4),u.insertChildBefore(p,{type:"interpolation",sourceSpan:new ce(f,g),children:H.length===0?[]:[{type:"text",value:H,sourceSpan:new ce(f.moveBy(2),g.moveBy(-2))}]})}u.removeChild(p)}})}function Sv(o,a){o.walk(c=>{let u=c.$children;if(!u)return;if(u.length===0||u.length===1&&u[0].type==="text"&&En.trim(u[0].value).length===0){c.hasDanglingSpaces=u.length>0,c.$children=[];return}let p=Pg(c,a),f=Vu(c);if(!p)for(let g=0;g<u.length;g++){let _=u[g];if(_.type!=="text")continue;let{leadingWhitespace:F,text:H,trailingWhitespace:N}=Mg(_.value),be=_.prev,se=_.next;H?(_.value=H,_.sourceSpan=new ce(_.sourceSpan.start.moveBy(F.length),_.sourceSpan.end.moveBy(-N.length)),F&&(be&&(be.hasTrailingSpaces=!0),_.hasLeadingSpaces=!0),N&&(_.hasTrailingSpaces=!0,se&&(se.hasLeadingSpaces=!0))):(c.removeChild(_),g--,(F||N)&&(be&&(be.hasTrailingSpaces=!0),se&&(se.hasLeadingSpaces=!0)))}c.isWhitespaceSensitive=p,c.isIndentationSensitive=f})}function Dv(o){o.walk(a=>{a.isSelfClosing=!a.children||a.type==="element"&&(a.tagDefinition.isVoid||a.endSourceSpan&&a.startSourceSpan.start===a.endSourceSpan.start&&a.startSourceSpan.end===a.endSourceSpan.end)})}function xv(o,a){o.walk(c=>{c.type==="element"&&(c.hasHtmComponentClosingTag=c.endSourceSpan&&/^<\s*\/\s*\/\s*>$/u.test(a.originalText.slice(c.endSourceSpan.start.offset,c.endSourceSpan.end.offset)))})}function Ev(o,a){o.walk(c=>{c.cssDisplay=Xg(c,a)})}function Tv(o,a){o.walk(c=>{let{children:u}=c;if(u){if(u.length===0){c.isDanglingSpaceSensitive=$g(c,a);return}for(let p of u)p.isLeadingSpaceSensitive=Ng(p,a),p.isTrailingSpaceSensitive=Bg(p,a);for(let p=0;p<u.length;p++){let f=u[p];f.isLeadingSpaceSensitive=(p===0||f.prev.isTrailingSpaceSensitive)&&f.isLeadingSpaceSensitive,f.isTrailingSpaceSensitive=(p===u.length-1||f.next.isLeadingSpaceSensitive)&&f.isTrailingSpaceSensitive}}})}var Av=gv;function Iv(o,a,c){let{node:u}=o;switch(u.type){case"front-matter":return ft(u.raw);case"root":return a.__onHtmlRoot&&a.__onHtmlRoot(u),[Ne(ml(o,a,c)),Fe];case"element":case"ieConditionalComment":return dv(o,a,c);case"angularControlFlowBlock":return av(o,a,c);case"angularControlFlowBlockParameters":return lv(o,a,c);case"angularControlFlowBlockParameter":return En.trim(u.expression);case"angularLetDeclaration":return Ne(["@let ",Ne([u.id," =",Ne(Lt([Pe,c("init")]))]),";"]);case"angularLetDeclarationInitializer":return u.value;case"angularIcuExpression":return cv(o,a,c);case"angularIcuCase":return uv(o,a,c);case"ieConditionalStartComment":case"ieConditionalEndComment":return[Kr(u),zr(u)];case"interpolation":return[Kr(u,a),...o.map(c,"children"),zr(u,a)];case"text":{if(u.parent.type==="interpolation"){let _=/\n[^\S\n]*$/u,F=_.test(u.value),H=F?u.value.replace(_,""):u.value;return[ft(H),F?Fe:""]}let p=_i(u,a),f=Xu(u),g=bi(u,a);return f[0]=[p,f[0]],f.push([f.pop(),g]),na(f)}case"docType":return[Ne([Kr(u,a)," ",O(!1,u.value.replace(/^html\b/iu,"html"),/\s+/gu," ")]),zr(u,a)];case"comment":return[_i(u,a),ft(a.originalText.slice(Hr(u),ua(u))),bi(u,a)];case"attribute":{if(u.value===null)return u.rawName;let p=Qu(u.value),f=ng(p,'"');return[u.rawName,"=",f,ft(f==='"'?O(!1,p,'"',"&quot;"):O(!1,p,"'","&apos;")),f]}case"cdata":default:throw new cg(u,"HTML")}}var kv={preprocess:Av,print:Iv,insertPragma:rv,massageAstNode:hg,embed:z0,getVisitorKeys:X0},Fv=kv,Rv=[{name:"Angular",type:"markup",extensions:[".component.html"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["angular"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"HTML",type:"markup",extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["html"],vscodeLanguageIds:["html"],linguistLanguageId:146},{name:"Lightning Web Components",type:"markup",extensions:[],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["lwc"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"MJML",type:"markup",extensions:[".mjml"],tmScope:"text.mjml.basic",aceMode:"html",aliases:["MJML","mjml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["mjml"],filenames:[],vscodeLanguageIds:["mjml"],linguistLanguageId:146},{name:"Vue",type:"markup",extensions:[".vue"],tmScope:"source.vue",aceMode:"html",parsers:["vue"],vscodeLanguageIds:["vue"],linguistLanguageId:391}],hd={bracketSpacing:{category:"Common",type:"boolean",default:!0,description:"Print spaces between brackets.",oppositeDescription:"Do not print spaces between brackets."},objectWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap object literals.",choices:[{value:"preserve",description:"Keep as multi-line, if there is a newline between the opening brace and first property."},{value:"collapse",description:"Fit to a single line when possible."}]},singleQuote:{category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."},proseWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap prose.",choices:[{value:"always",description:"Wrap prose if it exceeds the print width."},{value:"never",description:"Do not wrap prose."},{value:"preserve",description:"Wrap prose as-is."}]},bracketSameLine:{category:"Common",type:"boolean",default:!1,description:"Put > of opening tags on the last line instead of on a new line."},singleAttributePerLine:{category:"Common",type:"boolean",default:!1,description:"Enforce single attribute per line in HTML, Vue and JSX."}},fd="HTML",Mv={bracketSameLine:hd.bracketSameLine,htmlWhitespaceSensitivity:{category:fd,type:"choice",default:"css",description:"How to handle whitespaces in HTML.",choices:[{value:"css",description:"Respect the default value of CSS display property."},{value:"strict",description:"Whitespaces are considered sensitive."},{value:"ignore",description:"Whitespaces are considered insensitive."}]},singleAttributePerLine:hd.singleAttributePerLine,vueIndentScriptAndStyle:{category:fd,type:"boolean",default:!1,description:"Indent script and style tags in Vue files."}},Lv=Mv,md={};l(md,{angular:()=>Ub,html:()=>Nb,lwc:()=>jb,mjml:()=>$b,vue:()=>Vb});var RD=new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`,"g"),gd;(function(o){o[o.Emulated=0]="Emulated",o[o.None=2]="None",o[o.ShadowDom=3]="ShadowDom"})(gd||(gd={}));var vd;(function(o){o[o.OnPush=0]="OnPush",o[o.Default=1]="Default"})(vd||(vd={}));var bd;(function(o){o[o.None=0]="None",o[o.SignalBased=1]="SignalBased",o[o.HasDecoratorInputTransform=2]="HasDecoratorInputTransform"})(bd||(bd={}));var yd={name:"custom-elements"},_d={name:"no-errors-schema"},Ci;(function(o){o[o.NONE=0]="NONE",o[o.HTML=1]="HTML",o[o.STYLE=2]="STYLE",o[o.SCRIPT=3]="SCRIPT",o[o.URL=4]="URL",o[o.RESOURCE_URL=5]="RESOURCE_URL"})(Ci||(Ci={}));var Cd;(function(o){o[o.Error=0]="Error",o[o.Warning=1]="Warning",o[o.Ignore=2]="Ignore"})(Cd||(Cd={}));var Kt;(function(o){o[o.RAW_TEXT=0]="RAW_TEXT",o[o.ESCAPABLE_RAW_TEXT=1]="ESCAPABLE_RAW_TEXT",o[o.PARSABLE_DATA=2]="PARSABLE_DATA"})(Kt||(Kt={}));function va(o,a=!0){if(o[0]!=":")return[null,o];let c=o.indexOf(":",1);if(c===-1){if(a)throw new Error(`Unsupported format "${o}" expecting ":namespace:name"`);return[null,o]}return[o.slice(1,c),o.slice(c+1)]}function wd(o){return va(o)[1]==="ng-container"}function Sd(o){return va(o)[1]==="ng-content"}function ba(o){return o===null?null:va(o)[0]}function ya(o,a){return o?`:${o}:${a}`:a}var _a;function Dd(){return _a||(_a={},Ca(Ci.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),Ca(Ci.STYLE,["*|style"]),Ca(Ci.URL,["*|formAction","area|href","area|ping","audio|src","a|href","a|ping","blockquote|cite","body|background","del|cite","form|action","img|src","input|src","ins|cite","q|cite","source|src","track|src","video|poster","video|src"]),Ca(Ci.RESOURCE_URL,["applet|code","applet|codebase","base|href","embed|src","frame|src","head|profile","html|manifest","iframe|src","link|href","media|src","object|codebase","object|data","script|src"])),_a}function Ca(o,a){for(let c of a)_a[c.toLowerCase()]=o}var Ov=class{},Pv="boolean",Nv="number",Bv="string",$v="object",Uv=["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored","[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":svg:graphics^:svg:|",":svg:animation^:svg:|*begin,*end,*repeat",":svg:geometry^:svg:|",":svg:componentTransferFunction^:svg:|",":svg:gradient^:svg:|",":svg:textContent^:svg:graphics|",":svg:textPositioning^:svg:textContent|","a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username","area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username","audio^media|","br^[HTMLElement]|clear","base^[HTMLElement]|href,target","body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink","button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value","canvas^[HTMLElement]|#height,#width","content^[HTMLElement]|select","dl^[HTMLElement]|!compact","data^[HTMLElement]|value","datalist^[HTMLElement]|","details^[HTMLElement]|!open","dialog^[HTMLElement]|!open,returnValue","dir^[HTMLElement]|!compact","div^[HTMLElement]|align","embed^[HTMLElement]|align,height,name,src,type,width","fieldset^[HTMLElement]|!disabled,name","font^[HTMLElement]|color,face,size","form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target","frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src","frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows","hr^[HTMLElement]|align,color,!noShade,size,width","head^[HTMLElement]|","h1,h2,h3,h4,h5,h6^[HTMLElement]|align","html^[HTMLElement]|version","iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width","img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width","input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width","li^[HTMLElement]|type,#value","label^[HTMLElement]|htmlFor","legend^[HTMLElement]|align","link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type","map^[HTMLElement]|name","marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width","menu^[HTMLElement]|!compact","meta^[HTMLElement]|content,httpEquiv,media,name,scheme","meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value","ins,del^[HTMLElement]|cite,dateTime","ol^[HTMLElement]|!compact,!reversed,#start,type","object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width","optgroup^[HTMLElement]|!disabled,label","option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value","output^[HTMLElement]|defaultValue,%htmlFor,name,value","p^[HTMLElement]|align","param^[HTMLElement]|name,type,value,valueType","picture^[HTMLElement]|","pre^[HTMLElement]|#width","progress^[HTMLElement]|#max,#value","q,blockquote,cite^[HTMLElement]|","script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type","select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value","slot^[HTMLElement]|name","source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width","span^[HTMLElement]|","style^[HTMLElement]|!disabled,media,type","caption^[HTMLElement]|align","th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width","col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width","table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width","tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign","tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign","template^[HTMLElement]|","textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap","time^[HTMLElement]|dateTime","title^[HTMLElement]|text","track^[HTMLElement]|!default,kind,label,src,srclang","ul^[HTMLElement]|!compact,type","unknown^[HTMLElement]|","video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",":svg:a^:svg:graphics|",":svg:animate^:svg:animation|",":svg:animateMotion^:svg:animation|",":svg:animateTransform^:svg:animation|",":svg:circle^:svg:geometry|",":svg:clipPath^:svg:graphics|",":svg:defs^:svg:graphics|",":svg:desc^:svg:|",":svg:discard^:svg:|",":svg:ellipse^:svg:geometry|",":svg:feBlend^:svg:|",":svg:feColorMatrix^:svg:|",":svg:feComponentTransfer^:svg:|",":svg:feComposite^:svg:|",":svg:feConvolveMatrix^:svg:|",":svg:feDiffuseLighting^:svg:|",":svg:feDisplacementMap^:svg:|",":svg:feDistantLight^:svg:|",":svg:feDropShadow^:svg:|",":svg:feFlood^:svg:|",":svg:feFuncA^:svg:componentTransferFunction|",":svg:feFuncB^:svg:componentTransferFunction|",":svg:feFuncG^:svg:componentTransferFunction|",":svg:feFuncR^:svg:componentTransferFunction|",":svg:feGaussianBlur^:svg:|",":svg:feImage^:svg:|",":svg:feMerge^:svg:|",":svg:feMergeNode^:svg:|",":svg:feMorphology^:svg:|",":svg:feOffset^:svg:|",":svg:fePointLight^:svg:|",":svg:feSpecularLighting^:svg:|",":svg:feSpotLight^:svg:|",":svg:feTile^:svg:|",":svg:feTurbulence^:svg:|",":svg:filter^:svg:|",":svg:foreignObject^:svg:graphics|",":svg:g^:svg:graphics|",":svg:image^:svg:graphics|decoding",":svg:line^:svg:geometry|",":svg:linearGradient^:svg:gradient|",":svg:mpath^:svg:|",":svg:marker^:svg:|",":svg:mask^:svg:|",":svg:metadata^:svg:|",":svg:path^:svg:geometry|",":svg:pattern^:svg:|",":svg:polygon^:svg:geometry|",":svg:polyline^:svg:geometry|",":svg:radialGradient^:svg:gradient|",":svg:rect^:svg:geometry|",":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",":svg:script^:svg:|type",":svg:set^:svg:animation|",":svg:stop^:svg:|",":svg:style^:svg:|!disabled,media,title,type",":svg:switch^:svg:graphics|",":svg:symbol^:svg:|",":svg:tspan^:svg:textPositioning|",":svg:text^:svg:textPositioning|",":svg:textPath^:svg:textContent|",":svg:title^:svg:|",":svg:use^:svg:graphics|",":svg:view^:svg:|#zoomAndPan","data^[HTMLElement]|value","keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name","menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default","summary^[HTMLElement]|","time^[HTMLElement]|dateTime",":svg:cursor^:svg:|",":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":math:math^:math:|",":math:maction^:math:|",":math:menclose^:math:|",":math:merror^:math:|",":math:mfenced^:math:|",":math:mfrac^:math:|",":math:mi^:math:|",":math:mmultiscripts^:math:|",":math:mn^:math:|",":math:mo^:math:|",":math:mover^:math:|",":math:mpadded^:math:|",":math:mphantom^:math:|",":math:mroot^:math:|",":math:mrow^:math:|",":math:ms^:math:|",":math:mspace^:math:|",":math:msqrt^:math:|",":math:mstyle^:math:|",":math:msub^:math:|",":math:msubsup^:math:|",":math:msup^:math:|",":math:mtable^:math:|",":math:mtd^:math:|",":math:mtext^:math:|",":math:mtr^:math:|",":math:munder^:math:|",":math:munderover^:math:|",":math:semantics^:math:|"],xd=new Map(Object.entries({class:"className",for:"htmlFor",formaction:"formAction",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"})),Vv=Array.from(xd).reduce((o,[a,c])=>(o.set(a,c),o),new Map),jv=class extends Ov{constructor(){super(),this._schema=new Map,this._eventSchema=new Map,Uv.forEach(o=>{let a=new Map,c=new Set,[u,p]=o.split("|"),f=p.split(","),[g,_]=u.split("^");g.split(",").forEach(H=>{this._schema.set(H.toLowerCase(),a),this._eventSchema.set(H.toLowerCase(),c)});let F=_&&this._schema.get(_.toLowerCase());if(F){for(let[H,N]of F)a.set(H,N);for(let H of this._eventSchema.get(_.toLowerCase()))c.add(H)}f.forEach(H=>{if(H.length>0)switch(H[0]){case"*":c.add(H.substring(1));break;case"!":a.set(H.substring(1),Pv);break;case"#":a.set(H.substring(1),Nv);break;case"%":a.set(H.substring(1),$v);break;default:a.set(H,Bv)}})})}hasProperty(o,a,c){if(c.some(u=>u.name===_d.name))return!0;if(o.indexOf("-")>-1){if(wd(o)||Sd(o))return!1;if(c.some(u=>u.name===yd.name))return!0}return(this._schema.get(o.toLowerCase())||this._schema.get("unknown")).has(a)}hasElement(o,a){return a.some(c=>c.name===_d.name)||o.indexOf("-")>-1&&(wd(o)||Sd(o)||a.some(c=>c.name===yd.name))?!0:this._schema.has(o.toLowerCase())}securityContext(o,a,c){c&&(a=this.getMappedPropName(a)),o=o.toLowerCase(),a=a.toLowerCase();let u=Dd()[o+"|"+a];return u||(u=Dd()["*|"+a],u||Ci.NONE)}getMappedPropName(o){return xd.get(o)??o}getDefaultComponentElementName(){return"ng-component"}validateProperty(o){return o.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event property '${o}' is disallowed for security reasons, please use (${o.slice(2)})=...
If '${o}' is a directive input, make sure the directive is imported by the current module.`}:{error:!1}}validateAttribute(o){return o.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event attribute '${o}' is disallowed for security reasons, please use (${o.slice(2)})=...`}:{error:!1}}allKnownElementNames(){return Array.from(this._schema.keys())}allKnownAttributesOfElement(o){let a=this._schema.get(o.toLowerCase())||this._schema.get("unknown");return Array.from(a.keys()).map(c=>Vv.get(c)??c)}allKnownEventsOfElement(o){return Array.from(this._eventSchema.get(o.toLowerCase())??[])}normalizeAnimationStyleProperty(o){return fv(o)}normalizeAnimationStyleValue(o,a,c){let u="",p=c.toString().trim(),f=null;if(Hv(o)&&c!==0&&c!=="0")if(typeof c=="number")u="px";else{let g=c.match(/^[+-]?[\d\.]+([a-z]*)$/);g&&g[1].length==0&&(f=`Please provide a CSS unit value for ${a}:${c}`)}return{error:f,value:p+u}}};function Hv(o){switch(o){case"width":case"height":case"minWidth":case"minHeight":case"maxWidth":case"maxHeight":case"left":case"top":case"bottom":case"right":case"fontSize":case"outlineWidth":case"outlineOffset":case"paddingTop":case"paddingLeft":case"paddingBottom":case"paddingRight":case"marginTop":case"marginLeft":case"marginBottom":case"marginRight":case"borderRadius":case"borderWidth":case"borderTopWidth":case"borderLeftWidth":case"borderRightWidth":case"borderBottomWidth":case"textIndent":return!0;default:return!1}}var ae=class{constructor({closedByChildren:o,implicitNamespacePrefix:a,contentType:c=Kt.PARSABLE_DATA,closedByParent:u=!1,isVoid:p=!1,ignoreFirstLf:f=!1,preventNamespaceInheritance:g=!1,canSelfClose:_=!1}={}){this.closedByChildren={},this.closedByParent=!1,o&&o.length>0&&o.forEach(F=>this.closedByChildren[F]=!0),this.isVoid=p,this.closedByParent=u||p,this.implicitNamespacePrefix=a||null,this.contentType=c,this.ignoreFirstLf=f,this.preventNamespaceInheritance=g,this.canSelfClose=_??p}isClosedByChild(o){return this.isVoid||o.toLowerCase()in this.closedByChildren}getContentType(o){return typeof this.contentType=="object"?(o===void 0?void 0:this.contentType[o])??this.contentType.default:this.contentType}},Ed,Xr;function _l(o){return Xr||(Ed=new ae({canSelfClose:!0}),Xr=Object.assign(Object.create(null),{base:new ae({isVoid:!0}),meta:new ae({isVoid:!0}),area:new ae({isVoid:!0}),embed:new ae({isVoid:!0}),link:new ae({isVoid:!0}),img:new ae({isVoid:!0}),input:new ae({isVoid:!0}),param:new ae({isVoid:!0}),hr:new ae({isVoid:!0}),br:new ae({isVoid:!0}),source:new ae({isVoid:!0}),track:new ae({isVoid:!0}),wbr:new ae({isVoid:!0}),p:new ae({closedByChildren:["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"],closedByParent:!0}),thead:new ae({closedByChildren:["tbody","tfoot"]}),tbody:new ae({closedByChildren:["tbody","tfoot"],closedByParent:!0}),tfoot:new ae({closedByChildren:["tbody"],closedByParent:!0}),tr:new ae({closedByChildren:["tr"],closedByParent:!0}),td:new ae({closedByChildren:["td","th"],closedByParent:!0}),th:new ae({closedByChildren:["td","th"],closedByParent:!0}),col:new ae({isVoid:!0}),svg:new ae({implicitNamespacePrefix:"svg"}),foreignObject:new ae({implicitNamespacePrefix:"svg",preventNamespaceInheritance:!0}),math:new ae({implicitNamespacePrefix:"math"}),li:new ae({closedByChildren:["li"],closedByParent:!0}),dt:new ae({closedByChildren:["dt","dd"]}),dd:new ae({closedByChildren:["dt","dd"],closedByParent:!0}),rb:new ae({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rt:new ae({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rtc:new ae({closedByChildren:["rb","rtc","rp"],closedByParent:!0}),rp:new ae({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),optgroup:new ae({closedByChildren:["optgroup"],closedByParent:!0}),option:new ae({closedByChildren:["option","optgroup"],closedByParent:!0}),pre:new ae({ignoreFirstLf:!0}),listing:new ae({ignoreFirstLf:!0}),style:new ae({contentType:Kt.RAW_TEXT}),script:new ae({contentType:Kt.RAW_TEXT}),title:new ae({contentType:{default:Kt.ESCAPABLE_RAW_TEXT,svg:Kt.PARSABLE_DATA}}),textarea:new ae({contentType:Kt.ESCAPABLE_RAW_TEXT,ignoreFirstLf:!0})}),new jv().allKnownElementNames().forEach(a=>{!Xr[a]&&ba(a)===null&&(Xr[a]=new ae({canSelfClose:!1}))})),Xr[o]??Ed}var Ki=class{constructor(o,a){this.sourceSpan=o,this.i18n=a}},zv=class extends Ki{constructor(o,a,c,u){super(a,u),this.value=o,this.tokens=c,this.type="text"}visit(o,a){return o.visitText(this,a)}},qv=class extends Ki{constructor(o,a,c,u){super(a,u),this.value=o,this.tokens=c,this.type="cdata"}visit(o,a){return o.visitCdata(this,a)}},Wv=class extends Ki{constructor(o,a,c,u,p,f){super(u,f),this.switchValue=o,this.type=a,this.cases=c,this.switchValueSourceSpan=p}visit(o,a){return o.visitExpansion(this,a)}},Gv=class{constructor(o,a,c,u,p){this.value=o,this.expression=a,this.sourceSpan=c,this.valueSourceSpan=u,this.expSourceSpan=p,this.type="expansionCase"}visit(o,a){return o.visitExpansionCase(this,a)}},Kv=class extends Ki{constructor(o,a,c,u,p,f,g){super(c,g),this.name=o,this.value=a,this.keySpan=u,this.valueSpan=p,this.valueTokens=f,this.type="attribute"}visit(o,a){return o.visitAttribute(this,a)}get nameSpan(){return this.keySpan}},Vn=class extends Ki{constructor(o,a,c,u,p,f=null,g=null,_){super(u,_),this.name=o,this.attrs=a,this.children=c,this.startSourceSpan=p,this.endSourceSpan=f,this.nameSpan=g,this.type="element"}visit(o,a){return o.visitElement(this,a)}},Yv=class{constructor(o,a){this.value=o,this.sourceSpan=a,this.type="comment"}visit(o,a){return o.visitComment(this,a)}},Zv=class{constructor(o,a){this.value=o,this.sourceSpan=a,this.type="docType"}visit(o,a){return o.visitDocType(this,a)}},Yi=class extends Ki{constructor(o,a,c,u,p,f,g=null,_){super(u,_),this.name=o,this.parameters=a,this.children=c,this.nameSpan=p,this.startSourceSpan=f,this.endSourceSpan=g,this.type="block"}visit(o,a){return o.visitBlock(this,a)}},Td=class{constructor(o,a){this.expression=o,this.sourceSpan=a,this.type="blockParameter",this.startSourceSpan=null,this.endSourceSpan=null}visit(o,a){return o.visitBlockParameter(this,a)}},Ad=class{constructor(o,a,c,u,p){this.name=o,this.value=a,this.sourceSpan=c,this.nameSpan=u,this.valueSpan=p,this.type="letDeclaration",this.startSourceSpan=null,this.endSourceSpan=null}visit(o,a){return o.visitLetDeclaration(this,a)}};function Id(o,a,c=null){let u=[],p=o.visit?f=>o.visit(f,c)||f.visit(o,c):f=>f.visit(o,c);return a.forEach(f=>{let g=p(f);g&&u.push(g)}),u}var Qv=class{constructor(){}visitElement(o,a){this.visitChildren(a,c=>{c(o.attrs),c(o.children)})}visitAttribute(o,a){}visitText(o,a){}visitCdata(o,a){}visitComment(o,a){}visitDocType(o,a){}visitExpansion(o,a){return this.visitChildren(a,c=>{c(o.cases)})}visitExpansionCase(o,a){}visitBlock(o,a){this.visitChildren(a,c=>{c(o.parameters),c(o.children)})}visitBlockParameter(o,a){}visitLetDeclaration(o,a){}visitChildren(o,a){let c=[],u=this;function p(f){f&&c.push(Id(u,f,o))}return a(p),Array.prototype.concat.apply([],c)}},wa={AElig:"\xC6",AMP:"&",amp:"&",Aacute:"\xC1",Abreve:"\u0102",Acirc:"\xC2",Acy:"\u0410",Afr:"\u{1D504}",Agrave:"\xC0",Alpha:"\u0391",Amacr:"\u0100",And:"\u2A53",Aogon:"\u0104",Aopf:"\u{1D538}",ApplyFunction:"\u2061",af:"\u2061",Aring:"\xC5",angst:"\xC5",Ascr:"\u{1D49C}",Assign:"\u2254",colone:"\u2254",coloneq:"\u2254",Atilde:"\xC3",Auml:"\xC4",Backslash:"\u2216",setminus:"\u2216",setmn:"\u2216",smallsetminus:"\u2216",ssetmn:"\u2216",Barv:"\u2AE7",Barwed:"\u2306",doublebarwedge:"\u2306",Bcy:"\u0411",Because:"\u2235",becaus:"\u2235",because:"\u2235",Bernoullis:"\u212C",Bscr:"\u212C",bernou:"\u212C",Beta:"\u0392",Bfr:"\u{1D505}",Bopf:"\u{1D539}",Breve:"\u02D8",breve:"\u02D8",Bumpeq:"\u224E",HumpDownHump:"\u224E",bump:"\u224E",CHcy:"\u0427",COPY:"\xA9",copy:"\xA9",Cacute:"\u0106",Cap:"\u22D2",CapitalDifferentialD:"\u2145",DD:"\u2145",Cayleys:"\u212D",Cfr:"\u212D",Ccaron:"\u010C",Ccedil:"\xC7",Ccirc:"\u0108",Cconint:"\u2230",Cdot:"\u010A",Cedilla:"\xB8",cedil:"\xB8",CenterDot:"\xB7",centerdot:"\xB7",middot:"\xB7",Chi:"\u03A7",CircleDot:"\u2299",odot:"\u2299",CircleMinus:"\u2296",ominus:"\u2296",CirclePlus:"\u2295",oplus:"\u2295",CircleTimes:"\u2297",otimes:"\u2297",ClockwiseContourIntegral:"\u2232",cwconint:"\u2232",CloseCurlyDoubleQuote:"\u201D",rdquo:"\u201D",rdquor:"\u201D",CloseCurlyQuote:"\u2019",rsquo:"\u2019",rsquor:"\u2019",Colon:"\u2237",Proportion:"\u2237",Colone:"\u2A74",Congruent:"\u2261",equiv:"\u2261",Conint:"\u222F",DoubleContourIntegral:"\u222F",ContourIntegral:"\u222E",conint:"\u222E",oint:"\u222E",Copf:"\u2102",complexes:"\u2102",Coproduct:"\u2210",coprod:"\u2210",CounterClockwiseContourIntegral:"\u2233",awconint:"\u2233",Cross:"\u2A2F",Cscr:"\u{1D49E}",Cup:"\u22D3",CupCap:"\u224D",asympeq:"\u224D",DDotrahd:"\u2911",DJcy:"\u0402",DScy:"\u0405",DZcy:"\u040F",Dagger:"\u2021",ddagger:"\u2021",Darr:"\u21A1",Dashv:"\u2AE4",DoubleLeftTee:"\u2AE4",Dcaron:"\u010E",Dcy:"\u0414",Del:"\u2207",nabla:"\u2207",Delta:"\u0394",Dfr:"\u{1D507}",DiacriticalAcute:"\xB4",acute:"\xB4",DiacriticalDot:"\u02D9",dot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",dblac:"\u02DD",DiacriticalGrave:"`",grave:"`",DiacriticalTilde:"\u02DC",tilde:"\u02DC",Diamond:"\u22C4",diam:"\u22C4",diamond:"\u22C4",DifferentialD:"\u2146",dd:"\u2146",Dopf:"\u{1D53B}",Dot:"\xA8",DoubleDot:"\xA8",die:"\xA8",uml:"\xA8",DotDot:"\u20DC",DotEqual:"\u2250",doteq:"\u2250",esdot:"\u2250",DoubleDownArrow:"\u21D3",Downarrow:"\u21D3",dArr:"\u21D3",DoubleLeftArrow:"\u21D0",Leftarrow:"\u21D0",lArr:"\u21D0",DoubleLeftRightArrow:"\u21D4",Leftrightarrow:"\u21D4",hArr:"\u21D4",iff:"\u21D4",DoubleLongLeftArrow:"\u27F8",Longleftarrow:"\u27F8",xlArr:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",Longleftrightarrow:"\u27FA",xhArr:"\u27FA",DoubleLongRightArrow:"\u27F9",Longrightarrow:"\u27F9",xrArr:"\u27F9",DoubleRightArrow:"\u21D2",Implies:"\u21D2",Rightarrow:"\u21D2",rArr:"\u21D2",DoubleRightTee:"\u22A8",vDash:"\u22A8",DoubleUpArrow:"\u21D1",Uparrow:"\u21D1",uArr:"\u21D1",DoubleUpDownArrow:"\u21D5",Updownarrow:"\u21D5",vArr:"\u21D5",DoubleVerticalBar:"\u2225",par:"\u2225",parallel:"\u2225",shortparallel:"\u2225",spar:"\u2225",DownArrow:"\u2193",ShortDownArrow:"\u2193",darr:"\u2193",downarrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",duarr:"\u21F5",DownBreve:"\u0311",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVector:"\u21BD",leftharpoondown:"\u21BD",lhard:"\u21BD",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVector:"\u21C1",rhard:"\u21C1",rightharpoondown:"\u21C1",DownRightVectorBar:"\u2957",DownTee:"\u22A4",top:"\u22A4",DownTeeArrow:"\u21A7",mapstodown:"\u21A7",Dscr:"\u{1D49F}",Dstrok:"\u0110",ENG:"\u014A",ETH:"\xD0",Eacute:"\xC9",Ecaron:"\u011A",Ecirc:"\xCA",Ecy:"\u042D",Edot:"\u0116",Efr:"\u{1D508}",Egrave:"\xC8",Element:"\u2208",in:"\u2208",isin:"\u2208",isinv:"\u2208",Emacr:"\u0112",EmptySmallSquare:"\u25FB",EmptyVerySmallSquare:"\u25AB",Eogon:"\u0118",Eopf:"\u{1D53C}",Epsilon:"\u0395",Equal:"\u2A75",EqualTilde:"\u2242",eqsim:"\u2242",esim:"\u2242",Equilibrium:"\u21CC",rightleftharpoons:"\u21CC",rlhar:"\u21CC",Escr:"\u2130",expectation:"\u2130",Esim:"\u2A73",Eta:"\u0397",Euml:"\xCB",Exists:"\u2203",exist:"\u2203",ExponentialE:"\u2147",ee:"\u2147",exponentiale:"\u2147",Fcy:"\u0424",Ffr:"\u{1D509}",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",blacksquare:"\u25AA",squarf:"\u25AA",squf:"\u25AA",Fopf:"\u{1D53D}",ForAll:"\u2200",forall:"\u2200",Fouriertrf:"\u2131",Fscr:"\u2131",GJcy:"\u0403",GT:">",gt:">",Gamma:"\u0393",Gammad:"\u03DC",Gbreve:"\u011E",Gcedil:"\u0122",Gcirc:"\u011C",Gcy:"\u0413",Gdot:"\u0120",Gfr:"\u{1D50A}",Gg:"\u22D9",ggg:"\u22D9",Gopf:"\u{1D53E}",GreaterEqual:"\u2265",ge:"\u2265",geq:"\u2265",GreaterEqualLess:"\u22DB",gel:"\u22DB",gtreqless:"\u22DB",GreaterFullEqual:"\u2267",gE:"\u2267",geqq:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",gl:"\u2277",gtrless:"\u2277",GreaterSlantEqual:"\u2A7E",geqslant:"\u2A7E",ges:"\u2A7E",GreaterTilde:"\u2273",gsim:"\u2273",gtrsim:"\u2273",Gscr:"\u{1D4A2}",Gt:"\u226B",NestedGreaterGreater:"\u226B",gg:"\u226B",HARDcy:"\u042A",Hacek:"\u02C7",caron:"\u02C7",Hat:"^",Hcirc:"\u0124",Hfr:"\u210C",Poincareplane:"\u210C",HilbertSpace:"\u210B",Hscr:"\u210B",hamilt:"\u210B",Hopf:"\u210D",quaternions:"\u210D",HorizontalLine:"\u2500",boxh:"\u2500",Hstrok:"\u0126",HumpEqual:"\u224F",bumpe:"\u224F",bumpeq:"\u224F",IEcy:"\u0415",IJlig:"\u0132",IOcy:"\u0401",Iacute:"\xCD",Icirc:"\xCE",Icy:"\u0418",Idot:"\u0130",Ifr:"\u2111",Im:"\u2111",image:"\u2111",imagpart:"\u2111",Igrave:"\xCC",Imacr:"\u012A",ImaginaryI:"\u2148",ii:"\u2148",Int:"\u222C",Integral:"\u222B",int:"\u222B",Intersection:"\u22C2",bigcap:"\u22C2",xcap:"\u22C2",InvisibleComma:"\u2063",ic:"\u2063",InvisibleTimes:"\u2062",it:"\u2062",Iogon:"\u012E",Iopf:"\u{1D540}",Iota:"\u0399",Iscr:"\u2110",imagline:"\u2110",Itilde:"\u0128",Iukcy:"\u0406",Iuml:"\xCF",Jcirc:"\u0134",Jcy:"\u0419",Jfr:"\u{1D50D}",Jopf:"\u{1D541}",Jscr:"\u{1D4A5}",Jsercy:"\u0408",Jukcy:"\u0404",KHcy:"\u0425",KJcy:"\u040C",Kappa:"\u039A",Kcedil:"\u0136",Kcy:"\u041A",Kfr:"\u{1D50E}",Kopf:"\u{1D542}",Kscr:"\u{1D4A6}",LJcy:"\u0409",LT:"<",lt:"<",Lacute:"\u0139",Lambda:"\u039B",Lang:"\u27EA",Laplacetrf:"\u2112",Lscr:"\u2112",lagran:"\u2112",Larr:"\u219E",twoheadleftarrow:"\u219E",Lcaron:"\u013D",Lcedil:"\u013B",Lcy:"\u041B",LeftAngleBracket:"\u27E8",lang:"\u27E8",langle:"\u27E8",LeftArrow:"\u2190",ShortLeftArrow:"\u2190",larr:"\u2190",leftarrow:"\u2190",slarr:"\u2190",LeftArrowBar:"\u21E4",larrb:"\u21E4",LeftArrowRightArrow:"\u21C6",leftrightarrows:"\u21C6",lrarr:"\u21C6",LeftCeiling:"\u2308",lceil:"\u2308",LeftDoubleBracket:"\u27E6",lobrk:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21C3",dharl:"\u21C3",downharpoonleft:"\u21C3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230A",lfloor:"\u230A",LeftRightArrow:"\u2194",harr:"\u2194",leftrightarrow:"\u2194",LeftRightVector:"\u294E",LeftTee:"\u22A3",dashv:"\u22A3",LeftTeeArrow:"\u21A4",mapstoleft:"\u21A4",LeftTeeVector:"\u295A",LeftTriangle:"\u22B2",vartriangleleft:"\u22B2",vltri:"\u22B2",LeftTriangleBar:"\u29CF",LeftTriangleEqual:"\u22B4",ltrie:"\u22B4",trianglelefteq:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21BF",uharl:"\u21BF",upharpoonleft:"\u21BF",LeftUpVectorBar:"\u2958",LeftVector:"\u21BC",leftharpoonup:"\u21BC",lharu:"\u21BC",LeftVectorBar:"\u2952",LessEqualGreater:"\u22DA",leg:"\u22DA",lesseqgtr:"\u22DA",LessFullEqual:"\u2266",lE:"\u2266",leqq:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",lg:"\u2276",LessLess:"\u2AA1",LessSlantEqual:"\u2A7D",leqslant:"\u2A7D",les:"\u2A7D",LessTilde:"\u2272",lesssim:"\u2272",lsim:"\u2272",Lfr:"\u{1D50F}",Ll:"\u22D8",Lleftarrow:"\u21DA",lAarr:"\u21DA",Lmidot:"\u013F",LongLeftArrow:"\u27F5",longleftarrow:"\u27F5",xlarr:"\u27F5",LongLeftRightArrow:"\u27F7",longleftrightarrow:"\u27F7",xharr:"\u27F7",LongRightArrow:"\u27F6",longrightarrow:"\u27F6",xrarr:"\u27F6",Lopf:"\u{1D543}",LowerLeftArrow:"\u2199",swarr:"\u2199",swarrow:"\u2199",LowerRightArrow:"\u2198",searr:"\u2198",searrow:"\u2198",Lsh:"\u21B0",lsh:"\u21B0",Lstrok:"\u0141",Lt:"\u226A",NestedLessLess:"\u226A",ll:"\u226A",Map:"\u2905",Mcy:"\u041C",MediumSpace:"\u205F",Mellintrf:"\u2133",Mscr:"\u2133",phmmat:"\u2133",Mfr:"\u{1D510}",MinusPlus:"\u2213",mnplus:"\u2213",mp:"\u2213",Mopf:"\u{1D544}",Mu:"\u039C",NJcy:"\u040A",Nacute:"\u0143",Ncaron:"\u0147",Ncedil:"\u0145",Ncy:"\u041D",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",ZeroWidthSpace:"\u200B",NewLine:`
`,Nfr:"\u{1D511}",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nbsp:"\xA0",Nopf:"\u2115",naturals:"\u2115",Not:"\u2AEC",NotCongruent:"\u2262",nequiv:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",npar:"\u2226",nparallel:"\u2226",nshortparallel:"\u2226",nspar:"\u2226",NotElement:"\u2209",notin:"\u2209",notinva:"\u2209",NotEqual:"\u2260",ne:"\u2260",NotEqualTilde:"\u2242\u0338",nesim:"\u2242\u0338",NotExists:"\u2204",nexist:"\u2204",nexists:"\u2204",NotGreater:"\u226F",ngt:"\u226F",ngtr:"\u226F",NotGreaterEqual:"\u2271",nge:"\u2271",ngeq:"\u2271",NotGreaterFullEqual:"\u2267\u0338",ngE:"\u2267\u0338",ngeqq:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",nGtv:"\u226B\u0338",NotGreaterLess:"\u2279",ntgl:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",NotGreaterTilde:"\u2275",ngsim:"\u2275",NotHumpDownHump:"\u224E\u0338",nbump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",nbumpe:"\u224F\u0338",NotLeftTriangle:"\u22EA",nltri:"\u22EA",ntriangleleft:"\u22EA",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangleEqual:"\u22EC",nltrie:"\u22EC",ntrianglelefteq:"\u22EC",NotLess:"\u226E",nless:"\u226E",nlt:"\u226E",NotLessEqual:"\u2270",nle:"\u2270",nleq:"\u2270",NotLessGreater:"\u2278",ntlg:"\u2278",NotLessLess:"\u226A\u0338",nLtv:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",NotLessTilde:"\u2274",nlsim:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",NotPrecedes:"\u2280",npr:"\u2280",nprec:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",npre:"\u2AAF\u0338",npreceq:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",nprcue:"\u22E0",NotReverseElement:"\u220C",notni:"\u220C",notniva:"\u220C",NotRightTriangle:"\u22EB",nrtri:"\u22EB",ntriangleright:"\u22EB",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangleEqual:"\u22ED",nrtrie:"\u22ED",ntrianglerighteq:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",nsqsube:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",nsqsupe:"\u22E3",NotSubset:"\u2282\u20D2",nsubset:"\u2282\u20D2",vnsub:"\u2282\u20D2",NotSubsetEqual:"\u2288",nsube:"\u2288",nsubseteq:"\u2288",NotSucceeds:"\u2281",nsc:"\u2281",nsucc:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",nsce:"\u2AB0\u0338",nsucceq:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",nsccue:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",nsupset:"\u2283\u20D2",vnsup:"\u2283\u20D2",NotSupersetEqual:"\u2289",nsupe:"\u2289",nsupseteq:"\u2289",NotTilde:"\u2241",nsim:"\u2241",NotTildeEqual:"\u2244",nsime:"\u2244",nsimeq:"\u2244",NotTildeFullEqual:"\u2247",ncong:"\u2247",NotTildeTilde:"\u2249",nap:"\u2249",napprox:"\u2249",NotVerticalBar:"\u2224",nmid:"\u2224",nshortmid:"\u2224",nsmid:"\u2224",Nscr:"\u{1D4A9}",Ntilde:"\xD1",Nu:"\u039D",OElig:"\u0152",Oacute:"\xD3",Ocirc:"\xD4",Ocy:"\u041E",Odblac:"\u0150",Ofr:"\u{1D512}",Ograve:"\xD2",Omacr:"\u014C",Omega:"\u03A9",ohm:"\u03A9",Omicron:"\u039F",Oopf:"\u{1D546}",OpenCurlyDoubleQuote:"\u201C",ldquo:"\u201C",OpenCurlyQuote:"\u2018",lsquo:"\u2018",Or:"\u2A54",Oscr:"\u{1D4AA}",Oslash:"\xD8",Otilde:"\xD5",Otimes:"\u2A37",Ouml:"\xD6",OverBar:"\u203E",oline:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",tbrk:"\u23B4",OverParenthesis:"\u23DC",PartialD:"\u2202",part:"\u2202",Pcy:"\u041F",Pfr:"\u{1D513}",Phi:"\u03A6",Pi:"\u03A0",PlusMinus:"\xB1",plusmn:"\xB1",pm:"\xB1",Popf:"\u2119",primes:"\u2119",Pr:"\u2ABB",Precedes:"\u227A",pr:"\u227A",prec:"\u227A",PrecedesEqual:"\u2AAF",pre:"\u2AAF",preceq:"\u2AAF",PrecedesSlantEqual:"\u227C",prcue:"\u227C",preccurlyeq:"\u227C",PrecedesTilde:"\u227E",precsim:"\u227E",prsim:"\u227E",Prime:"\u2033",Product:"\u220F",prod:"\u220F",Proportional:"\u221D",prop:"\u221D",propto:"\u221D",varpropto:"\u221D",vprop:"\u221D",Pscr:"\u{1D4AB}",Psi:"\u03A8",QUOT:'"',quot:'"',Qfr:"\u{1D514}",Qopf:"\u211A",rationals:"\u211A",Qscr:"\u{1D4AC}",RBarr:"\u2910",drbkarow:"\u2910",REG:"\xAE",circledR:"\xAE",reg:"\xAE",Racute:"\u0154",Rang:"\u27EB",Rarr:"\u21A0",twoheadrightarrow:"\u21A0",Rarrtl:"\u2916",Rcaron:"\u0158",Rcedil:"\u0156",Rcy:"\u0420",Re:"\u211C",Rfr:"\u211C",real:"\u211C",realpart:"\u211C",ReverseElement:"\u220B",SuchThat:"\u220B",ni:"\u220B",niv:"\u220B",ReverseEquilibrium:"\u21CB",leftrightharpoons:"\u21CB",lrhar:"\u21CB",ReverseUpEquilibrium:"\u296F",duhar:"\u296F",Rho:"\u03A1",RightAngleBracket:"\u27E9",rang:"\u27E9",rangle:"\u27E9",RightArrow:"\u2192",ShortRightArrow:"\u2192",rarr:"\u2192",rightarrow:"\u2192",srarr:"\u2192",RightArrowBar:"\u21E5",rarrb:"\u21E5",RightArrowLeftArrow:"\u21C4",rightleftarrows:"\u21C4",rlarr:"\u21C4",RightCeiling:"\u2309",rceil:"\u2309",RightDoubleBracket:"\u27E7",robrk:"\u27E7",RightDownTeeVector:"\u295D",RightDownVector:"\u21C2",dharr:"\u21C2",downharpoonright:"\u21C2",RightDownVectorBar:"\u2955",RightFloor:"\u230B",rfloor:"\u230B",RightTee:"\u22A2",vdash:"\u22A2",RightTeeArrow:"\u21A6",map:"\u21A6",mapsto:"\u21A6",RightTeeVector:"\u295B",RightTriangle:"\u22B3",vartriangleright:"\u22B3",vrtri:"\u22B3",RightTriangleBar:"\u29D0",RightTriangleEqual:"\u22B5",rtrie:"\u22B5",trianglerighteq:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVector:"\u21BE",uharr:"\u21BE",upharpoonright:"\u21BE",RightUpVectorBar:"\u2954",RightVector:"\u21C0",rharu:"\u21C0",rightharpoonup:"\u21C0",RightVectorBar:"\u2953",Ropf:"\u211D",reals:"\u211D",RoundImplies:"\u2970",Rrightarrow:"\u21DB",rAarr:"\u21DB",Rscr:"\u211B",realine:"\u211B",Rsh:"\u21B1",rsh:"\u21B1",RuleDelayed:"\u29F4",SHCHcy:"\u0429",SHcy:"\u0428",SOFTcy:"\u042C",Sacute:"\u015A",Sc:"\u2ABC",Scaron:"\u0160",Scedil:"\u015E",Scirc:"\u015C",Scy:"\u0421",Sfr:"\u{1D516}",ShortUpArrow:"\u2191",UpArrow:"\u2191",uarr:"\u2191",uparrow:"\u2191",Sigma:"\u03A3",SmallCircle:"\u2218",compfn:"\u2218",Sopf:"\u{1D54A}",Sqrt:"\u221A",radic:"\u221A",Square:"\u25A1",squ:"\u25A1",square:"\u25A1",SquareIntersection:"\u2293",sqcap:"\u2293",SquareSubset:"\u228F",sqsub:"\u228F",sqsubset:"\u228F",SquareSubsetEqual:"\u2291",sqsube:"\u2291",sqsubseteq:"\u2291",SquareSuperset:"\u2290",sqsup:"\u2290",sqsupset:"\u2290",SquareSupersetEqual:"\u2292",sqsupe:"\u2292",sqsupseteq:"\u2292",SquareUnion:"\u2294",sqcup:"\u2294",Sscr:"\u{1D4AE}",Star:"\u22C6",sstarf:"\u22C6",Sub:"\u22D0",Subset:"\u22D0",SubsetEqual:"\u2286",sube:"\u2286",subseteq:"\u2286",Succeeds:"\u227B",sc:"\u227B",succ:"\u227B",SucceedsEqual:"\u2AB0",sce:"\u2AB0",succeq:"\u2AB0",SucceedsSlantEqual:"\u227D",sccue:"\u227D",succcurlyeq:"\u227D",SucceedsTilde:"\u227F",scsim:"\u227F",succsim:"\u227F",Sum:"\u2211",sum:"\u2211",Sup:"\u22D1",Supset:"\u22D1",Superset:"\u2283",sup:"\u2283",supset:"\u2283",SupersetEqual:"\u2287",supe:"\u2287",supseteq:"\u2287",THORN:"\xDE",TRADE:"\u2122",trade:"\u2122",TSHcy:"\u040B",TScy:"\u0426",Tab:"	",Tau:"\u03A4",Tcaron:"\u0164",Tcedil:"\u0162",Tcy:"\u0422",Tfr:"\u{1D517}",Therefore:"\u2234",there4:"\u2234",therefore:"\u2234",Theta:"\u0398",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",Tilde:"\u223C",sim:"\u223C",thicksim:"\u223C",thksim:"\u223C",TildeEqual:"\u2243",sime:"\u2243",simeq:"\u2243",TildeFullEqual:"\u2245",cong:"\u2245",TildeTilde:"\u2248",ap:"\u2248",approx:"\u2248",asymp:"\u2248",thickapprox:"\u2248",thkap:"\u2248",Topf:"\u{1D54B}",TripleDot:"\u20DB",tdot:"\u20DB",Tscr:"\u{1D4AF}",Tstrok:"\u0166",Uacute:"\xDA",Uarr:"\u219F",Uarrocir:"\u2949",Ubrcy:"\u040E",Ubreve:"\u016C",Ucirc:"\xDB",Ucy:"\u0423",Udblac:"\u0170",Ufr:"\u{1D518}",Ugrave:"\xD9",Umacr:"\u016A",UnderBar:"_",lowbar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",bbrk:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",bigcup:"\u22C3",xcup:"\u22C3",UnionPlus:"\u228E",uplus:"\u228E",Uogon:"\u0172",Uopf:"\u{1D54C}",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21C5",udarr:"\u21C5",UpDownArrow:"\u2195",updownarrow:"\u2195",varr:"\u2195",UpEquilibrium:"\u296E",udhar:"\u296E",UpTee:"\u22A5",bot:"\u22A5",bottom:"\u22A5",perp:"\u22A5",UpTeeArrow:"\u21A5",mapstoup:"\u21A5",UpperLeftArrow:"\u2196",nwarr:"\u2196",nwarrow:"\u2196",UpperRightArrow:"\u2197",nearr:"\u2197",nearrow:"\u2197",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",Uring:"\u016E",Uscr:"\u{1D4B0}",Utilde:"\u0168",Uuml:"\xDC",VDash:"\u22AB",Vbar:"\u2AEB",Vcy:"\u0412",Vdash:"\u22A9",Vdashl:"\u2AE6",Vee:"\u22C1",bigvee:"\u22C1",xvee:"\u22C1",Verbar:"\u2016",Vert:"\u2016",VerticalBar:"\u2223",mid:"\u2223",shortmid:"\u2223",smid:"\u2223",VerticalLine:"|",verbar:"|",vert:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",wr:"\u2240",wreath:"\u2240",VeryThinSpace:"\u200A",hairsp:"\u200A",Vfr:"\u{1D519}",Vopf:"\u{1D54D}",Vscr:"\u{1D4B1}",Vvdash:"\u22AA",Wcirc:"\u0174",Wedge:"\u22C0",bigwedge:"\u22C0",xwedge:"\u22C0",Wfr:"\u{1D51A}",Wopf:"\u{1D54E}",Wscr:"\u{1D4B2}",Xfr:"\u{1D51B}",Xi:"\u039E",Xopf:"\u{1D54F}",Xscr:"\u{1D4B3}",YAcy:"\u042F",YIcy:"\u0407",YUcy:"\u042E",Yacute:"\xDD",Ycirc:"\u0176",Ycy:"\u042B",Yfr:"\u{1D51C}",Yopf:"\u{1D550}",Yscr:"\u{1D4B4}",Yuml:"\u0178",ZHcy:"\u0416",Zacute:"\u0179",Zcaron:"\u017D",Zcy:"\u0417",Zdot:"\u017B",Zeta:"\u0396",Zfr:"\u2128",zeetrf:"\u2128",Zopf:"\u2124",integers:"\u2124",Zscr:"\u{1D4B5}",aacute:"\xE1",abreve:"\u0103",ac:"\u223E",mstpos:"\u223E",acE:"\u223E\u0333",acd:"\u223F",acirc:"\xE2",acy:"\u0430",aelig:"\xE6",afr:"\u{1D51E}",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",alpha:"\u03B1",amacr:"\u0101",amalg:"\u2A3F",and:"\u2227",wedge:"\u2227",andand:"\u2A55",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",angle:"\u2220",ange:"\u29A4",angmsd:"\u2221",measuredangle:"\u2221",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angzarr:"\u237C",aogon:"\u0105",aopf:"\u{1D552}",apE:"\u2A70",apacir:"\u2A6F",ape:"\u224A",approxeq:"\u224A",apid:"\u224B",apos:"'",aring:"\xE5",ascr:"\u{1D4B6}",ast:"*",midast:"*",atilde:"\xE3",auml:"\xE4",awint:"\u2A11",bNot:"\u2AED",backcong:"\u224C",bcong:"\u224C",backepsilon:"\u03F6",bepsi:"\u03F6",backprime:"\u2035",bprime:"\u2035",backsim:"\u223D",bsim:"\u223D",backsimeq:"\u22CD",bsime:"\u22CD",barvee:"\u22BD",barwed:"\u2305",barwedge:"\u2305",bbrktbrk:"\u23B6",bcy:"\u0431",bdquo:"\u201E",ldquor:"\u201E",bemptyv:"\u29B0",beta:"\u03B2",beth:"\u2136",between:"\u226C",twixt:"\u226C",bfr:"\u{1D51F}",bigcirc:"\u25EF",xcirc:"\u25EF",bigodot:"\u2A00",xodot:"\u2A00",bigoplus:"\u2A01",xoplus:"\u2A01",bigotimes:"\u2A02",xotime:"\u2A02",bigsqcup:"\u2A06",xsqcup:"\u2A06",bigstar:"\u2605",starf:"\u2605",bigtriangledown:"\u25BD",xdtri:"\u25BD",bigtriangleup:"\u25B3",xutri:"\u25B3",biguplus:"\u2A04",xuplus:"\u2A04",bkarow:"\u290D",rbarr:"\u290D",blacklozenge:"\u29EB",lozf:"\u29EB",blacktriangle:"\u25B4",utrif:"\u25B4",blacktriangledown:"\u25BE",dtrif:"\u25BE",blacktriangleleft:"\u25C2",ltrif:"\u25C2",blacktriangleright:"\u25B8",rtrif:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bnot:"\u2310",bopf:"\u{1D553}",bowtie:"\u22C8",boxDL:"\u2557",boxDR:"\u2554",boxDl:"\u2556",boxDr:"\u2553",boxH:"\u2550",boxHD:"\u2566",boxHU:"\u2569",boxHd:"\u2564",boxHu:"\u2567",boxUL:"\u255D",boxUR:"\u255A",boxUl:"\u255C",boxUr:"\u2559",boxV:"\u2551",boxVH:"\u256C",boxVL:"\u2563",boxVR:"\u2560",boxVh:"\u256B",boxVl:"\u2562",boxVr:"\u255F",boxbox:"\u29C9",boxdL:"\u2555",boxdR:"\u2552",boxdl:"\u2510",boxdr:"\u250C",boxhD:"\u2565",boxhU:"\u2568",boxhd:"\u252C",boxhu:"\u2534",boxminus:"\u229F",minusb:"\u229F",boxplus:"\u229E",plusb:"\u229E",boxtimes:"\u22A0",timesb:"\u22A0",boxuL:"\u255B",boxuR:"\u2558",boxul:"\u2518",boxur:"\u2514",boxv:"\u2502",boxvH:"\u256A",boxvL:"\u2561",boxvR:"\u255E",boxvh:"\u253C",boxvl:"\u2524",boxvr:"\u251C",brvbar:"\xA6",bscr:"\u{1D4B7}",bsemi:"\u204F",bsol:"\\",bsolb:"\u29C5",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bumpE:"\u2AAE",cacute:"\u0107",cap:"\u2229",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",capcup:"\u2A47",capdot:"\u2A40",caps:"\u2229\uFE00",caret:"\u2041",ccaps:"\u2A4D",ccaron:"\u010D",ccedil:"\xE7",ccirc:"\u0109",ccups:"\u2A4C",ccupssm:"\u2A50",cdot:"\u010B",cemptyv:"\u29B2",cent:"\xA2",cfr:"\u{1D520}",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",chi:"\u03C7",cir:"\u25CB",cirE:"\u29C3",circ:"\u02C6",circeq:"\u2257",cire:"\u2257",circlearrowleft:"\u21BA",olarr:"\u21BA",circlearrowright:"\u21BB",orarr:"\u21BB",circledS:"\u24C8",oS:"\u24C8",circledast:"\u229B",oast:"\u229B",circledcirc:"\u229A",ocir:"\u229A",circleddash:"\u229D",odash:"\u229D",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",clubs:"\u2663",clubsuit:"\u2663",colon:":",comma:",",commat:"@",comp:"\u2201",complement:"\u2201",congdot:"\u2A6D",copf:"\u{1D554}",copysr:"\u2117",crarr:"\u21B5",cross:"\u2717",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",curlyeqprec:"\u22DE",cuesc:"\u22DF",curlyeqsucc:"\u22DF",cularr:"\u21B6",curvearrowleft:"\u21B6",cularrp:"\u293D",cup:"\u222A",cupbrcap:"\u2A48",cupcap:"\u2A46",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curvearrowright:"\u21B7",curarrm:"\u293C",curlyvee:"\u22CE",cuvee:"\u22CE",curlywedge:"\u22CF",cuwed:"\u22CF",curren:"\xA4",cwint:"\u2231",cylcty:"\u232D",dHar:"\u2965",dagger:"\u2020",daleth:"\u2138",dash:"\u2010",hyphen:"\u2010",dbkarow:"\u290F",rBarr:"\u290F",dcaron:"\u010F",dcy:"\u0434",ddarr:"\u21CA",downdownarrows:"\u21CA",ddotseq:"\u2A77",eDDot:"\u2A77",deg:"\xB0",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",dfr:"\u{1D521}",diamondsuit:"\u2666",diams:"\u2666",digamma:"\u03DD",gammad:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",djcy:"\u0452",dlcorn:"\u231E",llcorner:"\u231E",dlcrop:"\u230D",dollar:"$",dopf:"\u{1D555}",doteqdot:"\u2251",eDot:"\u2251",dotminus:"\u2238",minusd:"\u2238",dotplus:"\u2214",plusdo:"\u2214",dotsquare:"\u22A1",sdotb:"\u22A1",drcorn:"\u231F",lrcorner:"\u231F",drcrop:"\u230C",dscr:"\u{1D4B9}",dscy:"\u0455",dsol:"\u29F6",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",triangledown:"\u25BF",dwangle:"\u29A6",dzcy:"\u045F",dzigrarr:"\u27FF",eacute:"\xE9",easter:"\u2A6E",ecaron:"\u011B",ecir:"\u2256",eqcirc:"\u2256",ecirc:"\xEA",ecolon:"\u2255",eqcolon:"\u2255",ecy:"\u044D",edot:"\u0117",efDot:"\u2252",fallingdotseq:"\u2252",efr:"\u{1D522}",eg:"\u2A9A",egrave:"\xE8",egs:"\u2A96",eqslantgtr:"\u2A96",egsdot:"\u2A98",el:"\u2A99",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",eqslantless:"\u2A95",elsdot:"\u2A97",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",emptyv:"\u2205",varnothing:"\u2205",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",eng:"\u014B",ensp:"\u2002",eogon:"\u0119",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",epsilon:"\u03B5",epsiv:"\u03F5",straightepsilon:"\u03F5",varepsilon:"\u03F5",equals:"=",equest:"\u225F",questeq:"\u225F",equivDD:"\u2A78",eqvparsl:"\u29E5",erDot:"\u2253",risingdotseq:"\u2253",erarr:"\u2971",escr:"\u212F",eta:"\u03B7",eth:"\xF0",euml:"\xEB",euro:"\u20AC",excl:"!",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",ffr:"\u{1D523}",filig:"\uFB01",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",fopf:"\u{1D557}",fork:"\u22D4",pitchfork:"\u22D4",forkv:"\u2AD9",fpartint:"\u2A0D",frac12:"\xBD",half:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",sfrown:"\u2322",fscr:"\u{1D4BB}",gEl:"\u2A8C",gtreqqless:"\u2A8C",gacute:"\u01F5",gamma:"\u03B3",gap:"\u2A86",gtrapprox:"\u2A86",gbreve:"\u011F",gcirc:"\u011D",gcy:"\u0433",gdot:"\u0121",gescc:"\u2AA9",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",gfr:"\u{1D524}",gimel:"\u2137",gjcy:"\u0453",glE:"\u2A92",gla:"\u2AA5",glj:"\u2AA4",gnE:"\u2269",gneqq:"\u2269",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gneq:"\u2A88",gnsim:"\u22E7",gopf:"\u{1D558}",gscr:"\u210A",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gtdot:"\u22D7",gtrdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrarr:"\u2978",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",hardcy:"\u044A",harrcir:"\u2948",harrw:"\u21AD",leftrightsquigarrow:"\u21AD",hbar:"\u210F",hslash:"\u210F",planck:"\u210F",plankv:"\u210F",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",mldr:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",hksearow:"\u2925",searhk:"\u2925",hkswarow:"\u2926",swarhk:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",larrhk:"\u21A9",hookrightarrow:"\u21AA",rarrhk:"\u21AA",hopf:"\u{1D559}",horbar:"\u2015",hscr:"\u{1D4BD}",hstrok:"\u0127",hybull:"\u2043",iacute:"\xED",icirc:"\xEE",icy:"\u0438",iecy:"\u0435",iexcl:"\xA1",ifr:"\u{1D526}",igrave:"\xEC",iiiint:"\u2A0C",qint:"\u2A0C",iiint:"\u222D",tint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",ijlig:"\u0133",imacr:"\u012B",imath:"\u0131",inodot:"\u0131",imof:"\u22B7",imped:"\u01B5",incare:"\u2105",infin:"\u221E",infintie:"\u29DD",intcal:"\u22BA",intercal:"\u22BA",intlarhk:"\u2A17",intprod:"\u2A3C",iprod:"\u2A3C",iocy:"\u0451",iogon:"\u012F",iopf:"\u{1D55A}",iota:"\u03B9",iquest:"\xBF",iscr:"\u{1D4BE}",isinE:"\u22F9",isindot:"\u22F5",isins:"\u22F4",isinsv:"\u22F3",itilde:"\u0129",iukcy:"\u0456",iuml:"\xEF",jcirc:"\u0135",jcy:"\u0439",jfr:"\u{1D527}",jmath:"\u0237",jopf:"\u{1D55B}",jscr:"\u{1D4BF}",jsercy:"\u0458",jukcy:"\u0454",kappa:"\u03BA",kappav:"\u03F0",varkappa:"\u03F0",kcedil:"\u0137",kcy:"\u043A",kfr:"\u{1D528}",kgreen:"\u0138",khcy:"\u0445",kjcy:"\u045C",kopf:"\u{1D55C}",kscr:"\u{1D4C0}",lAtail:"\u291B",lBarr:"\u290E",lEg:"\u2A8B",lesseqqgtr:"\u2A8B",lHar:"\u2962",lacute:"\u013A",laemptyv:"\u29B4",lambda:"\u03BB",langd:"\u2991",lap:"\u2A85",lessapprox:"\u2A85",laquo:"\xAB",larrbfs:"\u291F",larrfs:"\u291D",larrlp:"\u21AB",looparrowleft:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",leftarrowtail:"\u21A2",lat:"\u2AAB",latail:"\u2919",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lbbrk:"\u2772",lbrace:"{",lcub:"{",lbrack:"[",lsqb:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",lcaron:"\u013E",lcedil:"\u013C",lcy:"\u043B",ldca:"\u2936",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",leq:"\u2264",leftleftarrows:"\u21C7",llarr:"\u21C7",leftthreetimes:"\u22CB",lthree:"\u22CB",lescc:"\u2AA8",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessdot:"\u22D6",ltdot:"\u22D6",lfisht:"\u297C",lfr:"\u{1D529}",lgE:"\u2A91",lharul:"\u296A",lhblk:"\u2584",ljcy:"\u0459",llhard:"\u296B",lltri:"\u25FA",lmidot:"\u0140",lmoust:"\u23B0",lmoustache:"\u23B0",lnE:"\u2268",lneqq:"\u2268",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lneq:"\u2A87",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",longmapsto:"\u27FC",xmap:"\u27FC",looparrowright:"\u21AC",rarrlp:"\u21AC",lopar:"\u2985",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",loz:"\u25CA",lozenge:"\u25CA",lpar:"(",lparlt:"\u2993",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",lsime:"\u2A8D",lsimg:"\u2A8F",lsquor:"\u201A",sbquo:"\u201A",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltrPar:"\u2996",ltri:"\u25C3",triangleleft:"\u25C3",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",mDDot:"\u223A",macr:"\xAF",strns:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",marker:"\u25AE",mcomma:"\u2A29",mcy:"\u043C",mdash:"\u2014",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midcir:"\u2AF0",minus:"\u2212",minusdu:"\u2A2A",mlcp:"\u2ADB",models:"\u22A7",mopf:"\u{1D55E}",mscr:"\u{1D4C2}",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nGg:"\u22D9\u0338",nGt:"\u226B\u20D2",nLeftarrow:"\u21CD",nlArr:"\u21CD",nLeftrightarrow:"\u21CE",nhArr:"\u21CE",nLl:"\u22D8\u0338",nLt:"\u226A\u20D2",nRightarrow:"\u21CF",nrArr:"\u21CF",nVDash:"\u22AF",nVdash:"\u22AE",nacute:"\u0144",nang:"\u2220\u20D2",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",natur:"\u266E",natural:"\u266E",ncap:"\u2A43",ncaron:"\u0148",ncedil:"\u0146",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",ncy:"\u043D",ndash:"\u2013",neArr:"\u21D7",nearhk:"\u2924",nedot:"\u2250\u0338",nesear:"\u2928",toea:"\u2928",nfr:"\u{1D52B}",nharr:"\u21AE",nleftrightarrow:"\u21AE",nhpar:"\u2AF2",nis:"\u22FC",nisd:"\u22FA",njcy:"\u045A",nlE:"\u2266\u0338",nleqq:"\u2266\u0338",nlarr:"\u219A",nleftarrow:"\u219A",nldr:"\u2025",nopf:"\u{1D55F}",not:"\xAC",notinE:"\u22F9\u0338",notindot:"\u22F5\u0338",notinvb:"\u22F7",notinvc:"\u22F6",notnivb:"\u22FE",notnivc:"\u22FD",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",nrarr:"\u219B",nrightarrow:"\u219B",nrarrc:"\u2933\u0338",nrarrw:"\u219D\u0338",nscr:"\u{1D4C3}",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsubseteqq:"\u2AC5\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupseteqq:"\u2AC6\u0338",ntilde:"\xF1",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvDash:"\u22AD",nvHarr:"\u2904",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwArr:"\u21D6",nwarhk:"\u2923",nwnear:"\u2927",oacute:"\xF3",ocirc:"\xF4",ocy:"\u043E",odblac:"\u0151",odiv:"\u2A38",odsold:"\u29BC",oelig:"\u0153",ofcir:"\u29BF",ofr:"\u{1D52C}",ogon:"\u02DB",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",olcir:"\u29BE",olcross:"\u29BB",olt:"\u29C0",omacr:"\u014D",omega:"\u03C9",omicron:"\u03BF",omid:"\u29B6",oopf:"\u{1D560}",opar:"\u29B7",operp:"\u29B9",or:"\u2228",vee:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",oscr:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oslash:"\xF8",osol:"\u2298",otilde:"\xF5",otimesas:"\u2A36",ouml:"\xF6",ovbar:"\u233D",para:"\xB6",parsim:"\u2AF3",parsl:"\u2AFD",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",pertenk:"\u2031",pfr:"\u{1D52D}",phi:"\u03C6",phiv:"\u03D5",straightphi:"\u03D5",varphi:"\u03D5",phone:"\u260E",pi:"\u03C0",piv:"\u03D6",varpi:"\u03D6",planckh:"\u210E",plus:"+",plusacir:"\u2A23",pluscir:"\u2A22",plusdu:"\u2A25",pluse:"\u2A72",plussim:"\u2A26",plustwo:"\u2A27",pointint:"\u2A15",popf:"\u{1D561}",pound:"\xA3",prE:"\u2AB3",prap:"\u2AB7",precapprox:"\u2AB7",precnapprox:"\u2AB9",prnap:"\u2AB9",precneqq:"\u2AB5",prnE:"\u2AB5",precnsim:"\u22E8",prnsim:"\u22E8",prime:"\u2032",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prurel:"\u22B0",pscr:"\u{1D4C5}",psi:"\u03C8",puncsp:"\u2008",qfr:"\u{1D52E}",qopf:"\u{1D562}",qprime:"\u2057",qscr:"\u{1D4C6}",quatint:"\u2A16",quest:"?",rAtail:"\u291C",rHar:"\u2964",race:"\u223D\u0331",racute:"\u0155",raemptyv:"\u29B3",rangd:"\u2992",range:"\u29A5",raquo:"\xBB",rarrap:"\u2975",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291E",rarrpl:"\u2945",rarrsim:"\u2974",rarrtl:"\u21A3",rightarrowtail:"\u21A3",rarrw:"\u219D",rightsquigarrow:"\u219D",ratail:"\u291A",ratio:"\u2236",rbbrk:"\u2773",rbrace:"}",rcub:"}",rbrack:"]",rsqb:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",rcaron:"\u0159",rcedil:"\u0157",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdsh:"\u21B3",rect:"\u25AD",rfisht:"\u297D",rfr:"\u{1D52F}",rharul:"\u296C",rho:"\u03C1",rhov:"\u03F1",varrho:"\u03F1",rightrightarrows:"\u21C9",rrarr:"\u21C9",rightthreetimes:"\u22CC",rthree:"\u22CC",ring:"\u02DA",rlm:"\u200F",rmoust:"\u23B1",rmoustache:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",ropar:"\u2986",ropf:"\u{1D563}",roplus:"\u2A2E",rotimes:"\u2A35",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rsaquo:"\u203A",rscr:"\u{1D4C7}",rtimes:"\u22CA",rtri:"\u25B9",triangleright:"\u25B9",rtriltri:"\u29CE",ruluhar:"\u2968",rx:"\u211E",sacute:"\u015B",scE:"\u2AB4",scap:"\u2AB8",succapprox:"\u2AB8",scaron:"\u0161",scedil:"\u015F",scirc:"\u015D",scnE:"\u2AB6",succneqq:"\u2AB6",scnap:"\u2ABA",succnapprox:"\u2ABA",scnsim:"\u22E9",succnsim:"\u22E9",scpolint:"\u2A13",scy:"\u0441",sdot:"\u22C5",sdote:"\u2A66",seArr:"\u21D8",sect:"\xA7",semi:";",seswar:"\u2929",tosa:"\u2929",sext:"\u2736",sfr:"\u{1D530}",sharp:"\u266F",shchcy:"\u0449",shcy:"\u0448",shy:"\xAD",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",varsigma:"\u03C2",simdot:"\u2A6A",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",smashp:"\u2A33",smeparsl:"\u29E4",smile:"\u2323",ssmile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",softcy:"\u044C",sol:"/",solb:"\u29C4",solbar:"\u233F",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",sqcaps:"\u2293\uFE00",sqcups:"\u2294\uFE00",sscr:"\u{1D4C8}",star:"\u2606",sub:"\u2282",subset:"\u2282",subE:"\u2AC5",subseteqq:"\u2AC5",subdot:"\u2ABD",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subsetneqq:"\u2ACB",subne:"\u228A",subsetneq:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",supE:"\u2AC6",supseteqq:"\u2AC6",supdot:"\u2ABE",supdsub:"\u2AD8",supedot:"\u2AC4",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supsetneqq:"\u2ACC",supne:"\u228B",supsetneq:"\u228B",supplus:"\u2AC0",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swArr:"\u21D9",swnwar:"\u292A",szlig:"\xDF",target:"\u2316",tau:"\u03C4",tcaron:"\u0165",tcedil:"\u0163",tcy:"\u0442",telrec:"\u2315",tfr:"\u{1D531}",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",vartheta:"\u03D1",thorn:"\xFE",times:"\xD7",timesbar:"\u2A31",timesd:"\u2A30",topbot:"\u2336",topcir:"\u2AF1",topf:"\u{1D565}",topfork:"\u2ADA",tprime:"\u2034",triangle:"\u25B5",utri:"\u25B5",triangleq:"\u225C",trie:"\u225C",tridot:"\u25EC",triminus:"\u2A3A",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",tscr:"\u{1D4C9}",tscy:"\u0446",tshcy:"\u045B",tstrok:"\u0167",uHar:"\u2963",uacute:"\xFA",ubrcy:"\u045E",ubreve:"\u016D",ucirc:"\xFB",ucy:"\u0443",udblac:"\u0171",ufisht:"\u297E",ufr:"\u{1D532}",ugrave:"\xF9",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",umacr:"\u016B",uogon:"\u0173",uopf:"\u{1D566}",upsi:"\u03C5",upsilon:"\u03C5",upuparrows:"\u21C8",uuarr:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",uring:"\u016F",urtri:"\u25F9",uscr:"\u{1D4CA}",utdot:"\u22F0",utilde:"\u0169",uuml:"\xFC",uwangle:"\u29A7",vBar:"\u2AE8",vBarv:"\u2AE9",vangrt:"\u299C",varsubsetneq:"\u228A\uFE00",vsubne:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",vsubnE:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",vsupne:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vsupnE:"\u2ACC\uFE00",vcy:"\u0432",veebar:"\u22BB",veeeq:"\u225A",vellip:"\u22EE",vfr:"\u{1D533}",vopf:"\u{1D567}",vscr:"\u{1D4CB}",vzigzag:"\u299A",wcirc:"\u0175",wedbar:"\u2A5F",wedgeq:"\u2259",weierp:"\u2118",wp:"\u2118",wfr:"\u{1D534}",wopf:"\u{1D568}",wscr:"\u{1D4CC}",xfr:"\u{1D535}",xi:"\u03BE",xnis:"\u22FB",xopf:"\u{1D569}",xscr:"\u{1D4CD}",yacute:"\xFD",yacy:"\u044F",ycirc:"\u0177",ycy:"\u044B",yen:"\xA5",yfr:"\u{1D536}",yicy:"\u0457",yopf:"\u{1D56A}",yscr:"\u{1D4CE}",yucy:"\u044E",yuml:"\xFF",zacute:"\u017A",zcaron:"\u017E",zcy:"\u0437",zdot:"\u017C",zeta:"\u03B6",zfr:"\u{1D537}",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"},Xv="\uE500";wa.ngsp=Xv;var Jv=[/@/,/^\s*$/,/[<>]/,/^[{}]$/,/&(#|[a-z])/i,/^\/\//];function eb(o,a){if(a!=null&&!(Array.isArray(a)&&a.length==2))throw new Error(`Expected '${o}' to be an array, [start, end].`);if(a!=null){let c=a[0],u=a[1];Jv.forEach(p=>{if(p.test(c)||p.test(u))throw new Error(`['${c}', '${u}'] contains unusable interpolation symbol.`)})}}var tb=class Dm{static fromArray(a){return a?(eb("interpolation",a),new Dm(a[0],a[1])):kd}constructor(a,c){this.start=a,this.end=c}},kd=new tb("{{","}}"),Cl=class extends pd{constructor(o,a,c){super(c,o),this.tokenType=a}},nb=class{constructor(o,a,c){this.tokens=o,this.errors=a,this.nonNormalizedIcuExpressions=c}};function ib(o,a,c,u={}){let p=new ab(new dd(o,a),c,u);return p.tokenize(),new nb(pb(p.tokens),p.errors,p.nonNormalizedIcuExpressions)}var rb=/\r\n?/g;function Zi(o){return`Unexpected character "${o===0?"EOF":String.fromCharCode(o)}"`}function Fd(o){return`Unknown entity "${o}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`}function ob(o,a){return`Unable to parse entity "${a}" - ${o} character reference entities must end with ";"`}var Sa;(function(o){o.HEX="hexadecimal",o.DEC="decimal"})(Sa||(Sa={}));var wl=class{constructor(o){this.error=o}},ab=class{constructor(o,a,c){this._getTagContentType=a,this._currentTokenStart=null,this._currentTokenType=null,this._expansionCaseStack=[],this._inInterpolation=!1,this._fullNameStack=[],this.tokens=[],this.errors=[],this.nonNormalizedIcuExpressions=[],this._tokenizeIcu=c.tokenizeExpansionForms||!1,this._interpolationConfig=c.interpolationConfig||kd,this._leadingTriviaCodePoints=c.leadingTriviaChars&&c.leadingTriviaChars.map(p=>p.codePointAt(0)||0),this._canSelfClose=c.canSelfClose||!1,this._allowHtmComponentClosingTags=c.allowHtmComponentClosingTags||!1;let u=c.range||{endPos:o.content.length,startPos:0,startLine:0,startCol:0};this._cursor=c.escapedString?new hb(o,u):new Pd(o,u),this._preserveLineEndings=c.preserveLineEndings||!1,this._i18nNormalizeLineEndingsInICUs=c.i18nNormalizeLineEndingsInICUs||!1,this._tokenizeBlocks=c.tokenizeBlocks??!0,this._tokenizeLet=c.tokenizeLet??!0;try{this._cursor.init()}catch(p){this.handleError(p)}}_processCarriageReturns(o){return this._preserveLineEndings?o:o.replace(rb,`
`)}tokenize(){for(;this._cursor.peek()!==0;){let o=this._cursor.clone();try{if(this._attemptCharCode(60))if(this._attemptCharCode(33))this._attemptStr("[CDATA[")?this._consumeCdata(o):this._attemptStr("--")?this._consumeComment(o):this._attemptStrCaseInsensitive("doctype")?this._consumeDocType(o):this._consumeBogusComment(o);else if(this._attemptCharCode(47))this._consumeTagClose(o);else{let a=this._cursor.clone();this._attemptCharCode(63)?(this._cursor=a,this._consumeBogusComment(o)):this._consumeTagOpen(o)}else this._tokenizeLet&&this._cursor.peek()===64&&!this._inInterpolation&&this._attemptStr("@let")?this._consumeLetDeclaration(o):this._tokenizeBlocks&&this._attemptCharCode(64)?this._consumeBlockStart(o):this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansionCase()&&!this._isInExpansionForm()&&this._attemptCharCode(125)?this._consumeBlockEnd(o):this._tokenizeIcu&&this._tokenizeExpansionForm()||this._consumeWithInterpolation(5,8,()=>this._isTextEnd(),()=>this._isTagStart())}catch(a){this.handleError(a)}}this._beginToken(34),this._endToken([])}_getBlockName(){let o=!1,a=this._cursor.clone();return this._attemptCharCodeUntilFn(c=>fa(c)?!o:Ld(c)?(o=!0,!1):!0),this._cursor.getChars(a).trim()}_consumeBlockStart(o){this._beginToken(25,o);let a=this._endToken([this._getBlockName()]);if(this._cursor.peek()===40)if(this._cursor.advance(),this._consumeBlockParameters(),this._attemptCharCodeUntilFn(Ue),this._attemptCharCode(41))this._attemptCharCodeUntilFn(Ue);else{a.type=29;return}this._attemptCharCode(123)?(this._beginToken(26),this._endToken([])):a.type=29}_consumeBlockEnd(o){this._beginToken(27,o),this._endToken([])}_consumeBlockParameters(){for(this._attemptCharCodeUntilFn(Od);this._cursor.peek()!==41&&this._cursor.peek()!==0;){this._beginToken(28);let o=this._cursor.clone(),a=null,c=0;for(;this._cursor.peek()!==59&&this._cursor.peek()!==0||a!==null;){let u=this._cursor.peek();if(u===92)this._cursor.advance();else if(u===a)a=null;else if(a===null&&bl(u))a=u;else if(u===40&&a===null)c++;else if(u===41&&a===null){if(c===0)break;c>0&&c--}this._cursor.advance()}this._endToken([this._cursor.getChars(o)]),this._attemptCharCodeUntilFn(Od)}}_consumeLetDeclaration(o){if(this._beginToken(30,o),fa(this._cursor.peek()))this._attemptCharCodeUntilFn(Ue);else{let c=this._endToken([this._cursor.getChars(o)]);c.type=33;return}let a=this._endToken([this._getLetDeclarationName()]);if(this._attemptCharCodeUntilFn(Ue),!this._attemptCharCode(61)){a.type=33;return}this._attemptCharCodeUntilFn(c=>Ue(c)&&!vl(c)),this._consumeLetDeclarationValue(),this._cursor.peek()===59?(this._beginToken(32),this._endToken([]),this._cursor.advance()):(a.type=33,a.sourceSpan=this._cursor.getSpan(o))}_getLetDeclarationName(){let o=this._cursor.clone(),a=!1;return this._attemptCharCodeUntilFn(c=>ma(c)||c===36||c===95||a&&gl(c)?(a=!0,!1):!0),this._cursor.getChars(o).trim()}_consumeLetDeclarationValue(){let o=this._cursor.clone();for(this._beginToken(31,o);this._cursor.peek()!==0;){let a=this._cursor.peek();if(a===59)break;bl(a)&&(this._cursor.advance(),this._attemptCharCodeUntilFn(c=>c===92?(this._cursor.advance(),!1):c===a)),this._cursor.advance()}this._endToken([this._cursor.getChars(o)])}_tokenizeExpansionForm(){if(this.isExpansionFormStart())return this._consumeExpansionFormStart(),!0;if(ub(this._cursor.peek())&&this._isInExpansionForm())return this._consumeExpansionCaseStart(),!0;if(this._cursor.peek()===125){if(this._isInExpansionCase())return this._consumeExpansionCaseEnd(),!0;if(this._isInExpansionForm())return this._consumeExpansionFormEnd(),!0}return!1}_beginToken(o,a=this._cursor.clone()){this._currentTokenStart=a,this._currentTokenType=o}_endToken(o,a){if(this._currentTokenStart===null)throw new Cl("Programming error - attempted to end a token when there was no start to the token",this._currentTokenType,this._cursor.getSpan(a));if(this._currentTokenType===null)throw new Cl("Programming error - attempted to end a token which has no token type",null,this._cursor.getSpan(this._currentTokenStart));let c={type:this._currentTokenType,parts:o,sourceSpan:(a??this._cursor).getSpan(this._currentTokenStart,this._leadingTriviaCodePoints)};return this.tokens.push(c),this._currentTokenStart=null,this._currentTokenType=null,c}_createError(o,a){this._isInExpansionForm()&&(o+=` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);let c=new Cl(o,this._currentTokenType,a);return this._currentTokenStart=null,this._currentTokenType=null,new wl(c)}handleError(o){if(o instanceof Sl&&(o=this._createError(o.msg,this._cursor.getSpan(o.cursor))),o instanceof wl)this.errors.push(o.error);else throw o}_attemptCharCode(o){return this._cursor.peek()===o?(this._cursor.advance(),!0):!1}_attemptCharCodeCaseInsensitive(o){return db(this._cursor.peek(),o)?(this._cursor.advance(),!0):!1}_requireCharCode(o){let a=this._cursor.clone();if(!this._attemptCharCode(o))throw this._createError(Zi(this._cursor.peek()),this._cursor.getSpan(a))}_attemptStr(o){let a=o.length;if(this._cursor.charsLeft()<a)return!1;let c=this._cursor.clone();for(let u=0;u<a;u++)if(!this._attemptCharCode(o.charCodeAt(u)))return this._cursor=c,!1;return!0}_attemptStrCaseInsensitive(o){for(let a=0;a<o.length;a++)if(!this._attemptCharCodeCaseInsensitive(o.charCodeAt(a)))return!1;return!0}_requireStr(o){let a=this._cursor.clone();if(!this._attemptStr(o))throw this._createError(Zi(this._cursor.peek()),this._cursor.getSpan(a))}_requireStrCaseInsensitive(o){let a=this._cursor.clone();if(!this._attemptStrCaseInsensitive(o))throw this._createError(Zi(this._cursor.peek()),this._cursor.getSpan(a))}_attemptCharCodeUntilFn(o){for(;!o(this._cursor.peek());)this._cursor.advance()}_requireCharCodeUntilFn(o,a){let c=this._cursor.clone();if(this._attemptCharCodeUntilFn(o),this._cursor.diff(c)<a)throw this._createError(Zi(this._cursor.peek()),this._cursor.getSpan(c))}_attemptUntilChar(o){for(;this._cursor.peek()!==o;)this._cursor.advance()}_readChar(){let o=String.fromCodePoint(this._cursor.peek());return this._cursor.advance(),o}_consumeEntity(o){this._beginToken(9);let a=this._cursor.clone();if(this._cursor.advance(),this._attemptCharCode(35)){let c=this._attemptCharCode(120)||this._attemptCharCode(88),u=this._cursor.clone();if(this._attemptCharCodeUntilFn(lb),this._cursor.peek()!=59){this._cursor.advance();let f=c?Sa.HEX:Sa.DEC;throw this._createError(ob(f,this._cursor.getChars(a)),this._cursor.getSpan())}let p=this._cursor.getChars(u);this._cursor.advance();try{let f=parseInt(p,c?16:10);this._endToken([String.fromCharCode(f),this._cursor.getChars(a)])}catch{throw this._createError(Fd(this._cursor.getChars(a)),this._cursor.getSpan())}}else{let c=this._cursor.clone();if(this._attemptCharCodeUntilFn(cb),this._cursor.peek()!=59)this._beginToken(o,a),this._cursor=c,this._endToken(["&"]);else{let u=this._cursor.getChars(c);this._cursor.advance();let p=wa[u];if(!p)throw this._createError(Fd(u),this._cursor.getSpan(a));this._endToken([p,`&${u};`])}}}_consumeRawText(o,a){this._beginToken(o?6:7);let c=[];for(;;){let u=this._cursor.clone(),p=a();if(this._cursor=u,p)break;o&&this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(c.join(""))]),c.length=0,this._consumeEntity(6),this._beginToken(6)):c.push(this._readChar())}this._endToken([this._processCarriageReturns(c.join(""))])}_consumeComment(o){this._beginToken(10,o),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("-->")),this._beginToken(11),this._requireStr("-->"),this._endToken([])}_consumeBogusComment(o){this._beginToken(10,o),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(11),this._cursor.advance(),this._endToken([])}_consumeCdata(o){this._beginToken(12,o),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("]]>")),this._beginToken(13),this._requireStr("]]>"),this._endToken([])}_consumeDocType(o){this._beginToken(18,o),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(19),this._cursor.advance(),this._endToken([])}_consumePrefixAndName(){let o=this._cursor.clone(),a="";for(;this._cursor.peek()!==58&&!sb(this._cursor.peek());)this._cursor.advance();let c;this._cursor.peek()===58?(a=this._cursor.getChars(o),this._cursor.advance(),c=this._cursor.clone()):c=o,this._requireCharCodeUntilFn(Rd,a===""?0:1);let u=this._cursor.getChars(c);return[a,u]}_consumeTagOpen(o){let a,c,u,p=[];try{if(!ma(this._cursor.peek()))throw this._createError(Zi(this._cursor.peek()),this._cursor.getSpan(o));for(u=this._consumeTagOpenStart(o),c=u.parts[0],a=u.parts[1],this._attemptCharCodeUntilFn(Ue);this._cursor.peek()!==47&&this._cursor.peek()!==62&&this._cursor.peek()!==60&&this._cursor.peek()!==0;){let[g,_]=this._consumeAttributeName();if(this._attemptCharCodeUntilFn(Ue),this._attemptCharCode(61)){this._attemptCharCodeUntilFn(Ue);let F=this._consumeAttributeValue();p.push({prefix:g,name:_,value:F})}else p.push({prefix:g,name:_});this._attemptCharCodeUntilFn(Ue)}this._consumeTagOpenEnd()}catch(g){if(g instanceof wl){u?u.type=4:(this._beginToken(5,o),this._endToken(["<"]));return}throw g}if(this._canSelfClose&&this.tokens[this.tokens.length-1].type===2)return;let f=this._getTagContentType(a,c,this._fullNameStack.length>0,p);this._handleFullNameStackForTagOpen(c,a),f===Kt.RAW_TEXT?this._consumeRawTextWithTagClose(c,a,!1):f===Kt.ESCAPABLE_RAW_TEXT&&this._consumeRawTextWithTagClose(c,a,!0)}_consumeRawTextWithTagClose(o,a,c){this._consumeRawText(c,()=>!this._attemptCharCode(60)||!this._attemptCharCode(47)||(this._attemptCharCodeUntilFn(Ue),!this._attemptStrCaseInsensitive(o?`${o}:${a}`:a))?!1:(this._attemptCharCodeUntilFn(Ue),this._attemptCharCode(62))),this._beginToken(3),this._requireCharCodeUntilFn(u=>u===62,3),this._cursor.advance(),this._endToken([o,a]),this._handleFullNameStackForTagClose(o,a)}_consumeTagOpenStart(o){this._beginToken(0,o);let a=this._consumePrefixAndName();return this._endToken(a)}_consumeAttributeName(){let o=this._cursor.peek();if(o===39||o===34)throw this._createError(Zi(o),this._cursor.getSpan());this._beginToken(14);let a=this._consumePrefixAndName();return this._endToken(a),a}_consumeAttributeValue(){let o;if(this._cursor.peek()===39||this._cursor.peek()===34){let a=this._cursor.peek();this._consumeQuote(a);let c=()=>this._cursor.peek()===a;o=this._consumeWithInterpolation(16,17,c,c),this._consumeQuote(a)}else{let a=()=>Rd(this._cursor.peek());o=this._consumeWithInterpolation(16,17,a,a)}return o}_consumeQuote(o){this._beginToken(15),this._requireCharCode(o),this._endToken([String.fromCodePoint(o)])}_consumeTagOpenEnd(){let o=this._attemptCharCode(47)?2:1;this._beginToken(o),this._requireCharCode(62),this._endToken([])}_consumeTagClose(o){if(this._beginToken(3,o),this._attemptCharCodeUntilFn(Ue),this._allowHtmComponentClosingTags&&this._attemptCharCode(47))this._attemptCharCodeUntilFn(Ue),this._requireCharCode(62),this._endToken([]);else{let[a,c]=this._consumePrefixAndName();this._attemptCharCodeUntilFn(Ue),this._requireCharCode(62),this._endToken([a,c]),this._handleFullNameStackForTagClose(a,c)}}_consumeExpansionFormStart(){this._beginToken(20),this._requireCharCode(123),this._endToken([]),this._expansionCaseStack.push(20),this._beginToken(7);let o=this._readUntil(44),a=this._processCarriageReturns(o);if(this._i18nNormalizeLineEndingsInICUs)this._endToken([a]);else{let u=this._endToken([o]);a!==o&&this.nonNormalizedIcuExpressions.push(u)}this._requireCharCode(44),this._attemptCharCodeUntilFn(Ue),this._beginToken(7);let c=this._readUntil(44);this._endToken([c]),this._requireCharCode(44),this._attemptCharCodeUntilFn(Ue)}_consumeExpansionCaseStart(){this._beginToken(21);let o=this._readUntil(123).trim();this._endToken([o]),this._attemptCharCodeUntilFn(Ue),this._beginToken(22),this._requireCharCode(123),this._endToken([]),this._attemptCharCodeUntilFn(Ue),this._expansionCaseStack.push(22)}_consumeExpansionCaseEnd(){this._beginToken(23),this._requireCharCode(125),this._endToken([]),this._attemptCharCodeUntilFn(Ue),this._expansionCaseStack.pop()}_consumeExpansionFormEnd(){this._beginToken(24),this._requireCharCode(125),this._endToken([]),this._expansionCaseStack.pop()}_consumeWithInterpolation(o,a,c,u){this._beginToken(o);let p=[];for(;!c();){let g=this._cursor.clone();this._interpolationConfig&&this._attemptStr(this._interpolationConfig.start)?(this._endToken([this._processCarriageReturns(p.join(""))],g),p.length=0,this._consumeInterpolation(a,g,u),this._beginToken(o)):this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(p.join(""))]),p.length=0,this._consumeEntity(o),this._beginToken(o)):p.push(this._readChar())}this._inInterpolation=!1;let f=this._processCarriageReturns(p.join(""));return this._endToken([f]),f}_consumeInterpolation(o,a,c){let u=[];this._beginToken(o,a),u.push(this._interpolationConfig.start);let p=this._cursor.clone(),f=null,g=!1;for(;this._cursor.peek()!==0&&(c===null||!c());){let _=this._cursor.clone();if(this._isTagStart()){this._cursor=_,u.push(this._getProcessedChars(p,_)),this._endToken(u);return}if(f===null)if(this._attemptStr(this._interpolationConfig.end)){u.push(this._getProcessedChars(p,_)),u.push(this._interpolationConfig.end),this._endToken(u);return}else this._attemptStr("//")&&(g=!0);let F=this._cursor.peek();this._cursor.advance(),F===92?this._cursor.advance():F===f?f=null:!g&&f===null&&bl(F)&&(f=F)}u.push(this._getProcessedChars(p,this._cursor)),this._endToken(u)}_getProcessedChars(o,a){return this._processCarriageReturns(a.getChars(o))}_isTextEnd(){return!!(this._isTagStart()||this._cursor.peek()===0||this._tokenizeIcu&&!this._inInterpolation&&(this.isExpansionFormStart()||this._cursor.peek()===125&&this._isInExpansionCase())||this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansion()&&(this._isBlockStart()||this._cursor.peek()===64||this._cursor.peek()===125))}_isTagStart(){if(this._cursor.peek()===60){let o=this._cursor.clone();o.advance();let a=o.peek();if(97<=a&&a<=122||65<=a&&a<=90||a===47||a===33)return!0}return!1}_isBlockStart(){if(this._tokenizeBlocks&&this._cursor.peek()===64){let o=this._cursor.clone();if(o.advance(),Ld(o.peek()))return!0}return!1}_readUntil(o){let a=this._cursor.clone();return this._attemptUntilChar(o),this._cursor.getChars(a)}_isInExpansion(){return this._isInExpansionCase()||this._isInExpansionForm()}_isInExpansionCase(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===22}_isInExpansionForm(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===20}isExpansionFormStart(){if(this._cursor.peek()!==123)return!1;if(this._interpolationConfig){let o=this._cursor.clone(),a=this._attemptStr(this._interpolationConfig.start);return this._cursor=o,!a}return!0}_handleFullNameStackForTagOpen(o,a){let c=ya(o,a);(this._fullNameStack.length===0||this._fullNameStack[this._fullNameStack.length-1]===c)&&this._fullNameStack.push(c)}_handleFullNameStackForTagClose(o,a){let c=ya(o,a);this._fullNameStack.length!==0&&this._fullNameStack[this._fullNameStack.length-1]===c&&this._fullNameStack.pop()}};function Ue(o){return!fa(o)||o===0}function Rd(o){return fa(o)||o===62||o===60||o===47||o===39||o===34||o===61||o===0}function sb(o){return(o<97||122<o)&&(o<65||90<o)&&(o<48||o>57)}function lb(o){return o===59||o===0||!pv(o)}function cb(o){return o===59||o===0||!ma(o)}function ub(o){return o!==125}function db(o,a){return Md(o)===Md(a)}function Md(o){return o>=97&&o<=122?o-97+65:o}function Ld(o){return ma(o)||gl(o)||o===95}function Od(o){return o!==59&&Ue(o)}function pb(o){let a=[],c;for(let u=0;u<o.length;u++){let p=o[u];c&&c.type===5&&p.type===5||c&&c.type===16&&p.type===16?(c.parts[0]+=p.parts[0],c.sourceSpan.end=p.sourceSpan.end):(c=p,a.push(c))}return a}var Pd=class bu{constructor(a,c){if(a instanceof bu){this.file=a.file,this.input=a.input,this.end=a.end;let u=a.state;this.state={peek:u.peek,offset:u.offset,line:u.line,column:u.column}}else{if(!c)throw new Error("Programming error: the range argument must be provided with a file argument.");this.file=a,this.input=a.content,this.end=c.endPos,this.state={peek:-1,offset:c.startPos,line:c.startLine,column:c.startCol}}}clone(){return new bu(this)}peek(){return this.state.peek}charsLeft(){return this.end-this.state.offset}diff(a){return this.state.offset-a.state.offset}advance(){this.advanceState(this.state)}init(){this.updatePeek(this.state)}getSpan(a,c){a=a||this;let u=a;if(c)for(;this.diff(a)>0&&c.indexOf(a.peek())!==-1;)u===a&&(a=a.clone()),a.advance();let p=this.locationFromCursor(a),f=this.locationFromCursor(this),g=u!==a?this.locationFromCursor(u):p;return new ce(p,f,g)}getChars(a){return this.input.substring(a.state.offset,this.state.offset)}charAt(a){return this.input.charCodeAt(a)}advanceState(a){if(a.offset>=this.end)throw this.state=a,new Sl('Unexpected character "EOF"',this);let c=this.charAt(a.offset);c===10?(a.line++,a.column=0):vl(c)||a.column++,a.offset++,this.updatePeek(a)}updatePeek(a){a.peek=a.offset>=this.end?0:this.charAt(a.offset)}locationFromCursor(a){return new yl(a.file,a.state.offset,a.state.line,a.state.column)}},hb=class yu extends Pd{constructor(a,c){a instanceof yu?(super(a),this.internalState=E({},a.internalState)):(super(a,c),this.internalState=this.state)}advance(){this.state=this.internalState,super.advance(),this.processEscapeSequence()}init(){super.init(),this.processEscapeSequence()}clone(){return new yu(this)}getChars(a){let c=a.clone(),u="";for(;c.internalState.offset<this.internalState.offset;)u+=String.fromCodePoint(c.peek()),c.advance();return u}processEscapeSequence(){let a=()=>this.internalState.peek;if(a()===92)if(this.internalState=E({},this.state),this.advanceState(this.internalState),a()===110)this.state.peek=10;else if(a()===114)this.state.peek=13;else if(a()===118)this.state.peek=11;else if(a()===116)this.state.peek=9;else if(a()===98)this.state.peek=8;else if(a()===102)this.state.peek=12;else if(a()===117)if(this.advanceState(this.internalState),a()===123){this.advanceState(this.internalState);let c=this.clone(),u=0;for(;a()!==125;)this.advanceState(this.internalState),u++;this.state.peek=this.decodeHexDigits(c,u)}else{let c=this.clone();this.advanceState(this.internalState),this.advanceState(this.internalState),this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(c,4)}else if(a()===120){this.advanceState(this.internalState);let c=this.clone();this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(c,2)}else if(ud(a())){let c="",u=0,p=this.clone();for(;ud(a())&&u<3;)p=this.clone(),c+=String.fromCodePoint(a()),this.advanceState(this.internalState),u++;this.state.peek=parseInt(c,8),this.internalState=p.internalState}else vl(this.internalState.peek)?(this.advanceState(this.internalState),this.state=this.internalState):this.state.peek=this.internalState.peek}decodeHexDigits(a,c){let u=this.input.slice(a.internalState.offset,a.internalState.offset+c),p=parseInt(u,16);if(isNaN(p))throw a.state=a.internalState,new Sl("Invalid hexadecimal escape sequence",a);return p}},Sl=class{constructor(o,a){this.msg=o,this.cursor=a}},ct=class xm extends pd{static create(a,c,u){return new xm(a,c,u)}constructor(a,c,u){super(c,u),this.elementName=a}},fb=class{constructor(o,a){this.rootNodes=o,this.errors=a}},mb=class{constructor(o){this.getTagDefinition=o}parse(o,a,c,u=!1,p){let f=he=>(Re,...qe)=>he(Re.toLowerCase(),...qe),g=u?this.getTagDefinition:f(this.getTagDefinition),_=he=>g(he).getContentType(),F=u?p:f(p),H=ib(o,a,p?(he,Re,qe,Xe)=>{let ot=F(he,Re,qe,Xe);return ot!==void 0?ot:_(he)}:_,c),N=c&&c.canSelfClose||!1,be=c&&c.allowHtmComponentClosingTags||!1,se=new gb(H.tokens,g,N,be,u);return se.build(),new fb(se.rootNodes,H.errors.concat(se.errors))}},gb=class Em{constructor(a,c,u,p,f){this.tokens=a,this.getTagDefinition=c,this.canSelfClose=u,this.allowHtmComponentClosingTags=p,this.isTagNameCaseSensitive=f,this._index=-1,this._containerStack=[],this.rootNodes=[],this.errors=[],this._advance()}build(){for(;this._peek.type!==34;)this._peek.type===0||this._peek.type===4?this._consumeStartTag(this._advance()):this._peek.type===3?(this._closeVoidElement(),this._consumeEndTag(this._advance())):this._peek.type===12?(this._closeVoidElement(),this._consumeCdata(this._advance())):this._peek.type===10?(this._closeVoidElement(),this._consumeComment(this._advance())):this._peek.type===5||this._peek.type===7||this._peek.type===6?(this._closeVoidElement(),this._consumeText(this._advance())):this._peek.type===20?this._consumeExpansion(this._advance()):this._peek.type===25?(this._closeVoidElement(),this._consumeBlockOpen(this._advance())):this._peek.type===27?(this._closeVoidElement(),this._consumeBlockClose(this._advance())):this._peek.type===29?(this._closeVoidElement(),this._consumeIncompleteBlock(this._advance())):this._peek.type===30?(this._closeVoidElement(),this._consumeLet(this._advance())):this._peek.type===18?this._consumeDocType(this._advance()):this._peek.type===33?(this._closeVoidElement(),this._consumeIncompleteLet(this._advance())):this._advance();for(let a of this._containerStack)a instanceof Yi&&this.errors.push(ct.create(a.name,a.sourceSpan,`Unclosed block "${a.name}"`))}_advance(){let a=this._peek;return this._index<this.tokens.length-1&&this._index++,this._peek=this.tokens[this._index],a}_advanceIf(a){return this._peek.type===a?this._advance():null}_consumeCdata(a){let c=this._advance(),u=this._getText(c),p=this._advanceIf(13);this._addToParent(new qv(u,new ce(a.sourceSpan.start,(p||c).sourceSpan.end),[c]))}_consumeComment(a){let c=this._advanceIf(7),u=this._advanceIf(11),p=c!=null?c.parts[0].trim():null,f=u==null?a.sourceSpan:new ce(a.sourceSpan.start,u.sourceSpan.end,a.sourceSpan.fullStart);this._addToParent(new Yv(p,f))}_consumeDocType(a){let c=this._advanceIf(7),u=this._advanceIf(19),p=c!=null?c.parts[0].trim():null,f=new ce(a.sourceSpan.start,(u||c||a).sourceSpan.end);this._addToParent(new Zv(p,f))}_consumeExpansion(a){let c=this._advance(),u=this._advance(),p=[];for(;this._peek.type===21;){let g=this._parseExpansionCase();if(!g)return;p.push(g)}if(this._peek.type!==24){this.errors.push(ct.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '}'."));return}let f=new ce(a.sourceSpan.start,this._peek.sourceSpan.end,a.sourceSpan.fullStart);this._addToParent(new Wv(c.parts[0],u.parts[0],p,f,c.sourceSpan)),this._advance()}_parseExpansionCase(){let a=this._advance();if(this._peek.type!==22)return this.errors.push(ct.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '{'.")),null;let c=this._advance(),u=this._collectExpansionExpTokens(c);if(!u)return null;let p=this._advance();u.push({type:34,parts:[],sourceSpan:p.sourceSpan});let f=new Em(u,this.getTagDefinition,this.canSelfClose,this.allowHtmComponentClosingTags,this.isTagNameCaseSensitive);if(f.build(),f.errors.length>0)return this.errors=this.errors.concat(f.errors),null;let g=new ce(a.sourceSpan.start,p.sourceSpan.end,a.sourceSpan.fullStart),_=new ce(c.sourceSpan.start,p.sourceSpan.end,c.sourceSpan.fullStart);return new Gv(a.parts[0],f.rootNodes,g,a.sourceSpan,_)}_collectExpansionExpTokens(a){let c=[],u=[22];for(;;){if((this._peek.type===20||this._peek.type===22)&&u.push(this._peek.type),this._peek.type===23)if(Nd(u,22)){if(u.pop(),u.length===0)return c}else return this.errors.push(ct.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===24)if(Nd(u,20))u.pop();else return this.errors.push(ct.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===34)return this.errors.push(ct.create(null,a.sourceSpan,"Invalid ICU message. Missing '}'.")),null;c.push(this._advance())}}_getText(a){let c=a.parts[0];if(c.length>0&&c[0]==`
`){let u=this._getClosestParentElement();u!=null&&u.children.length==0&&this.getTagDefinition(u.name).ignoreFirstLf&&(c=c.substring(1))}return c}_consumeText(a){let c=[a],u=a.sourceSpan,p=a.parts[0];if(p.length>0&&p[0]===`
`){let f=this._getContainer();f!=null&&f.children.length===0&&this.getTagDefinition(f.name).ignoreFirstLf&&(p=p.substring(1),c[0]={type:a.type,sourceSpan:a.sourceSpan,parts:[p]})}for(;this._peek.type===8||this._peek.type===5||this._peek.type===9;)a=this._advance(),c.push(a),a.type===8?p+=a.parts.join("").replace(/&([^;]+);/g,Bd):a.type===9?p+=a.parts[0]:p+=a.parts.join("");if(p.length>0){let f=a.sourceSpan;this._addToParent(new zv(p,new ce(u.start,f.end,u.fullStart,u.details),c))}}_closeVoidElement(){let a=this._getContainer();a instanceof Vn&&this.getTagDefinition(a.name).isVoid&&this._containerStack.pop()}_consumeStartTag(a){let[c,u]=a.parts,p=[];for(;this._peek.type===14;)p.push(this._consumeAttr(this._advance()));let f=this._getElementFullName(c,u,this._getClosestParentElement()),g=!1;if(this._peek.type===2){this._advance(),g=!0;let he=this.getTagDefinition(f);this.canSelfClose||he.canSelfClose||ba(f)!==null||he.isVoid||this.errors.push(ct.create(f,a.sourceSpan,`Only void, custom and foreign elements can be self closed "${a.parts[1]}"`))}else this._peek.type===1&&(this._advance(),g=!1);let _=this._peek.sourceSpan.fullStart,F=new ce(a.sourceSpan.start,_,a.sourceSpan.fullStart),H=new ce(a.sourceSpan.start,_,a.sourceSpan.fullStart),N=new ce(a.sourceSpan.start.moveBy(1),a.sourceSpan.end),be=new Vn(f,p,[],F,H,void 0,N),se=this._getContainer();this._pushContainer(be,se instanceof Vn&&this.getTagDefinition(se.name).isClosedByChild(be.name)),g?this._popContainer(f,Vn,F):a.type===4&&(this._popContainer(f,Vn,null),this.errors.push(ct.create(f,F,`Opening tag "${f}" not terminated.`)))}_pushContainer(a,c){c&&this._containerStack.pop(),this._addToParent(a),this._containerStack.push(a)}_consumeEndTag(a){let c=this.allowHtmComponentClosingTags&&a.parts.length===0?null:this._getElementFullName(a.parts[0],a.parts[1],this._getClosestParentElement());if(c&&this.getTagDefinition(c).isVoid)this.errors.push(ct.create(c,a.sourceSpan,`Void elements do not have end tags "${a.parts[1]}"`));else if(!this._popContainer(c,Vn,a.sourceSpan)){let u=`Unexpected closing tag "${c}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;this.errors.push(ct.create(c,a.sourceSpan,u))}}_popContainer(a,c,u){let p=!1;for(let f=this._containerStack.length-1;f>=0;f--){let g=this._containerStack[f];if(ba(g.name)?g.name===a:(a==null||g.name.toLowerCase()===a.toLowerCase())&&g instanceof c)return g.endSourceSpan=u,g.sourceSpan.end=u!==null?u.end:g.sourceSpan.end,this._containerStack.splice(f,this._containerStack.length-f),!p;(g instanceof Yi||g instanceof Vn&&!this.getTagDefinition(g.name).closedByParent)&&(p=!0)}return!1}_consumeAttr(a){let c=ya(a.parts[0],a.parts[1]),u=a.sourceSpan.end,p;this._peek.type===15&&(p=this._advance());let f="",g=[],_,F;if(this._peek.type===16)for(_=this._peek.sourceSpan,F=this._peek.sourceSpan.end;this._peek.type===16||this._peek.type===17||this._peek.type===9;){let N=this._advance();g.push(N),N.type===17?f+=N.parts.join("").replace(/&([^;]+);/g,Bd):N.type===9?f+=N.parts[0]:f+=N.parts.join(""),F=u=N.sourceSpan.end}this._peek.type===15&&(F=u=this._advance().sourceSpan.end);let H=_&&F&&new ce(p?.sourceSpan.start??_.start,F,p?.sourceSpan.fullStart??_.fullStart);return new Kv(c,f,new ce(a.sourceSpan.start,u,a.sourceSpan.fullStart),a.sourceSpan,H,g.length>0?g:void 0,void 0)}_consumeBlockOpen(a){let c=[];for(;this._peek.type===28;){let _=this._advance();c.push(new Td(_.parts[0],_.sourceSpan))}this._peek.type===26&&this._advance();let u=this._peek.sourceSpan.fullStart,p=new ce(a.sourceSpan.start,u,a.sourceSpan.fullStart),f=new ce(a.sourceSpan.start,u,a.sourceSpan.fullStart),g=new Yi(a.parts[0],c,[],p,a.sourceSpan,f);this._pushContainer(g,!1)}_consumeBlockClose(a){this._popContainer(null,Yi,a.sourceSpan)||this.errors.push(ct.create(null,a.sourceSpan,'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'))}_consumeIncompleteBlock(a){let c=[];for(;this._peek.type===28;){let _=this._advance();c.push(new Td(_.parts[0],_.sourceSpan))}let u=this._peek.sourceSpan.fullStart,p=new ce(a.sourceSpan.start,u,a.sourceSpan.fullStart),f=new ce(a.sourceSpan.start,u,a.sourceSpan.fullStart),g=new Yi(a.parts[0],c,[],p,a.sourceSpan,f);this._pushContainer(g,!1),this._popContainer(null,Yi,null),this.errors.push(ct.create(a.parts[0],p,`Incomplete block "${a.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`))}_consumeLet(a){let c=a.parts[0],u,p;if(this._peek.type!==31){this.errors.push(ct.create(a.parts[0],a.sourceSpan,`Invalid @let declaration "${c}". Declaration must have a value.`));return}else u=this._advance();if(this._peek.type!==32){this.errors.push(ct.create(a.parts[0],a.sourceSpan,`Unterminated @let declaration "${c}". Declaration must be terminated with a semicolon.`));return}else p=this._advance();let f=p.sourceSpan.fullStart,g=new ce(a.sourceSpan.start,f,a.sourceSpan.fullStart),_=a.sourceSpan.toString().lastIndexOf(c),F=a.sourceSpan.start.moveBy(_),H=new ce(F,a.sourceSpan.end),N=new Ad(c,u.parts[0],g,H,u.sourceSpan);this._addToParent(N)}_consumeIncompleteLet(a){let c=a.parts[0]??"",u=c?` "${c}"`:"";if(c.length>0){let p=a.sourceSpan.toString().lastIndexOf(c),f=a.sourceSpan.start.moveBy(p),g=new ce(f,a.sourceSpan.end),_=new ce(a.sourceSpan.start,a.sourceSpan.start.moveBy(0)),F=new Ad(c,"",a.sourceSpan,g,_);this._addToParent(F)}this.errors.push(ct.create(a.parts[0],a.sourceSpan,`Incomplete @let declaration${u}. @let declarations must be written as \`@let <name> = <value>;\``))}_getContainer(){return this._containerStack.length>0?this._containerStack[this._containerStack.length-1]:null}_getClosestParentElement(){for(let a=this._containerStack.length-1;a>-1;a--)if(this._containerStack[a]instanceof Vn)return this._containerStack[a];return null}_addToParent(a){let c=this._getContainer();c===null?this.rootNodes.push(a):c.children.push(a)}_getElementFullName(a,c,u){if(a===""&&(a=this.getTagDefinition(c).implicitNamespacePrefix||"",a===""&&u!=null)){let p=va(u.name)[1];this.getTagDefinition(p).preventNamespaceInheritance||(a=ba(u.name))}return ya(a,c)}};function Nd(o,a){return o.length>0&&o[o.length-1]===a}function Bd(o,a){return wa[a]!==void 0?wa[a]||o:/^#x[a-f0-9]+$/i.test(a)?String.fromCodePoint(parseInt(a.slice(2),16)):/^#\d+$/.test(a)?String.fromCodePoint(parseInt(a.slice(1),10)):o}var vb=class extends mb{constructor(){super(_l)}parse(o,a,c,u=!1,p){return super.parse(o,a,c,u,p)}},Dl=null,bb=()=>(Dl||(Dl=new vb),Dl);function $d(o,a={}){let{canSelfClose:c=!1,allowHtmComponentClosingTags:u=!1,isTagNameCaseSensitive:p=!1,getTagContentType:f,tokenizeAngularBlocks:g=!1,tokenizeAngularLetDeclaration:_=!1}=a;return bb().parse(o,"angular-html-parser",{tokenizeExpansionForms:g,interpolationConfig:void 0,canSelfClose:c,allowHtmComponentClosingTags:u,tokenizeBlocks:g,tokenizeLet:_},p,f)}function yb(o,a){let c=new SyntaxError(o+" ("+a.loc.start.line+":"+a.loc.start.column+")");return Object.assign(c,a)}var _b=yb,Jr=3;function Cb(o){let a=o.slice(0,Jr);if(a!=="---"&&a!=="+++")return;let c=o.indexOf(`
`,Jr);if(c===-1)return;let u=o.slice(Jr,c).trim(),p=o.indexOf(`
${a}`,c),f=u;if(f||(f=a==="+++"?"toml":"yaml"),p===-1&&a==="---"&&f==="yaml"&&(p=o.indexOf(`
...`,c)),p===-1)return;let g=p+1+Jr,_=o.charAt(g+1);if(!/\s?/u.test(_))return;let F=o.slice(0,g);return{type:"front-matter",language:f,explicitLanguage:u,value:o.slice(c+1,p),startDelimiter:a,endDelimiter:F.slice(-Jr),raw:F}}function wb(o){let a=Cb(o);if(!a)return{content:o};let{raw:c}=a;return{frontMatter:a,content:O(!1,c,/[^\n]/gu," ")+o.slice(c.length)}}var Sb=wb,Da={attrs:!0,children:!0,cases:!0,expression:!0},Ud=new Set(["parent"]),Qi,xl,El,Db=class Qo{constructor(a={}){w(this,Qi),m(this,"type"),m(this,"parent");for(let c of new Set([...Ud,...Object.keys(a)]))this.setProperty(c,a[c])}setProperty(a,c){if(this[a]!==c){if(a in Da&&(c=c.map(u=>this.createChild(u))),!Ud.has(a)){this[a]=c;return}Object.defineProperty(this,a,{value:c,enumerable:!1,configurable:!0})}}map(a){let c;for(let u in Da){let p=this[u];if(p){let f=Eb(p,g=>g.map(a));c!==p&&(c||(c=new Qo({parent:this.parent})),c.setProperty(u,f))}}if(c)for(let u in this)u in Da||(c[u]=this[u]);return a(c||this)}walk(a){for(let c in Da){let u=this[c];if(u)for(let p=0;p<u.length;p++)u[p].walk(a)}a(this)}createChild(a){let c=a instanceof Qo?a.clone():new Qo(a);return c.setProperty("parent",this),c}insertChildBefore(a,c){let u=this.$children;u.splice(u.indexOf(a),0,this.createChild(c))}removeChild(a){let c=this.$children;c.splice(c.indexOf(a),1)}replaceChild(a,c){let u=this.$children;u[u.indexOf(a)]=this.createChild(c)}clone(){return new Qo(this)}get $children(){return this[C(this,Qi,xl)]}set $children(a){this[C(this,Qi,xl)]=a}get firstChild(){var a;return(a=this.$children)==null?void 0:a[0]}get lastChild(){return dn(!0,this.$children,-1)}get prev(){let a=C(this,Qi,El);return a[a.indexOf(this)-1]}get next(){let a=C(this,Qi,El);return a[a.indexOf(this)+1]}get rawName(){return this.hasExplicitNamespace?this.fullName:this.name}get fullName(){return this.namespace?this.namespace+":"+this.name:this.name}get attrMap(){return Object.fromEntries(this.attrs.map(a=>[a.fullName,a.value]))}};Qi=new WeakSet,xl=function(){return this.type==="angularIcuCase"?"expression":this.type==="angularIcuExpression"?"cases":"children"},El=function(){var o;return((o=this.parent)==null?void 0:o.$children)??[]};var xb=Db;function Eb(o,a){let c=o.map(a);return c.some((u,p)=>u!==o[p])?c:o}var Tb=[{regex:/^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su,parse:Ib},{regex:/^\[if([^\]]*)\]><!$/u,parse:kb},{regex:/^<!\s*\[endif\]$/u,parse:Fb}];function Ab(o,a){if(o.value)for(let{regex:c,parse:u}of Tb){let p=o.value.match(c);if(p)return u(o,a,p)}return null}function Ib(o,a,c){let[,u,p,f]=c,g=4+u.length,_=o.sourceSpan.start.moveBy(g),F=_.moveBy(f.length),[H,N]=(()=>{try{return[!0,a(f,_).children]}catch{return[!1,[{type:"text",value:f,sourceSpan:new ce(_,F)}]]}})();return{type:"ieConditionalComment",complete:H,children:N,condition:O(!1,p.trim(),/\s+/gu," "),sourceSpan:o.sourceSpan,startSourceSpan:new ce(o.sourceSpan.start,_),endSourceSpan:new ce(F,o.sourceSpan.end)}}function kb(o,a,c){let[,u]=c;return{type:"ieConditionalStartComment",condition:O(!1,u.trim(),/\s+/gu," "),sourceSpan:o.sourceSpan}}function Fb(o){return{type:"ieConditionalEndComment",sourceSpan:o.sourceSpan}}var Tl=new Map([["*",new Set(["accesskey","autocapitalize","autofocus","class","contenteditable","dir","draggable","enterkeyhint","hidden","id","inert","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","popover","slot","spellcheck","style","tabindex","title","translate","writingsuggestions"])],["a",new Set(["charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","target","type"])],["applet",new Set(["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"])],["area",new Set(["alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","target","type"])],["audio",new Set(["autoplay","controls","crossorigin","loop","muted","preload","src"])],["base",new Set(["href","target"])],["basefont",new Set(["color","face","size"])],["blockquote",new Set(["cite"])],["body",new Set(["alink","background","bgcolor","link","text","vlink"])],["br",new Set(["clear"])],["button",new Set(["disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","popovertarget","popovertargetaction","type","value"])],["canvas",new Set(["height","width"])],["caption",new Set(["align"])],["col",new Set(["align","char","charoff","span","valign","width"])],["colgroup",new Set(["align","char","charoff","span","valign","width"])],["data",new Set(["value"])],["del",new Set(["cite","datetime"])],["details",new Set(["name","open"])],["dialog",new Set(["open"])],["dir",new Set(["compact"])],["div",new Set(["align"])],["dl",new Set(["compact"])],["embed",new Set(["height","src","type","width"])],["fieldset",new Set(["disabled","form","name"])],["font",new Set(["color","face","size"])],["form",new Set(["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"])],["frame",new Set(["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"])],["frameset",new Set(["cols","rows"])],["h1",new Set(["align"])],["h2",new Set(["align"])],["h3",new Set(["align"])],["h4",new Set(["align"])],["h5",new Set(["align"])],["h6",new Set(["align"])],["head",new Set(["profile"])],["hr",new Set(["align","noshade","size","width"])],["html",new Set(["manifest","version"])],["iframe",new Set(["align","allow","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","loading","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"])],["img",new Set(["align","alt","border","crossorigin","decoding","fetchpriority","height","hspace","ismap","loading","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"])],["input",new Set(["accept","align","alt","autocomplete","checked","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","popovertarget","popovertargetaction","readonly","required","size","src","step","type","usemap","value","width"])],["ins",new Set(["cite","datetime"])],["isindex",new Set(["prompt"])],["label",new Set(["for","form"])],["legend",new Set(["align"])],["li",new Set(["type","value"])],["link",new Set(["as","blocking","charset","color","crossorigin","disabled","fetchpriority","href","hreflang","imagesizes","imagesrcset","integrity","media","referrerpolicy","rel","rev","sizes","target","type"])],["map",new Set(["name"])],["menu",new Set(["compact"])],["meta",new Set(["charset","content","http-equiv","media","name","scheme"])],["meter",new Set(["high","low","max","min","optimum","value"])],["object",new Set(["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","type","typemustmatch","usemap","vspace","width"])],["ol",new Set(["compact","reversed","start","type"])],["optgroup",new Set(["disabled","label"])],["option",new Set(["disabled","label","selected","value"])],["output",new Set(["for","form","name"])],["p",new Set(["align"])],["param",new Set(["name","type","value","valuetype"])],["pre",new Set(["width"])],["progress",new Set(["max","value"])],["q",new Set(["cite"])],["script",new Set(["async","blocking","charset","crossorigin","defer","fetchpriority","integrity","language","nomodule","referrerpolicy","src","type"])],["select",new Set(["autocomplete","disabled","form","multiple","name","required","size"])],["slot",new Set(["name"])],["source",new Set(["height","media","sizes","src","srcset","type","width"])],["style",new Set(["blocking","media","type"])],["table",new Set(["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"])],["tbody",new Set(["align","char","charoff","valign"])],["td",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["template",new Set(["shadowrootclonable","shadowrootdelegatesfocus","shadowrootmode"])],["textarea",new Set(["autocomplete","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","wrap"])],["tfoot",new Set(["align","char","charoff","valign"])],["th",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["thead",new Set(["align","char","charoff","valign"])],["time",new Set(["datetime"])],["tr",new Set(["align","bgcolor","char","charoff","valign"])],["track",new Set(["default","kind","label","src","srclang"])],["ul",new Set(["compact","type"])],["video",new Set(["autoplay","controls","crossorigin","height","loop","muted","playsinline","poster","preload","src","width"])]]),Rb=new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]);function Mb(o){if(o.type==="block"){if(o.name=O(!1,o.name.toLowerCase(),/\s+/gu," ").trim(),o.type="angularControlFlowBlock",!il(o.parameters)){delete o.parameters;return}for(let a of o.parameters)a.type="angularControlFlowBlockParameter";o.parameters={type:"angularControlFlowBlockParameters",children:o.parameters,sourceSpan:new ce(o.parameters[0].sourceSpan.start,dn(!1,o.parameters,-1).sourceSpan.end)}}}function Lb(o){o.type==="letDeclaration"&&(o.type="angularLetDeclaration",o.id=o.name,o.init={type:"angularLetDeclarationInitializer",sourceSpan:new ce(o.valueSpan.start,o.valueSpan.end),value:o.value},delete o.name,delete o.value)}function Ob(o){(o.type==="plural"||o.type==="select")&&(o.clause=o.type,o.type="angularIcuExpression"),o.type==="expansionCase"&&(o.type="angularIcuCase")}function Vd(o,a,c){let{name:u,canSelfClose:p=!0,normalizeTagName:f=!1,normalizeAttributeName:g=!1,allowHtmComponentClosingTags:_=!1,isTagNameCaseSensitive:F=!1,shouldParseAsRawText:H}=a,{rootNodes:N,errors:be}=$d(o,{canSelfClose:p,allowHtmComponentClosingTags:_,isTagNameCaseSensitive:F,getTagContentType:H?(...V)=>H(...V)?Kt.RAW_TEXT:void 0:void 0,tokenizeAngularBlocks:u==="angular"?!0:void 0,tokenizeAngularLetDeclaration:u==="angular"?!0:void 0});if(u==="vue"){if(N.some(Ve=>Ve.type==="docType"&&Ve.value==="html"||Ve.type==="element"&&Ve.name.toLowerCase()==="html"))return Vd(o,Al,c);let V,fe=()=>V??(V=$d(o,{canSelfClose:p,allowHtmComponentClosingTags:_,isTagNameCaseSensitive:F})),We=Ve=>fe().rootNodes.find(({startSourceSpan:ut})=>ut&&ut.start.offset===Ve.startSourceSpan.start.offset)??Ve;for(let[Ve,ut]of N.entries()){let{endSourceSpan:Xi,startSourceSpan:zb}=ut;if(Xi===null)be=fe().errors,N[Ve]=We(ut);else if(Pb(ut,c)){let zd=fe().errors.find(qd=>qd.span.start.offset>zb.start.offset&&qd.span.start.offset<Xi.end.offset);zd&&jd(zd),N[Ve]=We(ut)}}}be.length>0&&jd(be[0]);let se=V=>{let fe=V.name.startsWith(":")?V.name.slice(1).split(":")[0]:null,We=V.nameSpan.toString(),Ve=fe!==null&&We.startsWith(`${fe}:`),ut=Ve?We.slice(fe.length+1):We;V.name=ut,V.namespace=fe,V.hasExplicitNamespace=Ve},he=V=>{switch(V.type){case"element":se(V);for(let fe of V.attrs)se(fe),fe.valueSpan?(fe.value=fe.valueSpan.toString(),/["']/u.test(fe.value[0])&&(fe.value=fe.value.slice(1,-1))):fe.value=null;break;case"comment":V.value=V.sourceSpan.toString().slice(4,-3);break;case"text":V.value=V.sourceSpan.toString();break}},Re=(V,fe)=>{let We=V.toLowerCase();return fe(We)?We:V},qe=V=>{if(V.type==="element"&&(f&&(!V.namespace||V.namespace===V.tagDefinition.implicitNamespacePrefix||Vr(V))&&(V.name=Re(V.name,fe=>Rb.has(fe))),g))for(let fe of V.attrs)fe.namespace||(fe.name=Re(fe.name,We=>Tl.has(V.name)&&(Tl.get("*").has(We)||Tl.get(V.name).has(We))))},Xe=V=>{V.sourceSpan&&V.endSourceSpan&&(V.sourceSpan=new ce(V.sourceSpan.start,V.endSourceSpan.end))},ot=V=>{if(V.type==="element"){let fe=_l(F?V.name:V.name.toLowerCase());!V.namespace||V.namespace===fe.implicitNamespacePrefix||Vr(V)?V.tagDefinition=fe:V.tagDefinition=_l("")}};return Id(new class extends Qv{visitExpansionCase(V,fe){u==="angular"&&this.visitChildren(fe,We=>{We(V.expression)})}visit(V){he(V),ot(V),qe(V),Xe(V)}},N),N}function Pb(o,a){var c;if(o.type!=="element"||o.name!=="template")return!1;let u=(c=o.attrs.find(p=>p.name==="lang"))==null?void 0:c.value;return!u||aa(a,{language:u})==="html"}function jd(o){let{msg:a,span:{start:c,end:u}}=o;throw _b(a,{loc:{start:{line:c.line+1,column:c.col+1},end:{line:u.line+1,column:u.col+1}},cause:o})}function Hd(o,a,c={},u=!0){let{frontMatter:p,content:f}=u?Sb(o):{frontMatter:null,content:o},g=new dd(o,c.filepath),_=new yl(g,0,0,0),F=_.moveBy(o.length),H={type:"root",sourceSpan:new ce(_,F),children:Vd(f,a,c)};if(p){let se=new yl(g,0,0,0),he=se.moveBy(p.raw.length);p.sourceSpan=new ce(se,he),H.children.unshift(p)}let N=new xb(H),be=(se,he)=>{let{offset:Re}=he,qe=O(!1,o.slice(0,Re),/[^\n\r]/gu," "),Xe=Hd(qe+se,a,c,!1);Xe.sourceSpan=new ce(he,dn(!1,Xe.children,-1).sourceSpan.end);let ot=Xe.children[0];return ot.length===Re?Xe.children.shift():(ot.sourceSpan=new ce(ot.sourceSpan.start.moveBy(Re),ot.sourceSpan.end),ot.value=ot.value.slice(Re)),Xe};return N.walk(se=>{if(se.type==="comment"){let he=Ab(se,be);he&&se.parent.replaceChild(se,he)}Mb(se),Lb(se),Ob(se)}),N}function eo(o){return{parse:(a,c)=>Hd(a,o,c),hasPragma:nv,hasIgnorePragma:iv,astFormat:"html",locStart:Hr,locEnd:ua}}var Al={name:"html",normalizeTagName:!0,normalizeAttributeName:!0,allowHtmComponentClosingTags:!0},Nb=eo(Al),Bb=new Set(["mj-style","mj-raw"]),$b=eo(_e(E({},Al),{name:"mjml",shouldParseAsRawText:o=>Bb.has(o)})),Ub=eo({name:"angular"}),Vb=eo({name:"vue",isTagNameCaseSensitive:!0,shouldParseAsRawText(o,a,c,u){return o.toLowerCase()!=="html"&&!c&&(o!=="template"||u.some(({name:p,value:f})=>p==="lang"&&f!=="html"&&f!==""&&f!==void 0))}}),jb=eo({name:"lwc",canSelfClose:!1}),Hb={html:Fv};return h($)})});var Te=new Z("");var kp=null;function jt(){return kp}function Yl(t){kp??=t}var lo=class{},co=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>S(Fp),providedIn:"platform"})}return t})(),Zl=new Z(""),Fp=(()=>{class t extends co{_location;_history;_doc=S(Te);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return jt().getBaseHref(this._doc)}onPopState(e){let n=jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function La(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Ap(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Jt(t){return t&&t[0]!=="?"?`?${t}`:t}var en=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>S(Pa),providedIn:"root"})}return t})(),Oa=new Z(""),Pa=(()=>{class t extends en{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??S(Te).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return La(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Jt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,s){let l=this.prepareExternalUrl(r+Jt(s));this._platformLocation.pushState(e,n,l)}replaceState(e,n,r,s){let l=this.prepareExternalUrl(r+Jt(s));this._platformLocation.replaceState(e,n,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(z(co),z(Oa,8))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yn=(()=>{class t{_subject=new Je;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Yb(Ap(Ip(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Jt(n))}normalize(e){return t.stripTrailingSlash(Kb(this._basePath,Ip(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Jt(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Jt(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Jt;static joinWithSlash=La;static stripTrailingSlash=Ap;static \u0275fac=function(n){return new(n||t)(z(en))};static \u0275prov=I({token:t,factory:()=>Gb(),providedIn:"root"})}return t})();function Gb(){return new Yn(z(en))}function Kb(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ip(t){return t.replace(/\/index.html$/,"")}function Yb(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var tc=(()=>{class t extends en{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=La(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,s){let l=this.prepareExternalUrl(r+Jt(s))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,l)}replaceState(e,n,r,s){let l=this.prepareExternalUrl(r+Jt(s))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(z(co),z(Oa,8))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Ql=/\s+/,Rp=[],ht=(()=>{class t{_ngEl;_renderer;initialClasses=Rp;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Ql):Rp}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Ql):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Ql).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(B(dt),B($t))};static \u0275dir=ne({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Na=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},sr=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,s,l)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new Na(r.item,this._ngForOf,-1,-1),l===null?void 0:l);else if(l==null)n.remove(s===null?void 0:s);else if(s!==null){let d=n.get(s);n.move(d,l),Mp(d,r)}});for(let r=0,s=n.length;r<s;r++){let d=n.get(r).context;d.index=r,d.count=s,d.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let s=n.get(r.currentIndex);Mp(s,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(B(Ei),B(nr),B(Dp))};static \u0275dir=ne({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Mp(t,i){t.context.$implicit=i.item}var Ke=(()=>{class t{_viewContainer;_context=new Ba;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Lp(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Lp(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(B(Ei),B(nr))};static \u0275dir=ne({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Ba=class{$implicit=null;ngIf=null};function Lp(t,i){if(t&&!t.createEmbeddedView)throw new le(2020,!1)}var Xl=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,e){this._viewContainerRef=i,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},Op=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),Zb=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,r){this.ngSwitch=r,r._addCase(),this._view=new Xl(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)(B(Ei),B(nr),B(Op,9))};static \u0275dir=ne({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})();var tn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,s]=e.split("."),l=r.indexOf("-")===-1?void 0:xi.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,s?`${n}${s}`:n,l):this._renderer.removeStyle(this._ngEl.nativeElement,r,l)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(B(dt),B(xp),B($t))};static \u0275dir=ne({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),xt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(B(Ei))};static \u0275dir=ne({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Qe]})}return t})();function Qb(t,i){return new le(2100,!1)}var Jl=class{createSubscription(i,e){return St(()=>i.subscribe({next:e,error:n=>{throw n}}))}dispose(i){St(()=>i.unsubscribe())}},ec=class{createSubscription(i,e){return i.then(n=>e?.(n),n=>{throw n}),{unsubscribe:()=>{e=null}}}dispose(i){i.unsubscribe()}},Xb=new ec,Jb=new Jl,ey=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(ir(e))return Xb;if(bp(e))return Jb;throw Qb(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(B(Ct,16))};static \u0275pipe=ka({name:"async",type:t,pure:!1})}return t})();var we=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function uo(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(s)}return null}var $a="browser",Pp="server";function Zn(t){return t===$a}function lr(t){return t===Pp}var Ii=class{};var Bp=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>new nc(S(Te),window)})}return t})(),nc=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=ny(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}};function ny(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let s=r.shadowRoot;if(s){let l=s.getElementById(i)||s.querySelector(`[name="${i}"]`);if(l)return l}r=n.nextNode()}}return null}var ja=new Z(""),ac=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,s){return this._findPluginFor(n).addEventListener(e,n,r,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(s=>s.supports(e)),!n)throw new le(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(z(ja),z(gt))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),po=class{_doc;constructor(i){this._doc=i}manager},Ua="ng-app-id";function $p(t){for(let i of t)i.remove()}function Up(t,i){let e=i.createElement("style");return e.textContent=t,e}function iy(t,i,e,n){let r=t.head?.querySelectorAll(`style[${Ua}="${i}"],link[${Ua}="${i}"]`);if(r)for(let s of r)s.removeAttribute(Ua),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function rc(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var sc=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,s={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=lr(s),iy(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Up);n?.forEach(r=>this.addUsage(r,this.external,rc))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let s=n.get(e);s?s.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(l=>this.addElement(l,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&($p(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])$p(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Up(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,rc(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Ua,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(z(Te),z(Bl),z($l,8),z(Bt))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),ic={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},lc=/%COMP%/g;var jp="%COMP%",ry=`_nghost-${jp}`,oy=`_ngcontent-${jp}`,ay=!0,sy=new Z("",{providedIn:"root",factory:()=>ay});function ly(t){return oy.replace(lc,t)}function cy(t){return ry.replace(lc,t)}function Hp(t,i){return i.map(e=>e.replace(lc,t))}var cc=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,s,l,d,h,m=null,v=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=l,this.platformId=d,this.ngZone=h,this.nonce=m,this.tracingService=v,this.platformIsServer=lr(d),this.defaultRenderer=new ho(e,l,h,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===ro.ShadowDom&&(n=_e(E({},n),{encapsulation:ro.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof Va?r.applyToHost(e):r instanceof fo&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let l=this.doc,d=this.ngZone,h=this.eventManager,m=this.sharedStylesHost,v=this.removeStylesOnCompDestroy,C=this.platformIsServer,w=this.tracingService;switch(n.encapsulation){case ro.Emulated:s=new Va(h,m,n,this.appId,v,l,d,C,w);break;case ro.ShadowDom:return new oc(h,m,e,n,l,d,this.nonce,C,w);default:s=new fo(h,m,n,v,l,d,C,w);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(z(ac),z(sc),z(Bl),z(sy),z(Te),z(Bt),z(gt),z($l),z(rp,8))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),ho=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,s){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(ic[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Vp(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Vp(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new le(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let s=ic[r];s?i.setAttributeNS(s,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=ic[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(xi.DashCase|xi.Important)?i.style.setProperty(e,n,r&xi.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&xi.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=jt().getGlobalEventTarget(this.doc,i),!i))throw new le(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(i,e,s)),this.eventManager.addEventListener(i,e,s,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function Vp(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var oc=class extends ho{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,r,s,l,d,h,m){super(i,s,l,h,m),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let v=r.styles;v=Hp(r.id,v);for(let w of v){let A=document.createElement("style");d&&A.setAttribute("nonce",d),A.textContent=w,this.shadowRoot.appendChild(A)}let C=r.getExternalStyles?.();if(C)for(let w of C){let A=rc(w,s);d&&A.setAttribute("nonce",d),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},fo=class extends ho{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,s,l,d,h,m){super(i,s,l,d,h),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let v=n.styles;this.styles=m?Hp(m,v):v,this.styleUrls=n.getExternalStyles?.(m)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Va=class extends fo{contentAttr;hostAttr;constructor(i,e,n,r,s,l,d,h,m){let v=r+"-"+n.id;super(i,e,n,s,l,d,h,m,v),this.contentAttr=ly(v),this.hostAttr=cy(v)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Ha=class t extends lo{supportsDOMEvents=!0;static makeCurrent(){Yl(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=dy();return e==null?null:py(e)}resetBaseElement(){mo=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return uo(document.cookie,i)}},mo=null;function dy(){return mo=mo||document.head.querySelector("base"),mo?mo.getAttribute("href"):null}function py(t){return new URL(t,document.baseURI).pathname}var hy=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),qp=(()=>{class t extends po{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,s){return e.addEventListener(n,r,s),()=>this.removeEventListener(e,n,r,s)}removeEventListener(e,n,r,s){return e.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||t)(z(Te))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),zp=["alt","control","meta","shift"],fy={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},my={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Wp=(()=>{class t extends po{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,s){let l=t.parseEventName(n),d=t.eventCallback(l.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>jt().onAndCancel(e,l.domEventName,d,s))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=t._normalizeKey(n.pop()),l="",d=n.indexOf("code");if(d>-1&&(n.splice(d,1),l="code."),zp.forEach(m=>{let v=n.indexOf(m);v>-1&&(n.splice(v,1),l+=m+".")}),l+=s,n.length!=0||s.length===0)return null;let h={};return h.domEventName=r,h.fullKey=l,h}static matchEventFullKeyCode(e,n){let r=fy[e.key]||e.key,s="";return n.indexOf("code.")>-1&&(r=e.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),zp.forEach(l=>{if(l!==r){let d=my[l];d(e)&&(s+=l+".")}}),s+=r,s===n)}static eventCallback(e,n,r){return s=>{t.matchEventFullKeyCode(s,e)&&r.runGuarded(()=>n(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(z(Te))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();function gy(t,i){return Ep(E({rootComponent:t},vy(i)))}function vy(t){return{appProviders:[...wy,...t?.providers??[]],platformProviders:Cy}}function by(){Ha.makeCurrent()}function yy(){return new Nl}function _y(){return np(document),document}var Cy=[{provide:Bt,useValue:$a},{provide:ip,useValue:by,multi:!0},{provide:Te,useFactory:_y}];var wy=[{provide:tp,useValue:"root"},{provide:Nl,useFactory:yy},{provide:ja,useClass:qp,multi:!0,deps:[Te]},{provide:ja,useClass:Wp,multi:!0,deps:[Te]},cc,sc,ac,{provide:mp,useExisting:cc},{provide:Ii,useClass:hy},[]];var ur=class{},go=class{},Qn=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),s=e.slice(n+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let s=i.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let l=this.headers.get(e);if(!l)return;l=l.filter(d=>s.indexOf(d)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var qa=class{encodeKey(i){return Gp(i)}encodeValue(i){return Gp(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Sy(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[l,d]=s==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,s)),i.decodeValue(r.slice(s+1))],h=e.get(l)||[];h.push(d),e.set(l,h)}),e}var Dy=/%(\d[a-f0-9])/gi,xy={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Gp(t){return encodeURIComponent(t).replace(Dy,(i,e)=>xy[e]??i)}function za(t){return`${t}`}var In=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new qa,i.fromString){if(i.fromObject)throw new le(2805,!1);this.map=Sy(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(za):[za(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(s=>{e.push({param:n,value:s,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(za(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(za(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Wa=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Ey(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Kp(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Yp(t){return typeof Blob<"u"&&t instanceof Blob}function Zp(t){return typeof FormData<"u"&&t instanceof FormData}function Ty(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Qp="Content-Type",Xp="Accept",Jp="X-Request-URL",eh="text/plain",th="application/json",Ay=`${th}, ${eh}, */*`,cr=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let s;if(Ey(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new Qn,this.context??=new Wa,!this.params)this.params=new In,this.urlWithParams=e;else{let l=this.params.toString();if(l.length===0)this.urlWithParams=e;else{let d=e.indexOf("?"),h=d===-1?"?":d<e.length-1?"&":"";this.urlWithParams=e+h+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Kp(this.body)||Yp(this.body)||Zp(this.body)||Ty(this.body)?this.body:this.body instanceof In?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Zp(this.body)?null:Yp(this.body)?this.body.type||null:Kp(this.body)?null:typeof this.body=="string"?eh:this.body instanceof In?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?th:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,s=i.transferCache??this.transferCache,l=i.body!==void 0?i.body:this.body,d=i.withCredentials??this.withCredentials,h=i.reportProgress??this.reportProgress,m=i.headers||this.headers,v=i.params||this.params,C=i.context??this.context;return i.setHeaders!==void 0&&(m=Object.keys(i.setHeaders).reduce((w,A)=>w.set(A,i.setHeaders[A]),m)),i.setParams&&(v=Object.keys(i.setParams).reduce((w,A)=>w.set(A,i.setParams[A]),v)),new t(e,n,l,{params:v,headers:m,context:C,reportProgress:h,responseType:r,withCredentials:d,transferCache:s})}},nn=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(nn||{}),dr=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new Qn,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},Ga=class t extends dr{constructor(i={}){super(i)}type=nn.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},vo=class t extends dr{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=nn.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},bo=class extends dr{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Iy=200,ky=204;function uc(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Ya=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let s;if(e instanceof cr)s=e;else{let h;r.headers instanceof Qn?h=r.headers:h=new Qn(r.headers);let m;r.params&&(r.params instanceof In?m=r.params:m=new In({fromObject:r.params})),s=new cr(e,n,r.body!==void 0?r.body:null,{headers:h,context:r.context,params:m,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let l=q(s).pipe(Yt(h=>this.handler.handle(h)));if(e instanceof cr||r.observe==="events")return l;let d=l.pipe(pn(h=>h instanceof vo));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return d.pipe(me(h=>{if(h.body!==null&&!(h.body instanceof ArrayBuffer))throw new le(2806,!1);return h.body}));case"blob":return d.pipe(me(h=>{if(h.body!==null&&!(h.body instanceof Blob))throw new le(2807,!1);return h.body}));case"text":return d.pipe(me(h=>{if(h.body!==null&&typeof h.body!="string")throw new le(2808,!1);return h.body}));case"json":default:return d.pipe(me(h=>h.body))}case"response":return d;default:throw new le(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new In().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,uc(r,n))}post(e,n,r={}){return this.request("POST",e,uc(r,n))}put(e,n,r={}){return this.request("PUT",e,uc(r,n))}static \u0275fac=function(n){return new(n||t)(z(ur))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Fy=new Z("");function Ry(t,i){return i(t)}function My(t,i,e){return(n,r)=>Nt(e,()=>i(n,s=>t(s,r)))}var nh=new Z(""),ih=new Z(""),rh=new Z("",{providedIn:"root",factory:()=>!0});var Ka=(()=>{class t extends ur{backend;injector;chain=null;pendingTasks=S(Ta);contributeToStability=S(rh);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(nh),...this.injector.get(ih,[])]));this.chain=n.reduceRight((r,s)=>My(r,s,this.injector),Ry)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(er(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(z(go),z(qn))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Ly=/^\)\]\}',?\n/,Oy=RegExp(`^${Jp}:`,"m");function Py(t){return"responseURL"in t&&t.responseURL?t.responseURL:Oy.test(t.getAllResponseHeaders())?t.getResponseHeader(Jp):null}var dc=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new le(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Ge(n.\u0275loadImpl()):q(null)).pipe(at(()=>new Kd(s=>{let l=n.build();if(l.open(e.method,e.urlWithParams),e.withCredentials&&(l.withCredentials=!0),e.headers.forEach((P,O)=>l.setRequestHeader(P,O.join(","))),e.headers.has(Xp)||l.setRequestHeader(Xp,Ay),!e.headers.has(Qp)){let P=e.detectContentTypeHeader();P!==null&&l.setRequestHeader(Qp,P)}if(e.responseType){let P=e.responseType.toLowerCase();l.responseType=P!=="json"?P:"text"}let d=e.serializeBody(),h=null,m=()=>{if(h!==null)return h;let P=l.statusText||"OK",O=new Qn(l.getAllResponseHeaders()),ge=Py(l)||e.url;return h=new Ga({headers:O,status:l.status,statusText:P,url:ge}),h},v=()=>{let{headers:P,status:O,statusText:ge,url:Ee}=m(),ve=null;O!==ky&&(ve=typeof l.response>"u"?l.responseText:l.response),O===0&&(O=ve?Iy:0);let Oe=O>=200&&O<300;if(e.responseType==="json"&&typeof ve=="string"){let Rt=ve;ve=ve.replace(Ly,"");try{ve=ve!==""?JSON.parse(ve):null}catch(yt){ve=Rt,Oe&&(Oe=!1,ve={error:yt,text:ve})}}Oe?(s.next(new vo({body:ve,headers:P,status:O,statusText:ge,url:Ee||void 0})),s.complete()):s.error(new bo({error:ve,headers:P,status:O,statusText:ge,url:Ee||void 0}))},C=P=>{let{url:O}=m(),ge=new bo({error:P,status:l.status||0,statusText:l.statusText||"Unknown Error",url:O||void 0});s.error(ge)},w=!1,A=P=>{w||(s.next(m()),w=!0);let O={type:nn.DownloadProgress,loaded:P.loaded};P.lengthComputable&&(O.total=P.total),e.responseType==="text"&&l.responseText&&(O.partialText=l.responseText),s.next(O)},$=P=>{let O={type:nn.UploadProgress,loaded:P.loaded};P.lengthComputable&&(O.total=P.total),s.next(O)};return l.addEventListener("load",v),l.addEventListener("error",C),l.addEventListener("timeout",C),l.addEventListener("abort",C),e.reportProgress&&(l.addEventListener("progress",A),d!==null&&l.upload&&l.upload.addEventListener("progress",$)),l.send(d),s.next({type:nn.Sent}),()=>{l.removeEventListener("error",C),l.removeEventListener("abort",C),l.removeEventListener("load",v),l.removeEventListener("timeout",C),e.reportProgress&&(l.removeEventListener("progress",A),d!==null&&l.upload&&l.upload.removeEventListener("progress",$)),l.readyState!==l.DONE&&l.abort()}})))}static \u0275fac=function(n){return new(n||t)(z(Ii))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),oh=new Z(""),Ny="XSRF-TOKEN",By=new Z("",{providedIn:"root",factory:()=>Ny}),$y="X-XSRF-TOKEN",Uy=new Z("",{providedIn:"root",factory:()=>$y}),yo=class{},Vy=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=uo(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(z(Te),z(By))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();function jy(t,i){let e=t.url.toLowerCase();if(!S(oh)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=S(yo).getToken(),r=S(Uy);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),i(t)}function Hy(...t){let i=[Ya,dc,Ka,{provide:ur,useExisting:Ka},{provide:go,useFactory:()=>S(Fy,{optional:!0})??S(dc)},{provide:nh,useValue:jy,multi:!0},{provide:oh,useValue:!0},{provide:yo,useClass:Vy}];for(let e of t)i.push(...e.\u0275providers);return zn(i)}var ah=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(z(Te))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=z(qy),r},providedIn:"root"})}return t})(),qy=(()=>{class t extends pc{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Di.NONE:return n;case Di.HTML:return tr(n,"HTML")?Si(n):pp(this._doc,String(n)).toString();case Di.STYLE:return tr(n,"Style")?Si(n):n;case Di.SCRIPT:if(tr(n,"Script"))return Si(n);throw new le(5200,!1);case Di.URL:return tr(n,"URL")?Si(n):dp(String(n));case Di.RESOURCE_URL:if(tr(n,"ResourceURL"))return Si(n);throw new le(5201,!1);default:throw new le(5202,!1)}}bypassSecurityTrustHtml(e){return ap(e)}bypassSecurityTrustStyle(e){return sp(e)}bypassSecurityTrustScript(e){return lp(e)}bypassSecurityTrustUrl(e){return cp(e)}bypassSecurityTrustResourceUrl(e){return up(e)}static \u0275fac=function(n){return new(n||t)(z(Te))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pr=class{},sh=(()=>{class t extends pr{getTranslation(e){return q({})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Co=class{},lh=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();function Qa(t,i){if(t===i)return!0;if(t===null||i===null)return!1;if(t!==t&&i!==i)return!0;let e=typeof t,n=typeof i,r,s,l;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(i))return!1;if((r=t.length)==i.length){for(s=0;s<r;s++)if(!Qa(t[s],i[s]))return!1;return!0}}else{if(Array.isArray(i))return!1;l=Object.create(null);for(s in t){if(!Qa(t[s],i[s]))return!1;l[s]=!0}for(s in i)if(!(s in l)&&typeof i[s]<"u")return!1;return!0}return!1}function Xn(t){return typeof t<"u"&&t!==null}function So(t){return Za(t)&&!yc(t)&&t!==null}function Za(t){return typeof t=="object"}function yc(t){return Array.isArray(t)}function _c(t){return typeof t=="string"}function Gy(t){return typeof t=="function"}function hc(t,i){let e=Object.assign({},t);return Za(t)?(Za(t)&&Za(i)&&Object.keys(i).forEach(n=>{So(i[n])?n in t?e[n]=hc(t[n],i[n]):Object.assign(e,{[n]:i[n]}):Object.assign(e,{[n]:i[n]})}),e):hc({},i)}function fc(t,i){let e=i.split(".");i="";do i+=e.shift(),Xn(t)&&Xn(t[i])&&(So(t[i])||yc(t[i])||!e.length)?(t=t[i],i=""):e.length?i+=".":t=void 0;while(e.length);return t}function Ky(t,i,e){let n=i.split("."),r=t;for(let s=0;s<n.length;s++){let l=n[s];s===n.length-1?r[l]=e:((!r[l]||!So(r[l]))&&(r[l]={}),r=r[l])}}var hr=class{},ch=(()=>{class t extends hr{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(_c(e))return this.interpolateString(e,n);if(Gy(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(r,s)=>{let l=fc(n,s);return Xn(l)?l:r}):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),fr=class{},uh=(()=>{class t extends fr{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),wo=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new G;onLangChange=new G;onDefaultLangChange=new G},mc=new Z("ISOLATE_TRANSLATE_SERVICE"),gc=new Z("USE_DEFAULT_LANG"),vc=new Z("DEFAULT_LANGUAGE"),bc=new Z("USE_EXTEND"),_o=t=>jn(t)?t:q(t),kn=(()=>{class t{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,n,r,s,l,d=!0,h=!1,m=!1,v){this.store=e,this.currentLoader=n,this.compiler=r,this.parser=s,this.missingTranslationHandler=l,this.useDefaultLang=d,this.extend=m,h&&(this.store=new wo),v&&this.setDefaultLang(v)}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=e),n.pipe(Zt(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return q(this.translations[e]);this.currentLang||(this.currentLang=e);let n=this.retrieveTranslations(e);return jn(n)?(n.pipe(Zt(1)).subscribe(()=>{this.changeLang(e)}),n):(this.changeLang(e),q(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(Ml(1),Zt(1));return this.loadingTranslations=n.pipe(me(r=>this.compiler.compileTranslations(r,e)),Ml(1),Zt(1)),this.loadingTranslations.subscribe({next:r=>{this.translations[e]=this.extend&&this.translations[e]?E(E({},r),this.translations[e]):r,this.updateLangs(),this.pending=!1},error:r=>{this.pending=!1}}),n}setTranslation(e,n,r=!1){let s=this.compiler.compileTranslations(n,e);(r||this.extend)&&this.translations[e]?this.translations[e]=hc(this.translations[e],s):this.translations[e]=s,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let n=e.filter(r=>!this.langs.includes(r));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,n,r){let s;if(e&&(s=this.runInterpolation(fc(e,n),r)),s===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.runInterpolation(fc(this.translations[this.defaultLang],n),r)),s===void 0){let l={key:n,translateService:this};typeof r<"u"&&(l.interpolateParams=r),s=this.missingTranslationHandler.handle(l)}return s!==void 0?s:n}runInterpolation(e,n){if(yc(e))return e.map(r=>this.runInterpolation(r,n));if(So(e)){let r={};for(let s in e){let l=this.runInterpolation(e[s],n);l!==void 0&&(r[s]=l)}return r}else return this.parser.interpolate(e,n)}getParsedResult(e,n,r){if(n instanceof Array){let s={},l=!1;for(let h of n)s[h]=this.getParsedResultForKey(e,h,r),l=l||jn(s[h]);if(!l)return s;let d=n.map(h=>_o(s[h]));return Ea(d).pipe(me(h=>{let m={};return h.forEach((v,C)=>{m[n[C]]=v}),m}))}return this.getParsedResultForKey(e,n,r)}get(e,n){if(!Xn(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(Yt(r=>_o(this.getParsedResult(r,e,n)))):_o(this.getParsedResult(this.translations[this.currentLang],e,n))}getStreamOnTranslationChange(e,n){if(!Xn(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return io(Ji(()=>this.get(e,n)),this.onTranslationChange.pipe(at(r=>{let s=this.getParsedResult(r.translations,e,n);return _o(s)})))}stream(e,n){if(!Xn(e)||!e.length)throw new Error('Parameter "key" required');return io(Ji(()=>this.get(e,n)),this.onLangChange.pipe(at(r=>{let s=this.getParsedResult(r.translations,e,n);return _o(s)})))}instant(e,n){if(!Xn(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let r=this.getParsedResult(this.translations[this.currentLang],e,n);return jn(r)?Array.isArray(e)?e.reduce((s,l)=>(s[l]=l,s),{}):e:r}set(e,n,r=this.currentLang){Ky(this.translations[r],e,_c(n)?this.compiler.compile(n,r):this.compiler.compileTranslations(n,r)),this.updateLangs(),this.onTranslationChange.emit({lang:r,translations:this.translations[r]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||t)(z(wo),z(pr),z(fr),z(hr),z(Co),z(gc),z(mc),z(bc),z(vc))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jn=(()=>{class t{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,n){this.translate=e,this._ref=n}updateValue(e,n,r){let s=l=>{this.value=l!==void 0?l:e,this.lastKey=e,this._ref.markForCheck()};if(r){let l=this.translate.getParsedResult(r,e,n);jn(l)?l.subscribe(s):s(l)}this.translate.get(e,n).subscribe(s)}transform(e,...n){if(!e||!e.length)return e;if(Qa(e,this.lastKey)&&Qa(n,this.lastParams))return this.value;let r;if(Xn(n[0])&&n.length)if(_c(n[0])&&n[0].length){let s=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{r=JSON.parse(s)}catch(l){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else So(n[0])&&(r=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,r),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,r,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)(B(kn,16),B(Ct,16))};static \u0275pipe=ka({name:"translate",type:t,pure:!1});static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ei=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[e.loader||{provide:pr,useClass:sh},e.compiler||{provide:fr,useClass:uh},e.parser||{provide:hr,useClass:ch},e.missingTranslationHandler||{provide:Co,useClass:lh},wo,{provide:mc,useValue:e.isolate},{provide:gc,useValue:e.useDefaultLang},{provide:bc,useValue:e.extend},{provide:vc,useValue:e.defaultLanguage},kn]}}static forChild(e={}){return{ngModule:t,providers:[e.loader||{provide:pr,useClass:sh},e.compiler||{provide:fr,useClass:uh},e.parser||{provide:hr,useClass:ch},e.missingTranslationHandler||{provide:Co,useClass:lh},{provide:mc,useValue:e.isolate},{provide:gc,useValue:e.useDefaultLang},{provide:bc,useValue:e.extend},{provide:vc,useValue:e.defaultLanguage},kn]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var oe="primary",Po=Symbol("RouteTitle"),xc=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ri(t){return new xc(t)}function bh(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let r={};for(let s=0;s<n.length;s++){let l=n[s],d=t[s];if(l[0]===":")r[l.substring(1)]=d;else if(l!==d.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function Yy(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!gn(t[e],i[e]))return!1;return!0}function gn(t,i){let e=t?Ec(t):void 0,n=i?Ec(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let s=0;s<e.length;s++)if(r=e[s],!yh(t[r],i[r]))return!1;return!0}function Ec(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function yh(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,s)=>n[s]===r)}else return t===i}function _h(t){return t.length>0?t[t.length-1]:null}function oi(t){return jn(t)?t:ir(t)?Ge(Promise.resolve(t)):q(t)}var Zy={exact:wh,subset:Sh},Ch={exact:Qy,subset:Xy,ignored:()=>!0};function dh(t,i,e){return Zy[e.paths](t.root,i.root,e.matrixParams)&&Ch[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function Qy(t,i){return gn(t,i)}function wh(t,i,e){if(!ki(t.segments,i.segments)||!ts(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!wh(t.children[n],i.children[n],e))return!1;return!0}function Xy(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>yh(t[e],i[e]))}function Sh(t,i,e){return Dh(t,i,i.segments,e)}function Dh(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!ki(r,e)||i.hasChildren()||!ts(r,e,n))}else if(t.segments.length===e.length){if(!ki(t.segments,e)||!ts(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Sh(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),s=e.slice(t.segments.length);return!ki(t.segments,r)||!ts(t.segments,r,n)||!t.children[oe]?!1:Dh(t.children[oe],i,s,n)}}function ts(t,i,e){return i.every((n,r)=>Ch[e](t[r].parameters,n.parameters))}var bn=class{root;queryParams;fragment;_queryParamMap;constructor(i=new xe([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Ri(this.queryParams),this._queryParamMap}toString(){return t1.serialize(this)}},xe=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ns(this)}},ti=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Ri(this.parameters),this._parameterMap}toString(){return Eh(this)}};function Jy(t,i){return ki(t,i)&&t.every((e,n)=>gn(e.parameters,i[n].parameters))}function ki(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function e1(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===oe&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==oe&&(e=e.concat(i(r,n)))}),e}var Mi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>new ni,providedIn:"root"})}return t})(),ni=class{parse(i){let e=new Ac(i);return new bn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Do(i.root,!0)}`,n=r1(i.queryParams),r=typeof i.fragment=="string"?`#${n1(i.fragment)}`:"";return`${e}${n}${r}`}},t1=new ni;function ns(t){return t.segments.map(i=>Eh(i)).join("/")}function Do(t,i){if(!t.hasChildren())return ns(t);if(i){let e=t.children[oe]?Do(t.children[oe],!1):"",n=[];return Object.entries(t.children).forEach(([r,s])=>{r!==oe&&n.push(`${r}:${Do(s,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=e1(t,(n,r)=>r===oe?[Do(t.children[oe],!1)]:[`${r}:${Do(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[oe]!=null?`${ns(t)}/${e[0]}`:`${ns(t)}/(${e.join("//")})`}}function xh(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ja(t){return xh(t).replace(/%3B/gi,";")}function n1(t){return encodeURI(t)}function Tc(t){return xh(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function is(t){return decodeURIComponent(t)}function ph(t){return is(t.replace(/\+/g,"%20"))}function Eh(t){return`${Tc(t.path)}${i1(t.parameters)}`}function i1(t){return Object.entries(t).map(([i,e])=>`;${Tc(i)}=${Tc(e)}`).join("")}function r1(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Ja(e)}=${Ja(r)}`).join("&"):`${Ja(e)}=${Ja(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var o1=/^[^\/()?;#]+/;function Cc(t){let i=t.match(o1);return i?i[0]:""}var a1=/^[^\/()?;=#]+/;function s1(t){let i=t.match(a1);return i?i[0]:""}var l1=/^[^=?&#]+/;function c1(t){let i=t.match(l1);return i?i[0]:""}var u1=/^[^&#]+/;function d1(t){let i=t.match(u1);return i?i[0]:""}var Ac=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new xe([],{}):new xe([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[oe]=new xe(i,e)),n}parseSegment(){let i=Cc(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new le(4009,!1);return this.capture(i),new ti(is(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=s1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Cc(this.remaining);r&&(n=r,this.capture(n))}i[is(e)]=is(n)}parseQueryParam(i){let e=c1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let l=d1(this.remaining);l&&(n=l,this.capture(n))}let r=ph(e),s=ph(n);if(i.hasOwnProperty(r)){let l=i[r];Array.isArray(l)||(l=[l],i[r]=l),l.push(s)}else i[r]=s}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Cc(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new le(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):i&&(s=oe);let l=this.parseChildren();e[s]=Object.keys(l).length===1?l[oe]:new xe([],l),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new le(4011,!1)}};function Th(t){return t.segments.length>0?new xe([],{[oe]:t}):t}function Ah(t){let i={};for(let[n,r]of Object.entries(t.children)){let s=Ah(r);if(n===oe&&s.segments.length===0&&s.hasChildren())for(let[l,d]of Object.entries(s.children))i[l]=d;else(s.segments.length>0||s.hasChildren())&&(i[n]=s)}let e=new xe(t.segments,i);return p1(e)}function p1(t){if(t.numberOfChildren===1&&t.children[oe]){let i=t.children[oe];return new xe(t.segments.concat(i.segments),i.children)}return t}function ii(t){return t instanceof bn}function Ih(t,i,e=null,n=null){let r=kh(t);return Fh(r,i,e,n)}function kh(t){let i;function e(s){let l={};for(let h of s.children){let m=e(h);l[h.outlet]=m}let d=new xe(s.url,l);return s===t&&(i=d),d}let n=e(t.root),r=Th(n);return i??r}function Fh(t,i,e,n){let r=t;for(;r.parent;)r=r.parent;if(i.length===0)return wc(r,r,r,e,n);let s=h1(i);if(s.toRoot())return wc(r,r,new xe([],{}),e,n);let l=f1(s,r,t),d=l.processChildren?Eo(l.segmentGroup,l.index,s.commands):Mh(l.segmentGroup,l.index,s.commands);return wc(r,l.segmentGroup,d,e,n)}function os(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ao(t){return typeof t=="object"&&t!=null&&t.outlets}function wc(t,i,e,n,r){let s={};n&&Object.entries(n).forEach(([h,m])=>{s[h]=Array.isArray(m)?m.map(v=>`${v}`):`${m}`});let l;t===i?l=e:l=Rh(t,i,e);let d=Th(Ah(l));return new bn(d,s,r)}function Rh(t,i,e){let n={};return Object.entries(t.children).forEach(([r,s])=>{s===i?n[r]=e:n[r]=Rh(s,i,e)}),new xe(t.segments,n)}var as=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&os(n[0]))throw new le(4003,!1);let r=n.find(Ao);if(r&&r!==_h(n))throw new le(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function h1(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new as(!0,0,t);let i=0,e=!1,n=t.reduce((r,s,l)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let d={};return Object.entries(s.outlets).forEach(([h,m])=>{d[h]=typeof m=="string"?m.split("/"):m}),[...r,{outlets:d}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:l===0?(s.split("/").forEach((d,h)=>{h==0&&d==="."||(h==0&&d===""?e=!0:d===".."?i++:d!=""&&r.push(d))}),r):[...r,s]},[]);return new as(e,i,n)}var vr=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function f1(t,i,e){if(t.isAbsolute)return new vr(i,!0,0);if(!e)return new vr(i,!1,NaN);if(e.parent===null)return new vr(e,!0,0);let n=os(t.commands[0])?0:1,r=e.segments.length-1+n;return m1(e,r,t.numberOfDoubleDots)}function m1(t,i,e){let n=t,r=i,s=e;for(;s>r;){if(s-=r,n=n.parent,!n)throw new le(4005,!1);r=n.segments.length}return new vr(n,!1,r-s)}function g1(t){return Ao(t[0])?t[0].outlets:{[oe]:t}}function Mh(t,i,e){if(t??=new xe([],{}),t.segments.length===0&&t.hasChildren())return Eo(t,i,e);let n=v1(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let s=new xe(t.segments.slice(0,n.pathIndex),{});return s.children[oe]=new xe(t.segments.slice(n.pathIndex),t.children),Eo(s,0,r)}else return n.match&&r.length===0?new xe(t.segments,{}):n.match&&!t.hasChildren()?Ic(t,i,e):n.match?Eo(t,0,r):Ic(t,i,e)}function Eo(t,i,e){if(e.length===0)return new xe(t.segments,{});{let n=g1(e),r={};if(Object.keys(n).some(s=>s!==oe)&&t.children[oe]&&t.numberOfChildren===1&&t.children[oe].segments.length===0){let s=Eo(t.children[oe],i,e);return new xe(t.segments,s.children)}return Object.entries(n).forEach(([s,l])=>{typeof l=="string"&&(l=[l]),l!==null&&(r[s]=Mh(t.children[s],i,l))}),Object.entries(t.children).forEach(([s,l])=>{n[s]===void 0&&(r[s]=l)}),new xe(t.segments,r)}}function v1(t,i,e){let n=0,r=i,s={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return s;let l=t.segments[r],d=e[n];if(Ao(d))break;let h=`${d}`,m=n<e.length-1?e[n+1]:null;if(r>0&&h===void 0)break;if(h&&m&&typeof m=="object"&&m.outlets===void 0){if(!fh(h,m,l))return s;n+=2}else{if(!fh(h,{},l))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Ic(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let s=e[r];if(Ao(s)){let h=b1(s.outlets);return new xe(n,h)}if(r===0&&os(e[0])){let h=t.segments[i];n.push(new ti(h.path,hh(e[0]))),r++;continue}let l=Ao(s)?s.outlets[oe]:`${s}`,d=r<e.length-1?e[r+1]:null;l&&d&&os(d)?(n.push(new ti(l,hh(d))),r+=2):(n.push(new ti(l,{})),r++)}return new xe(n,{})}function b1(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Ic(new xe([],{}),0,n))}),i}function hh(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function fh(t,i,e){return t==e.path&&gn(i,e.parameters)}var rs="imperative",Ye=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(Ye||{}),Tt=class{id;url;constructor(i,e){this.id=i,this.url=e}},ri=class extends Tt{type=Ye.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},At=class extends Tt{urlAfterRedirects;type=Ye.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},bt=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(bt||{}),yr=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(yr||{}),vn=class extends Tt{reason;code;type=Ye.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},yn=class extends Tt{reason;code;type=Ye.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},_r=class extends Tt{error;target;type=Ye.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Io=class extends Tt{urlAfterRedirects;state;type=Ye.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ss=class extends Tt{urlAfterRedirects;state;type=Ye.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ls=class extends Tt{urlAfterRedirects;state;shouldActivate;type=Ye.GuardsCheckEnd;constructor(i,e,n,r,s){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},cs=class extends Tt{urlAfterRedirects;state;type=Ye.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},us=class extends Tt{urlAfterRedirects;state;type=Ye.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ds=class{route;type=Ye.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ps=class{route;type=Ye.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},hs=class{snapshot;type=Ye.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fs=class{snapshot;type=Ye.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ms=class{snapshot;type=Ye.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gs=class{snapshot;type=Ye.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Cr=class{routerEvent;position;anchor;type=Ye.Scroll;constructor(i,e,n){this.routerEvent=i,this.position=e,this.anchor=n}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},ko=class{},wr=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function y1(t,i){return t.providers&&!t._injector&&(t._injector=Ia(t.providers,i,`Route: ${t.path}`)),t._injector??i}function rn(t){return t.outlet||oe}function _1(t,i){let e=t.filter(n=>rn(n)===i);return e.push(...t.filter(n=>rn(n)!==i)),e}function No(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var vs=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return No(this.route?.snapshot)??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Li(this.rootInjector)}},Li=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new vs(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(z(qn))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bs=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=kc(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=kc(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Fc(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Fc(i,this._root).map(e=>e.value)}};function kc(t,i){if(t===i.value)return i;for(let e of i.children){let n=kc(t,e);if(n)return n}return null}function Fc(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Fc(t,e);if(n.length)return n.unshift(i),n}return[]}var Et=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function gr(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var Fo=class extends bs{snapshot;constructor(i,e){super(i),this.snapshot=e,$c(this,i)}toString(){return this.snapshot.toString()}};function Lh(t){let i=C1(t),e=new Pt([new ti("",{})]),n=new Pt({}),r=new Pt({}),s=new Pt({}),l=new Pt(""),d=new _n(e,n,s,l,r,oe,t,i.root);return d.snapshot=i.root,new Fo(new Et(d,[]),i)}function C1(t){let i={},e={},n={},r="",s=new Fi([],i,n,r,e,oe,t,null,{});return new Ro("",new Et(s,[]))}var _n=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,s,l,d,h){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=l,this.component=d,this._futureSnapshot=h,this.title=this.dataSubject?.pipe(me(m=>m[Po]))??q(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(me(i=>Ri(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(me(i=>Ri(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ys(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:E(E({},i.params),t.params),data:E(E({},i.data),t.data),resolve:E(E(E(E({},t.data),i.data),r?.data),t._resolvedData)}:n={params:E({},t.params),data:E({},t.data),resolve:E(E({},t.data),t._resolvedData??{})},r&&Ph(r)&&(n.resolve[Po]=r.title),n}var Fi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Po]}constructor(i,e,n,r,s,l,d,h,m){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=l,this.component=d,this.routeConfig=h,this._resolve=m}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ri(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ri(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Ro=class extends bs{url;constructor(i,e){super(e),this.url=i,$c(this,e)}toString(){return Oh(this._root)}};function $c(t,i){i.value._routerState=t,i.children.forEach(e=>$c(t,e))}function Oh(t){let i=t.children.length>0?` { ${t.children.map(Oh).join(", ")} } `:"";return`${t.value}${i}`}function Sc(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,gn(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),gn(i.params,e.params)||t.paramsSubject.next(e.params),Yy(i.url,e.url)||t.urlSubject.next(e.url),gn(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Rc(t,i){let e=gn(t.params,i.params)&&Jy(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||Rc(t.parent,i.parent))}function Ph(t){return typeof t.title=="string"||t.title===null}var Nh=new Z(""),Uc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=oe;activateEvents=new G;deactivateEvents=new G;attachEvents=new G;detachEvents=new G;routerOutletData=fn(void 0);parentContexts=S(Li);location=S(Ei);changeDetector=S(Ct);inputBinder=S(Bo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new le(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new le(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new le(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new le(4013,!1);this._activatedRoute=e;let r=this.location,l=e.snapshot.component,d=this.parentContexts.getOrCreateContext(this.name).children,h=new Mc(e,d,r.injector,this.routerOutletData);this.activated=r.createComponent(l,{index:r.length,injector:h,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Qe]})}return t})(),Mc=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===_n?this.route:i===Li?this.childContexts:i===Nh?this.outletData:this.parent.get(i,e)}},Bo=new Z(""),Vc=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=xa([n.queryParams,n.params,n.data]).pipe(at(([s,l,d],h)=>(d=E(E(E({},s),l),d),h===0?q(d):Promise.resolve(d)))).subscribe(s=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let l=Tp(n.component);if(!l){this.unsubscribeFromRouteData(e);return}for(let{templateName:d}of l.inputs)e.activatedComponentRef.setInput(d,s[d])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),jc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=W({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&L(0,"router-outlet")},dependencies:[Uc],encapsulation:2})}return t})();function Hc(t){let i=t.children&&t.children.map(Hc),e=i?_e(E({},t),{children:i}):E({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==oe&&(e.component=jc),e}function w1(t,i,e){let n=Mo(t,i._root,e?e._root:void 0);return new Fo(n,i)}function Mo(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=S1(t,i,e);return new Et(n,r)}else{if(t.shouldAttach(i.value)){let s=t.retrieve(i.value);if(s!==null){let l=s.route;return l.value._futureSnapshot=i.value,l.children=i.children.map(d=>Mo(t,d)),l}}let n=D1(i.value),r=i.children.map(s=>Mo(t,s));return new Et(n,r)}}function S1(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Mo(t,n,r);return Mo(t,n)})}function D1(t){return new _n(new Pt(t.url),new Pt(t.params),new Pt(t.queryParams),new Pt(t.fragment),new Pt(t.data),t.outlet,t.component,t)}var Sr=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Bh="ngNavigationCancelingError";function _s(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=ii(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=$h(!1,bt.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function $h(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Bh]=!0,e.cancellationCode=i,e}function x1(t){return Uh(t)&&ii(t.url)}function Uh(t){return!!t&&t[Bh]}var E1=(t,i,e,n)=>me(r=>(new Lc(i,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),Lc=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,s){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Sc(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=gr(e);i.children.forEach(s=>{let l=s.value.outlet;this.deactivateRoutes(s,r[l],n),delete r[l]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(i,e,n){let r=i.value,s=e?e.value:null;if(r===s)if(r.component){let l=n.getContext(r.outlet);l&&this.deactivateChildRoutes(i,e,l.children)}else this.deactivateChildRoutes(i,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,s=gr(i);for(let l of Object.values(s))this.deactivateRouteAndItsChildren(l,r);if(n&&n.outlet){let l=n.outlet.detach(),d=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:l,route:i,contexts:d})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,s=gr(i);for(let l of Object.values(s))this.deactivateRouteAndItsChildren(l,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=gr(e);i.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new gs(s.value.snapshot))}),i.children.length&&this.forwardEvent(new fs(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,s=e?e.value:null;if(Sc(r),r===s)if(r.component){let l=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,l.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let l=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let d=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),l.children.onOutletReAttached(d.contexts),l.attachRef=d.componentRef,l.route=d.route.value,l.outlet&&l.outlet.attach(d.componentRef,d.route.value),Sc(d.route.value),this.activateChildRoutes(i,null,l.children)}else l.attachRef=null,l.route=r,l.outlet&&l.outlet.activateWith(r,l.injector),this.activateChildRoutes(i,null,l.children)}else this.activateChildRoutes(i,null,n)}},Cs=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},br=class{component;route;constructor(i,e){this.component=i,this.route=e}};function T1(t,i,e){let n=t._root,r=i?i._root:null;return xo(n,r,e,[n.value])}function A1(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function xr(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!ep(t)?t:i.get(t):n}function xo(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=gr(i);return t.children.forEach(l=>{I1(l,s[l.value.outlet],e,n.concat([l.value]),r),delete s[l.value.outlet]}),Object.entries(s).forEach(([l,d])=>To(d,e.getContext(l),r)),r}function I1(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=t.value,l=i?i.value:null,d=e?e.getContext(t.value.outlet):null;if(l&&s.routeConfig===l.routeConfig){let h=k1(l,s,s.routeConfig.runGuardsAndResolvers);h?r.canActivateChecks.push(new Cs(n)):(s.data=l.data,s._resolvedData=l._resolvedData),s.component?xo(t,i,d?d.children:null,n,r):xo(t,i,e,n,r),h&&d&&d.outlet&&d.outlet.isActivated&&r.canDeactivateChecks.push(new br(d.outlet.component,l))}else l&&To(i,d,r),r.canActivateChecks.push(new Cs(n)),s.component?xo(t,null,d?d.children:null,n,r):xo(t,null,e,n,r);return r}function k1(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!ki(t.url,i.url);case"pathParamsOrQueryParamsChange":return!ki(t.url,i.url)||!gn(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Rc(t,i)||!gn(t.queryParams,i.queryParams);case"paramsChange":default:return!Rc(t,i)}}function To(t,i,e){let n=gr(t),r=t.value;Object.entries(n).forEach(([s,l])=>{r.component?i?To(l,i.children.getContext(s),e):To(l,null,e):To(l,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new br(i.outlet.component,r)):e.canDeactivateChecks.push(new br(null,r)):e.canDeactivateChecks.push(new br(null,r))}function $o(t){return typeof t=="function"}function F1(t){return typeof t=="boolean"}function R1(t){return t&&$o(t.canLoad)}function M1(t){return t&&$o(t.canActivate)}function L1(t){return t&&$o(t.canActivateChild)}function O1(t){return t&&$o(t.canDeactivate)}function P1(t){return t&&$o(t.canMatch)}function Vh(t){return t instanceof Yd||t?.name==="EmptyError"}var es=Symbol("INITIAL_VALUE");function Dr(){return at(t=>xa(t.map(i=>i.pipe(Zt(1),Xd(es)))).pipe(me(i=>{for(let e of i)if(e!==!0){if(e===es)return es;if(e===!1||N1(e))return e}return!0}),pn(i=>i!==es),Zt(1)))}function N1(t){return ii(t)||t instanceof Sr}function B1(t,i){return mt(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:l}}=e;return l.length===0&&s.length===0?q(_e(E({},e),{guardsResult:!0})):$1(l,n,r,t).pipe(mt(d=>d&&F1(d)?U1(n,s,t,i):q(d)),me(d=>_e(E({},e),{guardsResult:d})))})}function $1(t,i,e,n){return Ge(t).pipe(mt(r=>q1(r.component,r.route,e,i,n)),Hn(r=>r!==!0,!0))}function U1(t,i,e,n){return Ge(i).pipe(Yt(r=>io(j1(r.route.parent,n),V1(r.route,n),z1(t,r.path,e),H1(t,r.route,e))),Hn(r=>r!==!0,!0))}function V1(t,i){return t!==null&&i&&i(new ms(t)),q(!0)}function j1(t,i){return t!==null&&i&&i(new hs(t)),q(!0)}function H1(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return q(!0);let r=n.map(s=>Ji(()=>{let l=No(i)??e,d=xr(s,l),h=M1(d)?d.canActivate(i,t):Nt(l,()=>d(i,t));return oi(h).pipe(Hn())}));return q(r).pipe(Dr())}function z1(t,i,e){let n=i[i.length-1],s=i.slice(0,i.length-1).reverse().map(l=>A1(l)).filter(l=>l!==null).map(l=>Ji(()=>{let d=l.guards.map(h=>{let m=No(l.node)??e,v=xr(h,m),C=L1(v)?v.canActivateChild(n,t):Nt(m,()=>v(n,t));return oi(C).pipe(Hn())});return q(d).pipe(Dr())}));return q(s).pipe(Dr())}function q1(t,i,e,n,r){let s=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!s||s.length===0)return q(!0);let l=s.map(d=>{let h=No(i)??r,m=xr(d,h),v=O1(m)?m.canDeactivate(t,i,e,n):Nt(h,()=>m(t,i,e,n));return oi(v).pipe(Hn())});return q(l).pipe(Dr())}function W1(t,i,e,n){let r=i.canLoad;if(r===void 0||r.length===0)return q(!0);let s=r.map(l=>{let d=xr(l,t),h=R1(d)?d.canLoad(i,e):Nt(t,()=>d(i,e));return oi(h)});return q(s).pipe(Dr(),jh(n))}function jh(t){return Gd(st(i=>{if(typeof i!="boolean")throw _s(t,i)}),me(i=>i===!0))}function G1(t,i,e,n){let r=i.canMatch;if(!r||r.length===0)return q(!0);let s=r.map(l=>{let d=xr(l,t),h=P1(d)?d.canMatch(i,e):Nt(t,()=>d(i,e));return oi(h)});return q(s).pipe(Dr(),jh(n))}var Lo=class{segmentGroup;constructor(i){this.segmentGroup=i||null}},Oo=class extends Error{urlTree;constructor(i){super(),this.urlTree=i}};function mr(t){return to(new Lo(t))}function K1(t){return to(new le(4e3,!1))}function Y1(t){return to($h(!1,bt.GuardRejected))}var Oc=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return q(n);if(r.numberOfChildren>1||!r.children[oe])return K1(`${i.redirectTo}`);r=r.children[oe]}}applyRedirectCommands(i,e,n,r,s){if(typeof e!="string"){let d=e,{queryParams:h,fragment:m,routeConfig:v,url:C,outlet:w,params:A,data:$,title:P}=r,O=Nt(s,()=>d({params:A,data:$,queryParams:h,fragment:m,routeConfig:v,url:C,outlet:w,title:P}));if(O instanceof bn)throw new Oo(O);e=O}let l=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),i,n);if(e[0]==="/")throw new Oo(l);return l}applyRedirectCreateUrlTree(i,e,n,r){let s=this.createSegmentGroup(i,e.root,n,r);return new bn(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let d=s.substring(1);n[r]=e[d]}else n[r]=s}),n}createSegmentGroup(i,e,n,r){let s=this.createSegments(i,e.segments,n,r),l={};return Object.entries(e.children).forEach(([d,h])=>{l[d]=this.createSegmentGroup(i,h,n,r)}),new xe(s,l)}createSegments(i,e,n,r){return e.map(s=>s.path[0]===":"?this.findPosParam(i,s,r):this.findOrReturn(s,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new le(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}},Pc={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Z1(t,i,e,n,r){let s=Hh(t,i,e);return s.matched?(n=y1(i,n),G1(n,i,e,r).pipe(me(l=>l===!0?s:E({},Pc)))):q(s)}function Hh(t,i,e){if(i.path==="**")return Q1(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?E({},Pc):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||bh)(e,t,i);if(!r)return E({},Pc);let s={};Object.entries(r.posParams??{}).forEach(([d,h])=>{s[d]=h.path});let l=r.consumed.length>0?E(E({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:l,positionalParamSegments:r.posParams??{}}}function Q1(t){return{matched:!0,parameters:t.length>0?_h(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function mh(t,i,e,n){return e.length>0&&e2(t,e,n)?{segmentGroup:new xe(i,J1(n,new xe(e,t.children))),slicedSegments:[]}:e.length===0&&t2(t,e,n)?{segmentGroup:new xe(t.segments,X1(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new xe(t.segments,t.children),slicedSegments:e}}function X1(t,i,e,n){let r={};for(let s of e)if(Ss(t,i,s)&&!n[rn(s)]){let l=new xe([],{});r[rn(s)]=l}return E(E({},n),r)}function J1(t,i){let e={};e[oe]=i;for(let n of t)if(n.path===""&&rn(n)!==oe){let r=new xe([],{});e[rn(n)]=r}return e}function e2(t,i,e){return e.some(n=>Ss(t,i,n)&&rn(n)!==oe)}function t2(t,i,e){return e.some(n=>Ss(t,i,n))}function Ss(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function n2(t,i,e){return i.length===0&&!t.children[e]}var Nc=class{};function i2(t,i,e,n,r,s,l="emptyOnly"){return new Bc(t,i,e,n,r,l,s).recognize()}var r2=31,Bc=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,s,l,d){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=l,this.urlSerializer=d,this.applyRedirects=new Oc(this.urlSerializer,this.urlTree)}noMatchError(i){return new le(4002,`'${i.segmentGroup}'`)}recognize(){let i=mh(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(me(({children:e,rootSnapshot:n})=>{let r=new Et(n,e),s=new Ro("",r),l=Ih(n,[],this.urlTree.queryParams,this.urlTree.fragment);return l.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(l),{state:s,tree:l}}))}match(i){let e=new Fi([],Object.freeze({}),Object.freeze(E({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),oe,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,oe,e).pipe(me(n=>({children:n,rootSnapshot:e})),wi(n=>{if(n instanceof Oo)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Lo?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,s):this.processSegment(i,e,n,n.segments,r,!0,s).pipe(me(l=>l instanceof Et?[l]:[]))}processChildren(i,e,n,r){let s=[];for(let l of Object.keys(n.children))l==="primary"?s.unshift(l):s.push(l);return Ge(s).pipe(Yt(l=>{let d=n.children[l],h=_1(e,l);return this.processSegmentGroup(i,h,d,l,r)}),Qd((l,d)=>(l.push(...d),l)),Fl(null),Zd(),mt(l=>{if(l===null)return mr(n);let d=zh(l);return o2(d),q(d)}))}processSegment(i,e,n,r,s,l,d){return Ge(e).pipe(Yt(h=>this.processSegmentAgainstRoute(h._injector??i,e,h,n,r,s,l,d).pipe(wi(m=>{if(m instanceof Lo)return q(null);throw m}))),Hn(h=>!!h),wi(h=>{if(Vh(h))return n2(n,r,s)?q(new Nc):mr(n);throw h}))}processSegmentAgainstRoute(i,e,n,r,s,l,d,h){return rn(n)!==l&&(l===oe||!Ss(r,s,n))?mr(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,s,l,h):this.allowRedirects&&d?this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,s,l,h):mr(r)}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,s,l,d){let{matched:h,parameters:m,consumedSegments:v,positionalParamSegments:C,remainingSegments:w}=Hh(e,r,s);if(!h)return mr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>r2&&(this.allowRedirects=!1));let A=new Fi(s,m,Object.freeze(E({},this.urlTree.queryParams)),this.urlTree.fragment,gh(r),rn(r),r.component??r._loadedComponent??null,r,vh(r)),$=ys(A,d,this.paramsInheritanceStrategy);A.params=Object.freeze($.params),A.data=Object.freeze($.data);let P=this.applyRedirects.applyRedirectCommands(v,r.redirectTo,C,A,i);return this.applyRedirects.lineralizeSegments(r,P).pipe(mt(O=>this.processSegment(i,n,e,O.concat(w),l,!1,d)))}matchSegmentAgainstRoute(i,e,n,r,s,l){let d=Z1(e,n,r,i,this.urlSerializer);return n.path==="**"&&(e.children={}),d.pipe(at(h=>h.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(at(({routes:m})=>{let v=n._loadedInjector??i,{parameters:C,consumedSegments:w,remainingSegments:A}=h,$=new Fi(w,C,Object.freeze(E({},this.urlTree.queryParams)),this.urlTree.fragment,gh(n),rn(n),n.component??n._loadedComponent??null,n,vh(n)),P=ys($,l,this.paramsInheritanceStrategy);$.params=Object.freeze(P.params),$.data=Object.freeze(P.data);let{segmentGroup:O,slicedSegments:ge}=mh(e,w,A,m);if(ge.length===0&&O.hasChildren())return this.processChildren(v,m,O,$).pipe(me(ve=>new Et($,ve)));if(m.length===0&&ge.length===0)return q(new Et($,[]));let Ee=rn(n)===s;return this.processSegment(v,m,O,ge,Ee?oe:s,!0,$).pipe(me(ve=>new Et($,ve instanceof Et?[ve]:[])))}))):mr(e)))}getChildConfig(i,e,n){return e.children?q({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?q({routes:e._loadedRoutes,injector:e._loadedInjector}):W1(i,e,n,this.urlSerializer).pipe(mt(r=>r?this.configLoader.loadChildren(i,e).pipe(st(s=>{e._loadedRoutes=s.routes,e._loadedInjector=s.injector})):Y1(e))):q({routes:[],injector:i})}};function o2(t){t.sort((i,e)=>i.value.outlet===oe?-1:e.value.outlet===oe?1:i.value.outlet.localeCompare(e.value.outlet))}function a2(t){let i=t.value.routeConfig;return i&&i.path===""}function zh(t){let i=[],e=new Set;for(let n of t){if(!a2(n)){i.push(n);continue}let r=i.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=zh(n.children);i.push(new Et(n.value,r))}return i.filter(n=>!e.has(n))}function gh(t){return t.data||{}}function vh(t){return t.resolve||{}}function s2(t,i,e,n,r,s){return mt(l=>i2(t,i,e,n,l.extractedUrl,r,s).pipe(me(({state:d,tree:h})=>_e(E({},l),{targetSnapshot:d,urlAfterRedirects:h}))))}function l2(t,i){return mt(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return q(e);let s=new Set(r.map(h=>h.route)),l=new Set;for(let h of s)if(!l.has(h))for(let m of qh(h))l.add(m);let d=0;return Ge(l).pipe(Yt(h=>s.has(h)?c2(h,n,t,i):(h.data=ys(h,h.parent,t).resolve,q(void 0))),st(()=>d++),Rl(1),mt(h=>d===l.size?q(e):An))})}function qh(t){let i=t.children.map(e=>qh(e)).flat();return[t,...i]}function c2(t,i,e,n){let r=t.routeConfig,s=t._resolve;return r?.title!==void 0&&!Ph(r)&&(s[Po]=r.title),u2(s,t,i,n).pipe(me(l=>(t._resolvedData=l,t.data=ys(t,t.parent,e).resolve,null)))}function u2(t,i,e,n){let r=Ec(t);if(r.length===0)return q({});let s={};return Ge(r).pipe(mt(l=>d2(t[l],i,e,n).pipe(Hn(),st(d=>{if(d instanceof Sr)throw _s(new ni,d);s[l]=d}))),Rl(1),me(()=>s),wi(l=>Vh(l)?An:to(l)))}function d2(t,i,e,n){let r=No(i)??n,s=xr(t,r),l=s.resolve?s.resolve(i,e):Nt(r,()=>s(i,e));return oi(l)}function Dc(t){return at(i=>{let e=t(i);return e?Ge(e).pipe(me(()=>i)):q(i)})}var zc=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===oe);return n}getResolvedTitleForRoute(e){return e.data[Po]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>S(Wh),providedIn:"root"})}return t})(),Wh=(()=>{class t extends zc{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(z(ah))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oi=new Z("",{providedIn:"root",factory:()=>({})}),Pi=new Z(""),Ds=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=S(Sp);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return q(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=oi(e.loadComponent()).pipe(me(Kh),st(s=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=s}),er(()=>{this.componentLoaders.delete(e)})),r=new kl(n,()=>new Je).pipe(Il());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return q({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=Gh(n,this.compiler,e,this.onLoadEndListener).pipe(er(()=>{this.childrenLoaders.delete(n)})),l=new kl(s,()=>new Je).pipe(Il());return this.childrenLoaders.set(n,l),l}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Gh(t,i,e,n){return oi(t.loadChildren()).pipe(me(Kh),mt(r=>r instanceof vp||Array.isArray(r)?q(r):Ge(i.compileModuleAsync(r))),me(r=>{n&&n(t);let s,l,d=!1;return Array.isArray(r)?(l=r,d=!0):(s=r.create(e).injector,l=s.get(Pi,[],{optional:!0,self:!0}).flat()),{routes:l.map(Hc),injector:s}}))}function p2(t){return t&&typeof t=="object"&&"default"in t}function Kh(t){return p2(t)?t.default:t}var xs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>S(h2),providedIn:"root"})}return t})(),h2=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qc=new Z(""),Wc=new Z("");function Yh(t,i,e){let n=t.get(Wc),r=t.get(Te);return t.get(gt).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(m=>setTimeout(m));let s,l=new Promise(m=>{s=m}),d=r.startViewTransition(()=>(s(),f2(t))),{onViewTransitionCreated:h}=n;return h&&Nt(t,()=>h({transition:d,from:i,to:e})),l})}function f2(t){return new Promise(i=>{op({read:()=>setTimeout(i)},{injector:t})})}var Gc=new Z(""),Es=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Je;transitionAbortSubject=new Je;configLoader=S(Ds);environmentInjector=S(qn);destroyRef=S(Pl);urlSerializer=S(Mi);rootContexts=S(Li);location=S(Yn);inputBindingEnabled=S(Bo,{optional:!0})!==null;titleStrategy=S(zc);options=S(Oi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=S(xs);createViewTransition=S(qc,{optional:!0});navigationErrorHandler=S(Gc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ds(r)),n=r=>this.events.next(new ps(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(_e(E({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(e){return this.transitions=new Pt(null),this.transitions.pipe(pn(n=>n!==null),at(n=>{let r=!1,s=!1;return q(n).pipe(at(l=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",bt.SupersededByNewNavigation),An;this.currentTransition=n,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?_e(E({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&h!=="reload"){let m="";return this.events.next(new yn(l.id,this.urlSerializer.serialize(l.rawUrl),m,yr.IgnoredSameUrlNavigation)),l.resolve(!1),An}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return q(l).pipe(at(m=>(this.events.next(new ri(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?An:Promise.resolve(m))),s2(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),st(m=>{n.targetSnapshot=m.targetSnapshot,n.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation=_e(E({},this.currentNavigation),{finalUrl:m.urlAfterRedirects});let v=new Io(m.id,this.urlSerializer.serialize(m.extractedUrl),this.urlSerializer.serialize(m.urlAfterRedirects),m.targetSnapshot);this.events.next(v)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:m,extractedUrl:v,source:C,restoredState:w,extras:A}=l,$=new ri(m,this.urlSerializer.serialize(v),C,w);this.events.next($);let P=Lh(this.rootComponentType).snapshot;return this.currentTransition=n=_e(E({},l),{targetSnapshot:P,urlAfterRedirects:v,extras:_e(E({},A),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=v,q(n)}else{let m="";return this.events.next(new yn(l.id,this.urlSerializer.serialize(l.extractedUrl),m,yr.IgnoredByUrlHandlingStrategy)),l.resolve(!1),An}}),st(l=>{let d=new ss(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}),me(l=>(this.currentTransition=n=_e(E({},l),{guards:T1(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),n)),B1(this.environmentInjector,l=>this.events.next(l)),st(l=>{if(n.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw _s(this.urlSerializer,l.guardsResult);let d=new ls(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(d)}),pn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",bt.GuardRejected),!1)),Dc(l=>{if(l.guards.canActivateChecks.length!==0)return q(l).pipe(st(d=>{let h=new cs(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}),at(d=>{let h=!1;return q(d).pipe(l2(this.paramsInheritanceStrategy,this.environmentInjector),st({next:()=>h=!0,complete:()=>{h||this.cancelNavigationTransition(d,"",bt.NoDataFromResolver)}}))}),st(d=>{let h=new us(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}))}),Dc(l=>{let d=h=>{let m=[];h.routeConfig?.loadComponent&&!h.routeConfig._loadedComponent&&m.push(this.configLoader.loadComponent(h.routeConfig).pipe(st(v=>{h.component=v}),me(()=>{})));for(let v of h.children)m.push(...d(v));return m};return xa(d(l.targetSnapshot.root)).pipe(Fl(null),Zt(1))}),Dc(()=>this.afterPreactivation()),at(()=>{let{currentSnapshot:l,targetSnapshot:d}=n,h=this.createViewTransition?.(this.environmentInjector,l.root,d.root);return h?Ge(h).pipe(me(()=>n)):q(n)}),me(l=>{let d=w1(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=n=_e(E({},l),{targetRouterState:d}),this.currentNavigation.targetRouterState=d,n}),st(()=>{this.events.next(new ko)}),E1(this.rootContexts,e.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Zt(1),st({next:l=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new At(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{r=!0}}),Jd(this.transitionAbortSubject.pipe(st(l=>{throw l}))),er(()=>{!r&&!s&&this.cancelNavigationTransition(n,"",bt.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),wi(l=>{if(this.destroyed)return n.resolve(!1),An;if(s=!0,Uh(l))this.events.next(new vn(n.id,this.urlSerializer.serialize(n.extractedUrl),l.message,l.cancellationCode)),x1(l)?this.events.next(new wr(l.url,l.navigationBehaviorOptions)):n.resolve(!1);else{let d=new _r(n.id,this.urlSerializer.serialize(n.extractedUrl),l,n.targetSnapshot??void 0);try{let h=Nt(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(h instanceof Sr){let{message:m,cancellationCode:v}=_s(this.urlSerializer,h);this.events.next(new vn(n.id,this.urlSerializer.serialize(n.extractedUrl),m,v)),this.events.next(new wr(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(d),l}catch(h){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(h)}}return An}))}))}cancelNavigationTransition(e,n,r){let s=new vn(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(s),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function m2(t){return t!==rs}var Zh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>S(g2),providedIn:"root"})}return t})(),ws=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},g2=(()=>{class t extends ws{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qh=(()=>{class t{urlSerializer=S(Mi);options=S(Oi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=S(Yn);urlHandlingStrategy=S(xs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new bn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let s=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,l=r??s;return l instanceof bn?this.urlSerializer.serialize(l):l}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Lh(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:()=>S(v2),providedIn:"root"})}return t})(),v2=(()=>{class t extends Qh{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate")})})}handleRouterEvent(e,n){e instanceof ri?this.updateStateMemento():e instanceof yn?this.commitTransition(n):e instanceof Io?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof ko?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof vn&&(e.code===bt.GuardRejected||e.code===bt.NoDataFromResolver)?this.restoreHistory(n):e instanceof _r?this.restoreHistory(n,!0):e instanceof At&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:s,state:l}=n;if(this.location.isCurrentPathEqualTo(e)||s){let d=this.browserPageId,h=E(E({},l),this.generateNgRouterState(r,d));this.location.replaceState(e,"",h)}else{let d=E(E({},l),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",d)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===e.finalUrl&&s===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ts(t,i){t.events.pipe(pn(e=>e instanceof At||e instanceof vn||e instanceof _r||e instanceof yn),me(e=>e instanceof At||e instanceof yn?0:(e instanceof vn?e.code===bt.Redirect||e.code===bt.SupersededByNewNavigation:!1)?2:1),pn(e=>e!==2),Zt(1)).subscribe(()=>{i()})}var b2={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},y2={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},on=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=S(jl);stateManager=S(Qh);options=S(Oi,{optional:!0})||{};pendingTasks=S(Ta);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=S(Es);urlSerializer=S(Mi);location=S(Yn);urlHandlingStrategy=S(xs);_events=new Je;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=S(Zh);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=S(Pi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!S(Bo,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Wd;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof vn&&n.code!==bt.Redirect&&n.code!==bt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof At)this.navigated=!0;else if(n instanceof wr){let l=n.navigationBehaviorOptions,d=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),h=E({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||m2(r.source)},l);this.scheduleNavigation(d,rs,null,h,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}C2(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),rs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r)=>{this.navigateToSyncWithBrowser(e,r,n)})}navigateToSyncWithBrowser(e,n,r){let s={replaceUrl:!0},l=r?.navigationId?r:null;if(r){let h=E({},r);delete h.navigationId,delete h.\u0275routerPageId,Object.keys(h).length!==0&&(s.state=h)}let d=this.parseUrl(e);this.scheduleNavigation(d,n,l,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Hc),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:s,fragment:l,queryParamsHandling:d,preserveFragment:h}=n,m=h?this.currentUrlTree.fragment:l,v=null;switch(d??this.options.defaultQueryParamsHandling){case"merge":v=E(E({},this.currentUrlTree.queryParams),s);break;case"preserve":v=this.currentUrlTree.queryParams;break;default:v=s||null}v!==null&&(v=this.removeEmptyProps(v));let C;try{let w=r?r.snapshot:this.routerState.snapshot.root;C=kh(w)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),C=this.currentUrlTree.root}return Fh(C,e,v,m??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=ii(e)?e:this.parseUrl(e),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,rs,null,n)}navigate(e,n={skipLocationChange:!1}){return _2(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=E({},b2):n===!1?r=E({},y2):r=n,ii(e))return dh(this.currentUrlTree,e,r);let s=this.parseUrl(e);return dh(this.currentUrlTree,s,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(e,n,r,s,l){if(this.disposed)return Promise.resolve(!1);let d,h,m;l?(d=l.resolve,h=l.reject,m=l.promise):m=new Promise((C,w)=>{d=C,h=w});let v=this.pendingTasks.add();return Ts(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:s,resolve:d,reject:h,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(C=>Promise.reject(C))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _2(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new le(4008,!1)}function C2(t){return!(t instanceof ko)&&!(t instanceof wr)}var As=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Je;constructor(e,n,r,s,l,d){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=s,this.el=l,this.locationStrategy=d;let h=l.nativeElement.tagName?.toLowerCase();this.isAnchorElement=h==="a"||h==="area",this.isAnchorElement?this.subscription=e.events.subscribe(m=>{m instanceof At&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(ii(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,s,l){let d=this.urlTree;if(d===null||this.isAnchorElement&&(e!==0||n||r||s||l||typeof this.target=="string"&&this.target!="_self"))return!0;let h={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(d,h),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:fp(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,s=this.el.nativeElement;n!==null?r.setAttribute(s,e,n):r.removeAttribute(s,e)}get urlTree(){return this.routerLinkInput===null?null:ii(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||t)(B(on),B(_n),Ol("tabindex"),B($t),B(dt),B(en))};static \u0275dir=ne({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&J("click",function(l){return r.onClick(l.button,l.ctrlKey,l.shiftKey,l.altKey,l.metaKey)}),n&2&&M("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",j],skipLocationChange:[2,"skipLocationChange","skipLocationChange",j],replaceUrl:[2,"replaceUrl","replaceUrl",j],routerLink:"routerLink"},features:[Qe]})}return t})(),w2=(()=>{class t{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new G;constructor(e,n,r,s,l){this.router=e,this.element=n,this.renderer=r,this.cdr=s,this.link=l,this.routerEventsSubscription=e.events.subscribe(d=>{d instanceof At&&this.update()})}ngAfterContentInit(){q(this.links.changes,q(null)).pipe(no()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=Ge(e).pipe(no()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=S2(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let s=r.urlTree;return s?e.isActive(s,n):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(B(on),B(dt),B($t),B(Ct),B(As,8))};static \u0275dir=ne({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,s){if(n&1&&pe(s,As,5),n&2){let l;ee(l=te())&&(r.links=l)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Qe]})}return t})();function S2(t){return!!t.paths}var Uo=class{};var Xh=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,s){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(pn(e=>e instanceof At),Yt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,n){let r=[];for(let s of n){s.providers&&!s._injector&&(s._injector=Ia(s.providers,e,`Route: ${s.path}`));let l=s._injector??e,d=s._loadedInjector??l;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(l,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(d,s.children??s._loadedRoutes))}return Ge(r).pipe(no())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(e,n):r=q(null);let s=r.pipe(mt(l=>l===null?q(void 0):(n._loadedRoutes=l.routes,n._loadedInjector=l.injector,this.processRoutes(l.injector??e,l.routes))));if(n.loadComponent&&!n._loadedComponent){let l=this.loader.loadComponent(n);return Ge([s,l]).pipe(no())}else return s})}static \u0275fac=function(n){return new(n||t)(z(on),z(qn),z(Uo),z(Ds))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jh=new Z(""),D2=(()=>{class t{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(e,n,r,s,l={}){this.urlSerializer=e,this.transitions=n,this.viewportScroller=r,this.zone=s,this.options=l,l.scrollPositionRestoration||="disabled",l.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof ri?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof At?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof yn&&e.code===yr.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Cr&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Cr(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){gp()};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();function x2(t,...i){return zn([{provide:Pi,multi:!0,useValue:t},[],{provide:_n,useFactory:ef,deps:[on]},{provide:Hl,multi:!0,useFactory:tf},i.map(e=>e.\u0275providers)])}function ef(t){return t.routerState.root}function Vo(t,i){return{\u0275kind:t,\u0275providers:i}}function tf(){let t=S(Qt);return i=>{let e=t.get(zl);if(i!==e.components[0])return;let n=t.get(on),r=t.get(nf);t.get(Yc)===1&&n.initialNavigation(),t.get(af,null,Ll.Optional)?.setUpPreloading(),t.get(Jh,null,Ll.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var nf=new Z("",{factory:()=>new Je}),Yc=new Z("",{providedIn:"root",factory:()=>1});function rf(){let t=[{provide:Yc,useValue:0},oo(()=>{let i=S(Qt);return i.get(Zl,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(on),s=i.get(nf);Ts(r,()=>{n(!0)}),i.get(Es).afterPreactivation=()=>(n(!0),s.closed?q(void 0):s),r.initialNavigation()}))})];return Vo(2,t)}function of(){let t=[oo(()=>{S(on).setUpLocationChangeListener()}),{provide:Yc,useValue:2}];return Vo(3,t)}var af=new Z("");function sf(t){return Vo(0,[{provide:af,useExisting:Xh},{provide:Uo,useExisting:t}])}function lf(){return Vo(8,[Vc,{provide:Bo,useExisting:Vc}])}function cf(t){Ul("NgRouterViewTransitions");let i=[{provide:qc,useValue:Yh},{provide:Wc,useValue:E({skipNextTransition:!!t?.skipInitialTransition},t)}];return Vo(9,i)}var uf=[Yn,{provide:Mi,useClass:ni},on,Li,{provide:_n,useFactory:ef,deps:[on]},Ds,[]],E2=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[uf,[],{provide:Pi,multi:!0,useValue:e},[],n?.errorHandler?{provide:Gc,useValue:n.errorHandler}:[],{provide:Oi,useValue:n||{}},n?.useHash?A2():I2(),T2(),n?.preloadingStrategy?sf(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?k2(n):[],n?.bindToComponentInputs?lf().\u0275providers:[],n?.enableViewTransitions?cf().\u0275providers:[],F2()]}}static forChild(e){return{ngModule:t,providers:[{provide:Pi,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function T2(){return{provide:Jh,useFactory:()=>{let t=S(Bp),i=S(gt),e=S(Oi),n=S(Es),r=S(Mi);return e.scrollOffset&&t.setOffset(e.scrollOffset),new D2(r,n,t,i,e)}}}function A2(){return{provide:en,useClass:tc}}function I2(){return{provide:en,useClass:Pa}}function k2(t){return[t.initialNavigation==="disabled"?of().\u0275providers:[],t.initialNavigation==="enabledBlocking"?rf().\u0275providers:[]]}var Kc=new Z("");function F2(){return[{provide:Kc,useFactory:tf},{provide:Hl,multi:!0,useExisting:Kc}]}var bf=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(B($t),B(dt))};static \u0275dir=ne({type:t})}return t})(),R2=(()=>{class t extends bf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275dir=ne({type:t,features:[U]})}return t})(),Ir=new Z("");var M2={provide:Ir,useExisting:hn(()=>kr),multi:!0};function L2(){let t=jt()?jt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var O2=new Z(""),kr=(()=>{class t extends bf{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!L2())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(B($t),B(dt),B(O2,8))};static \u0275dir=ne({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&J("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[ue([M2]),U]})}return t})();function yf(t){return t==null||P2(t)===0}function P2(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ps=new Z(""),_f=new Z("");function N2(t){return yf(t.value)?{required:!0}:null}function B2(t){if(!t)return Zc;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(yf(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Zc(t){return null}function Cf(t){return t!=null}function wf(t){return ir(t)?Ge(t):t}function Sf(t){let i={};return t.forEach(e=>{i=e!=null?E(E({},i),e):i}),Object.keys(i).length===0?null:i}function Df(t,i){return i.map(e=>e(t))}function $2(t){return!t.validate}function xf(t){return t.map(i=>$2(i)?i:e=>i.validate(e))}function U2(t){if(!t)return null;let i=t.filter(Cf);return i.length==0?null:function(e){return Sf(Df(e,i))}}function eu(t){return t!=null?U2(xf(t)):null}function V2(t){if(!t)return null;let i=t.filter(Cf);return i.length==0?null:function(e){let n=Df(e,i).map(wf);return Ea(n).pipe(me(Sf))}}function tu(t){return t!=null?V2(xf(t)):null}function df(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function j2(t){return t._rawValidators}function H2(t){return t._rawAsyncValidators}function Qc(t){return t?Array.isArray(t)?t:[t]:[]}function ks(t,i){return Array.isArray(t)?t.includes(i):t===i}function pf(t,i){let e=Qc(i);return Qc(t).forEach(r=>{ks(e,r)||e.push(r)}),e}function hf(t,i){return Qc(i).filter(e=>!ks(t,e))}var Fs=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=eu(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=tu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Ar=class extends Fs{name;get formDirective(){return null}get path(){return null}},an=class extends Fs{_parent=null;name=null;valueAccessor=null},Rs=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},z2={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},lI=_e(E({},z2),{"[class.ng-submitted]":"isSubmitted"}),Fr=(()=>{class t extends Rs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(B(an,2))};static \u0275dir=ne({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&_t("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[U]})}return t})(),Ns=(()=>{class t extends Rs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(B(Ar,10))};static \u0275dir=ne({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&_t("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[U]})}return t})();var jo="VALID",Is="INVALID",Er="PENDING",Ho="DISABLED",ai=class{},Ms=class extends ai{value;source;constructor(i,e){super(),this.value=i,this.source=e}},qo=class extends ai{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Wo=class extends ai{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Tr=class extends ai{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Xc=class extends ai{source;constructor(i){super(),this.source=i}},Jc=class extends ai{source;constructor(i){super(),this.source=i}};function Ef(t){return(Bs(t)?t.validators:t)||null}function q2(t){return Array.isArray(t)?eu(t):t||null}function Tf(t,i){return(Bs(i)?i.asyncValidators:t)||null}function W2(t){return Array.isArray(t)?tu(t):t||null}function Bs(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function G2(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new le(1e3,"");if(!n[e])throw new le(1001,"")}function K2(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new le(1002,"")})}var Ls=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return St(this.statusReactive)}set status(i){St(()=>this.statusReactive.set(i))}_status=Dt(()=>this.statusReactive());statusReactive=Be(void 0);get valid(){return this.status===jo}get invalid(){return this.status===Is}get pending(){return this.status==Er}get disabled(){return this.status===Ho}get enabled(){return this.status!==Ho}errors;get pristine(){return St(this.pristineReactive)}set pristine(i){St(()=>this.pristineReactive.set(i))}_pristine=Dt(()=>this.pristineReactive());pristineReactive=Be(!0);get dirty(){return!this.pristine}get touched(){return St(this.touchedReactive)}set touched(i){St(()=>this.touchedReactive.set(i))}_touched=Dt(()=>this.touchedReactive());touchedReactive=Be(!1);get untouched(){return!this.touched}_events=new Je;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(pf(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(pf(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(hf(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(hf(i,this._rawAsyncValidators))}hasValidator(i){return ks(this._rawValidators,i)}hasAsyncValidator(i){return ks(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(_e(E({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Wo(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Wo(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(_e(E({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new qo(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new qo(!0,n))}markAsPending(i={}){this.status=Er;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Tr(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(_e(E({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ho,this.errors=null,this._forEachChild(r=>{r.disable(_e(E({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ms(this.value,n)),this._events.next(new Tr(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_e(E({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=jo,this._forEachChild(n=>{n.enable(_e(E({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(_e(E({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===jo||this.status===Er)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ms(this.value,e)),this._events.next(new Tr(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(_e(E({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ho:jo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Er,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=wf(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Tr(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?Ho:this.errors?Is:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Er)?Er:this._anyControlsHaveStatus(Is)?Is:jo}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),r&&this._events.next(new qo(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Wo(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Bs(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=q2(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=W2(this._rawAsyncValidators)}},Os=class extends Ls{constructor(i,e,n){super(Ef(e),Tf(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){K2(this,!0,i),Object.keys(i).forEach(n=>{G2(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,s)=>{n=e(n,r,s)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var nu=new Z("",{providedIn:"root",factory:()=>iu}),iu="always";function Y2(t,i){return[...i.path,t]}function Af(t,i,e=iu){If(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Q2(t,i),J2(t,i),X2(t,i),Z2(t,i)}function ff(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Z2(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function If(t,i){let e=j2(t);i.validator!==null?t.setValidators(df(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=H2(t);i.asyncValidator!==null?t.setAsyncValidators(df(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();ff(i._rawValidators,r),ff(i._rawAsyncValidators,r)}function Q2(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&kf(t,i)})}function X2(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&kf(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function kf(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function J2(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function e_(t,i){t==null,If(t,i)}function t_(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function n_(t){return Object.getPrototypeOf(t.constructor)===R2}function i_(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function r_(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(s=>{s.constructor===kr?e=s:n_(s)?n=s:r=s}),r||n||e||null}var o_={provide:Ar,useExisting:hn(()=>Go)},zo=Promise.resolve(),Go=(()=>{class t extends Ar{callSetDisabledState;get submitted(){return St(this.submittedReactive)}_submitted=Dt(()=>this.submittedReactive());submittedReactive=Be(!1);_directives=new Set;form;ngSubmit=new G;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new Os({},eu(e),tu(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){zo.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Af(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){zo.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){zo.then(()=>{let n=this._findContainer(e.path),r=new Os({});e_(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){zo.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){zo.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),i_(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Xc(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1),this.form._events.next(new Jc(this.form))}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(B(Ps,10),B(_f,10),B(nu,8))};static \u0275dir=ne({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&J("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([o_]),U]})}return t})();function mf(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function gf(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var a_=class extends Ls{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Ef(e),Tf(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Bs(e)&&(e.nonNullable||e.initialValueIsDefault)&&(gf(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){mf(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){mf(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){gf(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var s_={provide:an,useExisting:hn(()=>sn)},vf=Promise.resolve(),sn=(()=>{class t extends an{_changeDetectorRef;callSetDisabledState;control=new a_;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new G;constructor(e,n,r,s,l,d){super(),this._changeDetectorRef=l,this.callSetDisabledState=d,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=r_(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),t_(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Af(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){vf.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&j(n);vf.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Y2(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(B(Ar,9),B(Ps,10),B(_f,10),B(Ir,10),B(Ct,8),B(nu,8))};static \u0275dir=ne({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ue([s_]),U,Qe]})}return t})();var $s=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Ff=(()=>{class t{_validator=Zc;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Zc,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,features:[Qe]})}return t})();var l_={provide:Ps,useExisting:hn(()=>Ko),multi:!0};var Ko=(()=>{class t extends Ff{required;inputName="required";normalizeInput=j;createValidator=e=>N2;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275dir=ne({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&M("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ue([l_]),U]})}return t})();var c_={provide:Ps,useExisting:hn(()=>ru),multi:!0},ru=(()=>{class t extends Ff{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>B2(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275dir=ne({type:t,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&M("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[ue([c_]),U]})}return t})();var u_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var si=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:nu,useValue:e.callSetDisabledState??iu}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[u_]})}return t})();function Rf(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Cn(t,i){if(t&&i){let e=n=>{Rf(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function d_(){return window.innerWidth-document.documentElement.offsetWidth}function Rr(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function pI(t="p-overflow-hidden"){let i=Rr(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,d_()+"px"),Cn(document.body,t)}function wn(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function hI(t="p-overflow-hidden"){let i=Rr(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),wn(document.body,t)}function Mf(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function Lf(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,s=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:s}}function p_(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function h_(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function fI(t,i,e=!0){var n,r,s,l;if(t){let d=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Mf(t),h=d.height,m=d.width,v=i.offsetHeight,C=i.offsetWidth,w=i.getBoundingClientRect(),A=h_(),$=p_(),P=Lf(),O,ge,Ee="top";w.top+v+h>P.height?(O=w.top+A-h,Ee="bottom",O<0&&(O=A)):O=v+w.top+A,w.left+m>P.width?ge=Math.max(0,w.left+$+C-m):ge=w.left+$,t.style.top=O+"px",t.style.left=ge+"px",t.style.transformOrigin=Ee,e&&(t.style.marginTop=Ee==="bottom"?`calc(${(r=(n=Rr(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(l=(s=Rr(/-anchor-gutter$/))==null?void 0:s.value)!=null?l:"")}}function mI(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Of(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function gI(t,i,e=!0){var n,r,s,l;if(t){let d=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Mf(t),h=i.offsetHeight,m=i.getBoundingClientRect(),v=Lf(),C,w,A="top";m.top+h+d.height>v.height?(C=-1*d.height,A="bottom",m.top+C<0&&(C=-1*m.top)):C=h,d.width>v.width?w=m.left*-1:m.left+d.width>v.width?w=(m.left+d.width-v.width)*-1:w=0,t.style.top=C+"px",t.style.left=w+"px",t.style.transformOrigin=A,e&&(t.style.marginTop=A==="bottom"?`calc(${(r=(n=Rr(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(l=(s=Rr(/-anchor-gutter$/))==null?void 0:s.value)!=null?l:"")}}function Mr(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ou(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),Mr(i)?i:void 0}function vI(t,i){let e=ou(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function au(t,i={}){if(Mr(t)){let e=(n,r)=>{var s,l;let d=(s=t?.$attrs)!=null&&s[n]?[(l=t?.$attrs)==null?void 0:l[n]]:[];return[r].flat().reduce((h,m)=>{if(m!=null){let v=typeof m;if(v==="string"||v==="number")h.push(m);else if(v==="object"){let C=Array.isArray(m)?e(n,m):Object.entries(m).map(([w,A])=>n==="style"&&(A||A===0)?`${w.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${A}`:A?w:void 0);h=C.length?h.concat(C.filter(w=>!!w)):h}}return h},d)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let s=n.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?au(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function bI(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function f_(t,i){return Mr(t)?Array.from(t.querySelectorAll(i)):[]}function Lr(t,i){return Mr(t)?t.matches(i)?t:t.querySelector(i):null}function yI(t,i){t&&document.activeElement!==t&&t.focus(i)}function _I(t,i){if(Mr(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Pf(t,i=""){let e=f_(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function CI(t,i){let e=Pf(t,i);return e.length>0?e[0]:null}function su(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Nf(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function wI(t){var i;if(t){let e=(i=Nf(t))==null?void 0:i.childNodes,n=0;if(e)for(let r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}}return-1}function SI(t,i){let e=Pf(t,i);return e.length>0?e[e.length-1]:null}function Bf(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function lu(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function DI(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function m_(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Nf(t))}function xI(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let r=ou((s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t);return r?.nodeType===9||m_(r)?r:void 0}}function cu(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function EI(t){return!!(t&&t.offsetParent!=null)}function TI(t){return t?getComputedStyle(t).direction==="rtl":!1}function AI(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function $f(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function II(t,i){let e=ou(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function kI(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),s=r?parseFloat(r):0,l=t.getBoundingClientRect(),h=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-s,m=t.scrollTop,v=t.clientHeight,C=lu(i);h<0?t.scrollTop=m+h:h+C>v&&(t.scrollTop=m+h-v+C)}function FI(t,i="",e){Mr(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Uf(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}var g_=Object.defineProperty,Vf=Object.getOwnPropertySymbols,v_=Object.prototype.hasOwnProperty,b_=Object.prototype.propertyIsEnumerable,jf=(t,i,e)=>i in t?g_(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,y_=(t,i)=>{for(var e in i||(i={}))v_.call(i,e)&&jf(t,e,i[e]);if(Vf)for(var e of Vf(i))b_.call(i,e)&&jf(t,e,i[e]);return t};function it(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function uu(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),s,l,d;if(n&&r){if(l=t.length,l!=i.length)return!1;for(s=l;s--!==0;)if(!uu(t[s],i[s],e))return!1;return!0}if(n!=r)return!1;let h=t instanceof Date,m=i instanceof Date;if(h!=m)return!1;if(h&&m)return t.getTime()==i.getTime();let v=t instanceof RegExp,C=i instanceof RegExp;if(v!=C)return!1;if(v&&C)return t.toString()==i.toString();let w=Object.keys(t);if(l=w.length,l!==Object.keys(i).length)return!1;for(s=l;s--!==0;)if(!Object.prototype.hasOwnProperty.call(i,w[s]))return!1;for(s=l;s--!==0;)if(d=w[s],!uu(t[d],i[d],e))return!1;return!0}function __(t,i){return uu(t,i)}function zf(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Ie(t){return!it(t)}function Us(t,i){if(!t||!i)return null;try{let e=t[i];if(Ie(e))return e}catch{}if(Object.keys(t).length){if(zf(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,s=e.length;r<s;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function Ni(t,i,e){return e?Us(t,e)===Us(i,e):__(t,i)}function qf(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Ni(t,e))return!0}return!1}function OI(t,i){let e=-1;if(Ie(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function ln(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function zt(t,...i){return zf(t)?t(...i):t}function li(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Hf(t){return li(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Vs(t,i="",e={}){let n=Hf(i).split("."),r=n.shift();return r?ln(t)?Vs(zt(t[Object.keys(t).find(s=>Hf(s)===r)||""],e),n.join("."),e):void 0:zt(t,e)}function js(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function PI(t){return t instanceof Date&&t.constructor===Date}function Wf(t){return Ie(t)&&!isNaN(t)}function NI(t=""){return Ie(t)&&t.length===1&&!!t.match(/\S| /)}function It(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Zo(...t){let i=(e={},n={})=>{let r=y_({},e);return Object.keys(n).forEach(s=>{ln(n[s])&&s in e&&ln(e[s])?r[s]=i(e[s],n[s]):r[s]=n[s]}),r};return t.reduce((e,n,r)=>r===0?n:i(e,n),{})}function Bi(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function kt(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Hs(t){return li(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function du(t){return li(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var zs={};function Fn(t="pui_id_"){return zs.hasOwnProperty(t)||(zs[t]=0),zs[t]++,`${t}${zs[t]}`}function C_(){let t=[],i=(l,d,h=999)=>{let m=r(l,d,h),v=m.value+(m.key===l?0:h)+1;return t.push({key:l,value:v}),v},e=l=>{t=t.filter(d=>d.value!==l)},n=(l,d)=>r(l,d).value,r=(l,d,h=0)=>[...t].reverse().find(m=>d?!0:m.key===l)||{key:l,value:h},s=l=>l&&parseInt(l.style.zIndex,10)||0;return{get:s,set:(l,d,h)=>{d&&(d.style.zIndex=String(i(l,!0,h)))},clear:l=>{l&&(e(s(l)),l.style.zIndex="")},getCurrent:l=>n(l,!0)}}var UI=C_();var Gf=["*"];var rt=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),JI=(()=>{class t{static AND="and";static OR="or"}return t})(),ek=(()=>{class t{filter(e,n,r,s,l){let d=[];if(e)for(let h of e)for(let m of n){let v=Us(h,m);if(this.filters[s](v,r,l)){d.push(h);break}}return d}filters={startsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let s=kt(n.toString()).toLocaleLowerCase(r);return kt(e.toString()).toLocaleLowerCase(r).slice(0,s.length)===s},contains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let s=kt(n.toString()).toLocaleLowerCase(r);return kt(e.toString()).toLocaleLowerCase(r).indexOf(s)!==-1},notContains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let s=kt(n.toString()).toLocaleLowerCase(r);return kt(e.toString()).toLocaleLowerCase(r).indexOf(s)===-1},endsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let s=kt(n.toString()).toLocaleLowerCase(r),l=kt(e.toString()).toLocaleLowerCase(r);return l.indexOf(s,l.length-s.length)!==-1},equals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:kt(e.toString()).toLocaleLowerCase(r)==kt(n.toString()).toLocaleLowerCase(r),notEquals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:kt(e.toString()).toLocaleLowerCase(r)!=kt(n.toString()).toLocaleLowerCase(r),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let r=0;r<n.length;r++)if(Ni(e,n[r]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,r)=>this.filters.equals(e,n,r),isNot:(e,n,r)=>this.filters.notEquals(e,n,r),before:(e,n,r)=>this.filters.lt(e,n,r),after:(e,n,r)=>this.filters.gt(e,n,r),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tk=(()=>{class t{clickSource=new Je;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=W({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Gf,decls:1,vars:0,template:function(n,r){n&1&&(pt(),nt(0))},encapsulation:2})}return t})(),Yf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=W({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Gf,decls:1,vars:0,template:function(n,r){n&1&&(pt(),nt(0))},encapsulation:2})}return t})(),qt=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(B(nr))};static \u0275dir=ne({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),de=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[we]})}return t})(),ci=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var w_=Object.defineProperty,S_=Object.defineProperties,D_=Object.getOwnPropertyDescriptors,qs=Object.getOwnPropertySymbols,Xf=Object.prototype.hasOwnProperty,Jf=Object.prototype.propertyIsEnumerable,Zf=(t,i,e)=>i in t?w_(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,un=(t,i)=>{for(var e in i||(i={}))Xf.call(i,e)&&Zf(t,e,i[e]);if(qs)for(var e of qs(i))Jf.call(i,e)&&Zf(t,e,i[e]);return t},pu=(t,i)=>S_(t,D_(i)),Rn=(t,i)=>{var e={};for(var n in t)Xf.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&qs)for(var n of qs(t))i.indexOf(n)<0&&Jf.call(t,n)&&(e[n]=t[n]);return e};function rk(...t){return Zo(...t)}var x_=Uf(),Ft=x_;function Qf(t,i){js(t)?t.push(...i||[]):ln(t)&&Object.assign(t,i)}function E_(t){return ln(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function T_(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function hu(t="",i=""){return T_(`${li(t,!1)&&li(i,!1)?`${t}-`:t}${i}`)}function em(t="",i=""){return`--${hu(t,i)}`}function A_(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function tm(t,i="",e="",n=[],r){if(li(t)){let s=/{([^}]*)}/g,l=t.trim();if(A_(l))return;if(It(l,s)){let d=l.replaceAll(s,v=>{let w=v.replace(/{|}/g,"").split(".").filter(A=>!n.some($=>It(A,$)));return`var(${em(e,Hs(w.join("-")))}${Ie(r)?`, ${r}`:""})`}),h=/(\d+\s+[\+\-\*\/]\s+\d+)/g,m=/var\([^)]+\)/g;return It(d.replace(m,"0"),h)?`calc(${d})`:d}return l}else if(Wf(t))return t}function I_(t,i,e){li(i,!1)&&t.push(`${i}:${e};`)}function Or(t,i){return t?`${t}{${i}}`:""}var Pr=(...t)=>k_(ke.getTheme(),...t),k_=(t={},i,e,n)=>{if(i){let{variable:r,options:s}=ke.defaults||{},{prefix:l,transform:d}=t?.options||s||{},m=It(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||it(n)&&d==="strict"?ke.getTokenValue(i):tm(m,void 0,l,[r.excludedKeyRegex],e)}return""};function F_(t,i={}){let e=ke.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:s=e.excludedKeyRegex}=i,l=(m,v="")=>Object.entries(m).reduce((C,[w,A])=>{let $=It(w,s)?hu(v):hu(v,Hs(w)),P=E_(A);if(ln(P)){let{variables:O,tokens:ge}=l(P,$);Qf(C.tokens,ge),Qf(C.variables,O)}else C.tokens.push((n?$.replace(`${n}-`,""):$).replaceAll("-",".")),I_(C.variables,em($),tm(P,$,n,[s]));return C},{variables:[],tokens:[]}),{variables:d,tokens:h}=l(t,n);return{value:d,tokens:h,declarations:d.join(""),css:Or(r,d.join(""))}}var cn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return F_(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var s,l,d,h,m,v,C;let{preset:w,options:A}=i,$,P,O,ge,Ee,ve,Oe;if(Ie(w)&&A.transform!=="strict"){let{primitive:Rt,semantic:yt,extend:On}=w,Dn=yt||{},{colorScheme:Pn}=Dn,Nn=Rn(Dn,["colorScheme"]),hi=On||{},{colorScheme:fi}=hi,Mt=Rn(hi,["colorScheme"]),Bn=Pn||{},{dark:$n}=Bn,mi=Rn(Bn,["dark"]),$i=fi||{},{dark:dn}=$i,Ui=Rn($i,["dark"]),gi=Ie(Rt)?this._toVariables({primitive:Rt},A):{},Vi=Ie(Nn)?this._toVariables({semantic:Nn},A):{},ji=Ie(mi)?this._toVariables({light:mi},A):{},Xo=Ie($n)?this._toVariables({dark:$n},A):{},Jo=Ie(Mt)?this._toVariables({semantic:Mt},A):{},$r=Ie(Ui)?this._toVariables({light:Ui},A):{},ft=Ie(dn)?this._toVariables({dark:dn},A):{},[Ur,xn]=[(s=gi.declarations)!=null?s:"",gi.tokens],[ea,Qs]=[(l=Vi.declarations)!=null?l:"",Vi.tokens||[]],[Lt,ta]=[(d=ji.declarations)!=null?d:"",ji.tokens||[]],[Ne,Xs]=[(h=Xo.declarations)!=null?h:"",Xo.tokens||[]],[Js,na]=[(m=Jo.declarations)!=null?m:"",Jo.tokens||[]],[Hi,el]=[(v=$r.declarations)!=null?v:"",$r.tokens||[]],[vi,tl]=[(C=ft.declarations)!=null?C:"",ft.tokens||[]];$=this.transformCSS(t,Ur,"light","variable",A,n,r),P=xn;let nl=this.transformCSS(t,`${ea}${Lt}`,"light","variable",A,n,r),Pe=this.transformCSS(t,`${Ne}`,"dark","variable",A,n,r);O=`${nl}${Pe}`,ge=[...new Set([...Qs,...ta,...Xs])];let Ze=this.transformCSS(t,`${Js}${Hi}color-scheme:light`,"light","variable",A,n,r),Fe=this.transformCSS(t,`${vi}color-scheme:dark`,"dark","variable",A,n,r);Ee=`${Ze}${Fe}`,ve=[...new Set([...na,...el,...tl])],Oe=zt(w.css,{dt:Pr})}return{primitive:{css:$,tokens:P},semantic:{css:O,tokens:ge},global:{css:Ee,tokens:ve},style:Oe}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:s,selector:l}){var d,h,m;let v,C,w;if(Ie(i)&&e.transform!=="strict"){let A=t.replace("-directive",""),$=i,{colorScheme:P,extend:O,css:ge}=$,Ee=Rn($,["colorScheme","extend","css"]),ve=O||{},{colorScheme:Oe}=ve,Rt=Rn(ve,["colorScheme"]),yt=P||{},{dark:On}=yt,Dn=Rn(yt,["dark"]),Pn=Oe||{},{dark:Nn}=Pn,hi=Rn(Pn,["dark"]),fi=Ie(Ee)?this._toVariables({[A]:un(un({},Ee),Rt)},e):{},Mt=Ie(Dn)?this._toVariables({[A]:un(un({},Dn),hi)},e):{},Bn=Ie(On)?this._toVariables({[A]:un(un({},On),Nn)},e):{},[$n,mi]=[(d=fi.declarations)!=null?d:"",fi.tokens||[]],[$i,dn]=[(h=Mt.declarations)!=null?h:"",Mt.tokens||[]],[Ui,gi]=[(m=Bn.declarations)!=null?m:"",Bn.tokens||[]],Vi=this.transformCSS(A,`${$n}${$i}`,"light","variable",e,r,s,l),ji=this.transformCSS(A,Ui,"dark","variable",e,r,s,l);v=`${Vi}${ji}`,C=[...new Set([...mi,...dn,...gi])],w=zt(ge,{dt:Pr})}return{css:v,tokens:C,style:w}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var s;let{preset:l,options:d}=i,h=(s=l?.components)==null?void 0:s[t];return this.getPreset({name:t,preset:h,options:d,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var s;let l=t.replace("-directive",""),{preset:d,options:h}=i,m=(s=d?.directives)==null?void 0:s[l];return this.getPreset({name:l,preset:m,options:h,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${zt(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:s}){let l=this.getCommon({name:t,theme:i,params:e,set:r,defaults:s}),d=Object.entries(n).reduce((h,[m,v])=>h.push(`${m}="${v}"`)&&h,[]).join(" ");return Object.entries(l||{}).reduce((h,[m,v])=>{if(v?.css){let C=Bi(v?.css),w=`${m}-variables`;h.push(`<style type="text/css" data-primevue-style-id="${w}" ${d}>${C}</style>`)}return h},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:s}){var l;let d={name:t,theme:i,params:e,set:r,defaults:s},h=(l=t.includes("-directive")?this.getPresetD(d):this.getPresetC(d))==null?void 0:l.css,m=Object.entries(n).reduce((v,[C,w])=>v.push(`${C}="${w}"`)&&v,[]).join(" ");return h?`<style type="text/css" data-primevue-style-id="${t}-variables" ${m}>${Bi(h)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([s,l])=>{let d=It(s,i.variable.excludedKeyRegex)?e:e?`${e}.${du(s)}`:du(s),h=n?`${n}.${s}`:s;ln(l)?this.createTokens(l,i,d,h,r):(r[d]||(r[d]={paths:[],computed(m,v={}){var C,w;return this.paths.length===1?(C=this.paths[0])==null?void 0:C.computed(this.paths[0].scheme,v.binding):m&&m!=="none"?(w=this.paths.find(A=>A.scheme===m))==null?void 0:w.computed(m,v.binding):this.paths.map(A=>A.computed(A.scheme,v[A.scheme]))}}),r[d].paths.push({path:h,value:l,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed(m,v={}){let C=/{([^}]*)}/g,w=l;if(v.name=this.path,v.binding||(v.binding={}),It(l,C)){let $=l.trim().replaceAll(C,ge=>{var Ee;let ve=ge.replace(/{|}/g,""),Oe=(Ee=r[ve])==null?void 0:Ee.computed(m,v);return js(Oe)&&Oe.length===2?`light-dark(${Oe[0].value},${Oe[1].value})`:Oe?.value}),P=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,O=/var\([^)]+\)/g;w=It($.replace(O,"0"),P)?`calc(${$})`:$}return it(v.binding)&&delete v.binding,{colorScheme:m,path:this.path,paths:v,value:w.includes("undefined")?void 0:w}}}))}),r},getTokenValue(t,i,e){var n;let s=(h=>h.split(".").filter(v=>!It(v.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),l=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,d=[(n=t[s])==null?void 0:n.computed(l)].flat().filter(h=>h);return d.length===1?d[0].value:d.reduce((h={},m)=>{let v=m,{colorScheme:C}=v,w=Rn(v,["colorScheme"]);return h[C]=w,h},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Or(Ie(i)?`${t}${i},${t} ${i}`:t,n):Or(t,Ie(i)?Or(i,n):n)},transformCSS(t,i,e,n,r={},s,l,d){if(Ie(i)){let{cssLayer:h}=r;if(n!=="style"){let m=this.getColorSchemeOption(r,l);i=e==="dark"?m.reduce((v,{type:C,selector:w})=>(Ie(w)&&(v+=w.includes("[CSS]")?w.replace("[CSS]",i):this.getSelectorRule(w,d,C,i)),v),""):Or(d??":root",i)}if(h){let m={name:"primeui",order:"primeui"};ln(h)&&(m.name=zt(h.name,{name:t,type:n})),Ie(m.name)&&(i=Or(`@layer ${m.name}`,i),s?.layerNames(m.name))}return i}return""}},ke={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=pu(un({},i),{options:un(un({},this.defaults.options),i.options)}),this._tokens=cn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Ft.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=pu(un({},this.theme),{preset:t}),this._tokens=cn.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Ft.emit("preset:change",t),Ft.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=pu(un({},this.theme),{options:t}),this.clearLoadedStyleNames(),Ft.emit("options:change",t),Ft.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return cn.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return cn.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return cn.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return cn.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return cn.getPreset(r)},getLayerOrderCSS(t=""){return cn.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return cn.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return cn.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return cn.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Ft.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&Ft.emit("theme:load"))}};var R_=0,nm=(()=>{class t{document=S(Te);use(e,n={}){let r=!1,s=e,l=null,{immediate:d=!0,manual:h=!1,name:m=`style_${++R_}`,id:v=void 0,media:C=void 0,nonce:w=void 0,first:A=!1,props:$={}}=n;if(this.document){if(l=this.document.querySelector(`style[data-primeng-style-id="${m}"]`)||v&&this.document.getElementById(v)||this.document.createElement("style"),!l.isConnected){s=e;let P=this.document.head;A&&P.firstChild?P.insertBefore(l,P.firstChild):P.appendChild(l),au(l,{type:"text/css",media:C,nonce:w,"data-primeng-style-id":m})}return l.textContent!==s&&(l.textContent=s),{id:v,name:m,el:l,css:s}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Nr={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},M_=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,L_=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ye=(()=>{class t{name="base";useStyle=S(nm);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=s=>s)=>{let s=r(zt(e,{dt:Pr}));return s?this.useStyle.use(Bi(s),E({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>ke.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(L_,e);loadGlobalTheme=(e={},n="")=>this.load(M_,e,(r="")=>ke.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>ke.getCommon(this.name,e);getComponentTheme=e=>ke.getComponent(this.name,e);getDirectiveTheme=e=>ke.getDirective(this.name,e);getPresetTheme=(e,n,r)=>ke.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>ke.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=zt(this.css,{dt:Pr}),s=Bi(`${r}${e}`),l=Object.entries(n).reduce((d,[h,m])=>d.push(`${h}="${m}"`)&&d,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${l}>${s}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>ke.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[ke.getStyleSheet(this.name,e,n)];if(this.theme){let s=this.name==="base"?"global-style":`${this.name}-style`,l=zt(this.theme,{dt:Pr}),d=Bi(ke.transformCSS(s,l)),h=Object.entries(n).reduce((m,[v,C])=>m.push(`${v}="${C}"`)&&m,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${s}" ${h}>${d}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var O_=(()=>{class t{theme=Be(void 0);csp=Be({nonce:void 0});isThemeChanged=!1;document=S(Te);baseStyle=S(ye);constructor(){ao(()=>{Ft.on("theme:change",e=>{St(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),ao(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){ke.clearLoadedStyleNames(),Ft.clear()}onThemeChange(e){ke.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!ke.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:s}=this.baseStyle.getCommonTheme?.()||{},l={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,E({name:"primitive-variables"},l)),this.baseStyle.load(n?.css,E({name:"semantic-variables"},l)),this.baseStyle.load(r?.css,E({name:"global-variables"},l)),this.baseStyle.loadGlobalTheme(E({name:"global-style"},l),s),ke.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fu=(()=>{class t extends O_{ripple=Be(!1);platformId=S(Bt);inputStyle=Be(null);inputVariant=Be(null);overlayOptions={};csp=Be({nonce:void 0});filterMatchModeOptions={text:[rt.STARTS_WITH,rt.CONTAINS,rt.NOT_CONTAINS,rt.ENDS_WITH,rt.EQUALS,rt.NOT_EQUALS],numeric:[rt.EQUALS,rt.NOT_EQUALS,rt.LESS_THAN,rt.LESS_THAN_OR_EQUAL_TO,rt.GREATER_THAN,rt.GREATER_THAN_OR_EQUAL_TO],date:[rt.DATE_IS,rt.DATE_IS_NOT,rt.DATE_BEFORE,rt.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Je;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=E(E({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:s,inputVariant:l,theme:d,overlayOptions:h,translation:m,filterMatchModeOptions:v}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),s&&this.inputStyle.set(s),l&&this.inputVariant.set(l),h&&(this.overlayOptions=h),m&&this.setTranslation(m),v&&(this.filterMatchModeOptions=v),d&&this.setThemeConfig({theme:d,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),P_=new Z("PRIME_NG_CONFIG");function Lk(...t){let i=t?.map(n=>({provide:P_,useValue:n,multi:!1})),e=oo(()=>{let n=S(fu);t?.forEach(r=>n.setConfig(r))});return zn([...i,e])}var im=(()=>{class t extends ye{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Se=(()=>{class t{document=S(Te);platformId=S(Bt);el=S(dt);injector=S(Qt);cd=S(Ct);renderer=S($t);config=S(fu);baseComponentStyle=S(im);baseStyle=S(ye);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Fn("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return Vs(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!lr(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Ft.off("theme:change",e))}_loadStyles(){let e=()=>{Nr.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Nr.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Nr.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Nr.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!ke.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:s}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,E({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,E({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,E({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(E({name:"global-style"},this.styleOptions),s),ke.setLoadedStyleName("common")}if(!ke.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,E({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(E({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),ke.setLoadedStyleName(this.componentStyle?.name)}if(!ke.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,E({name:"layer-order",first:!0},this.styleOptions)),ke.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,E({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Nr.clearLoadedStyleNames(),Ft.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:E({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,inputs:{dt:"dt"},features:[ue([im,ye]),Qe]})}return t})();var mu=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let s=0;s<r.length;s++)e.classList.add(r[s])}else{let r=n.split(" ");for(let s=0;s<r.length;s++)e.className+=" "+r[s]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(s=>this.removeClass(e,s)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var s=0;s<n.length;s++){if(n[s]==e)return r;n[s].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],s=0;for(var l=0;l<r.length;l++){if(r[l]==e)return s;r[l].attributes&&r[l].attributes[n]&&r[l].nodeType==1&&s++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",s=!0){e&&n&&(s&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let s=Ee=>{if(Ee)return getComputedStyle(Ee).getPropertyValue("position")==="relative"?Ee:s(Ee.parentElement)},l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),d=n.offsetHeight,h=n.getBoundingClientRect(),m=this.getWindowScrollTop(),v=this.getWindowScrollLeft(),C=this.getViewport(),A=s(e)?.getBoundingClientRect()||{top:-1*m,left:-1*v},$,P;h.top+d+l.height>C.height?($=h.top-A.top-l.height,e.style.transformOrigin="bottom",h.top+$<0&&($=-1*h.top)):($=d+h.top-A.top,e.style.transformOrigin="top");let O=h.left+l.width-C.width,ge=h.left-A.left;l.width>C.width?P=(h.left-A.left)*-1:O>0?P=ge-O:P=h.left-A.left,e.style.top=$+"px",e.style.left=P+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=s.height,d=s.width,h=n.offsetHeight,m=n.offsetWidth,v=n.getBoundingClientRect(),C=this.getWindowScrollTop(),w=this.getWindowScrollLeft(),A=this.getViewport(),$,P;v.top+h+l>A.height?($=v.top+C-l,e.style.transformOrigin="bottom",$<0&&($=C)):($=h+v.top+C,e.style.transformOrigin="top"),v.left+d>A.width?P=Math.max(0,v.left+w+m-d):P=v.left+w,e.style.top=$+"px",e.style.left=P+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),s=/(auto|scroll)/,l=d=>{let h=window.getComputedStyle(d,null);return s.test(h.getPropertyValue("overflow"))||s.test(h.getPropertyValue("overflowX"))||s.test(h.getPropertyValue("overflowY"))};for(let d of r){let h=d.nodeType===1&&d.dataset.scrollselectors;if(h){let m=h.split(",");for(let v of m){let C=this.findSingle(d,v);C&&l(C)&&n.push(C)}}d.nodeType!==9&&l(d)&&n.push(d)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),s=r?parseFloat(r):0,l=getComputedStyle(e).getPropertyValue("paddingTop"),d=l?parseFloat(l):0,h=e.getBoundingClientRect(),v=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-s-d,C=e.scrollTop,w=e.clientHeight,A=this.getOuterHeight(n);v<0?e.scrollTop=C+v:v+A>w&&(e.scrollTop=C+v-w+A)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,s=0,l=function(){s=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=s,r=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};l()}static fadeOut(e,n){var r=1,s=50,l=n,d=s/l;let h=setInterval(()=>{r=r-d,r<=0&&(r=0,clearInterval(h)),e.style.opacity=r},s)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,s=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(l){return[].indexOf.call(document.querySelectorAll(l),this)!==-1};return s.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let s=getComputedStyle(e);r+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let s=getComputedStyle(e);r+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,s=n.getElementsByTagName("body")[0],l=e.innerWidth||r.clientWidth||s.clientWidth,d=e.innerHeight||r.clientHeight||s.clientHeight;return{width:l,height:d}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var s=e.indexOf("rv:");return!0}var l=e.indexOf("Edge/");return l>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),s=[];for(let l of r){let d=getComputedStyle(l);this.isVisible(l)&&d.display!="none"&&d.visibility!="hidden"&&s.push(l)}return s}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let s=getComputedStyle(r);if(this.isVisible(r)&&s.display!="none"&&s.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),s=0;if(r&&r.length>0){let l=r.indexOf(r[0].ownerDocument.activeElement);n?l==-1||l===0?s=r.length-1:s=l-1:l!=-1&&l!==r.length-1&&(s=l+1)}return r[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let l=(d=>!!(d&&d.constructor&&d.call&&d.apply))(e)?e():e;return l&&l.nodeType===9||this.isExist(l)?l:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let s=document.createElement(e);return this.setAttributes(s,n),s.append(...r),s}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(s,l)=>{let d=e?.$attrs?.[s]?[e?.$attrs?.[s]]:[];return[l].flat().reduce((h,m)=>{if(m!=null){let v=typeof m;if(v==="string"||v==="number")h.push(m);else if(v==="object"){let C=Array.isArray(m)?r(s,m):Object.entries(m).map(([w,A])=>s==="style"&&(A||A===0)?`${w.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${A}`:A?w:void 0);h=C.length?h.concat(C.filter(w=>!!w)):h}}return h},d)};Object.entries(n).forEach(([s,l])=>{if(l!=null){let d=s.match(/^on(.+)/);d?e.addEventListener(d[1].toLowerCase(),l):s==="pBind"?this.setAttributes(e,l):(l=s==="class"?[...new Set(r("class",l))].join(" ").trim():s==="style"?r("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=l),e.setAttribute(s,l))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),rm=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=mu.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ws=(()=>{class t extends Se{autofocus=!1;_autofocus=!1;focused=!1;platformId=S(Bt);document=S(Te);host=S(dt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Zn(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=mu.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275dir=ne({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",j],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[U]})}return t})(),nF=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var N_=["input"],B_=(t,i,e,n,r)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":t,"p-disabled":i,"p-variant-filled":e,"p-radiobutton-sm p-inputfield-sm":n,"p-radiobutton-lg p-inputfield-lg":r}),$_=({dt:t})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${t("radiobutton.width")};
    height: ${t("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${t("radiobutton.border.color")};
    background: ${t("radiobutton.background")};
    width: ${t("radiobutton.width")};
    height: ${t("radiobutton.height")};
    transition: background ${t("radiobutton.transition.duration")}, color ${t("radiobutton.transition.duration")}, border-color ${t("radiobutton.transition.duration")}, box-shadow ${t("radiobutton.transition.duration")}, outline-color ${t("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${t("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${t("radiobutton.icon.size")};
    width: ${t("radiobutton.icon.size")};
    height: ${t("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${t("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${t("radiobutton.checked.border.color")};
    background: ${t("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${t("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${t("radiobutton.checked.hover.border.color")};
    background: ${t("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${t("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${t("radiobutton.focus.border.color")};
    box-shadow: ${t("radiobutton.focus.ring.shadow")};
    outline: ${t("radiobutton.focus.ring.width")} ${t("radiobutton.focus.ring.style")} ${t("radiobutton.focus.ring.color")};
    outline-offset: ${t("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${t("radiobutton.checked.focus.border.color")};
}

p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${t("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${t("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${t("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${t("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${t("radiobutton.disabled.background")};
    border-color: ${t("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${t("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${t("radiobutton.sm.width")};
    height: ${t("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${t("radiobutton.icon.sm.size")};
    width: ${t("radiobutton.icon.sm.size")};
    height: ${t("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${t("radiobutton.lg.width")};
    height: ${t("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${t("radiobutton.icon.lg.size")};
    width: ${t("radiobutton.icon.lg.size")};
    height: ${t("radiobutton.icon.lg.size")};
}
`,U_={root:({instance:t,props:i})=>["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},om=(()=>{class t extends ye{name="radiobutton";theme=$_;classes=U_;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var V_={provide:Ir,useExisting:hn(()=>Gs),multi:!0},j_=(()=>{class t{accessors=[];add(e,n){this.accessors.push([e,n])}remove(e){this.accessors=this.accessors.filter(n=>n[1]!==e)}select(e){this.accessors.forEach(n=>{this.isSameGroup(n,e)&&n[1]!==e&&n[1].writeValue(e.value)})}isSameGroup(e,n){return e[0].control?e[0].control.root===n.control.control.root&&e[1].name===n.name:!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gs=(()=>{class t extends Se{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new G;onFocus=new G;onBlur=new G;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=S(om);injector=S(Qt);registry=S(j_);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(an),this.checkName(),this.registry.add(this.control,this)}onChange(e){this.disabled||this.select(e)}select(e){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.binary?this.checked=!!e:this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,r){if(n&1&&Gn(N_,5),n&2){let s;ee(s=te())&&(r.inputViewChild=s.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",j],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",wt],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",j],binary:[2,"binary","binary",j]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[ue([V_,om]),U],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(n,r){if(n&1){let s=Ae();x(0,"div",1)(1,"input",2,0),J("focus",function(d){return K(s),Y(r.onInputFocus(d))})("blur",function(d){return K(s),Y(r.onInputBlur(d))})("change",function(d){return K(s),Y(r.onChange(d))}),T(),x(3,"div",3),L(4,"div",4),T()()}n&2&&(Q(r.styleClass),b("ngStyle",r.style)("ngClass",Ra(18,B_,r.checked,r.disabled,r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled",r.size==="small",r.size==="large")),M("data-pc-name","radiobutton")("data-pc-section","root"),y(),b("checked",r.checked)("disabled",r.disabled)("value",r.value)("pAutoFocus",r.autofocus),M("id",r.inputId)("name",r.name)("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel)("tabindex",r.tabindex)("aria-checked",r.checked),y(2),M("data-pc-section","input"),y(),M("data-pc-section","icon"))},dependencies:[we,ht,tn,Ws,de],encapsulation:2,changeDetection:0})}return t})(),bF=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Gs,de,de]})}return t})();var H_=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,z_={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":Ie(t.value)&&String(t.value).length===1,"p-badge-dot":it(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},am=(()=>{class t extends ye{name="badge";theme=H_;classes=z_;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var gu=(()=>{class t extends Se{styleClass=fn();style=fn();badgeSize=fn();size=fn();severity=fn();value=fn();badgeDisabled=fn(!1,{transform:j});_componentStyle=S(am);containerClass=Dt(()=>{let e="p-badge p-component";return Ie(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),it(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(Xt(r.style()),Q(r.containerClass()),Wn("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[ue([am]),U],decls:1,vars:1,template:function(n,r){n&1&&De(0),n&2&&$e(r.value())},dependencies:[we,de],encapsulation:2,changeDetection:0})}return t})(),sm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[gu,de,de]})}return t})();var W_=["*"],G_=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,K_=(()=>{class t extends ye{name="baseicon";inlineStyles=G_;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ze=(()=>{class t extends Se{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=it(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",j],styleClass:"styleClass"},features:[ue([K_]),U],ngContentSelectors:W_,decls:1,vars:0,template:function(n,r){n&1&&(pt(),nt(0))},encapsulation:2,changeDetection:0})}return t})();var lm=(()=>{class t extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["CheckIcon"]],features:[U],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,r){n&1&&(je(),x(0,"svg",0),L(1,"path",1),T()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var WF=(()=>{class t extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["ChevronDownIcon"]],features:[U],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,r){n&1&&(je(),x(0,"svg",0),L(1,"path",1),T()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var YF=(()=>{class t extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["ChevronLeftIcon"]],features:[U],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(n,r){n&1&&(je(),x(0,"svg",0),L(1,"path",1),T()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var XF=(()=>{class t extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["ChevronRightIcon"]],features:[U],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,r){n&1&&(je(),x(0,"svg",0),L(1,"path",1),T()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var t3=(()=>{class t extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["ChevronUpIcon"]],features:[U],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(n,r){n&1&&(je(),x(0,"svg",0),L(1,"path",1),T()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var cm=(()=>{class t extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["MinusIcon"]],features:[U],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,r){n&1&&(je(),x(0,"svg",0),L(1,"path",1),T()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var um=(()=>{class t extends ze{pathId;ngOnInit(){this.pathId="url(#"+Fn()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["PlusIcon"]],features:[U],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(je(),x(0,"svg",0)(1,"g"),L(2,"path",1),T(),x(3,"defs")(4,"clipPath",2),L(5,"rect",3),T()()()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),y(),M("clip-path",r.pathId),y(3),b("id",r.pathId))},encapsulation:2})}return t})();var dm=(()=>{class t extends ze{pathId;ngOnInit(){this.pathId="url(#"+Fn()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["SpinnerIcon"]],features:[U],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(je(),x(0,"svg",0)(1,"g"),L(2,"path",1),T(),x(3,"defs")(4,"clipPath",2),L(5,"rect",3),T()()()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),y(),M("clip-path",r.pathId),y(3),b("id",r.pathId))},encapsulation:2})}return t})();var Ks=(()=>{class t extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["TimesIcon"]],features:[U],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,r){n&1&&(je(),x(0,"svg",0),L(1,"path",1),T()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var pm=(()=>{class t extends ze{pathId;ngOnInit(){this.pathId="url(#"+Fn()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["UploadIcon"]],features:[U],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(je(),x(0,"svg",0)(1,"g"),L(2,"path",1),T(),x(3,"defs")(4,"clipPath",2),L(5,"rect",3),T()()()),n&2&&(Q(r.getClassNames()),M("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),y(),M("clip-path",r.pathId),y(3),b("id",r.pathId))},encapsulation:2})}return t})();var Y_=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Z_={root:"p-ink"},hm=(()=>{class t extends ye{name="ripple";theme=Y_;classes=Z_;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Ys=(()=>{class t extends Se{zone=S(gt);_componentStyle=S(hm);animationListener;mouseDownListener;timeout;constructor(){super(),ao(()=>{Zn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(wn(n,"p-ink-active"),!su(n)&&!cu(n)){let d=Math.max(Of(this.el.nativeElement),lu(this.el.nativeElement));n.style.height=d+"px",n.style.width=d+"px"}let r=Bf(this.el.nativeElement),s=e.pageX-r.left+this.document.body.scrollTop-cu(n)/2,l=e.pageY-r.top+this.document.body.scrollLeft-su(n)/2;this.renderer.setStyle(n,"top",l+"px"),this.renderer.setStyle(n,"left",s+"px"),Cn(n,"p-ink-active"),this.timeout=setTimeout(()=>{let d=this.getInk();d&&wn(d,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&wn(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),wn(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,$f(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ne({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[ue([hm]),U]})}return t})(),D3=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var Q_=["content"],X_=["loadingicon"],J_=["icon"],eC=["*"],gm=t=>({class:t});function tC(t,i){t&1&&He(0)}function nC(t,i){if(t&1&&L(0,"span",8),t&2){let e=D(3);b("ngClass",e.iconClass()),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function iC(t,i){if(t&1&&L(0,"SpinnerIcon",9),t&2){let e=D(3);b("styleClass",e.spinnerIconClass())("spin",!0),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function rC(t,i){if(t&1&&(et(0),k(1,nC,1,3,"span",6)(2,iC,1,4,"SpinnerIcon",7),tt()),t&2){let e=D(2);y(),b("ngIf",e.loadingIcon),y(),b("ngIf",!e.loadingIcon)}}function oC(t,i){}function aC(t,i){if(t&1&&k(0,oC,0,0,"ng-template",10),t&2){let e=D(2);b("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function sC(t,i){if(t&1&&(et(0),k(1,rC,3,2,"ng-container",2)(2,aC,1,1,null,5),tt()),t&2){let e=D();y(),b("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),y(),b("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Vt(3,gm,e.iconClass()))}}function lC(t,i){if(t&1&&L(0,"span",8),t&2){let e=D(2);Q(e.icon),b("ngClass",e.iconClass()),M("data-pc-section","icon")}}function cC(t,i){}function uC(t,i){if(t&1&&k(0,cC,0,0,"ng-template",10),t&2){let e=D(2);b("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function dC(t,i){if(t&1&&(et(0),k(1,lC,1,4,"span",11)(2,uC,1,1,null,5),tt()),t&2){let e=D();y(),b("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),y(),b("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Vt(3,gm,e.iconClass()))}}function pC(t,i){if(t&1&&(x(0,"span",12),De(1),T()),t&2){let e=D();M("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),y(),$e(e.label)}}function hC(t,i){if(t&1&&L(0,"p-badge",13),t&2){let e=D();b("value",e.badge)("severity",e.badgeSeverity)}}var fC=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,mC={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},di=(()=>{class t extends ye{name="button";theme=fC;classes=mC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ui={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},fm=(()=>{class t extends Se{_componentStyle=S(di);static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275dir=ne({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&_t("p-button-label",!0)},features:[ue([di]),U]})}return t})(),mm=(()=>{class t extends Se{_componentStyle=S(di);static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275dir=ne({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&_t("p-button-icon",!0)},features:[ue([di]),U]})}return t})(),W3=(()=>{class t extends Se{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Vl(mm);labelSignal=Vl(fm);isIconOnly=Dt(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ui);isTextButton=Dt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=S(di);ngAfterViewInit(){super.ngAfterViewInit(),Cn(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let s in r)this[s]=r[s]}}getStyleClass(){let e=[ui.button,ui.component];return this.icon&&!this.label&&it(this.htmlElement.textContent)&&e.push(ui.iconOnly),this.loading&&(e.push(ui.disabled,ui.loading),!this.icon&&this.label&&e.push(ui.labelOnly),this.icon&&!this.label&&!it(this.htmlElement.textContent)&&e.push(ui.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return it(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(r=>e.some(s=>r===`p-button-${s}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Lr(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Lr(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&Cn(n,r);let s=this.getIconClass();s&&Cn(n,s),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Lr(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Lr(this.htmlElement,".p-button-icon"),n=Lr(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275dir=ne({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,s){n&1&&(Kl(s,r.iconSignal,mm,5),Kl(s,r.labelSignal,fm,5)),n&2&&yp(2)},hostVars:4,hostBindings:function(n,r){n&2&&_t("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",j],rounded:[2,"rounded","rounded",j],text:[2,"text","text",j],outlined:[2,"outlined","outlined",j],size:"size",plain:[2,"plain","plain",j],fluid:[2,"fluid","fluid",j],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[ue([di]),U,Qe]})}return t})(),Mn=(()=>{class t extends Se{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new G;onFocus=new G;onBlur=new G;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return it(this.fluid)?!!n:this.fluid}_componentStyle=S(di);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let s in r)this[s]=r[s]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-button"]],contentQueries:function(n,r,s){if(n&1&&(pe(s,Q_,5),pe(s,X_,5),pe(s,J_,5),pe(s,qt,4)),n&2){let l;ee(l=te())&&(r.contentTemplate=l.first),ee(l=te())&&(r.loadingIconTemplate=l.first),ee(l=te())&&(r.iconTemplate=l.first),ee(l=te())&&(r.templates=l)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",j],loading:[2,"loading","loading",j],loadingIcon:"loadingIcon",raised:[2,"raised","raised",j],rounded:[2,"rounded","rounded",j],text:[2,"text","text",j],plain:[2,"plain","plain",j],severity:"severity",outlined:[2,"outlined","outlined",j],link:[2,"link","link",j],tabindex:[2,"tabindex","tabindex",wt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",j],fluid:[2,"fluid","fluid",j],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[ue([di]),U,Qe],ngContentSelectors:eC,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(pt(),x(0,"button",0),J("click",function(l){return r.onClick.emit(l)})("focus",function(l){return r.onFocus.emit(l)})("blur",function(l){return r.onBlur.emit(l)}),nt(1),k(2,tC,1,0,"ng-container",1)(3,sC,3,5,"ng-container",2)(4,dC,3,5,"ng-container",2)(5,pC,2,3,"span",3)(6,hC,1,2,"p-badge",4),T()),n&2&&(b("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),M("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),y(2),b("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),y(),b("ngIf",r.loading),y(),b("ngIf",!r.loading),y(),b("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),y(),b("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[we,ht,Ke,xt,tn,Ys,Ws,dm,sm,gu,de],encapsulation:2,changeDetection:0})}return t})(),Br=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[we,Mn,de,de]})}return t})();var Sn=class t{selectedUploadType=Be("url");getSelectedUploadType=Dt(()=>this.selectedUploadType());setUploadType(i){this.selectedUploadType.set(i)}uploadData=Be(null);getUploadData=Dt(()=>this.uploadData());setUploadData(i){this.uploadData.set(i)}mergeModifiedData(i){let e=this.uploadData()||{};this.uploadData.set(_e(E({},e),{modifiedHtml:i.modifiedHtml,modifiedUrl:i.modifiedUrl}))}resetUploadFlow(){this.selectedUploadType.set("url"),this.uploadData.set(null)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var vm=`
<!DOCTYPE html>
<html class="no-js" dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Personal income tax - Canada.ca</title>
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <script src="//assets.adobedtm.com/be5dfd287373/abb618326704/launch-3eac5e076135.min.js"><\/script>
    <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
    <link rel="canonical" href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html" />
    <link rel="alternate" hreflang="en"
        href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html" />
    <link rel="alternate" hreflang="fr"
        href="https://www.canada.ca/fr/services/impots/impot-sur-le-revenu/impot-sur-le-revenu-des-particuliers.html" />
    <meta name="description"
        content="Who should file a tax return, filing and payment dates, filing options to report income and claim deductions, how to pay taxes, and options after filing. " />
    <meta name="keywords"
        content="cra tax return, income tax, tax filing, filing options, t1, reporting income, claiming deductions, paying taxes, netfile access code, balance owing, refunds, notice of assessment, noa, tax rates and income brackets, due dates, payment dates, interest and penalties, help others with taxes" />
    <meta name="author" content="Canada Revenue Agency" />
    <meta name="dcterms.title" content="Personal income tax" />
    <meta name="dcterms.description"
        content="Who should file a tax return, filing and payment dates, filing options to report income and claim deductions, how to pay taxes, and options after filing. " />
    <meta name="dcterms.creator" content="Canada Revenue Agency" />
    <meta name="dcterms.language" title="ISO639-2/T" content="eng" />
    <meta name="dcterms.issued" title="W3CDTF" content="2020-10-27" />
    <meta name="dcterms.modified" title="W3CDTF" content="2025-07-15" />
    <meta name="dcterms.spatial" content="Canada" />
    <meta name="dcterms.identifier" content="Canada_Revenue_Agency" />
    <!-- MWS-1244 Include Facebook metadata on page -->
    <meta prefix="fb: https://www.facebook.com/2008/fbml" property="fb:pages"
        content="378967748836213, 160339344047502, 184605778338568, 237796269600506, 10860597051, 14498271095, 209857686718, 160504807323251, 111156792247197, 113429762015861, 502566449790031, 312292485564363, 1471831713076413, 22724568071, 17294463927, 1442463402719857, 247990812241506, 730097607131117, 1142481292546228, 1765602380419601, 131514060764735, 307780276294187, 427238637642566, 525934210910141, 1016214671785090, 192657607776229, 586856208161152, 1146080748799944, 408143085978521, 490290084411688, 163828286987751, 565688503775086, 460123390028, 318424514044, 632493333805962, 370233926766473, 173004244677, 1562729973959056, 362400293941960, 769857139754987, 167891083224996, 466882737009651, 126404198009505, 135409166525475, 664638680273646, 169011506491295, 217171551640146, 182842831756930, 1464645710444681, 218822426028, 218740415905, 123326971154939, 125058490980757, 1062292210514762, 1768389106741505, 310939332270090, 285960408117397, 985916134909087, 655533774808209, 1522633664630497, 686814348097821, 230798677012118, 320520588000085, 103201203106202, 273375356172196, 61263506236, 353102841161, 1061339807224729, 1090791104267764, 395867780593657, 1597876400459657, 388427768185631, 937815283021844, 207409132619743, 1952090675003143, 206529629372368, 218566908564369, 175257766291975, 118472908172897, 767088219985590, 478573952173735, 465264530180856, 317418191615817, 428040827230778, 222493134493922, 196833853688656, 194633827256676, 252002641498535, 398018420213195, 265626156847421, 202442683196210, 384350631577399, 385499078129720, 178433945604162, 398240836869162, 326182960762584, 354672164565195, 375081249171867, 333050716732105, 118996871563050, 240349086055056, 119579301504003, 185184131584797, 333647780005544, 306255172770146, 369589566399283, 117461228379000, 349774478396157, 201995959908210, 307017162692056, 145928592172074, 122656527842056">
    <!-- MWS-1890 JSON-LD output -->
    <link rel="stylesheet" href="/etc/designs/canada/wet-boew/css/wet-boew.min.css" />
    <link rel="stylesheet" href="/etc/designs/canada/wet-boew/css/theme.css" />
    <link href="https://cra-arc.gc.ca/wet-boew/css/custom/theme-topic.css" rel="stylesheet">
    <noscript>
        <link rel="stylesheet" href="/etc/designs/canada/wet-boew/css/noscript.min.css" />
    </noscript>
    <link href="/etc/designs/canada/wet-boew/assets/favicon.ico" rel="icon" type="image/x-icon" />
    <script>!function (a) { var e = "https://s.go-mpulse.net/boomerang/", t = "addEventListener"; if ("False" == "True") a.BOOMR_config = a.BOOMR_config || {}, a.BOOMR_config.PageParams = a.BOOMR_config.PageParams || {}, a.BOOMR_config.PageParams.pci = !0, e = "https://s2.go-mpulse.net/boomerang/"; if (window.BOOMR_API_key = "KBFUZ-C9D7G-RB8SX-GRGEN-HGMC9", function () { function n(e) { a.BOOMR_onload = e && e.timeStamp || (new Date).getTime() } if (!a.BOOMR || !a.BOOMR.version && !a.BOOMR.snippetExecuted) { a.BOOMR = a.BOOMR || {}, a.BOOMR.snippetExecuted = !0; var i, _, o, r = document.createElement("iframe"); if (a[t]) a[t]("load", n, !1); else if (a.attachEvent) a.attachEvent("onload", n); r.src = "javascript:void(0)", r.title = "", r.role = "presentation", (r.frameElement || r).style.cssText = "width:0;height:0;border:0;display:none;", o = document.getElementsByTagName("script")[0], o.parentNode.insertBefore(r, o); try { _ = r.contentWindow.document } catch (O) { i = document.domain, r.src = "javascript:var d=document.open();d.domain='" + i + "';void(0);", _ = r.contentWindow.document } _.open()._l = function () { var a = this.createElement("script"); if (i) this.domain = i; a.id = "boomr-if-as", a.src = e + "KBFUZ-C9D7G-RB8SX-GRGEN-HGMC9", BOOMR_lstart = (new Date).getTime(), this.body.appendChild(a) }, _.write("<bo" + 'dy onload="document._l();">'), _.close() } }(), "".length > 0) if (a && "performance" in a && a.performance && "function" == typeof a.performance.setResourceTimingBufferSize) a.performance.setResourceTimingBufferSize(); !function () { if (BOOMR = a.BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {}, !BOOMR.plugins.AK) { var e = "" == "true" ? 1 : 0, t = "", n = "jihaowixzgwh62dx6cma-f-4fa20d003-clientnsv4-s.akamaihd.net", i = "false" == "true" ? 2 : 1, _ = { "ak.v": "39", "ak.cp": "789605", "ak.ai": parseInt("231651", 10), "ak.ol": "0", "ak.cr": 19, "ak.ipv": 4, "ak.proto": "h3", "ak.rid": "c11d898", "ak.r": 47372, "ak.a2": e, "ak.m": "dscb", "ak.n": "essl", "ak.bpcip": "74.14.7.0", "ak.cport": 54553, "ak.gh": "23.195.36.173", "ak.quicv": "0x00000001", "ak.tlsv": "tls1.3", "ak.0rtt": "", "ak.0rtt.ed": "", "ak.csrc": "-", "ak.acc": "", "ak.t": "1752690840", "ak.ak": "hOBiQwZUYzCg5VSAfCLimQ==GfSG1NBpaEm1uHU8dDT46T3CilDTDcCqVh9Tp88/WFVlnu6mJln2iKbSRezA0d5nBfkIdSWaE6y0kcPpQT9w/w2aVlmrpaN4zgDZYPtt1yBOID9aI5WsujiQ2HpbH1m3dRV0KDLCkTceIkE4pr8SgnnROdMSnbHPtOKoJ8gdWaGha0GV1LKQDkqvqZ9lpyD5rCnpFqiccDX91NtbGbuREJEjeF+QOpnHcT1OWOWAOLhn7A2TRErvspUqojrxk0Oncr8vPGx1MCXNunU6BrMSLhncxZzIyx39Qw/kz2+TEG+htTI112YAsoZqaGo9VK0IL884jXMJpGsZpawkk2sBnbXR9ISFMuHOJt0IZZJ/pFra7vugu9eKLJq471IFGLBg776n/uxiUKRH3hmbJWjs1gNzGUye+p9PF30dPYU1kco=", "ak.pv": "810", "ak.dpoabenc": "", "ak.tf": i }; if ("" !== t) _["ak.ruds"] = t; var o = { i: !1, av: function (e) { var t = "http.initiator"; if (e && (!e[t] || "spa_hard" === e[t])) _["ak.feo"] = void 0 !== a.aFeoApplied ? 1 : 0, BOOMR.addVar(_) }, rv: function () { var a = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.0rtt.ed", "ak.r", "ak.acc", "ak.t", "ak.tf"]; BOOMR.removeVar(a) } }; BOOMR.plugins.AK = { akVars: _, akDNSPreFetchDomain: n, init: function () { if (!o.i) { var a = BOOMR.subscribe; a("before_beacon", o.av, null, null), a("onbeacon", o.rv, null, null), o.i = !0 } return this }, is_complete: function () { return !0 } } } }() }(window);<\/script>
</head>

<body vocab="http://schema.org/" typeof="WebPage" resource="#wb-webpage">
    <nav>
        <ul id="wb-tphp">
            <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>
            <li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to &#34;About this
                    site&#34;</a></li>
        </ul>
    </nav>
    <header>
        <div id="wb-bnr" class="container">
            <div class="row">
                <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
                    <h2 class="wb-inv">Language selection</h2>
                    <ul class="list-inline mrgn-bttm-0">
                        <li>
                            <a lang="fr" hreflang="fr"
                                href="/fr/services/impots/impot-sur-le-revenu/impot-sur-le-revenu-des-particuliers.html">
                                <span class="hidden-xs">Fran\xE7ais</span>
                                <abbr title="Fran\xE7ais"
                                    class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">fr</abbr>
                            </a>
                        </li>
                    </ul>
                </section>
                <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
                    <a href="https://www.canada.ca/en.html" property="URL">
                        <img src="/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="Government of Canada"
                            property="logo">
                        <span class="wb-inv"> /
                            <span lang="fr">Gouvernement du Canada</span>
                        </span></a>
                    <meta property="name" content="Government of Canada">
                    <meta property="areaServed" typeof="Country" content="Canada">
                    <link property="logo" href="/etc/designs/canada/wet-boew/assets/wmms-blk.svg">
                </div>
                <section id="wb-srch"
                    class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">
                    <h2>Search</h2>
                    <form action="/en/revenue-agency/search.html" method="get" name="cse-search-box" role="search">
                        <div class="form-group wb-srch-qry">
                            <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>
                            <input name="cdn" value="canada" type="hidden" />
                            <input name="st" value="s" type="hidden" />
                            <input name="num" value="10" type="hidden" />
                            <input name="langs" value="en" type="hidden" />
                            <input name="st1rt" value="1" type="hidden" />
                            <input name="s5bm3ts21rch" value="x" type="hidden" />
                            <input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q"
                                type="search" value="" size="34" maxlength="170" placeholder="Search CRA" /> <datalist
                                id="wb-srch-q-ac"></datalist>
                        </div>
                        <div class="form-group submit">
                            <button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub">
                                <span class="glyphicon-search glyphicon"></span>
                                <span class="wb-inv">Search</span></button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
        <hr />
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <nav class="gcweb-menu" typeof="SiteNavigationElement">
                        <h2 class="wb-inv">Menu</h2>
                        <button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main
                            </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button>
                        <ul role="menu" aria-orientation="vertical"
                            data-ajax-replace="/content/dam/canada/sitemenu/sitemenu-v2-en.html">
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration
                                    and citizenship</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/">Travel
                                    and tourism</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/business.html">Business and industry</a>
                            </li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/health.html">Health</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/environment.html">Environment and natural
                                    resources</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/defence.html">National security and
                                    defence</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a>
                            </li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/policing.html">Policing, justice and
                                    emergencies</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/transport.html">Transport and
                                    infrastructure</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="http://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the
                                    world</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1"
                                    href="https://www.canada.ca/en/services/science.html">Science and innovation</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-xs-5 col-xs-offset-7 col-md-offset-0 col-md-4">
                    <section id="wb-so">
                        <h2 class="wb-inv">Sign in</h2><a class="btn btn-primary"
                            href="/en/revenue-agency/services/e-services/cra-login-services.html"><span
                                class="visible-xs">Sign in</span><span class="hidden-xs">CRA sign in</span></a>
                    </section>
                </div>
            </div>
        </div>
        <nav id="wb-bc" property="breadcrumb">
            <h2 class="wb-inv">You are here:</h2>
            <div class="container">
                <ol class="breadcrumb">
                    <li><a href='/en.html'>Home</a></li>
                    <li><a href='/en/services/taxes.html'>Taxes</a></li>
                    <li><a href='/en/services/taxes/income-tax.html'>Income tax</a></li>
                </ol>
            </div>
        </nav>
    </header>
    <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
        <div class="mwsgeneric-base-html parbase section">
            <div class="provisional profile">
                <div class="container">
                    <div class="intro mrgn-bttm-md">
                        <h1 property="name" id="wb-cont">Personal income tax </h1>
                    </div>
                    <p>Who should file a tax return, how to get ready and file taxes, payment and filing due dates,
                        reporting income and claiming deductions, and how to make payments or check the status of your
                        refund.</p>
                </div>
            </div>
            <section class="provisional most-requested-bullets well well-sm brdr-0 brdr-rds-0">
                <div class="container">
                    <div class="row">
                        <div class="pddng-r-0 col-md-2">
                            <h2 class="mrgn-tp-md">
                                Most requested
                            </h2>
                        </div>
                        <div class="col-md-10">
                            <!-- change to colcount-md-1 if you only have 2-3 most requested items -->
                            <ul class="wb-eqht mrgn-tp-md mrgn-bttm-md colcount-md-2">
                                <li><a
                                        href="/en/services/taxes/income-tax/personal-income-tax/how-file/tax-software.html">File
                                        a return with tax software</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html">File
                                        a paper return</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips.html">Tax
                                        slips</a></li>
                                <li><a href="/en/revenue-agency/services/forms-publications.html">Forms and publications
                                    </a></li>
                                <li><a
                                        href="/en/revenue-agency/services/payments/payments-cra/individual-payments/make-payment.html">Make
                                        a payment</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/refunds.html">Tax
                                        refund</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/change-your-address.html">Change
                                        your address</a></li>
                                <li><a
                                        href="/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit/individuals.html">Direct
                                        deposit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="row">
                    <section class="gc-srvinfo col-md-12">
                        <div class="wb-eqht row">
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/services/taxes/income-tax/personal-income-tax/who-should-file-tax.html">Who
                                        should file</a></h3>
                                <p>Determine if you need to file a tax return, what are your tax obligations</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html">Get
                                        ready to file</a></h3>
                                <p>What's new for 2024, get tax slips, NETFILE access code, update your information</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/how-file.html">How to
                                        file</a></h3>
                                <p>File using tax software or by paper, get help from a tax specialist or service</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/revenue-agency/services/payments/payments-cra.html">Paying your
                                        taxes</a></h3>
                                <p>Find options to pay a debt now or over time, pay 2025 taxes by instalments</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/after-you-file.html">After
                                        you file</a></h3>
                                <p>Get your notice of assessment (NOA), refund, proof of income, pay a balance owing,
                                    change a return</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/services/taxes/income-tax/personal-income-tax/help-others.html">Help
                                        others with their taxes</a></h3>
                                <p>Authorized representatives, free tax clinics, filing for someone who died</p>
                            </div>
                        </div>
                        <h2 class="mrgn-bttm-0">Understand how taxes work</h2>
                        <div class="wb-eqht row">
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html">Due
                                        dates and payment dates</a></h3>
                                <p>Filing and payment due dates for taxes, contributions, instalments or other amounts
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/reporting-income.html">
                                        Types of income to report
                                    </a></h3>
                                <p>What you need to report as income, how to enter amounts on your tax return</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html">
                                        Deductions, credits, and expenses to claim
                                    </a></h3>
                                <p>Deductions, credits, and expenses to reduce the amount of tax you have to pay</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html">Tax
                                        rates and income brackets
                                    </a></h3>
                                <p>Find federal, provincial and territorial tax rates, understand income tax brackets
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a
                                        href="/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties.html">Interest
                                        and penalties</a></h3>
                                <p>When and how interest charges and penalties are applied, late-filing, other penalties
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h3><a href="/en/revenue-agency/services/tax/individuals/educational-programs.html">Learn
                                        about your taxes</a></h3>
                                <p>Learn about our tax system, how it works, why we pay taxes</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="well well-sm brdr-0 brdr-rds-0 mrgn-tp-lg">
                <div class="container">
                    <h2 class="mrgn-tp-md h3">Focus on</h2>
                    <ul class="mrgn-tp-md mrgn-bttm-md colcount-md-2">
                        <li><a
                                href="/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities.html">Persons
                                with disabilities and their caregivers</a></li>
                        <li><a
                                href="/en/revenue-agency/services/tax/individuals/segments/changes-your-taxes-when-you-retire-turn-65-years-old.html">Adults
                                65 years and older</a></li>
                        <li><a
                                href="/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html">Newcomers
                                to Canada</a></li>
                        <li><a href="/en/revenue-agency/services/tax/individuals/segments/students.html">Students</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="provisional gc-prtts mrgn-tp-0">
                        <div class="row">
                            <section class="provisional col-md-12 mrgn-bttm-md mrgn-tp-0">
                                <h2>Features</h2>
                                <div class="wb-eqht row">
                                    <!-- feature 1 -->
                                    <div class="col-md-4 col-sm-6 mrgn-lft-0">
                                        <div class="well eqht-trgt"><a
                                                href="/en/revenue-agency/campaigns/dedicated-telephone-service.html"
                                                data-gc-analytics="promo:promotionalfeature">
                                                <figure>
                                                    <div> <img
                                                            src="/content/dam/cra-arc/camp-promo/features/ft-20250516-360x203.jpg"
                                                            alt="" class="img-responsive thumbnail mrgn-bttm-sm"> </div>
                                                    <figcaption>Dedicated Telephone Service</figcaption>
                                                    <div>
                                                        <p>Income tax service providers&nbsp;\u2013 register for our free
                                                            telephone service for help with your interpretive income tax
                                                            questions.</p>
                                                    </div>
                                                </figure>
                                            </a> </div>
                                    </div>
                                    <!-- feature 2 -->
                                    <div class="col-md-4 col-sm-6 mrgn-rght-0 mrgn-lft-0">
                                        <div class="well eqht-trgt"><a
                                                href="/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals/filing-dates-tax-return.html"
                                                data-gc-analytics="promo:promotionalfeature">
                                                <figure>
                                                    <div> <img
                                                            src="/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-19.jpg"
                                                            alt="" class="img-responsive thumbnail mrgn-bttm-sm"> </div>
                                                    <figcaption>Self-employed deadline</figcaption>
                                                    <div>
                                                        <p>Self-employed? Make sure to file before the deadline!</p>
                                                    </div>
                                                </figure>
                                            </a> </div>
                                    </div>
                                    <!-- feature 3 -->
                                    <div class="col-md-4 col-sm-6 mrgn-rght-0">
                                        <div class="well eqht-trgt"><a
                                                href="/en/services/taxes/income-tax/personal-income-tax/after-you-file/change-return.html"
                                                data-gc-analytics="promo:promotionalfeature">
                                                <figure>
                                                    <div>
                                                        <img src="/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-20.jpg"
                                                            alt="" class="img-responsive thumbnail mrgn-bttm-sm">
                                                    </div>
                                                    <figcaption>Request a change to your tax return online</figcaption>
                                                    <div>
                                                        <p>For faster service, submit your change request online.</p>
                                                    </div>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <section class="gc-contributors col-md-8">
                        <h2>From:</h2>
                        <ul>
                            <li><a href="/en/revenue-agency.html">Canada Revenue Agency</a></li>
                        </ul>
                    </section>
                    <section class="col-md-4 mrgn-bttm-sm">
                        <div data-ajax-replace="/content/dam/cra-arc/includes/social-media.txt#social-media-en">
                        </div>
                    </section>
                </div>
                <charlie></charlie>
                <section data-ajax-replace="/content/dam/cra-arc/includes/chatbot.txt#eng"></section>
            </div>
            <div class="container pagedetails ">
                <h2 class="wb-inv">Page details</h2>
                <div class="row">
                    <div class="col-sm-8 col-md-9 col-lg-9">
                        <div class="wb-disable-allow"
                            data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html"
                            data-feedback-section="PTR" data-feedback-theme="Taxes"></div>
                    </div>
                </div>
                <dl id="wb-dtmd">
                    <dt>
                        Date modified:
                    </dt>
                    <dd>
                        <time property="dateModified">2025-07-09</time>
                    </dd>
                </dl>
            </div>
        </div>
    </main>
    <footer>
        <footer id="wb-info">
            <h2 class="wb-inv">About this site</h2>
            <div class="gc-contextual">
                <div class="container">
                    <nav>
                        <h3>Canada Revenue Agency (CRA)</h3>
                        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
                            <li><a href="https://www.canada.ca/en/revenue-agency/corporate/contact-information.html">Contact
                                    the CRA</a></li>
                            <li><a href="https://www.canada.ca/en/revenue-agency/services/update-information-cra.html">Update
                                    your information</a></li>
                            <li><a
                                    href="https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra.html">About
                                    the CRA</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="gc-main-footer">
                <div class="container">
                    <nav>
                        <h3>Government of Canada</h3>
                        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
                            <li><a href="https://www.canada.ca/en/contact.html">All Contacts</a></li>
                            <li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a>
                            </li>
                            <li><a href="https://www.canada.ca/en/government/system.html">About government</a></li>
                        </ul>
                        <h4><span class="wb-inv">Themes and topics</span></h4>
                        <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                            <li><a href="https://www.canada.ca/en/services/jobs.html">Jobs</a></li>
                            <li><a href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and
                                    citizenship</a></li>
                            <li><a href="https://travel.gc.ca/">Travel and tourism</a></li>
                            <li><a href="https://www.canada.ca/en/services/business.html">Business</a></li>
                            <li><a href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
                            <li><a href="https://www.canada.ca/en/services/health.html">Health</a></li>
                            <li><a href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
                            <li><a href="https://www.canada.ca/en/services/environment.html">Environment and natural
                                    resources</a></li>
                            <li><a href="https://www.canada.ca/en/services/defence.html">National security and
                                    defence</a></li>
                            <li><a href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a>
                            </li>
                            <li><a href="https://www.canada.ca/en/services/policing.html">Policing, justice and
                                    emergencies</a></li>
                            <li><a href="https://www.canada.ca/en/services/transport.html">Transport and
                                    infrastructure</a></li>
                            <li><a href="https://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the
                                    world</a></li>
                            <li><a href="https://www.canada.ca/en/services/finance.html">Money and finance</a></li>
                            <li><a href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li>
                            <li><a href="https://www.canada.ca/en/services/indigenous-peoples.html">Indigenous
                                    peoples</a></li>
                            <li><a href="https://www.canada.ca/en/services/veterans.html">Veterans and military</a></li>
                            <li><a href="https://www.canada.ca/en/services/youth.html">Youth</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="gc-sub-footer">
                <div class="container d-flex align-items-center">
                    <nav>
                        <h3 class="wb-inv">Government of Canada Corporate</h3>
                        <ul>
                            <li><a href="https://www.canada.ca/en/social.html">Social media</a></li>
                            <li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li>
                            <li><a href="https://www.canada.ca/en/government/about.html">About Canada.ca</a></li>
                            <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
                            <li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>
                        </ul>
                    </nav>
                    <div class="wtrmrk align-self-end">
                        <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg"
                            alt="Symbol of the Government of Canada" />
                    </div>
                </div>
            </div>
        </footer>
    </footer>
    <script type="text/javascript">_satellite.pageBottom();<\/script>
    <script src="/etc.clientlibs/clientlibs/granite/jquery.min.js"><\/script>
    <script src="/etc.clientlibs/clientlibs/granite/utils.min.js"><\/script>
    <script src="/etc/designs/canada/clientlib-publish.min.js"><\/script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"><\/script>
    <script src="/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
    <script src="/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
    <script src="https://d14b1ho5p6410z.cloudfront.net/bundle-chatbot.js" type="module"><\/script>
</body>

</html>
`,bm=`
<div class="mwsgeneric-base-html parbase section">
    <div class="provisional profile">
        <div class="container">
            <div class="intro mrgn-bttm-md">
                <h1 property="name" id="wb-cont">Personal income tax</h1>
            </div>
            <p>Learn who should file a tax return, how to get ready, when and how to file, and how to check your refund
                or make a payment.</p>
        </div>
    </div>
    <section class="provisional most-requested-bullets well well-sm brdr-0 brdr-rds-0">
        <div class="container">
            <div class="row">
                <div class="pddng-r-0 col-md-2">
                    <h2 class="mrgn-tp-md">Most requested</h2>
                </div>
                <div class="col-md-10">
                    <ul class="wb-eqht mrgn-tp-md mrgn-bttm-md colcount-md-2">
                        <li><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file/tax-software.html"
                                target="_blank">File online with tax software</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html"
                                target="_blank">File by paper</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips.html"
                                target="_blank">Find your tax slips</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications.html"
                                target="_blank">Get forms and guides</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/make-payment.html"
                                target="_blank">Make a tax payment</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/refunds.html"
                                target="_blank">Track your tax refund</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/change-your-address.html"
                                target="_blank">Update your address</a></li>
                        <li><a href="https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit/individuals.html"
                                target="_blank">Set up direct deposit</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row">
            <section class="gc-srvinfo col-md-12">
                <div class="wb-eqht row">
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/who-should-file-tax.html"
                                target="_blank">Who should file</a></h3>
                        <p>Find out if you need to file a tax return and what your responsibilities are.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html"
                                target="_blank">Get ready to file</a></h3>
                        <p>See what\u2019s new for 2024, find your slips, access NETFILE, and update your info.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file.html"
                                target="_blank">How to file</a></h3>
                        <p>Learn how to file your taxes online or by paper, or get help if needed.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra.html"
                                target="_blank">Paying your taxes</a></h3>
                        <p>Explore how to pay now or over time, including instalments for 2025.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file.html"
                                target="_blank">After you file</a></h3>
                        <p>Get your Notice of Assessment, refund, proof of income, or make changes.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/help-others.html"
                                target="_blank">Help others</a></h3>
                        <p>Act for someone else, use free tax clinics, or file for someone who died.</p>
                    </div>
                </div>
                <h2 class="mrgn-bttm-0">Understand how taxes work</h2>
                <div class="wb-eqht row">
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html"
                                target="_blank">Due dates and payments</a></h3>
                        <p>Check deadlines for filing, payments, instalments, and other contributions.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/reporting-income.html"
                                target="_blank">Income to report</a></h3>
                        <p>What counts as income and how to include it on your return.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html"
                                target="_blank">Deductions and credits</a></h3>
                        <p>Lower your taxes by claiming deductions, credits, and expenses.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html"
                                target="_blank">Tax rates</a></h3>
                        <p>See federal, provincial, and territorial tax rates and brackets.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties.html"
                                target="_blank">Interest and penalties</a></h3>
                        <p>When interest or penalties apply, like for late filing or other issues.</p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h3><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs.html"
                                target="_blank">Learn about taxes</a></h3>
                        <p>Understand how Canada's tax system works and why we pay taxes.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="well well-sm brdr-0 brdr-rds-0 mrgn-tp-lg">
        <div class="container">
            <h2 class="mrgn-tp-md h3">Focus on</h2>
            <ul class="mrgn-tp-md mrgn-bttm-md colcount-md-2">
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities.html"
                        target="_blank">People with disabilities and caregivers</a></li>
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/changes-your-taxes-when-you-retire-turn-65-years-old.html"
                        target="_blank">Seniors (65 and older)</a></li>
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html"
                        target="_blank">Newcomers to Canada</a></li>
                <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/students.html"
                        target="_blank">Students</a></li>
            </ul>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="provisional gc-prtts mrgn-tp-0">
                <div class="row">
                    <section class="provisional col-md-12 mrgn-bttm-md mrgn-tp-0">
                        <h2>Features</h2>
                        <div class="wb-eqht row">
                            <div class="col-md-4 col-sm-6 mrgn-lft-0">
                                <div class="well eqht-trgt">
                                    <a href="https://www.canada.ca/en/revenue-agency/campaigns/dedicated-telephone-service.html"
                                        target="_blank">
                                        <figure>
                                            <div><img
                                                    src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/ft-20250516-360x203.jpg"
                                                    alt="" class="img-responsive thumbnail mrgn-bttm-sm"></div>
                                            <figcaption>Dedicated Telephone Service</figcaption>
                                            <div>
                                                <p>Tax professionals can register for free phone help with tax
                                                    questions.</p>
                                            </div>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mrgn-rght-0 mrgn-lft-0">
                                <div class="well eqht-trgt">
                                    <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals/filing-dates-tax-return.html"
                                        target="_blank">
                                        <figure>
                                            <div><img
                                                    src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-19.jpg"
                                                    alt="" class="img-responsive thumbnail mrgn-bttm-sm"></div>
                                            <figcaption>Self-employed deadline</figcaption>
                                            <div>
                                                <p>If you're self-employed, don\u2019t miss the deadline to file!</p>
                                            </div>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mrgn-rght-0">
                                <div class="well eqht-trgt">
                                    <a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file/change-return.html"
                                        target="_blank">
                                        <figure>
                                            <div><img
                                                    src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-20.jpg"
                                                    alt="" class="img-responsive thumbnail mrgn-bttm-sm"></div>
                                            <figcaption>Change your return online</figcaption>
                                            <div>
                                                <p>Need to fix your tax return? Do it online for faster service.</p>
                                            </div>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <section class="gc-contributors col-md-8">
                <h2>From:</h2>
                <ul>
                    <li><a href="https://www.canada.ca/en/revenue-agency.html" target="_blank">Canada Revenue Agency</a>
                    </li>
                </ul>
            </section>
            <section class="col-md-4 mrgn-bttm-sm">
                <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
                    <div>
                        <div id="social-media-en" class="gc-followus gc-followus-horizontal">
                            <h2>On social media</h2>
                            <ul class="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/canrevagency/" rel="external"
                                        class="social-lnk facebook" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            Facebook
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/CanRevAgency" rel="external" class="x-social"
                                        target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            X
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/CanRevAgency" rel="external"
                                        class="social-lnk youtube" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            YouTube
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.instagram.com/canrevagency" rel="external"
                                        class="social-lnk instagram" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            Instagram
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/cra-arc" rel="external"
                                        class="social-lnk linkedin" target="_blank">
                                        <span class="" style="border: 2px solid rgb(111, 159, 255);">
                                            LinkedIn
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section data-ajax-replace="/content/dam/cra-arc/includes/chatbot.txt#eng"></section>
    </div>
    <div class="container pagedetails">
        <h2 style="border: 2px solid rgb(111, 159, 255);">Page details</h2>
        <div class="row">
            <div class="col-sm-8 col-md-9 col-lg-9">
                <div class="wb-disable-allow"
                    data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html"
                    data-feedback-section="PTR" data-feedback-theme="Taxes"></div>
            </div>
        </div>
        <dl id="wb-dtmd">
            <dt>Date modified:</dt>
            <dd><time property="dateModified">2025-07-09</time></dd>
        </dl>
    </div>
</div>`,ym=`
<div class="container">
    <div class="row">
        <!-- showing the basic doormat pattern - refer to the Services and information documentation for options -->
        <section class="gc-srvinfo col-md-12">
            <h2 class="wb-inv">Services and information</h2>
            <div class="wb-eqht row">
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/income-tax.html">Income tax</a></h3>
                    <p>Personal, business, corporation, trust, and non-resident income tax, taxes for someone who died
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/payments.html">Payments</a></h3>
                    <p>How to send money to the CRA, receive your payments, options if you are unable to pay a debt</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/child-and-family-benefits.html">Tax credits and benefits for
                            individuals</a></h3>
                    <p>Payment dates, eligibility for children, caregivers, people with disabilities, workers and others
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html">GST/HST</a>
                    </h3>
                    <p>GST/HST accounts, collect and remit the tax, file a return, claim rebates, search the GST/HST
                        registry</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/payroll.html">Payroll</a></h3>
                    <p>Payroll accounts, deductions and contributions, information returns, and benefits and allowances
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/business-number.html">Business number</a></h3>
                    <p>When and how to register for a business number, CRA program accounts, and other government
                        programs</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/charities.html">Charities and giving</a></h3>
                    <p>How to register and run a charity, charities listings, and charitable tax credits</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/savings-and-pension-plans.html">Savings and pension plans</a></h3>
                    <p>Tax-free savings accounts, registered savings plans, pooled pension plans, and plan
                        administration</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/excise-taxes-duties-and-levies.html">Excise and specialty taxes</a>
                    </h3>
                    <p>Duties, customs, charges, tax on underused housing, luxury items, digital services revenue</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/corporate/scams-fraud.html">Scams and fraud</a></h3>
                    <p>Protect yourself against scams, how to report scams, identity theft, or tax cheating</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/support-difficult-situations.html">Support in difficult
                            situations</a></h3>
                    <p>Support in situations of abuse or disaster, CRA debts during financial hardship, past COVID-19
                        payments</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance.html">Compliance
                            and enforcement</a></h3>
                    <p>Reporting obligations, debt collection, audits, tax relief, objections or appeals</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/make-a-service-complaint.html">CRA Service feedback</a>
                    </h3>
                    <p>Send feedback to the CRA about a service experience</p>
                </div>
            </div>
        </section>
    </div>
</div>`,_m=`
<div class="container">
    <div class="row">
        <!-- showing the basic doormat pattern - refer to the Services and information documentation for options -->
        <section class="gc-srvinfo col-md-12">
            <h2 class="wb-inv">Services and information</h2>
            <div class="wb-eqht row">
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/income-tax.html">Income tax</a></h3>
                    <p>Personal, business, corporate, trust, and non-resident income tax, taxes for someone who has
                        passed away</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/payments.html">Payments</a></h3>
                    <p>How to pay the CRA, get your payments, and what to do if you can\u2019t pay a debt</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/child-and-family-benefits.html">Tax credits and benefits for
                            individuals</a></h3>
                    <p>Payment dates and eligibility for children, caregivers, people with disabilities, workers, and
                        others</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html">GST/HST</a>
                    </h3>
                    <p>GST/HST accounts, how to collect and send the tax, file returns, claim rebates, and search the
                        registry</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/tax/businesses/topics/payroll.html">Payroll</a></h3>
                    <p>Payroll accounts, deductions and contributions, information returns, benefits, and allowances</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/business-number.html">Business number</a></h3>
                    <p>When and how to register for a business number, CRA program accounts, and other government
                        services</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/charities.html">Charities and giving</a></h3>
                    <p>How to register and manage a charity, search charity listings, and claim charitable tax credits
                    </p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/savings-and-pension-plans.html">Savings and pension plans</a></h3>
                    <p>Tax-free savings accounts, registered plans, pooled pension plans, and how to manage them</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/services/taxes/excise-taxes-duties-and-levies.html">Excise and specialty taxes</a>
                    </h3>
                    <p>Duties, customs, charges, taxes on underused housing, luxury goods, and digital services</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/corporate/scams-fraud.html">Scams and fraud</a></h3>
                    <p>Protect yourself from scams, report fraud, identity theft, or tax cheating</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/support-difficult-situations.html">Support in difficult
                            situations</a></h3>
                    <p>Help for situations like abuse or natural disasters, CRA debts during financial hardship,
                        COVID-19 support</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance.html">Compliance
                            and enforcement</a></h3>
                    <p>What you must report, collections, audits, tax relief, and how to file objections or appeals</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3><a href="/en/revenue-agency/services/make-a-service-complaint.html">CRA Service feedback</a>
                    </h3>
                    <p>Share your feedback about a service experience with the CRA</p>
                </div>
            </div>
        </section>
    </div>
</div>`,Cm=`
<h1><a id="_tvxp2n7qvrhi"></a><strong>Who has to file a return</strong></h1>
<p>File a 2024 return if:</p>
<ul>
    <li>The CRA sent you a request to file a return</li>
    <li>You have to pay tax or want to claim a refund</li>
    <li>You or your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-address-information/marital-status.html">spouse
            or common-law partner</a> want to begin or continue receiving credits and benefits, such as:<ul>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html">Canada
                    child benefit</a> (CCB) and related provincial and territorial benefits</li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html">goods
                    and services tax/harmonized sales tax</a> (GST/HST) credit and related provincial and territorial
                credits and benefits</li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-carbon-rebate.html">Canada
                    Carbon Rebate</a> (CCR) (depending on your province or territory of residence)</li>
            <li>the <a
                    href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement.html">guaranteed
                    income supplement</a> (GIS)</li>
        </ul>
    </li>
</ul>
<h2><a id="_vzmhdfku778x"></a><strong>Note</strong></h2>
<p>If you have a spouse or common-law partner, they also have to file a return. For more information, see <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114.html">Booklet
        T4114, Canada Child Benefit and Related Federal, Provincial and Territorial Programs</a>, <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210.html">Guide
        RC4210, GST/HST Credit</a>, and <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4215.html">Guide
        RC4215, Canada Carbon Rebate</a>.</p>
<ul>
    <li>You want to claim the <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html">Canada
            workers benefit</a> (CWB) and receive advanced Canada workers benefit (ACWB) payments</li>
    <li>You and your spouse or common-law partner are jointly electing to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">split
            pension income</a></li>
    <li>You disposed of capital property (which may be a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/principal-residence-other-real-estate.html">principal
            residence</a>) or realized a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains.html">taxable
            capital gain</a> in 2024</li>
    <li>You have to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc2">repay
            all or part of your old age security (OAS) benefits</a> or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc1">employment
            insurance (EI) benefits</a></li>
    <li>You have not repaid all of the amounts that you withdrew from your registered retirement savings plan (RRSP)
        under the <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html">Home
            Buyers' Plan</a> (HBP) or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan.html">Lifelong
            Learning Plan</a> (LLP)</li>
    <li>You have to <a
            href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/contributions.html">contribute to the
            Canada Pension Plan</a> (CPP) for 2024 (your total net self-employment income and pensionable employment
        income is <strong>more than $3,500</strong>)</li>
    <li>You are <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-42120-employment-insurance-premiums-payable-on-self-employment-other-eligible-earnings.html">paying
            EI premiums on self-employment income or other eligible earnings</a></li>
    <li>You incurred a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html">non-capital
            loss</a> in 2024 that you want to be able to apply to other years</li>
    <li>You want to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts/transferring-carrying-forward-amounts.html">transfer
            unused tuition fees or carry forward unused tuition, education and textbook amounts</a> to a future year
    </li>
    <li>You want to report income that would allow you to contribute to an RRSP, a pooled registered pension plan (PRPP)
        or a specified pension plan (SPP) to keep your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html">RRSP
            deduction limit</a> for future years up to date (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s7.html">Schedule
            7</a>)</li>
    <li>You opened a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html">First
            home savings account</a> (FHSA) in 2023 or 2024 and want to keep your FHSA participation room up to date
        (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s15.html">Schedule
            15</a>)</li>
    <li>You want to carry forward the unused <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-41200-investment-tax-credit.html">investment
            tax credit</a> on expenditures that you incurred in 2024</li>
    <li>You want to report income that will allow you to increase your <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-training-credit.html">Canada
            training credit</a> limit</li>
</ul>
<h2><a id="_fvte9fmxb3pp"></a><strong>Deceased persons</strong></h2>
<p>If you are the legal representative (executor, administrator or liquidator) for the estate of a person who died in
    2024, you may have to file a 2024 return for that person.</p>
<p>Send the legal document that names you as the legal representative, such as a complete copy of the will, grant of
    probate or letters of administration, to the CRA.</p>
<p>If there is no legal document naming a legal representative, you may request to be the representative by completing
    <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc552.html">Form RC552, Register
        as Representative for a Deceased Person</a>.
</p>
<p>Send the document to the CRA online using <a
        href="https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html">Represent a
        Client</a> or <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/sending-a-tax-return.html">by
        mail</a> to the tax centre of the person who died.</p>
<p>For more information, go to <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/doing-taxes-someone-died.html">Doing
        taxes for someone who died</a>.</p>
<h2><a id="_tfqp7u2v3vi9"></a><strong>Forms and publications</strong></h2>
<ul>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html">Income
            Tax Package</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/non-residents.html">Income
            Tax Package for Non-Residents and Deemed Residents of Canada</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4112.html">Guide
            RC4112, Lifelong Learning Plan (LLP)</a></li>
</ul>
<h2><a id="_7fcwjqx0tush"></a><strong>Related topics</strong></h2>
<ul>
    <li><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html">Get ready
            to do your taxes</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html">Line
            22200 \u2013 Deduction for CPP or QPP contributions on self-employment income and other earnings</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html">Line
            23500 \u2013 Social benefits repayment</a></li>
</ul>`,wm=`
<h1><a id="_tvxp2n7qvrhi"></a><strong>Who needs to file a tax return</strong></h1>
<p>File a return for 2024 if any of these apply to you:</p>
<ul>
    <li>The CRA asked you to file a return</li>
    <li>You owe taxes or want to get a refund</li>
    <li>You or your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-address-information/marital-status.html">spouse
            or common-law partner</a> want to start or keep getting payments like:
        <ul>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html">Canada
                    child benefit</a> (CCB)</li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html">GST/HST
                    credit</a></li>
            <li>the <a
                    href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-carbon-rebate.html">Canada
                    Carbon Rebate</a> (CCR)</li>
            <li>the <a
                    href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement.html">Guaranteed
                    Income Supplement</a> (GIS)</li>
        </ul>
    </li>
</ul>
<h2><a id="_vzmhdfku778x"></a><strong>Important</strong></h2>
<p>If you have a spouse or common-law partner, they also need to file a return. Learn more in:</p>
<ul>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114.html">T4114 -
            Canada Child Benefit guide</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210.html">RC4210 -
            GST/HST Credit guide</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4215.html">RC4215 -
            Canada Carbon Rebate guide</a></li>
</ul>
<p>You also need to file a return if:</p>
<ul>
    <li>You want to get the <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html">Canada
            workers benefit</a> or advance payments (ACWB)</li>
    <li>You and your spouse or partner are choosing to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">split
            pension income</a></li>
    <li>You sold property like a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/principal-residence-other-real-estate.html">home</a>
        or had a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains.html">capital
            gain</a></li>
    <li>You have to repay part or all of your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc2">Old
            Age Security</a> or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html#toc1">Employment
            Insurance</a> benefits</li>
    <li>You haven\u2019t repaid money you withdrew from your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html">Home
            Buyers\u2019 Plan</a> or <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan.html">Lifelong
            Learning Plan</a></li>
    <li>You need to pay into the <a
            href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/contributions.html">Canada Pension
            Plan</a> (CPP) because your 2024 income from self-employment or work is over $3,500</li>
    <li>You are paying <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-42120-employment-insurance-premiums-payable-on-self-employment-other-eligible-earnings.html">Employment
            Insurance (EI) premiums</a> on self-employment or other earnings</li>
    <li>You had a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html">non-capital
            loss</a> in 2024 and want to use it later</li>
    <li>You want to <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts/transferring-carrying-forward-amounts.html">transfer
            or carry forward unused tuition, education, or textbook amounts</a></li>
    <li>You want to report income so you can keep your <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html">RRSP
            limit</a> up to date (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s7.html">Schedule
            7</a>)</li>
    <li>You opened a <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html">First
            Home Savings Account</a> (FHSA) in 2023 or 2024 and want to keep your participation room up to date (see <a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s15.html">Schedule
            15</a>)</li>
    <li>You want to carry forward the unused <a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-41200-investment-tax-credit.html">investment
            tax credit</a> for costs from 2024</li>
    <li>You want to report income to raise your <a
            href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-training-credit.html">Canada
            training credit</a> limit</li>
</ul>
<h2><a id="_fvte9fmxb3pp"></a><strong>If someone has died</strong></h2>
<p>If you are managing the affairs of someone who died in 2024, you may need to file their 2024 return.</p>
<p>Send the CRA a legal document that names you as the representative (such as a full copy of the will or probate
    papers).</p>
<p>If there\u2019s no legal document, you can ask to be the representative by sending <a
        href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc552.html">Form RC552</a>.</p>
<p>Send your document online through <a
        href="https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html">Represent a
        Client</a> or <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/sending-a-tax-return.html">by
        mail</a> to the tax centre of the deceased person.</p>
<p>More details: <a
        href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/doing-taxes-someone-died.html">Doing
        taxes for someone who died</a></p>
<h2><a id="_tfqp7u2v3vi9"></a><strong>Helpful forms and guides</strong></h2>
<ul>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html">General
            Income Tax Package</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/non-residents.html">Tax
            Package for Non-Residents</a></li>
    <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4112.html">RC4112 \u2013
            Lifelong Learning Plan (LLP)</a></li>
</ul>
<h2><a id="_7fcwjqx0tush"></a><strong>Related information</strong></h2>
<ul>
    <li><a href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html">Getting
            ready to do your taxes</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html">CPP/QPP
            deduction for self-employment</a></li>
    <li><a
            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html">Social
            benefits repayment</a></li>
</ul>`;var gC=Wb(Am());var pi=class t{constructor(i){this.uploadState=i}allowedHosts=new Set(["cra-design.github.io","cra-proto.github.io","gc-proto.github.io","test.canada.ca","www.canada.ca"]);fetchAndProcess(i){return Ce(this,null,function*(){let e=new URL(i);if(!this.allowedHosts.has(e.host))throw new Error(`${e.host} is blocked`);let n=yield fetch(`${i}?_=${Date.now()}`);if(!n.ok)throw new Error(`Fetch failed: HTTP ${n.status}`);console.warn(`Response code: ${n.status}`);let r=yield n.text();return this.extractContent(r)})}extractContent(i){return Ce(this,null,function*(){let e=new DOMParser().parseFromString(i,"text/html");yield this.processAjaxReplacements(e),yield this.processJsonReplacements(e),this.processModalDialogs(e),this.updateRelativeURLs(e,"https://www.canada.ca"),this.cleanupUnnecessaryElements(e),this.displayInvisibleElements(e),this.addToc(e);let n=e.querySelector("main");n||console.warn("No <main> tag found. Using full <body> content instead.");let r=n?n.outerHTML:e.body.innerHTML.trim();return yield this.formatHtml(r)})}formatHtml(i,e){return Ce(this,null,function*(){try{let{default:n}=yield import("./chunk-EAVPTRKQ.js");return e==="word"&&(i=`<main  property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">${i}</main>`,i=i.replace("<h1>",'<h1 property="name" id="wb-cont" dir="ltr">').replace("<table>",'<table class="wb-tables table table-striped">')),e!=="ai"&&(i=`<body vocab="http://schema.org/" typeof="WebPage" resource="#wb-webpage" class=" cnt-wdth-lmtd">${i}</body>`),e==="ai"&&(i=this.aiCleanup(i)),n.format(i,{parser:"html",plugins:[gC],htmlWhitespaceSensitivity:"ignore"})}catch(n){return console.error("Error formatting HTML:",n),i}})}aiCleanup(i){i=i.replace(/<p>```html<\/p>/,"```html\n").replace(/<p>```<\/p>/,"\n```");let e=i.match(/```(?:html)?\r?\n([\s\S]*?)\r?\n```/);e&&(i=e[1]),i=i.replace(/^<p>/,"").replace(/<\/p>$/,"").trim();let n=new DOMParser().parseFromString(i,"text/html");return n.querySelectorAll("p").forEach(r=>{let s=r.children;s.length===1&&s[0].matches("div, section, ul, ol, table, h1, h2, h3, h4, h5, h6")&&r.replaceWith(...r.childNodes)}),n.querySelectorAll("p").forEach(r=>{r.innerHTML.trim()===""&&r.remove()}),n.body.outerHTML}processAjaxReplacements(i){return Ce(this,null,function*(){let e="https://www.canada.ca",n=(d,h)=>Ce(null,null,function*(){try{let m=yield fetch(d);return h==="json"?m.json():m.text()}catch(m){return console.error(`Error fetching URL: ${d}`,m),h==="json"?{}:""}}),r=()=>Ce(null,null,function*(){let d=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]');if(d.length)for(let h of d){let m=h.tagName.toLowerCase(),v=h.attributes;for(let C=0;C<v.length;C++){let w=v[C],A=w.name,$=w.value;if(!A.startsWith("data-ajax-")||!$.startsWith("/"))continue;let[P,O]=$.split("#"),ge=`${e}${P}`,Ee=yield n(ge,"text");if(!Ee)continue;let ve=new DOMParser().parseFromString(Ee,"text/html"),Oe;if(O){let yt=ve.querySelector(`#${O}`);Oe=yt?yt.outerHTML:""}else{if(/<html[\s>]/i.test(Ee)&&/<body[\s>]/i.test(Ee)){console.warn(`Skipping full document injection from: ${ge}`);continue}Oe=ve.body?ve.body.innerHTML:ve.documentElement.innerHTML}if(!Oe)continue;let Rt=`
          <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
            <${m}>${Oe}</${m}>
          </div>
        `;h.outerHTML=Rt}}}),s,l=0;do s=l,yield r(),l=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]').length;while(l&&l!==s)})}processJsonReplacements(i){return Ce(this,null,function*(){let e="https://www.canada.ca",n=(v,C)=>Ce(null,null,function*(){try{let w=yield fetch(v);return C==="json"?w.json():w.text()}catch(w){return console.error(`Error fetching URL: ${v}`,w),C==="json"?{}:""}}),r=v=>{let[C,w=""]=v.split("#");return{url:C,jsonKey:w.slice(1)}},s=v=>{try{return JSON.parse(v.replace(/&quot;/g,'"'))}catch(C){return console.error("Error parsing JSON config:",C),null}},l=(v,C)=>C.split("/").reduce((w,A)=>w&&w[A]!==void 0?w[A]:void 0,v),d=i.querySelectorAll("[data-wb-jsonmanager]");if(!d.length)return;let h=new Map;yield Promise.all(Array.from(d).map(v=>Ce(null,null,function*(){let C=v.getAttribute("data-wb-jsonmanager");if(!C)return;let w=s(C);if(!w?.url||!w?.name)return;let{url:A,jsonKey:$}=r(w.url),P=`${e}${A}`;try{let O=yield n(P,"json"),ge=l(O,$);h.set(w.name,ge)}catch(O){console.error(`Error fetching JSON for ${w.name}:`,O)}}))),i.querySelectorAll("[data-json-replace]").forEach(v=>{let w=(v.getAttribute("data-json-replace")||"").match(/^#\[(.*?)\](.*)$/);if(!w)return;let A=w[1],$=w[2].substring(1);if(!h.has(A)){console.warn(`No JSON data found for: ${A}`);return}let P=h.get(A),ge=`
      <div style="
        border: 3px dashed #fbc02f;
        padding: 8px;
        border-radius: 4px;
      "> 
        ${l(P,$)} 
      </div>
    `;v.outerHTML=ge})})}cleanupUnnecessaryElements(i){["section#chat-bottom-bar","#gc-pft","header","footer","charlie"].forEach(n=>{i.querySelectorAll(n).forEach(r=>r.remove())})}displayInvisibleElements(i){[".wb-inv",".hidden",".nojs-show"].forEach(n=>{i.querySelectorAll(n).forEach(r=>{r.classList.remove(...n.split(".").filter(Boolean)),r.style.border="2px solid #6F9FFF"})})}processModalDialogs(i){i.querySelectorAll(".modal-dialog.modal-content").forEach(n=>{n.classList.remove("mfp-hide");let r=i.createElement("div");for(r.setAttribute("style","border: 2px dashed #666; padding: 8px; border-radius: 4px;");n.firstChild;)r.appendChild(n.firstChild);n.appendChild(r)})}updateRelativeURLs(i,e){let n=i.querySelectorAll("a"),r=i.querySelectorAll("img");n.forEach(s=>{let l=s.getAttribute("href");l&&(l.startsWith("/")?(s.setAttribute("href",`${e}${l}`),s.setAttribute("target","_blank")):/^(http|https):\/\//.test(l)&&s.setAttribute("target","_blank"))}),r.forEach(s=>{let l=s.getAttribute("src");l&&l.startsWith("/")&&s.setAttribute("src",`${e}${l}`)})}addToc(i){let e=i.querySelector(".section.mwsinpagetoc");if(!e)return;let n=Array.from(e.querySelectorAll("a")).map(s=>{let l=s.getAttribute("href"),d=s.textContent?.trim();return l?.startsWith("#")&&d?{id:l.slice(1),text:d}:null}).filter(s=>s!==null);if(!n.length)return;i.querySelectorAll("h2, h3, h4, h5, h6").forEach(s=>{let l=s.textContent?.trim();if(!l)return;let d=n.find(h=>h.text===l);d&&s.setAttribute("id",d.id)})}loadSampleDataset(i="webpage"){return Ce(this,null,function*(){let e,n;switch(i){case"snippet":e=yield this.extractContent(ym),n=yield this.formatHtml(_m);break;case"word":e=yield this.formatHtml(Cm,"word"),n=yield this.formatHtml(wm,"word");break;default:e=yield this.extractContent(vm),n=yield this.formatHtml(bm);break}this.uploadState.setUploadData({originalUrl:`Original ${i}`,originalHtml:e,modifiedUrl:`Modified ${i}`,modifiedHtml:n})})}static \u0275fac=function(e){return new(e||t)(z(Sn))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var vC=["header"],bC=["title"],yC=["subtitle"],_C=["content"],CC=["footer"],wC=["*",[["p-header"]],[["p-footer"]]],SC=["*","p-header","p-footer"];function DC(t,i){t&1&&He(0)}function xC(t,i){if(t&1&&(x(0,"div",8),nt(1,1),k(2,DC,1,0,"ng-container",6),T()),t&2){let e=D();y(2),b("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function EC(t,i){if(t&1&&(et(0),De(1),tt()),t&2){let e=D(2);y(),$e(e.header)}}function TC(t,i){t&1&&He(0)}function AC(t,i){if(t&1&&(x(0,"div",9),k(1,EC,2,1,"ng-container",10)(2,TC,1,0,"ng-container",6),T()),t&2){let e=D();y(),b("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),y(),b("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function IC(t,i){if(t&1&&(et(0),De(1),tt()),t&2){let e=D(2);y(),$e(e.subheader)}}function kC(t,i){t&1&&He(0)}function FC(t,i){if(t&1&&(x(0,"div",11),k(1,IC,2,1,"ng-container",10)(2,kC,1,0,"ng-container",6),T()),t&2){let e=D();y(),b("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),y(),b("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function RC(t,i){t&1&&He(0)}function MC(t,i){t&1&&He(0)}function LC(t,i){if(t&1&&(x(0,"div",12),nt(1,2),k(2,MC,1,0,"ng-container",6),T()),t&2){let e=D();y(2),b("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var OC=({dt:t})=>`
.p-card {
    background: ${t("card.background")};
    color: ${t("card.color")};
    box-shadow: ${t("card.shadow")};
    border-radius: ${t("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${t("card.caption.gap")};
}

.p-card-body {
    padding: ${t("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("card.body.gap")};
}

.p-card-title {
    font-size: ${t("card.title.font.size")};
    font-weight: ${t("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${t("card.subtitle.color")};
}
`,PC={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Im=(()=>{class t extends ye{name="card";theme=OC;classes=PC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var NC=(()=>{class t extends Se{header;subheader;set style(e){Ni(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Be(null);_componentStyle=S(Im);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-card"]],contentQueries:function(n,r,s){if(n&1&&(pe(s,Kf,5),pe(s,Yf,5),pe(s,vC,4),pe(s,bC,4),pe(s,yC,4),pe(s,_C,4),pe(s,CC,4),pe(s,qt,4)),n&2){let l;ee(l=te())&&(r.headerFacet=l.first),ee(l=te())&&(r.footerFacet=l.first),ee(l=te())&&(r.headerTemplate=l.first),ee(l=te())&&(r.titleTemplate=l.first),ee(l=te())&&(r.subtitleTemplate=l.first),ee(l=te())&&(r.contentTemplate=l.first),ee(l=te())&&(r.footerTemplate=l.first),ee(l=te())&&(r.templates=l)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[ue([Im]),U],ngContentSelectors:SC,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,r){n&1&&(pt(wC),x(0,"div",0),k(1,xC,3,1,"div",1),x(2,"div",2),k(3,AC,3,2,"div",3)(4,FC,3,2,"div",4),x(5,"div",5),nt(6),k(7,RC,1,0,"ng-container",6),T(),k(8,LC,3,1,"div",7),T()()),n&2&&(Q(r.styleClass),b("ngClass","p-card p-component")("ngStyle",r._style()),M("data-pc-name","card"),y(),b("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),y(2),b("ngIf",r.header||r.titleTemplate||r._titleTemplate),y(),b("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),y(3),b("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),y(),b("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[we,ht,Ke,xt,tn,de],encapsulation:2,changeDetection:0})}return t})(),qR=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[NC,de,de]})}return t})();function BC(t,i){if(t&1){let e=Ae();x(0,"div",3)(1,"p-radioButton",4),ar("ngModelChange",function(r){K(e);let s=D();return or(s.selected,r)||(s.selected=r),Y(r)}),J("ngModelChange",function(r){K(e);let s=D();return Y(s.onChange(r))}),T(),x(2,"label",5),L(3,"i"),De(4),Me(5,"translate"),T()()}if(t&2){let e=i.$implicit,n=i.index,r=D();y(),b("inputId",r.name+"-"+n)("name",r.name)("value",e.value),rr("ngModel",r.selected),y(),b("for",r.name+"-"+n),y(),Q(e.icon),y(),vt(" ",Le(5,8,e.label)," ")}}var km=class t{label;name;options=[];selected;selectedChange=new G;onChange(i){this.selectedChange.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=W({type:t,selectors:[["ca-horizontal-radio-buttons"]],inputs:{label:"label",name:"name",options:"options",selected:"selected"},outputs:{selectedChange:"selectedChange"},decls:6,vars:7,consts:[[1,"mb-1","font-semibold","block",3,"for"],["role","radiogroup",1,"flex","flex-wrap","gap-3"],["class","field-radiobutton",4,"ngFor","ngForOf"],[1,"field-radiobutton"],[3,"ngModelChange","inputId","name","value","ngModel"],[3,"for"]],template:function(e,n){e&1&&(x(0,"div")(1,"label",0),De(2),Me(3,"translate"),T(),x(4,"div",1),k(5,BC,6,10,"div",2),T()()),e&2&&(y(),b("for",n.name+"-0"),M("id",n.name+"-label"),y(),$e(Le(3,5,n.label)),y(2),M("aria-labelledby",n.name+"-label"),y(),b("ngForOf",n.options))},dependencies:[we,sr,si,Fr,sn,ei,Jn,Gs],encapsulation:2})};var $C=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,UC={root:({instance:t,props:i})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large","p-invalid":i.invalid,"p-variant-filled":i.variant==="filled","p-inputtext-fluid":i.fluid}]},Fm=(()=>{class t extends ye{name="inputtext";theme=$C;classes=UC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Rm=(()=>{class t extends Se{ngModel;variant;fluid;pSize;filled;_componentStyle=S(Fm);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return it(this.fluid)?!!n:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)(B(sn,8))};static \u0275dir=ne({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,r){if(n&1&&J("input",function(l){return r.onInput(l)}),n&2){let s;_t("p-filled",r.filled)("p-variant-filled",((s=r.variant)!==null&&s!==void 0?s:r.config.inputStyle()||r.config.inputVariant())==="filled")("p-inputtext-fluid",r.hasFluid)("p-inputtext-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-inputtext-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",j],pSize:"pSize"},features:[ue([Fm]),U]})}return t})(),Mm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var jC=["*"],HC=({dt:t})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,zC={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},Lm=(()=>{class t extends ye{name="inputgroup";theme=HC;classes=zC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Su=(()=>{class t extends Se{style;styleClass;_componentStyle=S(Lm);static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(n,r){n&2&&(M("data-pc-name","inputgroup"),Xt(r.style),Q(r.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[ue([Lm]),U],ngContentSelectors:jC,decls:1,vars:0,template:function(n,r){n&1&&(pt(),nt(0))},dependencies:[we,de],encapsulation:2})}return t})(),Om=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Su,de,de]})}return t})();var WC=["*"],GC={root:"p-inputgroupaddon"},Pm=(()=>{class t extends ye{name="inputgroupaddon";classes=GC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Du=(()=>{class t extends Se{style;styleClass;_componentStyle=S(Pm);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(n,r){n&2&&(M("data-pc-name","inputgroupaddon"),Xt(r.hostStyle),Q(r.styleClass),_t("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[ue([Pm]),U],ngContentSelectors:WC,decls:1,vars:0,template:function(n,r){n&1&&(pt(),nt(0))},dependencies:[we],encapsulation:2})}return t})(),Nm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Du,de,de]})}return t})();var YC=["container"],ZC=["icon"],QC=["closeicon"],XC=["*"],JC=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),ew=t=>({value:"visible()",params:t}),tw=t=>({closeCallback:t});function nw(t,i){t&1&&He(0)}function iw(t,i){if(t&1&&k(0,nw,1,0,"ng-container",7),t&2){let e=D(2);b("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function rw(t,i){if(t&1&&L(0,"i",3),t&2){let e=D(2);b("ngClass",e.icon)}}function ow(t,i){if(t&1&&L(0,"span",9),t&2){let e=D(3);b("ngClass",e.cx("text"))("innerHTML",e.text,Aa)}}function aw(t,i){if(t&1&&(x(0,"div"),k(1,ow,1,2,"span",8),T()),t&2){let e=D(2);y(),b("ngIf",!e.escape)}}function sw(t,i){if(t&1&&(x(0,"span",5),De(1),T()),t&2){let e=D(3);b("ngClass",e.cx("text")),y(),$e(e.text)}}function lw(t,i){if(t&1&&k(0,sw,2,2,"span",10),t&2){let e=D(2);b("ngIf",e.escape&&e.text)}}function cw(t,i){t&1&&He(0)}function uw(t,i){if(t&1&&k(0,cw,1,0,"ng-container",11),t&2){let e=D(2);b("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",Vt(2,tw,e.close.bind(e)))}}function dw(t,i){if(t&1&&(x(0,"span",5),nt(1),T()),t&2){let e=D(2);b("ngClass",e.cx("text"))}}function pw(t,i){if(t&1&&L(0,"i",13),t&2){let e=D(3);b("ngClass",e.closeIcon)}}function hw(t,i){t&1&&He(0)}function fw(t,i){if(t&1&&k(0,hw,1,0,"ng-container",7),t&2){let e=D(3);b("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function mw(t,i){t&1&&L(0,"TimesIcon",14)}function gw(t,i){if(t&1){let e=Ae();x(0,"button",12),J("click",function(r){K(e);let s=D(2);return Y(s.close(r))}),k(1,pw,1,1,"i",13)(2,fw,1,1,"ng-container")(3,mw,1,0,"TimesIcon",14),T()}if(t&2){let e=D(2);M("aria-label",e.closeAriaLabel),y(),lt(e.closeIcon?1:-1),y(),lt(e.closeIconTemplate||e._closeIconTemplate?2:-1),y(),lt(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function vw(t,i){if(t&1&&(x(0,"div",1)(1,"div",2),k(2,iw,1,1,"ng-container")(3,rw,1,1,"i",3)(4,aw,2,1,"div",4)(5,lw,1,1,"ng-template",null,0,mn)(7,uw,1,4,"ng-container")(8,dw,2,1,"span",5)(9,gw,4,4,"button",6),T()()),t&2){let e=Ut(6),n=D();b("ngClass",n.containerClass)("@messageAnimation",Vt(13,ew,Fa(10,JC,n.showTransitionOptions,n.hideTransitionOptions))),M("aria-live","polite")("role","alert"),y(2),lt(n.iconTemplate||n._iconTemplate?2:-1),y(),lt(n.icon?3:-1),y(),b("ngIf",!n.escape)("ngIfElse",e),y(3),lt(n.containerTemplate||n._containerTemplate?7:8),y(2),lt(n.closable?9:-1)}}var bw=({dt:t})=>`
.p-message {
    border-radius: ${t("message.border.radius")};
    outline-width: ${t("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${t("message.content.padding")};
    gap: ${t("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${t("message.close.button.width")};
    height: ${t("message.close.button.height")};
    border-radius: ${t("message.close.button.border.radius")};
    background: transparent;
    transition: background ${t("message.transition.duration")}, color ${t("message.transition.duration")}, outline-color ${t("message.transition.duration")}, box-shadow ${t("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${t("message.close.icon.size")};
    width: ${t("message.close.icon.size")};
    height: ${t("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${t("message.close.button.focus.ring.width")};
    outline-style: ${t("message.close.button.focus.ring.style")};
    outline-offset: ${t("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${t("message.info.background")};
    outline-color: ${t("message.info.border.color")};
    color: ${t("message.info.color")};
    box-shadow: ${t("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${t("message.info.close.button.focus.ring.color")};
    box-shadow: ${t("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${t("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${t("message.info.outlined.color")};
    outline-color: ${t("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${t("message.info.simple.color")};
}

.p-message-success {
    background: ${t("message.success.background")};
    outline-color: ${t("message.success.border.color")};
    color: ${t("message.success.color")};
    box-shadow: ${t("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${t("message.success.close.button.focus.ring.color")};
    box-shadow: ${t("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${t("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${t("message.success.outlined.color")};
    outline-color: ${t("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${t("message.success.simple.color")};
}

.p-message-warn {
    background: ${t("message.warn.background")};
    outline-color: ${t("message.warn.border.color")};
    color: ${t("message.warn.color")};
    box-shadow: ${t("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${t("message.warn.close.button.focus.ring.color")};
    box-shadow: ${t("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${t("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${t("message.warn.outlined.color")};
    outline-color: ${t("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${t("message.warn.simple.color")};
}

.p-message-error {
    background: ${t("message.error.background")};
    outline-color: ${t("message.error.border.color")};
    color: ${t("message.error.color")};
    box-shadow: ${t("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${t("message.error.close.button.focus.ring.color")};
    box-shadow: ${t("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${t("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${t("message.error.outlined.color")};
    outline-color: ${t("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${t("message.error.simple.color")};
}

.p-message-secondary {
    background: ${t("message.secondary.background")};
    outline-color: ${t("message.secondary.border.color")};
    color: ${t("message.secondary.color")};
    box-shadow: ${t("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${t("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${t("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${t("message.secondary.outlined.color")};
    outline-color: ${t("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${t("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${t("message.contrast.background")};
    outline-color: ${t("message.contrast.border.color")};
    color: ${t("message.contrast.color")};
    box-shadow: ${t("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${t("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${t("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${t("message.contrast.outlined.color")};
    outline-color: ${t("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${t("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${t("message.text.font.size")};
    font-weight: ${t("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${t("message.icon.size")};
    width: ${t("message.icon.size")};
    height: ${t("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${t("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${t("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${t("message.icon.sm.size")};
    width: ${t("message.icon.sm.size")};
    height: ${t("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${t("message.close.icon.sm.size")};
    width: ${t("message.close.icon.sm.size")};
    height: ${t("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${t("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${t("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${t("message.icon.lg.size")};
    width: ${t("message.icon.lg.size")};
    height: ${t("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${t("message.close.icon.lg.size")};
    width: ${t("message.close.icon.lg.size")};
    height: ${t("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${t("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${t("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,yw={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Bm=(()=>{class t extends ye{name="message";theme=bw;classes=yw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Ln=(()=>{class t extends Se{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new G;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",n=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${n}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Be(!0);_componentStyle=S(Bm);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-message"]],contentQueries:function(n,r,s){if(n&1&&(pe(s,YC,4),pe(s,ZC,4),pe(s,QC,4),pe(s,qt,4)),n&2){let l;ee(l=te())&&(r.containerTemplate=l.first),ee(l=te())&&(r.iconTemplate=l.first),ee(l=te())&&(r.closeIconTemplate=l.first),ee(l=te())&&(r.templates=l)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",j],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",j],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[ue([Bm]),U],ngContentSelectors:XC,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(n,r){n&1&&(pt(),k(0,vw,10,15,"div",1)),n&2&&lt(r.visible()?0:-1)},dependencies:[we,ht,Ke,xt,Ks,Ys,de],encapsulation:2,data:{animation:[so("messageAnimation",[Ai(":enter",[Kn({opacity:0,transform:"translateY(-25%)"}),Ti("{{showTransitionParams}}")]),Ai(":leave",[Ti("{{hideTransitionParams}}",Kn({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),$m=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Ln,de,de]})}return t})();function Cw(t,i){t&1&&(L(0,"div",16),Me(1,"translate")),t&2&&b("@slideDown",void 0)("innerHTML",Le(1,2,"page.upload.url.example"),Aa)}function ww(t,i){t&1&&(x(0,"div"),De(1),Me(2,"translate"),T()),t&2&&(y(),vt(" ",Le(2,1,"page.upload.url.error.required"),". "))}function Sw(t,i){t&1&&(x(0,"div"),De(1),Me(2,"translate"),T()),t&2&&(y(),vt(" ",Le(2,1,"page.upload.url.error.pattern")," "))}function Dw(t,i){if(t&1&&(x(0,"div",17),k(1,ww,3,3,"div",18)(2,Sw,3,3,"div",18),T()),t&2){D();let e=Ut(17);y(),b("ngIf",e.errors==null?null:e.errors.required),y(),b("ngIf",e.errors==null?null:e.errors.pattern)}}function xw(t,i){if(t&1&&L(0,"p-message",19),t&2){let e=D();b("text",e.error)}}function Ew(t,i){if(t&1){let e=Ae();x(0,"p-button",20),Me(1,"translate"),J("onClick",function(){K(e);let r=D();return Y(r.loadSampleData())}),T()}t&2&&b("label",Le(1,1,"page.upload.sample"))}var Um=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.url.modified":"page.upload.url.original"}uploadComplete=new G;userInput="";error="";loading=!1;showHelp=!1;getHtmlContent(){return Ce(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.url.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.fetchAndProcess(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.userInput,originalHtml:n,modifiedUrl:this.userInput,modifiedHtml:n}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:this.userInput,modifiedHtml:n}),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return Ce(this,null,function*(){yield this.urlDataService.loadSampleDataset("webpage"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(B(pi),B(Sn),B(kn))};static \u0275cmp=W({type:t,selectors:[["ca-upload-url"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:25,vars:22,consts:[["form","ngForm"],["urlField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"pi","pi-question-circle","text-primary","cursor-pointer",3,"click","ariaLabel"],["class","text-sm mt-2",3,"innerHTML",4,"ngIf"],[1,"mt-3"],["for","userInput",1,"font-semibold"],[1,"pi","pi-globe"],["id","userInput","pInputText","","type","url","name","userInput","required","","pattern","https?://.+","autocomplete","url","fluid","",1,"w-full",3,"ngModelChange","ngModel","placeholder"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-sm","mt-2",3,"innerHTML"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let r=Ae();x(0,"form",2,0),J("ngSubmit",function(){return K(r),Y(n.getHtmlContent())}),x(2,"fieldset",3)(3,"legend",4),De(4),Me(5,"translate"),x(6,"i",5),Me(7,"translate"),J("click",function(){return K(r),Y(n.showHelp=!n.showHelp)}),T()(),k(8,Cw,2,4,"div",6),x(9,"div",7)(10,"label",8),De(11),Me(12,"translate"),T(),x(13,"p-inputGroup")(14,"p-inputgroup-addon"),L(15,"i",9),T(),x(16,"input",10,1),Me(18,"translate"),ar("ngModelChange",function(l){return K(r),or(n.userInput,l)||(n.userInput=l),Y(l)}),T()(),k(19,Dw,3,2,"div",11),T(),k(20,xw,1,1,"p-message",12),x(21,"div",13),L(22,"p-button",14),Me(23,"translate"),k(24,Ew,2,3,"p-button",15),T()()()}if(e&2){let r=Ut(1),s=Ut(17);y(4),vt(" ",Le(5,12,"page.upload.url.legend")," "),y(2),b("ariaLabel",Le(7,14,"page.upload.url.toggleHelp")),y(2),b("ngIf",n.showHelp),y(3),$e(Le(12,16,n.labelKey)),y(5),rr("ngModel",n.userInput),b("placeholder",Le(18,18,"page.upload.url.placeholder")),y(3),b("ngIf",s.invalid&&s.touched),y(),b("ngIf",n.error),y(2),b("label",Le(23,20,"page.upload.continue"))("loading",n.loading)("disabled",r.invalid),y(2),b("ngIf",n.showSampleDataButton)}},dependencies:[we,Ke,ei,Jn,si,$s,kr,Fr,Ns,Ko,ru,sn,Go,Br,Mn,Mm,Rm,Om,Su,Nm,Du,$m,Ln],styles:["[_nghost-%COMP%]{display:block}"],data:{animation:[so("slideDown",[Ma("void",Kn({opacity:0,transform:"translateY(-20px)"})),Ma("*",Kn({opacity:1,transform:"translateY(0)"})),Ai(":enter",Ti("200ms ease-out")),Ai(":leave",Ti("100ms ease-in",Kn({opacity:0,transform:"translateY(-10px)"})))])]}})};var Tw=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${t("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${t("textarea.sm.font.size")};
    padding-block: ${t("textarea.sm.padding.y")};
    padding-inline: ${t("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${t("textarea.lg.font.size")};
    padding-block: ${t("textarea.lg.padding.y")};
    padding-inline: ${t("textarea.lg.padding.x")};
}
`,Aw={root:({instance:t,props:i})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":i.autoResize,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":i.fluid}]},Vm=(()=>{class t extends ye{name="textarea";theme=Tw;classes=Aw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var jm=(()=>{class t extends Se{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new G;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=S(Vm);constructor(e,n){super(),this.ngModel=e,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(B(sn,8),B(an,8))};static \u0275dir=ne({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,r){n&1&&J("input",function(l){return r.onInput(l)}),n&2&&_t("p-filled",r.filled)("p-textarea-resizable",r.autoResize)("p-variant-filled",r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled")("p-textarea-fluid",r.hasFluid)("p-textarea-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-textarea-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",j],variant:"variant",fluid:[2,"fluid","fluid",j],pSize:"pSize"},outputs:{onResize:"onResize"},features:[ue([Vm]),U]})}return t})(),Hm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function kw(t,i){t&1&&(x(0,"div"),De(1),Me(2,"translate"),T()),t&2&&(y(),vt(" ",Le(2,1,"page.upload.paste.error.required")," "))}function Fw(t,i){if(t&1&&(x(0,"div",13),k(1,kw,3,3,"div",14),T()),t&2){D();let e=Ut(11);y(),b("ngIf",e.errors==null?null:e.errors.required)}}function Rw(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=D();b("text",e.error)}}function Mw(t,i){if(t&1){let e=Ae();x(0,"p-button",16),Me(1,"translate"),J("onClick",function(){K(e);let r=D();return Y(r.loadSampleData())}),T()}t&2&&b("label",Le(1,1,"page.upload.sample"))}var zm=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.paste.modified":"page.upload.paste.original"}uploadComplete=new G;userInput="";error="";loading=!1;getPasteContent(){return Ce(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.paste.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.extractContent(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:"Copy/Paste",originalHtml:n,modifiedUrl:"Copy/Paste",modifiedHtml:n}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:"Copy/Paste",modifiedHtml:n}),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return Ce(this,null,function*(){yield this.urlDataService.loadSampleDataset("snippet"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(B(pi),B(Sn),B(kn))};static \u0275cmp=W({type:t,selectors:[["ca-upload-paste"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:18,vars:15,consts:[["form","ngForm"],["inputField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"mt-3"],["for","source",1,"font-semibold"],["type","text","id","source","pTextarea","","rows","3","name","userInput","required","","fluid","",1,"w-full",3,"ngModelChange","ngModel"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let r=Ae();x(0,"form",2,0),J("ngSubmit",function(){return K(r),Y(n.getPasteContent())}),x(2,"fieldset",3)(3,"legend",4),De(4),Me(5,"translate"),T(),x(6,"div",5)(7,"label",6),De(8),Me(9,"translate"),T(),x(10,"textarea",7,1),ar("ngModelChange",function(l){return K(r),or(n.userInput,l)||(n.userInput=l),Y(l)}),T(),k(12,Fw,2,1,"div",8),T(),k(13,Rw,1,1,"p-message",9),x(14,"div",10),L(15,"p-button",11),Me(16,"translate"),k(17,Mw,2,3,"p-button",12),T()()()}if(e&2){let r=Ut(1),s=Ut(11);y(4),vt(" ",Le(5,9,"page.upload.paste.legend")," "),y(4),$e(Le(9,11,n.labelKey)),y(2),rr("ngModel",n.userInput),y(2),b("ngIf",s.invalid&&s.touched),y(),b("ngIf",n.error),y(2),b("label",Le(16,13,"page.upload.continue"))("loading",n.loading)("disabled",r.invalid),y(2),b("ngIf",n.showSampleDataButton)}},dependencies:[we,Ke,ei,Jn,si,$s,kr,Fr,Ns,Ko,sn,Go,Br,Mn,Hm,jm,Ln],styles:["[_nghost-%COMP%]{display:block}"]})};var Lw=["content"],Ow=(t,i)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":i}),Pw=t=>({$implicit:t});function Nw(t,i){if(t&1&&(x(0,"div"),De(1),T()),t&2){let e=D(2);Wn("display",e.value!=null&&e.value!==0?"flex":"none"),M("data-pc-section","label"),y(),_p("",e.value,"",e.unit,"")}}function Bw(t,i){t&1&&He(0)}function $w(t,i){if(t&1&&(x(0,"div",3)(1,"div",4),k(2,Nw,2,5,"div",5)(3,Bw,1,0,"ng-container",6),T()()),t&2){let e=D();Q(e.valueStyleClass),Wn("width",e.value+"%")("background",e.color),b("ngClass","p-progressbar-value p-progressbar-value-animate"),M("data-pc-section","value"),y(2),b("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),y(),b("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Vt(11,Pw,e.value))}}function Uw(t,i){if(t&1&&(x(0,"div",7),L(1,"div",8),T()),t&2){let e=D();Q(e.valueStyleClass),b("ngClass","p-progressbar-indeterminate-container"),M("data-pc-section","container"),y(),Wn("background",e.color),M("data-pc-section","value")}}var Vw=({dt:t})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${t("progressbar.height")};
    background: ${t("progressbar.background")};
    border-radius: ${t("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${t("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${t("progressbar.label.color")};
    font-size: ${t("progressbar.label.font.size")};
    font-weight: ${t("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,jw={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},qm=(()=>{class t extends ye{name="progressbar";theme=Vw;classes=jw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var xu=(()=>{class t extends Se{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=S(qm);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(n,r,s){if(n&1&&(pe(s,Lw,4),pe(s,qt,4)),n&2){let l;ee(l=te())&&(r.contentTemplate=l.first),ee(l=te())&&(r.templates=l)}},inputs:{value:[2,"value","value",wt],showValue:[2,"showValue","showValue",j],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[ue([qm]),U],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(n,r){n&1&&(x(0,"div",0),k(1,$w,4,13,"div",1)(2,Uw,2,7,"div",2),T()),n&2&&(Q(r.styleClass),b("ngStyle",r.style)("ngClass",Fa(12,Ow,r.mode==="determinate",r.mode==="indeterminate")),M("aria-valuemin",0)("aria-valuenow",r.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",r.value+r.unit),y(),b("ngIf",r.mode==="determinate"),y(),b("ngIf",r.mode==="indeterminate"))},dependencies:[we,ht,Ke,xt,tn,de],encapsulation:2,changeDetection:0})}return t})(),s4=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[xu,de,de]})}return t})();var Hw=["file"],zw=["header"],Wm=["content"],qw=["toolbar"],Ww=["chooseicon"],Gw=["filelabel"],Kw=["uploadicon"],Yw=["cancelicon"],Zw=["empty"],Qw=["advancedfileinput"],Xw=["basicfileinput"],Jw=(t,i,e,n,r)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,uploadCallback:r}),eS=(t,i,e,n,r,s,l,d)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,removeUploadedFileCallback:r,removeFileCallback:s,progress:l,messages:d}),tS=t=>({$implicit:t});function nS(t,i){if(t&1&&L(0,"span"),t&2){let e=D(3);Q(e.chooseIcon),M("aria-label",!0)("data-pc-section","chooseicon")}}function iS(t,i){t&1&&L(0,"PlusIcon"),t&2&&M("aria-label",!0)("data-pc-section","chooseicon")}function rS(t,i){}function oS(t,i){t&1&&k(0,rS,0,0,"ng-template")}function aS(t,i){if(t&1&&(x(0,"span"),k(1,oS,1,0,null,11),T()),t&2){let e=D(4);M("aria-label",!0)("data-pc-section","chooseicon"),y(),b("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function sS(t,i){if(t&1&&(et(0),k(1,iS,1,2,"PlusIcon",9)(2,aS,2,3,"span",9),tt()),t&2){let e=D(3);y(),b("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),y(),b("ngIf",e.chooseIconTemplate||e._chooseIconTemplate)}}function lS(t,i){if(t&1&&L(0,"span",21),t&2){let e=D(4);b("ngClass",e.uploadIcon),M("aria-hidden",!0)}}function cS(t,i){t&1&&L(0,"UploadIcon")}function uS(t,i){}function dS(t,i){t&1&&k(0,uS,0,0,"ng-template")}function pS(t,i){if(t&1&&(x(0,"span"),k(1,dS,1,0,null,11),T()),t&2){let e=D(5);M("aria-hidden",!0),y(),b("ngTemplateOutlet",e.uploadIconTemplate||e._uploadIconTemplate)}}function hS(t,i){if(t&1&&(et(0),k(1,cS,1,0,"UploadIcon",9)(2,pS,2,2,"span",9),tt()),t&2){let e=D(4);y(),b("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),y(),b("ngIf",e.uploadIconTemplate||e._uploadIconTemplate)}}function fS(t,i){if(t&1){let e=Ae();x(0,"p-button",19),J("onClick",function(){K(e);let r=D(3);return Y(r.upload())}),k(1,lS,1,2,"span",20)(2,hS,3,2,"ng-container",9),T()}if(t&2){let e=D(3);b("label",e.uploadButtonLabel)("disabled",!e.hasFiles()||e.isFileLimitExceeded())("styleClass","p-fileupload-upload-button "+e.uploadStyleClass)("buttonProps",e.uploadButtonProps),y(),b("ngIf",e.uploadIcon),y(),b("ngIf",!e.uploadIcon)}}function mS(t,i){if(t&1&&L(0,"span",21),t&2){let e=D(4);b("ngClass",e.cancelIcon)}}function gS(t,i){t&1&&L(0,"TimesIcon"),t&2&&M("aria-hidden",!0)}function vS(t,i){}function bS(t,i){t&1&&k(0,vS,0,0,"ng-template")}function yS(t,i){if(t&1&&(x(0,"span"),k(1,bS,1,0,null,11),T()),t&2){let e=D(5);M("aria-hidden",!0),y(),b("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function _S(t,i){if(t&1&&(et(0),k(1,gS,1,1,"TimesIcon",9)(2,yS,2,2,"span",9),tt()),t&2){let e=D(4);y(),b("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),y(),b("ngIf",e.cancelIconTemplate||e._cancelIconTemplate)}}function CS(t,i){if(t&1){let e=Ae();x(0,"p-button",19),J("onClick",function(){K(e);let r=D(3);return Y(r.clear())}),k(1,mS,1,1,"span",20)(2,_S,3,2,"ng-container",9),T()}if(t&2){let e=D(3);b("label",e.cancelButtonLabel)("disabled",!e.hasFiles()||e.uploading)("styleClass","p-fileupload-cancel-button "+e.cancelStyleClass)("buttonProps",e.cancelButtonProps),y(),b("ngIf",e.cancelIcon),y(),b("ngIf",!e.cancelIcon)}}function wS(t,i){if(t&1){let e=Ae();et(0),x(1,"p-button",16),J("focus",function(){K(e);let r=D(2);return Y(r.onFocus())})("blur",function(){K(e);let r=D(2);return Y(r.onBlur())})("onClick",function(){K(e);let r=D(2);return Y(r.choose())})("keydown.enter",function(){K(e);let r=D(2);return Y(r.choose())}),x(2,"input",7,0),J("change",function(r){K(e);let s=D(2);return Y(s.onFileSelect(r))}),T(),k(4,nS,1,4,"span",17)(5,sS,3,2,"ng-container",9),T(),k(6,fS,3,6,"p-button",18)(7,CS,3,6,"p-button",18),tt()}if(t&2){let e=D(2);y(),b("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled||e.isChooseDisabled())("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),M("data-pc-section","choosebutton"),y(),b("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),M("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),y(2),b("ngIf",e.chooseIcon),y(),b("ngIf",!e.chooseIcon),y(),b("ngIf",!e.auto&&e.showUploadButton),y(),b("ngIf",!e.auto&&e.showCancelButton)}}function SS(t,i){t&1&&He(0)}function DS(t,i){t&1&&He(0)}function xS(t,i){if(t&1&&L(0,"p-progressbar",22),t&2){let e=D(2);b("value",e.progress)("showValue",!1)}}function ES(t,i){if(t&1&&L(0,"p-message",14),t&2){let e=i.$implicit;b("severity",e.severity)("text",e.text)}}function TS(t,i){if(t&1){let e=Ae();x(0,"img",33),J("error",function(r){K(e);let s=D(5);return Y(s.imageError(r))}),T()}if(t&2){let e=D().$implicit,n=D(4);b("src",e.objectURL,hp)("width",n.previewWidth)}}function AS(t,i){t&1&&L(0,"TimesIcon")}function IS(t,i){}function kS(t,i){t&1&&k(0,IS,0,0,"ng-template")}function FS(t,i){if(t&1&&k(0,AS,1,0,"TimesIcon",9)(1,kS,1,0,null,11),t&2){let e=D(5);b("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),y(),b("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function RS(t,i){if(t&1){let e=Ae();x(0,"div",24),k(1,TS,1,2,"img",27),x(2,"div",28)(3,"div",29),De(4),T(),x(5,"span",30),De(6),T()(),x(7,"div",31)(8,"p-button",32),J("onClick",function(r){let s=K(e).index,l=D(4);return Y(l.remove(r,s))}),k(9,FS,2,2,"ng-template",null,2,mn),T()()()}if(t&2){let e=i.$implicit,n=D(4);y(),b("ngIf",n.isImage(e)),y(3),$e(e.name),y(2),$e(n.formatSize(e.size)),y(2),b("disabled",n.uploading)("styleClass","p-fileupload-file-remove-button "+n.removeStyleClass)}}function MS(t,i){if(t&1&&k(0,RS,11,5,"div",26),t&2){let e=D(3);b("ngForOf",e.files)}}function LS(t,i){}function OS(t,i){if(t&1&&k(0,LS,0,0,"ng-template",25),t&2){let e=D(3);b("ngForOf",e.files)("ngForTemplate",e.fileTemplate||e._fileTemplate)}}function PS(t,i){if(t&1&&(x(0,"div",23),k(1,MS,1,1,"div",24)(2,OS,1,2,null,25),T()),t&2){let e=D(2);y(),lt(!e.fileTemplate&&!e._fileTemplate?1:-1),y(),lt(e.fileTemplate||e._fileTemplate?2:-1)}}function NS(t,i){t&1&&He(0)}function BS(t,i){t&1&&He(0)}function $S(t,i){if(t&1&&k(0,BS,1,0,"ng-container",11),t&2){let e=D(2);b("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function US(t,i){if(t&1){let e=Ae();x(0,"div",6)(1,"input",7,0),J("change",function(r){K(e);let s=D();return Y(s.onFileSelect(r))}),T(),x(3,"div",8),k(4,wS,8,15,"ng-container",9)(5,SS,1,0,"ng-container",10)(6,DS,1,0,"ng-container",11),T(),x(7,"div",12,1),J("dragenter",function(r){K(e);let s=D();return Y(s.onDragEnter(r))})("dragleave",function(r){K(e);let s=D();return Y(s.onDragLeave(r))})("drop",function(r){K(e);let s=D();return Y(s.onDrop(r))}),k(9,xS,1,2,"p-progressbar",13),Wl(10,ES,1,2,"p-message",14,ql),k(12,PS,3,2,"div",15)(13,NS,1,0,"ng-container",10)(14,$S,1,1,"ng-container"),T()()}if(t&2){let e=D();Q(e.styleClass),b("ngClass","p-fileupload p-fileupload-advanced p-component")("ngStyle",e.style),M("data-pc-name","fileupload")("data-pc-section","root"),y(),Wn("display","none"),b("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),M("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),y(3),b("ngIf",!e.headerTemplate&&!e._headerTemplate),y(),b("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",Ra(24,Jw,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.upload.bind(e))),y(),b("ngTemplateOutlet",e.toolbarTemplate||e._toolbarTemplate),y(),M("data-pc-section","content"),y(2),b("ngIf",e.hasFiles()),y(),Gl(e.msgs),y(2),b("ngIf",e.hasFiles()),y(),b("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",wp(30,eS,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.removeUploadedFile.bind(e),e.remove.bind(e),e.progress,e.msgs)),y(),lt((e.emptyTemplate||e._emptyTemplate)&&!e.hasFiles()&&!e.hasUploadedFiles()?14:-1)}}function VS(t,i){if(t&1&&L(0,"p-message",14),t&2){let e=i.$implicit;b("severity",e.severity)("text",e.text)}}function jS(t,i){if(t&1&&L(0,"span",37),t&2){let e=D(4);b("ngClass",e.uploadIcon)}}function HS(t,i){t&1&&L(0,"UploadIcon",40),t&2&&b("styleClass","p-button-icon p-button-icon-left")}function zS(t,i){}function qS(t,i){t&1&&k(0,zS,0,0,"ng-template")}function WS(t,i){if(t&1&&(x(0,"span",41),k(1,qS,1,0,null,11),T()),t&2){let e=D(5);y(),b("ngTemplateOutlet",e._uploadIconTemplate||e.uploadIconTemplate)}}function GS(t,i){if(t&1&&(et(0),k(1,HS,1,1,"UploadIcon",38)(2,WS,2,1,"span",39),tt()),t&2){let e=D(4);y(),b("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),y(),b("ngIf",e._uploadIconTemplate||e.uploadIconTemplate)}}function KS(t,i){if(t&1&&k(0,jS,1,1,"span",36)(1,GS,3,2,"ng-container",9),t&2){let e=D(3);b("ngIf",e.uploadIcon),y(),b("ngIf",!e.uploadIcon)}}function YS(t,i){if(t&1&&L(0,"span",43),t&2){let e=D(4);b("ngClass",e.chooseIcon)}}function ZS(t,i){t&1&&L(0,"PlusIcon"),t&2&&M("data-pc-section","uploadicon")}function QS(t,i){}function XS(t,i){t&1&&k(0,QS,0,0,"ng-template")}function JS(t,i){if(t&1&&(et(0),k(1,ZS,1,1,"PlusIcon",9)(2,XS,1,0,null,11),tt()),t&2){let e=D(4);y(),b("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),y(),b("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function eD(t,i){if(t&1&&k(0,YS,1,1,"span",42)(1,JS,3,2,"ng-container",9),t&2){let e=D(3);b("ngIf",e.chooseIcon),y(),b("ngIf",!e.chooseIcon)}}function tD(t,i){if(t&1&&k(0,KS,2,2)(1,eD,2,2),t&2){let e=D(2);lt(e.hasFiles()&&!e.auto?0:1)}}function nD(t,i){if(t&1&&(x(0,"span"),De(1),T()),t&2){let e=D(3);Q(e.cx("filelabel")),y(),vt(" ",e.basicFileChosenLabel()," ")}}function iD(t,i){t&1&&He(0)}function rD(t,i){if(t&1&&k(0,iD,1,0,"ng-container",10),t&2){let e=D(3);b("ngTemplateOutlet",e.fileLabelTemplate||e._fileLabelTemplate)("ngTemplateOutletContext",Vt(2,tS,e.files))}}function oD(t,i){if(t&1&&k(0,nD,2,3,"span",44)(1,rD,1,4,"ng-container"),t&2){let e=D(2);lt(!e.fileLabelTemplate&&!e._fileLabelTemplate?0:1)}}function aD(t,i){if(t&1){let e=Ae();x(0,"div",21),Wl(1,VS,1,2,"p-message",14,ql),x(3,"p-button",34),J("onClick",function(){K(e);let r=D();return Y(r.onBasicUploaderClick())})("keydown",function(r){K(e);let s=D();return Y(s.onBasicKeydown(r))}),k(4,tD,2,1,"ng-template",null,2,mn),x(6,"input",35,3),J("change",function(r){K(e);let s=D();return Y(s.onFileSelect(r))})("focus",function(){K(e);let r=D();return Y(r.onFocus())})("blur",function(){K(e);let r=D();return Y(r.onBlur())}),T()(),k(8,oD,2,1),T()}if(t&2){let e=D();Q(e.styleClass),b("ngClass","p-fileupload p-fileupload-basic p-component"),M("data-pc-name","fileupload"),y(),Gl(e.msgs),y(2),Xt(e.style),b("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled)("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),y(3),b("accept",e.accept)("multiple",e.multiple)("disabled",e.disabled),M("aria-label",e.browseFilesLabel)("data-pc-section","input"),y(2),lt(e.auto?-1:8)}}var sD=({dt:t})=>`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${t("fileupload.border.color")};
    border-radius: ${t("fileupload.border.radius")};
    background: ${t("fileupload.background")};
    color: ${t("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${t("fileupload.header.padding")};
    background: ${t("fileupload.header.background")};
    color: ${t("fileupload.header.color")};
    border-style: solid;
    border-width: ${t("fileupload.header.border.width")};
    border-color: ${t("fileupload.header.border.color")};
    border-radius: ${t("fileupload.header.border.radius")};
    gap: ${t("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.content.gap")};
    transition: border-color ${t("fileupload.transition.duration")};
    padding: ${t("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${t("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${t("fileupload.file.padding")};
    border-bottom: 1px solid ${t("fileupload.file.border.color")};
    gap: ${t("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${t("fileupload.content.highlight.border.color")};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${t("fileupload.basic.gap")};
}
`,lD={root:({instance:t})=>`p-fileupload p-fileupload-${t.mode} p-component`,header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},Gm=(()=>{class t extends ye{name="fileupload";theme=sD;classes=lD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Eu=(()=>{class t extends Se{name;url;method="post";multiple;accept;disabled;auto;withCredentials;maxFileSize;invalidFileSizeMessageSummary="{0}: Invalid file size, ";invalidFileSizeMessageDetail="maximum upload size is {0}.";invalidFileTypeMessageSummary="{0}: Invalid file type, ";invalidFileTypeMessageDetail="allowed file types: {0}.";invalidFileLimitMessageDetail="limit is {0} at most.";invalidFileLimitMessageSummary="Maximum number of files exceeded, ";style;styleClass;previewWidth=50;chooseLabel;uploadLabel;cancelLabel;chooseIcon;uploadIcon;cancelIcon;showUploadButton=!0;showCancelButton=!0;mode="advanced";headers;customUpload;fileLimit;uploadStyleClass;cancelStyleClass;removeStyleClass;chooseStyleClass;chooseButtonProps;uploadButtonProps={severity:"secondary"};cancelButtonProps={severity:"secondary"};onBeforeUpload=new G;onSend=new G;onUpload=new G;onError=new G;onClear=new G;onRemove=new G;onSelect=new G;onProgress=new G;uploadHandler=new G;onImageError=new G;onRemoveUploadedFile=new G;fileTemplate;headerTemplate;contentTemplate;toolbarTemplate;chooseIconTemplate;fileLabelTemplate;uploadIconTemplate;cancelIconTemplate;emptyTemplate;advancedFileInput;basicFileInput;content;set files(e){this._files=[];for(let n=0;n<e.length;n++){let r=e[n];this.validate(r)&&(this.isImage(r)&&(r.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[n]))),this._files.push(e[n]))}}get files(){return this._files}get basicButtonLabel(){return this.auto||!this.hasFiles()?this.chooseLabel:this.uploadLabel??this.files[0].name}_files=[];progress=0;dragHighlight;msgs;uploadedFileCount=0;focus;uploading;duplicateIEEvent;translationSubscription;dragOverListener;uploadedFiles=[];sanitizer=S(pc);zone=S(gt);http=S(Ya);_componentStyle=S(Gm);ngOnInit(){super.ngOnInit(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()})}ngAfterViewInit(){super.ngAfterViewInit(),Zn(this.platformId)&&this.mode==="advanced"&&this.zone.runOutsideAngular(()=>{this.content&&(this.dragOverListener=this.renderer.listen(this.content.nativeElement,"dragover",this.onDragOver.bind(this)))})}_headerTemplate;_contentTemplate;_toolbarTemplate;_chooseIconTemplate;_uploadIconTemplate;_cancelIconTemplate;_emptyTemplate;_fileTemplate;_fileLabelTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"file":this._fileTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"toolbar":this._toolbarTemplate=e.template;break;case"chooseicon":this._chooseIconTemplate=e.template;break;case"uploadicon":this._uploadIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"filelabel":this._fileLabelTemplate=e.template;break;default:this._fileTemplate=e.template;break}})}basicFileChosenLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles()?this.files&&this.files.length===1?this.files[0].name:this.config.getTranslation("fileChosenMessage")?.replace("{0}",this.files.length):this.config.getTranslation("noFileChosenMessage")||""}getTranslation(e){return this.config.getTranslation(e)}choose(){this.advancedFileInput?.nativeElement.click()}onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.msgs=[],this.multiple||(this.files=[]);let n=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let r=0;r<n.length;r++){let s=n[r];this.isFileSelected(s)||this.validate(s)&&(this.isImage(s)&&(s.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(n[r]))),this.files.push(n[r]))}this.onSelect.emit({originalEvent:e,files:n,currentFiles:this.files}),this.checkFileLimit(n),this.hasFiles()&&this.auto&&(this.mode!=="advanced"||!this.isFileLimitExceeded())&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()}isFileSelected(e){for(let n of this.files)if(n.name+n.type+n.size===e.name+e.type+e.size)return!0;return!1}isIE11(){if(Zn(this.platformId))return!!this.document.defaultView.MSInputMethodContext&&!!this.document.documentMode}validate(e){if(this.msgs=this.msgs||[],this.accept&&!this.isFileTypeValid(e)){let n=`${this.invalidFileTypeMessageSummary.replace("{0}",e.name)} ${this.invalidFileTypeMessageDetail.replace("{0}",this.accept)}`;return this.msgs.push({severity:"error",text:n}),!1}if(this.maxFileSize&&e.size>this.maxFileSize){let n=`${this.invalidFileSizeMessageSummary.replace("{0}",e.name)} ${this.invalidFileSizeMessageDetail.replace("{0}",this.formatSize(this.maxFileSize))}`;return this.msgs.push({severity:"error",text:n}),!1}return!0}isFileTypeValid(e){let n=this.accept?.split(",").map(r=>r.trim());for(let r of n)if(this.isWildcard(r)?this.getTypeClass(e.type)===this.getTypeClass(r):e.type==r||this.getFileExtension(e).toLowerCase()===r.toLowerCase())return!0;return!1}getTypeClass(e){return e.substring(0,e.indexOf("/"))}isWildcard(e){return e.indexOf("*")!==-1}getFileExtension(e){return"."+e.name.split(".").pop()}isImage(e){return/^image\//.test(e.type)}onImageLoad(e){window.URL.revokeObjectURL(e.src)}uploader(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.uploadHandler.emit({files:this.files}),this.cd.markForCheck();else{this.uploading=!0,this.msgs=[];let e=new FormData;this.onBeforeUpload.emit({formData:e});for(let n=0;n<this.files.length;n++)e.append(this.name,this.files[n],this.files[n].name);this.http.request(this.method,this.url,{body:e,headers:this.headers,reportProgress:!0,observe:"events",withCredentials:this.withCredentials}).subscribe(n=>{switch(n.type){case nn.Sent:this.onSend.emit({originalEvent:n,formData:e});break;case nn.Response:this.uploading=!1,this.progress=0,n.status>=200&&n.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.onUpload.emit({originalEvent:n,files:this.files})):this.onError.emit({files:this.files}),this.uploadedFiles.push(...this.files),this.clear();break;case nn.UploadProgress:{n.loaded&&(this.progress=Math.round(n.loaded*100/n.total)),this.onProgress.emit({originalEvent:n,progress:this.progress});break}}this.cd.markForCheck()},n=>{this.uploading=!1,this.onError.emit({files:this.files,error:n})})}}clear(){this.files=[],this.uploadedFileCount=0,this.onClear.emit(),this.clearInputElement(),this.msgs=[],this.cd.markForCheck()}remove(e,n){this.clearInputElement(),this.onRemove.emit({originalEvent:e,file:this.files[n]}),this.files.splice(n,1),this.checkFileLimit(this.files)}removeUploadedFile(e){let n=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.onRemoveUploadedFile.emit({file:n,files:this.uploadedFiles})}isFileLimitExceeded(){let n=this.auto?this.files.length:this.files.length+this.uploadedFileCount;return this.fileLimit&&this.fileLimit<=n&&this.focus&&(this.focus=!1),this.fileLimit&&this.fileLimit<n}isChooseDisabled(){return this.auto?this.fileLimit&&this.fileLimit<=this.files.length:this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount}checkFileLimit(e){this.msgs??=[];let n=this.msgs.length>0&&this.fileLimit&&this.fileLimit<e.length;if(this.isFileLimitExceeded()||n){let r=`${this.invalidFileLimitMessageSummary.replace("{0}",this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}",this.fileLimit.toString())}`;this.msgs.push({severity:"error",text:r})}else this.msgs=this.msgs.filter(r=>!r.text.includes(this.invalidFileLimitMessageSummary))}clearInputElement(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.advancedFileInput.nativeElement.value=""),this.basicFileInput&&this.basicFileInput.nativeElement&&(this.basicFileInput.nativeElement.value="")}clearIEInput(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.duplicateIEEvent=!0,this.advancedFileInput.nativeElement.value="")}hasFiles(){return this.files&&this.files.length>0}hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0}onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())}onDragOver(e){this.disabled||(Cn(this.content?.nativeElement,"p-fileupload-highlight"),this.dragHighlight=!0,e.stopPropagation(),e.preventDefault())}onDragLeave(e){this.disabled||wn(this.content?.nativeElement,"p-fileupload-highlight")}onDrop(e){if(!this.disabled){wn(this.content?.nativeElement,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();let n=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||n&&n.length===1)&&this.onFileSelect(e)}}onFocus(){this.focus=!0}onBlur(){this.focus=!1}formatSize(e){let s=this.getTranslation(ci.FILE_SIZE_TYPES);if(e===0)return`0 ${s[0]}`;let l=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,l)).toFixed(3)} ${s[l]}`}upload(){this.hasFiles()&&this.uploader()}onBasicUploaderClick(){this.basicFileInput?.nativeElement.click()}onBasicKeydown(e){switch(e.code){case"Space":case"Enter":this.onBasicUploaderClick(),e.preventDefault();break}}imageError(e){this.onImageError.emit(e)}getBlockableElement(){return this.el.nativeElement.children[0]}get chooseButtonLabel(){return this.chooseLabel||this.config.getTranslation(ci.CHOOSE)}get uploadButtonLabel(){return this.uploadLabel||this.config.getTranslation(ci.UPLOAD)}get cancelButtonLabel(){return this.cancelLabel||this.config.getTranslation(ci.CANCEL)}get browseFilesLabel(){return this.config.getTranslation(ci.ARIA)[ci.BROWSE_FILES]}get pendingLabel(){return this.config.getTranslation(ci.PENDING)}ngOnDestroy(){this.content&&this.content.nativeElement&&this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-fileupload"],["p-fileUpload"]],contentQueries:function(n,r,s){if(n&1&&(pe(s,Hw,4),pe(s,zw,4),pe(s,Wm,4),pe(s,qw,4),pe(s,Ww,4),pe(s,Gw,4),pe(s,Kw,4),pe(s,Yw,4),pe(s,Zw,4),pe(s,qt,4)),n&2){let l;ee(l=te())&&(r.fileTemplate=l.first),ee(l=te())&&(r.headerTemplate=l.first),ee(l=te())&&(r.contentTemplate=l.first),ee(l=te())&&(r.toolbarTemplate=l.first),ee(l=te())&&(r.chooseIconTemplate=l.first),ee(l=te())&&(r.fileLabelTemplate=l.first),ee(l=te())&&(r.uploadIconTemplate=l.first),ee(l=te())&&(r.cancelIconTemplate=l.first),ee(l=te())&&(r.emptyTemplate=l.first),ee(l=te())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&(Gn(Qw,5),Gn(Xw,5),Gn(Wm,5)),n&2){let s;ee(s=te())&&(r.advancedFileInput=s.first),ee(s=te())&&(r.basicFileInput=s.first),ee(s=te())&&(r.content=s.first)}},inputs:{name:"name",url:"url",method:"method",multiple:[2,"multiple","multiple",j],accept:"accept",disabled:[2,"disabled","disabled",j],auto:[2,"auto","auto",j],withCredentials:[2,"withCredentials","withCredentials",j],maxFileSize:[2,"maxFileSize","maxFileSize",wt],invalidFileSizeMessageSummary:"invalidFileSizeMessageSummary",invalidFileSizeMessageDetail:"invalidFileSizeMessageDetail",invalidFileTypeMessageSummary:"invalidFileTypeMessageSummary",invalidFileTypeMessageDetail:"invalidFileTypeMessageDetail",invalidFileLimitMessageDetail:"invalidFileLimitMessageDetail",invalidFileLimitMessageSummary:"invalidFileLimitMessageSummary",style:"style",styleClass:"styleClass",previewWidth:[2,"previewWidth","previewWidth",wt],chooseLabel:"chooseLabel",uploadLabel:"uploadLabel",cancelLabel:"cancelLabel",chooseIcon:"chooseIcon",uploadIcon:"uploadIcon",cancelIcon:"cancelIcon",showUploadButton:[2,"showUploadButton","showUploadButton",j],showCancelButton:[2,"showCancelButton","showCancelButton",j],mode:"mode",headers:"headers",customUpload:[2,"customUpload","customUpload",j],fileLimit:[2,"fileLimit","fileLimit",e=>wt(e,null)],uploadStyleClass:"uploadStyleClass",cancelStyleClass:"cancelStyleClass",removeStyleClass:"removeStyleClass",chooseStyleClass:"chooseStyleClass",chooseButtonProps:"chooseButtonProps",uploadButtonProps:"uploadButtonProps",cancelButtonProps:"cancelButtonProps",files:"files"},outputs:{onBeforeUpload:"onBeforeUpload",onSend:"onSend",onUpload:"onUpload",onError:"onError",onClear:"onClear",onRemove:"onRemove",onSelect:"onSelect",onProgress:"onProgress",uploadHandler:"uploadHandler",onImageError:"onImageError",onRemoveUploadedFile:"onRemoveUploadedFile"},features:[ue([Gm]),U],decls:2,vars:2,consts:[["advancedfileinput",""],["content",""],["icon",""],["basicfileinput",""],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","file",3,"change","multiple","accept","disabled"],[1,"p-fileupload-header"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"p-fileupload-content",3,"dragenter","dragleave","drop"],[3,"value","showValue",4,"ngIf"],[3,"severity","text"],["class","p-fileupload-file-list",4,"ngIf"],[3,"focus","blur","onClick","keydown.enter","styleClass","disabled","label","buttonProps"],[3,"class",4,"ngIf"],[3,"label","disabled","styleClass","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","disabled","styleClass","buttonProps"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"value","showValue"],[1,"p-fileupload-file-list"],[1,"p-fileupload-file"],["ngFor","",3,"ngForOf","ngForTemplate"],["class","p-fileupload-file",4,"ngFor","ngForOf"],["class","p-fileupload-file-thumbnail",3,"src","width","error",4,"ngIf"],[1,"p-fileupload-file-info"],[1,"p-fileupload-file-name"],[1,"p-fileupload-file-size"],[1,"p-fileupload-file-actions"],["text","","rounded","","severity","danger",3,"onClick","disabled","styleClass"],[1,"p-fileupload-file-thumbnail",3,"error","src","width"],[3,"onClick","keydown","styleClass","disabled","label","buttonProps"],["type","file",3,"change","focus","blur","accept","multiple","disabled"],["class","p-button-icon p-button-icon-left",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-button-icon p-button-icon-left",4,"ngIf"],[3,"styleClass"],[1,"p-button-icon","p-button-icon-left"],["class","p-button-icon p-button-icon-left pi",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left","pi",3,"ngClass"],[3,"class"]],template:function(n,r){n&1&&k(0,US,15,39,"div",4)(1,aD,9,16,"div",5),n&2&&(b("ngIf",r.mode==="advanced"),y(),b("ngIf",r.mode==="basic"))},dependencies:[we,ht,sr,Ke,xt,tn,Mn,xu,Ln,um,pm,Ks,de],encapsulation:2,changeDetection:0})}return t})(),Km=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Eu,de,de]})}return t})();function uD(t,i){}function dD(t,i){}function pD(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=D(2);b("text",e.error)}}function hD(t,i){if(t&1){let e=Ae();x(0,"div",8)(1,"p",9),L(2,"i",10),De(3),L(4,"br"),De(5),T()(),k(6,pD,1,1,"p-message",11),x(7,"div",12)(8,"p-button",13),Me(9,"translate"),J("onClick",function(){K(e);let r=D();return Y(r.emitData())}),T(),x(10,"p-button",14),Me(11,"translate"),J("onClick",function(){K(e);let r=D();return Y(r.loadSampleData())}),T()()}if(t&2){let e=i.$implicit,n=D();y(3),$e(e.name),y(2),vt("",n.formatSize(e.size)," "),y(),b("ngIf",n.error),y(2),b("label",Le(9,7,"page.upload.continue"))("loading",n.loading)("disabled",!n.uploadedFileName),y(2),b("label",Le(11,9,"page.upload.sample"))}}function fD(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=D(2);b("text",e.error)}}function mD(t,i){if(t&1){let e=Ae();x(0,"p-button",14),Me(1,"translate"),J("onClick",function(){K(e);let r=D(2);return Y(r.loadSampleData())}),T()}t&2&&b("label",Le(1,1,"page.upload.sample"))}function gD(t,i){if(t&1){let e=Ae();x(0,"div",16),J("click",function(){K(e),D();let r=Ut(5);return Y(r.choose())}),L(1,"i",17),x(2,"p",18),De(3),Me(4,"translate"),T()(),k(5,fD,1,1,"p-message",11),x(6,"div",12)(7,"p-button",13),Me(8,"translate"),J("onClick",function(){K(e);let r=D();return Y(r.emitData())}),T(),k(9,mD,2,3,"p-button",19),T()}if(t&2){let e=D();y(3),$e(Le(4,6,"page.upload.word.instruction")),y(2),b("ngIf",e.error),y(2),b("label",Le(8,8,"page.upload.continue"))("loading",e.loading)("disabled",!e.uploadedFileName),y(2),b("ngIf",e.showSampleDataButton)}}var Ym=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;uploadComplete=new G;error="";loading=!1;extractedHtml="";uploadedFileName="";formatSize(i){let r=this.translate.instant("fileSizeTypes"),s=this.translate.instant("fileSizeTypes.warning");if(!r||!Array.isArray(r))return console.warn(s),`${i} B`;if(i===0)return`0 ${r[0]}`;let l=Math.floor(Math.log(i)/Math.log(1024)),d=parseFloat((i/Math.pow(1024,l)).toFixed(1)),h=Math.min(l,r.length-1);return`${d} ${r[h]}`}getWordContent(i){this.loading=!0;let e=this.translate.instant("page.upload.word.error.upload"),n=this.translate.instant("page.upload.word.error.doc"),r=this.translate.instant("page.upload.error.unknown"),s=this.translate.instant("page.upload.word.error.try"),l=i.files?.[0];if(!l){this.error=e,this.loading=!1;return}this.uploadedFileName=l.name;let d=new FileReader;d.onload=()=>Ce(this,null,function*(){let h=d.result;try{var m=(yield(yield import("./chunk-LDKNIF4L.js")).convertToHtml({arrayBuffer:h})).value.trim();if(!m){this.error=n;return}m=yield this.urlDataService.formatHtml(m,"word"),this.extractedHtml=m}catch(v){this.error=`${s} ${v.message||v||r}`}finally{this.loading=!1}}),d.readAsArrayBuffer(l)}emitData(){this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.uploadedFileName,originalHtml:this.extractedHtml,modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.uploadComplete.emit()}loadSampleData(){return Ce(this,null,function*(){yield this.urlDataService.loadSampleDataset("word"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)(B(pi),B(Sn),B(kn))};static \u0275cmp=W({type:t,selectors:[["ca-upload-word"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:14,vars:4,consts:[["fileUploadRef",""],["header",""],["content",""],["file",""],["empty",""],[1,"border-none","p-0","m-0"],[1,"font-bold","mb-3","p-0"],["name","word[]","accept",".docx","auto","true","maxFileSize","1000000","mode","advanced","styleClass","border-none",3,"uploadHandler","customUpload"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-solid","border-round","border-200","surface-100"],[1,"text-xl"],[1,"pi","pi-file-word","text-blue-500","text-2xl","mr-1"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"onClick","label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"onClick","label"],["severity","error",3,"text"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-dashed","border-round","border-200","surface-100","hover:surface-200","hover:border-primary-400","transition-colors","transition-duration-500","cursor-pointer",3,"click"],[1,"pi","pi-upload","border-2","border-circle","border-300","p-4","text-5xl","text-color-secondary"],[1,"m-0","mt-3"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"]],template:function(e,n){if(e&1){let r=Ae();x(0,"fieldset",5)(1,"legend",6),De(2),Me(3,"translate"),T(),x(4,"p-fileupload",7,0),J("uploadHandler",function(l){return K(r),Y(n.getWordContent(l))}),k(6,uD,0,0,"ng-template",null,1,mn)(8,dD,0,0,"ng-template",null,2,mn)(10,hD,12,11,"ng-template",null,3,mn)(12,gD,10,10,"ng-template",null,4,mn),T()()}e&2&&(y(2),vt(" ",Le(3,2,"page.upload.word.legend")," "),y(2),b("customUpload",!0))},dependencies:[we,Ke,ei,Jn,si,Km,Eu,Br,Mn,Ln],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .p-fileupload-header{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload-content{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload .p-progressbar{margin:0!important;padding:0!important;height:0!important;display:none!important;border:none!important}  .p-fileupload{--p-fileupload-content-gap: 0rem}"]})};var vD=["checkboxicon"],bD=["input"],yD=()=>({"p-checkbox-input":!0}),_D=t=>({checked:t,class:"p-checkbox-icon"});function CD(t,i){if(t&1&&L(0,"span",8),t&2){let e=D(3);b("ngClass",e.checkboxIcon),M("data-pc-section","icon")}}function wD(t,i){t&1&&L(0,"CheckIcon",9),t&2&&(b("styleClass","p-checkbox-icon"),M("data-pc-section","icon"))}function SD(t,i){if(t&1&&(et(0),k(1,CD,1,2,"span",7)(2,wD,1,2,"CheckIcon",6),tt()),t&2){let e=D(2);y(),b("ngIf",e.checkboxIcon),y(),b("ngIf",!e.checkboxIcon)}}function DD(t,i){t&1&&L(0,"MinusIcon",9),t&2&&(b("styleClass","p-checkbox-icon"),M("data-pc-section","icon"))}function xD(t,i){if(t&1&&(et(0),k(1,SD,3,2,"ng-container",4)(2,DD,1,2,"MinusIcon",6),tt()),t&2){let e=D();y(),b("ngIf",e.checked),y(),b("ngIf",e._indeterminate())}}function ED(t,i){}function TD(t,i){t&1&&k(0,ED,0,0,"ng-template")}var AD=({dt:t})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${t("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${t("checkbox.border.radius")};
    border: 1px solid ${t("checkbox.border.color")};
    background: ${t("checkbox.background")};
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
    transition: background ${t("checkbox.transition.duration")}, color ${t("checkbox.transition.duration")}, border-color ${t("checkbox.transition.duration")}, box-shadow ${t("checkbox.transition.duration")}, outline-color ${t("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${t("checkbox.transition.duration")};
    color: ${t("checkbox.icon.color")};
    font-size: ${t("checkbox.icon.size")};
    width: ${t("checkbox.icon.size")};
    height: ${t("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${t("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${t("checkbox.checked.border.color")};
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
    border-color: ${t("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.focus.border.color")};
    box-shadow: ${t("checkbox.focus.ring.shadow")};
    outline: ${t("checkbox.focus.ring.width")} ${t("checkbox.focus.ring.style")} ${t("checkbox.focus.ring.color")};
    outline-offset: ${t("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${t("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${t("checkbox.disabled.background")};
    border-color: ${t("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${t("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${t("checkbox.sm.width")};
    height: ${t("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${t("checkbox.icon.sm.size")};
    width: ${t("checkbox.icon.sm.size")};
    height: ${t("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${t("checkbox.lg.width")};
    height: ${t("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${t("checkbox.icon.lg.size")};
    width: ${t("checkbox.icon.lg.size")};
    height: ${t("checkbox.icon.lg.size")};
}
`,ID={root:({instance:t,props:i})=>["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Zm=(()=>{class t extends ye{name="checkbox";theme=AD;classes=ID;static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var kD={provide:Ir,useExisting:hn(()=>Qm),multi:!0},Qm=(()=>{class t extends Se{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new G;onFocus=new G;onBlur=new G;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:qf(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=Be(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=S(Zm);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,r=this.injector.get(an,null,{optional:!0,self:!0}),s=r&&!this.formControl?r.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=s.filter(l=>!Ni(l,this.value)):n=s?[...s,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=R(t)))(r||t)}})();static \u0275cmp=W({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,r,s){if(n&1&&(pe(s,vD,4),pe(s,qt,4)),n&2){let l;ee(l=te())&&(r.checkboxIconTemplate=l.first),ee(l=te())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&Gn(bD,5),n&2){let s;ee(s=te())&&(r.inputViewChild=s.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",j],binary:[2,"binary","binary",j],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",wt],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",j],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",j],required:[2,"required","required",j],autofocus:[2,"autofocus","autofocus",j],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[ue([kD,Zm]),U,Qe],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,r){if(n&1){let s=Ae();x(0,"div",1)(1,"input",2,0),J("focus",function(d){return K(s),Y(r.onInputFocus(d))})("blur",function(d){return K(s),Y(r.onInputBlur(d))})("change",function(d){return K(s),Y(r.handleChange(d))}),T(),x(3,"div",3),k(4,xD,3,2,"ng-container",4)(5,TD,1,0,null,5),T()()}n&2&&(Xt(r.style),Q(r.styleClass),b("ngClass",r.containerClass),M("data-p-highlight",r.checked)("data-p-checked",r.checked)("data-p-disabled",r.disabled),y(),Xt(r.inputStyle),Q(r.inputClass),b("value",r.value)("checked",r.checked)("disabled",r.disabled)("readonly",r.readonly)("ngClass",Cp(26,yD)),M("id",r.inputId)("name",r.name)("tabindex",r.tabindex)("required",r.required?!0:null)("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel),y(3),b("ngIf",!r.checkboxIconTemplate&&!r._checkboxIconTemplate),y(),b("ngTemplateOutlet",r.checkboxIconTemplate||r._checkboxIconTemplate)("ngTemplateOutletContext",Vt(27,_D,r.checked)))},dependencies:[we,ht,Ke,xt,lm,cm,de],encapsulation:2,changeDetection:0})}return t})(),lO=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Qm,de,de]})}return t})();var Xm=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),s,l,d;if(n&&r){if(l=i.length,l!=e.length)return!1;for(s=l;s--!==0;)if(!this.equalsByValue(i[s],e[s]))return!1;return!0}if(n!=r)return!1;var h=this.isDate(i),m=this.isDate(e);if(h!=m)return!1;if(h&&m)return i.getTime()==e.getTime();var v=i instanceof RegExp,C=e instanceof RegExp;if(v!=C)return!1;if(v&&C)return i.toString()==e.toString();var w=Object.keys(i);if(l=w.length,l!==Object.keys(e).length)return!1;for(s=l;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,w[s]))return!1;for(s=l;s--!==0;)if(d=w[s],!this.equalsByValue(i[d],e[d]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),r=i;for(let s=0,l=n.length;s<l;++s){if(r==null)return null;r=r[n[s]]}return r}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let r;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,r){if(n.length>0){let s=!1;for(let l=0;l<n.length;l++)if(this.findIndexInList(n[l],r)>e){n.splice(l,0,i),s=!0;break}s||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let r=0;r<e.length;r++)if(e[r]==i){n=r;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,r=1){let s=-1,l=this.isEmpty(i),d=this.isEmpty(e);return l&&d?s=0:l?s=r:d?s=-r:typeof i=="string"&&typeof e=="string"?s=i.localeCompare(e,n,{numeric:!0}):s=i<e?-1:i>e?1:0,s}static sort(i,e,n=1,r,s=1){let l=t.compare(i,e,r,n),d=n;return(t.isEmpty(i)||t.isEmpty(e))&&(d=s===1?n:s),d*l}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return E(E({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),s,l,d;if(n&&r){if(l=i.length,l!=e.length)return!1;for(s=l;s--!==0;)if(!this.deepEquals(i[s],e[s]))return!1;return!0}if(n!=r)return!1;var h=i instanceof Date,m=e instanceof Date;if(h!=m)return!1;if(h&&m)return i.getTime()==e.getTime();var v=i instanceof RegExp,C=e instanceof RegExp;if(v!=C)return!1;if(v&&C)return i.toString()==e.toString();var w=Object.keys(i);if(l=w.length,l!==Object.keys(e).length)return!1;for(s=l;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,w[s]))return!1;for(s=l;s--!==0;)if(d=w[s],!this.deepEquals(i[d],e[d]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},Jm=0;function uO(t="pn_id_"){return Jm++,`${t}${Jm}`}function FD(){let t=[],i=(s,l)=>{let d=t.length>0?t[t.length-1]:{key:s,value:l},h=d.value+(d.key===s?0:l)+2;return t.push({key:s,value:h}),h},e=s=>{t=t.filter(l=>l.value!==s)},n=()=>t.length>0?t[t.length-1].value:0,r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,l,d)=>{l&&(l.style.zIndex=String(i(s,d)))},clear:s=>{s&&(e(r(s)),s.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var dO=FD(),pO=t=>!!t;export{Te as a,ht as b,sr as c,Ke as d,Op as e,Zb as f,tn as g,xt as h,ey as i,we as j,Zn as k,cc as l,gy as m,Qn as n,Ya as o,Hy as p,ah as q,pc as r,pr as s,kn as t,Jn as u,ei as v,_n as w,Uc as x,zc as y,on as z,As as A,w2 as B,x2 as C,E2 as D,Rf as E,Cn as F,pI as G,wn as H,hI as I,Lf as J,p_ as K,h_ as L,fI as M,mI as N,Of as O,gI as P,vI as Q,bI as R,f_ as S,Lr as T,yI as U,_I as V,Pf as W,CI as X,su as Y,wI as Z,SI as _,Bf as $,lu as aa,DI as ba,xI as ca,cu as da,EI as ea,TI as fa,AI as ga,II as ha,kI as ia,FI as ja,it as ka,__ as la,Ie as ma,Us as na,Ni as oa,OI as pa,PI as qa,NI as ra,Fn as sa,rt as ta,JI as ua,ek as va,tk as wa,Kf as xa,Yf as ya,qt as za,de as Aa,ci as Ba,rk as Ca,ye as Da,fu as Ea,Lk as Fa,Ir as Ga,kr as Ha,an as Ia,Fr as Ja,sn as Ka,Ko as La,si as Ma,Se as Na,mu as Oa,rm as Pa,Ws as Qa,nF as Ra,Gs as Sa,bF as Ta,ze as Ua,lm as Va,WF as Wa,YF as Xa,XF as Ya,t3 as Za,cm as _a,um as $a,dm as ab,Ks as bb,Ys as cb,D3 as db,W3 as eb,Mn as fb,Br as gb,Rm as hb,Mm as ib,Su as jb,Om as kb,Ln as lb,$m as mb,Sn as nb,pi as ob,Um as pb,jm as qb,zm as rb,xu as sb,s4 as tb,Km as ub,Ym as vb,Xm as wb,uO as xb,dO as yb,pO as zb,NC as Ab,qR as Bb,Qm as Cb,lO as Db,km as Eb};

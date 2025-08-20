import{$ as X,$a as O,A as ln,Aa as Lp,Ab as ee,B as pr,Ba as Rp,Bb as _,Bc as hc,C as ti,Ca as Op,Cb as Qe,D as Ql,Da as Pp,Db as Be,Dc as fc,E as Sp,Ea as Np,Fa as $p,Fb as Y,G as Dp,Ga as Bp,Gb as un,H as Yl,Ha as $i,Hb as j,I as xp,Ia as Ba,Ib as H,J as Ct,Ja as Vp,Jb as pc,K as Ep,Ka as Up,Kb as Gp,L as wt,La as b,Lb as Xt,M as fe,Ma as Bi,Mb as me,N as ut,Na as ri,Nb as qe,O as F,Oa as jp,Ob as gt,P as ie,Pa as Zt,Pb as Kp,Q as Tp,Qa as $,Qb as gr,R as se,Ra as Hp,Rb as mr,S as Zl,Sa as jn,Sb as br,T as Q,Ta as rc,Tb as oe,U as D,Ua as oc,Ub as Qp,V as ni,Va as zp,Vb as ke,Wa as Va,Wb as oi,X as Ap,Xa as P,Y as ii,Ya as re,Yb as Yp,Z as Qt,Za as ce,Zb as Ha,_ as ot,_a as Ua,a as yp,aa as J,ab as ja,ac as Zp,b as _p,ba as Me,bb as A,c as Cp,ca as M,cb as ac,cc as Ve,d as Wl,da as Xl,db as fr,dc as Ue,e as Gl,ea as cn,eb as qp,f as nt,fa as Jl,fb as go,fc as Tn,g as Kt,gb as sc,gc as Xp,h as Un,ha as $a,hb as lc,i as ct,ia as W,ib as E,ic as Pt,j as Z,ja as ft,jb as g,jc as Jp,k as uo,ka as ec,kb as En,kc as eh,l as ei,la as Rt,lb as Ze,lc as th,m as wp,ma as It,mb as St,mc as N,na as Ke,nb as B,nc as Le,o as Ce,oa as Ip,ob as Te,oc as Nt,p as Pa,pa as tc,pb as cc,pc as Xe,q as Lt,qa as kp,qb as uc,qc as mo,r as po,ra as Yt,rb as dc,rc as nh,s as ho,sb as S,t as dr,ta as nc,tb as x,u as Na,ua as Fp,ub as L,uc as dn,va as ic,vb as He,vc as kt,w as xn,wa as Mp,wb as ze,x as Pi,xa as fo,xb as xe,xc as bt,y as sn,ya as Ni,yb as Ae,yc as pn,z as Kl,za as hr,zb as Wp,zc as Dt}from"./chunk-3ZBEMRCY.js";import{a as k,b as _e,e as Fy,f as My,h as De}from"./chunk-C3GRVDOV.js";var sm=Fy((am,Wu)=>{"use strict";(function(t){function i(){var n=t();return n.default||n}if(typeof am=="object"&&typeof Wu=="object")Wu.exports=i();else if(typeof define=="function"&&define.amd)define(i);else{var e=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:this||{};e.prettierPlugins=e.prettierPlugins||{},e.prettierPlugins.html=i()}})(function(){"use strict";var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,r=o=>{throw TypeError(o)},a=(o,s,c)=>s in o?t(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c,l=(o,s)=>{for(var c in s)t(o,c,{get:s[c],enumerable:!0})},d=(o,s,c,u)=>{if(s&&typeof s=="object"||typeof s=="function")for(let p of e(s))!n.call(o,p)&&p!==c&&t(o,p,{get:()=>s[p],enumerable:!(u=i(s,p))||u.enumerable});return o},h=o=>d(t({},"__esModule",{value:!0}),o),m=(o,s,c)=>a(o,typeof s!="symbol"?s+"":s,c),y=(o,s,c)=>s.has(o)||r("Cannot "+c),w=(o,s,c)=>(y(o,s,"read from private field"),c?c.call(o):s.get(o)),T=(o,s,c)=>s.has(o)?r("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(o):s.set(o,c),I=(o,s,c,u)=>(y(o,s,"write to private field"),u?u.call(o,c):s.set(o,c),c),z={};l(z,{languages:()=>vv,options:()=>_v,parsers:()=>jd,printers:()=>Iy});var V=(o,s,c,u)=>{if(!(o&&s==null))return s.replaceAll?s.replaceAll(c,u):c.global?s.replace(c,u):s.split(c).join(u)},U=V,ye="string",Ee="array",we="cursor",Ge="indent",Et="align",nn="trim",zt="group",Nn="fill",Kn="if-break",Qn="indent-if-break",Ti="line-suffix",Ai="line-suffix-boundary",qt="line",Yn="label",Zn="break-parent",Ii=new Set([we,Ge,Et,nn,zt,Nn,Kn,Qn,Ti,Ai,qt,Yn,Zn]),Zi=(o,s,c)=>{if(!(o&&s==null))return Array.isArray(s)||typeof s=="string"?s[c<0?s.length+c:c]:s.at(c)},Dn=Zi;function Xi(o){if(typeof o=="string")return ye;if(Array.isArray(o))return Ee;if(!o)return;let{type:s}=o;if(Ii.has(s))return s}var ki=Xi,Ji=o=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(o);function er(o){let s=o===null?"null":typeof o;if(s!=="string"&&s!=="object")return`Unexpected doc '${s}', 
Expected it to be 'string' or 'object'.`;if(ki(o))throw new Error("doc is valid.");let c=Object.prototype.toString.call(o);if(c!=="[object Object]")return`Unexpected doc '${c}'.`;let u=Ji([...Ii].map(p=>`'${p}'`));return`Unexpected doc.type '${o.type}'.
Expected it to be ${u}.`}var ca=class extends Error{name="InvalidDocError";constructor(o){super(er(o)),this.doc=o}},ua=ca;function Kr(o,s){if(typeof o=="string")return s(o);let c=new Map;return u(o);function u(f){if(c.has(f))return c.get(f);let v=p(f);return c.set(f,v),v}function p(f){switch(ki(f)){case Ee:return s(f.map(u));case Nn:return s(_e(k({},f),{parts:f.parts.map(u)}));case Kn:return s(_e(k({},f),{breakContents:u(f.breakContents),flatContents:u(f.flatContents)}));case zt:{let{expandedStates:v,contents:C}=f;return v?(v=v.map(u),C=v[0]):C=u(C),s(_e(k({},f),{contents:C,expandedStates:v}))}case Et:case Ge:case Qn:case Yn:case Ti:return s(_e(k({},f),{contents:u(f.contents)}));case ye:case we:case nn:case Ai:case qt:case Zn:return s(f);default:throw new ua(f)}}}function Mt(o,s=Vm){return Kr(o,c=>typeof c=="string"?nr(s,c.split(`
`)):c)}var Qr=()=>{},$n=Qr,da=Qr,fl=Qr;function Wt(o){return $n(o),{type:Ge,contents:o}}function pa(o,s){return $n(s),{type:Et,contents:s,n:o}}function tt(o,s={}){return $n(o),da(s.expandedStates,!0),{type:zt,id:s.id,contents:o,break:!!s.shouldBreak,expandedStates:s.expandedStates}}function gl(o){return pa(Number.NEGATIVE_INFINITY,o)}function ml(o){return pa({type:"root"},o)}function ha(o){return fl(o),{type:Nn,parts:o}}function tr(o,s="",c={}){return $n(o),s!==""&&$n(s),{type:Kn,breakContents:o,flatContents:s,groupId:c.groupId}}function bl(o,s){return $n(o),{type:Qn,contents:o,groupId:s.groupId,negate:s.negate}}var Fi={type:Zn},vl={type:qt,hard:!0},yl={type:qt,hard:!0,literal:!0},Ye={type:qt},ht={type:qt,soft:!0},Ne=[vl,Fi],Vm=[yl,Fi];function nr(o,s){$n(o),da(s);let c=[];for(let u=0;u<s.length;u++)u!==0&&c.push(o),c.push(s[u]);return c}var fa="'",ed='"';function Um(o,s){let c=s===!0||s===fa?fa:ed,u=c===fa?ed:fa,p=0,f=0;for(let v of o)v===c?p++:v===u&&f++;return p>f?u:c}var jm=Um;function Hm(o){if(typeof o!="string")throw new TypeError("Expected a string");return o.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var rn,zm=class{constructor(o){T(this,rn),I(this,rn,new Set(o))}getLeadingWhitespaceCount(o){let s=w(this,rn),c=0;for(let u=0;u<o.length&&s.has(o.charAt(u));u++)c++;return c}getTrailingWhitespaceCount(o){let s=w(this,rn),c=0;for(let u=o.length-1;u>=0&&s.has(o.charAt(u));u--)c++;return c}getLeadingWhitespace(o){let s=this.getLeadingWhitespaceCount(o);return o.slice(0,s)}getTrailingWhitespace(o){let s=this.getTrailingWhitespaceCount(o);return o.slice(o.length-s)}hasLeadingWhitespace(o){return w(this,rn).has(o.charAt(0))}hasTrailingWhitespace(o){return w(this,rn).has(Dn(!1,o,-1))}trimStart(o){let s=this.getLeadingWhitespaceCount(o);return o.slice(s)}trimEnd(o){let s=this.getTrailingWhitespaceCount(o);return o.slice(0,o.length-s)}trim(o){return this.trimEnd(this.trimStart(o))}split(o,s=!1){let c=`[${Hm([...w(this,rn)].join(""))}]+`,u=new RegExp(s?`(${c})`:c,"u");return o.split(u)}hasWhitespaceCharacter(o){let s=w(this,rn);return Array.prototype.some.call(o,c=>s.has(c))}hasNonWhitespaceCharacter(o){let s=w(this,rn);return Array.prototype.some.call(o,c=>!s.has(c))}isWhitespaceOnly(o){let s=w(this,rn);return Array.prototype.every.call(o,c=>s.has(c))}};rn=new WeakMap;var qm=zm,Wm=["	",`
`,"\f","\r"," "],Gm=new qm(Wm),Bn=Gm,Km=class extends Error{name="UnexpectedNodeError";constructor(o,s,c="type"){super(`Unexpected ${s} node ${c}: ${JSON.stringify(o[c])}.`),this.node=o}},Qm=Km;function Ym(o){return o?.type==="front-matter"}var ga=Ym,Zm=new Set(["sourceSpan","startSourceSpan","endSourceSpan","nameSpan","valueSpan","keySpan","tagDefinition","tokens","valueTokens","switchValueSourceSpan","expSourceSpan","valueSourceSpan"]),Xm=new Set(["if","else if","for","switch","case"]);function td(o,s){var c;if(o.type==="text"||o.type==="comment"||ga(o)||o.type==="yaml"||o.type==="toml")return null;if(o.type==="attribute"&&delete s.value,o.type==="docType"&&delete s.value,o.type==="angularControlFlowBlock"&&(c=o.parameters)!=null&&c.children)for(let u of s.parameters.children)Xm.has(o.name)?delete u.expression:u.expression=u.expression.trim();o.type==="angularIcuExpression"&&(s.switchValue=o.switchValue.trim()),o.type==="angularLetDeclarationInitializer"&&delete s.value}td.ignoredProperties=Zm;var Jm=td;function e0(o,s){return De(this,null,function*(){if(o.language==="yaml"){let c=o.value.trim(),u=c?yield s(c,{parser:"yaml"}):"";return ml([o.startDelimiter,o.explicitLanguage,Ne,u,u?Ne:"",o.endDelimiter])}})}var t0=e0;function ma(o,s=!0){return[Wt([ht,o]),s?ht:""]}function ir(o,s){let c=o.type==="NGRoot"?o.node.type==="NGMicrosyntax"&&o.node.body.length===1&&o.node.body[0].type==="NGMicrosyntaxExpression"?o.node.body[0].expression:o.node:o.type==="JsExpressionRoot"?o.node:o;return c&&(c.type==="ObjectExpression"||c.type==="ArrayExpression"||(s.parser==="__vue_expression"||s.parser==="__vue_ts_expression")&&(c.type==="TemplateLiteral"||c.type==="StringLiteral"))}function on(o,s,c,u){return De(this,null,function*(){c=k({__isInHtmlAttribute:!0,__embeddedInHtml:!0},c);let p=!0;u&&(c.__onHtmlBindingRoot=(v,C)=>{p=u(v,C)});let f=yield s(o,c,s);return p?tt(f):ma(f)})}function n0(o,s,c,u){let{node:p}=c,f=u.originalText.slice(p.sourceSpan.start.offset,p.sourceSpan.end.offset);return/^\s*$/u.test(f)?"":on(f,o,{parser:"__ng_directive",__isInHtmlAttribute:!1},ir)}var i0=n0,r0=(o,s)=>{if(!(o&&s==null))return s.toReversed||!Array.isArray(s)?s.toReversed():[...s].reverse()},o0=r0;function a0(o){return Array.isArray(o)&&o.length>0}var _l=a0,nd,id,rd,od,ad,s0=((nd=globalThis.Deno)==null?void 0:nd.build.os)==="windows"||((rd=(id=globalThis.navigator)==null?void 0:id.platform)==null?void 0:rd.startsWith("Win"))||((ad=(od=globalThis.process)==null?void 0:od.platform)==null?void 0:ad.startsWith("win"))||!1;function sd(o){if(o=o instanceof URL?o:new URL(o),o.protocol!=="file:")throw new TypeError(`URL must be a file URL: received "${o.protocol}"`);return o}function l0(o){return o=sd(o),decodeURIComponent(o.pathname.replace(/%(?![0-9A-Fa-f]{2})/g,"%25"))}function c0(o){o=sd(o);let s=decodeURIComponent(o.pathname.replace(/\//g,"\\").replace(/%(?![0-9A-Fa-f]{2})/g,"%25")).replace(/^\\*([A-Za-z]:)(\\|$)/,"$1\\");return o.hostname!==""&&(s=`\\\\${o.hostname}${s}`),s}function u0(o){return s0?c0(o):l0(o)}var d0=u0,p0=o=>String(o).split(/[/\\]/u).pop();function ld(o,s){if(!s)return;let c=p0(s).toLowerCase();return o.find(({filenames:u})=>u?.some(p=>p.toLowerCase()===c))??o.find(({extensions:u})=>u?.some(p=>c.endsWith(p)))}function h0(o,s){if(s)return o.find(({name:c})=>c.toLowerCase()===s)??o.find(({aliases:c})=>c?.includes(s))??o.find(({extensions:c})=>c?.includes(`.${s}`))}function cd(o,s){if(s){if(String(s).startsWith("file:"))try{s=d0(s)}catch{return}if(typeof s=="string")return o.find(({isSupported:c})=>c?.({filepath:s}))}}function f0(o,s){let c=o0(!1,o.plugins).flatMap(p=>p.languages??[]),u=h0(c,s.language)??ld(c,s.physicalFile)??ld(c,s.file)??cd(c,s.physicalFile)??cd(c,s.file)??(s.physicalFile,void 0);return u?.parsers[0]}var ba=f0,g0="inline",ud={area:"none",base:"none",basefont:"none",datalist:"none",head:"none",link:"none",meta:"none",noembed:"none",noframes:"none",param:"block",rp:"none",script:"block",style:"none",template:"inline",title:"none",html:"block",body:"block",address:"block",blockquote:"block",center:"block",dialog:"block",div:"block",figure:"block",figcaption:"block",footer:"block",form:"block",header:"block",hr:"block",legend:"block",listing:"block",main:"block",p:"block",plaintext:"block",pre:"block",search:"block",xmp:"block",slot:"contents",ruby:"ruby",rt:"ruby-text",article:"block",aside:"block",h1:"block",h2:"block",h3:"block",h4:"block",h5:"block",h6:"block",hgroup:"block",nav:"block",section:"block",dir:"block",dd:"block",dl:"block",dt:"block",menu:"block",ol:"block",ul:"block",li:"list-item",table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell",input:"inline-block",button:"inline-block",fieldset:"block",details:"block",summary:"block",marquee:"inline-block",source:"block",track:"block",meter:"inline-block",progress:"inline-block",object:"inline-block",video:"inline-block",audio:"inline-block",select:"inline-block",option:"block",optgroup:"block"},m0="normal",dd={listing:"pre",plaintext:"pre",pre:"pre",xmp:"pre",nobr:"nowrap",table:"initial",textarea:"pre-wrap"};function b0(o){return o.type==="element"&&!o.hasExplicitNamespace&&!["html","svg"].includes(o.namespace)}var Yr=b0,v0=o=>U(!1,o,/^[\t\f\r ]*\n/gu,""),pd=o=>v0(Bn.trimEnd(o)),y0=o=>{let s=o,c=Bn.getLeadingWhitespace(s);c&&(s=s.slice(c.length));let u=Bn.getTrailingWhitespace(s);return u&&(s=s.slice(0,-u.length)),{leadingWhitespace:c,trailingWhitespace:u,text:s}};function hd(o,s){return!!(o.type==="ieConditionalComment"&&o.lastChild&&!o.lastChild.isSelfClosing&&!o.lastChild.endSourceSpan||o.type==="ieConditionalComment"&&!o.complete||rr(o)&&o.children.some(c=>c.type!=="text"&&c.type!=="interpolation")||Sl(o,s)&&!Vn(o,s)&&o.type!=="interpolation")}function va(o){return o.type==="attribute"||!o.parent||!o.prev?!1:_0(o.prev)}function _0(o){return o.type==="comment"&&o.value.trim()==="prettier-ignore"}function Gt(o){return o.type==="text"||o.type==="comment"}function Vn(o,s){return o.type==="element"&&(o.fullName==="script"||o.fullName==="style"||o.fullName==="svg:style"||o.fullName==="svg:script"||o.fullName==="mj-style"&&s.parser==="mjml"||Yr(o)&&(o.name==="script"||o.name==="style"))}function C0(o,s){return o.children&&!Vn(o,s)}function w0(o,s){return Vn(o,s)||o.type==="interpolation"||fd(o)}function fd(o){return wd(o).startsWith("pre")}function S0(o,s){var c,u;let p=f();if(p&&!o.prev&&(u=(c=o.parent)==null?void 0:c.tagDefinition)!=null&&u.ignoreFirstLf)return o.type==="interpolation";return p;function f(){return ga(o)||o.type==="angularControlFlowBlock"?!1:(o.type==="text"||o.type==="interpolation")&&o.prev&&(o.prev.type==="text"||o.prev.type==="interpolation")?!0:!o.parent||o.parent.cssDisplay==="none"?!1:rr(o.parent)?!0:!(!o.prev&&(o.parent.type==="root"||rr(o)&&o.parent||Vn(o.parent,s)||_a(o.parent,s)||!M0(o.parent.cssDisplay))||o.prev&&!O0(o.prev.cssDisplay))}}function D0(o,s){return ga(o)||o.type==="angularControlFlowBlock"?!1:(o.type==="text"||o.type==="interpolation")&&o.next&&(o.next.type==="text"||o.next.type==="interpolation")?!0:!o.parent||o.parent.cssDisplay==="none"?!1:rr(o.parent)?!0:!(!o.next&&(o.parent.type==="root"||rr(o)&&o.parent||Vn(o.parent,s)||_a(o.parent,s)||!L0(o.parent.cssDisplay))||o.next&&!R0(o.next.cssDisplay))}function x0(o,s){return P0(o.cssDisplay)&&!Vn(o,s)}function ya(o){return ga(o)||o.next&&o.sourceSpan.end&&o.sourceSpan.end.line+1<o.next.sourceSpan.start.line}function E0(o){return gd(o)||o.type==="element"&&o.children.length>0&&(["body","script","style"].includes(o.name)||o.children.some(s=>A0(s)))||o.firstChild&&o.firstChild===o.lastChild&&o.firstChild.type!=="text"&&bd(o.firstChild)&&(!o.lastChild.isTrailingSpaceSensitive||vd(o.lastChild))}function gd(o){return o.type==="element"&&o.children.length>0&&(["html","head","ul","ol","select"].includes(o.name)||o.cssDisplay.startsWith("table")&&o.cssDisplay!=="table-cell")}function Cl(o){return yd(o)||o.prev&&T0(o.prev)||md(o)}function T0(o){return yd(o)||o.type==="element"&&o.fullName==="br"||md(o)}function md(o){return bd(o)&&vd(o)}function bd(o){return o.hasLeadingSpaces&&(o.prev?o.prev.sourceSpan.end.line<o.sourceSpan.start.line:o.parent.type==="root"||o.parent.startSourceSpan.end.line<o.sourceSpan.start.line)}function vd(o){return o.hasTrailingSpaces&&(o.next?o.next.sourceSpan.start.line>o.sourceSpan.end.line:o.parent.type==="root"||o.parent.endSourceSpan&&o.parent.endSourceSpan.start.line>o.sourceSpan.end.line)}function yd(o){switch(o.type){case"ieConditionalComment":case"comment":case"directive":return!0;case"element":return["script","select"].includes(o.name)}return!1}function wl(o){return o.lastChild?wl(o.lastChild):o}function A0(o){var s;return(s=o.children)==null?void 0:s.some(c=>c.type!=="text")}function _d(o){if(o)switch(o){case"module":case"text/javascript":case"text/babel":case"text/jsx":case"application/javascript":return"babel";case"application/x-typescript":return"typescript";case"text/markdown":return"markdown";case"text/html":return"html";case"text/x-handlebars-template":return"glimmer";default:if(o.endsWith("json")||o.endsWith("importmap")||o==="speculationrules")return"json"}}function I0(o,s){let{name:c,attrMap:u}=o;if(c!=="script"||Object.prototype.hasOwnProperty.call(u,"src"))return;let{type:p,lang:f}=o.attrMap;return!f&&!p?"babel":ba(s,{language:f})??_d(p)}function k0(o,s){if(!Sl(o,s))return;let{attrMap:c}=o;if(Object.prototype.hasOwnProperty.call(c,"src"))return;let{type:u,lang:p}=c;return ba(s,{language:p})??_d(u)}function F0(o,s){if(o.name==="style"){let{lang:c}=o.attrMap;return c?ba(s,{language:c}):"css"}if(o.name==="mj-style"&&s.parser==="mjml")return"css"}function Cd(o,s){return I0(o,s)??F0(o,s)??k0(o,s)}function Zr(o){return o==="block"||o==="list-item"||o.startsWith("table")}function M0(o){return!Zr(o)&&o!=="inline-block"}function L0(o){return!Zr(o)&&o!=="inline-block"}function R0(o){return!Zr(o)}function O0(o){return!Zr(o)}function P0(o){return!Zr(o)&&o!=="inline-block"}function rr(o){return wd(o).startsWith("pre")}function N0(o,s){let c=o;for(;c;){if(s(c))return!0;c=c.parent}return!1}function $0(o,s){var c;if(or(o,s))return"block";if(((c=o.prev)==null?void 0:c.type)==="comment"){let p=o.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);if(p)return p[1]}let u=!1;if(o.type==="element"&&o.namespace==="svg")if(N0(o,p=>p.fullName==="svg:foreignObject"))u=!0;else return o.name==="svg"?"inline-block":"block";switch(s.htmlWhitespaceSensitivity){case"strict":return"inline";case"ignore":return"block";default:if(o.type==="element"&&(!o.namespace||u||Yr(o))&&Object.prototype.hasOwnProperty.call(ud,o.name))return ud[o.name]}return g0}function wd(o){return o.type==="element"&&(!o.namespace||Yr(o))&&Object.prototype.hasOwnProperty.call(dd,o.name)?dd[o.name]:m0}function B0(o){let s=Number.POSITIVE_INFINITY;for(let c of o.split(`
`)){if(c.length===0)continue;let u=Bn.getLeadingWhitespaceCount(c);if(u===0)return 0;c.length!==u&&u<s&&(s=u)}return s===Number.POSITIVE_INFINITY?0:s}function Sd(o,s=B0(o)){return s===0?o:o.split(`
`).map(c=>c.slice(s)).join(`
`)}function Dd(o){return U(!1,U(!1,o,"&apos;","'"),"&quot;",'"')}function Xn(o){return Dd(o.value)}var V0=new Set(["template","style","script"]);function _a(o,s){return or(o,s)&&!V0.has(o.fullName)}function or(o,s){return s.parser==="vue"&&o.type==="element"&&o.parent.type==="root"&&o.fullName.toLowerCase()!=="html"}function Sl(o,s){return or(o,s)&&(_a(o,s)||o.attrMap.lang&&o.attrMap.lang!=="html")}function U0(o){let s=o.fullName;return s.charAt(0)==="#"||s==="slot-scope"||s==="v-slot"||s.startsWith("v-slot:")}function j0(o,s){let c=o.parent;if(!or(c,s))return!1;let u=c.fullName,p=o.fullName;return u==="script"&&p==="setup"||u==="style"&&p==="vars"}function xd(o,s=o.value){return o.parent.isWhitespaceSensitive?o.parent.isIndentationSensitive?Mt(s):Mt(Sd(pd(s)),Ne):nr(Ye,Bn.split(s))}function Ed(o,s){return or(o,s)&&o.name==="script"}var Td=/\{\{(.+?)\}\}/su;function H0(o,s){return De(this,null,function*(){let c=[];for(let[u,p]of o.split(Td).entries())if(u%2===0)c.push(Mt(p));else try{c.push(tt(["{{",Wt([Ye,yield on(p,s,{parser:"__ng_interpolation",__isInHtmlInterpolation:!0})]),Ye,"}}"]))}catch{c.push("{{",Mt(p),"}}")}return c})}function Dl({parser:o}){return(s,c,u)=>on(Xn(u.node),s,{parser:o},ir)}var z0=Dl({parser:"__ng_action"}),q0=Dl({parser:"__ng_binding"}),W0=Dl({parser:"__ng_directive"});function G0(o,s){if(s.parser!=="angular")return;let{node:c}=o,u=c.fullName;if(u.startsWith("(")&&u.endsWith(")")||u.startsWith("on-"))return z0;if(u.startsWith("[")&&u.endsWith("]")||/^bind(?:on)?-/u.test(u)||/^ng-(?:if|show|hide|class|style)$/u.test(u))return q0;if(u.startsWith("*"))return W0;let p=Xn(c);if(/^i18n(?:-.+)?$/u.test(u))return()=>ma(ha(xd(c,p.trim())),!p.includes("@@"));if(Td.test(p))return f=>H0(p,f)}var K0=G0;function Q0(o,s){let{node:c}=o,u=Xn(c);if(c.fullName==="class"&&!s.parentParser&&!u.includes("{{"))return()=>u.trim().split(/\s+/u).join(" ")}var Y0=Q0;function Ad(o){return o==="	"||o===`
`||o==="\f"||o==="\r"||o===" "}var Z0=/^[ \t\n\r\u000c]+/,X0=/^[, \t\n\r\u000c]+/,J0=/^[^ \t\n\r\u000c]+/,eb=/[,]+$/,Id=/^\d+$/,tb=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function nb(o){let s=o.length,c,u,p,f,v,C=0,R;function K(be){let $e,st=be.exec(o.substring(C));if(st)return[$e]=st,C+=$e.length,$e}let q=[];for(;;){if(K(X0),C>=s){if(q.length===0)throw new Error("Must contain one or more image candidate strings.");return q}R=C,c=K(J0),u=[],c.slice(-1)===","?(c=c.replace(eb,""),he()):Se()}function Se(){for(K(Z0),p="",f="in descriptor";;){if(v=o.charAt(C),f==="in descriptor")if(Ad(v))p&&(u.push(p),p="",f="after descriptor");else if(v===","){C+=1,p&&u.push(p),he();return}else if(v==="(")p+=v,f="in parens";else if(v===""){p&&u.push(p),he();return}else p+=v;else if(f==="in parens")if(v===")")p+=v,f="in descriptor";else if(v===""){u.push(p),he();return}else p+=v;else if(f==="after descriptor"&&!Ad(v))if(v===""){he();return}else f="in descriptor",C-=1;C+=1}}function he(){let be=!1,$e,st,mt,_t,G={},ve,lt,rt,At,ur;for(_t=0;_t<u.length;_t++)ve=u[_t],lt=ve[ve.length-1],rt=ve.substring(0,ve.length-1),At=parseInt(rt,10),ur=parseFloat(rt),Id.test(rt)&&lt==="w"?(($e||st)&&(be=!0),At===0?be=!0:$e=At):tb.test(rt)&&lt==="x"?(($e||st||mt)&&(be=!0),ur<0?be=!0:st=ur):Id.test(rt)&&lt==="h"?((mt||st)&&(be=!0),At===0?be=!0:mt=At):be=!0;if(!be)G.source={value:c,startOffset:R},$e&&(G.width={value:$e}),st&&(G.density={value:st}),mt&&(G.height={value:mt}),q.push(G);else throw new Error(`Invalid srcset descriptor found in "${o}" at "${ve}".`)}}var ib=nb;function rb(o){if(o.node.fullName==="srcset"&&(o.parent.fullName==="img"||o.parent.fullName==="source"))return()=>ab(Xn(o.node))}var kd={width:"w",height:"h",density:"x"},ob=Object.keys(kd);function ab(o){let s=ib(o),c=ob.filter(q=>s.some(Se=>Object.prototype.hasOwnProperty.call(Se,q)));if(c.length>1)throw new Error("Mixed descriptor in srcset is not supported");let[u]=c,p=kd[u],f=s.map(q=>q.source.value),v=Math.max(...f.map(q=>q.length)),C=s.map(q=>q[u]?String(q[u].value):""),R=C.map(q=>{let Se=q.indexOf(".");return Se===-1?q.length:Se}),K=Math.max(...R);return ma(nr([",",Ye],f.map((q,Se)=>{let he=[q],be=C[Se];if(be){let $e=v-q.length+1,st=K-R[Se],mt=" ".repeat($e+st);he.push(tr(mt," "),be+p)}return he})))}var sb=rb;function lb(o,s){let{node:c}=o,u=Xn(o.node).trim();if(c.fullName==="style"&&!s.parentParser&&!u.includes("{{"))return p=>De(null,null,function*(){return ma(yield p(u,{parser:"css",__isHTMLStyleAttribute:!0}))})}var xl=new WeakMap;function cb(o,s){let{root:c}=o;return xl.has(c)||xl.set(c,c.children.some(u=>Ed(u,s)&&["ts","typescript"].includes(u.attrMap.lang))),xl.get(c)}var El=cb;function ub(o,s,c){let{node:u}=c,p=Xn(u);return on(`type T<${p}> = any`,o,{parser:"babel-ts",__isEmbeddedTypescriptGenericParameters:!0},ir)}function db(o,s,{parseWithTs:c}){return on(`function _(${o}) {}`,s,{parser:c?"babel-ts":"babel",__isVueBindings:!0})}function pb(o,s,c,u){return De(this,null,function*(){let p=Xn(c.node),{left:f,operator:v,right:C}=hb(p),R=El(c,u);return[tt(yield on(`function _(${f}) {}`,o,{parser:R?"babel-ts":"babel",__isVueForBindingLeft:!0}))," ",v," ",yield on(C,o,{parser:R?"__ts_expression":"__js_expression"})]})}function hb(o){let s=/(.*?)\s+(in|of)\s+(.*)/su,c=/,([^,\]}]*)(?:,([^,\]}]*))?$/u,u=/^\(|\)$/gu,p=o.match(s);if(!p)return;let f={};if(f.for=p[3].trim(),!f.for)return;let v=U(!1,p[1].trim(),u,""),C=v.match(c);C?(f.alias=v.replace(c,""),f.iterator1=C[1].trim(),C[2]&&(f.iterator2=C[2].trim())):f.alias=v;let R=[f.alias,f.iterator1,f.iterator2];if(!R.some((K,q)=>!K&&(q===0||R.slice(q+1).some(Boolean))))return{left:R.filter(Boolean).join(","),operator:p[2],right:f.for}}function fb(o,s){if(s.parser!=="vue")return;let{node:c}=o,u=c.fullName;if(u==="v-for")return pb;if(u==="generic"&&Ed(c.parent,s))return ub;let p=Xn(c),f=El(o,s);if(U0(c)||j0(c,s))return v=>db(p,v,{parseWithTs:f});if(u.startsWith("@")||u.startsWith("v-on:"))return v=>gb(p,v,{parseWithTs:f});if(u.startsWith(":")||u.startsWith(".")||u.startsWith("v-bind:"))return v=>mb(p,v,{parseWithTs:f});if(u.startsWith("v-"))return v=>Fd(p,v,{parseWithTs:f})}function gb(u,p,f){return De(this,arguments,function*(o,s,{parseWithTs:c}){var v;try{return yield Fd(o,s,{parseWithTs:c})}catch(C){if(((v=C.cause)==null?void 0:v.code)!=="BABEL_PARSER_SYNTAX_ERROR")throw C}return on(o,s,{parser:c?"__vue_ts_event_binding":"__vue_event_binding"},ir)})}function mb(o,s,{parseWithTs:c}){return on(o,s,{parser:c?"__vue_ts_expression":"__vue_expression"},ir)}function Fd(o,s,{parseWithTs:c}){return on(o,s,{parser:c?"__ts_expression":"__js_expression"},ir)}var bb=fb;function vb(o,s){let{node:c}=o;if(c.value){if(/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(s.originalText.slice(c.valueSpan.start.offset,c.valueSpan.end.offset))||s.parser==="lwc"&&c.value.startsWith("{")&&c.value.endsWith("}"))return[c.rawName,"=",c.value];for(let u of[sb,lb,Y0,bb,K0]){let p=u(o,s);if(p)return yb(p)}}}function yb(o){return(s,c,u,p)=>De(null,null,function*(){let f=yield o(s,c,u,p);if(f)return f=Kr(f,v=>typeof v=="string"?U(!1,v,'"',"&quot;"):v),[u.node.rawName,'="',tt(f),'"']})}var _b=vb,Cb=new Proxy(()=>{},{get:()=>Cb});function Xr(o){return o.sourceSpan.start.offset}function Ca(o){return o.sourceSpan.end.offset}function Tl(o,s){return[o.isSelfClosing?"":wb(o,s),Jr(o,s)]}function wb(o,s){return o.lastChild&&no(o.lastChild)?"":[Sb(o,s),Al(o,s)]}function Jr(o,s){return(o.next?Li(o.next):to(o.parent))?"":[eo(o,s),Mi(o,s)]}function Sb(o,s){return to(o)?eo(o.lastChild,s):""}function Mi(o,s){return no(o)?Al(o.parent,s):wa(o)?kl(o.next,s):""}function Al(o,s){if(Md(o,s))return"";switch(o.type){case"ieConditionalComment":return"<!";case"element":if(o.hasHtmComponentClosingTag)return"<//";default:return`</${o.rawName}`}}function eo(o,s){if(Md(o,s))return"";switch(o.type){case"ieConditionalComment":case"ieConditionalEndComment":return"[endif]-->";case"ieConditionalStartComment":return"]><!-->";case"interpolation":return"}}";case"angularIcuExpression":return"}";case"element":if(o.isSelfClosing)return"/>";default:return">"}}function Md(o,s){return!o.isSelfClosing&&!o.endSourceSpan&&(va(o)||hd(o.parent,s))}function Li(o){return o.prev&&o.prev.type!=="docType"&&o.type!=="angularControlFlowBlock"&&!Gt(o.prev)&&o.isLeadingSpaceSensitive&&!o.hasLeadingSpaces}function to(o){var s;return((s=o.lastChild)==null?void 0:s.isTrailingSpaceSensitive)&&!o.lastChild.hasTrailingSpaces&&!Gt(wl(o.lastChild))&&!rr(o)}function no(o){return!o.next&&!o.hasTrailingSpaces&&o.isTrailingSpaceSensitive&&Gt(wl(o))}function wa(o){return o.next&&!Gt(o.next)&&Gt(o)&&o.isTrailingSpaceSensitive&&!o.hasTrailingSpaces}function Db(o){let s=o.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);return s?s[1]?s[1].split(/\s+/u):!0:!1}function Sa(o){return!o.prev&&o.isLeadingSpaceSensitive&&!o.hasLeadingSpaces}function xb(o,s,c){var u;let{node:p}=o;if(!_l(p.attrs))return p.isSelfClosing?" ":"";let f=((u=p.prev)==null?void 0:u.type)==="comment"&&Db(p.prev.value),v=typeof f=="boolean"?()=>f:Array.isArray(f)?Se=>f.includes(Se.rawName):()=>!1,C=o.map(({node:Se})=>v(Se)?Mt(s.originalText.slice(Xr(Se),Ca(Se))):c(),"attrs"),R=p.type==="element"&&p.fullName==="script"&&p.attrs.length===1&&p.attrs[0].fullName==="src"&&p.children.length===0,K=s.singleAttributePerLine&&p.attrs.length>1&&!or(p,s)?Ne:Ye,q=[Wt([R?" ":Ye,nr(K,C)])];return p.firstChild&&Sa(p.firstChild)||p.isSelfClosing&&to(p.parent)||R?q.push(p.isSelfClosing?" ":""):q.push(s.bracketSameLine?p.isSelfClosing?" ":"":p.isSelfClosing?Ye:ht),q}function Eb(o){return o.firstChild&&Sa(o.firstChild)?"":Fl(o)}function Il(o,s,c){let{node:u}=o;return[io(u,s),xb(o,s,c),u.isSelfClosing?"":Eb(u)]}function io(o,s){return o.prev&&wa(o.prev)?"":[Ri(o,s),kl(o,s)]}function Ri(o,s){return Sa(o)?Fl(o.parent):Li(o)?eo(o.prev,s):""}var Ld="<!doctype";function kl(o,s){switch(o.type){case"ieConditionalComment":case"ieConditionalStartComment":return`<!--[if ${o.condition}`;case"ieConditionalEndComment":return"<!--<!";case"interpolation":return"{{";case"docType":{if(o.value==="html"){let{filepath:u}=s;if(u&&/\.html?$/u.test(u))return Ld}let c=Xr(o);return s.originalText.slice(c,c+Ld.length)}case"angularIcuExpression":return"{";case"element":if(o.condition)return`<!--[if ${o.condition}]><!--><${o.rawName}`;default:return`<${o.rawName}`}}function Fl(o){switch(o.type){case"ieConditionalComment":return"]>";case"element":if(o.condition)return"><!--<![endif]-->";default:return">"}}function Tb(o,s){if(!o.endSourceSpan)return"";let c=o.startSourceSpan.end.offset;o.firstChild&&Sa(o.firstChild)&&(c-=Fl(o).length);let u=o.endSourceSpan.start.offset;return o.lastChild&&no(o.lastChild)?u+=Al(o,s).length:to(o)&&(u-=eo(o.lastChild,s).length),s.originalText.slice(c,u)}var Rd=Tb,Ab=new Set(["if","else if","for","switch","case"]);function Ib(o,s){let{node:c}=o;switch(c.type){case"element":if(Vn(c,s)||c.type==="interpolation")return;if(!c.isSelfClosing&&Sl(c,s)){let u=Cd(c,s);return u?(p,f)=>De(null,null,function*(){let v=Rd(c,s),C=/^\s*$/u.test(v),R="";return C||(R=yield p(pd(v),{parser:u,__embeddedInHtml:!0}),C=R===""),[Ri(c,s),tt(Il(o,s,f)),C?"":Ne,R,C?"":Ne,Tl(c,s),Mi(c,s)]}):void 0}break;case"text":if(Vn(c.parent,s)){let u=Cd(c.parent,s);if(u)return p=>De(null,null,function*(){let f=u==="markdown"?Sd(c.value.replace(/^[^\S\n]*\n/u,"")):c.value,v={parser:u,__embeddedInHtml:!0};if(s.parser==="html"&&u==="babel"){let C="script",{attrMap:R}=c.parent;R&&(R.type==="module"||(R.type==="text/babel"||R.type==="text/jsx")&&R["data-type"]==="module")&&(C="module"),v.__babelSourceType=C}return[Fi,Ri(c,s),yield p(f,v),Mi(c,s)]})}else if(c.parent.type==="interpolation")return u=>De(null,null,function*(){let p={__isInHtmlInterpolation:!0,__embeddedInHtml:!0};return s.parser==="angular"?p.parser="__ng_interpolation":s.parser==="vue"?p.parser=El(o,s)?"__vue_ts_expression":"__vue_expression":p.parser="__js_expression",[Wt([Ye,yield u(c.value,p)]),c.parent.next&&Li(c.parent.next)?" ":Ye]});break;case"attribute":return _b(o,s);case"front-matter":return u=>t0(c,u);case"angularControlFlowBlockParameters":return Ab.has(o.parent.name)?i0:void 0;case"angularLetDeclarationInitializer":return u=>on(c.value,u,{parser:"__ng_binding",__isInHtmlAttribute:!1})}}var kb=Ib,ro=null;function oo(o){if(ro!==null&&typeof ro.property){let s=ro;return ro=oo.prototype=null,s}return ro=oo.prototype=o??Object.create(null),new oo}var Fb=10;for(let o=0;o<=Fb;o++)oo();function Mb(o){return oo(o)}function Lb(o,s="type"){Mb(o);function c(u){let p=u[s],f=o[p];if(!Array.isArray(f))throw Object.assign(new Error(`Missing visitor keys for '${p}'.`),{node:u});return f}return c}var Rb=Lb,Ob={"front-matter":[],root:["children"],element:["attrs","children"],ieConditionalComment:["children"],ieConditionalStartComment:[],ieConditionalEndComment:[],interpolation:["children"],text:["children"],docType:[],comment:[],attribute:[],cdata:[],angularControlFlowBlock:["children","parameters"],angularControlFlowBlockParameters:["children"],angularControlFlowBlockParameter:[],angularLetDeclaration:["init"],angularLetDeclarationInitializer:[],angularIcuExpression:["cases"],angularIcuCase:["expression"]},Pb=Ob,Nb=Rb(Pb),$b=Nb,Bb="format",Vb=/^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u,Ub=/^\s*<!--\s*@(?:format|prettier)\s*-->/u;function jb(o){return Ub.test(o)}function Hb(o){return Vb.test(o)}function zb(o){return`<!-- @${Bb} -->

${o}`}var qb=new Map([["if",new Set(["else if","else"])],["else if",new Set(["else if","else"])],["for",new Set(["empty"])],["defer",new Set(["placeholder","error","loading"])],["placeholder",new Set(["placeholder","error","loading"])],["error",new Set(["placeholder","error","loading"])],["loading",new Set(["placeholder","error","loading"])]]);function Od(o){let s=Ca(o);return o.type==="element"&&!o.endSourceSpan&&_l(o.children)?Math.max(s,Od(Dn(!1,o.children,-1))):s}function ao(o,s,c){let u=o.node;if(va(u)){let p=Od(u);return[Ri(u,s),Mt(Bn.trimEnd(s.originalText.slice(Xr(u)+(u.prev&&wa(u.prev)?kl(u).length:0),p-(u.next&&Li(u.next)?eo(u,s).length:0)))),Mi(u,s)]}return c()}function Da(o,s){return Gt(o)&&Gt(s)?o.isTrailingSpaceSensitive?o.hasTrailingSpaces?Cl(s)?Ne:Ye:"":Cl(s)?Ne:ht:wa(o)&&(va(s)||s.firstChild||s.isSelfClosing||s.type==="element"&&s.attrs.length>0)||o.type==="element"&&o.isSelfClosing&&Li(s)?"":!s.isLeadingSpaceSensitive||Cl(s)||Li(s)&&o.lastChild&&no(o.lastChild)&&o.lastChild.lastChild&&no(o.lastChild.lastChild)?Ne:s.hasLeadingSpaces?Ye:ht}function Ml(o,s,c){let{node:u}=o;if(gd(u))return[Fi,...o.map(f=>{let v=f.node,C=v.prev?Da(v.prev,v):"";return[C?[C,ya(v.prev)?Ne:""]:"",ao(f,s,c)]},"children")];let p=u.children.map(()=>Symbol(""));return o.map((f,v)=>{let C=f.node;if(Gt(C)){if(C.prev&&Gt(C.prev)){let $e=Da(C.prev,C);if($e)return ya(C.prev)?[Ne,Ne,ao(f,s,c)]:[$e,ao(f,s,c)]}return ao(f,s,c)}let R=[],K=[],q=[],Se=[],he=C.prev?Da(C.prev,C):"",be=C.next?Da(C,C.next):"";return he&&(ya(C.prev)?R.push(Ne,Ne):he===Ne?R.push(Ne):Gt(C.prev)?K.push(he):K.push(tr("",ht,{groupId:p[v-1]}))),be&&(ya(C)?Gt(C.next)&&Se.push(Ne,Ne):be===Ne?Gt(C.next)&&Se.push(Ne):q.push(be)),[...R,tt([...K,tt([ao(f,s,c),...q],{id:p[v]})]),...Se]},"children")}function Wb(o,s,c){let{node:u}=o,p=[];Gb(o)&&p.push("} "),p.push("@",u.name),u.parameters&&p.push(" (",tt(c("parameters")),")"),p.push(" {");let f=Pd(u);return u.children.length>0?(u.firstChild.hasLeadingSpaces=!0,u.lastChild.hasTrailingSpaces=!0,p.push(Wt([Ne,Ml(o,s,c)])),f&&p.push(Ne,"}")):f&&p.push("}"),tt(p,{shouldBreak:!0})}function Pd(o){var s,c;return!(((s=o.next)==null?void 0:s.type)==="angularControlFlowBlock"&&(c=qb.get(o.name))!=null&&c.has(o.next.name))}function Gb(o){let{previous:s}=o;return s?.type==="angularControlFlowBlock"&&!va(s)&&!Pd(s)}function Kb(o,s,c){return[Wt([ht,nr([";",Ye],o.map(c,"children"))]),ht]}function Qb(o,s,c){let{node:u}=o;return[io(u,s),tt([u.switchValue.trim(),", ",u.clause,u.cases.length>0?[",",Wt([Ye,nr(Ye,o.map(c,"cases"))])]:"",ht]),Jr(u,s)]}function Yb(o,s,c){let{node:u}=o;return[u.value," {",tt([Wt([ht,o.map(({node:p,isLast:f})=>{let v=[c()];return p.type==="text"&&(p.hasLeadingSpaces&&v.unshift(Ye),p.hasTrailingSpaces&&!f&&v.push(Ye)),v},"expression")]),ht]),"}"]}function Zb(o,s,c){let{node:u}=o;if(hd(u,s))return[Ri(u,s),tt(Il(o,s,c)),Mt(Rd(u,s)),...Tl(u,s),Mi(u,s)];let p=u.children.length===1&&(u.firstChild.type==="interpolation"||u.firstChild.type==="angularIcuExpression")&&u.firstChild.isLeadingSpaceSensitive&&!u.firstChild.hasLeadingSpaces&&u.lastChild.isTrailingSpaceSensitive&&!u.lastChild.hasTrailingSpaces,f=Symbol("element-attr-group-id"),v=q=>tt([tt(Il(o,s,c),{id:f}),q,Tl(u,s)]),C=q=>p?bl(q,{groupId:f}):(Vn(u,s)||_a(u,s))&&u.parent.type==="root"&&s.parser==="vue"&&!s.vueIndentScriptAndStyle?q:Wt(q),R=()=>p?tr(ht,"",{groupId:f}):u.firstChild.hasLeadingSpaces&&u.firstChild.isLeadingSpaceSensitive?Ye:u.firstChild.type==="text"&&u.isWhitespaceSensitive&&u.isIndentationSensitive?gl(ht):ht,K=()=>(u.next?Li(u.next):to(u.parent))?u.lastChild.hasTrailingSpaces&&u.lastChild.isTrailingSpaceSensitive?" ":"":p?tr(ht,"",{groupId:f}):u.lastChild.hasTrailingSpaces&&u.lastChild.isTrailingSpaceSensitive?Ye:(u.lastChild.type==="comment"||u.lastChild.type==="text"&&u.isWhitespaceSensitive&&u.isIndentationSensitive)&&new RegExp(`\\n[\\t ]{${s.tabWidth*(o.ancestors.length-1)}}$`,"u").test(u.lastChild.value)?"":ht;return u.children.length===0?v(u.hasDanglingSpaces&&u.isDanglingSpaceSensitive?Ye:""):v([E0(u)?Fi:"",C([R(),Ml(o,s,c)]),K()])}function xa(o){return o>=9&&o<=32||o==160}function Ll(o){return 48<=o&&o<=57}function Ea(o){return o>=97&&o<=122||o>=65&&o<=90}function Xb(o){return o>=97&&o<=102||o>=65&&o<=70||Ll(o)}function Rl(o){return o===10||o===13}function Nd(o){return 48<=o&&o<=55}function Ol(o){return o===39||o===34||o===96}var Jb=/-+([a-z0-9])/g;function ev(o){return o.replace(Jb,(...s)=>s[1].toUpperCase())}var Pl=class nm{constructor(s,c,u,p){this.file=s,this.offset=c,this.line=u,this.col=p}toString(){return this.offset!=null?`${this.file.url}@${this.line}:${this.col}`:this.file.url}moveBy(s){let c=this.file.content,u=c.length,p=this.offset,f=this.line,v=this.col;for(;p>0&&s<0;)if(p--,s++,c.charCodeAt(p)==10){f--;let C=c.substring(0,p-1).lastIndexOf(`
`);v=C>0?p-C:p}else v--;for(;p<u&&s>0;){let C=c.charCodeAt(p);p++,s--,C==10?(f++,v=0):v++}return new nm(this.file,p,f,v)}getContext(s,c){let u=this.file.content,p=this.offset;if(p!=null){p>u.length-1&&(p=u.length-1);let f=p,v=0,C=0;for(;v<s&&p>0&&(p--,v++,!(u[p]==`
`&&++C==c)););for(v=0,C=0;v<s&&f<u.length-1&&(f++,v++,!(u[f]==`
`&&++C==c)););return{before:u.substring(p,this.offset),after:u.substring(this.offset,f+1)}}return null}},$d=class{constructor(o,s){this.content=o,this.url=s}},ge=class{constructor(o,s,c=o,u=null){this.start=o,this.end=s,this.fullStart=c,this.details=u}toString(){return this.start.file.content.substring(this.start.offset,this.end.offset)}},Ta;(function(o){o[o.WARNING=0]="WARNING",o[o.ERROR=1]="ERROR"})(Ta||(Ta={}));var Bd=class{constructor(o,s,c=Ta.ERROR,u){this.span=o,this.msg=s,this.level=c,this.relatedError=u}contextualMessage(){let o=this.span.start.getContext(100,3);return o?`${this.msg} ("${o.before}[${Ta[this.level]} ->]${o.after}")`:this.msg}toString(){let o=this.span.details?`, ${this.span.details}`:"";return`${this.contextualMessage()}: ${this.span.start}${o}`}},tv=[iv,rv,av,lv,cv,pv,uv,dv,hv,sv];function nv(o,s){for(let c of tv)c(o,s);return o}function iv(o){o.walk(s=>{if(s.type==="element"&&s.tagDefinition.ignoreFirstLf&&s.children.length>0&&s.children[0].type==="text"&&s.children[0].value[0]===`
`){let c=s.children[0];c.value.length===1?s.removeChild(c):c.value=c.value.slice(1)}})}function rv(o){let s=c=>{var u,p;return c.type==="element"&&((u=c.prev)==null?void 0:u.type)==="ieConditionalStartComment"&&c.prev.sourceSpan.end.offset===c.startSourceSpan.start.offset&&((p=c.firstChild)==null?void 0:p.type)==="ieConditionalEndComment"&&c.firstChild.sourceSpan.start.offset===c.startSourceSpan.end.offset};o.walk(c=>{if(c.children)for(let u=0;u<c.children.length;u++){let p=c.children[u];if(!s(p))continue;let f=p.prev,v=p.firstChild;c.removeChild(f),u--;let C=new ge(f.sourceSpan.start,v.sourceSpan.end),R=new ge(C.start,p.sourceSpan.end);p.condition=f.condition,p.sourceSpan=R,p.startSourceSpan=C,p.removeChild(v)}})}function ov(o,s,c){o.walk(u=>{if(u.children)for(let p=0;p<u.children.length;p++){let f=u.children[p];if(f.type!=="text"&&!s(f))continue;f.type!=="text"&&(f.type="text",f.value=c(f));let v=f.prev;!v||v.type!=="text"||(v.value+=f.value,v.sourceSpan=new ge(v.sourceSpan.start,f.sourceSpan.end),u.removeChild(f),p--)}})}function av(o){return ov(o,s=>s.type==="cdata",s=>`<![CDATA[${s.value}]]>`)}function sv(o){let s=c=>{var u,p;return c.type==="element"&&c.attrs.length===0&&c.children.length===1&&c.firstChild.type==="text"&&!Bn.hasWhitespaceCharacter(c.children[0].value)&&!c.firstChild.hasLeadingSpaces&&!c.firstChild.hasTrailingSpaces&&c.isLeadingSpaceSensitive&&!c.hasLeadingSpaces&&c.isTrailingSpaceSensitive&&!c.hasTrailingSpaces&&((u=c.prev)==null?void 0:u.type)==="text"&&((p=c.next)==null?void 0:p.type)==="text"};o.walk(c=>{if(c.children)for(let u=0;u<c.children.length;u++){let p=c.children[u];if(!s(p))continue;let f=p.prev,v=p.next;f.value+=`<${p.rawName}>`+p.firstChild.value+`</${p.rawName}>`+v.value,f.sourceSpan=new ge(f.sourceSpan.start,v.sourceSpan.end),f.isTrailingSpaceSensitive=v.isTrailingSpaceSensitive,f.hasTrailingSpaces=v.hasTrailingSpaces,c.removeChild(p),u--,c.removeChild(v)}})}function lv(o,s){if(s.parser==="html")return;let c=/\{\{(.+?)\}\}/su;o.walk(u=>{if(C0(u,s))for(let p of u.children){if(p.type!=="text")continue;let f=p.sourceSpan.start,v=null,C=p.value.split(c);for(let R=0;R<C.length;R++,f=v){let K=C[R];if(R%2===0){v=f.moveBy(K.length),K.length>0&&u.insertChildBefore(p,{type:"text",value:K,sourceSpan:new ge(f,v)});continue}v=f.moveBy(K.length+4),u.insertChildBefore(p,{type:"interpolation",sourceSpan:new ge(f,v),children:K.length===0?[]:[{type:"text",value:K,sourceSpan:new ge(f.moveBy(2),v.moveBy(-2))}]})}u.removeChild(p)}})}function cv(o,s){o.walk(c=>{let u=c.$children;if(!u)return;if(u.length===0||u.length===1&&u[0].type==="text"&&Bn.trim(u[0].value).length===0){c.hasDanglingSpaces=u.length>0,c.$children=[];return}let p=w0(c,s),f=fd(c);if(!p)for(let v=0;v<u.length;v++){let C=u[v];if(C.type!=="text")continue;let{leadingWhitespace:R,text:K,trailingWhitespace:q}=y0(C.value),Se=C.prev,he=C.next;K?(C.value=K,C.sourceSpan=new ge(C.sourceSpan.start.moveBy(R.length),C.sourceSpan.end.moveBy(-q.length)),R&&(Se&&(Se.hasTrailingSpaces=!0),C.hasLeadingSpaces=!0),q&&(C.hasTrailingSpaces=!0,he&&(he.hasLeadingSpaces=!0))):(c.removeChild(C),v--,(R||q)&&(Se&&(Se.hasTrailingSpaces=!0),he&&(he.hasLeadingSpaces=!0)))}c.isWhitespaceSensitive=p,c.isIndentationSensitive=f})}function uv(o){o.walk(s=>{s.isSelfClosing=!s.children||s.type==="element"&&(s.tagDefinition.isVoid||s.endSourceSpan&&s.startSourceSpan.start===s.endSourceSpan.start&&s.startSourceSpan.end===s.endSourceSpan.end)})}function dv(o,s){o.walk(c=>{c.type==="element"&&(c.hasHtmComponentClosingTag=c.endSourceSpan&&/^<\s*\/\s*\/\s*>$/u.test(s.originalText.slice(c.endSourceSpan.start.offset,c.endSourceSpan.end.offset)))})}function pv(o,s){o.walk(c=>{c.cssDisplay=$0(c,s)})}function hv(o,s){o.walk(c=>{let{children:u}=c;if(u){if(u.length===0){c.isDanglingSpaceSensitive=x0(c,s);return}for(let p of u)p.isLeadingSpaceSensitive=S0(p,s),p.isTrailingSpaceSensitive=D0(p,s);for(let p=0;p<u.length;p++){let f=u[p];f.isLeadingSpaceSensitive=(p===0||f.prev.isTrailingSpaceSensitive)&&f.isLeadingSpaceSensitive,f.isTrailingSpaceSensitive=(p===u.length-1||f.next.isLeadingSpaceSensitive)&&f.isTrailingSpaceSensitive}}})}var fv=nv;function gv(o,s,c){let{node:u}=o;switch(u.type){case"front-matter":return Mt(u.raw);case"root":return s.__onHtmlRoot&&s.__onHtmlRoot(u),[tt(Ml(o,s,c)),Ne];case"element":case"ieConditionalComment":return Zb(o,s,c);case"angularControlFlowBlock":return Wb(o,s,c);case"angularControlFlowBlockParameters":return Kb(o,s,c);case"angularControlFlowBlockParameter":return Bn.trim(u.expression);case"angularLetDeclaration":return tt(["@let ",tt([u.id," =",tt(Wt([Ye,c("init")]))]),";"]);case"angularLetDeclarationInitializer":return u.value;case"angularIcuExpression":return Qb(o,s,c);case"angularIcuCase":return Yb(o,s,c);case"ieConditionalStartComment":case"ieConditionalEndComment":return[io(u),Jr(u)];case"interpolation":return[io(u,s),...o.map(c,"children"),Jr(u,s)];case"text":{if(u.parent.type==="interpolation"){let C=/\n[^\S\n]*$/u,R=C.test(u.value),K=R?u.value.replace(C,""):u.value;return[Mt(K),R?Ne:""]}let p=Ri(u,s),f=xd(u),v=Mi(u,s);return f[0]=[p,f[0]],f.push([f.pop(),v]),ha(f)}case"docType":return[tt([io(u,s)," ",U(!1,u.value.replace(/^html\b/iu,"html"),/\s+/gu," ")]),Jr(u,s)];case"comment":return[Ri(u,s),Mt(s.originalText.slice(Xr(u),Ca(u))),Mi(u,s)];case"attribute":{if(u.value===null)return u.rawName;let p=Dd(u.value),f=jm(p,'"');return[u.rawName,"=",f,Mt(f==='"'?U(!1,p,'"',"&quot;"):U(!1,p,"'","&apos;")),f]}case"cdata":default:throw new Qm(u,"HTML")}}var mv={preprocess:fv,print:gv,insertPragma:zb,massageAstNode:Jm,embed:kb,getVisitorKeys:$b},bv=mv,vv=[{name:"Angular",type:"markup",extensions:[".component.html"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["angular"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"HTML",type:"markup",extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml"],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["html"],vscodeLanguageIds:["html"],linguistLanguageId:146},{name:"Lightning Web Components",type:"markup",extensions:[],tmScope:"text.html.basic",aceMode:"html",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["lwc"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"MJML",type:"markup",extensions:[".mjml"],tmScope:"text.mjml.basic",aceMode:"html",aliases:["MJML","mjml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["mjml"],filenames:[],vscodeLanguageIds:["mjml"],linguistLanguageId:146},{name:"Vue",type:"markup",extensions:[".vue"],tmScope:"source.vue",aceMode:"html",parsers:["vue"],vscodeLanguageIds:["vue"],linguistLanguageId:391}],Vd={bracketSpacing:{category:"Common",type:"boolean",default:!0,description:"Print spaces between brackets.",oppositeDescription:"Do not print spaces between brackets."},objectWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap object literals.",choices:[{value:"preserve",description:"Keep as multi-line, if there is a newline between the opening brace and first property."},{value:"collapse",description:"Fit to a single line when possible."}]},singleQuote:{category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."},proseWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap prose.",choices:[{value:"always",description:"Wrap prose if it exceeds the print width."},{value:"never",description:"Do not wrap prose."},{value:"preserve",description:"Wrap prose as-is."}]},bracketSameLine:{category:"Common",type:"boolean",default:!1,description:"Put > of opening tags on the last line instead of on a new line."},singleAttributePerLine:{category:"Common",type:"boolean",default:!1,description:"Enforce single attribute per line in HTML, Vue and JSX."}},Ud="HTML",yv={bracketSameLine:Vd.bracketSameLine,htmlWhitespaceSensitivity:{category:Ud,type:"choice",default:"css",description:"How to handle whitespaces in HTML.",choices:[{value:"css",description:"Respect the default value of CSS display property."},{value:"strict",description:"Whitespaces are considered sensitive."},{value:"ignore",description:"Whitespaces are considered insensitive."}]},singleAttributePerLine:Vd.singleAttributePerLine,vueIndentScriptAndStyle:{category:Ud,type:"boolean",default:!1,description:"Indent script and style tags in Vue files."}},_v=yv,jd={};l(jd,{angular:()=>Ey,html:()=>Sy,lwc:()=>Ay,mjml:()=>xy,vue:()=>Ty});var sT=new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`,"g"),Hd;(function(o){o[o.Emulated=0]="Emulated",o[o.None=2]="None",o[o.ShadowDom=3]="ShadowDom"})(Hd||(Hd={}));var zd;(function(o){o[o.OnPush=0]="OnPush",o[o.Default=1]="Default"})(zd||(zd={}));var qd;(function(o){o[o.None=0]="None",o[o.SignalBased=1]="SignalBased",o[o.HasDecoratorInputTransform=2]="HasDecoratorInputTransform"})(qd||(qd={}));var Wd={name:"custom-elements"},Gd={name:"no-errors-schema"},Oi;(function(o){o[o.NONE=0]="NONE",o[o.HTML=1]="HTML",o[o.STYLE=2]="STYLE",o[o.SCRIPT=3]="SCRIPT",o[o.URL=4]="URL",o[o.RESOURCE_URL=5]="RESOURCE_URL"})(Oi||(Oi={}));var Kd;(function(o){o[o.Error=0]="Error",o[o.Warning=1]="Warning",o[o.Ignore=2]="Ignore"})(Kd||(Kd={}));var an;(function(o){o[o.RAW_TEXT=0]="RAW_TEXT",o[o.ESCAPABLE_RAW_TEXT=1]="ESCAPABLE_RAW_TEXT",o[o.PARSABLE_DATA=2]="PARSABLE_DATA"})(an||(an={}));function Aa(o,s=!0){if(o[0]!=":")return[null,o];let c=o.indexOf(":",1);if(c===-1){if(s)throw new Error(`Unsupported format "${o}" expecting ":namespace:name"`);return[null,o]}return[o.slice(1,c),o.slice(c+1)]}function Qd(o){return Aa(o)[1]==="ng-container"}function Yd(o){return Aa(o)[1]==="ng-content"}function Ia(o){return o===null?null:Aa(o)[0]}function ka(o,s){return o?`:${o}:${s}`:s}var Fa;function Zd(){return Fa||(Fa={},Ma(Oi.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),Ma(Oi.STYLE,["*|style"]),Ma(Oi.URL,["*|formAction","area|href","area|ping","audio|src","a|href","a|ping","blockquote|cite","body|background","del|cite","form|action","img|src","input|src","ins|cite","q|cite","source|src","track|src","video|poster","video|src"]),Ma(Oi.RESOURCE_URL,["applet|code","applet|codebase","base|href","embed|src","frame|src","head|profile","html|manifest","iframe|src","link|href","media|src","object|codebase","object|data","script|src"])),Fa}function Ma(o,s){for(let c of s)Fa[c.toLowerCase()]=o}var Cv=class{},wv="boolean",Sv="number",Dv="string",xv="object",Ev=["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored","[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":svg:graphics^:svg:|",":svg:animation^:svg:|*begin,*end,*repeat",":svg:geometry^:svg:|",":svg:componentTransferFunction^:svg:|",":svg:gradient^:svg:|",":svg:textContent^:svg:graphics|",":svg:textPositioning^:svg:textContent|","a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username","area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username","audio^media|","br^[HTMLElement]|clear","base^[HTMLElement]|href,target","body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink","button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value","canvas^[HTMLElement]|#height,#width","content^[HTMLElement]|select","dl^[HTMLElement]|!compact","data^[HTMLElement]|value","datalist^[HTMLElement]|","details^[HTMLElement]|!open","dialog^[HTMLElement]|!open,returnValue","dir^[HTMLElement]|!compact","div^[HTMLElement]|align","embed^[HTMLElement]|align,height,name,src,type,width","fieldset^[HTMLElement]|!disabled,name","font^[HTMLElement]|color,face,size","form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target","frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src","frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows","hr^[HTMLElement]|align,color,!noShade,size,width","head^[HTMLElement]|","h1,h2,h3,h4,h5,h6^[HTMLElement]|align","html^[HTMLElement]|version","iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width","img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width","input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width","li^[HTMLElement]|type,#value","label^[HTMLElement]|htmlFor","legend^[HTMLElement]|align","link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type","map^[HTMLElement]|name","marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width","menu^[HTMLElement]|!compact","meta^[HTMLElement]|content,httpEquiv,media,name,scheme","meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value","ins,del^[HTMLElement]|cite,dateTime","ol^[HTMLElement]|!compact,!reversed,#start,type","object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width","optgroup^[HTMLElement]|!disabled,label","option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value","output^[HTMLElement]|defaultValue,%htmlFor,name,value","p^[HTMLElement]|align","param^[HTMLElement]|name,type,value,valueType","picture^[HTMLElement]|","pre^[HTMLElement]|#width","progress^[HTMLElement]|#max,#value","q,blockquote,cite^[HTMLElement]|","script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type","select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value","slot^[HTMLElement]|name","source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width","span^[HTMLElement]|","style^[HTMLElement]|!disabled,media,type","caption^[HTMLElement]|align","th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width","col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width","table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width","tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign","tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign","template^[HTMLElement]|","textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap","time^[HTMLElement]|dateTime","title^[HTMLElement]|text","track^[HTMLElement]|!default,kind,label,src,srclang","ul^[HTMLElement]|!compact,type","unknown^[HTMLElement]|","video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",":svg:a^:svg:graphics|",":svg:animate^:svg:animation|",":svg:animateMotion^:svg:animation|",":svg:animateTransform^:svg:animation|",":svg:circle^:svg:geometry|",":svg:clipPath^:svg:graphics|",":svg:defs^:svg:graphics|",":svg:desc^:svg:|",":svg:discard^:svg:|",":svg:ellipse^:svg:geometry|",":svg:feBlend^:svg:|",":svg:feColorMatrix^:svg:|",":svg:feComponentTransfer^:svg:|",":svg:feComposite^:svg:|",":svg:feConvolveMatrix^:svg:|",":svg:feDiffuseLighting^:svg:|",":svg:feDisplacementMap^:svg:|",":svg:feDistantLight^:svg:|",":svg:feDropShadow^:svg:|",":svg:feFlood^:svg:|",":svg:feFuncA^:svg:componentTransferFunction|",":svg:feFuncB^:svg:componentTransferFunction|",":svg:feFuncG^:svg:componentTransferFunction|",":svg:feFuncR^:svg:componentTransferFunction|",":svg:feGaussianBlur^:svg:|",":svg:feImage^:svg:|",":svg:feMerge^:svg:|",":svg:feMergeNode^:svg:|",":svg:feMorphology^:svg:|",":svg:feOffset^:svg:|",":svg:fePointLight^:svg:|",":svg:feSpecularLighting^:svg:|",":svg:feSpotLight^:svg:|",":svg:feTile^:svg:|",":svg:feTurbulence^:svg:|",":svg:filter^:svg:|",":svg:foreignObject^:svg:graphics|",":svg:g^:svg:graphics|",":svg:image^:svg:graphics|decoding",":svg:line^:svg:geometry|",":svg:linearGradient^:svg:gradient|",":svg:mpath^:svg:|",":svg:marker^:svg:|",":svg:mask^:svg:|",":svg:metadata^:svg:|",":svg:path^:svg:geometry|",":svg:pattern^:svg:|",":svg:polygon^:svg:geometry|",":svg:polyline^:svg:geometry|",":svg:radialGradient^:svg:gradient|",":svg:rect^:svg:geometry|",":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",":svg:script^:svg:|type",":svg:set^:svg:animation|",":svg:stop^:svg:|",":svg:style^:svg:|!disabled,media,title,type",":svg:switch^:svg:graphics|",":svg:symbol^:svg:|",":svg:tspan^:svg:textPositioning|",":svg:text^:svg:textPositioning|",":svg:textPath^:svg:textContent|",":svg:title^:svg:|",":svg:use^:svg:graphics|",":svg:view^:svg:|#zoomAndPan","data^[HTMLElement]|value","keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name","menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default","summary^[HTMLElement]|","time^[HTMLElement]|dateTime",":svg:cursor^:svg:|",":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":math:math^:math:|",":math:maction^:math:|",":math:menclose^:math:|",":math:merror^:math:|",":math:mfenced^:math:|",":math:mfrac^:math:|",":math:mi^:math:|",":math:mmultiscripts^:math:|",":math:mn^:math:|",":math:mo^:math:|",":math:mover^:math:|",":math:mpadded^:math:|",":math:mphantom^:math:|",":math:mroot^:math:|",":math:mrow^:math:|",":math:ms^:math:|",":math:mspace^:math:|",":math:msqrt^:math:|",":math:mstyle^:math:|",":math:msub^:math:|",":math:msubsup^:math:|",":math:msup^:math:|",":math:mtable^:math:|",":math:mtd^:math:|",":math:mtext^:math:|",":math:mtr^:math:|",":math:munder^:math:|",":math:munderover^:math:|",":math:semantics^:math:|"],Xd=new Map(Object.entries({class:"className",for:"htmlFor",formaction:"formAction",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"})),Tv=Array.from(Xd).reduce((o,[s,c])=>(o.set(s,c),o),new Map),Av=class extends Cv{constructor(){super(),this._schema=new Map,this._eventSchema=new Map,Ev.forEach(o=>{let s=new Map,c=new Set,[u,p]=o.split("|"),f=p.split(","),[v,C]=u.split("^");v.split(",").forEach(K=>{this._schema.set(K.toLowerCase(),s),this._eventSchema.set(K.toLowerCase(),c)});let R=C&&this._schema.get(C.toLowerCase());if(R){for(let[K,q]of R)s.set(K,q);for(let K of this._eventSchema.get(C.toLowerCase()))c.add(K)}f.forEach(K=>{if(K.length>0)switch(K[0]){case"*":c.add(K.substring(1));break;case"!":s.set(K.substring(1),wv);break;case"#":s.set(K.substring(1),Sv);break;case"%":s.set(K.substring(1),xv);break;default:s.set(K,Dv)}})})}hasProperty(o,s,c){if(c.some(u=>u.name===Gd.name))return!0;if(o.indexOf("-")>-1){if(Qd(o)||Yd(o))return!1;if(c.some(u=>u.name===Wd.name))return!0}return(this._schema.get(o.toLowerCase())||this._schema.get("unknown")).has(s)}hasElement(o,s){return s.some(c=>c.name===Gd.name)||o.indexOf("-")>-1&&(Qd(o)||Yd(o)||s.some(c=>c.name===Wd.name))?!0:this._schema.has(o.toLowerCase())}securityContext(o,s,c){c&&(s=this.getMappedPropName(s)),o=o.toLowerCase(),s=s.toLowerCase();let u=Zd()[o+"|"+s];return u||(u=Zd()["*|"+s],u||Oi.NONE)}getMappedPropName(o){return Xd.get(o)??o}getDefaultComponentElementName(){return"ng-component"}validateProperty(o){return o.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event property '${o}' is disallowed for security reasons, please use (${o.slice(2)})=...
If '${o}' is a directive input, make sure the directive is imported by the current module.`}:{error:!1}}validateAttribute(o){return o.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event attribute '${o}' is disallowed for security reasons, please use (${o.slice(2)})=...`}:{error:!1}}allKnownElementNames(){return Array.from(this._schema.keys())}allKnownAttributesOfElement(o){let s=this._schema.get(o.toLowerCase())||this._schema.get("unknown");return Array.from(s.keys()).map(c=>Tv.get(c)??c)}allKnownEventsOfElement(o){return Array.from(this._eventSchema.get(o.toLowerCase())??[])}normalizeAnimationStyleProperty(o){return ev(o)}normalizeAnimationStyleValue(o,s,c){let u="",p=c.toString().trim(),f=null;if(Iv(o)&&c!==0&&c!=="0")if(typeof c=="number")u="px";else{let v=c.match(/^[+-]?[\d\.]+([a-z]*)$/);v&&v[1].length==0&&(f=`Please provide a CSS unit value for ${s}:${c}`)}return{error:f,value:p+u}}};function Iv(o){switch(o){case"width":case"height":case"minWidth":case"minHeight":case"maxWidth":case"maxHeight":case"left":case"top":case"bottom":case"right":case"fontSize":case"outlineWidth":case"outlineOffset":case"paddingTop":case"paddingLeft":case"paddingBottom":case"paddingRight":case"marginTop":case"marginLeft":case"marginBottom":case"marginRight":case"borderRadius":case"borderWidth":case"borderTopWidth":case"borderLeftWidth":case"borderRightWidth":case"borderBottomWidth":case"textIndent":return!0;default:return!1}}var pe=class{constructor({closedByChildren:o,implicitNamespacePrefix:s,contentType:c=an.PARSABLE_DATA,closedByParent:u=!1,isVoid:p=!1,ignoreFirstLf:f=!1,preventNamespaceInheritance:v=!1,canSelfClose:C=!1}={}){this.closedByChildren={},this.closedByParent=!1,o&&o.length>0&&o.forEach(R=>this.closedByChildren[R]=!0),this.isVoid=p,this.closedByParent=u||p,this.implicitNamespacePrefix=s||null,this.contentType=c,this.ignoreFirstLf=f,this.preventNamespaceInheritance=v,this.canSelfClose=C??p}isClosedByChild(o){return this.isVoid||o.toLowerCase()in this.closedByChildren}getContentType(o){return typeof this.contentType=="object"?(o===void 0?void 0:this.contentType[o])??this.contentType.default:this.contentType}},Jd,so;function Nl(o){return so||(Jd=new pe({canSelfClose:!0}),so=Object.assign(Object.create(null),{base:new pe({isVoid:!0}),meta:new pe({isVoid:!0}),area:new pe({isVoid:!0}),embed:new pe({isVoid:!0}),link:new pe({isVoid:!0}),img:new pe({isVoid:!0}),input:new pe({isVoid:!0}),param:new pe({isVoid:!0}),hr:new pe({isVoid:!0}),br:new pe({isVoid:!0}),source:new pe({isVoid:!0}),track:new pe({isVoid:!0}),wbr:new pe({isVoid:!0}),p:new pe({closedByChildren:["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"],closedByParent:!0}),thead:new pe({closedByChildren:["tbody","tfoot"]}),tbody:new pe({closedByChildren:["tbody","tfoot"],closedByParent:!0}),tfoot:new pe({closedByChildren:["tbody"],closedByParent:!0}),tr:new pe({closedByChildren:["tr"],closedByParent:!0}),td:new pe({closedByChildren:["td","th"],closedByParent:!0}),th:new pe({closedByChildren:["td","th"],closedByParent:!0}),col:new pe({isVoid:!0}),svg:new pe({implicitNamespacePrefix:"svg"}),foreignObject:new pe({implicitNamespacePrefix:"svg",preventNamespaceInheritance:!0}),math:new pe({implicitNamespacePrefix:"math"}),li:new pe({closedByChildren:["li"],closedByParent:!0}),dt:new pe({closedByChildren:["dt","dd"]}),dd:new pe({closedByChildren:["dt","dd"],closedByParent:!0}),rb:new pe({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rt:new pe({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rtc:new pe({closedByChildren:["rb","rtc","rp"],closedByParent:!0}),rp:new pe({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),optgroup:new pe({closedByChildren:["optgroup"],closedByParent:!0}),option:new pe({closedByChildren:["option","optgroup"],closedByParent:!0}),pre:new pe({ignoreFirstLf:!0}),listing:new pe({ignoreFirstLf:!0}),style:new pe({contentType:an.RAW_TEXT}),script:new pe({contentType:an.RAW_TEXT}),title:new pe({contentType:{default:an.ESCAPABLE_RAW_TEXT,svg:an.PARSABLE_DATA}}),textarea:new pe({contentType:an.ESCAPABLE_RAW_TEXT,ignoreFirstLf:!0})}),new Av().allKnownElementNames().forEach(s=>{!so[s]&&Ia(s)===null&&(so[s]=new pe({canSelfClose:!1}))})),so[o]??Jd}var ar=class{constructor(o,s){this.sourceSpan=o,this.i18n=s}},kv=class extends ar{constructor(o,s,c,u){super(s,u),this.value=o,this.tokens=c,this.type="text"}visit(o,s){return o.visitText(this,s)}},Fv=class extends ar{constructor(o,s,c,u){super(s,u),this.value=o,this.tokens=c,this.type="cdata"}visit(o,s){return o.visitCdata(this,s)}},Mv=class extends ar{constructor(o,s,c,u,p,f){super(u,f),this.switchValue=o,this.type=s,this.cases=c,this.switchValueSourceSpan=p}visit(o,s){return o.visitExpansion(this,s)}},Lv=class{constructor(o,s,c,u,p){this.value=o,this.expression=s,this.sourceSpan=c,this.valueSourceSpan=u,this.expSourceSpan=p,this.type="expansionCase"}visit(o,s){return o.visitExpansionCase(this,s)}},Rv=class extends ar{constructor(o,s,c,u,p,f,v){super(c,v),this.name=o,this.value=s,this.keySpan=u,this.valueSpan=p,this.valueTokens=f,this.type="attribute"}visit(o,s){return o.visitAttribute(this,s)}get nameSpan(){return this.keySpan}},Jn=class extends ar{constructor(o,s,c,u,p,f=null,v=null,C){super(u,C),this.name=o,this.attrs=s,this.children=c,this.startSourceSpan=p,this.endSourceSpan=f,this.nameSpan=v,this.type="element"}visit(o,s){return o.visitElement(this,s)}},Ov=class{constructor(o,s){this.value=o,this.sourceSpan=s,this.type="comment"}visit(o,s){return o.visitComment(this,s)}},Pv=class{constructor(o,s){this.value=o,this.sourceSpan=s,this.type="docType"}visit(o,s){return o.visitDocType(this,s)}},sr=class extends ar{constructor(o,s,c,u,p,f,v=null,C){super(u,C),this.name=o,this.parameters=s,this.children=c,this.nameSpan=p,this.startSourceSpan=f,this.endSourceSpan=v,this.type="block"}visit(o,s){return o.visitBlock(this,s)}},ep=class{constructor(o,s){this.expression=o,this.sourceSpan=s,this.type="blockParameter",this.startSourceSpan=null,this.endSourceSpan=null}visit(o,s){return o.visitBlockParameter(this,s)}},tp=class{constructor(o,s,c,u,p){this.name=o,this.value=s,this.sourceSpan=c,this.nameSpan=u,this.valueSpan=p,this.type="letDeclaration",this.startSourceSpan=null,this.endSourceSpan=null}visit(o,s){return o.visitLetDeclaration(this,s)}};function np(o,s,c=null){let u=[],p=o.visit?f=>o.visit(f,c)||f.visit(o,c):f=>f.visit(o,c);return s.forEach(f=>{let v=p(f);v&&u.push(v)}),u}var Nv=class{constructor(){}visitElement(o,s){this.visitChildren(s,c=>{c(o.attrs),c(o.children)})}visitAttribute(o,s){}visitText(o,s){}visitCdata(o,s){}visitComment(o,s){}visitDocType(o,s){}visitExpansion(o,s){return this.visitChildren(s,c=>{c(o.cases)})}visitExpansionCase(o,s){}visitBlock(o,s){this.visitChildren(s,c=>{c(o.parameters),c(o.children)})}visitBlockParameter(o,s){}visitLetDeclaration(o,s){}visitChildren(o,s){let c=[],u=this;function p(f){f&&c.push(np(u,f,o))}return s(p),Array.prototype.concat.apply([],c)}},La={AElig:"\xC6",AMP:"&",amp:"&",Aacute:"\xC1",Abreve:"\u0102",Acirc:"\xC2",Acy:"\u0410",Afr:"\u{1D504}",Agrave:"\xC0",Alpha:"\u0391",Amacr:"\u0100",And:"\u2A53",Aogon:"\u0104",Aopf:"\u{1D538}",ApplyFunction:"\u2061",af:"\u2061",Aring:"\xC5",angst:"\xC5",Ascr:"\u{1D49C}",Assign:"\u2254",colone:"\u2254",coloneq:"\u2254",Atilde:"\xC3",Auml:"\xC4",Backslash:"\u2216",setminus:"\u2216",setmn:"\u2216",smallsetminus:"\u2216",ssetmn:"\u2216",Barv:"\u2AE7",Barwed:"\u2306",doublebarwedge:"\u2306",Bcy:"\u0411",Because:"\u2235",becaus:"\u2235",because:"\u2235",Bernoullis:"\u212C",Bscr:"\u212C",bernou:"\u212C",Beta:"\u0392",Bfr:"\u{1D505}",Bopf:"\u{1D539}",Breve:"\u02D8",breve:"\u02D8",Bumpeq:"\u224E",HumpDownHump:"\u224E",bump:"\u224E",CHcy:"\u0427",COPY:"\xA9",copy:"\xA9",Cacute:"\u0106",Cap:"\u22D2",CapitalDifferentialD:"\u2145",DD:"\u2145",Cayleys:"\u212D",Cfr:"\u212D",Ccaron:"\u010C",Ccedil:"\xC7",Ccirc:"\u0108",Cconint:"\u2230",Cdot:"\u010A",Cedilla:"\xB8",cedil:"\xB8",CenterDot:"\xB7",centerdot:"\xB7",middot:"\xB7",Chi:"\u03A7",CircleDot:"\u2299",odot:"\u2299",CircleMinus:"\u2296",ominus:"\u2296",CirclePlus:"\u2295",oplus:"\u2295",CircleTimes:"\u2297",otimes:"\u2297",ClockwiseContourIntegral:"\u2232",cwconint:"\u2232",CloseCurlyDoubleQuote:"\u201D",rdquo:"\u201D",rdquor:"\u201D",CloseCurlyQuote:"\u2019",rsquo:"\u2019",rsquor:"\u2019",Colon:"\u2237",Proportion:"\u2237",Colone:"\u2A74",Congruent:"\u2261",equiv:"\u2261",Conint:"\u222F",DoubleContourIntegral:"\u222F",ContourIntegral:"\u222E",conint:"\u222E",oint:"\u222E",Copf:"\u2102",complexes:"\u2102",Coproduct:"\u2210",coprod:"\u2210",CounterClockwiseContourIntegral:"\u2233",awconint:"\u2233",Cross:"\u2A2F",Cscr:"\u{1D49E}",Cup:"\u22D3",CupCap:"\u224D",asympeq:"\u224D",DDotrahd:"\u2911",DJcy:"\u0402",DScy:"\u0405",DZcy:"\u040F",Dagger:"\u2021",ddagger:"\u2021",Darr:"\u21A1",Dashv:"\u2AE4",DoubleLeftTee:"\u2AE4",Dcaron:"\u010E",Dcy:"\u0414",Del:"\u2207",nabla:"\u2207",Delta:"\u0394",Dfr:"\u{1D507}",DiacriticalAcute:"\xB4",acute:"\xB4",DiacriticalDot:"\u02D9",dot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",dblac:"\u02DD",DiacriticalGrave:"`",grave:"`",DiacriticalTilde:"\u02DC",tilde:"\u02DC",Diamond:"\u22C4",diam:"\u22C4",diamond:"\u22C4",DifferentialD:"\u2146",dd:"\u2146",Dopf:"\u{1D53B}",Dot:"\xA8",DoubleDot:"\xA8",die:"\xA8",uml:"\xA8",DotDot:"\u20DC",DotEqual:"\u2250",doteq:"\u2250",esdot:"\u2250",DoubleDownArrow:"\u21D3",Downarrow:"\u21D3",dArr:"\u21D3",DoubleLeftArrow:"\u21D0",Leftarrow:"\u21D0",lArr:"\u21D0",DoubleLeftRightArrow:"\u21D4",Leftrightarrow:"\u21D4",hArr:"\u21D4",iff:"\u21D4",DoubleLongLeftArrow:"\u27F8",Longleftarrow:"\u27F8",xlArr:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",Longleftrightarrow:"\u27FA",xhArr:"\u27FA",DoubleLongRightArrow:"\u27F9",Longrightarrow:"\u27F9",xrArr:"\u27F9",DoubleRightArrow:"\u21D2",Implies:"\u21D2",Rightarrow:"\u21D2",rArr:"\u21D2",DoubleRightTee:"\u22A8",vDash:"\u22A8",DoubleUpArrow:"\u21D1",Uparrow:"\u21D1",uArr:"\u21D1",DoubleUpDownArrow:"\u21D5",Updownarrow:"\u21D5",vArr:"\u21D5",DoubleVerticalBar:"\u2225",par:"\u2225",parallel:"\u2225",shortparallel:"\u2225",spar:"\u2225",DownArrow:"\u2193",ShortDownArrow:"\u2193",darr:"\u2193",downarrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",duarr:"\u21F5",DownBreve:"\u0311",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVector:"\u21BD",leftharpoondown:"\u21BD",lhard:"\u21BD",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVector:"\u21C1",rhard:"\u21C1",rightharpoondown:"\u21C1",DownRightVectorBar:"\u2957",DownTee:"\u22A4",top:"\u22A4",DownTeeArrow:"\u21A7",mapstodown:"\u21A7",Dscr:"\u{1D49F}",Dstrok:"\u0110",ENG:"\u014A",ETH:"\xD0",Eacute:"\xC9",Ecaron:"\u011A",Ecirc:"\xCA",Ecy:"\u042D",Edot:"\u0116",Efr:"\u{1D508}",Egrave:"\xC8",Element:"\u2208",in:"\u2208",isin:"\u2208",isinv:"\u2208",Emacr:"\u0112",EmptySmallSquare:"\u25FB",EmptyVerySmallSquare:"\u25AB",Eogon:"\u0118",Eopf:"\u{1D53C}",Epsilon:"\u0395",Equal:"\u2A75",EqualTilde:"\u2242",eqsim:"\u2242",esim:"\u2242",Equilibrium:"\u21CC",rightleftharpoons:"\u21CC",rlhar:"\u21CC",Escr:"\u2130",expectation:"\u2130",Esim:"\u2A73",Eta:"\u0397",Euml:"\xCB",Exists:"\u2203",exist:"\u2203",ExponentialE:"\u2147",ee:"\u2147",exponentiale:"\u2147",Fcy:"\u0424",Ffr:"\u{1D509}",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",blacksquare:"\u25AA",squarf:"\u25AA",squf:"\u25AA",Fopf:"\u{1D53D}",ForAll:"\u2200",forall:"\u2200",Fouriertrf:"\u2131",Fscr:"\u2131",GJcy:"\u0403",GT:">",gt:">",Gamma:"\u0393",Gammad:"\u03DC",Gbreve:"\u011E",Gcedil:"\u0122",Gcirc:"\u011C",Gcy:"\u0413",Gdot:"\u0120",Gfr:"\u{1D50A}",Gg:"\u22D9",ggg:"\u22D9",Gopf:"\u{1D53E}",GreaterEqual:"\u2265",ge:"\u2265",geq:"\u2265",GreaterEqualLess:"\u22DB",gel:"\u22DB",gtreqless:"\u22DB",GreaterFullEqual:"\u2267",gE:"\u2267",geqq:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",gl:"\u2277",gtrless:"\u2277",GreaterSlantEqual:"\u2A7E",geqslant:"\u2A7E",ges:"\u2A7E",GreaterTilde:"\u2273",gsim:"\u2273",gtrsim:"\u2273",Gscr:"\u{1D4A2}",Gt:"\u226B",NestedGreaterGreater:"\u226B",gg:"\u226B",HARDcy:"\u042A",Hacek:"\u02C7",caron:"\u02C7",Hat:"^",Hcirc:"\u0124",Hfr:"\u210C",Poincareplane:"\u210C",HilbertSpace:"\u210B",Hscr:"\u210B",hamilt:"\u210B",Hopf:"\u210D",quaternions:"\u210D",HorizontalLine:"\u2500",boxh:"\u2500",Hstrok:"\u0126",HumpEqual:"\u224F",bumpe:"\u224F",bumpeq:"\u224F",IEcy:"\u0415",IJlig:"\u0132",IOcy:"\u0401",Iacute:"\xCD",Icirc:"\xCE",Icy:"\u0418",Idot:"\u0130",Ifr:"\u2111",Im:"\u2111",image:"\u2111",imagpart:"\u2111",Igrave:"\xCC",Imacr:"\u012A",ImaginaryI:"\u2148",ii:"\u2148",Int:"\u222C",Integral:"\u222B",int:"\u222B",Intersection:"\u22C2",bigcap:"\u22C2",xcap:"\u22C2",InvisibleComma:"\u2063",ic:"\u2063",InvisibleTimes:"\u2062",it:"\u2062",Iogon:"\u012E",Iopf:"\u{1D540}",Iota:"\u0399",Iscr:"\u2110",imagline:"\u2110",Itilde:"\u0128",Iukcy:"\u0406",Iuml:"\xCF",Jcirc:"\u0134",Jcy:"\u0419",Jfr:"\u{1D50D}",Jopf:"\u{1D541}",Jscr:"\u{1D4A5}",Jsercy:"\u0408",Jukcy:"\u0404",KHcy:"\u0425",KJcy:"\u040C",Kappa:"\u039A",Kcedil:"\u0136",Kcy:"\u041A",Kfr:"\u{1D50E}",Kopf:"\u{1D542}",Kscr:"\u{1D4A6}",LJcy:"\u0409",LT:"<",lt:"<",Lacute:"\u0139",Lambda:"\u039B",Lang:"\u27EA",Laplacetrf:"\u2112",Lscr:"\u2112",lagran:"\u2112",Larr:"\u219E",twoheadleftarrow:"\u219E",Lcaron:"\u013D",Lcedil:"\u013B",Lcy:"\u041B",LeftAngleBracket:"\u27E8",lang:"\u27E8",langle:"\u27E8",LeftArrow:"\u2190",ShortLeftArrow:"\u2190",larr:"\u2190",leftarrow:"\u2190",slarr:"\u2190",LeftArrowBar:"\u21E4",larrb:"\u21E4",LeftArrowRightArrow:"\u21C6",leftrightarrows:"\u21C6",lrarr:"\u21C6",LeftCeiling:"\u2308",lceil:"\u2308",LeftDoubleBracket:"\u27E6",lobrk:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21C3",dharl:"\u21C3",downharpoonleft:"\u21C3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230A",lfloor:"\u230A",LeftRightArrow:"\u2194",harr:"\u2194",leftrightarrow:"\u2194",LeftRightVector:"\u294E",LeftTee:"\u22A3",dashv:"\u22A3",LeftTeeArrow:"\u21A4",mapstoleft:"\u21A4",LeftTeeVector:"\u295A",LeftTriangle:"\u22B2",vartriangleleft:"\u22B2",vltri:"\u22B2",LeftTriangleBar:"\u29CF",LeftTriangleEqual:"\u22B4",ltrie:"\u22B4",trianglelefteq:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21BF",uharl:"\u21BF",upharpoonleft:"\u21BF",LeftUpVectorBar:"\u2958",LeftVector:"\u21BC",leftharpoonup:"\u21BC",lharu:"\u21BC",LeftVectorBar:"\u2952",LessEqualGreater:"\u22DA",leg:"\u22DA",lesseqgtr:"\u22DA",LessFullEqual:"\u2266",lE:"\u2266",leqq:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",lg:"\u2276",LessLess:"\u2AA1",LessSlantEqual:"\u2A7D",leqslant:"\u2A7D",les:"\u2A7D",LessTilde:"\u2272",lesssim:"\u2272",lsim:"\u2272",Lfr:"\u{1D50F}",Ll:"\u22D8",Lleftarrow:"\u21DA",lAarr:"\u21DA",Lmidot:"\u013F",LongLeftArrow:"\u27F5",longleftarrow:"\u27F5",xlarr:"\u27F5",LongLeftRightArrow:"\u27F7",longleftrightarrow:"\u27F7",xharr:"\u27F7",LongRightArrow:"\u27F6",longrightarrow:"\u27F6",xrarr:"\u27F6",Lopf:"\u{1D543}",LowerLeftArrow:"\u2199",swarr:"\u2199",swarrow:"\u2199",LowerRightArrow:"\u2198",searr:"\u2198",searrow:"\u2198",Lsh:"\u21B0",lsh:"\u21B0",Lstrok:"\u0141",Lt:"\u226A",NestedLessLess:"\u226A",ll:"\u226A",Map:"\u2905",Mcy:"\u041C",MediumSpace:"\u205F",Mellintrf:"\u2133",Mscr:"\u2133",phmmat:"\u2133",Mfr:"\u{1D510}",MinusPlus:"\u2213",mnplus:"\u2213",mp:"\u2213",Mopf:"\u{1D544}",Mu:"\u039C",NJcy:"\u040A",Nacute:"\u0143",Ncaron:"\u0147",Ncedil:"\u0145",Ncy:"\u041D",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",ZeroWidthSpace:"\u200B",NewLine:`
`,Nfr:"\u{1D511}",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nbsp:"\xA0",Nopf:"\u2115",naturals:"\u2115",Not:"\u2AEC",NotCongruent:"\u2262",nequiv:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",npar:"\u2226",nparallel:"\u2226",nshortparallel:"\u2226",nspar:"\u2226",NotElement:"\u2209",notin:"\u2209",notinva:"\u2209",NotEqual:"\u2260",ne:"\u2260",NotEqualTilde:"\u2242\u0338",nesim:"\u2242\u0338",NotExists:"\u2204",nexist:"\u2204",nexists:"\u2204",NotGreater:"\u226F",ngt:"\u226F",ngtr:"\u226F",NotGreaterEqual:"\u2271",nge:"\u2271",ngeq:"\u2271",NotGreaterFullEqual:"\u2267\u0338",ngE:"\u2267\u0338",ngeqq:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",nGtv:"\u226B\u0338",NotGreaterLess:"\u2279",ntgl:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",NotGreaterTilde:"\u2275",ngsim:"\u2275",NotHumpDownHump:"\u224E\u0338",nbump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",nbumpe:"\u224F\u0338",NotLeftTriangle:"\u22EA",nltri:"\u22EA",ntriangleleft:"\u22EA",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangleEqual:"\u22EC",nltrie:"\u22EC",ntrianglelefteq:"\u22EC",NotLess:"\u226E",nless:"\u226E",nlt:"\u226E",NotLessEqual:"\u2270",nle:"\u2270",nleq:"\u2270",NotLessGreater:"\u2278",ntlg:"\u2278",NotLessLess:"\u226A\u0338",nLtv:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",NotLessTilde:"\u2274",nlsim:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",NotPrecedes:"\u2280",npr:"\u2280",nprec:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",npre:"\u2AAF\u0338",npreceq:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",nprcue:"\u22E0",NotReverseElement:"\u220C",notni:"\u220C",notniva:"\u220C",NotRightTriangle:"\u22EB",nrtri:"\u22EB",ntriangleright:"\u22EB",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangleEqual:"\u22ED",nrtrie:"\u22ED",ntrianglerighteq:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",nsqsube:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",nsqsupe:"\u22E3",NotSubset:"\u2282\u20D2",nsubset:"\u2282\u20D2",vnsub:"\u2282\u20D2",NotSubsetEqual:"\u2288",nsube:"\u2288",nsubseteq:"\u2288",NotSucceeds:"\u2281",nsc:"\u2281",nsucc:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",nsce:"\u2AB0\u0338",nsucceq:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",nsccue:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",nsupset:"\u2283\u20D2",vnsup:"\u2283\u20D2",NotSupersetEqual:"\u2289",nsupe:"\u2289",nsupseteq:"\u2289",NotTilde:"\u2241",nsim:"\u2241",NotTildeEqual:"\u2244",nsime:"\u2244",nsimeq:"\u2244",NotTildeFullEqual:"\u2247",ncong:"\u2247",NotTildeTilde:"\u2249",nap:"\u2249",napprox:"\u2249",NotVerticalBar:"\u2224",nmid:"\u2224",nshortmid:"\u2224",nsmid:"\u2224",Nscr:"\u{1D4A9}",Ntilde:"\xD1",Nu:"\u039D",OElig:"\u0152",Oacute:"\xD3",Ocirc:"\xD4",Ocy:"\u041E",Odblac:"\u0150",Ofr:"\u{1D512}",Ograve:"\xD2",Omacr:"\u014C",Omega:"\u03A9",ohm:"\u03A9",Omicron:"\u039F",Oopf:"\u{1D546}",OpenCurlyDoubleQuote:"\u201C",ldquo:"\u201C",OpenCurlyQuote:"\u2018",lsquo:"\u2018",Or:"\u2A54",Oscr:"\u{1D4AA}",Oslash:"\xD8",Otilde:"\xD5",Otimes:"\u2A37",Ouml:"\xD6",OverBar:"\u203E",oline:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",tbrk:"\u23B4",OverParenthesis:"\u23DC",PartialD:"\u2202",part:"\u2202",Pcy:"\u041F",Pfr:"\u{1D513}",Phi:"\u03A6",Pi:"\u03A0",PlusMinus:"\xB1",plusmn:"\xB1",pm:"\xB1",Popf:"\u2119",primes:"\u2119",Pr:"\u2ABB",Precedes:"\u227A",pr:"\u227A",prec:"\u227A",PrecedesEqual:"\u2AAF",pre:"\u2AAF",preceq:"\u2AAF",PrecedesSlantEqual:"\u227C",prcue:"\u227C",preccurlyeq:"\u227C",PrecedesTilde:"\u227E",precsim:"\u227E",prsim:"\u227E",Prime:"\u2033",Product:"\u220F",prod:"\u220F",Proportional:"\u221D",prop:"\u221D",propto:"\u221D",varpropto:"\u221D",vprop:"\u221D",Pscr:"\u{1D4AB}",Psi:"\u03A8",QUOT:'"',quot:'"',Qfr:"\u{1D514}",Qopf:"\u211A",rationals:"\u211A",Qscr:"\u{1D4AC}",RBarr:"\u2910",drbkarow:"\u2910",REG:"\xAE",circledR:"\xAE",reg:"\xAE",Racute:"\u0154",Rang:"\u27EB",Rarr:"\u21A0",twoheadrightarrow:"\u21A0",Rarrtl:"\u2916",Rcaron:"\u0158",Rcedil:"\u0156",Rcy:"\u0420",Re:"\u211C",Rfr:"\u211C",real:"\u211C",realpart:"\u211C",ReverseElement:"\u220B",SuchThat:"\u220B",ni:"\u220B",niv:"\u220B",ReverseEquilibrium:"\u21CB",leftrightharpoons:"\u21CB",lrhar:"\u21CB",ReverseUpEquilibrium:"\u296F",duhar:"\u296F",Rho:"\u03A1",RightAngleBracket:"\u27E9",rang:"\u27E9",rangle:"\u27E9",RightArrow:"\u2192",ShortRightArrow:"\u2192",rarr:"\u2192",rightarrow:"\u2192",srarr:"\u2192",RightArrowBar:"\u21E5",rarrb:"\u21E5",RightArrowLeftArrow:"\u21C4",rightleftarrows:"\u21C4",rlarr:"\u21C4",RightCeiling:"\u2309",rceil:"\u2309",RightDoubleBracket:"\u27E7",robrk:"\u27E7",RightDownTeeVector:"\u295D",RightDownVector:"\u21C2",dharr:"\u21C2",downharpoonright:"\u21C2",RightDownVectorBar:"\u2955",RightFloor:"\u230B",rfloor:"\u230B",RightTee:"\u22A2",vdash:"\u22A2",RightTeeArrow:"\u21A6",map:"\u21A6",mapsto:"\u21A6",RightTeeVector:"\u295B",RightTriangle:"\u22B3",vartriangleright:"\u22B3",vrtri:"\u22B3",RightTriangleBar:"\u29D0",RightTriangleEqual:"\u22B5",rtrie:"\u22B5",trianglerighteq:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVector:"\u21BE",uharr:"\u21BE",upharpoonright:"\u21BE",RightUpVectorBar:"\u2954",RightVector:"\u21C0",rharu:"\u21C0",rightharpoonup:"\u21C0",RightVectorBar:"\u2953",Ropf:"\u211D",reals:"\u211D",RoundImplies:"\u2970",Rrightarrow:"\u21DB",rAarr:"\u21DB",Rscr:"\u211B",realine:"\u211B",Rsh:"\u21B1",rsh:"\u21B1",RuleDelayed:"\u29F4",SHCHcy:"\u0429",SHcy:"\u0428",SOFTcy:"\u042C",Sacute:"\u015A",Sc:"\u2ABC",Scaron:"\u0160",Scedil:"\u015E",Scirc:"\u015C",Scy:"\u0421",Sfr:"\u{1D516}",ShortUpArrow:"\u2191",UpArrow:"\u2191",uarr:"\u2191",uparrow:"\u2191",Sigma:"\u03A3",SmallCircle:"\u2218",compfn:"\u2218",Sopf:"\u{1D54A}",Sqrt:"\u221A",radic:"\u221A",Square:"\u25A1",squ:"\u25A1",square:"\u25A1",SquareIntersection:"\u2293",sqcap:"\u2293",SquareSubset:"\u228F",sqsub:"\u228F",sqsubset:"\u228F",SquareSubsetEqual:"\u2291",sqsube:"\u2291",sqsubseteq:"\u2291",SquareSuperset:"\u2290",sqsup:"\u2290",sqsupset:"\u2290",SquareSupersetEqual:"\u2292",sqsupe:"\u2292",sqsupseteq:"\u2292",SquareUnion:"\u2294",sqcup:"\u2294",Sscr:"\u{1D4AE}",Star:"\u22C6",sstarf:"\u22C6",Sub:"\u22D0",Subset:"\u22D0",SubsetEqual:"\u2286",sube:"\u2286",subseteq:"\u2286",Succeeds:"\u227B",sc:"\u227B",succ:"\u227B",SucceedsEqual:"\u2AB0",sce:"\u2AB0",succeq:"\u2AB0",SucceedsSlantEqual:"\u227D",sccue:"\u227D",succcurlyeq:"\u227D",SucceedsTilde:"\u227F",scsim:"\u227F",succsim:"\u227F",Sum:"\u2211",sum:"\u2211",Sup:"\u22D1",Supset:"\u22D1",Superset:"\u2283",sup:"\u2283",supset:"\u2283",SupersetEqual:"\u2287",supe:"\u2287",supseteq:"\u2287",THORN:"\xDE",TRADE:"\u2122",trade:"\u2122",TSHcy:"\u040B",TScy:"\u0426",Tab:"	",Tau:"\u03A4",Tcaron:"\u0164",Tcedil:"\u0162",Tcy:"\u0422",Tfr:"\u{1D517}",Therefore:"\u2234",there4:"\u2234",therefore:"\u2234",Theta:"\u0398",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",Tilde:"\u223C",sim:"\u223C",thicksim:"\u223C",thksim:"\u223C",TildeEqual:"\u2243",sime:"\u2243",simeq:"\u2243",TildeFullEqual:"\u2245",cong:"\u2245",TildeTilde:"\u2248",ap:"\u2248",approx:"\u2248",asymp:"\u2248",thickapprox:"\u2248",thkap:"\u2248",Topf:"\u{1D54B}",TripleDot:"\u20DB",tdot:"\u20DB",Tscr:"\u{1D4AF}",Tstrok:"\u0166",Uacute:"\xDA",Uarr:"\u219F",Uarrocir:"\u2949",Ubrcy:"\u040E",Ubreve:"\u016C",Ucirc:"\xDB",Ucy:"\u0423",Udblac:"\u0170",Ufr:"\u{1D518}",Ugrave:"\xD9",Umacr:"\u016A",UnderBar:"_",lowbar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",bbrk:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",bigcup:"\u22C3",xcup:"\u22C3",UnionPlus:"\u228E",uplus:"\u228E",Uogon:"\u0172",Uopf:"\u{1D54C}",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21C5",udarr:"\u21C5",UpDownArrow:"\u2195",updownarrow:"\u2195",varr:"\u2195",UpEquilibrium:"\u296E",udhar:"\u296E",UpTee:"\u22A5",bot:"\u22A5",bottom:"\u22A5",perp:"\u22A5",UpTeeArrow:"\u21A5",mapstoup:"\u21A5",UpperLeftArrow:"\u2196",nwarr:"\u2196",nwarrow:"\u2196",UpperRightArrow:"\u2197",nearr:"\u2197",nearrow:"\u2197",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",Uring:"\u016E",Uscr:"\u{1D4B0}",Utilde:"\u0168",Uuml:"\xDC",VDash:"\u22AB",Vbar:"\u2AEB",Vcy:"\u0412",Vdash:"\u22A9",Vdashl:"\u2AE6",Vee:"\u22C1",bigvee:"\u22C1",xvee:"\u22C1",Verbar:"\u2016",Vert:"\u2016",VerticalBar:"\u2223",mid:"\u2223",shortmid:"\u2223",smid:"\u2223",VerticalLine:"|",verbar:"|",vert:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",wr:"\u2240",wreath:"\u2240",VeryThinSpace:"\u200A",hairsp:"\u200A",Vfr:"\u{1D519}",Vopf:"\u{1D54D}",Vscr:"\u{1D4B1}",Vvdash:"\u22AA",Wcirc:"\u0174",Wedge:"\u22C0",bigwedge:"\u22C0",xwedge:"\u22C0",Wfr:"\u{1D51A}",Wopf:"\u{1D54E}",Wscr:"\u{1D4B2}",Xfr:"\u{1D51B}",Xi:"\u039E",Xopf:"\u{1D54F}",Xscr:"\u{1D4B3}",YAcy:"\u042F",YIcy:"\u0407",YUcy:"\u042E",Yacute:"\xDD",Ycirc:"\u0176",Ycy:"\u042B",Yfr:"\u{1D51C}",Yopf:"\u{1D550}",Yscr:"\u{1D4B4}",Yuml:"\u0178",ZHcy:"\u0416",Zacute:"\u0179",Zcaron:"\u017D",Zcy:"\u0417",Zdot:"\u017B",Zeta:"\u0396",Zfr:"\u2128",zeetrf:"\u2128",Zopf:"\u2124",integers:"\u2124",Zscr:"\u{1D4B5}",aacute:"\xE1",abreve:"\u0103",ac:"\u223E",mstpos:"\u223E",acE:"\u223E\u0333",acd:"\u223F",acirc:"\xE2",acy:"\u0430",aelig:"\xE6",afr:"\u{1D51E}",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",alpha:"\u03B1",amacr:"\u0101",amalg:"\u2A3F",and:"\u2227",wedge:"\u2227",andand:"\u2A55",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",angle:"\u2220",ange:"\u29A4",angmsd:"\u2221",measuredangle:"\u2221",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angzarr:"\u237C",aogon:"\u0105",aopf:"\u{1D552}",apE:"\u2A70",apacir:"\u2A6F",ape:"\u224A",approxeq:"\u224A",apid:"\u224B",apos:"'",aring:"\xE5",ascr:"\u{1D4B6}",ast:"*",midast:"*",atilde:"\xE3",auml:"\xE4",awint:"\u2A11",bNot:"\u2AED",backcong:"\u224C",bcong:"\u224C",backepsilon:"\u03F6",bepsi:"\u03F6",backprime:"\u2035",bprime:"\u2035",backsim:"\u223D",bsim:"\u223D",backsimeq:"\u22CD",bsime:"\u22CD",barvee:"\u22BD",barwed:"\u2305",barwedge:"\u2305",bbrktbrk:"\u23B6",bcy:"\u0431",bdquo:"\u201E",ldquor:"\u201E",bemptyv:"\u29B0",beta:"\u03B2",beth:"\u2136",between:"\u226C",twixt:"\u226C",bfr:"\u{1D51F}",bigcirc:"\u25EF",xcirc:"\u25EF",bigodot:"\u2A00",xodot:"\u2A00",bigoplus:"\u2A01",xoplus:"\u2A01",bigotimes:"\u2A02",xotime:"\u2A02",bigsqcup:"\u2A06",xsqcup:"\u2A06",bigstar:"\u2605",starf:"\u2605",bigtriangledown:"\u25BD",xdtri:"\u25BD",bigtriangleup:"\u25B3",xutri:"\u25B3",biguplus:"\u2A04",xuplus:"\u2A04",bkarow:"\u290D",rbarr:"\u290D",blacklozenge:"\u29EB",lozf:"\u29EB",blacktriangle:"\u25B4",utrif:"\u25B4",blacktriangledown:"\u25BE",dtrif:"\u25BE",blacktriangleleft:"\u25C2",ltrif:"\u25C2",blacktriangleright:"\u25B8",rtrif:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bnot:"\u2310",bopf:"\u{1D553}",bowtie:"\u22C8",boxDL:"\u2557",boxDR:"\u2554",boxDl:"\u2556",boxDr:"\u2553",boxH:"\u2550",boxHD:"\u2566",boxHU:"\u2569",boxHd:"\u2564",boxHu:"\u2567",boxUL:"\u255D",boxUR:"\u255A",boxUl:"\u255C",boxUr:"\u2559",boxV:"\u2551",boxVH:"\u256C",boxVL:"\u2563",boxVR:"\u2560",boxVh:"\u256B",boxVl:"\u2562",boxVr:"\u255F",boxbox:"\u29C9",boxdL:"\u2555",boxdR:"\u2552",boxdl:"\u2510",boxdr:"\u250C",boxhD:"\u2565",boxhU:"\u2568",boxhd:"\u252C",boxhu:"\u2534",boxminus:"\u229F",minusb:"\u229F",boxplus:"\u229E",plusb:"\u229E",boxtimes:"\u22A0",timesb:"\u22A0",boxuL:"\u255B",boxuR:"\u2558",boxul:"\u2518",boxur:"\u2514",boxv:"\u2502",boxvH:"\u256A",boxvL:"\u2561",boxvR:"\u255E",boxvh:"\u253C",boxvl:"\u2524",boxvr:"\u251C",brvbar:"\xA6",bscr:"\u{1D4B7}",bsemi:"\u204F",bsol:"\\",bsolb:"\u29C5",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bumpE:"\u2AAE",cacute:"\u0107",cap:"\u2229",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",capcup:"\u2A47",capdot:"\u2A40",caps:"\u2229\uFE00",caret:"\u2041",ccaps:"\u2A4D",ccaron:"\u010D",ccedil:"\xE7",ccirc:"\u0109",ccups:"\u2A4C",ccupssm:"\u2A50",cdot:"\u010B",cemptyv:"\u29B2",cent:"\xA2",cfr:"\u{1D520}",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",chi:"\u03C7",cir:"\u25CB",cirE:"\u29C3",circ:"\u02C6",circeq:"\u2257",cire:"\u2257",circlearrowleft:"\u21BA",olarr:"\u21BA",circlearrowright:"\u21BB",orarr:"\u21BB",circledS:"\u24C8",oS:"\u24C8",circledast:"\u229B",oast:"\u229B",circledcirc:"\u229A",ocir:"\u229A",circleddash:"\u229D",odash:"\u229D",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",clubs:"\u2663",clubsuit:"\u2663",colon:":",comma:",",commat:"@",comp:"\u2201",complement:"\u2201",congdot:"\u2A6D",copf:"\u{1D554}",copysr:"\u2117",crarr:"\u21B5",cross:"\u2717",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",curlyeqprec:"\u22DE",cuesc:"\u22DF",curlyeqsucc:"\u22DF",cularr:"\u21B6",curvearrowleft:"\u21B6",cularrp:"\u293D",cup:"\u222A",cupbrcap:"\u2A48",cupcap:"\u2A46",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curvearrowright:"\u21B7",curarrm:"\u293C",curlyvee:"\u22CE",cuvee:"\u22CE",curlywedge:"\u22CF",cuwed:"\u22CF",curren:"\xA4",cwint:"\u2231",cylcty:"\u232D",dHar:"\u2965",dagger:"\u2020",daleth:"\u2138",dash:"\u2010",hyphen:"\u2010",dbkarow:"\u290F",rBarr:"\u290F",dcaron:"\u010F",dcy:"\u0434",ddarr:"\u21CA",downdownarrows:"\u21CA",ddotseq:"\u2A77",eDDot:"\u2A77",deg:"\xB0",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",dfr:"\u{1D521}",diamondsuit:"\u2666",diams:"\u2666",digamma:"\u03DD",gammad:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",djcy:"\u0452",dlcorn:"\u231E",llcorner:"\u231E",dlcrop:"\u230D",dollar:"$",dopf:"\u{1D555}",doteqdot:"\u2251",eDot:"\u2251",dotminus:"\u2238",minusd:"\u2238",dotplus:"\u2214",plusdo:"\u2214",dotsquare:"\u22A1",sdotb:"\u22A1",drcorn:"\u231F",lrcorner:"\u231F",drcrop:"\u230C",dscr:"\u{1D4B9}",dscy:"\u0455",dsol:"\u29F6",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",triangledown:"\u25BF",dwangle:"\u29A6",dzcy:"\u045F",dzigrarr:"\u27FF",eacute:"\xE9",easter:"\u2A6E",ecaron:"\u011B",ecir:"\u2256",eqcirc:"\u2256",ecirc:"\xEA",ecolon:"\u2255",eqcolon:"\u2255",ecy:"\u044D",edot:"\u0117",efDot:"\u2252",fallingdotseq:"\u2252",efr:"\u{1D522}",eg:"\u2A9A",egrave:"\xE8",egs:"\u2A96",eqslantgtr:"\u2A96",egsdot:"\u2A98",el:"\u2A99",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",eqslantless:"\u2A95",elsdot:"\u2A97",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",emptyv:"\u2205",varnothing:"\u2205",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",eng:"\u014B",ensp:"\u2002",eogon:"\u0119",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",epsilon:"\u03B5",epsiv:"\u03F5",straightepsilon:"\u03F5",varepsilon:"\u03F5",equals:"=",equest:"\u225F",questeq:"\u225F",equivDD:"\u2A78",eqvparsl:"\u29E5",erDot:"\u2253",risingdotseq:"\u2253",erarr:"\u2971",escr:"\u212F",eta:"\u03B7",eth:"\xF0",euml:"\xEB",euro:"\u20AC",excl:"!",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",ffr:"\u{1D523}",filig:"\uFB01",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",fopf:"\u{1D557}",fork:"\u22D4",pitchfork:"\u22D4",forkv:"\u2AD9",fpartint:"\u2A0D",frac12:"\xBD",half:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",sfrown:"\u2322",fscr:"\u{1D4BB}",gEl:"\u2A8C",gtreqqless:"\u2A8C",gacute:"\u01F5",gamma:"\u03B3",gap:"\u2A86",gtrapprox:"\u2A86",gbreve:"\u011F",gcirc:"\u011D",gcy:"\u0433",gdot:"\u0121",gescc:"\u2AA9",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",gfr:"\u{1D524}",gimel:"\u2137",gjcy:"\u0453",glE:"\u2A92",gla:"\u2AA5",glj:"\u2AA4",gnE:"\u2269",gneqq:"\u2269",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gneq:"\u2A88",gnsim:"\u22E7",gopf:"\u{1D558}",gscr:"\u210A",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gtdot:"\u22D7",gtrdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrarr:"\u2978",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",hardcy:"\u044A",harrcir:"\u2948",harrw:"\u21AD",leftrightsquigarrow:"\u21AD",hbar:"\u210F",hslash:"\u210F",planck:"\u210F",plankv:"\u210F",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",mldr:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",hksearow:"\u2925",searhk:"\u2925",hkswarow:"\u2926",swarhk:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",larrhk:"\u21A9",hookrightarrow:"\u21AA",rarrhk:"\u21AA",hopf:"\u{1D559}",horbar:"\u2015",hscr:"\u{1D4BD}",hstrok:"\u0127",hybull:"\u2043",iacute:"\xED",icirc:"\xEE",icy:"\u0438",iecy:"\u0435",iexcl:"\xA1",ifr:"\u{1D526}",igrave:"\xEC",iiiint:"\u2A0C",qint:"\u2A0C",iiint:"\u222D",tint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",ijlig:"\u0133",imacr:"\u012B",imath:"\u0131",inodot:"\u0131",imof:"\u22B7",imped:"\u01B5",incare:"\u2105",infin:"\u221E",infintie:"\u29DD",intcal:"\u22BA",intercal:"\u22BA",intlarhk:"\u2A17",intprod:"\u2A3C",iprod:"\u2A3C",iocy:"\u0451",iogon:"\u012F",iopf:"\u{1D55A}",iota:"\u03B9",iquest:"\xBF",iscr:"\u{1D4BE}",isinE:"\u22F9",isindot:"\u22F5",isins:"\u22F4",isinsv:"\u22F3",itilde:"\u0129",iukcy:"\u0456",iuml:"\xEF",jcirc:"\u0135",jcy:"\u0439",jfr:"\u{1D527}",jmath:"\u0237",jopf:"\u{1D55B}",jscr:"\u{1D4BF}",jsercy:"\u0458",jukcy:"\u0454",kappa:"\u03BA",kappav:"\u03F0",varkappa:"\u03F0",kcedil:"\u0137",kcy:"\u043A",kfr:"\u{1D528}",kgreen:"\u0138",khcy:"\u0445",kjcy:"\u045C",kopf:"\u{1D55C}",kscr:"\u{1D4C0}",lAtail:"\u291B",lBarr:"\u290E",lEg:"\u2A8B",lesseqqgtr:"\u2A8B",lHar:"\u2962",lacute:"\u013A",laemptyv:"\u29B4",lambda:"\u03BB",langd:"\u2991",lap:"\u2A85",lessapprox:"\u2A85",laquo:"\xAB",larrbfs:"\u291F",larrfs:"\u291D",larrlp:"\u21AB",looparrowleft:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",leftarrowtail:"\u21A2",lat:"\u2AAB",latail:"\u2919",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lbbrk:"\u2772",lbrace:"{",lcub:"{",lbrack:"[",lsqb:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",lcaron:"\u013E",lcedil:"\u013C",lcy:"\u043B",ldca:"\u2936",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",leq:"\u2264",leftleftarrows:"\u21C7",llarr:"\u21C7",leftthreetimes:"\u22CB",lthree:"\u22CB",lescc:"\u2AA8",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessdot:"\u22D6",ltdot:"\u22D6",lfisht:"\u297C",lfr:"\u{1D529}",lgE:"\u2A91",lharul:"\u296A",lhblk:"\u2584",ljcy:"\u0459",llhard:"\u296B",lltri:"\u25FA",lmidot:"\u0140",lmoust:"\u23B0",lmoustache:"\u23B0",lnE:"\u2268",lneqq:"\u2268",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lneq:"\u2A87",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",longmapsto:"\u27FC",xmap:"\u27FC",looparrowright:"\u21AC",rarrlp:"\u21AC",lopar:"\u2985",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",loz:"\u25CA",lozenge:"\u25CA",lpar:"(",lparlt:"\u2993",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",lsime:"\u2A8D",lsimg:"\u2A8F",lsquor:"\u201A",sbquo:"\u201A",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltrPar:"\u2996",ltri:"\u25C3",triangleleft:"\u25C3",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",mDDot:"\u223A",macr:"\xAF",strns:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",marker:"\u25AE",mcomma:"\u2A29",mcy:"\u043C",mdash:"\u2014",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midcir:"\u2AF0",minus:"\u2212",minusdu:"\u2A2A",mlcp:"\u2ADB",models:"\u22A7",mopf:"\u{1D55E}",mscr:"\u{1D4C2}",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nGg:"\u22D9\u0338",nGt:"\u226B\u20D2",nLeftarrow:"\u21CD",nlArr:"\u21CD",nLeftrightarrow:"\u21CE",nhArr:"\u21CE",nLl:"\u22D8\u0338",nLt:"\u226A\u20D2",nRightarrow:"\u21CF",nrArr:"\u21CF",nVDash:"\u22AF",nVdash:"\u22AE",nacute:"\u0144",nang:"\u2220\u20D2",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",natur:"\u266E",natural:"\u266E",ncap:"\u2A43",ncaron:"\u0148",ncedil:"\u0146",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",ncy:"\u043D",ndash:"\u2013",neArr:"\u21D7",nearhk:"\u2924",nedot:"\u2250\u0338",nesear:"\u2928",toea:"\u2928",nfr:"\u{1D52B}",nharr:"\u21AE",nleftrightarrow:"\u21AE",nhpar:"\u2AF2",nis:"\u22FC",nisd:"\u22FA",njcy:"\u045A",nlE:"\u2266\u0338",nleqq:"\u2266\u0338",nlarr:"\u219A",nleftarrow:"\u219A",nldr:"\u2025",nopf:"\u{1D55F}",not:"\xAC",notinE:"\u22F9\u0338",notindot:"\u22F5\u0338",notinvb:"\u22F7",notinvc:"\u22F6",notnivb:"\u22FE",notnivc:"\u22FD",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",nrarr:"\u219B",nrightarrow:"\u219B",nrarrc:"\u2933\u0338",nrarrw:"\u219D\u0338",nscr:"\u{1D4C3}",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsubseteqq:"\u2AC5\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupseteqq:"\u2AC6\u0338",ntilde:"\xF1",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvDash:"\u22AD",nvHarr:"\u2904",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwArr:"\u21D6",nwarhk:"\u2923",nwnear:"\u2927",oacute:"\xF3",ocirc:"\xF4",ocy:"\u043E",odblac:"\u0151",odiv:"\u2A38",odsold:"\u29BC",oelig:"\u0153",ofcir:"\u29BF",ofr:"\u{1D52C}",ogon:"\u02DB",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",olcir:"\u29BE",olcross:"\u29BB",olt:"\u29C0",omacr:"\u014D",omega:"\u03C9",omicron:"\u03BF",omid:"\u29B6",oopf:"\u{1D560}",opar:"\u29B7",operp:"\u29B9",or:"\u2228",vee:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",oscr:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oslash:"\xF8",osol:"\u2298",otilde:"\xF5",otimesas:"\u2A36",ouml:"\xF6",ovbar:"\u233D",para:"\xB6",parsim:"\u2AF3",parsl:"\u2AFD",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",pertenk:"\u2031",pfr:"\u{1D52D}",phi:"\u03C6",phiv:"\u03D5",straightphi:"\u03D5",varphi:"\u03D5",phone:"\u260E",pi:"\u03C0",piv:"\u03D6",varpi:"\u03D6",planckh:"\u210E",plus:"+",plusacir:"\u2A23",pluscir:"\u2A22",plusdu:"\u2A25",pluse:"\u2A72",plussim:"\u2A26",plustwo:"\u2A27",pointint:"\u2A15",popf:"\u{1D561}",pound:"\xA3",prE:"\u2AB3",prap:"\u2AB7",precapprox:"\u2AB7",precnapprox:"\u2AB9",prnap:"\u2AB9",precneqq:"\u2AB5",prnE:"\u2AB5",precnsim:"\u22E8",prnsim:"\u22E8",prime:"\u2032",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prurel:"\u22B0",pscr:"\u{1D4C5}",psi:"\u03C8",puncsp:"\u2008",qfr:"\u{1D52E}",qopf:"\u{1D562}",qprime:"\u2057",qscr:"\u{1D4C6}",quatint:"\u2A16",quest:"?",rAtail:"\u291C",rHar:"\u2964",race:"\u223D\u0331",racute:"\u0155",raemptyv:"\u29B3",rangd:"\u2992",range:"\u29A5",raquo:"\xBB",rarrap:"\u2975",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291E",rarrpl:"\u2945",rarrsim:"\u2974",rarrtl:"\u21A3",rightarrowtail:"\u21A3",rarrw:"\u219D",rightsquigarrow:"\u219D",ratail:"\u291A",ratio:"\u2236",rbbrk:"\u2773",rbrace:"}",rcub:"}",rbrack:"]",rsqb:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",rcaron:"\u0159",rcedil:"\u0157",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdsh:"\u21B3",rect:"\u25AD",rfisht:"\u297D",rfr:"\u{1D52F}",rharul:"\u296C",rho:"\u03C1",rhov:"\u03F1",varrho:"\u03F1",rightrightarrows:"\u21C9",rrarr:"\u21C9",rightthreetimes:"\u22CC",rthree:"\u22CC",ring:"\u02DA",rlm:"\u200F",rmoust:"\u23B1",rmoustache:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",ropar:"\u2986",ropf:"\u{1D563}",roplus:"\u2A2E",rotimes:"\u2A35",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rsaquo:"\u203A",rscr:"\u{1D4C7}",rtimes:"\u22CA",rtri:"\u25B9",triangleright:"\u25B9",rtriltri:"\u29CE",ruluhar:"\u2968",rx:"\u211E",sacute:"\u015B",scE:"\u2AB4",scap:"\u2AB8",succapprox:"\u2AB8",scaron:"\u0161",scedil:"\u015F",scirc:"\u015D",scnE:"\u2AB6",succneqq:"\u2AB6",scnap:"\u2ABA",succnapprox:"\u2ABA",scnsim:"\u22E9",succnsim:"\u22E9",scpolint:"\u2A13",scy:"\u0441",sdot:"\u22C5",sdote:"\u2A66",seArr:"\u21D8",sect:"\xA7",semi:";",seswar:"\u2929",tosa:"\u2929",sext:"\u2736",sfr:"\u{1D530}",sharp:"\u266F",shchcy:"\u0449",shcy:"\u0448",shy:"\xAD",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",varsigma:"\u03C2",simdot:"\u2A6A",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",smashp:"\u2A33",smeparsl:"\u29E4",smile:"\u2323",ssmile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",softcy:"\u044C",sol:"/",solb:"\u29C4",solbar:"\u233F",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",sqcaps:"\u2293\uFE00",sqcups:"\u2294\uFE00",sscr:"\u{1D4C8}",star:"\u2606",sub:"\u2282",subset:"\u2282",subE:"\u2AC5",subseteqq:"\u2AC5",subdot:"\u2ABD",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subsetneqq:"\u2ACB",subne:"\u228A",subsetneq:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",supE:"\u2AC6",supseteqq:"\u2AC6",supdot:"\u2ABE",supdsub:"\u2AD8",supedot:"\u2AC4",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supsetneqq:"\u2ACC",supne:"\u228B",supsetneq:"\u228B",supplus:"\u2AC0",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swArr:"\u21D9",swnwar:"\u292A",szlig:"\xDF",target:"\u2316",tau:"\u03C4",tcaron:"\u0165",tcedil:"\u0163",tcy:"\u0442",telrec:"\u2315",tfr:"\u{1D531}",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",vartheta:"\u03D1",thorn:"\xFE",times:"\xD7",timesbar:"\u2A31",timesd:"\u2A30",topbot:"\u2336",topcir:"\u2AF1",topf:"\u{1D565}",topfork:"\u2ADA",tprime:"\u2034",triangle:"\u25B5",utri:"\u25B5",triangleq:"\u225C",trie:"\u225C",tridot:"\u25EC",triminus:"\u2A3A",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",tscr:"\u{1D4C9}",tscy:"\u0446",tshcy:"\u045B",tstrok:"\u0167",uHar:"\u2963",uacute:"\xFA",ubrcy:"\u045E",ubreve:"\u016D",ucirc:"\xFB",ucy:"\u0443",udblac:"\u0171",ufisht:"\u297E",ufr:"\u{1D532}",ugrave:"\xF9",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",umacr:"\u016B",uogon:"\u0173",uopf:"\u{1D566}",upsi:"\u03C5",upsilon:"\u03C5",upuparrows:"\u21C8",uuarr:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",uring:"\u016F",urtri:"\u25F9",uscr:"\u{1D4CA}",utdot:"\u22F0",utilde:"\u0169",uuml:"\xFC",uwangle:"\u29A7",vBar:"\u2AE8",vBarv:"\u2AE9",vangrt:"\u299C",varsubsetneq:"\u228A\uFE00",vsubne:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",vsubnE:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",vsupne:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vsupnE:"\u2ACC\uFE00",vcy:"\u0432",veebar:"\u22BB",veeeq:"\u225A",vellip:"\u22EE",vfr:"\u{1D533}",vopf:"\u{1D567}",vscr:"\u{1D4CB}",vzigzag:"\u299A",wcirc:"\u0175",wedbar:"\u2A5F",wedgeq:"\u2259",weierp:"\u2118",wp:"\u2118",wfr:"\u{1D534}",wopf:"\u{1D568}",wscr:"\u{1D4CC}",xfr:"\u{1D535}",xi:"\u03BE",xnis:"\u22FB",xopf:"\u{1D569}",xscr:"\u{1D4CD}",yacute:"\xFD",yacy:"\u044F",ycirc:"\u0177",ycy:"\u044B",yen:"\xA5",yfr:"\u{1D536}",yicy:"\u0457",yopf:"\u{1D56A}",yscr:"\u{1D4CE}",yucy:"\u044E",yuml:"\xFF",zacute:"\u017A",zcaron:"\u017E",zcy:"\u0437",zdot:"\u017C",zeta:"\u03B6",zfr:"\u{1D537}",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"},$v="\uE500";La.ngsp=$v;var Bv=[/@/,/^\s*$/,/[<>]/,/^[{}]$/,/&(#|[a-z])/i,/^\/\//];function Vv(o,s){if(s!=null&&!(Array.isArray(s)&&s.length==2))throw new Error(`Expected '${o}' to be an array, [start, end].`);if(s!=null){let c=s[0],u=s[1];Bv.forEach(p=>{if(p.test(c)||p.test(u))throw new Error(`['${c}', '${u}'] contains unusable interpolation symbol.`)})}}var Uv=class im{static fromArray(s){return s?(Vv("interpolation",s),new im(s[0],s[1])):ip}constructor(s,c){this.start=s,this.end=c}},ip=new Uv("{{","}}"),$l=class extends Bd{constructor(o,s,c){super(c,o),this.tokenType=s}},jv=class{constructor(o,s,c){this.tokens=o,this.errors=s,this.nonNormalizedIcuExpressions=c}};function Hv(o,s,c,u={}){let p=new Wv(new $d(o,s),c,u);return p.tokenize(),new jv(Xv(p.tokens),p.errors,p.nonNormalizedIcuExpressions)}var zv=/\r\n?/g;function lr(o){return`Unexpected character "${o===0?"EOF":String.fromCharCode(o)}"`}function rp(o){return`Unknown entity "${o}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`}function qv(o,s){return`Unable to parse entity "${s}" - ${o} character reference entities must end with ";"`}var Ra;(function(o){o.HEX="hexadecimal",o.DEC="decimal"})(Ra||(Ra={}));var Bl=class{constructor(o){this.error=o}},Wv=class{constructor(o,s,c){this._getTagContentType=s,this._currentTokenStart=null,this._currentTokenType=null,this._expansionCaseStack=[],this._inInterpolation=!1,this._fullNameStack=[],this.tokens=[],this.errors=[],this.nonNormalizedIcuExpressions=[],this._tokenizeIcu=c.tokenizeExpansionForms||!1,this._interpolationConfig=c.interpolationConfig||ip,this._leadingTriviaCodePoints=c.leadingTriviaChars&&c.leadingTriviaChars.map(p=>p.codePointAt(0)||0),this._canSelfClose=c.canSelfClose||!1,this._allowHtmComponentClosingTags=c.allowHtmComponentClosingTags||!1;let u=c.range||{endPos:o.content.length,startPos:0,startLine:0,startCol:0};this._cursor=c.escapedString?new Jv(o,u):new cp(o,u),this._preserveLineEndings=c.preserveLineEndings||!1,this._i18nNormalizeLineEndingsInICUs=c.i18nNormalizeLineEndingsInICUs||!1,this._tokenizeBlocks=c.tokenizeBlocks??!0,this._tokenizeLet=c.tokenizeLet??!0;try{this._cursor.init()}catch(p){this.handleError(p)}}_processCarriageReturns(o){return this._preserveLineEndings?o:o.replace(zv,`
`)}tokenize(){for(;this._cursor.peek()!==0;){let o=this._cursor.clone();try{if(this._attemptCharCode(60))if(this._attemptCharCode(33))this._attemptStr("[CDATA[")?this._consumeCdata(o):this._attemptStr("--")?this._consumeComment(o):this._attemptStrCaseInsensitive("doctype")?this._consumeDocType(o):this._consumeBogusComment(o);else if(this._attemptCharCode(47))this._consumeTagClose(o);else{let s=this._cursor.clone();this._attemptCharCode(63)?(this._cursor=s,this._consumeBogusComment(o)):this._consumeTagOpen(o)}else this._tokenizeLet&&this._cursor.peek()===64&&!this._inInterpolation&&this._attemptStr("@let")?this._consumeLetDeclaration(o):this._tokenizeBlocks&&this._attemptCharCode(64)?this._consumeBlockStart(o):this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansionCase()&&!this._isInExpansionForm()&&this._attemptCharCode(125)?this._consumeBlockEnd(o):this._tokenizeIcu&&this._tokenizeExpansionForm()||this._consumeWithInterpolation(5,8,()=>this._isTextEnd(),()=>this._isTagStart())}catch(s){this.handleError(s)}}this._beginToken(34),this._endToken([])}_getBlockName(){let o=!1,s=this._cursor.clone();return this._attemptCharCodeUntilFn(c=>xa(c)?!o:sp(c)?(o=!0,!1):!0),this._cursor.getChars(s).trim()}_consumeBlockStart(o){this._beginToken(25,o);let s=this._endToken([this._getBlockName()]);if(this._cursor.peek()===40)if(this._cursor.advance(),this._consumeBlockParameters(),this._attemptCharCodeUntilFn(it),this._attemptCharCode(41))this._attemptCharCodeUntilFn(it);else{s.type=29;return}this._attemptCharCode(123)?(this._beginToken(26),this._endToken([])):s.type=29}_consumeBlockEnd(o){this._beginToken(27,o),this._endToken([])}_consumeBlockParameters(){for(this._attemptCharCodeUntilFn(lp);this._cursor.peek()!==41&&this._cursor.peek()!==0;){this._beginToken(28);let o=this._cursor.clone(),s=null,c=0;for(;this._cursor.peek()!==59&&this._cursor.peek()!==0||s!==null;){let u=this._cursor.peek();if(u===92)this._cursor.advance();else if(u===s)s=null;else if(s===null&&Ol(u))s=u;else if(u===40&&s===null)c++;else if(u===41&&s===null){if(c===0)break;c>0&&c--}this._cursor.advance()}this._endToken([this._cursor.getChars(o)]),this._attemptCharCodeUntilFn(lp)}}_consumeLetDeclaration(o){if(this._beginToken(30,o),xa(this._cursor.peek()))this._attemptCharCodeUntilFn(it);else{let c=this._endToken([this._cursor.getChars(o)]);c.type=33;return}let s=this._endToken([this._getLetDeclarationName()]);if(this._attemptCharCodeUntilFn(it),!this._attemptCharCode(61)){s.type=33;return}this._attemptCharCodeUntilFn(c=>it(c)&&!Rl(c)),this._consumeLetDeclarationValue(),this._cursor.peek()===59?(this._beginToken(32),this._endToken([]),this._cursor.advance()):(s.type=33,s.sourceSpan=this._cursor.getSpan(o))}_getLetDeclarationName(){let o=this._cursor.clone(),s=!1;return this._attemptCharCodeUntilFn(c=>Ea(c)||c===36||c===95||s&&Ll(c)?(s=!0,!1):!0),this._cursor.getChars(o).trim()}_consumeLetDeclarationValue(){let o=this._cursor.clone();for(this._beginToken(31,o);this._cursor.peek()!==0;){let s=this._cursor.peek();if(s===59)break;Ol(s)&&(this._cursor.advance(),this._attemptCharCodeUntilFn(c=>c===92?(this._cursor.advance(),!1):c===s)),this._cursor.advance()}this._endToken([this._cursor.getChars(o)])}_tokenizeExpansionForm(){if(this.isExpansionFormStart())return this._consumeExpansionFormStart(),!0;if(Yv(this._cursor.peek())&&this._isInExpansionForm())return this._consumeExpansionCaseStart(),!0;if(this._cursor.peek()===125){if(this._isInExpansionCase())return this._consumeExpansionCaseEnd(),!0;if(this._isInExpansionForm())return this._consumeExpansionFormEnd(),!0}return!1}_beginToken(o,s=this._cursor.clone()){this._currentTokenStart=s,this._currentTokenType=o}_endToken(o,s){if(this._currentTokenStart===null)throw new $l("Programming error - attempted to end a token when there was no start to the token",this._currentTokenType,this._cursor.getSpan(s));if(this._currentTokenType===null)throw new $l("Programming error - attempted to end a token which has no token type",null,this._cursor.getSpan(this._currentTokenStart));let c={type:this._currentTokenType,parts:o,sourceSpan:(s??this._cursor).getSpan(this._currentTokenStart,this._leadingTriviaCodePoints)};return this.tokens.push(c),this._currentTokenStart=null,this._currentTokenType=null,c}_createError(o,s){this._isInExpansionForm()&&(o+=` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);let c=new $l(o,this._currentTokenType,s);return this._currentTokenStart=null,this._currentTokenType=null,new Bl(c)}handleError(o){if(o instanceof Vl&&(o=this._createError(o.msg,this._cursor.getSpan(o.cursor))),o instanceof Bl)this.errors.push(o.error);else throw o}_attemptCharCode(o){return this._cursor.peek()===o?(this._cursor.advance(),!0):!1}_attemptCharCodeCaseInsensitive(o){return Zv(this._cursor.peek(),o)?(this._cursor.advance(),!0):!1}_requireCharCode(o){let s=this._cursor.clone();if(!this._attemptCharCode(o))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(s))}_attemptStr(o){let s=o.length;if(this._cursor.charsLeft()<s)return!1;let c=this._cursor.clone();for(let u=0;u<s;u++)if(!this._attemptCharCode(o.charCodeAt(u)))return this._cursor=c,!1;return!0}_attemptStrCaseInsensitive(o){for(let s=0;s<o.length;s++)if(!this._attemptCharCodeCaseInsensitive(o.charCodeAt(s)))return!1;return!0}_requireStr(o){let s=this._cursor.clone();if(!this._attemptStr(o))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(s))}_requireStrCaseInsensitive(o){let s=this._cursor.clone();if(!this._attemptStrCaseInsensitive(o))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(s))}_attemptCharCodeUntilFn(o){for(;!o(this._cursor.peek());)this._cursor.advance()}_requireCharCodeUntilFn(o,s){let c=this._cursor.clone();if(this._attemptCharCodeUntilFn(o),this._cursor.diff(c)<s)throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(c))}_attemptUntilChar(o){for(;this._cursor.peek()!==o;)this._cursor.advance()}_readChar(){let o=String.fromCodePoint(this._cursor.peek());return this._cursor.advance(),o}_consumeEntity(o){this._beginToken(9);let s=this._cursor.clone();if(this._cursor.advance(),this._attemptCharCode(35)){let c=this._attemptCharCode(120)||this._attemptCharCode(88),u=this._cursor.clone();if(this._attemptCharCodeUntilFn(Kv),this._cursor.peek()!=59){this._cursor.advance();let f=c?Ra.HEX:Ra.DEC;throw this._createError(qv(f,this._cursor.getChars(s)),this._cursor.getSpan())}let p=this._cursor.getChars(u);this._cursor.advance();try{let f=parseInt(p,c?16:10);this._endToken([String.fromCharCode(f),this._cursor.getChars(s)])}catch{throw this._createError(rp(this._cursor.getChars(s)),this._cursor.getSpan())}}else{let c=this._cursor.clone();if(this._attemptCharCodeUntilFn(Qv),this._cursor.peek()!=59)this._beginToken(o,s),this._cursor=c,this._endToken(["&"]);else{let u=this._cursor.getChars(c);this._cursor.advance();let p=La[u];if(!p)throw this._createError(rp(u),this._cursor.getSpan(s));this._endToken([p,`&${u};`])}}}_consumeRawText(o,s){this._beginToken(o?6:7);let c=[];for(;;){let u=this._cursor.clone(),p=s();if(this._cursor=u,p)break;o&&this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(c.join(""))]),c.length=0,this._consumeEntity(6),this._beginToken(6)):c.push(this._readChar())}this._endToken([this._processCarriageReturns(c.join(""))])}_consumeComment(o){this._beginToken(10,o),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("-->")),this._beginToken(11),this._requireStr("-->"),this._endToken([])}_consumeBogusComment(o){this._beginToken(10,o),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(11),this._cursor.advance(),this._endToken([])}_consumeCdata(o){this._beginToken(12,o),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("]]>")),this._beginToken(13),this._requireStr("]]>"),this._endToken([])}_consumeDocType(o){this._beginToken(18,o),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(19),this._cursor.advance(),this._endToken([])}_consumePrefixAndName(){let o=this._cursor.clone(),s="";for(;this._cursor.peek()!==58&&!Gv(this._cursor.peek());)this._cursor.advance();let c;this._cursor.peek()===58?(s=this._cursor.getChars(o),this._cursor.advance(),c=this._cursor.clone()):c=o,this._requireCharCodeUntilFn(op,s===""?0:1);let u=this._cursor.getChars(c);return[s,u]}_consumeTagOpen(o){let s,c,u,p=[];try{if(!Ea(this._cursor.peek()))throw this._createError(lr(this._cursor.peek()),this._cursor.getSpan(o));for(u=this._consumeTagOpenStart(o),c=u.parts[0],s=u.parts[1],this._attemptCharCodeUntilFn(it);this._cursor.peek()!==47&&this._cursor.peek()!==62&&this._cursor.peek()!==60&&this._cursor.peek()!==0;){let[v,C]=this._consumeAttributeName();if(this._attemptCharCodeUntilFn(it),this._attemptCharCode(61)){this._attemptCharCodeUntilFn(it);let R=this._consumeAttributeValue();p.push({prefix:v,name:C,value:R})}else p.push({prefix:v,name:C});this._attemptCharCodeUntilFn(it)}this._consumeTagOpenEnd()}catch(v){if(v instanceof Bl){u?u.type=4:(this._beginToken(5,o),this._endToken(["<"]));return}throw v}if(this._canSelfClose&&this.tokens[this.tokens.length-1].type===2)return;let f=this._getTagContentType(s,c,this._fullNameStack.length>0,p);this._handleFullNameStackForTagOpen(c,s),f===an.RAW_TEXT?this._consumeRawTextWithTagClose(c,s,!1):f===an.ESCAPABLE_RAW_TEXT&&this._consumeRawTextWithTagClose(c,s,!0)}_consumeRawTextWithTagClose(o,s,c){this._consumeRawText(c,()=>!this._attemptCharCode(60)||!this._attemptCharCode(47)||(this._attemptCharCodeUntilFn(it),!this._attemptStrCaseInsensitive(o?`${o}:${s}`:s))?!1:(this._attemptCharCodeUntilFn(it),this._attemptCharCode(62))),this._beginToken(3),this._requireCharCodeUntilFn(u=>u===62,3),this._cursor.advance(),this._endToken([o,s]),this._handleFullNameStackForTagClose(o,s)}_consumeTagOpenStart(o){this._beginToken(0,o);let s=this._consumePrefixAndName();return this._endToken(s)}_consumeAttributeName(){let o=this._cursor.peek();if(o===39||o===34)throw this._createError(lr(o),this._cursor.getSpan());this._beginToken(14);let s=this._consumePrefixAndName();return this._endToken(s),s}_consumeAttributeValue(){let o;if(this._cursor.peek()===39||this._cursor.peek()===34){let s=this._cursor.peek();this._consumeQuote(s);let c=()=>this._cursor.peek()===s;o=this._consumeWithInterpolation(16,17,c,c),this._consumeQuote(s)}else{let s=()=>op(this._cursor.peek());o=this._consumeWithInterpolation(16,17,s,s)}return o}_consumeQuote(o){this._beginToken(15),this._requireCharCode(o),this._endToken([String.fromCodePoint(o)])}_consumeTagOpenEnd(){let o=this._attemptCharCode(47)?2:1;this._beginToken(o),this._requireCharCode(62),this._endToken([])}_consumeTagClose(o){if(this._beginToken(3,o),this._attemptCharCodeUntilFn(it),this._allowHtmComponentClosingTags&&this._attemptCharCode(47))this._attemptCharCodeUntilFn(it),this._requireCharCode(62),this._endToken([]);else{let[s,c]=this._consumePrefixAndName();this._attemptCharCodeUntilFn(it),this._requireCharCode(62),this._endToken([s,c]),this._handleFullNameStackForTagClose(s,c)}}_consumeExpansionFormStart(){this._beginToken(20),this._requireCharCode(123),this._endToken([]),this._expansionCaseStack.push(20),this._beginToken(7);let o=this._readUntil(44),s=this._processCarriageReturns(o);if(this._i18nNormalizeLineEndingsInICUs)this._endToken([s]);else{let u=this._endToken([o]);s!==o&&this.nonNormalizedIcuExpressions.push(u)}this._requireCharCode(44),this._attemptCharCodeUntilFn(it),this._beginToken(7);let c=this._readUntil(44);this._endToken([c]),this._requireCharCode(44),this._attemptCharCodeUntilFn(it)}_consumeExpansionCaseStart(){this._beginToken(21);let o=this._readUntil(123).trim();this._endToken([o]),this._attemptCharCodeUntilFn(it),this._beginToken(22),this._requireCharCode(123),this._endToken([]),this._attemptCharCodeUntilFn(it),this._expansionCaseStack.push(22)}_consumeExpansionCaseEnd(){this._beginToken(23),this._requireCharCode(125),this._endToken([]),this._attemptCharCodeUntilFn(it),this._expansionCaseStack.pop()}_consumeExpansionFormEnd(){this._beginToken(24),this._requireCharCode(125),this._endToken([]),this._expansionCaseStack.pop()}_consumeWithInterpolation(o,s,c,u){this._beginToken(o);let p=[];for(;!c();){let v=this._cursor.clone();this._interpolationConfig&&this._attemptStr(this._interpolationConfig.start)?(this._endToken([this._processCarriageReturns(p.join(""))],v),p.length=0,this._consumeInterpolation(s,v,u),this._beginToken(o)):this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(p.join(""))]),p.length=0,this._consumeEntity(o),this._beginToken(o)):p.push(this._readChar())}this._inInterpolation=!1;let f=this._processCarriageReturns(p.join(""));return this._endToken([f]),f}_consumeInterpolation(o,s,c){let u=[];this._beginToken(o,s),u.push(this._interpolationConfig.start);let p=this._cursor.clone(),f=null,v=!1;for(;this._cursor.peek()!==0&&(c===null||!c());){let C=this._cursor.clone();if(this._isTagStart()){this._cursor=C,u.push(this._getProcessedChars(p,C)),this._endToken(u);return}if(f===null)if(this._attemptStr(this._interpolationConfig.end)){u.push(this._getProcessedChars(p,C)),u.push(this._interpolationConfig.end),this._endToken(u);return}else this._attemptStr("//")&&(v=!0);let R=this._cursor.peek();this._cursor.advance(),R===92?this._cursor.advance():R===f?f=null:!v&&f===null&&Ol(R)&&(f=R)}u.push(this._getProcessedChars(p,this._cursor)),this._endToken(u)}_getProcessedChars(o,s){return this._processCarriageReturns(s.getChars(o))}_isTextEnd(){return!!(this._isTagStart()||this._cursor.peek()===0||this._tokenizeIcu&&!this._inInterpolation&&(this.isExpansionFormStart()||this._cursor.peek()===125&&this._isInExpansionCase())||this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansion()&&(this._isBlockStart()||this._cursor.peek()===64||this._cursor.peek()===125))}_isTagStart(){if(this._cursor.peek()===60){let o=this._cursor.clone();o.advance();let s=o.peek();if(97<=s&&s<=122||65<=s&&s<=90||s===47||s===33)return!0}return!1}_isBlockStart(){if(this._tokenizeBlocks&&this._cursor.peek()===64){let o=this._cursor.clone();if(o.advance(),sp(o.peek()))return!0}return!1}_readUntil(o){let s=this._cursor.clone();return this._attemptUntilChar(o),this._cursor.getChars(s)}_isInExpansion(){return this._isInExpansionCase()||this._isInExpansionForm()}_isInExpansionCase(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===22}_isInExpansionForm(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===20}isExpansionFormStart(){if(this._cursor.peek()!==123)return!1;if(this._interpolationConfig){let o=this._cursor.clone(),s=this._attemptStr(this._interpolationConfig.start);return this._cursor=o,!s}return!0}_handleFullNameStackForTagOpen(o,s){let c=ka(o,s);(this._fullNameStack.length===0||this._fullNameStack[this._fullNameStack.length-1]===c)&&this._fullNameStack.push(c)}_handleFullNameStackForTagClose(o,s){let c=ka(o,s);this._fullNameStack.length!==0&&this._fullNameStack[this._fullNameStack.length-1]===c&&this._fullNameStack.pop()}};function it(o){return!xa(o)||o===0}function op(o){return xa(o)||o===62||o===60||o===47||o===39||o===34||o===61||o===0}function Gv(o){return(o<97||122<o)&&(o<65||90<o)&&(o<48||o>57)}function Kv(o){return o===59||o===0||!Xb(o)}function Qv(o){return o===59||o===0||!Ea(o)}function Yv(o){return o!==125}function Zv(o,s){return ap(o)===ap(s)}function ap(o){return o>=97&&o<=122?o-97+65:o}function sp(o){return Ea(o)||Ll(o)||o===95}function lp(o){return o!==59&&it(o)}function Xv(o){let s=[],c;for(let u=0;u<o.length;u++){let p=o[u];c&&c.type===5&&p.type===5||c&&c.type===16&&p.type===16?(c.parts[0]+=p.parts[0],c.sourceSpan.end=p.sourceSpan.end):(c=p,s.push(c))}return s}var cp=class zu{constructor(s,c){if(s instanceof zu){this.file=s.file,this.input=s.input,this.end=s.end;let u=s.state;this.state={peek:u.peek,offset:u.offset,line:u.line,column:u.column}}else{if(!c)throw new Error("Programming error: the range argument must be provided with a file argument.");this.file=s,this.input=s.content,this.end=c.endPos,this.state={peek:-1,offset:c.startPos,line:c.startLine,column:c.startCol}}}clone(){return new zu(this)}peek(){return this.state.peek}charsLeft(){return this.end-this.state.offset}diff(s){return this.state.offset-s.state.offset}advance(){this.advanceState(this.state)}init(){this.updatePeek(this.state)}getSpan(s,c){s=s||this;let u=s;if(c)for(;this.diff(s)>0&&c.indexOf(s.peek())!==-1;)u===s&&(s=s.clone()),s.advance();let p=this.locationFromCursor(s),f=this.locationFromCursor(this),v=u!==s?this.locationFromCursor(u):p;return new ge(p,f,v)}getChars(s){return this.input.substring(s.state.offset,this.state.offset)}charAt(s){return this.input.charCodeAt(s)}advanceState(s){if(s.offset>=this.end)throw this.state=s,new Vl('Unexpected character "EOF"',this);let c=this.charAt(s.offset);c===10?(s.line++,s.column=0):Rl(c)||s.column++,s.offset++,this.updatePeek(s)}updatePeek(s){s.peek=s.offset>=this.end?0:this.charAt(s.offset)}locationFromCursor(s){return new Pl(s.file,s.state.offset,s.state.line,s.state.column)}},Jv=class qu extends cp{constructor(s,c){s instanceof qu?(super(s),this.internalState=k({},s.internalState)):(super(s,c),this.internalState=this.state)}advance(){this.state=this.internalState,super.advance(),this.processEscapeSequence()}init(){super.init(),this.processEscapeSequence()}clone(){return new qu(this)}getChars(s){let c=s.clone(),u="";for(;c.internalState.offset<this.internalState.offset;)u+=String.fromCodePoint(c.peek()),c.advance();return u}processEscapeSequence(){let s=()=>this.internalState.peek;if(s()===92)if(this.internalState=k({},this.state),this.advanceState(this.internalState),s()===110)this.state.peek=10;else if(s()===114)this.state.peek=13;else if(s()===118)this.state.peek=11;else if(s()===116)this.state.peek=9;else if(s()===98)this.state.peek=8;else if(s()===102)this.state.peek=12;else if(s()===117)if(this.advanceState(this.internalState),s()===123){this.advanceState(this.internalState);let c=this.clone(),u=0;for(;s()!==125;)this.advanceState(this.internalState),u++;this.state.peek=this.decodeHexDigits(c,u)}else{let c=this.clone();this.advanceState(this.internalState),this.advanceState(this.internalState),this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(c,4)}else if(s()===120){this.advanceState(this.internalState);let c=this.clone();this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(c,2)}else if(Nd(s())){let c="",u=0,p=this.clone();for(;Nd(s())&&u<3;)p=this.clone(),c+=String.fromCodePoint(s()),this.advanceState(this.internalState),u++;this.state.peek=parseInt(c,8),this.internalState=p.internalState}else Rl(this.internalState.peek)?(this.advanceState(this.internalState),this.state=this.internalState):this.state.peek=this.internalState.peek}decodeHexDigits(s,c){let u=this.input.slice(s.internalState.offset,s.internalState.offset+c),p=parseInt(u,16);if(isNaN(p))throw s.state=s.internalState,new Vl("Invalid hexadecimal escape sequence",s);return p}},Vl=class{constructor(o,s){this.msg=o,this.cursor=s}},Tt=class rm extends Bd{static create(s,c,u){return new rm(s,c,u)}constructor(s,c,u){super(c,u),this.elementName=s}},ey=class{constructor(o,s){this.rootNodes=o,this.errors=s}},ty=class{constructor(o){this.getTagDefinition=o}parse(o,s,c,u=!1,p){let f=be=>($e,...st)=>be($e.toLowerCase(),...st),v=u?this.getTagDefinition:f(this.getTagDefinition),C=be=>v(be).getContentType(),R=u?p:f(p),K=Hv(o,s,p?(be,$e,st,mt)=>{let _t=R(be,$e,st,mt);return _t!==void 0?_t:C(be)}:C,c),q=c&&c.canSelfClose||!1,Se=c&&c.allowHtmComponentClosingTags||!1,he=new ny(K.tokens,v,q,Se,u);return he.build(),new ey(he.rootNodes,K.errors.concat(he.errors))}},ny=class om{constructor(s,c,u,p,f){this.tokens=s,this.getTagDefinition=c,this.canSelfClose=u,this.allowHtmComponentClosingTags=p,this.isTagNameCaseSensitive=f,this._index=-1,this._containerStack=[],this.rootNodes=[],this.errors=[],this._advance()}build(){for(;this._peek.type!==34;)this._peek.type===0||this._peek.type===4?this._consumeStartTag(this._advance()):this._peek.type===3?(this._closeVoidElement(),this._consumeEndTag(this._advance())):this._peek.type===12?(this._closeVoidElement(),this._consumeCdata(this._advance())):this._peek.type===10?(this._closeVoidElement(),this._consumeComment(this._advance())):this._peek.type===5||this._peek.type===7||this._peek.type===6?(this._closeVoidElement(),this._consumeText(this._advance())):this._peek.type===20?this._consumeExpansion(this._advance()):this._peek.type===25?(this._closeVoidElement(),this._consumeBlockOpen(this._advance())):this._peek.type===27?(this._closeVoidElement(),this._consumeBlockClose(this._advance())):this._peek.type===29?(this._closeVoidElement(),this._consumeIncompleteBlock(this._advance())):this._peek.type===30?(this._closeVoidElement(),this._consumeLet(this._advance())):this._peek.type===18?this._consumeDocType(this._advance()):this._peek.type===33?(this._closeVoidElement(),this._consumeIncompleteLet(this._advance())):this._advance();for(let s of this._containerStack)s instanceof sr&&this.errors.push(Tt.create(s.name,s.sourceSpan,`Unclosed block "${s.name}"`))}_advance(){let s=this._peek;return this._index<this.tokens.length-1&&this._index++,this._peek=this.tokens[this._index],s}_advanceIf(s){return this._peek.type===s?this._advance():null}_consumeCdata(s){let c=this._advance(),u=this._getText(c),p=this._advanceIf(13);this._addToParent(new Fv(u,new ge(s.sourceSpan.start,(p||c).sourceSpan.end),[c]))}_consumeComment(s){let c=this._advanceIf(7),u=this._advanceIf(11),p=c!=null?c.parts[0].trim():null,f=u==null?s.sourceSpan:new ge(s.sourceSpan.start,u.sourceSpan.end,s.sourceSpan.fullStart);this._addToParent(new Ov(p,f))}_consumeDocType(s){let c=this._advanceIf(7),u=this._advanceIf(19),p=c!=null?c.parts[0].trim():null,f=new ge(s.sourceSpan.start,(u||c||s).sourceSpan.end);this._addToParent(new Pv(p,f))}_consumeExpansion(s){let c=this._advance(),u=this._advance(),p=[];for(;this._peek.type===21;){let v=this._parseExpansionCase();if(!v)return;p.push(v)}if(this._peek.type!==24){this.errors.push(Tt.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '}'."));return}let f=new ge(s.sourceSpan.start,this._peek.sourceSpan.end,s.sourceSpan.fullStart);this._addToParent(new Mv(c.parts[0],u.parts[0],p,f,c.sourceSpan)),this._advance()}_parseExpansionCase(){let s=this._advance();if(this._peek.type!==22)return this.errors.push(Tt.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '{'.")),null;let c=this._advance(),u=this._collectExpansionExpTokens(c);if(!u)return null;let p=this._advance();u.push({type:34,parts:[],sourceSpan:p.sourceSpan});let f=new om(u,this.getTagDefinition,this.canSelfClose,this.allowHtmComponentClosingTags,this.isTagNameCaseSensitive);if(f.build(),f.errors.length>0)return this.errors=this.errors.concat(f.errors),null;let v=new ge(s.sourceSpan.start,p.sourceSpan.end,s.sourceSpan.fullStart),C=new ge(c.sourceSpan.start,p.sourceSpan.end,c.sourceSpan.fullStart);return new Lv(s.parts[0],f.rootNodes,v,s.sourceSpan,C)}_collectExpansionExpTokens(s){let c=[],u=[22];for(;;){if((this._peek.type===20||this._peek.type===22)&&u.push(this._peek.type),this._peek.type===23)if(up(u,22)){if(u.pop(),u.length===0)return c}else return this.errors.push(Tt.create(null,s.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===24)if(up(u,20))u.pop();else return this.errors.push(Tt.create(null,s.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===34)return this.errors.push(Tt.create(null,s.sourceSpan,"Invalid ICU message. Missing '}'.")),null;c.push(this._advance())}}_getText(s){let c=s.parts[0];if(c.length>0&&c[0]==`
`){let u=this._getClosestParentElement();u!=null&&u.children.length==0&&this.getTagDefinition(u.name).ignoreFirstLf&&(c=c.substring(1))}return c}_consumeText(s){let c=[s],u=s.sourceSpan,p=s.parts[0];if(p.length>0&&p[0]===`
`){let f=this._getContainer();f!=null&&f.children.length===0&&this.getTagDefinition(f.name).ignoreFirstLf&&(p=p.substring(1),c[0]={type:s.type,sourceSpan:s.sourceSpan,parts:[p]})}for(;this._peek.type===8||this._peek.type===5||this._peek.type===9;)s=this._advance(),c.push(s),s.type===8?p+=s.parts.join("").replace(/&([^;]+);/g,dp):s.type===9?p+=s.parts[0]:p+=s.parts.join("");if(p.length>0){let f=s.sourceSpan;this._addToParent(new kv(p,new ge(u.start,f.end,u.fullStart,u.details),c))}}_closeVoidElement(){let s=this._getContainer();s instanceof Jn&&this.getTagDefinition(s.name).isVoid&&this._containerStack.pop()}_consumeStartTag(s){let[c,u]=s.parts,p=[];for(;this._peek.type===14;)p.push(this._consumeAttr(this._advance()));let f=this._getElementFullName(c,u,this._getClosestParentElement()),v=!1;if(this._peek.type===2){this._advance(),v=!0;let be=this.getTagDefinition(f);this.canSelfClose||be.canSelfClose||Ia(f)!==null||be.isVoid||this.errors.push(Tt.create(f,s.sourceSpan,`Only void, custom and foreign elements can be self closed "${s.parts[1]}"`))}else this._peek.type===1&&(this._advance(),v=!1);let C=this._peek.sourceSpan.fullStart,R=new ge(s.sourceSpan.start,C,s.sourceSpan.fullStart),K=new ge(s.sourceSpan.start,C,s.sourceSpan.fullStart),q=new ge(s.sourceSpan.start.moveBy(1),s.sourceSpan.end),Se=new Jn(f,p,[],R,K,void 0,q),he=this._getContainer();this._pushContainer(Se,he instanceof Jn&&this.getTagDefinition(he.name).isClosedByChild(Se.name)),v?this._popContainer(f,Jn,R):s.type===4&&(this._popContainer(f,Jn,null),this.errors.push(Tt.create(f,R,`Opening tag "${f}" not terminated.`)))}_pushContainer(s,c){c&&this._containerStack.pop(),this._addToParent(s),this._containerStack.push(s)}_consumeEndTag(s){let c=this.allowHtmComponentClosingTags&&s.parts.length===0?null:this._getElementFullName(s.parts[0],s.parts[1],this._getClosestParentElement());if(c&&this.getTagDefinition(c).isVoid)this.errors.push(Tt.create(c,s.sourceSpan,`Void elements do not have end tags "${s.parts[1]}"`));else if(!this._popContainer(c,Jn,s.sourceSpan)){let u=`Unexpected closing tag "${c}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;this.errors.push(Tt.create(c,s.sourceSpan,u))}}_popContainer(s,c,u){let p=!1;for(let f=this._containerStack.length-1;f>=0;f--){let v=this._containerStack[f];if(Ia(v.name)?v.name===s:(s==null||v.name.toLowerCase()===s.toLowerCase())&&v instanceof c)return v.endSourceSpan=u,v.sourceSpan.end=u!==null?u.end:v.sourceSpan.end,this._containerStack.splice(f,this._containerStack.length-f),!p;(v instanceof sr||v instanceof Jn&&!this.getTagDefinition(v.name).closedByParent)&&(p=!0)}return!1}_consumeAttr(s){let c=ka(s.parts[0],s.parts[1]),u=s.sourceSpan.end,p;this._peek.type===15&&(p=this._advance());let f="",v=[],C,R;if(this._peek.type===16)for(C=this._peek.sourceSpan,R=this._peek.sourceSpan.end;this._peek.type===16||this._peek.type===17||this._peek.type===9;){let q=this._advance();v.push(q),q.type===17?f+=q.parts.join("").replace(/&([^;]+);/g,dp):q.type===9?f+=q.parts[0]:f+=q.parts.join(""),R=u=q.sourceSpan.end}this._peek.type===15&&(R=u=this._advance().sourceSpan.end);let K=C&&R&&new ge(p?.sourceSpan.start??C.start,R,p?.sourceSpan.fullStart??C.fullStart);return new Rv(c,f,new ge(s.sourceSpan.start,u,s.sourceSpan.fullStart),s.sourceSpan,K,v.length>0?v:void 0,void 0)}_consumeBlockOpen(s){let c=[];for(;this._peek.type===28;){let C=this._advance();c.push(new ep(C.parts[0],C.sourceSpan))}this._peek.type===26&&this._advance();let u=this._peek.sourceSpan.fullStart,p=new ge(s.sourceSpan.start,u,s.sourceSpan.fullStart),f=new ge(s.sourceSpan.start,u,s.sourceSpan.fullStart),v=new sr(s.parts[0],c,[],p,s.sourceSpan,f);this._pushContainer(v,!1)}_consumeBlockClose(s){this._popContainer(null,sr,s.sourceSpan)||this.errors.push(Tt.create(null,s.sourceSpan,'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'))}_consumeIncompleteBlock(s){let c=[];for(;this._peek.type===28;){let C=this._advance();c.push(new ep(C.parts[0],C.sourceSpan))}let u=this._peek.sourceSpan.fullStart,p=new ge(s.sourceSpan.start,u,s.sourceSpan.fullStart),f=new ge(s.sourceSpan.start,u,s.sourceSpan.fullStart),v=new sr(s.parts[0],c,[],p,s.sourceSpan,f);this._pushContainer(v,!1),this._popContainer(null,sr,null),this.errors.push(Tt.create(s.parts[0],p,`Incomplete block "${s.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`))}_consumeLet(s){let c=s.parts[0],u,p;if(this._peek.type!==31){this.errors.push(Tt.create(s.parts[0],s.sourceSpan,`Invalid @let declaration "${c}". Declaration must have a value.`));return}else u=this._advance();if(this._peek.type!==32){this.errors.push(Tt.create(s.parts[0],s.sourceSpan,`Unterminated @let declaration "${c}". Declaration must be terminated with a semicolon.`));return}else p=this._advance();let f=p.sourceSpan.fullStart,v=new ge(s.sourceSpan.start,f,s.sourceSpan.fullStart),C=s.sourceSpan.toString().lastIndexOf(c),R=s.sourceSpan.start.moveBy(C),K=new ge(R,s.sourceSpan.end),q=new tp(c,u.parts[0],v,K,u.sourceSpan);this._addToParent(q)}_consumeIncompleteLet(s){let c=s.parts[0]??"",u=c?` "${c}"`:"";if(c.length>0){let p=s.sourceSpan.toString().lastIndexOf(c),f=s.sourceSpan.start.moveBy(p),v=new ge(f,s.sourceSpan.end),C=new ge(s.sourceSpan.start,s.sourceSpan.start.moveBy(0)),R=new tp(c,"",s.sourceSpan,v,C);this._addToParent(R)}this.errors.push(Tt.create(s.parts[0],s.sourceSpan,`Incomplete @let declaration${u}. @let declarations must be written as \`@let <name> = <value>;\``))}_getContainer(){return this._containerStack.length>0?this._containerStack[this._containerStack.length-1]:null}_getClosestParentElement(){for(let s=this._containerStack.length-1;s>-1;s--)if(this._containerStack[s]instanceof Jn)return this._containerStack[s];return null}_addToParent(s){let c=this._getContainer();c===null?this.rootNodes.push(s):c.children.push(s)}_getElementFullName(s,c,u){if(s===""&&(s=this.getTagDefinition(c).implicitNamespacePrefix||"",s===""&&u!=null)){let p=Aa(u.name)[1];this.getTagDefinition(p).preventNamespaceInheritance||(s=Ia(u.name))}return ka(s,c)}};function up(o,s){return o.length>0&&o[o.length-1]===s}function dp(o,s){return La[s]!==void 0?La[s]||o:/^#x[a-f0-9]+$/i.test(s)?String.fromCodePoint(parseInt(s.slice(2),16)):/^#\d+$/.test(s)?String.fromCodePoint(parseInt(s.slice(1),10)):o}var iy=class extends ty{constructor(){super(Nl)}parse(o,s,c,u=!1,p){return super.parse(o,s,c,u,p)}},Ul=null,ry=()=>(Ul||(Ul=new iy),Ul);function pp(o,s={}){let{canSelfClose:c=!1,allowHtmComponentClosingTags:u=!1,isTagNameCaseSensitive:p=!1,getTagContentType:f,tokenizeAngularBlocks:v=!1,tokenizeAngularLetDeclaration:C=!1}=s;return ry().parse(o,"angular-html-parser",{tokenizeExpansionForms:v,interpolationConfig:void 0,canSelfClose:c,allowHtmComponentClosingTags:u,tokenizeBlocks:v,tokenizeLet:C},p,f)}function oy(o,s){let c=new SyntaxError(o+" ("+s.loc.start.line+":"+s.loc.start.column+")");return Object.assign(c,s)}var ay=oy,lo=3;function sy(o){let s=o.slice(0,lo);if(s!=="---"&&s!=="+++")return;let c=o.indexOf(`
`,lo);if(c===-1)return;let u=o.slice(lo,c).trim(),p=o.indexOf(`
${s}`,c),f=u;if(f||(f=s==="+++"?"toml":"yaml"),p===-1&&s==="---"&&f==="yaml"&&(p=o.indexOf(`
...`,c)),p===-1)return;let v=p+1+lo,C=o.charAt(v+1);if(!/\s?/u.test(C))return;let R=o.slice(0,v);return{type:"front-matter",language:f,explicitLanguage:u,value:o.slice(c+1,p),startDelimiter:s,endDelimiter:R.slice(-lo),raw:R}}function ly(o){let s=sy(o);if(!s)return{content:o};let{raw:c}=s;return{frontMatter:s,content:U(!1,c,/[^\n]/gu," ")+o.slice(c.length)}}var cy=ly,Oa={attrs:!0,children:!0,cases:!0,expression:!0},hp=new Set(["parent"]),cr,jl,Hl,uy=class sa{constructor(s={}){T(this,cr),m(this,"type"),m(this,"parent");for(let c of new Set([...hp,...Object.keys(s)]))this.setProperty(c,s[c])}setProperty(s,c){if(this[s]!==c){if(s in Oa&&(c=c.map(u=>this.createChild(u))),!hp.has(s)){this[s]=c;return}Object.defineProperty(this,s,{value:c,enumerable:!1,configurable:!0})}}map(s){let c;for(let u in Oa){let p=this[u];if(p){let f=py(p,v=>v.map(s));c!==p&&(c||(c=new sa({parent:this.parent})),c.setProperty(u,f))}}if(c)for(let u in this)u in Oa||(c[u]=this[u]);return s(c||this)}walk(s){for(let c in Oa){let u=this[c];if(u)for(let p=0;p<u.length;p++)u[p].walk(s)}s(this)}createChild(s){let c=s instanceof sa?s.clone():new sa(s);return c.setProperty("parent",this),c}insertChildBefore(s,c){let u=this.$children;u.splice(u.indexOf(s),0,this.createChild(c))}removeChild(s){let c=this.$children;c.splice(c.indexOf(s),1)}replaceChild(s,c){let u=this.$children;u[u.indexOf(s)]=this.createChild(c)}clone(){return new sa(this)}get $children(){return this[w(this,cr,jl)]}set $children(s){this[w(this,cr,jl)]=s}get firstChild(){var s;return(s=this.$children)==null?void 0:s[0]}get lastChild(){return Dn(!0,this.$children,-1)}get prev(){let s=w(this,cr,Hl);return s[s.indexOf(this)-1]}get next(){let s=w(this,cr,Hl);return s[s.indexOf(this)+1]}get rawName(){return this.hasExplicitNamespace?this.fullName:this.name}get fullName(){return this.namespace?this.namespace+":"+this.name:this.name}get attrMap(){return Object.fromEntries(this.attrs.map(s=>[s.fullName,s.value]))}};cr=new WeakSet,jl=function(){return this.type==="angularIcuCase"?"expression":this.type==="angularIcuExpression"?"cases":"children"},Hl=function(){var o;return((o=this.parent)==null?void 0:o.$children)??[]};var dy=uy;function py(o,s){let c=o.map(s);return c.some((u,p)=>u!==o[p])?c:o}var hy=[{regex:/^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su,parse:gy},{regex:/^\[if([^\]]*)\]><!$/u,parse:my},{regex:/^<!\s*\[endif\]$/u,parse:by}];function fy(o,s){if(o.value)for(let{regex:c,parse:u}of hy){let p=o.value.match(c);if(p)return u(o,s,p)}return null}function gy(o,s,c){let[,u,p,f]=c,v=4+u.length,C=o.sourceSpan.start.moveBy(v),R=C.moveBy(f.length),[K,q]=(()=>{try{return[!0,s(f,C).children]}catch{return[!1,[{type:"text",value:f,sourceSpan:new ge(C,R)}]]}})();return{type:"ieConditionalComment",complete:K,children:q,condition:U(!1,p.trim(),/\s+/gu," "),sourceSpan:o.sourceSpan,startSourceSpan:new ge(o.sourceSpan.start,C),endSourceSpan:new ge(R,o.sourceSpan.end)}}function my(o,s,c){let[,u]=c;return{type:"ieConditionalStartComment",condition:U(!1,u.trim(),/\s+/gu," "),sourceSpan:o.sourceSpan}}function by(o){return{type:"ieConditionalEndComment",sourceSpan:o.sourceSpan}}var zl=new Map([["*",new Set(["accesskey","autocapitalize","autofocus","class","contenteditable","dir","draggable","enterkeyhint","hidden","id","inert","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","popover","slot","spellcheck","style","tabindex","title","translate","writingsuggestions"])],["a",new Set(["charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","target","type"])],["applet",new Set(["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"])],["area",new Set(["alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","target","type"])],["audio",new Set(["autoplay","controls","crossorigin","loop","muted","preload","src"])],["base",new Set(["href","target"])],["basefont",new Set(["color","face","size"])],["blockquote",new Set(["cite"])],["body",new Set(["alink","background","bgcolor","link","text","vlink"])],["br",new Set(["clear"])],["button",new Set(["disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","popovertarget","popovertargetaction","type","value"])],["canvas",new Set(["height","width"])],["caption",new Set(["align"])],["col",new Set(["align","char","charoff","span","valign","width"])],["colgroup",new Set(["align","char","charoff","span","valign","width"])],["data",new Set(["value"])],["del",new Set(["cite","datetime"])],["details",new Set(["name","open"])],["dialog",new Set(["open"])],["dir",new Set(["compact"])],["div",new Set(["align"])],["dl",new Set(["compact"])],["embed",new Set(["height","src","type","width"])],["fieldset",new Set(["disabled","form","name"])],["font",new Set(["color","face","size"])],["form",new Set(["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"])],["frame",new Set(["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"])],["frameset",new Set(["cols","rows"])],["h1",new Set(["align"])],["h2",new Set(["align"])],["h3",new Set(["align"])],["h4",new Set(["align"])],["h5",new Set(["align"])],["h6",new Set(["align"])],["head",new Set(["profile"])],["hr",new Set(["align","noshade","size","width"])],["html",new Set(["manifest","version"])],["iframe",new Set(["align","allow","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","loading","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"])],["img",new Set(["align","alt","border","crossorigin","decoding","fetchpriority","height","hspace","ismap","loading","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"])],["input",new Set(["accept","align","alt","autocomplete","checked","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","popovertarget","popovertargetaction","readonly","required","size","src","step","type","usemap","value","width"])],["ins",new Set(["cite","datetime"])],["isindex",new Set(["prompt"])],["label",new Set(["for","form"])],["legend",new Set(["align"])],["li",new Set(["type","value"])],["link",new Set(["as","blocking","charset","color","crossorigin","disabled","fetchpriority","href","hreflang","imagesizes","imagesrcset","integrity","media","referrerpolicy","rel","rev","sizes","target","type"])],["map",new Set(["name"])],["menu",new Set(["compact"])],["meta",new Set(["charset","content","http-equiv","media","name","scheme"])],["meter",new Set(["high","low","max","min","optimum","value"])],["object",new Set(["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","type","typemustmatch","usemap","vspace","width"])],["ol",new Set(["compact","reversed","start","type"])],["optgroup",new Set(["disabled","label"])],["option",new Set(["disabled","label","selected","value"])],["output",new Set(["for","form","name"])],["p",new Set(["align"])],["param",new Set(["name","type","value","valuetype"])],["pre",new Set(["width"])],["progress",new Set(["max","value"])],["q",new Set(["cite"])],["script",new Set(["async","blocking","charset","crossorigin","defer","fetchpriority","integrity","language","nomodule","referrerpolicy","src","type"])],["select",new Set(["autocomplete","disabled","form","multiple","name","required","size"])],["slot",new Set(["name"])],["source",new Set(["height","media","sizes","src","srcset","type","width"])],["style",new Set(["blocking","media","type"])],["table",new Set(["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"])],["tbody",new Set(["align","char","charoff","valign"])],["td",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["template",new Set(["shadowrootclonable","shadowrootdelegatesfocus","shadowrootmode"])],["textarea",new Set(["autocomplete","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","wrap"])],["tfoot",new Set(["align","char","charoff","valign"])],["th",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["thead",new Set(["align","char","charoff","valign"])],["time",new Set(["datetime"])],["tr",new Set(["align","bgcolor","char","charoff","valign"])],["track",new Set(["default","kind","label","src","srclang"])],["ul",new Set(["compact","type"])],["video",new Set(["autoplay","controls","crossorigin","height","loop","muted","playsinline","poster","preload","src","width"])]]),vy=new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]);function yy(o){if(o.type==="block"){if(o.name=U(!1,o.name.toLowerCase(),/\s+/gu," ").trim(),o.type="angularControlFlowBlock",!_l(o.parameters)){delete o.parameters;return}for(let s of o.parameters)s.type="angularControlFlowBlockParameter";o.parameters={type:"angularControlFlowBlockParameters",children:o.parameters,sourceSpan:new ge(o.parameters[0].sourceSpan.start,Dn(!1,o.parameters,-1).sourceSpan.end)}}}function _y(o){o.type==="letDeclaration"&&(o.type="angularLetDeclaration",o.id=o.name,o.init={type:"angularLetDeclarationInitializer",sourceSpan:new ge(o.valueSpan.start,o.valueSpan.end),value:o.value},delete o.name,delete o.value)}function Cy(o){(o.type==="plural"||o.type==="select")&&(o.clause=o.type,o.type="angularIcuExpression"),o.type==="expansionCase"&&(o.type="angularIcuCase")}function fp(o,s,c){let{name:u,canSelfClose:p=!0,normalizeTagName:f=!1,normalizeAttributeName:v=!1,allowHtmComponentClosingTags:C=!1,isTagNameCaseSensitive:R=!1,shouldParseAsRawText:K}=s,{rootNodes:q,errors:Se}=pp(o,{canSelfClose:p,allowHtmComponentClosingTags:C,isTagNameCaseSensitive:R,getTagContentType:K?(...G)=>K(...G)?an.RAW_TEXT:void 0:void 0,tokenizeAngularBlocks:u==="angular"?!0:void 0,tokenizeAngularLetDeclaration:u==="angular"?!0:void 0});if(u==="vue"){if(q.some(rt=>rt.type==="docType"&&rt.value==="html"||rt.type==="element"&&rt.name.toLowerCase()==="html"))return fp(o,ql,c);let G,ve=()=>G??(G=pp(o,{canSelfClose:p,allowHtmComponentClosingTags:C,isTagNameCaseSensitive:R})),lt=rt=>ve().rootNodes.find(({startSourceSpan:At})=>At&&At.start.offset===rt.startSourceSpan.start.offset)??rt;for(let[rt,At]of q.entries()){let{endSourceSpan:ur,startSourceSpan:ky}=At;if(ur===null)Se=ve().errors,q[rt]=lt(At);else if(wy(At,c)){let bp=ve().errors.find(vp=>vp.span.start.offset>ky.start.offset&&vp.span.start.offset<ur.end.offset);bp&&gp(bp),q[rt]=lt(At)}}}Se.length>0&&gp(Se[0]);let he=G=>{let ve=G.name.startsWith(":")?G.name.slice(1).split(":")[0]:null,lt=G.nameSpan.toString(),rt=ve!==null&&lt.startsWith(`${ve}:`),At=rt?lt.slice(ve.length+1):lt;G.name=At,G.namespace=ve,G.hasExplicitNamespace=rt},be=G=>{switch(G.type){case"element":he(G);for(let ve of G.attrs)he(ve),ve.valueSpan?(ve.value=ve.valueSpan.toString(),/["']/u.test(ve.value[0])&&(ve.value=ve.value.slice(1,-1))):ve.value=null;break;case"comment":G.value=G.sourceSpan.toString().slice(4,-3);break;case"text":G.value=G.sourceSpan.toString();break}},$e=(G,ve)=>{let lt=G.toLowerCase();return ve(lt)?lt:G},st=G=>{if(G.type==="element"&&(f&&(!G.namespace||G.namespace===G.tagDefinition.implicitNamespacePrefix||Yr(G))&&(G.name=$e(G.name,ve=>vy.has(ve))),v))for(let ve of G.attrs)ve.namespace||(ve.name=$e(ve.name,lt=>zl.has(G.name)&&(zl.get("*").has(lt)||zl.get(G.name).has(lt))))},mt=G=>{G.sourceSpan&&G.endSourceSpan&&(G.sourceSpan=new ge(G.sourceSpan.start,G.endSourceSpan.end))},_t=G=>{if(G.type==="element"){let ve=Nl(R?G.name:G.name.toLowerCase());!G.namespace||G.namespace===ve.implicitNamespacePrefix||Yr(G)?G.tagDefinition=ve:G.tagDefinition=Nl("")}};return np(new class extends Nv{visitExpansionCase(G,ve){u==="angular"&&this.visitChildren(ve,lt=>{lt(G.expression)})}visit(G){be(G),_t(G),st(G),mt(G)}},q),q}function wy(o,s){var c;if(o.type!=="element"||o.name!=="template")return!1;let u=(c=o.attrs.find(p=>p.name==="lang"))==null?void 0:c.value;return!u||ba(s,{language:u})==="html"}function gp(o){let{msg:s,span:{start:c,end:u}}=o;throw ay(s,{loc:{start:{line:c.line+1,column:c.col+1},end:{line:u.line+1,column:u.col+1}},cause:o})}function mp(o,s,c={},u=!0){let{frontMatter:p,content:f}=u?cy(o):{frontMatter:null,content:o},v=new $d(o,c.filepath),C=new Pl(v,0,0,0),R=C.moveBy(o.length),K={type:"root",sourceSpan:new ge(C,R),children:fp(f,s,c)};if(p){let he=new Pl(v,0,0,0),be=he.moveBy(p.raw.length);p.sourceSpan=new ge(he,be),K.children.unshift(p)}let q=new dy(K),Se=(he,be)=>{let{offset:$e}=be,st=U(!1,o.slice(0,$e),/[^\n\r]/gu," "),mt=mp(st+he,s,c,!1);mt.sourceSpan=new ge(be,Dn(!1,mt.children,-1).sourceSpan.end);let _t=mt.children[0];return _t.length===$e?mt.children.shift():(_t.sourceSpan=new ge(_t.sourceSpan.start.moveBy($e),_t.sourceSpan.end),_t.value=_t.value.slice($e)),mt};return q.walk(he=>{if(he.type==="comment"){let be=fy(he,Se);be&&he.parent.replaceChild(he,be)}yy(he),_y(he),Cy(he)}),q}function co(o){return{parse:(s,c)=>mp(s,o,c),hasPragma:jb,hasIgnorePragma:Hb,astFormat:"html",locStart:Xr,locEnd:Ca}}var ql={name:"html",normalizeTagName:!0,normalizeAttributeName:!0,allowHtmComponentClosingTags:!0},Sy=co(ql),Dy=new Set(["mj-style","mj-raw"]),xy=co(_e(k({},ql),{name:"mjml",shouldParseAsRawText:o=>Dy.has(o)})),Ey=co({name:"angular"}),Ty=co({name:"vue",isTagNameCaseSensitive:!0,shouldParseAsRawText(o,s,c,u){return o.toLowerCase()!=="html"&&!c&&(o!=="template"||u.some(({name:p,value:f})=>p==="lang"&&f!=="html"&&f!==""&&f!==void 0))}}),Ay=co({name:"lwc",canSelfClose:!1}),Iy={html:bv};return h(z)})});var Fe=new se("");var oh=null;function Jt(){return oh}function gc(t){oh??=t}var bo=class{},vo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>D(ah),providedIn:"platform"})}return t})(),mc=new se(""),ah=(()=>{class t extends vo{_location;_history;_doc=D(Fe);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Jt().getBaseHref(this._doc)}onPopState(e){let n=Jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function za(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function ih(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function hn(t){return t&&t[0]!=="?"?`?${t}`:t}var fn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>D(Wa),providedIn:"root"})}return t})(),qa=new se(""),Wa=(()=>{class t extends fn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??D(Fe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return za(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+hn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,a){let l=this.prepareExternalUrl(r+hn(a));this._platformLocation.pushState(e,n,l)}replaceState(e,n,r,a){let l=this.prepareExternalUrl(r+hn(a));this._platformLocation.replaceState(e,n,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Q(vo),Q(qa,8))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ai=(()=>{class t{_subject=new nt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Oy(ih(rh(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+hn(n))}normalize(e){return t.stripTrailingSlash(Ry(this._basePath,rh(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+hn(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+hn(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=hn;static joinWithSlash=za;static stripTrailingSlash=ih;static \u0275fac=function(n){return new(n||t)(Q(fn))};static \u0275prov=F({token:t,factory:()=>Ly(),providedIn:"root"})}return t})();function Ly(){return new ai(Q(fn))}function Ry(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function rh(t){return t.replace(/\/index.html$/,"")}function Oy(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Cc=(()=>{class t extends fn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=za(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,a){let l=this.prepareExternalUrl(r+hn(a))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,l)}replaceState(e,n,r,a){let l=this.prepareExternalUrl(r+hn(a))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Q(vo),Q(qa,8))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var bc=/\s+/,sh=[],We=(()=>{class t{_ngEl;_renderer;initialClasses=sh;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(bc):sh}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(bc):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(bc).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)($(It),$(Zt))};static \u0275dir=ce({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Ga=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},si=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,a,l)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new Ga(r.item,this._ngForOf,-1,-1),l===null?void 0:l);else if(l==null)n.remove(a===null?void 0:a);else if(a!==null){let d=n.get(a);n.move(d,l),lh(d,r)}});for(let r=0,a=n.length;r<a;r++){let d=n.get(r).context;d.index=r,d.count=a,d.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let a=n.get(r.currentIndex);lh(a,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)($(jn),$(ri),$(Jp))};static \u0275dir=ce({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function lh(t,i){t.context.$implicit=i.item}var je=(()=>{class t{_viewContainer;_context=new Ka;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ch(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ch(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)($(jn),$(ri))};static \u0275dir=ce({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Ka=class{$implicit=null;ngIf=null};function ch(t,i){if(t&&!t.createEmbeddedView)throw new fe(2020,!1)}var vc=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,e){this._viewContainerRef=i,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},uh=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),Py=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,r){this.ngSwitch=r,r._addCase(),this._view=new vc(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)($(jn),$(ri),$(uh,9))};static \u0275dir=ce({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})();var vt=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,a]=e.split("."),l=r.indexOf("-")===-1?void 0:Bi.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,a?`${n}${a}`:n,l):this._renderer.removeStyle(this._ngEl.nativeElement,r,l)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)($(It),$(eh),$(Zt))};static \u0275dir=ce({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Je=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)($(jn))};static \u0275dir=ce({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ot]})}return t})();function Ny(t,i){return new fe(2100,!1)}var yc=class{createSubscription(i,e){return Nt(()=>i.subscribe({next:e,error:n=>{throw n}}))}dispose(i){Nt(()=>i.unsubscribe())}},_c=class{createSubscription(i,e){return i.then(n=>e?.(n),n=>{throw n}),{unsubscribe:()=>{e=null}}}dispose(i){i.unsubscribe()}},$y=new _c,By=new yc,Vy=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(fr(e))return $y;if(qp(e))return By;throw Ny(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)($(Pt,16))};static \u0275pipe=Ua({name:"async",type:t,pure:!1})}return t})();var le=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function yo(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,a]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(a)}return null}var Qa="browser",dh="server";function An(t){return t===Qa}function vr(t){return t===dh}var Vi=class{};var hh=(()=>{class t{static \u0275prov=F({token:t,providedIn:"root",factory:()=>new wc(D(Fe),window)})}return t})(),wc=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=jy(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(n-a[0],r-a[1])}};function jy(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let a=r.shadowRoot;if(a){let l=a.getElementById(i)||a.querySelector(`[name="${i}"]`);if(l)return l}r=n.nextNode()}}return null}var Xa=new se(""),Ec=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,a){return this._findPluginFor(n).addEventListener(e,n,r,a)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(a=>a.supports(e)),!n)throw new fe(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(Q(Xa),Q(ft))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),_o=class{_doc;constructor(i){this._doc=i}manager},Ya="ng-app-id";function fh(t){for(let i of t)i.remove()}function gh(t,i){let e=i.createElement("style");return e.textContent=t,e}function Hy(t,i,e,n){let r=t.head?.querySelectorAll(`style[${Ya}="${i}"],link[${Ya}="${i}"]`);if(r)for(let a of r)a.removeAttribute(Ya),a instanceof HTMLLinkElement?n.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&e.set(a.textContent,{usage:0,elements:[a]})}function Dc(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Tc=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,a={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=vr(a),Hy(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,gh);n?.forEach(r=>this.addUsage(r,this.external,Dc))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let a=n.get(e);a?a.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(l=>this.addElement(l,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(fh(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])fh(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,gh(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,Dc(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Ya,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(Q(Fe),Q(tc),Q(nc,8),Q(Yt))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),Sc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ac=/%COMP%/g;var bh="%COMP%",zy=`_nghost-${bh}`,qy=`_ngcontent-${bh}`,Wy=!0,Gy=new se("",{providedIn:"root",factory:()=>Wy});function Ky(t){return qy.replace(Ac,t)}function Qy(t){return zy.replace(Ac,t)}function vh(t,i){return i.map(e=>e.replace(Ac,t))}var Ic=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,a,l,d,h,m=null,y=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=l,this.platformId=d,this.ngZone=h,this.nonce=m,this.tracingService=y,this.platformIsServer=vr(d),this.defaultRenderer=new Co(e,l,h,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===fo.ShadowDom&&(n=_e(k({},n),{encapsulation:fo.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof Za?r.applyToHost(e):r instanceof wo&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,a=r.get(n.id);if(!a){let l=this.doc,d=this.ngZone,h=this.eventManager,m=this.sharedStylesHost,y=this.removeStylesOnCompDestroy,w=this.platformIsServer,T=this.tracingService;switch(n.encapsulation){case fo.Emulated:a=new Za(h,m,n,this.appId,y,l,d,w,T);break;case fo.ShadowDom:return new xc(h,m,e,n,l,d,this.nonce,w,T);default:a=new wo(h,m,n,y,l,d,w,T);break}r.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(Q(Ec),Q(Tc),Q(tc),Q(Gy),Q(Fe),Q(Yt),Q(ft),Q(nc),Q(Fp,8))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),Co=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,a){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Sc[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(mh(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(mh(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new fe(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let a=Sc[r];a?i.setAttributeNS(a,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Sc[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Bi.DashCase|Bi.Important)?i.style.setProperty(e,n,r&Bi.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Bi.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Jt().getGlobalEventTarget(this.doc,i),!i))throw new fe(5102,!1);let a=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(i,e,a)),this.eventManager.addEventListener(i,e,a,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function mh(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var xc=class extends Co{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,r,a,l,d,h,m){super(i,a,l,h,m),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let y=r.styles;y=vh(r.id,y);for(let T of y){let I=document.createElement("style");d&&I.setAttribute("nonce",d),I.textContent=T,this.shadowRoot.appendChild(I)}let w=r.getExternalStyles?.();if(w)for(let T of w){let I=Dc(T,a);d&&I.setAttribute("nonce",d),this.shadowRoot.appendChild(I)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},wo=class extends Co{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,a,l,d,h,m){super(i,a,l,d,h),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let y=n.styles;this.styles=m?vh(m,y):y,this.styleUrls=n.getExternalStyles?.(m)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Za=class extends wo{contentAttr;hostAttr;constructor(i,e,n,r,a,l,d,h,m){let y=r+"-"+n.id;super(i,e,n,a,l,d,h,m,y),this.contentAttr=Ky(y),this.hostAttr=Qy(y)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Ja=class t extends bo{supportsDOMEvents=!0;static makeCurrent(){gc(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Zy();return e==null?null:Xy(e)}resetBaseElement(){So=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return yo(document.cookie,i)}},So=null;function Zy(){return So=So||document.head.querySelector("base"),So?So.getAttribute("href"):null}function Xy(t){return new URL(t,document.baseURI).pathname}var Jy=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),_h=(()=>{class t extends _o{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,a){return e.addEventListener(n,r,a),()=>this.removeEventListener(e,n,r,a)}removeEventListener(e,n,r,a){return e.removeEventListener(n,r,a)}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),yh=["alt","control","meta","shift"],e1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},t1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ch=(()=>{class t extends _o{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,a){let l=t.parseEventName(n),d=t.eventCallback(l.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Jt().onAndCancel(e,l.domEventName,d,a))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let a=t._normalizeKey(n.pop()),l="",d=n.indexOf("code");if(d>-1&&(n.splice(d,1),l="code."),yh.forEach(m=>{let y=n.indexOf(m);y>-1&&(n.splice(y,1),l+=m+".")}),l+=a,n.length!=0||a.length===0)return null;let h={};return h.domEventName=r,h.fullKey=l,h}static matchEventFullKeyCode(e,n){let r=e1[e.key]||e.key,a="";return n.indexOf("code.")>-1&&(r=e.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),yh.forEach(l=>{if(l!==r){let d=t1[l];d(e)&&(a+=l+".")}}),a+=r,a===n)}static eventCallback(e,n,r){return a=>{t.matchEventFullKeyCode(a,e)&&r.runGuarded(()=>n(a))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();function n1(t,i){return th(k({rootComponent:t},i1(i)))}function i1(t){return{appProviders:[...l1,...t?.providers??[]],platformProviders:s1}}function r1(){Ja.makeCurrent()}function o1(){return new ec}function a1(){return Ip(document),document}var s1=[{provide:Yt,useValue:Qa},{provide:kp,useValue:r1,multi:!0},{provide:Fe,useFactory:a1}];var l1=[{provide:Ap,useValue:"root"},{provide:ec,useFactory:o1},{provide:Xa,useClass:_h,multi:!0,deps:[Fe]},{provide:Xa,useClass:Ch,multi:!0,deps:[Fe]},Ic,Tc,Ec,{provide:jp,useExisting:Ic},{provide:Vi,useClass:Jy},[]];var _r=class{},Do=class{},li=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),a=e.slice(n+1).trim();this.addHeaderEntry(r,a)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let a=i.value;if(!a)this.headers.delete(e),this.normalizedNames.delete(e);else{let l=this.headers.get(e);if(!l)return;l=l.filter(d=>a.indexOf(d)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(a=>a.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ts=class{encodeKey(i){return wh(i)}encodeValue(i){return wh(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function c1(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let a=r.indexOf("="),[l,d]=a==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,a)),i.decodeValue(r.slice(a+1))],h=e.get(l)||[];h.push(d),e.set(l,h)}),e}var u1=/%(\d[a-f0-9])/gi,d1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function wh(t){return encodeURIComponent(t).replace(u1,(i,e)=>d1[e]??i)}function es(t){return`${t}`}var Hn=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ts,i.fromString){if(i.fromObject)throw new fe(2805,!1);this.map=c1(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(es):[es(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(a=>{e.push({param:n,value:a,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(es(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(es(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var ns=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function p1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Sh(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Dh(t){return typeof Blob<"u"&&t instanceof Blob}function xh(t){return typeof FormData<"u"&&t instanceof FormData}function h1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Eh="Content-Type",Th="Accept",Ah="X-Request-URL",Ih="text/plain",kh="application/json",f1=`${kh}, ${Ih}, */*`,yr=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let a;if(p1(this.method)||r?(this.body=n!==void 0?n:null,a=r):a=n,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),this.transferCache=a.transferCache),this.headers??=new li,this.context??=new ns,!this.params)this.params=new Hn,this.urlWithParams=e;else{let l=this.params.toString();if(l.length===0)this.urlWithParams=e;else{let d=e.indexOf("?"),h=d===-1?"?":d<e.length-1?"&":"";this.urlWithParams=e+h+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Sh(this.body)||Dh(this.body)||xh(this.body)||h1(this.body)?this.body:this.body instanceof Hn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xh(this.body)?null:Dh(this.body)?this.body.type||null:Sh(this.body)?null:typeof this.body=="string"?Ih:this.body instanceof Hn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?kh:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,a=i.transferCache??this.transferCache,l=i.body!==void 0?i.body:this.body,d=i.withCredentials??this.withCredentials,h=i.reportProgress??this.reportProgress,m=i.headers||this.headers,y=i.params||this.params,w=i.context??this.context;return i.setHeaders!==void 0&&(m=Object.keys(i.setHeaders).reduce((T,I)=>T.set(I,i.setHeaders[I]),m)),i.setParams&&(y=Object.keys(i.setParams).reduce((T,I)=>T.set(I,i.setParams[I]),y)),new t(e,n,l,{params:y,headers:m,context:w,reportProgress:h,responseType:r,withCredentials:d,transferCache:a})}},gn=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(gn||{}),Cr=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new li,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},is=class t extends Cr{constructor(i={}){super(i)}type=gn.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},xo=class t extends Cr{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=gn.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Eo=class extends Cr{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},g1=200,m1=204;function kc(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var os=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let a;if(e instanceof yr)a=e;else{let h;r.headers instanceof li?h=r.headers:h=new li(r.headers);let m;r.params&&(r.params instanceof Hn?m=r.params:m=new Hn({fromObject:r.params})),a=new yr(e,n,r.body!==void 0?r.body:null,{headers:h,context:r.context,params:m,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let l=Z(a).pipe(sn(h=>this.handler.handle(h)));if(e instanceof yr||r.observe==="events")return l;let d=l.pipe(xn(h=>h instanceof xo));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return d.pipe(Ce(h=>{if(h.body!==null&&!(h.body instanceof ArrayBuffer))throw new fe(2806,!1);return h.body}));case"blob":return d.pipe(Ce(h=>{if(h.body!==null&&!(h.body instanceof Blob))throw new fe(2807,!1);return h.body}));case"text":return d.pipe(Ce(h=>{if(h.body!==null&&typeof h.body!="string")throw new fe(2808,!1);return h.body}));case"json":default:return d.pipe(Ce(h=>h.body))}case"response":return d;default:throw new fe(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Hn().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,kc(r,n))}post(e,n,r={}){return this.request("POST",e,kc(r,n))}put(e,n,r={}){return this.request("PUT",e,kc(r,n))}static \u0275fac=function(n){return new(n||t)(Q(_r))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var b1=new se("");function v1(t,i){return i(t)}function y1(t,i,e){return(n,r)=>Qt(e,()=>i(n,a=>t(a,r)))}var Fh=new se(""),Mh=new se(""),Lh=new se("",{providedIn:"root",factory:()=>!0});var rs=(()=>{class t extends _r{backend;injector;chain=null;pendingTasks=D($a);contributeToStability=D(Lh);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Fh),...this.injector.get(Mh,[])]));this.chain=n.reduceRight((r,a)=>y1(r,a,this.injector),v1)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(pr(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(Q(Do),Q(ii))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var _1=/^\)\]\}',?\n/,C1=RegExp(`^${Ah}:`,"m");function w1(t){return"responseURL"in t&&t.responseURL?t.responseURL:C1.test(t.getAllResponseHeaders())?t.getResponseHeader(Ah):null}var Fc=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new fe(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?ct(n.\u0275loadImpl()):Z(null)).pipe(Ct(()=>new Cp(a=>{let l=n.build();if(l.open(e.method,e.urlWithParams),e.withCredentials&&(l.withCredentials=!0),e.headers.forEach((V,U)=>l.setRequestHeader(V,U.join(","))),e.headers.has(Th)||l.setRequestHeader(Th,f1),!e.headers.has(Eh)){let V=e.detectContentTypeHeader();V!==null&&l.setRequestHeader(Eh,V)}if(e.responseType){let V=e.responseType.toLowerCase();l.responseType=V!=="json"?V:"text"}let d=e.serializeBody(),h=null,m=()=>{if(h!==null)return h;let V=l.statusText||"OK",U=new li(l.getAllResponseHeaders()),ye=w1(l)||e.url;return h=new is({headers:U,status:l.status,statusText:V,url:ye}),h},y=()=>{let{headers:V,status:U,statusText:ye,url:Ee}=m(),we=null;U!==m1&&(we=typeof l.response>"u"?l.responseText:l.response),U===0&&(U=we?g1:0);let Ge=U>=200&&U<300;if(e.responseType==="json"&&typeof we=="string"){let Et=we;we=we.replace(_1,"");try{we=we!==""?JSON.parse(we):null}catch(nn){we=Et,Ge&&(Ge=!1,we={error:nn,text:we})}}Ge?(a.next(new xo({body:we,headers:V,status:U,statusText:ye,url:Ee||void 0})),a.complete()):a.error(new Eo({error:we,headers:V,status:U,statusText:ye,url:Ee||void 0}))},w=V=>{let{url:U}=m(),ye=new Eo({error:V,status:l.status||0,statusText:l.statusText||"Unknown Error",url:U||void 0});a.error(ye)},T=!1,I=V=>{T||(a.next(m()),T=!0);let U={type:gn.DownloadProgress,loaded:V.loaded};V.lengthComputable&&(U.total=V.total),e.responseType==="text"&&l.responseText&&(U.partialText=l.responseText),a.next(U)},z=V=>{let U={type:gn.UploadProgress,loaded:V.loaded};V.lengthComputable&&(U.total=V.total),a.next(U)};return l.addEventListener("load",y),l.addEventListener("error",w),l.addEventListener("timeout",w),l.addEventListener("abort",w),e.reportProgress&&(l.addEventListener("progress",I),d!==null&&l.upload&&l.upload.addEventListener("progress",z)),l.send(d),a.next({type:gn.Sent}),()=>{l.removeEventListener("error",w),l.removeEventListener("abort",w),l.removeEventListener("load",y),l.removeEventListener("timeout",w),e.reportProgress&&(l.removeEventListener("progress",I),d!==null&&l.upload&&l.upload.removeEventListener("progress",z)),l.readyState!==l.DONE&&l.abort()}})))}static \u0275fac=function(n){return new(n||t)(Q(Vi))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),Rh=new se(""),S1="XSRF-TOKEN",D1=new se("",{providedIn:"root",factory:()=>S1}),x1="X-XSRF-TOKEN",E1=new se("",{providedIn:"root",factory:()=>x1}),To=class{},T1=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=yo(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(Q(Fe),Q(D1))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();function A1(t,i){let e=t.url.toLowerCase();if(!D(Rh)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=D(To).getToken(),r=D(E1);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),i(t)}function I1(...t){let i=[os,Fc,rs,{provide:_r,useExisting:rs},{provide:Do,useFactory:()=>D(b1,{optional:!0})??D(Fc)},{provide:Fh,useValue:A1,multi:!0},{provide:Rh,useValue:!0},{provide:To,useClass:T1}];for(let e of t)i.push(...e.\u0275providers);return ni(i)}var Oh=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Q(F1),r},providedIn:"root"})}return t})(),F1=(()=>{class t extends Mc{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case $i.NONE:return n;case $i.HTML:return hr(n,"HTML")?Ni(n):Bp(this._doc,String(n)).toString();case $i.STYLE:return hr(n,"Style")?Ni(n):n;case $i.SCRIPT:if(hr(n,"Script"))return Ni(n);throw new fe(5200,!1);case $i.URL:return hr(n,"URL")?Ni(n):$p(String(n));case $i.RESOURCE_URL:if(hr(n,"ResourceURL"))return Ni(n);throw new fe(5201,!1);default:throw new fe(5202,!1)}}bypassSecurityTrustHtml(e){return Lp(e)}bypassSecurityTrustStyle(e){return Rp(e)}bypassSecurityTrustScript(e){return Op(e)}bypassSecurityTrustUrl(e){return Pp(e)}bypassSecurityTrustResourceUrl(e){return Np(e)}static \u0275fac=function(n){return new(n||t)(Q(Fe))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wr=class{},Ph=(()=>{class t extends wr{getTranslation(e){return Z({})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),Io=class{},Nh=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();function ss(t,i){if(t===i)return!0;if(t===null||i===null)return!1;if(t!==t&&i!==i)return!0;let e=typeof t,n=typeof i,r,a,l;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(i))return!1;if((r=t.length)==i.length){for(a=0;a<r;a++)if(!ss(t[a],i[a]))return!1;return!0}}else{if(Array.isArray(i))return!1;l=Object.create(null);for(a in t){if(!ss(t[a],i[a]))return!1;l[a]=!0}for(a in i)if(!(a in l)&&typeof i[a]<"u")return!1;return!0}return!1}function ci(t){return typeof t<"u"&&t!==null}function Fo(t){return as(t)&&!Bc(t)&&t!==null}function as(t){return typeof t=="object"}function Bc(t){return Array.isArray(t)}function Vc(t){return typeof t=="string"}function L1(t){return typeof t=="function"}function Lc(t,i){let e=Object.assign({},t);return as(t)?(as(t)&&as(i)&&Object.keys(i).forEach(n=>{Fo(i[n])?n in t?e[n]=Lc(t[n],i[n]):Object.assign(e,{[n]:i[n]}):Object.assign(e,{[n]:i[n]})}),e):Lc({},i)}function Rc(t,i){let e=i.split(".");i="";do i+=e.shift(),ci(t)&&ci(t[i])&&(Fo(t[i])||Bc(t[i])||!e.length)?(t=t[i],i=""):e.length?i+=".":t=void 0;while(e.length);return t}function R1(t,i,e){let n=i.split("."),r=t;for(let a=0;a<n.length;a++){let l=n[a];a===n.length-1?r[l]=e:((!r[l]||!Fo(r[l]))&&(r[l]={}),r=r[l])}}var Sr=class{},$h=(()=>{class t extends Sr{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(Vc(e))return this.interpolateString(e,n);if(L1(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(r,a)=>{let l=Rc(n,a);return ci(l)?l:r}):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),Dr=class{},Bh=(()=>{class t extends Dr{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),ko=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new W;onLangChange=new W;onDefaultLangChange=new W},Oc=new se("ISOLATE_TRANSLATE_SERVICE"),Pc=new se("USE_DEFAULT_LANG"),Nc=new se("DEFAULT_LANGUAGE"),$c=new se("USE_EXTEND"),Ao=t=>ei(t)?t:Z(t),zn=(()=>{class t{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,n,r,a,l,d=!0,h=!1,m=!1,y){this.store=e,this.currentLoader=n,this.compiler=r,this.parser=a,this.missingTranslationHandler=l,this.useDefaultLang=d,this.extend=m,h&&(this.store=new ko),y&&this.setDefaultLang(y)}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=e),n.pipe(ln(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return Z(this.translations[e]);this.currentLang||(this.currentLang=e);let n=this.retrieveTranslations(e);return ei(n)?(n.pipe(ln(1)).subscribe(()=>{this.changeLang(e)}),n):(this.changeLang(e),Z(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(Yl(1),ln(1));return this.loadingTranslations=n.pipe(Ce(r=>this.compiler.compileTranslations(r,e)),Yl(1),ln(1)),this.loadingTranslations.subscribe({next:r=>{this.translations[e]=this.extend&&this.translations[e]?k(k({},r),this.translations[e]):r,this.updateLangs(),this.pending=!1},error:r=>{this.pending=!1}}),n}setTranslation(e,n,r=!1){let a=this.compiler.compileTranslations(n,e);(r||this.extend)&&this.translations[e]?this.translations[e]=Lc(this.translations[e],a):this.translations[e]=a,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let n=e.filter(r=>!this.langs.includes(r));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,n,r){let a;if(e&&(a=this.runInterpolation(Rc(e,n),r)),a===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(a=this.runInterpolation(Rc(this.translations[this.defaultLang],n),r)),a===void 0){let l={key:n,translateService:this};typeof r<"u"&&(l.interpolateParams=r),a=this.missingTranslationHandler.handle(l)}return a!==void 0?a:n}runInterpolation(e,n){if(Bc(e))return e.map(r=>this.runInterpolation(r,n));if(Fo(e)){let r={};for(let a in e){let l=this.runInterpolation(e[a],n);l!==void 0&&(r[a]=l)}return r}else return this.parser.interpolate(e,n)}getParsedResult(e,n,r){if(n instanceof Array){let a={},l=!1;for(let h of n)a[h]=this.getParsedResultForKey(e,h,r),l=l||ei(a[h]);if(!l)return a;let d=n.map(h=>Ao(a[h]));return Na(d).pipe(Ce(h=>{let m={};return h.forEach((y,w)=>{m[n[w]]=y}),m}))}return this.getParsedResultForKey(e,n,r)}get(e,n){if(!ci(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(sn(r=>Ao(this.getParsedResult(r,e,n)))):Ao(this.getParsedResult(this.translations[this.currentLang],e,n))}getStreamOnTranslationChange(e,n){if(!ci(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return ho(dr(()=>this.get(e,n)),this.onTranslationChange.pipe(Ct(r=>{let a=this.getParsedResult(r.translations,e,n);return Ao(a)})))}stream(e,n){if(!ci(e)||!e.length)throw new Error('Parameter "key" required');return ho(dr(()=>this.get(e,n)),this.onLangChange.pipe(Ct(r=>{let a=this.getParsedResult(r.translations,e,n);return Ao(a)})))}instant(e,n){if(!ci(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let r=this.getParsedResult(this.translations[this.currentLang],e,n);return ei(r)?Array.isArray(e)?e.reduce((a,l)=>(a[l]=l,a),{}):e:r}set(e,n,r=this.currentLang){R1(this.translations[r],e,Vc(n)?this.compiler.compile(n,r):this.compiler.compileTranslations(n,r)),this.updateLangs(),this.onTranslationChange.emit({lang:r,translations:this.translations[r]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||t)(Q(ko),Q(wr),Q(Dr),Q(Sr),Q(Io),Q(Pc),Q(Oc),Q($c),Q(Nc))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ui=(()=>{class t{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,n){this.translate=e,this._ref=n}updateValue(e,n,r){let a=l=>{this.value=l!==void 0?l:e,this.lastKey=e,this._ref.markForCheck()};if(r){let l=this.translate.getParsedResult(r,e,n);ei(l)?l.subscribe(a):a(l)}this.translate.get(e,n).subscribe(a)}transform(e,...n){if(!e||!e.length)return e;if(ss(e,this.lastKey)&&ss(n,this.lastParams))return this.value;let r;if(ci(n[0])&&n.length)if(Vc(n[0])&&n[0].length){let a=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{r=JSON.parse(a)}catch(l){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else Fo(n[0])&&(r=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,r),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(a=>{this.lastKey&&a.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,r,a.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(a=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r,a.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,r))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)($(zn,16),$(Pt,16))};static \u0275pipe=Ua({name:"translate",type:t,pure:!1});static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var di=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[e.loader||{provide:wr,useClass:Ph},e.compiler||{provide:Dr,useClass:Bh},e.parser||{provide:Sr,useClass:$h},e.missingTranslationHandler||{provide:Io,useClass:Nh},ko,{provide:Oc,useValue:e.isolate},{provide:Pc,useValue:e.useDefaultLang},{provide:$c,useValue:e.extend},{provide:Nc,useValue:e.defaultLanguage},zn]}}static forChild(e={}){return{ngModule:t,providers:[e.loader||{provide:wr,useClass:Ph},e.compiler||{provide:Dr,useClass:Bh},e.parser||{provide:Sr,useClass:$h},e.missingTranslationHandler||{provide:Io,useClass:Nh},{provide:Oc,useValue:e.isolate},{provide:Pc,useValue:e.useDefaultLang},{provide:$c,useValue:e.extend},{provide:Nc,useValue:e.defaultLanguage},zn]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var de="primary",zo=Symbol("RouteTitle"),qc=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Hi(t){return new qc(t)}function Gh(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let r={};for(let a=0;a<n.length;a++){let l=n[a],d=t[a];if(l[0]===":")r[l.substring(1)]=d;else if(l!==d.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function O1(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!In(t[e],i[e]))return!1;return!0}function In(t,i){let e=t?Wc(t):void 0,n=i?Wc(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!Kh(t[r],i[r]))return!1;return!0}function Wc(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Kh(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,a)=>n[a]===r)}else return t===i}function Qh(t){return t.length>0?t[t.length-1]:null}function mi(t){return ei(t)?t:fr(t)?ct(Promise.resolve(t)):Z(t)}var P1={exact:Zh,subset:Xh},Yh={exact:N1,subset:$1,ignored:()=>!0};function Vh(t,i,e){return P1[e.paths](t.root,i.root,e.matrixParams)&&Yh[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function N1(t,i){return In(t,i)}function Zh(t,i,e){if(!Ui(t.segments,i.segments)||!ds(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Zh(t.children[n],i.children[n],e))return!1;return!0}function $1(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Kh(t[e],i[e]))}function Xh(t,i,e){return Jh(t,i,i.segments,e)}function Jh(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Ui(r,e)||i.hasChildren()||!ds(r,e,n))}else if(t.segments.length===e.length){if(!Ui(t.segments,e)||!ds(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Xh(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),a=e.slice(t.segments.length);return!Ui(t.segments,r)||!ds(t.segments,r,n)||!t.children[de]?!1:Jh(t.children[de],i,a,n)}}function ds(t,i,e){return i.every((n,r)=>Yh[e](t[r].parameters,n.parameters))}var Fn=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Ie([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Hi(this.queryParams),this._queryParamMap}toString(){return U1.serialize(this)}},Ie=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ps(this)}},pi=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Hi(this.parameters),this._parameterMap}toString(){return tf(this)}};function B1(t,i){return Ui(t,i)&&t.every((e,n)=>In(e.parameters,i[n].parameters))}function Ui(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function V1(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===de&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==de&&(e=e.concat(i(r,n)))}),e}var zi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>new hi,providedIn:"root"})}return t})(),hi=class{parse(i){let e=new Kc(i);return new Fn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Mo(i.root,!0)}`,n=z1(i.queryParams),r=typeof i.fragment=="string"?`#${j1(i.fragment)}`:"";return`${e}${n}${r}`}},U1=new hi;function ps(t){return t.segments.map(i=>tf(i)).join("/")}function Mo(t,i){if(!t.hasChildren())return ps(t);if(i){let e=t.children[de]?Mo(t.children[de],!1):"",n=[];return Object.entries(t.children).forEach(([r,a])=>{r!==de&&n.push(`${r}:${Mo(a,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=V1(t,(n,r)=>r===de?[Mo(t.children[de],!1)]:[`${r}:${Mo(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[de]!=null?`${ps(t)}/${e[0]}`:`${ps(t)}/(${e.join("//")})`}}function ef(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function cs(t){return ef(t).replace(/%3B/gi,";")}function j1(t){return encodeURI(t)}function Gc(t){return ef(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function hs(t){return decodeURIComponent(t)}function Uh(t){return hs(t.replace(/\+/g,"%20"))}function tf(t){return`${Gc(t.path)}${H1(t.parameters)}`}function H1(t){return Object.entries(t).map(([i,e])=>`;${Gc(i)}=${Gc(e)}`).join("")}function z1(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${cs(e)}=${cs(r)}`).join("&"):`${cs(e)}=${cs(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var q1=/^[^\/()?;#]+/;function Uc(t){let i=t.match(q1);return i?i[0]:""}var W1=/^[^\/()?;=#]+/;function G1(t){let i=t.match(W1);return i?i[0]:""}var K1=/^[^=?&#]+/;function Q1(t){let i=t.match(K1);return i?i[0]:""}var Y1=/^[^&#]+/;function Z1(t){let i=t.match(Y1);return i?i[0]:""}var Kc=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ie([],{}):new Ie([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[de]=new Ie(i,e)),n}parseSegment(){let i=Uc(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new fe(4009,!1);return this.capture(i),new pi(hs(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=G1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Uc(this.remaining);r&&(n=r,this.capture(n))}i[hs(e)]=hs(n)}parseQueryParam(i){let e=Q1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let l=Z1(this.remaining);l&&(n=l,this.capture(n))}let r=Uh(e),a=Uh(n);if(i.hasOwnProperty(r)){let l=i[r];Array.isArray(l)||(l=[l],i[r]=l),l.push(a)}else i[r]=a}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Uc(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new fe(4010,!1);let a;n.indexOf(":")>-1?(a=n.slice(0,n.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=de);let l=this.parseChildren();e[a]=Object.keys(l).length===1?l[de]:new Ie([],l),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new fe(4011,!1)}};function nf(t){return t.segments.length>0?new Ie([],{[de]:t}):t}function rf(t){let i={};for(let[n,r]of Object.entries(t.children)){let a=rf(r);if(n===de&&a.segments.length===0&&a.hasChildren())for(let[l,d]of Object.entries(a.children))i[l]=d;else(a.segments.length>0||a.hasChildren())&&(i[n]=a)}let e=new Ie(t.segments,i);return X1(e)}function X1(t){if(t.numberOfChildren===1&&t.children[de]){let i=t.children[de];return new Ie(t.segments.concat(i.segments),i.children)}return t}function fi(t){return t instanceof Fn}function of(t,i,e=null,n=null){let r=af(t);return sf(r,i,e,n)}function af(t){let i;function e(a){let l={};for(let h of a.children){let m=e(h);l[h.outlet]=m}let d=new Ie(a.url,l);return a===t&&(i=d),d}let n=e(t.root),r=nf(n);return i??r}function sf(t,i,e,n){let r=t;for(;r.parent;)r=r.parent;if(i.length===0)return jc(r,r,r,e,n);let a=J1(i);if(a.toRoot())return jc(r,r,new Ie([],{}),e,n);let l=e_(a,r,t),d=l.processChildren?Ro(l.segmentGroup,l.index,a.commands):cf(l.segmentGroup,l.index,a.commands);return jc(r,l.segmentGroup,d,e,n)}function gs(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Po(t){return typeof t=="object"&&t!=null&&t.outlets}function jc(t,i,e,n,r){let a={};n&&Object.entries(n).forEach(([h,m])=>{a[h]=Array.isArray(m)?m.map(y=>`${y}`):`${m}`});let l;t===i?l=e:l=lf(t,i,e);let d=nf(rf(l));return new Fn(d,a,r)}function lf(t,i,e){let n={};return Object.entries(t.children).forEach(([r,a])=>{a===i?n[r]=e:n[r]=lf(a,i,e)}),new Ie(t.segments,n)}var ms=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&gs(n[0]))throw new fe(4003,!1);let r=n.find(Po);if(r&&r!==Qh(n))throw new fe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function J1(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new ms(!0,0,t);let i=0,e=!1,n=t.reduce((r,a,l)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let d={};return Object.entries(a.outlets).forEach(([h,m])=>{d[h]=typeof m=="string"?m.split("/"):m}),[...r,{outlets:d}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:l===0?(a.split("/").forEach((d,h)=>{h==0&&d==="."||(h==0&&d===""?e=!0:d===".."?i++:d!=""&&r.push(d))}),r):[...r,a]},[]);return new ms(e,i,n)}var Tr=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function e_(t,i,e){if(t.isAbsolute)return new Tr(i,!0,0);if(!e)return new Tr(i,!1,NaN);if(e.parent===null)return new Tr(e,!0,0);let n=gs(t.commands[0])?0:1,r=e.segments.length-1+n;return t_(e,r,t.numberOfDoubleDots)}function t_(t,i,e){let n=t,r=i,a=e;for(;a>r;){if(a-=r,n=n.parent,!n)throw new fe(4005,!1);r=n.segments.length}return new Tr(n,!1,r-a)}function n_(t){return Po(t[0])?t[0].outlets:{[de]:t}}function cf(t,i,e){if(t??=new Ie([],{}),t.segments.length===0&&t.hasChildren())return Ro(t,i,e);let n=i_(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let a=new Ie(t.segments.slice(0,n.pathIndex),{});return a.children[de]=new Ie(t.segments.slice(n.pathIndex),t.children),Ro(a,0,r)}else return n.match&&r.length===0?new Ie(t.segments,{}):n.match&&!t.hasChildren()?Qc(t,i,e):n.match?Ro(t,0,r):Qc(t,i,e)}function Ro(t,i,e){if(e.length===0)return new Ie(t.segments,{});{let n=n_(e),r={};if(Object.keys(n).some(a=>a!==de)&&t.children[de]&&t.numberOfChildren===1&&t.children[de].segments.length===0){let a=Ro(t.children[de],i,e);return new Ie(t.segments,a.children)}return Object.entries(n).forEach(([a,l])=>{typeof l=="string"&&(l=[l]),l!==null&&(r[a]=cf(t.children[a],i,l))}),Object.entries(t.children).forEach(([a,l])=>{n[a]===void 0&&(r[a]=l)}),new Ie(t.segments,r)}}function i_(t,i,e){let n=0,r=i,a={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return a;let l=t.segments[r],d=e[n];if(Po(d))break;let h=`${d}`,m=n<e.length-1?e[n+1]:null;if(r>0&&h===void 0)break;if(h&&m&&typeof m=="object"&&m.outlets===void 0){if(!Hh(h,m,l))return a;n+=2}else{if(!Hh(h,{},l))return a;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Qc(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let a=e[r];if(Po(a)){let h=r_(a.outlets);return new Ie(n,h)}if(r===0&&gs(e[0])){let h=t.segments[i];n.push(new pi(h.path,jh(e[0]))),r++;continue}let l=Po(a)?a.outlets[de]:`${a}`,d=r<e.length-1?e[r+1]:null;l&&d&&gs(d)?(n.push(new pi(l,jh(d))),r+=2):(n.push(new pi(l,{})),r++)}return new Ie(n,{})}function r_(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Qc(new Ie([],{}),0,n))}),i}function jh(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Hh(t,i,e){return t==e.path&&In(i,e.parameters)}var fs="imperative",dt=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(dt||{}),Bt=class{id;url;constructor(i,e){this.id=i,this.url=e}},gi=class extends Bt{type=dt.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Vt=class extends Bt{urlAfterRedirects;type=dt.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ot=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(Ot||{}),Ir=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Ir||{}),kn=class extends Bt{reason;code;type=dt.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Mn=class extends Bt{reason;code;type=dt.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},kr=class extends Bt{error;target;type=dt.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},No=class extends Bt{urlAfterRedirects;state;type=dt.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bs=class extends Bt{urlAfterRedirects;state;type=dt.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vs=class extends Bt{urlAfterRedirects;state;shouldActivate;type=dt.GuardsCheckEnd;constructor(i,e,n,r,a){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ys=class extends Bt{urlAfterRedirects;state;type=dt.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_s=class extends Bt{urlAfterRedirects;state;type=dt.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cs=class{route;type=dt.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ws=class{route;type=dt.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ss=class{snapshot;type=dt.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ds=class{snapshot;type=dt.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xs=class{snapshot;type=dt.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Es=class{snapshot;type=dt.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fr=class{routerEvent;position;anchor;type=dt.Scroll;constructor(i,e,n){this.routerEvent=i,this.position=e,this.anchor=n}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},$o=class{},Mr=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function o_(t,i){return t.providers&&!t._injector&&(t._injector=Va(t.providers,i,`Route: ${t.path}`)),t._injector??i}function mn(t){return t.outlet||de}function a_(t,i){let e=t.filter(n=>mn(n)===i);return e.push(...t.filter(n=>mn(n)!==i)),e}function qo(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Ts=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return qo(this.route?.snapshot)??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new qi(this.rootInjector)}},qi=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Ts(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(Q(ii))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),As=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Yc(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=Yc(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Zc(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Zc(i,this._root).map(e=>e.value)}};function Yc(t,i){if(t===i.value)return i;for(let e of i.children){let n=Yc(t,e);if(n)return n}return null}function Zc(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Zc(t,e);if(n.length)return n.unshift(i),n}return[]}var $t=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Er(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var Bo=class extends As{snapshot;constructor(i,e){super(i),this.snapshot=e,ou(this,i)}toString(){return this.snapshot.toString()}};function uf(t){let i=s_(t),e=new Kt([new pi("",{})]),n=new Kt({}),r=new Kt({}),a=new Kt({}),l=new Kt(""),d=new Ln(e,n,a,l,r,de,t,i.root);return d.snapshot=i.root,new Bo(new $t(d,[]),i)}function s_(t){let i={},e={},n={},r="",a=new ji([],i,n,r,e,de,t,null,{});return new Vo("",new $t(a,[]))}var Ln=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,a,l,d,h){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=a,this.outlet=l,this.component=d,this._futureSnapshot=h,this.title=this.dataSubject?.pipe(Ce(m=>m[zo]))??Z(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ce(i=>Hi(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ce(i=>Hi(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Is(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:k(k({},i.params),t.params),data:k(k({},i.data),t.data),resolve:k(k(k(k({},t.data),i.data),r?.data),t._resolvedData)}:n={params:k({},t.params),data:k({},t.data),resolve:k(k({},t.data),t._resolvedData??{})},r&&pf(r)&&(n.resolve[zo]=r.title),n}var ji=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[zo]}constructor(i,e,n,r,a,l,d,h,m){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=a,this.outlet=l,this.component=d,this.routeConfig=h,this._resolve=m}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Hi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Hi(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Vo=class extends As{url;constructor(i,e){super(e),this.url=i,ou(this,e)}toString(){return df(this._root)}};function ou(t,i){i.value._routerState=t,i.children.forEach(e=>ou(t,e))}function df(t){let i=t.children.length>0?` { ${t.children.map(df).join(", ")} } `:"";return`${t.value}${i}`}function Hc(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,In(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),In(i.params,e.params)||t.paramsSubject.next(e.params),O1(i.url,e.url)||t.urlSubject.next(e.url),In(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Xc(t,i){let e=In(t.params,i.params)&&B1(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||Xc(t.parent,i.parent))}function pf(t){return typeof t.title=="string"||t.title===null}var hf=new se(""),au=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=de;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=Rt(void 0);parentContexts=D(qi);location=D(jn);changeDetector=D(Pt);inputBinder=D(Wo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new fe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new fe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new fe(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new fe(4013,!1);this._activatedRoute=e;let r=this.location,l=e.snapshot.component,d=this.parentContexts.getOrCreateContext(this.name).children,h=new Jc(e,d,r.injector,this.routerOutletData);this.activated=r.createComponent(l,{index:r.length,injector:h,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ot]})}return t})(),Jc=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===Ln?this.route:i===qi?this.childContexts:i===hf?this.outletData:this.parent.get(i,e)}},Wo=new se(""),su=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=Pa([n.queryParams,n.params,n.data]).pipe(Ct(([a,l,d],h)=>(d=k(k(k({},a),l),d),h===0?Z(d):Promise.resolve(d)))).subscribe(a=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let l=nh(n.component);if(!l){this.unsubscribeFromRouteData(e);return}for(let{templateName:d}of l.inputs)e.activatedComponentRef.setInput(d,a[d])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),lu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=P({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&L(0,"router-outlet")},dependencies:[au],encapsulation:2})}return t})();function cu(t){let i=t.children&&t.children.map(cu),e=i?_e(k({},t),{children:i}):k({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==de&&(e.component=lu),e}function l_(t,i,e){let n=Uo(t,i._root,e?e._root:void 0);return new Bo(n,i)}function Uo(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=c_(t,i,e);return new $t(n,r)}else{if(t.shouldAttach(i.value)){let a=t.retrieve(i.value);if(a!==null){let l=a.route;return l.value._futureSnapshot=i.value,l.children=i.children.map(d=>Uo(t,d)),l}}let n=u_(i.value),r=i.children.map(a=>Uo(t,a));return new $t(n,r)}}function c_(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Uo(t,n,r);return Uo(t,n)})}function u_(t){return new Ln(new Kt(t.url),new Kt(t.params),new Kt(t.queryParams),new Kt(t.fragment),new Kt(t.data),t.outlet,t.component,t)}var Lr=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},ff="ngNavigationCancelingError";function ks(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=fi(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=gf(!1,Ot.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function gf(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ff]=!0,e.cancellationCode=i,e}function d_(t){return mf(t)&&fi(t.url)}function mf(t){return!!t&&t[ff]}var p_=(t,i,e,n)=>Ce(r=>(new eu(i,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),eu=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,a){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=a}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Hc(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=Er(e);i.children.forEach(a=>{let l=a.value.outlet;this.deactivateRoutes(a,r[l],n),delete r[l]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,n)})}deactivateRoutes(i,e,n){let r=i.value,a=e?e.value:null;if(r===a)if(r.component){let l=n.getContext(r.outlet);l&&this.deactivateChildRoutes(i,e,l.children)}else this.deactivateChildRoutes(i,e,n);else a&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,a=Er(i);for(let l of Object.values(a))this.deactivateRouteAndItsChildren(l,r);if(n&&n.outlet){let l=n.outlet.detach(),d=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:l,route:i,contexts:d})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,a=Er(i);for(let l of Object.values(a))this.deactivateRouteAndItsChildren(l,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=Er(e);i.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],n),this.forwardEvent(new Es(a.value.snapshot))}),i.children.length&&this.forwardEvent(new Ds(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,a=e?e.value:null;if(Hc(r),r===a)if(r.component){let l=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,l.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let l=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let d=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),l.children.onOutletReAttached(d.contexts),l.attachRef=d.componentRef,l.route=d.route.value,l.outlet&&l.outlet.attach(d.componentRef,d.route.value),Hc(d.route.value),this.activateChildRoutes(i,null,l.children)}else l.attachRef=null,l.route=r,l.outlet&&l.outlet.activateWith(r,l.injector),this.activateChildRoutes(i,null,l.children)}else this.activateChildRoutes(i,null,n)}},Fs=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Ar=class{component;route;constructor(i,e){this.component=i,this.route=e}};function h_(t,i,e){let n=t._root,r=i?i._root:null;return Lo(n,r,e,[n.value])}function f_(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Or(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!Tp(t)?t:i.get(t):n}function Lo(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=Er(i);return t.children.forEach(l=>{g_(l,a[l.value.outlet],e,n.concat([l.value]),r),delete a[l.value.outlet]}),Object.entries(a).forEach(([l,d])=>Oo(d,e.getContext(l),r)),r}function g_(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=t.value,l=i?i.value:null,d=e?e.getContext(t.value.outlet):null;if(l&&a.routeConfig===l.routeConfig){let h=m_(l,a,a.routeConfig.runGuardsAndResolvers);h?r.canActivateChecks.push(new Fs(n)):(a.data=l.data,a._resolvedData=l._resolvedData),a.component?Lo(t,i,d?d.children:null,n,r):Lo(t,i,e,n,r),h&&d&&d.outlet&&d.outlet.isActivated&&r.canDeactivateChecks.push(new Ar(d.outlet.component,l))}else l&&Oo(i,d,r),r.canActivateChecks.push(new Fs(n)),a.component?Lo(t,null,d?d.children:null,n,r):Lo(t,null,e,n,r);return r}function m_(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!Ui(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Ui(t.url,i.url)||!In(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Xc(t,i)||!In(t.queryParams,i.queryParams);case"paramsChange":default:return!Xc(t,i)}}function Oo(t,i,e){let n=Er(t),r=t.value;Object.entries(n).forEach(([a,l])=>{r.component?i?Oo(l,i.children.getContext(a),e):Oo(l,null,e):Oo(l,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Ar(i.outlet.component,r)):e.canDeactivateChecks.push(new Ar(null,r)):e.canDeactivateChecks.push(new Ar(null,r))}function Go(t){return typeof t=="function"}function b_(t){return typeof t=="boolean"}function v_(t){return t&&Go(t.canLoad)}function y_(t){return t&&Go(t.canActivate)}function __(t){return t&&Go(t.canActivateChild)}function C_(t){return t&&Go(t.canDeactivate)}function w_(t){return t&&Go(t.canMatch)}function bf(t){return t instanceof wp||t?.name==="EmptyError"}var us=Symbol("INITIAL_VALUE");function Rr(){return Ct(t=>Pa(t.map(i=>i.pipe(ln(1),xp(us)))).pipe(Ce(i=>{for(let e of i)if(e!==!0){if(e===us)return us;if(e===!1||S_(e))return e}return!0}),xn(i=>i!==us),ln(1)))}function S_(t){return fi(t)||t instanceof Lr}function D_(t,i){return Lt(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:a,canDeactivateChecks:l}}=e;return l.length===0&&a.length===0?Z(_e(k({},e),{guardsResult:!0})):x_(l,n,r,t).pipe(Lt(d=>d&&b_(d)?E_(n,a,t,i):Z(d)),Ce(d=>_e(k({},e),{guardsResult:d})))})}function x_(t,i,e,n){return ct(t).pipe(Lt(r=>F_(r.component,r.route,e,i,n)),ti(r=>r!==!0,!0))}function E_(t,i,e,n){return ct(i).pipe(sn(r=>ho(A_(r.route.parent,n),T_(r.route,n),k_(t,r.path,e),I_(t,r.route,e))),ti(r=>r!==!0,!0))}function T_(t,i){return t!==null&&i&&i(new xs(t)),Z(!0)}function A_(t,i){return t!==null&&i&&i(new Ss(t)),Z(!0)}function I_(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return Z(!0);let r=n.map(a=>dr(()=>{let l=qo(i)??e,d=Or(a,l),h=y_(d)?d.canActivate(i,t):Qt(l,()=>d(i,t));return mi(h).pipe(ti())}));return Z(r).pipe(Rr())}function k_(t,i,e){let n=i[i.length-1],a=i.slice(0,i.length-1).reverse().map(l=>f_(l)).filter(l=>l!==null).map(l=>dr(()=>{let d=l.guards.map(h=>{let m=qo(l.node)??e,y=Or(h,m),w=__(y)?y.canActivateChild(n,t):Qt(m,()=>y(n,t));return mi(w).pipe(ti())});return Z(d).pipe(Rr())}));return Z(a).pipe(Rr())}function F_(t,i,e,n,r){let a=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!a||a.length===0)return Z(!0);let l=a.map(d=>{let h=qo(i)??r,m=Or(d,h),y=C_(m)?m.canDeactivate(t,i,e,n):Qt(h,()=>m(t,i,e,n));return mi(y).pipe(ti())});return Z(l).pipe(Rr())}function M_(t,i,e,n){let r=i.canLoad;if(r===void 0||r.length===0)return Z(!0);let a=r.map(l=>{let d=Or(l,t),h=v_(d)?d.canLoad(i,e):Qt(t,()=>d(i,e));return mi(h)});return Z(a).pipe(Rr(),vf(n))}function vf(t){return _p(wt(i=>{if(typeof i!="boolean")throw ks(t,i)}),Ce(i=>i===!0))}function L_(t,i,e,n){let r=i.canMatch;if(!r||r.length===0)return Z(!0);let a=r.map(l=>{let d=Or(l,t),h=w_(d)?d.canMatch(i,e):Qt(t,()=>d(i,e));return mi(h)});return Z(a).pipe(Rr(),vf(n))}var jo=class{segmentGroup;constructor(i){this.segmentGroup=i||null}},Ho=class extends Error{urlTree;constructor(i){super(),this.urlTree=i}};function xr(t){return uo(new jo(t))}function R_(t){return uo(new fe(4e3,!1))}function O_(t){return uo(gf(!1,Ot.GuardRejected))}var tu=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Z(n);if(r.numberOfChildren>1||!r.children[de])return R_(`${i.redirectTo}`);r=r.children[de]}}applyRedirectCommands(i,e,n,r,a){if(typeof e!="string"){let d=e,{queryParams:h,fragment:m,routeConfig:y,url:w,outlet:T,params:I,data:z,title:V}=r,U=Qt(a,()=>d({params:I,data:z,queryParams:h,fragment:m,routeConfig:y,url:w,outlet:T,title:V}));if(U instanceof Fn)throw new Ho(U);e=U}let l=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),i,n);if(e[0]==="/")throw new Ho(l);return l}applyRedirectCreateUrlTree(i,e,n,r){let a=this.createSegmentGroup(i,e.root,n,r);return new Fn(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let d=a.substring(1);n[r]=e[d]}else n[r]=a}),n}createSegmentGroup(i,e,n,r){let a=this.createSegments(i,e.segments,n,r),l={};return Object.entries(e.children).forEach(([d,h])=>{l[d]=this.createSegmentGroup(i,h,n,r)}),new Ie(a,l)}createSegments(i,e,n,r){return e.map(a=>a.path[0]===":"?this.findPosParam(i,a,r):this.findOrReturn(a,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new fe(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}},nu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function P_(t,i,e,n,r){let a=yf(t,i,e);return a.matched?(n=o_(i,n),L_(n,i,e,r).pipe(Ce(l=>l===!0?a:k({},nu)))):Z(a)}function yf(t,i,e){if(i.path==="**")return N_(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?k({},nu):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Gh)(e,t,i);if(!r)return k({},nu);let a={};Object.entries(r.posParams??{}).forEach(([d,h])=>{a[d]=h.path});let l=r.consumed.length>0?k(k({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:l,positionalParamSegments:r.posParams??{}}}function N_(t){return{matched:!0,parameters:t.length>0?Qh(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function zh(t,i,e,n){return e.length>0&&V_(t,e,n)?{segmentGroup:new Ie(i,B_(n,new Ie(e,t.children))),slicedSegments:[]}:e.length===0&&U_(t,e,n)?{segmentGroup:new Ie(t.segments,$_(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new Ie(t.segments,t.children),slicedSegments:e}}function $_(t,i,e,n){let r={};for(let a of e)if(Ls(t,i,a)&&!n[mn(a)]){let l=new Ie([],{});r[mn(a)]=l}return k(k({},n),r)}function B_(t,i){let e={};e[de]=i;for(let n of t)if(n.path===""&&mn(n)!==de){let r=new Ie([],{});e[mn(n)]=r}return e}function V_(t,i,e){return e.some(n=>Ls(t,i,n)&&mn(n)!==de)}function U_(t,i,e){return e.some(n=>Ls(t,i,n))}function Ls(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function j_(t,i,e){return i.length===0&&!t.children[e]}var iu=class{};function H_(t,i,e,n,r,a,l="emptyOnly"){return new ru(t,i,e,n,r,l,a).recognize()}var z_=31,ru=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,a,l,d){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=l,this.urlSerializer=d,this.applyRedirects=new tu(this.urlSerializer,this.urlTree)}noMatchError(i){return new fe(4002,`'${i.segmentGroup}'`)}recognize(){let i=zh(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(Ce(({children:e,rootSnapshot:n})=>{let r=new $t(n,e),a=new Vo("",r),l=of(n,[],this.urlTree.queryParams,this.urlTree.fragment);return l.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(l),{state:a,tree:l}}))}match(i){let e=new ji([],Object.freeze({}),Object.freeze(k({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),de,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,de,e).pipe(Ce(n=>({children:n,rootSnapshot:e})),Pi(n=>{if(n instanceof Ho)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof jo?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,r,a){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,a):this.processSegment(i,e,n,n.segments,r,!0,a).pipe(Ce(l=>l instanceof $t?[l]:[]))}processChildren(i,e,n,r){let a=[];for(let l of Object.keys(n.children))l==="primary"?a.unshift(l):a.push(l);return ct(a).pipe(sn(l=>{let d=n.children[l],h=a_(e,l);return this.processSegmentGroup(i,h,d,l,r)}),Dp((l,d)=>(l.push(...d),l)),Kl(null),Sp(),Lt(l=>{if(l===null)return xr(n);let d=_f(l);return q_(d),Z(d)}))}processSegment(i,e,n,r,a,l,d){return ct(e).pipe(sn(h=>this.processSegmentAgainstRoute(h._injector??i,e,h,n,r,a,l,d).pipe(Pi(m=>{if(m instanceof jo)return Z(null);throw m}))),ti(h=>!!h),Pi(h=>{if(bf(h))return j_(n,r,a)?Z(new iu):xr(n);throw h}))}processSegmentAgainstRoute(i,e,n,r,a,l,d,h){return mn(n)!==l&&(l===de||!Ls(r,a,n))?xr(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,a,l,h):this.allowRedirects&&d?this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,a,l,h):xr(r)}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,a,l,d){let{matched:h,parameters:m,consumedSegments:y,positionalParamSegments:w,remainingSegments:T}=yf(e,r,a);if(!h)return xr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>z_&&(this.allowRedirects=!1));let I=new ji(a,m,Object.freeze(k({},this.urlTree.queryParams)),this.urlTree.fragment,qh(r),mn(r),r.component??r._loadedComponent??null,r,Wh(r)),z=Is(I,d,this.paramsInheritanceStrategy);I.params=Object.freeze(z.params),I.data=Object.freeze(z.data);let V=this.applyRedirects.applyRedirectCommands(y,r.redirectTo,w,I,i);return this.applyRedirects.lineralizeSegments(r,V).pipe(Lt(U=>this.processSegment(i,n,e,U.concat(T),l,!1,d)))}matchSegmentAgainstRoute(i,e,n,r,a,l){let d=P_(e,n,r,i,this.urlSerializer);return n.path==="**"&&(e.children={}),d.pipe(Ct(h=>h.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(Ct(({routes:m})=>{let y=n._loadedInjector??i,{parameters:w,consumedSegments:T,remainingSegments:I}=h,z=new ji(T,w,Object.freeze(k({},this.urlTree.queryParams)),this.urlTree.fragment,qh(n),mn(n),n.component??n._loadedComponent??null,n,Wh(n)),V=Is(z,l,this.paramsInheritanceStrategy);z.params=Object.freeze(V.params),z.data=Object.freeze(V.data);let{segmentGroup:U,slicedSegments:ye}=zh(e,T,I,m);if(ye.length===0&&U.hasChildren())return this.processChildren(y,m,U,z).pipe(Ce(we=>new $t(z,we)));if(m.length===0&&ye.length===0)return Z(new $t(z,[]));let Ee=mn(n)===a;return this.processSegment(y,m,U,ye,Ee?de:a,!0,z).pipe(Ce(we=>new $t(z,we instanceof $t?[we]:[])))}))):xr(e)))}getChildConfig(i,e,n){return e.children?Z({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?Z({routes:e._loadedRoutes,injector:e._loadedInjector}):M_(i,e,n,this.urlSerializer).pipe(Lt(r=>r?this.configLoader.loadChildren(i,e).pipe(wt(a=>{e._loadedRoutes=a.routes,e._loadedInjector=a.injector})):O_(e))):Z({routes:[],injector:i})}};function q_(t){t.sort((i,e)=>i.value.outlet===de?-1:e.value.outlet===de?1:i.value.outlet.localeCompare(e.value.outlet))}function W_(t){let i=t.value.routeConfig;return i&&i.path===""}function _f(t){let i=[],e=new Set;for(let n of t){if(!W_(n)){i.push(n);continue}let r=i.find(a=>n.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=_f(n.children);i.push(new $t(n.value,r))}return i.filter(n=>!e.has(n))}function qh(t){return t.data||{}}function Wh(t){return t.resolve||{}}function G_(t,i,e,n,r,a){return Lt(l=>H_(t,i,e,n,l.extractedUrl,r,a).pipe(Ce(({state:d,tree:h})=>_e(k({},l),{targetSnapshot:d,urlAfterRedirects:h}))))}function K_(t,i){return Lt(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return Z(e);let a=new Set(r.map(h=>h.route)),l=new Set;for(let h of a)if(!l.has(h))for(let m of Cf(h))l.add(m);let d=0;return ct(l).pipe(sn(h=>a.has(h)?Q_(h,n,t,i):(h.data=Is(h,h.parent,t).resolve,Z(void 0))),wt(()=>d++),Ql(1),Lt(h=>d===l.size?Z(e):Un))})}function Cf(t){let i=t.children.map(e=>Cf(e)).flat();return[t,...i]}function Q_(t,i,e,n){let r=t.routeConfig,a=t._resolve;return r?.title!==void 0&&!pf(r)&&(a[zo]=r.title),Y_(a,t,i,n).pipe(Ce(l=>(t._resolvedData=l,t.data=Is(t,t.parent,e).resolve,null)))}function Y_(t,i,e,n){let r=Wc(t);if(r.length===0)return Z({});let a={};return ct(r).pipe(Lt(l=>Z_(t[l],i,e,n).pipe(ti(),wt(d=>{if(d instanceof Lr)throw ks(new hi,d);a[l]=d}))),Ql(1),Ce(()=>a),Pi(l=>bf(l)?Un:uo(l)))}function Z_(t,i,e,n){let r=qo(i)??n,a=Or(t,r),l=a.resolve?a.resolve(i,e):Qt(r,()=>a(i,e));return mi(l)}function zc(t){return Ct(i=>{let e=t(i);return e?ct(e).pipe(Ce(()=>i)):Z(i)})}var uu=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(a=>a.outlet===de);return n}getResolvedTitleForRoute(e){return e.data[zo]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>D(wf),providedIn:"root"})}return t})(),wf=(()=>{class t extends uu{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(Q(Oh))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wi=new se("",{providedIn:"root",factory:()=>({})}),Gi=new se(""),Rs=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=D(Xp);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Z(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=mi(e.loadComponent()).pipe(Ce(Df),wt(a=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=a}),pr(()=>{this.componentLoaders.delete(e)})),r=new Gl(n,()=>new nt).pipe(Wl());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Z({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let a=Sf(n,this.compiler,e,this.onLoadEndListener).pipe(pr(()=>{this.childrenLoaders.delete(n)})),l=new Gl(a,()=>new nt).pipe(Wl());return this.childrenLoaders.set(n,l),l}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sf(t,i,e,n){return mi(t.loadChildren()).pipe(Ce(Df),Lt(r=>r instanceof zp||Array.isArray(r)?Z(r):ct(i.compileModuleAsync(r))),Ce(r=>{n&&n(t);let a,l,d=!1;return Array.isArray(r)?(l=r,d=!0):(a=r.create(e).injector,l=a.get(Gi,[],{optional:!0,self:!0}).flat()),{routes:l.map(cu),injector:a}}))}function X_(t){return t&&typeof t=="object"&&"default"in t}function Df(t){return X_(t)?t.default:t}var Os=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>D(J_),providedIn:"root"})}return t})(),J_=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),du=new se(""),pu=new se("");function xf(t,i,e){let n=t.get(pu),r=t.get(Fe);return t.get(ft).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(m=>setTimeout(m));let a,l=new Promise(m=>{a=m}),d=r.startViewTransition(()=>(a(),e2(t))),{onViewTransitionCreated:h}=n;return h&&Qt(t,()=>h({transition:d,from:i,to:e})),l})}function e2(t){return new Promise(i=>{Mp({read:()=>setTimeout(i)},{injector:t})})}var hu=new se(""),Ps=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new nt;transitionAbortSubject=new nt;configLoader=D(Rs);environmentInjector=D(ii);destroyRef=D(Jl);urlSerializer=D(zi);rootContexts=D(qi);location=D(ai);inputBindingEnabled=D(Wo,{optional:!0})!==null;titleStrategy=D(uu);options=D(Wi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=D(Os);createViewTransition=D(du,{optional:!0});navigationErrorHandler=D(hu,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Z(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Cs(r)),n=r=>this.events.next(new ws(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(_e(k({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(e){return this.transitions=new Kt(null),this.transitions.pipe(xn(n=>n!==null),Ct(n=>{let r=!1,a=!1;return Z(n).pipe(Ct(l=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Ot.SupersededByNewNavigation),Un;this.currentTransition=n,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?_e(k({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&h!=="reload"){let m="";return this.events.next(new Mn(l.id,this.urlSerializer.serialize(l.rawUrl),m,Ir.IgnoredSameUrlNavigation)),l.resolve(!1),Un}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Z(l).pipe(Ct(m=>(this.events.next(new gi(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?Un:Promise.resolve(m))),G_(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),wt(m=>{n.targetSnapshot=m.targetSnapshot,n.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation=_e(k({},this.currentNavigation),{finalUrl:m.urlAfterRedirects});let y=new No(m.id,this.urlSerializer.serialize(m.extractedUrl),this.urlSerializer.serialize(m.urlAfterRedirects),m.targetSnapshot);this.events.next(y)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:m,extractedUrl:y,source:w,restoredState:T,extras:I}=l,z=new gi(m,this.urlSerializer.serialize(y),w,T);this.events.next(z);let V=uf(this.rootComponentType).snapshot;return this.currentTransition=n=_e(k({},l),{targetSnapshot:V,urlAfterRedirects:y,extras:_e(k({},I),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=y,Z(n)}else{let m="";return this.events.next(new Mn(l.id,this.urlSerializer.serialize(l.extractedUrl),m,Ir.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Un}}),wt(l=>{let d=new bs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}),Ce(l=>(this.currentTransition=n=_e(k({},l),{guards:h_(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),n)),D_(this.environmentInjector,l=>this.events.next(l)),wt(l=>{if(n.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw ks(this.urlSerializer,l.guardsResult);let d=new vs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(d)}),xn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Ot.GuardRejected),!1)),zc(l=>{if(l.guards.canActivateChecks.length!==0)return Z(l).pipe(wt(d=>{let h=new ys(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}),Ct(d=>{let h=!1;return Z(d).pipe(K_(this.paramsInheritanceStrategy,this.environmentInjector),wt({next:()=>h=!0,complete:()=>{h||this.cancelNavigationTransition(d,"",Ot.NoDataFromResolver)}}))}),wt(d=>{let h=new _s(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}))}),zc(l=>{let d=h=>{let m=[];h.routeConfig?.loadComponent&&!h.routeConfig._loadedComponent&&m.push(this.configLoader.loadComponent(h.routeConfig).pipe(wt(y=>{h.component=y}),Ce(()=>{})));for(let y of h.children)m.push(...d(y));return m};return Pa(d(l.targetSnapshot.root)).pipe(Kl(null),ln(1))}),zc(()=>this.afterPreactivation()),Ct(()=>{let{currentSnapshot:l,targetSnapshot:d}=n,h=this.createViewTransition?.(this.environmentInjector,l.root,d.root);return h?ct(h).pipe(Ce(()=>n)):Z(n)}),Ce(l=>{let d=l_(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=n=_e(k({},l),{targetRouterState:d}),this.currentNavigation.targetRouterState=d,n}),wt(()=>{this.events.next(new $o)}),p_(this.rootContexts,e.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ln(1),wt({next:l=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Vt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{r=!0}}),Ep(this.transitionAbortSubject.pipe(wt(l=>{throw l}))),pr(()=>{!r&&!a&&this.cancelNavigationTransition(n,"",Ot.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),Pi(l=>{if(this.destroyed)return n.resolve(!1),Un;if(a=!0,mf(l))this.events.next(new kn(n.id,this.urlSerializer.serialize(n.extractedUrl),l.message,l.cancellationCode)),d_(l)?this.events.next(new Mr(l.url,l.navigationBehaviorOptions)):n.resolve(!1);else{let d=new kr(n.id,this.urlSerializer.serialize(n.extractedUrl),l,n.targetSnapshot??void 0);try{let h=Qt(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(h instanceof Lr){let{message:m,cancellationCode:y}=ks(this.urlSerializer,h);this.events.next(new kn(n.id,this.urlSerializer.serialize(n.extractedUrl),m,y)),this.events.next(new Mr(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(d),l}catch(h){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(h)}}return Un}))}))}cancelNavigationTransition(e,n,r){let a=new kn(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function t2(t){return t!==fs}var Ef=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>D(n2),providedIn:"root"})}return t})(),Ms=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},n2=(()=>{class t extends Ms{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Tf=(()=>{class t{urlSerializer=D(zi);options=D(Wi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=D(ai);urlHandlingStrategy=D(Os);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Fn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,l=r??a;return l instanceof Fn?this.urlSerializer.serialize(l):l}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=uf(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:()=>D(i2),providedIn:"root"})}return t})(),i2=(()=>{class t extends Tf{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate")})})}handleRouterEvent(e,n){e instanceof gi?this.updateStateMemento():e instanceof Mn?this.commitTransition(n):e instanceof No?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof $o?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof kn&&(e.code===Ot.GuardRejected||e.code===Ot.NoDataFromResolver)?this.restoreHistory(n):e instanceof kr?this.restoreHistory(n,!0):e instanceof Vt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:a,state:l}=n;if(this.location.isCurrentPathEqualTo(e)||a){let d=this.browserPageId,h=k(k({},l),this.generateNgRouterState(r,d));this.location.replaceState(e,"",h)}else{let d=k(k({},l),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",d)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ns(t,i){t.events.pipe(xn(e=>e instanceof Vt||e instanceof kn||e instanceof kr||e instanceof Mn),Ce(e=>e instanceof Vt||e instanceof Mn?0:(e instanceof kn?e.code===Ot.Redirect||e.code===Ot.SupersededByNewNavigation:!1)?2:1),xn(e=>e!==2),ln(1)).subscribe(()=>{i()})}var r2={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},o2={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},bn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=D(ac);stateManager=D(Tf);options=D(Wi,{optional:!0})||{};pendingTasks=D($a);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=D(Ps);urlSerializer=D(zi);location=D(ai);urlHandlingStrategy=D(Os);_events=new nt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=D(Ef);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=D(Gi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!D(Wo,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new yp;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,a=this.navigationTransitions.currentNavigation;if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(n,a),n instanceof kn&&n.code!==Ot.Redirect&&n.code!==Ot.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Vt)this.navigated=!0;else if(n instanceof Mr){let l=n.navigationBehaviorOptions,d=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),h=k({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||t2(r.source)},l);this.scheduleNavigation(d,fs,null,h,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}s2(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),fs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r)=>{this.navigateToSyncWithBrowser(e,r,n)})}navigateToSyncWithBrowser(e,n,r){let a={replaceUrl:!0},l=r?.navigationId?r:null;if(r){let h=k({},r);delete h.navigationId,delete h.\u0275routerPageId,Object.keys(h).length!==0&&(a.state=h)}let d=this.parseUrl(e);this.scheduleNavigation(d,n,l,a)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(cu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:a,fragment:l,queryParamsHandling:d,preserveFragment:h}=n,m=h?this.currentUrlTree.fragment:l,y=null;switch(d??this.options.defaultQueryParamsHandling){case"merge":y=k(k({},this.currentUrlTree.queryParams),a);break;case"preserve":y=this.currentUrlTree.queryParams;break;default:y=a||null}y!==null&&(y=this.removeEmptyProps(y));let w;try{let T=r?r.snapshot:this.routerState.snapshot.root;w=af(T)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),w=this.currentUrlTree.root}return sf(w,e,y,m??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=fi(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,fs,null,n)}navigate(e,n={skipLocationChange:!1}){return a2(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=k({},r2):n===!1?r=k({},o2):r=n,fi(e))return Vh(this.currentUrlTree,e,r);let a=this.parseUrl(e);return Vh(this.currentUrlTree,a,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,a])=>(a!=null&&(n[r]=a),n),{})}scheduleNavigation(e,n,r,a,l){if(this.disposed)return Promise.resolve(!1);let d,h,m;l?(d=l.resolve,h=l.reject,m=l.promise):m=new Promise((w,T)=>{d=w,h=T});let y=this.pendingTasks.add();return Ns(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(y))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,resolve:d,reject:h,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(w=>Promise.reject(w))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function a2(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new fe(4008,!1)}function s2(t){return!(t instanceof $o)&&!(t instanceof Mr)}var $s=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new nt;constructor(e,n,r,a,l,d){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=a,this.el=l,this.locationStrategy=d;let h=l.nativeElement.tagName?.toLowerCase();this.isAnchorElement=h==="a"||h==="area",this.isAnchorElement?this.subscription=e.events.subscribe(m=>{m instanceof Vt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(fi(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,a,l){let d=this.urlTree;if(d===null||this.isAnchorElement&&(e!==0||n||r||a||l||typeof this.target=="string"&&this.target!="_self"))return!0;let h={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(d,h),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:Up(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,a=this.el.nativeElement;n!==null?r.setAttribute(a,e,n):r.removeAttribute(a,e)}get urlTree(){return this.routerLinkInput===null?null:fi(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||t)($(bn),$(Ln),Xl("tabindex"),$(Zt),$(It),$(fn))};static \u0275dir=ce({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&ee("click",function(l){return r.onClick(l.button,l.ctrlKey,l.shiftKey,l.altKey,l.metaKey)}),n&2&&E("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",N],skipLocationChange:[2,"skipLocationChange","skipLocationChange",N],replaceUrl:[2,"replaceUrl","replaceUrl",N],routerLink:"routerLink"},features:[ot]})}return t})(),l2=(()=>{class t{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new W;constructor(e,n,r,a,l){this.router=e,this.element=n,this.renderer=r,this.cdr=a,this.link=l,this.routerEventsSubscription=e.events.subscribe(d=>{d instanceof Vt&&this.update()})}ngAfterContentInit(){Z(this.links.changes,Z(null)).pipe(po()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=ct(e).pipe(po()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=c2(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let a=r.urlTree;return a?e.isActive(a,n):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)($(bn),$(It),$(Zt),$(Pt),$($s,8))};static \u0275dir=ce({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,a){if(n&1&&Y(a,$s,5),n&2){let l;j(l=H())&&(r.links=l)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[ot]})}return t})();function c2(t){return!!t.paths}var Ko=class{};var Af=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,a){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(xn(e=>e instanceof Vt),sn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,n){let r=[];for(let a of n){a.providers&&!a._injector&&(a._injector=Va(a.providers,e,`Route: ${a.path}`));let l=a._injector??e,d=a._loadedInjector??l;(a.loadChildren&&!a._loadedRoutes&&a.canLoad===void 0||a.loadComponent&&!a._loadedComponent)&&r.push(this.preloadConfig(l,a)),(a.children||a._loadedRoutes)&&r.push(this.processRoutes(d,a.children??a._loadedRoutes))}return ct(r).pipe(po())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(e,n):r=Z(null);let a=r.pipe(Lt(l=>l===null?Z(void 0):(n._loadedRoutes=l.routes,n._loadedInjector=l.injector,this.processRoutes(l.injector??e,l.routes))));if(n.loadComponent&&!n._loadedComponent){let l=this.loader.loadComponent(n);return ct([a,l]).pipe(po())}else return a})}static \u0275fac=function(n){return new(n||t)(Q(bn),Q(ii),Q(Ko),Q(Rs))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),If=new se(""),u2=(()=>{class t{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(e,n,r,a,l={}){this.urlSerializer=e,this.transitions=n,this.viewportScroller=r,this.zone=a,this.options=l,l.scrollPositionRestoration||="disabled",l.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof gi?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Vt?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Mn&&e.code===Ir.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Fr&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Fr(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Hp()};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();function d2(t,...i){return ni([{provide:Gi,multi:!0,useValue:t},[],{provide:Ln,useFactory:kf,deps:[bn]},{provide:sc,multi:!0,useFactory:Ff},i.map(e=>e.\u0275providers)])}function kf(t){return t.routerState.root}function Qo(t,i){return{\u0275kind:t,\u0275providers:i}}function Ff(){let t=D(cn);return i=>{let e=t.get(lc);if(i!==e.components[0])return;let n=t.get(bn),r=t.get(Mf);t.get(gu)===1&&n.initialNavigation(),t.get(Of,null,Zl.Optional)?.setUpPreloading(),t.get(If,null,Zl.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Mf=new se("",{factory:()=>new nt}),gu=new se("",{providedIn:"root",factory:()=>1});function Lf(){let t=[{provide:gu,useValue:0},go(()=>{let i=D(cn);return i.get(mc,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(bn),a=i.get(Mf);Ns(r,()=>{n(!0)}),i.get(Ps).afterPreactivation=()=>(n(!0),a.closed?Z(void 0):a),r.initialNavigation()}))})];return Qo(2,t)}function Rf(){let t=[go(()=>{D(bn).setUpLocationChangeListener()}),{provide:gu,useValue:2}];return Qo(3,t)}var Of=new se("");function Pf(t){return Qo(0,[{provide:Of,useExisting:Af},{provide:Ko,useExisting:t}])}function Nf(){return Qo(8,[su,{provide:Wo,useExisting:su}])}function $f(t){ic("NgRouterViewTransitions");let i=[{provide:du,useValue:xf},{provide:pu,useValue:k({skipNextTransition:!!t?.skipInitialTransition},t)}];return Qo(9,i)}var Bf=[ai,{provide:zi,useClass:hi},bn,qi,{provide:Ln,useFactory:kf,deps:[bn]},Rs,[]],p2=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[Bf,[],{provide:Gi,multi:!0,useValue:e},[],n?.errorHandler?{provide:hu,useValue:n.errorHandler}:[],{provide:Wi,useValue:n||{}},n?.useHash?f2():g2(),h2(),n?.preloadingStrategy?Pf(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?m2(n):[],n?.bindToComponentInputs?Nf().\u0275providers:[],n?.enableViewTransitions?$f().\u0275providers:[],b2()]}}static forChild(e){return{ngModule:t,providers:[{provide:Gi,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function h2(){return{provide:If,useFactory:()=>{let t=D(hh),i=D(ft),e=D(Wi),n=D(Ps),r=D(zi);return e.scrollOffset&&t.setOffset(e.scrollOffset),new u2(r,n,t,i,e)}}}function f2(){return{provide:fn,useClass:Cc}}function g2(){return{provide:fn,useClass:Wa}}function m2(t){return[t.initialNavigation==="disabled"?Rf().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Lf().\u0275providers:[]]}var fu=new se("");function b2(){return[{provide:fu,useFactory:Ff},{provide:sc,multi:!0,useExisting:fu}]}function Ki(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Rn(t,i){if(t&&i){let e=n=>{Ki(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function v2(){return window.innerWidth-document.documentElement.offsetWidth}function Pr(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function S3(t="p-overflow-hidden"){let i=Pr(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,v2()+"px"),Rn(document.body,t)}function On(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function D3(t="p-overflow-hidden"){let i=Pr(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),On(document.body,t)}function Uf(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function Yo(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,a=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:a}}function bu(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function vu(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function x3(t,i,e=!0){var n,r,a,l;if(t){let d=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Uf(t),h=d.height,m=d.width,y=i.offsetHeight,w=i.offsetWidth,T=i.getBoundingClientRect(),I=vu(),z=bu(),V=Yo(),U,ye,Ee="top";T.top+y+h>V.height?(U=T.top+I-h,Ee="bottom",U<0&&(U=I)):U=y+T.top+I,T.left+m>V.width?ye=Math.max(0,T.left+z+w-m):ye=T.left+z,t.style.top=U+"px",t.style.left=ye+"px",t.style.transformOrigin=Ee,e&&(t.style.marginTop=Ee==="bottom"?`calc(${(r=(n=Pr(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(l=(a=Pr(/-anchor-gutter$/))==null?void 0:a.value)!=null?l:"")}}function y2(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function vn(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function E3(t,i,e=!0){var n,r,a,l;if(t){let d=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Uf(t),h=i.offsetHeight,m=i.getBoundingClientRect(),y=Yo(),w,T,I="top";m.top+h+d.height>y.height?(w=-1*d.height,I="bottom",m.top+w<0&&(w=-1*m.top)):w=h,d.width>y.width?T=m.left*-1:m.left+d.width>y.width?T=(m.left+d.width-y.width)*-1:T=0,t.style.top=w+"px",t.style.left=T+"px",t.style.transformOrigin=I,e&&(t.style.marginTop=I==="bottom"?`calc(${(r=(n=Pr(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(l=(a=Pr(/-anchor-gutter$/))==null?void 0:a.value)!=null?l:"")}}function Nr(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function yu(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),Nr(i)?i:void 0}function _u(t,i){let e=yu(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}var mu=void 0;function Vf(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(mu!=null)return mu;let i=document.createElement("div");y2(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),mu=e,e}}function Bs(t,i={}){if(Nr(t)){let e=(n,r)=>{var a,l;let d=(a=t?.$attrs)!=null&&a[n]?[(l=t?.$attrs)==null?void 0:l[n]]:[];return[r].flat().reduce((h,m)=>{if(m!=null){let y=typeof m;if(y==="string"||y==="number")h.push(m);else if(y==="object"){let w=Array.isArray(m)?e(n,m):Object.entries(m).map(([T,I])=>n==="style"&&(I||I===0)?`${T.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${I}`:I?T:void 0);h=w.length?h.concat(w.filter(T=>!!T)):h}}return h},d)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let a=n.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?Bs(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function T3(t,i={},...e){if(t){let n=document.createElement(t);return Bs(n,i),n.append(...e),n}}function jf(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function _2(t,i){return Nr(t)?Array.from(t.querySelectorAll(i)):[]}function Ft(t,i){return Nr(t)?t.matches(i)?t:t.querySelector(i):null}function Cu(t,i){t&&document.activeElement!==t&&t.focus(i)}function Zo(t,i){if(Nr(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Hf(t,i=""){let e=_2(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function A3(t,i){let e=Hf(t,i);return e.length>0?e[0]:null}function wu(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function C2(t){if(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}return 0}function w2(t){if(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}return 0}function zf(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function I3(t){var i;if(t){let e=(i=zf(t))==null?void 0:i.childNodes,n=0;if(e)for(let r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}}return-1}function k3(t,i){let e=Hf(t,i);return e.length>0?e[e.length-1]:null}function Su(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function en(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function F3(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function S2(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&zf(t))}function M3(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let r=yu((a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t);return r?.nodeType===9||S2(r)?r:void 0}}function Du(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function L3(t){return!!(t&&t.offsetParent!=null)}function R3(t){return t?getComputedStyle(t).direction==="rtl":!1}function O3(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function P3(t,i){var e,n;if(t){let r=t.parentElement,a=Su(r),l=Yo(),d=t.offsetParent?t.offsetWidth:w2(t),h=t.offsetParent?t.offsetHeight:C2(t),m=vn((e=r?.children)==null?void 0:e[0]),y=en((n=r?.children)==null?void 0:n[0]),w="",T="";a.left+m+d>l.width-Vf()?a.left<d?i%2===1?w=a.left?"-"+a.left+"px":"100%":i%2===0&&(w=l.width-d-Vf()+"px"):w="-100%":w="100%",t.getBoundingClientRect().top+y+h>l.height?T=`-${h-y}px`:T="0px",t.style.top=T,t.style.left=w}}function qf(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Wf(t,i){let e=yu(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function N3(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),a=r?parseFloat(r):0,l=t.getBoundingClientRect(),h=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-a,m=t.scrollTop,y=t.clientHeight,w=en(i);h<0?t.scrollTop=m+h:h+w>y&&(t.scrollTop=m+h-y+w)}function Gf(t,i="",e){Nr(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Kf(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}var D2=Object.defineProperty,Qf=Object.getOwnPropertySymbols,x2=Object.prototype.hasOwnProperty,E2=Object.prototype.propertyIsEnumerable,Yf=(t,i,e)=>i in t?D2(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,T2=(t,i)=>{for(var e in i||(i={}))x2.call(i,e)&&Yf(t,e,i[e]);if(Qf)for(var e of Qf(i))E2.call(i,e)&&Yf(t,e,i[e]);return t};function pt(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function xu(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),a,l,d;if(n&&r){if(l=t.length,l!=i.length)return!1;for(a=l;a--!==0;)if(!xu(t[a],i[a],e))return!1;return!0}if(n!=r)return!1;let h=t instanceof Date,m=i instanceof Date;if(h!=m)return!1;if(h&&m)return t.getTime()==i.getTime();let y=t instanceof RegExp,w=i instanceof RegExp;if(y!=w)return!1;if(y&&w)return t.toString()==i.toString();let T=Object.keys(t);if(l=T.length,l!==Object.keys(i).length)return!1;for(a=l;a--!==0;)if(!Object.prototype.hasOwnProperty.call(i,T[a]))return!1;for(a=l;a--!==0;)if(d=T[a],!xu(t[d],i[d],e))return!1;return!0}function A2(t,i){return xu(t,i)}function Xf(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Oe(t){return!pt(t)}function Vs(t,i){if(!t||!i)return null;try{let e=t[i];if(Oe(e))return e}catch{}if(Object.keys(t).length){if(Xf(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,a=e.length;r<a;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function Qi(t,i,e){return e?Vs(t,e)===Vs(i,e):A2(t,i)}function Jf(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Qi(t,e))return!0}return!1}function U3(t,i){let e=-1;if(Oe(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function yn(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function tn(t,...i){return Xf(t)?t(...i):t}function bi(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Zf(t){return bi(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Us(t,i="",e={}){let n=Zf(i).split("."),r=n.shift();return r?yn(t)?Us(tn(t[Object.keys(t).find(a=>Zf(a)===r)||""],e),n.join("."),e):void 0:tn(t,e)}function js(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function j3(t){return t instanceof Date&&t.constructor===Date}function eg(t){return Oe(t)&&!isNaN(t)}function H3(t=""){return Oe(t)&&t.length===1&&!!t.match(/\S| /)}function Ut(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Xo(...t){let i=(e={},n={})=>{let r=T2({},e);return Object.keys(n).forEach(a=>{yn(n[a])&&a in e&&yn(e[a])?r[a]=i(e[a],n[a]):r[a]=n[a]}),r};return t.reduce((e,n,r)=>r===0?n:i(e,n),{})}function Yi(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function jt(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Hs(t){return bi(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function Eu(t){return bi(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var zs={};function et(t="pui_id_"){return zs.hasOwnProperty(t)||(zs[t]=0),zs[t]++,`${t}${zs[t]}`}function I2(){let t=[],i=(l,d,h=999)=>{let m=r(l,d,h),y=m.value+(m.key===l?0:h)+1;return t.push({key:l,value:y}),y},e=l=>{t=t.filter(d=>d.value!==l)},n=(l,d)=>r(l,d).value,r=(l,d,h=0)=>[...t].reverse().find(m=>d?!0:m.key===l)||{key:l,value:h},a=l=>l&&parseInt(l.style.zIndex,10)||0;return{get:a,set:(l,d,h)=>{d&&(d.style.zIndex=String(i(l,!0,h)))},clear:l=>{l&&(e(a(l)),l.style.zIndex="")},getCurrent:l=>n(l,!0)}}var W3=I2();var tg=["*"],k2=function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t}(k2||{}),oF=(()=>{class t{requireConfirmationSource=new nt;acceptConfirmationSource=new nt;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var yt=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),aF=(()=>{class t{static AND="and";static OR="or"}return t})(),sF=(()=>{class t{filter(e,n,r,a,l){let d=[];if(e)for(let h of e)for(let m of n){let y=Vs(h,m);if(this.filters[a](y,r,l)){d.push(h);break}}return d}filters={startsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let a=jt(n.toString()).toLocaleLowerCase(r);return jt(e.toString()).toLocaleLowerCase(r).slice(0,a.length)===a},contains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let a=jt(n.toString()).toLocaleLowerCase(r);return jt(e.toString()).toLocaleLowerCase(r).indexOf(a)!==-1},notContains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let a=jt(n.toString()).toLocaleLowerCase(r);return jt(e.toString()).toLocaleLowerCase(r).indexOf(a)===-1},endsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let a=jt(n.toString()).toLocaleLowerCase(r),l=jt(e.toString()).toLocaleLowerCase(r);return l.indexOf(a,l.length-a.length)!==-1},equals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:jt(e.toString()).toLocaleLowerCase(r)==jt(n.toString()).toLocaleLowerCase(r),notEquals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:jt(e.toString()).toLocaleLowerCase(r)!=jt(n.toString()).toLocaleLowerCase(r),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let r=0;r<n.length;r++)if(Qi(e,n[r]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,r)=>this.filters.equals(e,n,r),isNot:(e,n,r)=>this.filters.notEquals(e,n,r),before:(e,n,r)=>this.filters.lt(e,n,r),after:(e,n,r)=>this.filters.gt(e,n,r),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ng=(()=>{class t{messageSource=new nt;clearSource=new nt;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),lF=(()=>{class t{clickSource=new nt;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=P({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:tg,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},encapsulation:2})}return t})(),ig=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=P({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:tg,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},encapsulation:2})}return t})(),at=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)($(ri))};static \u0275dir=ce({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ne=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[le]})}return t})(),vi=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var dg=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)($(Zt),$(It))};static \u0275dir=ce({type:t})}return t})(),F2=(()=>{class t extends dg{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275dir=ce({type:t,features:[O]})}return t})(),_i=new se("");var M2={provide:_i,useExisting:ut(()=>Ur),multi:!0};function L2(){let t=Jt()?Jt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var R2=new se(""),Ur=(()=>{class t extends dg{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!L2())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)($(Zt),$(It),$(R2,8))};static \u0275dir=ce({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&ee("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[oe([M2]),O]})}return t})();function pg(t){return t==null||O2(t)===0}function O2(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Js=new se(""),hg=new se("");function P2(t){return pg(t.value)?{required:!0}:null}function N2(t){if(!t)return Tu;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(pg(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Tu(t){return null}function fg(t){return t!=null}function gg(t){return fr(t)?ct(t):t}function mg(t){let i={};return t.forEach(e=>{i=e!=null?k(k({},i),e):i}),Object.keys(i).length===0?null:i}function bg(t,i){return i.map(e=>e(t))}function $2(t){return!t.validate}function vg(t){return t.map(i=>$2(i)?i:e=>i.validate(e))}function B2(t){if(!t)return null;let i=t.filter(fg);return i.length==0?null:function(e){return mg(bg(e,i))}}function Fu(t){return t!=null?B2(vg(t)):null}function V2(t){if(!t)return null;let i=t.filter(fg);return i.length==0?null:function(e){let n=bg(e,i).map(gg);return Na(n).pipe(Ce(mg))}}function Mu(t){return t!=null?V2(vg(t)):null}function rg(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function U2(t){return t._rawValidators}function j2(t){return t._rawAsyncValidators}function Au(t){return t?Array.isArray(t)?t:[t]:[]}function Gs(t,i){return Array.isArray(t)?t.includes(i):t===i}function og(t,i){let e=Au(i);return Au(t).forEach(r=>{Gs(e,r)||e.push(r)}),e}function ag(t,i){return Au(i).filter(e=>!Gs(t,e))}var Ks=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Fu(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Mu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Vr=class extends Ks{name;get formDirective(){return null}get path(){return null}},_n=class extends Ks{_parent=null;name=null;valueAccessor=null},Qs=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},H2={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},xF=_e(k({},H2),{"[class.ng-submitted]":"isSubmitted"}),jr=(()=>{class t extends Qs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)($(_n,2))};static \u0275dir=ce({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Ze("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[O]})}return t})(),el=(()=>{class t extends Qs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)($(Vr,10))};static \u0275dir=ce({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Ze("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[O]})}return t})();var Jo="VALID",Ws="INVALID",$r="PENDING",ea="DISABLED",yi=class{},Ys=class extends yi{value;source;constructor(i,e){super(),this.value=i,this.source=e}},na=class extends yi{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},ia=class extends yi{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Br=class extends yi{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Iu=class extends yi{source;constructor(i){super(),this.source=i}},ku=class extends yi{source;constructor(i){super(),this.source=i}};function yg(t){return(tl(t)?t.validators:t)||null}function z2(t){return Array.isArray(t)?Fu(t):t||null}function _g(t,i){return(tl(i)?i.asyncValidators:t)||null}function q2(t){return Array.isArray(t)?Mu(t):t||null}function tl(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function W2(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new fe(1e3,"");if(!n[e])throw new fe(1001,"")}function G2(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new fe(1002,"")})}var Zs=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Nt(this.statusReactive)}set status(i){Nt(()=>this.statusReactive.set(i))}_status=Xe(()=>this.statusReactive());statusReactive=Ke(void 0);get valid(){return this.status===Jo}get invalid(){return this.status===Ws}get pending(){return this.status==$r}get disabled(){return this.status===ea}get enabled(){return this.status!==ea}errors;get pristine(){return Nt(this.pristineReactive)}set pristine(i){Nt(()=>this.pristineReactive.set(i))}_pristine=Xe(()=>this.pristineReactive());pristineReactive=Ke(!0);get dirty(){return!this.pristine}get touched(){return Nt(this.touchedReactive)}set touched(i){Nt(()=>this.touchedReactive.set(i))}_touched=Xe(()=>this.touchedReactive());touchedReactive=Ke(!1);get untouched(){return!this.touched}_events=new nt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(og(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(og(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ag(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ag(i,this._rawAsyncValidators))}hasValidator(i){return Gs(this._rawValidators,i)}hasAsyncValidator(i){return Gs(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(_e(k({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new ia(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new ia(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(_e(k({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new na(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new na(!0,n))}markAsPending(i={}){this.status=$r;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Br(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(_e(k({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ea,this.errors=null,this._forEachChild(r=>{r.disable(_e(k({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ys(this.value,n)),this._events.next(new Br(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_e(k({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Jo,this._forEachChild(n=>{n.enable(_e(k({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(_e(k({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Jo||this.status===$r)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ys(this.value,e)),this._events.next(new Br(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(_e(k({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ea:Jo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=$r,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=gg(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Br(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?ea:this.errors?Ws:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($r)?$r:this._anyControlsHaveStatus(Ws)?Ws:Jo}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),r&&this._events.next(new na(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new ia(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){tl(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=z2(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=q2(this._rawAsyncValidators)}},Xs=class extends Zs{constructor(i,e,n){super(yg(e),_g(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){G2(this,!0,i),Object.keys(i).forEach(n=>{W2(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,a)=>{n=e(n,r,a)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Lu=new se("",{providedIn:"root",factory:()=>Ru}),Ru="always";function K2(t,i){return[...i.path,t]}function Cg(t,i,e=Ru){wg(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Y2(t,i),X2(t,i),Z2(t,i),Q2(t,i)}function sg(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Q2(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function wg(t,i){let e=U2(t);i.validator!==null?t.setValidators(rg(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=j2(t);i.asyncValidator!==null?t.setAsyncValidators(rg(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();sg(i._rawValidators,r),sg(i._rawAsyncValidators,r)}function Y2(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Sg(t,i)})}function Z2(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Sg(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Sg(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function X2(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function J2(t,i){t==null,wg(t,i)}function eC(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function tC(t){return Object.getPrototypeOf(t.constructor)===F2}function nC(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function iC(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(a=>{a.constructor===Ur?e=a:tC(a)?n=a:r=a}),r||n||e||null}var rC={provide:Vr,useExisting:ut(()=>ra)},ta=Promise.resolve(),ra=(()=>{class t extends Vr{callSetDisabledState;get submitted(){return Nt(this.submittedReactive)}_submitted=Xe(()=>this.submittedReactive());submittedReactive=Ke(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new Xs({},Fu(e),Mu(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ta.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Cg(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ta.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ta.then(()=>{let n=this._findContainer(e.path),r=new Xs({});J2(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ta.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){ta.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),nC(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Iu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1),this.form._events.next(new ku(this.form))}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)($(Js,10),$(hg,10),$(Lu,8))};static \u0275dir=ce({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&ee("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[oe([rC]),O]})}return t})();function lg(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function cg(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var oC=class extends Zs{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(yg(e),_g(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),tl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(cg(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){lg(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){lg(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){cg(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var aC={provide:_n,useExisting:ut(()=>Cn)},ug=Promise.resolve(),Cn=(()=>{class t extends _n{_changeDetectorRef;callSetDisabledState;control=new oC;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new W;constructor(e,n,r,a,l,d){super(),this._changeDetectorRef=l,this.callSetDisabledState=d,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=iC(this,a)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),eC(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Cg(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ug.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&N(n);ug.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?K2(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)($(Vr,9),$(Js,10),$(hg,10),$(_i,10),$(Pt,8),$(Lu,8))};static \u0275dir=ce({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[oe([aC]),O,ot]})}return t})();var nl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Dg=(()=>{class t{_validator=Tu;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Tu,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,features:[ot]})}return t})();var sC={provide:Js,useExisting:ut(()=>oa),multi:!0};var oa=(()=>{class t extends Dg{required;inputName="required";normalizeInput=N;createValidator=e=>P2;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&E("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[oe([sC]),O]})}return t})();var lC={provide:Js,useExisting:ut(()=>Ou),multi:!0},Ou=(()=>{class t extends Dg{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>N2(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&E("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[oe([lC]),O]})}return t})();var cC=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var Ci=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Lu,useValue:e.callSetDisabledState??Ru}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[cC]})}return t})();var uC=Object.defineProperty,dC=Object.defineProperties,pC=Object.getOwnPropertyDescriptors,il=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,Ag=Object.prototype.propertyIsEnumerable,xg=(t,i,e)=>i in t?uC(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Sn=(t,i)=>{for(var e in i||(i={}))Tg.call(i,e)&&xg(t,e,i[e]);if(il)for(var e of il(i))Ag.call(i,e)&&xg(t,e,i[e]);return t},Pu=(t,i)=>dC(t,pC(i)),qn=(t,i)=>{var e={};for(var n in t)Tg.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&il)for(var n of il(t))i.indexOf(n)<0&&Ag.call(t,n)&&(e[n]=t[n]);return e};function IF(...t){return Xo(...t)}var hC=Kf(),Ht=hC;function Eg(t,i){js(t)?t.push(...i||[]):yn(t)&&Object.assign(t,i)}function fC(t){return yn(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function gC(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Nu(t="",i=""){return gC(`${bi(t,!1)&&bi(i,!1)?`${t}-`:t}${i}`)}function Ig(t="",i=""){return`--${Nu(t,i)}`}function mC(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function kg(t,i="",e="",n=[],r){if(bi(t)){let a=/{([^}]*)}/g,l=t.trim();if(mC(l))return;if(Ut(l,a)){let d=l.replaceAll(a,y=>{let T=y.replace(/{|}/g,"").split(".").filter(I=>!n.some(z=>Ut(I,z)));return`var(${Ig(e,Hs(T.join("-")))}${Oe(r)?`, ${r}`:""})`}),h=/(\d+\s+[\+\-\*\/]\s+\d+)/g,m=/var\([^)]+\)/g;return Ut(d.replace(m,"0"),h)?`calc(${d})`:d}return l}else if(eg(t))return t}function bC(t,i,e){bi(i,!1)&&t.push(`${i}:${e};`)}function Hr(t,i){return t?`${t}{${i}}`:""}var zr=(...t)=>vC(Pe.getTheme(),...t),vC=(t={},i,e,n)=>{if(i){let{variable:r,options:a}=Pe.defaults||{},{prefix:l,transform:d}=t?.options||a||{},m=Ut(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||pt(n)&&d==="strict"?Pe.getTokenValue(i):kg(m,void 0,l,[r.excludedKeyRegex],e)}return""};function yC(t,i={}){let e=Pe.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:a=e.excludedKeyRegex}=i,l=(m,y="")=>Object.entries(m).reduce((w,[T,I])=>{let z=Ut(T,a)?Nu(y):Nu(y,Hs(T)),V=fC(I);if(yn(V)){let{variables:U,tokens:ye}=l(V,z);Eg(w.tokens,ye),Eg(w.variables,U)}else w.tokens.push((n?z.replace(`${n}-`,""):z).replaceAll("-",".")),bC(w.variables,Ig(z),kg(V,z,n,[a]));return w},{variables:[],tokens:[]}),{variables:d,tokens:h}=l(t,n);return{value:d,tokens:h,declarations:d.join(""),css:Hr(r,d.join(""))}}var wn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return yC(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var a,l,d,h,m,y,w;let{preset:T,options:I}=i,z,V,U,ye,Ee,we,Ge;if(Oe(T)&&I.transform!=="strict"){let{primitive:Et,semantic:nn,extend:zt}=T,Nn=nn||{},{colorScheme:Kn}=Nn,Qn=qn(Nn,["colorScheme"]),Ti=zt||{},{colorScheme:Ai}=Ti,qt=qn(Ti,["colorScheme"]),Yn=Kn||{},{dark:Zn}=Yn,Ii=qn(Yn,["dark"]),Zi=Ai||{},{dark:Dn}=Zi,Xi=qn(Zi,["dark"]),ki=Oe(Et)?this._toVariables({primitive:Et},I):{},Ji=Oe(Qn)?this._toVariables({semantic:Qn},I):{},er=Oe(Ii)?this._toVariables({light:Ii},I):{},ca=Oe(Zn)?this._toVariables({dark:Zn},I):{},ua=Oe(qt)?this._toVariables({semantic:qt},I):{},Kr=Oe(Xi)?this._toVariables({light:Xi},I):{},Mt=Oe(Dn)?this._toVariables({dark:Dn},I):{},[Qr,$n]=[(a=ki.declarations)!=null?a:"",ki.tokens],[da,fl]=[(l=Ji.declarations)!=null?l:"",Ji.tokens||[]],[Wt,pa]=[(d=er.declarations)!=null?d:"",er.tokens||[]],[tt,gl]=[(h=ca.declarations)!=null?h:"",ca.tokens||[]],[ml,ha]=[(m=ua.declarations)!=null?m:"",ua.tokens||[]],[tr,bl]=[(y=Kr.declarations)!=null?y:"",Kr.tokens||[]],[Fi,vl]=[(w=Mt.declarations)!=null?w:"",Mt.tokens||[]];z=this.transformCSS(t,Qr,"light","variable",I,n,r),V=$n;let yl=this.transformCSS(t,`${da}${Wt}`,"light","variable",I,n,r),Ye=this.transformCSS(t,`${tt}`,"dark","variable",I,n,r);U=`${yl}${Ye}`,ye=[...new Set([...fl,...pa,...gl])];let ht=this.transformCSS(t,`${ml}${tr}color-scheme:light`,"light","variable",I,n,r),Ne=this.transformCSS(t,`${Fi}color-scheme:dark`,"dark","variable",I,n,r);Ee=`${ht}${Ne}`,we=[...new Set([...ha,...bl,...vl])],Ge=tn(T.css,{dt:zr})}return{primitive:{css:z,tokens:V},semantic:{css:U,tokens:ye},global:{css:Ee,tokens:we},style:Ge}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:a,selector:l}){var d,h,m;let y,w,T;if(Oe(i)&&e.transform!=="strict"){let I=t.replace("-directive",""),z=i,{colorScheme:V,extend:U,css:ye}=z,Ee=qn(z,["colorScheme","extend","css"]),we=U||{},{colorScheme:Ge}=we,Et=qn(we,["colorScheme"]),nn=V||{},{dark:zt}=nn,Nn=qn(nn,["dark"]),Kn=Ge||{},{dark:Qn}=Kn,Ti=qn(Kn,["dark"]),Ai=Oe(Ee)?this._toVariables({[I]:Sn(Sn({},Ee),Et)},e):{},qt=Oe(Nn)?this._toVariables({[I]:Sn(Sn({},Nn),Ti)},e):{},Yn=Oe(zt)?this._toVariables({[I]:Sn(Sn({},zt),Qn)},e):{},[Zn,Ii]=[(d=Ai.declarations)!=null?d:"",Ai.tokens||[]],[Zi,Dn]=[(h=qt.declarations)!=null?h:"",qt.tokens||[]],[Xi,ki]=[(m=Yn.declarations)!=null?m:"",Yn.tokens||[]],Ji=this.transformCSS(I,`${Zn}${Zi}`,"light","variable",e,r,a,l),er=this.transformCSS(I,Xi,"dark","variable",e,r,a,l);y=`${Ji}${er}`,w=[...new Set([...Ii,...Dn,...ki])],T=tn(ye,{dt:zr})}return{css:y,tokens:w,style:T}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var a;let{preset:l,options:d}=i,h=(a=l?.components)==null?void 0:a[t];return this.getPreset({name:t,preset:h,options:d,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var a;let l=t.replace("-directive",""),{preset:d,options:h}=i,m=(a=d?.directives)==null?void 0:a[l];return this.getPreset({name:l,preset:m,options:h,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${tn(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:a}){let l=this.getCommon({name:t,theme:i,params:e,set:r,defaults:a}),d=Object.entries(n).reduce((h,[m,y])=>h.push(`${m}="${y}"`)&&h,[]).join(" ");return Object.entries(l||{}).reduce((h,[m,y])=>{if(y?.css){let w=Yi(y?.css),T=`${m}-variables`;h.push(`<style type="text/css" data-primevue-style-id="${T}" ${d}>${w}</style>`)}return h},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:a}){var l;let d={name:t,theme:i,params:e,set:r,defaults:a},h=(l=t.includes("-directive")?this.getPresetD(d):this.getPresetC(d))==null?void 0:l.css,m=Object.entries(n).reduce((y,[w,T])=>y.push(`${w}="${T}"`)&&y,[]).join(" ");return h?`<style type="text/css" data-primevue-style-id="${t}-variables" ${m}>${Yi(h)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([a,l])=>{let d=Ut(a,i.variable.excludedKeyRegex)?e:e?`${e}.${Eu(a)}`:Eu(a),h=n?`${n}.${a}`:a;yn(l)?this.createTokens(l,i,d,h,r):(r[d]||(r[d]={paths:[],computed(m,y={}){var w,T;return this.paths.length===1?(w=this.paths[0])==null?void 0:w.computed(this.paths[0].scheme,y.binding):m&&m!=="none"?(T=this.paths.find(I=>I.scheme===m))==null?void 0:T.computed(m,y.binding):this.paths.map(I=>I.computed(I.scheme,y[I.scheme]))}}),r[d].paths.push({path:h,value:l,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed(m,y={}){let w=/{([^}]*)}/g,T=l;if(y.name=this.path,y.binding||(y.binding={}),Ut(l,w)){let z=l.trim().replaceAll(w,ye=>{var Ee;let we=ye.replace(/{|}/g,""),Ge=(Ee=r[we])==null?void 0:Ee.computed(m,y);return js(Ge)&&Ge.length===2?`light-dark(${Ge[0].value},${Ge[1].value})`:Ge?.value}),V=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,U=/var\([^)]+\)/g;T=Ut(z.replace(U,"0"),V)?`calc(${z})`:z}return pt(y.binding)&&delete y.binding,{colorScheme:m,path:this.path,paths:y,value:T.includes("undefined")?void 0:T}}}))}),r},getTokenValue(t,i,e){var n;let a=(h=>h.split(".").filter(y=>!Ut(y.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),l=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,d=[(n=t[a])==null?void 0:n.computed(l)].flat().filter(h=>h);return d.length===1?d[0].value:d.reduce((h={},m)=>{let y=m,{colorScheme:w}=y,T=qn(y,["colorScheme"]);return h[w]=T,h},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Hr(Oe(i)?`${t}${i},${t} ${i}`:t,n):Hr(t,Oe(i)?Hr(i,n):n)},transformCSS(t,i,e,n,r={},a,l,d){if(Oe(i)){let{cssLayer:h}=r;if(n!=="style"){let m=this.getColorSchemeOption(r,l);i=e==="dark"?m.reduce((y,{type:w,selector:T})=>(Oe(T)&&(y+=T.includes("[CSS]")?T.replace("[CSS]",i):this.getSelectorRule(T,d,w,i)),y),""):Hr(d??":root",i)}if(h){let m={name:"primeui",order:"primeui"};yn(h)&&(m.name=tn(h.name,{name:t,type:n})),Oe(m.name)&&(i=Hr(`@layer ${m.name}`,i),a?.layerNames(m.name))}return i}return""}},Pe={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Pu(Sn({},i),{options:Sn(Sn({},this.defaults.options),i.options)}),this._tokens=wn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Ht.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Pu(Sn({},this.theme),{preset:t}),this._tokens=wn.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Ht.emit("preset:change",t),Ht.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Pu(Sn({},this.theme),{options:t}),this.clearLoadedStyleNames(),Ht.emit("options:change",t),Ht.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return wn.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return wn.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return wn.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return wn.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return wn.getPreset(r)},getLayerOrderCSS(t=""){return wn.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return wn.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return wn.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return wn.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Ht.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&Ht.emit("theme:load"))}};var _C=0,Fg=(()=>{class t{document=D(Fe);use(e,n={}){let r=!1,a=e,l=null,{immediate:d=!0,manual:h=!1,name:m=`style_${++_C}`,id:y=void 0,media:w=void 0,nonce:T=void 0,first:I=!1,props:z={}}=n;if(this.document){if(l=this.document.querySelector(`style[data-primeng-style-id="${m}"]`)||y&&this.document.getElementById(y)||this.document.createElement("style"),!l.isConnected){a=e;let V=this.document.head;I&&V.firstChild?V.insertBefore(l,V.firstChild):V.appendChild(l),Bs(l,{type:"text/css",media:w,nonce:T,"data-primeng-style-id":m})}return l.textContent!==a&&(l.textContent=a),{id:y,name:m,el:l,css:a}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qr={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},CC=({dt:t})=>`
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
`,wC=({dt:t})=>`
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
`,ue=(()=>{class t{name="base";useStyle=D(Fg);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=a=>a)=>{let a=r(tn(e,{dt:zr}));return a?this.useStyle.use(Yi(a),k({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>Pe.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(wC,e);loadGlobalTheme=(e={},n="")=>this.load(CC,e,(r="")=>Pe.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>Pe.getCommon(this.name,e);getComponentTheme=e=>Pe.getComponent(this.name,e);getDirectiveTheme=e=>Pe.getDirective(this.name,e);getPresetTheme=(e,n,r)=>Pe.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>Pe.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=tn(this.css,{dt:zr}),a=Yi(`${r}${e}`),l=Object.entries(n).reduce((d,[h,m])=>d.push(`${h}="${m}"`)&&d,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${l}>${a}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>Pe.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[Pe.getStyleSheet(this.name,e,n)];if(this.theme){let a=this.name==="base"?"global-style":`${this.name}-style`,l=tn(this.theme,{dt:zr}),d=Yi(Pe.transformCSS(a,l)),h=Object.entries(n).reduce((m,[y,w])=>m.push(`${y}="${w}"`)&&m,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${a}" ${h}>${d}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var SC=(()=>{class t{theme=Ke(void 0);csp=Ke({nonce:void 0});isThemeChanged=!1;document=D(Fe);baseStyle=D(ue);constructor(){mo(()=>{Ht.on("theme:change",e=>{Nt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),mo(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){Pe.clearLoadedStyleNames(),Ht.clear()}onThemeChange(e){Pe.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!Pe.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:a}=this.baseStyle.getCommonTheme?.()||{},l={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,k({name:"primitive-variables"},l)),this.baseStyle.load(n?.css,k({name:"semantic-variables"},l)),this.baseStyle.load(r?.css,k({name:"global-variables"},l)),this.baseStyle.loadGlobalTheme(k({name:"global-style"},l),a),Pe.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$u=(()=>{class t extends SC{ripple=Ke(!1);platformId=D(Yt);inputStyle=Ke(null);inputVariant=Ke(null);overlayOptions={};csp=Ke({nonce:void 0});filterMatchModeOptions={text:[yt.STARTS_WITH,yt.CONTAINS,yt.NOT_CONTAINS,yt.ENDS_WITH,yt.EQUALS,yt.NOT_EQUALS],numeric:[yt.EQUALS,yt.NOT_EQUALS,yt.LESS_THAN,yt.LESS_THAN_OR_EQUAL_TO,yt.GREATER_THAN,yt.GREATER_THAN_OR_EQUAL_TO],date:[yt.DATE_IS,yt.DATE_IS_NOT,yt.DATE_BEFORE,yt.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new nt;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=k(k({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:a,inputVariant:l,theme:d,overlayOptions:h,translation:m,filterMatchModeOptions:y}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),a&&this.inputStyle.set(a),l&&this.inputVariant.set(l),h&&(this.overlayOptions=h),m&&this.setTranslation(m),y&&(this.filterMatchModeOptions=y),d&&this.setThemeConfig({theme:d,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),DC=new se("PRIME_NG_CONFIG");function o4(...t){let i=t?.map(n=>({provide:DC,useValue:n,multi:!1})),e=go(()=>{let n=D($u);t?.forEach(r=>n.setConfig(r))});return ni([...i,e])}var Mg=(()=>{class t extends ue{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ae=(()=>{class t{document=D(Fe);platformId=D(Yt);el=D(It);injector=D(cn);cd=D(Pt);renderer=D(Zt);config=D($u);baseComponentStyle=D(Mg);baseStyle=D(ue);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=et("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return Us(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!vr(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Ht.off("theme:change",e))}_loadStyles(){let e=()=>{qr.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),qr.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!qr.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),qr.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Pe.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:a}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,k({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,k({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,k({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(k({name:"global-style"},this.styleOptions),a),Pe.setLoadedStyleName("common")}if(!Pe.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,k({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(k({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Pe.setLoadedStyleName(this.componentStyle?.name)}if(!Pe.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,k({name:"layer-order",first:!0},this.styleOptions)),Pe.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,k({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){qr.clearLoadedStyleNames(),Ht.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:k({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,inputs:{dt:"dt"},features:[oe([Mg,ue]),ot]})}return t})();var Bu=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let a=0;a<r.length;a++)e.classList.add(r[a])}else{let r=n.split(" ");for(let a=0;a<r.length;a++)e.className+=" "+r[a]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(a=>this.removeClass(e,a)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var a=0;a<n.length;a++){if(n[a]==e)return r;n[a].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],a=0;for(var l=0;l<r.length;l++){if(r[l]==e)return a;r[l].attributes&&r[l].attributes[n]&&r[l].nodeType==1&&a++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",a=!0){e&&n&&(a&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let a=Ee=>{if(Ee)return getComputedStyle(Ee).getPropertyValue("position")==="relative"?Ee:a(Ee.parentElement)},l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),d=n.offsetHeight,h=n.getBoundingClientRect(),m=this.getWindowScrollTop(),y=this.getWindowScrollLeft(),w=this.getViewport(),I=a(e)?.getBoundingClientRect()||{top:-1*m,left:-1*y},z,V;h.top+d+l.height>w.height?(z=h.top-I.top-l.height,e.style.transformOrigin="bottom",h.top+z<0&&(z=-1*h.top)):(z=d+h.top-I.top,e.style.transformOrigin="top");let U=h.left+l.width-w.width,ye=h.left-I.left;l.width>w.width?V=(h.left-I.left)*-1:U>0?V=ye-U:V=h.left-I.left,e.style.top=z+"px",e.style.left=V+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=a.height,d=a.width,h=n.offsetHeight,m=n.offsetWidth,y=n.getBoundingClientRect(),w=this.getWindowScrollTop(),T=this.getWindowScrollLeft(),I=this.getViewport(),z,V;y.top+h+l>I.height?(z=y.top+w-l,e.style.transformOrigin="bottom",z<0&&(z=w)):(z=h+y.top+w,e.style.transformOrigin="top"),y.left+d>I.width?V=Math.max(0,y.left+T+m-d):V=y.left+T,e.style.top=z+"px",e.style.left=V+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),a=/(auto|scroll)/,l=d=>{let h=window.getComputedStyle(d,null);return a.test(h.getPropertyValue("overflow"))||a.test(h.getPropertyValue("overflowX"))||a.test(h.getPropertyValue("overflowY"))};for(let d of r){let h=d.nodeType===1&&d.dataset.scrollselectors;if(h){let m=h.split(",");for(let y of m){let w=this.findSingle(d,y);w&&l(w)&&n.push(w)}}d.nodeType!==9&&l(d)&&n.push(d)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),a=r?parseFloat(r):0,l=getComputedStyle(e).getPropertyValue("paddingTop"),d=l?parseFloat(l):0,h=e.getBoundingClientRect(),y=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-a-d,w=e.scrollTop,T=e.clientHeight,I=this.getOuterHeight(n);y<0?e.scrollTop=w+y:y+I>T&&(e.scrollTop=w+y-T+I)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,a=0,l=function(){a=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=a,r=+new Date,+a<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};l()}static fadeOut(e,n){var r=1,a=50,l=n,d=a/l;let h=setInterval(()=>{r=r-d,r<=0&&(r=0,clearInterval(h)),e.style.opacity=r},a)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,a=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(l){return[].indexOf.call(document.querySelectorAll(l),this)!==-1};return a.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let a=getComputedStyle(e);r+=parseFloat(a.marginLeft)+parseFloat(a.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let a=getComputedStyle(e);r+=parseFloat(a.marginTop)+parseFloat(a.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,a=n.getElementsByTagName("body")[0],l=e.innerWidth||r.clientWidth||a.clientWidth,d=e.innerHeight||r.clientHeight||a.clientHeight;return{width:l,height:d}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var a=e.indexOf("rv:");return!0}var l=e.indexOf("Edge/");return l>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),a=[];for(let l of r){let d=getComputedStyle(l);this.isVisible(l)&&d.display!="none"&&d.visibility!="hidden"&&a.push(l)}return a}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let a=getComputedStyle(r);if(this.isVisible(r)&&a.display!="none"&&a.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),a=0;if(r&&r.length>0){let l=r.indexOf(r[0].ownerDocument.activeElement);n?l==-1||l===0?a=r.length-1:a=l-1:l!=-1&&l!==r.length-1&&(a=l+1)}return r[a]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let l=(d=>!!(d&&d.constructor&&d.call&&d.apply))(e)?e():e;return l&&l.nodeType===9||this.isExist(l)?l:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let a=document.createElement(e);return this.setAttributes(a,n),a.append(...r),a}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(a,l)=>{let d=e?.$attrs?.[a]?[e?.$attrs?.[a]]:[];return[l].flat().reduce((h,m)=>{if(m!=null){let y=typeof m;if(y==="string"||y==="number")h.push(m);else if(y==="object"){let w=Array.isArray(m)?r(a,m):Object.entries(m).map(([T,I])=>a==="style"&&(I||I===0)?`${T.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${I}`:I?T:void 0);h=w.length?h.concat(w.filter(T=>!!T)):h}}return h},d)};Object.entries(n).forEach(([a,l])=>{if(l!=null){let d=a.match(/^on(.+)/);d?e.addEventListener(d[1].toLowerCase(),l):a==="pBind"?this.setAttributes(e,l):(l=a==="class"?[...new Set(r("class",l))].join(" ").trim():a==="style"?r("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[a]=l),e.setAttribute(a,l))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),rl=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Bu.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var ol=(()=>{class t extends ae{autofocus=!1;_autofocus=!1;focused=!1;platformId=D(Yt);document=D(Fe);host=D(It);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){An(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Bu.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",N],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[O]})}return t})(),T4=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var xC=["input"],EC=(t,i,e,n,r)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":t,"p-disabled":i,"p-variant-filled":e,"p-radiobutton-sm p-inputfield-sm":n,"p-radiobutton-lg p-inputfield-lg":r}),TC=({dt:t})=>`
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
`,AC={root:({instance:t,props:i})=>["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Lg=(()=>{class t extends ue{name="radiobutton";theme=TC;classes=AC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var IC={provide:_i,useExisting:ut(()=>al),multi:!0},kC=(()=>{class t{accessors=[];add(e,n){this.accessors.push([e,n])}remove(e){this.accessors=this.accessors.filter(n=>n[1]!==e)}select(e){this.accessors.forEach(n=>{this.isSameGroup(n,e)&&n[1]!==e&&n[1].writeValue(e.value)})}isSameGroup(e,n){return e[0].control?e[0].control.root===n.control.control.root&&e[1].name===n.name:!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),al=(()=>{class t extends ae{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new W;onFocus=new W;onBlur=new W;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=D(Lg);injector=D(cn);registry=D(kC);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(_n),this.checkName(),this.registry.add(this.control,this)}onChange(e){this.disabled||this.select(e)}select(e){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.binary?this.checked=!!e:this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,r){if(n&1&&un(xC,5),n&2){let a;j(a=H())&&(r.inputViewChild=a.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",N],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",Le],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",N],binary:[2,"binary","binary",N]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([IC,Lg]),O],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(n,r){if(n&1){let a=Ae();S(0,"div",1)(1,"input",2,0),ee("focus",function(d){return X(a),J(r.onInputFocus(d))})("blur",function(d){return X(a),J(r.onInputBlur(d))})("change",function(d){return X(a),J(r.onChange(d))}),x(),S(3,"div",3),L(4,"div",4),x()()}n&2&&(B(r.styleClass),g("ngStyle",r.style)("ngClass",Ha(18,EC,r.checked,r.disabled,r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled",r.size==="small",r.size==="large")),E("data-pc-name","radiobutton")("data-pc-section","root"),b(),g("checked",r.checked)("disabled",r.disabled)("value",r.value)("pAutoFocus",r.autofocus),E("id",r.inputId)("name",r.name)("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel)("tabindex",r.tabindex)("aria-checked",r.checked),b(2),E("data-pc-section","input"),b(),E("data-pc-section","icon"))},dependencies:[le,We,vt,ol,ne],encapsulation:2,changeDetection:0})}return t})(),H4=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[al,ne,ne]})}return t})();var FC=({dt:t})=>`
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
`,MC={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":Oe(t.value)&&String(t.value).length===1,"p-badge-dot":pt(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Rg=(()=>{class t extends ue{name="badge";theme=FC;classes=MC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Vu=(()=>{class t extends ae{styleClass=Rt();style=Rt();badgeSize=Rt();size=Rt();severity=Rt();value=Rt();badgeDisabled=Rt(!1,{transform:N});_componentStyle=D(Rg);containerClass=Xe(()=>{let e="p-badge p-component";return Oe(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),pt(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(St(r.style()),B(r.containerClass()),En("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[oe([Rg]),O],decls:1,vars:1,template:function(n,r){n&1&&me(0),n&2&&qe(r.value())},dependencies:[le,ne],encapsulation:2,changeDetection:0})}return t})(),Og=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Vu,ne,ne]})}return t})();var RC=["*"],OC=`
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
`,PC=(()=>{class t extends ue{name="baseicon";inlineStyles=OC;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Re=(()=>{class t extends ae{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=pt(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",N],styleClass:"styleClass"},features:[oe([PC]),O],ngContentSelectors:RC,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},encapsulation:2,changeDetection:0})}return t})();var gM=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["AngleRightIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var sl=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["CheckIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Uu=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["ChevronDownIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var wM=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["ChevronLeftIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var xM=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["ChevronRightIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var ju=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["ChevronUpIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Pg=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["ExclamationTriangleIcon"]],features:[O],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0)(1,"g"),L(2,"path",1)(3,"path",2)(4,"path",3),x(),S(5,"defs")(6,"clipPath",4),L(7,"rect",5),x()()()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),E("clip-path",r.pathId),b(5),g("id",r.pathId))},encapsulation:2})}return t})();var Ng=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["InfoCircleIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0)(1,"g"),L(2,"path",1),x(),S(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),E("clip-path",r.pathId),b(3),g("id",r.pathId))},encapsulation:2})}return t})();var $g=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["MinusIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Bg=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["PlusIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0)(1,"g"),L(2,"path",1),x(),S(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),E("clip-path",r.pathId),b(3),g("id",r.pathId))},encapsulation:2})}return t})();var Vg=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["SpinnerIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0)(1,"g"),L(2,"path",1),x(),S(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),E("clip-path",r.pathId),b(3),g("id",r.pathId))},encapsulation:2})}return t})();var Wr=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["TimesIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0),L(1,"path",1),x()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Ug=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["TimesCircleIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0)(1,"g"),L(2,"path",1),x(),S(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),E("clip-path",r.pathId),b(3),g("id",r.pathId))},encapsulation:2})}return t})();var jg=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+et()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["UploadIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Me(),S(0,"svg",0)(1,"g"),L(2,"path",1),x(),S(3,"defs")(4,"clipPath",2),L(5,"rect",3),x()()()),n&2&&(B(r.getClassNames()),E("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),E("clip-path",r.pathId),b(3),g("id",r.pathId))},encapsulation:2})}return t})();var NC=({dt:t})=>`
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
`,$C={root:"p-ink"},Hg=(()=>{class t extends ue{name="ripple";theme=NC;classes=$C;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var wi=(()=>{class t extends ae{zone=D(ft);_componentStyle=D(Hg);animationListener;mouseDownListener;timeout;constructor(){super(),mo(()=>{An(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(On(n,"p-ink-active"),!wu(n)&&!Du(n)){let d=Math.max(vn(this.el.nativeElement),en(this.el.nativeElement));n.style.height=d+"px",n.style.width=d+"px"}let r=Su(this.el.nativeElement),a=e.pageX-r.left+this.document.body.scrollTop-Du(n)/2,l=e.pageY-r.top+this.document.body.scrollLeft-wu(n)/2;this.renderer.setStyle(n,"top",l+"px"),this.renderer.setStyle(n,"left",a+"px"),Rn(n,"p-ink-active"),this.timeout=setTimeout(()=>{let d=this.getInk();d&&On(d,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&On(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),On(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,qf(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[oe([Hg]),O]})}return t})(),oL=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var BC=["content"],VC=["loadingicon"],UC=["icon"],jC=["*"],Gg=t=>({class:t});function HC(t,i){t&1&&xe(0)}function zC(t,i){if(t&1&&L(0,"span",8),t&2){let e=_(3);g("ngClass",e.iconClass()),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function qC(t,i){if(t&1&&L(0,"SpinnerIcon",9),t&2){let e=_(3);g("styleClass",e.spinnerIconClass())("spin",!0),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function WC(t,i){if(t&1&&(He(0),A(1,zC,1,3,"span",6)(2,qC,1,4,"SpinnerIcon",7),ze()),t&2){let e=_(2);b(),g("ngIf",e.loadingIcon),b(),g("ngIf",!e.loadingIcon)}}function GC(t,i){}function KC(t,i){if(t&1&&A(0,GC,0,0,"ng-template",10),t&2){let e=_(2);g("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function QC(t,i){if(t&1&&(He(0),A(1,WC,3,2,"ng-container",2)(2,KC,1,1,null,5),ze()),t&2){let e=_();b(),g("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),b(),g("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",ke(3,Gg,e.iconClass()))}}function YC(t,i){if(t&1&&L(0,"span",8),t&2){let e=_(2);B(e.icon),g("ngClass",e.iconClass()),E("data-pc-section","icon")}}function ZC(t,i){}function XC(t,i){if(t&1&&A(0,ZC,0,0,"ng-template",10),t&2){let e=_(2);g("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function JC(t,i){if(t&1&&(He(0),A(1,YC,1,4,"span",11)(2,XC,1,1,null,5),ze()),t&2){let e=_();b(),g("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),b(),g("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ke(3,Gg,e.iconClass()))}}function ew(t,i){if(t&1&&(S(0,"span",12),me(1),x()),t&2){let e=_();E("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),b(),qe(e.label)}}function tw(t,i){if(t&1&&L(0,"p-badge",13),t&2){let e=_();g("value",e.badge)("severity",e.badgeSeverity)}}var nw=({dt:t})=>`
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
`,iw={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Di=(()=>{class t extends ue{name="button";theme=nw;classes=iw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Si={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},qg=(()=>{class t extends ae{_componentStyle=D(Di);static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ze("p-button-label",!0)},features:[oe([Di]),O]})}return t})(),Wg=(()=>{class t extends ae{_componentStyle=D(Di);static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ze("p-button-icon",!0)},features:[oe([Di]),O]})}return t})(),EL=(()=>{class t extends ae{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=rc(Wg);labelSignal=rc(qg);isIconOnly=Xe(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Si);isTextButton=Xe(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;_componentStyle=D(Di);ngAfterViewInit(){super.ngAfterViewInit(),Rn(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let a in r)this[a]=r[a]}}getStyleClass(){let e=[Si.button,Si.component];return this.icon&&!this.label&&pt(this.htmlElement.textContent)&&e.push(Si.iconOnly),this.loading&&(e.push(Si.disabled,Si.loading),!this.icon&&this.label&&e.push(Si.labelOnly),this.icon&&!this.label&&!pt(this.htmlElement.textContent)&&e.push(Si.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return pt(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(r=>e.some(a=>r===`p-button-${a}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Ft(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Ft(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&Rn(n,r);let a=this.getIconClass();a&&Rn(n,a),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Ft(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Ft(this.htmlElement,".p-button-icon"),n=Ft(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275dir=ce({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,a){n&1&&(pc(a,r.iconSignal,Wg,5),pc(a,r.labelSignal,qg,5)),n&2&&Gp(2)},hostVars:4,hostBindings:function(n,r){n&2&&Ze("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",N],rounded:[2,"rounded","rounded",N],text:[2,"text","text",N],outlined:[2,"outlined","outlined",N],size:"size",plain:[2,"plain","plain",N],fluid:[2,"fluid","fluid",N],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[oe([Di]),O,ot]})}return t})(),Wn=(()=>{class t extends ae{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new W;onFocus=new W;onBlur=new W;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return pt(this.fluid)?!!n:this.fluid}_componentStyle=D(Di);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let a in r)this[a]=r[a]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-button"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,BC,5),Y(a,VC,5),Y(a,UC,5),Y(a,at,4)),n&2){let l;j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.loadingIconTemplate=l.first),j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",N],loading:[2,"loading","loading",N],loadingIcon:"loadingIcon",raised:[2,"raised","raised",N],rounded:[2,"rounded","rounded",N],text:[2,"text","text",N],plain:[2,"plain","plain",N],severity:"severity",outlined:[2,"outlined","outlined",N],link:[2,"link","link",N],tabindex:[2,"tabindex","tabindex",Le],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",N],fluid:[2,"fluid","fluid",N],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([Di]),O,ot],ngContentSelectors:jC,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(Qe(),S(0,"button",0),ee("click",function(l){return r.onClick.emit(l)})("focus",function(l){return r.onFocus.emit(l)})("blur",function(l){return r.onBlur.emit(l)}),Be(1),A(2,HC,1,0,"ng-container",1)(3,QC,3,5,"ng-container",2)(4,JC,3,5,"ng-container",2)(5,ew,2,3,"span",3)(6,tw,1,2,"p-badge",4),x()),n&2&&(g("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),E("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),b(2),g("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),b(),g("ngIf",r.loading),b(),g("ngIf",!r.loading),b(),g("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),b(),g("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[le,We,je,Je,vt,wi,ol,Vg,Og,Vu,ne],encapsulation:2,changeDetection:0})}return t})(),Gr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[le,Wn,ne,ne]})}return t})();var rw=["container"],ow=["icon"],aw=["closeicon"],sw=["*"],lw=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),cw=t=>({value:"visible()",params:t}),uw=t=>({closeCallback:t});function dw(t,i){t&1&&xe(0)}function pw(t,i){if(t&1&&A(0,dw,1,0,"ng-container",7),t&2){let e=_(2);g("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function hw(t,i){if(t&1&&L(0,"i",3),t&2){let e=_(2);g("ngClass",e.icon)}}function fw(t,i){if(t&1&&L(0,"span",9),t&2){let e=_(3);g("ngClass",e.cx("text"))("innerHTML",e.text,Ba)}}function gw(t,i){if(t&1&&(S(0,"div"),A(1,fw,1,2,"span",8),x()),t&2){let e=_(2);b(),g("ngIf",!e.escape)}}function mw(t,i){if(t&1&&(S(0,"span",5),me(1),x()),t&2){let e=_(3);g("ngClass",e.cx("text")),b(),qe(e.text)}}function bw(t,i){if(t&1&&A(0,mw,2,2,"span",10),t&2){let e=_(2);g("ngIf",e.escape&&e.text)}}function vw(t,i){t&1&&xe(0)}function yw(t,i){if(t&1&&A(0,vw,1,0,"ng-container",11),t&2){let e=_(2);g("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",ke(2,uw,e.close.bind(e)))}}function _w(t,i){if(t&1&&(S(0,"span",5),Be(1),x()),t&2){let e=_(2);g("ngClass",e.cx("text"))}}function Cw(t,i){if(t&1&&L(0,"i",13),t&2){let e=_(3);g("ngClass",e.closeIcon)}}function ww(t,i){t&1&&xe(0)}function Sw(t,i){if(t&1&&A(0,ww,1,0,"ng-container",7),t&2){let e=_(3);g("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Dw(t,i){t&1&&L(0,"TimesIcon",14)}function xw(t,i){if(t&1){let e=Ae();S(0,"button",12),ee("click",function(r){X(e);let a=_(2);return J(a.close(r))}),A(1,Cw,1,1,"i",13)(2,Sw,1,1,"ng-container")(3,Dw,1,0,"TimesIcon",14),x()}if(t&2){let e=_(2);E("aria-label",e.closeAriaLabel),b(),Te(e.closeIcon?1:-1),b(),Te(e.closeIconTemplate||e._closeIconTemplate?2:-1),b(),Te(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Ew(t,i){if(t&1&&(S(0,"div",1)(1,"div",2),A(2,pw,1,1,"ng-container")(3,hw,1,1,"i",3)(4,gw,2,1,"div",4)(5,bw,1,1,"ng-template",null,0,Tn)(7,yw,1,4,"ng-container")(8,_w,2,1,"span",5)(9,xw,4,4,"button",6),x()()),t&2){let e=Xt(6),n=_();g("ngClass",n.containerClass)("@messageAnimation",ke(13,cw,oi(10,lw,n.showTransitionOptions,n.hideTransitionOptions))),E("aria-live","polite")("role","alert"),b(2),Te(n.iconTemplate||n._iconTemplate?2:-1),b(),Te(n.icon?3:-1),b(),g("ngIf",!n.escape)("ngIfElse",e),b(3),Te(n.containerTemplate||n._containerTemplate?7:8),b(2),Te(n.closable?9:-1)}}var Tw=({dt:t})=>`
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
}`,Aw={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Kg=(()=>{class t extends ue{name="message";theme=Tw;classes=Aw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Gn=(()=>{class t extends ae{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new W;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",n=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${n}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Ke(!0);_componentStyle=D(Kg);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-message"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,rw,4),Y(a,ow,4),Y(a,aw,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.containerTemplate=l.first),j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.closeIconTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",N],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",N],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[oe([Kg]),O],ngContentSelectors:sw,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(n,r){n&1&&(Qe(),A(0,Ew,10,15,"div",1)),n&2&&Te(r.visible()?0:-1)},dependencies:[le,We,je,Je,Wr,wi,ne],encapsulation:2,data:{animation:[dn("messageAnimation",[Dt(":enter",[bt({opacity:0,transform:"translateY(-25%)"}),kt("{{showTransitionParams}}")]),Dt(":leave",[kt("{{hideTransitionParams}}",bt({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),Qg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Gn,ne,ne]})}return t})();var Pn=class t{selectedUploadType=Ke("url");getSelectedUploadType=Xe(()=>this.selectedUploadType());setUploadType(i){this.selectedUploadType.set(i)}uploadData=Ke(null);originalUploadData=null;prevUploadData=[];maxHistory=20;getUploadData=Xe(()=>this.uploadData());setUploadData(i){this.uploadData.set(i)}mergeModifiedData(i){let e=this.uploadData()||{};this.uploadData.set(_e(k({},e),{modifiedHtml:i.modifiedHtml,modifiedUrl:i.modifiedUrl}))}mergeOriginalData(i){let e=this.uploadData()||{};this.uploadData.set(_e(k({},e),{originalHtml:i.originalHtml,originalUrl:i.originalUrl}))}mergeFoundFlags(i,e){let n=this.uploadData()||{},r=n.found||{original:{hidden:!0,modal:!0,dynamic:!0},modified:{hidden:!0,modal:!0,dynamic:!0}};this.uploadData.set(_e(k({},n),{found:_e(k({},r),{[i]:k(k({},r[i]),e)})}))}undoLastChange(){if(this.prevUploadData.length===0)return;let i=this.prevUploadData.pop()??null;this.uploadData.set(i)}isUndoDisabled(){return this.prevUploadData.length===0}savePreviousUploadData(){let i=this.uploadData();this.prevUploadData.push(i?structuredClone(i):null),this.prevUploadData.length>this.maxHistory&&this.prevUploadData.shift()}resetUploadFlow(){this.selectedUploadType.set("url"),this.uploadData.set(null),this.prevUploadData=[]}static \u0275fac=function(e){return new(e||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})};var Yg=`
<body
  vocab="http://schema.org/"
  typeof="WebPage"
  resource="#wb-webpage"
  class="cnt-wdth-lmtd"
>
  <main
    property="mainContentOfPage"
    resource="#wb-main"
    typeof="WebPageElement"
  >
    <div class="mwsgeneric-base-html parbase section">
      <div class="provisional profile">
        <div class="container">
          <div class="intro mrgn-bttm-md">
            <h1 property="name" id="wb-cont">Personal income tax</h1>
          </div>
          <section
            data-ajax-replace="/content/dam/cra-arc/includes/chatbot.txt#eng"
          >
            <div class="container">
              <section class="alert alert-info">
                <h2 class="h3">
                  Switching some benefit recipients from paper to online mail
                </h2>
                <p>
                  Starting
                  <span class="nowrap">July 3, 2025</span>
                  , some benefit recipients will now receive their CRA mail
                  online. If you are registered for a CRA account and currently
                  receive paper mail, you may now receive most of your mail in
                  My Account.</p>
                  <p>For more information, go to:
                  <a
                    href="https://www.canada.ca/en/revenue-agency/campaigns/changes-from-paper-to-online-mail-for-some-benefit-recipients.html"
                    target="_blank"
                  >
                    Change from paper to online mail for some benefit recipients
                  </a>
                  .
                </p>
              </section>
            </div>
            <p>
              <a href="#who">Who should file</a> a tax return, how to get ready and file taxes,
              payment and filing due dates, reporting income and claiming
              deductions, and how to make payments or check the status of your
              refund.
            </p>
          </section>
        </div>
      </div>
      <section
        class="provisional most-requested-bullets well well-sm brdr-0 brdr-rds-0"
      >
        <div class="container">
          <div class="row">
            <div class="pddng-r-0 col-md-2">
              <h2 class="mrgn-tp-md">Most requested</h2>
            </div>
            <div class="col-md-10">
              <!-- change to colcount-md-1 if you only have 2-3 most requested items -->

              <ul class="wb-eqht mrgn-tp-md mrgn-bttm-md colcount-md-2">
                <li>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file/tax-software.html"
                    target="_blank"
                  >
                    File a return with tax software
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html"
                    target="_blank"
                  >
                    File a paper return
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips.html"
                    target="_blank"
                  >
                    Tax slips
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/forms-publications.html"
                    target="_blank"
                  >
                    Forms and publications
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/make-payment.html"
                    target="_blank"
                  >
                    Make a payment
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/refunds.html"
                    target="_blank"
                  >
                    Tax refund
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/change-your-address.html"
                    target="_blank"
                  >
                    Change your address
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit/individuals.html"
                    target="_blank"
                  >
                    Direct deposit
                  </a>
                </li>
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
                <h3 id="who">
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/who-should-file-tax.html"
                    target="_blank"
                  >
                    Who should file
                  </a>
                </h3>
                <p>
                  Determine if you need to file a tax return, what are your tax
                  obligations
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html"
                    target="_blank"
                  >
                    Get ready to file
                  </a>
                </h3>
                <p>
                  What's new for 2024, get tax slips, NETFILE access code,
                  update your information
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file.html"
                    target="_blank"
                  >
                    How to file
                  </a>
                </h3>
                <p>
                  File using tax software or by paper, get help from a tax
                  specialist or service
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra.html"
                    target="_blank"
                  >
                    Paying your taxes
                  </a>
                </h3>
                <p>
                  Find options to pay a debt now or over time, pay 2025 taxes by
                  instalments
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file.html"
                    target="_blank"
                  >
                    After you file
                  </a>
                </h3>
                <p>
                  Get your notice of assessment (NOA), refund, proof of income,
                  pay a balance owing, change a return
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/help-others.html"
                    target="_blank"
                  >
                    Help others with their taxes
                  </a>
                </h3>
                <p>
                  Authorized representatives, free tax clinics, filing for
                  someone who died
                </p>
              </div>
            </div>
            <h2 class="mrgn-bttm-0">Understand how taxes work</h2>
            <div class="wb-eqht row">
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html"
                    target="_blank"
                  >
                    Due dates and payment dates
                  </a>
                </h3>
                <p>
                  Filing and payment due dates for taxes, contributions,
                  instalments or other amounts
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/reporting-income.html"
                    target="_blank"
                  >
                    Types of income to report
                  </a>
                </h3>
                <p>
                  What you need to report as income, how to enter amounts on
                  your tax return
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html"
                    target="_blank"
                  >
                    Deductions, credits, and expenses to claim
                  </a>
                </h3>
                <p>
                  Deductions, credits, and expenses to reduce the amount of tax
                  you have to pay
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html"
                    target="_blank"
                  >
                    Tax rates and income brackets
                  </a>
                </h3>
                <p>
                  Find federal, provincial and territorial tax rates, understand
                  income tax brackets
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties.html"
                    target="_blank"
                  >
                    Interest and penalties
                  </a>
                </h3>
                <p>
                  When and how interest charges and penalties are applied,
                  late-filing, other penalties
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs.html"
                    target="_blank"
                  >
                    Learn about your taxes
                  </a>
                </h3>
                <p>
                  Learn about our tax system, how it works, why we pay taxes
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="well well-sm brdr-0 brdr-rds-0 mrgn-tp-lg">
        <div class="container">
          <h2 class="mrgn-tp-md h3">Focus on</h2>
          <ul class="mrgn-tp-md mrgn-bttm-md colcount-md-2">
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities.html"
                target="_blank"
              >
                Persons with disabilities and their caregivers
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/changes-your-taxes-when-you-retire-turn-65-years-old.html"
                target="_blank"
              >
                Adults 65 years and older
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html"
                target="_blank"
              >
                Newcomers to Canada
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/students.html"
                target="_blank"
              >
                Students
              </a>
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
                    <div class="well eqht-trgt">
                      <a
                        href="https://www.canada.ca/en/revenue-agency/campaigns/dedicated-telephone-service.html"
                        data-gc-analytics="promo:promotionalfeature"
                        target="_blank"
                      >
                        <figure>
                          <div>
                            <img
                              src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/ft-20250516-360x203.jpg"
                              alt=""
                              class="img-responsive thumbnail mrgn-bttm-sm"
                            />
                          </div>
                          <figcaption>Dedicated Telephone Service</figcaption>
                          <div>
                            <p>
                              Income tax service providers&nbsp;\u2013 register for
                              our free telephone service for help with your
                              interpretive income tax questions.
                            </p>
                          </div>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <!-- feature 2 -->
                  <div class="col-md-4 col-sm-6 mrgn-rght-0 mrgn-lft-0">
                    <div class="well eqht-trgt">
                      <a
                        href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file.html"
                        data-gc-analytics="promo:promotionalfeature"
                        target="_blank"
                      >
                        <figure>
                          <div>
                            <img
                              src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/ft-230126-360x203-3.jpg"
                              alt=""
                              class="img-responsive thumbnail mrgn-bttm-sm"
                            />
                          </div>
                          <figcaption>After filing a tax return</figcaption>
                          <div>
                            <p>
                              Information you may need after you file your tax
                              return.
                            </p>
                          </div>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <!-- feature 3 -->

                  <div class="col-md-4 col-sm-6 mrgn-rght-0">
                    <div class="well eqht-trgt">
                      <a
                        href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file/change-return.html"
                        data-gc-analytics="promo:promotionalfeature"
                        target="_blank"
                      >
                        <figure>
                          <div>
                            <img
                              src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-20.jpg"
                              alt=""
                              class="img-responsive thumbnail mrgn-bttm-sm"
                            />
                          </div>
                          <figcaption>
                            Request a change to your tax return online
                          </figcaption>
                          <div>
                            <p>
                              For faster service, submit your change request
                              online.
                            </p>
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
              <li>
                <a
                  href="https://www.canada.ca/en/revenue-agency.html"
                  target="_blank"
                >
                  Canada Revenue Agency
                </a>
              </li>
            </ul>
          </section>
          <section class="col-md-4 mrgn-bttm-sm">
            <div
              style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;"
            >
              <div>
                <div
                  id="social-media-en"
                  class="gc-followus gc-followus-horizontal"
                >
                  <h2>On social media</h2>
                  <ul class="list-inline">
                    <li>
                      <a
                        href="https://www.facebook.com/canrevagency/"
                        rel="external"
                        class="social-lnk facebook"
                        target="_blank"
                      >
                        <span
                          class=""
                          style="border: 2px solid rgb(111, 159, 255);"
                        >
                          Facebook
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/CanRevAgency"
                        rel="external"
                        class="x-social"
                        target="_blank"
                      >
                        <span
                          class=""
                          style="border: 2px solid rgb(111, 159, 255);"
                        >
                          X
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/user/CanRevAgency"
                        rel="external"
                        class="social-lnk youtube"
                        target="_blank"
                      >
                        <span
                          class=""
                          style="border: 2px solid rgb(111, 159, 255);"
                        >
                          YouTube
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.instagram.com/canrevagency"
                        rel="external"
                        class="social-lnk instagram"
                        target="_blank"
                      >
                        <span
                          class=""
                          style="border: 2px solid rgb(111, 159, 255);"
                        >
                          Instagram
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/cra-arc"
                        rel="external"
                        class="social-lnk linkedin"
                        target="_blank"
                      >
                        <span
                          class=""
                          style="border: 2px solid rgb(111, 159, 255);"
                        >
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
      </div>
      <div class="container pagedetails">
        <h2 class="" style="border: 2px solid rgb(111, 159, 255);">
          Page details
        </h2>
        <div class="row">
          <div class="col-sm-8 col-md-9 col-lg-9">
            <div
              class="wb-disable-allow"
              data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html"
              data-feedback-section="PTR"
              data-feedback-theme="Taxes"
            ></div>
          </div>
        </div>
        <dl id="wb-dtmd">
          <dt>Date modified:</dt>
          <dd>
            <time property="dateModified">2025-07-09</time>
          </dd>
        </dl>
      </div>
    </div>
  </main>
</body>
`,Zg=`
<body
  vocab="http://schema.org/"
  typeof="WebPage"
  resource="#wb-webpage"
  class="cnt-wdth-lmtd"
>
  <main
    property="mainContentOfPage"
    resource="#wb-main"
    typeof="WebPageElement"
  >
    <div class="mwsgeneric-base-html parbase section">
      <div class="provisional profile">
        <div class="container">
          <div class="intro mrgn-bttm-md">
            <h1 property="name" id="wb-cont">Personal income tax</h1>
          </div>
          <section>
            <div class="container">
              <section class="alert alert-info">
                <h2 class="h3">
                  Switching some benefit recipients from paper to online mail
                </h2>
                <p>
                  Starting July 3, 2025, some benefit recipients will now
                  receive their CRA mail online. If you are registered for a CRA
                  account and currently receive paper mail, you may now receive
                  most of your mail in <a href="https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html">My Account</a>.
                </p>
              </section>
            </div>
            <p>
              Learn who should file a tax return, how to get ready and file
              taxes, payment and filing due dates, reporting income and claiming
              deductions, and how to make payments or check the status of your
              refund.
            </p>
          </section>
        </div>
      </div>
      <section
        class="provisional most-requested-bullets well well-sm brdr-0 brdr-rds-0"
      >
        <div class="container">
          <div class="row">
            <div class="pddng-r-0 col-md-2">
              <h2 class="mrgn-tp-md">Most requested</h2>
            </div>
            <div class="col-md-10">
              <ul class="wb-eqht mrgn-tp-md mrgn-bttm-md colcount-md-2">
                <li>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file/tax-software.html"
                    target="_blank"
                  >
                    File a return with tax software
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html"
                    target="_blank"
                  >
                    File a paper return
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips.html"
                    target="_blank"
                  >
                    Tax slips
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/forms-publications.html"
                    target="_blank"
                  >
                    Forms and publications
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/make-payment.html"
                    target="_blank"
                  >
                    Make a payment
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/refunds.html"
                    target="_blank"
                  >
                    Tax refund
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/change-your-address.html"
                    target="_blank"
                  >
                    Change your address
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit/individuals.html"
                    target="_blank"
                  >
                    Direct deposit
                  </a>
                </li>
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
                <h3 id="who">
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/who-should-file-tax.html"
                    target="_blank"
                  >
                    Who should file
                  </a>
                </h3>
                <p>
                  Determine if you need to file a tax return and understand your
                  tax obligations.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html"
                    target="_blank"
                  >
                    Get ready to file
                  </a>
                </h3>
                <p>
                  Learn what's new for 2024, get your tax slips, obtain your
                  NETFILE access code, and update your information.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/how-file.html"
                    target="_blank"
                  >
                    How to file
                  </a>
                </h3>
                <p>
                  File using tax software or by paper. Get help from a tax
                  specialist or service.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra.html"
                    target="_blank"
                  >
                    Paying your taxes
                  </a>
                </h3>
                <p>
                  Find options to pay a debt now or over time. Pay 2025 taxes by
                  instalments.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file.html"
                    target="_blank"
                  >
                    After you file
                  </a>
                </h3>
                <p>
                  Get your notice of assessment (NOA), refund, proof of income,
                  pay a balance owing, or change a return.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/help-others.html"
                    target="_blank"
                  >
                    Help others with their taxes
                  </a>
                </h3>
                <p>
                  Learn about authorized representatives, free tax clinics, and
                  filing for someone who died.
                </p>
              </div>
            </div>
            <h2 class="mrgn-bttm-0">Understand how taxes work</h2>
            <div class="wb-eqht row">
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html"
                    target="_blank"
                  >
                    Due dates and payment dates
                  </a>
                </h3>
                <p>
                  Find filing and payment due dates for taxes, contributions,
                  instalments, or other amounts.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/reporting-income.html"
                    target="_blank"
                  >
                    Types of income to report
                  </a>
                </h3>
                <p>
                  Learn what you need to report as income and how to enter
                  amounts on your tax return.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html"
                    target="_blank"
                  >
                    Deductions, credits, and expenses to claim
                  </a>
                </h3>
                <p>
                  Find deductions, credits, and expenses to reduce the amount of
                  tax you have to pay.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html"
                    target="_blank"
                  >
                    Tax rates and income brackets
                  </a>
                </h3>
                <p>
                  Find federal, provincial, and territorial tax rates.
                  Understand income tax brackets.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties.html"
                    target="_blank"
                  >
                    Interest and penalties
                  </a>
                </h3>
                <p>
                  Learn when and how interest charges and penalties are applied,
                  including late-filing penalties.
                </p>
              </div>
              <div class="col-md-6 col-lg-4">
                <h3>
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs.html"
                    target="_blank"
                  >
                    Learn about your taxes
                  </a>
                </h3>
                <p>
                  Learn about our tax system, how it works, and why we pay
                  taxes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="well well-sm brdr-0 brdr-rds-0 mrgn-tp-lg">
        <div class="container">
          <h2 class="mrgn-tp-md h3">Focus on</h2>
          <ul class="mrgn-tp-md mrgn-bttm-md colcount-md-2">
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities.html"
                target="_blank"
              >
                Persons with disabilities and their caregivers
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/changes-your-taxes-when-you-retire-turn-65-years-old.html"
                target="_blank"
              >
                Adults 65 years and older
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html"
                target="_blank"
              >
                Newcomers to Canada
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/students.html"
                target="_blank"
              >
                Students
              </a>
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
                  <div class="col-md-4 col-sm-6 mrgn-lft-0">
                    <div class="well eqht-trgt">
                      <a
                        href="https://www.canada.ca/en/revenue-agency/campaigns/dedicated-telephone-service.html"
                        data-gc-analytics="promo:promotionalfeature"
                        target="_blank"
                      >
                        <figure>
                          <div>
                            <img
                              src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/ft-20250516-360x203.jpg"
                              alt=""
                              class="img-responsive thumbnail mrgn-bttm-sm"
                            />
                          </div>
                          <figcaption>Dedicated Telephone Service</figcaption>
                          <div>
                            <p>
                              Income tax service providers \u2013 register for our
                              free telephone service for help with your
                              interpretive income tax questions.
                            </p>
                          </div>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mrgn-rght-0 mrgn-lft-0">
                    <div class="well eqht-trgt">
                      <a
                        href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file.html"
                        data-gc-analytics="promo:promotionalfeature"
                        target="_blank"
                      >
                        <figure>
                          <div>
                            <img
                              src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/ft-230126-360x203-3.jpg"
                              alt=""
                              class="img-responsive thumbnail mrgn-bttm-sm"
                            />
                          </div>
                          <figcaption>After filing a tax return</figcaption>
                          <div>
                            <p>
                              Find information you may need after you file your
                              tax return.
                            </p>
                          </div>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mrgn-rght-0">
                    <div class="well eqht-trgt">
                      <a
                        href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file/change-return.html"
                        data-gc-analytics="promo:promotionalfeature"
                        target="_blank"
                      >
                        <figure>
                          <div>
                            <img
                              src="https://www.canada.ca/content/dam/cra-arc/camp-promo/features/t1-ft-360x203-2021-12-20-20.jpg"
                              alt=""
                              class="img-responsive thumbnail mrgn-bttm-sm"
                            />
                          </div>
                          <figcaption>
                            Request a change to your tax return online
                          </figcaption>
                          <div>
                            <p>
                              For faster service, submit your change request
                              online.
                            </p>
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
              <li>
                <a
                  href="https://www.canada.ca/en/revenue-agency.html"
                  target="_blank"
                >
                  Canada Revenue Agency
                </a>
              </li>
            </ul>
          </section>
          <section class="col-md-4 mrgn-bttm-sm">
            <div
              style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;"
            >
              <div>
                <div
                  id="social-media-en"
                  class="gc-followus gc-followus-horizontal"
                >
                  <h2>On social media</h2>
                  <ul class="list-inline">
                    <li>
                      <a
                        href="https://www.facebook.com/canrevagency/"
                        rel="external"
                        class="social-lnk facebook"
                        target="_blank"
                      >
                        <span style="border: 2px solid rgb(111, 159, 255);">
                          Facebook
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/CanRevAgency"
                        rel="external"
                        class="x-social"
                        target="_blank"
                      >
                        <span style="border: 2px solid rgb(111, 159, 255);">
                          X
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/user/CanRevAgency"
                        rel="external"
                        class="social-lnk youtube"
                        target="_blank"
                      >
                        <span style="border: 2px solid rgb(111, 159, 255);">
                          YouTube
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.instagram.com/canrevagency"
                        rel="external"
                        class="social-lnk instagram"
                        target="_blank"
                      >
                        <span style="border: 2px solid rgb(111, 159, 255);">
                          Instagram
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/cra-arc"
                        rel="external"
                        class="social-lnk linkedin"
                        target="_blank"
                      >
                        <span style="border: 2px solid rgb(111, 159, 255);">
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
      </div>
      <div class="container pagedetails">
        <h2 style="border: 2px solid rgb(111, 159, 255);">Page details</h2>
        <div class="row">
          <div class="col-sm-8 col-md-9 col-lg-9">
            <div
              class="wb-disable-allow"
              data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html"
              data-feedback-section="PTR"
              data-feedback-theme="Taxes"
            ></div>
          </div>
        </div>
        <dl id="wb-dtmd">
          <dt>Date modified:</dt>
          <dd>
            <time property="dateModified">2025-07-09</time>
          </dd>
        </dl>
      </div>
    </div>
  </main>
</body>`,Xg=`
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
</div>`,Jg=`
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
</div>`,em=`
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
</ul>`,tm=`
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
</ul>`;var kw=My(sm());var xi=class t{constructor(i){this.uploadState=i}allowedHosts=new Set(["cra-design.github.io","cra-proto.github.io","gc-proto.github.io","test.canada.ca","www.canada.ca"]);fetchAndProcess(i){return De(this,null,function*(){let e=new URL(i);if(!this.allowedHosts.has(e.host))throw new Error(`${e.host} is blocked`);let n=yield fetch(`${i}?_=${Date.now()}`);if(!n.ok)throw new Error(`Fetch failed: HTTP ${n.status}`);console.warn(`Response code: ${n.status}`);let r=yield n.text();return yield this.extractContent(r)})}extractContent(i){return De(this,null,function*(){let e=new DOMParser().parseFromString(i,"text/html"),n={hidden:!1,modal:!1,dynamic:!1};n.dynamic||=yield this.processAjaxReplacements(e),n.dynamic||=yield this.processJsonReplacements(e),n.modal||=this.processModalDialogs(e),this.updateRelativeURLs(e,"https://www.canada.ca"),this.cleanupUnnecessaryElements(e),n.hidden||=this.displayInvisibleElements(e),this.addToc(e),this.sortAttributes(e);let r=e.querySelector("main");r||console.warn("No <main> tag found. Using full <body> content instead.");let a=r?r.outerHTML:e.body.innerHTML.trim();return{html:yield this.formatHtml(a),found:n}})}formatHtml(i,e){return De(this,null,function*(){try{let{default:n}=yield import("./chunk-EAVPTRKQ.js");return e==="word"&&(i=`<main  property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">${i}</main>`,i=i.replace("<h1>",'<h1 property="name" id="wb-cont" dir="ltr">').replace("<table>",'<table class="wb-tables table table-striped">')),e!=="ai"&&(i=`<body vocab="http://schema.org/" typeof="WebPage" resource="#wb-webpage" class=" cnt-wdth-lmtd">${i}</body>`),e==="ai"&&(i=this.aiCleanup(i)),n.format(i,{parser:"html",plugins:[kw],htmlWhitespaceSensitivity:"ignore",printWidth:200,singleAttributePerLine:!1})}catch(n){return console.error("Error formatting HTML:",n),i}})}aiCleanup(i){i=i.replace(/<p>```html<\/p>/,"```html\n").replace(/<p>```<\/p>/,"\n```");let e=i.match(/```(?:html)?\r?\n([\s\S]*?)\r?\n```/);e&&(i=e[1]),i=i.replace(/^<p>/,"").replace(/<\/p>$/,"").trim();let n=new DOMParser().parseFromString(i,"text/html");return n.querySelectorAll("p").forEach(r=>{let a=r.children;a.length===1&&a[0].matches("div, section, ul, ol, table, h1, h2, h3, h4, h5, h6")&&r.replaceWith(...r.childNodes)}),n.querySelectorAll("p").forEach(r=>{r.innerHTML.trim()===""&&r.remove()}),n.querySelectorAll("think").forEach(r=>{r.remove()}),n.body.outerHTML}processAjaxReplacements(i){return De(this,null,function*(){let e=!1,n="https://www.canada.ca",r=(h,m)=>De(null,null,function*(){try{let y=yield fetch(h);return m==="json"?y.json():y.text()}catch(y){return console.error(`Error fetching URL: ${h}`,y),m==="json"?{}:""}}),a=()=>De(null,null,function*(){let h=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]');if(h.length)e=!0;else return;for(let m of h){let y=m.tagName.toLowerCase(),w=m.attributes;for(let T=0;T<w.length;T++){let I=w[T],z=I.name,V=I.value;if(!z.startsWith("data-ajax-")||!V.startsWith("/"))continue;let[U,ye]=V.split("#"),Ee=`${n}${U}`,we=yield r(Ee,"text");if(!we)continue;let Ge=new DOMParser().parseFromString(we,"text/html"),Et;if(ye){let zt=Ge.querySelector(`#${ye}`);Et=zt?zt.outerHTML:""}else{if(/<html[\s>]/i.test(we)&&/<body[\s>]/i.test(we)){console.warn(`Skipping full document injection from: ${Ee}`);continue}Et=Ge.body?Ge.body.innerHTML:Ge.documentElement.innerHTML}if(!Et)continue;let nn=`
          <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
            <${y}>${Et}</${y}>
          </div>
        `;m.outerHTML=nn}}}),l,d=0;do l=d,yield a(),d=i.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]').length;while(d&&d!==l);return e})}processJsonReplacements(i){return De(this,null,function*(){let e=!1,n="https://www.canada.ca",r=(w,T)=>De(null,null,function*(){try{let I=yield fetch(w);return T==="json"?I.json():I.text()}catch(I){return console.error(`Error fetching URL: ${w}`,I),T==="json"?{}:""}}),a=w=>{let[T,I=""]=w.split("#");return{url:T,jsonKey:I.slice(1)}},l=w=>{try{return JSON.parse(w.replace(/&quot;/g,'"'))}catch(T){return console.error("Error parsing JSON config:",T),null}},d=(w,T)=>T.split("/").reduce((I,z)=>I&&I[z]!==void 0?I[z]:void 0,w),h=i.querySelectorAll("[data-wb-jsonmanager]");if(!h.length)return e;let m=new Map;return yield Promise.all(Array.from(h).map(w=>De(null,null,function*(){let T=w.getAttribute("data-wb-jsonmanager");if(!T)return;let I=l(T);if(!I?.url||!I?.name)return;let{url:z,jsonKey:V}=a(I.url),U=`${n}${z}`;try{let ye=yield r(U,"json"),Ee=d(ye,V);m.set(I.name,Ee)}catch(ye){console.error(`Error fetching JSON for ${I.name}:`,ye)}}))),i.querySelectorAll("[data-json-replace]").forEach(w=>{let I=(w.getAttribute("data-json-replace")||"").match(/^#\[(.*?)\](.*)$/);if(!I)return;let z=I[1],V=I[2].substring(1);if(!m.has(z)){console.warn(`No JSON data found for: ${z}`);return}let U=m.get(z),Ee=`
      <div style="
        border: 3px dashed #fbc02f;
        padding: 8px;
        border-radius: 4px;
      "> 
        ${d(U,V)} 
      </div>
    `;w.outerHTML=Ee,e=!0}),e})}cleanupUnnecessaryElements(i){["section#chat-bottom-bar","#gc-pft","header","footer","charlie"].forEach(n=>{i.querySelectorAll(n).forEach(r=>r.remove())})}displayInvisibleElements(i){let e=!1,n=[".wb-inv",".hidden",".nojs-show"];return n.forEach(r=>{i.querySelectorAll(r).forEach(a=>{a.classList.remove(...r.split(".").filter(Boolean)),a.style.border="2px solid #6F9FFF"})}),n.length>0&&(e=!0),e}processModalDialogs(i){let e=!1,n=i.querySelectorAll(".modal-dialog.modal-content");return n.forEach(r=>{r.classList.remove("mfp-hide");let a=i.createElement("div");for(a.setAttribute("style","border: 2px dashed #666; padding: 8px; border-radius: 4px;");r.firstChild;)a.appendChild(r.firstChild);r.appendChild(a)}),n.length>0&&(e=!0),e}updateRelativeURLs(i,e){let n=i.querySelectorAll("a"),r=i.querySelectorAll("img");n.forEach(a=>{let l=a.getAttribute("href");l&&(l.startsWith("/")?(a.setAttribute("href",`${e}${l}`),a.setAttribute("target","_blank")):/^(http|https):\/\//.test(l)&&a.setAttribute("target","_blank"))}),r.forEach(a=>{let l=a.getAttribute("src");l&&l.startsWith("/")&&a.setAttribute("src",`${e}${l}`)})}addToc(i){let e=i.querySelector(".section.mwsinpagetoc");if(!e)return;let n=Array.from(e.querySelectorAll("a")).map(a=>{let l=a.getAttribute("href"),d=a.textContent?.trim();return l?.startsWith("#")&&d?{id:l.slice(1),text:d}:null}).filter(a=>a!==null);if(!n.length)return;i.querySelectorAll("h2, h3, h4, h5, h6").forEach(a=>{let l=a.textContent?.trim();if(!l)return;let d=n.find(h=>h.text===l);d&&a.setAttribute("id",d.id)})}sortAttributes(i){i.querySelectorAll("*").forEach(e=>{if(!e.hasAttributes())return;let n=Array.from(e.attributes).sort((a,l)=>a.name.localeCompare(l.name)),r=e.cloneNode(!1);n.forEach(a=>r.setAttribute(a.name,a.value)),e.innerHTML&&(r.innerHTML=e.innerHTML),e.replaceWith(r)})}loadSampleDataset(i="webpage"){return De(this,null,function*(){let e,n,r;switch(i){case"snippet":e=yield this.extractContent(Xg),n=e.html,r=(yield this.extractContent(Jg)).html;break;case"word":n=yield this.formatHtml(em,"word"),e={html:n,found:{hidden:!1,modal:!1,dynamic:!1}},r=yield this.formatHtml(tm,"word");break;default:e=yield this.extractContent(Yg),n=e.html,r=(yield this.extractContent(Zg)).html;break}this.uploadState.setUploadData({originalUrl:`Original ${i}`,originalHtml:n,modifiedUrl:`Modified ${i}`,modifiedHtml:r,found:{original:e.found,modified:e.found}})})}static \u0275fac=function(e){return new(e||t)(Q(Pn))};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})};var lm=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),a,l,d;if(n&&r){if(l=i.length,l!=e.length)return!1;for(a=l;a--!==0;)if(!this.equalsByValue(i[a],e[a]))return!1;return!0}if(n!=r)return!1;var h=this.isDate(i),m=this.isDate(e);if(h!=m)return!1;if(h&&m)return i.getTime()==e.getTime();var y=i instanceof RegExp,w=e instanceof RegExp;if(y!=w)return!1;if(y&&w)return i.toString()==e.toString();var T=Object.keys(i);if(l=T.length,l!==Object.keys(e).length)return!1;for(a=l;a--!==0;)if(!Object.prototype.hasOwnProperty.call(e,T[a]))return!1;for(a=l;a--!==0;)if(d=T[a],!this.equalsByValue(i[d],e[d]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),r=i;for(let a=0,l=n.length;a<l;++a){if(r==null)return null;r=r[n[a]]}return r}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let r;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,r){if(n.length>0){let a=!1;for(let l=0;l<n.length;l++)if(this.findIndexInList(n[l],r)>e){n.splice(l,0,i),a=!0;break}a||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let r=0;r<e.length;r++)if(e[r]==i){n=r;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,r=1){let a=-1,l=this.isEmpty(i),d=this.isEmpty(e);return l&&d?a=0:l?a=r:d?a=-r:typeof i=="string"&&typeof e=="string"?a=i.localeCompare(e,n,{numeric:!0}):a=i<e?-1:i>e?1:0,a}static sort(i,e,n=1,r,a=1){let l=t.compare(i,e,r,n),d=n;return(t.isEmpty(i)||t.isEmpty(e))&&(d=a===1?n:a),d*l}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return k(k({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),a,l,d;if(n&&r){if(l=i.length,l!=e.length)return!1;for(a=l;a--!==0;)if(!this.deepEquals(i[a],e[a]))return!1;return!0}if(n!=r)return!1;var h=i instanceof Date,m=e instanceof Date;if(h!=m)return!1;if(h&&m)return i.getTime()==e.getTime();var y=i instanceof RegExp,w=e instanceof RegExp;if(y!=w)return!1;if(y&&w)return i.toString()==e.toString();var T=Object.keys(i);if(l=T.length,l!==Object.keys(e).length)return!1;for(a=l;a--!==0;)if(!Object.prototype.hasOwnProperty.call(e,T[a]))return!1;for(a=l;a--!==0;)if(d=T[a],!this.deepEquals(i[d],e[d]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},cm=0;function VR(t="pn_id_"){return cm++,`${t}${cm}`}function Fw(){let t=[],i=(a,l)=>{let d=t.length>0?t[t.length-1]:{key:a,value:l},h=d.value+(d.key===a?0:l)+2;return t.push({key:a,value:h}),h},e=a=>{t=t.filter(l=>l.value!==a)},n=()=>t.length>0?t[t.length-1].value:0,r=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:r,set:(a,l,d)=>{l&&(l.style.zIndex=String(i(a,d)))},clear:a=>{a&&(e(r(a)),a.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var Ei=Fw(),cl=t=>!!t;var Mw=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,Lw={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},um=(()=>{class t extends ue{name="tooltip";theme=Mw;classes=Lw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var eO=(()=>{class t extends ae{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:et("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=D(um);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),An(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=k(k({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Ki(e.relatedTarget,"p-tooltip")||Ki(e.relatedTarget,"p-tooltip-text")||Ki(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?_u(this.container,this.el.nativeElement):_u(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),jf(this.container,250),this.getOption("tooltipZIndex")==="auto"?Ei.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Ei.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof ri){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(r=>this.tooltipText.appendChild(r))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[r,a]of n[e].entries())if(r===0)a.call(this);else if(this.isOutOfBounds())a.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+bu(),r=e.top+vu();return{left:n,top:r}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Ft(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=vn(e),r=(en(e)-en(this.container))/2;this.alignTooltip(n,r)}alignLeft(){this.preAlign("left");let e=vn(this.container),n=(en(this.el.nativeElement)-en(this.container))/2;this.alignTooltip(-e,n)}alignTop(){this.preAlign("top");let e=(vn(this.el.nativeElement)-vn(this.container))/2,n=en(this.container);this.alignTooltip(e,-n)}alignBottom(){this.preAlign("bottom");let e=(vn(this.el.nativeElement)-vn(this.container))/2,n=en(this.el.nativeElement);this.alignTooltip(e,n)}alignTooltip(e,n){let r=this.getHostOffset(),a=r.left+e,l=r.top+n;this.container.style.left=a+this.getOption("positionLeft")+"px",this.container.style.top=l+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=k(k({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Ki(e,"p-inputwrapper")?Ft(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,r=e.left,a=vn(this.container),l=en(this.container),d=Yo();return r+a>d.width||r<0||n<0||n+l>d.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new rl(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Wf(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Ei.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)($(ft),$(jn))};static \u0275dir=ce({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",N],showDelay:[2,"showDelay","showDelay",Le],hideDelay:[2,"hideDelay","hideDelay",Le],life:[2,"life","life",Le],positionTop:[2,"positionTop","positionTop",Le],positionLeft:[2,"positionLeft","positionLeft",Le],autoHide:[2,"autoHide","autoHide",N],fitContent:[2,"fitContent","fitContent",N],hideOnEscape:[2,"hideOnEscape","hideOnEscape",N],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[oe([um]),O,ot]})}return t})(),tO=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var dm=["container"],Rw=(t,i,e,n)=>({showTransformParams:t,hideTransformParams:i,showTransitionParams:e,hideTransitionParams:n}),Ow=t=>({value:"visible",params:t}),Pw=(t,i)=>({$implicit:t,closeFn:i}),Nw=t=>({$implicit:t});function $w(t,i){t&1&&xe(0)}function Bw(t,i){if(t&1&&A(0,$w,1,0,"ng-container",3),t&2){let e=_();g("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",oi(2,Pw,e.message,e.onCloseIconClick))}}function Vw(t,i){if(t&1&&L(0,"span",4),t&2){let e=_(3);g("ngClass",e.cx("messageIcon"))}}function Uw(t,i){t&1&&L(0,"CheckIcon"),t&2&&E("aria-hidden",!0)("data-pc-section","icon")}function jw(t,i){t&1&&L(0,"InfoCircleIcon"),t&2&&E("aria-hidden",!0)("data-pc-section","icon")}function Hw(t,i){t&1&&L(0,"TimesCircleIcon"),t&2&&E("aria-hidden",!0)("data-pc-section","icon")}function zw(t,i){t&1&&L(0,"ExclamationTriangleIcon"),t&2&&E("aria-hidden",!0)("data-pc-section","icon")}function qw(t,i){t&1&&L(0,"InfoCircleIcon"),t&2&&E("aria-hidden",!0)("data-pc-section","icon")}function Ww(t,i){if(t&1&&(S(0,"span",4),A(1,Uw,1,2,"CheckIcon")(2,jw,1,2,"InfoCircleIcon")(3,Hw,1,2,"TimesCircleIcon")(4,zw,1,2,"ExclamationTriangleIcon")(5,qw,1,2,"InfoCircleIcon"),x()),t&2){let e,n=_(3);g("ngClass",n.cx("messageIcon")),E("aria-hidden",!0)("data-pc-section","icon"),b(),Te((e=n.message.severity)==="success"?1:e==="info"?2:e==="error"?3:e==="warn"?4:5)}}function Gw(t,i){if(t&1&&(He(0),A(1,Vw,1,1,"span",6)(2,Ww,6,4,"span",6),S(3,"div",4)(4,"div",4),me(5),x(),S(6,"div",4),me(7),x()(),ze()),t&2){let e=_(2);b(),g("ngIf",e.message.icon),b(),g("ngIf",!e.message.icon),b(),g("ngClass",e.cx("messageText")),E("data-pc-section","text"),b(),g("ngClass",e.cx("summary")),E("data-pc-section","summary"),b(),gt(" ",e.message.summary," "),b(),g("ngClass",e.cx("detail")),E("data-pc-section","detail"),b(),qe(e.message.detail)}}function Kw(t,i){t&1&&xe(0)}function Qw(t,i){if(t&1&&L(0,"span",4),t&2){let e=_(4);g("ngClass",e.cx("closeIcon"))}}function Yw(t,i){if(t&1&&A(0,Qw,1,1,"span",6),t&2){let e=_(3);g("ngIf",e.message.closeIcon)}}function Zw(t,i){if(t&1&&L(0,"TimesIcon",4),t&2){let e=_(3);g("ngClass",e.cx("closeIcon")),E("aria-hidden",!0)("data-pc-section","closeicon")}}function Xw(t,i){if(t&1){let e=Ae();S(0,"div")(1,"button",7),ee("click",function(r){X(e);let a=_(2);return J(a.onCloseIconClick(r))})("keydown.enter",function(r){X(e);let a=_(2);return J(a.onCloseIconClick(r))}),A(2,Yw,1,1,"span",4)(3,Zw,1,3,"TimesIcon",4),x()()}if(t&2){let e=_(2);b(),g("ariaLabel",e.closeAriaLabel),E("class",e.cx("closeButton"))("data-pc-section","closebutton"),b(),Te(e.message.closeIcon?2:3)}}function Jw(t,i){if(t&1&&(S(0,"div",4),A(1,Gw,8,10,"ng-container",5)(2,Kw,1,0,"ng-container",3)(3,Xw,4,4,"div"),x()),t&2){let e=_();B(e.message==null?null:e.message.contentStyleClass),g("ngClass",e.cx("messageContent")),E("data-pc-section","content"),b(),g("ngIf",!e.template),b(),g("ngTemplateOutlet",e.template)("ngTemplateOutletContext",ke(8,Nw,e.message)),b(),Te((e.message==null?null:e.message.closable)!==!1?3:-1)}}var eS=["message"],tS=["headless"];function nS(t,i){if(t&1){let e=Ae();S(0,"p-toastItem",3),ee("onClose",function(r){X(e);let a=_();return J(a.onMessageClose(r))})("@toastAnimation.start",function(r){X(e);let a=_();return J(a.onAnimationStart(r))})("@toastAnimation.done",function(r){X(e);let a=_();return J(a.onAnimationEnd(r))}),x()}if(t&2){let e=i.$implicit,n=i.index,r=_();g("message",e)("index",n)("life",r.life)("template",r.template||r._template)("headlessTemplate",r.headlessTemplate||r._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",r.showTransformOptions)("hideTransformOptions",r.hideTransformOptions)("showTransitionOptions",r.showTransitionOptions)("hideTransitionOptions",r.hideTransitionOptions)}}var iS=({dt:t})=>`
.p-toast {
    width: ${t("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${t("toast.icon.size")};
    width: ${t("toast.icon.size")};
    height: ${t("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${t("toast.content.padding")};
    gap: ${t("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${t("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${t("toast.summary.font.weight")};
    font-size: ${t("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${t("toast.detail.font.weight")};
    font-size: ${t("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${t("toast.transition.duration")}, color ${t("toast.transition.duration")}, outline-color ${t("toast.transition.duration")}, box-shadow ${t("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${t("toast.close.button.width")};
    height: ${t("toast.close.button.height")};
    border-radius: ${t("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${t("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${t("toast.blur")});
    border-radius: ${t("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${t("toast.close.icon.size")};
    width: ${t("toast.close.icon.size")};
    height: ${t("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${t("focus.ring.width")};
    outline-style: ${t("focus.ring.style")};
    outline-offset: ${t("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${t("toast.info.background")};
    border-color: ${t("toast.info.border.color")};
    color: ${t("toast.info.color")};
    box-shadow: ${t("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${t("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.info.close.button.focus.ring.color")};
    box-shadow: ${t("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${t("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${t("toast.success.background")};
    border-color: ${t("toast.success.border.color")};
    color: ${t("toast.success.color")};
    box-shadow: ${t("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${t("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.success.close.button.focus.ring.color")};
    box-shadow: ${t("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${t("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${t("toast.warn.background")};
    border-color: ${t("toast.warn.border.color")};
    color: ${t("toast.warn.color")};
    box-shadow: ${t("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${t("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${t("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${t("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${t("toast.error.background")};
    border-color: ${t("toast.error.border.color")};
    color: ${t("toast.error.color")};
    box-shadow: ${t("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${t("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.error.close.button.focus.ring.color")};
    box-shadow: ${t("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${t("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${t("toast.secondary.background")};
    border-color: ${t("toast.secondary.border.color")};
    color: ${t("toast.secondary.color")};
    box-shadow: ${t("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${t("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${t("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${t("toast.contrast.background")};
    border-color: ${t("toast.contrast.border.color")};
    color: ${t("toast.contrast.color")};
    box-shadow: ${t("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${t("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${t("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`,rS={root:({instance:t})=>{let{_position:i}=t;return{position:"fixed",top:i==="top-right"||i==="top-left"||i==="top-center"?"20px":i==="center"?"50%":null,right:(i==="top-right"||i==="bottom-right")&&"20px",bottom:(i==="bottom-left"||i==="bottom-right"||i==="bottom-center")&&"20px",left:i==="top-left"||i==="bottom-left"?"20px":i==="center"||i==="top-center"||i==="bottom-center"?"50%":null}}},oS={root:({instance:t})=>({"p-toast p-component":!0,[`p-toast-${t._position}`]:!!t._position}),message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},ul=(()=>{class t extends ue{name="toast";theme=iS;classes=oS;inlineStyles=rS;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var aS=(()=>{class t extends ae{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new W;containerViewChild;_componentStyle=D(ul);timeout;constructor(e){super(),this.zone=e}ngAfterViewInit(){super.ngAfterViewInit(),this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=e=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)($(ft))};static \u0275cmp=P({type:t,selectors:[["p-toastItem"]],viewQuery:function(n,r){if(n&1&&un(dm,5),n&2){let a;j(a=H())&&(r.containerViewChild=a.first)}},inputs:{message:"message",index:[2,"index","index",Le],life:[2,"life","life",Le],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[oe([ul]),O],decls:4,vars:15,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[3,"ngClass","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["type","button","autofocus","",3,"click","keydown.enter","ariaLabel"]],template:function(n,r){if(n&1){let a=Ae();S(0,"div",1,0),ee("mouseenter",function(){return X(a),J(r.onMouseEnter())})("mouseleave",function(){return X(a),J(r.onMouseLeave())}),A(2,Bw,1,5,"ng-container")(3,Jw,4,10,"div",2),x()}n&2&&(B(r.message==null?null:r.message.styleClass),g("ngClass",r.cx("message"))("@messageState",ke(13,Ow,Yp(8,Rw,r.showTransformOptions,r.hideTransformOptions,r.showTransitionOptions,r.hideTransitionOptions))),E("id",r.message==null?null:r.message.id)("data-pc-name","toast")("data-pc-section","root"),b(2),Te(r.headlessTemplate?2:3))},dependencies:[le,We,je,Je,sl,Pg,Ng,Wr,Ug,ne],encapsulation:2,data:{animation:[dn("messageState",[pn("visible",bt({transform:"translateY(0)",opacity:1})),Dt("void => *",[bt({transform:"{{showTransformParams}}",opacity:0}),kt("{{showTransitionParams}}")]),Dt("* => void",[kt("{{hideTransitionParams}}",bt({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return t})(),SO=(()=>{class t extends ae{key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new W;template;headlessTemplate;containerViewChild;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=D(ng);_componentStyle=D(ul);styleElement;id=et("pn_id_");templates;ngOnInit(){super.ngOnInit(),this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let n=e.filter(r=>this.canAdd(r));this.add(n)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let n=this.key===e.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,e)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,e)),n}containsMessage(e,n){return e?e.find(r=>r.summary===n.summary&&r.detail==n.detail&&r.severity===n.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.cd.detectChanges()}onAnimationStart(e){e.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&Ei.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(e){e.toState==="void"&&this.autoZIndex&&pt(this.messages)&&Ei.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints){let r="";for(let a in this.breakpoints[n])r+=a+":"+this.breakpoints[n][a]+" !important;";e+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${r}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),Gf(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&Ei.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-toast"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,eS,5),Y(a,tS,5),Y(a,at,4)),n&2){let l;j(l=H())&&(r.template=l.first),j(l=H())&&(r.headlessTemplate=l.first),j(l=H())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&un(dm,5),n&2){let a;j(a=H())&&(r.containerViewChild=a.first)}},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",N],baseZIndex:[2,"baseZIndex","baseZIndex",Le],life:[2,"life","life",Le],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",N],preventDuplicates:[2,"preventDuplicates","preventDuplicates",N],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[oe([ul]),O],decls:3,vars:7,consts:[["container",""],[3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(n,r){n&1&&(S(0,"div",1,0),A(2,nS,1,10,"p-toastItem",2),x()),n&2&&(St(r.style),B(r.styleClass),g("ngClass",r.cx("root"))("ngStyle",r.sx("root")),b(2),g("ngForOf",r.messages))},dependencies:[le,We,si,vt,aS,ne],encapsulation:2,data:{animation:[dn("toastAnimation",[Dt(":enter, :leave",[fc("@*",hc())])])]},changeDetection:0})}return t})();var sS=["header"],lS=["title"],cS=["subtitle"],uS=["content"],dS=["footer"],pS=["*",[["p-header"]],[["p-footer"]]],hS=["*","p-header","p-footer"];function fS(t,i){t&1&&xe(0)}function gS(t,i){if(t&1&&(S(0,"div",8),Be(1,1),A(2,fS,1,0,"ng-container",6),x()),t&2){let e=_();b(2),g("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function mS(t,i){if(t&1&&(He(0),me(1),ze()),t&2){let e=_(2);b(),qe(e.header)}}function bS(t,i){t&1&&xe(0)}function vS(t,i){if(t&1&&(S(0,"div",9),A(1,mS,2,1,"ng-container",10)(2,bS,1,0,"ng-container",6),x()),t&2){let e=_();b(),g("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),b(),g("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function yS(t,i){if(t&1&&(He(0),me(1),ze()),t&2){let e=_(2);b(),qe(e.subheader)}}function _S(t,i){t&1&&xe(0)}function CS(t,i){if(t&1&&(S(0,"div",11),A(1,yS,2,1,"ng-container",10)(2,_S,1,0,"ng-container",6),x()),t&2){let e=_();b(),g("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),b(),g("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function wS(t,i){t&1&&xe(0)}function SS(t,i){t&1&&xe(0)}function DS(t,i){if(t&1&&(S(0,"div",12),Be(1,2),A(2,SS,1,0,"ng-container",6),x()),t&2){let e=_();b(2),g("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var xS=({dt:t})=>`
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
`,ES={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},pm=(()=>{class t extends ue{name="card";theme=xS;classes=ES;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var TS=(()=>{class t extends ae{header;subheader;set style(e){Qi(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Ke(null);_componentStyle=D(pm);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-card"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,qs,5),Y(a,ig,5),Y(a,sS,4),Y(a,lS,4),Y(a,cS,4),Y(a,uS,4),Y(a,dS,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.headerFacet=l.first),j(l=H())&&(r.footerFacet=l.first),j(l=H())&&(r.headerTemplate=l.first),j(l=H())&&(r.titleTemplate=l.first),j(l=H())&&(r.subtitleTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.footerTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[oe([pm]),O],ngContentSelectors:hS,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,r){n&1&&(Qe(pS),S(0,"div",0),A(1,gS,3,1,"div",1),S(2,"div",2),A(3,vS,3,2,"div",3)(4,CS,3,2,"div",4),S(5,"div",5),Be(6),A(7,wS,1,0,"ng-container",6),x(),A(8,DS,3,1,"div",7),x()()),n&2&&(B(r.styleClass),g("ngClass","p-card p-component")("ngStyle",r._style()),E("data-pc-name","card"),b(),g("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),b(2),g("ngIf",r.header||r.titleTemplate||r._titleTemplate),b(),g("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),b(3),g("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),b(),g("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[le,We,je,Je,vt,ne],encapsulation:2,changeDetection:0})}return t})(),BO=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[TS,ne,ne]})}return t})();var AS=["icon"],IS=["content"],fm=t=>({$implicit:t}),kS=(t,i)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":i});function FS(t,i){t&1&&xe(0)}function MS(t,i){if(t&1&&L(0,"span",0),t&2){let e=_(3);B(e.checked?e.onIcon:e.offIcon),g("ngClass",oi(4,kS,e.iconPos==="left",e.iconPos==="right")),E("data-pc-section","icon")}}function LS(t,i){if(t&1&&A(0,MS,1,7,"span",2),t&2){let e=_(2);Te(e.onIcon||e.offIcon?0:-1)}}function RS(t,i){t&1&&xe(0)}function OS(t,i){if(t&1&&A(0,RS,1,0,"ng-container",1),t&2){let e=_(2);g("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ke(2,fm,e.checked))}}function PS(t,i){if(t&1&&(A(0,LS,1,1)(1,OS,1,4,"ng-container"),S(2,"span",0),me(3),x()),t&2){let e=_();Te(e.iconTemplate?1:0),b(2),g("ngClass",e.cx("label")),E("data-pc-section","label"),b(),qe(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var NS=({dt:t})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
    padding: ${t("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${t("togglebutton.content.border.radius")};
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${t("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${t("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,$S={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},hm=(()=>{class t extends ue{name="togglebutton";theme=NS;classes=$S;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var BS={provide:_i,useExisting:ut(()=>gm),multi:!0},gm=(()=>{class t extends ae{get hostClass(){return this.styleClass||""}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new W;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=D(hm);onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,AS,4),Y(a,IS,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.templates=l)}},hostVars:23,hostBindings:function(n,r){n&1&&ee("keydown",function(l){return r.onKeyDown(l)})("click",function(l){return r.toggle(l)}),n&2&&(Wp("tabindex",r.tabindex),E("disabled",r.disabled)("aria-labelledby",r.ariaLabelledBy)("aria-pressed",r.checked)("data-p-checked",r.active)("data-p-disabled",r.disabled)("type","button"),B(r.hostClass),Ze("p-togglebutton",!0)("p-togglebutton-checked",r.checked)("p-disabled",r.disabled)("p-togglebutton-sm",r.size==="small")("p-inputfield-sm",r.size==="small")("p-togglebutton-lg",r.size==="large")("p-inputfield-lg",r.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",N],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Le],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",N],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[oe([BS,hm]),ja([wi]),O],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,r){n&1&&(S(0,"span",0),A(1,FS,1,0,"ng-container",1)(2,PS,4,4),x()),n&2&&(g("ngClass",r.cx("content")),b(),g("ngTemplateOutlet",r.contentTemplate||r._contentTemplate)("ngTemplateOutletContext",ke(4,fm,r.checked)),b(),Te(r.contentTemplate?-1:2))},dependencies:[le,We,Je,ne],encapsulation:2,changeDetection:0})}return t})(),i5=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[gm,ne,ne]})}return t})();function VS(t,i){if(t&1){let e=Ae();S(0,"div",3)(1,"p-radioButton",4),br("ngModelChange",function(r){X(e);let a=_();return mr(a.selected,r)||(a.selected=r),J(r)}),ee("ngModelChange",function(r){X(e);let a=_();return J(a.onChange(r))}),x(),S(2,"label",5),L(3,"i"),me(4),Ve(5,"translate"),x()()}if(t&2){let e=i.$implicit,n=i.index,r=_();b(),g("inputId",r.name+"-"+n)("name",r.name)("value",e.value),gr("ngModel",r.selected),b(),g("for",r.name+"-"+n),b(),B(e.icon),b(),gt(" ",Ue(5,8,e.label)," ")}}var mm=class t{label;name;options=[];selected;selectedChange=new W;onChange(i){this.selectedChange.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["ca-horizontal-radio-buttons"]],inputs:{label:"label",name:"name",options:"options",selected:"selected"},outputs:{selectedChange:"selectedChange"},decls:6,vars:7,consts:[[1,"mb-1","font-semibold","block",3,"for"],["role","radiogroup",1,"flex","flex-wrap","gap-3"],["class","field-radiobutton",4,"ngFor","ngForOf"],[1,"field-radiobutton"],[3,"ngModelChange","inputId","name","value","ngModel"],[3,"for"]],template:function(e,n){e&1&&(S(0,"div")(1,"label",0),me(2),Ve(3,"translate"),x(),S(4,"div",1),A(5,VS,6,10,"div",2),x()()),e&2&&(b(),g("for",n.name+"-0"),E("id",n.name+"-label"),b(),qe(Ue(3,5,n.label)),b(2),E("aria-labelledby",n.name+"-label"),b(),g("ngForOf",n.options))},dependencies:[le,si,Ci,jr,Cn,di,ui,al],encapsulation:2})};var US=(n=>(n.Original="original",n.Modified="modified",n.Diff="diff",n))(US||{});var jS=(h=>(h.Gemini="google/gemini-2.0-flash-exp:free",h.DeepSeekChatV3="deepseek/deepseek-chat-v3-0324:free",h.Qwen="qwen/qwen3-235b-a22b:free",h.Llama32="meta-llama/llama-3.2-3b-instruct:free",h.Mistral="mistralai/mistral-small-3.1-24b-instruct:free",h.Kimi="moonshotai/kimi-k2:free",h.Llama33="meta-llama/llama-3.3-70b-instruct:free",h.Llama31="meta-llama/llama-3.1-405b-instruct:free",h))(jS||{});var HS=["start"],zS=["end"],qS=["center"],WS=["*"];function GS(t,i){t&1&&xe(0)}function KS(t,i){if(t&1&&(S(0,"div",4),A(1,GS,1,0,"ng-container",5),x()),t&2){let e=_();E("data-pc-section","start"),b(),g("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function QS(t,i){t&1&&xe(0)}function YS(t,i){if(t&1&&(S(0,"div",6),A(1,QS,1,0,"ng-container",5),x()),t&2){let e=_();E("data-pc-section","center"),b(),g("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function ZS(t,i){t&1&&xe(0)}function XS(t,i){if(t&1&&(S(0,"div",7),A(1,ZS,1,0,"ng-container",5),x()),t&2){let e=_();E("data-pc-section","end"),b(),g("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var JS=({dt:t})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${t("toolbar.padding")};
    background: ${t("toolbar.background")};
    border: 1px solid ${t("toolbar.border.color")};
    color: ${t("toolbar.color")};
    border-radius: ${t("toolbar.border.radius")};
    gap: ${t("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,eD={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},bm=(()=>{class t extends ue{name="toolbar";theme=JS;classes=eD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var tD=(()=>{class t extends ae{style;styleClass;ariaLabelledBy;_componentStyle=D(bm);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-toolbar"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,HS,4),Y(a,zS,4),Y(a,qS,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.startTemplate=l.first),j(l=H())&&(r.endTemplate=l.first),j(l=H())&&(r.centerTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[oe([bm]),O],ngContentSelectors:WS,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-start",4,"ngIf"],["class","p-toolbar-center",4,"ngIf"],["class","p-toolbar-end",4,"ngIf"],[1,"p-toolbar-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-center"],[1,"p-toolbar-end"]],template:function(n,r){n&1&&(Qe(),S(0,"div",0),Be(1),A(2,KS,2,2,"div",1)(3,YS,2,2,"div",2)(4,XS,2,2,"div",3),x()),n&2&&(B(r.styleClass),g("ngClass","p-toolbar p-component")("ngStyle",r.style),E("aria-labelledby",r.ariaLabelledBy)("data-pc-name","toolbar"),b(2),g("ngIf",r.startTemplate||r._startTemplate),b(),g("ngIf",r.centerTemplate||r._centerTemplate),b(),g("ngIf",r.endTemplate||r._endTemplate))},dependencies:[le,We,je,Je,vt,ne],encapsulation:2,changeDetection:0})}return t})(),A5=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[tD,ne,ne]})}return t})();var nD=({dt:t})=>`
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
`,iD={root:({instance:t,props:i})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large","p-invalid":i.invalid,"p-variant-filled":i.variant==="filled","p-inputtext-fluid":i.fluid}]},vm=(()=>{class t extends ue{name="inputtext";theme=nD;classes=iD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var ym=(()=>{class t extends ae{ngModel;variant;fluid;pSize;filled;_componentStyle=D(vm);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return pt(this.fluid)?!!n:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)($(Cn,8))};static \u0275dir=ce({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,r){if(n&1&&ee("input",function(l){return r.onInput(l)}),n&2){let a;Ze("p-filled",r.filled)("p-variant-filled",((a=r.variant)!==null&&a!==void 0?a:r.config.inputStyle()||r.config.inputVariant())==="filled")("p-inputtext-fluid",r.hasFluid)("p-inputtext-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-inputtext-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",N],pSize:"pSize"},features:[oe([vm]),O]})}return t})(),_m=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();var oD=["*"],aD=({dt:t})=>`
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
`,sD={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},Cm=(()=>{class t extends ue{name="inputgroup";theme=aD;classes=sD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Qu=(()=>{class t extends ae{style;styleClass;_componentStyle=D(Cm);static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(n,r){n&2&&(E("data-pc-name","inputgroup"),St(r.style),B(r.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[oe([Cm]),O],ngContentSelectors:oD,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le,ne],encapsulation:2})}return t})(),wm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Qu,ne,ne]})}return t})();var cD=["*"],uD={root:"p-inputgroupaddon"},Sm=(()=>{class t extends ue{name="inputgroupaddon";classes=uD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),Yu=(()=>{class t extends ae{style;styleClass;_componentStyle=D(Sm);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(n,r){n&2&&(E("data-pc-name","inputgroupaddon"),St(r.hostStyle),B(r.styleClass),Ze("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[oe([Sm]),O],ngContentSelectors:cD,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le],encapsulation:2})}return t})(),Dm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Yu,ne,ne]})}return t})();function pD(t,i){t&1&&(L(0,"div",16),Ve(1,"translate")),t&2&&g("@slideDown",void 0)("innerHTML",Ue(1,2,"page.upload.url.example"),Ba)}function hD(t,i){t&1&&(S(0,"div"),me(1),Ve(2,"translate"),x()),t&2&&(b(),gt(" ",Ue(2,1,"page.upload.url.error.required"),". "))}function fD(t,i){t&1&&(S(0,"div"),me(1),Ve(2,"translate"),x()),t&2&&(b(),gt(" ",Ue(2,1,"page.upload.url.error.pattern")," "))}function gD(t,i){if(t&1&&(S(0,"div",17),A(1,hD,3,3,"div",18)(2,fD,3,3,"div",18),x()),t&2){_();let e=Xt(17);b(),g("ngIf",e.errors==null?null:e.errors.required),b(),g("ngIf",e.errors==null?null:e.errors.pattern)}}function mD(t,i){if(t&1&&L(0,"p-message",19),t&2){let e=_();g("text",e.error)}}function bD(t,i){if(t&1){let e=Ae();S(0,"p-button",20),Ve(1,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.loadSampleData())}),x()}t&2&&g("label",Ue(1,1,"page.upload.sample"))}var xm=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.url.modified":"page.upload.url.original"}uploadComplete=new W;userInput="";error="";loading=!1;showHelp=!1;getHtmlContent(){return De(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.url.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.fetchAndProcess(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.userInput,originalHtml:n.html,modifiedUrl:this.userInput,modifiedHtml:n.html,found:{original:n.found,modified:n.found}}),this.mode==="prototype"&&(this.uploadState.mergeModifiedData({modifiedUrl:this.userInput,modifiedHtml:n.html}),this.uploadState.mergeFoundFlags("modified",n.found)),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return De(this,null,function*(){yield this.urlDataService.loadSampleDataset("webpage"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)($(xi),$(Pn),$(zn))};static \u0275cmp=P({type:t,selectors:[["ca-upload-url"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:25,vars:22,consts:[["form","ngForm"],["urlField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"pi","pi-question-circle","text-primary","cursor-pointer",3,"click","ariaLabel"],["class","text-sm mt-2",3,"innerHTML",4,"ngIf"],[1,"mt-3"],["for","userInput",1,"font-semibold"],[1,"pi","pi-globe"],["id","userInput","pInputText","","type","url","name","userInput","required","","pattern","https?://.+","autocomplete","url","fluid","",1,"w-full",3,"ngModelChange","ngModel","placeholder"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-sm","mt-2",3,"innerHTML"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let r=Ae();S(0,"form",2,0),ee("ngSubmit",function(){return X(r),J(n.getHtmlContent())}),S(2,"fieldset",3)(3,"legend",4),me(4),Ve(5,"translate"),S(6,"i",5),Ve(7,"translate"),ee("click",function(){return X(r),J(n.showHelp=!n.showHelp)}),x()(),A(8,pD,2,4,"div",6),S(9,"div",7)(10,"label",8),me(11),Ve(12,"translate"),x(),S(13,"p-inputGroup")(14,"p-inputgroup-addon"),L(15,"i",9),x(),S(16,"input",10,1),Ve(18,"translate"),br("ngModelChange",function(l){return X(r),mr(n.userInput,l)||(n.userInput=l),J(l)}),x()(),A(19,gD,3,2,"div",11),x(),A(20,mD,1,1,"p-message",12),S(21,"div",13),L(22,"p-button",14),Ve(23,"translate"),A(24,bD,2,3,"p-button",15),x()()()}if(e&2){let r=Xt(1),a=Xt(17);b(4),gt(" ",Ue(5,12,"page.upload.url.legend")," "),b(2),g("ariaLabel",Ue(7,14,"page.upload.url.toggleHelp")),b(2),g("ngIf",n.showHelp),b(3),qe(Ue(12,16,n.labelKey)),b(5),gr("ngModel",n.userInput),g("placeholder",Ue(18,18,"page.upload.url.placeholder")),b(3),g("ngIf",a.invalid&&a.touched),b(),g("ngIf",n.error),b(2),g("label",Ue(23,20,"page.upload.continue"))("loading",n.loading)("disabled",r.invalid),b(2),g("ngIf",n.showSampleDataButton)}},dependencies:[le,je,di,ui,Ci,nl,Ur,jr,el,oa,Ou,Cn,ra,Gr,Wn,_m,ym,wm,Qu,Dm,Yu,Qg,Gn],styles:["[_nghost-%COMP%]{display:block}"],data:{animation:[dn("slideDown",[pn("void",bt({opacity:0,transform:"translateY(-20px)"})),pn("*",bt({opacity:1,transform:"translateY(0)"})),Dt(":enter",kt("200ms ease-out")),Dt(":leave",kt("100ms ease-in",bt({opacity:0,transform:"translateY(-10px)"})))])]}})};var vD=({dt:t})=>`
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
`,yD={root:({instance:t,props:i})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":i.autoResize,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":i.fluid}]},Em=(()=>{class t extends ue{name="textarea";theme=vD;classes=yD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Tm=(()=>{class t extends ae{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new W;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=D(Em);constructor(e,n){super(),this.ngModel=e,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)($(Cn,8),$(_n,8))};static \u0275dir=ce({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,r){n&1&&ee("input",function(l){return r.onInput(l)}),n&2&&Ze("p-filled",r.filled)("p-textarea-resizable",r.autoResize)("p-variant-filled",r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled")("p-textarea-fluid",r.hasFluid)("p-textarea-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-textarea-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",N],variant:"variant",fluid:[2,"fluid","fluid",N],pSize:"pSize"},outputs:{onResize:"onResize"},features:[oe([Em]),O]})}return t})(),Am=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function CD(t,i){t&1&&(S(0,"div"),me(1),Ve(2,"translate"),x()),t&2&&(b(),gt(" ",Ue(2,1,"page.upload.paste.error.required")," "))}function wD(t,i){if(t&1&&(S(0,"div",13),A(1,CD,3,3,"div",14),x()),t&2){_();let e=Xt(11);b(),g("ngIf",e.errors==null?null:e.errors.required)}}function SD(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=_();g("text",e.error)}}function DD(t,i){if(t&1){let e=Ae();S(0,"p-button",16),Ve(1,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.loadSampleData())}),x()}t&2&&g("label",Ue(1,1,"page.upload.sample"))}var Im=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;get labelKey(){return this.mode==="prototype"?"page.upload.paste.modified":"page.upload.paste.original"}uploadComplete=new W;userInput="";error="";loading=!1;getPasteContent(){return De(this,null,function*(){let i=this.translate.instant("page.upload.error.unknown"),e=this.translate.instant("page.upload.paste.error.try");this.loading=!0,this.error="";try{let n=yield this.urlDataService.extractContent(this.userInput);this.mode==="original"&&this.uploadState.setUploadData({originalUrl:"Copy/Paste",originalHtml:n.html,modifiedUrl:"Copy/Paste",modifiedHtml:n.html,found:{original:n.found,modified:n.found}}),this.mode==="prototype"&&(this.uploadState.mergeModifiedData({modifiedUrl:"Copy/Paste",modifiedHtml:n.html}),this.uploadState.mergeFoundFlags("modified",n.found)),this.uploadComplete.emit()}catch(n){this.error=`${e} ${n.message||n||i}`}finally{this.loading=!1}})}loadSampleData(){return De(this,null,function*(){yield this.urlDataService.loadSampleDataset("snippet"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)($(xi),$(Pn),$(zn))};static \u0275cmp=P({type:t,selectors:[["ca-upload-paste"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:18,vars:15,consts:[["form","ngForm"],["inputField","ngModel"],["novalidate","",3,"ngSubmit"],[1,"border-none","p-0","m-0"],[1,"font-bold","p-0"],[1,"mt-3"],["for","source",1,"font-semibold"],["type","text","id","source","pTextarea","","rows","3","name","userInput","required","","fluid","",1,"w-full",3,"ngModelChange","ngModel"],["class","text-red-500 text-xs mt-0",4,"ngIf"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"],[1,"text-red-500","text-xs","mt-0"],[4,"ngIf"],["severity","error",3,"text"],["icon","pi pi-file","severity","secondary",3,"onClick","label"]],template:function(e,n){if(e&1){let r=Ae();S(0,"form",2,0),ee("ngSubmit",function(){return X(r),J(n.getPasteContent())}),S(2,"fieldset",3)(3,"legend",4),me(4),Ve(5,"translate"),x(),S(6,"div",5)(7,"label",6),me(8),Ve(9,"translate"),x(),S(10,"textarea",7,1),br("ngModelChange",function(l){return X(r),mr(n.userInput,l)||(n.userInput=l),J(l)}),x(),A(12,wD,2,1,"div",8),x(),A(13,SD,1,1,"p-message",9),S(14,"div",10),L(15,"p-button",11),Ve(16,"translate"),A(17,DD,2,3,"p-button",12),x()()()}if(e&2){let r=Xt(1),a=Xt(11);b(4),gt(" ",Ue(5,9,"page.upload.paste.legend")," "),b(4),qe(Ue(9,11,n.labelKey)),b(2),gr("ngModel",n.userInput),b(2),g("ngIf",a.invalid&&a.touched),b(),g("ngIf",n.error),b(2),g("label",Ue(16,13,"page.upload.continue"))("loading",n.loading)("disabled",r.invalid),b(2),g("ngIf",n.showSampleDataButton)}},dependencies:[le,je,di,ui,Ci,nl,Ur,jr,el,oa,Cn,ra,Gr,Wn,Am,Tm,Gn],styles:["[_nghost-%COMP%]{display:block}"]})};var xD=["content"],ED=(t,i)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":i}),TD=t=>({$implicit:t});function AD(t,i){if(t&1&&(S(0,"div"),me(1),x()),t&2){let e=_(2);En("display",e.value!=null&&e.value!==0?"flex":"none"),E("data-pc-section","label"),b(),Kp("",e.value,"",e.unit,"")}}function ID(t,i){t&1&&xe(0)}function kD(t,i){if(t&1&&(S(0,"div",3)(1,"div",4),A(2,AD,2,5,"div",5)(3,ID,1,0,"ng-container",6),x()()),t&2){let e=_();B(e.valueStyleClass),En("width",e.value+"%")("background",e.color),g("ngClass","p-progressbar-value p-progressbar-value-animate"),E("data-pc-section","value"),b(2),g("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),b(),g("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ke(11,TD,e.value))}}function FD(t,i){if(t&1&&(S(0,"div",7),L(1,"div",8),x()),t&2){let e=_();B(e.valueStyleClass),g("ngClass","p-progressbar-indeterminate-container"),E("data-pc-section","container"),b(),En("background",e.color),E("data-pc-section","value")}}var MD=({dt:t})=>`
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
`,LD={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},km=(()=>{class t extends ue{name="progressbar";theme=MD;classes=LD;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Zu=(()=>{class t extends ae{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=D(km);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,xD,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.templates=l)}},inputs:{value:[2,"value","value",Le],showValue:[2,"showValue","showValue",N],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[oe([km]),O],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(n,r){n&1&&(S(0,"div",0),A(1,kD,4,13,"div",1)(2,FD,2,7,"div",2),x()),n&2&&(B(r.styleClass),g("ngStyle",r.style)("ngClass",oi(12,ED,r.mode==="determinate",r.mode==="indeterminate")),E("aria-valuemin",0)("aria-valuenow",r.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",r.value+r.unit),b(),g("ngIf",r.mode==="determinate"),b(),g("ngIf",r.mode==="indeterminate"))},dependencies:[le,We,je,Je,vt,ne],encapsulation:2,changeDetection:0})}return t})(),i6=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Zu,ne,ne]})}return t})();var RD=["file"],OD=["header"],Fm=["content"],PD=["toolbar"],ND=["chooseicon"],$D=["filelabel"],BD=["uploadicon"],VD=["cancelicon"],UD=["empty"],jD=["advancedfileinput"],HD=["basicfileinput"],zD=(t,i,e,n,r)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,uploadCallback:r}),qD=(t,i,e,n,r,a,l,d)=>({$implicit:t,uploadedFiles:i,chooseCallback:e,clearCallback:n,removeUploadedFileCallback:r,removeFileCallback:a,progress:l,messages:d}),WD=t=>({$implicit:t});function GD(t,i){if(t&1&&L(0,"span"),t&2){let e=_(3);B(e.chooseIcon),E("aria-label",!0)("data-pc-section","chooseicon")}}function KD(t,i){t&1&&L(0,"PlusIcon"),t&2&&E("aria-label",!0)("data-pc-section","chooseicon")}function QD(t,i){}function YD(t,i){t&1&&A(0,QD,0,0,"ng-template")}function ZD(t,i){if(t&1&&(S(0,"span"),A(1,YD,1,0,null,11),x()),t&2){let e=_(4);E("aria-label",!0)("data-pc-section","chooseicon"),b(),g("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function XD(t,i){if(t&1&&(He(0),A(1,KD,1,2,"PlusIcon",9)(2,ZD,2,3,"span",9),ze()),t&2){let e=_(3);b(),g("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),b(),g("ngIf",e.chooseIconTemplate||e._chooseIconTemplate)}}function JD(t,i){if(t&1&&L(0,"span",21),t&2){let e=_(4);g("ngClass",e.uploadIcon),E("aria-hidden",!0)}}function ex(t,i){t&1&&L(0,"UploadIcon")}function tx(t,i){}function nx(t,i){t&1&&A(0,tx,0,0,"ng-template")}function ix(t,i){if(t&1&&(S(0,"span"),A(1,nx,1,0,null,11),x()),t&2){let e=_(5);E("aria-hidden",!0),b(),g("ngTemplateOutlet",e.uploadIconTemplate||e._uploadIconTemplate)}}function rx(t,i){if(t&1&&(He(0),A(1,ex,1,0,"UploadIcon",9)(2,ix,2,2,"span",9),ze()),t&2){let e=_(4);b(),g("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),b(),g("ngIf",e.uploadIconTemplate||e._uploadIconTemplate)}}function ox(t,i){if(t&1){let e=Ae();S(0,"p-button",19),ee("onClick",function(){X(e);let r=_(3);return J(r.upload())}),A(1,JD,1,2,"span",20)(2,rx,3,2,"ng-container",9),x()}if(t&2){let e=_(3);g("label",e.uploadButtonLabel)("disabled",!e.hasFiles()||e.isFileLimitExceeded())("styleClass","p-fileupload-upload-button "+e.uploadStyleClass)("buttonProps",e.uploadButtonProps),b(),g("ngIf",e.uploadIcon),b(),g("ngIf",!e.uploadIcon)}}function ax(t,i){if(t&1&&L(0,"span",21),t&2){let e=_(4);g("ngClass",e.cancelIcon)}}function sx(t,i){t&1&&L(0,"TimesIcon"),t&2&&E("aria-hidden",!0)}function lx(t,i){}function cx(t,i){t&1&&A(0,lx,0,0,"ng-template")}function ux(t,i){if(t&1&&(S(0,"span"),A(1,cx,1,0,null,11),x()),t&2){let e=_(5);E("aria-hidden",!0),b(),g("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function dx(t,i){if(t&1&&(He(0),A(1,sx,1,1,"TimesIcon",9)(2,ux,2,2,"span",9),ze()),t&2){let e=_(4);b(),g("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),b(),g("ngIf",e.cancelIconTemplate||e._cancelIconTemplate)}}function px(t,i){if(t&1){let e=Ae();S(0,"p-button",19),ee("onClick",function(){X(e);let r=_(3);return J(r.clear())}),A(1,ax,1,1,"span",20)(2,dx,3,2,"ng-container",9),x()}if(t&2){let e=_(3);g("label",e.cancelButtonLabel)("disabled",!e.hasFiles()||e.uploading)("styleClass","p-fileupload-cancel-button "+e.cancelStyleClass)("buttonProps",e.cancelButtonProps),b(),g("ngIf",e.cancelIcon),b(),g("ngIf",!e.cancelIcon)}}function hx(t,i){if(t&1){let e=Ae();He(0),S(1,"p-button",16),ee("focus",function(){X(e);let r=_(2);return J(r.onFocus())})("blur",function(){X(e);let r=_(2);return J(r.onBlur())})("onClick",function(){X(e);let r=_(2);return J(r.choose())})("keydown.enter",function(){X(e);let r=_(2);return J(r.choose())}),S(2,"input",7,0),ee("change",function(r){X(e);let a=_(2);return J(a.onFileSelect(r))}),x(),A(4,GD,1,4,"span",17)(5,XD,3,2,"ng-container",9),x(),A(6,ox,3,6,"p-button",18)(7,px,3,6,"p-button",18),ze()}if(t&2){let e=_(2);b(),g("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled||e.isChooseDisabled())("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),E("data-pc-section","choosebutton"),b(),g("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),E("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),b(2),g("ngIf",e.chooseIcon),b(),g("ngIf",!e.chooseIcon),b(),g("ngIf",!e.auto&&e.showUploadButton),b(),g("ngIf",!e.auto&&e.showCancelButton)}}function fx(t,i){t&1&&xe(0)}function gx(t,i){t&1&&xe(0)}function mx(t,i){if(t&1&&L(0,"p-progressbar",22),t&2){let e=_(2);g("value",e.progress)("showValue",!1)}}function bx(t,i){if(t&1&&L(0,"p-message",14),t&2){let e=i.$implicit;g("severity",e.severity)("text",e.text)}}function vx(t,i){if(t&1){let e=Ae();S(0,"img",33),ee("error",function(r){X(e);let a=_(5);return J(a.imageError(r))}),x()}if(t&2){let e=_().$implicit,n=_(4);g("src",e.objectURL,Vp)("width",n.previewWidth)}}function yx(t,i){t&1&&L(0,"TimesIcon")}function _x(t,i){}function Cx(t,i){t&1&&A(0,_x,0,0,"ng-template")}function wx(t,i){if(t&1&&A(0,yx,1,0,"TimesIcon",9)(1,Cx,1,0,null,11),t&2){let e=_(5);g("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),b(),g("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function Sx(t,i){if(t&1){let e=Ae();S(0,"div",24),A(1,vx,1,2,"img",27),S(2,"div",28)(3,"div",29),me(4),x(),S(5,"span",30),me(6),x()(),S(7,"div",31)(8,"p-button",32),ee("onClick",function(r){let a=X(e).index,l=_(4);return J(l.remove(r,a))}),A(9,wx,2,2,"ng-template",null,2,Tn),x()()()}if(t&2){let e=i.$implicit,n=_(4);b(),g("ngIf",n.isImage(e)),b(3),qe(e.name),b(2),qe(n.formatSize(e.size)),b(2),g("disabled",n.uploading)("styleClass","p-fileupload-file-remove-button "+n.removeStyleClass)}}function Dx(t,i){if(t&1&&A(0,Sx,11,5,"div",26),t&2){let e=_(3);g("ngForOf",e.files)}}function xx(t,i){}function Ex(t,i){if(t&1&&A(0,xx,0,0,"ng-template",25),t&2){let e=_(3);g("ngForOf",e.files)("ngForTemplate",e.fileTemplate||e._fileTemplate)}}function Tx(t,i){if(t&1&&(S(0,"div",23),A(1,Dx,1,1,"div",24)(2,Ex,1,2,null,25),x()),t&2){let e=_(2);b(),Te(!e.fileTemplate&&!e._fileTemplate?1:-1),b(),Te(e.fileTemplate||e._fileTemplate?2:-1)}}function Ax(t,i){t&1&&xe(0)}function Ix(t,i){t&1&&xe(0)}function kx(t,i){if(t&1&&A(0,Ix,1,0,"ng-container",11),t&2){let e=_(2);g("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Fx(t,i){if(t&1){let e=Ae();S(0,"div",6)(1,"input",7,0),ee("change",function(r){X(e);let a=_();return J(a.onFileSelect(r))}),x(),S(3,"div",8),A(4,hx,8,15,"ng-container",9)(5,fx,1,0,"ng-container",10)(6,gx,1,0,"ng-container",11),x(),S(7,"div",12,1),ee("dragenter",function(r){X(e);let a=_();return J(a.onDragEnter(r))})("dragleave",function(r){X(e);let a=_();return J(a.onDragLeave(r))})("drop",function(r){X(e);let a=_();return J(a.onDrop(r))}),A(9,mx,1,2,"p-progressbar",13),uc(10,bx,1,2,"p-message",14,cc),A(12,Tx,3,2,"div",15)(13,Ax,1,0,"ng-container",10)(14,kx,1,1,"ng-container"),x()()}if(t&2){let e=_();B(e.styleClass),g("ngClass","p-fileupload p-fileupload-advanced p-component")("ngStyle",e.style),E("data-pc-name","fileupload")("data-pc-section","root"),b(),En("display","none"),g("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),E("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),b(3),g("ngIf",!e.headerTemplate&&!e._headerTemplate),b(),g("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",Ha(24,zD,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.upload.bind(e))),b(),g("ngTemplateOutlet",e.toolbarTemplate||e._toolbarTemplate),b(),E("data-pc-section","content"),b(2),g("ngIf",e.hasFiles()),b(),dc(e.msgs),b(2),g("ngIf",e.hasFiles()),b(),g("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Zp(30,qD,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.removeUploadedFile.bind(e),e.remove.bind(e),e.progress,e.msgs)),b(),Te((e.emptyTemplate||e._emptyTemplate)&&!e.hasFiles()&&!e.hasUploadedFiles()?14:-1)}}function Mx(t,i){if(t&1&&L(0,"p-message",14),t&2){let e=i.$implicit;g("severity",e.severity)("text",e.text)}}function Lx(t,i){if(t&1&&L(0,"span",37),t&2){let e=_(4);g("ngClass",e.uploadIcon)}}function Rx(t,i){t&1&&L(0,"UploadIcon",40),t&2&&g("styleClass","p-button-icon p-button-icon-left")}function Ox(t,i){}function Px(t,i){t&1&&A(0,Ox,0,0,"ng-template")}function Nx(t,i){if(t&1&&(S(0,"span",41),A(1,Px,1,0,null,11),x()),t&2){let e=_(5);b(),g("ngTemplateOutlet",e._uploadIconTemplate||e.uploadIconTemplate)}}function $x(t,i){if(t&1&&(He(0),A(1,Rx,1,1,"UploadIcon",38)(2,Nx,2,1,"span",39),ze()),t&2){let e=_(4);b(),g("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),b(),g("ngIf",e._uploadIconTemplate||e.uploadIconTemplate)}}function Bx(t,i){if(t&1&&A(0,Lx,1,1,"span",36)(1,$x,3,2,"ng-container",9),t&2){let e=_(3);g("ngIf",e.uploadIcon),b(),g("ngIf",!e.uploadIcon)}}function Vx(t,i){if(t&1&&L(0,"span",43),t&2){let e=_(4);g("ngClass",e.chooseIcon)}}function Ux(t,i){t&1&&L(0,"PlusIcon"),t&2&&E("data-pc-section","uploadicon")}function jx(t,i){}function Hx(t,i){t&1&&A(0,jx,0,0,"ng-template")}function zx(t,i){if(t&1&&(He(0),A(1,Ux,1,1,"PlusIcon",9)(2,Hx,1,0,null,11),ze()),t&2){let e=_(4);b(),g("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),b(),g("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function qx(t,i){if(t&1&&A(0,Vx,1,1,"span",42)(1,zx,3,2,"ng-container",9),t&2){let e=_(3);g("ngIf",e.chooseIcon),b(),g("ngIf",!e.chooseIcon)}}function Wx(t,i){if(t&1&&A(0,Bx,2,2)(1,qx,2,2),t&2){let e=_(2);Te(e.hasFiles()&&!e.auto?0:1)}}function Gx(t,i){if(t&1&&(S(0,"span"),me(1),x()),t&2){let e=_(3);B(e.cx("filelabel")),b(),gt(" ",e.basicFileChosenLabel()," ")}}function Kx(t,i){t&1&&xe(0)}function Qx(t,i){if(t&1&&A(0,Kx,1,0,"ng-container",10),t&2){let e=_(3);g("ngTemplateOutlet",e.fileLabelTemplate||e._fileLabelTemplate)("ngTemplateOutletContext",ke(2,WD,e.files))}}function Yx(t,i){if(t&1&&A(0,Gx,2,3,"span",44)(1,Qx,1,4,"ng-container"),t&2){let e=_(2);Te(!e.fileLabelTemplate&&!e._fileLabelTemplate?0:1)}}function Zx(t,i){if(t&1){let e=Ae();S(0,"div",21),uc(1,Mx,1,2,"p-message",14,cc),S(3,"p-button",34),ee("onClick",function(){X(e);let r=_();return J(r.onBasicUploaderClick())})("keydown",function(r){X(e);let a=_();return J(a.onBasicKeydown(r))}),A(4,Wx,2,1,"ng-template",null,2,Tn),S(6,"input",35,3),ee("change",function(r){X(e);let a=_();return J(a.onFileSelect(r))})("focus",function(){X(e);let r=_();return J(r.onFocus())})("blur",function(){X(e);let r=_();return J(r.onBlur())}),x()(),A(8,Yx,2,1),x()}if(t&2){let e=_();B(e.styleClass),g("ngClass","p-fileupload p-fileupload-basic p-component"),E("data-pc-name","fileupload"),b(),dc(e.msgs),b(2),St(e.style),g("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled)("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),b(3),g("accept",e.accept)("multiple",e.multiple)("disabled",e.disabled),E("aria-label",e.browseFilesLabel)("data-pc-section","input"),b(2),Te(e.auto?-1:8)}}var Xx=({dt:t})=>`
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
`,Jx={root:({instance:t})=>`p-fileupload p-fileupload-${t.mode} p-component`,header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},Mm=(()=>{class t extends ue{name="fileupload";theme=Xx;classes=Jx;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Xu=(()=>{class t extends ae{name;url;method="post";multiple;accept;disabled;auto;withCredentials;maxFileSize;invalidFileSizeMessageSummary="{0}: Invalid file size, ";invalidFileSizeMessageDetail="maximum upload size is {0}.";invalidFileTypeMessageSummary="{0}: Invalid file type, ";invalidFileTypeMessageDetail="allowed file types: {0}.";invalidFileLimitMessageDetail="limit is {0} at most.";invalidFileLimitMessageSummary="Maximum number of files exceeded, ";style;styleClass;previewWidth=50;chooseLabel;uploadLabel;cancelLabel;chooseIcon;uploadIcon;cancelIcon;showUploadButton=!0;showCancelButton=!0;mode="advanced";headers;customUpload;fileLimit;uploadStyleClass;cancelStyleClass;removeStyleClass;chooseStyleClass;chooseButtonProps;uploadButtonProps={severity:"secondary"};cancelButtonProps={severity:"secondary"};onBeforeUpload=new W;onSend=new W;onUpload=new W;onError=new W;onClear=new W;onRemove=new W;onSelect=new W;onProgress=new W;uploadHandler=new W;onImageError=new W;onRemoveUploadedFile=new W;fileTemplate;headerTemplate;contentTemplate;toolbarTemplate;chooseIconTemplate;fileLabelTemplate;uploadIconTemplate;cancelIconTemplate;emptyTemplate;advancedFileInput;basicFileInput;content;set files(e){this._files=[];for(let n=0;n<e.length;n++){let r=e[n];this.validate(r)&&(this.isImage(r)&&(r.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[n]))),this._files.push(e[n]))}}get files(){return this._files}get basicButtonLabel(){return this.auto||!this.hasFiles()?this.chooseLabel:this.uploadLabel??this.files[0].name}_files=[];progress=0;dragHighlight;msgs;uploadedFileCount=0;focus;uploading;duplicateIEEvent;translationSubscription;dragOverListener;uploadedFiles=[];sanitizer=D(Mc);zone=D(ft);http=D(os);_componentStyle=D(Mm);ngOnInit(){super.ngOnInit(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()})}ngAfterViewInit(){super.ngAfterViewInit(),An(this.platformId)&&this.mode==="advanced"&&this.zone.runOutsideAngular(()=>{this.content&&(this.dragOverListener=this.renderer.listen(this.content.nativeElement,"dragover",this.onDragOver.bind(this)))})}_headerTemplate;_contentTemplate;_toolbarTemplate;_chooseIconTemplate;_uploadIconTemplate;_cancelIconTemplate;_emptyTemplate;_fileTemplate;_fileLabelTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"file":this._fileTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"toolbar":this._toolbarTemplate=e.template;break;case"chooseicon":this._chooseIconTemplate=e.template;break;case"uploadicon":this._uploadIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"filelabel":this._fileLabelTemplate=e.template;break;default:this._fileTemplate=e.template;break}})}basicFileChosenLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles()?this.files&&this.files.length===1?this.files[0].name:this.config.getTranslation("fileChosenMessage")?.replace("{0}",this.files.length):this.config.getTranslation("noFileChosenMessage")||""}getTranslation(e){return this.config.getTranslation(e)}choose(){this.advancedFileInput?.nativeElement.click()}onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.msgs=[],this.multiple||(this.files=[]);let n=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let r=0;r<n.length;r++){let a=n[r];this.isFileSelected(a)||this.validate(a)&&(this.isImage(a)&&(a.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(n[r]))),this.files.push(n[r]))}this.onSelect.emit({originalEvent:e,files:n,currentFiles:this.files}),this.checkFileLimit(n),this.hasFiles()&&this.auto&&(this.mode!=="advanced"||!this.isFileLimitExceeded())&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()}isFileSelected(e){for(let n of this.files)if(n.name+n.type+n.size===e.name+e.type+e.size)return!0;return!1}isIE11(){if(An(this.platformId))return!!this.document.defaultView.MSInputMethodContext&&!!this.document.documentMode}validate(e){if(this.msgs=this.msgs||[],this.accept&&!this.isFileTypeValid(e)){let n=`${this.invalidFileTypeMessageSummary.replace("{0}",e.name)} ${this.invalidFileTypeMessageDetail.replace("{0}",this.accept)}`;return this.msgs.push({severity:"error",text:n}),!1}if(this.maxFileSize&&e.size>this.maxFileSize){let n=`${this.invalidFileSizeMessageSummary.replace("{0}",e.name)} ${this.invalidFileSizeMessageDetail.replace("{0}",this.formatSize(this.maxFileSize))}`;return this.msgs.push({severity:"error",text:n}),!1}return!0}isFileTypeValid(e){let n=this.accept?.split(",").map(r=>r.trim());for(let r of n)if(this.isWildcard(r)?this.getTypeClass(e.type)===this.getTypeClass(r):e.type==r||this.getFileExtension(e).toLowerCase()===r.toLowerCase())return!0;return!1}getTypeClass(e){return e.substring(0,e.indexOf("/"))}isWildcard(e){return e.indexOf("*")!==-1}getFileExtension(e){return"."+e.name.split(".").pop()}isImage(e){return/^image\//.test(e.type)}onImageLoad(e){window.URL.revokeObjectURL(e.src)}uploader(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.uploadHandler.emit({files:this.files}),this.cd.markForCheck();else{this.uploading=!0,this.msgs=[];let e=new FormData;this.onBeforeUpload.emit({formData:e});for(let n=0;n<this.files.length;n++)e.append(this.name,this.files[n],this.files[n].name);this.http.request(this.method,this.url,{body:e,headers:this.headers,reportProgress:!0,observe:"events",withCredentials:this.withCredentials}).subscribe(n=>{switch(n.type){case gn.Sent:this.onSend.emit({originalEvent:n,formData:e});break;case gn.Response:this.uploading=!1,this.progress=0,n.status>=200&&n.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.onUpload.emit({originalEvent:n,files:this.files})):this.onError.emit({files:this.files}),this.uploadedFiles.push(...this.files),this.clear();break;case gn.UploadProgress:{n.loaded&&(this.progress=Math.round(n.loaded*100/n.total)),this.onProgress.emit({originalEvent:n,progress:this.progress});break}}this.cd.markForCheck()},n=>{this.uploading=!1,this.onError.emit({files:this.files,error:n})})}}clear(){this.files=[],this.uploadedFileCount=0,this.onClear.emit(),this.clearInputElement(),this.msgs=[],this.cd.markForCheck()}remove(e,n){this.clearInputElement(),this.onRemove.emit({originalEvent:e,file:this.files[n]}),this.files.splice(n,1),this.checkFileLimit(this.files)}removeUploadedFile(e){let n=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.onRemoveUploadedFile.emit({file:n,files:this.uploadedFiles})}isFileLimitExceeded(){let n=this.auto?this.files.length:this.files.length+this.uploadedFileCount;return this.fileLimit&&this.fileLimit<=n&&this.focus&&(this.focus=!1),this.fileLimit&&this.fileLimit<n}isChooseDisabled(){return this.auto?this.fileLimit&&this.fileLimit<=this.files.length:this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount}checkFileLimit(e){this.msgs??=[];let n=this.msgs.length>0&&this.fileLimit&&this.fileLimit<e.length;if(this.isFileLimitExceeded()||n){let r=`${this.invalidFileLimitMessageSummary.replace("{0}",this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}",this.fileLimit.toString())}`;this.msgs.push({severity:"error",text:r})}else this.msgs=this.msgs.filter(r=>!r.text.includes(this.invalidFileLimitMessageSummary))}clearInputElement(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.advancedFileInput.nativeElement.value=""),this.basicFileInput&&this.basicFileInput.nativeElement&&(this.basicFileInput.nativeElement.value="")}clearIEInput(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.duplicateIEEvent=!0,this.advancedFileInput.nativeElement.value="")}hasFiles(){return this.files&&this.files.length>0}hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0}onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())}onDragOver(e){this.disabled||(Rn(this.content?.nativeElement,"p-fileupload-highlight"),this.dragHighlight=!0,e.stopPropagation(),e.preventDefault())}onDragLeave(e){this.disabled||On(this.content?.nativeElement,"p-fileupload-highlight")}onDrop(e){if(!this.disabled){On(this.content?.nativeElement,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();let n=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||n&&n.length===1)&&this.onFileSelect(e)}}onFocus(){this.focus=!0}onBlur(){this.focus=!1}formatSize(e){let a=this.getTranslation(vi.FILE_SIZE_TYPES);if(e===0)return`0 ${a[0]}`;let l=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,l)).toFixed(3)} ${a[l]}`}upload(){this.hasFiles()&&this.uploader()}onBasicUploaderClick(){this.basicFileInput?.nativeElement.click()}onBasicKeydown(e){switch(e.code){case"Space":case"Enter":this.onBasicUploaderClick(),e.preventDefault();break}}imageError(e){this.onImageError.emit(e)}getBlockableElement(){return this.el.nativeElement.children[0]}get chooseButtonLabel(){return this.chooseLabel||this.config.getTranslation(vi.CHOOSE)}get uploadButtonLabel(){return this.uploadLabel||this.config.getTranslation(vi.UPLOAD)}get cancelButtonLabel(){return this.cancelLabel||this.config.getTranslation(vi.CANCEL)}get browseFilesLabel(){return this.config.getTranslation(vi.ARIA)[vi.BROWSE_FILES]}get pendingLabel(){return this.config.getTranslation(vi.PENDING)}ngOnDestroy(){this.content&&this.content.nativeElement&&this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-fileupload"],["p-fileUpload"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,RD,4),Y(a,OD,4),Y(a,Fm,4),Y(a,PD,4),Y(a,ND,4),Y(a,$D,4),Y(a,BD,4),Y(a,VD,4),Y(a,UD,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.fileTemplate=l.first),j(l=H())&&(r.headerTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.toolbarTemplate=l.first),j(l=H())&&(r.chooseIconTemplate=l.first),j(l=H())&&(r.fileLabelTemplate=l.first),j(l=H())&&(r.uploadIconTemplate=l.first),j(l=H())&&(r.cancelIconTemplate=l.first),j(l=H())&&(r.emptyTemplate=l.first),j(l=H())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&(un(jD,5),un(HD,5),un(Fm,5)),n&2){let a;j(a=H())&&(r.advancedFileInput=a.first),j(a=H())&&(r.basicFileInput=a.first),j(a=H())&&(r.content=a.first)}},inputs:{name:"name",url:"url",method:"method",multiple:[2,"multiple","multiple",N],accept:"accept",disabled:[2,"disabled","disabled",N],auto:[2,"auto","auto",N],withCredentials:[2,"withCredentials","withCredentials",N],maxFileSize:[2,"maxFileSize","maxFileSize",Le],invalidFileSizeMessageSummary:"invalidFileSizeMessageSummary",invalidFileSizeMessageDetail:"invalidFileSizeMessageDetail",invalidFileTypeMessageSummary:"invalidFileTypeMessageSummary",invalidFileTypeMessageDetail:"invalidFileTypeMessageDetail",invalidFileLimitMessageDetail:"invalidFileLimitMessageDetail",invalidFileLimitMessageSummary:"invalidFileLimitMessageSummary",style:"style",styleClass:"styleClass",previewWidth:[2,"previewWidth","previewWidth",Le],chooseLabel:"chooseLabel",uploadLabel:"uploadLabel",cancelLabel:"cancelLabel",chooseIcon:"chooseIcon",uploadIcon:"uploadIcon",cancelIcon:"cancelIcon",showUploadButton:[2,"showUploadButton","showUploadButton",N],showCancelButton:[2,"showCancelButton","showCancelButton",N],mode:"mode",headers:"headers",customUpload:[2,"customUpload","customUpload",N],fileLimit:[2,"fileLimit","fileLimit",e=>Le(e,null)],uploadStyleClass:"uploadStyleClass",cancelStyleClass:"cancelStyleClass",removeStyleClass:"removeStyleClass",chooseStyleClass:"chooseStyleClass",chooseButtonProps:"chooseButtonProps",uploadButtonProps:"uploadButtonProps",cancelButtonProps:"cancelButtonProps",files:"files"},outputs:{onBeforeUpload:"onBeforeUpload",onSend:"onSend",onUpload:"onUpload",onError:"onError",onClear:"onClear",onRemove:"onRemove",onSelect:"onSelect",onProgress:"onProgress",uploadHandler:"uploadHandler",onImageError:"onImageError",onRemoveUploadedFile:"onRemoveUploadedFile"},features:[oe([Mm]),O],decls:2,vars:2,consts:[["advancedfileinput",""],["content",""],["icon",""],["basicfileinput",""],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","file",3,"change","multiple","accept","disabled"],[1,"p-fileupload-header"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"p-fileupload-content",3,"dragenter","dragleave","drop"],[3,"value","showValue",4,"ngIf"],[3,"severity","text"],["class","p-fileupload-file-list",4,"ngIf"],[3,"focus","blur","onClick","keydown.enter","styleClass","disabled","label","buttonProps"],[3,"class",4,"ngIf"],[3,"label","disabled","styleClass","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","disabled","styleClass","buttonProps"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"value","showValue"],[1,"p-fileupload-file-list"],[1,"p-fileupload-file"],["ngFor","",3,"ngForOf","ngForTemplate"],["class","p-fileupload-file",4,"ngFor","ngForOf"],["class","p-fileupload-file-thumbnail",3,"src","width","error",4,"ngIf"],[1,"p-fileupload-file-info"],[1,"p-fileupload-file-name"],[1,"p-fileupload-file-size"],[1,"p-fileupload-file-actions"],["text","","rounded","","severity","danger",3,"onClick","disabled","styleClass"],[1,"p-fileupload-file-thumbnail",3,"error","src","width"],[3,"onClick","keydown","styleClass","disabled","label","buttonProps"],["type","file",3,"change","focus","blur","accept","multiple","disabled"],["class","p-button-icon p-button-icon-left",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-button-icon p-button-icon-left",4,"ngIf"],[3,"styleClass"],[1,"p-button-icon","p-button-icon-left"],["class","p-button-icon p-button-icon-left pi",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left","pi",3,"ngClass"],[3,"class"]],template:function(n,r){n&1&&A(0,Fx,15,39,"div",4)(1,Zx,9,16,"div",5),n&2&&(g("ngIf",r.mode==="advanced"),b(),g("ngIf",r.mode==="basic"))},dependencies:[le,We,si,je,Je,vt,Wn,Zu,Gn,Bg,jg,Wr,ne],encapsulation:2,changeDetection:0})}return t})(),Lm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Xu,ne,ne]})}return t})();function tE(t,i){}function nE(t,i){}function iE(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=_(2);g("text",e.error)}}function rE(t,i){if(t&1){let e=Ae();S(0,"div",8)(1,"p",9),L(2,"i",10),me(3),L(4,"br"),me(5),x()(),A(6,iE,1,1,"p-message",11),S(7,"div",12)(8,"p-button",13),Ve(9,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.emitData())}),x(),S(10,"p-button",14),Ve(11,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.loadSampleData())}),x()()}if(t&2){let e=i.$implicit,n=_();b(3),qe(e.name),b(2),gt("",n.formatSize(e.size)," "),b(),g("ngIf",n.error),b(2),g("label",Ue(9,7,"page.upload.continue"))("loading",n.loading)("disabled",!n.uploadedFileName),b(2),g("label",Ue(11,9,"page.upload.sample"))}}function oE(t,i){if(t&1&&L(0,"p-message",15),t&2){let e=_(2);g("text",e.error)}}function aE(t,i){if(t&1){let e=Ae();S(0,"p-button",14),Ve(1,"translate"),ee("onClick",function(){X(e);let r=_(2);return J(r.loadSampleData())}),x()}t&2&&g("label",Ue(1,1,"page.upload.sample"))}function sE(t,i){if(t&1){let e=Ae();S(0,"div",16),ee("click",function(){X(e),_();let r=Xt(5);return J(r.choose())}),L(1,"i",17),S(2,"p",18),me(3),Ve(4,"translate"),x()(),A(5,oE,1,1,"p-message",11),S(6,"div",12)(7,"p-button",13),Ve(8,"translate"),ee("onClick",function(){X(e);let r=_();return J(r.emitData())}),x(),A(9,aE,2,3,"p-button",19),x()}if(t&2){let e=_();b(3),qe(Ue(4,6,"page.upload.word.instruction")),b(2),g("ngIf",e.error),b(2),g("label",Ue(8,8,"page.upload.continue"))("loading",e.loading)("disabled",!e.uploadedFileName),b(2),g("ngIf",e.showSampleDataButton)}}var Rm=class t{constructor(i,e,n){this.urlDataService=i;this.uploadState=e;this.translate=n}mode="original";showSampleDataButton=!0;uploadComplete=new W;error="";loading=!1;extractedHtml="";uploadedFileName="";formatSize(i){let r=this.translate.instant("fileSizeTypes"),a=this.translate.instant("fileSizeTypes.warning");if(!r||!Array.isArray(r))return console.warn(a),`${i} B`;if(i===0)return`0 ${r[0]}`;let l=Math.floor(Math.log(i)/Math.log(1024)),d=parseFloat((i/Math.pow(1024,l)).toFixed(1)),h=Math.min(l,r.length-1);return`${d} ${r[h]}`}getWordContent(i){this.loading=!0;let e=this.translate.instant("page.upload.word.error.upload"),n=this.translate.instant("page.upload.word.error.doc"),r=this.translate.instant("page.upload.error.unknown"),a=this.translate.instant("page.upload.word.error.try"),l=i.files?.[0];if(!l){this.error=e,this.loading=!1;return}this.uploadedFileName=l.name;let d=new FileReader;d.onload=()=>De(this,null,function*(){let h=d.result;try{var m=(yield(yield import("./chunk-LDKNIF4L.js")).convertToHtml({arrayBuffer:h})).value.trim();if(!m){this.error=n;return}m=yield this.urlDataService.formatHtml(m,"word"),this.extractedHtml=m}catch(y){this.error=`${a} ${y.message||y||r}`}finally{this.loading=!1}}),d.readAsArrayBuffer(l)}emitData(){this.mode==="original"&&this.uploadState.setUploadData({originalUrl:this.uploadedFileName,originalHtml:this.extractedHtml,modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.mode==="prototype"&&this.uploadState.mergeModifiedData({modifiedUrl:this.uploadedFileName,modifiedHtml:this.extractedHtml}),this.uploadComplete.emit()}loadSampleData(){return De(this,null,function*(){yield this.urlDataService.loadSampleDataset("word"),this.uploadComplete.emit()})}static \u0275fac=function(e){return new(e||t)($(xi),$(Pn),$(zn))};static \u0275cmp=P({type:t,selectors:[["ca-upload-word"]],inputs:{mode:"mode",showSampleDataButton:"showSampleDataButton"},outputs:{uploadComplete:"uploadComplete"},decls:14,vars:4,consts:[["fileUploadRef",""],["header",""],["content",""],["file",""],["empty",""],[1,"border-none","p-0","m-0"],[1,"font-bold","mb-3","p-0"],["name","word[]","accept",".docx","auto","true","maxFileSize","1000000","mode","advanced","styleClass","border-none",3,"uploadHandler","customUpload"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-solid","border-round","border-200","surface-100"],[1,"text-xl"],[1,"pi","pi-file-word","text-blue-500","text-2xl","mr-1"],["severity","error",3,"text",4,"ngIf"],[1,"flex","gap-2","flex-wrap","mt-3"],["type","submit","icon","pi pi-save","severity","primary",3,"onClick","label","loading","disabled"],["icon","pi pi-file","severity","secondary",3,"onClick","label"],["severity","error",3,"text"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-dashed","border-round","border-200","surface-100","hover:surface-200","hover:border-primary-400","transition-colors","transition-duration-500","cursor-pointer",3,"click"],[1,"pi","pi-upload","border-2","border-circle","border-300","p-4","text-5xl","text-color-secondary"],[1,"m-0","mt-3"],["icon","pi pi-file","severity","secondary",3,"label","onClick",4,"ngIf"]],template:function(e,n){if(e&1){let r=Ae();S(0,"fieldset",5)(1,"legend",6),me(2),Ve(3,"translate"),x(),S(4,"p-fileupload",7,0),ee("uploadHandler",function(l){return X(r),J(n.getWordContent(l))}),A(6,tE,0,0,"ng-template",null,1,Tn)(8,nE,0,0,"ng-template",null,2,Tn)(10,rE,12,11,"ng-template",null,3,Tn)(12,sE,10,10,"ng-template",null,4,Tn),x()()}e&2&&(b(2),gt(" ",Ue(3,2,"page.upload.word.legend")," "),b(2),g("customUpload",!0))},dependencies:[le,je,di,ui,Ci,Lm,Xu,Gr,Wn,Gn],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .p-fileupload-header{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload-content{background:transparent;box-shadow:none;padding:0;border:none}[_nghost-%COMP%]     .p-fileupload .p-progressbar{margin:0!important;padding:0!important;height:0!important;display:none!important;border:none!important}  .p-fileupload{--p-fileupload-content-gap: 0rem}"]})};var lE=["checkboxicon"],cE=["input"],uE=()=>({"p-checkbox-input":!0}),dE=t=>({checked:t,class:"p-checkbox-icon"});function pE(t,i){if(t&1&&L(0,"span",8),t&2){let e=_(3);g("ngClass",e.checkboxIcon),E("data-pc-section","icon")}}function hE(t,i){t&1&&L(0,"CheckIcon",9),t&2&&(g("styleClass","p-checkbox-icon"),E("data-pc-section","icon"))}function fE(t,i){if(t&1&&(He(0),A(1,pE,1,2,"span",7)(2,hE,1,2,"CheckIcon",6),ze()),t&2){let e=_(2);b(),g("ngIf",e.checkboxIcon),b(),g("ngIf",!e.checkboxIcon)}}function gE(t,i){t&1&&L(0,"MinusIcon",9),t&2&&(g("styleClass","p-checkbox-icon"),E("data-pc-section","icon"))}function mE(t,i){if(t&1&&(He(0),A(1,fE,3,2,"ng-container",4)(2,gE,1,2,"MinusIcon",6),ze()),t&2){let e=_();b(),g("ngIf",e.checked),b(),g("ngIf",e._indeterminate())}}function bE(t,i){}function vE(t,i){t&1&&A(0,bE,0,0,"ng-template")}var yE=({dt:t})=>`
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
`,_E={root:({instance:t,props:i})=>["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Om=(()=>{class t extends ue{name="checkbox";theme=yE;classes=_E;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var CE={provide:_i,useExisting:ut(()=>Pm),multi:!0},Pm=(()=>{class t extends ae{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new W;onFocus=new W;onBlur=new W;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Jf(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=Ke(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=D(Om);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,r=this.injector.get(_n,null,{optional:!0,self:!0}),a=r&&!this.formControl?r.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=a.filter(l=>!Qi(l,this.value)):n=a?[...a,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,lE,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.checkboxIconTemplate=l.first),j(l=H())&&(r.templates=l)}},viewQuery:function(n,r){if(n&1&&un(cE,5),n&2){let a;j(a=H())&&(r.inputViewChild=a.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",N],binary:[2,"binary","binary",N],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Le],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",N],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",N],required:[2,"required","required",N],autofocus:[2,"autofocus","autofocus",N],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([CE,Om]),O,ot],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,r){if(n&1){let a=Ae();S(0,"div",1)(1,"input",2,0),ee("focus",function(d){return X(a),J(r.onInputFocus(d))})("blur",function(d){return X(a),J(r.onInputBlur(d))})("change",function(d){return X(a),J(r.handleChange(d))}),x(),S(3,"div",3),A(4,mE,3,2,"ng-container",4)(5,vE,1,0,null,5),x()()}n&2&&(St(r.style),B(r.styleClass),g("ngClass",r.containerClass),E("data-p-highlight",r.checked)("data-p-checked",r.checked)("data-p-disabled",r.disabled),b(),St(r.inputStyle),B(r.inputClass),g("value",r.value)("checked",r.checked)("disabled",r.disabled)("readonly",r.readonly)("ngClass",Qp(26,uE)),E("id",r.inputId)("name",r.name)("tabindex",r.tabindex)("required",r.required?!0:null)("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel),b(3),g("ngIf",!r.checkboxIconTemplate&&!r._checkboxIconTemplate),b(),g("ngTemplateOutlet",r.checkboxIconTemplate||r._checkboxIconTemplate)("ngTemplateOutletContext",ke(27,dE,r.checked)))},dependencies:[le,We,je,Je,sl,$g,ne],encapsulation:2,changeDetection:0})}return t})(),rP=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[Pm,ne,ne]})}return t})();var hl=["*"],wE=["toggleicon"],SE=t=>({active:t});function DE(t,i){}function xE(t,i){t&1&&A(0,DE,0,0,"ng-template")}function EE(t,i){if(t&1&&A(0,xE,1,0,null,0),t&2){let e=_();g("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",ke(2,SE,e.active()))}}function TE(t,i){if(t&1&&L(0,"span",4),t&2){let e=_(3);B(e.pcAccordion.collapseIcon),g("ngClass",e.pcAccordion.iconClass),E("aria-hidden",!0)}}function AE(t,i){if(t&1&&L(0,"ChevronDownIcon",4),t&2){let e=_(3);g("ngClass",e.pcAccordion.iconClass),E("aria-hidden",!0)}}function IE(t,i){if(t&1&&(He(0),A(1,TE,1,4,"span",2)(2,AE,1,2,"ChevronDownIcon",3),ze()),t&2){let e=_(2);b(),g("ngIf",e.pcAccordion.collapseIcon),b(),g("ngIf",!e.pcAccordion.collapseIcon)}}function kE(t,i){if(t&1&&L(0,"span",4),t&2){let e=_(3);B(e.pcAccordion.expandIcon),g("ngClass",e.pcAccordion.iconClass),E("aria-hidden",!0)}}function FE(t,i){if(t&1&&L(0,"ChevronUpIcon",4),t&2){let e=_(3);g("ngClass",e.pcAccordion.iconClass),E("aria-hidden",!0)}}function ME(t,i){if(t&1&&(He(0),A(1,kE,1,4,"span",2)(2,FE,1,2,"ChevronUpIcon",3),ze()),t&2){let e=_(2);b(),g("ngIf",e.pcAccordion.expandIcon),b(),g("ngIf",!e.pcAccordion.expandIcon)}}function LE(t,i){if(t&1&&A(0,IE,3,2,"ng-container",1)(1,ME,3,2,"ng-container",1),t&2){let e=_();g("ngIf",e.active()),b(),g("ngIf",!e.active())}}var dl=t=>({transitionParams:t}),Nm=t=>({value:"visible",params:t}),$m=t=>({value:"hidden",params:t}),RE=["header"],OE=["icon"],PE=["content"],NE=["*",[["p-header"]]],$E=["*","p-header"],BE=t=>({$implicit:t});function VE(t,i){if(t&1&&me(0),t&2){let e=_();gt(" ",e.header," ")}}function UE(t,i){t&1&&xe(0)}function jE(t,i){if(t&1&&A(0,UE,1,0,"ng-container",4),t&2){let e=_(2);g("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function HE(t,i){t&1&&Be(0,1)}function zE(t,i){if(t&1&&A(0,jE,1,1,"ng-container")(1,HE,1,0),t&2){let e=_();Te(e.headerTemplate||e._headerTemplate?0:-1),b(),Te(e.headerFacet?1:-1)}}function qE(t,i){}function WE(t,i){t&1&&A(0,qE,0,0,"ng-template")}function GE(t,i){if(t&1&&A(0,WE,1,0,null,5),t&2){let e=_();g("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ke(2,BE,e.selected))}}function KE(t,i){if(t&1&&L(0,"span",8),t&2){let e=_(3);B(e.accordion.collapseIcon),g("ngClass",e.iconClass),E("aria-hidden",!0)}}function QE(t,i){if(t&1&&L(0,"ChevronDownIcon",8),t&2){let e=_(3);g("ngClass",e.iconClass),E("aria-hidden",!0)}}function YE(t,i){if(t&1&&(He(0),A(1,KE,1,4,"span",6)(2,QE,1,2,"ChevronDownIcon",7),ze()),t&2){let e=_(2);b(),g("ngIf",e.accordion.collapseIcon),b(),g("ngIf",!e.accordion.collapseIcon)}}function ZE(t,i){if(t&1&&L(0,"span",8),t&2){let e=_(3);B(e.accordion.expandIcon),g("ngClass",e.iconClass),E("aria-hidden",!0)}}function XE(t,i){if(t&1&&L(0,"ChevronUpIcon",8),t&2){let e=_(3);g("ngClass",e.iconClass),E("aria-hidden",!0)}}function JE(t,i){if(t&1&&(He(0),A(1,ZE,1,4,"span",6)(2,XE,1,2,"ChevronUpIcon",7),ze()),t&2){let e=_(2);b(),g("ngIf",e.accordion.expandIcon),b(),g("ngIf",!e.accordion.expandIcon)}}function eT(t,i){if(t&1&&A(0,YE,3,2,"ng-container",3)(1,JE,3,2,"ng-container",3),t&2){let e=_();g("ngIf",e.selected),b(),g("ngIf",!e.selected)}}function tT(t,i){t&1&&xe(0)}function nT(t,i){if(t&1&&(He(0),A(1,tT,1,0,"ng-container",4),ze()),t&2){let e=_();b(),g("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}var iT=({dt:t})=>`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${t("accordion.panel.border.width")};
    border-color: ${t("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${t("accordion.header.padding")};
    color: ${t("accordion.header.color")};
    background: ${t("accordion.header.background")};
    border-style: solid;
    border-width: ${t("accordion.header.border.width")};
    border-color: ${t("accordion.header.border.color")};
    font-weight: ${t("accordion.header.font.weight")};
    border-radius: ${t("accordion.header.border.radius")};
    transition: background ${t("accordion.transition.duration")}; color ${t("accordion.transition.duration")}color ${t("accordion.transition.duration")}, outline-color ${t("accordion.transition.duration")}, box-shadow ${t("accordion.transition.duration")};
    outline-color: transparent;
    position: relative;
    overflow: hidden;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${t("accordion.header.first.border.width")};
    border-start-start-radius: ${t("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${t("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${t("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${t("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${t("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius:${t("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${t("accordion.header.focus.ring.shadow")};
    outline: ${t("accordion.header.focus.ring.width")} ${t("accordion.header.focus.ring.style")} ${t("accordion.header.focus.ring.color")};
    outline-offset: ${t("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${t("accordion.header.hover.background")};
    color: ${t("accordion.header.hover.color")}
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${t("accordion.header.active.background")};
    color: ${t("accordion.header.active.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: ${t("accordion.header.active.hover.background")};
    color: ${t("accordion.header.active.hover.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${t("accordion.content.border.width")};
    border-color: ${t("accordion.content.border.color")};
    background-color: ${t("accordion.content.background")};
    color: ${t("accordion.content.color")};
    padding: ${t("accordion.content.padding")}
}

/*For PrimeNG*/

.p-accordion .p-accordioncontent {
    overflow: hidden;
}

.p-accordionpanel.p-accordioncontent:not(.ng-animating) {
    overflow: inherit;
}

.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: ${t("accordion.header.padding")};
}
`,rT={root:"p-accordion p-component"},pl=(()=>{class t extends ue{name="accordion";theme=iT;classes=rT;static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Ju=(()=>{class t extends ae{pcAccordion=D(ut(()=>la));value=oc(void 0);disabled=Rt(!1,{transform:e=>cl(e)});active=Xe(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,n){return Array.isArray(e)?e.includes(n):e===n}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:9,hostBindings:function(n,r){n&2&&(E("data-pc-name","accordionpanel")("data-p-disabled",r.disabled())("data-p-active",r.active()),Ze("p-accordionpanel",!0)("p-accordionpanel-active",r.active())("p-disabled",r.disabled()))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[O],ngContentSelectors:hl,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le],encapsulation:2,changeDetection:0})}return t})(),oT=(()=>{class t extends ae{pcAccordion=D(ut(()=>la));pcAccordionPanel=D(ut(()=>Ju));id=Xe(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=Xe(()=>this.pcAccordionPanel.active());disabled=Xe(()=>this.pcAccordionPanel.disabled());ariaControls=Xe(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){let n=this.active();this.changeActiveValue();let r=this.active(),a=this.pcAccordionPanel.value();!n&&r?this.pcAccordion.onOpen.emit({originalEvent:e,index:a}):n&&!r&&this.pcAccordion.onClose.emit({originalEvent:e,index:a})}onFocus(){this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return Ft(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,n=!1){let r=n?e:e.nextElementSibling;return r?Zo(r,"data-p-disabled")?this.findNextPanel(r):this.findHeader(r):null}findPrevPanel(e,n=!1){let r=n?e:e.previousElementSibling;return r?Zo(r,"data-p-disabled")?this.findPrevPanel(r):this.findHeader(r):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,n){Cu(n)}arrowDownKey(e){let n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEnterKey(e){this.changeActiveValue(),e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(n,r,a){if(n&1&&Y(a,wE,5),n&2){let l;j(l=H())&&(r.toggleicon=l.first)}},hostVars:13,hostBindings:function(n,r){n&1&&ee("click",function(l){return r.onClick(l)})("focus",function(l){return r.onFocus(l)})("keydown",function(l){return r.onKeydown(l)}),n&2&&(E("id",r.id())("aria-expanded",r.active())("aria-controls",r.ariaControls())("aria-disabled",r.disabled())("role","button")("tabindex",r.disabled()?"-1":"0")("data-p-active",r.active())("data-p-disabled",r.disabled())("data-pc-name","accordionheader"),En("user-select","none"),Ze("p-accordionheader",!0))},features:[ja([wi]),O],ngContentSelectors:hl,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,r){n&1&&(Qe(),Be(0),A(1,EE,1,4)(2,LE,2,2)),n&2&&(b(),Te(r.toggleicon?1:2))},dependencies:[le,We,je,Je,Uu,ju],encapsulation:2,changeDetection:0})}return t})(),aT=(()=>{class t extends ae{pcAccordion=D(ut(()=>la));pcAccordionPanel=D(ut(()=>Ju));active=Xe(()=>this.pcAccordionPanel.active());ariaLabelledby=Xe(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=Xe(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:7,hostBindings:function(n,r){n&2&&(E("id",r.id())("role","region")("data-pc-name","accordioncontent")("data-p-active",r.active())("aria-labelledby",r.ariaLabelledby()),Ze("p-accordioncontent",!0))},features:[O],ngContentSelectors:hl,decls:2,vars:9,consts:[[1,"p-accordioncontent-content"]],template:function(n,r){n&1&&(Qe(),S(0,"div",0),Be(1),x()),n&2&&g("@content",r.active()?ke(3,Nm,ke(1,dl,r.pcAccordion.transitionOptions)):ke(7,$m,ke(5,dl,r.pcAccordion.transitionOptions)))},dependencies:[le],encapsulation:2,data:{animation:[dn("content",[pn("hidden",bt({height:"0",paddingBottom:"0",visibility:"hidden"})),pn("visible",bt({height:"*",visibility:"visible"})),Dt("visible <=> hidden",[kt("{{transitionParams}}")]),Dt("void => *",kt(0))])]},changeDetection:0})}return t})(),Bm=(()=>{class t extends ae{get hostClass(){return this.tabStyleClass}get hostStyle(){return this.tabStyle}id=et("pn_id_");header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.cd.detectChanges())}headerAriaLevel=2;selectedChange=new W;headerFacet;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordionheader-toggle-icon icon-end":"p-accordionheader-toggle-icon icon-start"}headerTemplate;iconTemplate;contentTemplate;templates;_headerTemplate;_iconTemplate;_contentTemplate;loaded=!1;accordion=D(ut(()=>la));_componentStyle=D(pl);ngOnInit(){super.ngOnInit(),console.log("AccordionTab is deprecated as of v18, please use the new structure instead.")}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:n});else{if(!this.accordion.multiple())for(var r=0;r<this.accordion.tabs.length;r++)this.accordion.tabs[r].selected&&(this.accordion.tabs[r].selected=!1,this.accordion.tabs[r].selectedChange.emit(!1),this.accordion.tabs[r].cd.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.cd.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){e=n;break}return e}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-accordionTab"],["p-accordion-tab"],["p-accordiontab"]],contentQueries:function(n,r,a){if(n&1&&(Y(a,RE,4),Y(a,OE,4),Y(a,PE,4),Y(a,qs,4),Y(a,at,4)),n&2){let l;j(l=H())&&(r.headerTemplate=l.first),j(l=H())&&(r.iconTemplate=l.first),j(l=H())&&(r.contentTemplate=l.first),j(l=H())&&(r.headerFacet=l),j(l=H())&&(r.templates=l)}},hostVars:9,hostBindings:function(n,r){n&2&&(E("data-pc-name","accordiontab"),St(r.hostStyle),B(r.hostClass),Ze("p-accordionpanel",!0)("p-accordionpanel-active",r.selected))},inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:[2,"disabled","disabled",N],cache:[2,"cache","cache",N],transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:[2,"headerAriaLevel","headerAriaLevel",Le]},outputs:{selectedChange:"selectedChange"},features:[oe([pl]),O],ngContentSelectors:$E,decls:9,vars:30,consts:[["type","button",1,"p-accordionheader",3,"click","keydown","disabled","ngClass","ngStyle"],["role","region",1,"p-accordioncontent"],[1,"p-accordioncontent-content",3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,r){n&1&&(Qe(NE),S(0,"button",0),ee("click",function(l){return r.toggle(l)})("keydown",function(l){return r.onKeydown(l)}),A(1,VE,1,1)(2,zE,2,2)(3,GE,1,4)(4,eT,2,2),x(),S(5,"div",1)(6,"div",2),Be(7),A(8,nT,2,1,"ng-container",3),x()()),n&2&&(Ze("p-disabled",r.disabled),g("disabled",r.disabled)("ngClass",r.headerStyleClass)("ngStyle",r.headerStyle),E("aria-expanded",r.selected)("aria-level",r.headerAriaLevel)("data-p-disabled",r.disabled)("data-pc-section","accordionheader")("tabindex",r.disabled?null:0)("id",r.getTabHeaderActionId(r.id))("aria-controls",r.getTabContentId(r.id)),b(),Te(!r.headerTemplate&&!r._headerTemplate?1:2),b(2),Te(r.iconTemplate||r._iconTemplate?3:4),b(2),g("@tabContent",r.selected?ke(24,Nm,ke(22,dl,r.transitionOptions)):ke(28,$m,ke(26,dl,r.transitionOptions))),E("id",r.getTabContentId(r.id))("aria-hidden",!r.selected)("aria-labelledby",r.getTabHeaderActionId(r.id))("data-pc-section","toggleablecontent"),b(),g("ngClass",r.contentStyleClass)("ngStyle",r.contentStyle),b(2),g("ngIf",(r.contentTemplate||r._contentTemplate)&&(r.cache?r.loaded:r.selected)))},dependencies:[le,We,je,Je,vt,Uu,ju],encapsulation:2,data:{animation:[dn("tabContent",[pn("hidden",bt({height:"0",visibility:"hidden"})),pn("visible",bt({height:"*",visibility:"visible"})),Dt("visible <=> hidden",[kt("{{transitionParams}}")]),Dt("void => *",kt(0))])]},changeDetection:0})}return t})(),la=(()=>{class t extends ae{get hostClass(){return this.styleClass}get hostStyle(){return this.style}value=oc(void 0);multiple=Rt(!1,{transform:e=>cl(e)});style;styleClass;expandIcon;collapseIcon;selectOnFocus=Rt(!1,{transform:e=>cl(e)});set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";activeIndexChange=new W;set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new W;onOpen=new W;id=Ke(et("pn_id_"));tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];_componentStyle=D(pl);get activeIndex(){return this._activeIndex}get headerAriaLevel(){return this._headerAriaLevel}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&(Cu(e),this.selectOnFocus()&&this.tabs.forEach((n,r)=>{let a=this.multiple()?this._activeIndex.includes(r):r===this._activeIndex;this.multiple()?(this._activeIndex||(this._activeIndex=[]),n.id==e.id&&(n.selected=!n.selected,this._activeIndex.includes(r)?this._activeIndex=this._activeIndex.filter(l=>l!==r):this._activeIndex.push(r))):n.id==e.id?(n.selected=!n.selected,this._activeIndex=r):n.selected=!1,n.selectedChange.emit(a),this.activeIndexChange.emit(this._activeIndex),n.cd.markForCheck()}))}findNextHeaderAction(e,n=!1){let r=n?e:e.nextElementSibling,a=Ft(r,'[data-pc-section="accordionheader"]');return a?Zo(a,"data-p-disabled")?this.findNextHeaderAction(a.parentElement):Ft(a.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,n=!1){let r=n?e:e.previousElementSibling,a=Ft(r,'[data-pc-section="accordionheader"]');return a?Zo(a,"data-p-disabled")?this.findPrevHeaderAction(a.parentElement):Ft(a.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.cd.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let n=this.multiple()?this._activeIndex.includes(e):e===this._activeIndex;n!==this.tabs[e].selected&&(this.tabs[e].selected=n,this.tabs[e].selectedChange.emit(n),this.tabs[e].cd.markForCheck())}}isTabActive(e){return this.multiple()?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,n){return e.props?e.props[n]:void 0}updateActiveIndex(){let e=this.multiple()?[]:null;this.tabs.forEach((n,r)=>{if(n.selected)if(this.multiple())e.push(r);else{e=r;return}}),this.preventActiveIndexPropagation=!0,this._activeIndex=e,this.activeIndexChange.emit(e)}updateValue(e){let n=this.value();if(this.multiple()){let r=Array.isArray(n)?[...n]:[],a=r.indexOf(e);a!==-1?r.splice(a,1):r.push(e),this.value.set(r)}else n===e?this.value.set(void 0):this.value.set(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=M(t)))(r||t)}})();static \u0275cmp=P({type:t,selectors:[["p-accordion"]],contentQueries:function(n,r,a){if(n&1&&Y(a,Bm,5),n&2){let l;j(l=H())&&(r.tabList=l)}},hostVars:8,hostBindings:function(n,r){n&1&&ee("keydown",function(l){return r.onKeydown(l)}),n&2&&(St(r.hostStyle),B(r.hostClass),Ze("p-accordion",!0)("p-component",!0))},inputs:{value:[1,"value"],multiple:[1,"multiple"],style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",activeIndex:"activeIndex",headerAriaLevel:"headerAriaLevel"},outputs:{value:"valueChange",activeIndexChange:"activeIndexChange",onClose:"onClose",onOpen:"onOpen"},features:[oe([pl]),O],ngContentSelectors:hl,decls:1,vars:0,template:function(n,r){n&1&&(Qe(),Be(0))},dependencies:[le,ne],encapsulation:2,changeDetection:0})}return t})(),EP=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({imports:[la,Bm,ne,Ju,oT,aT,ne]})}return t})();export{Fe as a,We as b,si as c,je as d,uh as e,Py as f,vt as g,Je as h,Vy as i,le as j,An as k,Ic as l,n1 as m,li as n,os as o,I1 as p,Oh as q,Mc as r,wr as s,zn as t,ui as u,di as v,Ln as w,au as x,uu as y,bn as z,$s as A,l2 as B,d2 as C,p2 as D,Ki as E,Rn as F,S3 as G,On as H,D3 as I,Yo as J,x3 as K,y2 as L,vn as M,E3 as N,_u as O,T3 as P,_2 as Q,Ft as R,Cu as S,Zo as T,Hf as U,A3 as V,wu as W,I3 as X,k3 as Y,Su as Z,en as _,F3 as $,M3 as aa,Du as ba,L3 as ca,R3 as da,O3 as ea,P3 as fa,N3 as ga,Gf as ha,pt as ia,A2 as ja,Oe as ka,Vs as la,Qi as ma,U3 as na,tn as oa,j3 as pa,H3 as qa,et as ra,k2 as sa,oF as ta,yt as ua,aF as va,sF as wa,ng as xa,lF as ya,ig as za,at as Aa,ne as Ba,vi as Ca,IF as Da,ue as Ea,$u as Fa,o4 as Ga,_i as Ha,Ur as Ia,_n as Ja,jr as Ka,Cn as La,oa as Ma,Ci as Na,ae as Oa,Bu as Pa,rl as Qa,ol as Ra,T4 as Sa,al as Ta,H4 as Ua,Re as Va,gM as Wa,sl as Xa,Uu as Ya,wM as Za,xM as _a,ju as $a,$g as ab,Bg as bb,Vg as cb,Wr as db,Ug as eb,wi as fb,oL as gb,EL as hb,Wn as ib,Gr as jb,ym as kb,_m as lb,Qu as mb,wm as nb,Gn as ob,Qg as pb,Pn as qb,xi as rb,xm as sb,Tm as tb,Am as ub,Im as vb,Zu as wb,i6 as xb,Lm as yb,Rm as zb,lm as Ab,VR as Bb,Ei as Cb,eO as Db,tO as Eb,SO as Fb,TS as Gb,BO as Hb,Pm as Ib,rP as Jb,gm as Kb,i5 as Lb,Ju as Mb,oT as Nb,aT as Ob,Bm as Pb,la as Qb,EP as Rb,mm as Sb,US as Tb,jS as Ub,tD as Vb,A5 as Wb};

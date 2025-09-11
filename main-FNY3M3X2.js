import{$ as qi,$a as cn,$b as xr,A as nn,Aa as eo,Ab as ce,B as Je,Bb as Q,C as rn,Ca as to,Cb as ro,Cc as bn,D as Ni,Da as na,Db as Et,Dc as vn,E as Vi,Ea as oo,Eb as pn,Ec as _n,F as It,Fa as ra,Fb as io,Ga as ia,Gb as xa,H as ji,Ha as oe,Hb as un,Ia as G,Ib as ao,Ja as Ct,Jb as zt,K as Ui,Kb as Ft,La as aa,Lb as mn,Ma as _e,Mb as ya,Na as la,Nb as fn,O as Hi,Oa as sa,Ob as Ca,Pa as ln,Pb as wa,Qa as We,Qb as gn,Ra as ca,Rb as hn,Sa as Ie,Sb as ka,Ta as xe,Tb as Sa,Ua as da,Ub as lo,Va as ye,Vb as so,W as Wi,Wa as ae,Wb as vr,X as yt,Xb as _r,Y as Mt,Ya as pa,Yb as mt,Za as sn,Zb as Lt,_ as Ki,_a as ua,_b as Ta,a as Qt,ab as dn,ac as yr,b as Fi,bb as ma,bc as Ia,c as Oe,cb as fa,cc as Cr,d as He,da as Gi,db as ga,dc as wr,e as $,ea as pr,ec as De,f as Li,fc as Pe,g as Bi,gc as Ma,hc as Ea,i as it,ia as Yi,ib as mr,j as Be,jb as fr,k as tn,ka as Qi,kb as gr,l as F,mc as za,n as Pi,na as Xi,nc as Fa,o as Oi,ob as ha,oc as co,p as Nt,pa as Zi,pb as ba,q as st,qa as Ji,qb as hr,r as Ai,ra as an,s as on,sa as Jt,sc as po,t as Di,ta as ea,u as Ri,ua as ta,v as Te,va as ur,vb as br,w as R,wb as va,wc as La,x as O,xa as oa,xb as _a,xc as Ba,y as Xt,yc as Pa,z as $i,zb as no,zc as Oa}from"./chunk-OV2JA2R7.js";import{$ as b,$a as Qo,Ab as M,Ac as pt,Bb as Ei,Bc as ut,Cb as y,Db as p,Eb as Ee,F as Io,Fb as we,Gb as Xo,Hb as ie,Ia as Ve,Ib as Ue,J as lt,Ja as Ae,Jb as j,K as dr,Kb as U,La as Ti,Lb as Rt,M as bi,Ma as a,Mb as Zo,N as nt,Nb as Se,O as P,Ob as u,P as he,Pa as Ii,Pb as C,Qa as qo,Qb as B,R as vi,Ra as z,Rb as Eo,Sa as Mi,Sb as Z,T as ze,Tb as J,U as X,Ua as Go,Ub as ee,V as _i,Va as Yo,Vb as ge,W as xi,Wa as Mo,Wb as Fe,Xb as te,Yb as _t,Za as E,Zb as $t,_ as Yt,_a as be,aa as v,ba as yi,bb as re,c as fi,ca as K,db as f,ea as Ci,ec as g,f as gi,fc as h,g as Dt,ga as wi,gc as Jo,hc as se,i as ot,ia as q,j as hi,ja as Ho,jc as zi,k as Ne,kb as D,kc as en,la as Wo,lb as d,ma as Ko,mb as Ze,na as vt,nb as Me,o as Gt,ob as je,oc as H,p as Qe,pb as fe,pc as xt,qb as rt,rc as Le,sa as ki,sc as zo,ub as l,va as Si,vb as s,wb as w,wc as Zt,x as bt,xb as N,xc as ct,yb as V,zb as le,zc as dt}from"./chunk-XUTBBBKJ.js";import{a as ke,b as Ye,h as Y}from"./chunk-C3GRVDOV.js";var Aa=(()=>{class e{http;prefix;suffix;constructor(t,n="/assets/i18n/",r=".json"){this.http=t,this.prefix=n,this.suffix=r}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`)}static \u0275fac=function(n){return new(n||e)(ze(st),ze(String),ze(String))};static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var uo=class e extends nn{constructor(t,n){super();this.translate=t;this.title=n}updateTitle(t){let n=this.buildTitle(t);n&&this.translate.get(n).subscribe(r=>{this.title.setTitle(r)})}static \u0275fac=function(n){return new(n||e)(ze(Te),ze(on))};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var w0="@",k0=(()=>{class e{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=X(Ci);loadingSchedulerFn=X(S0,{optional:!0});_engine;constructor(t,n,r,i,c){this.doc=t,this.delegate=n,this.zone=r,this.animationType=i,this.moduleImpl=c}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-CFP2ZKQZ.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(r=>{throw new bi(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let c=new i(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let i=new Sr(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let m=c.createRenderer(t,n);i.use(m),this.scheduler??=this.injector.get(wi,null,{optional:!0}),this.scheduler?.notify(10)}).catch(c=>{i.use(r)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){Mi()};static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})(),Sr=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,n,r){this.delegate.insertBefore(o,t,n,r)}removeChild(o,t,n){this.delegate.removeChild(o,t,n)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,n,r){this.delegate.setAttribute(o,t,n,r)}removeAttribute(o,t,n){this.delegate.removeAttribute(o,t,n)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,n,r){this.delegate.setStyle(o,t,n,r)}removeStyle(o,t,n){this.delegate.removeStyle(o,t,n)}setProperty(o,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(o,t,n)),this.delegate.setProperty(o,t,n)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,n,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(o,t,n,r)),this.delegate.listen(o,t,n,r)}shouldReplay(o){return this.replay!==null&&o.startsWith(w0)}},S0=new vi("");function Ra(e="animations"){return Si("NgAsyncAnimations"),_i([{provide:Ii,useFactory:(o,t,n)=>new k0(o,t,n,e),deps:[Qt,Pi,Ho]},{provide:ki,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var $a={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0",borderColor:"{content.border.color}"},header:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},css:({dt:e})=>`
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${e("accordion.transition.duration")};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Na={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},css:({dt:e})=>`
.p-autocomplete-dropdown:focus-visible {
    background: ${e("autocomplete.dropdown.hover.background")}
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("autocomplete.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${e("autocomplete.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete-option {
    transition: none;
}

.p-autocomplete:has(.p-variant-filled) .p-autocomplete-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var Va={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var ja={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Ua={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var Ha={root:{borderRadius:"{content.border.radius}"}};var Wa={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var Ka={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2.5rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3.5rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},css:({dt:e})=>`
.p-button:focus-visible {
    background: ${e("button.primary.active.background")};
    border-color: ${e("button.primary.active.background")};
}

.p-button-secondary:focus-visible {
    background: ${e("button.secondary.active.background")};
    border-color: ${e("button.secondary.active.background")};
}

.p-button-success:focus-visible {
    background: ${e("button.success.active.background")};
    border-color: ${e("button.success.active.background")};
}

.p-button-info:focus-visible {
    background: ${e("button.info.active.background")};
    border-color: ${e("button.info.active.background")};
}

.p-button-warn:focus-visible {
    background: ${e("button.warn.active.background")};
    border-color: ${e("button.warn.active.background")};
}

.p-button-help:focus-visible {
    background: ${e("button.help.active.background")};
    border-color: ${e("button.help.active.background")};
}

.p-button-danger:focus-visible {
    background: ${e("button.danger.active.background")};
    border-color: ${e("button.danger.active.background")};
}

.p-button-contrast:focus-visible {
    background: ${e("button.contrast.active.background")};
    border-color: ${e("button.contrast.active.background")};
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, ${e("primary.color")}, transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: ${e("button.outlined.primary.active.background")};
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
}

.p-button-success.p-button-outlined:focus-visible {
    background: ${e("button.outlined.success.active.background")};
}

.p-button-info.p-button-outlined:focus-visible {
    background: ${e("button.outlined.info.active.background")};
}

.p-button-warn.p-button-outlined:focus-visible {
    background: ${e("button.outlined.warn.active.background")};
}

.p-button-help.p-button-outlined:focus-visible {
    background: ${e("button.outlined.help.active.background")};
}

.p-button-danger.p-button-outlined:focus-visible {
    background: ${e("button.outlined.danger.active.background")};
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: ${e("button.outlined.contrast.active.background")};
}

.p-button-plain.p-button-outlined:focus-visible {
    background: ${e("button.outlined.plain.active.background")};
}
`};var qa={root:{background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},body:{padding:"1.5rem",gap:"0.75rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var Ga={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"1rem"},indicator:{width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},css:({dt:e})=>`
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%)
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 84%);
}
`};var Ya={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-cascadeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("cascadeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("cascadeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("cascadeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect-option {
    transition: none;
}
`};var Qa={root:{borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},css:({dt:e})=>`
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${e("checkbox.transition.duration")};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`};var Xa={root:{borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2.25rem",height:"2.25rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},colorScheme:{light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}}};var Za={root:{transitionDuration:"{transition.duration}"},preview:{width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var Ja={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var el={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var tl={root:{background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var ol={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},dropPoint:{color:"{primary.color}"},columnResizer:{width:"0.5rem"},resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`};var nl={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var rl={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"700"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"n\u0131ne"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.5rem",fontWeight:"700",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.625rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.625rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},css:({dt:e})=>`
.p-datepicker-header {
    justify-content: start
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: ${e("datepicker.select.month.hover.background")};
    color: ${e("datepicker.select.month.hover.color")};
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: ${e("datepicker.select.year.hover.background")};
    color: ${e("datepicker.select.year.hover.color")};
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: ${e("datepicker.dropdown.hover.background")};
    border-color: ${e("datepicker.dropdown.hover.border.color")};
    color: ${e("datepicker.dropdown.hover.color")};
}

.p-datepicker:has(.p-variant-filled) .p-datepicker-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var il={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var al={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var ll={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var sl={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var cl={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},css:({dt:e})=>`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`};var dl={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"},css:({dt:e})=>`
.p-fieldset-toggle-button:focus-visible {
    background: ${e("navigation.item.active.background")}

}
`};var pl={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var ul={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var ml={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var fl={icon:{color:"{form.field.icon.color}"}};var gl={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"}};var hl={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var bl={handle:{size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var vl={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var _l={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var xl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var yl={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},css:({dt:e})=>`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `};var Cl={root:{transitionDuration:"{transition.duration}"},button:{width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},css:({dt:e})=>`
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
} 
    
.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
} 

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid ${e("inputtext.border.color")}
}
`};var wl={root:{gap:"0.5rem"},input:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}}};var kl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-inputtext.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("inputtext.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("inputtext.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}
`};var Sl={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var Tl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},css:({dt:e})=>`
.p-listbox-option {
    transition: none
}
`};var Il={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-megamenu-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Ml={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-menu-overlay {
    border-color: transparent
}
`};var El={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-menubar-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var zl={root:{borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},content:{padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var Fl={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var Ll={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-multiselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("multiselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("multiselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect-option {
    transition: none;
}
`};var Bl={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Pl={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var Ol={root:{outline:{width:"2px",color:"{content.background}"}}};var Al={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var Dl={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.5rem 1.25rem"},title:{fontWeight:"600"},content:{padding:"0 1.25rem 1.25rem 1.25rem"},footer:{padding:"0 1.25rem 1.25rem 1.25rem"}};var Rl={root:{gap:"0",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},css:({dt:e})=>`
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${e("panelmenu.panel.border.color")}
    transition: margin ${e("panelmenu.transition.duration")};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var $l={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var Nl={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Vl={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var jl={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var Ul={colorScheme:{light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}}};var Hl={root:{width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},icon:{size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}},css:({dt:e})=>`
.p-radiobutton {
    border-radius: 50%;
    transition: box-shadow ${e("radiobutton.transition.duration")};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 92%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 84%);
}
`};var Wl={root:{gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},icon:{size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},css:({dt:e})=>`
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%)
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
}
`};var Kl={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var ql={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}}};var Gl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-select.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("select.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${e("select.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("select.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select-option {
    transition: none;
}
`};var Yl={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var Ql={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var Xl={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},range:{background:"{primary.color}"},handle:{width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-slider-handle {
    transition: box-shadow ${e("slider.transition.duration")}
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 84%);
}
`};var Zl={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var Jl={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var es={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var ts={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},stepNumber:{activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},colorScheme:{light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},css:({dt:e})=>`
.p-step-header:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var os={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var ns={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var rs={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},activeBar:{height:"2px",bottom:"-1px",background:"{primary.color}"},css:({dt:e})=>`


.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, ${e("primary.color")}, transparent 90%)
}

.p-tab:not(.p-disabled):focus-visible {
    background: ${e("navigation.item.active.background")};
}

.p-tablist-nav-button:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var is={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var as={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var ls={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var ss={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("textarea.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("textarea.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}
`};var cs={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-tieredmenu-overlay {
    border-color: transparent
}
`};var ds={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},eventConnector:{color:"{content.border.color}",size:"2px"},colorScheme:{light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}}};var ps={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},icon:{size:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{root:{blur:"0"},info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var us={root:{padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},icon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},content:{checkedBackground:"transparent",checkedShadow:"none",padding:"0",borderRadius:"0",sm:{padding:"0"},lg:{padding:"0"}},colorScheme:{light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},css:({dt:e})=>`
.p-togglebutton:focus-visible {
    background: ${e("togglebutton.hover.background")}
}
`};var ms={root:{width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1.5rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},css:({dt:e})=>`
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`};var fs={root:{color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},colorScheme:{light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}}};var gs={root:{background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"}};var hs={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},node:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.75rem 0"},css:({dt:e})=>`
.p-tree-node-content {
    transition: none
}
`};var bs={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-treeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("treeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("treeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("treeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}
`};var vs={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizer:{width:"0.5rem"},resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`};var _s={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var xs=Ye(ke({},Ua),{components:{accordion:$a,autocomplete:Na,avatar:Va,badge:ja,blockui:Ha,breadcrumb:Wa,button:Ka,datepicker:rl,card:qa,carousel:Ga,cascadeselect:Ya,checkbox:Qa,chip:Xa,colorpicker:Za,confirmdialog:Ja,confirmpopup:el,contextmenu:tl,dataview:nl,datatable:ol,dialog:il,divider:al,dock:ll,drawer:sl,editor:cl,fieldset:dl,fileupload:pl,iftalabel:gl,floatlabel:ul,galleria:ml,iconfield:fl,image:hl,imagecompare:bl,inlinemessage:vl,inplace:_l,inputchips:xl,inputgroup:yl,inputnumber:Cl,inputotp:wl,inputtext:kl,knob:Sl,listbox:Tl,megamenu:Il,menu:Ml,menubar:El,message:zl,metergroup:Fl,multiselect:Ll,orderlist:Bl,organizationchart:Pl,overlaybadge:Ol,popover:Vl,paginator:Al,password:$l,panel:Dl,panelmenu:Rl,picklist:Nl,progressbar:jl,progressspinner:Ul,radiobutton:Hl,rating:Wl,scrollpanel:ql,select:Gl,selectbutton:Yl,skeleton:Ql,slider:Xl,speeddial:Zl,splitter:es,splitbutton:Jl,stepper:ts,steps:os,tabmenu:ns,tabs:rs,tabview:is,textarea:ss,tieredmenu:cs,tag:as,terminal:ls,timeline:ds,togglebutton:us,toggleswitch:ms,tree:hs,treeselect:bs,treetable:vs,toast:ps,toolbar:fs,virtualscroller:_s,tooltip:gs,ripple:Kl},css:({dt:e})=>`

    `});var T0=aa(xs,{semantic:{primary:{50:"#f9f2fd",100:"#ecd9f8",200:"#dabaf2",300:"#c393e8",400:"#a36adc",500:"#7636ab",600:"#5e298a",700:"#4a1f6c",800:"#35154d",900:"#210c30",950:"#13051b"}},primitive:{green:{50:"#e6f8f8",100:"#bdeee9",200:"#91e0db",300:"#64d1cd",400:"#3fc9c7",500:"#00706f",600:"#005b59",700:"#004644",800:"#003130",900:"#001e1e",950:"#001010"},red:{50:"#ffe5e8",100:"#ffb8c4",200:"#ff8aa0",300:"#ff5c7c",400:"#ff5572",500:"#c50028",600:"#a80023",700:"#85001b",800:"#620014",900:"#40000d",950:"#200006"},orange:{50:"#fff4e8",100:"#ffe0c2",200:"#ffcb99",300:"#ffb470",400:"#ff9844",500:"#e66411",600:"#ba500e",700:"#8f3d0a",800:"#652a07",900:"#3c1803",950:"#200c01"},sky:{50:"#e6f7fc",100:"#b3e6f7",200:"#80d4f2",300:"#4dbfea",400:"#1aaae2",500:"#0794d3",600:"#0678ab",700:"#055c83",800:"#03405b",900:"#022433",950:"#01131c"},purple:{50:"#fde6f5",100:"#f9b8df",200:"#f38acc",300:"#ec5cb8",400:"#e24aae",500:"#a80078",600:"#870061",700:"#66004b",800:"#470034",900:"#2a001f",950:"#14000e"}},dark:{primary:{50:"#13051b",100:"#210c30",200:"#35154d",300:"#4a1f6c",400:"#5e298a",500:"#7636ab",600:"#a36adc",700:"#c393e8",800:"#dabaf2",900:"#ecd9f8",950:"#f9f2fd"}}}),ys=T0;var xn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-landing"]],decls:6,vars:6,consts:[["id","wb-cont"]],template:function(t,n){t&1&&(l(0,"h1",0),u(1),g(2,"translate"),s(),l(3,"p"),u(4),g(5,"translate"),s()),t&2&&(a(),C(h(2,2,"title.landing")),a(3),C(h(5,4,"about.content")))},dependencies:[F,O,R],encapsulation:2})};var yn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-not-found"]],decls:2,vars:3,consts:[[3,"innerHTML"]],template:function(t,n){t&1&&(w(0,"span",0),g(1,"translate")),t&2&&d("innerHTML",h(1,1,"404.message"),Ve)},dependencies:[O,R],encapsulation:2})};function M0(e,o){if(e&1){let t=M();l(0,"ca-upload-url",14),y("uploadComplete",function(){b(t);let r=p();return v(r.goToCompare())}),s()}}function E0(e,o){if(e&1){let t=M();l(0,"ca-upload-paste",14),y("uploadComplete",function(){b(t);let r=p();return v(r.goToCompare())}),s()}}function z0(e,o){if(e&1){let t=M();l(0,"ca-upload-word",14),y("uploadComplete",function(){b(t);let r=p();return v(r.goToCompare())}),s()}}var Cn=class e{constructor(o,t){this.uploadState=o;this.router=t}ngOnInit(){this.uploadState.getUploadData()&&this.goToCompare()}selectedUploadType="url";onUploadTypeChange(o){this.selectedUploadType=o,this.uploadState.setUploadType(o)}goToCompare(){this.router.navigate(["page-assistant/compare"])}static \u0275fac=function(t){return new(t||e)(z(Ft),z(Je))};static \u0275cmp=E({type:e,selectors:[["ca-page-upload"]],decls:29,vars:13,consts:[["id","wb-cont"],[1,"flex","flex-wrap"],[1,"flex","mr-4","mb-4"],[1,"border-none","p-0","m-0"],[1,"font-bold","mb-3"],[1,"flex","flex-column","gap-3"],[1,"flex","align-items-center"],["name","uploadType","value","url",3,"onClick","ngModelChange","ngModel"],[1,"ml-2"],["name","uploadType","value","paste",3,"onClick","ngModelChange","ngModel"],["name","uploadType","value","word",3,"onClick","ngModelChange","ngModel"],[1,"flex"],[3,"ngSwitch"],[3,"uploadComplete",4,"ngSwitchCase"],[3,"uploadComplete"]],template:function(t,n){t&1&&(l(0,"h1",0),u(1),g(2,"translate"),s(),l(3,"p"),u(4),g(5,"translate"),s(),l(6,"div",1)(7,"div",2)(8,"fieldset",3)(9,"legend",4),u(10,"Choose upload type:"),s(),l(11,"div",5)(12,"label",6)(13,"p-radioButton",7),y("onClick",function(){return n.onUploadTypeChange("url")}),ee("ngModelChange",function(i){return J(n.selectedUploadType,i)||(n.selectedUploadType=i),i}),s(),l(14,"span",8),u(15,"URL"),s()(),l(16,"label",6)(17,"p-radioButton",9),y("onClick",function(){return n.onUploadTypeChange("paste")}),ee("ngModelChange",function(i){return J(n.selectedUploadType,i)||(n.selectedUploadType=i),i}),s(),l(18,"span",8),u(19,"Copy & Paste"),s()(),l(20,"label",6)(21,"p-radioButton",10),y("onClick",function(){return n.onUploadTypeChange("word")}),ee("ngModelChange",function(i){return J(n.selectedUploadType,i)||(n.selectedUploadType=i),i}),s(),l(22,"span",8),u(23,"Word doc (converts to HTML)"),s()()()()(),l(24,"div",11),N(25,12),f(26,M0,1,0,"ca-upload-url",13)(27,E0,1,0,"ca-upload-paste",13)(28,z0,1,0,"ca-upload-word",13),V(),s()()),t&2&&(a(),C(h(2,9,"title.page")),a(3),C(h(5,11,"page.upload.description")),a(9),Z("ngModel",n.selectedUploadType),a(4),Z("ngModel",n.selectedUploadType),a(4),Z("ngModel",n.selectedUploadType),a(4),d("ngSwitch",n.selectedUploadType),a(),d("ngSwitchCase","url"),a(),d("ngSwitchCase","paste"),a(),d("ngSwitchCase","word"))},dependencies:[F,Li,Bi,ye,Ie,xe,O,R,dn,cn,ya,wa,Sa],encapsulation:2})};var F0=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.colorOne")};
    }
    40% {
        stroke: ${e("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${e("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.colorFour")};
    }
}
`,L0={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ws=(()=>{class e extends _e{name="progressspinner";theme=F0;classes=L0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var Vt=(()=>{class e extends ae{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=X(ws);static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[ge([ws]),re],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(n,r){n&1&&(l(0,"div",0),yi(),l(1,"svg",1),w(2,"circle",2),s()()),n&2&&(d("ngStyle",r.style)("ngClass",r.styleClass),D("aria-label",r.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),a(),Ze("animation-duration",r.animationDuration),D("data-pc-section","root"),a(),D("fill",r.fill)("stroke-width",r.strokeWidth))},dependencies:[F,Oe,it,G],encapsulation:2,changeDetection:0})}return e})(),fo=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[Vt,G,G]})}return e})();function P0(e,o){if(e&1){let t=M();l(0,"div")(1,"h2"),u(2,"Which pages do you want to share?"),s(),l(3,"div",3)(4,"p-iftalabel")(5,"input",4),ee("ngModelChange",function(r){b(t);let i=p();return J(i.url,r)||(i.url=r),v(r)}),s(),l(6,"label",5),u(7,"URL"),s()(),l(8,"p-iftalabel")(9,"input",6),ee("ngModelChange",function(r){b(t);let i=p();return J(i.compareUrl,r)||(i.compareUrl=r),v(r)}),s(),l(10,"label",7),u(11,"Optional comparison URL"),s()(),l(12,"div")(13,"p"),u(14,"Your share link:"),w(15,"br"),l(16,"a",8),u(17),s()(),l(18,"p"),u(19,"Sample share link: "),w(20,"br"),l(21,"a",9),u(22," page-assistant/share?url=https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html&compareUrl=https://cra-design.github.io/gst-hst-business/en/topics/gst-hst-businesses.html"),s()()()()()}if(e&2){let t=p();a(5),Z("ngModel",t.url),a(4),Z("ngModel",t.compareUrl),a(7),d("href",t.getShareLink(t.url,t.compareUrl),Ae),a(),C(t.getShareLink(t.url,t.compareUrl))}}function O0(e,o){e&1&&(l(0,"div",10),w(1,"p-progress-spinner",11),s())}var wn=class e{constructor(o,t,n,r,i,c){this.route=o;this.urlDataService=t;this.uploadState=n;this.translate=r;this.router=i;this.locationStrategy=c}ngOnInit(){this.route.queryParams.subscribe(o=>{let t=o.url,n=o.compareUrl;t&&this.fetchAndGoToCompare(t,n)}),this.baseHref=this.locationStrategy.getBaseHref()}url="";compareUrl=null;baseHref=null;getShareLink(o,t){let n={};n.url=o,n.compareUrl=t;let r=this.router.createUrlTree(["page-assistant/share"],{queryParams:n});return`${window.location.origin}${this.baseHref}${this.router.serializeUrl(r).replace(/^\//,"")}`}error="";loading=!1;fetchAndGoToCompare(o,t){return Y(this,null,function*(){let n=this.translate.instant("page.upload.error.unknown"),r=this.translate.instant("page.upload.url.error.try");this.loading=!0,this.error="";try{let i=yield this.urlDataService.fetchAndProcess(o),c;t&&(c=yield this.urlDataService.fetchAndProcess(t)),this.uploadState.setUploadData({originalUrl:o,originalHtml:i.html,modifiedUrl:t??o,modifiedHtml:c?.html??i.html,found:{original:i.found,modified:c?.found??i.found}}),this.router.navigate(["page-assistant/compare"])}catch(i){this.error=`${r} ${i.message||i||n}`}finally{this.loading=!1}})}static \u0275fac=function(t){return new(t||e)(z(Xt),z(mn),z(Ft),z(Te),z(Je),z(Fi))};static \u0275cmp=E({type:e,selectors:[["ca-share"]],decls:8,vars:8,consts:[["id","wb-cont"],[4,"ngIf"],["class","flex justify-content-center",4,"ngIf"],[1,"flex","flex-column","gap-3"],["pInputText","","id","url","autocomplete","off","fluid","",3,"ngModelChange","ngModel"],["for","url"],["pInputText","","id","compare","autocomplete","off","fluid","",3,"ngModelChange","ngModel"],["for","compare"],[3,"href"],["href","page-assistant/share?url=https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html&compareUrl=https://cra-design.github.io/gst-hst-business/en/topics/gst-hst-businesses.html"],[1,"flex","justify-content-center"],["ariaLabel","loading"]],template:function(t,n){t&1&&(l(0,"h1",0),u(1),g(2,"translate"),s(),l(3,"p"),u(4),g(5,"translate"),s(),f(6,P0,23,4,"div",1)(7,O0,2,0,"div",2)),t&2&&(a(),C(h(2,4,"title.page")),a(3),C(h(5,6,"page.share.description")),a(2),d("ngIf",!n.loading),a(),d("ngIf",n.loading))},dependencies:[F,$,ye,We,Ie,xe,O,R,fo,Vt,Et,ro,so,lo],encapsulation:2})};var kn=class e{filesSelected=new q;isDragOver=!1;onFileSelected(o){let t=o.target;t.files&&t.files.length>0&&this.filesSelected.emit(t.files)}onDragOver(o){o.preventDefault(),o.stopPropagation(),this.isDragOver=!0}onDragLeave(o){o.preventDefault(),o.stopPropagation(),this.isDragOver=!1}onDrop(o){o.preventDefault(),o.stopPropagation(),this.isDragOver=!1,o.dataTransfer?.files&&o.dataTransfer.files.length>0&&this.filesSelected.emit(o.dataTransfer.files)}triggerFileInput(){let o=document.getElementById("file-input");o&&(o.value="",o.click())}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-file-upload"]],outputs:{filesSelected:"filesSelected"},decls:15,vars:11,consts:[[1,"file-upload-container",3,"click","dragover","dragleave","drop"],[1,"upload-icon"],[1,"pi","pi-upload"],[1,"mb-2"],[1,"text-color-secondary","text-sm"],["type","file","id","file-input","name","files","multiple","","accept",".png,.jpg,.jpeg,.pdf",3,"change"]],template:function(t,n){t&1&&(l(0,"fieldset")(1,"legend"),u(2),g(3,"translate"),s(),l(4,"div",0),y("click",function(){return n.triggerFileInput()})("dragover",function(i){return n.onDragOver(i)})("dragleave",function(i){return n.onDragLeave(i)})("drop",function(i){return n.onDrop(i)}),l(5,"div",1),w(6,"i",2),s(),l(7,"p",3)(8,"strong"),u(9),g(10,"translate"),s()(),l(11,"p",4),u(12),g(13,"translate"),s(),l(14,"input",5),y("change",function(i){return n.onFileSelected(i)}),s()()()),t&2&&(a(2),C(h(3,5,"image.upload.legend")),a(2),Me("dragover",n.isDragOver),a(5),C(h(10,7,"image.upload.title")),a(3),B(" ",h(13,9,"image.upload.accept")," "))},dependencies:[F,O,R],styles:[".file-upload-container[_ngcontent-%COMP%]{border:2px dashed #ccc;border-radius:8px;padding:2rem;text-align:center;cursor:pointer;transition:all .3s ease;margin-top:1rem}.file-upload-container[_ngcontent-%COMP%]:hover{border-color:#a7a72e;background-color:#f5f5f5}.file-upload-container.dragover[_ngcontent-%COMP%]{border-color:#a7a72e;background-color:#f0f0f0}input[type=file][_ngcontent-%COMP%]{display:none}.upload-icon[_ngcontent-%COMP%]{font-size:3rem;color:#a7a72e;margin-bottom:1rem}fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}legend[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5rem}"]})};var Fo=e=>({height:e}),A0=(e,o,t)=>({"p-select-option":!0,"p-select-option-selected":e,"p-disabled":o,"p-focus":t}),Mr=e=>({$implicit:e});function D0(e,o){e&1&&w(0,"CheckIcon",4),e&2&&d("styleClass","p-select-option-check-icon")}function R0(e,o){e&1&&w(0,"BlankIcon",4),e&2&&d("styleClass","p-select-option-blank-icon")}function $0(e,o){if(e&1&&(N(0),f(1,D0,1,1,"CheckIcon",3)(2,R0,1,1,"BlankIcon",3),V()),e&2){let t=p();a(),d("ngIf",t.selected),a(),d("ngIf",!t.selected)}}function N0(e,o){if(e&1&&(l(0,"span"),u(1),s()),e&2){let t,n=p();a(),C((t=n.label)!==null&&t!==void 0?t:"empty")}}function V0(e,o){e&1&&le(0)}var j0=["container"],U0=["filter"],H0=["focusInput"],W0=["editableInput"],K0=["items"],q0=["scroller"],G0=["overlay"],Y0=["firstHiddenFocusableEl"],Q0=["lastHiddenFocusableEl"],X0=()=>({class:"p-select-clear-icon"}),Z0=()=>({class:"p-select-dropdown-icon"}),Ms=e=>({options:e}),Es=(e,o)=>({$implicit:e,options:o}),J0=()=>({});function ed(e,o){if(e&1&&(N(0),u(1),V()),e&2){let t=p(2);a(),C(t.label()==="p-emptylabel"?"\xA0":t.label())}}function td(e,o){if(e&1&&le(0,23),e&2){let t=p(2);d("ngTemplateOutlet",t.selectedItemTemplate)("ngTemplateOutletContext",te(2,Mr,t.selectedOption))}}function od(e,o){if(e&1&&(l(0,"span"),u(1),s()),e&2){let t=p(3);a(),C(t.label()==="p-emptylabel"?"\xA0":t.label())}}function nd(e,o){if(e&1&&f(0,od,2,1,"span",17),e&2){let t=p(2);d("ngIf",!t.selectedOption)}}function rd(e,o){if(e&1){let t=M();l(0,"span",21,3),y("focus",function(r){b(t);let i=p();return v(i.onInputFocus(r))})("blur",function(r){b(t);let i=p();return v(i.onInputBlur(r))})("keydown",function(r){b(t);let i=p();return v(i.onKeyDown(r))}),f(2,ed,2,1,"ng-container",19)(3,td,1,4,"ng-container",22)(4,nd,1,1,"ng-template",null,4,se),s()}if(e&2){let t,n=Se(5),r=p();d("ngClass",r.inputClass)("pTooltip",r.tooltip)("tooltipPosition",r.tooltipPosition)("positionStyle",r.tooltipPositionStyle)("tooltipStyleClass",r.tooltipStyleClass)("pAutoFocus",r.autofocus),D("aria-disabled",r.disabled)("id",r.inputId)("aria-label",r.ariaLabel||(r.label()==="p-emptylabel"?void 0:r.label()))("aria-labelledby",r.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(t=r.overlayVisible)!==null&&t!==void 0?t:!1)("aria-controls",r.overlayVisible?r.id+"_list":null)("tabindex",r.disabled?-1:r.tabindex)("aria-activedescendant",r.focused?r.focusedOptionId:void 0)("aria-required",r.required)("required",r.required),a(2),d("ngIf",!r.selectedItemTemplate)("ngIfElse",n),a(),d("ngIf",r.selectedItemTemplate&&r.selectedOption)}}function id(e,o){if(e&1){let t=M();l(0,"input",24,5),y("input",function(r){b(t);let i=p();return v(i.onEditableInput(r))})("keydown",function(r){b(t);let i=p();return v(i.onKeyDown(r))})("focus",function(r){b(t);let i=p();return v(i.onInputFocus(r))})("blur",function(r){b(t);let i=p();return v(i.onInputBlur(r))}),s()}if(e&2){let t=p();d("ngClass",t.inputClass)("disabled",t.disabled)("pAutoFocus",t.autofocus),D("id",t.inputId)("maxlength",t.maxlength)("placeholder",t.modelValue()===void 0||t.modelValue()===null?t.placeholder():void 0)("aria-label",t.ariaLabel||(t.label()==="p-emptylabel"?void 0:t.label()))("aria-activedescendant",t.focused?t.focusedOptionId:void 0)}}function ad(e,o){if(e&1){let t=M();l(0,"TimesIcon",26),y("click",function(r){b(t);let i=p(2);return v(i.clear(r))}),s()}e&2&&D("data-pc-section","clearicon")}function ld(e,o){}function sd(e,o){e&1&&f(0,ld,0,0,"ng-template")}function cd(e,o){if(e&1){let t=M();l(0,"span",26),y("click",function(r){b(t);let i=p(2);return v(i.clear(r))}),f(1,sd,1,0,null,27),s()}if(e&2){let t=p(2);D("data-pc-section","clearicon"),a(),d("ngTemplateOutlet",t.clearIconTemplate)("ngTemplateOutletContext",Fe(3,X0))}}function dd(e,o){if(e&1&&(N(0),f(1,ad,1,1,"TimesIcon",25)(2,cd,2,4,"span",25),V()),e&2){let t=p();a(),d("ngIf",!t.clearIconTemplate),a(),d("ngIf",t.clearIconTemplate)}}function pd(e,o){e&1&&le(0)}function ud(e,o){if(e&1&&(N(0),f(1,pd,1,0,"ng-container",28),V()),e&2){let t=p(2);a(),d("ngTemplateOutlet",t.loadingIconTemplate)}}function md(e,o){if(e&1&&w(0,"span",31),e&2){let t=p(3);d("ngClass","p-select-loading-icon pi-spin "+t.loadingIcon)}}function fd(e,o){e&1&&w(0,"span",32),e&2&&fe("p-select-loading-icon pi pi-spinner pi-spin")}function gd(e,o){if(e&1&&(N(0),f(1,md,1,1,"span",29)(2,fd,1,2,"span",30),V()),e&2){let t=p(2);a(),d("ngIf",t.loadingIcon),a(),d("ngIf",!t.loadingIcon)}}function hd(e,o){if(e&1&&(N(0),f(1,ud,2,1,"ng-container",17)(2,gd,3,2,"ng-container",17),V()),e&2){let t=p();a(),d("ngIf",t.loadingIconTemplate),a(),d("ngIf",!t.loadingIconTemplate)}}function bd(e,o){if(e&1&&w(0,"span",36),e&2){let t=p(3);d("ngClass",t.dropdownIcon)}}function vd(e,o){e&1&&w(0,"ChevronDownIcon",37),e&2&&d("styleClass","p-select-dropdown-icon")}function _d(e,o){if(e&1&&(N(0),f(1,bd,1,1,"span",34)(2,vd,1,1,"ChevronDownIcon",35),V()),e&2){let t=p(2);a(),d("ngIf",t.dropdownIcon),a(),d("ngIf",!t.dropdownIcon)}}function xd(e,o){}function yd(e,o){e&1&&f(0,xd,0,0,"ng-template")}function Cd(e,o){if(e&1&&(l(0,"span",38),f(1,yd,1,0,null,27),s()),e&2){let t=p(2);a(),d("ngTemplateOutlet",t.dropdownIconTemplate)("ngTemplateOutletContext",Fe(2,Z0))}}function wd(e,o){if(e&1&&f(0,_d,3,2,"ng-container",17)(1,Cd,2,3,"span",33),e&2){let t=p();d("ngIf",!t.dropdownIconTemplate),a(),d("ngIf",t.dropdownIconTemplate)}}function kd(e,o){e&1&&le(0)}function Sd(e,o){e&1&&le(0)}function Td(e,o){if(e&1&&(N(0),f(1,Sd,1,0,"ng-container",27),V()),e&2){let t=p(3);a(),d("ngTemplateOutlet",t.filterTemplate)("ngTemplateOutletContext",te(2,Ms,t.filterOptions))}}function Id(e,o){e&1&&w(0,"SearchIcon")}function Md(e,o){}function Ed(e,o){e&1&&f(0,Md,0,0,"ng-template")}function zd(e,o){if(e&1&&(l(0,"span"),f(1,Ed,1,0,null,28),s()),e&2){let t=p(4);a(),d("ngTemplateOutlet",t.filterIconTemplate)}}function Fd(e,o){if(e&1){let t=M();l(0,"p-iconfield")(1,"input",45,10),y("input",function(r){b(t);let i=p(3);return v(i.onFilterInputChange(r))})("keydown",function(r){b(t);let i=p(3);return v(i.onFilterKeyDown(r))})("blur",function(r){b(t);let i=p(3);return v(i.onFilterBlur(r))}),s(),l(3,"p-inputicon"),f(4,Id,1,0,"SearchIcon",17)(5,zd,2,1,"span",17),s()()}if(e&2){let t=p(3);a(),d("value",t._filterValue()||"")("variant",t.variant),D("placeholder",t.filterPlaceholder)("aria-owns",t.id+"_list")("aria-label",t.ariaFilterLabel)("aria-activedescendant",t.focusedOptionId),a(3),d("ngIf",!t.filterIconTemplate),a(),d("ngIf",t.filterIconTemplate)}}function Ld(e,o){if(e&1){let t=M();l(0,"div",44),y("click",function(r){return b(t),v(r.stopPropagation())}),f(1,Td,2,4,"ng-container",19)(2,Fd,6,8,"ng-template",null,9,se),s()}if(e&2){let t=Se(3),n=p(2);a(),d("ngIf",n.filterTemplate)("ngIfElse",t)}}function Bd(e,o){e&1&&le(0)}function Pd(e,o){if(e&1&&f(0,Bd,1,0,"ng-container",27),e&2){let t=o.$implicit,n=o.options;p(2);let r=Se(9);d("ngTemplateOutlet",r)("ngTemplateOutletContext",_t(2,Es,t,n))}}function Od(e,o){e&1&&le(0)}function Ad(e,o){if(e&1&&f(0,Od,1,0,"ng-container",27),e&2){let t=o.options,n=p(4);d("ngTemplateOutlet",n.loaderTemplate)("ngTemplateOutletContext",te(2,Ms,t))}}function Dd(e,o){e&1&&(N(0),f(1,Ad,1,4,"ng-template",null,12,se),V())}function Rd(e,o){if(e&1){let t=M();l(0,"p-scroller",46,11),y("onLazyLoad",function(r){b(t);let i=p(2);return v(i.onLazyLoad.emit(r))}),f(2,Pd,1,5,"ng-template",null,2,se)(4,Dd,3,0,"ng-container",17),s()}if(e&2){let t=p(2);je(te(8,Fo,t.scrollHeight)),d("items",t.visibleOptions())("itemSize",t.virtualScrollItemSize||t._itemSize)("autoSize",!0)("lazy",t.lazy)("options",t.virtualScrollOptions),a(4),d("ngIf",t.loaderTemplate)}}function $d(e,o){e&1&&le(0)}function Nd(e,o){if(e&1&&(N(0),f(1,$d,1,0,"ng-container",27),V()),e&2){p();let t=Se(9),n=p();a(),d("ngTemplateOutlet",t)("ngTemplateOutletContext",_t(3,Es,n.visibleOptions(),Fe(2,J0)))}}function Vd(e,o){if(e&1&&(l(0,"span"),u(1),s()),e&2){let t=p(2).$implicit,n=p(3);a(),C(n.getOptionGroupLabel(t.optionGroup))}}function jd(e,o){e&1&&le(0)}function Ud(e,o){if(e&1&&(N(0),l(1,"li",50),f(2,Vd,2,1,"span",17)(3,jd,1,0,"ng-container",27),s(),V()),e&2){let t=p(),n=t.$implicit,r=t.index,i=p().options,c=p(2);a(),d("ngStyle",te(5,Fo,i.itemSize+"px")),D("id",c.id+"_"+c.getOptionIndex(r,i)),a(),d("ngIf",!c.groupTemplate),a(),d("ngTemplateOutlet",c.groupTemplate)("ngTemplateOutletContext",te(7,Mr,n.optionGroup))}}function Hd(e,o){if(e&1){let t=M();N(0),l(1,"p-dropdownItem",51),y("onClick",function(r){b(t);let i=p().$implicit,c=p(3);return v(c.onOptionSelect(r,i))})("onMouseEnter",function(r){b(t);let i=p().index,c=p().options,m=p(2);return v(m.onOptionMouseEnter(r,m.getOptionIndex(i,c)))}),s(),V()}if(e&2){let t=p(),n=t.$implicit,r=t.index,i=p().options,c=p(2);a(),d("id",c.id+"_"+c.getOptionIndex(r,i))("option",n)("checkmark",c.checkmark)("selected",c.isSelected(n))("label",c.getOptionLabel(n))("disabled",c.isOptionDisabled(n))("template",c.itemTemplate)("focused",c.focusedOptionIndex()===c.getOptionIndex(r,i))("ariaPosInset",c.getAriaPosInset(c.getOptionIndex(r,i)))("ariaSetSize",c.ariaSetSize)}}function Wd(e,o){if(e&1&&f(0,Ud,4,9,"ng-container",17)(1,Hd,2,10,"ng-container",17),e&2){let t=o.$implicit,n=p(3);d("ngIf",n.isOptionGroup(t)),a(),d("ngIf",!n.isOptionGroup(t))}}function Kd(e,o){if(e&1&&u(0),e&2){let t=p(4);B(" ",t.emptyFilterMessageLabel," ")}}function qd(e,o){e&1&&le(0,null,14)}function Gd(e,o){if(e&1&&f(0,qd,2,0,"ng-container",28),e&2){let t=p(4);d("ngTemplateOutlet",t.emptyFilterTemplate||t.emptyTemplate)}}function Yd(e,o){if(e&1&&(l(0,"li",52),f(1,Kd,1,1)(2,Gd,1,1,"ng-container"),s()),e&2){let t=p().options,n=p(2);d("ngStyle",te(2,Fo,t.itemSize+"px")),a(),rt(!n.emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function Qd(e,o){if(e&1&&u(0),e&2){let t=p(4);B(" ",t.emptyMessageLabel," ")}}function Xd(e,o){e&1&&le(0)}function Zd(e,o){if(e&1&&f(0,Xd,1,0,"ng-container",28),e&2){let t=p(4);d("ngTemplateOutlet",t.emptyTemplate)}}function Jd(e,o){if(e&1&&(l(0,"li",52),f(1,Qd,1,1)(2,Zd,1,1,"ng-container"),s()),e&2){let t=p().options,n=p(2);d("ngStyle",te(2,Fo,t.itemSize+"px")),a(),rt(n.emptyTemplate?2:1)}}function ep(e,o){if(e&1&&(l(0,"ul",47,13),f(2,Wd,2,2,"ng-template",48)(3,Yd,3,4,"li",49)(4,Jd,3,4,"li",49),s()),e&2){let t=o.$implicit,n=o.options,r=p(2);je(n.contentStyle),d("ngClass",n.contentStyleClass),D("id",r.id+"_list")("aria-label",r.listLabel),a(2),d("ngForOf",t),a(),d("ngIf",r.filterValue&&r.isEmpty()),a(),d("ngIf",!r.filterValue&&r.isEmpty())}}function tp(e,o){e&1&&le(0)}function op(e,o){if(e&1){let t=M();l(0,"div",39)(1,"span",40,6),y("focus",function(r){b(t);let i=p();return v(i.onFirstHiddenFocus(r))}),s(),f(3,kd,1,0,"ng-container",28)(4,Ld,4,2,"div",41),l(5,"div",42),f(6,Rd,5,10,"p-scroller",43)(7,Nd,2,6,"ng-container",17)(8,ep,5,8,"ng-template",null,7,se),s(),f(10,tp,1,0,"ng-container",28),l(11,"span",40,8),y("focus",function(r){b(t);let i=p();return v(i.onLastHiddenFocus(r))}),s()()}if(e&2){let t=p();fe(t.panelStyleClass),d("ngClass","p-select-overlay p-component")("ngStyle",t.panelStyle),a(),D("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),a(2),d("ngTemplateOutlet",t.headerTemplate),a(),d("ngIf",t.filter),a(),Ze("max-height",t.virtualScroll?"auto":t.scrollHeight||"auto"),a(),d("ngIf",t.virtualScroll),a(),d("ngIf",!t.virtualScroll),a(3),d("ngTemplateOutlet",t.footerTemplate),a(),D("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var np=({dt:e})=>`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${e("select.background")};
    border: 1px solid ${e("select.border.color")};
    transition: background ${e("select.transition.duration")}, color ${e("select.transition.duration")}, border-color ${e("select.transition.duration")},
        outline-color ${e("select.transition.duration")}, box-shadow ${e("select.transition.duration")};
    border-radius: ${e("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("select.shadow")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${e("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${e("select.focus.border.color")};
    box-shadow: ${e("select.focus.ring.shadow")};
    outline: ${e("select.focus.ring.width")} ${e("select.focus.ring.style")} ${e("select.focus.ring.color")};
    outline-offset: ${e("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${e("select.filled.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${e("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${e("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${e("select.clear.icon.color")};
    right: ${e("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${e("select.dropdown.color")};
    width: ${e("select.dropdown.width")};
    border-start-end-radius: ${e("select.border.radius")};
    border-end-end-radius: ${e("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${e("select.padding.y")} ${e("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${e("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${e("select.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1rem + ${e("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${e("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${e("select.overlay.background")};
    color: ${e("select.overlay.color")};
    border: 1px solid ${e("select.overlay.border.color")};
    border-radius: ${e("select.overlay.border.radius")};
    box-shadow: ${e("select.overlay.shadow")};
}

.p-select-header {
    padding: ${e("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${e("select.option.group.padding")};
    background: ${e("select.option.group.background")};
    color: ${e("select.option.group.color")};
    font-weight: ${e("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${e("select.list.padding")};
    gap: ${e("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${e("select.option.padding")};
    border: 0 none;
    color: ${e("select.option.color")};
    background: transparent;
    transition: background ${e("select.transition.duration")}, color ${e("select.transition.duration")}, border-color ${e("select.transition.duration")},
    box-shadow ${e("select.transition.duration")}, outline-color ${e("select.transition.duration")};
    border-radius: ${e("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${e("select.option.focus.background")};
    color: ${e("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${e("select.option.selected.background")};
    color: ${e("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${e("select.option.selected.focus.background")};
    color: ${e("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${e("select.checkmark.gutter.start")};
    margin-inline-end: ${e("select.checkmark.gutter.end")};
    color: ${e("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${e("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

/*For PrimeNG*/

.p-dropdown.ng-invalid.ng-dirty,
.p-select.ng-invalid.ng-dirty {
    outline: 1px solid ${e("select.invalid.border.color")};
    outline-offset: 0;
}

.p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${e("select.invalid.placeholder.color")};
}
`,rp={root:({instance:e})=>["p-dropdown p-select p-component p-inputwrapper",{"p-disabled":e.disabled,"p-variant-filled":e.variant==="filled"||e.config.inputVariant()==="filled"||e.config.inputStyle()==="filled","p-focus":e.focused,"p-inputwrapper-filled":e.modelValue()!==void 0&&e.modelValue()!==null&&!e.modelValue().length,"p-inputwrapper-focus":e.focused||e.overlayVisible,"p-select-open":e.overlayVisible,"p-select-fluid":e.hasFluid,"p-select-sm p-inputfield-sm":e.size==="small","p-select-lg p-inputfield-lg":e.size==="large"}],label:({instance:e,props:o})=>["p-select-label",{"p-placeholder":!o.editable&&e.label===o.placeholder,"p-select-label-empty":!o.editable&&!e.$slots.value&&(e.label==="p-emptylabel"||e.label.length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:e,props:o,state:t,option:n,focusedOption:r})=>["p-select-option",{"p-select-option-selected":e.isSelected(n)&&o.highlightOnSelect,"p-focus":t.focusedOptionIndex===r,"p-disabled":e.isOptionDisabled(n)}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},Ts=(()=>{class e extends _e{name="select";theme=np;classes=rp;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})(),Is;Is||(Is={});var ip={provide:ln,useExisting:nt(()=>Er),multi:!0},ap=(()=>{class e extends ae{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new q;onMouseEnter=new q;onOptionClick(t){this.onClick.emit(t)}onOptionMouseEnter(t){this.onMouseEnter.emit(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-dropdownItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",H],focused:[2,"focused","focused",H],label:"label",disabled:[2,"disabled","disabled",H],visible:[2,"visible","visible",H],itemSize:[2,"itemSize","itemSize",xt],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",H]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},standalone:!1,features:[re],decls:4,vars:22,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle","ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],[3,"styleClass"]],template:function(n,r){n&1&&(l(0,"li",0),y("click",function(c){return r.onOptionClick(c)})("mouseenter",function(c){return r.onOptionMouseEnter(c)}),f(1,$0,3,2,"ng-container",1)(2,N0,2,1,"span",1)(3,V0,1,0,"ng-container",2),s()),n&2&&(d("id",r.id)("ngStyle",te(14,Fo,r.itemSize+"px"))("ngClass",$t(16,A0,r.selected,r.disabled,r.focused)),D("aria-label",r.label)("aria-setsize",r.ariaSetSize)("aria-posinset",r.ariaPosInset)("aria-selected",r.selected)("data-p-focused",r.focused)("data-p-highlight",r.selected)("data-p-disabled",r.disabled),a(),d("ngIf",r.checkmark),a(),d("ngIf",!r.template),a(),d("ngTemplateOutlet",r.template)("ngTemplateOutletContext",te(20,Mr,r.option)))},dependencies:()=>[Oe,$,Be,it,_a,mr,fr],encapsulation:2})}return e})(),Er=(()=>{class e extends ae{zone;filterService;id;scrollHeight="200px";filter;name;style;panelStyle;styleClass;panelStyleClass;readonly;required;editable;appendTo;tabindex=0;set placeholder(t){this._placeholder.set(t)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;variant;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";autoDisplayFirst=!0;group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";maxlength;tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!1;selectOnFocus=!1;autoOptionFocus=!0;autofocusFilter=!0;fluid;get disabled(){return this._disabled}set disabled(t){t&&(this.focused=!1,this.overlayVisible&&this.hide()),this._disabled=t,this.cd.destroyed||this.cd.detectChanges()}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}_itemSize;get autoZIndex(){return this._autoZIndex}set autoZIndex(t){this._autoZIndex=t,console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_autoZIndex;get baseZIndex(){return this._baseZIndex}set baseZIndex(t){this._baseZIndex=t,console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_baseZIndex;get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(t){this._showTransitionOptions=t,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_showTransitionOptions;get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(t){this._hideTransitionOptions=t,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_hideTransitionOptions;get filterValue(){return this._filterValue()}set filterValue(t){setTimeout(()=>{this._filterValue.set(t)})}get options(){return this._options()}set options(t){Ji(t,this._options())||this._options.set(t)}onChange=new q;onFilter=new q;onFocus=new q;onBlur=new q;onClick=new q;onShow=new q;onHide=new q;onClear=new q;onLazyLoad=new q;_componentStyle=X(Ts);containerViewChild;filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;get hostClass(){return this._componentStyle.classes.root({instance:this}).map(n=>typeof n=="string"?n:Object.keys(n).filter(r=>n[r]).join(" ")).join(" ")+" "+this.styleClass}get hostStyle(){return this.style}_disabled;itemsWrapper;itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;filterOptions;_options=vt(null);_placeholder=vt(void 0);modelValue=vt(null);value;onModelChange=()=>{};onModelTouched=()=>{};hover;focused;overlayVisible;optionsChanged;panel;selectedOptionUpdated;_filterValue=vt(null);searchValue;searchTimeout;preventModelTouched;focusedOptionIndex=vt(-1);clicked=vt(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Ct.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(Ct.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.disabled}get listLabel(){return this.config.getTranslation(Ct.ARIA).listLabel}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}get inputClass(){let t=this.label();return{"p-select-label":!0,"p-placeholder":this.placeholder()&&t===this.placeholder(),"p-select-label-empty":!this.editable&&!this.selectedItemTemplate&&(t==null||t==="p-emptylabel"||t.length===0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=Le(()=>{let t=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let r=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options.filter(i=>i.label?i.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:i.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(t,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let i=this.options||[],c=[];return i.forEach(m=>{let x=this.getOptionGroupChildren(m).filter(S=>r.includes(S));x.length>0&&c.push(Ye(ke({},m),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...x]}))}),this.flatOptions(c)}return r}return t});label=Le(()=>{let t=this.getAllVisibleAndNonVisibleOptions(),n=t.findIndex(r=>this.isOptionValueEqualsModelValue(r));return n!==-1?this.getOptionLabel(t[n]):this.placeholder()||"p-emptylabel"});filled=Le(()=>typeof this.modelValue()=="string"?!!this.modelValue():this.label()!=="p-emptylabel"&&this.modelValue()!==void 0&&this.modelValue()!==null);selectedOption;editableInputValue=Le(()=>this.getOptionLabel(this.selectedOption)||this.modelValue()||"");constructor(t,n){super(),this.zone=t,this.filterService=n,zo(()=>{let r=this.modelValue(),i=this.visibleOptions();if(i&&an(i)){let c=this.findSelectedOptionIndex();(c!==-1||r===void 0||typeof r=="string"&&r.length===0||this.isModelValueNotSet()||this.editable)&&(this.selectedOption=i[c])}Zi(i)&&(r===void 0||this.isModelValueNotSet())&&an(this.selectedOption)&&(this.selectedOption=null),r!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),console.log("Dropdown component is deprecated as of v18, use Select component instead."),this.id=this.id||eo("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:t=>this.onFilterInputChange(t),reset:()=>this.resetFilter()})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let t=yt(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-highlight");t&&Xi(this.itemsWrapper,t),this.selectedOptionUpdated=!1}}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this.itemTemplate=t.template;break;case"selectedItem":this.selectedItemTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"filter":this.filterTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;case"emptyfilter":this.emptyFilterTemplate=t.template;break;case"empty":this.emptyTemplate=t.template;break;case"group":this.groupTemplate=t.template;break;case"loader":this.loaderTemplate=t.template;break;case"dropdownicon":this.dropdownIconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;case"clearicon":this.clearIconTemplate=t.template;break;case"filtericon":this.filterIconTemplate=t.template;break;default:this.itemTemplate=t.template;break}})}flatOptions(t){return(t||[]).reduce((n,r,i)=>{n.push({optionGroup:r,group:!0,index:i});let c=this.getOptionGroupChildren(r);return c&&c.forEach(m=>n.push(m)),n},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)),this.autoDisplayFirst&&(this.modelValue()===null||this.modelValue()===void 0)&&!this.placeholder()){let t=this.findFirstOptionIndex();this.onOptionSelect(null,this.visibleOptions()[t],!1,!0)}}onOptionSelect(t,n,r=!0,i=!1){if(!this.isSelected(n)){let c=this.getOptionValue(n);this.updateModel(c,t),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),i===!1&&this.onChange.emit({originalEvent:t,value:c})}r&&this.hide(!0)}onOptionMouseEnter(t,n){this.focusOnHover&&this.changeFocusedOptionIndex(t,n)}updateModel(t,n){this.value=t,this.onModelChange(t),this.modelValue.set(t),this.selectedOptionUpdated=!0}writeValue(t){this.filter&&this.resetFilter(),this.value=t,this.allowModelChange()&&this.onModelChange(t),this.modelValue.set(this.value),this.updateEditableLabel(),this.cd.markForCheck()}allowModelChange(){return this.autoDisplayFirst&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(t){return this.isValidOption(t)&&this.isOptionValueEqualsModelValue(t)}isOptionValueEqualsModelValue(t){return ea(this.modelValue(),this.getOptionValue(t),this.equalityKey())}ngAfterViewInit(){super.ngAfterViewInit(),this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let t=this.el.nativeElement.parentElement,n=t?.classList.contains("p-float-label");if(t&&n&&!this.selectedOption){let r=t.querySelector("label");r&&this._placeholder.set(r.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(t,n){return this.virtualScrollerDisabled?t:n&&n.getItemOptions(t).index}getOptionLabel(t){return this.optionLabel!==void 0&&this.optionLabel!==null?Jt(t,this.optionLabel):t&&t.label!==void 0?t.label:t}getOptionValue(t){return this.optionValue&&this.optionValue!==null?Jt(t,this.optionValue):!this.optionLabel&&t&&t.value!==void 0?t.value:t}isOptionDisabled(t){return this.getOptionValue(this.modelValue())===this.getOptionValue(t)||this.getOptionLabel(this.modelValue()===this.getOptionLabel(t))&&t.disabled===!1?!1:this.optionDisabled?Jt(t,this.optionDisabled):t&&t.disabled!==void 0?t.disabled:!1}getOptionGroupLabel(t){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?Jt(t,this.optionGroupLabel):t&&t.label!==void 0?t.label:t}getOptionGroupChildren(t){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?Jt(t,this.optionGroupChildren):t.items}getAriaPosInset(t){return(this.optionGroupLabel?t-this.visibleOptions().slice(0,t).filter(n=>this.isOptionGroup(n)).length:t)+1}get ariaSetSize(){return this.visibleOptions().filter(t=>!this.isOptionGroup(t)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onContainerClick(t){this.disabled||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(t),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(t){let n=t.target.value;this.searchValue="",!this.searchOptions(t,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n,t),setTimeout(()=>{this.onChange.emit({originalEvent:t,value:n})},1),!this.overlayVisible&&an(n)&&this.show()}show(t){this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),t&&Mt(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(t){if(t.toState==="visible"){if(this.itemsWrapper=yt(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-dropdown-items-wrapper"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=yt(this.itemsWrapper,".p-dropdown-item.p-highlight");n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(t)}t.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(t))}hide(t){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&Ui(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),t&&(this.focusInputViewChild&&Mt(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&Mt(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(t){if(this.disabled)return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(t,n){if(!(this.disabled||this.readonly||this.loading)){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,this.editable);break;case"Delete":this.onDeleteKey(t);break;case"Home":this.onHomeKey(t,this.editable);break;case"End":this.onEndKey(t,this.editable);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Space":this.onSpaceKey(t,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"Backspace":this.onBackspaceKey(t,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!t.metaKey&&oa(t.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(t,t.key));break}this.clicked.set(!1)}}onFilterKeyDown(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t,!0);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break;default:break}}onFilterBlur(t){this.focusedOptionIndex.set(-1)}onArrowDownKey(t){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(t,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(t,n)}t.preventDefault(),t.stopPropagation()}changeFocusedOptionIndex(t,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let r=this.visibleOptions()[n];this.onOptionSelect(t,r,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(t=-1){let n=t!==-1?`${this.id}_${t}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let r=yt(this.itemsViewChild.nativeElement,`li[id="${n}"]`);r?r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(t!==-1?t:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(t){return this.isValidOption(t)&&this.isSelected(t)}equalityKey(){return this.optionValue?null:this.dataKey}findFirstFocusedOptionIndex(){let t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t}findFirstOptionIndex(){return this.visibleOptions().findIndex(t=>this.isValidOption(t))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(t=>this.isValidSelectedOption(t)):-1}findNextOptionIndex(t){let n=t<this.visibleOptions().length-1?this.visibleOptions().slice(t+1).findIndex(r=>this.isValidOption(r)):-1;return n>-1?n+t+1:t}findPrevOptionIndex(t){let n=t>0?ur(this.visibleOptions().slice(0,t),r=>this.isValidOption(r)):-1;return n>-1?n:t}findLastOptionIndex(){return ur(this.visibleOptions(),t=>this.isValidOption(t))}findLastFocusedOptionIndex(){let t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t}isValidOption(t){return t!=null&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))}isOptionGroup(t){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&t.optionGroup!==void 0&&t.optionGroup!==null&&t.group}onArrowUpKey(t,n=!1){if(t.altKey&&!n){if(this.focusedOptionIndex()!==-1){let r=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(t,r)}this.overlayVisible&&this.hide()}else{let r=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(t,r),!this.overlayVisible&&this.show()}t.preventDefault(),t.stopPropagation()}onArrowLeftKey(t,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(t){this.showClear&&(this.clear(t),t.preventDefault())}onHomeKey(t,n=!1){if(n){let r=t.currentTarget;t.shiftKey?r.setSelectionRange(0,r.value.length):(r.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(t,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();t.preventDefault()}onEndKey(t,n=!1){if(n){let r=t.currentTarget;if(t.shiftKey)r.setSelectionRange(0,r.value.length);else{let i=r.value.length;r.setSelectionRange(i,i),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(t,this.findLastOptionIndex()),!this.overlayVisible&&this.show();t.preventDefault()}onPageDownKey(t){this.scrollInView(this.visibleOptions().length-1),t.preventDefault()}onPageUpKey(t){this.scrollInView(0),t.preventDefault()}onSpaceKey(t,n=!1){!this.editable&&!n&&this.onEnterKey(t)}onEnterKey(t,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(t);else{if(this.focusedOptionIndex()!==-1){let r=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(t,r)}!n&&this.hide()}t.preventDefault()}onEscapeKey(t){this.overlayVisible&&this.hide(!0),t.preventDefault()}onTabKey(t,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())Mt(t.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),t.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let r=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(t,r)}this.overlayVisible&&this.hide(this.filter)}t.stopPropagation()}onFirstHiddenFocus(t){let n=t.relatedTarget===this.focusInputViewChild?.nativeElement?qi(this.overlayViewChild.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;Mt(n)}onLastHiddenFocus(t){let n=t.relatedTarget===this.focusInputViewChild?.nativeElement?Gi(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Mt(n)}hasFocusableElements(){return Ki(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(t,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(t,n){this.searchValue=(this.searchValue||"")+n;let r=-1,i=!1;return r=this.visibleOptions().findIndex(c=>this.isOptionExactMatched(c)),r===-1&&(r=this.visibleOptions().findIndex(c=>this.isOptionStartsWith(c))),r!==-1&&(i=!0),r===-1&&this.focusedOptionIndex()===-1&&(r=this.findFirstFocusedOptionIndex()),r!==-1&&this.changeFocusedOptionIndex(t,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i}isOptionStartsWith(t){return this.isValidOption(t)&&this.getOptionLabel(t).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}isOptionExactMatched(t){return this.isValidOption(t)&&this.getOptionLabel(t).toString().toLocaleLowerCase(this.filterLocale)===this.searchValue.toLocaleLowerCase(this.filterLocale)}onFilterInputChange(t){let n=t.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:t,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?yt(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():Mt(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(t){this.updateModel(null,t),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:t,value:this.value}),this.onClear.emit(t),this.resetFilter()}static \u0275fac=function(n){return new(n||e)(z(Ho),z(na))};static \u0275cmp=E({type:e,selectors:[["p-dropdown"]],contentQueries:function(n,r,i){if(n&1&&ie(i,oe,4),n&2){let c;j(c=U())&&(r.templates=c)}},viewQuery:function(n,r){if(n&1&&(Ue(j0,5),Ue(U0,5),Ue(H0,5),Ue(W0,5),Ue(K0,5),Ue(q0,5),Ue(G0,5),Ue(Y0,5),Ue(Q0,5)),n&2){let i;j(i=U())&&(r.containerViewChild=i.first),j(i=U())&&(r.filterViewChild=i.first),j(i=U())&&(r.focusInputViewChild=i.first),j(i=U())&&(r.editableInputViewChild=i.first),j(i=U())&&(r.itemsViewChild=i.first),j(i=U())&&(r.scroller=i.first),j(i=U())&&(r.overlayViewChild=i.first),j(i=U())&&(r.firstHiddenFocusableElementOnOverlay=i.first),j(i=U())&&(r.lastHiddenFocusableElementOnOverlay=i.first)}},hostVars:5,hostBindings:function(n,r){n&1&&y("click",function(c){return r.onContainerClick(c)}),n&2&&(D("id",r.id),je(r.hostStyle),fe(r.hostClass))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",H],name:"name",style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",H],required:[2,"required","required",H],editable:[2,"editable","editable",H],appendTo:"appendTo",tabindex:[2,"tabindex","tabindex",xt],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",variant:"variant",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",H],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",H],checkmark:[2,"checkmark","checkmark",H],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",H],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",autoDisplayFirst:[2,"autoDisplayFirst","autoDisplayFirst",H],group:[2,"group","group",H],showClear:[2,"showClear","showClear",H],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",H],virtualScroll:[2,"virtualScroll","virtualScroll",H],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",xt],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",maxlength:[2,"maxlength","maxlength",xt],tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",H],selectOnFocus:[2,"selectOnFocus","selectOnFocus",H],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",H],autofocusFilter:[2,"autofocusFilter","autofocusFilter",H],fluid:[2,"fluid","fluid",H],disabled:"disabled",itemSize:"itemSize",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",filterValue:"filterValue",options:"options"},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},standalone:!1,features:[ge([ip,Ts]),re],decls:11,vars:15,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["role","combobox",3,"ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text","aria-haspopup","listbox",3,"ngClass","disabled","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",1,"p-select-dropdown"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions"],["role","combobox",3,"focus","blur","keydown","ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text","aria-haspopup","listbox",3,"input","keydown","focus","blur","ngClass","disabled","pAutoFocus"],["class","p-select-clear-icon",3,"click",4,"ngIf"],[1,"p-select-clear-icon",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],["class","p-select-dropdown-icon",4,"ngIf"],["class","p-select-dropdown-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-select-dropdown-icon",3,"ngClass"],[3,"styleClass"],[1,"p-select-dropdown-icon"],[3,"ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],["class","p-select-header",3,"click",4,"ngIf"],[1,"p-select-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],[1,"p-select-header",3,"click"],["pInputText","","type","text","role","searchbox","autocomplete","off",1,"p-select-filter",3,"input","keydown","blur","value","variant"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-select-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-select-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-select-option-group",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"],["role","option",1,"p-select-empty-message",3,"ngStyle"]],template:function(n,r){if(n&1){let i=M();f(0,rd,6,20,"span",15)(1,id,2,8,"input",16)(2,dd,3,2,"ng-container",17),l(3,"div",18),f(4,hd,3,2,"ng-container",19)(5,wd,2,2,"ng-template",null,0,se),s(),l(7,"p-overlay",20,1),ee("visibleChange",function(m){return b(i),J(r.overlayVisible,m)||(r.overlayVisible=m),v(m)}),y("onAnimationStart",function(m){return b(i),v(r.onOverlayAnimationStart(m))})("onHide",function(){return b(i),v(r.hide())}),f(9,op,13,17,"ng-template",null,2,se),s()}if(n&2){let i,c=Se(6);d("ngIf",!r.editable),a(),d("ngIf",r.editable),a(),d("ngIf",r.isVisibleClearIcon),a(),D("aria-expanded",(i=r.overlayVisible)!==null&&i!==void 0?i:!1)("data-pc-section","trigger"),a(),d("ngIf",r.loading)("ngIfElse",c),a(3),Z("visible",r.overlayVisible),d("options",r.overlayOptions)("target","@parent")("appendTo",r.appendTo)("autoZIndex",r.autoZIndex)("baseZIndex",r.baseZIndex)("showTransitionOptions",r.showTransitionOptions)("hideTransitionOptions",r.hideTransitionOptions)}},dependencies:()=>[Oe,He,$,Be,it,Ia,mt,wr,sn,br,gr,hr,ro,xr,yr,ap],encapsulation:2,changeDetection:0})}return e})(),zs=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[F,Cr,G,Lt,wr,ua,br,gr,hr,mr,fr,Et,xr,yr,Cr,G]})}return e})();function sp(e,o){if(e&1&&(l(0,"div",5),w(1,"i",6),l(2,"h3",7),u(3),g(4,"translate"),s()()),e&2){let t=p(2);a(3),C(h(4,1,t.cardTitle))}}function cp(e,o){e&1&&le(0)}function dp(e,o){if(e&1&&(l(0,"p-card"),f(1,sp,5,3,"ng-template",3)(2,cp,1,0,"ng-container",4),s()),e&2){p();let t=Se(4);a(2),d("ngTemplateOutlet",t)}}function pp(e,o){e&1&&le(0)}function up(e,o){if(e&1&&(l(0,"div"),f(1,pp,1,0,"ng-container",4),s()),e&2){p();let t=Se(4);a(),d("ngTemplateOutlet",t)}}function mp(e,o){if(e&1&&(l(0,"small",14),u(1),s()),e&2){let t=p(2);a(),B(" ",t.getModelDescription()," ")}}function fp(e,o){if(e&1){let t=M();l(0,"div",15)(1,"div",16)(2,"p-checkbox",17),ee("ngModelChange",function(r){b(t);let i=p(2);return J(i.translateToFrench,r)||(i.translateToFrench=r),v(r)}),y("ngModelChange",function(r){b(t);let i=p(2);return v(i.onTranslateChange(r))}),s(),l(3,"label",18),u(4),g(5,"translate"),s()(),l(6,"small",19),u(7),g(8,"translate"),s()()}if(e&2){let t=p(2);a(2),Z("ngModel",t.translateToFrench),d("disabled",t.disabled)("binary",!0),a(2),B(" ",h(5,5,"metadata.modelSelector.translateToFrench")," "),a(3),B(" ",h(8,7,"metadata.modelSelector.translateDescription")," ")}}function gp(e,o){if(e&1){let t=M();l(0,"div",8)(1,"div",9)(2,"label",10),u(3),g(4,"translate"),s(),l(5,"p-dropdown",11),g(6,"translate"),ee("ngModelChange",function(r){b(t);let i=p();return J(i.selectedModel,r)||(i.selectedModel=r),v(r)}),y("ngModelChange",function(r){b(t);let i=p();return v(i.onModelChange(r))}),s(),f(7,mp,2,1,"small",12),s(),f(8,fp,9,9,"div",13),s()}if(e&2){let t=p();a(3),B(" ",h(4,7,t.label)," "),a(2),d("options",t.localModels),Z("ngModel",t.selectedModel),d("disabled",t.disabled)("placeholder",h(6,9,"common.modelSelector.placeholder")),a(2),d("ngIf",t.getModelDescription()),a(),d("ngIf",t.showTranslateOption)}}var go=class e{constructor(o){this.translate=o}selectedModel="";models=[];label="common.modelSelector.label";showCard=!0;cardTitle="common.modelSelector.title";disabled=!1;showTranslateOption=!1;translateToFrench=!1;translateChange=new q;modelChange=new q;localModels=[];ngOnInit(){this.initializeModels(),this.translate.onLangChange.subscribe(()=>{this.initializeModels()})}initializeModels(){this.models&&this.models.length>0&&(this.localModels=this.models.map(o=>Ye(ke({},o),{name:this.translate.instant(o.name)})))}onModelChange(o){let t=o.value||o;this.selectedModel=t,this.modelChange.emit(t)}onTranslateChange(o){this.translateToFrench=o,this.translateChange.emit(o)}getModelDescription(){let o=this.localModels.find(t=>t.value===this.selectedModel);return o?.description?this.translate.instant(o.description):""}static \u0275fac=function(t){return new(t||e)(z(Te))};static \u0275cmp=E({type:e,selectors:[["ca-shared-model-selector"]],inputs:{selectedModel:"selectedModel",models:"models",label:"label",showCard:"showCard",cardTitle:"cardTitle",disabled:"disabled",showTranslateOption:"showTranslateOption",translateToFrench:"translateToFrench"},outputs:{translateChange:"translateChange",modelChange:"modelChange"},decls:5,vars:2,consts:[["selectorContent",""],[1,"model-selector-container"],[4,"ngIf"],["pTemplate","header"],[4,"ngTemplateOutlet"],[1,"flex","align-items-center","p-3"],[1,"pi","pi-cog","mr-2"],[1,"m-0"],[1,"model-selector-content"],[1,"field"],["for","model",1,"block","mb-2","font-semibold"],["optionLabel","name","optionValue","value","styleClass","w-full",3,"ngModelChange","options","ngModel","disabled","placeholder"],["class","block mt-2 text-500",4,"ngIf"],["class","field mt-4",4,"ngIf"],[1,"block","mt-2","text-500"],[1,"field","mt-4"],[1,"flex","align-items-center"],["inputId","translateToFrench",3,"ngModelChange","ngModel","disabled","binary"],["for","translateToFrench",1,"ml-2","cursor-pointer"],[1,"block","mt-2","ml-4","text-500"]],template:function(t,n){t&1&&(l(0,"div",1),f(1,dp,3,1,"p-card",2)(2,up,2,1,"div",2),s(),f(3,gp,9,11,"ng-template",null,0,se)),t&2&&(a(),d("ngIf",n.showCard),a(),d("ngIf",!n.showCard))},dependencies:[F,$,Be,ye,Ie,xe,O,R,zs,Er,oe,Pe,De,Ea,Ma],styles:[".model-selector-container[_ngcontent-%COMP%]{width:100%}.model-selector-content[_ngcontent-%COMP%]{padding:0}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--text-color)}[_nghost-%COMP%]     .p-dropdown{width:100%;min-width:300px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.text-500[_ngcontent-%COMP%]{color:var(--text-color-secondary)}"]})};function bp(e,o){e&1&&w(0,"div",5)}function vp(e,o){if(e&1&&(l(0,"div",1)(1,"div",2),f(2,bp,1,0,"div",3),l(3,"span"),u(4),s()(),w(5,"p-progressBar",4),s()),e&2){let t=p();a(2),d("ngIf",t.showSpinner),a(2),C(t.progressText),a(),d("value",t.progressValue)("showValue",!0)}}var ho=class e{progressText="";processedCount=0;totalFiles=0;showProgress=!1;showSpinner=!0;get progressValue(){return this.totalFiles===0?0:Math.round(this.processedCount/this.totalFiles*100)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-progress-indicator"]],inputs:{progressText:"progressText",processedCount:"processedCount",totalFiles:"totalFiles",showProgress:"showProgress",showSpinner:"showSpinner"},decls:1,vars:1,consts:[["class","progress-container",4,"ngIf"],[1,"progress-container"],[1,"progress-text"],["class","spinner",4,"ngIf"],[3,"value","showValue"],[1,"spinner"]],template:function(t,n){t&1&&f(0,vp,6,4,"div",0),t&2&&d("ngIf",n.showProgress)},dependencies:[F,$,hn,gn],styles:[".progress-container[_ngcontent-%COMP%]{margin-top:1.5rem;padding:1rem;background-color:#f8f9fa;border-radius:8px}.progress-text[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-bottom:1rem}.spinner[_ngcontent-%COMP%]{width:24px;height:24px;border:4px solid #ccc;border-top-color:#a7a72e;border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})};var _p=["*"],xp=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,yp={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},Cp={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},Fs=(()=>{class e extends _e{name="divider";theme=xp;classes=Cp;inlineStyles=yp;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var wp=(()=>{class e extends ae{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=X(Fs);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(n,r){n&2&&(D("aria-orientation",r.layout)("data-pc-name","divider")("role","separator"),fe(r.hostClass),Ze("justify-content",r.layout==="horizontal"?r.align==="center"||r.align===void 0?"center":r.align==="left"?"flex-start":r.align==="right"?"flex-end":null:null)("align-items",r.layout==="vertical"?r.align==="center"||r.align===void 0?"center":r.align==="top"?"flex-start":r.align==="bottom"?"flex-end":null:null),Me("p-divider",!0)("p-component",!0)("p-divider-horizontal",r.layout==="horizontal")("p-divider-vertical",r.layout==="vertical")("p-divider-solid",r.type==="solid")("p-divider-dashed",r.type==="dashed")("p-divider-dotted",r.type==="dotted")("p-divider-left",r.layout==="horizontal"&&(!r.align||r.align==="left"))("p-divider-center",r.layout==="horizontal"&&r.align==="center"||r.layout==="vertical"&&(!r.align||r.align==="center"))("p-divider-right",r.layout==="horizontal"&&r.align==="right")("p-divider-top",r.layout==="vertical"&&r.align==="top")("p-divider-bottom",r.layout==="vertical"&&r.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[ge([Fs]),re],ngContentSelectors:_p,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(n,r){n&1&&(Ee(),l(0,"div",0),we(1),s())},dependencies:[F,G],encapsulation:2,changeDetection:0})}return e})(),Ls=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[wp]})}return e})();var et=class e{constructor(){}saveData(o,t){localStorage.setItem(o,t),console.log("Saved "+o+": "+t)}getData(o){return localStorage.getItem(o)}removeData(o){localStorage.removeItem(o),console.log("Removed "+o)}clearData(){localStorage.clear(),console.log("Removed all stored values")}static \u0275fac=function(t){return new(t||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var Ke=class e{constructor(o){this.localStorageService=o;let t=this.getStoredKey();this.apiKeySubject=new Dt(t),this.apiKey$=this.apiKeySubject.asObservable(),this.hasApiKey$=new Dt(!!t)}STORAGE_KEY="apiKey";apiKeySubject;apiKey$;hasApiKey$;getStoredKey(){return this.localStorageService.getData(this.STORAGE_KEY)}setKey(o){this.localStorageService.saveData(this.STORAGE_KEY,o),this.apiKeySubject.next(o),this.hasApiKey$.next(!0)}getCurrentKey(){return this.apiKeySubject.value}clearKey(){this.localStorageService.removeData(this.STORAGE_KEY),this.apiKeySubject.next(null),this.hasApiKey$.next(!1)}static \u0275fac=function(t){return new(t||e)(ze(et))};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var vo=class e{constructor(o,t){this.http=o;this.apiKeyService=t}MAX_IMAGE_SIZE=1024;OPENROUTER_API_URL="https://openrouter.ai/api/v1/chat/completions";TRANSLATION_MODEL_FOR_CRA="mistralai/mistral-small-3.2-24b-instruct:free";analyzeImage(o,t,n,r=!1){console.log("ImageProcessorService.analyzeImage called with:",o.name,t);let i=this.apiKeyService.getCurrentKey();return i?(console.log("API key found, loading image..."),this.loadImage(o).pipe(Qe(c=>{let m=this.resizeAndConvertToBase64(c,this.MAX_IMAGE_SIZE);return{img:c,base64Data:m}}),lt(({img:c,base64Data:m})=>this.getVisionAnalysis(m,t,i,n,r).pipe(Qe(_=>{if(_.error)throw new Error(_.error);return Ye(ke({},_),{imageBase64:m})}))),lt(c=>c.error||!c.english?ot([c]):this.translateToFrench(c.english,i,n).pipe(Qe(m=>({english:c.english,french:m,error:null,imageBase64:c.imageBase64})),bt(m=>(console.error(`Translation error for ${n}:`,m),ot([{english:c.english,french:`[Translation Error: ${m.message||"Unknown error"}]`,error:m.message,imageBase64:c.imageBase64}]))))),bt(c=>(console.error(`Error in image analysis pipeline for ${n}:`,c),c.message==="KEY_LIMIT_EXCEEDED"?ot([{english:null,french:null,error:"KEY_LIMIT_EXCEEDED",imageBase64:null}]):ot([{english:null,french:null,error:c.message||"Unknown error",imageBase64:null}]))))):(console.error("No API key found"),Ne(()=>new Error("OpenRouter API Key is missing. Please provide it.")))}loadImage(o){return new fi(t=>{let n=new FileReader;n.onload=r=>{let i=new Image;i.onload=()=>{t.next(i),t.complete()},i.onerror=c=>{t.error(new Error(`Failed to load image '${o.name}'.`))},i.src=r.target?.result},n.onerror=r=>{t.error(new Error(`Failed to read file '${o.name}'.`))},n.readAsDataURL(o)})}resizeAndConvertToBase64(o,t){let n=document.createElement("canvas"),r=o.width,i=o.height;(r>t||i>t)&&(r>i?(i=Math.round(i*(t/r)),r=t):(r=Math.round(r*(t/i)),i=t)),n.width=r,n.height=i;let c=n.getContext("2d");if(!c)throw new Error("Could not get 2D context from canvas for image resizing.");return c.drawImage(o,0,0,r,i),n.toDataURL("image/png")}getVisionAnalysis(o,t,n,r,i=!1){console.log("getVisionAnalysis called for:",r,"model:",t,"isPdfPage:",i);let c,m;i?(c=`Provide a comprehensive, well-structured description of this document page. Format your response with clear sections and bullet points where appropriate.

Include:
\u2022 All visible text content (quotes, headings, paragraphs)
\u2022 Document structure and layout
\u2022 Forms, fields, and what information they request
\u2022 Tables and their contents
\u2022 Any important visual elements or logos

Use line breaks between sections for readability. If there are multiple sections or forms, clearly separate them.
Be thorough and detailed to help someone understand the full content without seeing the page.`,m=2e3):(c="Create a short, concise alt text for this image suitable for a website. DO NOT start with phrases like 'The image depicts', 'The image shows', or similar. Instead, directly describe the main subject in 15-20 words maximum. Focus only on the key elements necessary for accessibility. Use simple, direct language without unnecessary words.",m=50);let _;t.includes("qwen")||t.includes("llama")?_=[{role:"user",content:[{type:"text",text:c},{type:"image_url",image_url:{url:o}}]}]:_=[{role:"user",content:[{type:"image_url",image_url:{url:o}},{type:"text",text:c}]}];let x={model:t,messages:_,max_tokens:m,temperature:.3,top_p:.85},S=new Nt({Authorization:`Bearer ${n}`,"Content-Type":"application/json"});return this.http.post(this.OPENROUTER_API_URL,x,{headers:S}).pipe(Gt(6e4),Qe(k=>{let I=k?.choices?.[0]?.message?.content?.trim();if(!I)throw console.warn(`No content or unexpected structure from vision model for ${r}. Response:`,k),new Error("No content returned from vision model.");return{english:I,french:null,error:null}}),bt(k=>{let I=`Vision API Error (${k.status||"Network Error"}): ${k.statusText||"Unknown Error"}`;return k.error&&k.error.error&&k.error.error.message?I+=` - ${k.error.error.message}`:typeof k.error=="string"&&(I+=` - ${k.error}`),k.status===403&&I.toLowerCase().includes("key limit exceeded")&&(I="KEY_LIMIT_EXCEEDED"),console.error(`Error in vision API call for ${r}:`,I,k),ot([{english:null,french:null,error:I}])}))}translateToFrench(o,t,n){if(!o)return console.log(`Skipping translation for empty text: ${n}`),ot([""]);let i=[{role:"system",content:`You are a professional translator for the Canada Revenue Agency (CRA).
                          Your task is to translate the following English text into clear, concise, and accurate Canadian French,
                          using official CRA terminology and tone where applicable.
                          CRITICAL INSTRUCTION: Provide ONLY the direct translation. DO NOT include any explanations, notes,
                          disclaimers, or additional commentary of any kind. DO NOT include phrases like 'Here is the translation:'.
                          DO NOT wrap your response in quotes. Simply translate the text directly.`},{role:"user",content:o}],c={model:this.TRANSLATION_MODEL_FOR_CRA,messages:i,temperature:.1,max_tokens:Math.max(500,Math.ceil(o.length*2.5)),top_p:.9},m=new Nt({Authorization:`Bearer ${t}`,"Content-Type":"application/json"});return this.http.post(this.OPENROUTER_API_URL,c,{headers:m}).pipe(Gt(9e4),Io({count:1,delay:2e3}),Qe(_=>{if(console.log(`Translation response for ${n}:`,_),!_||!_.choices||!Array.isArray(_.choices)||_.choices.length===0)throw console.error(`Invalid response structure from translation model for ${n}:`,_),new Error("Invalid response structure from translation model.");let x=_.choices[0]?.message?.content;if(!x||typeof x!="string")throw console.error(`No content in translation response for ${n}. Full response:`,JSON.stringify(_,null,2)),new Error("Translation model returned empty content.");if(x=x.trim(),!x)throw console.error(`Translation content is empty after trimming for ${n}`),new Error("Translation model returned empty content after trimming.");return x=x.replace(/^Voici la traduction\s*:\s*/i,""),x=x.replace(/^Translation\s*:\s*/i,""),x=x.replace(/^Here is the translation\s*:\s*/i,""),x}),bt(_=>{let x=`Translation API Error (${_.status||"Network Error"}): ${_.statusText||"Unknown Error"}`;return _.error&&_.error.error&&_.error.error.message&&(x+=` - ${_.error.error.message}`),_.status===403&&_.error?.error?.message?.toLowerCase().includes("key limit exceeded")&&(x="KEY_LIMIT_EXCEEDED"),console.error(`Error translating text for ${n}:`,x,_),Ne(()=>new Error(x))}))}escapeHtml(o){return o===null||typeof o!="string"?"":o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}formatDescription(o){if(!o)return"";let t=this.escapeHtml(o);return t=t.replace(/\n\s*\n/g,"</p><p>"),t=t.replace(/\n/g,"<br>"),!t.startsWith("<p>")&&t.trim()!==""&&(t="<p>"+t),!t.endsWith("</p>")&&t.trim()!==""&&(t=t+"</p>"),t=t.replace(/<p>(\s*[-*•][\s\S]*?)<\/p>/g,"<ul><li>$1</li></ul>"),t=t.replace(/<br>\s*([-*•])\s+/g,"</li><li>"),t=t.replace(/<p>(\s*\d+\.[\s\S]*?)<\/p>/g,"<ol><li>$1</li></ol>"),t=t.replace(/<br>\s*(\d+\.)\s+/g,"</li><li>"),t=t.replace(/<p>([A-Z][A-Z\s]+[A-Z]:?)<\/p>/g,"<h4>$1</h4>"),t=t.replace(/<p>\s*(<br\s*\/?>)?\s*<\/p>/gi,""),t=t.replace(/<p><br\s*\/?>/gi,"<p>"),t=t.replace(/<br\s*\/?>\s*<\/p>/gi,"</p>"),t.trim()}static \u0275fac=function(t){return new(t||e)(ze(st),ze(Ke))};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var kp=e=>({fileName:e}),Sp=()=>({width:"30px",height:"30px"});function Tp(e,o){if(e&1&&(l(0,"h4"),u(1),g(2,"translate"),s()),e&2){let t=p();a(),C(Jo(2,1,"image.result.title",te(4,kp,t.result.fileName)))}}function Ip(e,o){if(e&1&&(w(0,"p-message",6),g(1,"translate")),e&2){let t=p(2);d("text",h(1,1,"image.result.error")+" "+t.result.data.error)}}function Mp(e,o){e&1&&(l(0,"div",7),w(1,"p-progressSpinner",8),l(2,"span"),u(3),g(4,"translate"),s()()),e&2&&(a(),je(Fe(5,Sp)),a(2),C(h(4,3,"image.result.processing")))}function Ep(e,o){if(e&1&&w(0,"img",16),e&2){let t=p(3);d("src",t.result.data.imageBase64,Ae)("alt","Preview for "+t.result.fileName)}}function zp(e,o){e&1&&(l(0,"span"),u(1,"..."),s())}function Fp(e,o){if(e&1&&(l(0,"div"),u(1),f(2,zp,2,0,"span",5),s()),e&2){let t=p(3);a(),B(" ",t.getTruncatedText(t.result.data.english)," "),a(),d("ngIf",t.shouldShowToggle(t.result.data.english))}}function Lp(e,o){if(e&1&&w(0,"div",17),e&2){let t=p(3);d("innerHTML",t.formatDescription(t.result.data.english),Ve)}}function Bp(e,o){if(e&1){let t=M();l(0,"p-button",18),g(1,"translate"),y("click",function(){b(t);let r=p(3);return v(r.toggleFullText())}),s()}if(e&2){let t=p(3);d("label",h(1,1,t.result.showFullText?"image.result.showLess":"image.result.showMore"))}}function Pp(e,o){if(e&1){let t=M();l(0,"p-button",19),g(1,"translate"),y("click",function(r){b(t);let i=p(3);return v(i.copyText(i.result.data.english,r))}),s()}e&2&&d("label",h(1,1,"image.result.copy"))}function Op(e,o){e&1&&(l(0,"span"),u(1,"..."),s())}function Ap(e,o){if(e&1&&(l(0,"div"),u(1),f(2,Op,2,0,"span",5),s()),e&2){let t=p(3);a(),B(" ",t.getTruncatedText(t.result.data.french)," "),a(),d("ngIf",t.shouldShowToggle(t.result.data.french))}}function Dp(e,o){if(e&1&&w(0,"div",17),e&2){let t=p(3);d("innerHTML",t.formatDescription(t.result.data.french),Ve)}}function Rp(e,o){if(e&1){let t=M();l(0,"p-button",18),g(1,"translate"),y("click",function(){b(t);let r=p(3);return v(r.toggleFullText())}),s()}if(e&2){let t=p(3);d("label",h(1,1,t.result.showFullText?"image.result.showLess":"image.result.showMore"))}}function $p(e,o){if(e&1){let t=M();l(0,"p-button",19),g(1,"translate"),y("click",function(r){b(t);let i=p(3);return v(i.copyText(i.result.data.french,r))}),s()}e&2&&d("label",h(1,1,"image.result.copy"))}function Np(e,o){if(e&1&&(l(0,"div"),f(1,Ep,1,2,"img",9),l(2,"div",10)(3,"div",11)(4,"strong"),u(5),g(6,"translate"),s(),l(7,"div",12),f(8,Fp,3,2,"div",5)(9,Lp,1,1,"div",13)(10,Bp,2,3,"p-button",14),s(),f(11,Pp,2,3,"p-button",15),s(),l(12,"div",11)(13,"strong"),u(14),g(15,"translate"),s(),l(16,"div",12),f(17,Ap,3,2,"div",5)(18,Dp,1,1,"div",13)(19,Rp,2,3,"p-button",14),s(),f(20,$p,2,3,"p-button",15),s()()()),e&2){let t=p(2);a(),d("ngIf",t.result.data.imageBase64),a(4),C(h(6,11,"image.result.english")),a(3),d("ngIf",!t.result.showFullText),a(),d("ngIf",t.result.showFullText),a(),d("ngIf",t.shouldShowToggle(t.result.data.english)),a(),d("ngIf",t.result.data.english),a(3),C(h(15,13,"image.result.french")),a(3),d("ngIf",!t.result.showFullText),a(),d("ngIf",t.result.showFullText),a(),d("ngIf",t.shouldShowToggle(t.result.data.french)),a(),d("ngIf",t.result.data.french)}}function Vp(e,o){if(e&1&&f(0,Ip,2,3,"p-message",3)(1,Mp,5,6,"div",4)(2,Np,21,15,"div",5),e&2){let t=p();d("ngIf",t.result.status==="error"&&t.result.data.error),a(),d("ngIf",t.result.status==="processing"),a(),d("ngIf",t.result.status==="completed")}}var Sn=class e{constructor(o,t){this.translate=o;this.imageProcessor=t}result;toggleFullText(){this.result.showFullText=!this.result.showFullText}copyText(o,t){return Y(this,null,function*(){if(!o)return;let n=t.target,r=n.textContent;try{yield navigator.clipboard.writeText(o),n.textContent=this.translate.instant("image.result.copied"),setTimeout(()=>n.textContent=r,2e3)}catch(i){console.error("Failed to copy text: ",i),n.textContent=this.translate.instant("image.result.copyFailed"),setTimeout(()=>n.textContent=r,2e3)}})}formatDescription(o){return this.imageProcessor.formatDescription(o)}getTruncatedText(o,t=150){return o?o.length>t?o.substring(0,t):o:""}shouldShowToggle(o){return(o||"").length>150}static \u0275fac=function(t){return new(t||e)(z(Te),z(vo))};static \u0275cmp=E({type:e,selectors:[["ca-image-result"]],inputs:{result:"result"},decls:4,vars:0,consts:[[1,"result-container"],["pTemplate","header"],["pTemplate","content"],["severity","error",3,"text",4,"ngIf"],["class","processing-message",4,"ngIf"],[4,"ngIf"],["severity","error",3,"text"],[1,"processing-message"],["strokeWidth","4"],["class","result-image",3,"src","alt",4,"ngIf"],[1,"result-columns"],[1,"result-column"],[1,"collapsible-container"],[3,"innerHTML",4,"ngIf"],["styleClass","p-button-text p-button-sm",3,"label","click",4,"ngIf"],["icon","pi pi-copy","styleClass","p-button-secondary p-button-sm copy-button",3,"label","click",4,"ngIf"],[1,"result-image",3,"src","alt"],[3,"innerHTML"],["styleClass","p-button-text p-button-sm",3,"click","label"],["icon","pi pi-copy","styleClass","p-button-secondary p-button-sm copy-button",3,"click","label"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"p-card"),f(2,Tp,3,6,"ng-template",1)(3,Vp,3,3,"ng-template",2),s()())},dependencies:[F,$,O,R,Q,ce,oe,Pe,De,Ls,zt,ao,fo,Vt],styles:[".result-container[_ngcontent-%COMP%]{margin-bottom:2rem}.result-image[_ngcontent-%COMP%]{max-height:200px;width:auto;border:1px solid #eee;margin-bottom:1rem;display:block;border-radius:4px}.result-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2rem}@media (max-width: 768px){.result-columns[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}}.result-column[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:1rem;border-radius:8px}.collapsible-container[_ngcontent-%COMP%]{margin:.5rem 0}.processing-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.copy-button[_ngcontent-%COMP%]{margin-top:.5rem}"]})};function jp(e,o){if(e&1){let t=M();l(0,"p-button",4),g(1,"translate"),y("onClick",function(){b(t);let r=p(2);return v(r.downloadCsv())}),s()}e&2&&d("label",h(1,1,"image.csv.download"))}function Up(e,o){e&1&&(l(0,"p"),u(1),g(2,"translate"),s()),e&2&&(a(),B(" ",h(2,1,"image.csv.noData")," "))}function Hp(e,o){if(e&1&&(l(0,"div",1),f(1,jp,2,3,"p-button",2)(2,Up,3,3,"p",3),s()),e&2){let t=p();a(),d("ngIf",t.hasCompletedResults()),a(),d("ngIf",!t.hasCompletedResults())}}var Tn=class e{constructor(o){this.translate=o}results={};hasResults(){return Object.keys(this.results).length>0}hasCompletedResults(){return Object.values(this.results).some(o=>o.status==="completed")}downloadCsv(){let o=this.translate.instant("image.csv.header")+`
`;Object.keys(this.results).sort().forEach(c=>{let m=this.results[c];if(m.status==="completed"){let _=m.fileName,x=m.data.english||"",S=m.data.french||"",k=I=>`"${(I||"").replace(/"/g,'""')}"`;o+=`${k(_)},${k(x)},${k(S)}
`}});let n=new Blob([o],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=this.translate.instant("image.csv.fileName"),i.click(),URL.revokeObjectURL(r)}static \u0275fac=function(t){return new(t||e)(z(Te))};static \u0275cmp=E({type:e,selectors:[["ca-csv-download"]],inputs:{results:"results"},decls:1,vars:1,consts:[["class","csv-download-container",4,"ngIf"],[1,"csv-download-container"],["icon","pi pi-download","styleClass","my-2",3,"label","onClick",4,"ngIf"],[4,"ngIf"],["icon","pi pi-download","styleClass","my-2",3,"onClick","label"]],template:function(t,n){t&1&&f(0,Hp,3,2,"div",0),t&2&&d("ngIf",n.hasResults())},dependencies:[F,$,O,R,Q,ce],styles:[".csv-download-container[_ngcontent-%COMP%]{margin-top:2rem;padding:1rem;background-color:var(--surface-100);border-radius:8px}"]})};var In=class e{stateSubject=new Dt({results:{},filesInProgress:0,processedCount:0,progressText:"",showProgressArea:!1});state$=this.stateSubject.asObservable();constructor(){}getCurrentState(){return this.stateSubject.value}updateState(o){let t=this.stateSubject.value;this.stateSubject.next(ke(ke({},t),o))}addResult(o,t){let n=this.stateSubject.value,r=Ye(ke({},n.results),{[o]:t});this.updateState({results:r})}updateResult(o,t){let n=this.stateSubject.value;if(n.results[o]){let r=ke(ke({},n.results[o]),t),i=Ye(ke({},n.results),{[o]:r});this.updateState({results:i})}}resetState(){this.stateSubject.next({results:{},filesInProgress:0,processedCount:0,progressText:"",showProgressArea:!1})}incrementProcessedCount(){let o=this.stateSubject.value;this.updateState({processedCount:o.processedCount+1})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var Mn=class e{pdfjsLib;isInitialized=!1;constructor(){}initializePdfJs(){return Y(this,null,function*(){if(this.isInitialized)return;let o=yield import("./chunk-UNQKWMEP.js");this.pdfjsLib=o;let{GlobalWorkerOptions:t}=yield import("./chunk-UNQKWMEP.js"),r=document.querySelector("base")?.getAttribute("href")||"/";t.workerSrc=`${r}pdfjs/pdf.worker.min.mjs`.replace(/\/+/g,"/"),this.isInitialized=!0})}convertPdfToImages(o){return Y(this,null,function*(){yield this.initializePdfJs();let t=yield o.arrayBuffer(),n=yield this.pdfjsLib.getDocument({data:t}).promise,r=[];for(let i=1;i<=n.numPages;i++){let c=yield n.getPage(i),m=c.getViewport({scale:2}),_=document.createElement("canvas"),x=_.getContext("2d");if(!x)throw new Error("Failed to get canvas context");_.height=m.height,_.width=m.width;let S={canvasContext:x,viewport:m};yield c.render(S).promise;let k=_.toDataURL("image/png");r.push(k)}return r})}dataUrlToFile(o,t){let n=o.split(","),r=n[0].match(/:(.*?);/)?.[1]||"image/png",i=atob(n[1]),c=i.length,m=new Uint8Array(c);for(;c--;)m[c]=i.charCodeAt(c);return new File([m],t,{type:r})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};function qp(e,o){e&1&&(l(0,"span",7),w(1,"i",8),u(2),g(3,"translate"),s()),e&2&&(a(2),B(" ",h(3,1,"page.apiKey.active")," "))}function Gp(e,o){e&1&&(l(0,"span",9),w(1,"i",10),u(2),g(3,"translate"),s()),e&2&&(a(2),B(" ",h(3,1,"page.apiKey.notSet")," "))}function Yp(e,o){if(e&1&&w(0,"ca-image-result",18),e&2){let t=o.$implicit;d("result",t)}}function Qp(e,o){if(e&1){let t=M();l(0,"div",13),f(1,Yp,1,1,"ca-image-result",14),w(2,"ca-csv-download",15),l(3,"div",16)(4,"p-button",17),g(5,"translate"),g(6,"translate"),y("click",function(){b(t);let r=p(2);return v(r.resetTool())}),s()()()}if(e&2){let t=p().ngIf,n=p();a(),d("ngForOf",n.getResultsArray(t.results)),a(),d("results",t.results),a(2),d("label",h(5,4,"image.reset.label"))("pTooltip",h(6,6,"image.reset.tooltip"))}}function Xp(e,o){if(e&1&&(N(0),w(1,"ca-progress-indicator",11),f(2,Qp,7,8,"div",12),V()),e&2){let t=o.ngIf,n=p();a(),d("progressText",t.progressText)("processedCount",t.processedCount)("totalFiles",t.filesInProgress)("showProgress",t.showProgressArea),a(),d("ngIf",n.getResultsArray(t.results).length>0)}}var En=class e{constructor(o,t,n,r,i,c,m,_,x){this.apiKeyService=o;this.imageProcessorService=t;this.stateService=n;this.translate=r;this.cdr=i;this.route=c;this.router=m;this.pdfConverterService=_;this.messageService=x;this.state$=this.stateService.state$}selectedVisionModel="qwen/qwen2.5-vl-32b-instruct:free";filesToProcess=[];state$;processingStartTime=0;visionModels=[{name:"image.model.qwen",value:"qwen/qwen2.5-vl-32b-instruct:free",description:"image.model.qwenDescription"},{name:"image.model.gemma",value:"google/gemma-3-27b-it:free",description:"image.model.gemmaDescription"}];subscriptions=[];ngOnInit(){this.route.queryParams.subscribe(o=>{let t=o.key;t&&this.apiKeyService.setKey(t)})}ngOnDestroy(){this.subscriptions.forEach(o=>o.unsubscribe())}onFilesSelected(o){console.log("Files selected:",o),console.time("Image processing time"),this.processingStartTime=performance.now(),this.filesToProcess=[];let t=0;for(let n=0;n<o.length;n++)this.filesToProcess.push({file:o[n],displayName:o[n].name}),o[n].type!=="application/pdf"&&t++;this.stateService.resetState(),this.stateService.updateState({filesInProgress:t,processedCount:0,showProgressArea:!0,progressText:this.translate.instant("image.progress.starting",{count:t})}),this.processNextFile()}onModelChange(o){this.selectedVisionModel=o,alert(this.translate.instant("image.model.changeAlert")),this.stateService.resetState()}processNextFile(){return Y(this,null,function*(){if(this.filesToProcess.length===0){this.finalizeProcessing();return}let o=this.filesToProcess.shift(),t=o.file,n=o.displayName,r=n.includes(" - Page ");if(t.type!=="application/pdf"){let c={fileName:n,type:"image",status:"processing",data:{imageBase64:null,english:null,french:null,error:null},showFullText:!1};this.stateService.addResult(n,c)}let i=this.stateService.getCurrentState();this.stateService.updateState({progressText:this.translate.instant("image.progress.processing",{fileName:n,current:i.processedCount+1,total:i.filesInProgress})});try{if(t.type==="application/pdf"){console.log("Converting PDF to images:",n);let c=yield this.pdfConverterService.convertPdfToImages(t);if(c.length>0)console.log(`PDF has ${c.length} pages. Processing all pages...`),c.forEach((m,_)=>{let x=`${n} - Page ${_+1}`,S=this.pdfConverterService.dataUrlToFile(m,`${n}_page${_+1}.png`);this.filesToProcess.push({file:S,displayName:x});let k=this.stateService.getCurrentState();this.stateService.updateState({filesInProgress:k.filesInProgress+1})}),this.processNextFile();else throw new Error(this.translate.instant("image.error.pdfNoPages"))}else t.type.startsWith("image/")?this.imageProcessorService.analyzeImage(t,this.selectedVisionModel,n,r).subscribe({next:c=>{let m=c.error;m==="KEY_LIMIT_EXCEEDED"&&(m=this.translate.instant("image.error.paidModel")),this.stateService.updateResult(n,{status:c.error?"error":"completed",data:{imageBase64:c.imageBase64||null,english:c.english,french:c.french,error:m}}),this.stateService.incrementProcessedCount(),this.processNextFile()},error:c=>{console.error(`Error analyzing image ${n}:`,c);let m=c.message||this.translate.instant("image.error.unknown");(c.message==="KEY_LIMIT_EXCEEDED"||c.message&&c.message.includes("KEY_LIMIT_EXCEEDED"))&&(m=this.translate.instant("image.error.paidModel")),this.stateService.updateResult(n,{status:"error",data:{imageBase64:null,english:null,french:null,error:m}}),this.stateService.incrementProcessedCount(),this.processNextFile()}}):(this.stateService.updateResult(n,{status:"error",data:{imageBase64:null,english:null,french:null,error:this.translate.instant("image.error.unsupportedFileType")}}),this.stateService.incrementProcessedCount(),this.processNextFile())}catch(c){console.error(`Error processing file ${n}:`,c),t.type!=="application/pdf"&&(this.stateService.updateResult(n,{status:"error",data:{imageBase64:null,english:null,french:null,error:c.message||this.translate.instant("image.error.failedToProcess")}}),this.stateService.incrementProcessedCount()),this.processNextFile()}})}finalizeProcessing(){let o=this.stateService.getCurrentState();this.stateService.updateState({progressText:this.translate.instant("image.progress.complete",{count:o.processedCount})}),console.timeEnd("Image processing time");let n=((performance.now()-this.processingStartTime)/1e3).toFixed(2);this.messageService.add({severity:"success",summary:this.translate.instant("common.requestComplete"),detail:this.translate.instant("common.totalTime",{time:n}),life:1e4}),setTimeout(()=>{this.stateService.updateState({showProgressArea:!1})},3e3)}getResultsArray(o){return Object.values(o)}resetTool(){this.stateService.resetState(),this.filesToProcess=[],this.stateService.updateState({showProgressArea:!1,progressText:""})}static \u0275fac=function(t){return new(t||e)(z(Ke),z(vo),z(In),z(Te),z(en),z(Xt),z(Je),z(Mn),z(oo))};static \u0275cmp=E({type:e,selectors:[["ca-image-assistant"]],features:[ge([oo])],decls:21,vars:24,consts:[["id","wb-cont"],[1,"api-key-status","mb-4"],["class","text-green-600",4,"ngIf"],["class","text-orange-600",4,"ngIf"],[3,"modelChange","selectedModel","models","label","cardTitle","showCard","showTranslateOption"],[3,"filesSelected"],[4,"ngIf"],[1,"text-green-600"],[1,"pi","pi-check-circle"],[1,"text-orange-600"],[1,"pi","pi-exclamation-circle"],[3,"progressText","processedCount","totalFiles","showProgress"],["class","results-section",4,"ngIf"],[1,"results-section"],[3,"result",4,"ngFor","ngForOf"],[3,"results"],[1,"mt-3"],["icon","pi pi-refresh","severity","secondary",3,"click","label","pTooltip"],[3,"result"]],template:function(t,n){t&1&&(w(0,"p-toast"),l(1,"h1",0),u(2),g(3,"translate"),s(),l(4,"p"),u(5),g(6,"translate"),s(),l(7,"section",1)(8,"div")(9,"strong"),u(10),g(11,"translate"),s(),f(12,qp,4,3,"span",2),g(13,"async"),f(14,Gp,4,3,"span",3),g(15,"async"),s()(),l(16,"section")(17,"ca-shared-model-selector",4),y("modelChange",function(i){return n.onModelChange(i)}),s(),l(18,"ca-file-upload",5),y("filesSelected",function(i){return n.onFilesSelected(i)}),s(),f(19,Xp,3,5,"ng-container",6),g(20,"async"),s()),t&2&&(a(2),C(h(3,12,"title.image")),a(3),C(h(6,14,"image.description")),a(5),C(h(11,16,"page.apiKey.status")),a(2),d("ngIf",h(13,18,n.apiKeyService.hasApiKey$)),a(2),d("ngIf",!h(15,20,n.apiKeyService.hasApiKey$)),a(3),d("selectedModel",n.selectedVisionModel)("models",n.visionModels)("label","image.model.label")("cardTitle","image.model.title")("showCard",!0)("showTranslateOption",!1),a(2),d("ngIf",h(20,22,n.state$)))},dependencies:[F,He,$,tn,O,R,Q,ce,Lt,mt,Ta,kn,go,ho,Sn,Tn],styles:[".results-section[_ngcontent-%COMP%]{margin-top:2rem}"]})};var Zp=["header"],Jp=["icons"],e1=["content"],t1=["footer"],o1=["headericons"],n1=["contentWrapper"],r1=["*",[["p-header"]],[["p-footer"]]],i1=["*","p-header","p-footer"],a1=(e,o)=>({"p-panel p-component":!0,"p-panel-toggleable":e,"p-panel-expanded":o}),l1=e=>({transitionParams:e,height:"0",opacity:"0"}),s1=e=>({value:"hidden",params:e}),c1=e=>({transitionParams:e,height:"*",opacity:"1"}),d1=e=>({value:"visible",params:e}),p1=(e,o,t)=>({"p-panel-icons-start":e,"p-panel-icons-end":o,"p-panel-icons-center":t}),u1=e=>({$implicit:e});function m1(e,o){if(e&1&&(l(0,"span",12),u(1),s()),e&2){let t=p(2);D("id",t.id+"_header"),a(),C(t._header)}}function f1(e,o){e&1&&le(0)}function g1(e,o){}function h1(e,o){e&1&&f(0,g1,0,0,"ng-template")}function b1(e,o){if(e&1&&w(0,"span"),e&2){let t=p(6);fe(t.expandIcon)}}function v1(e,o){e&1&&w(0,"MinusIcon")}function _1(e,o){if(e&1&&(N(0),f(1,b1,1,2,"span",16)(2,v1,1,0,"MinusIcon",14),V()),e&2){let t=p(5);a(),d("ngIf",t.expandIcon),a(),d("ngIf",!t.expandIcon)}}function x1(e,o){if(e&1&&w(0,"span"),e&2){let t=p(6);fe(t.collapseIcon)}}function y1(e,o){e&1&&w(0,"PlusIcon")}function C1(e,o){if(e&1&&(N(0),f(1,x1,1,2,"span",16)(2,y1,1,0,"PlusIcon",14),V()),e&2){let t=p(5);a(),d("ngIf",t.collapseIcon),a(),d("ngIf",!t.collapseIcon)}}function w1(e,o){if(e&1&&(N(0),f(1,_1,3,2,"ng-container",14)(2,C1,3,2,"ng-container",14),V()),e&2){let t=p(4);a(),d("ngIf",!t.collapsed),a(),d("ngIf",t.collapsed)}}function k1(e,o){}function S1(e,o){e&1&&f(0,k1,0,0,"ng-template")}function T1(e,o){if(e&1&&f(0,w1,3,2,"ng-container",14)(1,S1,1,0,null,15),e&2){let t=p(3);d("ngIf",!t.headerIconsTemplate&&!t._headerIconsTemplate&&!(t.toggleButtonProps!=null&&t.toggleButtonProps.icon)),a(),d("ngTemplateOutlet",t.headerIconsTemplate||t._headerIconsTemplate)("ngTemplateOutletContext",te(3,u1,t.collapsed))}}function I1(e,o){if(e&1){let t=M();l(0,"p-button",13),y("click",function(r){b(t);let i=p(2);return v(i.onIconClick(r))})("keydown",function(r){b(t);let i=p(2);return v(i.onKeyDown(r))}),f(1,T1,2,5,"ng-template",null,1,se),s()}if(e&2){let t=p(2);d("text",!0)("rounded",!0)("buttonProps",t.toggleButtonProps),D("id",t.id+"_header")("aria-label",t.buttonAriaLabel)("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)}}function M1(e,o){if(e&1){let t=M();l(0,"div",8),y("click",function(r){b(t);let i=p();return v(i.onHeaderClick(r))}),f(1,m1,2,2,"span",9),we(2,1),f(3,f1,1,0,"ng-container",6),l(4,"div",10),f(5,h1,1,0,null,6)(6,I1,3,7,"p-button",11),s()()}if(e&2){let t=p();D("id",t.id+"-titlebar"),a(),d("ngIf",t._header),a(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),a(),d("ngClass",$t(6,p1,t.iconPos==="start",t.iconPos==="end",t.iconPos==="center")),a(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate),a(),d("ngIf",t.toggleable)}}function E1(e,o){e&1&&le(0)}function z1(e,o){e&1&&le(0)}function F1(e,o){if(e&1&&(l(0,"div",17),we(1,2),f(2,z1,1,0,"ng-container",6),s()),e&2){let t=p();a(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var L1=({dt:e})=>`
.p-panel {
    border: 1px solid ${e("panel.border.color")};
    border-radius: ${e("panel.border.radius")};
    background: ${e("panel.background")};
    color: ${e("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e("panel.header.padding")};
    background: ${e("panel.header.background")};
    color: ${e("panel.header.color")};
    border-style: solid;
    border-width: ${e("panel.header.border.width")};
    border-color: ${e("panel.header.border.color")};
    border-radius: ${e("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${e("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${e("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${e("panel.content.padding")};
}

.p-panel-footer {
    padding: ${e("panel.footer.padding")};
}

/* For PrimeNG */
.p-panel-toggleable.p-panel-expanded > .p-panel-content-container:not(.ng-animating) {
    overflow: visible
}

.p-panel-toggleable .p-panel-content-container {
    overflow: hidden;
}
`,B1={root:({props:e})=>["p-panel p-component",{"p-panel-toggleable":e.toggleable}],header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Os=(()=>{class e extends _e{name="panel";theme=L1;classes=B1;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var P1=(()=>{class e extends ae{toggleable;_header;collapsed;style;styleClass;iconPos="end";expandIcon;collapseIcon;showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";toggleButtonProps;collapsedChange=new q;onBeforeToggle=new q;onAfterToggle=new q;footerFacet;animating;headerTemplate;iconTemplate;contentTemplate;footerTemplate;headerIconsTemplate;_headerTemplate;_iconTemplate;_contentTemplate;_footerTemplate;_headerIconsTemplate;contentWrapperViewChild;id=eo("pn_id_");get buttonAriaLabel(){return this._header}_componentStyle=X(Os);onHeaderClick(t){this.toggler==="header"&&this.toggle(t)}onIconClick(t){this.toggler==="icon"&&this.toggle(t)}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand():this.collapse()),this.cd.markForCheck(),t.preventDefault()}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement.children[0]}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]:not([tabindex="-1"])').forEach(n=>{this.collapsed?n.setAttribute("tabindex","-1"):n.removeAttribute("tabindex")})}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}onToggleDone(t){this.animating=!1,this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed})}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"icons":this._iconTemplate=t.template;break;case"headericons":this._headerIconsTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-panel"]],contentQueries:function(n,r,i){if(n&1&&(ie(i,ia,5),ie(i,Zp,4),ie(i,Jp,4),ie(i,e1,4),ie(i,t1,4),ie(i,o1,4),ie(i,oe,4)),n&2){let c;j(c=U())&&(r.footerFacet=c.first),j(c=U())&&(r.headerTemplate=c.first),j(c=U())&&(r.iconTemplate=c.first),j(c=U())&&(r.contentTemplate=c.first),j(c=U())&&(r.footerTemplate=c.first),j(c=U())&&(r.headerIconsTemplate=c.first),j(c=U())&&(r.templates=c)}},viewQuery:function(n,r){if(n&1&&Ue(n1,5),n&2){let i;j(i=U())&&(r.contentWrapperViewChild=i.first)}},inputs:{toggleable:[2,"toggleable","toggleable",H],_header:[0,"header","_header"],collapsed:[2,"collapsed","collapsed",H],style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:[2,"showHeader","showHeader",H],toggler:"toggler",transitionOptions:"transitionOptions",toggleButtonProps:"toggleButtonProps"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[ge([Os]),re],ngContentSelectors:i1,decls:8,vars:25,consts:[["contentWrapper",""],["icon",""],[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-panel-content-container",3,"id"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons",3,"ngClass"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"text","rounded","buttonProps","click","keydown",4,"ngIf"],[1,"p-panel-title"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"click","keydown","text","rounded","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class",4,"ngIf"],[1,"p-panel-footer"]],template:function(n,r){if(n&1){let i=M();Ee(r1),l(0,"div",2),f(1,M1,7,10,"div",3),l(2,"div",4),y("@panelContent.done",function(m){return b(i),v(r.onToggleDone(m))}),l(3,"div",5,0),we(5),f(6,E1,1,0,"ng-container",6),s(),f(7,F1,3,1,"div",7),s()()}n&2&&(fe(r.styleClass),d("ngClass",_t(14,a1,r.toggleable,!r.collapsed&&r.toggleable))("ngStyle",r.style),D("id",r.id)("data-pc-name","panel"),a(),d("ngIf",r.showHeader),a(),d("id",r.id+"_content")("@panelContent",r.collapsed?te(19,s1,te(17,l1,r.animating?r.transitionOptions:"0ms")):te(23,d1,te(21,c1,r.animating?r.transitionOptions:"0ms"))),D("aria-labelledby",r.id+"_header")("aria-hidden",r.collapsed)("tabindex",r.collapsed?"-1":void 0),a(4),d("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),a(),d("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[F,Oe,$,Be,it,ba,ha,Q,ce,G],encapsulation:2,data:{animation:[Zt("panelContent",[pt("hidden",dt({height:"0"})),pt("void",dt({height:"{{height}}"}),{params:{height:"0"}}),pt("visible",dt({height:"*"})),ut("visible <=> hidden",[ct("{{transitionParams}}")]),ut("void => hidden",ct("{{transitionParams}}")),ut("void => visible",ct("{{transitionParams}}"))])]},changeDetection:0})}return e})(),As=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[P1,G,G]})}return e})();function O1(e,o,t){return(o=D1(o))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function Ds(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function T(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Ds(Object(t),!0).forEach(function(n){O1(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ds(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function A1(e,o){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,o||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function D1(e){var o=A1(e,"string");return typeof o=="symbol"?o:o+""}var Rs=()=>{},Zr={},dc={},pc=null,uc={mark:Rs,measure:Rs};try{typeof window<"u"&&(Zr=window),typeof document<"u"&&(dc=document),typeof MutationObserver<"u"&&(pc=MutationObserver),typeof performance<"u"&&(uc=performance)}catch{}var{userAgent:$s=""}=Zr.navigator||{},Pt=Zr,me=dc,Ns=pc,zn=uc,Yb=!!Pt.document,St=!!me.documentElement&&!!me.head&&typeof me.addEventListener=="function"&&typeof me.createElement=="function",mc=~$s.indexOf("MSIE")||~$s.indexOf("Trident/"),R1=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,$1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fc={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},N1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gc=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Re="classic",An="duotone",V1="sharp",j1="sharp-duotone",hc=[Re,An,V1,j1],U1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},H1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},W1=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),K1={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},q1=["fak","fa-kit","fakd","fa-kit-duotone"],Vs={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},G1=["kit"],Y1={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Q1=["fak","fakd"],X1={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},js={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Z1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],J1=["fak","fa-kit","fakd","fa-kit-duotone"],e2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},t2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},o2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Or={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},n2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ar=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Z1,...n2],r2=["solid","regular","light","thin","duotone","brands"],bc=[1,2,3,4,5,6,7,8,9,10],i2=bc.concat([11,12,13,14,15,16,17,18,19,20]),a2=[...Object.keys(o2),...r2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fn.GROUP,Fn.SWAP_OPACITY,Fn.PRIMARY,Fn.SECONDARY].concat(bc.map(e=>"".concat(e,"x"))).concat(i2.map(e=>"w-".concat(e))),l2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},wt="___FONT_AWESOME___",Dr=16,vc="fa",_c="svg-inline--fa",Ht="data-fa-i2svg",Rr="data-fa-pseudo-element",s2="data-fa-pseudo-element-pending",Jr="data-prefix",ei="data-icon",Us="fontawesome-i2svg",c2="async",d2=["HTML","HEAD","STYLE","SCRIPT"],xc=(()=>{try{return!0}catch{return!1}})();function Ro(e){return new Proxy(e,{get(o,t){return t in o?o[t]:o[Re]}})}var yc=T({},fc);yc[Re]=T(T(T(T({},{"fa-duotone":"duotone"}),fc[Re]),Vs.kit),Vs["kit-duotone"]);var p2=Ro(yc),$r=T({},K1);$r[Re]=T(T(T(T({},{duotone:"fad"}),$r[Re]),js.kit),js["kit-duotone"]);var Hs=Ro($r),Nr=T({},Or);Nr[Re]=T(T({},Nr[Re]),X1.kit);var ti=Ro(Nr),Vr=T({},t2);Vr[Re]=T(T({},Vr[Re]),Y1.kit);var Qb=Ro(Vr),u2=R1,Cc="fa-layers-text",m2=$1,f2=T({},U1),Xb=Ro(f2),g2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zr=N1,h2=[...G1,...a2],Po=Pt.FontAwesomeConfig||{};function b2(e){var o=me.querySelector("script["+e+"]");if(o)return o.getAttribute(e)}function v2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}me&&typeof me.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(o=>{let[t,n]=o,r=v2(b2(t));r!=null&&(Po[n]=r)});var wc={styleDefault:"solid",familyDefault:Re,cssPrefix:vc,replacementClass:_c,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Po.familyPrefix&&(Po.cssPrefix=Po.familyPrefix);var yo=T(T({},wc),Po);yo.autoReplaceSvg||(yo.observeMutations=!1);var L={};Object.keys(wc).forEach(e=>{Object.defineProperty(L,e,{enumerable:!0,set:function(o){yo[e]=o,Oo.forEach(t=>t(L))},get:function(){return yo[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){yo.cssPrefix=e,Oo.forEach(o=>o(L))},get:function(){return yo.cssPrefix}});Pt.FontAwesomeConfig=L;var Oo=[];function _2(e){return Oo.push(e),()=>{Oo.splice(Oo.indexOf(e),1)}}var Bt=Dr,gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function x2(e){if(!e||!St)return;let o=me.createElement("style");o.setAttribute("type","text/css"),o.innerHTML=e;let t=me.head.childNodes,n=null;for(let r=t.length-1;r>-1;r--){let i=t[r],c=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(n=i)}return me.head.insertBefore(o,n),e}var y2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ao(){let e=12,o="";for(;e-- >0;)o+=y2[Math.random()*62|0];return o}function Co(e){let o=[];for(let t=(e||[]).length>>>0;t--;)o[t]=e[t];return o}function oi(e){return e.classList?Co(e.classList):(e.getAttribute("class")||"").split(" ").filter(o=>o)}function kc(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C2(e){return Object.keys(e||{}).reduce((o,t)=>o+"".concat(t,'="').concat(kc(e[t]),'" '),"").trim()}function Dn(e){return Object.keys(e||{}).reduce((o,t)=>o+"".concat(t,": ").concat(e[t].trim(),";"),"")}function ni(e){return e.size!==gt.size||e.x!==gt.x||e.y!==gt.y||e.rotate!==gt.rotate||e.flipX||e.flipY}function w2(e){let{transform:o,containerWidth:t,iconWidth:n}=e,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(o.x*32,", ").concat(o.y*32,") "),c="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),m="rotate(".concat(o.rotate," 0 0)"),_={transform:"".concat(i," ").concat(c," ").concat(m)},x={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:_,path:x}}function k2(e){let{transform:o,width:t=Dr,height:n=Dr,startCentered:r=!1}=e,i="";return r&&mc?i+="translate(".concat(o.x/Bt-t/2,"em, ").concat(o.y/Bt-n/2,"em) "):r?i+="translate(calc(-50% + ".concat(o.x/Bt,"em), calc(-50% + ").concat(o.y/Bt,"em)) "):i+="translate(".concat(o.x/Bt,"em, ").concat(o.y/Bt,"em) "),i+="scale(".concat(o.size/Bt*(o.flipX?-1:1),", ").concat(o.size/Bt*(o.flipY?-1:1),") "),i+="rotate(".concat(o.rotate,"deg) "),i}var S2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Sc(){let e=vc,o=_c,t=L.cssPrefix,n=L.replacementClass,r=S2;if(t!==e||n!==o){let i=new RegExp("\\.".concat(e,"\\-"),"g"),c=new RegExp("\\--".concat(e,"\\-"),"g"),m=new RegExp("\\.".concat(o),"g");r=r.replace(i,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(m,".".concat(n))}return r}var Ws=!1;function Fr(){L.autoAddCss&&!Ws&&(x2(Sc()),Ws=!0)}var T2={mixout(){return{dom:{css:Sc,insertCss:Fr}}},hooks(){return{beforeDOMElementCreation(){Fr()},beforeI2svg(){Fr()}}}},kt=Pt||{};kt[wt]||(kt[wt]={});kt[wt].styles||(kt[wt].styles={});kt[wt].hooks||(kt[wt].hooks={});kt[wt].shims||(kt[wt].shims=[]);var ht=kt[wt],Tc=[],Ic=function(){me.removeEventListener("DOMContentLoaded",Ic),Pn=1,Tc.map(e=>e())},Pn=!1;St&&(Pn=(me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(me.readyState),Pn||me.addEventListener("DOMContentLoaded",Ic));function I2(e){St&&(Pn?setTimeout(e,0):Tc.push(e))}function $o(e){let{tag:o,attributes:t={},children:n=[]}=e;return typeof e=="string"?kc(e):"<".concat(o," ").concat(C2(t),">").concat(n.map($o).join(""),"</").concat(o,">")}function Ks(e,o,t){if(e&&e[o]&&e[o][t])return{prefix:o,iconName:t,icon:e[o][t]}}var M2=function(o,t){return function(n,r,i,c){return o.call(t,n,r,i,c)}},Lr=function(o,t,n,r){var i=Object.keys(o),c=i.length,m=r!==void 0?M2(t,r):t,_,x,S;for(n===void 0?(_=1,S=o[i[0]]):(_=0,S=n);_<c;_++)x=i[_],S=m(S,o[x],x,o);return S};function E2(e){let o=[],t=0,n=e.length;for(;t<n;){let r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){let i=e.charCodeAt(t++);(i&64512)==56320?o.push(((r&1023)<<10)+(i&1023)+65536):(o.push(r),t--)}else o.push(r)}return o}function jr(e){let o=E2(e);return o.length===1?o[0].toString(16):null}function z2(e,o){let t=e.length,n=e.charCodeAt(o),r;return n>=55296&&n<=56319&&t>o+1&&(r=e.charCodeAt(o+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function qs(e){return Object.keys(e).reduce((o,t)=>{let n=e[t];return!!n.icon?o[n.iconName]=n.icon:o[t]=n,o},{})}function Ur(e,o){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=t,r=qs(o);typeof ht.hooks.addPack=="function"&&!n?ht.hooks.addPack(e,qs(o)):ht.styles[e]=T(T({},ht.styles[e]||{}),r),e==="fas"&&Ur("fa",o)}var{styles:Do,shims:F2}=ht,Mc=Object.keys(ti),L2=Mc.reduce((e,o)=>(e[o]=Object.keys(ti[o]),e),{}),ri=null,Ec={},zc={},Fc={},Lc={},Bc={};function B2(e){return~h2.indexOf(e)}function P2(e,o){let t=o.split("-"),n=t[0],r=t.slice(1).join("-");return n===e&&r!==""&&!B2(r)?r:null}var Pc=()=>{let e=n=>Lr(Do,(r,i,c)=>(r[c]=Lr(i,n,{}),r),{});Ec=e((n,r,i)=>(r[3]&&(n[r[3]]=i),r[2]&&r[2].filter(m=>typeof m=="number").forEach(m=>{n[m.toString(16)]=i}),n)),zc=e((n,r,i)=>(n[i]=i,r[2]&&r[2].filter(m=>typeof m=="string").forEach(m=>{n[m]=i}),n)),Bc=e((n,r,i)=>{let c=r[2];return n[i]=i,c.forEach(m=>{n[m]=i}),n});let o="far"in Do||L.autoFetchSvg,t=Lr(F2,(n,r)=>{let i=r[0],c=r[1],m=r[2];return c==="far"&&!o&&(c="fas"),typeof i=="string"&&(n.names[i]={prefix:c,iconName:m}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:c,iconName:m}),n},{names:{},unicodes:{}});Fc=t.names,Lc=t.unicodes,ri=Rn(L.styleDefault,{family:L.familyDefault})};_2(e=>{ri=Rn(e.styleDefault,{family:L.familyDefault})});Pc();function ii(e,o){return(Ec[e]||{})[o]}function O2(e,o){return(zc[e]||{})[o]}function Ut(e,o){return(Bc[e]||{})[o]}function Oc(e){return Fc[e]||{prefix:null,iconName:null}}function A2(e){let o=Lc[e],t=ii("fas",e);return o||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ot(){return ri}var Ac=()=>({prefix:null,iconName:null,rest:[]});function D2(e){let o=Re,t=Mc.reduce((n,r)=>(n[r]="".concat(L.cssPrefix,"-").concat(r),n),{});return hc.forEach(n=>{(e.includes(t[n])||e.some(r=>L2[n].includes(r)))&&(o=n)}),o}function Rn(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=Re}=o,n=p2[t][e];if(t===An&&!e)return"fad";let r=Hs[t][e]||Hs[t][n],i=e in ht.styles?e:null;return r||i||null}function R2(e){let o=[],t=null;return e.forEach(n=>{let r=P2(L.cssPrefix,n);r?t=r:n&&o.push(n)}),{iconName:t,rest:o}}function Gs(e){return e.sort().filter((o,t,n)=>n.indexOf(o)===t)}function $n(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=o,n=null,r=Ar.concat(J1),i=Gs(e.filter(k=>r.includes(k))),c=Gs(e.filter(k=>!Ar.includes(k))),m=i.filter(k=>(n=k,!gc.includes(k))),[_=null]=m,x=D2(i),S=T(T({},R2(c)),{},{prefix:Rn(_,{family:x})});return T(T(T({},S),j2({values:e,family:x,styles:Do,config:L,canonical:S,givenPrefix:n})),$2(t,n,S))}function $2(e,o,t){let{prefix:n,iconName:r}=t;if(e||!n||!r)return{prefix:n,iconName:r};let i=o==="fa"?Oc(r):{},c=Ut(n,r);return r=i.iconName||c||r,n=i.prefix||n,n==="far"&&!Do.far&&Do.fas&&!L.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var N2=hc.filter(e=>e!==Re||e!==An),V2=Object.keys(Or).filter(e=>e!==Re).map(e=>Object.keys(Or[e])).flat();function j2(e){let{values:o,family:t,canonical:n,givenPrefix:r="",styles:i={},config:c={}}=e,m=t===An,_=o.includes("fa-duotone")||o.includes("fad"),x=c.familyDefault==="duotone",S=n.prefix==="fad"||n.prefix==="fa-duotone";if(!m&&(_||x||S)&&(n.prefix="fad"),(o.includes("fa-brands")||o.includes("fab"))&&(n.prefix="fab"),!n.prefix&&N2.includes(t)&&(Object.keys(i).find(I=>V2.includes(I))||c.autoFetchSvg)){let I=W1.get(t).defaultShortPrefixId;n.prefix=I,n.iconName=Ut(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||r==="fa")&&(n.prefix=Ot()||"fas"),n}var Hr=class{constructor(){this.definitions={}}add(){for(var o=arguments.length,t=new Array(o),n=0;n<o;n++)t[n]=arguments[n];let r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=T(T({},this.definitions[i]||{}),r[i]),Ur(i,r[i]);let c=ti[Re][i];c&&Ur(c,r[i]),Pc()})}reset(){this.definitions={}}_pullDefinitions(o,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(r=>{let{prefix:i,iconName:c,icon:m}=n[r],_=m[2];o[i]||(o[i]={}),_.length>0&&_.forEach(x=>{typeof x=="string"&&(o[i][x]=m)}),o[i][c]=m}),o}},Ys=[],_o={},xo={},U2=Object.keys(xo);function H2(e,o){let{mixoutsTo:t}=o;return Ys=e,_o={},Object.keys(xo).forEach(n=>{U2.indexOf(n)===-1&&delete xo[n]}),Ys.forEach(n=>{let r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(t[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(c=>{t[i]||(t[i]={}),t[i][c]=r[i][c]})}),n.hooks){let i=n.hooks();Object.keys(i).forEach(c=>{_o[c]||(_o[c]=[]),_o[c].push(i[c])})}n.provides&&n.provides(xo)}),t}function Wr(e,o){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];return(_o[e]||[]).forEach(c=>{o=c.apply(null,[o,...n])}),o}function Wt(e){for(var o=arguments.length,t=new Array(o>1?o-1:0),n=1;n<o;n++)t[n-1]=arguments[n];(_o[e]||[]).forEach(i=>{i.apply(null,t)})}function At(){let e=arguments[0],o=Array.prototype.slice.call(arguments,1);return xo[e]?xo[e].apply(null,o):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:o}=e,t=e.prefix||Ot();if(o)return o=Ut(t,o)||o,Ks(Dc.definitions,t,o)||Ks(ht.styles,t,o)}var Dc=new Hr,W2=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,Wt("noAuto")},K2={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return St?(Wt("beforeI2svg",e),At("pseudoElements2svg",e),At("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:o}=e;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,I2(()=>{G2({autoReplaceSvgRoot:o}),Wt("watch",e)})}},q2={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ut(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let o=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=Rn(e[0]);return{prefix:t,iconName:Ut(t,o)||o}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(u2))){let o=$n(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Ot(),iconName:Ut(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){let o=Ot();return{prefix:o,iconName:Ut(o,e)||e}}}},Xe={noAuto:W2,config:L,dom:K2,parse:q2,library:Dc,findIconDefinition:Kr,toHtml:$o},G2=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:o=me}=e;(Object.keys(ht.styles).length>0||L.autoFetchSvg)&&St&&L.autoReplaceSvg&&Xe.dom.i2svg({node:o})};function Nn(e,o){return Object.defineProperty(e,"abstract",{get:o}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>$o(t))}}),Object.defineProperty(e,"node",{get:function(){if(!St)return;let t=me.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Y2(e){let{children:o,main:t,mask:n,attributes:r,styles:i,transform:c}=e;if(ni(c)&&t.found&&!n.found){let{width:m,height:_}=t,x={x:m/_/2,y:.5};r.style=Dn(T(T({},i),{},{"transform-origin":"".concat(x.x+c.x/16,"em ").concat(x.y+c.y/16,"em")}))}return[{tag:"svg",attributes:r,children:o}]}function Q2(e){let{prefix:o,iconName:t,children:n,attributes:r,symbol:i}=e,c=i===!0?"".concat(o,"-").concat(L.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},r),{},{id:c}),children:n}]}]}function ai(e){let{icons:{main:o,mask:t},prefix:n,iconName:r,transform:i,symbol:c,title:m,maskId:_,titleId:x,extra:S,watchable:k=!1}=e,{width:I,height:W}=t.found?t:o,ne=Q1.includes(n),de=[L.replacementClass,r?"".concat(L.cssPrefix,"-").concat(r):""].filter(qt=>S.classes.indexOf(qt)===-1).filter(qt=>qt!==""||!!qt).concat(S.classes).join(" "),Ce={children:[],attributes:T(T({},S.attributes),{},{"data-prefix":n,"data-icon":r,class:de,role:S.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(W)})},qe=ne&&!~S.classes.indexOf("fa-fw")?{width:"".concat(I/W*16*.0625,"em")}:{};k&&(Ce.attributes[Ht]=""),m&&(Ce.children.push({tag:"title",attributes:{id:Ce.attributes["aria-labelledby"]||"title-".concat(x||Ao())},children:[m]}),delete Ce.attributes.title);let Ge=T(T({},Ce),{},{prefix:n,iconName:r,main:o,mask:t,maskId:_,transform:i,symbol:c,styles:T(T({},qe),S.styles)}),{children:tt,attributes:Kt}=t.found&&o.found?At("generateAbstractMask",Ge)||{children:[],attributes:{}}:At("generateAbstractIcon",Ge)||{children:[],attributes:{}};return Ge.children=tt,Ge.attributes=Kt,c?Q2(Ge):Y2(Ge)}function Qs(e){let{content:o,width:t,height:n,transform:r,title:i,extra:c,watchable:m=!1}=e,_=T(T(T({},c.attributes),i?{title:i}:{}),{},{class:c.classes.join(" ")});m&&(_[Ht]="");let x=T({},c.styles);ni(r)&&(x.transform=k2({transform:r,startCentered:!0,width:t,height:n}),x["-webkit-transform"]=x.transform);let S=Dn(x);S.length>0&&(_.style=S);let k=[];return k.push({tag:"span",attributes:_,children:[o]}),i&&k.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),k}function X2(e){let{content:o,title:t,extra:n}=e,r=T(T(T({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),i=Dn(n.styles);i.length>0&&(r.style=i);let c=[];return c.push({tag:"span",attributes:r,children:[o]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}var{styles:Br}=ht;function qr(e){let o=e[0],t=e[1],[n]=e.slice(4),r=null;return Array.isArray(n)?r={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(zr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(zr.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(zr.PRIMARY),fill:"currentColor",d:n[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:o,height:t,icon:r}}var Z2={found:!1,width:512,height:512};function J2(e,o){!xc&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(o,'" is missing.'))}function Gr(e,o){let t=o;return o==="fa"&&L.styleDefault!==null&&(o=Ot()),new Promise((n,r)=>{if(t==="fa"){let i=Oc(e)||{};e=i.iconName||e,o=i.prefix||o}if(e&&o&&Br[o]&&Br[o][e]){let i=Br[o][e];return n(qr(i))}J2(e,o),n(T(T({},Z2),{},{icon:L.showMissingIcons&&e?At("missingIconAbstract")||{}:{}}))})}var Xs=()=>{},Yr=L.measurePerformance&&zn&&zn.mark&&zn.measure?zn:{mark:Xs,measure:Xs},Bo='FA "6.7.2"',eu=e=>(Yr.mark("".concat(Bo," ").concat(e," begins")),()=>Rc(e)),Rc=e=>{Yr.mark("".concat(Bo," ").concat(e," ends")),Yr.measure("".concat(Bo," ").concat(e),"".concat(Bo," ").concat(e," begins"),"".concat(Bo," ").concat(e," ends"))},li={begin:eu,end:Rc},Ln=()=>{};function Zs(e){return typeof(e.getAttribute?e.getAttribute(Ht):null)=="string"}function tu(e){let o=e.getAttribute?e.getAttribute(Jr):null,t=e.getAttribute?e.getAttribute(ei):null;return o&&t}function ou(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function nu(){return L.autoReplaceSvg===!0?Bn.replace:Bn[L.autoReplaceSvg]||Bn.replace}function ru(e){return me.createElementNS("http://www.w3.org/2000/svg",e)}function iu(e){return me.createElement(e)}function $c(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?ru:iu}=o;if(typeof e=="string")return me.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){n.appendChild($c(i,{ceFn:t}))}),n}function au(e){let o=" ".concat(e.outerHTML," ");return o="".concat(o,"Font Awesome fontawesome.com "),o}var Bn={replace:function(e){let o=e[0];if(o.parentNode)if(e[1].forEach(t=>{o.parentNode.insertBefore($c(t),o)}),o.getAttribute(Ht)===null&&L.keepOriginalSource){let t=me.createComment(au(o));o.parentNode.replaceChild(t,o)}else o.remove()},nest:function(e){let o=e[0],t=e[1];if(~oi(o).indexOf(L.replacementClass))return Bn.replace(e);let n=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let i=t[0].attributes.class.split(" ").reduce((c,m)=>(m===L.replacementClass||m.match(n)?c.toSvg.push(m):c.toNode.push(m),c),{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?o.removeAttribute("class"):o.setAttribute("class",i.toNode.join(" "))}let r=t.map(i=>$o(i)).join(`
`);o.setAttribute(Ht,""),o.innerHTML=r}};function Js(e){e()}function Nc(e,o){let t=typeof o=="function"?o:Ln;if(e.length===0)t();else{let n=Js;L.mutateApproach===c2&&(n=Pt.requestAnimationFrame||Js),n(()=>{let r=nu(),i=li.begin("mutate");e.map(r),i(),t()})}}var si=!1;function Vc(){si=!0}function Qr(){si=!1}var On=null;function ec(e){if(!Ns||!L.observeMutations)return;let{treeCallback:o=Ln,nodeCallback:t=Ln,pseudoElementsCallback:n=Ln,observeMutationsRoot:r=me}=e;On=new Ns(i=>{if(si)return;let c=Ot();Co(i).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!Zs(m.addedNodes[0])&&(L.searchPseudoElements&&n(m.target),o(m.target)),m.type==="attributes"&&m.target.parentNode&&L.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&Zs(m.target)&&~g2.indexOf(m.attributeName))if(m.attributeName==="class"&&tu(m.target)){let{prefix:_,iconName:x}=$n(oi(m.target));m.target.setAttribute(Jr,_||c),x&&m.target.setAttribute(ei,x)}else ou(m.target)&&t(m.target)})}),St&&On.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function lu(){On&&On.disconnect()}function su(e){let o=e.getAttribute("style"),t=[];return o&&(t=o.split(";").reduce((n,r)=>{let i=r.split(":"),c=i[0],m=i.slice(1);return c&&m.length>0&&(n[c]=m.join(":").trim()),n},{})),t}function cu(e){let o=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=$n(oi(e));return r.prefix||(r.prefix=Ot()),o&&t&&(r.prefix=o,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=O2(r.prefix,e.innerText)||ii(r.prefix,jr(e.innerText))),!r.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function du(e){let o=Co(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),t=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return L.autoA11y&&(t?o["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(n||Ao()):(o["aria-hidden"]="true",o.focusable="false")),o}function pu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function tc(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:n,rest:r}=cu(e),i=du(e),c=Wr("parseNodeAttributes",{},e),m=o.styleParser?su(e):[];return T({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:gt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:m,attributes:i}},c)}var{styles:uu}=ht;function jc(e){let o=L.autoReplaceSvg==="nest"?tc(e,{styleParser:!1}):tc(e);return~o.extra.classes.indexOf(Cc)?At("generateLayersText",e,o):At("generateSvgReplacementMutation",e,o)}function mu(){return[...q1,...Ar]}function oc(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!St)return Promise.resolve();let t=me.documentElement.classList,n=S=>t.add("".concat(Us,"-").concat(S)),r=S=>t.remove("".concat(Us,"-").concat(S)),i=L.autoFetchSvg?mu():gc.concat(Object.keys(uu));i.includes("fa")||i.push("fa");let c=[".".concat(Cc,":not([").concat(Ht,"])")].concat(i.map(S=>".".concat(S,":not([").concat(Ht,"])"))).join(", ");if(c.length===0)return Promise.resolve();let m=[];try{m=Co(e.querySelectorAll(c))}catch{}if(m.length>0)n("pending"),r("complete");else return Promise.resolve();let _=li.begin("onTree"),x=m.reduce((S,k)=>{try{let I=jc(k);I&&S.push(I)}catch(I){xc||I.name==="MissingIcon"&&console.error(I)}return S},[]);return new Promise((S,k)=>{Promise.all(x).then(I=>{Nc(I,()=>{n("active"),n("complete"),r("pending"),typeof o=="function"&&o(),_(),S()})}).catch(I=>{_(),k(I)})})}function fu(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jc(e).then(t=>{t&&Nc([t],o)})}function gu(e){return function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(o||{}).icon?o:Kr(o||{}),{mask:r}=t;return r&&(r=(r||{}).icon?r:Kr(r||{})),e(n,T(T({},t),{},{mask:r}))}}var hu=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=gt,symbol:n=!1,mask:r=null,maskId:i=null,title:c=null,titleId:m=null,classes:_=[],attributes:x={},styles:S={}}=o;if(!e)return;let{prefix:k,iconName:I,icon:W}=e;return Nn(T({type:"icon"},e),()=>(Wt("beforeDOMElementCreation",{iconDefinition:e,params:o}),L.autoA11y&&(c?x["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(m||Ao()):(x["aria-hidden"]="true",x.focusable="false")),ai({icons:{main:qr(W),mask:r?qr(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:I,transform:T(T({},gt),t),symbol:n,title:c,maskId:i,titleId:m,extra:{attributes:x,styles:S,classes:_}})))},bu={mixout(){return{icon:gu(hu)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=oc,e.nodeCallback=fu,e}}},provides(e){e.i2svg=function(o){let{node:t=me,callback:n=()=>{}}=o;return oc(t,n)},e.generateSvgReplacementMutation=function(o,t){let{iconName:n,title:r,titleId:i,prefix:c,transform:m,symbol:_,mask:x,maskId:S,extra:k}=t;return new Promise((I,W)=>{Promise.all([Gr(n,c),x.iconName?Gr(x.iconName,x.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(ne=>{let[de,Ce]=ne;I([o,ai({icons:{main:de,mask:Ce},prefix:c,iconName:n,transform:m,symbol:_,maskId:S,title:r,titleId:i,extra:k,watchable:!0})])}).catch(W)})},e.generateAbstractIcon=function(o){let{children:t,attributes:n,main:r,transform:i,styles:c}=o,m=Dn(c);m.length>0&&(n.style=m);let _;return ni(i)&&(_=At("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(_||r.icon),{children:t,attributes:n}}}},vu={mixout(){return{layer(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=o;return Nn({type:"layer"},()=>{Wt("beforeDOMElementCreation",{assembler:e,params:o});let n=[];return e(r=>{Array.isArray(r)?r.map(i=>{n=n.concat(i.abstract)}):n=n.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...t].join(" ")},children:n}]})}}}},_u={mixout(){return{counter(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:n=[],attributes:r={},styles:i={}}=o;return Nn({type:"counter",content:e},()=>(Wt("beforeDOMElementCreation",{content:e,params:o}),X2({content:e.toString(),title:t,extra:{attributes:r,styles:i,classes:["".concat(L.cssPrefix,"-layers-counter"),...n]}})))}}}},xu={mixout(){return{text(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=gt,title:n=null,classes:r=[],attributes:i={},styles:c={}}=o;return Nn({type:"text",content:e},()=>(Wt("beforeDOMElementCreation",{content:e,params:o}),Qs({content:e,transform:T(T({},gt),t),title:n,extra:{attributes:i,styles:c,classes:["".concat(L.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(o,t){let{title:n,transform:r,extra:i}=t,c=null,m=null;if(mc){let _=parseInt(getComputedStyle(o).fontSize,10),x=o.getBoundingClientRect();c=x.width/_,m=x.height/_}return L.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([o,Qs({content:o.innerHTML,width:c,height:m,transform:r,title:n,extra:i,watchable:!0})])}}},yu=new RegExp('"',"ug"),nc=[1105920,1112319],rc=T(T(T(T({},{FontAwesome:{normal:"fas",400:"fas"}}),H1),l2),e2),Xr=Object.keys(rc).reduce((e,o)=>(e[o.toLowerCase()]=rc[o],e),{}),Cu=Object.keys(Xr).reduce((e,o)=>{let t=Xr[o];return e[o]=t[900]||[...Object.entries(t)][0][1],e},{});function wu(e){let o=e.replace(yu,""),t=z2(o,0),n=t>=nc[0]&&t<=nc[1],r=o.length===2?o[0]===o[1]:!1;return{value:jr(r?o[0]:o),isSecondary:n||r}}function ku(e,o){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(o),r=isNaN(n)?"normal":n;return(Xr[t]||{})[r]||Cu[t]}function ic(e,o){let t="".concat(s2).concat(o.replace(":","-"));return new Promise((n,r)=>{if(e.getAttribute(t)!==null)return n();let c=Co(e.children).filter(I=>I.getAttribute(Rr)===o)[0],m=Pt.getComputedStyle(e,o),_=m.getPropertyValue("font-family"),x=_.match(m2),S=m.getPropertyValue("font-weight"),k=m.getPropertyValue("content");if(c&&!x)return e.removeChild(c),n();if(x&&k!=="none"&&k!==""){let I=m.getPropertyValue("content"),W=ku(_,S),{value:ne,isSecondary:de}=wu(I),Ce=x[0].startsWith("FontAwesome"),qe=ii(W,ne),Ge=qe;if(Ce){let tt=A2(ne);tt.iconName&&tt.prefix&&(qe=tt.iconName,W=tt.prefix)}if(qe&&!de&&(!c||c.getAttribute(Jr)!==W||c.getAttribute(ei)!==Ge)){e.setAttribute(t,Ge),c&&e.removeChild(c);let tt=pu(),{extra:Kt}=tt;Kt.attributes[Rr]=o,Gr(qe,W).then(qt=>{let x0=ai(T(T({},tt),{},{icons:{main:qt,mask:Ac()},prefix:W,iconName:Ge,extra:Kt,watchable:!0})),cr=me.createElementNS("http://www.w3.org/2000/svg","svg");o==="::before"?e.insertBefore(cr,e.firstChild):e.appendChild(cr),cr.outerHTML=x0.map(y0=>$o(y0)).join(`
`),e.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function Su(e){return Promise.all([ic(e,"::before"),ic(e,"::after")])}function Tu(e){return e.parentNode!==document.head&&!~d2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ac(e){if(St)return new Promise((o,t)=>{let n=Co(e.querySelectorAll("*")).filter(Tu).map(Su),r=li.begin("searchPseudoElements");Vc(),Promise.all(n).then(()=>{r(),Qr(),o()}).catch(()=>{r(),Qr(),t()})})}var Iu={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=ac,e}}},provides(e){e.pseudoElements2svg=function(o){let{node:t=me}=o;L.searchPseudoElements&&ac(t)}}},lc=!1,Mu={mixout(){return{dom:{unwatch(){Vc(),lc=!0}}}},hooks(){return{bootstrap(){ec(Wr("mutationObserverCallbacks",{}))},noAuto(){lu()},watch(e){let{observeMutationsRoot:o}=e;lc?Qr():ec(Wr("mutationObserverCallbacks",{observeMutationsRoot:o}))}}}},sc=e=>{let o={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,n)=>{let r=n.toLowerCase().split("-"),i=r[0],c=r.slice(1).join("-");if(i&&c==="h")return t.flipX=!0,t;if(i&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(i){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},o)},Eu={mixout(){return{parse:{transform:e=>sc(e)}}},hooks(){return{parseNodeAttributes(e,o){let t=o.getAttribute("data-fa-transform");return t&&(e.transform=sc(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(o){let{main:t,transform:n,containerWidth:r,iconWidth:i}=o,c={transform:"translate(".concat(r/2," 256)")},m="translate(".concat(n.x*32,", ").concat(n.y*32,") "),_="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),x="rotate(".concat(n.rotate," 0 0)"),S={transform:"".concat(m," ").concat(_," ").concat(x)},k={transform:"translate(".concat(i/2*-1," -256)")},I={outer:c,inner:S,path:k};return{tag:"g",attributes:T({},I.outer),children:[{tag:"g",attributes:T({},I.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:T(T({},t.icon.attributes),I.path)}]}]}}}},Pr={x:0,y:0,width:"100%",height:"100%"};function cc(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||o)&&(e.attributes.fill="black"),e}function zu(e){return e.tag==="g"?e.children:[e]}var Fu={hooks(){return{parseNodeAttributes(e,o){let t=o.getAttribute("data-fa-mask"),n=t?$n(t.split(" ").map(r=>r.trim())):Ac();return n.prefix||(n.prefix=Ot()),e.mask=n,e.maskId=o.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(o){let{children:t,attributes:n,main:r,mask:i,maskId:c,transform:m}=o,{width:_,icon:x}=r,{width:S,icon:k}=i,I=w2({transform:m,containerWidth:S,iconWidth:_}),W={tag:"rect",attributes:T(T({},Pr),{},{fill:"white"})},ne=x.children?{children:x.children.map(cc)}:{},de={tag:"g",attributes:T({},I.inner),children:[cc(T({tag:x.tag,attributes:T(T({},x.attributes),I.path)},ne))]},Ce={tag:"g",attributes:T({},I.outer),children:[de]},qe="mask-".concat(c||Ao()),Ge="clip-".concat(c||Ao()),tt={tag:"mask",attributes:T(T({},Pr),{},{id:qe,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[W,Ce]},Kt={tag:"defs",children:[{tag:"clipPath",attributes:{id:Ge},children:zu(k)},tt]};return t.push(Kt,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(Ge,")"),mask:"url(#".concat(qe,")")},Pr)}),{children:t,attributes:n}}}},Lu={provides(e){let o=!1;Pt.matchMedia&&(o=Pt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:T(T({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=T(T({},r),{},{attributeName:"opacity"}),c={tag:"circle",attributes:T(T({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return o||c.children.push({tag:"animate",attributes:T(T({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:T(T({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:o?[]:[{tag:"animate",attributes:T(T({},i),{},{values:"1;0;0;0;0;1;"})}]}),o||t.push({tag:"path",attributes:T(T({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Bu={hooks(){return{parseNodeAttributes(e,o){let t=o.getAttribute("data-fa-symbol"),n=t===null?!1:t===""?!0:t;return e.symbol=n,e}}}},Pu=[T2,bu,vu,_u,xu,Iu,Mu,Eu,Fu,Lu,Bu];H2(Pu,{mixoutsTo:Xe});var Zb=Xe.noAuto,Uc=Xe.config,Jb=Xe.library,Hc=Xe.dom,Wc=Xe.parse,e7=Xe.findIconDefinition,t7=Xe.toHtml,Kc=Xe.icon,o7=Xe.layer,Ou=Xe.text,Au=Xe.counter;var Du=["*"],Ru=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},$u=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Gc=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),Nu=e=>{let o=Gc(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:o,"fa-rotate-by":e.rotate!=null&&!o,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(n=>t[n]?n:null).filter(n=>n)},ci=new WeakSet,qc="fa-auto-css";function Vu(e,o){if(!o.autoAddCss||ci.has(e))return;if(e.getElementById(qc)!=null){o.autoAddCss=!1,ci.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",qc),t.innerHTML=Hc.css();let n=e.head.childNodes,r=null;for(let i=n.length-1;i>-1;i--){let c=n[i],m=c.nodeName.toUpperCase();["STYLE","LINK"].indexOf(m)>-1&&(r=c)}e.head.insertBefore(t,r),o.autoAddCss=!1,ci.add(e)}var ju=e=>e.prefix!==void 0&&e.iconName!==void 0,Uu=(e,o)=>ju(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:o,iconName:e},Hu=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(t){Uc.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Wu=(()=>{class e{constructor(){this.definitions={}}addIcons(...t){for(let n of t){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let r of n.icon[2])typeof r=="string"&&(this.definitions[n.prefix][r]=n)}}addIconPacks(...t){for(let n of t){let r=Object.keys(n).map(i=>n[i]);this.addIcons(...r)}}getIconDefinition(t,n){return t in this.definitions&&n in this.definitions[t]?this.definitions[t][n]:null}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ku=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=Qo({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[Yt]})}}return e})(),qu=(()=>{class e{constructor(t,n){this.renderer=t,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}static{this.\u0275fac=function(n){return new(n||e)(z(qo),z(Ko))}}static{this.\u0275cmp=E({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},features:[Yt],ngContentSelectors:Du,decls:1,vars:0,template:function(n,r){n&1&&(Ee(),we(0))},encapsulation:2})}}return e})(),Yc=(()=>{class e{constructor(t,n,r,i,c){this.sanitizer=t,this.config=n,this.iconLibrary=r,this.stackItem=i,this.document=X(Qt),c!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){$u();return}if(t){let n=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(n!=null){let r=this.buildParams();Vu(this.document,this.config);let i=Kc(n,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(t){let n=Uu(t,this.config.defaultPrefix);if("icon"in n)return n;let r=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return r??(Ru(n),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?Wc.transform(this.transform):this.transform,r={};return t.rotate!=null&&!Gc(t.rotate)&&(r["--fa-rotate-angle"]=`${t.rotate}`),{title:this.title,transform:n,classes:Nu(t),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:r}}static{this.\u0275fac=function(n){return new(n||e)(z(Di),z(Hu),z(Wu),z(Ku,8),z(qu,8))}}static{this.\u0275cmp=E({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,r){n&2&&(Ei("innerHTML",r.renderedIconHTML,Ve),D("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[Yt],decls:0,vars:0,template:function(n,r){},encapsulation:2})}}return e})();var Qc=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=be({type:e})}static{this.\u0275inj=he({})}}return e})();var Xc={prefix:"far",iconName:"file-powerpoint",icon:[384,512,[],"f1c4","M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z"]};var Vn=class e{constructor(o,t){this.http=o;this.apiKeyService=t}openRouterApiUrl="https://openrouter.ai/api/v1/chat/completions";docxPrompt=`You are a document formatting assistant. 
You will be provided two inputs in HTML format:
1. An English HTML document that contains unique identifiers for each text segment (e.g., <p id="P1">, <p id="P2">).
2. A block of French text that is the translation of the English document.

Your task: return the French document in HTML format such that:
1. All English text is replaced with its correct French translation.
2. The HTML structure (tags, attributes, order) remains unchanged.
3. Each text element retains its original unique ID.
Do not add extra commentary or leftover English text.`;pptxPrompt=`You are a presentation formatting assistant. 
Inputs:
1. English HTML containing IDs like S3_T1, S3_T2.
2. A block of French text.

Your task: 
1. Replace the English text with correct French translation.
2. Preserve the same HTML structure and unique IDs.
3. If the French text is one paragraph but the English input is split into multiple segments, split it appropriately.
Return only the French HTML document.`;alignTranslation(o,t,n){return Y(this,null,function*(){o=o.replace(/<img[^>]*>/g,"");let i=n?.name.split(".").pop()?.toLowerCase()==="pptx"?this.pptxPrompt:this.docxPrompt,c=`${i}

English Document (HTML):
${o}

French Text:
${t}

Return the French document in HTML format that exactly follows the structure of the English document.`,m=[{role:"system",content:i},{role:"user",content:c}],_=["meta-llama/llama-3.3-70b-instruct:free","google/gemini-2.0-flash-exp:free","google/gemini-exp-1206:free","cognitivecomputations/dolphin3.0-mistral-24b:free","cognitivecomputations/dolphin3.0-r1-mistral-24b:free","nvidia/llama-3.1-nemotron-70b-instruct:free","deepseek/deepseek-r1:free"],x=null;for(let S of _){let k=yield this.getORData(S,m,0);if(k?.choices?.[0]?.message?.content){x=this.removeCodeFences(k.choices[0].message.content),console.log("AI response received.");break}}return x})}getORData(o,t,n=0){return Y(this,null,function*(){let r=this.apiKeyService.getCurrentKey();if(!r)throw new Error("API key is required.");let i=new Nt({Authorization:`Bearer ${r}`,"Content-Type":"application/json",Accept:"application/json","X-Title":"Content Assistant"}),c={model:o,messages:t,temperature:n};try{let m=yield this.http.post(this.openRouterApiUrl,c,{headers:i,responseType:"text",observe:"response"}).toPromise(),_=m?.headers.get("content-type")||"";if(_.includes("application/json"))return JSON.parse(m.body);console.error(`OpenRouter non-JSON (status ${m?.status}, ${_}):
`,(m?.body||"").slice(0,500));return}catch(m){let _=m?.status,x=typeof m?.error=="string"?m.error.slice(0,500):JSON.stringify(m?.error);console.error(`OpenRouter HTTP error (model: ${o}) status=${_}: ${x}`);return}})}removeCodeFences(o){return o=o.replace(/^```.*\n/,""),o=o.replace(/\n\s*```+\s*$/,""),o.trim()}buildFrenchTextMap(o){let t=document.createElement("div");t.innerHTML=o;let n={};return t.querySelectorAll("p[id]").forEach(r=>{let i=r.getAttribute("id"),c=r.textContent?.trim()||"";c&&(n[i]=c)}),n}static \u0275fac=function(t){return new(t||e)(ze(st),ze(Ke))};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var jn=class e{extractDocxParagraphs(o){return Y(this,null,function*(){let r=yield(yield(yield import("./chunk-EDBLHBZ3.js")).default.loadAsync(o)).file("word/document.xml").async("string"),c=new DOMParser().parseFromString(r,"application/xml"),m=Array.from(c.getElementsByTagName("w:p")),_=[];return m.forEach(x=>{let S=Array.from(x.getElementsByTagName("w:t")).map(k=>k.textContent||"").join("");S.trim()&&_.push(S.trim())}),_.join(`

`)})}extractPptxText(o){return Y(this,null,function*(){let n=yield(yield import("./chunk-EDBLHBZ3.js")).default.loadAsync(o),r=Object.keys(n.files).filter(c=>/^ppt\/slides\/slide\d+\.xml$/i.test(c)),i=[];for(let c of r){let m=yield n.file(c).async("string"),_=new DOMParser().parseFromString(m,"application/xml"),x=c.match(/slide(\d+)\.xml$/i)[1],S=Array.from(_.getElementsByTagName("a:p"));for(let k of S){let I="",W=Array.from(k.getElementsByTagName("a:t"));for(let ne of W){if((ne.textContent?.trim()??"")===x)continue;let Ce=ne.parentNode,qe=!1;for(;Ce;){if(Ce instanceof Element&&Ce.localName==="fld"&&Ce.getAttribute("type")==="slidenum"){qe=!0;break}Ce=Ce.parentNode}qe||(I+=ne.textContent??"")}I.trim()&&i.push(I.trim())}}return i.join(`

`)})}extractDocxTextXmlWithId(o){return Y(this,null,function*(){let r=yield(yield(yield import("./chunk-EDBLHBZ3.js")).default.loadAsync(o)).file("word/document.xml").async("string"),i=new DOMParser().parseFromString(r,"application/xml"),c=Array.from(i.getElementsByTagName("w:p")),m=[],_=1;for(let x of c){let S=Array.from(x.getElementsByTagName("w:t")).map(I=>(I.textContent||"").trim());if(!S.join("").trim()){_++;continue}let k=1;for(let I of S)I&&m.push({id:`P${_}_R${k}`,text:I}),k++;_++}return m})}extractPptxTextXmlWithId(o){return Y(this,null,function*(){let n=yield(yield import("./chunk-EDBLHBZ3.js")).default.loadAsync(o),r=Object.keys(n.files).filter(c=>/^ppt\/slides\/slide(\d+)\.xml$/.test(c)),i=[];for(let c of r){let m=c.match(/\d+/)[0],_=yield n.file(c).async("string"),x=new DOMParser().parseFromString(_,"application/xml");Array.from(x.getElementsByTagName("a:r")).filter(k=>k.getElementsByTagName("a:t").length).forEach((k,I)=>{let W=k.getElementsByTagName("a:t")[0].textContent||"";i.push({id:`S${m}_T${I+1}`,text:W.trim()})})}return i})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var Xu=(e,o)=>({"pi-plus":e,"pi-minus":o});function Zu(e,o){e&1&&w(0,"i",18)}function Ju(e,o){if(e&1&&w(0,"fa-icon",19),e&2){let t=p(2);d("icon",t.faFilePowerpoint)}}function em(e,o){if(e&1&&(N(0),l(1,"p",15),f(2,Zu,1,0,"i",16)(3,Ju,1,1,"fa-icon",17),u(4),s(),V()),e&2){let t=p();a(2),d("ngIf",t.isDocx(t.selectedFile)),a(),d("ngIf",t.isPptx(t.selectedFile)),a(),B(" ",t.selectedFile.name," ")}}function tm(e,o){e&1&&(w(0,"i",20),l(1,"p",21),u(2," Drag and drop .docx or .pptx source language file here. "),s())}function om(e,o){if(e&1&&(l(0,"div",31)(1,"span"),u(2),s()()),e&2){let t=p(2);a(2),C(t.previewText)}}function nm(e,o){if(e&1){let t=M();l(0,"div",22)(1,"div",23)(2,"div",24),y("click",function(){b(t);let r=p();return v(r.isExpanded=!r.isExpanded)}),l(3,"div",25),w(4,"i",26),l(5,"span",27),u(6,"Preview source language file"),s()(),l(7,"button",28),y("click",function(r){b(t);let i=p();return v(i.copyAll(r))}),w(8,"span",29),s()(),f(9,om,3,1,"div",30),s()()}if(e&2){let t=p();a(4),d("ngClass",_t(2,Xu,!t.isExpanded,t.isExpanded)),a(5),d("ngIf",t.isExpanded)}}function rm(e,o){if(e&1){let t=M();l(0,"div",32)(1,"p-card")(2,"h2",33),u(3,"Paste target language content"),s(),l(4,"p"),u(5," Paste the full translation of the uploaded source content into the box below. "),s(),l(6,"textarea",34),ee("ngModelChange",function(r){b(t);let i=p();return J(i.frenchText,r)||(i.frenchText=r),v(r)}),s(),l(7,"div",10)(8,"button",35),y("click",function(){b(t);let r=p();return v(r.onFormatTargetLanguageContent())}),s()()()()}if(e&2){let t=p();a(6),Z("ngModel",t.frenchText)}}function im(e,o){e&1&&(l(0,"div",36),w(1,"p-progressSpinner",37),l(2,"p",38),u(3,"Generating files..."),s()())}function am(e,o){if(e&1){let t=M();l(0,"div",32)(1,"p-card")(2,"h2",33),u(3,"Formatting complete"),s(),l(4,"p"),u(5," The translated file has been formatted to match the original layout and is ready for download. "),s(),l(6,"div",10)(7,"button",39),y("click",function(){b(t);let r=p();return v(r.onDownloadFile())}),s()()()()}}var Un=class e{constructor(o,t,n,r,i){this.apiKeyService=o;this.translationService=t;this.router=n;this.route=r;this.parseSrv=i}isExpanded=!1;isDragging=!1;selectedFile=null;previewText="";previewVisible=!1;showSecondUpload=!1;showDownloadSection=!1;isProcessing=!1;frenchText="";englishHtmlStored="";finalFrenchHtml="";sourceError="";faFilePowerpoint=Xc;onClear(){this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigate([this.router.url]))}ngOnInit(){this.route.queryParams.subscribe(o=>{let t=o.key;t&&this.apiKeyService.setKey(t)})}onFileSelected(o){this.previewText="",this.showSecondUpload=!1,this.sourceError="";let t=o.target;this.selectedFile=t.files?.[0]??null,this.selectedFile&&this.buildEnglishHtmlStored(this.selectedFile).catch(console.error)}isDocx(o){return o.name.toLowerCase().endsWith(".docx")}isPptx(o){return o.name.toLowerCase().endsWith(".pptx")}onDragOver(o){o.preventDefault(),this.isDragging=!0}onDragLeave(o){o.preventDefault(),this.isDragging=!1}onDrop(o){if(o.preventDefault(),this.isDragging=!1,o.dataTransfer?.files.length){let t=o.dataTransfer.files[0];t.name.endsWith(".docx")||t.name.endsWith(".pptx")?(this.selectedFile=t,this.previewText="",this.showSecondUpload=!1,this.sourceError="",this.buildEnglishHtmlStored(this.selectedFile).catch(console.error),this.previewSource()):this.sourceError="Only .docx or .pptx files are supported."}}previewSource(){return Y(this,null,function*(){if(!this.selectedFile){this.sourceError="Please select a file first.";return}let o=yield this.selectedFile.arrayBuffer(),t=this.selectedFile.name.split(".").pop()?.toLowerCase();try{t==="docx"?this.previewText=yield this.parseSrv.extractDocxParagraphs(o):t==="pptx"?this.previewText=yield this.parseSrv.extractPptxText(o):this.sourceError="Only .docx or .pptx files are supported.",this.showSecondUpload=!0}catch(n){console.error(n),this.sourceError="Failed to extract text for preview."}})}copyAll(o){o.stopPropagation();let t=this.previewText.trim();if(!t){alert("There is no text to copy!");return}if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).catch(n=>{console.error("Failed to copy: ",n),alert("Failed to copy text.")});else{let n=document.createElement("textarea");n.style.position="fixed",n.style.opacity="0",n.value=t,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(r){console.error("Fallback: Unable to copy",r),alert("Failed to copy text.")}document.body.removeChild(n)}}onFormatTargetLanguageContent(){return Y(this,null,function*(){if(!this.frenchText.trim()){alert("Please paste your translation first.");return}this.isProcessing=!0,this.showDownloadSection=!1;try{let o=yield this.translationService.alignTranslation(this.englishHtmlStored,this.frenchText,this.selectedFile);if(!o){alert("Formatting failed. No response from API.");return}this.finalFrenchHtml=o,console.log("Final French HTML:",this.finalFrenchHtml),this.showDownloadSection=!0}catch(o){console.error("Error during formatting:",o),alert("An error occurred while formatting.")}finally{this.isProcessing=!1}})}onDownloadFile(){return Y(this,null,function*(){if(!this.finalFrenchHtml||!this.finalFrenchHtml.trim()){alert("No formatted French document available.");return}let o=this.selectedFile?.name.split(".").pop()?.toLowerCase(),t="application/vnd.openxmlformats-officedocument.wordprocessingml.document";o==="pptx"&&(t="application/vnd.openxmlformats-officedocument.presentationml.presentation");try{let n=yield this.selectedFile?.arrayBuffer();if(!n)throw new Error("Failed to read the source file.");let i=yield(yield import("./chunk-EDBLHBZ3.js")).default.loadAsync(n);if(o==="docx"){let S=yield i.file("word/document.xml")?.async("string");if(!S)throw new Error("Missing document.xml in DOCX file.");let k=yield this.extractDocxTextXmlWithId(n),I=this.aggregateDocxMapping(k),W=this.conversionDocxXmlModified(S,this.finalFrenchHtml,I);i.file("word/document.xml",W)}else if(o==="pptx"){let S=/^ppt\/slides\/slide(\d+)\.xml$/i;for(let k of Object.keys(i.files)){let I=S.exec(k);if(I){let W=I[1],ne=yield i.file(k)?.async("string");if(ne){let de=this.conversionPptxXml(ne,this.finalFrenchHtml,W);i.file(k,de)}}}}let c=yield i.generateAsync({type:"blob",mimeType:t}),_=`${this.selectedFile?.name.split(".").slice(0,-1).join(".")||"translated-file"}-FR.${o}`,x=document.createElement("a");x.href=URL.createObjectURL(c),x.download=_,x.click(),URL.revokeObjectURL(x.href)}catch(n){console.error("Error generating download file:",n),alert("Failed to generate the translated file.")}})}extractDocxTextXmlWithId(o){return Y(this,null,function*(){let r=yield(yield(yield import("./chunk-EDBLHBZ3.js")).default.loadAsync(o)).file("word/document.xml")?.async("string"),m=new DOMParser().parseFromString(r,"application/xml").getElementsByTagName("w:p"),_=[],x=1;for(let S of m){let k=S.getElementsByTagName("w:r");if(k.length===0)continue;let I=1;for(let W of k){let ne=W.getElementsByTagName("w:t");for(let de of ne){let Ce=`P${x}_R${I++}`;_.push({id:Ce,text:de.textContent||""})}}x++}return _})}aggregateDocxMapping(o){let t={};return o.forEach(n=>{let r=n.id.split("_")[0];t[r]||(t[r]={id:r,texts:[]}),t[r].texts.push(n.text)}),Object.values(t).map(n=>{let r=n.texts.join("").replace(/\s+/g," ").trim();return{id:n.id,text:r}})}buildEnglishHtmlStored(o){return Y(this,null,function*(){let t=yield o.arrayBuffer(),n=o.name.split(".").pop()?.toLowerCase();if(n==="docx"){let r=yield this.extractDocxTextXmlWithId(t),i=this.aggregateDocxMapping(r);this.englishHtmlStored=i.map(c=>`<p id="${c.id}">${c.text}</p>`).join("")}else if(n==="pptx"){let r=yield this.parseSrv.extractPptxTextXmlWithId(t);this.englishHtmlStored=r.map(i=>`<p id="${i.id}">${i.text}</p>`).join("")}else this.englishHtmlStored="";console.log("englishHtmlStored sample:",this.englishHtmlStored.slice(0,200))})}conversionDocxXmlModified(o,t,n){let r=this.buildFrenchTextMap(t),i=new DOMParser,c=new XMLSerializer,m=i.parseFromString(o,"application/xml"),_=m.getElementsByTagName("w:p"),x=0;for(let S of _){if(x>=n.length)break;let k=S.getElementsByTagName("w:t");if(k.length>0&&k[0].textContent?.trim()){let I=n[x].id;if(r[I]){k[0].textContent=r[I];let W=k[0];W.getAttribute("xml:space")||W.setAttribute("xml:space","preserve");for(let ne=1;ne<k.length;ne++)k[ne].textContent=""}x++}}return c.serializeToString(m)}conversionPptxXml(o,t,n){let r=this.buildFrenchTextMap(t),i={},c=1;return o.replace(/(<a:r>[\s\S]*?<a:t>)([\s\S]*?)(<\/a:t>[\s\S]*?<\/a:r>)/g,(m,_,x,S)=>{let k=`S${n}_T${c++}`,I=(x||"").trim(),W=r[k],ne="";if(W!==void 0){let de=W.trim();ne=de,I&&de!==I&&(i[I]=de)}else i[I]?ne=i[I]:/^\s*[\d.,-]+\s*$/.test(I)?ne=I:ne="";if(ne&&/<a:rPr[^>]*\sb="1"/.test(_)){let de=ne.trim();de.split(/\s+/).length>2||de.startsWith(" ")||(de=" "+de),de.endsWith(" ")||(de+=" "),ne=de}return _+this.escapeXml(ne)+S})}buildFrenchTextMap(o){let t=document.createElement("div");t.innerHTML=o;let n=t.querySelectorAll("p[id]"),r={};return n.forEach(i=>{let c=i.getAttribute("id");c&&(r[c]=i.textContent?.trim()||"")}),r}escapeXml(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}static \u0275fac=function(t){return new(t||e)(z(Ke),z(Vn),z(Je),z(Xt),z(jn))};static \u0275cmp=E({type:e,selectors:[["app-translation-assistant"]],decls:21,vars:7,consts:[["fileInput",""],["dragArea",""],[1,"p-mb-3"],[1,"p-text-bold"],[1,"surface-100","border-round","shadow-3","p-4","max-w-3xl","mx-auto"],[1,"p-mb-4"],[1,"p-m-0","p-text-bold","p-text-2xl",2,"color","black"],[1,"flex","flex-column","align-items-center","justify-content-center","p-3","border-dashed","border-round","border-200","surface-100","hover:surface-200","hover:border-primary-400","transition-colors","transition-duration-300","cursor-pointer","w-full","max-w-30rem","min-h-12rem",3,"click","dragover","dragleave","drop"],["type","file","accept",".docx,.pptx",2,"display","none",3,"change"],[4,"ngIf","ngIfElse"],[1,"flex","gap-2","mt-3"],["pButton","","type","button","label","Upload file","icon","pi pi-upload",1,"p-button","p-component","p-button-primary",3,"click","disabled"],["class","mt-3",4,"ngIf"],["class","surface-100 border-round shadow-3","style","border: 2px solid #00000000; padding: 1rem",4,"ngIf"],["class","p-mt-4 text-center",4,"ngIf"],[1,"text-xl","text-center"],["class","pi pi-file-word text-blue-500 text-2xl mr-1",4,"ngIf"],["class","text-orange-500 text-2xl mr-1",3,"icon",4,"ngIf"],[1,"pi","pi-file-word","text-blue-500","text-2xl","mr-1"],[1,"text-orange-500","text-2xl","mr-1",3,"icon"],[1,"pi","pi-upload","border-2","border-circle","border-300","p-3","text-3xl","text-color-secondary","mb-2","hover:bg-primary","hover:text-white","transition-colors","transition-duration-300"],[1,"m-0","text-center","text-sm"],[1,"mt-3"],[1,"p-panel","p-component","border-1","border-round","surface-100",2,"border-color","#00000023","font-size","1rem","font-family",'"Segoe UI", Roboto, sans-serif'],[1,"p-panel-header","d-flex","justify-content-between","align-items-center","cursor-pointer",2,"height","4rem","padding","0 1rem","display","flex","font-size","1rem","justify-content","space-between","align-items","center","flex-wrap","nowrap","gap","0.5rem","width","100%",3,"click"],[1,"d-flex","align-items-center"],[1,"pi",2,"margin-right","0.5rem",3,"ngClass"],[1,"p-panel-title","font-semibold",2,"color","black"],["pButton","","type","button","title","Copy All",1,"p-button-text","p-button-icon-only","flex-shrink-0",2,"width","3rem","height","3rem",3,"click"],[1,"pi","pi-copy",2,"font-size","1.4rem"],["class","p-panel-content p-mt-2","style",`
            background-color: white;
            padding: 1rem;
            border-top: 1px solid #ccc;
          `,4,"ngIf"],[1,"p-panel-content","p-mt-2",2,"background-color","white","padding","1rem","border-top","1px solid #ccc"],[1,"surface-100","border-round","shadow-3",2,"border","2px solid #00000000","padding","1rem"],[1,"p-mb-3",2,"color","black"],["pInputTextarea","","rows","15","cols","70","placeholder","",1,"p-inputtext","p-mb-3","w-full",2,"border-color","#00000052","min-height","10rem","resize","vertical text","font-family",'"Segoe UI", Roboto, sans-serif',"font-size","1rem","color","#000000be",3,"ngModelChange","ngModel"],["pButton","","type","button","label","Format target language content","icon","pi pi-align-left",1,"p-button-primary",3,"click"],[1,"p-mt-4","text-center"],["styleClass","p-mt-3"],[1,"p-mt-2","font-bold"],["pButton","","type","button","label","Download file","icon","pi pi-download",1,"p-button-primary",3,"click"]],template:function(t,n){if(t&1){let r=M();l(0,"div",2)(1,"h1",3),u(2,"Translation Assistant"),s()(),l(3,"div",4)(4,"p-card",5)(5,"h2",6),u(6," Upload source language file "),s(),l(7,"p"),u(8," Please upload a Word (.docx) or PowerPoint (.pptx) file containing your source language content. "),s(),l(9,"div",7),y("click",function(){b(r);let c=Se(11);return v(c.click())})("dragover",function(c){return b(r),v(n.onDragOver(c))})("dragleave",function(c){return b(r),v(n.onDragLeave(c))})("drop",function(c){return b(r),v(n.onDrop(c))}),l(10,"input",8,0),y("change",function(c){return b(r),v(n.onFileSelected(c))}),s(),f(12,em,5,3,"ng-container",9)(13,tm,3,0,"ng-template",null,1,se),s(),l(15,"div",10)(16,"button",11),y("click",function(){return b(r),v(n.previewSource())}),s()(),f(17,nm,10,5,"div",12),s()(),f(18,rm,9,1,"div",13)(19,im,4,0,"div",14)(20,am,8,0,"div",13)}if(t&2){let r=Se(14);a(12),d("ngIf",n.selectedFile)("ngIfElse",r),a(4),d("disabled",!n.selectedFile),a(),d("ngIf",n.previewText),a(),d("ngIf",n.showSecondUpload),a(),d("ngIf",n.isProcessing),a(),d("ngIf",n.showDownloadSection)}},dependencies:[F,Oe,$,It,Q,no,Pe,De,As,zt,ka,ye,We,Ie,xe,fo,Vt,Qc,Yc],encapsulation:2})};var lm=()=>["/metadata-assistant"];function sm(e,o){e&1&&(l(0,"div",7)(1,"h3",8),u(2),g(3,"translate"),s()()),e&2&&(a(2),C(h(3,1,"metadata.title")))}function cm(e,o){e&1&&(l(0,"div",9),w(1,"p-button",10),g(2,"translate"),s()),e&2&&(a(),d("label",h(2,2,"common.goTo"))("routerLink",Fe(4,lm)))}var Hn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-project-assistant"]],decls:14,vars:9,consts:[[1,"container","mx-auto","px-4","py-6"],["id","wb-cont",1,"text-4xl","font-bold","mb-4"],[1,"mb-6"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],["pTemplate","header"],[1,"mb-4"],["pTemplate","footer"],[1,"p-4"],[1,"text-xl","font-semibold"],[1,"flex","justify-end"],["icon","pi pi-arrow-right","iconPos","right",3,"label","routerLink"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"h1",1),u(2),g(3,"translate"),s(),l(4,"p",2),u(5),g(6,"translate"),s(),l(7,"div",3)(8,"p-card"),f(9,sm,4,3,"ng-template",4),l(10,"p",5),u(11),g(12,"translate"),s(),f(13,cm,3,5,"ng-template",6),s()()()),t&2&&(a(2),C(h(3,3,"title.project")),a(3),C(h(6,5,"project.content")),a(6),C(h(12,7,"metadata.cardDescription")))},dependencies:[O,R,F,It,rn,Pe,De,oe,Q,ce],encapsulation:2})};function dm(e,o){if(e&1){let t=M();l(0,"div"),w(1,"p",10),g(2,"translate"),l(3,"textarea",11),g(4,"translate"),ee("ngModelChange",function(r){b(t);let i=p();return J(i.urlsInput,r)||(i.urlsInput=r),v(r)}),u(5,"  "),s(),w(6,"br")(7,"br"),l(8,"button",12),g(9,"translate"),y("click",function(){b(t);let r=p();return v(r.fetchMetadata(r.urlsInput))}),s()()}if(e&2){let t=p();a(),d("innerHTML",h(2,4,"inventory.meta.instructions"),Ve),a(2),Xo("placeholder",h(4,6,"inventory.meta.watermark")),Z("ngModel",t.urlsInput),a(5),Xo("label",h(9,8,"inventory.meta.fetch-button"))}}function pm(e,o){if(e&1){let t=M();l(0,"div"),w(1,"p",10),g(2,"translate"),l(3,"textarea",13),g(4,"translate"),ee("ngModelChange",function(r){b(t);let i=p();return J(i.previewInput,r)||(i.previewInput=r),v(r)}),u(5,"      "),s(),w(6,"br")(7,"br"),l(8,"button",14),y("click",function(){b(t);let r=p();return v(r.fetchPreviewMetadata(r.previewInput))}),s()()}if(e&2){let t=p();a(),d("innerHTML",h(2,3,"inventory.meta-prvw.instructions"),Ve),a(2),Xo("placeholder",h(4,5,"inventory.meta.watermark")),Z("ngModel",t.previewInput)}}function um(e,o){e&1&&(l(0,"div"),u(1,"Loading..."),s())}function mm(e,o){e&1&&(l(0,"tr")(1,"th"),u(2,"Page (h1)"),s(),l(3,"th"),u(4,"Source"),s(),l(5,"th"),u(6,"Description"),s(),l(7,"th"),u(8),g(9,"translate"),s()()),e&2&&(a(8),C(h(9,1,"inventory.meta.keywords")))}function fm(e,o){if(e&1&&(l(0,"tr")(1,"td")(2,"a",18),u(3),s()(),l(4,"td"),u(5),s(),l(6,"td"),u(7),s(),l(8,"td"),u(9),s()()),e&2){let t=o.$implicit;a(2),d("href",t.url,Ae),a(),C(t.title),a(2),C(t.source),a(2),C(t.description),a(2),C(t.keywords)}}function gm(e,o){if(e&1&&(l(0,"p-table",15),f(1,mm,10,3,"ng-template",16)(2,fm,10,5,"ng-template",17),s()),e&2){let t=p();d("value",t.results)}}var wo={},Wn=class e{results=[];loading=!1;errorMessage="";urlsInput="";selectedSourceOption="canadaOrGithub";previewInput="";fetchMetadata(o){return Y(this,null,function*(){let t=this.getCleanUrls(o);if(!t.length)return;this.loading=!0,this.results.length=0;let n=Array(t.length).fill(null),r=t.map((c,m)=>this.processUrl(c,m,n));yield Promise.all(r);let i=n.filter(c=>c!==null);this.results.splice(0,this.results.length,...i),this.loading=!1})}getCleanUrls(o){return o.split(`
`).map(t=>t.trim()).filter(t=>t.length>0)}processUrl(o,t,n){return Y(this,null,function*(){if(!this.isValidUrl(o)){n[t]=this.buildErrorResult(o,"Invalid URL","N/A","N/A"),this.updateResults(n);return}try{let r=yield fetch(o);if(!r.ok)throw new Error(`Fetch failed: HTTP ${r.status}`);let i=yield r.text();n[t]=this.extractMetadata(i,o),console.log("Success",n[t])}catch{n[t]=this.buildErrorResult(o,o,"Could not fetch metadata",""),console.log("Error",n[t])}this.updateResults(n)})}updateResults(o){o.every(t=>t!==null)&&(this.results=o,this.loading=!1)}extractMetadata(o,t){let n=new DOMParser().parseFromString(o,"text/html"),r=n.querySelector("h1")?.innerText.trim(),i=n.querySelector("title")?.innerText.trim(),c=r||i||t,m=n.querySelector('meta[name="description"]')?.getAttribute("content")||"No Description",_=n.querySelector('meta[name="keywords"]')?.getAttribute("content")||"No Keywords",x=this.detectSource(t);return{url:t,title:c,description:m,keywords:_,source:x}}buildErrorResult(o,t,n,r){return{url:o,title:t,description:n,keywords:r,source:this.detectSource(o)}}detectSource(o){try{let t=new URL(o).hostname;return t.includes("canada.ca")?"CA":t.includes("github.io")||t.includes("github.com")?"GH":""}catch{return""}}isValidUrl(o){try{return new URL(o),!0}catch{return!1}}fetchPreviewMetadata(o){return Y(this,null,function*(){let t=this.getCleanUrls(o);if(!t.length)return;this.loading=!0,this.results=[],(!wo.en||!wo.fr)&&([wo.en,wo.fr]=yield Promise.all([this.loadCsv("gcPage-report/sanitized_cra_gcPageReport_en.csv"),this.loadCsv("gcPage-report/sanitized_cra_gcPageReport_fr.csv")]));let n=[];for(let r of t){let i;if(!this.isValidUrl(r))i=this.buildErrorResult(r,"Invalid URL","N/A","N/A");else if(!r.includes("canada-preview.adobecqms.net"))i=this.buildErrorResult(r,"Not a preview URL","N/A","N/A");else{let c=this.extractPreviewPath(r);console.log("Normalized preview path:",c);let m=this.searchCsvForPath(c,wo.en)||this.searchCsvForPath(c,wo.fr);m?(console.log("Found:",m),i={url:r,title:m.H1||m["Page title"]||"Untitled",description:m.Description||"No Description",keywords:m.Keywords||"No Keywords",source:"AEM Preview"}):i=this.buildErrorResult(r,"Not found in the report","N/A","N/A")}n.push(i)}this.results=n,this.loading=!1})}loadCsv(o){return Y(this,null,function*(){let n=yield(yield fetch(o)).text();return this.parseCsv(n)})}parseCsv(o){let t=[],n=o.split(`
`).filter(i=>i.trim().length>0),r=this.splitCsvLine(n[0]);for(let i of n.slice(1)){let c=this.splitCsvLine(i),m={};r.forEach((_,x)=>{m[_]=c[x]||""}),t.push(m)}return t}splitCsvLine(o){let t=[],n="",r=!1;for(let i=0;i<o.length;i++){let c=o[i];c==='"'?r&&o[i+1]==='"'?(n+='"',i++):r=!r:c===","&&!r?(t.push(n),n=""):n+=c}return t.push(n),t.map(i=>i.trim())}extractPreviewPath(o){try{let t=new URL(o);return(t.pathname+t.search).toLowerCase().replace(/\/$/,"")}catch{return""}}searchCsvForPath(o,t){let n=o.toLowerCase().replace(/\/$/,"");return t.find(r=>{let i=r["Public path"];if(!i)return!1;try{return new URL(i).pathname.toLowerCase().replace(/\/$/,"")===n}catch{return!1}})}onSourceChange(){this.results=[],this.loading=!1,this.urlsInput="",this.previewInput=""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-inventory-assistant"]],decls:24,vars:18,consts:[["id","wb-cont"],[1,"p-formgroup-inline"],[1,"p-field-radiobutton"],["name","sourceOption","value","canadaOrGithub","inputId","canadaGithubOption",3,"ngModelChange","onClick","ngModel"],["for","canadaGithubOption"],[1,"p-field-last-radiobutton"],["name","sourceOption","value","preview","inputId","previewOption",3,"ngModelChange","onClick","ngModel"],["for","previewOption"],[4,"ngIf"],[3,"value",4,"ngIf"],[3,"innerHTML"],["pTextarea","","id","prjct_pgs","rows","5",2,"width","100%",3,"ngModelChange","ngModel","placeholder"],["pButton","","type","button",3,"click","label"],["pTextarea","","id","preview_pgs","rows","5",2,"width","100%",3,"ngModelChange","ngModel","placeholder"],["pButton","","type","button","label","Fetch Preview Metadata",3,"click"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["target","_blank",3,"href"]],template:function(t,n){t&1&&(l(0,"h1",0),u(1),g(2,"translate"),s(),l(3,"p"),u(4),g(5,"translate"),s(),l(6,"div",1)(7,"div",2)(8,"p-radioButton",3),ee("ngModelChange",function(i){return J(n.selectedSourceOption,i)||(n.selectedSourceOption=i),i}),y("onClick",function(){return n.onSourceChange()}),s(),l(9,"label",4),u(10),g(11,"translate"),s()(),l(12,"div",5)(13,"p-radioButton",6),ee("ngModelChange",function(i){return J(n.selectedSourceOption,i)||(n.selectedSourceOption=i),i}),y("onClick",function(){return n.onSourceChange()}),s(),l(14,"label",7),u(15),g(16,"translate"),s()()(),w(17,"br"),f(18,dm,10,10,"div",8)(19,pm,9,7,"div",8)(20,um,2,0,"div",8),w(21,"br")(22,"br"),f(23,gm,3,1,"p-table",9)),t&2&&(a(),C(h(2,10,"title.inventory")),a(3),C(h(5,12,"inventory.intro")),a(4),Z("ngModel",n.selectedSourceOption),a(2),C(h(11,14,"inventory.meta.radioLabel1")),a(3),Z("ngModel",n.selectedSourceOption),a(2),C(h(16,16,"inventory.meta.radioLabel2")),a(3),d("ngIf",n.selectedSourceOption==="canadaOrGithub"),a(),d("ngIf",n.selectedSourceOption==="preview"),a(),d("ngIf",n.loading),a(3),d("ngIf",n.results.length>0))},dependencies:[O,R,Q,no,oe,ye,We,Ie,xe,F,$,fn,po,co,dn,cn],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:8px;text-align:left}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:2px solid #444}.p-field-radiobutton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:.75rem}.p-field-radiobutton[_ngcontent-%COMP%]{margin-bottom:1rem}.p-field-last-radiobutton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:.75rem}.p-last-field-radiobutton[_ngcontent-%COMP%]{margin-bottom:1rem}"]});static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var hm=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")}
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}`,bm={root:({instance:e,props:o})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":o.autoResize,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":o.fluid}]},Jc=(()=>{class e extends _e{name="textarea";theme=hm;classes=bm;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var e0=(()=>{class e extends ae{ngModel;control;autoResize;variant;fluid=!1;onResize=new q;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=X(Jc);constructor(t,n){super(),this.ngModel=t,this.control=n,console.log("pInputTextarea directive is deprecated in v18. Use pTextarea directive instead")}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(t){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)(z(xe,8),z(ca,8))};static \u0275dir=Qo({type:e,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:8,hostBindings:function(n,r){n&1&&y("input",function(c){return r.onInput(c)}),n&2&&Me("p-filled",r.filled)("p-textarea-resizable",r.autoResize)("p-variant-filled",r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled")("p-textarea-fluid",r.hasFluid)},inputs:{autoResize:[2,"autoResize","autoResize",H],variant:"variant",fluid:[2,"fluid","fluid",H]},outputs:{onResize:"onResize"},features:[ge([Jc]),re]})}return e})();var vm=["removeicon"],_m=["*"];function xm(e,o){if(e&1){let t=M();l(0,"img",4),y("error",function(r){b(t);let i=p();return v(i.imageError(r))}),s()}if(e&2){let t=p();d("src",t.image,Ae)("alt",t.alt)}}function ym(e,o){if(e&1&&w(0,"span",6),e&2){let t=p(2);fe(t.icon),d("ngClass","p-chip-icon"),D("data-pc-section","icon")}}function Cm(e,o){if(e&1&&f(0,ym,1,4,"span",5),e&2){let t=p();d("ngIf",t.icon)}}function wm(e,o){if(e&1&&(l(0,"div",7),u(1),s()),e&2){let t=p();D("data-pc-section","label"),a(),C(t.label)}}function km(e,o){if(e&1){let t=M();l(0,"span",11),y("click",function(r){b(t);let i=p(3);return v(i.close(r))})("keydown",function(r){b(t);let i=p(3);return v(i.onKeydown(r))}),s()}if(e&2){let t=p(3);fe(t.removeIcon),d("ngClass","p-chip-remove-icon"),D("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function Sm(e,o){if(e&1){let t=M();l(0,"TimesCircleIcon",12),y("click",function(r){b(t);let i=p(3);return v(i.close(r))})("keydown",function(r){b(t);let i=p(3);return v(i.onKeydown(r))}),s()}if(e&2){let t=p(3);fe("p-chip-remove-icon"),D("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function Tm(e,o){if(e&1&&(N(0),f(1,km,1,5,"span",9)(2,Sm,1,4,"TimesCircleIcon",10),V()),e&2){let t=p(2);a(),d("ngIf",t.removeIcon),a(),d("ngIf",!t.removeIcon)}}function Im(e,o){}function Mm(e,o){e&1&&f(0,Im,0,0,"ng-template")}function Em(e,o){if(e&1){let t=M();l(0,"span",13),y("click",function(r){b(t);let i=p(2);return v(i.close(r))})("keydown",function(r){b(t);let i=p(2);return v(i.onKeydown(r))}),f(1,Mm,1,0,null,14),s()}if(e&2){let t=p(2);D("data-pc-section","removeicon")("aria-label",t.removeAriaLabel),a(),d("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)}}function zm(e,o){if(e&1&&(N(0),f(1,Tm,3,2,"ng-container",3)(2,Em,2,3,"span",8),V()),e&2){let t=p();a(),d("ngIf",!t.removeIconTemplate&&!t._removeIconTemplate),a(),d("ngIf",t.removeIconTemplate||t._removeIconTemplate)}}var Fm=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding: ${e("chip.padding.y")} ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-left: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${e("chip.padding.y")} / 2);
    padding-bottom: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.font.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,Lm={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},t0=(()=>{class e extends _e{name="chip";theme=Fm;classes=Lm;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var No=(()=>{class e extends ae{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new q;onImageError=new q;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Ct.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(t){this._chipProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}_chipProps;_componentStyle=X(t0);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"removeicon":this._removeIconTemplate=t.template;break;default:this._removeIconTemplate=t.template;break}})}ngOnChanges(t){if(super.ngOnChanges(t),t.chipProps&&t.chipProps.currentValue){let{currentValue:n}=t.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.style!==void 0&&(this.style=n.style),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}containerClass(){let t="p-chip p-component";return this.styleClass&&(t+=` ${this.styleClass}`),t}close(t){this.visible=!1,this.onRemove.emit(t)}onKeydown(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)}imageError(t){this.onImageError.emit(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-chip"]],contentQueries:function(n,r,i){if(n&1&&(ie(i,vm,4),ie(i,oe,4)),n&2){let c;j(c=U())&&(r.removeIconTemplate=c.first),j(c=U())&&(r.templates=c)}},hostVars:9,hostBindings:function(n,r){n&2&&(D("data-pc-name","chip")("aria-label",r.label)("data-pc-section","root"),je(r.style),fe(r.containerClass()),Ze("display",!r.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",H],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[ge([t0]),re,Yt],ngContentSelectors:_m,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(n,r){if(n&1&&(Ee(),we(0),f(1,xm,1,2,"img",1)(2,Cm,1,1,"ng-template",null,0,se)(4,wm,2,2,"div",2)(5,zm,3,2,"ng-container",3)),n&2){let i=Se(3);a(),d("ngIf",r.image)("ngIfElse",i),a(3),d("ngIf",r.label),a(),d("ngIf",r.removable)}},dependencies:[F,Oe,$,Be,va,G],encapsulation:2,changeDetection:0})}return e})(),ko=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[No,G,G]})}return e})();function Bm(e,o){if(e&1){let t=M();l(0,"div",12)(1,"h3",13),u(2),g(3,"translate"),s(),l(4,"div",14)(5,"p-button",15),g(6,"translate"),y("onClick",function(){b(t);let r=p();return v(r.clearInput())}),s()()()}if(e&2){let t=p();a(2),C(h(3,4,"metadata.urlInput.title")),a(3),d("label",h(6,6,"metadata.urlInput.clear"))("text",!0)("disabled",t.disabled)}}function Pm(e,o){if(e&1&&w(0,"p-chip",23),e&2){let t=o.$implicit;d("label",t.length>50?t.substring(0,50)+"...":t)}}function Om(e,o){if(e&1&&(w(0,"p-chip",24),g(1,"translate")),e&2){let t=p(2);d("label","+"+(t.validUrls.length-3)+" "+h(1,1,"metadata.urlInput.more"))}}function Am(e,o){if(e&1&&(l(0,"div",16)(1,"div",17),w(2,"i",18),l(3,"span",19),u(4),g(5,"translate"),s()(),l(6,"div",20),f(7,Pm,1,1,"p-chip",21)(8,Om,2,3,"p-chip",22),s()()),e&2){let t=p();a(4),Eo(" ",h(5,4,"metadata.urlInput.validUrls")," (",t.validUrls.length,") "),a(3),d("ngForOf",t.validUrls.slice(0,3)),a(),d("ngIf",t.validUrls.length>3)}}function Dm(e,o){if(e&1&&(l(0,"li",29),u(1),l(2,"span",30),u(3),s()()),e&2){let t=o.$implicit,n=p(2);a(),B(" ",t," "),a(2),B("(",n.getInvalidReason(t),")")}}function Rm(e,o){if(e&1&&(l(0,"div"),w(1,"p-message",25),g(2,"translate"),l(3,"div",26)(4,"ul",27),f(5,Dm,4,2,"li",28),s()()()),e&2){let t=p();a(),d("text",h(2,2,"metadata.urlInput.invalidUrls")),a(4),d("ngForOf",t.invalidUrls)}}var Kn=class e{disabled=!1;urlsChange=new q;urlInputChange=new q;urlText="";validUrls=[];invalidUrls=[];allowedHosts=new Set(["cra-design.github.io","cra-proto.github.io","gc-proto.github.io","test.canada.ca","www.canada.ca"]);onTextChange(){this.parseUrls(),this.urlInputChange.emit(this.urlText)}parseUrls(){let o=this.urlText.split(`
`).filter(t=>t.trim());this.validUrls=[],this.invalidUrls=[],o.forEach(t=>{let n=t.trim();n&&(this.isValidUrl(n)?this.validUrls.push(n):this.invalidUrls.push(n))}),this.urlsChange.emit(this.validUrls)}isValidUrl(o){try{let t=new URL(o),n=t.protocol==="http:"||t.protocol==="https:",r=this.allowedHosts.has(t.host);return n&&r}catch{return!1}}getInvalidReason(o){try{let t=new URL(o);return this.allowedHosts.has(t.host)?"Invalid URL format":`Domain not supported: ${t.host}`}catch{return"Invalid URL format"}}clearInput(){this.urlText="",this.validUrls=[],this.invalidUrls=[],this.urlsChange.emit([]),this.urlInputChange.emit("")}loadSampleUrls(){this.urlText=`https://www.canada.ca/en/revenue-agency.html
https://www.canada.ca/fr/agence-revenu.html
https://www.canada.ca/en/revenue-agency/services/tax/businesses.html`,this.parseUrls()}getAllowedDomainsText(){return Array.from(this.allowedHosts).join(", ")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-url-input"]],inputs:{disabled:"disabled"},outputs:{urlsChange:"urlsChange",urlInputChange:"urlInputChange"},decls:21,vars:18,consts:[[1,"url-input-container"],["pTemplate","header"],[1,"url-input-content"],[1,"field"],["for","urls",1,"block","mb-2"],["pInputTextarea","","id","urls",1,"w-full",3,"ngModelChange","ngModel","disabled","rows","placeholder"],[1,"block","mt-1","text-500"],[1,"block","mt-1","text-400"],[1,"pi","pi-info-circle","mr-1"],[1,"url-validation","mt-3"],["class","mb-2",4,"ngIf"],[4,"ngIf"],[1,"flex","align-items-center","justify-content-between","p-3"],[1,"m-0"],[1,"flex","gap-2"],["icon","pi pi-times","severity","secondary",3,"onClick","label","text","disabled"],[1,"mb-2"],[1,"flex","align-items-center","gap-2","mb-2"],[1,"pi","pi-check-circle","text-green-500"],[1,"font-semibold"],[1,"flex","flex-wrap","gap-2"],["styleClass","text-xs",3,"label",4,"ngFor","ngForOf"],["styleClass","text-xs surface-200",3,"label",4,"ngIf"],["styleClass","text-xs",3,"label"],["styleClass","text-xs surface-200",3,"label"],["severity","warn","styleClass","w-full",3,"text"],[1,"mt-2","text-orange-600"],[1,"m-0","pl-3"],["class","text-sm",4,"ngFor","ngForOf"],[1,"text-sm"],[1,"text-xs","text-gray-500","ml-2"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"p-card"),f(2,Bm,7,8,"ng-template",1),l(3,"div",2)(4,"div",3)(5,"label",4),u(6),g(7,"translate"),s(),l(8,"textarea",5),g(9,"translate"),ee("ngModelChange",function(i){return J(n.urlText,i)||(n.urlText=i),i}),y("ngModelChange",function(){return n.onTextChange()}),u(10,"        "),s(),l(11,"small",6),u(12),g(13,"translate"),s(),l(14,"small",7),w(15,"i",8),u(16),g(17,"translate"),s()(),l(18,"div",9),f(19,Am,9,6,"div",10)(20,Rm,6,4,"div",11),s()()()()),t&2&&(a(6),B(" ",h(7,10,"metadata.urlInput.label")," "),a(2),Z("ngModel",n.urlText),d("disabled",n.disabled)("rows",8)("placeholder",h(9,12,"metadata.urlInput.placeholder")),a(4),B(" ",h(13,14,"metadata.urlInput.help")," "),a(4),Eo(" ",h(17,16,"metadata.urlInput.allowedDomains"),": ",n.getAllowedDomainsText()," "),a(3),d("ngIf",n.validUrls.length>0),a(),d("ngIf",n.invalidUrls.length>0))},dependencies:[F,He,$,ye,We,Ie,xe,O,R,e0,Q,ce,oe,Pe,De,ko,No,zt,ao],styles:[".url-input-container[_ngcontent-%COMP%]{width:100%}.url-input-content[_ngcontent-%COMP%]{padding:0}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;color:var(--text-color)}textarea[_ngcontent-%COMP%]{font-family:monospace;font-size:.9rem;line-height:1.5}.url-validation[_ngcontent-%COMP%]{padding:1rem;background-color:var(--surface-50);border-radius:var(--border-radius)}[_nghost-%COMP%]     .p-chip{font-size:.85rem;padding:.25rem .5rem}[_nghost-%COMP%]     .p-message{margin:0}.text-400[_ngcontent-%COMP%]{color:#9ca3af;font-size:.875rem}.text-gray-500[_ngcontent-%COMP%]{color:#6b7280}.text-orange-600[_ngcontent-%COMP%]{color:#ea580c}"]})};var $m=["icon"],Nm=["*"];function Vm(e,o){if(e&1&&w(0,"span",4),e&2){let t=p(2);d("ngClass",t.icon)}}function jm(e,o){if(e&1&&(N(0),f(1,Vm,1,1,"span",3),V()),e&2){let t=p();a(),d("ngIf",t.icon)}}function Um(e,o){}function Hm(e,o){e&1&&f(0,Um,0,0,"ng-template")}function Wm(e,o){if(e&1&&(l(0,"span",5),f(1,Hm,1,0,null,6),s()),e&2){let t=p();a(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Km=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,qm={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},n0=(()=>{class e extends _e{name="tag";theme=Km;classes=qm;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var Vo=(()=>{class e extends ae{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=X(n0);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-tag"]],contentQueries:function(n,r,i){if(n&1&&(ie(i,$m,4),ie(i,oe,4)),n&2){let c;j(c=U())&&(r.iconTemplate=c.first),j(c=U())&&(r.templates=c)}},hostVars:4,hostBindings:function(n,r){n&2&&(je(r.style),fe(r.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",H]},features:[ge([n0]),re],ngContentSelectors:Nm,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(n,r){n&1&&(Ee(),we(0),f(1,jm,2,1,"ng-container",0)(2,Wm,2,1,"span",1),l(3,"span",2),u(4),s()),n&2&&(a(),d("ngIf",!r.iconTemplate&&!r._iconTemplate),a(),d("ngIf",r.iconTemplate||r._iconTemplate),a(2),C(r.value))},dependencies:[F,Oe,$,Be,G],encapsulation:2,changeDetection:0})}return e})(),qn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[Vo,G,G]})}return e})();var Gm=()=>({"font-size":"0.75rem"});function Ym(e,o){if(e&1&&(l(0,"div",6)(1,"div",7),w(2,"i",8),l(3,"h3",9),u(4),g(5,"translate"),s()(),w(6,"p-tag",10),g(7,"translate"),s()),e&2){let t=p(2);a(4),C(h(5,2,"metadata.results.title")),a(2),d("value",t.results.length+" "+h(7,4,"metadata.results.items"))}}function Qm(e,o){if(e&1&&(l(0,"div",24)(1,"div",25)(2,"span",26),u(3),s(),w(4,"p-tag",27),s()()),e&2){let t=p().$implicit,n=p(2);a(3),C(n.getDomainFromUrl(t.url)),a(),je(Fe(5,Gm)),d("value",t.language==="en"?"English":"Fran\xE7ais")("severity",t.language==="en"?"success":"info")}}function Xm(e,o){if(e&1){let t=M();l(0,"div",28)(1,"h4",29),w(2,"i",30),u(3),g(4,"translate"),s(),l(5,"div",13)(6,"div",18)(7,"label",14),u(8),g(9,"translate"),l(10,"span",19),u(11),s()(),l(12,"p-button",20),g(13,"translate"),y("onClick",function(){b(t);let r=p().$implicit,i=p(2);return v(i.copyToClipboard(r.frenchTranslatedDescription))}),s()(),l(14,"div",21)(15,"code",22),u(16),s()()(),l(17,"div",31)(18,"div",18)(19,"label",14),u(20),g(21,"translate"),l(22,"span",19),u(23),s()(),l(24,"p-button",20),g(25,"translate"),y("onClick",function(){b(t);let r=p().$implicit,i=p(2);return v(i.copyToClipboard(r.frenchTranslatedKeywords))}),s()(),l(26,"div",21)(27,"code",22),u(28),s()()()()}if(e&2){let t=p().$implicit;a(3),B(" ",h(4,13,"metadata.results.frenchTranslation")," "),a(5),B(" ",h(9,15,"metadata.results.translatedDescription")," "),a(3),B("(",t.frenchTranslatedDescription.length," chars)"),a(),d("text",!0)("rounded",!0)("pTooltip",h(13,17,"metadata.results.copyToClipboard")),a(4),C(t.frenchTranslatedDescription),a(4),B(" ",h(21,19,"metadata.results.translatedKeywords")," "),a(3),B("(",t.frenchTranslatedKeywords.length," chars)"),a(),d("text",!0)("rounded",!0)("pTooltip",h(25,21,"metadata.results.copyToClipboard")),a(4),C(t.frenchTranslatedKeywords)}}function Zm(e,o){if(e&1){let t=M();l(0,"p-accordionTab",11),f(1,Qm,5,6,"ng-template",2),l(2,"div",12)(3,"div",13)(4,"label",14),u(5),g(6,"translate"),s(),l(7,"div",15)(8,"a",16),u(9),s(),l(10,"p-button",17),g(11,"translate"),y("onClick",function(){let r=b(t).$implicit,i=p(2);return v(i.copyToClipboard(r.url))}),s()()(),l(12,"div",13)(13,"div",18)(14,"label",14),u(15),g(16,"translate"),l(17,"span",19),u(18),s()(),l(19,"p-button",20),g(20,"translate"),y("onClick",function(){let r=b(t).$implicit,i=p(2);return v(i.copyToClipboard(r.metaDescription))}),s()(),l(21,"div",21)(22,"code",22),u(23),s()()(),l(24,"div",13)(25,"div",18)(26,"label",14),u(27),g(28,"translate"),l(29,"span",19),u(30),s()(),l(31,"p-button",20),g(32,"translate"),y("onClick",function(){let r=b(t).$implicit,i=p(2);return v(i.copyToClipboard(r.metaKeywords))}),s()(),l(33,"div",21)(34,"code",22),u(35),s()()(),f(36,Xm,29,23,"div",23),s()()}if(e&2){let t=o.$implicit,n=o.index,r=p(2);d("selected",n===0),a(5),C(h(6,20,"metadata.results.url")),a(3),d("href",t.url,Ae),a(),B(" ",t.url," "),a(),d("text",!0)("rounded",!0)("pTooltip",h(11,22,"metadata.results.openInNewTab")),a(5),B(" ",h(16,24,"metadata.results.metaDescription")," "),a(3),B("(",t.metaDescription.length," chars)"),a(),d("text",!0)("rounded",!0)("pTooltip",h(20,26,"metadata.results.copyToClipboard")),a(4),C(t.metaDescription),a(4),B(" ",h(28,28,"metadata.results.metaKeywords")," "),a(3),B("(",t.metaKeywords.length," chars)"),a(),d("text",!0)("rounded",!0)("pTooltip",h(32,30,"metadata.results.copyToClipboard")),a(4),C(t.metaKeywords),a(),d("ngIf",r.showTranslations&&t.frenchTranslatedDescription)}}function Jm(e,o){if(e&1&&(l(0,"div",1)(1,"p-card"),f(2,Ym,8,6,"ng-template",2),l(3,"div",3)(4,"p-accordion",4),f(5,Zm,37,32,"p-accordionTab",5),s()()()()),e&2){let t=p();a(4),d("multiple",!0),a(),d("ngForOf",t.results)}}var Gn=class e{results=[];showTranslations=!1;expandedStates={};toggleExpanded(o){this.expandedStates[o]=!this.expandedStates[o]}isExpanded(o){return this.expandedStates[o]||!1}copyToClipboard(o){navigator.clipboard.writeText(o).then(()=>{})}getKeywordsArray(o){return o.split(",").map(t=>t.trim()).filter(t=>t.length>0)}getDomainFromUrl(o){try{return new URL(o).hostname}catch{return o}}truncateContent(o,t=200){return o.length<=t?o:o.substring(0,t)+"..."}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-metadata-result"]],inputs:{results:"results",showTranslations:"showTranslations"},decls:1,vars:1,consts:[["class","metadata-results-container",4,"ngIf"],[1,"metadata-results-container"],["pTemplate","header"],[1,"results-content"],[3,"multiple"],[3,"selected",4,"ngFor","ngForOf"],[1,"flex","align-items-center","justify-content-between","p-3"],[1,"flex","align-items-center"],[1,"pi","pi-list","mr-2"],[1,"m-0"],["severity","info",3,"value"],[3,"selected"],[1,"result-content","p-3"],[1,"field","mb-3"],[1,"font-semibold","text-500","text-sm"],[1,"flex","align-items-center","gap-2","mt-1"],["target","_blank",1,"text-primary","hover:underline","text-sm",3,"href"],["icon","pi pi-external-link","size","small",3,"onClick","text","rounded","pTooltip"],[1,"flex","align-items-center","justify-content-between","mb-1"],[1,"text-xs","text-400","ml-1"],["icon","pi pi-copy","size","small",3,"onClick","text","rounded","pTooltip"],[1,"meta-content","p-2","surface-50","border-round"],[1,"text-sm"],["class","translation-section mt-4 p-3 surface-100 border-round",4,"ngIf"],[1,"flex","align-items-center","justify-content-between","w-full","pr-2"],[1,"flex","align-items-center","gap-2"],[1,"font-semibold"],[3,"value","severity"],[1,"translation-section","mt-4","p-3","surface-100","border-round"],[1,"flex","align-items-center","gap-2","mb-3"],[1,"pi","pi-language"],[1,"field"]],template:function(t,n){t&1&&f(0,Jm,6,2,"div",0),t&2&&d("ngIf",n.results&&n.results.length>0)},dependencies:[F,He,$,O,R,Pa,Ba,La,oe,Pe,De,ko,Q,ce,qn,Vo,Lt,mt],styles:[".metadata-results-container[_ngcontent-%COMP%]{width:100%;margin-top:1.5rem}.results-content[_ngcontent-%COMP%]{padding:0}.result-content[_ngcontent-%COMP%]{padding:1rem}.field[_ngcontent-%COMP%]{margin-bottom:1rem}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}.content-preview[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto;font-family:system-ui,-apple-system,sans-serif;line-height:1.6}.meta-content[_ngcontent-%COMP%]{font-family:Monaco,Courier New,monospace;word-break:break-word}.keywords-container[_ngcontent-%COMP%]{padding:.5rem;background-color:var(--surface-50);border-radius:var(--border-radius)}.translation-section[_ngcontent-%COMP%]{border-left:3px solid var(--primary-300)}.text-primary[_ngcontent-%COMP%]{color:var(--primary-color)}.hover\\:underline[_ngcontent-%COMP%]:hover{text-decoration:underline}.text-400[_ngcontent-%COMP%]{color:var(--text-color-secondary)}.text-500[_ngcontent-%COMP%]{color:var(--text-color)}[_nghost-%COMP%]     .p-accordion .p-accordion-header-link{padding:1rem;background:var(--surface-50);border:1px solid var(--surface-200);transition:all .2s}[_nghost-%COMP%]     .p-accordion .p-accordion-header-link:hover{background:var(--surface-100)}[_nghost-%COMP%]     .p-accordion .p-accordion-content{padding:0;border:1px solid var(--surface-200);border-top:none}[_nghost-%COMP%]     .p-chip{background:var(--primary-100);color:var(--primary-700);font-size:.85rem;padding:.25rem .5rem}"]})};var ef=e=>({count:e});function tf(e,o){e&1&&(l(0,"div",27),w(1,"i",28),l(2,"h3",29),u(3),g(4,"translate"),s()()),e&2&&(a(3),C(h(4,1,"metadata.csv.title")))}function of(e,o){if(e&1&&(l(0,"div",8)(1,"span",9),u(2),g(3,"translate"),s(),l(4,"span",10),u(5),s()()),e&2){let t=p(2);a(2),C(h(3,2,"metadata.csv.withTranslations")),a(3),C(t.getTranslatedResultsCount())}}function nf(e,o){e&1&&(l(0,"th",17),u(1),g(2,"translate"),s()),e&2&&(a(),C(h(2,1,"metadata.csv.frenchDescription")))}function rf(e,o){if(e&1&&(l(0,"td",30),u(1),s()),e&2){let t=p().$implicit;Ze("max-width","250px"),a(),B(" ",t.frenchTranslatedDescription||"-"," ")}}function af(e,o){if(e&1&&(l(0,"tr",16)(1,"td",30),u(2),s(),l(3,"td",30),u(4),s(),f(5,rf,2,3,"td",31),s()),e&2){let t=o.$implicit,n=p(2);a(),Ze("max-width","200px"),a(),B(" ",t.url," "),a(),Ze("max-width","250px"),a(),B(" ",t.metaDescription," "),a(),d("ngIf",n.includeTranslations)}}function lf(e,o){if(e&1&&(l(0,"div",32),u(1),g(2,"translate"),s()),e&2){let t=p(2);a(),B(" ... ",Jo(2,1,"metadata.csv.andMore",te(4,ef,t.results.length-2))," ")}}function sf(e,o){if(e&1){let t=M();l(0,"div",1)(1,"p-card"),f(2,tf,5,3,"ng-template",2),l(3,"div",3)(4,"div",4)(5,"p",5),u(6),g(7,"translate"),s()(),l(8,"div",6)(9,"div",7)(10,"div",8)(11,"span",9),u(12),g(13,"translate"),s(),l(14,"span",10),u(15),s()(),f(16,of,6,4,"div",11),l(17,"div",8)(18,"span",9),u(19),g(20,"translate"),s(),l(21,"span",10),u(22),s()()()(),l(23,"div",12)(24,"h4",13),u(25),g(26,"translate"),s(),l(27,"div",14)(28,"table",15)(29,"thead")(30,"tr",16)(31,"th",17),u(32),g(33,"translate"),s(),l(34,"th",17),u(35),g(36,"translate"),s(),f(37,nf,3,3,"th",18),s()(),l(38,"tbody"),f(39,af,6,7,"tr",19),s()(),f(40,lf,3,6,"div",20),s()(),l(41,"div",21)(42,"p-button",22),y("onClick",function(){b(t);let r=p();return v(r.exportToCsv())}),s(),l(43,"p-button",23),g(44,"translate"),g(45,"translate"),y("onClick",function(){b(t);let r=p();return v(r.exportToCsv())}),s()(),l(46,"div",24)(47,"small",25),w(48,"i",26),u(49),g(50,"translate"),s()()()()()}if(e&2){let t=p();a(6),B(" ",h(7,17,"metadata.csv.description")," "),a(6),C(h(13,19,"metadata.csv.totalUrls")),a(3),C(t.results.length),a(),d("ngIf",t.includeTranslations),a(3),C(h(20,21,"metadata.csv.columns")),a(3),C(t.includeTranslations?7:5),a(3),C(h(26,23,"metadata.csv.preview")),a(7),C(h(33,25,"metadata.csv.url")),a(3),C(h(36,27,"metadata.csv.metaDescription")),a(2),d("ngIf",t.includeTranslations),a(2),d("ngForOf",t.results.slice(0,2)),a(),d("ngIf",t.results.length>2),a(2),d("label",t.getExportButtonLabel()),a(),d("label",h(44,29,"metadata.csv.copyForExcel"))("outlined",!0)("pTooltip",h(45,31,"metadata.csv.copyTooltip")),a(6),B(" ",h(50,33,"metadata.csv.note")," ")}}var Yn=class e{constructor(o){this.translate=o}results=[];includeTranslations=!1;getTranslatedResultsCount(){return this.results.filter(o=>o.frenchTranslatedDescription).length}exportToCsv(){if(!this.results||this.results.length===0)return;let o=this.generateCsvContent();this.downloadCsv(o)}generateCsvContent(){let o=this.getHeaders(),t=this.results.map(r=>this.resultToRow(r));return[o,...t].map(r=>r.map(i=>this.escapeCsvCell(i)).join(",")).join(`
`)}getHeaders(){let o=[this.translate.instant("metadata.csv.url"),this.translate.instant("metadata.csv.language"),this.translate.instant("metadata.csv.scrapedContent"),this.translate.instant("metadata.csv.metaDescription"),this.translate.instant("metadata.csv.metaKeywords")];return this.includeTranslations&&o.push(this.translate.instant("metadata.csv.frenchDescription"),this.translate.instant("metadata.csv.frenchKeywords")),o}resultToRow(o){let t=[o.url,o.language,o.scrapedContent,o.metaDescription,o.metaKeywords];return this.includeTranslations&&o.frenchTranslatedDescription?t.push(o.frenchTranslatedDescription,o.frenchTranslatedKeywords||""):this.includeTranslations&&t.push("",""),t}escapeCsvCell(o){if(o==null)return"";let t=String(o);return t.includes(",")||t.includes(`
`)||t.includes('"')?`"${t.replace(/"/g,'""')}"`:t}downloadCsv(o){let t=new Blob([o],{type:"text/csv;charset=utf-8;"}),n=document.createElement("a"),r=URL.createObjectURL(t),i=new Date().toISOString().replace(/[:.]/g,"-").slice(0,-5),c=this.includeTranslations?`metadata-with-translations-${i}.csv`:`metadata-results-${i}.csv`;n.setAttribute("href",r),n.setAttribute("download",c),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)}getExportButtonLabel(){let o=this.results.length;return this.translate.instant("metadata.csv.exportButton",{count:o})}static \u0275fac=function(t){return new(t||e)(z(Te))};static \u0275cmp=E({type:e,selectors:[["ca-metadata-csv-export"]],inputs:{results:"results",includeTranslations:"includeTranslations"},decls:1,vars:1,consts:[["class","csv-export-container",4,"ngIf"],[1,"csv-export-container"],["pTemplate","header"],[1,"export-content"],[1,"export-info","mb-3"],[1,"text-sm","text-500","m-0"],[1,"export-stats","mb-3","p-3","surface-100","border-round"],[1,"flex","align-items-center","justify-content-between"],[1,"stat-item"],[1,"text-xs","text-500","block","mb-1"],[1,"text-xl","font-bold","text-primary"],["class","stat-item",4,"ngIf"],[1,"export-preview","mb-3"],[1,"text-sm","font-semibold","mb-2"],[1,"preview-table","p-2","surface-50","border-round"],[1,"w-full","text-xs"],[1,"border-bottom-1","surface-border"],[1,"text-left","p-1"],["class","text-left p-1",4,"ngIf"],["class","border-bottom-1 surface-border",4,"ngFor","ngForOf"],["class","text-center text-xs text-500 mt-2",4,"ngIf"],[1,"export-actions","flex","gap-2"],["icon","pi pi-file-export","severity","primary",3,"onClick","label"],["icon","pi pi-copy","severity","secondary",3,"onClick","label","outlined","pTooltip"],[1,"export-note","mt-3"],[1,"text-xs","text-500"],[1,"pi","pi-info-circle","mr-1"],[1,"flex","align-items-center","p-3"],[1,"pi","pi-download","mr-2"],[1,"m-0"],[1,"p-1","text-overflow-ellipsis","white-space-nowrap","overflow-hidden"],["class","p-1 text-overflow-ellipsis white-space-nowrap overflow-hidden",3,"max-width",4,"ngIf"],[1,"text-center","text-xs","text-500","mt-2"]],template:function(t,n){t&1&&f(0,sf,51,35,"div",0),t&2&&d("ngIf",n.results&&n.results.length>0)},dependencies:[F,He,$,O,R,Q,ce,oe,Pe,De,Lt,mt],styles:[".csv-export-container[_ngcontent-%COMP%]{width:100%;margin-top:1.5rem}.export-content[_ngcontent-%COMP%]{padding:0}.export-stats[_ngcontent-%COMP%]{background:var(--surface-100)}.stat-item[_ngcontent-%COMP%]{text-align:center}.preview-table[_ngcontent-%COMP%]{overflow-x:auto}.preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-size:.75rem;table-layout:fixed}.preview-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600;color:var(--text-color);background:var(--surface-100)}.preview-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--text-color-secondary)}.text-overflow-ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis}.white-space-nowrap[_ngcontent-%COMP%]{white-space:nowrap}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.export-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}.export-note[_ngcontent-%COMP%]{padding-top:.5rem;border-top:1px solid var(--surface-200)}.text-primary[_ngcontent-%COMP%]{color:var(--primary-color)}.border-bottom-1[_ngcontent-%COMP%]{border-bottom-width:1px;border-bottom-style:solid}.surface-border[_ngcontent-%COMP%]{border-color:var(--surface-border)}"]})};var cf=new Set(["cra-design.github.io","cra-proto.github.io","gc-proto.github.io","test.canada.ca","www.canada.ca"]),Qn=class e{constructor(o,t){this.http=o;this.apiKeyService=t}OPENROUTER_URL="https://openrouter.ai/api/v1/chat/completions";SCRAPING_TIMEOUT=3e4;API_TIMEOUT=6e4;TRANSLATION_TIMEOUT=9e4;processUrls(o){let t=[];return ot(o.urls).pipe(lt(n=>this.processUrl(n,o.model,o.translateToFrench)),Qe(n=>(t.push(n),t)),bt(n=>(console.error("Error processing URLs:",n),Ne(()=>n))))}processUrl(o,t,n){return this.scrapeUrl(o).pipe(lt(r=>{if(!r||r.length<50)return Ne(()=>new Error("Content too short or invalid for processing"));let i=this.detectLanguage(r);return this.generateMetadata(r,t,i).pipe(lt(c=>{let m={url:o,scrapedContent:r,metaDescription:c.description,metaKeywords:c.keywords,language:i};return n&&i==="en"?this.translateMetadata(c).pipe(Qe(_=>Ye(ke({},m),{frenchTranslatedDescription:_.description,frenchTranslatedKeywords:_.keywords}))):hi(m)}))}))}scrapeUrl(o){try{let t=new URL(o);if(!cf.has(t.host))return Ne(()=>new Error(`Host not allowed: ${t.host}. Only government domains are supported.`))}catch{return Ne(()=>new Error("Invalid URL format"))}return ot(fetch(`${o}?_=${Date.now()}`,{method:"GET",mode:"cors",cache:"no-cache"})).pipe(Gt(this.SCRAPING_TIMEOUT),lt(t=>{if(!t.ok)throw new Error(`Failed to fetch URL: HTTP ${t.status}`);return ot(t.text())}),Qe(t=>this.extractTextContent(t)),bt(t=>(console.error("Error scraping URL:",t),t.message.includes("Host not allowed")?Ne(()=>t):Ne(()=>new Error(`Failed to scrape URL: ${t.message||"Unknown error"}`)))))}extractTextContent(o){let n=new DOMParser().parseFromString(o,"text/html"),r=this.findMainElement(n);if(!r&&(console.warn("No main element found in page, attempting fallback to body content"),r=n.body,!r))return console.error("No body element found in page"),"";let i=r.cloneNode(!0);["provisional most-requested-bullets well well-sm brdr-0","pagedetails container","lnkbx","pagedetails","gc-prtts","alert alert-info","footer","nav","header","aside"].forEach(S=>{i.querySelectorAll(`.${S.replace(/ /g,".")}`).forEach(k=>k.remove())}),["footer","nav","header","aside"].forEach(S=>{i.querySelectorAll(S).forEach(k=>k.remove())}),i.querySelectorAll("h2.h3").forEach(S=>{let k=S.textContent||"";if(k.includes("On this page:")||k.includes("Sur cette page :")){let I=S.nextElementSibling;I&&I.tagName==="UL"&&(I.querySelectorAll("li").forEach(W=>{W.setAttribute("data-on-this-page","true")}),I.remove()),S.remove()}}),i.querySelectorAll("h2").forEach(S=>{let k=S.textContent||"";if(k.includes("On this page")||k.includes("Sur cette page")){let I=S.nextElementSibling;for(;I&&I.tagName==="UL";)I.querySelectorAll("li").forEach(W=>{W.setAttribute("data-on-this-page","true")}),I=I.nextElementSibling}});let m=["h1","h2","h3","h4","p","li"],_=[];m.forEach(S=>{i.querySelectorAll(S).forEach(k=>{if(S==="h2"){let W=k.textContent||"";if(W.includes("Chat with Charlie")||W.includes("Clavardez avec Charlie"))return}if(S==="li"&&k.hasAttribute("data-on-this-page"))return;let I=k.textContent?.trim();I&&I.length>0&&_.push(I)})});let x=_.join(" ");return console.log(`Extracted ${x.length} characters of content`),x.length<100?console.warn(`Very short content extracted: '${x}'`):x.length>2500&&console.log(`Content truncated from ${x.length} to 2500 characters`),x.substring(0,2500)}findMainElement(o){let t=['main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"]','main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"].col-md-9.col-md-push-3','main[role="main"][property="mainContentOfPage"].container','main[role="main"][property="mainContentOfPage"]'];for(let c of t){let m=o.querySelector(c);if(m){if(c===t[t.length-1]){let x=m.querySelector("div.container");if(x)return console.log("Found main element with container div inside"),x}return m}}let n=o.querySelector('main[role="main"]');if(n){console.log("Found main element using generic selector");let c=n.querySelector("div.container");return c?(console.log("Found container div inside main element"),c):n}let r=o.querySelector("main");if(r){console.log("Found plain main element");let c=r.querySelector("div.container");return c?(console.log("Found container div inside plain main element"),c):r}let i=o.querySelector('[role="main"]');return i?(console.log('Found element with role="main"'),i):null}detectLanguage(o){let t=["le","la","les","de","du","des","un","une","et","ou","mais","pour","avec","sans","sur","dans","par","que","qui","quoi","dont","o\xF9"],n=o.toLowerCase().split(/\s+/);return n.filter(c=>t.includes(c)).length/Math.max(n.length,1)>.05?"fr":"en"}generateMetadata(o,t,n){if(!this.apiKeyService.getCurrentKey())return Ne(()=>new Error("API key not configured"));let i=n==="en"?`As a search engine optimization expert, analyze the following content carefully and provide a concise, complete summary suitable for a meta description in English. The summary MUST be highly relevant to the specific content provided and capture its main topic and purpose. Use topic-specific terms found in the content, write in full sentences, and ensure the summary ends concisely within 275 characters. IMPORTANT: Provide ONLY the meta description itself with NO additional commentary or explanations.

${o}

Summary:`:`En tant qu'expert en r\xE9f\xE9rencement, analysez attentivement le contenu suivant et fournissez un r\xE9sum\xE9 concis et complet adapt\xE9 \xE0 une m\xE9ta-description en fran\xE7ais. Le r\xE9sum\xE9 DOIT \xEAtre parfaitement adapt\xE9 au contenu sp\xE9cifique fourni. Utilisez des termes sp\xE9cifiques au sujet, \xE9crivez en phrases compl\xE8tes, et assurez-vous que le r\xE9sum\xE9 se termine de mani\xE8re concise dans les 275 caract\xE8res. IMPORTANT: Fournissez UNIQUEMENT la m\xE9ta-description elle-m\xEAme SANS commentaire suppl\xE9mentaire.

${o}

R\xE9sum\xE9:`,c=n==="en"?`As a search engine optimization expert, carefully analyze the following content and identify 10 meaningful, topic-specific meta keywords that are DIRECTLY EXTRACTED from or strongly implied by the content. IMPORTANT: Return ONLY a comma-separated list of keywords with absolutely NO additional notes or commentary. Exclude 'Canada Revenue Agency' from the keywords.

${o}

Keywords:`:`En tant qu'expert en optimisation pour les moteurs de recherche, analysez attentivement le contenu suivant et identifiez 10 mots-cl\xE9s m\xE9ta significatifs qui sont DIRECTEMENT EXTRAITS du contenu. IMPORTANT: Retournez UNIQUEMENT une liste de mots-cl\xE9s s\xE9par\xE9s par des virgules sans AUCUNE note suppl\xE9mentaire. Excluez 'Agence du revenu du Canada' des mots-cl\xE9s.

${o}

Mots-cl\xE9s:`;return this.callOpenRouter(i,t,200).pipe(lt(m=>this.callOpenRouter(c,t,100).pipe(Qe(_=>({description:this.cleanMetadataResponse(m),keywords:this.cleanKeywordsResponse(_)})))))}translateMetadata(o){if(!this.apiKeyService.getCurrentKey())return Ne(()=>new Error("API key not configured"));let n="mistralai/mistral-small:free",r=`You are a professional translator specializing in Canadian government content. Translate the following English meta description to French, maintaining the formal tone used by the Canada Revenue Agency (CRA). 

Important CRA-specific terminology:
- "Canada Revenue Agency" \u2192 "Agence du revenu du Canada"
- "income tax" \u2192 "imp\xF4t sur le revenu"
- "benefits" \u2192 "prestations"
- "tax return" \u2192 "d\xE9claration de revenus"
- "GST/HST" \u2192 "TPS/TVH"
- "business number" \u2192 "num\xE9ro d'entreprise"
- "tax credit" \u2192 "cr\xE9dit d'imp\xF4t"
- "deduction" \u2192 "d\xE9duction"
- "tax-free savings account (TFSA)" \u2192 "compte d'\xE9pargne libre d'imp\xF4t (CELI)"
- "registered retirement savings plan (RRSP)" \u2192 "r\xE9gime enregistr\xE9 d'\xE9pargne-retraite (REER)"

IMPORTANT: Your response must contain ONLY the direct translation, with absolutely NO commentary, NO suggestions, NO explanations, and NO additional text of any kind. Return ONLY the translated text itself:

${o.description}

French translation:`,i=`Translate each of these English keywords to French. IMPORTANT: Return ONLY the translated keywords in a comma-separated list. Provide absolutely NO commentary, NO suggestions, NO explanations, and NO additional text of any kind. Return ONLY a comma-separated list of the translated keywords:

${o.keywords}

French keywords (comma-separated):`;return this.callOpenRouter(r,n,200,this.TRANSLATION_TIMEOUT).pipe(Io({count:1,delay:2e3}),lt(c=>this.callOpenRouter(i,n,100,this.TRANSLATION_TIMEOUT).pipe(Io({count:1,delay:2e3}),Qe(m=>({description:this.cleanMetadataResponse(c),keywords:this.cleanKeywordsResponse(m)})))))}callOpenRouter(o,t,n,r=this.API_TIMEOUT){let i=this.apiKeyService.getCurrentKey();if(!i)return Ne(()=>new Error("API key not configured"));let c=new Nt({Authorization:`Bearer ${i}`,"Content-Type":"application/json","HTTP-Referer":"https://content-assistant.app","X-Title":"Content Assistant"}),m={model:t,messages:[{role:"user",content:o}],max_tokens:n,temperature:.3};return this.http.post(this.OPENROUTER_URL,m,{headers:c}).pipe(Gt(r),Qe(_=>{if(_.choices&&_.choices[0]?.message?.content)return _.choices[0].message.content;throw new Error("Invalid response from API")}),bt(_=>(console.error("OpenRouter API error:",_),Ne(()=>new Error("Failed to generate content")))))}cleanMetadataResponse(o){let t=o.trim();t.startsWith('"')&&t.endsWith('"')&&(t=t.slice(1,-1));let n=["Here is a summary:","Summary:","Meta description:","Voici un r\xE9sum\xE9:","R\xE9sum\xE9:","M\xE9ta-description:","French translation:","Translation:"];for(let r of n)t.toLowerCase().startsWith(r.toLowerCase())&&(t=t.substring(r.length).trim());if(t.length>275){let r=t.lastIndexOf(".",275);r>200?t=t.substring(0,r+1):t=t.substring(0,275)}return t}cleanKeywordsResponse(o){let t=o.trim();t.startsWith('"')&&t.endsWith('"')&&(t=t.slice(1,-1));let n=["Keywords:","Here are the keywords:","Meta keywords:","Mots-cl\xE9s:","Voici les mots-cl\xE9s:","French keywords:"];for(let i of n)t.toLowerCase().startsWith(i.toLowerCase())&&(t=t.substring(i.length).trim());return t.split(",").map(i=>i.trim()).filter(i=>i.length>0).join(", ")}static \u0275fac=function(t){return new(t||e)(ze(st),ze(Ke))};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var Xn=class e{initialState={isProcessing:!1,currentUrl:"",currentStep:"idle",progress:0,totalUrls:0,processedUrls:0,results:[],error:null,selectedModel:"mistralai/mistral-small-3.2-24b-instruct:free",translateToFrench:!1};stateSubject=new Dt(this.initialState);state$=this.stateSubject.asObservable();constructor(){}getState(){return this.stateSubject.value}updateState(o){let t=this.getState();this.stateSubject.next(ke(ke({},t),o))}startProcessing(o,t,n){this.updateState({isProcessing:!0,currentStep:"scraping",progress:0,totalUrls:o.length,processedUrls:0,results:[],error:null,selectedModel:t,translateToFrench:n})}updateProgress(o,t){let n=this.getState(),r=t==="scraping"?.3:t==="generating"?.6:.9,i=n.processedUrls/Math.max(n.totalUrls,1),c=r/Math.max(n.totalUrls,1);this.updateState({currentUrl:o,currentStep:t,progress:Math.min((i+c)*100,100)})}addResult(o){let t=this.getState();this.updateState({results:[...t.results,o],processedUrls:t.processedUrls+1,progress:(t.processedUrls+1)/Math.max(t.totalUrls,1)*100})}completeProcessing(){this.updateState({isProcessing:!1,currentStep:"complete",progress:100,currentUrl:""})}setError(o){this.updateState({isProcessing:!1,currentStep:"idle",error:o})}reset(){this.stateSubject.next(this.initialState)}setSelectedModel(o){this.updateState({selectedModel:o})}setTranslateToFrench(o){this.updateState({translateToFrench:o})}clearResults(){this.updateState({results:[],progress:0,processedUrls:0,totalUrls:0,currentStep:"idle",error:null})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};function uf(e,o){e&1&&(l(0,"span",7),w(1,"i",8),u(2),g(3,"translate"),s()),e&2&&(a(2),B(" ",h(3,1,"page.apiKey.active")," "))}function mf(e,o){e&1&&(l(0,"span",9),w(1,"i",10),u(2),g(3,"translate"),s()),e&2&&(a(2),B(" ",h(3,1,"page.apiKey.notSet")," "))}function ff(e,o){if(e&1){let t=M();l(0,"div",20)(1,"p-button",21),g(2,"translate"),y("onClick",function(){b(t);let r=p(2);return v(r.reset())}),s()()}e&2&&(a(),d("label",h(2,2,"metadata.button.reset"))("outlined",!0))}function gf(e,o){if(e&1&&(l(0,"div"),w(1,"ca-progress-indicator",22),s()),e&2){let t=p(2);a(),d("progressText",t.getProgressText())("processedCount",t.state.processedUrls)("totalFiles",t.state.totalUrls)("showProgress",!0)("showSpinner",t.state.isProcessing)}}function hf(e,o){if(e&1&&(l(0,"div",14),w(1,"p-message",23),s()),e&2){let t=p(2);a(),d("text",t.state.error)}}function bf(e,o){if(e&1&&(l(0,"div",24),w(1,"ca-metadata-result",25)(2,"ca-metadata-csv-export",26),s()),e&2){let t=p(2);a(),d("results",t.state.results)("showTranslations",t.state.translateToFrench),a(),d("results",t.state.results)("includeTranslations",t.state.translateToFrench)}}function vf(e,o){if(e&1){let t=M();l(0,"section")(1,"div",11)(2,"div",12)(3,"ca-url-input",13),y("urlsChange",function(r){b(t);let i=p();return v(i.onUrlsChange(r))})("urlInputChange",function(r){b(t);let i=p();return v(i.onUrlInputChange(r))}),s(),l(4,"div",14)(5,"ca-shared-model-selector",15),y("modelChange",function(r){b(t);let i=p();return v(i.onModelChange(r))})("translateChange",function(r){b(t);let i=p();return v(i.onTranslateToggle(r))}),s()(),l(6,"div",14)(7,"p-button",16),g(8,"translate"),g(9,"translate"),y("onClick",function(){b(t);let r=p();return v(r.startProcessing())}),s()(),f(10,ff,3,4,"div",17),s(),l(11,"div",12),f(12,gf,2,5,"div",5)(13,hf,2,1,"div",18),s()(),f(14,bf,3,4,"div",19),s()}if(e&2){let t=p();a(3),d("disabled",t.state.isProcessing),a(2),d("selectedModel",t.state.selectedModel)("models",t.models)("label","metadata.modelSelector.modelLabel")("cardTitle","metadata.modelSelector.title")("showCard",!0)("showTranslateOption",!0)("translateToFrench",t.state.translateToFrench)("disabled",t.state.isProcessing),a(2),d("label",t.state.isProcessing?h(8,16,"metadata.button.processing"):h(9,18,"metadata.button.process"))("disabled",!t.canProcess())("loading",t.state.isProcessing),a(3),d("ngIf",t.state.results.length>0&&!t.state.isProcessing),a(2),d("ngIf",t.state.isProcessing||t.state.currentStep==="complete"),a(),d("ngIf",t.state.error),a(),d("ngIf",t.state.results.length>0)}}function _f(e,o){e&1&&(l(0,"div",27),w(1,"p-message",28),g(2,"translate"),s()),e&2&&(a(),d("text",h(2,1,"metadata.errors.noApiKey")))}var Zn=class e{constructor(o,t,n,r){this.translate=o;this.metadataService=t;this.stateService=n;this.apiKeyService=r}destroy$=new gi;state={isProcessing:!1,currentUrl:"",currentStep:"idle",progress:0,totalUrls:0,processedUrls:0,results:[],error:null,selectedModel:"mistralai/mistral-small-3.2-24b-instruct:free",translateToFrench:!1};urlInput="";urls=[];models=[{name:"Mistral Small 3.2 24B",value:"mistralai/mistral-small-3.2-24b-instruct:free",description:"metadata.models.mistralDescription"},{name:"Meta Llama 3.3 70B",value:"meta-llama/llama-3.3-70b-instruct:free",description:"metadata.models.llamaDescription"},{name:"Google Gemma 3 27B",value:"google/gemma-3-27b-it:free",description:"metadata.models.gemmaDescription"}];ngOnInit(){this.stateService.state$.pipe(dr(this.destroy$)).subscribe(o=>{this.state=o})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onUrlsChange(o){this.urls=o}onUrlInputChange(o){this.urlInput=o}isValidUrl(o){try{return new URL(o),!0}catch{return!1}}onModelChange(o){this.stateService.setSelectedModel(o)}onTranslateToggle(o){this.stateService.setTranslateToFrench(o)}startProcessing(){if(!this.apiKeyService.hasApiKey$.value){this.stateService.setError(this.translate.instant("metadata.errors.noApiKey"));return}if(this.urls.length===0){this.stateService.setError(this.translate.instant("metadata.errors.noUrls"));return}this.stateService.startProcessing(this.urls,this.state.selectedModel,this.state.translateToFrench),this.metadataService.processUrls({urls:this.urls,model:this.state.selectedModel,translateToFrench:this.state.translateToFrench}).pipe(dr(this.destroy$)).subscribe({next:o=>{o.forEach(t=>{this.stateService.addResult(t)})},error:o=>{console.error("Processing error:",o),this.stateService.setError(o.message||this.translate.instant("metadata.errors.processingFailed"))},complete:()=>{this.stateService.completeProcessing()}})}reset(){this.stateService.reset(),this.urlInput="",this.urls=[]}canProcess(){return this.apiKeyService.hasApiKey$.value&&this.urls.length>0&&!this.state.isProcessing}getProgressText(){return this.state.currentStep==="scraping"?this.translate.instant("metadata.progress.scrapingContent"):this.state.currentStep==="generating"?this.translate.instant("metadata.progress.generatingMetadata"):this.state.currentStep==="translating"?this.translate.instant("metadata.progress.translatingContent"):this.state.currentStep==="complete"?this.translate.instant("metadata.progress.completeTitle"):""}static \u0275fac=function(t){return new(t||e)(z(Te),z(Qn),z(Xn),z(Ke))};static \u0275cmp=E({type:e,selectors:[["ca-metadata-assistant"]],decls:20,vars:21,consts:[[1,"metadata-assistant-container"],["id","wb-cont"],[1,"api-key-status","mb-4"],["class","text-green-600",4,"ngIf"],["class","text-orange-600",4,"ngIf"],[4,"ngIf"],["class","mt-4",4,"ngIf"],[1,"text-green-600"],[1,"pi","pi-check-circle"],[1,"text-orange-600"],[1,"pi","pi-exclamation-circle"],[1,"grid"],[1,"col-12","lg:col-6"],[3,"urlsChange","urlInputChange","disabled"],[1,"mt-3"],[3,"modelChange","translateChange","selectedModel","models","label","cardTitle","showCard","showTranslateOption","translateToFrench","disabled"],["icon","pi pi-sparkles","severity","primary","styleClass","w-full",3,"onClick","label","disabled","loading"],["class","mt-2",4,"ngIf"],["class","mt-3",4,"ngIf"],["class","results-section mt-4",4,"ngIf"],[1,"mt-2"],["icon","pi pi-refresh","severity","secondary","styleClass","w-full",3,"onClick","label","outlined"],[3,"progressText","processedCount","totalFiles","showProgress","showSpinner"],["severity","error","styleClass","w-full",3,"text"],[1,"results-section","mt-4"],[3,"results","showTranslations"],[3,"results","includeTranslations"],[1,"mt-4"],["severity","warn","styleClass","w-full",3,"text"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"h1",1),u(2),g(3,"translate"),s(),l(4,"p"),u(5),g(6,"translate"),s(),l(7,"section",2)(8,"div")(9,"strong"),u(10),g(11,"translate"),s(),f(12,uf,4,3,"span",3),g(13,"async"),f(14,mf,4,3,"span",4),g(15,"async"),s()(),f(16,vf,15,20,"section",5),g(17,"async"),f(18,_f,3,3,"div",6),g(19,"async"),s()),t&2&&(a(2),C(h(3,7,"metadata.title")),a(3),C(h(6,9,"metadata.description")),a(5),C(h(11,11,"page.apiKey.status")),a(2),d("ngIf",h(13,13,n.apiKeyService.hasApiKey$)),a(2),d("ngIf",!h(15,15,n.apiKeyService.hasApiKey$)),a(2),d("ngIf",h(17,17,n.apiKeyService.hasApiKey$)),a(2),d("ngIf",!h(19,19,n.apiKeyService.hasApiKey$)))},dependencies:[F,$,tn,O,R,ye,Q,ce,Pe,zt,ao,go,ho,Kn,Gn,Yn],styles:[".metadata-assistant-container[_ngcontent-%COMP%]{padding:1rem}.api-key-status[_ngcontent-%COMP%]{margin-bottom:1.5rem}.results-section[_ngcontent-%COMP%]{margin-top:2rem}"]})};var Jn=class e{constructor(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-about"]],decls:6,vars:6,consts:[["id","wb-cont"]],template:function(t,n){t&1&&(l(0,"h1",0),u(1),g(2,"translate"),s(),l(3,"p"),u(4),g(5,"translate"),s()),t&2&&(a(),C(h(2,2,"title.about")),a(3),C(h(5,4,"about.content")))},dependencies:[O,R],encapsulation:2})};function xf(e,o){e&1&&(l(0,"tr")(1,"th"),u(2,"Title"),s(),l(3,"th"),u(4,"Link"),s()())}function yf(e,o){if(e&1){let t=M();l(0,"tr")(1,"td"),u(2),s(),l(3,"td")(4,"p-button",15),y("onClick",function(){let r=b(t).$implicit,i=p();return v(i.fetchAndGoToCompare(r.url))}),u(5),s()()()}if(e&2){let t=o.$implicit;a(2),C(t.title),a(3),B(" ",t.url," ")}}var er=class e{constructor(o,t,n,r){this.urlDataService=o;this.uploadState=t;this.router=n;this.translate=r}ngOnInit(){console.log("Test page - your API key is: localStorage.getItem('apiKey')")}yourSelectedButton="diff";yourArray=[{label:"page.compare.view.original",value:"original",icon:"pi pi-file"},{label:"page.compare.view.modified",value:"modified",icon:"pi pi-file-edit"},{label:"page.compare.view.diff",value:"diff",icon:"pi pi-sort-alt"}];yourFunction(o){this.yourSelectedButton=o,console.warn("Option changed to: ",o)}error="";loading=!1;fetchAndGoToCompare(o){return Y(this,null,function*(){let t=this.translate.instant("page.upload.error.unknown"),n=this.translate.instant("page.upload.url.error.try");this.loading=!0,this.error="";try{let r=yield this.urlDataService.fetchAndProcess(o);this.uploadState.setUploadData({originalUrl:o,originalHtml:r.html,modifiedUrl:o,modifiedHtml:r.html,found:{original:r.found,modified:r.found}}),this.router.navigate(["page-assistant/compare"])}catch(r){this.error=`${n} ${r.message||r||t}`}finally{this.loading=!1}})}links=[{title:"Taxes",url:"https://www.canada.ca/en/services/taxes.html"},{title:"Scams and fraud - CRA",url:"https://www.canada.ca/en/revenue-agency/corporate/scams-fraud.html"},{title:"Income earned illegally is taxable",url:"https://www.canada.ca/en/revenue-agency/corporate/scams-fraud/income-earned-illegally-taxable.html"},{title:"Return a payment - Canada Dental Benefit - Closed",url:"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/dental-benefit/return-payment.html"}];static \u0275fac=function(t){return new(t||e)(z(mn),z(Ft),z(Je),z(Te))};static \u0275cmp=E({type:e,selectors:[["ca-test"]],decls:40,vars:12,consts:[["id","wb-cont"],[3,"innerHTML"],[1,"flex","flex-row","gap-2"],["label","Primary"],["label","Secondary","severity","secondary"],["label","Help","severity","help"],["label","Info","severity","info"],["label","Success","severity","success"],["label","Danger","severity","danger"],["label","Warn","severity","warn"],["label","Contrast","severity","contrast"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["label","your.translation.key","name","unique-name",3,"selectedChange","options","selected"],["variant","text","severity","info",3,"onClick"]],template:function(t,n){t&1&&(l(0,"h1",0),u(1),g(2,"translate"),s(),l(3,"p"),u(4),g(5,"translate"),s(),w(6,"p",1),g(7,"translate"),l(8,"div",2),w(9,"p-button",3)(10,"p-button",4)(11,"p-button",5)(12,"p-button",6)(13,"p-button",7)(14,"p-button",8)(15,"p-button",9)(16,"p-button",10),s(),l(17,"h2"),u(18,"Table of links that drop you into page compare tool"),s(),l(19,"p-table",11),f(20,xf,5,0,"ng-template",12)(21,yf,6,2,"ng-template",13),s(),l(22,"h2"),u(23,"Horizontal radio button component"),s(),l(24,"p"),u(25,"This component accepts:"),s(),l(26,"ul")(27,"li"),u(28,'label="your.translation.key" to set the label above the buttons'),s(),l(29,"li"),u(30,'name="unique-name" in case you use it more than once on a page'),s(),l(31,"li"),u(32,'[options]="yourArray" with your array of radio button labels, values, and icons '),s(),l(33,"li"),u(34,'[(selected)]="yourSelectedButton" to define which button is currently selected'),s(),l(35,"li"),u(36,'(selectedChange)="yourFunction($event) to define what happens when the buttons are clicked'),s()(),l(37,"p"),u(38,"The component emits the value of the selected radio button."),s(),l(39,"ca-horizontal-radio-buttons",14),ee("selectedChange",function(i){return J(n.yourSelectedButton,i)||(n.yourSelectedButton=i),i}),y("selectedChange",function(i){return n.yourFunction(i)}),s()),t&2&&(a(),C(h(2,6,"title.test")),a(3),C(h(5,8,"test.text")),a(2),d("innerHTML",h(7,10,"test.html"),Ve),a(13),d("value",n.links),a(20),d("options",n.yourArray),Z("selected",n.yourSelectedButton))},dependencies:[O,R,Oa,po,co,oe,ce],encapsulation:2})};var Cf=["*"],wf=({dt:e})=>`
.p-buttongroup .p-button {
    margin: 0;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-buttongroup .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-buttongroup {
    display:flex;
}

.p-buttongroup > .p-button {
    flex: 1;
}

/* For PrimeNG */

.p-buttongroup .p-button:focus,
.p-buttongroup p-button:focus .p-button,
.p-buttonset .p-button:focus,
.p-buttonset .p-button:focus,
.p-buttonset p-button:focus .p-button,
.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover,
.p-buttongroup p-button:not(:last-child) .p-button,
.p-buttongroup p-button:not(:last-child) .p-button:hover,
.p-buttonset .p-button:not(:last-child),
.p-buttonset .p-button:not(:last-child):hover,
.p-buttonset p-button:not(:last-child) .p-button,
.p-buttonset p-button:not(:last-child) .p-button:hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type),
.p-buttongroup p-button:not(:first-of-type):not(:last-of-type) .p-button,
.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),
.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type),
.p-buttongroup p-button:first-of-type:not(:only-of-type) .p-button,
.p-buttonset .p-button:first-of-type:not(:only-of-type),
.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type),
.p-buttongroup p-button:last-of-type:not(:only-of-type) .p-button,
.p-buttonset .p-button:last-of-type:not(:only-of-type),
.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,kf={root:"p-buttongroup p-component"},i0=(()=>{class e extends _e{name="buttongroup";theme=wf;classes=kf;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var Sf=(()=>{class e extends ae{_componentStyle=X(i0);static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-buttonGroup"],["p-buttongroup"],["p-button-group"]],features:[ge([i0]),re],ngContentSelectors:Cf,decls:2,vars:0,consts:[["role","group",1,"p-buttongroup","p-component"]],template:function(n,r){n&1&&(Ee(),l(0,"span",0),we(1),s())},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),a0=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[Sf]})}return e})();var Tf=["content"],If=["accepticon"],Mf=["rejecticon"],Ef=["headless"],zf=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),Ff=e=>({value:"open",params:e}),s0=e=>({$implicit:e});function Lf(e,o){e&1&&le(0)}function Bf(e,o){if(e&1&&(N(0),f(1,Lf,1,0,"ng-container",8),V()),e&2){let t=p(2);a(),d("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)("ngTemplateOutletContext",te(2,s0,t.confirmation))}}function Pf(e,o){e&1&&le(0)}function Of(e,o){if(e&1&&(N(0),f(1,Pf,1,0,"ng-container",8),V()),e&2){let t=p(3);a(),d("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",te(2,s0,t.confirmation))}}function Af(e,o){if(e&1&&w(0,"i",15),e&2){let t=p(4);fe(t.confirmation==null?null:t.confirmation.icon),d("ngClass","p-confirmpopup-icon")}}function Df(e,o){if(e&1&&(f(0,Af,1,3,"i",13),l(1,"span",14),u(2),s()),e&2){let t=p(3);d("ngIf",t.confirmation==null?null:t.confirmation.icon),a(2),C(t.confirmation==null?null:t.confirmation.message)}}function Rf(e,o){if(e&1&&w(0,"i"),e&2){let t=p(4);fe(t.confirmation==null?null:t.confirmation.rejectIcon)}}function $f(e,o){}function Nf(e,o){e&1&&f(0,$f,0,0,"ng-template",null,3,se)}function Vf(e,o){if(e&1){let t=M();l(0,"p-button",16),y("onClick",function(){b(t);let r=p(3);return v(r.onReject())}),f(1,Rf,1,2,"i",17)(2,Nf,2,0,null,18),s()}if(e&2){let t=p(3);d("label",t.rejectButtonLabel)("ngClass","p-confirmpopup-reject-button")("styleClass",t.confirmation==null?null:t.confirmation.rejectButtonStyleClass)("size",(t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.size)||"small")("text",(t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.text)||!1)("buttonProps",t.getRejectButtonProps()),D("aria-label",t.rejectButtonLabel),a(),d("ngIf",t.confirmation==null?null:t.confirmation.rejectIcon)("ngIfElse",t.rejecticon),a(),d("ngTemplateOutlet",t.rejectIconTemplate||t._rejectIconTemplate)}}function jf(e,o){if(e&1&&w(0,"i"),e&2){let t=p(4);fe(t.confirmation==null?null:t.confirmation.acceptIcon)}}function Uf(e,o){}function Hf(e,o){e&1&&f(0,Uf,0,0,"ng-template",null,4,se)}function Wf(e,o){if(e&1){let t=M();l(0,"p-button",19),y("onClick",function(){b(t);let r=p(3);return v(r.onAccept())}),f(1,jf,1,2,"i",17)(2,Hf,2,0,null,18),s()}if(e&2){let t=p(3);d("label",t.acceptButtonLabel)("ngClass","p-confirmpopup-accept-button")("styleClass",t.confirmation==null?null:t.confirmation.acceptButtonStyleClass)("size",(t.confirmation.acceptButtonProps==null?null:t.confirmation.acceptButtonProps.size)||"small")("buttonProps",t.getAcceptButtonProps()),D("aria-label",t.acceptButtonLabel),a(),d("ngIf",t.confirmation==null?null:t.confirmation.acceptIcon)("ngIfElse",t.accepticontemplate),a(),d("ngTemplateOutlet",t.acceptIconTemplate||t._acceptIconTemplate)}}function Kf(e,o){if(e&1&&(l(0,"div",9,1),f(2,Of,2,4,"ng-container",7)(3,Df,3,2,"ng-template",null,2,se),s(),l(5,"div",10),f(6,Vf,3,10,"p-button",11)(7,Wf,3,9,"p-button",12),s()),e&2){let t=Se(4),n=p(2);a(2),d("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",t),a(4),d("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),a(),d("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function qf(e,o){if(e&1){let t=M();l(0,"div",6),y("click",function(r){b(t);let i=p();return v(i.onOverlayClick(r))})("@animation.start",function(r){b(t);let i=p();return v(i.onAnimationStart(r))})("@animation.done",function(r){b(t);let i=p();return v(i.onAnimationEnd(r))}),f(1,Bf,2,4,"ng-container",7)(2,Kf,8,4,"ng-template",null,0,se),s()}if(e&2){let t=Se(3),n=p();fe(n.styleClass),d("ngClass","p-confirmpopup p-component")("ngStyle",n.style)("@animation",te(10,Ff,_t(7,zf,n.showTransitionOptions,n.hideTransitionOptions))),a(),d("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",t)}}var Gf=({dt:e})=>`
.p-confirmpopup {
    position: absolute;
    margin-top: ${e("confirmpopup.gutter")};
    top: 0;
    left: 0;
    background: ${e("confirmpopup.background")};
    color: ${e("confirmpopup.color")};
    border: 1px solid ${e("confirmpopup.border.color")};
    border-radius: ${e("confirmpopup.border.radius")};
    box-shadow: ${e("confirmpopup.shadow")};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${e("confirmpopup.content.padding")};
    gap: ${e("confirmpopup.content.gap")};
}

.p-confirmpopup-icon {
    font-size: ${e("confirmpopup.icon.size")};
    width: ${e("confirmpopup.icon.size")};
    height: ${e("confirmpopup.icon.size")};
    color: ${e("confirmpopup.icon.color")};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${e("confirmpopup.footer.gap")};
    padding: ${e("confirmpopup.footer.padding")};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${e("confirmpopup.gutter")} * -1);
    margin-bottom: ${e("confirmpopup.gutter")};
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: ${e("confirmpopup.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${e("confirmpopup.gutter")} - 2px);
    margin-left: calc(-1 * (${e("confirmpopup.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("confirmpopup.background")};
}

.p-confirmpopup:before {
    border-width: ${e("confirmpopup.gutter")};
    margin-left: calc(-1 * ${e("confirmpopup.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("confirmpopup.border.color")};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${e("confirmpopup.background")};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${e("confirmpopup.border.color")};
}
`,Yf={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},l0=(()=>{class e extends _e{name="confirmpopup";theme=Gf;classes=Yf;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var di=(()=>{class e extends ae{el;confirmationService;renderer;cd;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(t){this._visible=t,this.cd.markForCheck()}container;subscription;confirmation;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=X(l0);constructor(t,n,r,i,c,m){super(),this.el=t,this.confirmationService=n,this.renderer=r,this.cd=i,this.overlayService=c,this.document=m,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(_=>{if(!_){this.hide();return}_.key===this.key&&(this.confirmation=_,Object.keys(_).forEach(S=>{this[S]=_[S]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new q,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new q,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"rejecticon":this._rejectIconTemplate=t.template;break;case"accepticon":this._acceptIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break}})}option(t,n){let r=this;if(r.hasOwnProperty(t))return n?r[n]:r[t]}onEscapeKeydown(t){this.confirmation&&this.confirmation.closeOnEscape&&this.onReject()}onAnimationStart(t){if(t.toState==="open"){this.container=t.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let n=this.getElementToFocus();n&&n.focus()}}onAnimationEnd(t){switch(t.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}getElementToFocus(){switch(this.defaultFocus){case"accept":return yt(this.container,".p-confirm-popup-accept");case"reject":return yt(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&vr.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;Hi(this.container,this.confirmation?.target,!1);let t=pr(this.container),n=pr(this.confirmation?.target),r=0;t.left<n.left&&(r=n.left-t.left),this.container.style.setProperty("--overlayArrowLeft",`${r}px`),t.top<n.top&&ji(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let t=Yi()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,t,r=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let i=this.confirmation.target;this.container!==r.target&&!this.container?.contains(r.target)&&i!==r.target&&!i.contains(r.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!Qi()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new pa(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&vr.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(Ct.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(Ct.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||e)(z(Ko),z(to),z(qo),z(en),z(ra),z(Qt))};static \u0275cmp=E({type:e,selectors:[["p-confirmPopup"],["p-confirmpopup"],["p-confirm-popup"]],contentQueries:function(n,r,i){if(n&1&&(ie(i,Tf,4),ie(i,If,4),ie(i,Mf,4),ie(i,Ef,4),ie(i,oe,4)),n&2){let c;j(c=U())&&(r.contentTemplate=c.first),j(c=U())&&(r.acceptIconTemplate=c.first),j(c=U())&&(r.rejectIconTemplate=c.first),j(c=U())&&(r.headlessTemplate=c.first),j(c=U())&&(r.templates=c)}},hostBindings:function(n,r){n&1&&y("keydown.escape",function(c){return r.onEscapeKeydown(c)},!1,Ti)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",H],baseZIndex:[2,"baseZIndex","baseZIndex",xt],style:"style",styleClass:"styleClass",visible:"visible"},features:[ge([l0]),re],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["rejecticon",""],["accepticontemplate",""],["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"click","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirmpopup-content"],[1,"p-confirmpopup-footer"],["type","button",3,"label","ngClass","styleClass","size","text","buttonProps","onClick",4,"ngIf"],["type","button",3,"label","ngClass","styleClass","size","buttonProps","onClick",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirmpopup-message"],[3,"ngClass"],["type","button",3,"onClick","label","ngClass","styleClass","size","text","buttonProps"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","ngClass","styleClass","size","buttonProps"]],template:function(n,r){n&1&&f(0,qf,4,12,"div",5),n&2&&d("ngIf",r.visible)},dependencies:[F,Oe,$,Be,it,G,Q,ce],encapsulation:2,data:{animation:[Zt("animation",[pt("void",dt({transform:"scaleY(0.8)",opacity:0})),pt("open",dt({transform:"translateY(0)",opacity:1})),ut("void => open",ct("{{showTransitionParams}}")),ut("open => void",ct("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),c0=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[di,G,G]})}return e})();var So=["*"],u0=["content"],m0=(e,o,t)=>({activateCallback:e,value:o,active:t});function Xf(e,o){e&1&&w(0,"p-stepper-separator")}function Zf(e,o){if(e&1){let t=M();l(0,"button",0),y("click",function(){b(t);let r=p();return v(r.onStepClick())}),l(1,"span",1),u(2),s(),l(3,"span",2),we(4),s()(),f(5,Xf,1,0,"p-stepper-separator")}if(e&2){let t=p();d("tabindex",t.isStepDisabled()?-1:void 0)("disabled",t.isStepDisabled()),D("id",t.id())("role","tab")("aria-controls",t.ariaControls()),a(2),C(t.value()),a(3),rt(t.isSeparatorVisible()?5:-1)}}function Jf(e,o){e&1&&le(0)}function eg(e,o){e&1&&w(0,"p-stepper-separator")}function tg(e,o){if(e&1&&f(0,Jf,1,0,"ng-container",3)(1,eg,1,0,"p-stepper-separator"),e&2){let t=p();d("ngTemplateOutlet",t.content||t._contentTemplate)("ngTemplateOutletContext",$t(3,m0,t.onStepClick.bind(t),t.value(),t.active())),a(),rt(t.isSeparatorVisible()?1:-1)}}var d0=e=>({transitionParams:e}),og=e=>({value:"visible",params:e}),ng=e=>({value:"hidden",params:e});function rg(e,o){e&1&&w(0,"p-stepper-separator")}function ig(e,o){e&1&&le(0)}function ag(e,o){if(e&1&&f(0,ig,1,0,"ng-container",1),e&2){let t=p();d("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",$t(2,m0,t.updateValue.bind(t),t.value(),t.active()))}}var lg=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
/* For PrimeNG */
.p-steppanel {
    overflow: hidden;
}

.p-stepppanel:not(.ng-animating) {
    overflow: inherit;
}
`,sg={root:({props:e})=>["p-stepper p-component",{"p-readonly":e.linear}],separator:"p-stepper-separator"},p0=(()=>{class e extends _e{name="stepper";theme=lg;classes=sg;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var jo=(()=>{class e extends ae{steps=Yo(nt(()=>Tt));static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-step-list"]],contentQueries:function(n,r,i){n&1&&Rt(i,r.steps,Tt,4),n&2&&Zo()},hostVars:4,hostBindings:function(n,r){n&2&&Me("p-steplist",!0)("p-component",!0)},features:[re],ngContentSelectors:So,decls:1,vars:0,template:function(n,r){n&1&&(Ee(),we(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),ui=(()=>{class e extends ae{static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-stepper-separator"]],hostVars:4,hostBindings:function(n,r){n&2&&Me("p-stepper-separator",!0)("p-component",!0)},features:[re],ngContentSelectors:So,decls:1,vars:0,template:function(n,r){n&1&&(Ee(),we(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),pi=(()=>{class e extends ae{pcStepper=X(nt(()=>To));value=Mo();isActive=Le(()=>this.pcStepper.value()===this.value());step=Go(nt(()=>Tt));stepPanel=Go(nt(()=>Uo));constructor(){super(),zo(()=>{this.step().value.set(this.value())}),zo(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=E({type:e,selectors:[["p-step-item"]],contentQueries:function(n,r,i){n&1&&(Rt(i,r.step,Tt,5),Rt(i,r.stepPanel,Uo,5)),n&2&&Zo(2)},hostVars:5,hostBindings:function(n,r){n&2&&(D("data-p-active",r.isActive()),Me("p-stepitem",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[re],ngContentSelectors:So,decls:1,vars:0,template:function(n,r){n&1&&(Ee(),we(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),Tt=(()=>{class e extends ae{pcStepper=X(nt(()=>To));value=Mo();disabled=Wo(!1,{transform:t=>_r(t)});active=Le(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=Le(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=Le(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=Le(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=Le(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps(),n=t.indexOf(this),r=t.length;return n!==r-1}else return!1});content;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-step"]],contentQueries:function(n,r,i){if(n&1&&(ie(i,u0,4),ie(i,oe,4)),n&2){let c;j(c=U())&&(r.content=c.first),j(c=U())&&(r.templates=c)}},hostVars:13,hostBindings:function(n,r){n&2&&(D("aria-current",r.active()?"step":void 0)("role","presentation")("data-p-active",r.active())("data-p-disabled",r.isStepDisabled())("data-pc-name","step"),Me("p-step",!0)("p-step-active",r.active())("p-disabled",r.isStepDisabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[re],ngContentSelectors:So,decls:2,vars:1,consts:[["type","button",1,"p-step-header",3,"click","tabindex","disabled"],[1,"p-step-number"],[1,"p-step-title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,r){n&1&&(Ee(),f(0,Zf,6,7)(1,tg,2,7)),n&2&&rt(!r.content&&!r._contentTemplate?0:1)},dependencies:[F,Be,ui,G],encapsulation:2,changeDetection:0})}return e})(),Uo=(()=>{class e extends ae{pcStepper=X(nt(()=>To));transitionOptions=Le(()=>this.pcStepper.transitionOptions());value=Mo(void 0);active=Le(()=>this.pcStepper.value()===this.value());ariaControls=Le(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=Le(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=Le(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=Le(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,n=Wi(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return ta(this.el.nativeElement,n)!==t-1}});contentTemplate;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}updateValue(t){this.pcStepper.updateValue(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-step-panel"]],contentQueries:function(n,r,i){if(n&1&&(ie(i,u0,5),ie(i,oe,4)),n&2){let c;j(c=U())&&(r.contentTemplate=c.first),j(c=U())&&(r.templates=c)}},hostVars:11,hostBindings:function(n,r){n&2&&(D("role","tabpanel")("aria-controls",r.ariaControls())("id",r.id())("data-p-active",r.active())("data-pc-name","steppanel"),Me("p-steppanel",!0)("p-component",!0)("p-steppanel-active",r.active()))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[re],decls:3,vars:11,consts:[[1,"p-steppanel-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,r){n&1&&(f(0,rg,1,0,"p-stepper-separator"),l(1,"div",0),f(2,ag,1,6,"ng-container"),s()),n&2&&(rt(r.isSeparatorVisible()?0:-1),a(),d("@content",r.isVertical()?r.active()?te(5,og,te(3,d0,r.transitionOptions())):te(9,ng,te(7,d0,r.transitionOptions())):void 0),a(),rt(r.active()?2:-1))},dependencies:[F,Be,ui,G],encapsulation:2,data:{animation:[Zt("content",[pt("hidden",dt({height:"0",visibility:"hidden"})),pt("visible",dt({height:"*",visibility:"visible"})),ut("visible <=> hidden",[ct("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),ut("void => *",ct(0))])]},changeDetection:0})}return e})(),mi=(()=>{class e extends ae{static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-step-panels"]],hostVars:4,hostBindings:function(n,r){n&2&&Me("p-steppanels",!0)("p-component",!0)},features:[re],ngContentSelectors:So,decls:1,vars:0,template:function(n,r){n&1&&(Ee(),we(0))},dependencies:[F,G],encapsulation:2,changeDetection:0})}return e})(),To=(()=>{class e extends ae{value=Mo(void 0);linear=Wo(!1,{transform:t=>_r(t)});transitionOptions=Wo("400ms cubic-bezier(0.86, 0, 0.07, 1)");_componentStyle=X(p0);id=vt(eo("pn_id_"));stepItems=Yo(pi);steps=Yo(Tt);stepList=Go(jo);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-stepper"]],contentQueries:function(n,r,i){n&1&&(Rt(i,r.stepItems,pi,4),Rt(i,r.steps,Tt,4),Rt(i,r.stepList,jo,5)),n&2&&Zo(3)},hostVars:6,hostBindings:function(n,r){n&2&&(D("role","tablist")("id",r.id()),Me("p-stepper",!0)("p-component",!0))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"]},outputs:{value:"valueChange"},features:[ge([p0]),re],ngContentSelectors:So,decls:1,vars:0,template:function(n,r){n&1&&(Ee(),we(0))},dependencies:[F,G],encapsulation:2,changeDetection:0})}return e})(),f0=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[To,jo,mi,Uo,pi,Tt,ui,G,G]})}return e})();var dg=["handle"],pg=["input"],ug=e=>({checked:e});function mg(e,o){e&1&&le(0)}function fg(e,o){if(e&1&&f(0,mg,1,0,"ng-container",4),e&2){let t=p();d("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",te(2,ug,t.checked()))}}var gg=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
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
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleSwitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggle-switch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,hg={root:{position:"relative"}},bg={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},g0=(()=>{class e extends _e{name="toggleswitch";theme=gg;classes=bg;inlineStyles=hg;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var vg={provide:ln,useExisting:nt(()=>h0),multi:!0},h0=(()=>{class e extends ae{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new q;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=X(g0);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=E({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,r,i){if(n&1&&(ie(i,dg,4),ie(i,oe,4)),n&2){let c;j(c=U())&&(r.handleTemplate=c.first),j(c=U())&&(r.templates=c)}},viewQuery:function(n,r){if(n&1&&Ue(pg,5),n&2){let i;j(i=U())&&(r.input=i.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",xt],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",H],readonly:[2,"readonly","readonly",H],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",H]},outputs:{onChange:"onChange"},features:[ge([vg,g0]),re],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,r){if(n&1){let i=M();l(0,"div",1),y("click",function(m){return b(i),v(r.onClick(m))}),l(1,"input",2,0),y("focus",function(){return b(i),v(r.onFocus())})("blur",function(){return b(i),v(r.onBlur())}),s(),l(3,"span",3)(4,"div",3),f(5,fg,1,4,"ng-container"),s()()()}n&2&&(je(r.sx("root")),fe(r.styleClass),d("ngClass",r.cx("root"))("ngStyle",r.style),D("data-pc-name","toggleswitch")("data-pc-section","root"),a(),d("ngClass",r.cx("input"))("checked",r.checked())("disabled",r.disabled)("pAutoFocus",r.autofocus),D("id",r.inputId)("aria-checked",r.checked())("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel)("name",r.name)("tabindex",r.tabindex)("data-pc-section","hiddenInput"),a(2),d("ngClass",r.cx("slider")),D("data-pc-section","slider"),a(),d("ngClass",r.cx("handle")),a(),rt(r.handleTemplate||r._handleTemplate?5:-1))},dependencies:[F,Oe,Be,it,sn,G],encapsulation:2,changeDetection:0})}return e})(),b0=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=be({type:e});static \u0275inj=he({imports:[h0,G,G]})}return e})();function xg(e,o){e&1&&(N(0),l(1,"p",3),u(2,"Only links from the following domains are allowed:"),s(),l(3,"ul",3)(4,"li"),u(5,"www.canada.ca"),s()(),V())}function yg(e,o){e&1&&(N(0),l(1,"p",3),u(2,"Only links from the following domains are allowed:"),s(),l(3,"ul",3)(4,"li"),u(5,"www.canada.ca"),s(),l(6,"li"),u(7,"test.canada.ca"),s(),l(8,"li"),u(9,"gc-proto.github.io"),s(),l(10,"li"),u(11,"cra-proto.github.io"),s(),l(12,"li"),u(13,"cra-design.github.io"),s()(),V())}function Cg(e,o){if(e&1){let t=M();l(0,"p-iftalabel")(1,"input",9),ee("ngModelChange",function(r){b(t);let i=p().$implicit;return J(i.originalHref,r)||(i.originalHref=r),v(r)}),s(),l(2,"label",10),u(3,"Original URL"),s()()}if(e&2){let t=p().$implicit;a(),Z("ngModel",t.originalHref)}}function wg(e,o){e&1&&w(0,"p-tag",11)}function kg(e,o){if(e&1){let t=M();l(0,"div"),f(1,Cg,4,1,"p-iftalabel",0),l(2,"p-inputgroup"),f(3,wg,1,0,"p-tag",4),l(4,"p-iftalabel")(5,"input",5),ee("ngModelChange",function(r){let i=b(t).$implicit;return J(i.href,r)||(i.href=r),v(r)}),s(),l(6,"label",6),u(7),s()(),l(8,"p-inputgroup-addon")(9,"p-button",7),y("click",function(r){let i=b(t).$implicit,c=p(2);return v(c.approve.emit({url:i,event:r}))}),s()(),l(10,"p-inputgroup-addon")(11,"p-button",8),y("click",function(){let r=b(t).$implicit,i=p(2);return v(i.remove.emit(r))}),s()()()()}if(e&2){let t=o.$implicit,n=p(2);a(),d("ngIf",t.originalHref),a(2),d("ngIf",n.type==="proto"),a(2),d("id",n.labelKey),Z("ngModel",t.href),a(),d("for",n.labelKey),a(),B("",n.labelKey," URL"),a(4),d("pTooltip",n.type==="proto"?"Remove link":"Remove item")}}function Sg(e,o){if(e&1&&(N(0),l(1,"div",1),f(2,xg,6,0,"ng-container",0)(3,yg,14,0,"ng-container",0)(4,kg,12,7,"div",2),s(),V()),e&2){let t=p();a(2),d("ngIf",t.labelKey==="Blocked"&&t.type==="prod"),a(),d("ngIf",t.labelKey==="Blocked"&&t.type==="proto"),a(),d("ngForOf",t.links)}}var tr=class e{labelKey;links;type="prod";approve=new q;remove=new q;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-link-list"]],inputs:{labelKey:"labelKey",links:"links",type:"type"},outputs:{approve:"approve",remove:"remove"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"flex","flex-column","gap-2"],[4,"ngFor","ngForOf"],[1,"my-0"],["icon","pi pi-github","value","Prototype",4,"ngIf"],["type","text","pInputText","","variant","outlined","pSize","small","fluid","",3,"ngModelChange","id","ngModel"],[3,"for"],["icon","pi pi-check-circle","pTooltip","Revalidate","tooltipPosition","top","severity","success","variant","text",3,"click"],["icon","pi pi-times-circle","tooltipPosition","top","severity","danger","variant","text",3,"click","pTooltip"],["type","text","id","original","pInputText","","disabled","","pSize","small","fluid","",1,"ng-invalid","ng-dirty","bg-white",3,"ngModelChange","ngModel"],["for","original"],["icon","pi pi-github","value","Prototype"]],template:function(t,n){t&1&&f(0,Sg,5,3,"ng-container",0),t&2&&d("ngIf",n.links==null?null:n.links.length)},dependencies:[F,He,$,ye,We,Ie,xe,so,lo,Et,ro,io,pn,un,xa,Q,ce,mt,qn,Vo],styles:["[_nghost-%COMP%]{display:block}"]})};function Tg(e,o){e&1&&(l(0,"tr")(1,"th"),u(2,"Production URL"),s(),l(3,"th"),u(4,"Prototype URL"),s()())}function Ig(e,o){if(e&1&&(l(0,"tr")(1,"td"),u(2),s(),l(3,"td"),u(4),s()()),e&2){let t=o.$implicit;a(2),C(t.production.href),a(2),C(t.prototype==null?null:t.prototype.href)}}function Mg(e,o){if(e&1&&(l(0,"p-table",21),f(1,Tg,5,0,"ng-template",null,1,se)(3,Ig,5,2,"ng-template",null,2,se),s()),e&2){let t=p(2);d("value",t.urlPairs)("scrollable",!0)}}function Eg(e,o){e&1&&w(0,"p-badge",24)}function zg(e,o){if(e&1){let t=M();l(0,"p-chip",22),y("onRemove",function(){let r=b(t).$implicit,i=p(2);return v(i.removeTerm(r))}),f(1,Eg,1,0,"p-badge",23),s()}if(e&2){let t=o.$implicit,n=p(2);d("label",t.toString())("styleClass",n.getTermColor(t))("removable",!0),a(),d("ngIf",n.isRegex(t))}}function Fg(e,o){if(e&1){let t=M();l(0,"p-button",25),y("onClick",function(){b(t);let r=p(2);return v(r.urlPairs=[])}),s()}}function Lg(e,o){if(e&1){let t=M();l(0,"p-button",26),y("onClick",function(){b(t);let r=p().activateCallback;return p().validateUrlPairs(),v(r(2))}),s()}}function Bg(e,o){if(e&1){let t=M();l(0,"p-button",27),y("onClick",function(){b(t);let r=p().activateCallback;return v(r(2))}),s()}if(e&2){let t=p(2);d("disabled",t.urlPairs.length===0)}}function Pg(e,o){if(e&1){let t=M();l(0,"div",7)(1,"h2",8),u(2,"Canada.ca URLs"),s(),l(3,"p",9),u(4,"Paste some relevant Canada.ca URLs to get started. These links will be crawled to find any child pages to include in your inventory. Each link should begin on a new line. If you have prototype links, you can paste both columns or separate them with a comma or semicolon."),s(),l(5,"p-iftalabel")(6,"textarea",10),ee("ngModelChange",function(r){b(t);let i=p();return J(i.rawUrls,r)||(i.rawUrls=r),v(r)}),y("blur",function(){b(t);let r=p();return v(r.setUrlPairs())})("paste",function(){b(t);let r=p();return v(r.onPasteUrls())}),s(),l(7,"label",11),u(8,"URLs"),s()(),f(9,Mg,5,2,"p-table",12),l(10,"h2",8),u(11,"Search criteria"),s(),l(12,"p",9),u(13,"Enter terms separated by semicolons or new lines. These will be used to include additional pages in your result, even if there is no direct breadcrumb IA relationship between the pages. The search is "),l(14,"strong"),u(15,"not"),s(),u(16,' case-sensitive. Regex patterns should begin with "regex:".'),s(),l(17,"p-iftalabel")(18,"textarea",13),ee("ngModelChange",function(r){b(t);let i=p();return J(i.rawTerms,r)||(i.rawTerms=r),v(r)}),y("blur",function(){b(t);let r=p();return r.updateTerms(),v(r.updateRawTerms())})("keydown",function(r){b(t);let i=p();return v(i.onKeydownTerm(r))})("paste",function(){b(t);let r=p();return v(r.onPasteTerm())}),s(),l(19,"label",14),u(20,"Search terms (optional)"),s()(),l(21,"div",15),f(22,zg,2,4,"p-chip",16),s()(),l(23,"div",17),f(24,Fg,1,0,"p-button",18)(25,Lg,1,0,"p-button",19)(26,Bg,1,1,"p-button",20),s()}if(e&2){let t=p();a(6),Z("ngModel",t.rawUrls),a(3),d("ngIf",t.includePrototypeLinks),a(9),Z("ngModel",t.rawTerms),a(4),d("ngForOf",t.terms),a(2),d("ngIf",t.urlPairs.length>0&&t.urlsChecking.length===0),a(),d("ngIf",t.urlsChecking.length>0),a(),d("ngIf",t.urlsChecking.length===0)}}function Og(e,o){e&1&&(l(0,"h2"),u(1,"Validating links"),s())}function Ag(e,o){e&1&&(l(0,"h2"),u(1,"Validated links"),s())}function Dg(e,o){if(e&1&&(l(0,"span"),u(1),s()),e&2){let t=p(3);a(),Eo("",t.urlChecked,"/",t.urlTotal,"")}}function Rg(e,o){if(e&1&&(N(0),l(1,"p-chip",42),w(2,"i",43),l(3,"span"),u(4),s()(),V()),e&2){let t=o.$implicit;a(4),C(t.href)}}function $g(e,o){if(e&1&&(N(0),l(1,"p-chip",44),w(2,"i",43),l(3,"span"),u(4),s()(),V()),e&2){let t=o.$implicit;a(4),C(t.href)}}function Ng(e,o){if(e&1&&(l(0,"div",40),f(1,Rg,5,1,"ng-container",41)(2,$g,5,1,"ng-container",41),s()),e&2){let t=p(3);a(),d("ngForOf",t.urlsChecking),a(),d("ngForOf",t.urlsProtoChecking)}}function Vg(e,o){if(e&1&&(N(0),f(1,Og,2,0,"h2",28)(2,Ag,2,0,"h2",28),l(3,"p-progressbar",6),f(4,Dg,2,2,"ng-template",null,0,se),s(),f(6,Ng,3,2,"div",39),V()),e&2){let t=p(2);a(),d("ngIf",t.urlsChecking.length>0),a(),d("ngIf",t.urlsChecking.length===0),a(),d("value",t.urlPercent),a(3),d("ngIf",t.urlsChecking.length>0||t.urlsProtoChecking.length>0)}}function jg(e,o){e&1&&(l(0,"h2",45),u(1,"Broken links"),s())}function Ug(e,o){if(e&1){let t=M();l(0,"ca-link-list",46),y("approve",function(r){b(t);let i=p(2);return v(i.approve(r.url,r.event,"prod"))})("remove",function(r){b(t);let i=p(2);return v(i.remove(r,"prod"))}),s()}if(e&2){let t=p(2);d("links",t.urlsBad)}}function Hg(e,o){if(e&1){let t=M();l(0,"ca-link-list",47),y("approve",function(r){b(t);let i=p(2);return v(i.approve(r.url,r.event,"proto"))})("remove",function(r){b(t);let i=p(2);return v(i.remove(r,"proto"))}),s()}if(e&2){let t=p(2);d("links",t.urlsProtoBad)}}function Wg(e,o){e&1&&(l(0,"h2",45),u(1,"Redirected links"),s())}function Kg(e,o){if(e&1){let t=M();l(0,"ca-link-list",48),y("approve",function(r){b(t);let i=p(2);return v(i.approve(r.url,r.event,"prod"))})("remove",function(r){b(t);let i=p(2);return v(i.remove(r,"prod"))}),s()}if(e&2){let t=p(2);d("links",t.urlsRedirected)}}function qg(e,o){if(e&1){let t=M();l(0,"ca-link-list",49),y("approve",function(r){b(t);let i=p(2);return v(i.approve(r.url,r.event,"proto"))})("remove",function(r){b(t);let i=p(2);return v(i.remove(r,"proto"))}),s()}if(e&2){let t=p(2);d("links",t.urlsProtoRedirected)}}function Gg(e,o){e&1&&(l(0,"h2",45),u(1,"Blocked links"),s())}function Yg(e,o){if(e&1){let t=M();l(0,"ca-link-list",50),y("approve",function(r){b(t);let i=p(2);return v(i.approve(r.url,r.event,"prod"))})("remove",function(r){b(t);let i=p(2);return v(i.remove(r,"prod"))}),s()}if(e&2){let t=p(2);d("links",t.urlsBlocked)}}function Qg(e,o){if(e&1){let t=M();l(0,"ca-link-list",51),y("approve",function(r){b(t);let i=p(2);return v(i.approve(r.url,r.event,"proto"))})("remove",function(r){b(t);let i=p(2);return v(i.remove(r,"proto"))}),s()}if(e&2){let t=p(2);d("links",t.urlsProtoBlocked)}}function Xg(e,o){if(e&1&&(l(0,"li"),w(1,"i",53),u(2),s()),e&2){let t=o.$implicit;a(2),C(t.href)}}function Zg(e,o){if(e&1&&(l(0,"li"),w(1,"i",54),u(2),s()),e&2){let t=o.$implicit;a(2),C(t.href)}}function Jg(e,o){if(e&1&&(N(0),l(1,"h2",45),u(2,"Valid links"),s(),l(3,"ul",52),f(4,Xg,3,1,"li",41)(5,Zg,3,1,"li",41),s(),V()),e&2){let t=p(2);a(4),d("ngForOf",t.urlsOk),a(),d("ngForOf",t.urlsProtoOk)}}function e4(e,o){if(e&1){let t=M();l(0,"div",7),f(1,Vg,7,4,"ng-container",28),w(2,"p-confirmpopup"),f(3,jg,2,0,"h2",29)(4,Ug,1,1,"ca-link-list",30)(5,Hg,1,1,"ca-link-list",31)(6,Wg,2,0,"h2",29)(7,Kg,1,1,"ca-link-list",32)(8,qg,1,1,"ca-link-list",33)(9,Gg,2,0,"h2",29)(10,Yg,1,1,"ca-link-list",34)(11,Qg,1,1,"ca-link-list",35)(12,Jg,6,2,"ng-container",28),s(),l(13,"div",36)(14,"p-button",37),y("onClick",function(){let r=b(t).activateCallback;return v(r(1))}),s(),l(15,"p-button",38),y("onClick",function(){let r=b(t).activateCallback;return v(r(3))}),s()()}if(e&2){let t=p();a(),d("ngIf",t.urlPairs.length>0),a(2),d("ngIf",t.urlsBad.length>0||t.urlsProtoBad.length>0),a(),d("ngIf",t.urlsBad.length>0),a(),d("ngIf",t.urlsProtoBad.length>0),a(),d("ngIf",t.urlsRedirected.length>0||t.urlsProtoRedirected.length>0),a(),d("ngIf",t.urlsRedirected.length>0),a(),d("ngIf",t.urlsProtoRedirected.length>0),a(),d("ngIf",t.urlsBlocked.length>0||t.urlsProtoBlocked.length>0),a(),d("ngIf",t.urlsBlocked.length>0),a(),d("ngIf",t.urlsProtoBlocked.length>0),a(),d("ngIf",t.urlsOk.length>0||t.urlsProtoOk.length>0)}}function t4(e,o){if(e&1){let t=M();l(0,"div",7),u(1," To do: set up progress bars & fxns for checking relationship between pasted links, crawling root URLs to create IA tree, & referring link/search term/url structure crawl (for unique links that aren't in the IA tree) "),s(),l(2,"div",55)(3,"p-button",37),y("onClick",function(){let r=b(t).activateCallback;return v(r(2))}),s()()}}var or=class e{constructor(o){this.confirmationService=o}activeStep=1;rawTerms="";terms=[];updateTerms(){this.terms=this.rawTerms.split(/[\n;\t]+/).map(o=>o.trim()).filter(Boolean).map(o=>{try{if(o.startsWith("regex:")){let t=o.slice(6);return new RegExp(t,"smi")}else return o.toLowerCase()}catch{return`invalid ${o}`}}),this.terms=Array.from(new Set(this.terms))}updateRawTerms(){this.rawTerms=this.terms.map(o=>o instanceof RegExp?`regex:${o.source}`:o).join("; ")}onKeydownTerm(o){(o.key===";"||o.key==="Enter"||o.key==="Tab")&&this.updateTerms()}onPasteTerm(){setTimeout(()=>this.updateTerms(),0)}removeTerm(o){this.terms=this.terms.filter(t=>t!==o),console.log(this.terms),this.updateRawTerms()}isRegex(o){return o instanceof RegExp}getTermColor(o){return this.isRegex(o)?"bg-blue-100":typeof o=="string"&&o.startsWith("invalid regex")?"bg-red-100":"bg-green-100"}rawUrls="";urlPairs=[];includePrototypeLinks=!1;urlTotal=0;urlChecked=0;urlPercent=0;resetProgress(){this.urlTotal=this.urlPairs.length+this.urlPairs.filter(o=>o.prototype).length,this.urlChecked=0,this.urlPercent=0}allowedHosts=new Set(["cra-design.github.io","cra-proto.github.io","gc-proto.github.io","test.canada.ca","www.canada.ca"]);setUrlPairs(){this.urlPairs=this.rawUrls.split(/\r?\n/).map(o=>o.trim().toLowerCase()).filter(Boolean).map(o=>{let[t,n]=o.split(/[\t,; ]+/),r={href:t?.trim()||"",status:"checking"},i=n?{href:n.trim(),status:"checking"}:void 0;return{production:r,prototype:i}}),this.urlPairs=Array.from(new Map(this.urlPairs.map(o=>[o.production.href,o])).values()),this.includePrototypeLinks=this.urlPairs.some(o=>o.prototype&&o.prototype.href!=="")}onPasteUrls(){setTimeout(()=>this.setUrlPairs(),0)}checkStatus(o){return Y(this,null,function*(){try{ma.production||(yield new Promise(r=>setTimeout(r,500+Math.random()*1e3)));let t=new URL(o.href);if(!this.allowedHosts.has(t.host)){o.status="blocked";return}let n=yield fetch(o.href,{method:"HEAD",cache:"no-store"});!n.ok||n.url.includes("404.html")?o.status="bad":n.url!==o.href?(o.status="redirect",o.originalHref=o.href,o.href=n.url):o.status="ok"}catch{o.status="bad"}})}validateUrlItems(o){return Y(this,null,function*(){let t=o.map(i=>this.checkStatus(i).finally(()=>{this.urlChecked++,this.urlPercent=this.urlChecked/this.urlTotal*100}));yield Promise.all(t),yield new Promise(i=>setTimeout(i,100));let n=o.filter(i=>i.status==="bad");n.forEach(i=>i.status="checking"),this.urlChecked-=n.length;let r=n.map(i=>this.checkStatus(i).finally(()=>{this.urlChecked++,this.urlPercent=this.urlChecked/this.urlTotal*100}));yield Promise.all(r)})}validateUrlPairs(){return Y(this,null,function*(){this.urlPairs?.length&&(this.resetProgress(),yield this.validateUrlItems(this.urlPairs.map(o=>o.production)),this.includePrototypeLinks&&(yield this.validateUrlItems(this.urlPairs.map(o=>o.prototype).filter(o=>!!o))),this.goToStep3())})}goToStep3(){this.urlsOk.length+this.urlsProtoOk.length===this.urlTotal&&(this.activeStep=3)}get urlsChecking(){return this.urlPairs.map(o=>o.production).filter(o=>o.status==="checking")}get urlsBlocked(){return this.urlPairs.map(o=>o.production).filter(o=>o.status==="blocked")}get urlsBad(){return this.urlPairs.map(o=>o.production).filter(o=>o.status==="bad")}get urlsRedirected(){return this.urlPairs.map(o=>o.production).filter(o=>o.status==="redirect")}get urlsOk(){return this.urlPairs.map(o=>o.production).filter(o=>o.status==="ok")}get urlsProtoChecking(){return this.urlPairs.map(o=>o.prototype).filter(o=>!!o&&o.status==="checking")}get urlsProtoBlocked(){return this.urlPairs.map(o=>o.prototype).filter(o=>!!o&&o.status==="blocked")}get urlsProtoBad(){return this.urlPairs.map(o=>o.prototype).filter(o=>!!o&&o.status==="bad")}get urlsProtoRedirected(){return this.urlPairs.map(o=>o.prototype).filter(o=>!!o&&o.status==="redirect")}get urlsProtoOk(){return this.urlPairs.map(o=>o.prototype).filter(o=>!!o&&o.status==="ok")}remove(o,t){let n=1;if(t==="prod")this.urlPairs.find(i=>i.production===o)?.prototype&&(n+=1),this.urlPairs=this.urlPairs.filter(i=>i.production!==o);else{let r=this.urlPairs.find(i=>i.prototype===o);r&&(r.prototype=void 0)}this.urlChecked-=n,this.urlTotal-=n,this.urlPercent=this.urlChecked/this.urlTotal*100,this.goToStep3()}approve(o,t,n){if(o.href=o.href.trim().toLowerCase(),(n==="prod"?this.urlPairs.map(i=>i.production):this.urlPairs.map(i=>i.prototype).filter(i=>!!i)).some(i=>i!==o&&i.href===o.href))if(n==="prod"){this.confirmDuplicate(t,o);return}else{this.confirmProtoDuplicate(t,o);return}this.revalidate(o)}revalidate(o){o.status="checking",this.urlChecked-=1,this.urlPercent=this.urlChecked/this.urlTotal*100,this.checkStatus(o).finally(()=>{this.urlChecked++,this.urlPercent=this.urlChecked/this.urlTotal*100,this.goToStep3()})}confirmDuplicate(o,t){this.confirmationService.confirm({target:o.currentTarget,message:"This URL is already included. Do you want to remove the duplicate link?",icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Yes",severity:"danger"},accept:()=>{this.remove(t,"prod")},reject:()=>{console.log("Cancel adding duplicate link")}})}confirmProtoDuplicate(o,t){this.confirmationService.confirm({target:o.currentTarget,message:"This prototype URL was already included for another page. Do you want to keep it anyway?",icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Yes",severity:"success"},accept:()=>{this.revalidate(t)},reject:()=>{console.log("Cancel adding duplicate link")}})}static \u0275fac=function(t){return new(t||e)(z(to))};static \u0275cmp=E({type:e,selectors:[["ca-ia-assistant"]],decls:24,vars:14,consts:[["content",""],["header",""],["body",""],["id","wb-cont"],[3,"valueChange","value","linear"],[1,"-mx-4"],[3,"value"],[1,"flex","flex-column","gap-2","p-3","border-2","border-dashed","border-primary"],[1,"my-0"],[1,"my-0","text-color-secondary","text-xs"],["id","urls","autoResize","true","rows","5","pTextarea","","fluid","",3,"ngModelChange","blur","paste","ngModel"],["for","urls"],["size","small","stripedRows","","scrollHeight","400px",3,"value","scrollable",4,"ngIf"],["id","search","autoResize","true","rows","2","pTextarea","","fluid","","placeholder","",3,"ngModelChange","blur","keydown","paste","ngModel"],["for","search"],[1,"flex","gap-2","flex-wrap"],[3,"label","styleClass","removable","onRemove",4,"ngFor","ngForOf"],[1,"flex","pt-4","gap-2","justify-content-between"],["label","Reset","icon","pi pi-trash","severity","danger",3,"onClick",4,"ngIf"],["label","Validate URLs","icon","pi pi-arrow-right","iconPos","right","class","ml-auto",3,"onClick",4,"ngIf"],["label","Next","icon","pi pi-arrow-right","iconPos","right","class","ml-auto",3,"disabled","onClick",4,"ngIf"],["size","small","stripedRows","","scrollHeight","400px",3,"value","scrollable"],[3,"onRemove","label","styleClass","removable"],["value","regex","severity","info",4,"ngIf"],["value","regex","severity","info"],["label","Reset","icon","pi pi-trash","severity","danger",3,"onClick"],["label","Validate URLs","icon","pi pi-arrow-right","iconPos","right",1,"ml-auto",3,"onClick"],["label","Next","icon","pi pi-arrow-right","iconPos","right",1,"ml-auto",3,"onClick","disabled"],[4,"ngIf"],["class","mb-0",4,"ngIf"],["labelKey","Broken","type","prod",3,"links","approve","remove",4,"ngIf"],["labelKey","Broken","type","proto",3,"links","approve","remove",4,"ngIf"],["labelKey","Redirected","type","prod",3,"links","approve","remove",4,"ngIf"],["labelKey","Redirected","type","proto",3,"links","approve","remove",4,"ngIf"],["labelKey","Blocked","type","prod",3,"links","approve","remove",4,"ngIf"],["labelKey","Blocked","type","proto",3,"links","approve","remove",4,"ngIf"],[1,"flex","pt-4","justify-content-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],["class","flex flex-column gap-2 mt-3",4,"ngIf"],[1,"flex","flex-column","gap-2","mt-3"],[4,"ngFor","ngForOf"],["styleClass","bg-yellow-100",1,"max-w-max"],[1,"pi","pi-spin","pi-spinner"],["styleClass","bg-orange-100",1,"max-w-max"],[1,"mb-0"],["labelKey","Broken","type","prod",3,"approve","remove","links"],["labelKey","Broken","type","proto",3,"approve","remove","links"],["labelKey","Redirected","type","prod",3,"approve","remove","links"],["labelKey","Redirected","type","proto",3,"approve","remove","links"],["labelKey","Blocked","type","prod",3,"approve","remove","links"],["labelKey","Blocked","type","proto",3,"approve","remove","links"],[1,"my-0","list-none"],[1,"pi","pi-check","text-green-500","mr-2"],[1,"pi","pi-check","text-blue-500","mr-2"],[1,"flex","pt-4","justify-content-start"]],template:function(t,n){if(t&1){let r=M();l(0,"h1",3),u(1),g(2,"translate"),s(),l(3,"p"),u(4),g(5,"translate"),s(),l(6,"p-stepper",4),ee("valueChange",function(c){return b(r),J(n.activeStep,c)||(n.activeStep=c),v(c)}),l(7,"p-step-list",5)(8,"p-step",6),u(9,"Enter URLs and search criteria"),s(),l(10,"p-step",6),u(11,"Validate URLs"),s(),l(12,"p-step",6),u(13,"Build IA Tree"),s()(),l(14,"p-step-panels")(15,"p-step-panel",6),f(16,Pg,27,7,"ng-template",null,0,se),s(),l(18,"p-step-panel",6),f(19,e4,16,11,"ng-template",null,0,se),s(),l(21,"p-step-panel",6),f(22,t4,4,0,"ng-template",null,0,se),s()()()}t&2&&(a(),C(h(2,10,"title.ia")),a(3),C(h(5,12,"ia.description")),a(2),Z("value",n.activeStep),d("linear",!0),a(2),d("value",1),a(2),d("value",2),a(2),d("value",3),a(3),d("value",1),a(3),d("value",2),a(3),d("value",3))},dependencies:[F,He,$,ye,We,Ie,xe,O,R,Ca,fn,Et,so,lo,hn,gn,Q,ce,a0,io,un,ko,No,f0,To,jo,mi,Uo,Tt,c0,di,b0,po,co,ga,fa,tr],encapsulation:2})};var v0=[{path:"",component:xn,title:"title.landing"},{path:"page-assistant/compare",title:"title.page",canActivate:[()=>{let e=X(Ft),o=X(Je);return e.getUploadData()?!0:(o.navigate(["/page-assistant"]),!1)}],loadComponent:()=>import("./chunk-FKGSEXBG.js").then(e=>e.PageAssistantCompareComponent)},{path:"page-assistant/share",component:wn,title:"title.page"},{path:"page-assistant",component:Cn,title:"title.page"},{path:"ia-assistant",component:or,title:"title.ia"},{path:"image-assistant",component:En,title:"title.image"},{path:"translation-assistant",component:Un,title:"title.translation"},{path:"project-assistant",component:Hn,title:"title.project"},{path:"inventory-assistant",component:Wn,title:"title.inventory"},{path:"metadata-assistant",component:Zn,title:"title.metadata"},{path:"about-us",component:Jn,title:"title.about"},{path:"test",component:er,title:"title.test"},{path:"**",component:yn,title:"title.404"}];var o4=e=>new Aa(e,"./i18n/",".json"),_0={providers:[zi({eventCoalescing:!0}),Vi(v0),{provide:nn,useClass:uo},Ai(),xi([O.forRoot({loader:{provide:Ri,useFactory:o4,deps:[st]}})]),Ra(),sa({inputVariant:"filled",theme:{preset:ys,options:{colorScheme:"light",theme:"blue",ripple:!0,darkModeSelector:".dark-mode"}}}),oo,to]};var nr=class e{constructor(o){this.localStore=o}static \u0275fac=function(t){return new(t||e)(z(et))};static \u0275cmp=E({type:e,selectors:[["ca-api-reset"]],decls:2,vars:4,consts:[["icon","pi pi-key","outlined","","severity","secondary","id","api-key-reset-btn","styleClass","surface-border",1,"my-2","api-button",3,"click","label","rounded"]],template:function(t,n){t&1&&(l(0,"p-button",0),g(1,"translate"),y("click",function(){return n.localStore.removeData("apiKey")}),s()),t&2&&d("label",h(1,2,"apiKey.change"))("rounded",!0)},dependencies:[O,R,Q,ce],styles:["@media (max-width: 768px){  .api-button .p-button-label{display:none}}  .api-button:hover .p-button-icon{color:var(--p-primary-400)!important}  html.dark-mode .api-button:hover .p-button-icon{color:var(--p-primary-200)!important}"]})};function i4(e,o){e&1&&w(0,"ca-api-reset")}var rr=class e{constructor(o,t,n){this.translate=o;this.localStore=t;this.theme=n;var r=this.localStore.getData("lang")||this.translate.getBrowserLang()||"en";console.log(this.translate.getBrowserLang()),this.translate.addLangs(["en","fr"]),this.translate.setDefaultLang("en"),this.translate.use(r)}get logoSrc(){return this.theme.darkMode()?"cra-logo-dark.png":"cra-logo.png"}selectLanguage(){var o="";this.translate.currentLang=="en"?o="fr":o="en",this.translate.use(o),this.localStore.saveData("lang",o)}static \u0275fac=function(t){return new(t||e)(z(Te),z(et),z(_n))};static \u0275cmp=E({type:e,selectors:[["ca-header"]],decls:11,vars:9,consts:[["id","header",1,"pb-2"],[1,"flex","align-items-center","hidden","md:block"],["id","cra-logo","priority","true",1,"img-fluid","fip-colour","w-28rem",3,"src","alt"],[1,"flex","align-items-center","gap-3"],[4,"ngIf"],["offIcon","pi pi-moon","offLabel","","onIcon","pi pi-sun","onLabel","","ariaLabel","Toggle between dark and light mode",1,"p-button-rounded","p-button-secondary","p-button-outlined","p-button-sm","surface-border","pr-0","darkmode-toggle",3,"click","ngModel"],["tabindex","0",1,"cursor-pointer","underline","font-medium","text-blue-600","hover:text-blue-700",3,"click"]],template:function(t,n){t&1&&(l(0,"header",0)(1,"p-toolbar")(2,"div",1),w(3,"img",2),g(4,"translate"),s(),l(5,"div",3),f(6,i4,1,0,"ca-api-reset",4),l(7,"p-togglebutton",5),y("click",function(){return n.theme.toggle()}),s(),l(8,"a",6),y("click",function(){return n.selectLanguage()}),u(9),g(10,"translate"),s()()()()),t&2&&(a(3),d("src",n.logoSrc,Ae)("alt",h(4,5,"CRA")),a(3),d("ngIf",n.localStore.getData("apiKey")!=null),a(),d("ngModel",n.theme.darkMode()),a(2),B(" ",h(10,7,"opp.lang")," "))},dependencies:[F,$,ye,Ie,xe,O,R,vn,bn,Q,Fa,za,nr],styles:[".p-toolbar{background-color:transparent!important;border:none!important}header[_ngcontent-%COMP%]{border-bottom-style:solid;border-bottom-color:var(--p-gray-400);border-width:1px;margin-top:-4rem}  .darkmode-toggle:hover .p-togglebutton-icon{color:var(--p-cyan-400)!important}  html.dark-mode .darkmode-toggle:hover .p-togglebutton-icon{color:var(--p-amber-400)!important}"]})};var a4=()=>["/"],l4=()=>["/page-assistant"],s4=()=>["/image-assistant"],c4=()=>["/translation-assistant"],d4=()=>["/inventory-assistant"],p4=()=>["/metadata-assistant"],u4=()=>["/about-us"],ir=class e{isExpanded={main:!0,project:!0,info:!0};toggleSection(o){this.isExpanded[o]=!this.isExpanded[o]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["ca-sidebar"]],decls:76,vars:59,consts:[["id","nav-bar",1,"l-navbar","show-n"],[1,"nav"],[1,"nav_logo"],[3,"routerLink"],[1,"material-icons","text-primary-200"],[1,"logo_text"],[1,"nav_section"],[1,"nav_header","text-primary-200","hover:text-primary-400",3,"click"],[1,"nav_section_text"],[1,"material-icons","toggle-icon"],[1,"nav_section_body"],["routerLinkActive","active",1,"nav_link","flex","hover:bg-primary-600","border-round",3,"routerLink"],[1,"material-icons"],[1,"nav_link_text"],[1,"section"],[1,"nav_header","text-primary-200","hover:text-primary-400","hover:font-bold",3,"click"],[1,"nav_link","flex","hover:bg-primary-600","border-round",3,"href"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3)(4,"span",4),u(5,"design_services"),s(),l(6,"span",5),u(7),g(8,"translate"),s()()(),l(9,"div",6)(10,"div",7),y("click",function(){return n.toggleSection("main")}),l(11,"span",8),u(12),g(13,"translate"),s(),l(14,"span",9),u(15),s()(),l(16,"div",10)(17,"a",11)(18,"span",12),u(19,"article"),s(),l(20,"span",13),u(21),g(22,"translate"),s()(),l(23,"a",11)(24,"span",12),u(25,"photo"),s(),l(26,"span",13),u(27),g(28,"translate"),s()(),l(29,"a",11)(30,"span",12),u(31,"language"),s(),l(32,"span",13),u(33),g(34,"translate"),s()()()(),l(35,"div",14)(36,"div",15),y("click",function(){return n.toggleSection("project")}),l(37,"span",8),u(38),g(39,"translate"),s(),l(40,"span",9),u(41),s()(),l(42,"div",10)(43,"a",11)(44,"span",12),u(45,"inventory"),s(),l(46,"span",13),u(47),g(48,"translate"),s()(),l(49,"a",11)(50,"span",12),u(51,"description"),s(),l(52,"span",13),u(53),g(54,"translate"),s()()()(),l(55,"div",14)(56,"div",7),y("click",function(){return n.toggleSection("info")}),l(57,"span",8),u(58),g(59,"translate"),s(),l(60,"span",9),u(61),s()(),l(62,"div",10)(63,"a",11)(64,"span",12),u(65,"web_asset"),s(),l(66,"span",13),u(67),g(68,"translate"),s()(),l(69,"a",16),g(70,"translate"),l(71,"span",12),u(72,"feedback"),s(),l(73,"span",13),u(74),g(75,"translate"),s()()()()()()),t&2&&(a(3),d("routerLink",Fe(52,a4)),a(4),C(h(8,28,"title.landing")),a(5),C(h(13,30,"menu.content")),a(3),C(n.isExpanded.main?"expand_less":"expand_more"),a(),Me("hidden",!n.isExpanded.main),a(),d("routerLink",Fe(53,l4)),a(4),C(h(22,32,"menu.page")),a(2),d("routerLink",Fe(54,s4)),a(4),C(h(28,34,"menu.image")),a(2),d("routerLink",Fe(55,c4)),a(4),C(h(34,36,"menu.translation")),a(5),C(h(39,38,"menu.project")),a(3),C(n.isExpanded.project?"expand_less":"expand_more"),a(),Me("hidden",!n.isExpanded.project),a(),d("routerLink",Fe(56,d4)),a(4),C(h(48,40,"menu.inventory")),a(2),d("routerLink",Fe(57,p4)),a(4),C(h(54,42,"menu.metadata")),a(5),C(h(59,44,"menu.appInfo")),a(3),C(n.isExpanded.info?"expand_less":"expand_more"),a(),Me("hidden",!n.isExpanded.info),a(),d("routerLink",Fe(58,u4)),a(4),C(h(68,46,"menu.about")),a(2),d("href",h(70,48,"feedback.email"),Ae),a(5),C(h(75,50,"menu.feedback")))},dependencies:[F,It,rn,Ni,O,R],styles:[".l-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.l-navbar[_ngcontent-%COMP%]{position:fixed;top:0;left:-30%;width:var(--nav-width);height:100vh;background-color:var(--p-gray-800);padding:.5rem 1rem 1rem;transition:.3s;z-index:var(--z-fixed)}.nav[_ngcontent-%COMP%]{height:100%;display:contents;flex-direction:column;justify-content:space-between;overflow:hidden}.nav_link[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content;align-items:center;column-gap:1rem;padding:.3rem 0 0 .3rem;position:relative;color:var(--first-color-light);margin-bottom:.8rem;transition:.3s}.nav_link[_ngcontent-%COMP%]:hover{border-radius:.25rem;padding-bottom:.5rem;margin-bottom:0rem}.nav_link.active[_ngcontent-%COMP%]:hover{color:#fff}.nav_link.active[_ngcontent-%COMP%]{background-color:var(--p-primary-color);border-radius:.25rem;padding-bottom:.3rem;margin-bottom:.1rem}.nav_link.active-hide[_ngcontent-%COMP%]{background-color:var(--p-primary-color);border-radius:.25rem;padding-bottom:.5rem;width:2.8rem}.nav_logo[_ngcontent-%COMP%]{display:flex;grid-template-columns:max-content max-content;align-items:center;column-gap:1rem;padding:0;margin-bottom:2rem}.nav_logo-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nav_logo-name[_ngcontent-%COMP%]{color:var(--first-color-light);font-weight:700}.show-n[_ngcontent-%COMP%]{left:0}.section[_ngcontent-%COMP%]{padding:.1rem}.nav_section_body[_ngcontent-%COMP%]{padding-left:.7rem}.nav_section_body.hidden[_ngcontent-%COMP%]{display:none}.nav_link_text[_ngcontent-%COMP%]{margin-left:0rem}.nav_header[_ngcontent-%COMP%]{font-size:18px;border-radius:.25rem;display:flex;align-items:center;cursor:pointer;padding:.5rem 0}.nav_header[_ngcontent-%COMP%]:hover{font-weight:700;padding-bottom:.5rem}.nav_header.active[_ngcontent-%COMP%]:hover{color:#fff}.nav_header.active[_ngcontent-%COMP%]{border-radius:.25rem;padding-bottom:.5rem;margin-bottom:.1rem}.nav_header.active-hide[_ngcontent-%COMP%]{border-radius:.25rem;padding-bottom:.5rem;width:2.8rem}.toggle-icon[_ngcontent-%COMP%]{margin-left:auto}.nav_icon[_ngcontent-%COMP%], .nav_section_text[_ngcontent-%COMP%]{margin-left:.5rem}.nav_section[_ngcontent-%COMP%]{overflow:hidden;max-width:100%}@media (max-width: 600px){.section[_ngcontent-%COMP%], .nav_section-body[_ngcontent-%COMP%], .nav_section_text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;min-width:0;display:block}.nav_header[_ngcontent-%COMP%], .nav_link_text[_ngcontent-%COMP%]{display:none}.toggle-icon[_ngcontent-%COMP%]{margin-left:0;margin-top:.5rem;align-self:flex-end}.logo_text[_ngcontent-%COMP%]{display:none}}.nav_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0;color:var(--first-color-light)}.nav_logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:2.2rem;align-self:flex-start;margin-right:.5rem;border-radius:.25rem}.logo_text[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;letter-spacing:.05em;padding:0 .5rem;align-self:flex-start}@media screen and (min-width: 600px){.l-navbar[_ngcontent-%COMP%]{left:0;padding:1rem 1rem 0}.show-n[_ngcontent-%COMP%]{width:calc(var(--nav-width) + 110px)}}"]})};var ar=class e{constructor(o){this.theme=o}get logoSrc(){return this.theme.darkMode()?"canada-logo-dark.png":"canada-logo.png"}static \u0275fac=function(t){return new(t||e)(z(_n))};static \u0275cmp=E({type:e,selectors:[["ca-footer"]],decls:9,vars:7,consts:[[1,"container"],[1,"flex","align-items-end"],[1,"text-color-secondary","text-sm","pt-5"],[1,"img-fluid","fip-colour",3,"src","alt"]],template:function(t,n){t&1&&(l(0,"footer",0)(1,"p-toolbar")(2,"div",1)(3,"p",2),u(4),g(5,"translate"),s()(),l(6,"div",1),w(7,"img",3),g(8,"translate"),s()()()),t&2&&(a(4),C(h(5,3,"app.version")),a(3),d("src",n.logoSrc,Ae)("alt",h(8,5,"GoC")))},dependencies:[F,O,R,vn,bn],styles:["[_nghost-%COMP%]{display:block}"]})};function m4(e,o){e&1&&(N(0),l(1,"p",3),u(2),g(3,"translate"),s(),V()),e&2&&(a(2),C(h(3,1,"apiKey.error")))}function f4(e,o){if(e&1&&(l(0,"div",8),f(1,m4,4,3,"ng-container",9),s()),e&2){p();let t=Se(8);a(),d("ngIf",t.errors==null?null:t.errors.required)}}var lr=class e{constructor(o){this.localStore=o}api="";error="";emailLink="";messageTemplate="";apiKeyInstructions="";static \u0275fac=function(t){return new(t||e)(z(et))};static \u0275cmp=E({type:e,selectors:[["ca-api-key"]],decls:16,vars:18,consts:[["apiField","ngModel","apiKey",""],[3,"header"],[1,"flex","flex-column","gap-3"],[1,"m-0"],["pInputText","","required","",3,"ngModelChange","placeholder","ngModel"],["pButton","","icon","pi pi-key","severity","success",3,"click","label","raised"],["class","text-danger small",4,"ngIf"],[3,"innerHTML"],[1,"text-danger","small"],[4,"ngIf"]],template:function(t,n){if(t&1){let r=M();l(0,"p-card",1),g(1,"translate"),l(2,"div",2)(3,"p",3),u(4),g(5,"translate"),s(),l(6,"p-inputGroup")(7,"input",4,0),g(10,"translate"),ee("ngModelChange",function(c){return b(r),J(n.api,c)||(n.api=c),v(c)}),s(),l(11,"button",5),g(12,"translate"),y("click",function(){return b(r),v(n.localStore.saveData("apiKey",n.api))}),s()(),f(13,f4,2,1,"div",6),w(14,"div",7),g(15,"translate"),s()()}if(t&2){let r=Se(8);d("header",h(1,8,"title.apiKey")),a(4),B(" ",h(5,10,"apiKey.intro")," "),a(3),d("placeholder",h(10,12,"apiKey.placeholder")),Z("ngModel",n.api),a(4),d("label",h(12,14,"apiKey.save"))("raised",!0),a(2),d("ngIf",r.invalid&&r.touched),a(),d("innerHTML",h(15,16,"apiKey.instructions"),Ve)}},dependencies:[F,$,ye,We,Ie,da,xe,O,R,Q,no,io,pn,Pe,De],encapsulation:2})};function g4(e,o){e&1&&w(0,"ca-api-key")}function h4(e,o){e&1&&w(0,"router-outlet")}var sr=class e{constructor(o,t,n,r){this.CustomTitle=o;this.titleService=t;this.localStore=n;this.primeng=r}ngOnInit(){this.primeng.ripple.set(!0),console.log("The initial API key is: ",this.localStore.getData("apiKey"))}static \u0275fac=function(t){return new(t||e)(z(uo),z(on),z(et),z(la))};static \u0275cmp=E({type:e,selectors:[["ca-root"]],decls:7,vars:2,consts:[["vocab","http://schema.org/","typeof","WebPage",1,"mx-8","my-2","container"],[1,"container"],[4,"ngIf"]],template:function(t,n){t&1&&(l(0,"body",0)(1,"main",1),w(2,"ca-header")(3,"ca-sidebar"),f(4,g4,1,0,"ca-api-key",2)(5,h4,1,0,"router-outlet",2),s(),w(6,"ca-footer"),s()),t&2&&(a(4),d("ngIf",n.localStore.getData("apiKey")===null),a(),d("ngIf",n.localStore.getData("apiKey")!=null))},dependencies:[F,$,$i,It,O,rr,ir,ar,lr],encapsulation:2})};Oi(sr,_0).catch(e=>console.error(e));

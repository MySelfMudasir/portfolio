import{$ as A,$a as ys,$b as io,A as Lt,Aa as us,Ab as eo,B as tt,Ba as ms,Bb as to,C as qr,Ca as hs,Cb as Ds,D as Ka,Da as ps,Db as R,E as Qa,Ea as Ce,Eb as it,F as Xa,Fa as nt,Fb as y,G as Ja,Ga as fs,Gb as q,H as bi,Ha as p,Hb as $t,I as Me,Ia as Ut,Ib as xs,J as Ue,Ja as gs,Jb as _e,K as he,Ka as Di,Kb as Es,L as M,La as Yr,Lb as Ms,M as wn,Ma as He,Mb as se,N as yt,Na as Ie,Nb as Ae,O as g,Oa as ee,Ob as no,P as T,Pa as vs,Pb as Ss,Q as es,Qa as xi,Qb as Is,R as v,Ra as bs,Rb as In,S as w,Sa as Kr,Sb as As,T as l,Ta as D,Tb as rt,U as _t,Ua as F,Ub as Rs,V as ts,Va as E,Vb as re,W as Se,Wa as ue,Wb as Mi,X as ye,Xa as Ei,Xb as Ts,Y as Wr,Ya as Qr,Yb as Fs,Z as Zr,Za as Xr,_ as de,_a as Mn,a as f,aa as Dn,ab as zt,ac as ro,b as G,ba as ns,bb as X,ca as O,cb as H,cc as Si,d as Pt,da as z,db as $,dc as Ii,e as Ga,ea as Ct,eb as _s,ec as oo,f as Nt,fa as yi,fb as we,g as Y,ga as is,gb as De,h as ge,ha as j,hb as B,i as ve,ia as rs,ib as u,j as be,ja as os,jb as m,k as _,ka as _i,kb as V,l as pi,la as Oe,lb as wt,m as Gr,ma as ze,mb as Dt,n as qa,na as K,nb as Ze,o as L,oa as as,ob as Jr,p as Wa,pa as xn,pb as xt,q as Je,qa as ss,qb as P,r as Za,ra as jt,rb as Q,s as fi,sa as Ci,sb as me,t as gi,ta as En,tb as N,u as vi,ua as wi,ub as Ht,v as Ee,va as Bt,vb as Sn,w as _n,wa as Vt,wb as W,x as Cn,xa as cs,xb as Z,y as et,ya as ls,yb as Cs,z as Ya,za as ds,zb as ws}from"./chunk-LEDV2SS3.js";var ks=null;function Re(){return ks}function ao(t){ks??=t}var An=class{},Gt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>l(Os),providedIn:"platform"})}return t})();var Os=(()=>{class t extends Gt{_location;_history;_doc=l(A);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Re().getBaseHref(this._doc)}onPopState(e){let n=Re().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Re().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Ls(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Ps(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function ot(t){return t&&t[0]!=="?"?`?${t}`:t}var Ai=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>l(jd),providedIn:"root"})}return t})(),Ld=new v(""),jd=(()=>{class t extends Ai{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(A).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ls(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ot(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+ot(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+ot(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(w(Gt),w(Ld,8))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qt=(()=>{class t{_subject=new Y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Ud(Ps(Ns(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ot(n))}normalize(e){return t.stripTrailingSlash(Vd(this._basePath,Ns(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ot(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ot(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=ot;static joinWithSlash=Ls;static stripTrailingSlash=Ps;static \u0275fac=function(n){return new(n||t)(w(Ai))};static \u0275prov=g({token:t,factory:()=>Bd(),providedIn:"root"})}return t})();function Bd(){return new qt(w(Ai))}function Vd(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ns(t){return t.replace(/\/index.html$/,"")}function Ud(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var so=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(de);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(ee(xi))};static \u0275dir=E({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Oe]})}return t})();var Wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();function Rn(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Et=class{};var co="browser";function js(t){return t===co}var Tn=class{_doc;constructor(i){this._doc=i}manager},Ri=(()=>{class t extends Tn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(w(A))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),ki=new v(""),ho=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Ri));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Ri);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new M(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(w(ki),w(z))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),lo="ng-app-id";function Bs(t){for(let i of t)i.remove()}function Vs(t,i){let e=i.createElement("style");return e.textContent=t,e}function Hd(t,i,e,n){let r=t.head?.querySelectorAll(`style[${lo}="${i}"],link[${lo}="${i}"]`);if(r)for(let o of r)o.removeAttribute(lo),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function mo(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var po=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,Hd(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Vs);n?.forEach(r=>this.addUsage(r,this.external,mo))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(Bs(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Bs(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Vs(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,mo(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(w(A),w(xn),w(En,8),w(jt))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),uo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},fo=/%COMP%/g;var zs="%COMP%",$d=`_nghost-${zs}`,Gd=`_ngcontent-${zs}`,qd=!0,Wd=new v("",{factory:()=>qd});function Zd(t){return Gd.replace(fo,t)}function Yd(t){return $d.replace(fo,t)}function Hs(t,i){return i.map(e=>e.replace(fo,t))}var On=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Fn(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof Fi?r.applyToHost(e):r instanceof kn&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,b=this.tracingService;switch(n.encapsulation){case wi.Emulated:o=new Fi(c,d,n,this.appId,h,a,s,b);break;case wi.ShadowDom:return new Ti(c,e,n,a,s,this.nonce,b,d);case wi.ExperimentalIsolatedShadowDom:return new Ti(c,e,n,a,s,this.nonce,b);default:o=new kn(c,d,n,h,a,s,b);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(w(ho),w(po),w(xn),w(Wd),w(A),w(z),w(En),w(Di,8))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Fn=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(uo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Us(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Us(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new M(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=uo[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=uo[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Ut.DashCase|Ut.Important)?i.style.setProperty(e,n,r&Ut.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Ut.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Re().getGlobalEventTarget(this.doc,i),!i))throw new M(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Us(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ti=class extends Fn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,c){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=Hs(n.id,d);for(let b of d){let S=document.createElement("style");a&&S.setAttribute("nonce",a),S.textContent=b,this.shadowRoot.appendChild(S)}let h=n.getExternalStyles?.();if(h)for(let b of h){let S=mo(b,r);a&&S.setAttribute("nonce",a),this.shadowRoot.appendChild(S)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},kn=class extends Fn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,c){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=c?Hs(c,d):d,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&gs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Fi=class extends kn{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,c){let d=r+"-"+n.id;super(i,e,n,o,a,s,c,d),this.contentAttr=Zd(d),this.hostAttr=Yd(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Oi=class t extends An{supportsDOMEvents=!0;static makeCurrent(){ao(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Qd();return e==null?null:Xd(e)}resetBaseElement(){Pn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Rn(document.cookie,i)}},Pn=null;function Qd(){return Pn=Pn||document.head.querySelector("base"),Pn?Pn.getAttribute("href"):null}function Xd(t){return new URL(t,document.baseURI).pathname}var Jd=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),$s=["alt","control","meta","shift"],eu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},tu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Gs=(()=>{class t extends Tn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Re().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),$s.forEach(d=>{let h=n.indexOf(d);h>-1&&(n.splice(h,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,n){let r=eu[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),$s.forEach(a=>{if(a!==r){let s=tu[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(w(A))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();async function go(t,i,e){let n=f({rootComponent:t},nu(i,e));return Rs(n)}function nu(t,i){return{platformRef:i?.platformRef,appProviders:[...su,...t?.providers??[]],platformProviders:au}}function iu(){Oi.makeCurrent()}function ru(){return new Ct}function ou(){return as(document),document}var au=[{provide:jt,useValue:co},{provide:ss,useValue:iu,multi:!0},{provide:A,useFactory:ou}];var su=[{provide:ts,useValue:"root"},{provide:Ct,useFactory:ru},{provide:ki,useClass:Ri,multi:!0},{provide:ki,useClass:Gs,multi:!0},On,po,ho,{provide:He,useExisting:On},{provide:Et,useClass:Jd},[]];var at=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Ni=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Li=class{encodeKey(i){return qs(i)}encodeValue(i){return qs(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function cu(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var lu=/%(\d[a-f0-9])/gi,du={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function qs(t){return encodeURIComponent(t).replace(lu,(i,e)=>du[e]??i)}function Pi(t){return`${t}`}var Ye=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Li,i.fromString){if(i.fromObject)throw new M(2805,!1);this.map=cu(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(Pi):[Pi(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Pi(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(Pi(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function uu(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ws(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Zs(t){return typeof Blob<"u"&&t instanceof Blob}function Ys(t){return typeof FormData<"u"&&t instanceof FormData}function mu(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Ks="Content-Type",Qs="Accept",Xs="text/plain",Js="application/json",hu=`${Js}, ${Xs}, */*`,Zt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(uu(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new M(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new at,this.context??=new Ni,!this.params)this.params=new Ye,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ws(this.body)||Zs(this.body)||Ys(this.body)||mu(this.body)?this.body:this.body instanceof Ye?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ys(this.body)?null:Zs(this.body)?this.body.type||null:Ws(this.body)?null:typeof this.body=="string"?Xs:this.body instanceof Ye?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Js:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,d=i.redirect||this.redirect,h=i.credentials||this.credentials,b=i.referrer||this.referrer,S=i.integrity||this.integrity,ae=i.referrerPolicy||this.referrerPolicy,te=i.transferCache??this.transferCache,J=i.timeout??this.timeout,I=i.body!==void 0?i.body:this.body,k=i.withCredentials??this.withCredentials,ne=i.reportProgress??this.reportProgress,fe=i.headers||this.headers,ie=i.params||this.params,bn=i.context??this.context;return i.setHeaders!==void 0&&(fe=Object.keys(i.setHeaders).reduce((yn,bt)=>yn.set(bt,i.setHeaders[bt]),fe)),i.setParams&&(ie=Object.keys(i.setParams).reduce((yn,bt)=>yn.set(bt,i.setParams[bt]),ie)),new t(e,n,I,{params:ie,headers:fe,context:bn,reportProgress:ne,responseType:r,withCredentials:k,transferCache:te,keepalive:o,cache:s,priority:a,timeout:J,mode:c,redirect:d,credentials:h,referrer:b,integrity:S,referrerPolicy:ae})}},Mt=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Mt||{}),Kt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new at,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},ji=class t extends Kt{constructor(i={}){super(i)}type=Mt.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Nn=class t extends Kt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Mt.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Yt=class extends Kt{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},pu=200,fu=204;var gu=new v("");var vu=/^\)\]\}',?\n/;var bo=(()=>{class t{xhrFactory;tracingService=l(Di,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new M(-2800,!1);let n=this.xhrFactory;return _(null).pipe(Me(()=>new Nt(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((I,k)=>a.setRequestHeader(I,k.join(","))),e.headers.has(Qs)||a.setRequestHeader(Qs,hu),!e.headers.has(Ks)){let I=e.detectContentTypeHeader();I!==null&&a.setRequestHeader(Ks,I)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();a.responseType=I!=="json"?I:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let I=a.statusText||"OK",k=new at(a.getAllResponseHeaders()),ne=a.responseURL||e.url;return c=new ji({headers:k,status:a.status,statusText:I,url:ne}),c},h=this.maybePropagateTrace(()=>{let{headers:I,status:k,statusText:ne,url:fe}=d(),ie=null;k!==fu&&(ie=typeof a.response>"u"?a.responseText:a.response),k===0&&(k=ie?pu:0);let bn=k>=200&&k<300;if(e.responseType==="json"&&typeof ie=="string"){let yn=ie;ie=ie.replace(vu,"");try{ie=ie!==""?JSON.parse(ie):null}catch(bt){ie=yn,bn&&(bn=!1,ie={error:bt,text:ie})}}bn?(o.next(new Nn({body:ie,headers:I,status:k,statusText:ne,url:fe||void 0})),o.complete()):o.error(new Yt({error:ie,headers:I,status:k,statusText:ne,url:fe||void 0}))}),b=this.maybePropagateTrace(I=>{let{url:k}=d(),ne=new Yt({error:I,status:a.status||0,statusText:a.statusText||"Unknown Error",url:k||void 0});o.error(ne)}),S=b;e.timeout&&(S=this.maybePropagateTrace(I=>{let{url:k}=d(),ne=new Yt({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:k||void 0});o.error(ne)}));let ae=!1,te=this.maybePropagateTrace(I=>{ae||(o.next(d()),ae=!0);let k={type:Mt.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(k.total=I.total),e.responseType==="text"&&a.responseText&&(k.partialText=a.responseText),o.next(k)}),J=this.maybePropagateTrace(I=>{let k={type:Mt.UploadProgress,loaded:I.loaded};I.lengthComputable&&(k.total=I.total),o.next(k)});return a.addEventListener("load",h),a.addEventListener("error",b),a.addEventListener("timeout",S),a.addEventListener("abort",b),e.reportProgress&&(a.addEventListener("progress",te),s!==null&&a.upload&&a.upload.addEventListener("progress",J)),a.send(s),o.next({type:Mt.Sent}),()=>{a.removeEventListener("error",b),a.removeEventListener("abort",b),a.removeEventListener("load",h),a.removeEventListener("timeout",S),e.reportProgress&&(a.removeEventListener("progress",te),s!==null&&a.upload&&a.upload.removeEventListener("progress",J)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(w(Et))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bu(t,i){return i(t)}function yu(t,i,e){return(n,r)=>ye(e,()=>i(n,o=>t(o,r)))}var ec=new v("",{factory:()=>[]}),tc=new v(""),nc=new v("",{factory:()=>!0});var yo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=w(bo),r},providedIn:"root"})}return t})();var Bi=(()=>{class t{backend;injector;chain=null;pendingTasks=l(os);contributeToStability=l(nc);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(ec),...this.injector.get(tc,[])]));this.chain=n.reduceRight((r,o)=>yu(r,o,this.injector),bu)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Lt(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(w(yo),w(Se))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_o=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=w(Bi),r},providedIn:"root"})}return t})();function vo(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var st=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Zt)o=e;else{let c;r.headers instanceof at?c=r.headers:c=new at(r.headers);let d;r.params&&(r.params instanceof Ye?d=r.params:d=new Ye({fromObject:r.params})),o=new Zt(e,n,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=_(o).pipe(Cn(c=>this.handler.handle(c)));if(e instanceof Zt||r.observe==="events")return a;let s=a.pipe(Ee(c=>c instanceof Nn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(L(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new M(2806,!1);return c.body}));case"blob":return s.pipe(L(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new M(2807,!1);return c.body}));case"text":return s.pipe(L(c=>{if(c.body!==null&&typeof c.body!="string")throw new M(2808,!1);return c.body}));default:return s.pipe(L(c=>c.body))}case"response":return s;default:throw new M(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ye().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,vo(r,n))}post(e,n,r={}){return this.request("POST",e,vo(r,n))}put(e,n,r={}){return this.request("PUT",e,vo(r,n))}static \u0275fac=function(n){return new(n||t)(w(_o))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _u=new v("",{factory:()=>!0}),Cu="XSRF-TOKEN",wu=new v("",{factory:()=>Cu}),Du="X-XSRF-TOKEN",xu=new v("",{factory:()=>Du}),Eu=(()=>{class t{cookieName=l(wu);doc=l(A);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Rn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ic=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=w(Eu),r},providedIn:"root"})}return t})();function Mu(t,i){if(!l(_u)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=l(Gt).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return i(t)}catch{return i(t)}let e=l(ic).getToken(),n=l(xu);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function Co(...t){let i=[st,Bi,{provide:_o,useExisting:Bi},{provide:yo,useFactory:()=>l(gu,{optional:!0})??l(bo)},{provide:ec,useValue:Mu,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return _t(i)}var rc=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(w(A))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=w(Tu),r},providedIn:"root"})}return t})(),Tu=(()=>{class t extends wo{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ce.NONE:return n;case Ce.HTML:return Vt(n,"HTML")?Bt(n):ps(this._doc,String(n)).toString();case Ce.STYLE:return Vt(n,"Style")?Bt(n):n;case Ce.SCRIPT:if(Vt(n,"Script"))return Bt(n);throw new M(5200,!1);case Ce.URL:return Vt(n,"URL")?Bt(n):hs(String(n));case Ce.RESOURCE_URL:if(Vt(n,"ResourceURL"))return Bt(n);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(e){return cs(e)}bypassSecurityTrustStyle(e){return ls(e)}bypassSecurityTrustScript(e){return ds(e)}bypassSecurityTrustUrl(e){return us(e)}bypassSecurityTrustResourceUrl(e){return ms(e)}static \u0275fac=function(n){return new(n||t)(w(A))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fu="@",ku=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(de);loadingSchedulerFn=l(Ou,{optional:!0});_engine;constructor(e,n,r,o,a){this.doc=e,this.delegate=n,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-I3Y4JCFW.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new M(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Do(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,n);o.use(s),this.scheduler??=this.injector.get(rs,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){vs()};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Do=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,r){this.delegate.insertBefore(i,e,n,r)}removeChild(i,e,n,r){this.delegate.removeChild(i,e,n,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,r){this.delegate.setAttribute(i,e,n,r)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,r){this.delegate.setStyle(i,e,n,r)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,n,r)),this.delegate.listen(i,e,n,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Fu)}},Ou=new v("");function ac(t="animations"){return Yr("NgAsyncAnimations"),_t([{provide:He,useFactory:()=>new ku(l(A),l(On),l(z),t)},{provide:Ci,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var x="primary",Zn=Symbol("RouteTitle"),Io=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function en(t){return new Io(t)}function xo(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Pu(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let c={},d=t.slice(0,n.length);return xo(n,d,c)?{consumed:d,posParams:c}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!xo(o,t.slice(0,o.length),s)||!xo(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Gi(t){return new Promise((i,e)=>{t.pipe(tt()).subscribe({next:n=>i(n),error:n=>e(n)})})}function Nu(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!$e(t[e],i[e]))return!1;return!0}function $e(t,i){let e=t?Ao(t):void 0,n=i?Ao(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!pc(t[r],i[r]))return!1;return!0}function Ao(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function pc(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function Lu(t){return t.length>0?t[t.length-1]:null}function Tt(t){return Gr(t)?t:Mn(t)?be(Promise.resolve(t)):_(t)}function fc(t){return Gr(t)?Gi(t):Promise.resolve(t)}var ju={exact:bc,subset:yc},gc={exact:Bu,subset:Vu,ignored:()=>!0},vc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ro={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function sc(t,i,e){return ju[e.paths](t.root,i.root,e.matrixParams)&&gc[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function Bu(t,i){return $e(t,i)}function bc(t,i,e){if(!It(t.segments,i.segments)||!zi(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!bc(t.children[n],i.children[n],e))return!1;return!0}function Vu(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>pc(t[e],i[e]))}function yc(t,i,e){return _c(t,i,i.segments,e)}function _c(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!It(r,e)||i.hasChildren()||!zi(r,e,n))}else if(t.segments.length===e.length){if(!It(t.segments,e)||!zi(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!yc(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!It(t.segments,r)||!zi(t.segments,r,n)||!t.children[x]?!1:_c(t.children[x],i,o,n)}}function zi(t,i,e){return i.every((n,r)=>gc[e](t[r].parameters,n.parameters))}var Le=class{root;queryParams;fragment;_queryParamMap;constructor(i=new U([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=en(this.queryParams),this._queryParamMap}toString(){return Hu.serialize(this)}},U=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Hi(this)}},St=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=en(this.parameters),this._parameterMap}toString(){return wc(this)}};function Uu(t,i){return It(t,i)&&t.every((e,n)=>$e(e.parameters,i[n].parameters))}function It(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function zu(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===x&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==x&&(e=e.concat(i(r,n)))}),e}var tr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>new At,providedIn:"root"})}return t})(),At=class{parse(i){let e=new Fo(i);return new Le(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Ln(i.root,!0)}`,n=qu(i.queryParams),r=typeof i.fragment=="string"?`#${$u(i.fragment)}`:"";return`${e}${n}${r}`}},Hu=new At;function Hi(t){return t.segments.map(i=>wc(i)).join("/")}function Ln(t,i){if(!t.hasChildren())return Hi(t);if(i){let e=t.children[x]?Ln(t.children[x],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==x&&n.push(`${r}:${Ln(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=zu(t,(n,r)=>r===x?[Ln(t.children[x],!1)]:[`${r}:${Ln(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[x]!=null?`${Hi(t)}/${e[0]}`:`${Hi(t)}/(${e.join("//")})`}}function Cc(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Vi(t){return Cc(t).replace(/%3B/gi,";")}function $u(t){return encodeURI(t)}function To(t){return Cc(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function $i(t){return decodeURIComponent(t)}function cc(t){return $i(t.replace(/\+/g,"%20"))}function wc(t){return`${To(t.path)}${Gu(t.parameters)}`}function Gu(t){return Object.entries(t).map(([i,e])=>`;${To(i)}=${To(e)}`).join("")}function qu(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Vi(e)}=${Vi(r)}`).join("&"):`${Vi(e)}=${Vi(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Wu=/^[^\/()?;#]+/;function Eo(t){let i=t.match(Wu);return i?i[0]:""}var Zu=/^[^\/()?;=#]+/;function Yu(t){let i=t.match(Zu);return i?i[0]:""}var Ku=/^[^=?&#]+/;function Qu(t){let i=t.match(Ku);return i?i[0]:""}var Xu=/^[^&#]+/;function Ju(t){let i=t.match(Xu);return i?i[0]:""}var Fo=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new U([],{}):new U([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new M(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[x]=new U(e,n)),r}parseSegment(){let i=Eo(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new M(4009,!1);return this.capture(i),new St($i(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Yu(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Eo(this.remaining);r&&(n=r,this.capture(n))}i[$i(e)]=$i(n)}parseQueryParam(i){let e=Qu(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=Ju(this.remaining);a&&(n=a,this.capture(n))}let r=cc(e),o=cc(n);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Eo(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new M(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=x);let s=this.parseChildren(e+1);n[a??x]=Object.keys(s).length===1&&s[x]?s[x]:new U([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new M(4011,!1)}};function Dc(t){return t.segments.length>0?new U([],{[x]:t}):t}function xc(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=xc(r);if(n===x&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new U(t.segments,i);return em(e)}function em(t){if(t.numberOfChildren===1&&t.children[x]){let i=t.children[x];return new U(t.segments.concat(i.segments),i.children)}return t}function tn(t){return t instanceof Le}function tm(t,i,e=null,n=null,r=new At){let o=Ec(t);return Mc(o,i,e,n,r)}function Ec(t){let i;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new U(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=Dc(n);return i??r}function Mc(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return Mo(o,o,o,e,n,r);let a=nm(i);if(a.toRoot())return Mo(o,o,new U([],{}),e,n,r);let s=im(a,o,t),c=s.processChildren?Bn(s.segmentGroup,s.index,a.commands):Ic(s.segmentGroup,s.index,a.commands);return Mo(o,s.segmentGroup,c,e,n,r)}function qi(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function zn(t){return typeof t=="object"&&t!=null&&t.outlets}function lc(t,i,e){t||="\u0275";let n=new Le;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function Mo(t,i,e,n,r,o){let a={};for(let[d,h]of Object.entries(n??{}))a[d]=Array.isArray(h)?h.map(b=>lc(d,b,o)):lc(d,h,o);let s;t===i?s=e:s=Sc(t,i,e);let c=Dc(xc(s));return new Le(c,a,r)}function Sc(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=Sc(o,i,e)}),new U(t.segments,n)}var Wi=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&qi(n[0]))throw new M(4003,!1);let r=n.find(zn);if(r&&r!==Lu(n))throw new M(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function nm(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Wi(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Wi(e,i,n)}var Xt=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function im(t,i,e){if(t.isAbsolute)return new Xt(i,!0,0);if(!e)return new Xt(i,!1,NaN);if(e.parent===null)return new Xt(e,!0,0);let n=qi(t.commands[0])?0:1,r=e.segments.length-1+n;return rm(e,r,t.numberOfDoubleDots)}function rm(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new M(4005,!1);r=n.segments.length}return new Xt(n,!1,r-o)}function om(t){return zn(t[0])?t[0].outlets:{[x]:t}}function Ic(t,i,e){if(t??=new U([],{}),t.segments.length===0&&t.hasChildren())return Bn(t,i,e);let n=am(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new U(t.segments.slice(0,n.pathIndex),{});return o.children[x]=new U(t.segments.slice(n.pathIndex),t.children),Bn(o,0,r)}else return n.match&&r.length===0?new U(t.segments,{}):n.match&&!t.hasChildren()?ko(t,i,e):n.match?Bn(t,0,r):ko(t,i,e)}function Bn(t,i,e){if(e.length===0)return new U(t.segments,{});{let n=om(e),r={};if(Object.keys(n).some(o=>o!==x)&&t.children[x]&&t.numberOfChildren===1&&t.children[x].segments.length===0){let o=Bn(t.children[x],i,e);return new U(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Ic(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new U(t.segments,r)}}function am(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(zn(s))break;let c=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!uc(c,d,a))return o;n+=2}else{if(!uc(c,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function ko(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(zn(o)){let c=sm(o.outlets);return new U(n,c)}if(r===0&&qi(e[0])){let c=t.segments[i];n.push(new St(c.path,dc(e[0]))),r++;continue}let a=zn(o)?o.outlets[x]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&qi(s)?(n.push(new St(a,dc(s))),r+=2):(n.push(new St(a,{})),r++)}return new U(n,{})}function sm(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=ko(new U([],{}),0,n))}),i}function dc(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function uc(t,i,e){return t==e.path&&$e(i,e.parameters)}var Vn="imperative",ce=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(ce||{}),Te=class{id;url;constructor(i,e){this.id=i,this.url=e}},nn=class extends Te{type=ce.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ct=class extends Te{urlAfterRedirects;type=ce.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},pe=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(pe||{}),Zi=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Zi||{}),Pe=class extends Te{reason;code;type=ce.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ac(t){return t instanceof Pe&&(t.code===pe.Redirect||t.code===pe.SupersededByNewNavigation)}var lt=class extends Te{reason;code;type=ce.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},rn=class extends Te{error;target;type=ce.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Yi=class extends Te{urlAfterRedirects;state;type=ce.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Oo=class extends Te{urlAfterRedirects;state;type=ce.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Po=class extends Te{urlAfterRedirects;state;shouldActivate;type=ce.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},No=class extends Te{urlAfterRedirects;state;type=ce.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lo=class extends Te{urlAfterRedirects;state;type=ce.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jo=class{route;type=ce.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Bo=class{route;type=ce.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Vo=class{snapshot;type=ce.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uo=class{snapshot;type=ce.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zo=class{snapshot;type=ce.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ho=class{snapshot;type=ce.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var on=class{},Hn=class{},an=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function cm(t){return!(t instanceof on)&&!(t instanceof an)&&!(t instanceof Hn)}var $o=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Yn(this.rootInjector)}},Yn=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new $o(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(w(Se))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ki=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Go(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=Go(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=qo(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return qo(i,this._root).map(e=>e.value)}};function Go(t,i){if(t===i.value)return i;for(let e of i.children){let n=Go(t,e);if(n)return n}return null}function qo(t,i){if(t===i.value)return[i];for(let e of i.children){let n=qo(t,e);if(n.length)return n.unshift(i),n}return[]}var xe=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Qt(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var Qi=class extends Ki{snapshot;constructor(i,e){super(i),this.snapshot=e,ia(this,i)}toString(){return this.snapshot.toString()}};function Rc(t,i){let e=lm(t,i),n=new ge([new St("",{})]),r=new ge({}),o=new ge({}),a=new ge({}),s=new ge(""),c=new Rt(n,r,a,s,o,x,t,e.root);return c.snapshot=e.root,new Qi(new xe(c,[]),e)}function lm(t,i){let e={},n={},r={},a=new $n([],e,r,"",n,x,t,null,{},i);return new Xi("",new xe(a,[]))}var Rt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,a,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(L(d=>d[Zn]))??_(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(L(i=>en(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(L(i=>en(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function na(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:f(f({},i.params),t.params),data:f(f({},i.data),t.data),resolve:f(f(f(f({},t.data),i.data),r?.data),t._resolvedData)}:n={params:f({},t.params),data:f({},t.data),resolve:f(f({},t.data),t._resolvedData??{})},r&&Fc(r)&&(n.resolve[Zn]=r.title),n}var $n=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Zn]}constructor(i,e,n,r,o,a,s,c,d,h){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=en(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=en(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Xi=class extends Ki{url;constructor(i,e){super(e),this.url=i,ia(this,e)}toString(){return Tc(this._root)}};function ia(t,i){i.value._routerState=t,i.children.forEach(e=>ia(t,e))}function Tc(t){let i=t.children.length>0?` { ${t.children.map(Tc).join(", ")} } `:"";return`${t.value}${i}`}function So(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,$e(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),$e(i.params,e.params)||t.paramsSubject.next(e.params),Nu(i.url,e.url)||t.urlSubject.next(e.url),$e(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Wo(t,i){let e=$e(t.params,i.params)&&Uu(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||Wo(t.parent,i.parent))}function Fc(t){return typeof t.title=="string"||t.title===null}var dm=new v(""),kc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=x;activateEvents=new O;deactivateEvents=new O;attachEvents=new O;detachEvents=new O;routerOutletData=Is();parentContexts=l(Yn);location=l(xi);changeDetector=l(rt);inputBinder=l(nr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new M(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Zo(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Oe]})}return t})(),Zo=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===Rt?this.route:i===Yn?this.childContexts:i===dm?this.outletData:this.parent.get(i,e)}},nr=new v("");var Oc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&V(0,"router-outlet")},dependencies:[kc],encapsulation:2})}return t})();function ra(t){let i=t.children&&t.children.map(ra),e=i?G(f({},t),{children:i}):f({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==x&&(e.component=Oc),e}function um(t,i,e){let n=Gn(t,i._root,e?e._root:void 0);return new Qi(n,i)}function Gn(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=mm(t,i,e);return new xe(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>Gn(t,s)),a}}let n=hm(i.value),r=i.children.map(o=>Gn(t,o));return new xe(n,r)}}function mm(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Gn(t,n,r);return Gn(t,n)})}function hm(t){return new Rt(new ge(t.url),new ge(t.params),new ge(t.queryParams),new ge(t.fragment),new ge(t.data),t.outlet,t.component,t)}var qn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Pc="ngNavigationCancelingError";function Ji(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=tn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Nc(!1,pe.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Nc(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Pc]=!0,e.cancellationCode=i,e}function pm(t){return Lc(t)&&tn(t.url)}function Lc(t){return!!t&&t[Pc]}var Yo=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),So(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=Qt(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Qt(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Qt(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=Qt(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new Ho(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Uo(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(So(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),So(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},er=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Jt=class{component;route;constructor(i,e){this.component=i,this.route=e}};function fm(t,i,e){let n=t._root,r=i?i._root:null;return jn(n,r,e,[n.value])}function gm(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function cn(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!es(t)?t:i.get(t):n}function jn(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Qt(i);return t.children.forEach(a=>{vm(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Un(s,e.getContext(a),r)),r}function vm(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=bm(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new er(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?jn(t,i,s?s.children:null,n,r):jn(t,i,e,n,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Jt(s.outlet.component,a))}else a&&Un(i,s,r),r.canActivateChecks.push(new er(n)),o.component?jn(t,null,s?s.children:null,n,r):jn(t,null,e,n,r);return r}function bm(t,i,e){if(typeof e=="function")return ye(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!It(t.url,i.url);case"pathParamsOrQueryParamsChange":return!It(t.url,i.url)||!$e(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Wo(t,i)||!$e(t.queryParams,i.queryParams);default:return!Wo(t,i)}}function Un(t,i,e){let n=Qt(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?Un(a,i.children.getContext(o),e):Un(a,null,e):Un(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Jt(i.outlet.component,r)):e.canDeactivateChecks.push(new Jt(null,r)):e.canDeactivateChecks.push(new Jt(null,r))}function Kn(t){return typeof t=="function"}function ym(t){return typeof t=="boolean"}function _m(t){return t&&Kn(t.canLoad)}function Cm(t){return t&&Kn(t.canActivate)}function wm(t){return t&&Kn(t.canActivateChild)}function Dm(t){return t&&Kn(t.canDeactivate)}function xm(t){return t&&Kn(t.canMatch)}function jc(t){return t instanceof qa||t?.name==="EmptyError"}var Ui=Symbol("INITIAL_VALUE");function sn(){return Me(t=>Wa(t.map(i=>i.pipe(et(1),bi(Ui)))).pipe(L(i=>{for(let e of i)if(e!==!0){if(e===Ui)return Ui;if(e===!1||Em(e))return e}return!0}),Ee(i=>i!==Ui),et(1)))}function Em(t){return tn(t)||t instanceof qn}function Bc(t){return t.aborted?_(void 0).pipe(et(1)):new Nt(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Vc(t){return Ue(Bc(t))}function Mm(t){return Je(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?_(G(f({},i),{guardsResult:!0})):Sm(o,e,n).pipe(Je(a=>a&&ym(a)?Im(e,r,t):_(a)),L(a=>G(f({},i),{guardsResult:a})))})}function Sm(t,i,e){return be(t).pipe(Je(n=>km(n.component,n.route,e,i)),tt(n=>n!==!0,!0))}function Im(t,i,e){return be(i).pipe(Cn(n=>Za(Rm(n.route.parent,e),Am(n.route,e),Fm(t,n.path),Tm(t,n.route))),tt(n=>n!==!0,!0))}function Am(t,i){return t!==null&&i&&i(new zo(t)),_(!0)}function Rm(t,i){return t!==null&&i&&i(new Vo(t)),_(!0)}function Tm(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return _(!0);let n=e.map(r=>fi(()=>{let o=i._environmentInjector,a=cn(r,o),s=Cm(a)?a.canActivate(i,t):ye(o,()=>a(i,t));return Tt(s).pipe(tt())}));return _(n).pipe(sn())}function Fm(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>gm(o)).filter(o=>o!==null).map(o=>fi(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=cn(s,c),h=wm(d)?d.canActivateChild(e,t):ye(c,()=>d(e,t));return Tt(h).pipe(tt())});return _(a).pipe(sn())}));return _(r).pipe(sn())}function km(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return _(!0);let o=r.map(a=>{let s=i._environmentInjector,c=cn(a,s),d=Dm(c)?c.canDeactivate(t,i,e,n):ye(s,()=>c(t,i,e,n));return Tt(d).pipe(tt())});return _(o).pipe(sn())}function Om(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return _(!0);let a=o.map(s=>{let c=cn(s,t),d=_m(c)?c.canLoad(i,e):ye(t,()=>c(i,e)),h=Tt(d);return r?h.pipe(Vc(r)):h});return _(a).pipe(sn(),Uc(n))}function Uc(t){return Ga(he(i=>{if(typeof i!="boolean")throw Ji(t,i)}),L(i=>i===!0))}function Pm(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return _(!0);let s=a.map(c=>{let d=cn(c,t),h=xm(d)?d.canMatch(i,e,r):ye(t,()=>d(i,e,r));return Tt(h).pipe(Vc(o))});return _(s).pipe(sn(),Uc(n))}var Ke=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},Wn=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function Nm(t){throw new M(4e3,!1)}function Lm(t){throw Nc(!1,pe.GuardRejected)}var Ko=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[x])throw Nm(`${i.redirectTo}`);r=r.children[x]}}async applyRedirectCommands(i,e,n,r,o){let a=await jm(e,r,o);if(a instanceof Le)throw new Wn(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new Wn(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Le(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(i,c,n,r)}),new U(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new M(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function jm(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Gi(Tt(ye(e,()=>n(i))))}function Bm(t,i){return t.providers&&!t._injector&&(t._injector=Kr(t.providers,i,`Route: ${t.path}`)),t._injector??i}function Ne(t){return t.outlet||x}function Vm(t,i){let e=t.filter(n=>Ne(n)===i);return e.push(...t.filter(n=>Ne(n)!==i)),e}var Qo={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function zc(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Um(t,i,e,n,r,o,a){let s=Hc(t,i,e);if(!s.matched)return _(s);let c=zc(o(s));return n=Bm(i,n),Pm(n,i,e,r,c,a).pipe(L(d=>d===!0?s:f({},Qo)))}function Hc(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?f({},Qo):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Pu)(e,t,i);if(!r)return f({},Qo);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function mc(t,i,e,n,r){return e.length>0&&$m(t,e,n,r)?{segmentGroup:new U(i,Hm(n,new U(e,t.children))),slicedSegments:[]}:e.length===0&&Gm(t,e,n)?{segmentGroup:new U(t.segments,zm(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new U(t.segments,t.children),slicedSegments:e}}function zm(t,i,e,n){let r={};for(let o of e)if(ir(t,i,o)&&!n[Ne(o)]){let a=new U([],{});r[Ne(o)]=a}return f(f({},n),r)}function Hm(t,i){let e={};e[x]=i;for(let n of t)if(n.path===""&&Ne(n)!==x){let r=new U([],{});e[Ne(n)]=r}return e}function $m(t,i,e,n){return e.some(r=>!ir(t,i,r)||!(Ne(r)!==x)?!1:!(n!==void 0&&Ne(r)===n))}function Gm(t,i,e){return e.some(n=>ir(t,i,n))}function ir(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function qm(t,i,e){return i.length===0&&!t.children[e]}var Xo=class{};async function Wm(t,i,e,n,r,o,a="emptyOnly",s){return new Jo(t,i,e,n,r,a,o,s).recognize()}var Zm=31,Jo=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Ko(this.urlSerializer,this.urlTree)}noMatchError(i){return new M(4002,`'${i.segmentGroup}'`)}async recognize(){let i=mc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new xe(n,e),o=new Xi("",r),a=tm(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new $n([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),x,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,x,e),rootSnapshot:e}}catch(n){if(n instanceof Wn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ke?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=await this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof xe?[a]:[]}async processChildren(i,e,n,r){let o=[];for(let c of Object.keys(n.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=n.children[c],h=Vm(e,c),b=await this.processSegmentGroup(i,h,d,c,r);a.push(...b)}let s=$c(a);return Ym(s),s}async processSegment(i,e,n,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,n,r,o,a,s)}catch(d){if(d instanceof Ke||jc(d))continue;throw d}if(qm(n,r,o))return new Xo;throw new Ke(n)}async processSegmentAgainstRoute(i,e,n,r,o,a,s,c){if(Ne(n)!==a&&(a===x||!ir(r,o,n)))throw new Ke(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,c);throw new Ke(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){let{matched:c,parameters:d,consumedSegments:h,positionalParamSegments:b,remainingSegments:S}=Hc(e,r,o);if(!c)throw new Ke(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Zm&&(this.allowRedirects=!1));let ae=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let te=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,b,zc(ae),i),J=await this.applyRedirects.lineralizeSegments(r,te);return this.processSegment(i,n,e,J.concat(S),a,!1,s)}createSnapshot(i,e,n,r,o){let a=new $n(n,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Qm(e),Ne(e),e.component??e._loadedComponent??null,e,Xm(e),i),s=na(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=fe=>this.createSnapshot(i,n,fe.consumedSegments,fe.parameters,a),c=await Gi(Um(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!c?.matched)throw new Ke(e);i=n._injector??i;let{routes:d}=await this.getChildConfig(i,n,r),h=n._loadedInjector??i,{parameters:b,consumedSegments:S,remainingSegments:ae}=c,te=this.createSnapshot(i,n,S,b,a),{segmentGroup:J,slicedSegments:I}=mc(e,S,ae,d,o);if(I.length===0&&J.hasChildren()){let fe=await this.processChildren(h,d,J,te);return new xe(te,fe)}if(d.length===0&&I.length===0)return new xe(te,[]);let k=Ne(n)===o,ne=await this.processSegment(h,d,J,I,k?x:o,!0,te);return new xe(te,ne instanceof xe?[ne]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Gi(Om(i,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Lm(e)}return{routes:[],injector:i}}};function Ym(t){t.sort((i,e)=>i.value.outlet===x?-1:e.value.outlet===x?1:i.value.outlet.localeCompare(e.value.outlet))}function Km(t){let i=t.value.routeConfig;return i&&i.path===""}function $c(t){let i=[],e=new Set;for(let n of t){if(!Km(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=$c(n.children);i.push(new xe(n.value,r))}return i.filter(n=>!e.has(n))}function Qm(t){return t.data||{}}function Xm(t){return t.resolve||{}}function Jm(t,i,e,n,r,o,a){return Je(async s=>{let{state:c,tree:d}=await Wm(t,i,e,n,s.extractedUrl,r,o,a);return G(f({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function eh(t){return Je(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return _(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of Gc(s))o.add(c);let a=0;return be(o).pipe(Cn(s=>r.has(s)?th(s,e,t):(s.data=na(s,s.parent,t).resolve,_(void 0))),he(()=>a++),qr(1),Je(s=>a===o.size?_(i):ve))})}function Gc(t){let i=t.children.map(e=>Gc(e)).flat();return[t,...i]}function th(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!Fc(n)&&(r[Zn]=n.title),fi(()=>(t.data=na(t,t.parent,e).resolve,nh(r,t,i).pipe(L(o=>(t._resolvedData=o,t.data=f(f({},t.data),o),null)))))}function nh(t,i,e){let n=Ao(t);if(n.length===0)return _({});let r={};return be(n).pipe(Je(o=>ih(t[o],i,e).pipe(tt(),he(a=>{if(a instanceof qn)throw Ji(new At,a);r[o]=a}))),qr(1),L(()=>r),_n(o=>jc(o)?ve:pi(o)))}function ih(t,i,e){let n=i._environmentInjector,r=cn(t,n),o=r.resolve?r.resolve(i,e):ye(n,()=>r(i,e));return Tt(o)}function hc(t){return Me(i=>{let e=t(i);return e?be(e).pipe(L(()=>i)):_(i)})}var qc=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===x);return n}getResolvedTitleForRoute(e){return e.data[Zn]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>l(rh),providedIn:"root"})}return t})(),rh=(()=>{class t extends qc{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(w(rc))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rr=new v("",{factory:()=>({})}),or=new v(""),Wc=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Ms);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await fc(ye(e,()=>n.loadComponent())),a=await Yc(Zc(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await oh(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function oh(t,i,e,n){let r=await fc(ye(e,()=>t.loadChildren())),o=await Yc(Zc(r)),a;o instanceof bs||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),n&&n(t);let s,c,d=!1,h;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,h=a,c=s.get(or,[],{optional:!0,self:!0}).flat()),{routes:c.map(ra),injector:s,factory:h}}function ah(t){return t&&typeof t=="object"&&"default"in t}function Zc(t){return ah(t)?t.default:t}async function Yc(t){return t}var oa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>l(sh),providedIn:"root"})}return t})(),sh=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kc=new v("");var ch=()=>{},Qc=new v(""),Xc=(()=>{class t{currentNavigation=j(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=j(null);events=new Y;transitionAbortWithErrorSubject=new Y;configLoader=l(Wc);environmentInjector=l(Se);destroyRef=l(Dn);urlSerializer=l(tr);rootContexts=l(Yn);location=l(qt);inputBindingEnabled=l(nr,{optional:!0})!==null;titleStrategy=l(qc);options=l(rr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(oa);createViewTransition=l(Kc,{optional:!0});navigationErrorHandler=l(Qc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new jo(r)),n=r=>this.events.next(new Bo(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;se(()=>{this.transitions?.next(G(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ge(null),this.transitions.pipe(Ee(n=>n!==null),Me(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return _(n).pipe(Me(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",pe.SupersededByNewNavigation),ve;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?G(f({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&h!=="reload")return this.events.next(new lt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Zi.IgnoredSameUrlNavigation)),s.resolve(!1),ve;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _(s).pipe(Me(b=>(this.events.next(new nn(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),b.id!==this.navigationId?ve:Promise.resolve(b))),Jm(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),he(b=>{n.targetSnapshot=b.targetSnapshot,n.urlAfterRedirects=b.urlAfterRedirects,this.currentNavigation.update(S=>(S.finalUrl=b.urlAfterRedirects,S)),this.events.next(new Hn)}),Me(b=>be(n.routesRecognizeHandler.deferredHandle??_(void 0)).pipe(L(()=>b))),he(()=>{let b=new Yi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(b)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:b,extractedUrl:S,source:ae,restoredState:te,extras:J}=s,I=new nn(b,this.urlSerializer.serialize(S),ae,te);this.events.next(I);let k=Rc(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=G(f({},s),{targetSnapshot:k,urlAfterRedirects:S,extras:G(f({},J),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ne=>(ne.finalUrl=S,ne)),_(n)}else return this.events.next(new lt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Zi.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ve}),L(s=>{let c=new Oo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=n=G(f({},s),{guards:fm(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),Mm(s=>this.events.next(s)),Me(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ji(this.urlSerializer,s.guardsResult);let c=new Po(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return ve;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",pe.GuardRejected),ve;if(s.guards.canActivateChecks.length===0)return _(s);let d=new No(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return ve;let h=!1;return _(s).pipe(eh(this.paramsInheritanceStrategy),he({next:()=>{h=!0;let b=new Lo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(b)},complete:()=>{h||this.cancelNavigationTransition(s,"",pe.NoDataFromResolver)}}))}),hc(s=>{let c=h=>{let b=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let S=h._environmentInjector;b.push(this.configLoader.loadComponent(S,h.routeConfig).then(ae=>{h.component=ae}))}for(let S of h.children)b.push(...c(S));return b},d=c(s.targetSnapshot.root);return d.length===0?_(s):be(Promise.all(d).then(()=>s))}),hc(()=>this.afterPreactivation()),Me(()=>{let{currentSnapshot:s,targetSnapshot:c}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?be(d).pipe(L(()=>n)):_(n)}),et(1),Me(s=>{let c=um(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=G(f({},s),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),this.events.next(new on);let d=n.beforeActivateHandler.deferredHandle;return d?be(d.then(()=>s)):_(s)}),he(s=>{new Yo(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=ch,c)),this.lastSuccessfulNavigation.set(se(this.currentNavigation)),this.events.next(new ct(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ue(Bc(o.signal).pipe(Ee(()=>!r&&!n.targetRouterState),he(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",pe.Aborted)}))),he({complete:()=>{r=!0}}),Ue(this.transitionAbortWithErrorSubject.pipe(he(s=>{throw s}))),Lt(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",pe.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),_n(s=>{if(r=!0,this.destroyed)return n.resolve(!1),ve;if(Lc(s))this.events.next(new Pe(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),pm(s)?this.events.next(new an(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let c=new rn(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=ye(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof qn){let{message:h,cancellationCode:b}=Ji(this.urlSerializer,d);this.events.next(new Pe(n.id,this.urlSerializer.serialize(n.extractedUrl),h,b)),this.events.next(new an(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return ve}))}))}cancelNavigationTransition(e,n,r){let o=new Pe(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=se(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lh(t){return t!==Vn}var Jc=new v("");var dh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>l(uh),providedIn:"root"})}return t})(),ea=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},uh=(()=>{class t extends ea{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),aa=(()=>{class t{urlSerializer=l(tr);options=l(rr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(qt);urlHandlingStrategy=l(oa);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Le;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof Le?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Rc(null,l(Se));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>l(mh),providedIn:"root"})}return t})(),mh=(()=>{class t extends aa{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof nn?this.updateStateMemento():e instanceof lt?this.commitTransition(n):e instanceof Yi?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof on?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Pe&&!Ac(e)?this.restoreHistory(n):e instanceof rn?this.restoreHistory(n,!0):e instanceof ct&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:o,state:a}=n;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=f(f({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=f(f({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function el(t,i){t.events.pipe(Ee(e=>e instanceof ct||e instanceof Pe||e instanceof rn||e instanceof lt),L(e=>e instanceof ct||e instanceof lt?0:(e instanceof Pe?e.code===pe.Redirect||e.code===pe.SupersededByNewNavigation:!1)?2:1),Ee(e=>e!==2),et(1)).subscribe(()=>{i()})}var sa=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Qr);stateManager=l(aa);options=l(rr,{optional:!0})||{};pendingTasks=l(ns);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Xc);urlSerializer=l(tr);location=l(qt);urlHandlingStrategy=l(oa);injector=l(Se);_events=new Y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(dh);injectorCleanup=l(Jc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(or,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(nr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Pt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=se(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Pe&&n.code!==pe.Redirect&&n.code!==pe.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ct)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof an){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),c=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||lh(r.source)},a);this.scheduleNavigation(s,Vn,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}cm(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null;if(r){let c=f({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,n,a,o).catch(c=>{this.disposed||this.injector.get(yi)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return se(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ra),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=n,d=c?this.currentUrlTree.fragment:a,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let b;try{let S=r?r.snapshot:this.routerState.snapshot.root;b=Ec(S)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),b=this.currentUrlTree.root}return Mc(b,e,h,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=tn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Vn,null,n)}navigate(e,n={skipLocationChange:!1}){return hh(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(wn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=f({},vc):n===!1?r=f({},Ro):r=f(f({},Ro),n),tn(e))return sc(this.currentUrlTree,e,r);let o=this.parseUrl(e);return sc(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((b,S)=>{s=b,c=S});let h=this.pendingTasks.add();return el(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hh(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new M(4008,!1)}var ph=new v("");function ca(t,...i){return _t([{provide:or,multi:!0,useValue:t},[],{provide:Rt,useFactory:fh},{provide:ys,multi:!0,useFactory:gh},i.map(e=>e.\u0275providers)])}function fh(){return l(sa).routerState.root}function gh(){let t=l(de);return i=>{let e=t.get(zt);if(i!==e.components[0])return;let n=t.get(sa),r=t.get(vh);t.get(bh)===1&&n.initialNavigation(),t.get(yh,null,{optional:!0})?.setUpPreloading(),t.get(ph,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var vh=new v("",{factory:()=>new Y}),bh=new v("",{factory:()=>1});var yh=new v("");var tl=[];var nl={providers:[is(),Co(),ac(),ca(tl)]};var dl=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(ee(Ie),ee(K))};static \u0275dir=E({type:t})}return t})(),Ch=(()=>{class t extends dl{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=E({type:t,features:[ue]})}return t})(),ul=new v("");var wh={provide:ul,useExisting:yt(()=>gr),multi:!0};function Dh(){let t=Re()?Re().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var xh=new v(""),gr=(()=>{class t extends dl{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Dh())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(ee(Ie),ee(K),ee(xh,8))};static \u0275dir=E({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&P("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[_e([wh]),ue]})}return t})();function ha(t){return t==null||pa(t)===0}function pa(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var vr=new v(""),fa=new v(""),Eh=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Fe=class{static min(i){return Mh(i)}static max(i){return Sh(i)}static required(i){return Ih(i)}static requiredTrue(i){return Ah(i)}static email(i){return Rh(i)}static minLength(i){return Th(i)}static maxLength(i){return ml(i)}static pattern(i){return Fh(i)}static nullValidator(i){return cr()}static compose(i){return bl(i)}static composeAsync(i){return yl(i)}};function Mh(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Sh(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Ih(t){return ha(t.value)?{required:!0}:null}function Ah(t){return t.value===!0?null:{required:!0}}function Rh(t){return ha(t.value)||Eh.test(t.value)?null:{email:!0}}function Th(t){return i=>{let e=i.value?.length??pa(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function ml(t){return i=>{let e=i.value?.length??pa(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Fh(t){if(!t)return cr;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(ha(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function cr(t){return null}function hl(t){return t!=null}function pl(t){return Mn(t)?be(t):t}function fl(t){let i={};return t.forEach(e=>{i=e!=null?f(f({},i),e):i}),Object.keys(i).length===0?null:i}function gl(t,i){return i.map(e=>e(t))}function kh(t){return!t.validate}function vl(t){return t.map(i=>kh(i)?i:e=>i.validate(e))}function bl(t){if(!t)return null;let i=t.filter(hl);return i.length==0?null:function(e){return fl(gl(e,i))}}function ga(t){return t!=null?bl(vl(t)):null}function yl(t){if(!t)return null;let i=t.filter(hl);return i.length==0?null:function(e){let n=gl(e,i).map(pl);return gi(n).pipe(L(fl))}}function va(t){return t!=null?yl(vl(t)):null}function il(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function _l(t){return t._rawValidators}function Cl(t){return t._rawAsyncValidators}function la(t){return t?Array.isArray(t)?t:[t]:[]}function lr(t,i){return Array.isArray(t)?t.includes(i):t===i}function rl(t,i){let e=la(i);return la(t).forEach(r=>{lr(e,r)||e.push(r)}),e}function ol(t,i){return la(i).filter(e=>!lr(t,e))}var dr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=ga(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=va(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},dt=class extends dr{name;get formDirective(){return null}get path(){return null}},Ft=class extends dr{_parent=null;name=null;valueAccessor=null},ur=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wl=(()=>{class t extends ur{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(ee(Ft,2))};static \u0275dir=E({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&R("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ue]})}return t})(),Dl=(()=>{class t extends ur{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(ee(dt,10))};static \u0275dir=E({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&R("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ue]})}return t})();var Qn="VALID",ar="INVALID",ln="PENDING",Xn="DISABLED",ut=class{},mr=class extends ut{value;source;constructor(i,e){super(),this.value=i,this.source=e}},ei=class extends ut{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},ti=class extends ut{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},dn=class extends ut{status;source;constructor(i,e){super(),this.status=i,this.source=e}},hr=class extends ut{source;constructor(i){super(),this.source=i}},ni=class extends ut{source;constructor(i){super(),this.source=i}};function ba(t){return(br(t)?t.validators:t)||null}function Oh(t){return Array.isArray(t)?ga(t):t||null}function ya(t,i){return(br(i)?i.asyncValidators:t)||null}function Ph(t){return Array.isArray(t)?va(t):t||null}function br(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function xl(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new M(1e3,"");if(!n[e])throw new M(1001,"")}function El(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new M(1002,"")})}var un=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return se(this.statusReactive)}set status(i){se(()=>this.statusReactive.set(i))}_status=Ae(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===Qn}get invalid(){return this.status===ar}get pending(){return this.status===ln}get disabled(){return this.status===Xn}get enabled(){return this.status!==Xn}errors;get pristine(){return se(this.pristineReactive)}set pristine(i){se(()=>this.pristineReactive.set(i))}_pristine=Ae(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return se(this.touchedReactive)}set touched(i){se(()=>this.touchedReactive.set(i))}_touched=Ae(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new Y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(rl(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(rl(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ol(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ol(i,this._rawAsyncValidators))}hasValidator(i){return lr(this._rawValidators,i)}hasAsyncValidator(i){return lr(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(G(f({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new ti(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new ti(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(G(f({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new ei(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new ei(!0,n))}markAsPending(i={}){this.status=ln;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new dn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(G(f({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Xn,this.errors=null,this._forEachChild(r=>{r.disable(G(f({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new mr(this.value,n)),this._events.next(new dn(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Qn,this._forEachChild(n=>{n.enable(G(f({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(G(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Qn||this.status===ln)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new mr(this.value,e)),this._events.next(new dn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(G(f({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Xn:Qn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=ln,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=pl(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new dn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?Xn:this.errors?ar:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ln)?ln:this._anyControlsHaveStatus(ar)?ar:Qn}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new ei(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new ti(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){br(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Oh(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Ph(this._rawAsyncValidators)}},mn=class extends un{constructor(i,e,n){super(ba(e),ya(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){El(this,!0,i),Object.keys(i).forEach(n=>{xl(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,G(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ni(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var da=class extends mn{};var _a=new v("",{factory:()=>Ca}),Ca="always";function Nh(t,i){return[...i.path,t]}function ua(t,i,e=Ca){wa(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),jh(t,i),Vh(t,i),Bh(t,i),Lh(t,i)}function al(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),fr(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function pr(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Lh(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function wa(t,i){let e=_l(t);i.validator!==null?t.setValidators(il(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Cl(t);i.asyncValidator!==null?t.setAsyncValidators(il(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();pr(i._rawValidators,r),pr(i._rawAsyncValidators,r)}function fr(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=_l(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=Cl(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return pr(i._rawValidators,n),pr(i._rawAsyncValidators,n),e}function jh(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ml(t,i)})}function Bh(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ml(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Ml(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Vh(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Sl(t,i){t==null,wa(t,i)}function Uh(t,i){return fr(t,i)}function zh(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Hh(t){return Object.getPrototypeOf(t.constructor)===Ch}function Il(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function $h(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===gr?e=o:Hh(o)?n=o:r=o}),r||n||e||null}function Gh(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var qh={provide:dt,useExisting:yt(()=>Da)},Jn=Promise.resolve(),Da=(()=>{class t extends dt{callSetDisabledState;get submitted(){return se(this.submittedReactive)}_submitted=Ae(()=>this.submittedReactive());submittedReactive=j(!1);_directives=new Set;form;ngSubmit=new O;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new mn({},ga(e),va(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Jn.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),ua(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Jn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Jn.then(()=>{let n=this._findContainer(e.path),r=new mn({});Sl(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Jn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Jn.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Il(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new hr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(ee(vr,10),ee(fa,10),ee(_a,8))};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&P("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([qh]),ue]})}return t})();function sl(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function cl(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var sr=class extends un{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(ba(e),ya(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),br(e)&&(e.nonNullable||e.initialValueIsDefault)&&(cl(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ni(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){sl(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){sl(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){cl(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Wh=t=>t instanceof sr;var Al=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var ma=class extends un{constructor(i,e,n){super(ba(e),ya(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){El(this,!1,i),i.forEach((n,r)=>{xl(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],G(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ni(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Zh=(()=>{class t extends dt{callSetDisabledState;get submitted(){return se(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ae(()=>this._submittedReactive());_submittedReactive=j(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(fr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return ua(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){al(e.control||null,e,!1),Gh(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Il(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new hr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(al(n||null,e),Wh(r)&&(ua(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Sl(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Uh(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){wa(this.form,this),this._oldForm&&fr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(ee(vr,10),ee(fa,10),ee(_a,8))};static \u0275dir=E({type:t,features:[ue,Oe]})}return t})();var Rl=new v("");var Yh={provide:Ft,useExisting:yt(()=>xa)},xa=(()=>{class t extends Ft{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new O;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=$h(this,o)}ngOnChanges(e){this._added||this._setUpControl(),zh(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Nh(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(ee(dt,13),ee(vr,10),ee(fa,10),ee(ul,10),ee(Rl,8))};static \u0275dir=E({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[_e([Yh]),ue,Oe]})}return t})();var Kh={provide:dt,useExisting:yt(()=>ii)},ii=(()=>{class t extends Zh{form=null;ngSubmit=new O;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&P("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([Kh]),ue]})}return t})();function Qh(t){return typeof t=="number"?t:parseInt(t,10)}var Xh=(()=>{class t{_validator=cr;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):cr,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,features:[Oe]})}return t})();var Jh={provide:vr,useExisting:yt(()=>Ea),multi:!0},Ea=(()=>{class t extends Xh{maxlength;inputName="maxlength";normalizeInput=e=>Qh(e);createValidator=e=>ml(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&X("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[_e([Jh]),ue]})}return t})();var ep=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();function ll(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Tl=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return ll(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new mn(r,o)}record(e,n=null){let r=this._reduceControls(e);return new da(r,n)}control(e,n,r){let o={};return this.useNonNullable?(ll(n)?o=n:(o.validators=n,o.asyncValidators=r),new sr(e,G(f({},o),{nonNullable:!0}))):new sr(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new ma(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof sr)return e;if(e instanceof un)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yr=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Rl,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:_a,useValue:e.callSetDisabledState??Ca}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[ep]})}return t})();var np=new v("cdk-dir-doc",{providedIn:"root",factory:()=>l(A)}),ip=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Fl(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?ip.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var _r=(()=>{class t{get value(){return this.valueSignal()}valueSignal=j("ltr");change=new O;constructor(){let e=l(np,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Fl(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();var rp=["*"];var op=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ap=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],sp=new v("MAT_CARD_CONFIG"),mt=(()=>{class t{appearance;constructor(){let e=l(sp,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&R("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:rp,decls:1,vars:0,template:function(n,r){n&1&&(me(),N(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var pt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ap,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(me(op),N(0),wt(1,"div",0),N(2,1),Dt(),N(3,2))},encapsulation:2,changeDetection:0})}return t})();var kl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return t})();var gt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[oe]})}return t})();var cp=(t,i)=>i.title;function lp(t,i){if(t&1&&(u(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),y(3),m()(),u(4,"mat-card-content")(5,"p"),y(6),m()()()),t&2){let e=i.$implicit;p(3),q(e.title),p(3),q(e.content)}}var wr=class t{aboutCards=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-about-section"]],inputs:{aboutCards:"aboutCards"},decls:6,vars:0,consts:[["id","about",1,"content","reveal"],[1,"about-grid"],["appearance","outlined",1,"about-card","reveal"]],template:function(e,n){e&1&&(u(0,"section",0)(1,"h2"),y(2,"About"),m(),u(3,"div",1),we(4,lp,7,2,"mat-card",2,cp),m()()),e&2&&(p(4),De(n.aboutCards))},dependencies:[gt,mt,pt,ft,ht],encapsulation:2})};function ri(t){return t.buttons===0||t.detail===0}function oi(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Ma;function Ol(){if(Ma==null){let t=typeof document<"u"?document.head:null;Ma=!!(t&&(t.createShadowRoot||t.attachShadow))}return Ma}function Sa(t){if(Ol()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function je(t){return t.composedPath?t.composedPath()[0]:t.target}var Ia;try{Ia=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ia=!1}var le=(()=>{class t{_platformId=l(jt);isBrowser=this._platformId?js(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ia)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ai;function Pl(){if(ai==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ai=!0}))}finally{ai=ai||!1}return ai}function hn(t){return Pl()?t:!!t.capture}function Be(t){return t instanceof K?t.nativeElement:t}var Nl=new v("cdk-input-modality-detector-options"),Ll={ignoreKeys:[18,17,224,91,16]},jl=650,Aa={passive:!0,capture:!0},Bl=(()=>{class t{_platform=l(le);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ge(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=je(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<jl||(this._modality.next(ri(e)?"keyboard":"mouse"),this._mostRecentTarget=je(e))};_onTouchstart=e=>{if(oi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=je(e)};constructor(){let e=l(z),n=l(A),r=l(Nl,{optional:!0});if(this._options=f(f({},Ll),r),this.modalityDetected=this._modality.pipe(Ja(1)),this.modalityChanged=this.modalityDetected.pipe(Ya()),this._platform.isBrowser){let o=l(He).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Aa),o.listen(n,"mousedown",this._onMousedown,Aa),o.listen(n,"touchstart",this._onTouchstart,Aa)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),si=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(si||{}),Vl=new v("cdk-focus-monitor-default-options"),Dr=hn({passive:!0,capture:!0}),ci=(()=>{class t{_ngZone=l(z);_platform=l(le);_inputModalityDetector=l(Bl);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(A);_stopInputModalityDetector=new Y;constructor(){let e=l(Vl,{optional:!0});this._detectionMode=e?.detectionMode||si.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=je(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=Be(e);if(!this._platform.isBrowser||r.nodeType!==1)return _();let o=Sa(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new Y,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Be(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=Be(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,n,c)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===si.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===si.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?jl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=je(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Dr),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Dr)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ue(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Dr),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Dr),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xr=new WeakMap,Ge=(()=>{class t{_appRef;_injector=l(de);_environmentInjector=l(Se);load(e){let n=this._appRef=this._appRef||this._injector.get(zt),r=xr.get(n);r||(r={loaders:new Set,refs:[]},xr.set(n,r),n.onDestroy(()=>{xr.get(n)?.refs.forEach(o=>o.destroy()),xr.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Fs(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ul=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Er;function dp(){if(Er===void 0&&(Er=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Er=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Er}function pn(t){return dp()?.createHTML(t)||t}var zl=new Set,Ot,Ra=(()=>{class t{_platform=l(le);_nonce=l(En,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):mp}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&up(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function up(t,i){if(!zl.has(t))try{Ot||(Ot=document.createElement("style"),i&&Ot.setAttribute("nonce",i),Ot.setAttribute("type","text/css"),document.head.appendChild(Ot)),Ot.sheet&&(Ot.sheet.insertRule(`@media ${t} {body{ }}`,0),zl.add(t))}catch(e){console.error(e)}}function mp(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var hp=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({providers:[hp]})}return t})();var Ta={},Ve=class t{_appId=l(xn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Ta.hasOwnProperty(i)||(Ta[i]=0),`${i}${e?t._infix+"-":""}${Ta[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})};var fn,$l=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Fa(){if(fn)return fn;if(typeof document!="object"||!document)return fn=new Set($l),fn;let t=document.createElement("input");return fn=new Set($l.filter(i=>(t.setAttribute("type",i),t.type===i))),fn}var pp=new v("MATERIAL_ANIMATIONS"),Gl=null;function fp(){return l(pp,{optional:!0})?.animationsDisabled||l(Ci,{optional:!0})==="NoopAnimations"?"di-disabled":(Gl??=l(Ra).matchMedia("(prefers-reduced-motion)").matches,Gl?"reduced-motion":"enabled")}function vt(){return fp()!=="enabled"}function Qe(t){return t!=null&&`${t}`!="false"}var ke=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(ke||{}),ka=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ke.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ql=hn({passive:!0,capture:!0}),Oa=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ql)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,ql)))}_delegateEventHandler=i=>{let e=je(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},li={enterDuration:225,exitDuration:150},vp=800,Wl=hn({passive:!0,capture:!0}),Zl=["mousedown","touchstart"],Yl=["mouseup","mouseleave","touchend","touchcancel"],bp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Mr=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Oa;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Be(n)),o&&o.get(Ge).load(bp)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},li),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||yp(i,e,r),s=i-r.left,c=e-r.top,d=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${s-a}px`,h.style.top=`${c-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,n.color!=null&&(h.style.backgroundColor=n.color),h.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(h);let b=window.getComputedStyle(h),S=b.transitionProperty,ae=b.transitionDuration,te=S==="none"||ae==="0s"||ae==="0s, 0s"||r.width===0&&r.height===0,J=new ka(this,h,n,te);h.style.transform="scale3d(1, 1, 1)",J.state=ke.FADING_IN,n.persistent||(this._mostRecentTransientRipple=J);let I=null;return!te&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let k=()=>{I&&(I.fallbackTimer=null),clearTimeout(fe),this._finishRippleTransition(J)},ne=()=>this._destroyRipple(J),fe=setTimeout(ne,d+100);h.addEventListener("transitionend",k),h.addEventListener("transitioncancel",ne),I={onTransitionEnd:k,onTransitionCancel:ne,fallbackTimer:fe}}),this._activeRipples.set(J,I),(te||!d)&&this._finishRippleTransition(J),J}fadeOutRipple(i){if(i.state===ke.FADING_OUT||i.state===ke.HIDDEN)return;let e=i.element,n=f(f({},li),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=ke.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Be(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Zl.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Yl.forEach(e=>{this._triggerElement.addEventListener(e,this,Wl)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ke.FADING_IN?this._startFadeOutTransition(i):i.state===ke.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=ke.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ke.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=ri(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+vp;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!oi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ke.VISIBLE||i.config.terminateOnPointerUp&&i.state===ke.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Zl.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Yl.forEach(e=>i.removeEventListener(e,this,Wl)),this._pointerUpEventsRegistered=!1))}};function yp(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var Sr=new v("mat-ripple-global-options");var _p={capture:!0},Cp=["focus","mousedown","mouseenter","touchstart"],Pa="mat-ripple-loader-uninitialized",Na="mat-ripple-loader-class-name",Kl="mat-ripple-loader-centered",Ir="mat-ripple-loader-disabled",Ar=(()=>{class t{_document=l(A);_animationsDisabled=vt();_globalRippleOptions=l(Sr,{optional:!0});_platform=l(le);_ngZone=l(z);_injector=l(de);_eventCleanups;_hosts=new Map;constructor(){let e=l(He).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Cp.map(n=>e.listen(this._document,n,this._onInteraction,_p)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Pa,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Na))&&e.setAttribute(Na,n.className||""),n.centered&&e.setAttribute(Kl,""),n.disabled&&e.setAttribute(Ir,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Ir,""):e.removeAttribute(Ir)}_onInteraction=e=>{let n=je(e);if(n instanceof HTMLElement){let r=n.closest(`[${Pa}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Na)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??li.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??li.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Ir),rippleConfig:{centered:e.hasAttribute(Kl),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Mr(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(Pa)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var di=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var wp=["mat-icon-button",""],Dp=["*"],xp=new v("MAT_BUTTON_CONFIG");function Ql(t){return t==null?void 0:Mi(t)}var La=(()=>{class t{_elementRef=l(K);_ngZone=l(z);_animationsDisabled=vt();_config=l(xp,{optional:!0});_focusMonitor=l(ci);_cleanupClick;_renderer=l(Ie);_rippleLoader=l(Ar);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Ge).load(di);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(X("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),it(r.color?"mat-"+r.color:""),R("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",re],disabled:[2,"disabled","disabled",re],ariaDisabled:[2,"aria-disabled","ariaDisabled",re],disabledInteractive:[2,"disabledInteractive","disabledInteractive",re],tabIndex:[2,"tabIndex","tabIndex",Ql],_tabindex:[2,"tabindex","_tabindex",Ql]}})}return t})(),ja=(()=>{class t extends La{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ue],attrs:wp,ngContentSelectors:Dp,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(me(),Ze(0,"span",0),N(1),Ze(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Rr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[oe]})}return t})();var Ep=["matButton",""],Mp=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Sp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Xl=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),qe=(()=>{class t extends La{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Ip(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?Xl.get(this._appearance):null,o=Xl.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ue],attrs:Ep,ngContentSelectors:Sp,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(me(Mp),Ze(0,"span",0),N(1),wt(2,"span",1),N(3,1),Dt(),N(4,2),Ze(5,"span",2)(6,"span",3)),n&2&&R("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Ip(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var We=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[Rr,oe]})}return t})();var Ba=class{_box;_destroyed=new Y;_resizeSubject=new Y;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Nt(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Ee(e=>e.some(n=>n.target===i)),Xa({bufferSize:1,refCount:!0}),Ue(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Jl=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=l(z);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ba(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ap=["notch"],Rp=["matFormFieldNotchedOutline",""],Tp=["*"],ed=["iconPrefixContainer"],td=["textPrefixContainer"],nd=["iconSuffixContainer"],id=["textSuffixContainer"],Fp=["textField"],kp=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Op=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Pp(t,i){t&1&&V(0,"span",21)}function Np(t,i){if(t&1&&(u(0,"label",20),N(1,1),H(2,Pp,1,0,"span",21),m()),t&2){let e=Q(2);B("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),X("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),$(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Lp(t,i){if(t&1&&H(0,Np,3,5,"label",20),t&2){let e=Q();$(e._hasFloatingLabel()?0:-1)}}function jp(t,i){t&1&&V(0,"div",7)}function Bp(t,i){}function Vp(t,i){if(t&1&&Ei(0,Bp,0,0,"ng-template",13),t&2){Q(2);let e=to(1);B("ngTemplateOutlet",e)}}function Up(t,i){if(t&1&&(u(0,"div",9),H(1,Vp,1,1,null,13),m()),t&2){let e=Q();B("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),$(e._forceDisplayInfixLabel()?-1:1)}}function zp(t,i){t&1&&(u(0,"div",10,2),N(2,2),m())}function Hp(t,i){t&1&&(u(0,"div",11,3),N(2,3),m())}function $p(t,i){}function Gp(t,i){if(t&1&&Ei(0,$p,0,0,"ng-template",13),t&2){Q();let e=to(1);B("ngTemplateOutlet",e)}}function qp(t,i){t&1&&(u(0,"div",14,4),N(2,4),m())}function Wp(t,i){t&1&&(u(0,"div",15,5),N(2,5),m())}function Zp(t,i){t&1&&V(0,"div",16)}function Yp(t,i){t&1&&(u(0,"div",18),N(1,6),m())}function Kp(t,i){if(t&1&&(u(0,"mat-hint",22),y(1),m()),t&2){let e=Q(2);B("id",e._hintLabelId),p(),q(e.hintLabel)}}function Qp(t,i){if(t&1&&(u(0,"div",19),H(1,Kp,2,2,"mat-hint",22),N(2,7),V(3,"div",23),N(4,8),m()),t&2){let e=Q();p(),$(e.hintLabel?1:-1)}}var mi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-label"]]})}return t})(),dd=new v("MatError"),Ua=(()=>{class t{id=l(Ve).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&xt("id",r.id)},inputs:{id:"id"},features:[_e([{provide:dd,useExisting:t}])]})}return t})(),Va=(()=>{class t{align="start";id=l(Ve).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(xt("id",r.id),X("align",null),R("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Xp=new v("MatPrefix");var Jp=new v("MatSuffix");var ud=new v("FloatingLabelParent"),rd=(()=>{class t{_elementRef=l(K);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Jl);_ngZone=l(z);_parent=l(ud);_resizeSubscription=new Pt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ef(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&R("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function ef(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var od="mdc-line-ripple--active",Tr="mdc-line-ripple--deactivating",ad=(()=>{class t{_elementRef=l(K);_cleanupTransitionEnd;constructor(){let e=l(z),n=l(Ie);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Tr),e.add(od)}deactivate(){this._elementRef.nativeElement.classList.add(Tr)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Tr);e.propertyName==="opacity"&&r&&n.remove(od,Tr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),sd=(()=>{class t{_elementRef=l(K);_ngZone=l(z);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Sn(Ap,5),n&2){let o;W(o=Z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&R("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Rp,ngContentSelectors:Tp,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(me(),Ze(0,"div",1),wt(1,"div",2,0),N(3),Dt(),Ze(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),za=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t})}return t})();var Ha=new v("MatFormField"),tf=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),cd="fill",nf="auto",ld="fixed",rf="translateY(-50%)",Fr=(()=>{class t{_elementRef=l(K);_changeDetectorRef=l(rt);_platform=l(le);_idGenerator=l(Ve);_ngZone=l(z);_defaults=l(tf,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=In("iconPrefixContainer");_textPrefixContainerSignal=In("textPrefixContainer");_iconSuffixContainerSignal=In("iconSuffixContainer");_textSuffixContainerSignal=In("textSuffixContainer");_prefixSuffixContainers=Ae(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=As(mi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Qe(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||nf}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||cd;this._appearanceSignal.set(n)}_appearanceSignal=j(cd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ld}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ld}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=vt();constructor(){let e=this._defaults,n=l(_r);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),_i(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ae(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(bi([void 0,void 0]),L(()=>[n.errorState,n.userAriaDescribedBy]),Ka(),Ee(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Ue(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),vi(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ts({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ae(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",b=`${a+s}px`,ae=`calc(${h} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,te=`var(--mat-mdc-form-field-label-transform, ${rf} translateX(${ae}))`,J=a+s+c+d;return[te,J]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(Cs(o,r._labelChild,mi,5),Ht(o,za,5)(o,Xp,5)(o,Jp,5)(o,dd,5)(o,Va,5)),n&2){eo();let a;W(a=Z())&&(r._formFieldControl=a.first),W(a=Z())&&(r._prefixChildren=a),W(a=Z())&&(r._suffixChildren=a),W(a=Z())&&(r._errorChildren=a),W(a=Z())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(ws(r._iconPrefixContainerSignal,ed,5)(r._textPrefixContainerSignal,td,5)(r._iconSuffixContainerSignal,nd,5)(r._textSuffixContainerSignal,id,5),Sn(Fp,5)(ed,5)(td,5)(nd,5)(id,5)(rd,5)(sd,5)(ad,5)),n&2){eo(4);let o;W(o=Z())&&(r._textField=o.first),W(o=Z())&&(r._iconPrefixContainer=o.first),W(o=Z())&&(r._textPrefixContainer=o.first),W(o=Z())&&(r._iconSuffixContainer=o.first),W(o=Z())&&(r._textSuffixContainer=o.first),W(o=Z())&&(r._floatingLabel=o.first),W(o=Z())&&(r._notchedOutline=o.first),W(o=Z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&R("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[_e([{provide:Ha,useExisting:t},{provide:ud,useExisting:t}])],ngContentSelectors:Op,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(me(kp),Ei(0,Lp,1,1,"ng-template",null,0,Es),u(2,"div",6,1),P("click",function(a){return r._control.onContainerClick(a)}),H(4,jp,1,0,"div",7),u(5,"div",8),H(6,Up,2,2,"div",9),H(7,zp,3,0,"div",10),H(8,Hp,3,0,"div",11),u(9,"div",12),H(10,Gp,1,1,null,13),N(11),m(),H(12,qp,3,0,"div",14),H(13,Wp,3,0,"div",15),m(),H(14,Zp,1,0,"div",16),m(),u(15,"div",17),H(16,Yp,2,0,"div",18)(17,Qp,5,1,"div",19),m()),n&2){let o;p(2),R("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),$(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),$(r._hasOutline()?6:-1),p(),$(r._hasIconPrefix?7:-1),p(),$(r._hasTextPrefix?8:-1),p(2),$(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),$(r._hasTextSuffix?12:-1),p(),$(r._hasIconSuffix?13:-1),p(),$(r._hasOutline()?-1:14),p(),R("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),$((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[rd,sd,so,ad,Va],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var hi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[Hl,Fr,oe]})}return t})();function md(t){return Error(`Unable to find icon with the name "${t}"`)}function af(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function hd(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function pd(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Xe=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},gd=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new Xe(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Ce.HTML,r);if(!a)throw pd(r);let s=pn(a);return this._addSvgIconConfig(e,n,new Xe("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new Xe(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Ce.HTML,n);if(!o)throw pd(n);let a=pn(o);return this._addSvgIconSetConfig(e,new Xe("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Ce.RESOURCE_URL,e);if(!n)throw hd(e);let r=this._cachedIconsByUrl.get(n);return r?_(kr(r)):this._loadSvgIconFromConfig(new Xe(e,null)).pipe(he(o=>this._cachedIconsByUrl.set(n,o)),L(o=>kr(o)))}getNamedSvgIcon(e,n=""){let r=fd(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):pi(md(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?_(kr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(L(n=>kr(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return _(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(_n(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ce.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),_(null)})));return gi(o).pipe(L(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw md(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(he(n=>e.svgText=n),L(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?_(null):this._fetchIcon(e).pipe(he(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(pn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(pn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw af();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Ce.RESOURCE_URL,n);if(!a)throw hd(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(L(d=>pn(d)),Lt(()=>this._inProgressUrlFetches.delete(a)),Qa());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(fd(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return sf(o)?new Xe(o.url,null,o.options):new Xe(o,null)}}static \u0275fac=function(n){return new(n||t)(w(st,8),w(wo),w(A,8),w(Ct))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kr(t){return t.cloneNode(!0)}function fd(t,i){return t+":"+i}function sf(t){return!!(t.url&&t.options)}var cf=["*"],lf=new v("MAT_ICON_DEFAULT_OPTIONS"),df=new v("mat-icon-location",{providedIn:"root",factory:()=>{let t=l(A),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),vd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],uf=vd.map(t=>`[${t}]`).join(", "),mf=/^url\(['"]?#(.*?)['"]?\)$/,gn=(()=>{class t{_elementRef=l(K);_iconRegistry=l(gd);_location=l(df);_errorHandler=l(Ct);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Pt.EMPTY;constructor(){let e=l(new no("aria-hidden"),{optional:!0}),n=l(lf,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(uf),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)vd.forEach(a=>{let s=n[o],c=s.getAttribute(a),d=c?c.match(mf):null;if(d){let h=r.get(s);h||(h=[],r.set(s,h)),h.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(et(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(X("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),it(r.color?"mat-"+r.color:""),R("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",re],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:cf,decls:1,vars:0,template:function(n,r){n&1&&(me(),N(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),vn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[oe]})}return t})();var hf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),pf={passive:!0},bd=(()=>{class t{_platform=l(le);_ngZone=l(z);_renderer=l(He).createRenderer(null,null);_styleLoader=l(Ge);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ve;this._styleLoader.load(hf);let n=Be(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new Y,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,pf)));return this._monitoredElements.set(n,{subject:o,unlisten:c}),o}stopMonitoring(e){let n=Be(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();var _d=new v("MAT_INPUT_VALUE_ACCESSOR");var Or=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pr=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var ff=["button","checkbox","file","hidden","image","radio","range","reset","submit"],gf=new v("MAT_INPUT_CONFIG"),Cd=(()=>{class t{_elementRef=l(K);_platform=l(le);ngControl=l(Ft,{optional:!0,self:!0});_autofillMonitor=l(bd);_ngZone=l(z);_formField=l(Ha,{optional:!0});_renderer=l(Ie);_uid=l(Ve).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(gf,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Qe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Fe.required)??!1}set required(e){this._required=Qe(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Fa().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Qe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Fa().has(e));constructor(){let e=l(Da,{optional:!0}),n=l(ii,{optional:!0}),r=l(Or),o=l(_d,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Xr(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Pr(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&_i(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ff.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&P("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(xt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),X("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),R("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",re]},exportAs:["matInput"],features:[_e([{provide:za,useExisting:t}]),Oe]})}return t})(),wd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[hi,hi,yd,oe]})}return t})();var bf=(t,i)=>i.label;function yf(t,i){t&1&&(u(0,"mat-error"),y(1,"Name is required."),m())}function _f(t,i){t&1&&(u(0,"mat-error"),y(1,"Name must be at least 2 characters."),m())}function Cf(t,i){t&1&&(u(0,"mat-error"),y(1,"Email is required."),m())}function wf(t,i){t&1&&(u(0,"mat-error"),y(1,"Please enter a valid email address."),m())}function Df(t,i){t&1&&(u(0,"mat-error"),y(1,"Message is required."),m())}function xf(t,i){t&1&&(u(0,"mat-error"),y(1,"Message must be at least 15 characters."),m())}function Ef(t,i){if(t&1&&(u(0,"p",10),y(1),m()),t&2){let e=Q();p(),q(e.successMessage)}}function Mf(t,i){if(t&1&&V(0,"img",14),t&2){let e=Q().$implicit;B("src",e.iconImage||e.iconLink,nt)("alt",e.label+" icon")}}function Sf(t,i){if(t&1&&(u(0,"mat-icon",15),y(1),m()),t&2){let e=Q().$implicit,n=Q();p(),q(n.resolveSocialIcon(e))}}function If(t,i){if(t&1&&(u(0,"a",13),H(1,Mf,1,2,"img",14)(2,Sf,2,1,"mat-icon",15),u(3,"span"),y(4),m()()),t&2){let e=i.$implicit;B("href",e.href,nt),X("aria-label",e.label),p(),$(e.iconImage||e.iconLink?1:2),p(3),q(e.label)}}var Nr=class t{contactForm;sendingMessage=!1;successMessage="";socialLinks=[];submitForm=new O;resolveSocialIcon(i){if(i.icon?.trim())return i.icon;let e=`${i.label} ${i.href}`.toLowerCase();return e.includes("linkedin")?"business":e.includes("github")?"code":e.includes("instagram")?"photo_camera":e.includes("x.com")||e.includes("twitter")?"alternate_email":e.includes("facebook")?"groups":"public"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-contact-section"]],inputs:{contactForm:"contactForm",sendingMessage:"sendingMessage",successMessage:"successMessage",socialLinks:"socialLinks"},outputs:{submitForm:"submitForm"},decls:39,vars:7,consts:[["id","contact",1,"content","reveal"],[1,"contact-layout"],["appearance","outlined",1,"contact-form-card"],[1,"contact-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name","autocomplete","name"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","rows","6","formControlName","message","maxlength","1000"],[1,"contact-actions"],["mat-flat-button","","type","submit",3,"disabled"],[1,"contact-success"],["appearance","outlined",1,"social-card"],[1,"social-links-grid"],["target","_blank","rel","noopener noreferrer",1,"social-link",3,"href"],[1,"social-icon-image",3,"src","alt"],["aria-hidden","true"]],template:function(e,n){e&1&&(u(0,"section",0)(1,"h2"),y(2,"Contact"),m(),u(3,"div",1)(4,"mat-card",2)(5,"mat-card-content")(6,"form",3),P("ngSubmit",function(){return n.submitForm.emit()}),u(7,"mat-form-field",4)(8,"mat-label"),y(9,"Name"),m(),V(10,"input",5),H(11,yf,2,0,"mat-error")(12,_f,2,0,"mat-error"),m(),u(13,"mat-form-field",4)(14,"mat-label"),y(15,"Email"),m(),V(16,"input",6),H(17,Cf,2,0,"mat-error")(18,wf,2,0,"mat-error"),m(),u(19,"mat-form-field",4)(20,"mat-label"),y(21,"Message"),m(),V(22,"textarea",7),H(23,Df,2,0,"mat-error")(24,xf,2,0,"mat-error"),m(),u(25,"div",8)(26,"button",9),y(27),m()(),H(28,Ef,2,1,"p",10),m()()(),u(29,"mat-card",11)(30,"mat-card-header")(31,"mat-card-title"),y(32,"Social Profiles"),m()(),u(33,"mat-card-content")(34,"p"),y(35,"These links are loaded dynamically and should match your PDF details."),m(),u(36,"div",12),we(37,If,5,4,"a",13,bf),m()()()()()),e&2&&(p(6),B("formGroup",n.contactForm),p(5),$(n.contactForm.controls.name.touched&&n.contactForm.controls.name.hasError("required")?11:n.contactForm.controls.name.touched&&n.contactForm.controls.name.hasError("minlength")?12:-1),p(6),$(n.contactForm.controls.email.touched&&n.contactForm.controls.email.hasError("required")?17:n.contactForm.controls.email.touched&&n.contactForm.controls.email.hasError("email")?18:-1),p(6),$(n.contactForm.controls.message.touched&&n.contactForm.controls.message.hasError("required")?23:n.contactForm.controls.message.touched&&n.contactForm.controls.message.hasError("minlength")?24:-1),p(3),B("disabled",n.sendingMessage),p(),$t(" ",n.sendingMessage?"Sending...":"Send Message"," "),p(),$(n.successMessage?28:-1),p(9),De(n.socialLinks))},dependencies:[yr,Al,gr,wl,Dl,Ea,ii,xa,We,qe,gt,mt,pt,ft,ht,hi,Fr,mi,Ua,vn,gn,wd,Cd],encapsulation:2})};var Dd=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Qe(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Qe(e)}_inset=!1;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(n,r){n&2&&(X("aria-orientation",r.vertical?"vertical":"horizontal"),R("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),xd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[oe]})}return t})();var Lr=class t{title="";backToTop=new O;currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-footer"]],inputs:{title:"title"},outputs:{backToTop:"backToTop"},decls:6,vars:2,consts:[["mat-stroked-button","",3,"click"]],template:function(e,n){e&1&&(V(0,"mat-divider"),u(1,"footer")(2,"p"),y(3),m(),u(4,"button",0),P("click",function(){return n.backToTop.emit()}),y(5,"Back to Top"),m()()),e&2&&(p(3),xs("\xA9 ",n.currentYear," ",n.title,". All rights reserved. This portfolio is a demonstration of my skills and experience as a software developer. "))},dependencies:[We,qe,xd,Dd],styles:["footer[_ngcontent-%COMP%]{padding:1rem;text-align:center;color:var(--text-muted);display:flex;justify-content:center;align-items:center;gap:1rem;flex-wrap:wrap}"]})};var Rf=["*",[["mat-toolbar-row"]]],Tf=["*","mat-toolbar-row"],Ff=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Ed=(()=>{class t{_elementRef=l(K);_platform=l(le);_document=l(A);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,o){if(n&1&&Ht(o,Ff,5),n&2){let a;W(a=Z())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(it(r.color?"mat-"+r.color:""),R("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Tf,decls:2,vars:0,template:function(n,r){n&1&&(me(Rf),N(0),N(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Md=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[oe]})}return t})();var Sd=(t,i)=>i.id;function Of(t,i){if(t&1){let e=Jr();u(0,"button",7),P("click",function(){let r=Wr(e).$implicit,o=Q();return Zr(o.navClick.emit(r.id))}),y(1),m()}if(t&2){let e=i.$implicit,n=Q();R("active",n.activeSection===e.id),p(),$t(" ",e.label," ")}}function Pf(t,i){if(t&1){let e=Jr();u(0,"button",7),P("click",function(){let r=Wr(e).$implicit,o=Q(2);return Zr(o.navClick.emit(r.id))}),y(1),m()}if(t&2){let e=i.$implicit;p(),q(e.label)}}function Nf(t,i){if(t&1&&(u(0,"div",8),we(1,Pf,2,1,"button",9,Sd),m()),t&2){let e=Q();R("open",e.mobileMenuOpen),p(),De(e.navItems)}}var jr=class t{title="";navItems=[];activeSection="";darkTheme=!1;navbarSolid=!1;mobileMenuOpen=!1;homeClick=new O;navClick=new O;themeToggle=new O;mobileToggle=new O;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-header"]],inputs:{title:"title",navItems:"navItems",activeSection:"activeSection",darkTheme:"darkTheme",navbarSolid:"navbarSolid",mobileMenuOpen:"mobileMenuOpen"},outputs:{homeClick:"homeClick",navClick:"navClick",themeToggle:"themeToggle",mobileToggle:"mobileToggle"},decls:13,vars:9,consts:[[1,"topbar"],["mat-button","",1,"brand",3,"click"],[1,"desktop-nav"],["mat-button","",3,"active"],["mat-icon-button","",1,"theme-toggle",3,"click"],["mat-icon-button","",1,"mobile-toggle",3,"click"],[1,"mobile-nav","reveal","show",3,"open"],["mat-button","",3,"click"],[1,"mobile-nav","reveal","show"],["mat-button",""]],template:function(e,n){e&1&&(u(0,"mat-toolbar",0)(1,"button",1),P("click",function(){return n.homeClick.emit()}),y(2),m(),u(3,"nav",2),we(4,Of,2,3,"button",3,Sd),m(),u(6,"button",4),P("click",function(){return n.themeToggle.emit()}),u(7,"mat-icon"),y(8),m()(),u(9,"button",5),P("click",function(){return n.mobileToggle.emit()}),u(10,"mat-icon"),y(11),m()()(),H(12,Nf,3,2,"div",6)),e&2&&(R("scrolled",n.navbarSolid),p(2),q(n.title),p(2),De(n.navItems),p(2),X("aria-label",n.darkTheme?"Switch to light mode":"Switch to dark mode"),p(2),q(n.darkTheme?"light_mode":"dark_mode"),p(),X("aria-expanded",n.mobileMenuOpen)("aria-label",n.mobileMenuOpen?"Close navigation menu":"Open navigation menu"),p(2),q(n.mobileMenuOpen?"close":"menu"),p(),$(n.mobileMenuOpen?12:-1))},dependencies:[Wt,We,qe,ja,vn,gn,Md,Ed],styles:[".topbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:20;display:flex;justify-content:space-between;gap:1rem;height:4.5rem;padding-inline:clamp(1rem,4vw,4rem);--mat-toolbar-container-background-color: var(--topbar-bg);--mdc-text-button-label-text-color: var(--text-main);--mdc-icon-button-icon-color: var(--text-main);background-color:var(--topbar-bg)!important;border-bottom:1px solid var(--topbar-border);color:var(--text-main);transition:background-color .25s ease,backdrop-filter .25s ease,border-color .25s ease}.topbar.scrolled[_ngcontent-%COMP%]{--mat-toolbar-container-background-color: var(--topbar-scrolled-bg);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);background-color:var(--topbar-scrolled-bg)!important;border-bottom-color:var(--topbar-scrolled-border);box-shadow:0 8px 24px #00000014}.brand[_ngcontent-%COMP%]{font-weight:700;letter-spacing:.04em;color:var(--text-main)!important}.desktop-nav[_ngcontent-%COMP%]{display:none;align-items:center;margin-left:auto;gap:.25rem}.desktop-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:var(--accent-soft)}.desktop-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .mobile-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .mobile-toggle[_ngcontent-%COMP%]{color:var(--text-main)!important}.mobile-toggle[_ngcontent-%COMP%]{margin-left:auto;display:none}.theme-toggle[_ngcontent-%COMP%]{margin-left:.25rem;border:1px solid var(--theme-chip-border);background-color:var(--theme-chip-bg);--mdc-icon-button-icon-color: var(--theme-chip-fg);color:var(--theme-chip-fg)!important}.theme-toggle[_ngcontent-%COMP%], .mobile-toggle[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;padding:0}.theme-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .mobile-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0;display:block;color:inherit!important;font-size:1.25rem;width:1.25rem;height:1.25rem;line-height:1.25rem}.theme-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transform:translate(-.6px)}.mobile-nav[_ngcontent-%COMP%]{display:grid;gap:.25rem;padding:.75rem 1rem;margin:.55rem 1rem 0;position:fixed;top:4.5rem;left:0;right:0;z-index:18;border-radius:.75rem;background-color:color-mix(in srgb,var(--surface-strong) 92%,var(--bg-gradient));border:1px solid var(--surface-border);box-shadow:var(--elev-shadow);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}.dark-theme[_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#eaf1ff!important}@media(min-width:900px){.desktop-nav[_ngcontent-%COMP%]{display:flex}.mobile-toggle[_ngcontent-%COMP%], .mobile-nav[_ngcontent-%COMP%]{display:none!important}}@media(max-width:899px){.desktop-nav[_ngcontent-%COMP%]{display:none!important}.mobile-toggle[_ngcontent-%COMP%]{display:inline-flex!important}}"]})};var Br=class t{eyebrow="";headline="";summary="";typedRole="";profileInitials="sad";viewWork=new O;contactMe=new O;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-home-section"]],inputs:{eyebrow:"eyebrow",headline:"headline",summary:"summary",typedRole:"typedRole",profileInitials:"profileInitials"},outputs:{viewWork:"viewWork",contactMe:"contactMe"},decls:25,vars:4,consts:[["id","home",1,"hero","reveal","show"],["aria-hidden","true",1,"hero-visuals"],[1,"blob","blob-one"],[1,"blob","blob-two"],[1,"blob","blob-three"],[1,"hero-grid"],[1,"hero-copy"],[1,"eyebrow"],[1,"typewriter-row"],[1,"typed-text"],["aria-hidden","true",1,"cursor"],[1,"hero-actions"],["mat-flat-button","",3,"click"],["mat-stroked-button","",3,"click"],["aria-label","Profile image",1,"profile-wrap"],[1,"profile-orb"],["src","assets/profile.png","alt","Profile",1,"profile-image"]],template:function(e,n){e&1&&(u(0,"section",0)(1,"div",1),V(2,"span",2)(3,"span",3)(4,"span",4),m(),u(5,"div",5)(6,"div",6)(7,"p",7),y(8),m(),u(9,"h1"),y(10),m(),u(11,"p",8)(12,"span",9),y(13),m(),V(14,"span",10),m(),u(15,"p"),y(16),m(),u(17,"div",11)(18,"button",12),P("click",function(){return n.viewWork.emit()}),y(19,"View My Work"),m(),u(20,"button",13),P("click",function(){return n.contactMe.emit()}),y(21,"Contact Me"),m()()(),u(22,"div",14)(23,"div",15),V(24,"img",16),m()()()()),e&2&&(p(8),q(n.eyebrow),p(2),q(n.headline),p(3),q(n.typedRole),p(3),q(n.summary))},dependencies:[We,qe],styles:[".profile-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;animation:_ngcontent-%COMP%_profileBreathe 4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_profileBreathe{0%,to{transform:scale(1)}50%{transform:scale(1.03)}}"]})};var Lf=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],jf=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Bf(t,i){t&1&&(u(0,"span",3),N(1,1),m())}function Vf(t,i){t&1&&(u(0,"span",6),N(1,2),m())}var Uf=new v("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Id=new v("MatChipAvatar"),Ad=new v("MatChipTrailingIcon"),Rd=new v("MatChipEdit"),Td=new v("MatChipRemove"),kd=new v("MatChip"),Od=(()=>{class t{_elementRef=l(K);_parentChip=l(kd);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(Ge).load(di),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(n,r){n&2&&(X("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),R("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",re],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Mi(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),zf=(()=>{class t extends Od{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(n,r){n&1&&P("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(X("tabindex",r._getTabindex()),R("mdc-evolution-chip__action--presentational",!1))},features:[ue]})}return t})();var Pd=(()=>{class t{_changeDetectorRef=l(rt);_elementRef=l(K);_tagName=l(Ss);_ngZone=l(z);_focusMonitor=l(ci);_globalRippleOptions=l(Sr,{optional:!0});_document=l(A);_onFocus=new Y;_onBlur=new Y;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=vt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(Ve).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new O;destroyed=new O;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(Ar);_injector=l(de);constructor(){let e=l(Ge);e.load(di),e.load(Ul),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=vi(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(n=>{let r=n._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let n=e!==null;n!==this._hasFocusInternal&&(this._hasFocusInternal=n,n?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(n,r,o){if(n&1&&Ht(o,Id,5)(o,Rd,5)(o,Ad,5)(o,Td,5)(o,Id,5)(o,Ad,5)(o,Rd,5)(o,Td,5),n&2){let a;W(a=Z())&&(r.leadingIcon=a.first),W(a=Z())&&(r.editIcon=a.first),W(a=Z())&&(r.trailingIcon=a.first),W(a=Z())&&(r.removeIcon=a.first),W(a=Z())&&(r._allLeadingIcons=a),W(a=Z())&&(r._allTrailingIcons=a),W(a=Z())&&(r._allEditIcons=a),W(a=Z())&&(r._allRemoveIcons=a)}},viewQuery:function(n,r){if(n&1&&Sn(zf,5),n&2){let o;W(o=Z())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(n,r){n&1&&P("keydown",function(a){return r._handleKeydown(a)}),n&2&&(xt("id",r.id),X("role",r.role)("aria-label",r.ariaLabel),it("mat-"+(r.color||"primary")),R("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",re],highlighted:[2,"highlighted","highlighted",re],disableRipple:[2,"disableRipple","disableRipple",re],disabled:[2,"disabled","disabled",re]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[_e([{provide:kd,useExisting:t}])],ngContentSelectors:jf,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(n,r){n&1&&(me(Lf),V(0,"span",0),u(1,"span",1)(2,"span",2),H(3,Bf,2,0,"span",3),u(4,"span",4),N(5),V(6,"span",5),m()()(),H(7,Vf,2,0,"span",6)),n&2&&(p(3),$(r.leadingIcon?3:-1),p(4),$(r._hasTrailingIcon()?7:-1))},dependencies:[Od],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Nd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({providers:[Or,{provide:Uf,useValue:{separatorKeyCodes:[13]}}],imports:[Rr,oe]})}return t})();var $f=(t,i)=>i.id;function Gf(t,i){t&1&&(u(0,"p"),y(1,"Loading projects..."),m())}function qf(t,i){if(t&1&&(u(0,"p"),y(1),m()),t&2){let e=Q();p(),q(e.error)}}function Wf(t,i){if(t&1&&(u(0,"mat-chip"),y(1),m()),t&2){let e=i.$implicit;p(),q(e)}}function Zf(t,i){if(t&1&&(u(0,"mat-card",2),V(1,"img",3),u(2,"mat-card-header")(3,"mat-card-title"),y(4),m()(),u(5,"mat-card-content")(6,"p"),y(7),m(),u(8,"div",4),we(9,Wf,2,1,"mat-chip",null,_s),m(),u(11,"div",5)(12,"a",6),y(13,"View Project"),m()()()()),t&2){let e=i.$implicit;p(),B("src",e.thumbnail,nt)("alt",e.title),p(3),q(e.title),p(3),q(e.description),p(2),De(e.techStack),p(3),B("href",e.link,nt)}}var Vr=class t{projects=[];loading=!1;error="";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-projects-section"]],inputs:{projects:"projects",loading:"loading",error:"error"},decls:8,vars:1,consts:[["id","projects",1,"content","reveal"],[1,"project-grid","pt-4"],["appearance","outlined",1,"project-card","transition-transform","duration-300","hover:-translate-y-2","hover:shadow-2xl"],["mat-card-image","","loading","lazy",3,"src","alt"],[1,"project-tech"],[1,"project-actions"],["mat-flat-button","","target","_blank","rel","noopener noreferrer",3,"href"]],template:function(e,n){e&1&&(u(0,"section",0)(1,"h2"),y(2,"Featured Projects"),m(),H(3,Gf,2,0,"p")(4,qf,2,1,"p"),u(5,"div",1),we(6,Zf,14,5,"mat-card",2,$f),m()()),e&2&&(p(3),$(n.loading?3:n.error?4:-1),p(3),De(n.projects))},dependencies:[We,qe,gt,mt,pt,ft,kl,ht,Nd,Pd],encapsulation:2})};var Yf=(t,i)=>i.category,Kf=(t,i)=>i.name;function Qf(t,i){if(t&1&&V(0,"img",7),t&2){let e=Q().$implicit;B("src",e.iconImage||e.iconLink,nt)("alt",e.name+" icon")}}function Xf(t,i){if(t&1&&(u(0,"mat-icon",8),y(1),m()),t&2){let e=Q().$implicit,n=Q(2);p(),q(n.resolveSkillIcon(e.name,e.icon))}}function Jf(t,i){if(t&1&&(u(0,"div",4)(1,"div",5)(2,"span",6),H(3,Qf,1,2,"img",7)(4,Xf,2,1,"mat-icon",8),u(5,"span"),y(6),m()(),u(7,"span",9),y(8),m()(),u(9,"div",10),V(10,"span",11),m()()),t&2){let e=i.$implicit;p(3),$(e.iconImage||e.iconLink?3:4),p(3),q(e.name),p(2),$t("",e.level,"%"),p(2),Ds("width",e.level,"%")}}function eg(t,i){if(t&1&&(u(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),y(3),m()(),u(4,"mat-card-content")(5,"div",3),we(6,Jf,11,5,"div",4,Kf),m()()()),t&2){let e=i.$implicit;p(3),q(e.category),p(3),De(e.skills)}}var Ur=class t{skillGroups=[];resolveSkillIcon(i,e){if(e?.trim())return e;let n=i.toLowerCase();return n.includes("angular")?"web":n.includes("typescript")||n.includes("javascript")?"terminal":n.includes("tailwind")||n.includes("css")?"palette":n.includes("node")||n.includes("nestjs")||n.includes("express")?"dns":n.includes("java")||n.includes("spring")?"memory":n.includes("postgres")||n.includes("mysql")||n.includes("mongo")||n.includes("redis")?"storage":n.includes("docker")?"inventory_2":n.includes("github")?"integration_instructions":n.includes("azure")?"cloud":n.includes("postman")?"send":"code"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-skills-section"]],inputs:{skillGroups:"skillGroups"},decls:6,vars:0,consts:[["id","skills",1,"content","reveal"],[1,"skills-grid"],["appearance","outlined",1,"skill-card","reveal"],[1,"skill-list"],[1,"skill-item"],[1,"skill-topline"],[1,"skill-name"],[1,"skill-icon-image",3,"src","alt"],["aria-hidden","true"],[1,"skill-level"],[1,"skill-track"],[1,"skill-fill"]],template:function(e,n){e&1&&(u(0,"section",0)(1,"h2"),y(2,"Skills"),m(),u(3,"div",1),we(4,eg,8,1,"mat-card",2,Yf),m()()),e&2&&(p(4),De(n.skillGroups))},dependencies:[gt,mt,pt,ft,ht,vn,gn],encapsulation:2})};var zr=class t{http=l(st);getProfileData(){return this.http.get("data/profile.json")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})};var Hr=class t{http=l(st);getProjects(){return this.http.get("data/projects.json")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})};var $r=class t{title=j("Your Name");activeSection=j("home");navbarSolid=j(!1);typedRole=j("");darkTheme=j(!0);mobileMenuOpen=!1;eyebrow=j("FULL STACK SOFTWARE DEVELOPER");headline=j("Building elegant software experiences that scale.");summary=j("I build polished Angular and Node.js applications with a strong focus on performance, clean architecture, and user experience.");profileInitials=j("FS");navItems=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}];skillGroups=j([{category:"Frontend",skills:[{name:"Angular",level:95},{name:"TypeScript",level:92},{name:"JavaScript",level:90},{name:"Tailwind CSS",level:87}]},{category:"Frameworks",skills:[{name:"Node.js",level:90},{name:"NestJS",level:88},{name:"Java",level:84},{name:"Spring Boot",level:82}]},{category:"Libraries",skills:[{name:"Node.js",level:90},{name:"NestJS",level:88},{name:"Java",level:84},{name:"Spring Boot",level:82}]},{category:"Backend",skills:[{name:"Node.js",level:90},{name:"NestJS",level:88},{name:"Java",level:84},{name:"Spring Boot",level:82}]},{category:"Database",skills:[{name:"PostgreSQL",level:86},{name:"MongoDB",level:84},{name:"Redis",level:78},{name:"MySQL",level:80}]},{category:"Tools",skills:[{name:"Docker",level:85},{name:"GitHub Actions",level:80},{name:"Azure",level:79},{name:"Postman",level:88}]},{category:"Version Control & CI/CD",skills:[{name:"Docker",level:85},{name:"GitHub Actions",level:80},{name:"Azure",level:79},{name:"Postman",level:88}]}]);socialLinks=j([{label:"LinkedIn",href:"https://www.linkedin.com/in/mudasirmaqbool",iconPath:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.5H6V17H8.34M7.17 9.36A1.36 1.36 0 1 0 7.17 6.64A1.36 1.36 0 0 0 7.17 9.36M18 17V13.13C18 11.27 17.6 9.84 15.43 9.84C14.39 9.84 13.7 10.41 13.41 10.95H13.38V10.5H11.14V17H13.48V13.78C13.48 12.93 13.64 12.1 14.69 12.1C15.73 12.1 15.75 13.07 15.75 13.84V17H18Z"},{label:"GitHub",href:"https://github.com/MySelfMudasir",iconPath:"M12 2A10 10 0 0 0 2 12A10 10 0 0 0 8.84 21.53C9.34 21.62 9.5 21.31 9.5 21.05V19.19C6.73 19.79 6.14 17.85 6.14 17.85C5.68 16.68 5 16.36 5 16.36C4.09 15.74 5.07 15.75 5.07 15.75C6.08 15.82 6.61 16.79 6.61 16.79C7.5 18.32 8.97 17.88 9.54 17.62C9.63 16.97 9.89 16.53 10.18 16.28C7.97 16.03 5.65 15.17 5.65 11.34C5.65 10.25 6.04 9.37 6.68 8.69C6.58 8.44 6.23 7.42 6.78 6.04C6.78 6.04 7.62 5.77 9.5 7.06C10.29 6.84 11.13 6.73 11.97 6.73C12.81 6.73 13.65 6.84 14.44 7.06C16.32 5.77 17.16 6.04 17.16 6.04C17.71 7.42 17.36 8.44 17.26 8.69C17.9 9.37 18.29 10.25 18.29 11.34C18.29 15.18 15.96 16.02 13.75 16.27C14.12 16.58 14.45 17.18 14.45 18.09V21.05C14.45 21.31 14.61 21.63 15.11 21.53A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"}]);aboutCards=j([{title:"Professional Bio",content:"Full Stack Software Developer with experience building modern web applications, APIs, and cloud-ready solutions."},{title:"Experience",content:"Hands-on delivery across Angular frontends, Node.js backends, database design, and deployment workflows."},{title:"Education",content:"Formal education and professional learning details will be mapped here from your CV PDF once provided."}]);projects=[{id:"workflow-platform",title:"Enterprise Workflow Platform",description:"A full-stack platform that automates team workflows, approvals, and operational reporting.",thumbnail:"https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",techStack:["Angular","Node.js","PostgreSQL","Docker"],link:"https://github.com/MySelfMudasir/enterprise-workflow-platform"},{id:"saas-crm",title:"Multi-tenant SaaS CRM",description:"A robust CRM for lead, pipeline, and customer lifecycle management with role-based access control.",thumbnail:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",techStack:["Angular","NestJS","MongoDB","Redis"],link:"https://github.com/MySelfMudasir/saas-crm"},{id:"collab-suite",title:"Real-time Collaboration Suite",description:"A collaboration suite with live updates, task streams, and team communication workflows.",thumbnail:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",techStack:["Angular","Socket.IO","Express","Azure"],link:"https://github.com/MySelfMudasir/realtime-collab-suite"}];projectsLoading=!0;projectsError="";sendingMessage=j(!1);contactSuccessMessage=j("");rotatingRoles=["Full Stack Developer","Angular Expert","Node.js Developer"];projectsService=l(Hr);profileService=l(zr);formBuilder=l(Tl);contactForm=this.formBuilder.nonNullable.group({name:["",[Fe.required,Fe.minLength(2)]],email:["",[Fe.required,Fe.email]],message:["",[Fe.required,Fe.minLength(15),Fe.maxLength(1e3)]]});roleIndex=0;charIndex=0;deleting=!1;typewriterTimer;contactSubmitTimer;projectsSub;profileSub;themeStorageKey="portfolio-theme";visibleSections=j({home:!0,about:!0,skills:!0,projects:!0,contact:!0});revealObserver;sectionObserver;ngOnInit(){this.loadSavedTheme(),this.loadProfileData(),this.loadProjects()}ngAfterViewInit(){this.onWindowScroll(),this.revealObserver=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("show"),n.target.id&&this.visibleSections.update(r=>G(f({},r),{[n.target.id]:!0})))})},{threshold:.2}),document.querySelectorAll(".reveal").forEach(e=>{e.classList.add("show"),this.revealObserver?.observe(e)}),this.sectionObserver=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&this.activeSection.set(n.target.id)})},{threshold:.55,rootMargin:"-15% 0px -30% 0px"}),this.navItems.forEach(e=>{let n=document.getElementById(e.id);n&&this.sectionObserver?.observe(n)})}ngOnDestroy(){this.typewriterTimer&&clearTimeout(this.typewriterTimer),this.contactSubmitTimer&&clearTimeout(this.contactSubmitTimer),this.profileSub?.unsubscribe(),this.projectsSub?.unsubscribe(),this.revealObserver?.disconnect(),this.sectionObserver?.disconnect()}onWindowScroll(){this.navbarSolid.set(window.scrollY>20)}scrollToSection(i){let e=document.getElementById(i);if(!e)return;let r=e.getBoundingClientRect().top+window.scrollY-84;window.scrollTo({top:Math.max(r,0),behavior:"smooth"}),this.activeSection.set(i),this.mobileMenuOpen=!1}toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen}toggleTheme(){let i=!this.darkTheme();this.darkTheme.set(i),localStorage.setItem(this.themeStorageKey,i?"dark":"light")}sectionAnimationState(i){return this.visibleSections()[i]===!1?"hidden":"visible"}submitContactForm(){if(this.contactSuccessMessage.set(""),this.contactForm.invalid){this.contactForm.markAllAsTouched();return}this.sendingMessage.set(!0),this.contactSubmitTimer=setTimeout(()=>{this.sendingMessage.set(!1),this.contactSuccessMessage.set("Message sent successfully. I will get back to you soon."),this.contactForm.reset()},950)}loadProjects(){this.projectsSub=this.projectsService.getProjects().subscribe({next:i=>{this.projects=i.length?i:this.projects,this.projectsLoading=!1},error:()=>{this.projectsLoading=!1,this.projectsError="Projects could not be loaded right now. Please check back soon."}})}loadProfileData(){this.profileSub=this.profileService.getProfileData().subscribe({next:i=>{this.title.set(i.name),this.eyebrow.set(i.eyebrow),this.headline.set(i.headline),this.summary.set(i.summary),this.profileInitials.set(i.profileInitials),this.aboutCards.set(i.aboutCards.length?i.aboutCards:this.aboutCards()),this.skillGroups.set(i.skillGroups.length?i.skillGroups:this.skillGroups()),this.socialLinks.set(i.socialLinks.length?i.socialLinks:this.socialLinks()),i.roles.length&&(this.rotatingRoles=i.roles),this.typedRole.set(""),this.roleIndex=0,this.charIndex=0,this.deleting=!1,this.typewriterTimer&&clearTimeout(this.typewriterTimer),this.runTypewriter()},error:()=>{this.summary.set("Profile data is unavailable right now."),this.runTypewriter()}})}runTypewriter(){let i=this.rotatingRoles[this.roleIndex],e=this.charIndex;if(this.deleting)this.typedRole.set(i.slice(0,e-1)),this.charIndex-=1,this.charIndex===0&&(this.deleting=!1,this.roleIndex=(this.roleIndex+1)%this.rotatingRoles.length);else if(this.typedRole.set(i.slice(0,e+1)),this.charIndex+=1,this.charIndex===i.length){this.deleting=!0,this.typewriterTimer=setTimeout(()=>this.runTypewriter(),1200);return}let n=this.deleting?55:95;this.typewriterTimer=setTimeout(()=>this.runTypewriter(),n)}loadSavedTheme(){let i=localStorage.getItem(this.themeStorageKey);if(i==="dark"){this.darkTheme.set(!0);return}if(i==="light"){this.darkTheme.set(!1);return}let e=window.matchMedia("(prefers-color-scheme: dark)").matches;this.darkTheme.set(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-root"]],hostBindings:function(e,n){e&1&&P("scroll",function(){return n.onWindowScroll()},fs)},decls:14,vars:30,consts:[[1,"portfolio-shell"],[3,"homeClick","navClick","themeToggle","mobileToggle","title","navItems","activeSection","darkTheme","navbarSolid","mobileMenuOpen"],[3,"viewWork","contactMe","eyebrow","headline","summary","typedRole","profileInitials"],[3,"aboutCards"],[3,"skillGroups"],[3,"projects","loading","error"],[3,"submitForm","contactForm","sendingMessage","successMessage","socialLinks"],[3,"backToTop","title"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"app-header",1),P("homeClick",function(){return n.scrollToSection("home")})("navClick",function(o){return n.scrollToSection(o)})("themeToggle",function(){return n.toggleTheme()})("mobileToggle",function(){return n.toggleMobileMenu()}),m(),u(2,"main")(3,"div")(4,"app-home-section",2),P("viewWork",function(){return n.scrollToSection("projects")})("contactMe",function(){return n.scrollToSection("contact")}),m()(),u(5,"div"),V(6,"app-about-section",3),m(),u(7,"div"),V(8,"app-skills-section",4),m(),u(9,"div"),V(10,"app-projects-section",5),m(),u(11,"div")(12,"app-contact-section",6),P("submitForm",function(){return n.submitContactForm()}),m()()(),u(13,"app-footer",7),P("backToTop",function(){return n.scrollToSection("home")}),m()()),e&2&&(R("dark-theme",n.darkTheme())("light-theme",!n.darkTheme()),p(),B("title",n.title())("navItems",n.navItems)("activeSection",n.activeSection())("darkTheme",n.darkTheme())("navbarSolid",n.navbarSolid())("mobileMenuOpen",n.mobileMenuOpen),p(2),B("@sectionReveal",n.sectionAnimationState("home")),p(),B("eyebrow",n.eyebrow())("headline",n.headline())("summary",n.summary())("typedRole",n.typedRole())("profileInitials",n.profileInitials()),p(),B("@sectionReveal",n.sectionAnimationState("about")),p(),B("aboutCards",n.aboutCards()),p(),B("@sectionReveal",n.sectionAnimationState("skills")),p(),B("skillGroups",n.skillGroups()),p(),B("@sectionReveal",n.sectionAnimationState("projects")),p(),B("projects",n.projects)("loading",n.projectsLoading)("error",n.projectsError),p(),B("@sectionReveal",n.sectionAnimationState("contact")),p(),B("contactForm",n.contactForm)("sendingMessage",n.sendingMessage())("successMessage",n.contactSuccessMessage())("socialLinks",n.socialLinks()),p(),B("title",n.title()))},dependencies:[Wt,yr,jr,Lr,Br,wr,Ur,Vr,Nr],styles:[`:host{display:block}.portfolio-shell{--bg-layer-1: rgba(66, 133, 244, .2);--bg-layer-2: rgba(15, 157, 88, .16);--bg-layer-3: rgba(255, 146, 83, .1);--bg-gradient: linear-gradient(165deg, #f8fbff 0%, #eef4f8 45%, #f9f3ea 100%);--text-main: #16202a;--text-muted: #4f6276;--surface: rgba(255, 255, 255, .72);--surface-strong: rgba(255, 255, 255, .84);--surface-border: rgba(22, 32, 42, .1);--elev-shadow: 0 18px 40px rgba(22, 32, 42, .1);--accent-soft: rgba(25, 118, 210, .16);--social-bg: rgba(15, 108, 191, .08);--social-bg-hover: rgba(15, 108, 191, .15);--success-bg: rgba(17, 165, 121, .16);--success-fg: #126f54;--theme-chip-bg: rgba(15, 108, 191, .13);--theme-chip-border: rgba(15, 108, 191, .25);--theme-chip-fg: #134f89;--topbar-bg: rgba(255, 255, 255, .72);--topbar-border: rgba(22, 32, 42, .06);--topbar-scrolled-bg: rgba(255, 255, 255, .82);--topbar-scrolled-border: rgba(22, 32, 42, .1);min-height:100dvh;background:radial-gradient(circle at 10% 5%,var(--bg-layer-1),transparent 35%),radial-gradient(circle at 90% 30%,var(--bg-layer-2),transparent 30%),radial-gradient(circle at 60% 92%,var(--bg-layer-3),transparent 32%),var(--bg-gradient);color:var(--text-main);padding-top:4.5rem}.portfolio-shell.dark-theme{--bg-layer-1: rgba(63, 126, 245, .28);--bg-layer-2: rgba(28, 193, 144, .18);--bg-layer-3: rgba(255, 158, 104, .16);--bg-gradient: linear-gradient(160deg, #070c16 0%, #0b1324 48%, #111b30 100%);--text-main: #e9f0ff;--text-muted: #9bb0d1;--surface: rgba(11, 24, 44, .58);--surface-strong: rgba(9, 20, 38, .82);--surface-border: rgba(134, 175, 255, .16);--elev-shadow: 0 22px 46px rgba(2, 8, 20, .56);--accent-soft: rgba(83, 145, 255, .2);--social-bg: rgba(86, 151, 255, .12);--social-bg-hover: rgba(86, 151, 255, .22);--success-bg: rgba(21, 191, 139, .2);--success-fg: #7cebc7;--theme-chip-bg: rgba(100, 161, 255, .18);--theme-chip-border: rgba(137, 184, 255, .3);--theme-chip-fg: #d3e5ff;--card-title: #f3f7ff;--card-text: #c8d8f0;--topbar-bg: rgba(7, 13, 25, .76);--topbar-border: rgba(137, 184, 255, .1);--topbar-scrolled-bg: rgba(7, 13, 25, .82);--topbar-scrolled-border: rgba(137, 184, 255, .14)}main{width:min(1120px,100% - 2rem);margin:0 auto;padding:2rem 0 3rem;display:grid;gap:1.5rem}section{border-radius:1.25rem;border:1px solid var(--surface-border);background-color:var(--surface);box-shadow:var(--elev-shadow);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.hero{padding:clamp(2rem,7vw,5rem);position:relative;overflow:hidden}.hero-visuals{position:absolute;inset:0;pointer-events:none}.blob{position:absolute;display:block;border-radius:999px;filter:blur(2px);opacity:.8;animation:floatShift 14s ease-in-out infinite}.blob-one{width:clamp(180px,20vw,300px);height:clamp(180px,20vw,300px);left:-5%;top:-15%;background:radial-gradient(circle,#3064ff66,#3064ff00 70%)}.blob-two{width:clamp(180px,25vw,360px);height:clamp(180px,25vw,360px);right:-7%;top:10%;background:radial-gradient(circle,#14a07a54,#14a07a00 70%);animation-delay:1.5s}.blob-three{width:clamp(150px,22vw,280px);height:clamp(150px,22vw,280px);left:30%;bottom:-20%;background:radial-gradient(circle,#ff925359,#ff925300 70%);animation-delay:3s}.hero-grid{position:relative;z-index:1;display:grid;gap:1.5rem}.hero-copy{max-width:62ch}.eyebrow{font-size:.8rem;letter-spacing:.14em;font-weight:700;color:color-mix(in srgb,var(--text-main) 65%,#5ca2ff)}.hero h1{margin:.5rem 0 1rem;font-size:clamp(2rem,6vw,4.2rem);line-height:1.04;max-width:18ch}.hero p{max-width:60ch;line-height:1.7}.typewriter-row{min-height:2rem;margin:.5rem 0 1rem;display:flex;align-items:center;font-weight:700;font-size:clamp(1rem,2.4vw,1.2rem);color:color-mix(in srgb,var(--text-main) 70%,#66adff)}.typed-text{letter-spacing:.01em}.cursor{width:2px;height:1.25em;margin-left:.35rem;background-color:currentcolor;animation:blink 1s steps(1) infinite}.profile-wrap{display:grid;place-items:center}.profile-orb{width:clamp(180px,28vw,290px);aspect-ratio:1;border-radius:999px;position:relative;display:grid;place-items:center;font-size:clamp(2.3rem,8vw,3.6rem);font-weight:800;letter-spacing:.04em;color:#eff6ff;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.24),transparent 45%),linear-gradient(145deg,#0f6cbf,#11a579 55%,#0b4d91);box-shadow:0 24px 36px #0b4d913d,inset 0 0 0 2px #fff3;animation:profileBreathe 4.6s ease-in-out infinite}.profile-orb:before{content:"";position:absolute;inset:-10px;border-radius:999px;border:1px solid rgba(15,108,191,.35);animation:orbitPulse 3.6s ease-in-out infinite}.hero-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.5rem}.content{padding:clamp(1.25rem,4vw,2rem)}.content h2{margin-top:0;margin-bottom:.75rem;font-size:clamp(1.4rem,3vw,2rem)}.about-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.about-card{height:100%}.about-card mat-card-title,.skill-card mat-card-title,.project-card mat-card-title,.contact-form-card mat-card-title,.social-card mat-card-title{color:var(--card-title)}.about-card p,.skill-card p,.project-card p,.social-card p,.contact-form-card p{color:var(--card-text)}.about-card p{line-height:1.65}.skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1rem}.skill-card{height:100%}.skill-list{display:grid;gap:.9rem}.skill-item{display:grid;gap:.35rem}.skill-topline{display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:.93rem}.skill-name{display:inline-flex;align-items:center;gap:.45rem}.skill-name mat-icon,.skill-icon-image{width:1rem;height:1rem;font-size:1rem;line-height:1rem;flex-shrink:0;object-fit:contain}.skill-level{opacity:.4;transform:translate(-3px);transition:opacity .22s ease,transform .22s ease}.skill-item:hover .skill-level{opacity:1;transform:translate(0)}.skill-track{height:.52rem;border-radius:999px;background-color:#1f4f8224;overflow:hidden}.skill-fill{height:100%;display:block;border-radius:inherit;background:linear-gradient(90deg,#0f6cbf,#11a579 60%,#16b6ad);box-shadow:0 0 0 1px #ffffff59;animation:skillGrow .9s cubic-bezier(.2,.7,.2,1)}.project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}.project-card{display:flex;flex-direction:column}.project-card:hover{transform:translateY(-4px) scale(1.01)}.project-tech{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.9rem}.project-actions{margin-top:1rem}.contact-layout{display:grid;grid-template-columns:1.4fr .9fr;gap:1rem}.contact-form-card,.social-card{height:100%}.contact-form{display:grid;gap:.7rem}.contact-form mat-form-field{width:100%}.contact-actions{margin-top:.25rem}.contact-success{margin:.25rem 0 0;padding:.7rem .8rem;border-radius:.55rem;background-color:var(--success-bg);color:var(--success-fg);font-weight:600;font-size:.92rem}.social-links-grid{display:grid;gap:.55rem;margin-top:.9rem}.social-link{display:inline-flex;align-items:center;gap:.6rem;padding:.6rem .75rem;border-radius:.65rem;color:inherit;text-decoration:none;background-color:var(--social-bg);border:1px solid var(--theme-chip-border);transition:transform .2s ease,background-color .2s ease}.social-link:hover{transform:translateY(-2px);background-color:var(--social-bg-hover)}.social-link mat-icon,.social-icon-image{width:1.1rem;height:1.1rem;font-size:1.1rem;line-height:1.1rem;flex-shrink:0;object-fit:contain}.dark-theme mat-card,.dark-theme .topbar.scrolled,.dark-theme .mobile-nav,.dark-theme .contact-success,.dark-theme .social-link{-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}.dark-theme mat-toolbar,.dark-theme mat-card,.dark-theme mat-chip,.dark-theme .mat-mdc-text-field-wrapper,.dark-theme .mat-mdc-form-field-subscript-wrapper,.dark-theme .mat-mdc-form-field-hint-wrapper,.dark-theme .mat-mdc-input-element,.dark-theme .mat-mdc-button,.dark-theme .mat-mdc-outlined-button,.dark-theme .mat-mdc-unelevated-button{color:#eaf1ff}.dark-theme mat-card,.dark-theme .contact-form-card,.dark-theme .social-card,.dark-theme .skill-card,.dark-theme .about-card,.dark-theme .project-card{background-color:#081221b8;border-color:#89b8ff29}.dark-theme .mat-mdc-text-field-wrapper,.dark-theme .mat-mdc-form-field-flex,.dark-theme .mat-mdc-form-field-focus-overlay,.dark-theme .mat-mdc-input-element{background-color:#0c182cb8}.dark-theme .mat-mdc-text-field-wrapper{border-radius:.8rem}.dark-theme .mat-mdc-form-field-outline,.dark-theme .mat-mdc-notched-outline__leading,.dark-theme .mat-mdc-notched-outline__notch,.dark-theme .mat-mdc-notched-outline__trailing{border-color:#89b8ff38}.dark-theme .mat-mdc-chip{background-color:#64a1ff1f;border:1px solid rgba(137,184,255,.15)}.dark-theme .mat-mdc-card-subtitle,.dark-theme .mat-mdc-card-title,.dark-theme .mat-mdc-form-field-label,.dark-theme .mat-mdc-select-value,.dark-theme .mat-mdc-select-arrow,.dark-theme .mat-mdc-floating-label,.dark-theme .mat-mdc-hint,.dark-theme .mat-mdc-error{color:#cfe0ff}.dark-theme .mat-mdc-button:not(:disabled),.dark-theme .mat-mdc-outlined-button:not(:disabled){border-color:#89b8ff38}.dark-theme .skill-track{background-color:#a0c1ff24}.dark-theme .project-card:hover{box-shadow:0 24px 34px #01040d94}.dark-theme .hero-actions button,.dark-theme .theme-toggle,.dark-theme footer button{color:#eaf1ff}.dark-theme .brand,.dark-theme .desktop-nav button,.dark-theme .mobile-toggle,.dark-theme .mobile-nav button{color:#e9f0ff}.dark-theme .theme-toggle,.dark-theme .theme-toggle mat-icon{color:#eaf1ff!important}.dark-theme .topbar.scrolled{background-color:var(--topbar-scrolled-bg);border-bottom-color:var(--topbar-scrolled-border)}mat-card{overflow:hidden;transition:transform .26s ease,box-shadow .26s ease}mat-card:hover{transform:translateY(-6px);box-shadow:0 20px 28px #16202a29}mat-card img{aspect-ratio:16/10;object-fit:cover}footer{padding:1rem;text-align:center;color:var(--text-muted);display:flex;justify-content:center;align-items:center;gap:1rem;flex-wrap:wrap}.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}.reveal.show{opacity:1;transform:translateY(0)}@keyframes floatShift{0%,to{transform:translateZ(0) scale(1)}50%{transform:translate3d(0,12px,0) scale(1.08)}}@keyframes blink{0%,50%{opacity:1}50.1%,to{opacity:0}}@keyframes profileBreathe{0%,to{transform:translateY(0) scale(1)}50%{transform:translateY(-6px) scale(1.02)}}@keyframes orbitPulse{0%,to{transform:scale(1);opacity:.8}50%{transform:scale(1.05);opacity:.32}}@keyframes skillGrow{0%{width:0}}@media(min-width:900px){.hero-grid{grid-template-columns:1.45fr .85fr;align-items:center}}@media(max-width:899px){.desktop-nav{display:none!important}.mobile-toggle{display:inline-flex!important}}@media(max-width:860px){.contact-layout{grid-template-columns:1fr}}
`],encapsulation:2,data:{animation:[io("sectionReveal",[Ii("hidden",Si({opacity:0,transform:"translateY(24px) scale(0.985)"})),Ii("visible",Si({opacity:1,transform:"translateY(0) scale(1)"})),oo("hidden => visible",[ro("650ms cubic-bezier(0.2, 0.75, 0.2, 1)")])])]}})};go($r,nl).catch(t=>console.error(t));

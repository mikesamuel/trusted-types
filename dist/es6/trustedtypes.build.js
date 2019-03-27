(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';class e{constructor(a,b,c,d,g=!1,h=null){this.D=a;this.o=b;this.N=c;this.K=d;this.J=g;this.M=h}static V(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map((a)=>a.split(b)).reduce(function(a,b){b[0]&&(a[b[0]]=b.slice(1).map((a)=>a).sort());return a},{})}static O(a){const b=e.V(a),c="trusted-types"in b;let d=!1,g=["*"];c&&(d=-1!==b["trusted-types"].indexOf("'url-allow-http'"),g=b["trusted-types"].filter((a)=>"'"!==a.charAt(0)));return new e(!0,c,"default",g,d,a)}};const n=()=>{throw new TypeError("undefined conversion");};function r(){throw new TypeError("Illegal constructor");}function u(){throw new TypeError("Illegal constructor");}
var {I:A,W:F}=function(){function a(a){let b=B.get(a);void 0===b&&(b=f(null),B.set(a,b));return b}function b(a){const b=m(a);if(null==b||m(b)!==t)throw Error();for(let c of p(b))k(a,c,{value:a[c]});return a}function c(a,b){l(a.prototype);delete a.name;k(a,"name",{value:b})}function d(a){return(b)=>b instanceof a&&B.has(b)}function g(b,c){function d(d,g){const h=c[g]||n,k=l(new d(L,b));return l({[g](b){b=h(""+b);if(void 0===b||null===b)b="";b=""+b;const c=l(f(k));a(c).v=b;return c}}[g])}let g=f(r.prototype);
for(const a of p(v))g[a]=d(v[a],a);k(g,"name",{value:b,writable:!1,configurable:!1,enumerable:!0});return l(g)}const {assign:h,create:f,defineProperty:k,freeze:l,getOwnPropertyNames:p,getPrototypeOf:m,prototype:t}=Object,{forEach:M,push:X}=Array.prototype,L=Symbol(),B=b(new WeakMap),C=b([]),N=b(new Map),D=b([]);let E=!1;class q{constructor(a,b){if(a!==L)throw Error("cannot call the constructor");k(this,"policyName",{value:""+b,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}
class w extends q{}c(w,"TrustedURL");class x extends q{}c(x,"TrustedScriptURL");class y extends q{}c(y,"TrustedHTML");class z extends q{}c(z,"TrustedScript");c(q,"TrustedType");const v={createHTML:y,createScriptURL:x,createURL:w,createScript:z},Y=v.hasOwnProperty;q=f(u.prototype);h(q,{L:function(a,b,c=!1){a=""+a;if("default"==a&&!c){if(DOMException)throw new window.DOMException("The default policy must be exposed","InvalidStateError");throw new TypeError("The default policy must be exposed");}if(E&&
-1===D.indexOf(a))throw new TypeError("Policy "+a+" disallowed.");if(-1!==C.indexOf(a))throw new TypeError("Policy "+a+" exists.");C.push(a);const d=f(null);if(b&&"object"===typeof b)for(const a of p(b))Y.call(v,a)&&(d[a]=b[a]);else console.warn("TrustedTypes.createPolicy "+a+" was given an empty policy");l(d);b=g(a,d);c&&N.set(a,b);return b},A:function(a){return N.get(""+a)||null},P:function(){return C.slice()},C:d(y),H:d(w),G:d(x),F:d(z),b:y,a:w,h:x,g:z});return{I:l(q),W:function(a){-1!==a.indexOf("*")?
E=!1:(E=!0,D.length=0,M.call(a,(a)=>{X.call(D,""+a)}))}}}();const {defineProperty:G}=Object;function H(a,b,c){G(a,b,{value:c})};/*

 Copyright 2019 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
const {apply:I}=Reflect,{exec:aa,test:ba}=RegExp.prototype;function ca(a){let b="";for(let d=0,g=a.length;d<g;++d){let {url:g,s:f}=a[d];d&&(b+=" , ");var c=g=`${g}`;if(!c||I(aa,da,[c]))throw Error(`Cannot embed url ${c} in srcset`);b+=g;f&&(f=`${f}`,J(f),b+=" "+f)}if(!b.length)throw Error("empty srcset");return b}const ea=/[\u0009\u000a\u000c\u000d\u0020]+/,fa=/^-?(?=[0-9.])[0-9]*(?:[.][0-9]+)?(?:[eE][+\-]?[0-9]+)?$/,da=/[\u0009\u000a\u000c\u000d\u0020,]/;
function J(a){let b=a;const c=a.length-1;if(0<=c){const d=a.charCodeAt(c)|32;97<=d&&122>=d&&(b=b.substring(0,c))}if("string"!==typeof b)throw new TypeError(b);if(!I(ba,fa,[b]))throw Error(`Invalid srcset metadata ${a}`);};const {isArray:ha}=Array,{apply:K}=Reflect,{create:ia,getOwnPropertyNames:O,getOwnPropertyDescriptor:P,hasOwnProperty:Q,getPrototypeOf:ja,isPrototypeOf:ka}=Object,{indexOf:la,slice:R}=String.prototype,ma=URL.prototype.constructor,S=window.SecurityPolicyViolationEvent||null;function T(a){try{return new ma(a,document.baseURI||void 0)}catch(b){return null}}
let U={HTMLAnchorElement:{href:A.a},HTMLAreaElement:{href:A.a},HTMLBaseElement:{href:A.a},HTMLButtonElement:{formaction:A.a},HTMLSourceElement:{src:A.a},HTMLImageElement:{src:A.a,srcset:A.a},HTMLTrackElement:{src:A.a},HTMLMediaElement:{src:A.a},HTMLInputElement:{src:A.a,formaction:A.a},HTMLFormElement:{action:A.a},HTMLFrameElement:{src:A.a},HTMLIFrameElement:{src:A.a,srcdoc:A.b},HTMLLinkElement:{href:A.a},HTMLObjectElement:{data:A.h,codebase:A.h},HTMLEmbedElement:{src:A.h},HTMLScriptElement:{src:A.h,
text:A.g},HTMLElement:{}};for(let a of O(HTMLElement.prototype))"on"===a.slice(0,2)&&(U.HTMLElement[a]=A.g);const V={TrustedHTML:A.C,TrustedURL:A.H,TrustedScriptURL:A.G,TrustedScript:A.F},na={TrustedHTML:"createHTML",TrustedURL:"createURL",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"},oa=A.A,W={codebase:"codeBase",formaction:"formAction"};
class pa{constructor(a){this.f=a;this.l={}}S(){F(this.f.K);if(this.f.o||this.f.D)this.i(Element.prototype,"innerHTML",A.b),this.i(Element.prototype,"outerHTML",A.b),"ShadowRoot"in window&&this.i(ShadowRoot.prototype,"innerHTML",A.b),this.c(Range.prototype,"createContextualFragment",A.b,0),this.c(Element.prototype,"insertAdjacentHTML",A.b,1),P(Document.prototype,"write")?(this.c(Document.prototype,"write",A.b,0),this.c(Document.prototype,"open",A.a,0)):(this.c(HTMLDocument.prototype,"write",A.b,0),
this.c(HTMLDocument.prototype,"open",A.a,0)),this.c(window,"open",A.a,0),"DOMParser"in window&&this.c(DOMParser.prototype,"parseFromString",A.b,0),this.c(window,"setInterval",A.g,0),this.c(window,"setTimeout",A.g,0),this.Z(),this.U(),this.T()}U(){this.i(HTMLScriptElement.prototype,"innerText",A.g,HTMLElement.prototype);this.i(HTMLScriptElement.prototype,"textContent",A.g,Node.prototype)}T(){for(let a of O(U))for(let b of O(U[a])){const c=K(Q,W,[b])?W[b]:b;this.i(window[a].prototype,c,U[a][b])}}Z(){let a=
this;this.u(Element.prototype,"setAttribute",function(b,...c){return a.Y.bind(a,this,b).apply(a,c)});this.u(Element.prototype,"setAttributeNS",function(b,...c){return a.X.bind(a,this,b).apply(a,c)})}R(a,b){a=a.constructor;do{let c=a&&a.name&&U[a.name]&&U[a.name][b];if(c||a==HTMLElement)return c}while(a=ja(a));return null}Y(a,b,...c){if(null!==a.constructor){var d=(c[0]=String(c[0])).toLowerCase();d=this.R(a,d);if(d instanceof Function)return this.j(a,"setAttribute",d,b,1,c)}return b.apply(a,c)}X(a,
b,...c){if(null!==a.constructor){c[0]=String(c[0]);var d=(c[1]=String(c[1])).toLowerCase();d=a.constructor&&a.constructor.name&&U[a.constructor.name]&&U[a.constructor.name][d];if(d instanceof Function)return this.j(a,"setAttributeNS",d,b,2,c)}return b.apply(a,c)}c(a,b,c,d){let g=this;this.u(a,b,function(a,...f){return g.j.call(g,this,b,c,a,d,f)})}u(a,b,c){var d=P(a,b);let g=d?d.value:null;if(!(g instanceof Function))throw new TypeError("Property "+b+" on object"+a+" is not a function");d=this.B(a,
b);if(this.l[d])throw Error("TrustedTypesEnforcer: Double installation detected");H(a,b,function(...a){return c.bind(this,g).apply(this,a)});this.l[d]=g}i(a,b,c,d=void 0){function g(a){l.j.call(l,this,b,c,f,0,[a])}if(d&&!ka.call(d,a))throw Error("Invalid prototype chain");d=d||a;let h=P(d,b),f=h?h.set:null;if(!(f instanceof Function))throw new TypeError("No setter for property "+b+" on object"+a);let k=this.B(a,b);if(this.l[k])throw Error("TrustedTypesEnforcer: Double installation detected");let l=
this;d===a?G(a,b,{set:g}):G(a,b,{set:g,get:h.get,configurable:!0});this.l[k]=f}B(a,b){return""+a.constructor.name+"-"+b}m(a,b){return"setAttribute"===a?(b[0]=String(b[0])).toLowerCase():"setAttributeNS"===a?(a=b[1]=String(b[1]),b=K(la,a,[":"]),a.substring(b+1).toLowerCase()):a}j(a,b,c,d,g,h){var f=h[g],k=""+c.name;if(V.hasOwnProperty(k)&&V[k](f))return K(d,a,h);if(c===A.g){var l="setAttribute"===b||"setAttributeNS"===b||"on"===K(R,this.m(b,h),[0,2]);if(("setInterval"===b||"setTimeout"===b||l)&&"function"===
typeof f||l&&null===f)return K(d,a,h)}if(ha(f)&&"srcset"===this.m(b,h))return h[g]=this.w(a,c,f),K(d,a,h);if(c===A.a&&this.f.J){l=""+f;var p;if(p=(p=T(l))?"http:"==p.protocol||"https:"==p.protocol:!1)return h[g]=l,K(d,a,h)}if((l=this.f.N)&&(l=oa.call(A,l))&&V.hasOwnProperty(k)){if("srcset"===this.m(b,h)){b=String(f);if("string"!==typeof b)throw new TypeError(b);h=[];b=b.split(ea);f=0;k=b.length;f<k&&!b[f]&&++f;f<k&&!b[k-1]&&--k;if(f>=k)throw Error("empty srcset");for(;f<k;){var m=b[f];++f;g=null;
if(f<k&&","!==b[f][0]){g=b[f];var t=g.indexOf(",");0<=t?(l=g.substring(t),g=g.substring(0,t),b[f]=l):++f}null!==g&&J(g);m={url:m};null!==g&&(m.s=g);h.push(m);if(f===k)break;g=b[f];if(","!==g[0])break;if(g=g.substring(1))b[f]=g;else if(++f,f===k)throw Error("expected URL");}if(f<k)throw Error(`srcset includes unconsumed content: ${b.slice(f).join(" ")}`);return K(d,a,[this.w(a,c,h)])}try{m=l[na[k]](f)}catch(M){t=!0}if(!t)return h[g]=m,K(d,a,h)}g=a.constructor.name||""+a;k=`Failed to set ${b} on ${g}: `+
`This property requires ${k}.`;this.f.D&&console.warn(k,b,a,c,f);if("function"==typeof S){m="";if(c===A.a||c===A.h)if(m=T(f)||"")m=m.href;c=K(R,""+f,[0,40]);c=new S("securitypolicyviolation",{bubbles:!0,blockedURI:m,disposition:this.f.o?"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",originalPolicy:this.f.M,statusCode:0,violatedDirective:"trusted-types",sample:`${g}.${b} ${c}`});a.isConnected?a.dispatchEvent(c):document.dispatchEvent(c)}if(this.f.o)throw new TypeError(k);
return K(d,a,h)}w(a,b,c){const d=[],g=(a)=>a;for(let h=0,f=c.length;h<f;++h){const f=c[h];if(!K(Q,f,["url"]))continue;let l=f.url;try{l=this.j(a,"src",b,g,0,[l])}catch(m){continue}const p=ia(null);p.url=l;K(Q,f,["metadata"])&&(p.s=f.s);d[d.length]=p}return ca(d)}};if("undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes){var Z=Object.create(u.prototype);Object.assign(Z,{isHTML:A.C,isURL:A.H,isScriptURL:A.G,isScript:A.F,createPolicy:A.L,getExposedPolicy:A.A,getPolicyNames:A.P,_isPolyfill_:!0});window.TrustedTypes=Object.freeze(Z);window.TrustedHTML=A.b;window.TrustedURL=A.a;window.TrustedScriptURL=A.h;window.TrustedScript=A.g;window.TrustedTypePolicy=r;window.TrustedTypePolicyFactory=u};function qa(){try{var a;if(!(a=document.currentScript)){{let b=document.getElementsByTagName("script");a=b[b.length-1]}}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const b=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(b)return b.content.trim()}catch(b){}return null}
if(!window.TrustedTypes||window.TrustedTypes._isPolyfill_){{const a=qa(),b=a?e.O(a):new e(!1,!1,"default",["*"]);(new pa(b)).S()}};}).call(window);//# sourceMappingURL=trustedtypes.build.js.map

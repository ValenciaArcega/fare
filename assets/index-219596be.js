(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Zi={},X1={get exports(){return Zi},set exports(t){Zi=t}},Ga={},te={},Y1={get exports(){return te},set exports(t){te=t}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),J1=Symbol.for("react.portal"),Z1=Symbol.for("react.fragment"),ew=Symbol.for("react.strict_mode"),tw=Symbol.for("react.profiler"),nw=Symbol.for("react.provider"),rw=Symbol.for("react.context"),iw=Symbol.for("react.forward_ref"),sw=Symbol.for("react.suspense"),ow=Symbol.for("react.memo"),aw=Symbol.for("react.lazy"),df=Symbol.iterator;function lw(t){return t===null||typeof t!="object"?null:(t=df&&t[df]||t["@@iterator"],typeof t=="function"?t:null)}var Om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,$m={};function ui(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Om}ui.prototype.isReactComponent={};ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bm(){}bm.prototype=ui.prototype;function uh(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Om}var ch=uh.prototype=new bm;ch.constructor=uh;Mm(ch,ui.prototype);ch.isPureReactComponent=!0;var ff=Array.isArray,Um=Object.prototype.hasOwnProperty,hh={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,r)&&!Fm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ls,type:t,key:s,ref:o,props:i,_owner:hh.current}}function uw(t,e){return{$$typeof:Ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ls}function cw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pf=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cw(""+t.key):e.toString(36)}function bo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ls:case J1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gl(o,0):r,ff(i)?(n="",t!=null&&(n=t.replace(pf,"$&/")+"/"),bo(i,e,n,"",function(u){return u})):i!=null&&(dh(i)&&(i=uw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ff(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gl(s,a);o+=bo(s,e,n,l,i)}else if(l=lw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gl(s,a++),o+=bo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ho(t,e,n){if(t==null)return t;var r=[],i=0;return bo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},Uo={transition:null},dw={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:hh};K.Children={map:ho,forEach:function(t,e,n){ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ho(t,function(){e++}),e},toArray:function(t){return ho(t,function(e){return e})||[]},only:function(t){if(!dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=ui;K.Fragment=Z1;K.Profiler=tw;K.PureComponent=uh;K.StrictMode=ew;K.Suspense=sw;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dw;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Um.call(e,l)&&!Fm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ls,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:rw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nw,_context:t},t.Consumer=t};K.createElement=Vm;K.createFactory=function(t){var e=Vm.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:iw,render:t}};K.isValidElement=dh;K.lazy=function(t){return{$$typeof:aw,_payload:{_status:-1,_result:t},_init:hw}};K.memo=function(t,e){return{$$typeof:ow,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Uo.transition;Uo.transition={};try{t()}finally{Uo.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return Qe.current.useCallback(t,e)};K.useContext=function(t){return Qe.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};K.useEffect=function(t,e){return Qe.current.useEffect(t,e)};K.useId=function(){return Qe.current.useId()};K.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Qe.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};K.useRef=function(t){return Qe.current.useRef(t)};K.useState=function(t){return Qe.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Qe.current.useTransition()};K.version="18.2.0";(function(t){t.exports=K})(Y1);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fw=te,pw=Symbol.for("react.element"),mw=Symbol.for("react.fragment"),gw=Object.prototype.hasOwnProperty,yw=fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vw={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gw.call(e,r)&&!vw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:pw,type:t,key:s,ref:o,props:i,_owner:yw.current}}Ga.Fragment=mw;Ga.jsx=zm;Ga.jsxs=zm;(function(t){t.exports=Ga})(X1);const Qa=Zi.Fragment,g=Zi.jsx,L=Zi.jsxs;var Uu={},ww={get exports(){return Uu},set exports(t){Uu=t}},ct={},Fu={},Ew={get exports(){return Fu},set exports(t){Fu=t}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,z){var B=A.length;A.push(z);e:for(;0<B;){var he=B-1>>>1,ke=A[he];if(0<i(ke,z))A[he]=z,A[B]=ke,B=he;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var z=A[0],B=A.pop();if(B!==z){A[0]=B;e:for(var he=0,ke=A.length,uo=ke>>>1;he<uo;){var zn=2*(he+1)-1,ql=A[zn],Bn=zn+1,co=A[Bn];if(0>i(ql,B))Bn<ke&&0>i(co,ql)?(A[he]=co,A[Bn]=B,he=Bn):(A[he]=ql,A[zn]=B,he=zn);else if(Bn<ke&&0>i(co,B))A[he]=co,A[Bn]=B,he=Bn;else break e}}return z}function i(A,z){var B=A.sortIndex-z.sortIndex;return B!==0?B:A.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=A)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function E(A){if(w=!1,m(A),!v)if(n(l)!==null)v=!0,Kl(I);else{var z=n(u);z!==null&&Wl(E,z.startTime-A)}}function I(A,z){v=!1,w&&(w=!1,p(P),P=-1),y=!0;var B=d;try{for(m(z),h=n(l);h!==null&&(!(h.expirationTime>z)||A&&!vt());){var he=h.callback;if(typeof he=="function"){h.callback=null,d=h.priorityLevel;var ke=he(h.expirationTime<=z);z=t.unstable_now(),typeof ke=="function"?h.callback=ke:h===n(l)&&r(l),m(z)}else r(l);h=n(l)}if(h!==null)var uo=!0;else{var zn=n(u);zn!==null&&Wl(E,zn.startTime-z),uo=!1}return uo}finally{h=null,d=B,y=!1}}var N=!1,D=null,P=-1,Z=5,j=-1;function vt(){return!(t.unstable_now()-j<Z)}function vi(){if(D!==null){var A=t.unstable_now();j=A;var z=!0;try{z=D(!0,A)}finally{z?wi():(N=!1,D=null)}}else N=!1}var wi;if(typeof f=="function")wi=function(){f(vi)};else if(typeof MessageChannel<"u"){var hf=new MessageChannel,Q1=hf.port2;hf.port1.onmessage=vi,wi=function(){Q1.postMessage(null)}}else wi=function(){C(vi,0)};function Kl(A){D=A,N||(N=!0,wi())}function Wl(A,z){P=C(function(){A(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Kl(I))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var B=d;d=z;try{return A()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=d;d=A;try{return z()}finally{d=B}},t.unstable_scheduleCallback=function(A,z,B){var he=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?he+B:he):B=he,A){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=B+ke,A={id:c++,callback:z,priorityLevel:A,startTime:B,expirationTime:ke,sortIndex:-1},B>he?(A.sortIndex=B,e(u,A),n(l)===null&&A===n(u)&&(w?(p(P),P=-1):w=!0,Wl(E,B-he))):(A.sortIndex=ke,e(l,A),v||y||(v=!0,Kl(I))),A},t.unstable_shouldYield=vt,t.unstable_wrapCallback=function(A){var z=d;return function(){var B=d;d=z;try{return A.apply(this,arguments)}finally{d=B}}}})(Bm);(function(t){t.exports=Bm})(Ew);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=te,lt=Fu;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,es={};function mr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(es[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,Sw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},gf={};function kw(t){return Vu.call(gf,t)?!0:Vu.call(mf,t)?!1:Sw.test(t)?gf[t]=!0:(mf[t]=!0,!1)}function _w(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Iw(t,e,n,r){if(e===null||typeof e>"u"||_w(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fh,ph);Pe[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fh,ph);Pe[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fh,ph);Pe[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function mh(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Iw(e,n,i,r)&&(n=null),r||i===null?kw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),qm=Symbol.for("react.offscreen"),yf=Symbol.iterator;function Ei(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Ql;function Di(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Xl=!1;function Yl(t,e){if(!t||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Di(t):""}function Tw(t){switch(t.tag){case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function Hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case _r:return"Portal";case zu:return"Profiler";case gh:return"StrictMode";case Bu:return"Suspense";case ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case Km:return(t._context.displayName||"Context")+".Provider";case yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vh:return e=t.displayName||null,e!==null?e:Hu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return Hu(t(e))}catch{}}return null}function Cw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nw(t){var e=Gm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=Nw(t))}function Qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function na(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xm(t,e){e=e.checked,e!=null&&mh(t,"checked",e,!1)}function Wu(t,e){Xm(t,e);var n=Dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&qu(t,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qu(t,e,n){(e!=="number"||na(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ri=Array.isArray;function br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ef(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ri(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dn(n)}}function Ym(t,e){var n=Dn(e.value),r=Dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,Zm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Aw=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(t){Aw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ui[e]=Ui[t]})});function eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ui.hasOwnProperty(t)&&Ui[t]?(""+e).trim():e+"px"}function tg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Dw=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Dw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,Ur=null,Fr=null;function kf(t){if(t=$s(t)){if(typeof Zu!="function")throw Error(S(280));var e=t.stateNode;e&&(e=el(e),Zu(t.stateNode,t.type,e))}}function ng(t){Ur?Fr?Fr.push(t):Fr=[t]:Ur=t}function rg(){if(Ur){var t=Ur,e=Fr;if(Fr=Ur=null,kf(t),e)for(t=0;t<e.length;t++)kf(e[t])}}function ig(t,e){return t(e)}function sg(){}var Jl=!1;function og(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return ig(t,e,n)}finally{Jl=!1,(Ur!==null||Fr!==null)&&(sg(),rg())}}function ns(t,e){var n=t.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var ec=!1;if(qt)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){ec=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{ec=!1}function Rw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fi=!1,ra=null,ia=!1,tc=null,Pw={onError:function(t){Fi=!0,ra=t}};function xw(t,e,n,r,i,s,o,a,l){Fi=!1,ra=null,Rw.apply(Pw,arguments)}function Lw(t,e,n,r,i,s,o,a,l){if(xw.apply(this,arguments),Fi){if(Fi){var u=ra;Fi=!1,ra=null}else throw Error(S(198));ia||(ia=!0,tc=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ag(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _f(t){if(gr(t)!==t)throw Error(S(188))}function Ow(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _f(i),t;if(s===r)return _f(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function lg(t){return t=Ow(t),t!==null?ug(t):null}function ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ug(t);if(e!==null)return e;t=t.sibling}return null}var cg=lt.unstable_scheduleCallback,If=lt.unstable_cancelCallback,Mw=lt.unstable_shouldYield,$w=lt.unstable_requestPaint,de=lt.unstable_now,bw=lt.unstable_getCurrentPriorityLevel,Eh=lt.unstable_ImmediatePriority,hg=lt.unstable_UserBlockingPriority,sa=lt.unstable_NormalPriority,Uw=lt.unstable_LowPriority,dg=lt.unstable_IdlePriority,Xa=null,Pt=null;function Fw(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Xa,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Bw,Vw=Math.log,zw=Math.LN2;function Bw(t){return t>>>=0,t===0?32:31-(Vw(t)/zw|0)|0}var go=64,yo=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Pi(a):(s&=o,s!==0&&(r=Pi(s)))}else o=n&~i,o!==0?r=Pi(o):s!==0&&(r=Pi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function jw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=jw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Os(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function Kw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function pg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mg,kh,gg,yg,vg,rc=!1,vo=[],yn=null,vn=null,wn=null,rs=new Map,is=new Map,un=[],Ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(e.pointerId)}}function ki(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$s(e),e!==null&&kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qw(t,e,n,r,i){switch(e){case"focusin":return yn=ki(yn,t,e,n,r,i),!0;case"dragenter":return vn=ki(vn,t,e,n,r,i),!0;case"mouseover":return wn=ki(wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return rs.set(s,ki(rs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,is.set(s,ki(is.get(s)||null,t,e,n,r,i)),!0}return!1}function wg(t){var e=Wn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=ag(n),e!==null){t.blockedOn=e,vg(t.priority,function(){gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ju=r,n.target.dispatchEvent(r),Ju=null}else return e=$s(n),e!==null&&kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Cf(t,e,n){Fo(t)&&n.delete(e)}function Gw(){rc=!1,yn!==null&&Fo(yn)&&(yn=null),vn!==null&&Fo(vn)&&(vn=null),wn!==null&&Fo(wn)&&(wn=null),rs.forEach(Cf),is.forEach(Cf)}function _i(t,e){t.blockedOn===e&&(t.blockedOn=null,rc||(rc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Gw)))}function ss(t){function e(i){return _i(i,t)}if(0<vo.length){_i(vo[0],t);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&_i(yn,t),vn!==null&&_i(vn,t),wn!==null&&_i(wn,t),rs.forEach(e),is.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&un.shift()}var Vr=nn.ReactCurrentBatchConfig,aa=!0;function Qw(t,e,n,r){var i=X,s=Vr.transition;Vr.transition=null;try{X=1,_h(t,e,n,r)}finally{X=i,Vr.transition=s}}function Xw(t,e,n,r){var i=X,s=Vr.transition;Vr.transition=null;try{X=4,_h(t,e,n,r)}finally{X=i,Vr.transition=s}}function _h(t,e,n,r){if(aa){var i=ic(t,e,n,r);if(i===null)uu(t,e,r,la,n),Tf(t,r);else if(qw(i,t,e,n,r))r.stopPropagation();else if(Tf(t,r),e&4&&-1<Ww.indexOf(t)){for(;i!==null;){var s=$s(i);if(s!==null&&mg(s),s=ic(t,e,n,r),s===null&&uu(t,e,r,la,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uu(t,e,r,null,n)}}var la=null;function ic(t,e,n,r){if(la=null,t=wh(r),t=Wn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ag(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return la=t,null}function Eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bw()){case Eh:return 1;case hg:return 4;case sa:case Uw:return 16;case dg:return 536870912;default:return 16}default:return 16}}var mn=null,Ih=null,Vo=null;function Sg(){if(Vo)return Vo;var t,e=Ih,n=e.length,r,i="value"in mn?mn.value:mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vo=i.slice(t,1<r?1-r:void 0)}function zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wo(){return!0}function Nf(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wo:Nf,this.isPropagationStopped=Nf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),e}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=ht(ci),Ms=ae({},ci,{view:0,detail:0}),Yw=ht(Ms),eu,tu,Ii,Ya=ae({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ii&&(Ii&&t.type==="mousemove"?(eu=t.screenX-Ii.screenX,tu=t.screenY-Ii.screenY):tu=eu=0,Ii=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Af=ht(Ya),Jw=ae({},Ya,{dataTransfer:0}),Zw=ht(Jw),eE=ae({},Ms,{relatedTarget:0}),nu=ht(eE),tE=ae({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),nE=ht(tE),rE=ae({},ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iE=ht(rE),sE=ae({},ci,{data:0}),Df=ht(sE),oE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lE[t])?!!e[t]:!1}function Ch(){return uE}var cE=ae({},Ms,{key:function(t){if(t.key){var e=oE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hE=ht(cE),dE=ae({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=ht(dE),fE=ae({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),pE=ht(fE),mE=ae({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),gE=ht(mE),yE=ae({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=ht(yE),wE=[9,13,27,32],Nh=qt&&"CompositionEvent"in window,Vi=null;qt&&"documentMode"in document&&(Vi=document.documentMode);var EE=qt&&"TextEvent"in window&&!Vi,kg=qt&&(!Nh||Vi&&8<Vi&&11>=Vi),Pf=String.fromCharCode(32),xf=!1;function _g(t,e){switch(t){case"keyup":return wE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function SE(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(xf=!0,Pf);case"textInput":return t=e.data,t===Pf&&xf?null:t;default:return null}}function kE(t,e){if(Tr)return t==="compositionend"||!Nh&&_g(t,e)?(t=Sg(),Vo=Ih=mn=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kg&&e.locale!=="ko"?null:e.data;default:return null}}var _E={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_E[t.type]:e==="textarea"}function Tg(t,e,n,r){ng(r),e=ua(e,"onChange"),0<e.length&&(n=new Th("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,os=null;function IE(t){$g(t,0)}function Ja(t){var e=Ar(t);if(Qm(e))return t}function TE(t,e){if(t==="change")return e}var Cg=!1;if(qt){var ru;if(qt){var iu="oninput"in document;if(!iu){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),iu=typeof Of.oninput=="function"}ru=iu}else ru=!1;Cg=ru&&(!document.documentMode||9<document.documentMode)}function Mf(){zi&&(zi.detachEvent("onpropertychange",Ng),os=zi=null)}function Ng(t){if(t.propertyName==="value"&&Ja(os)){var e=[];Tg(e,os,t,wh(t)),og(IE,e)}}function CE(t,e,n){t==="focusin"?(Mf(),zi=e,os=n,zi.attachEvent("onpropertychange",Ng)):t==="focusout"&&Mf()}function NE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ja(os)}function AE(t,e){if(t==="click")return Ja(e)}function DE(t,e){if(t==="input"||t==="change")return Ja(e)}function RE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:RE;function as(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vu.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bf(t,e){var n=$f(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function Ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dg(){for(var t=window,e=na();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=na(t.document)}return e}function Ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PE(t){var e=Dg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ag(n.ownerDocument.documentElement,n)){if(r!==null&&Ah(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bf(n,s);var o=bf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xE=qt&&"documentMode"in document&&11>=document.documentMode,Cr=null,sc=null,Bi=null,oc=!1;function Uf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||Cr==null||Cr!==na(r)||(r=Cr,"selectionStart"in r&&Ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&as(Bi,r)||(Bi=r,r=ua(sc,"onSelect"),0<r.length&&(e=new Th("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Cr)))}function Eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},su={},Rg={};qt&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Za(t){if(su[t])return su[t];if(!Nr[t])return t;var e=Nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return su[t]=e[n];return t}var Pg=Za("animationend"),xg=Za("animationiteration"),Lg=Za("animationstart"),Og=Za("transitionend"),Mg=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(t,e){Mg.set(t,e),mr(e,[t])}for(var ou=0;ou<Ff.length;ou++){var au=Ff[ou],LE=au.toLowerCase(),OE=au[0].toUpperCase()+au.slice(1);Mn(LE,"on"+OE)}Mn(Pg,"onAnimationEnd");Mn(xg,"onAnimationIteration");Mn(Lg,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Og,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function Vf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Lw(r,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vf(i,a,u),s=l}}}if(ia)throw t=tc,ia=!1,tc=null,t}function ee(t,e){var n=e[hc];n===void 0&&(n=e[hc]=new Set);var r=t+"__bubble";n.has(r)||(bg(e,t,2,!1),n.add(r))}function lu(t,e,n){var r=0;e&&(r|=4),bg(n,t,r,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function ls(t){if(!t[So]){t[So]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(ME.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,lu("selectionchange",!1,e))}}function bg(t,e,n,r){switch(Eg(e)){case 1:var i=Qw;break;case 4:i=Xw;break;default:i=_h}n=i.bind(null,e,n,t),i=void 0,!ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}og(function(){var u=s,c=wh(n),h=[];e:{var d=Mg.get(t);if(d!==void 0){var y=Th,v=t;switch(t){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":y=hE;break;case"focusin":v="focus",y=nu;break;case"focusout":v="blur",y=nu;break;case"beforeblur":case"afterblur":y=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Zw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pE;break;case Pg:case xg:case Lg:y=nE;break;case Og:y=gE;break;case"scroll":y=Yw;break;case"wheel":y=vE;break;case"copy":case"cut":case"paste":y=iE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rf}var w=(e&4)!==0,C=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=ns(f,p),E!=null&&w.push(us(f,E,m)))),C)break;f=f.return}0<w.length&&(d=new y(d,v,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Ju&&(v=n.relatedTarget||n.fromElement)&&(Wn(v)||v[Gt]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Wn(v):null,v!==null&&(C=gr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Af,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Rf,E="onPointerLeave",p="onPointerEnter",f="pointer"),C=y==null?d:Ar(y),m=v==null?d:Ar(v),d=new w(E,f+"leave",y,n,c),d.target=C,d.relatedTarget=m,E=null,Wn(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=m,w.relatedTarget=C,E=w),C=E,y&&v)t:{for(w=y,p=v,f=0,m=w;m;m=Er(m))f++;for(m=0,E=p;E;E=Er(E))m++;for(;0<f-m;)w=Er(w),f--;for(;0<m-f;)p=Er(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Er(w),p=Er(p)}w=null}else w=null;y!==null&&zf(h,d,y,w,!1),v!==null&&C!==null&&zf(h,C,v,w,!0)}}e:{if(d=u?Ar(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var I=TE;else if(Lf(d))if(Cg)I=DE;else{I=NE;var N=CE}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=AE);if(I&&(I=I(t,u))){Tg(h,I,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&qu(d,"number",d.value)}switch(N=u?Ar(u):window,t){case"focusin":(Lf(N)||N.contentEditable==="true")&&(Cr=N,sc=u,Bi=null);break;case"focusout":Bi=sc=Cr=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Uf(h,n,c);break;case"selectionchange":if(xE)break;case"keydown":case"keyup":Uf(h,n,c)}var D;if(Nh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Tr?_g(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(kg&&n.locale!=="ko"&&(Tr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Tr&&(D=Sg()):(mn=c,Ih="value"in mn?mn.value:mn.textContent,Tr=!0)),N=ua(u,P),0<N.length&&(P=new Df(P,t,null,n,c),h.push({event:P,listeners:N}),D?P.data=D:(D=Ig(n),D!==null&&(P.data=D)))),(D=EE?SE(t,n):kE(t,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(c=new Df("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}$g(h,e)})}function us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ns(t,n),s!=null&&r.unshift(us(t,s,i)),s=ns(t,e),s!=null&&r.push(us(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ns(n,s),l!=null&&o.unshift(us(n,l,a))):i||(l=ns(n,s),l!=null&&o.push(us(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $E=/\r\n?/g,bE=/\u0000|\uFFFD/g;function Bf(t){return(typeof t=="string"?t:""+t).replace($E,`
`).replace(bE,"")}function ko(t,e,n){if(e=Bf(e),Bf(t)!==e&&n)throw Error(S(425))}function ca(){}var ac=null,lc=null;function uc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,UE=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,FE=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(t){return jf.resolve(null).then(t).catch(VE)}:cc;function VE(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ss(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ss(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Dt="__reactFiber$"+hi,cs="__reactProps$"+hi,Gt="__reactContainer$"+hi,hc="__reactEvents$"+hi,zE="__reactListeners$"+hi,BE="__reactHandles$"+hi;function Wn(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hf(t);t!==null;){if(n=t[Dt])return n;t=Hf(t)}return e}t=n,n=t.parentNode}return null}function $s(t){return t=t[Dt]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function el(t){return t[cs]||null}var dc=[],Dr=-1;function $n(t){return{current:t}}function ne(t){0>Dr||(t.current=dc[Dr],dc[Dr]=null,Dr--)}function Y(t,e){Dr++,dc[Dr]=t.current,t.current=e}var Rn={},Be=$n(Rn),et=$n(!1),rr=Rn;function Gr(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tt(t){return t=t.childContextTypes,t!=null}function ha(){ne(et),ne(Be)}function Kf(t,e,n){if(Be.current!==Rn)throw Error(S(168));Y(Be,e),Y(et,n)}function Ug(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Cw(t)||"Unknown",i));return ae({},n,r)}function da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,rr=Be.current,Y(Be,t),Y(et,et.current),!0}function Wf(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Ug(t,e,rr),r.__reactInternalMemoizedMergedChildContext=t,ne(et),ne(Be),Y(Be,t)):ne(et),Y(et,n)}var Vt=null,tl=!1,hu=!1;function Fg(t){Vt===null?Vt=[t]:Vt.push(t)}function jE(t){tl=!0,Fg(t)}function bn(){if(!hu&&Vt!==null){hu=!0;var t=0,e=X;try{var n=Vt;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vt=null,tl=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(t+1)),cg(Eh,bn),i}finally{X=e,hu=!1}}return null}var Rr=[],Pr=0,fa=null,pa=0,dt=[],ft=0,ir=null,zt=1,Bt="";function jn(t,e){Rr[Pr++]=pa,Rr[Pr++]=fa,fa=t,pa=e}function Vg(t,e,n){dt[ft++]=zt,dt[ft++]=Bt,dt[ft++]=ir,ir=t;var r=zt;t=Bt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zt=1<<32-_t(e)+i|n<<i|r,Bt=s+t}else zt=1<<s|n<<i|r,Bt=t}function Dh(t){t.return!==null&&(jn(t,1),Vg(t,1,0))}function Rh(t){for(;t===fa;)fa=Rr[--Pr],Rr[Pr]=null,pa=Rr[--Pr],Rr[Pr]=null;for(;t===ir;)ir=dt[--ft],dt[ft]=null,Bt=dt[--ft],dt[ft]=null,zt=dt[--ft],dt[ft]=null}var ot=null,it=null,re=!1,kt=null;function zg(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,it=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ir!==null?{id:zt,overflow:Bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,it=null,!0):!1;default:return!1}}function fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(re){var e=it;if(e){var n=e;if(!qf(t,e)){if(fc(t))throw Error(S(418));e=En(n.nextSibling);var r=ot;e&&qf(t,e)?zg(r,n):(t.flags=t.flags&-4097|2,re=!1,ot=t)}}else{if(fc(t))throw Error(S(418));t.flags=t.flags&-4097|2,re=!1,ot=t}}}function Gf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function _o(t){if(t!==ot)return!1;if(!re)return Gf(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uc(t.type,t.memoizedProps)),e&&(e=it)){if(fc(t))throw Bg(),Error(S(418));for(;e;)zg(t,e),e=En(e.nextSibling)}if(Gf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){it=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}it=null}}else it=ot?En(t.stateNode.nextSibling):null;return!0}function Bg(){for(var t=it;t;)t=En(t.nextSibling)}function Qr(){it=ot=null,re=!1}function Ph(t){kt===null?kt=[t]:kt.push(t)}var HE=nn.ReactCurrentBatchConfig;function Et(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ma=$n(null),ga=null,xr=null,xh=null;function Lh(){xh=xr=ga=null}function Oh(t){var e=ma.current;ne(ma),t._currentValue=e}function mc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zr(t,e){ga=t,xh=xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function gt(t){var e=t._currentValue;if(xh!==t)if(t={context:t,memoizedValue:e,next:null},xr===null){if(ga===null)throw Error(S(308));xr=t,ga.dependencies={lanes:0,firstContext:t}}else xr=xr.next=t;return e}var qn=null;function Mh(t){qn===null?qn=[t]:qn.push(t)}function jg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qt(t,r)}function Qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function $h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qt(t,n)}return i=r.interleaved,i===null?(e.next=e,Mh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qt(t,n)}function Bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sh(t,n)}}function Qf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ya(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(y,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(y,h,d):v,d==null)break e;h=ae({},h,d);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);or|=o,t.lanes=o,t.memoizedState=h}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Kg=new jm.Component().refs;function gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nl={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=_n(t),s=Wt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(It(e,t,i,r),Bo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=_n(t),s=Wt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(It(e,t,i,r),Bo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=_n(t),i=Wt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sn(t,i,r),e!==null&&(It(e,t,r,n),Bo(e,t,r))}};function Yf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!as(n,r)||!as(i,s):!0}function Wg(t,e,n){var r=!1,i=Rn,s=e.contextType;return typeof s=="object"&&s!==null?s=gt(s):(i=tt(e)?rr:Be.current,r=e.contextTypes,s=(r=r!=null)?Gr(t,i):Rn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nl.enqueueReplaceState(e,e.state,null)}function yc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Kg,$h(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gt(s):(s=tt(e)?rr:Be.current,i.context=Gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nl.enqueueReplaceState(i,i.state,null),ya(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ti(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Kg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Io(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zf(t){var e=t._init;return e(t._payload)}function qg(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=In(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,E){return f===null||f.tag!==6?(f=vu(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,E){var I=m.type;return I===Ir?c(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===an&&Zf(I)===f.type)?(E=i(f,m.props),E.ref=Ti(p,f,m),E.return=p,E):(E=Go(m.type,m.key,m.props,null,p.mode,E),E.ref=Ti(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=wu(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,E,I){return f===null||f.tag!==7?(f=Zn(m,p.mode,E,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=vu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fo:return m=Go(f.type,f.key,f.props,null,p.mode,m),m.ref=Ti(p,null,f),m.return=p,m;case _r:return f=wu(f,p.mode,m),f.return=p,f;case an:var E=f._init;return h(p,E(f._payload),m)}if(Ri(f)||Ei(f))return f=Zn(f,p.mode,m,null),f.return=p,f;Io(p,f)}return null}function d(p,f,m,E){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:return m.key===I?l(p,f,m,E):null;case _r:return m.key===I?u(p,f,m,E):null;case an:return I=m._init,d(p,f,I(m._payload),E)}if(Ri(m)||Ei(m))return I!==null?null:c(p,f,m,E,null);Io(p,m)}return null}function y(p,f,m,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(f,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fo:return p=p.get(E.key===null?m:E.key)||null,l(f,p,E,I);case _r:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,I);case an:var N=E._init;return y(p,f,m,N(E._payload),I)}if(Ri(E)||Ei(E))return p=p.get(m)||null,c(f,p,E,I,null);Io(f,E)}return null}function v(p,f,m,E){for(var I=null,N=null,D=f,P=f=0,Z=null;D!==null&&P<m.length;P++){D.index>P?(Z=D,D=null):Z=D.sibling;var j=d(p,D,m[P],E);if(j===null){D===null&&(D=Z);break}t&&D&&j.alternate===null&&e(p,D),f=s(j,f,P),N===null?I=j:N.sibling=j,N=j,D=Z}if(P===m.length)return n(p,D),re&&jn(p,P),I;if(D===null){for(;P<m.length;P++)D=h(p,m[P],E),D!==null&&(f=s(D,f,P),N===null?I=D:N.sibling=D,N=D);return re&&jn(p,P),I}for(D=r(p,D);P<m.length;P++)Z=y(D,p,P,m[P],E),Z!==null&&(t&&Z.alternate!==null&&D.delete(Z.key===null?P:Z.key),f=s(Z,f,P),N===null?I=Z:N.sibling=Z,N=Z);return t&&D.forEach(function(vt){return e(p,vt)}),re&&jn(p,P),I}function w(p,f,m,E){var I=Ei(m);if(typeof I!="function")throw Error(S(150));if(m=I.call(m),m==null)throw Error(S(151));for(var N=I=null,D=f,P=f=0,Z=null,j=m.next();D!==null&&!j.done;P++,j=m.next()){D.index>P?(Z=D,D=null):Z=D.sibling;var vt=d(p,D,j.value,E);if(vt===null){D===null&&(D=Z);break}t&&D&&vt.alternate===null&&e(p,D),f=s(vt,f,P),N===null?I=vt:N.sibling=vt,N=vt,D=Z}if(j.done)return n(p,D),re&&jn(p,P),I;if(D===null){for(;!j.done;P++,j=m.next())j=h(p,j.value,E),j!==null&&(f=s(j,f,P),N===null?I=j:N.sibling=j,N=j);return re&&jn(p,P),I}for(D=r(p,D);!j.done;P++,j=m.next())j=y(D,p,P,j.value,E),j!==null&&(t&&j.alternate!==null&&D.delete(j.key===null?P:j.key),f=s(j,f,P),N===null?I=j:N.sibling=j,N=j);return t&&D.forEach(function(vi){return e(p,vi)}),re&&jn(p,P),I}function C(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Ir&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:e:{for(var I=m.key,N=f;N!==null;){if(N.key===I){if(I=m.type,I===Ir){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===an&&Zf(I)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=Ti(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Ir?(f=Zn(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=Go(m.type,m.key,m.props,null,p.mode,E),E.ref=Ti(p,f,m),E.return=p,p=E)}return o(p);case _r:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=wu(m,p.mode,E),f.return=p,p=f}return o(p);case an:return N=m._init,C(p,f,N(m._payload),E)}if(Ri(m))return v(p,f,m,E);if(Ei(m))return w(p,f,m,E);Io(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=vu(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return C}var Xr=qg(!0),Gg=qg(!1),bs={},xt=$n(bs),hs=$n(bs),ds=$n(bs);function Gn(t){if(t===bs)throw Error(S(174));return t}function bh(t,e){switch(Y(ds,e),Y(hs,t),Y(xt,bs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qu(e,t)}ne(xt),Y(xt,e)}function Yr(){ne(xt),ne(hs),ne(ds)}function Qg(t){Gn(ds.current);var e=Gn(xt.current),n=Qu(e,t.type);e!==n&&(Y(hs,t),Y(xt,n))}function Uh(t){hs.current===t&&(ne(xt),ne(hs))}var se=$n(0);function va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Fh(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var jo=nn.ReactCurrentDispatcher,fu=nn.ReactCurrentBatchConfig,sr=0,oe=null,ge=null,Ie=null,wa=!1,ji=!1,fs=0,KE=0;function Le(){throw Error(S(321))}function Vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function zh(t,e,n,r,i,s){if(sr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jo.current=t===null||t.memoizedState===null?QE:XE,t=n(r,i),ji){s=0;do{if(ji=!1,fs=0,25<=s)throw Error(S(301));s+=1,Ie=ge=null,e.updateQueue=null,jo.current=YE,t=n(r,i)}while(ji)}if(jo.current=Ea,e=ge!==null&&ge.next!==null,sr=0,Ie=ge=oe=null,wa=!1,e)throw Error(S(300));return t}function Bh(){var t=fs!==0;return fs=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?oe.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function yt(){if(ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Ie===null?oe.memoizedState:Ie.next;if(e!==null)Ie=e,ge=t;else{if(t===null)throw Error(S(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ie===null?oe.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function ps(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=yt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((sr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,or|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=yt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xg(){}function Yg(t,e){var n=oe,r=yt(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,jh(ey.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,ms(9,Zg.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(S(349));sr&30||Jg(n,e,i)}return i}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zg(t,e,n,r){e.value=n,e.getSnapshot=r,ty(e)&&ny(t)}function ey(t,e,n){return n(function(){ty(e)&&ny(t)})}function ty(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function ny(t){var e=Qt(t,1);e!==null&&It(e,t,1,-1)}function ep(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},e.queue=t,t=t.dispatch=GE.bind(null,oe,t),[e.memoizedState,t]}function ms(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ry(){return yt().memoizedState}function Ho(t,e,n,r){var i=At();oe.flags|=t,i.memoizedState=ms(1|e,n,void 0,r===void 0?null:r)}function rl(t,e,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Vh(r,o.deps)){i.memoizedState=ms(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ms(1|e,n,s,r)}function tp(t,e){return Ho(8390656,8,t,e)}function jh(t,e){return rl(2048,8,t,e)}function iy(t,e){return rl(4,2,t,e)}function sy(t,e){return rl(4,4,t,e)}function oy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ay(t,e,n){return n=n!=null?n.concat([t]):null,rl(4,4,oy.bind(null,e,t),n)}function Hh(){}function ly(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uy(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cy(t,e,n){return sr&21?(Tt(n,e)||(n=fg(),oe.lanes|=n,or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function WE(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=fu.transition;fu.transition={};try{t(!1),e()}finally{X=n,fu.transition=r}}function hy(){return yt().memoizedState}function qE(t,e,n){var r=_n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dy(t))fy(e,n);else if(n=jg(t,e,n,r),n!==null){var i=Ge();It(n,t,r,i),py(n,e,r)}}function GE(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dy(t))fy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,o)){var l=e.interleaved;l===null?(i.next=i,Mh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jg(t,e,i,r),n!==null&&(i=Ge(),It(n,t,r,i),py(n,e,r))}}function dy(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function fy(t,e){ji=wa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function py(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sh(t,n)}}var Ea={readContext:gt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},QE={readContext:gt,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:gt,useEffect:tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4194308,4,oy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ho(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qE.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:ep,useDebugValue:Hh,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=ep(!1),e=t[0];return t=WE.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=At();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Te===null)throw Error(S(349));sr&30||Jg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tp(ey.bind(null,r,s,t),[t]),r.flags|=2048,ms(9,Zg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=At(),e=Te.identifierPrefix;if(re){var n=Bt,r=zt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XE={readContext:gt,useCallback:ly,useContext:gt,useEffect:jh,useImperativeHandle:ay,useInsertionEffect:iy,useLayoutEffect:sy,useMemo:uy,useReducer:pu,useRef:ry,useState:function(){return pu(ps)},useDebugValue:Hh,useDeferredValue:function(t){var e=yt();return cy(e,ge.memoizedState,t)},useTransition:function(){var t=pu(ps)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:Yg,useId:hy,unstable_isNewReconciler:!1},YE={readContext:gt,useCallback:ly,useContext:gt,useEffect:jh,useImperativeHandle:ay,useInsertionEffect:iy,useLayoutEffect:sy,useMemo:uy,useReducer:mu,useRef:ry,useState:function(){return mu(ps)},useDebugValue:Hh,useDeferredValue:function(t){var e=yt();return ge===null?e.memoizedState=t:cy(e,ge.memoizedState,t)},useTransition:function(){var t=mu(ps)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:Yg,useId:hy,unstable_isNewReconciler:!1};function Jr(t,e){try{var n="",r=e;do n+=Tw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JE=typeof WeakMap=="function"?WeakMap:Map;function my(t,e,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ka||(ka=!0,Ac=r),vc(t,e)},n}function gy(t,e,n){n=Wt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vc(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function np(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wt(-1,1),e.tag=2,Sn(n,e,1))),n.lanes|=1),t)}var ZE=nn.ReactCurrentOwner,Ze=!1;function We(t,e,n,r){e.child=t===null?Gg(e,null,n,r):Xr(e,t.child,n,r)}function sp(t,e,n,r,i){n=n.render;var s=e.ref;return zr(e,i),r=zh(t,e,n,r,s,i),n=Bh(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xt(t,e,i)):(re&&n&&Dh(e),e.flags|=1,We(t,e,r,i),e.child)}function op(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yy(t,e,s,r,i)):(t=Go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:as,n(o,r)&&t.ref===e.ref)return Xt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function yy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(as(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,Xt(t,e,i)}return wc(t,e,n,r,i)}function vy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Or,rt),rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Or,rt),rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(Or,rt),rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(Or,rt),rt|=r;return We(t,e,i,n),e.child}function wy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wc(t,e,n,r,i){var s=tt(n)?rr:Be.current;return s=Gr(e,s),zr(e,i),n=zh(t,e,n,r,s,i),r=Bh(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xt(t,e,i)):(re&&r&&Dh(e),e.flags|=1,We(t,e,n,i),e.child)}function ap(t,e,n,r,i){if(tt(n)){var s=!0;da(e)}else s=!1;if(zr(e,i),e.stateNode===null)Ko(t,e),Wg(e,n,r),yc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=tt(n)?rr:Be.current,u=Gr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Jf(e,o,r,u),ln=!1;var d=e.memoizedState;o.state=d,ya(e,r,o,i),l=e.memoizedState,a!==r||d!==l||et.current||ln?(typeof c=="function"&&(gc(e,n,c,r),l=e.memoizedState),(a=ln||Yf(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Et(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gt(l):(l=tt(n)?rr:Be.current,l=Gr(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Jf(e,o,r,l),ln=!1,d=e.memoizedState,o.state=d,ya(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||et.current||ln?(typeof y=="function"&&(gc(e,n,y,r),v=e.memoizedState),(u=ln||Yf(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ec(t,e,n,r,s,i)}function Ec(t,e,n,r,i,s){wy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Wf(e,n,!1),Xt(t,e,s);r=e.stateNode,ZE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&Wf(e,n,!0),e.child}function Ey(t){var e=t.stateNode;e.pendingContext?Kf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kf(t,e.context,!1),bh(t,e.containerInfo)}function lp(t,e,n,r,i){return Qr(),Ph(i),e.flags|=256,We(t,e,n,r),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sy(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(se,i&1),t===null)return pc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ol(o,r,0,null),t=Zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kc(n),e.memoizedState=Sc,t):Kh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=In(a,s):(s=Zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sc,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kh(t,e){return e=ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,r){return r!==null&&Ph(r),Xr(e,t.child,null,n),t=Kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gu(Error(S(422))),To(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ol({mode:"visible",children:r.children},i,0,null),s=Zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xr(e,t.child,null,o),e.child.memoizedState=kc(o),e.memoizedState=Sc,s);if(!(e.mode&1))return To(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=gu(s,r,void 0),To(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qt(t,i),It(r,t,i,-1))}return Yh(),r=gu(Error(S(421))),To(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,it=En(i.nextSibling),ot=e,re=!0,kt=null,t!==null&&(dt[ft++]=zt,dt[ft++]=Bt,dt[ft++]=ir,zt=t.id,Bt=t.overflow,ir=e),e=Kh(e,r.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mc(t.return,e,n)}function yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ky(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yu(e,!0,n,null,s);break;case"together":yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tS(t,e,n){switch(e.tag){case 3:Ey(e),Qr();break;case 5:Qg(e);break;case 1:tt(e.type)&&da(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Sy(t,e,n):(Y(se,se.current&1),t=Xt(t,e,n),t!==null?t.sibling:null);Y(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ky(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,vy(t,e,n)}return Xt(t,e,n)}var _y,_c,Iy,Ty;_y=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};Iy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gn(xt.current);var s=null;switch(n){case"input":i=Ku(t,i),r=Ku(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Gu(t,i),r=Gu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ca)}Xu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(es.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(es.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ty=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ci(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nS(t,e,n){var r=e.pendingProps;switch(Rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return tt(e.type)&&ha(),Oe(e),null;case 3:return r=e.stateNode,Yr(),ne(et),ne(Be),Fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(Pc(kt),kt=null))),_c(t,e),Oe(e),null;case 5:Uh(e);var i=Gn(ds.current);if(n=e.type,t!==null&&e.stateNode!=null)Iy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Oe(e),null}if(t=Gn(xt.current),_o(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dt]=e,r[cs]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<xi.length;i++)ee(xi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":vf(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Ef(r,s),ee("invalid",r)}Xu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ko(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ko(r.textContent,a,t),i=["children",""+a]):es.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":po(r),wf(r,s,!0);break;case"textarea":po(r),Sf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dt]=e,t[cs]=r,_y(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yu(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<xi.length;i++)ee(xi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":vf(t,r),i=Ku(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Ef(t,r),i=Gu(t,r),ee("invalid",t);break;default:i=r}Xu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ts(t,l):typeof l=="number"&&ts(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(es.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&mh(t,s,l,o))}switch(n){case"input":po(t),wf(t,r,!1);break;case"textarea":po(t),Sf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?br(t,!!r.multiple,s,!1):r.defaultValue!=null&&br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)Ty(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Gn(ds.current),Gn(xt.current),_o(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dt]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:ko(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=e,e.stateNode=r}return Oe(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&it!==null&&e.mode&1&&!(e.flags&128))Bg(),Qr(),e.flags|=98560,s=!1;else if(s=_o(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Dt]=e}else Qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else kt!==null&&(Pc(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ve===0&&(ve=3):Yh())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return Yr(),_c(t,e),t===null&&ls(e.stateNode.containerInfo),Oe(e),null;case 10:return Oh(e.type._context),Oe(e),null;case 17:return tt(e.type)&&ha(),Oe(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ci(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=va(t),o!==null){for(e.flags|=128,Ci(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>Zr&&(e.flags|=128,r=!0,Ci(s,!1),e.lanes=4194304)}else{if(!r)if(t=va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Oe(e),null}else 2*de()-s.renderingStartTime>Zr&&n!==1073741824&&(e.flags|=128,r=!0,Ci(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,Y(se,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Xh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rt&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function rS(t,e){switch(Rh(e),e.tag){case 1:return tt(e.type)&&ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yr(),ne(et),ne(Be),Fh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uh(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return Yr(),null;case 10:return Oh(e.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var Co=!1,be=!1,iS=typeof WeakSet=="function"?WeakSet:Set,T=null;function Lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Ic(t,e,n){try{n()}catch(r){le(t,e,r)}}var cp=!1;function sS(t,e){if(ac=aa,t=Dg(),Ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:t,selectionRange:n},aa=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Et(e.type,w),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return v=cp,cp=!1,v}function Hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ic(e,n,s)}i=i.next}while(i!==r)}}function il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cy(t){var e=t.alternate;e!==null&&(t.alternate=null,Cy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[cs],delete e[hc],delete e[zE],delete e[BE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ny(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ny(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ca));else if(r!==4&&(t=t.child,t!==null))for(Cc(t,e,n),t=t.sibling;t!==null;)Cc(t,e,n),t=t.sibling}function Nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}var Ne=null,St=!1;function sn(t,e,n){for(n=n.child;n!==null;)Ay(t,e,n),n=n.sibling}function Ay(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Xa,n)}catch{}switch(n.tag){case 5:be||Lr(n,e);case 6:var r=Ne,i=St;Ne=null,sn(t,e,n),Ne=r,St=i,Ne!==null&&(St?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(St?(t=Ne,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),ss(t)):cu(Ne,n.stateNode));break;case 4:r=Ne,i=St,Ne=n.stateNode.containerInfo,St=!0,sn(t,e,n),Ne=r,St=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ic(n,e,o),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!be&&(Lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,sn(t,e,n),be=r):sn(t,e,n);break;default:sn(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(r){var i=pS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,St=!1;break e;case 3:Ne=a.stateNode.containerInfo,St=!0;break e;case 4:Ne=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ne===null)throw Error(S(160));Ay(s,o,i),Ne=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dy(e,t),e=e.sibling}function Dy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wt(e,t),Nt(t),r&4){try{Hi(3,t,t.return),il(3,t)}catch(w){le(t,t.return,w)}try{Hi(5,t,t.return)}catch(w){le(t,t.return,w)}}break;case 1:wt(e,t),Nt(t),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(wt(e,t),Nt(t),r&512&&n!==null&&Lr(n,n.return),t.flags&32){var i=t.stateNode;try{ts(i,"")}catch(w){le(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xm(i,s),Yu(a,o);var u=Yu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?tg(i,h):c==="dangerouslySetInnerHTML"?Zm(i,h):c==="children"?ts(i,h):mh(i,c,h,u)}switch(a){case"input":Wu(i,s);break;case"textarea":Ym(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?br(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?br(i,!!s.multiple,s.defaultValue,!0):br(i,!!s.multiple,s.multiple?[]:"",!1))}i[cs]=s}catch(w){le(t,t.return,w)}}break;case 6:if(wt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){le(t,t.return,w)}}break;case 3:if(wt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ss(e.containerInfo)}catch(w){le(t,t.return,w)}break;case 4:wt(e,t),Nt(t);break;case 13:wt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gh=de())),r&4&&dp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||c,wt(e,t),be=u):wt(e,t),Nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(T=t,c=t.child;c!==null;){for(h=T=c;T!==null;){switch(d=T,y=d.child,d.tag){case 0:case 11:case 14:case 15:Hi(4,d,d.return);break;case 1:Lr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:Lr(d,d.return);break;case 22:if(d.memoizedState!==null){pp(h);continue}}y!==null?(y.return=d,T=y):pp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eg("display",o))}catch(w){le(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){le(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wt(e,t),Nt(t),r&4&&dp(t);break;case 21:break;default:wt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ny(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ts(i,""),r.flags&=-33);var s=hp(t);Nc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=hp(t);Cc(t,a,o);break;default:throw Error(S(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oS(t,e,n){T=t,Ry(t)}function Ry(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Co;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=Co;var u=be;if(Co=o,(be=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?mp(i):l!==null?(l.return=o,T=l):mp(i);for(;s!==null;)T=s,Ry(s),s=s.sibling;T=i,Co=a,be=u}fp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):fp(t)}}function fp(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ss(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}be||e.flags&512&&Tc(e)}catch(d){le(e,e.return,d)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function pp(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function mp(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{il(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{Tc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Tc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var aS=Math.ceil,Sa=nn.ReactCurrentDispatcher,Wh=nn.ReactCurrentOwner,mt=nn.ReactCurrentBatchConfig,q=0,Te=null,me=null,De=0,rt=0,Or=$n(0),ve=0,gs=null,or=0,sl=0,qh=0,Ki=null,Ye=null,Gh=0,Zr=1/0,Ft=null,ka=!1,Ac=null,kn=null,No=!1,gn=null,_a=0,Wi=0,Dc=null,Wo=-1,qo=0;function Ge(){return q&6?de():Wo!==-1?Wo:Wo=de()}function _n(t){return t.mode&1?q&2&&De!==0?De&-De:HE.transition!==null?(qo===0&&(qo=fg()),qo):(t=X,t!==0||(t=window.event,t=t===void 0?16:Eg(t.type)),t):1}function It(t,e,n,r){if(50<Wi)throw Wi=0,Dc=null,Error(S(185));Os(t,n,r),(!(q&2)||t!==Te)&&(t===Te&&(!(q&2)&&(sl|=n),ve===4&&cn(t,De)),nt(t,r),n===1&&q===0&&!(e.mode&1)&&(Zr=de()+500,tl&&bn()))}function nt(t,e){var n=t.callbackNode;Hw(t,e);var r=oa(t,t===Te?De:0);if(r===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?jE(gp.bind(null,t)):Fg(gp.bind(null,t)),FE(function(){!(q&6)&&bn()}),n=null;else{switch(pg(r)){case 1:n=Eh;break;case 4:n=hg;break;case 16:n=sa;break;case 536870912:n=dg;break;default:n=sa}n=Uy(n,Py.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Py(t,e){if(Wo=-1,qo=0,q&6)throw Error(S(327));var n=t.callbackNode;if(Br()&&t.callbackNode!==n)return null;var r=oa(t,t===Te?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ia(t,r);else{e=r;var i=q;q|=2;var s=Ly();(Te!==t||De!==e)&&(Ft=null,Zr=de()+500,Jn(t,e));do try{cS();break}catch(a){xy(t,a)}while(1);Lh(),Sa.current=s,q=i,me!==null?e=0:(Te=null,De=0,e=ve)}if(e!==0){if(e===2&&(i=nc(t),i!==0&&(r=i,e=Rc(t,i))),e===1)throw n=gs,Jn(t,0),cn(t,r),nt(t,de()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!lS(i)&&(e=Ia(t,r),e===2&&(s=nc(t),s!==0&&(r=s,e=Rc(t,s))),e===1))throw n=gs,Jn(t,0),cn(t,r),nt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Hn(t,Ye,Ft);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=Gh+500-de(),10<e)){if(oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cc(Hn.bind(null,t,Ye,Ft),e);break}Hn(t,Ye,Ft);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aS(r/1960))-r,10<r){t.timeoutHandle=cc(Hn.bind(null,t,Ye,Ft),r);break}Hn(t,Ye,Ft);break;case 5:Hn(t,Ye,Ft);break;default:throw Error(S(329))}}}return nt(t,de()),t.callbackNode===n?Py.bind(null,t):null}function Rc(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(Jn(t,e).flags|=256),t=Ia(t,e),t!==2&&(e=Ye,Ye=n,e!==null&&Pc(e)),t}function Pc(t){Ye===null?Ye=t:Ye.push.apply(Ye,t)}function lS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~qh,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function gp(t){if(q&6)throw Error(S(327));Br();var e=oa(t,0);if(!(e&1))return nt(t,de()),null;var n=Ia(t,e);if(t.tag!==0&&n===2){var r=nc(t);r!==0&&(e=r,n=Rc(t,r))}if(n===1)throw n=gs,Jn(t,0),cn(t,e),nt(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hn(t,Ye,Ft),nt(t,de()),null}function Qh(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Zr=de()+500,tl&&bn())}}function ar(t){gn!==null&&gn.tag===0&&!(q&6)&&Br();var e=q;q|=1;var n=mt.transition,r=X;try{if(mt.transition=null,X=1,t)return t()}finally{X=r,mt.transition=n,q=e,!(q&6)&&bn()}}function Xh(){rt=Or.current,ne(Or)}function Jn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UE(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Rh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:Yr(),ne(et),ne(Be),Fh();break;case 5:Uh(r);break;case 4:Yr();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Oh(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(Te=t,me=t=In(t.current,null),De=rt=e,ve=0,gs=null,qh=sl=or=0,Ye=Ki=null,qn!==null){for(e=0;e<qn.length;e++)if(n=qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qn=null}return t}function xy(t,e){do{var n=me;try{if(Lh(),jo.current=Ea,wa){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wa=!1}if(sr=0,Ie=ge=oe=null,ji=!1,fs=0,Wh.current=null,n===null||n.return===null){ve=1,gs=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=rp(o);if(y!==null){y.flags&=-257,ip(y,o,a,s,e),y.mode&1&&np(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){np(s,u,e),Yh();break e}l=Error(S(426))}}else if(re&&a.mode&1){var C=rp(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ip(C,o,a,s,e),Ph(Jr(l,a));break e}}s=l=Jr(l,a),ve!==4&&(ve=2),Ki===null?Ki=[s]:Ki.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=my(s,l,e);Qf(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kn===null||!kn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=gy(s,a,e);Qf(s,E);break e}}s=s.return}while(s!==null)}My(n)}catch(I){e=I,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Ly(){var t=Sa.current;return Sa.current=Ea,t===null?Ea:t}function Yh(){(ve===0||ve===3||ve===2)&&(ve=4),Te===null||!(or&268435455)&&!(sl&268435455)||cn(Te,De)}function Ia(t,e){var n=q;q|=2;var r=Ly();(Te!==t||De!==e)&&(Ft=null,Jn(t,e));do try{uS();break}catch(i){xy(t,i)}while(1);if(Lh(),q=n,Sa.current=r,me!==null)throw Error(S(261));return Te=null,De=0,ve}function uS(){for(;me!==null;)Oy(me)}function cS(){for(;me!==null&&!Mw();)Oy(me)}function Oy(t){var e=by(t.alternate,t,rt);t.memoizedProps=t.pendingProps,e===null?My(t):me=e,Wh.current=null}function My(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,me=null;return}}else if(n=nS(n,e,rt),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ve===0&&(ve=5)}function Hn(t,e,n){var r=X,i=mt.transition;try{mt.transition=null,X=1,hS(t,e,n,r)}finally{mt.transition=i,X=r}return null}function hS(t,e,n,r){do Br();while(gn!==null);if(q&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kw(t,s),t===Te&&(me=Te=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,Uy(sa,function(){return Br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mt.transition,mt.transition=null;var o=X;X=1;var a=q;q|=4,Wh.current=null,sS(t,n),Dy(n,t),PE(lc),aa=!!ac,lc=ac=null,t.current=n,oS(n),$w(),q=a,X=o,mt.transition=s}else t.current=n;if(No&&(No=!1,gn=t,_a=i),s=t.pendingLanes,s===0&&(kn=null),Fw(n.stateNode),nt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ka)throw ka=!1,t=Ac,Ac=null,t;return _a&1&&t.tag!==0&&Br(),s=t.pendingLanes,s&1?t===Dc?Wi++:(Wi=0,Dc=t):Wi=0,bn(),null}function Br(){if(gn!==null){var t=pg(_a),e=mt.transition,n=X;try{if(mt.transition=null,X=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,_a=0,q&6)throw Error(S(331));var i=q;for(q|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Hi(8,c,s)}var h=c.child;if(h!==null)h.return=c,T=h;else for(;T!==null;){c=T;var d=c.sibling,y=c.return;if(Cy(c),c===u){T=null;break}if(d!==null){d.return=y,T=d;break}T=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(I){le(a,a.return,I)}if(a===o){T=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,T=E;break e}T=a.return}}if(q=i,bn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Xa,t)}catch{}r=!0}return r}finally{X=n,mt.transition=e}}return!1}function yp(t,e,n){e=Jr(n,e),e=my(t,e,1),t=Sn(t,e,1),e=Ge(),t!==null&&(Os(t,1,e),nt(t,e))}function le(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=Jr(n,t),t=gy(e,t,1),e=Sn(e,t,1),t=Ge(),e!==null&&(Os(e,1,t),nt(e,t));break}}e=e.return}}function dS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(De&n)===n&&(ve===4||ve===3&&(De&130023424)===De&&500>de()-Gh?Jn(t,0):qh|=n),nt(t,e)}function $y(t,e){e===0&&(t.mode&1?(e=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):e=1);var n=Ge();t=Qt(t,e),t!==null&&(Os(t,e,n),nt(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$y(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),$y(t,n)}var by;by=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||et.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,tS(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,re&&e.flags&1048576&&Vg(e,pa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ko(t,e),t=e.pendingProps;var i=Gr(e,Be.current);zr(e,n),i=zh(null,e,r,t,i,n);var s=Bh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tt(r)?(s=!0,da(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$h(e),i.updater=nl,e.stateNode=i,i._reactInternals=e,yc(e,r,t,n),e=Ec(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Dh(e),We(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ko(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gS(r),t=Et(r,t),i){case 0:e=wc(null,e,r,t,n);break e;case 1:e=ap(null,e,r,t,n);break e;case 11:e=sp(null,e,r,t,n);break e;case 14:e=op(null,e,r,Et(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),wc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),ap(t,e,r,i,n);case 3:e:{if(Ey(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Hg(t,e),ya(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Jr(Error(S(423)),e),e=lp(t,e,r,n,i);break e}else if(r!==i){i=Jr(Error(S(424)),e),e=lp(t,e,r,n,i);break e}else for(it=En(e.stateNode.containerInfo.firstChild),ot=e,re=!0,kt=null,n=Gg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){e=Xt(t,e,n);break e}We(t,e,r,n)}e=e.child}return e;case 5:return Qg(e),t===null&&pc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uc(r,i)?o=null:s!==null&&uc(r,s)&&(e.flags|=32),wy(t,e),We(t,e,o,n),e.child;case 6:return t===null&&pc(e),null;case 13:return Sy(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),sp(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(ma,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!et.current){e=Xt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zr(e,n),i=gt(i),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return r=e.type,i=Et(r,e.pendingProps),i=Et(r.type,i),op(t,e,r,i,n);case 15:return yy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),Ko(t,e),e.tag=1,tt(r)?(t=!0,da(e)):t=!1,zr(e,n),Wg(e,r,i),yc(e,r,i,n),Ec(null,e,r,!0,t,n);case 19:return ky(t,e,n);case 22:return vy(t,e,n)}throw Error(S(156,e.tag))};function Uy(t,e){return cg(t,e)}function mS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new mS(t,e,n,r)}function Jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gS(t){if(typeof t=="function")return Jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yh)return 11;if(t===vh)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Go(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return Zn(n.children,i,s,e);case gh:o=8,i|=8;break;case zu:return t=pt(12,n,e,i|2),t.elementType=zu,t.lanes=s,t;case Bu:return t=pt(13,n,e,i),t.elementType=Bu,t.lanes=s,t;case ju:return t=pt(19,n,e,i),t.elementType=ju,t.lanes=s,t;case qm:return ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Km:o=10;break e;case Wm:o=9;break e;case yh:o=11;break e;case vh:o=14;break e;case an:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zn(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function ol(t,e,n,r){return t=pt(22,t,r,e),t.elementType=qm,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zh(t,e,n,r,i,s,o,a,l){return t=new yS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(s),t}function vS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fy(t){if(!t)return Rn;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(tt(n))return Ug(t,n,e)}return e}function Vy(t,e,n,r,i,s,o,a,l){return t=Zh(n,r,!0,t,i,s,o,a,l),t.context=Fy(null),n=t.current,r=Ge(),i=_n(n),s=Wt(r,i),s.callback=e??null,Sn(n,s,i),t.current.lanes=i,Os(t,i,r),nt(t,r),t}function al(t,e,n,r){var i=e.current,s=Ge(),o=_n(i);return n=Fy(n),e.context===null?e.context=n:e.pendingContext=n,e=Wt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sn(i,e,o),t!==null&&(It(t,i,o,s),Bo(t,i,o)),o}function Ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ed(t,e){vp(t,e),(t=t.alternate)&&vp(t,e)}function wS(){return null}var zy=typeof reportError=="function"?reportError:function(t){console.error(t)};function td(t){this._internalRoot=t}ll.prototype.render=td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));al(t,e,null,null)};ll.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){al(null,t,null,null)}),e[Gt]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&wg(t)}};function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function ES(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ta(o);s.call(u)}}var o=Vy(e,r,t,0,null,!1,!1,"",wp);return t._reactRootContainer=o,t[Gt]=o.current,ls(t.nodeType===8?t.parentNode:t),ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ta(l);a.call(u)}}var l=Zh(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=l,t[Gt]=l.current,ls(t.nodeType===8?t.parentNode:t),ar(function(){al(e,l,n,r)}),l}function cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ta(o);a.call(l)}}al(e,o,t,i)}else o=ES(n,e,t,i,r);return Ta(o)}mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pi(e.pendingLanes);n!==0&&(Sh(e,n|1),nt(e,de()),!(q&6)&&(Zr=de()+500,bn()))}break;case 13:ar(function(){var r=Qt(t,1);if(r!==null){var i=Ge();It(r,t,1,i)}}),ed(t,1)}};kh=function(t){if(t.tag===13){var e=Qt(t,134217728);if(e!==null){var n=Ge();It(e,t,134217728,n)}ed(t,134217728)}};gg=function(t){if(t.tag===13){var e=_n(t),n=Qt(t,e);if(n!==null){var r=Ge();It(n,t,e,r)}ed(t,e)}};yg=function(){return X};vg=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};Zu=function(t,e,n){switch(e){case"input":if(Wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=el(r);if(!i)throw Error(S(90));Qm(r),Wu(r,i)}}}break;case"textarea":Ym(t,n);break;case"select":e=n.value,e!=null&&br(t,!!n.multiple,e,!1)}};ig=Qh;sg=ar;var SS={usingClientEntryPoint:!1,Events:[$s,Ar,el,ng,rg,Qh]},Ni={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kS={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||wS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Xa=Ao.inject(kS),Pt=Ao}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(e))throw Error(S(200));return vS(t,e,null,n)};ct.createRoot=function(t,e){if(!nd(t))throw Error(S(299));var n=!1,r="",i=zy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zh(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,ls(t.nodeType===8?t.parentNode:t),new td(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=lg(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return ar(t)};ct.hydrate=function(t,e,n){if(!ul(e))throw Error(S(200));return cl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!nd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vy(e,null,t,1,n??null,i,!1,s,o),t[Gt]=e.current,ls(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ll(e)};ct.render=function(t,e,n){if(!ul(e))throw Error(S(200));return cl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!ul(t))throw Error(S(40));return t._reactRootContainer?(ar(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};ct.unstable_batchedUpdates=Qh;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ul(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return cl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ct})(ww);var By,Ep=Uu;By=Ep.createRoot,Ep.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_S=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_S(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new IS;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TS=function(t){const e=jy(t);return Hy.encodeByteArray(e,!0)},Ca=function(t){return TS(t).replace(/\./g,"")},Ky=function(t){try{return Hy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=()=>CS().__FIREBASE_DEFAULTS__,AS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ky(t[1]);return e&&JSON.parse(e)},rd=()=>{try{return NS()||AS()||DS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wy=t=>{var e,n;return(n=(e=rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RS=t=>{const e=Wy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},PS=()=>{var t;return(t=rd())===null||t===void 0?void 0:t.config},qy=t=>{var e;return(e=rd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ca(JSON.stringify(n)),Ca(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function MS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $S(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bS(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function US(){try{return typeof indexedDB=="object"}catch{return!1}}function FS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VS,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rn(i,a,r)}}function zS(t,e){return t.replace(BS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BS=/\{\$([^}]+)}/g;function jS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sp(s)&&Sp(o)){if(!Na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function HS(t,e){const n=new KS(t,e);return n.subscribe.bind(n)}class KS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Eu),i.error===void 0&&(i.error=Eu),i.complete===void 0&&(i.complete=Eu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QS(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GS(t){return t===Kn?void 0:t}function QS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const YS={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},JS=G.INFO,ZS={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=JS,this._logHandler=ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const tk=(t,e)=>e.some(n=>t instanceof n);let kp,_p;function nk(){return kp||(kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rk(){return _p||(_p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gy=new WeakMap,xc=new WeakMap,Qy=new WeakMap,Su=new WeakMap,sd=new WeakMap;function ik(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gy.set(n,t)}).catch(()=>{}),sd.set(e,t),e}function sk(t){if(xc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xc.set(t,e)}let Lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ok(t){Lc=t(Lc)}function ak(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ku(this),e,...n);return Qy.set(r,e.sort?e.sort():[e]),Tn(r)}:rk().includes(t)?function(...e){return t.apply(ku(this),e),Tn(Gy.get(this))}:function(...e){return Tn(t.apply(ku(this),e))}}function lk(t){return typeof t=="function"?ak(t):(t instanceof IDBTransaction&&sk(t),tk(t,nk())?new Proxy(t,Lc):t)}function Tn(t){if(t instanceof IDBRequest)return ik(t);if(Su.has(t))return Su.get(t);const e=lk(t);return e!==t&&(Su.set(t,e),sd.set(e,t)),e}const ku=t=>sd.get(t);function uk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ck=["get","getKey","getAll","getAllKeys","count"],hk=["put","add","delete","clear"],_u=new Map;function Ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_u.get(e))return _u.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ck.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _u.set(e,s),s}ok(t=>({...t,get:(e,n,r)=>Ip(e,n)||t.get(e,n,r),has:(e,n)=>!!Ip(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oc="@firebase/app",Tp="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new id("@firebase/app"),pk="@firebase/app-compat",mk="@firebase/analytics-compat",gk="@firebase/analytics",yk="@firebase/app-check-compat",vk="@firebase/app-check",wk="@firebase/auth",Ek="@firebase/auth-compat",Sk="@firebase/database",kk="@firebase/database-compat",_k="@firebase/functions",Ik="@firebase/functions-compat",Tk="@firebase/installations",Ck="@firebase/installations-compat",Nk="@firebase/messaging",Ak="@firebase/messaging-compat",Dk="@firebase/performance",Rk="@firebase/performance-compat",Pk="@firebase/remote-config",xk="@firebase/remote-config-compat",Lk="@firebase/storage",Ok="@firebase/storage-compat",Mk="@firebase/firestore",$k="@firebase/firestore-compat",bk="firebase",Uk="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="[DEFAULT]",Fk={[Oc]:"fire-core",[pk]:"fire-core-compat",[gk]:"fire-analytics",[mk]:"fire-analytics-compat",[vk]:"fire-app-check",[yk]:"fire-app-check-compat",[wk]:"fire-auth",[Ek]:"fire-auth-compat",[Sk]:"fire-rtdb",[kk]:"fire-rtdb-compat",[_k]:"fire-fn",[Ik]:"fire-fn-compat",[Tk]:"fire-iid",[Ck]:"fire-iid-compat",[Nk]:"fire-fcm",[Ak]:"fire-fcm-compat",[Dk]:"fire-perf",[Rk]:"fire-perf-compat",[Pk]:"fire-rc",[xk]:"fire-rc-compat",[Lk]:"fire-gcs",[Ok]:"fire-gcs-compat",[Mk]:"fire-fst",[$k]:"fire-fst-compat","fire-js":"fire-js",[bk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Map,$c=new Map;function Vk(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if($c.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;$c.set(e,t);for(const n of Aa.values())Vk(n,t);return!0}function od(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new Us("app","Firebase",zk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=Uk;function Xy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=PS()),!n)throw Cn.create("no-options");const s=Aa.get(i);if(s){if(Na(n,s.options)&&Na(r,s.config))return s;throw Cn.create("duplicate-app",{appName:i})}const o=new XS(i);for(const l of $c.values())o.addComponent(l);const a=new Bk(n,r,o);return Aa.set(i,a),a}function Yy(t=Mc){const e=Aa.get(t);if(!e&&t===Mc)return Xy();if(!e)throw Cn.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=Fk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(a.join(" "));return}ei(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="firebase-heartbeat-database",Hk=1,ys="firebase-heartbeat-store";let Iu=null;function Jy(){return Iu||(Iu=uk(jk,Hk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),Iu}async function Kk(t){try{return(await Jy()).transaction(ys).objectStore(ys).get(Zy(t))}catch(e){if(e instanceof rn)ur.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function Cp(t,e){try{const r=(await Jy()).transaction(ys,"readwrite");return await r.objectStore(ys).put(e,Zy(t)),r.done}catch(n){if(n instanceof rn)ur.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function Zy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=1024,qk=30*24*60*60*1e3;class Gk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Np();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Np(),{heartbeatsToSend:n,unsentEntries:r}=Qk(this._heartbeatsCache.heartbeats),i=Ca(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Np(){return new Date().toISOString().substring(0,10)}function Qk(t,e=Wk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ap(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ap(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return US()?FS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ap(t){return Ca(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){ei(new lr("platform-logger",e=>new dk(e),"PRIVATE")),ei(new lr("heartbeat",e=>new Gk(e),"PRIVATE")),Nn(Oc,Tp,t),Nn(Oc,Tp,"esm2017"),Nn("fire-js","")}Yk("");var Jk="firebase",Zk="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(Jk,Zk,"app");function ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ev(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e_=ev,tv=new Us("auth","Firebase",ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new id("@firebase/auth");function Qo(t,...e){Dp.logLevel<=G.ERROR&&Dp.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw ld(t,...e)}function Lt(t,...e){return ld(t,...e)}function t_(t,e,n){const r=Object.assign(Object.assign({},e_()),{[e]:n});return new Us("auth","Firebase",r).create(e,{appName:t.name})}function ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tv.create(t,...e)}function $(t,e,...n){if(!t)throw ld(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Yt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Map;function Ht(t){Yt(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t,e){const n=od(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Na(s,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function r_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function i_(){return Pp()==="http:"||Pp()==="https:"}function Pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i_()||MS()||"connection"in navigator)?navigator.onLine:!0}function o_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=OS()||$S()}get(){return s_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new zs(3e4,6e4);function Bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function js(t,e,n,r,i={}){return rv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nv.fetch()(iv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},a_),e);try{const i=new u_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Do(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Do(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Do(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Do(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw t_(t,c,u);Ct(t,c)}}catch(i){if(i instanceof rn)throw i;Ct(t,"internal-error",{message:String(i)})}}async function Hs(t,e,n,r,i={}){const s=await js(t,e,n,r,i);return"mfaPendingCredential"in s&&Ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,i):`${t.config.apiScheme}://${i}`}class u_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),l_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Do(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t,e){return js(t,"POST","/v1/accounts:delete",e)}async function h_(t,e){return js(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d_(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=cd(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qi(Tu(i.auth_time)),issuedAtTime:qi(Tu(i.iat)),expirationTime:qi(Tu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tu(t){return Number(t)*1e3}function cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ky(n);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function f_(t){const e=cd(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&p_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function p_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vs(t,h_(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?v_(s.providerUserInfo):[],a=y_(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function g_(t){const e=He(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function v_(t){return t.map(e=>{var{providerId:n}=e,r=ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e){const n=await rv(t,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await w_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d_(this,e)}reload(){return g_(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Da(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,c_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:I,providerData:N,stsTokenManager:D}=n;$(m&&D,e,"internal-error");const P=ws.fromJSON(this.name,D);$(typeof m=="string",e,"internal-error"),on(h,e.name),on(d,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof I=="boolean",e,"internal-error"),on(y,e.name),on(v,e.name),on(w,e.name),on(C,e.name),on(p,e.name),on(f,e.name);const Z=new er({uid:m,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:I,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:P,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(Z.providerData=N.map(j=>Object.assign({},j))),C&&(Z._redirectEventId=C),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Da(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ov.type="NONE";const xp=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(Ht(xp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ht(xp);const o=Xo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=er._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(av(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hv(e))return"Blackberry";if(dv(e))return"Webos";if(hd(e))return"Safari";if((e.includes("chrome/")||lv(e))&&!e.includes("edge/"))return"Chrome";if(cv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function av(t=je()){return/firefox\//i.test(t)}function hd(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lv(t=je()){return/crios\//i.test(t)}function uv(t=je()){return/iemobile/i.test(t)}function cv(t=je()){return/android/i.test(t)}function hv(t=je()){return/blackberry/i.test(t)}function dv(t=je()){return/webos/i.test(t)}function hl(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function E_(t=je()){var e;return hl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S_(){return bS()&&document.documentMode===10}function fv(t=je()){return hl(t)||cv(t)||dv(t)||hv(t)||/windows phone/i.test(t)||uv(t)}function k_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e=[]){let n;switch(t){case"Browser":n=Lp(je());break;case"Worker":n=`${Lp(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Op(this),this.idTokenSubscription=new Op(this),this.beforeStateQueue=new __(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ks(t){return He(t)}class Op{constructor(e){this.auth=e,this.observer=null,this.addObserver=HS(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function T_(t,e,n){const r=Ks(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mv(e),{host:o,port:a}=C_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||N_()}function mv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C_(t){const e=mv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mp(o)}}}function Mp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function A_(t,e){return js(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t,e){return Hs(t,"POST","/v1/accounts:signInWithPassword",Bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e){return Hs(t,"POST","/v1/accounts:signInWithEmailLink",Bs(t,e))}async function P_(t,e){return Hs(t,"POST","/v1/accounts:signInWithEmailLink",Bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends dd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Es(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Es(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return D_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return R_(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return A_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return P_(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return Hs(t,"POST","/v1/accounts:signInWithIdp",Bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="http://localhost";class cr extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ad(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:x_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function O_(t){const e=Li(Oi(t)).link,n=e?Li(Oi(e)).deep_link_id:null,r=Li(Oi(t)).deep_link_id;return(r?Li(Oi(r)).link:null)||r||n||e||t}class fd{constructor(e){var n,r,i,s,o,a;const l=Li(Oi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=L_((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=O_(e);try{return new fd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return Es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fd.parseLink(n);return $(r,"argument-error"),Es._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ws{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ws{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ws{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(t,e){return Hs(t,"POST","/v1/accounts:signUp",Bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await er._fromIdTokenResponse(e,r,i),o=$p(r);return new hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$p(r);return new hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $p(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ra(e,n,r,i)}}function yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,s,e,r):s})}async function $_(t,e,n=!1){const r=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await vs(t,yv(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=cd(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t,e,n=!1){const r="signIn",i=await yv(t,r,e),s=await hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function U_(t,e){return vv(Ks(t),e)}async function F_(t,e,n){const r=Ks(t),i=await M_(r,{returnSecureToken:!0,email:e,password:n}),s=await hr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function V_(t,e,n){return U_(He(t),di.credential(e,n))}function z_(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function B_(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function j_(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function wv(t){return He(t).signOut()}const Pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pa,"1"),this.storage.removeItem(Pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){const t=je();return hd(t)||hl(t)}const K_=1e3,W_=10;class Sv extends Ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H_()&&k_(),this.fallbackToPolling=fv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);S_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,W_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sv.type="LOCAL";const q_=Sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends Ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kv.type="SESSION";const _v=kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await G_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=pd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function X_(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function Y_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z_(){return Iv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="firebaseLocalStorageDb",eI=1,xa="firebaseLocalStorage",Cv="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fl(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function tI(){const t=indexedDB.deleteDatabase(Tv);return new qs(t).toPromise()}function Uc(){const t=indexedDB.open(Tv,eI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xa,{keyPath:Cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xa)?e(r):(r.close(),await tI(),e(await Uc()))})})}async function bp(t,e,n){const r=fl(t,!0).put({[Cv]:e,value:n});return new qs(r).toPromise()}async function nI(t,e){const n=fl(t,!1).get(e),r=await new qs(n).toPromise();return r===void 0?null:r.value}function Up(t,e){const n=fl(t,!0).delete(e);return new qs(n).toPromise()}const rI=800,iI=3;class Nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dl._getInstance(Z_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Y_(),!this.activeServiceWorker)return;this.sender=new Q_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uc();return await bp(e,Pa,"1"),await Up(e,Pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Up(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fl(i,!1).getAll();return new qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nv.type="LOCAL";const sI=Nv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function aI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oI().appendChild(r)})}function lI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){return e?Ht(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cI(t){return vv(t.auth,new md(t),t.bypassAuthState)}function hI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),b_(n,new md(t),t.bypassAuthState)}async function dI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),$_(n,new md(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:Ct(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=new zs(2e3,1e4);class Mr extends Av{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,fI.get())};e()}}Mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="pendingRedirect",Yo=new Map;class mI extends Av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await gI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gI(t,e){const n=wI(e),r=vI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yI(t,e){Yo.set(t._key(),e)}function vI(t){return Ht(t._redirectPersistence)}function wI(t){return Xo(pI,t.config.apiKey,t.name)}async function EI(t,e,n=!1){const r=Ks(t),i=uI(r,e),o=await new mI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=10*60*1e3;class kI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_I(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fp(e))}saveEventToCache(e){this.cachedEventUids.add(Fp(e)),this.lastProcessedEventTime=Date.now()}}function Fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _I(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t,e={}){return js(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CI=/^https?/;async function NI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await II(t);for(const n of e)try{if(AI(n))return}catch{}Ct(t,"unauthorized-domain")}function AI(t){const e=bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CI.test(n))return!1;if(TI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new zs(3e4,6e4);function Vp(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RI(t){return new Promise((e,n)=>{var r,i,s;function o(){Vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(Lt(t,"network-request-failed"))},timeout:DI.get()})}if(!((i=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ot().gapi)===null||s===void 0)&&s.load)o();else{const a=lI("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},aI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function PI(t){return Jo=Jo||RI(t),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new zs(5e3,15e3),LI="__/auth/iframe",OI="emulator/auth/iframe",MI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bI(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,OI):`https://${t.config.authDomain}/${LI}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=$I.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function UI(t){const e=await PI(t),n=Ot().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:bI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ot().setTimeout(()=>{s(o)},xI.get());function l(){Ot().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VI=500,zI=600,BI="_blank",jI="http://localhost";class zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HI(t,e,n,r=VI,i=zI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();n&&(a=lv(u)?BI:n),av(u)&&(e=e||jI,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,v])=>`${d}${y}=${v},`,"");if(E_(u)&&a!=="_self")return KI(e||"",a),new zp(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new zp(h)}function KI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="__/auth/handler",qI="emulator/auth/handler";function Bp(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof gv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ws){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${GI(t)}?${Fs(a).slice(1)}`}function GI({config:t}){return t.emulator?ud(t,qI):`https://${t.authDomain}/${WI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="webStorageSupport";class QI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_v,this._completeRedirectFn=EI,this._overrideRedirectResult=yI}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Bp(e,n,r,bc(),i);return HI(e,o,pd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),X_(Bp(e,n,r,bc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UI(e),r=new kI(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cu,{type:Cu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cu];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fv()||hd()||hl()}}const XI=QI;var jp="@firebase/auth",Hp="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZI(t){ei(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{$(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pv(t)},c=new I_(a,l,u);return r_(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new lr("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(r=>new YI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(jp,Hp,JI(t)),Nn(jp,Hp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=5*60,tT=qy("authIdTokenMaxAge")||eT;let Kp=null;const nT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tT)return;const i=n==null?void 0:n.token;Kp!==i&&(Kp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rT(t=Yy()){const e=od(t,"auth");if(e.isInitialized())return e.getImmediate();const n=n_(t,{popupRedirectResolver:XI,persistence:[sI,q_,_v]}),r=qy("authTokenSyncURL");if(r){const s=nT(r);B_(n,s,()=>s(n.currentUser)),z_(n,o=>s(o))}const i=Wy("auth");return i&&T_(n,`http://${i}`),n}ZI("Browser");var iT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,gd=gd||{},b=iT||self;function La(){}function pl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Gs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sT(t){return Object.prototype.hasOwnProperty.call(t,Nu)&&t[Nu]||(t[Nu]=++oT)}var Nu="closure_uid_"+(1e9*Math.random()>>>0),oT=0;function aT(t,e,n){return t.call.apply(t.bind,arguments)}function lT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=aT:Ve=lT,Ve.apply(null,arguments)}function Ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Un(){this.s=this.s,this.o=this.o}var uT=0;Un.prototype.s=!1;Un.prototype.na=function(){!this.s&&(this.s=!0,this.M(),uT!=0)&&sT(this)};Un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(pl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var cT=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",La,e),b.removeEventListener("test",La,e)}catch{}return t}();function Oa(t){return/^[\s\xa0]*$/.test(t)}var qp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Au(t,e){return t<e?-1:t>e?1:0}function ml(){var t=b.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return ml().indexOf(t)!=-1}function vd(t){return vd[" "](t),t}vd[" "]=La;function hT(t){var e=pT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var dT=Rt("Opera"),ti=Rt("Trident")||Rt("MSIE"),Pv=Rt("Edge"),Fc=Pv||ti,xv=Rt("Gecko")&&!(ml().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),fT=ml().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function Lv(){var t=b.document;return t?t.documentMode:void 0}var Ma;e:{var Du="",Ru=function(){var t=ml();if(xv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Pv)return/Edge\/([\d\.]+)/.exec(t);if(ti)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fT)return/WebKit\/(\S+)/.exec(t);if(dT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ru&&(Du=Ru?Ru[1]:""),ti){var Pu=Lv();if(Pu!=null&&Pu>parseFloat(Du)){Ma=String(Pu);break e}}Ma=Du}var pT={};function mT(){return hT(function(){let t=0;const e=qp(String(Ma)).split("."),n=qp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Au(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Au(i[2].length==0,s[2].length==0)||Au(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Vc;if(b.document&&ti){var Gp=Lv();Vc=Gp||parseInt(Ma,10)||void 0}else Vc=void 0;var gT=Vc;function Ss(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xv){e:{try{vd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ss.X.h.call(this)}}xe(Ss,ze);var yT={2:"touch",3:"pen",4:"mouse"};Ss.prototype.h=function(){Ss.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qs="closure_listenable_"+(1e6*Math.random()|0),vT=0;function wT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++vT,this.ba=this.ea=!1}function gl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function wd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ov(t){const e={};for(const n in t)e[n]=t[n];return e}const Qp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Qp.length;s++)n=Qp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function yl(t){this.src=t,this.g={},this.h=0}yl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Bc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new wT(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function zc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Rv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Ed="closure_lm_"+(1e6*Math.random()|0),xu={};function $v(t,e,n,r,i){if(r&&r.once)return Uv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$v(t,e[s],n,r,i);return null}return n=_d(n),t&&t[Qs]?t.N(e,n,Gs(r)?!!r.capture:!!r,i):bv(t,e,n,!1,r,i)}function bv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Gs(i)?!!i.capture:!!i,a=kd(t);if(a||(t[Ed]=a=new yl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ET(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Vv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ET(){function t(n){return e.call(t.src,t.listener,n)}const e=ST;return t}function Uv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Uv(t,e[s],n,r,i);return null}return n=_d(n),t&&t[Qs]?t.O(e,n,Gs(r)?!!r.capture:!!r,i):bv(t,e,n,!0,r,i)}function Fv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fv(t,e[s],n,r,i);else r=Gs(r)?!!r.capture:!!r,n=_d(n),t&&t[Qs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Bc(s,n,r,i),-1<n&&(gl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=kd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bc(e,n,r,i)),(n=-1<t?e[t]:null)&&Sd(n))}function Sd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Qs])zc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kd(e))?(zc(n,t),n.h==0&&(n.src=null,e[Ed]=null)):gl(t)}}}function Vv(t){return t in xu?xu[t]:xu[t]="on"+t}function ST(t,e){if(t.ba)t=!0;else{e=new Ss(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Sd(t),t=n.call(r,e)}return t}function kd(t){return t=t[Ed],t instanceof yl?t:null}var Lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function _d(t){return typeof t=="function"?t:(t[Lu]||(t[Lu]=function(e){return t.handleEvent(e)}),t[Lu])}function Ce(){Un.call(this),this.i=new yl(this),this.P=this,this.I=null}xe(Ce,Un);Ce.prototype[Qs]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){Fv(this,t,e,n,r)};function Re(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),Mv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Po(o,r,!0,e)&&i}if(o=e.g=t,i=Po(o,r,!0,e)&&i,i=Po(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Po(o,r,!1,e)&&i}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gl(n[r]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Po(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&zc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Id=b.JSON.stringify;function kT(){var t=jv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _T{constructor(){this.h=this.g=null}add(e,n){const r=zv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new IT,t=>t.reset());class IT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TT(t){b.setTimeout(()=>{throw t},0)}function Bv(t,e){jc||CT(),Hc||(jc(),Hc=!0),jv.add(t,e)}var jc;function CT(){var t=b.Promise.resolve(void 0);jc=function(){t.then(NT)}}var Hc=!1,jv=new _T;function NT(){for(var t;t=kT();){try{t.h.call(t.g)}catch(n){TT(n)}var e=zv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hc=!1}function vl(t,e){Ce.call(this),this.h=t||1,this.g=e||b,this.j=Ve(this.lb,this),this.l=Date.now()}xe(vl,Ce);R=vl.prototype;R.ca=!1;R.R=null;R.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Re(this,"tick"),this.ca&&(Td(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Td(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}R.M=function(){vl.X.M.call(this),Td(this),delete this.g};function Cd(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function Hv(t){t.g=Cd(()=>{t.g=null,t.i&&(t.i=!1,Hv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AT extends Un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hv(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(t){Un.call(this),this.h=t,this.g={}}xe(ks,Un);var Xp=[];function Kv(t,e,n,r){Array.isArray(n)||(n&&(Xp[0]=n.toString()),n=Xp);for(var i=0;i<n.length;i++){var s=$v(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Wv(t){wd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sd(e)},t),t.g={}}ks.prototype.M=function(){ks.X.M.call(this),Wv(this)};ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wl(){this.g=!0}wl.prototype.Aa=function(){this.g=!1};function DT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function $r(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xT(t,n)+(r?" "+r:"")})}function PT(t,e){t.info(function(){return"TIMEOUT: "+e})}wl.prototype.info=function(){};function xT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Id(n)}catch{return e}}var yr={},Yp=null;function El(){return Yp=Yp||new Ce}yr.Pa="serverreachability";function qv(t){ze.call(this,yr.Pa,t)}xe(qv,ze);function _s(t){const e=El();Re(e,new qv(e))}yr.STAT_EVENT="statevent";function Gv(t,e){ze.call(this,yr.STAT_EVENT,t),this.stat=e}xe(Gv,ze);function qe(t){const e=El();Re(e,new Gv(e,t))}yr.Qa="timingevent";function Qv(t,e){ze.call(this,yr.Qa,t),this.size=e}xe(Qv,ze);function Xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var Sl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Nd(){}Nd.prototype.h=null;function Jp(t){return t.h||(t.h=t.i())}function Yv(){}var Ys={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ad(){ze.call(this,"d")}xe(Ad,ze);function Dd(){ze.call(this,"c")}xe(Dd,ze);var Kc;function kl(){}xe(kl,Nd);kl.prototype.g=function(){return new XMLHttpRequest};kl.prototype.i=function(){return{}};Kc=new kl;function Js(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ks(this),this.O=LT,t=Fc?125:void 0,this.T=new vl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jv}function Jv(){this.i=null,this.g="",this.h=!1}var LT=45e3,Wc={},$a={};R=Js.prototype;R.setTimeout=function(t){this.O=t};function qc(t,e,n){t.K=1,t.v=Il(Jt(e)),t.s=n,t.P=!0,Zv(t,null)}function Zv(t,e){t.F=Date.now(),Zs(t),t.A=Jt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),a0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Jv,t.g=A0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new AT(Ve(t.La,t,t.g),t.N)),Kv(t.S,t.g,"readystatechange",t.ib),e=t.H?Ov(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_s(),DT(t.j,t.u,t.A,t.m,t.U,t.s)}R.ib=function(t){t=t.target;const e=this.L;e&&Kt(t)==3?e.l():this.La(t)};R.La=function(t){try{if(t==this.g)e:{const c=Kt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Fc||this.g&&(this.h.h||this.g.fa()||nm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?_s(3):_s(2)),_l(this);var n=this.g.aa();this.Y=n;t:if(e0(this)){var r=nm(this.g);t="";var i=r.length,s=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),Gi(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,RT(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oa(a)){var u=a;break t}}u=null}if(n=u)$r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gc(this,n);else{this.i=!1,this.o=3,qe(12),Qn(this),Gi(this);break e}}this.P?(t0(this,c,o),Fc&&this.i&&c==3&&(Kv(this.S,this.T,"tick",this.hb),this.T.start())):($r(this.j,this.m,o,null),Gc(this,o)),c==4&&Qn(this),this.i&&!this.I&&(c==4?I0(this.l,this):(this.i=!1,Zs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),Qn(this),Gi(this)}}}catch{}finally{}};function e0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function t0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=OT(t,n),i==$a){e==4&&(t.o=4,qe(14),r=!1),$r(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Wc){t.o=4,qe(15),$r(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $r(t.j,t.m,i,null),Gc(t,i);e0(t)&&i!=$a&&i!=Wc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),$d(e),e.K=!0,qe(11))):($r(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Gi(t))}R.hb=function(){if(this.g){var t=Kt(this.g),e=this.g.fa();this.C<e.length&&(_l(this),t0(this,t,e),this.i&&t!=4&&Zs(this))}};function OT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$a:(n=Number(e.substring(n,r)),isNaN(n)?Wc:(r+=1,r+n>e.length?$a:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,Qn(this)};function Zs(t){t.V=Date.now()+t.O,n0(t,t.O)}function n0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xs(Ve(t.gb,t),e)}function _l(t){t.B&&(b.clearTimeout(t.B),t.B=null)}R.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(PT(this.j,this.A),this.K!=2&&(_s(),qe(17)),Qn(this),this.o=2,Gi(this)):n0(this,this.V-t)};function Gi(t){t.l.G==0||t.I||I0(t.l,t)}function Qn(t){_l(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Td(t.T),Wv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qc(n.h,t))){if(!t.J&&Qc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fa(n),Nl(n);else break e;Md(n),qe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xs(Ve(n.cb,n),6e3));if(1>=c0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&Fa(n),!Oa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rd(s,s.h),s.h=null))}if(r.D){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,ie(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=N0(r,r.H?r.ka:null,r.V),o.J){h0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(_l(a),Zs(a)),r.g=o}else k0(r);0<n.i.length&&Al(n)}else u[0]!="stop"&&u[0]!="close"||Xn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xn(n,7):Od(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}_s(4)}catch{}}function MT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $T(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function r0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$T(t),r=MT(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var i0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function tr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof tr){this.h=e!==void 0?e:t.h,ba(this,t.j),this.s=t.s,this.g=t.g,Ua(this,t.m),this.l=t.l,e=t.i;var n=new Is;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zp(this,n),this.o=t.o}else t&&(n=String(t).match(i0))?(this.h=!!e,ba(this,n[1]||"",!0),this.s=Mi(n[2]||""),this.g=Mi(n[3]||"",!0),Ua(this,n[4]),this.l=Mi(n[5]||"",!0),Zp(this,n[6]||"",!0),this.o=Mi(n[7]||"")):(this.h=!!e,this.i=new Is(null,this.h))}tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push($i(e,em,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($i(e,em,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($i(n,n.charAt(0)=="/"?VT:FT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$i(n,BT)),t.join("")};function Jt(t){return new tr(t)}function ba(t,e,n){t.j=n?Mi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ua(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zp(t,e,n){e instanceof Is?(t.i=e,jT(t.i,t.h)):(n||(e=$i(e,zT)),t.i=new Is(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function Il(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Mi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $i(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,UT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function UT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var em=/[#\/\?@]/g,FT=/[#\?:]/g,VT=/[#\?]/g,zT=/[#\?@]/g,BT=/#/g;function Is(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new Map,t.h=0,t.i&&bT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Is.prototype;R.add=function(t,e){Fn(this),this.i=null,t=fi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function s0(t,e){Fn(t),e=fi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function o0(t,e){return Fn(t),e=fi(t,e),t.g.has(e)}R.forEach=function(t,e){Fn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.oa=function(){Fn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.W=function(t){Fn(this);let e=[];if(typeof t=="string")o0(this,t)&&(e=e.concat(this.g.get(fi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Fn(this),this.i=null,t=fi(this,t),o0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function a0(t,e,n){s0(t,e),0<n.length&&(t.i=null,t.g.set(fi(t,e),yd(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function fi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jT(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(s0(this,r),a0(this,i,n))},t)),t.j=e}var HT=class{constructor(e,n){this.h=e,this.g=n}};function l0(t){this.l=t||KT,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ga&&b.g.Ga()&&b.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KT=10;function u0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function c0(t){return t.h?1:t.g?t.g.size:0}function Qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rd(t,e){t.g?t.g.add(e):t.h=e}function h0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}l0.prototype.cancel=function(){if(this.i=d0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function d0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yd(t.i)}function Pd(){}Pd.prototype.stringify=function(t){return b.JSON.stringify(t,void 0)};Pd.prototype.parse=function(t){return b.JSON.parse(t,void 0)};function WT(){this.g=new Pd}function qT(t,e,n){const r=n||"";try{r0(t,function(i,s){let o=i;Gs(i)&&(o=Id(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function GT(t,e){const n=new wl;if(b.Image){const r=new Image;r.onload=Ro(xo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ro(xo,n,r,"TestLoadImage: error",!1,e),r.onabort=Ro(xo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ro(xo,n,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function eo(t){this.l=t.ac||null,this.j=t.jb||!1}xe(eo,Nd);eo.prototype.g=function(){return new Tl(this.l,this.j)};eo.prototype.i=function(t){return function(){return t}}({});function Tl(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(Tl,Ce);var xd=0;R=Tl.prototype;R.open=function(t,e){if(this.readyState!=xd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ts(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||b).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=xd};R.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;f0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function f0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}R.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?to(this):Ts(this),this.readyState==3&&f0(this)}};R.Va=function(t){this.g&&(this.response=this.responseText=t,to(this))};R.Ua=function(t){this.g&&(this.response=t,to(this))};R.ga=function(){this.g&&to(this)};function to(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ts(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QT=b.JSON.parse;function ce(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=p0,this.K=this.L=!1}xe(ce,Ce);var p0="",XT=/^https?$/i,YT=["POST","PUT"];R=ce.prototype;R.Ka=function(t){this.L=t};R.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kc.g(),this.C=this.u?Jp(this.u):Jp(Kc),this.g.onreadystatechange=Ve(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){tm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&t instanceof b.FormData,!(0<=Rv(YT,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{y0(this),0<this.B&&((this.K=JT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.qa,this)):this.A=Cd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){tm(this,s)}};function JT(t){return ti&&mT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.qa=function(){typeof gd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function tm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,m0(t),Cl(t)}function m0(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),Cl(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cl(this,!0)),ce.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?g0(this):this.fb())};R.fb=function(){g0(this)};function g0(t){if(t.h&&typeof gd<"u"&&(!t.C[1]||Kt(t)!=4||t.aa()!=2)){if(t.v&&Kt(t)==4)Cd(t.Ha,0,t);else if(Re(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(i0)[1]||null;if(!i&&b.self&&b.self.location){var s=b.self.location.protocol;i=s.substr(0,s.length-1)}r=!XT.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<Kt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",m0(t)}}finally{Cl(t)}}}}function Cl(t,e){if(t.g){y0(t);const n=t.g,r=t.C[0]?La:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function y0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}function Kt(t){return t.g?t.g.readyState:0}R.aa=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QT(e)}};function nm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case p0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function v0(t){let e="";return wd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ld(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=v0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function Ai(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function w0(t){this.Ca=0,this.i=[],this.j=new wl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ai("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ai("baseRetryDelayMs",5e3,t),this.bb=Ai("retryDelaySeedMs",1e4,t),this.$a=Ai("forwardChannelMaxRetries",2,t),this.ta=Ai("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new l0(t&&t.concurrentRequestLimit),this.Fa=new WT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=w0.prototype;R.ma=8;R.G=1;function Od(t){if(E0(t),t.G==3){var e=t.U++,n=Jt(t.F);ie(n,"SID",t.I),ie(n,"RID",e),ie(n,"TYPE","terminate"),no(t,n),e=new Js(t,t.j,e,void 0),e.K=2,e.v=Il(Jt(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(e.v.toString(),"")),!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=A0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Zs(e)}C0(t)}function Nl(t){t.g&&($d(t),t.g.cancel(),t.g=null)}function E0(t){Nl(t),t.u&&(b.clearTimeout(t.u),t.u=null),Fa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function Al(t){u0(t.h)||t.m||(t.m=!0,Bv(t.Ja,t),t.C=0)}function ZT(t,e){return c0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xs(Ve(t.Ja,t,e),T0(t,t.C)),t.C++,!0)}R.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Js(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Ov(s),Mv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=S0(this,i,e),n=Jt(this.F),ie(n,"RID",t),ie(n,"CVER",22),this.D&&ie(n,"X-HTTP-Session-Id",this.D),no(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(v0(s)))+"&"+e:this.o&&Ld(n,this.o,s)),Rd(this.h,i),this.Ya&&ie(n,"TYPE","init"),this.O?(ie(n,"$req",e),ie(n,"SID","null"),i.Z=!0,qc(i,n,null)):qc(i,n,e),this.G=2}}else this.G==3&&(t?rm(this,t):this.i.length==0||u0(this.h)||rm(this))};function rm(t,e){var n;e?n=e.m:n=t.U++;const r=Jt(t.F);ie(r,"SID",t.I),ie(r,"RID",n),ie(r,"AID",t.T),no(t,r),t.o&&t.s&&Ld(r,t.o,t.s),n=new Js(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=S0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rd(t.h,n),qc(n,r,e)}function no(t,e){t.ia&&wd(t.ia,function(n,r){ie(e,r,n)}),t.l&&r0({},function(n,r){ie(e,r,n)})}function S0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ve(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{qT(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function k0(t){t.g||t.u||(t.Z=1,Bv(t.Ia,t),t.A=0)}function Md(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xs(Ve(t.Ia,t),T0(t,t.A)),t.A++,!0)}R.Ia=function(){if(this.u=null,_0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xs(Ve(this.eb,this),t)}};R.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,qe(10),Nl(this),_0(this))};function $d(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function _0(t){t.g=new Js(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jt(t.sa);ie(e,"RID","rpc"),ie(e,"SID",t.I),ie(e,"CI",t.L?"0":"1"),ie(e,"AID",t.T),ie(e,"TYPE","xmlhttp"),no(t,e),t.o&&t.s&&Ld(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Il(Jt(e)),n.s=null,n.P=!0,Zv(n,t)}R.cb=function(){this.v!=null&&(this.v=null,Nl(this),Md(this),qe(19))};function Fa(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function I0(t,e){var n=null;if(t.g==e){Fa(t),$d(t),t.g=null;var r=2}else if(Qc(t.h,e))n=e.D,h0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=El(),Re(r,new Qv(r,n)),Al(t)}else k0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&ZT(t,e)||r==2&&Md(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function T0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ve(t.kb,t);n||(n=new tr("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||ba(n,"https"),Il(n)),GT(n.toString(),r)}else qe(2);t.G=0,t.l&&t.l.va(e),C0(t),E0(t)}R.kb=function(t){t?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function C0(t){if(t.G=0,t.la=[],t.l){const e=d0(t.h);(e.length!=0||t.i.length!=0)&&(Wp(t.la,e),Wp(t.la,t.i),t.h.i.length=0,yd(t.i),t.i.length=0),t.l.ua()}}function N0(t,e,n){var r=n instanceof tr?Jt(n):new tr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ua(r,r.m);else{var i=b.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new tr(null,void 0);r&&ba(s,r),e&&(s.g=e),i&&Ua(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ie(r,n,e),ie(r,"VER",t.ma),no(t,r),r}function A0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new eo({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function D0(){}R=D0.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Ra=function(){};function Va(){if(ti&&!(10<=Number(gT)))throw Error("Environmental error: no available transport.")}Va.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Ce.call(this),this.g=new w0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Oa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pi(this)}xe(ut,Ce);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;qe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=N0(t,null,t.V),Al(t)};ut.prototype.close=function(){Od(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Id(t),t=n);e.i.push(new HT(e.ab++,t)),e.G==3&&Al(e)};ut.prototype.M=function(){this.g.l=null,delete this.j,Od(this.g),delete this.g,ut.X.M.call(this)};function R0(t){Ad.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(R0,Ad);function P0(){Dd.call(this),this.status=1}xe(P0,Dd);function pi(t){this.g=t}xe(pi,D0);pi.prototype.xa=function(){Re(this.g,"a")};pi.prototype.wa=function(t){Re(this.g,new R0(t))};pi.prototype.va=function(t){Re(this.g,new P0)};pi.prototype.ua=function(){Re(this.g,"b")};Va.prototype.createWebChannel=Va.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Sl.NO_ERROR=0;Sl.TIMEOUT=8;Sl.HTTP_ERROR=6;Xv.COMPLETE="complete";Yv.EventType=Ys;Ys.OPEN="a";Ys.CLOSE="b";Ys.ERROR="c";Ys.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var eC=function(){return new Va},tC=function(){return El()},Ou=Sl,nC=Xv,rC=yr,im={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},iC=eo,Lo=Yv,sC=ce;const sm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new id("@firebase/firestore");function om(){return dr.logLevel}function x(t,...e){if(dr.logLevel<=G.DEBUG){const n=e.map(bd);dr.debug(`Firestore (${mi}): ${t}`,...n)}}function Zt(t,...e){if(dr.logLevel<=G.ERROR){const n=e.map(bd);dr.error(`Firestore (${mi}): ${t}`,...n)}}function Xc(t,...e){if(dr.logLevel<=G.WARN){const n=e.map(bd);dr.warn(`Firestore (${mi}): ${t}`,...n)}}function bd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: `+t;throw Zt(e),new Error(e)}function J(t,e){t||U()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class aC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lC{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new x0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new $e(e)}}class uC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(J(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class cC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new uC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dC{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.A=n.token,new hC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new we(0,0))}static max(){return new F(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Cs{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const pC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Cs{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return pC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ue.fromString(e))}static fromName(e){return new O(ue.fromString(e).popFirst(5))}static empty(){return new O(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ue(e.slice()))}}function mC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Pn(i,O.empty(),e)}function gC(t){return new Pn(t.readTime,t.key,-1)}class Pn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pn(F.min(),O.empty(),-1)}static max(){return new Pn(F.max(),O.empty(),-1)}}function yC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==vC)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ud.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ns{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ns&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function O0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){return t==null}function za(t){return t===0&&1/t==-1/0}function SC(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new kC("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const _C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(t){if(J(!!t),typeof t=="string"){let e=0;const n=_C.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $0(t){const e=t.mapValue.fields.__previous_value__;return M0(e)?$0(e):e}function As(t){const e=xn(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?M0(t)?4:IC(t)?9007199254740991:10:U()}function bt(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return As(t).isEqual(As(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=xn(r.timestampValue),o=xn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ri(r.bytesValue).isEqual(ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?za(s)===za(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ni(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(am(s)!==am(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!bt(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function Ds(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function ii(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return lm(t.timestampValue,e.timestampValue);case 4:return lm(As(t),As(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ri(i),a=ri(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(pe(i.latitude),pe(s.latitude));return o!==0?o:Q(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ii(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Oo.mapValue&&s===Oo.mapValue)return 0;if(i===Oo.mapValue)return 1;if(s===Oo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=ii(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function lm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=xn(t),r=xn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function si(t){return Yc(t)}function Yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=xn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Yc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Yc(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function Jc(t){return!!t&&"integerValue"in t}function Fd(t){return!!t&&"arrayValue"in t}function um(t){return!!t&&"nullValue"in t}function cm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zo(t){return!!t&&"mapValue"in t}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function hm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{}class ye extends b0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CC(e,n,r):n==="array-contains"?new DC(e,r):n==="in"?new RC(e,r):n==="not-in"?new PC(e,r):n==="array-contains-any"?new xC(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NC(e,r):new AC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ii(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ut extends b0{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Ut(e,n)}matches(e){return U0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function U0(t){return t.op==="and"}function F0(t){return TC(t)&&U0(t)}function TC(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function Zc(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+si(t.value);if(F0(t))return t.filters.map(e=>Zc(e)).join(",");{const e=t.filters.map(n=>Zc(n)).join(",");return`${t.op}(${e})`}}function V0(t,e){return t instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&bt(n.value,r.value)}(t,e):t instanceof Ut?function(n,r){return r instanceof Ut&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&V0(s,r.filters[o]),!0):!1}(t,e):void U()}function z0(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${si(e.value)}`}(t):t instanceof Ut?function(e){return e.op.toString()+" {"+e.getFilters().map(z0).join(" ,")+"}"}(t):"Filter"}class CC extends ye{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class NC extends ye{constructor(e,n){super(e,"in",n),this.keys=B0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AC extends ye{constructor(e,n){super(e,"not-in",n),this.keys=B0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function B0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class DC extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fd(n)&&Ds(n.arrayValue,this.value)}}class RC extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ds(this.value.arrayValue,n)}}class PC extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ds(this.value.arrayValue,n)}}class xC extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ds(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function LC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fm(this.data.getIterator())}getIteratorFrom(e){return new fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new st([])}unionWith(e){let n=new Ee(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new st(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Qi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Je(Qi(this.value))}}function j0(t){const e=[];return vr(t.fields,(n,r)=>{const i=new Fe([n]);if(Zo(r)){const s=j0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,F.min(),F.min(),F.min(),Je.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,F.min(),F.min(),Je.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,F.min(),F.min(),Je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function pm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new OC(t,e,n,r,i,s,o)}function Vd(t){const e=V(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Dl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),e._t=n}return e._t}function zd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!V0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dm(t.startAt,e.startAt)&&dm(t.endAt,e.endAt)}function eh(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function MC(t,e,n,r,i,s,o,a){return new Rl(t,e,n,r,i,s,o,a)}function Bd(t){return new Rl(t)}function mm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $C(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function UC(t){return t.collectionGroup!==null}function Kr(t){const e=V(t);if(e.wt===null){e.wt=[];const n=bC(e),r=$C(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Xi(n)),e.wt.push(new Xi(Fe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xi(Fe.keyField(),s))}}}return e.wt}function en(t){const e=V(t);if(!e.gt)if(e.limitType==="F")e.gt=pm(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Kr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xi(s.field,o))}const r=e.endAt?new Ba(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ba(e.startAt.position,e.startAt.inclusive):null;e.gt=pm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function th(t,e,n){return new Rl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pl(t,e){return zd(en(t),en(e))&&t.limitType===e.limitType}function H0(t){return`${Vd(en(t))}|lt:${t.limitType}`}function nh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>z0(r)).join(", ")}]`),Dl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),`Target(${n})`}(en(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Kr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=hm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Kr(n),r)||n.endAt&&!function(i,s,o){const a=hm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Kr(n),r))}(t,e)}function FC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function K0(t){return(e,n)=>{let r=!1;for(const i of Kr(t)){const s=VC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VC(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ii(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function q0(t){return{integerValue:""+t}}function zC(t,e){return SC(e)?q0(e):W0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this._=void 0}}function BC(t,e,n){return t instanceof ja?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Rs?Q0(t,e):t instanceof Ps?X0(t,e):function(r,i){const s=G0(r,i),o=gm(s)+gm(r.It);return Jc(s)&&Jc(r.It)?q0(o):W0(r.Tt,o)}(t,e)}function jC(t,e,n){return t instanceof Rs?Q0(t,e):t instanceof Ps?X0(t,e):n}function G0(t,e){return t instanceof Ha?Jc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ja extends Ll{}class Rs extends Ll{constructor(e){super(),this.elements=e}}function Q0(t,e){const n=Y0(e);for(const r of t.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ps extends Ll{constructor(e){super(),this.elements=e}}function X0(t,e){let n=Y0(e);for(const r of t.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class Ha extends Ll{constructor(e,n){super(),this.Tt=e,this.It=n}}function gm(t){return pe(t.integerValue||t.doubleValue)}function Y0(t){return Fd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function HC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Rs&&r instanceof Rs||n instanceof Ps&&r instanceof Ps?ni(n.elements,r.elements,bt):n instanceof Ha&&r instanceof Ha?bt(n.It,r.It):n instanceof ja&&r instanceof ja}(t.transform,e.transform)}class KC{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ol{}function J0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new e1(t.key,Mt.none()):new so(t.key,t.data,Mt.none());{const n=t.data,r=Je.empty();let i=new Ee(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vn(t.key,r,new st(i.toArray()),Mt.none())}}function WC(t,e,n){t instanceof so?function(r,i,s){const o=r.value.clone(),a=vm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vn?function(r,i,s){if(!ea(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=vm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Z0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n,r){return t instanceof so?function(i,s,o,a){if(!ea(i.precondition,s))return o;const l=i.value.clone(),u=wm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vn?function(i,s,o,a){if(!ea(i.precondition,s))return o;const l=wm(i.fieldTransforms,a,s),u=s.data;return u.setAll(Z0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ea(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function qC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=G0(r.transform,i||null);s!=null&&(n===null&&(n=Je.empty()),n.set(r.field,s))}return n||null}function ym(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ni(n,r,(i,s)=>HC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends Ol{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vn extends Ol{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vm(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jC(o,a,n[i]))}return r}function wm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,BC(s,o,e))}return r}class e1 extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GC extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,W;function XC(t){switch(t){default:return U();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function t1(t){if(t===void 0)return Zt("GRPC error has no .code"),_.UNKNOWN;switch(t){case fe.OK:return _.OK;case fe.CANCELLED:return _.CANCELLED;case fe.UNKNOWN:return _.UNKNOWN;case fe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case fe.INTERNAL:return _.INTERNAL;case fe.UNAVAILABLE:return _.UNAVAILABLE;case fe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case fe.NOT_FOUND:return _.NOT_FOUND;case fe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case fe.ABORTED:return _.ABORTED;case fe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case fe.DATA_LOSS:return _.DATA_LOSS;default:return U()}}(W=fe||(fe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return O0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new Se(O.comparator);function tn(){return YC}const n1=new Se(O.comparator);function bi(...t){let e=n1;for(const n of t)e=e.insert(n.key,n);return e}function r1(t){let e=n1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yn(){return Ji()}function i1(){return Ji()}function Ji(){return new gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const JC=new Se(O.comparator),ZC=new Ee(O.comparator);function H(...t){let e=ZC;for(const n of t)e=e.add(n);return e}const e2=new Ee(Q);function s1(){return e2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ml(F.min(),i,s1(),tn(),H())}}class oo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oo(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class o1{constructor(e,n){this.targetId=e,this.Rt=n}}class a1{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Em{constructor(){this.Pt=0,this.vt=km(),this.bt=Ke.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=H(),n=H(),r=H();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new oo(this.bt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=km()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class t2{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=tn(),this.Kt=Sm(),this.Gt=new Ee(Q)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.Ft(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.Ft(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(eh(s))if(r===0){const o=new O(s.path);this.zt(n,o,Ue.newNoDocument(o,F.min()))}else J(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&eh(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Ue.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=H();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Ml(e,n,this.Gt,this.Ut,r);return this.Ut=tn(),this.Kt=Sm(),this.Gt=new Ee(Q),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.$t(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new Em,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ee(Q),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Em),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Sm(){return new Se(O.comparator)}function km(){return new Se(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),r2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),i2=(()=>({and:"AND",or:"OR"}))();class s2{constructor(e,n){this.databaseId=e,this.yt=n}}function Ka(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function l1(t,e){return t.yt?e.toBase64():e.toUint8Array()}function o2(t,e){return Ka(t,e.toTimestamp())}function $t(t){return J(!!t),F.fromTimestamp(function(e){const n=xn(e);return new we(n.seconds,n.nanos)}(t))}function jd(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function u1(t){const e=ue.fromString(t);return J(f1(e)),e}function rh(t,e){return jd(t.databaseId,e.path)}function Mu(t,e){const n=u1(e);if(n.get(1)!==t.databaseId.projectId)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(c1(n))}function ih(t,e){return jd(t.databaseId,e)}function a2(t){const e=u1(t);return e.length===4?ue.emptyPath():c1(e)}function sh(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function c1(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _m(t,e,n){return{name:rh(t,e),fields:n.value.mapValue.fields}}function l2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(J(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:t1(l.code);return new M(u,l.message||"")}(o);n=new a1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mu(t,r.document.name),s=$t(r.document.updateTime),o=r.document.createTime?$t(r.document.createTime):F.min(),a=new Je({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ta(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mu(t,r.document),s=r.readTime?$t(r.readTime):F.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ta([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mu(t,r.document),s=r.removedTargetIds||[];n=new ta([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new QC(i),o=r.targetId;n=new o1(o,s)}}return n}function u2(t,e){let n;if(e instanceof so)n={update:_m(t,e.key,e.value)};else if(e instanceof e1)n={delete:rh(t,e.key)};else if(e instanceof Vn)n={update:_m(t,e.key,e.data),updateMask:v2(e.fieldMask)};else{if(!(e instanceof GC))return U();n={verify:rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ja)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ps)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ha)return{fieldPath:s.field.canonicalString(),increment:o.It};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:o2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function c2(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?$t(r.updateTime):$t(i);return s.isEqual(F.min())&&(s=$t(i)),new KC(s,r.transformResults||[])}(n,e))):[]}function h2(t,e){return{documents:[ih(t,e.path)]}}function d2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ih(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ih(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return d1(Ut.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Sr(c.field),direction:m2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||Dl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function f2(t){let e=a2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=h1(c);return h instanceof Ut&&F0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Xi(kr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Dl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ba(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ba(d,h)}(n.endAt)),MC(e,i,o,s,a,"F",l,u)}function p2(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function h1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=kr(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=kr(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=kr(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(kr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ut.create(e.compositeFilter.filters.map(n=>h1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function m2(t){return n2[t]}function g2(t){return r2[t]}function y2(t){return i2[t]}function Sr(t){return{fieldPath:t.canonicalString()}}function kr(t){return Fe.fromServerFormat(t.fieldPath)}function d1(t){return t instanceof ye?function(e){if(e.op==="=="){if(cm(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NAN"}};if(um(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(cm(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NAN"}};if(um(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(e.field),op:g2(e.op),value:e.value}}}(t):t instanceof Ut?function(e){const n=e.getFilters().map(r=>d1(r));return n.length===1?n[0]:{compositeFilter:{op:y2(e.op),filters:n}}}(t):U()}function v2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function f1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=i1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=J0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(n,r)=>ym(n,r))&&ni(this.baseMutations,e.baseMutations,(n,r)=>ym(n,r))}}class Hd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=JC;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Hd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.oe=e}}function k2(t){const e=f2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.Ze=new I2}addToCollectionParentIndex(e,n){return this.Ze.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Pn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class I2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new oi(0)}static Sn(){return new oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yi(r.mutation,i,st.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=Yn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=tn();const o=Ji(),a=Ji();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Vn)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Yi(c.mutation,u,c.mutation.getFieldMask(),we.now())):o.set(u.key,st.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new C2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ji();let i=new Se((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||st.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=i1();c.forEach(d=>{if(!s.has(d)){const y=J0(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(Yn());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:r1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=bi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=bi();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new Rl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ue.newInvalidDocument(u)))});let o=bi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Yi(u.mutation,l,st.empty(),we.now()),xl(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return k.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:$t(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:k2(r.bundledQuery),readTime:$t(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.overlays=new Se(O.comparator),this.ss=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yn();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=Yn(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Yn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Yn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new E2(n,r));let s=this.ss.get(n);s===void 0&&(s=H(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.rs=new Ee(_e.os),this.us=new Ee(_e.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new _e(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new _e(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new O(new ue([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new O(new ue([])),r=new _e(n,e),i=new _e(n,e+1);let s=H();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return O.comparator(e.key,n.key)||Q(e.gs,n.gs)}static cs(e,n){return Q(e.gs,n.gs)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ee(_e.os)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new w2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(Q);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),k.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new _e(new O(s),0);let a=new Ee(Q);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),k.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return k.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}Pn(e){}containsKey(e,n){const r=new _e(n,0),i=this.ps.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.Rs=e,this.docs=new Se(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=tn();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yC(gC(c),r)<=0||(i.has(c.key)||xl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Ps(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new x2(this)}getSize(e){return k.resolve(this.size)}}class x2 extends T2{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.persistence=e,this.vs=new gi(n=>Vd(n),zd),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Kd,this.targetCount=0,this.Ss=oi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),k.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.xn(n),k.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ud(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new L2(this),this.indexManager=new _2,this.remoteDocumentCache=function(r){return new P2(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new S2(n),this.$s=new A2(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new D2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new R2(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new M2(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Fs(e,n){return k.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class M2 extends wC{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.Bs=new Kd,this.Ls=null}static qs(e){return new Wd(e)}get Us(){if(this.Ls)return this.Ls;throw U()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),k.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Us,r=>{const i=O.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return k.or([()=>k.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Fi(e,n))}Mi(e,n){if(mm(n))return k.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=th(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,th(n,null,"F")):this.qi(e,u,n,l)}))})))}Oi(e,n,r,i){return mm(n)||i.isEqual(F.min())?this.Fi(e,n):this.$i.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.Fi(e,n):(om()<=G.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nh(n)),this.qi(e,o,n,mC(i,-1)))})}Bi(e,n){let r=new Ee(K0(e));return n.forEach((i,s)=>{xl(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fi(e,n){return om()<=G.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",nh(n)),this.$i.getDocumentsMatchingQuery(e,n,Pn.min())}qi(e,n,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Se(Q),this.Gi=new gi(s=>Vd(s),zd),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N2(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function U2(t,e,n,r){return new b2(t,e,n,r)}async function p1(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function F2(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(y=>{d=d.next(()=>u.getEntry(a,y)).next(v=>{const w=l.docVersions.get(y);J(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function m1(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function V2(t,e){const n=V(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,h)));let y=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?y=y.withResumeToken(Ke.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(v,w,C){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,y,c)&&a.push(n.Ns.updateTargetData(s,y))});let l=tn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(z2(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(F.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(h=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function z2(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=tn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function B2(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function j2(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new nr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function oh(t,e,n){const r=V(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!io(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function Im(t,e,n){const r=V(t);let i=F.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=V(a),h=c.Gi.get(u);return h!==void 0?k.resolve(c.Ki.get(h)):c.Ns.getTargetData(l,u)}(r,o,en(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:H())).next(a=>(H2(r,FC(e),a),{documents:a,Yi:s})))}function H2(t,e,n){let r=t.Qi.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class Tm{constructor(){this.activeTargetIds=s1()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class K2{constructor(){this.Ur=new Tm,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Tm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o=null;function $u(){return $o===null?$o=268435456+Math.round(2147483648*Math.random()):$o++,"0x"+$o.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class Q2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=$u(),a=this.fo(e,n);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this._o(l,i,s),this.wo(e,a,l,r).then(u=>(x("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Xc("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+mi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=q2[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){const s=$u();return new Promise((o,a)=>{const l=new sC;l.setWithCredentials(!0),l.listenOnce(nC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ou.NO_ERROR:const c=l.getResponseJson();x(Me,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ou.TIMEOUT:x(Me,`RPC '${e}' ${s} timed out`),a(new M(_.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const h=l.getStatus();if(x(Me,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const y=d==null?void 0:d.error;if(y&&y.status&&y.message){const v=function(w){const C=w.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(C)>=0?C:_.UNKNOWN}(y.status);a(new M(v,y.message))}else a(new M(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(_.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{x(Me,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);x(Me,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}yo(e,n,r){const i=$u(),s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eC(),a=tC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new iC({})),this._o(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");x(Me,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const y=new G2({Yr:w=>{d?x(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(x(Me,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),x(Me,`RPC '${e}' stream ${i} sending:`,w),c.send(w))},Zr:()=>c.close()}),v=(w,C,p)=>{w.listen(C,f=>{try{p(f)}catch(m){setTimeout(()=>{throw m},0)}})};return v(c,Lo.EventType.OPEN,()=>{d||x(Me,`RPC '${e}' stream ${i} transport opened.`)}),v(c,Lo.EventType.CLOSE,()=>{d||(d=!0,x(Me,`RPC '${e}' stream ${i} transport closed`),y.oo())}),v(c,Lo.EventType.ERROR,w=>{d||(d=!0,Xc(Me,`RPC '${e}' stream ${i} transport errored:`,w),y.oo(new M(_.UNAVAILABLE,"The operation could not be completed")))}),v(c,Lo.EventType.MESSAGE,w=>{var C;if(!d){const p=w.data[0];J(!!p);const f=p,m=f.error||((C=f[0])===null||C===void 0?void 0:C.error);if(m){x(Me,`RPC '${e}' stream ${i} received error:`,m);const E=m.status;let I=function(D){const P=fe[D];if(P!==void 0)return t1(P)}(E),N=m.message;I===void 0&&(I=_.INTERNAL,N="Unknown error status: "+E+" with message "+m.message),d=!0,y.oo(new M(I,N)),c.close()}else x(Me,`RPC '${e}' stream ${i} received:`,p),y.uo(p)}}),v(a,rC.STAT_EVENT,w=>{w.stat===im.PROXY?x(Me,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===im.NOPROXY&&x(Me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.ro()},0),y}}function bu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){return new s2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new g1(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Zt(n.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new M(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class X2 extends y1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=l2(this.Tt,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?$t(s.readTime):F.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=sh(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=eh(a)?{documents:h2(i,a)}:{query:d2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=l1(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=Ka(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=p2(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=sh(this.Tt),n.removeTarget=e,this.qo(n)}}class Y2 extends y1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=c2(e.writeResults,e.commitTime),r=$t(e.commitTime);return this.listener.eu(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=sh(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>u2(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(_.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(_.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class Z2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Zt(n),this.cu=!1):x("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{wr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=V(a);l.mu.add(4),await ao(l),l.pu.set("Unknown"),l.mu.delete(4),await bl(l)}(this))})}),this.pu=new Z2(r,i)}}async function bl(t){if(wr(t))for(const e of t.gu)await e(!0)}async function ao(t){for(const e of t.gu)await e(!1)}function v1(t,e){const n=V(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Xd(n)?Qd(n):yi(n).Mo()&&Gd(n,e))}function w1(t,e){const n=V(t),r=yi(n);n.wu.delete(e),r.Mo()&&E1(n,e),n.wu.size===0&&(r.Mo()?r.Bo():wr(n)&&n.pu.set("Unknown"))}function Gd(t,e){t.Iu.Ot(e.targetId),yi(t).Jo(e)}function E1(t,e){t.Iu.Ot(e),yi(t).Yo(e)}function Qd(t){t.Iu=new t2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),yi(t).start(),t.pu.au()}function Xd(t){return wr(t)&&!yi(t).$o()&&t.wu.size>0}function wr(t){return V(t).mu.size===0}function S1(t){t.Iu=void 0}async function tN(t){t.wu.forEach((e,n)=>{Gd(t,e)})}async function nN(t,e){S1(t),Xd(t)?(t.pu.fu(e),Qd(t)):t.pu.set("Unknown")}async function rN(t,e,n){if(t.pu.set("Online"),e instanceof a1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wa(t,r)}else if(e instanceof ta?t.Iu.Qt(e):e instanceof o1?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(F.min()))try{const r=await m1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Ke.EMPTY_BYTE_STRING,l.snapshotVersion)),E1(i,a);const u=new nr(l.target,a,1,l.sequenceNumber);Gd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Wa(t,r)}}async function Wa(t,e,n){if(!io(e))throw e;t.mu.add(1),await ao(t),t.pu.set("Offline"),n||(n=()=>m1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await bl(t)})}function k1(t,e){return e().catch(n=>Wa(t,n,e))}async function Ul(t){const e=V(t),n=Ln(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;iN(e);)try{const i=await B2(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,sN(e,i)}catch(i){await Wa(e,i)}_1(e)&&I1(e)}function iN(t){return wr(t)&&t._u.length<10}function sN(t,e){t._u.push(e);const n=Ln(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function _1(t){return wr(t)&&!Ln(t).$o()&&t._u.length>0}function I1(t){Ln(t).start()}async function oN(t){Ln(t).su()}async function aN(t){const e=Ln(t);for(const n of t._u)e.tu(n.mutations)}async function lN(t,e,n){const r=t._u.shift(),i=Hd.from(r,e,n);await k1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ul(t)}async function uN(t,e){e&&Ln(t).Xo&&await async function(n,r){if(i=r.code,XC(i)&&i!==_.ABORTED){const s=n._u.shift();Ln(n).Fo(),await k1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ul(n)}var i}(t,e),_1(t)&&I1(t)}async function Nm(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=wr(n);n.mu.add(3),await ao(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await bl(n)}async function cN(t,e){const n=V(t);e?(n.mu.delete(2),await bl(n)):e||(n.mu.add(2),await ao(n),n.pu.set("Unknown"))}function yi(t){return t.Tu||(t.Tu=function(e,n,r){const i=V(e);return i.ru(),new X2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:tN.bind(null,t),no:nN.bind(null,t),Ho:rN.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Xd(t)?Qd(t):t.pu.set("Unknown")):(await t.Tu.stop(),S1(t))})),t.Tu}function Ln(t){return t.Eu||(t.Eu=function(e,n,r){const i=V(e);return i.ru(),new Y2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:oN.bind(null,t),no:uN.bind(null,t),nu:aN.bind(null,t),eu:lN.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Ul(t)):(await t.Eu.stop(),t._u.length>0&&(x("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Yd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jd(t,e){if(Zt("AsyncQueue",`${e}: ${t}`),io(t))return new M(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=bi(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.Au=new Se(O.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):U():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ai(e,n,Wr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this.Pu=void 0,this.listeners=[]}}class dN{constructor(){this.queries=new gi(e=>H0(e),Pl),this.onlineState="Unknown",this.vu=new Set}}async function fN(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new hN),i)try{s.Pu=await n.onListen(r)}catch(o){const a=Jd(o,`Initialization of query '${nh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Pu&&e.Vu(s.Pu)&&Zd(n)}async function pN(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mN(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Pu=i}}r&&Zd(n)}function gN(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Zd(t){t.vu.forEach(e=>{e.next()})}class yN{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.$u||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.key=e}}class C1{constructor(e){this.key=e}}class vN{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=H(),this.mutatedKeys=H(),this.ju=K0(e),this.zu=new Wr(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new Am,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=xl(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;d&&y?d.data.isEqual(y.data)?v!==w&&(r.track({type:3,doc:y}),C=!0):this.Yu(d,y)||(r.track({type:2,doc:y}),C=!0,(l&&this.ju(y,l)>0||u&&this.ju(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),C=!0):d&&!y&&(r.track({type:1,doc:d}),C=!0,(l||u)&&(a=!0)),C&&(y?(o=o.add(y),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(h,d){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return y(h)-y(d)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new ai(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Am,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=H(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new C1(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new T1(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=H();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return ai.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class wN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EN{constructor(e){this.key=e,this.ic=!1}}class SN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new gi(a=>H0(a),Pl),this.uc=new Map,this.cc=new Set,this.ac=new Se(O.comparator),this.hc=new Map,this.lc=new Kd,this.fc={},this.dc=new Map,this._c=oi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function kN(t,e){const n=xN(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await j2(n.localStore,en(e));n.isPrimaryClient&&v1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await _N(n,e,r,a==="current",o.resumeToken)}return i}async function _N(t,e,n,r,i){t.mc=(h,d,y)=>async function(v,w,C,p){let f=w.view.Hu(C);f.Li&&(f=await Im(v.localStore,w.query,!1).then(({documents:I})=>w.view.Hu(I,f)));const m=p&&p.targetChanges.get(w.targetId),E=w.view.applyChanges(f,v.isPrimaryClient,m);return Rm(v,w.targetId,E.tc),E.snapshot}(t,h,d,y);const s=await Im(t.localStore,e,!0),o=new vN(e,s.Yi),a=o.Hu(s.documents),l=oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Rm(t,n,u.tc);const c=new wN(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function IN(t,e){const n=V(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!Pl(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await oh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),w1(n.remoteStore,r.targetId),ah(n,r.targetId)}).catch(ro)):(ah(n,r.targetId),await oh(n.localStore,r.targetId,!0))}async function TN(t,e,n){const r=LN(t);try{const i=await function(s,o){const a=V(s),l=we.now(),u=o.reduce((d,y)=>d.add(y.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let y=tn(),v=H();return a.ji.getEntries(d,u).next(w=>{y=w,y.forEach((C,p)=>{p.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,y)).next(w=>{c=w;const C=[];for(const p of o){const f=qC(p,c.get(p.key).overlayedDocument);f!=null&&C.push(new Vn(p.key,f,j0(f.value.mapValue),Mt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,C,o)}).next(w=>{h=w;const C=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,C)})}).then(()=>({batchId:h.batchId,changes:r1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new Se(Q)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await lo(r,i.changes),await Ul(r.remoteStore)}catch(i){const s=Jd(i,"Failed to persist write");n.reject(s)}}async function N1(t,e){const n=V(t);try{const r=await V2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?J(o.ic):i.removedDocuments.size>0&&(J(o.ic),o.ic=!1))}),await lo(n,r,e)}catch(r){await ro(r)}}function Dm(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Zd(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CN(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Se(O.comparator);o=o.insert(s,Ue.newNoDocument(s,F.min()));const a=H().add(s),l=new Ml(F.min(),new Map,new Ee(Q),o,a);await N1(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),ef(r)}else await oh(r.localStore,e,!1).then(()=>ah(r,e,n)).catch(ro)}async function NN(t,e){const n=V(t),r=e.batch.batchId;try{const i=await F2(n.localStore,e);D1(n,r,null),A1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lo(n,i)}catch(i){await ro(i)}}async function AN(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);D1(r,e,n),A1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lo(r,i)}catch(i){await ro(i)}}function A1(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function D1(t,e,n){const r=V(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||R1(t,r)})}function R1(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(w1(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),ef(t))}function Rm(t,e,n){for(const r of n)r instanceof T1?(t.lc.addReference(r.key,e),DN(t,r)):r instanceof C1?(x("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||R1(t,r.key)):U()}function DN(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.cc.add(r),ef(t))}function ef(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new O(ue.fromString(e)),r=t._c.next();t.hc.set(r,new EN(n)),t.ac=t.ac.insert(n,r),v1(t.remoteStore,new nr(en(Bd(n.path)),r,2,Ud.at))}}async function lo(t,e,n){const r=V(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=qd.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=V(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Ci,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.xi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!io(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ki.get(h),y=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(y);u.Ki=u.Ki.insert(h,v)}}}(r.localStore,s))}async function RN(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await p1(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new M(_.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(n,r.Wi)}}function PN(t,e){const n=V(t),r=n.hc.get(e);if(r&&r.ic)return H().add(r.key);{let i=H();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function xN(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=N1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CN.bind(null,e),e.rc.Ho=mN.bind(null,e.eventManager),e.rc.gc=gN.bind(null,e.eventManager),e}function LN(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AN.bind(null,e),e}class ON{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=$l(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return U2(this.persistence,new $2,e.initialUser,this.Tt)}Tc(e){return new O2(Wd.qs,this.Tt)}Ic(e){return new K2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RN.bind(null,this.syncEngine),await cN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dN}createDatastore(e){const n=$l(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Q2(i));var i;return function(s,o,a,l){return new J2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Dm(this.syncEngine,a,0),o=Cm.C()?new Cm:new W2,new eN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new SN(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);x("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await ao(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$e.UNAUTHENTICATED,this.clientId=L0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function UN(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await p1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function FN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VN(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Nm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Nm(e.remoteStore,s)),t.onlineComponents=e}async function VN(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await UN(t,new ON)),t.offlineComponents}async function P1(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await FN(t,new MN)),t.onlineComponents}function zN(t){return P1(t).then(e=>e.syncEngine)}async function BN(t){const e=await P1(t),n=e.eventManager;return n.onListen=kN.bind(null,e.syncEngine),n.onUnlisten=IN.bind(null,e.syncEngine),n}function jN(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new $N({next:h=>{s.enqueueAndForget(()=>pN(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new M(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new M(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new yN(Bd(o.path),u,{includeMetadataChanges:!0,$u:!0});return fN(i,c)}(await BN(t),t.asyncQueue,e,n,r)),r.promise}const Pm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t,e,n){if(!n)throw new M(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KN(t,e,n,r){if(e===!0&&r===!0)throw new M(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!O.isDocumentKey(t))throw new M(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tf(t);throw new M(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oC;switch(n.type){case"gapi":const r=n.client;return new cC(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pm.get(e);n&&(x("ComponentProvider","Removing Datastore"),Pm.delete(e),n.terminate())}(this),Promise.resolve()}}function WN(t,e,n,r={}){var i;const s=(t=pr(t,nf))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Xc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=$e.MOCK_USER;else{o=LS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(l)}t._authCredentials=new aC(new x0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class rf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rf(this.firestore,e,this._query)}}class xs extends rf{constructor(e,n,r){super(e,n,Bd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new O(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function Fl(t,e,...n){if(t=He(t),arguments.length===1&&(e=L0.R()),HN("doc","path",e),t instanceof nf){const r=ue.fromString(e,...n);return xm(r),new at(t,null,new O(r))}{if(!(t instanceof at||t instanceof xs))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return xm(r),new at(t.firestore,t instanceof xs?t.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new g1(this,"async_queue_retry"),this.Hc=()=>{const n=bu();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=bu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=bu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new An;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!io(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Zt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Yd.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&U()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class Vl extends nf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new qN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||L1(this),this._firestoreClient.terminate()}}function GN(t,e){const n=typeof t=="object"?t:Yy(),r=typeof t=="string"?t:e||"(default)",i=od(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RS("firestore");s&&WN(i,...s)}return i}function x1(t){return t._firestoreClient||L1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function L1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new EC(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bN(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new li(Ke.fromBase64String(e))}catch(n){throw new M(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new li(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=/^__.*__$/;class XN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class O1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function M1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class af{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return qa(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(M1(this.ra)&&QN.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class YN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||$l(e)}wa(e,n,r,i=!1){return new af({ra:e,methodName:n,_a:r,path:Fe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function $1(t){const e=t._freezeSettings(),n=$l(t._databaseId);return new YN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JN(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);lf("Data must be an object, but it was:",o,r);const a=b1(r,o);let l,u;if(s.merge)l=new st(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=lh(e,h,n);if(!o.contains(d))throw new M(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);F1(c,d)||c.push(d)}l=new st(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new XN(new Je(a),l,u)}class Bl extends sf{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bl}}function ZN(t,e,n,r){const i=t.wa(1,e,n);lf("Data must be an object, but it was:",i,r);const s=[],o=Je.empty();vr(r,(l,u)=>{const c=uf(e,l,n);u=He(u);const h=i.ha(c);if(u instanceof Bl)s.push(c);else{const d=jl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new st(s);return new O1(o,a,i.fieldTransforms)}function eA(t,e,n,r,i,s){const o=t.wa(1,e,n),a=[lh(e,r,n)],l=[i];if(s.length%2!=0)throw new M(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(lh(e,s[d])),l.push(s[d+1]);const u=[],c=Je.empty();for(let d=a.length-1;d>=0;--d)if(!F1(u,a[d])){const y=a[d];let v=l[d];v=He(v);const w=o.ha(y);if(v instanceof Bl)u.push(y);else{const C=jl(v,w);C!=null&&(u.push(y),c.set(y,C))}}const h=new st(u);return new O1(c,h,o.fieldTransforms)}function jl(t,e){if(U1(t=He(t)))return lf("Unsupported field value:",e,t),b1(t,e);if(t instanceof sf)return function(n,r){if(!M1(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=jl(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zC(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=we.fromDate(n);return{timestampValue:Ka(r.Tt,i)}}if(n instanceof we){const i=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ka(r.Tt,i)}}if(n instanceof of)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof li)return{bytesValue:l1(r.Tt,n._byteString)};if(n instanceof at){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${tf(n)}`)}(t,e)}function b1(t,e){const n={};return O0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,i)=>{const s=jl(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function U1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof of||t instanceof li||t instanceof at||t instanceof sf)}function lf(t,e,n){if(!U1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=tf(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function lh(t,e,n){if((e=He(e))instanceof zl)return e._internalPath;if(typeof e=="string")return uf(t,e);throw qa("Field path arguments must be of type string or ",t,!1,void 0,n)}const tA=new RegExp("[~\\*/\\[\\]]");function uf(t,e,n){if(e.search(tA)>=0)throw qa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zl(...e.split("."))._internalPath}catch{throw qa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(_.INVALID_ARGUMENT,a+t+l)}function F1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nA extends V1{data(){return super.data()}}function z1(t,e){return typeof e=="string"?uf(t,e):e instanceof zl?e._internalPath:e._delegate._internalPath}class rA{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return vr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new of(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(As(e));default:return null}}convertTimestamp(e){const n=xn(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);J(f1(r));const i=new Ns(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||Zt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class B1 extends V1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(z1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class oA extends B1{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){t=pr(t,at);const e=pr(t.firestore,Vl);return jN(x1(e),t._key).then(n=>uA(e,t,n))}class aA extends rA{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function lA(t,e,n){t=pr(t,at);const r=pr(t.firestore,Vl),i=iA(t.converter,e,n);return K1(r,[JN($1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Mt.none())])}function H1(t,e,n,...r){t=pr(t,at);const i=pr(t.firestore,Vl),s=$1(i);let o;return o=typeof(e=He(e))=="string"||e instanceof zl?eA(s,"updateDoc",t._key,e,n,r):ZN(s,"updateDoc",t._key,e),K1(i,[o.toMutation(t._key,Mt.exists(!0))])}function K1(t,e){return function(n,r){const i=new An;return n.asyncQueue.enqueueAndForget(async()=>TN(await zN(n),r,i)),i.promise}(x1(t),e)}function uA(t,e,n){const r=n.docs.get(e._key),i=new aA(t);return new B1(t,i,e._key,r,new sA(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){mi=n})(Vs),ei(new lr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Vl(new lC(n.getProvider("auth-internal")),new dC(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Nn(sm,"3.9.0",t),Nn(sm,"3.9.0","esm2017")})();const cA={apiKey:"AIzaSyBGjXxcIg0xj40O9XMlCvPsOEZd2ABkYm8",authDomain:"fare-b892c.firebaseapp.com",projectId:"fare-b892c",storageBucket:"fare-b892c.appspot.com",messagingSenderId:"133676274973",appId:"1:133676274973:web:ef67d1b54cb51f54f57df4"},W1=Xy(cA),On=rT(W1),Hl=GN(W1);function hA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"msg-BadCredentials-svg",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})})}function dA({message:t}){return L("main",{className:"msg-BadCredentials",children:[g(hA,{}),g("p",{className:"msg-BadCredentials-p",children:t})]})}function fA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",d:"M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"})})}function pA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"})})}function mA(){return g("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:g("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})}class gA{constructor(){this.root=document.documentElement.style}_inputFocusIn(e,n){this.root.setProperty(`--borderInput-signIn-${e}`,"#4263eb"),this.root.setProperty(`--fr-svg-${n}`,"#4263eb")}_inputBlur(e,n){this.root.setProperty(`--borderInput-signIn-${e}`,"#c5c5c5"),this.root.setProperty(`--fr-svg-${n}`,"#727272")}}function yA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})})}function vA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"})})}function wA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}function EA(){return L("section",{className:"container-landing",children:[L("header",{className:"landing-header",children:[g("img",{src:"faRe.svg",alt:"Fare logo on landing page"}),g("h1",{className:"landing-header-title",children:"¡Que las ideas no escapen!"})]}),L("main",{className:"landing-features",children:[g("h2",{className:"landing-features-h2",children:"Guarda un Fare"}),g("p",{className:"landing-features-description",children:'"Idea" ó "Quehacer" (Fare en italiano). Podrás guardar esas pequeñas o grandes tareas en un sólo lugar. Un espacio perfecto para que las ocurrencias se mantengan en el tiempo y las visites cuando quieras.'}),L("div",{className:"landing-wrapper-features",children:[L("article",{className:"landing-feature",children:[g(yA,{}),g("h3",{children:"Sesiones"}),g("p",{children:"Solo tu, eres el autor intelectual de tu mente"})]}),L("article",{className:"landing-feature",children:[g(vA,{}),g("h3",{children:"Instantánea"}),g("p",{children:"Captura y revisa tus ideas al momento de pensarlas"})]}),L("article",{className:"landing-feature",children:[g(wA,{}),g("h3",{children:"No pierdas nada"}),g("p",{children:"Busca entre tu mente con indexado de alta velocidad"})]})]}),g("article",{className:"fillGradient"})]})]})}function SA({setIsRegistering:t}){const[e,n]=te.useState(!1),[r,i]=te.useState("Las credenciales no coinciden"),s=new gA;return L("section",{className:"container-login",children:[g(EA,{}),e?g(dA,{message:r}):null,L("form",{className:"login",onSubmit:async function(l){l.preventDefault();try{const u=l.target.inputMail.value,c=l.target.inputPassword.value;await V_(On,u,c)}catch(u){u.message==="Firebase: Error (auth/internal-error)."&&i("Las credenciales no coinciden"),u.message==="Firebase: Error (auth/user-not-found)."&&i("El usuario no existe"),u.message==="Firebase: Error (auth/wrong-password)."&&i("La contraseña es incorrecta"),u.message==="Firebase: Error (auth/invalid-email)."&&i("Campo correo es invalido"),u.message==="Firebase: Error (auth/missing-password)."&&i("Campo contraseña es invalido"),u.message==="Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."&&i("Sesion bloqueada"),n(!0),setTimeout(()=>n(!1),4e3)}},children:[g("img",{className:"login-img",src:"login.svg",alt:"Icon login"}),g("h1",{className:"login-title",children:g("span",{className:"gradientText",children:"Inicia Sesión"})}),g("label",{className:"login-label",children:"Correo electrónico"}),L("div",{className:"signIn-wrapperInput-mail",children:[g(fA,{}),g("input",{id:"inputMail",className:"login-inputMail",type:"text",placeholder:"usuario@dominio.some",onFocus:()=>s._inputFocusIn("mail","mail"),onBlur:()=>s._inputBlur("mail","mail")})]}),g("label",{className:"login-label",children:"Contraseña"}),L("div",{className:"signIn-wrapperInput-pass",children:[g(pA,{}),g("input",{id:"inputPassword",className:"login-inputPass",type:"password",autoComplete:"new-password",placeholder:"Ingresa tu contraseña",onFocus:()=>s._inputFocusIn("pass","pass"),onBlur:()=>s._inputBlur("pass","pass")})]}),L("button",{className:"login-buttonLogin",type:"submit",children:[g(mA,{}),"Autenticarme"]}),L("label",{className:"login-labelBGR",htmlFor:"lbgr",children:["¿No tienes una cuenta? ",g("button",{id:"lbgr",className:"login-BGR",type:"button",onClick:function(l){l.preventDefault(),t(!0)},children:"Registrate"})]})]})]})}function kA(){return L("svg",{className:"signUp-labelSVG",viewBox:"0 0 512 512",children:[g("title",{children:"Text"}),g("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M32 415.5l120-320 120 320M230 303.5H74M326 239.5c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144"}),g("path",{d:"M320 358.5c0 36 26.86 58 60 58 54 0 100-27 100-106v-15c-20 0-58 1-92 5-32.77 3.86-68 19-68 58z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]})}function _A(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"signUp-labelSVG",children:g("path",{strokeLinecap:"round",d:"M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"})})}function IA(){return L("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-showPass-svg",children:[g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function TA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-hidePass-svg hidden",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})})}function CA(){return L("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-showPassConfirm-svg",children:[g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function NA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-hidePassConfirm-svg hidden",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})})}class AA{constructor(){this.root=document.documentElement.style,this._regularExpressionLetters=/[a-zA-Z]/,this._regularExpressionNumbers=/[0-9]/,this._regularExpressionCharacters=/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/}_inputFocusIn(e){this.root.setProperty(`--borderInput-${e}`,"#4263eb")}_inputBlur(e){this.root.setProperty(`--borderInput-${e}`,"#c5c5c5")}_inputMailOnChangeCapture(){const e=document.querySelector(".signUp-mail-p");e.textContent=""}_showPass(e,n,r){const i=document.querySelector(`.${e}`),s=document.querySelector(`.${n}`),o=document.querySelector(`.${r}`);i.type=="password"?(i.type="text",s.classList.remove("hidden"),o.classList.add("hidden")):(i.type="password",o.classList.remove("hidden"),s.classList.add("hidden"))}_emptyPassConfirm(){const e=document.querySelector(".signUp-passConfirm");e.value="";const n=document.querySelector(".signUp-passConfirm-p");n.textContent="";const r=document.querySelector(".signUp-pass-p");r.textContent=""}_resetBorders(){this.root.setProperty("--borderInput-name","#c5c5c5"),this.root.setProperty("--borderInput-mail","#c5c5c5"),this.root.setProperty("--borderInput-pass","#c5c5c5"),this.root.setProperty("--borderInput-passConfirm","#c5c5c5")}_inputNameKeyUp(){const e=document.querySelector(".signUp-name"),n=document.querySelector(".signUp-name-p");this.root.setProperty("--borderInput-name","#4263eb"),e.value.match(this._regularExpressionNumbers)||e.value.match(this._regularExpressionCharacters)?(this.root.setProperty("--borderInput-name","#DF0000"),n.textContent="Recuerda, caracteres de tipo texto"):n.textContent="",e.value===""&&(this.root.setProperty("--borderInput-name","#4263eb"),n.textContent="")}_inputConfirmPassKeyUp(){const e=document.querySelector(".signUp-pass"),n=document.querySelector(".signUp-passConfirm"),r=document.querySelector(".signUp-passConfirm-p");n.value===e.value?(this.root.setProperty("--borderInput-passConfirm","#4263eb"),r.style.color="#4263eb",r.textContent="¡Coinciden!"):(r.style.color="#DF0000",this.root.setProperty("--borderInput-passConfirm","#DF0000"),r.textContent="Las contraseñas no coinciden")}_reviewInputName(){const e=document.querySelector(".signUp-name"),n=document.querySelector(".signUp-name-p");if(e.value==="")this.root.setProperty("--borderInput-name","#DF0000"),n.textContent="El campo es obligatorio";else if(e.value.match(this._regularExpressionNumbers)||e.value.match(this._regularExpressionCharacters))this.root.setProperty("--borderInput-name","#DF0000"),n.textContent="Solo caracteres tipo texto";else return!0}_reviewInputMail(){const e=document.querySelector(".signUp-mail"),n=document.querySelector(".signUp-mail-p");if(e.value==="")this.root.setProperty("--borderInput-mail","#DF0000"),n.textContent="El campo es obligatorio";else if(!e.value.includes("@")||!e.value.includes(".")||e.value.length<8)this.root.setProperty("--borderInput-mail","#DF0000"),n.textContent="Formato de correo invalido";else return!0}_reviewInputPass(){const e=document.querySelector(".signUp-pass"),n=document.querySelector(".signUp-pass-p");if(e.value==="")this.root.setProperty("--borderInput-pass","#DF0000"),n.textContent="El campo es obligatorio";else if(e.value.length<=7)this.root.setProperty("--borderInput-pass","#DF0000"),n.textContent="Al menos 8 caracteres";else return!0}_reviewInputConfirmPassword(){const e=document.querySelector(".signUp-passConfirm"),n=document.querySelector(".signUp-passConfirm-p");if(document.querySelector(".signUp-pass").value!==e.value)this.root.setProperty("--borderInput-passConfirm","#DF0000"),n.style.color="#DF0000",n.textContent="Las contraseñas no coinciden";else return!0}_reviewSignUp(e){if(e.preventDefault(),this._reviewInputName(),this._reviewInputMail(),this._reviewInputPass(),this._reviewInputConfirmPassword(),this._reviewInputName()&&this._reviewInputMail()&&this._reviewInputConfirmPassword()&&this._reviewInputPass())return!0}}function DA(){return L("section",{className:"message-signUp",children:[g(RA,{}),g("p",{children:"El correo ya existe"})]})}function RA(){return g("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:g("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})})}function PA({setIsRegistering:t}){const e=new AA,[n,r]=te.useState(!1),i=function(){e._resetBorders(),t(!1)},s=function(a){return a.trim().toLowerCase().split(" ").filter(u=>u!=="").map(u=>u[0].toUpperCase()+u.slice(1)).join(" ")},o=async function(a){a.preventDefault();const l=a.target.sufn.value,u=a.target.inputMail.value,c=a.target.inputPassword.value,d=[{name:s(l),mail:u}],y=[{id:+new Date,title:"Idea de ejemplo",description:`Hacer el reporte de Química sobre: 
 👉 Marie Curie 
 👉 La historia del Polonio 
 El reporte es a mano, sin olvidar las referencias.`}],v=Fl(Hl,`users/${u}`),w=await j1(v);try{w.exists()?(r(!0),setTimeout(()=>r(!1),4e3)):(await lA(v,{data:[...d],tasks:[...y]}),await F_(On,u,c))}catch{r(!0),setTimeout(()=>r(!1),4e3)}};return L("section",{className:"container-signUp",children:[n?g(DA,{}):!1,L("form",{className:"signUp",onSubmit:a=>{e._reviewSignUp(a)&&o(a)},children:[g("h1",{className:"signUp-title",children:"Crea una cuenta"}),L("label",{className:"signUp-label",htmlFor:"sufn",children:["Nombre completo",g(kA,{})]}),g("input",{id:"sufn",className:"signUp-name",placeholder:"Nombre(s) y apellidos",autoComplete:"new-password",onFocus:()=>e._inputFocusIn("name"),onBlur:()=>e._inputBlur("name"),onKeyUp:()=>e._inputNameKeyUp()}),g("p",{className:"signUp-name-p",children:" "}),L("label",{className:"signUp-label",htmlFor:"inputMail",children:["Correo electrónico ",g(_A,{})]}),g("input",{id:"inputMail",className:"signUp-mail",placeholder:"usuario@dominio.some",onFocus:()=>e._inputFocusIn("mail"),onBlur:()=>e._inputBlur("mail"),onChangeCapture:()=>e._inputMailOnChangeCapture()}),g("p",{className:"signUp-mail-p"}),g("label",{className:"signUp-label",htmlFor:"inputPassword",children:"Contraseña"}),L("section",{className:"wrapper-password",children:[g("input",{id:"inputPassword",className:"signUp-pass",type:"password",autoComplete:"new-password",placeholder:"Crea una contraseña",onFocus:()=>e._inputFocusIn("pass"),onBlur:()=>e._inputBlur("pass"),onChangeCapture:()=>e._emptyPassConfirm()}),L("button",{className:"btn-showPass",type:"button",title:"button show",onClick:()=>e._showPass("signUp-pass","btn-hidePass-svg","btn-showPass-svg"),children:[g(IA,{}),g(TA,{})]})]}),g("p",{className:"signUp-pass-p"}),g("label",{className:"signUp-label",htmlFor:"sufcp",children:"Confirmar contraseña"}),L("div",{className:"wrapper-password",children:[g("input",{id:"sufcp",className:"signUp-passConfirm",type:"password",autoComplete:"new-password",placeholder:"Repite la contraseña",onFocus:()=>e._inputFocusIn("passConfirm"),onBlur:()=>e._inputBlur("passConfirm"),onKeyUp:()=>e._inputConfirmPassKeyUp()}),L("button",{className:"btn-showPassConfirm",title:"button show",type:"button",onClick:()=>e._showPass("signUp-passConfirm","btn-hidePassConfirm-svg","btn-showPassConfirm-svg"),children:[g(CA,{}),g(NA,{})]})]}),g("p",{className:"signUp-passConfirm-p"}),g("button",{type:"submit",className:"signUp-btnRegister",name:"button to Register",children:"Registrarme Ahora"}),L("label",{className:"signUp-labelGoSignIn",htmlFor:"sufbsi",children:["¿Ya tienes una cuenta? ",g("button",{id:"sufbsi",className:"signUp-btnGoSignIn",onClick:i,children:"Inicia Sesión"})]})]})]})}function xA(){const[t,e]=te.useState(!1);return g(Qa,{children:t?g(PA,{setIsRegistering:e}):g(SA,{setIsRegistering:e})})}class cf{constructor(){this.root=document.documentElement.style}_makeDark(){const e=document.querySelector(".btn-Dark"),n=document.querySelector(".btn-Light");e.classList.add("hidden"),n.classList.remove("hidden"),this.root.setProperty("--mainColor","#5573ed"),this.root.setProperty("--black18","#fff"),this.root.setProperty("--ff","#363636"),this.root.setProperty("--fr-btn-expand","#fff"),this.root.setProperty("--fr-btn-signOut-mobile","#ff6868"),this.root.setProperty("--bg-btn-expand","#343333"),this.root.setProperty("--bg","#181818"),this.root.setProperty("--bg-btn-signOut-mobile","#141414"),this.root.setProperty("--bg-modal","#242424"),this.root.setProperty("--bg-modal-input","#262626"),this.root.setProperty("--bg-modal-input-border","#333333"),this.root.setProperty("--bg-modal-inputTitle-border","#333333"),this.root.setProperty("--bg-task","linear-gradient(180deg,#242424,#121212 65.62%)"),this.root.setProperty("--bg-fadeEffect","transparent"),this.root.setProperty("--bg-blur-navBar","rgba(27, 27, 27, 0.2)"),this.root.setProperty("--border-task","transparent"),this.root.setProperty("--shadow-finder","transparent")}_makeLight(){const e=document.querySelector(".btn-Dark");document.querySelector(".btn-Light").classList.add("hidden"),e.classList.remove("hidden"),this.root.setProperty("--mainColor","#4263eb"),this.root.setProperty("--black18","#181818"),this.root.setProperty("--ff","#fff"),this.root.setProperty("--fr-btn-expand","#181818"),this.root.setProperty("--fr-btn-signOut-mobile","#DF0000"),this.root.setProperty("--bg","#f2f2f7"),this.root.setProperty("--bg-btn-expand","#f2f2f7"),this.root.setProperty("--bg-btn-signOut-mobile","#fff"),this.root.setProperty("--bg-modal","#f2f2f7"),this.root.setProperty("--bg-modal-input","#fff"),this.root.setProperty("--bg-modal-input-border","#c9c9c9"),this.root.setProperty("--bg-modal-inputTitle-border","#c9c9c9"),this.root.setProperty("--bg-task","#fff"),this.root.setProperty("--bg-fadeEffect","#fff"),this.root.setProperty("--bg-blur-navBar","rgba(255, 255, 255, 0.4)"),this.root.setProperty("--border-task","#c9c9c9"),this.root.setProperty("--shadow-finder","0px 20px 18px -18px rgba(21, 91, 166, 0.2)")}}function LA(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"navBar__btn__svg-addTask",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}function OA(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"navBarMobile__btn__svg-addTask",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}const q1=function(){const t=document.querySelector(".modal-newTask"),e=document.querySelector(".overlay");t.classList.remove("hidden"),e.classList.remove("hidden")};function MA(){const t=new cf;return L("nav",{className:"navBar-desktop",children:[g("img",{src:"logo.png",alt:"brand logo",height:34,style:{marginLeft:10}}),L("section",{className:"NVD-wrapperButtons",children:[L("button",{type:"button",className:"navBar-btn NBbtn-addTask",onClick:q1,children:[g(LA,{}),"Agregar Idea"]}),g("button",{type:"button",className:"navBar-btn NBbtn-signout",onClick:()=>{wv(On),t._makeLight()},children:"Cerrar Sesión"})]})]})}function $A(){return g("button",{className:"navBar__mobile-btnAdd",type:"button",name:"Button to add a new task",onClick:q1,children:g(OA,{})})}function bA(){const[t,e]=te.useState(!1);return te.useEffect(()=>{const n=window.matchMedia("(min-width: 624px)");e(n.matches);const r=()=>e(n.matches);return n.addListener(r),()=>n.removeListener(r)},[]),L("div",{children:[" ",t?g(MA,{}):g($A,{})," "]})}function UA(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"btn-darkIcon",children:g("path",{fillRule:"evenodd",d:"M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z",clipRule:"evenodd"})})}function FA(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"btn-lightIcon",children:g("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"})})}function VA(){const t=new cf;return L(Qa,{children:[g("button",{className:"btn-Dark",title:"button of moon",type:"button",onClick:()=>t._makeDark(),children:g(UA,{})}),g("button",{className:"btn-Light hidden",title:"button of sun",type:"button",onClick:()=>t._makeLight(),children:g(FA,{})})]})}function G1(){return L("section",{className:"container-loaderBar",children:[g("img",{src:"faRe.svg",alt:"Fare logo on landing page"}),g("div",{className:"loaderBar"})]})}function zA(){return g("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"message-emptyFormAddTak-svg",children:g("path",{fillRule:"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})})}function BA(){return L("section",{className:"message-emptyFormAddTak",children:[g(zA,{}),g("p",{children:"Error al agregar. El título o descripción no pueden estar vacios"})]})}function jA(){return L("article",{className:"message-taskAdded",children:[g(HA,{}),g("p",{children:"Idea agregada"})]})}function HA(){return g("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:g("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})}function KA({tasksArray:t,setTasksArray:e}){const n=On.currentUser.email,[r,i]=te.useState(!1),[s,o]=te.useState(!1),a=function(c,h){return c.trim()===""||h.trim()===""?(i(!0),setTimeout(()=>i(!1),5e3),!1):!0},l=function(){document.querySelector(".modal-newTask").classList.add("hidden"),document.querySelector(".overlay").classList.add("hidden")};return L("div",{className:"container-modal__NewTask",children:[g("div",{onClick:l,className:"overlay hidden"}),r?g(BA,{}):!1,s?g(jA,{}):!1,L("form",{className:"modal-newTask hidden",onSubmit:async function(c){c.preventDefault();const h=c.target.inputTitle.value,d=c.target.inputDescription.value;if(a(h,d)){const y=Fl(Hl,`users/${n}`),v=[{id:+new Date,title:h,description:d},...t];await H1(y,{tasks:[...v]}),e(v),o(!0),setTimeout(()=>o(!1),4500),c.target.inputTitle.value="",c.target.inputDescription.value=""}},children:[L("div",{className:"wrapper-header-modal-newTask",children:[g("h1",{className:"modal-newTask-h1",children:"Nueva idea"}),g("lord-icon",{src:"https://cdn.lordicon.com/pkmkagva.json",trigger:"loop",delay:"1500",colors:"primary:#5573ed",state:"hover"})]}),g("input",{id:"inputTitle",className:"modal-newTask-title",placeholder:"Título",autoComplete:"off"}),g("textarea",{id:"inputDescription",className:"modal-newTask-description",placeholder:"¿Qué hay en mente?",type:"text"}),L("button",{className:"btn-addTask",type:"submit",onClick:l,children:[g(WA,{})," Agregar"]})]})]})}function WA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}function qA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"finder-svg-search",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}function GA(){return g("svg",{className:"finder-svg-close",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12",className:"path"})})}function QA({lookFor:t,setIsSearching:e}){return g("section",{className:"section-finder",children:L("form",{className:"container-finder",children:[g(qA,{}),g("input",{className:"input",placeholder:"Buscar idea por título",type:"text",autoComplete:"off",onChangeCapture:t}),g("button",{className:"finder-btnClose",type:"reset",onClick:()=>e(!1),children:g(GA,{})})]})})}function XA(){return L("section",{className:"message-taskDeleted",children:[g(YA,{}),g("p",{children:"Idea eliminada"})]})}function YA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}function JA(){return L("section",{className:"message-copied",children:[g(ZA,{}),g("p",{children:"¡Copiado!"})]})}function ZA(){return g("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"})})}function eD({tasksArray:t,setTasksArray:e}){let n;const r=On.currentUser.email,[i,s]=te.useState(t),[o,a]=te.useState(!1),[l,u]=te.useState(!1),[c,h]=te.useState(!1),d=function(p){s(t.filter(f=>f.title.toLowerCase().includes(p.target.value.toLowerCase()))),a(!0)},y=function(p){navigator.clipboard.writeText(p).then(()=>{h(!0),setTimeout(()=>h(!1),3e3)}).catch(f=>console.error(f))},v=function(){document.querySelector(".overlayDelete").classList.add("hidden"),document.querySelector(".confirmDelete").classList.add("hidden")},w=function(){document.querySelector(".confirmDelete").classList.remove("hidden"),document.querySelector(".overlayDelete").classList.remove("hidden")},C=async function(p){u(!0),setTimeout(()=>u(!1),4500);const f=t.filter(E=>E.id!==p),m=Fl(Hl,`users/${r}`);await H1(m,{tasks:[...f]}),e(f),s(f)};return L("main",{className:"container-tasks",children:[l?g(XA,{}):!1,c?g(JA,{}):!1,g(QA,{lookFor:d,setIsSearching:a}),g("h1",{className:"tasks-header-h1",children:g("span",{className:"highlight-container",children:g("span",{className:"highlight",children:"Mis ideas"})})}),g("section",{className:"tasks",children:(o?i:t).map(function(p,f){return L("main",{children:[L("article",{className:"task",children:[L("div",{className:"taskDescription",children:[g("h2",{className:"task-title",children:p.title}),g("p",{className:"task-p",children:p.description})]}),g("input",{className:"btn-expandDescriptionTask",type:"checkbox","aria-label":"checkbox to collapse or exapand"}),L("div",{className:"wrapper-task-buttons",children:[g("button",{type:"button",className:"task__btn-complete","aria-label":"Completada",onClick:()=>{n=p.id,w()},children:"Completada"}),g("button",{className:"btn-copy",onClick:()=>y(p.description),children:L("svg",{viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#000000",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[g("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),g("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),g("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})]})})]})]}),L("div",{className:"confirmDelete hidden",children:[g("h4",{className:"confirmDelete-h4",children:"Eliminar Idea"}),g("p",{className:"confirmDelete-p",children:"Esta acción es permanente y no se puede deshacer"}),g("button",{type:"button",className:"confirmDelete-btn-quitModal",onClick:v,children:"Cancelar"}),g("button",{className:"confirmDelete-btn-deleteTask",type:"button",onClick:()=>{C(n),v()},children:g(tD,{})})]}),g("div",{className:"overlayDelete hidden"})]},f)})})]})}function tD(){return L("svg",{width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#ffffff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[g("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),g("path",{d:"M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z",strokeWidth:"0",fill:"currentColor"}),g("path",{d:"M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z",strokeWidth:"0",fill:"currentColor"})]})}function nD(){const t=On.currentUser.email,[e,n]=te.useState(!1),[r,i]=te.useState(null),[s,o]=te.useState(null),[a,l]=te.useState(!1),u=new cf,c=new Date().getDate(),h=new Date().toLocaleDateString("es-MX",{weekday:"long"}),y=`Hoy es ${h.slice(0,1).toUpperCase()+h.slice(1).toLowerCase()} ${c===1?"1ro":c}. ¿Algo nuevo?`,v=p=>p.trim().split(" ")[0],w=function(){wv(On),u._makeLight()},C=async function(){const p=Fl(Hl,`users/${t}`),f=await j1(p);if(f.exists()){const m=f.data(),E=m.data[0].name,I=v(E);i(I),o(m.tasks),l(!0)}else return};return te.useEffect(function(){C();const p=window.matchMedia("(min-width: 624px)");n(p.matches);const f=()=>n(p.matches);return p.addListener(f),()=>p.removeListener(f)},[]),g(Qa,{children:a?L("section",{children:[g(VA,{}),g(bA,{}),L("header",{className:"wrapper-welcomeText",children:[L("h1",{className:"welcomeText-h1",children:[g("span",{className:"blueText",children:"Hola"})," ",r]}),g("p",{className:"welcomeText-p",children:y})]}),g(KA,{tasksArray:s,setTasksArray:o}),s?g(eD,{tasksArray:s,setTasksArray:o}):null,e?null:g("button",{className:"btn-signOut-mobile",onClick:w,children:"Cerrar Sesión"})]}):g(G1,{})})}function rD(){const[t,e]=te.useState(null),[n,r]=te.useState(!1),[i,s]=te.useState(!0);return j_(On,function(o){o?(e(o),r(!0)):e(null)}),te.useEffect(()=>{setTimeout(()=>{s(!1)},4e3)},[]),g(Qa,{children:i?g(G1,{}):t?g(nD,{}):g(xA,{})})}const iD=By(document.getElementById("app"));iD.render(g(rD,{}));

function PE(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function zy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ld={exports:{}},Sa={},ud={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function kE(){if(ag)return Ae;ag=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,q={};function j(O,$,he){this.props=O,this.context=$,this.refs=q,this.updater=he||F}j.prototype.isReactComponent={},j.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},j.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function le(){}le.prototype=j.prototype;function ce(O,$,he){this.props=O,this.context=$,this.refs=q,this.updater=he||F}var fe=ce.prototype=new le;fe.constructor=ce,z(fe,j.prototype),fe.isPureReactComponent=!0;var Te=Array.isArray,je=Object.prototype.hasOwnProperty,Re={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(O,$,he){var Ie,Se={},Ne=null,Me=null;if($!=null)for(Ie in $.ref!==void 0&&(Me=$.ref),$.key!==void 0&&(Ne=""+$.key),$)je.call($,Ie)&&!x.hasOwnProperty(Ie)&&(Se[Ie]=$[Ie]);var be=arguments.length-2;if(be===1)Se.children=he;else if(1<be){for(var $e=Array(be),yt=0;yt<be;yt++)$e[yt]=arguments[yt+2];Se.children=$e}if(O&&O.defaultProps)for(Ie in be=O.defaultProps,be)Se[Ie]===void 0&&(Se[Ie]=be[Ie]);return{$$typeof:r,type:O,key:Ne,ref:Me,props:Se,_owner:Re.current}}function C(O,$){return{$$typeof:r,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return $[he]})}var V=/\/+/g;function A(O,$){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):$.toString(36)}function tt(O,$,he,Ie,Se){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,Se=Se(Me),O=Ie===""?"."+A(Me,0):Ie,Te(Se)?(he="",O!=null&&(he=O.replace(V,"$&/")+"/"),tt(Se,$,he,"",function(yt){return yt})):Se!=null&&(k(Se)&&(Se=C(Se,he+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(V,"$&/")+"/")+O)),$.push(Se)),1;if(Me=0,Ie=Ie===""?".":Ie+":",Te(O))for(var be=0;be<O.length;be++){Ne=O[be];var $e=Ie+A(Ne,be);Me+=tt(Ne,$,he,$e,Se)}else if($e=R(O),typeof $e=="function")for(O=$e.call(O),be=0;!(Ne=O.next()).done;)Ne=Ne.value,$e=Ie+A(Ne,be++),Me+=tt(Ne,$,he,$e,Se);else if(Ne==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Me}function xt(O,$,he){if(O==null)return O;var Ie=[],Se=0;return tt(O,Ie,"","",function(Ne){return $.call(he,Ne,Se++)}),Ie}function Dt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var Be={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Re};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:xt,forEach:function(O,$,he){xt(O,function(){$.apply(this,arguments)},he)},count:function(O){var $=0;return xt(O,function(){$++}),$},toArray:function(O){return xt(O,function($){return $})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=j,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ce,Ae.StrictMode=s,Ae.Suspense=m,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ae.act=ne,Ae.cloneElement=function(O,$,he){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=z({},O.props),Se=O.key,Ne=O.ref,Me=O._owner;if($!=null){if($.ref!==void 0&&(Ne=$.ref,Me=Re.current),$.key!==void 0&&(Se=""+$.key),O.type&&O.type.defaultProps)var be=O.type.defaultProps;for($e in $)je.call($,$e)&&!x.hasOwnProperty($e)&&(Ie[$e]=$[$e]===void 0&&be!==void 0?be[$e]:$[$e])}var $e=arguments.length-2;if($e===1)Ie.children=he;else if(1<$e){be=Array($e);for(var yt=0;yt<$e;yt++)be[yt]=arguments[yt+2];Ie.children=be}return{$$typeof:r,type:O.type,key:Se,ref:Ne,props:Ie,_owner:Me}},Ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Ae.createElement=S,Ae.createFactory=function(O){var $=S.bind(null,O);return $.type=O,$},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:f,render:O}},Ae.isValidElement=k,Ae.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Dt}},Ae.memo=function(O,$){return{$$typeof:v,type:O,compare:$===void 0?null:$}},Ae.startTransition=function(O){var $=ee.transition;ee.transition={};try{O()}finally{ee.transition=$}},Ae.unstable_act=ne,Ae.useCallback=function(O,$){return Be.current.useCallback(O,$)},Ae.useContext=function(O){return Be.current.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O){return Be.current.useDeferredValue(O)},Ae.useEffect=function(O,$){return Be.current.useEffect(O,$)},Ae.useId=function(){return Be.current.useId()},Ae.useImperativeHandle=function(O,$,he){return Be.current.useImperativeHandle(O,$,he)},Ae.useInsertionEffect=function(O,$){return Be.current.useInsertionEffect(O,$)},Ae.useLayoutEffect=function(O,$){return Be.current.useLayoutEffect(O,$)},Ae.useMemo=function(O,$){return Be.current.useMemo(O,$)},Ae.useReducer=function(O,$,he){return Be.current.useReducer(O,$,he)},Ae.useRef=function(O){return Be.current.useRef(O)},Ae.useState=function(O){return Be.current.useState(O)},Ae.useSyncExternalStore=function(O,$,he){return Be.current.useSyncExternalStore(O,$,he)},Ae.useTransition=function(){return Be.current.useTransition()},Ae.version="18.3.1",Ae}var lg;function tf(){return lg||(lg=1,ud.exports=kE()),ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function NE(){if(ug)return Sa;ug=1;var r=tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,v){var E,T={},R=null,F=null;v!==void 0&&(R=""+v),m.key!==void 0&&(R=""+m.key),m.ref!==void 0&&(F=m.ref);for(E in m)s.call(m,E)&&!l.hasOwnProperty(E)&&(T[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)T[E]===void 0&&(T[E]=m[E]);return{$$typeof:e,type:f,key:R,ref:F,props:T,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var cg;function xE(){return cg||(cg=1,ld.exports=NE()),ld.exports}var X=xE(),K=tf();const $y=zy(K),DE=PE({__proto__:null,default:$y},[K]);var ku={},cd={exports:{}},en={},hd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function OE(){return hg||(hg=1,function(r){function e(ee,pe){var ne=ee.length;ee.push(pe);e:for(;0<ne;){var O=ne-1>>>1,$=ee[O];if(0<o($,pe))ee[O]=pe,ee[ne]=$,ne=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var pe=ee[0],ne=ee.pop();if(ne!==pe){ee[0]=ne;e:for(var O=0,$=ee.length,he=$>>>1;O<he;){var Ie=2*(O+1)-1,Se=ee[Ie],Ne=Ie+1,Me=ee[Ne];if(0>o(Se,ne))Ne<$&&0>o(Me,Se)?(ee[O]=Me,ee[Ne]=ne,O=Ne):(ee[O]=Se,ee[Ie]=ne,O=Ie);else if(Ne<$&&0>o(Me,ne))ee[O]=Me,ee[Ne]=ne,O=Ne;else break e}}return pe}function o(ee,pe){var ne=ee.sortIndex-pe.sortIndex;return ne!==0?ne:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var m=[],v=[],E=1,T=null,R=3,F=!1,z=!1,q=!1,j=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(ee){for(var pe=t(v);pe!==null;){if(pe.callback===null)s(v);else if(pe.startTime<=ee)s(v),pe.sortIndex=pe.expirationTime,e(m,pe);else break;pe=t(v)}}function Te(ee){if(q=!1,fe(ee),!z)if(t(m)!==null)z=!0,Dt(je);else{var pe=t(v);pe!==null&&Be(Te,pe.startTime-ee)}}function je(ee,pe){z=!1,q&&(q=!1,le(S),S=-1),F=!0;var ne=R;try{for(fe(pe),T=t(m);T!==null&&(!(T.expirationTime>pe)||ee&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,R=T.priorityLevel;var $=O(T.expirationTime<=pe);pe=r.unstable_now(),typeof $=="function"?T.callback=$:T===t(m)&&s(m),fe(pe)}else s(m);T=t(m)}if(T!==null)var he=!0;else{var Ie=t(v);Ie!==null&&Be(Te,Ie.startTime-pe),he=!1}return he}finally{T=null,R=ne,F=!1}}var Re=!1,x=null,S=-1,C=5,k=-1;function D(){return!(r.unstable_now()-k<C)}function V(){if(x!==null){var ee=r.unstable_now();k=ee;var pe=!0;try{pe=x(!0,ee)}finally{pe?A():(Re=!1,x=null)}}else Re=!1}var A;if(typeof ce=="function")A=function(){ce(V)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,xt=tt.port2;tt.port1.onmessage=V,A=function(){xt.postMessage(null)}}else A=function(){j(V,0)};function Dt(ee){x=ee,Re||(Re=!0,A())}function Be(ee,pe){S=j(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){z||F||(z=!0,Dt(je))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(ee){switch(R){case 1:case 2:case 3:var pe=3;break;default:pe=R}var ne=R;R=pe;try{return ee()}finally{R=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=R;R=ee;try{return pe()}finally{R=ne}},r.unstable_scheduleCallback=function(ee,pe,ne){var O=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,ee){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,ee={id:E++,callback:pe,priorityLevel:ee,startTime:ne,expirationTime:$,sortIndex:-1},ne>O?(ee.sortIndex=ne,e(v,ee),t(m)===null&&ee===t(v)&&(q?(le(S),S=-1):q=!0,Be(Te,ne-O))):(ee.sortIndex=$,e(m,ee),z||F||(z=!0,Dt(je))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var pe=R;return function(){var ne=R;R=pe;try{return ee.apply(this,arguments)}finally{R=ne}}}}(dd)),dd}var dg;function VE(){return dg||(dg=1,hd.exports=OE()),hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function LE(){if(fg)return en;fg=1;var r=tf(),e=VE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function R(n){return m.call(T,n)?!0:m.call(E,n)?!1:v.test(n)?T[n]=!0:(E[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(n,i,a,c,d,g,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=_}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];j[i]=new q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(le,ce);j[i]=new q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(le,ce);j[i]=new q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(le,ce);j[i]=new q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function fe(n,i,a,c){var d=j.hasOwnProperty(i)?j[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(z(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Re=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var he=!1;function Ie(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),g=c.stack.split(`
`),_=d.length-1,I=g.length-1;1<=_&&0<=I&&d[_]!==g[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==g[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==g[I]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=I);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Se(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Re:return"Portal";case C:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xt:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case Dt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,g.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function rr(n){n._valueTracker||(n._valueTracker=yt(n))}function ms(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Si(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function gs(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function No(n,i){i=i.checked,i!=null&&fe(n,"checked",i,!1)}function xo(n,i){No(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ys(n,i.type,a):i.hasOwnProperty("defaultValue")&&ys(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function pl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ys(n,i,a){(i!=="number"||Or(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ir=Array.isArray;function sr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Do(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function _s(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Oo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var or,Vo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Vr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ri=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(n){Ri.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ai[i]=Ai[n]})});function Lo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ai.hasOwnProperty(n)&&Ai[n]?(""+i).trim():i+"px"}function Mo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var bo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(n,i){if(i){if(bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Uo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ws=null,dn=null,jn=null;function Ts(n){if(n=ua(n)){if(typeof ws!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wl(i),ws(n.stateNode,n.type,i))}}function Bn(n){dn?jn?jn.push(n):jn=[n]:dn=n}function jo(){if(dn){var n=dn,i=jn;if(jn=dn=null,Ts(n),i)for(n=0;n<i.length;n++)Ts(i[n])}}function Pi(n,i){return n(i)}function Bo(){}var ar=!1;function zo(n,i,a){if(ar)return n(i,a);ar=!0;try{return Pi(n,i,a)}finally{ar=!1,(dn!==null||jn!==null)&&(Bo(),jo())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Wl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Is=!1;if(f)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Is=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Is=!1}function ki(n,i,a,c,d,g,_,I,P){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(G){this.onError(G)}}var Ni=!1,Ss=null,In=!1,$o=null,Mc={onError:function(n){Ni=!0,Ss=n}};function As(n,i,a,c,d,g,_,I,P){Ni=!1,Ss=null,ki.apply(Mc,arguments)}function ml(n,i,a,c,d,g,_,I,P){if(As.apply(this,arguments),Ni){if(Ni){var U=Ss;Ni=!1,Ss=null}else throw Error(t(198));In||(In=!0,$o=U)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function xi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function gl(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return An(d),n;if(g===c)return An(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=g;break}if(I===c){_=!0,c=d,a=g;break}I=I.sibling}if(!_){for(I=g.child;I;){if(I===a){_=!0,a=g,c=d;break}if(I===c){_=!0,c=g,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Wo(n){return n=gl(n),n!==null?Rs(n):null}function Rs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Rs(n);if(i!==null)return i;n=n.sibling}return null}var Cs=e.unstable_scheduleCallback,qo=e.unstable_cancelCallback,yl=e.unstable_shouldYield,bc=e.unstable_requestPaint,We=e.unstable_now,vl=e.unstable_getCurrentPriorityLevel,Di=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,_l=e.unstable_IdlePriority,Oi=null,nn=null;function El(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Tl,Ko=Math.log,wl=Math.LN2;function Tl(n){return n>>>=0,n===0?32:31-(Ko(n)/wl|0)|0}var Ps=64,ks=4194304;function Mr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Mr(I):(g&=_,g!==0&&(c=Mr(g)))}else _=a&~d,_!==0?c=Mr(_):g!==0&&(c=Mr(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-zt(i),d=1<<a,c|=n[a],i&=~d;return c}function Fc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var _=31-zt(g),I=1<<_,P=d[_];P===-1?((I&a)===0||(I&c)!==0)&&(d[_]=Fc(I,i)):P<=i&&(n.expiredLanes|=I),g&=~I}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Li(){var n=Ps;return Ps<<=1,(Ps&4194240)===0&&(Ps=64),n}function br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Fr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-zt(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Ur(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function jr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Il,Ns,Sl,Al,Rl,Go=!1,zn=[],It=null,Rn=null,Cn=null,Br=new Map,pn=new Map,$n=[],Uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cl(n,i){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Br.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(i.pointerId)}}function Kt(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=ua(i),i!==null&&Ns(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function jc(n,i,a,c,d){switch(i){case"focusin":return It=Kt(It,n,i,a,c,d),!0;case"dragenter":return Rn=Kt(Rn,n,i,a,c,d),!0;case"mouseover":return Cn=Kt(Cn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Br.set(g,Kt(Br.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,pn.set(g,Kt(pn.get(g)||null,n,i,a,c,d)),!0}return!1}function Pl(n){var i=ji(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=xi(a),i!==null){n.blockedOn=i,Rl(n.priority,function(){Sl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ur(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ci=c,a.target.dispatchEvent(c),Ci=null}else return i=ua(a),i!==null&&Ns(i),n.blockedOn=a,!1;i.shift()}return!0}function Mi(n,i,a){ur(n)&&a.delete(i)}function kl(){Go=!1,It!==null&&ur(It)&&(It=null),Rn!==null&&ur(Rn)&&(Rn=null),Cn!==null&&ur(Cn)&&(Cn=null),Br.forEach(Mi),pn.forEach(Mi)}function Pn(n,i){n.blockedOn===i&&(n.blockedOn=null,Go||(Go=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kl)))}function kn(n){function i(d){return Pn(d,n)}if(0<zn.length){Pn(zn[0],n);for(var a=1;a<zn.length;a++){var c=zn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&Pn(It,n),Rn!==null&&Pn(Rn,n),Cn!==null&&Pn(Cn,n),Br.forEach(i),pn.forEach(i),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)Pl(a),a.blockedOn===null&&$n.shift()}var cr=Te.ReactCurrentBatchConfig,zr=!0;function Qe(n,i,a,c){var d=Pe,g=cr.transition;cr.transition=null;try{Pe=1,Qo(n,i,a,c)}finally{Pe=d,cr.transition=g}}function Bc(n,i,a,c){var d=Pe,g=cr.transition;cr.transition=null;try{Pe=4,Qo(n,i,a,c)}finally{Pe=d,cr.transition=g}}function Qo(n,i,a,c){if(zr){var d=xs(n,i,a,c);if(d===null)Jc(n,i,c,bi,a),Cl(n,c);else if(jc(d,n,i,a,c))c.stopPropagation();else if(Cl(n,c),i&4&&-1<Uc.indexOf(n)){for(;d!==null;){var g=ua(d);if(g!==null&&Il(g),g=xs(n,i,a,c),g===null&&Jc(n,i,c,bi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Jc(n,i,c,null,a)}}var bi=null;function xs(n,i,a,c){if(bi=null,n=Es(c),n=ji(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=xi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return bi=n,null}function Yo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vl()){case Di:return 1;case Lr:return 4;case fn:case Ho:return 16;case _l:return 536870912;default:return 16}default:return 16}}var sn=null,Ds=null,Gt=null;function Xo(){if(Gt)return Gt;var n,i=Ds,a=i.length,c,d="value"in sn?sn.value:sn.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[g-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Os(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function Jo(){return!1}function St(n){function i(a,c,d,g,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Wn:Jo,this.isPropagationStopped=Jo,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=St(Nn),qn=ne({},Nn,{view:0,detail:0}),zc=St(qn),Ls,hr,$r,Fi=ne({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$r&&($r&&n.type==="mousemove"?(Ls=n.screenX-$r.screenX,hr=n.screenY-$r.screenY):hr=Ls=0,$r=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:hr}}),Ms=St(Fi),Zo=ne({},Fi,{dataTransfer:0}),Nl=St(Zo),bs=ne({},qn,{relatedTarget:0}),Fs=St(bs),xl=ne({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),dr=St(xl),Dl=ne({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ol=St(Dl),Vl=ne({},Nn,{data:0}),ea=St(Vl),Us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ll={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ml(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ll[n])?!!i[n]:!1}function Hn(){return Ml}var u=ne({},qn,{key:function(n){if(n.key){var i=Us[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Os(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?Os(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Os(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=St(u),y=ne({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=St(y),L=ne({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),B=St(L),Z=ne({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=St(Z),dt=ne({},Fi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=St(dt),vt=[9,13,27,32],st=f&&"CompositionEvent"in window,mn=null;f&&"documentMode"in document&&(mn=document.documentMode);var on=f&&"TextEvent"in window&&!mn,Ui=f&&(!st||mn&&8<mn&&11>=mn),js=" ",tp=!1;function np(n,i){switch(n){case"keyup":return vt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function A0(n,i){switch(n){case"compositionend":return rp(i);case"keypress":return i.which!==32?null:(tp=!0,js);case"textInput":return n=i.data,n===js&&tp?null:n;default:return null}}function R0(n,i){if(Bs)return n==="compositionend"||!st&&np(n,i)?(n=Xo(),Gt=Ds=sn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ui&&i.locale!=="ko"?null:i.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!C0[n.type]:i==="textarea"}function sp(n,i,a,c){Bn(c),i=Bl(i,"onChange"),0<i.length&&(a=new Vs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ta=null,na=null;function P0(n){Ip(n,0)}function bl(n){var i=Hs(n);if(ms(i))return n}function k0(n,i){if(n==="change")return i}var op=!1;if(f){var $c;if(f){var Wc="oninput"in document;if(!Wc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Wc=typeof ap.oninput=="function"}$c=Wc}else $c=!1;op=$c&&(!document.documentMode||9<document.documentMode)}function lp(){ta&&(ta.detachEvent("onpropertychange",up),na=ta=null)}function up(n){if(n.propertyName==="value"&&bl(na)){var i=[];sp(i,na,n,Es(n)),zo(P0,i)}}function N0(n,i,a){n==="focusin"?(lp(),ta=i,na=a,ta.attachEvent("onpropertychange",up)):n==="focusout"&&lp()}function x0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bl(na)}function D0(n,i){if(n==="click")return bl(i)}function O0(n,i){if(n==="input"||n==="change")return bl(i)}function V0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xn=typeof Object.is=="function"?Object.is:V0;function ra(n,i){if(xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!xn(n[d],i[d]))return!1}return!0}function cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hp(n,i){var a=cp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function dp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fp(){for(var n=window,i=Or();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Or(n.document)}return i}function qc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function L0(n){var i=fp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&dp(a.ownerDocument.documentElement,a)){if(c!==null&&qc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=hp(a,g);var _=hp(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var M0=f&&"documentMode"in document&&11>=document.documentMode,zs=null,Hc=null,ia=null,Kc=!1;function pp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||zs==null||zs!==Or(c)||(c=zs,"selectionStart"in c&&qc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=Bl(Hc,"onSelect"),0<c.length&&(i=new Vs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=zs)))}function Fl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var $s={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Gc={},mp={};f&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Ul(n){if(Gc[n])return Gc[n];if(!$s[n])return n;var i=$s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in mp)return Gc[n]=i[a];return n}var gp=Ul("animationend"),yp=Ul("animationiteration"),vp=Ul("animationstart"),_p=Ul("transitionend"),Ep=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,i){Ep.set(n,i),l(i,[n])}for(var Qc=0;Qc<wp.length;Qc++){var Yc=wp[Qc],b0=Yc.toLowerCase(),F0=Yc[0].toUpperCase()+Yc.slice(1);Wr(b0,"on"+F0)}Wr(gp,"onAnimationEnd"),Wr(yp,"onAnimationIteration"),Wr(vp,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(_p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Tp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ml(c,i,void 0,n),n.currentTarget=null}function Ip(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var _=c.length-1;0<=_;_--){var I=c[_],P=I.instance,U=I.currentTarget;if(I=I.listener,P!==g&&d.isPropagationStopped())break e;Tp(d,I,U),g=P}else for(_=0;_<c.length;_++){if(I=c[_],P=I.instance,U=I.currentTarget,I=I.listener,P!==g&&d.isPropagationStopped())break e;Tp(d,I,U),g=P}}}if(In)throw n=$o,In=!1,$o=null,n}function He(n,i){var a=i[ih];a===void 0&&(a=i[ih]=new Set);var c=n+"__bubble";a.has(c)||(Sp(i,n,2,!1),a.add(c))}function Xc(n,i,a){var c=0;i&&(c|=4),Sp(a,n,c,i)}var jl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[jl]){n[jl]=!0,s.forEach(function(a){a!=="selectionchange"&&(U0.has(a)||Xc(a,!1,n),Xc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jl]||(i[jl]=!0,Xc("selectionchange",!1,i))}}function Sp(n,i,a,c){switch(Yo(i)){case 1:var d=Qe;break;case 4:d=Bc;break;default:d=Qo}a=d.bind(null,i,a,n),d=void 0,!Is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Jc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;I!==null;){if(_=ji(I),_===null)return;if(P=_.tag,P===5||P===6){c=g=_;continue e}I=I.parentNode}}c=c.return}zo(function(){var U=g,G=Es(a),Y=[];e:{var H=Ep.get(n);if(H!==void 0){var te=Vs,se=n;switch(n){case"keypress":if(Os(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":se="focus",te=Fs;break;case"focusout":se="blur",te=Fs;break;case"beforeblur":case"afterblur":te=Fs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=B;break;case gp:case yp:case vp:te=dr;break;case _p:te=Fe;break;case"scroll":te=zc;break;case"wheel":te=xe;break;case"copy":case"cut":case"paste":te=Ol;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=w}var oe=(i&4)!==0,rt=!oe&&n==="scroll",M=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=U,b;N!==null;){b=N;var J=b.stateNode;if(b.tag===5&&J!==null&&(b=J,M!==null&&(J=nt(N,M),J!=null&&oe.push(aa(N,J,b)))),rt)break;N=N.return}0<oe.length&&(H=new te(H,se,null,a,G),Y.push({event:H,listeners:oe}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==Ci&&(se=a.relatedTarget||a.fromElement)&&(ji(se)||se[fr]))break e;if((te||H)&&(H=G.window===G?G:(H=G.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=U,se=se?ji(se):null,se!==null&&(rt=Sn(se),se!==rt||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=U),te!==se)){if(oe=Ms,J="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=w,J="onPointerLeave",M="onPointerEnter",N="pointer"),rt=te==null?H:Hs(te),b=se==null?H:Hs(se),H=new oe(J,N+"leave",te,a,G),H.target=rt,H.relatedTarget=b,J=null,ji(G)===U&&(oe=new oe(M,N+"enter",se,a,G),oe.target=b,oe.relatedTarget=rt,J=oe),rt=J,te&&se)t:{for(oe=te,M=se,N=0,b=oe;b;b=Ws(b))N++;for(b=0,J=M;J;J=Ws(J))b++;for(;0<N-b;)oe=Ws(oe),N--;for(;0<b-N;)M=Ws(M),b--;for(;N--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Ws(oe),M=Ws(M)}oe=null}else oe=null;te!==null&&Ap(Y,H,te,oe,!1),se!==null&&rt!==null&&Ap(Y,rt,se,oe,!0)}}e:{if(H=U?Hs(U):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ue=k0;else if(ip(H))if(op)ue=O0;else{ue=x0;var me=N0}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ue=D0);if(ue&&(ue=ue(n,U))){sp(Y,ue,a,G);break e}me&&me(n,H,U),n==="focusout"&&(me=H._wrapperState)&&me.controlled&&H.type==="number"&&ys(H,"number",H.value)}switch(me=U?Hs(U):window,n){case"focusin":(ip(me)||me.contentEditable==="true")&&(zs=me,Hc=U,ia=null);break;case"focusout":ia=Hc=zs=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,pp(Y,a,G);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":pp(Y,a,G)}var ge;if(st)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Bs?np(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Ui&&a.locale!=="ko"&&(Bs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Bs&&(ge=Xo()):(sn=G,Ds="value"in sn?sn.value:sn.textContent,Bs=!0)),me=Bl(U,ve),0<me.length&&(ve=new ea(ve,n,null,a,G),Y.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=rp(a),ge!==null&&(ve.data=ge)))),(ge=on?A0(n,a):R0(n,a))&&(U=Bl(U,"onBeforeInput"),0<U.length&&(G=new ea("onBeforeInput","beforeinput",null,a,G),Y.push({event:G,listeners:U}),G.data=ge))}Ip(Y,i)})}function aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=nt(n,a),g!=null&&c.unshift(aa(n,g,d)),g=nt(n,i),g!=null&&c.push(aa(n,g,d))),n=n.return}return c}function Ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ap(n,i,a,c,d){for(var g=i._reactName,_=[];a!==null&&a!==c;){var I=a,P=I.alternate,U=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&U!==null&&(I=U,d?(P=nt(a,g),P!=null&&_.unshift(aa(a,P,I))):d||(P=nt(a,g),P!=null&&_.push(aa(a,P,I)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var j0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function Rp(n){return(typeof n=="string"?n:""+n).replace(j0,`
`).replace(B0,"")}function zl(n,i,a){if(i=Rp(i),Rp(n)!==i&&a)throw Error(t(425))}function $l(){}var Zc=null,eh=null;function th(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(n){return Cp.resolve(null).then(n).catch(W0)}:nh;function W0(n){setTimeout(function(){throw n})}function rh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(i)}function qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Pp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+qs,la="__reactProps$"+qs,fr="__reactContainer$"+qs,ih="__reactEvents$"+qs,q0="__reactListeners$"+qs,H0="__reactHandles$"+qs;function ji(n){var i=n[Kn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[fr]||a[Kn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Pp(n);n!==null;){if(a=n[Kn])return a;n=Pp(n)}return i}n=a,a=n.parentNode}return null}function ua(n){return n=n[Kn]||n[fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wl(n){return n[la]||null}var sh=[],Ks=-1;function Hr(n){return{current:n}}function Ke(n){0>Ks||(n.current=sh[Ks],sh[Ks]=null,Ks--)}function qe(n,i){Ks++,sh[Ks]=n.current,n.current=i}var Kr={},Ot=Hr(Kr),Qt=Hr(!1),Bi=Kr;function Gs(n,i){var a=n.type.contextTypes;if(!a)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function ql(){Ke(Qt),Ke(Ot)}function kp(n,i,a){if(Ot.current!==Kr)throw Error(t(168));qe(Ot,i),qe(Qt,a)}function Np(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return ne({},a,c)}function Hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Bi=Ot.current,qe(Ot,n),qe(Qt,Qt.current),!0}function xp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Np(n,i,Bi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Qt),Ke(Ot),qe(Ot,n)):Ke(Qt),qe(Qt,a)}var pr=null,Kl=!1,oh=!1;function Dp(n){pr===null?pr=[n]:pr.push(n)}function K0(n){Kl=!0,Dp(n)}function Gr(){if(!oh&&pr!==null){oh=!0;var n=0,i=Pe;try{var a=pr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}pr=null,Kl=!1}catch(d){throw pr!==null&&(pr=pr.slice(n+1)),Cs(Di,Gr),d}finally{Pe=i,oh=!1}}return null}var Qs=[],Ys=0,Gl=null,Ql=0,gn=[],yn=0,zi=null,mr=1,gr="";function $i(n,i){Qs[Ys++]=Ql,Qs[Ys++]=Gl,Gl=n,Ql=i}function Op(n,i,a){gn[yn++]=mr,gn[yn++]=gr,gn[yn++]=zi,zi=n;var c=mr;n=gr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var g=32-zt(i)+d;if(30<g){var _=d-d%5;g=(c&(1<<_)-1).toString(32),c>>=_,d-=_,mr=1<<32-zt(i)+d|a<<d|c,gr=g+n}else mr=1<<g|a<<d|c,gr=n}function ah(n){n.return!==null&&($i(n,1),Op(n,1,0))}function lh(n){for(;n===Gl;)Gl=Qs[--Ys],Qs[Ys]=null,Ql=Qs[--Ys],Qs[Ys]=null;for(;n===zi;)zi=gn[--yn],gn[yn]=null,gr=gn[--yn],gn[yn]=null,mr=gn[--yn],gn[yn]=null}var an=null,ln=null,Ye=!1,Dn=null;function Vp(n,i){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Lp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,an=n,ln=qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,an=n,ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zi!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function uh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ch(n){if(Ye){var i=ln;if(i){var a=i;if(!Lp(n,i)){if(uh(n))throw Error(t(418));i=qr(a.nextSibling);var c=an;i&&Lp(n,i)?Vp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,an=n)}}else{if(uh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,an=n}}}function Mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Yl(n){if(n!==an)return!1;if(!Ye)return Mp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!th(n.type,n.memoizedProps)),i&&(i=ln)){if(uh(n))throw bp(),Error(t(418));for(;i;)Vp(n,i),i=qr(i.nextSibling)}if(Mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ln=qr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ln=null}}else ln=an?qr(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=ln;n;)n=qr(n.nextSibling)}function Xs(){ln=an=null,Ye=!1}function hh(n){Dn===null?Dn=[n]:Dn.push(n)}var G0=Te.ReactCurrentBatchConfig;function ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(_){var I=d.refs;_===null?delete I[g]:I[g]=_},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Xl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Fp(n){var i=n._init;return i(n._payload)}function Up(n){function i(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)i(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=ni(M,N),M.index=0,M.sibling=null,M}function g(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,N,b,J){return N===null||N.tag!==6?(N=nd(b,M.mode,J),N.return=M,N):(N=d(N,b),N.return=M,N)}function P(M,N,b,J){var ue=b.type;return ue===x?G(M,N,b.props.children,J,b.key):N!==null&&(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Dt&&Fp(ue)===N.type)?(J=d(N,b.props),J.ref=ca(M,N,b),J.return=M,J):(J=wu(b.type,b.key,b.props,null,M.mode,J),J.ref=ca(M,N,b),J.return=M,J)}function U(M,N,b,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=rd(b,M.mode,J),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function G(M,N,b,J,ue){return N===null||N.tag!==7?(N=Xi(b,M.mode,J,ue),N.return=M,N):(N=d(N,b),N.return=M,N)}function Y(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=nd(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case je:return b=wu(N.type,N.key,N.props,null,M.mode,b),b.ref=ca(M,null,N),b.return=M,b;case Re:return N=rd(N,M.mode,b),N.return=M,N;case Dt:var J=N._init;return Y(M,J(N._payload),b)}if(ir(N)||pe(N))return N=Xi(N,M.mode,b,null),N.return=M,N;Xl(M,N)}return null}function H(M,N,b,J){var ue=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ue!==null?null:I(M,N,""+b,J);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case je:return b.key===ue?P(M,N,b,J):null;case Re:return b.key===ue?U(M,N,b,J):null;case Dt:return ue=b._init,H(M,N,ue(b._payload),J)}if(ir(b)||pe(b))return ue!==null?null:G(M,N,b,J,null);Xl(M,b)}return null}function te(M,N,b,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(b)||null,I(N,M,""+J,ue);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case je:return M=M.get(J.key===null?b:J.key)||null,P(N,M,J,ue);case Re:return M=M.get(J.key===null?b:J.key)||null,U(N,M,J,ue);case Dt:var me=J._init;return te(M,N,b,me(J._payload),ue)}if(ir(J)||pe(J))return M=M.get(b)||null,G(N,M,J,ue,null);Xl(N,J)}return null}function se(M,N,b,J){for(var ue=null,me=null,ge=N,ve=N=0,wt=null;ge!==null&&ve<b.length;ve++){ge.index>ve?(wt=ge,ge=null):wt=ge.sibling;var Ve=H(M,ge,b[ve],J);if(Ve===null){ge===null&&(ge=wt);break}n&&ge&&Ve.alternate===null&&i(M,ge),N=g(Ve,N,ve),me===null?ue=Ve:me.sibling=Ve,me=Ve,ge=wt}if(ve===b.length)return a(M,ge),Ye&&$i(M,ve),ue;if(ge===null){for(;ve<b.length;ve++)ge=Y(M,b[ve],J),ge!==null&&(N=g(ge,N,ve),me===null?ue=ge:me.sibling=ge,me=ge);return Ye&&$i(M,ve),ue}for(ge=c(M,ge);ve<b.length;ve++)wt=te(ge,M,ve,b[ve],J),wt!==null&&(n&&wt.alternate!==null&&ge.delete(wt.key===null?ve:wt.key),N=g(wt,N,ve),me===null?ue=wt:me.sibling=wt,me=wt);return n&&ge.forEach(function(ri){return i(M,ri)}),Ye&&$i(M,ve),ue}function oe(M,N,b,J){var ue=pe(b);if(typeof ue!="function")throw Error(t(150));if(b=ue.call(b),b==null)throw Error(t(151));for(var me=ue=null,ge=N,ve=N=0,wt=null,Ve=b.next();ge!==null&&!Ve.done;ve++,Ve=b.next()){ge.index>ve?(wt=ge,ge=null):wt=ge.sibling;var ri=H(M,ge,Ve.value,J);if(ri===null){ge===null&&(ge=wt);break}n&&ge&&ri.alternate===null&&i(M,ge),N=g(ri,N,ve),me===null?ue=ri:me.sibling=ri,me=ri,ge=wt}if(Ve.done)return a(M,ge),Ye&&$i(M,ve),ue;if(ge===null){for(;!Ve.done;ve++,Ve=b.next())Ve=Y(M,Ve.value,J),Ve!==null&&(N=g(Ve,N,ve),me===null?ue=Ve:me.sibling=Ve,me=Ve);return Ye&&$i(M,ve),ue}for(ge=c(M,ge);!Ve.done;ve++,Ve=b.next())Ve=te(ge,M,ve,Ve.value,J),Ve!==null&&(n&&Ve.alternate!==null&&ge.delete(Ve.key===null?ve:Ve.key),N=g(Ve,N,ve),me===null?ue=Ve:me.sibling=Ve,me=Ve);return n&&ge.forEach(function(CE){return i(M,CE)}),Ye&&$i(M,ve),ue}function rt(M,N,b,J){if(typeof b=="object"&&b!==null&&b.type===x&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case je:e:{for(var ue=b.key,me=N;me!==null;){if(me.key===ue){if(ue=b.type,ue===x){if(me.tag===7){a(M,me.sibling),N=d(me,b.props.children),N.return=M,M=N;break e}}else if(me.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Dt&&Fp(ue)===me.type){a(M,me.sibling),N=d(me,b.props),N.ref=ca(M,me,b),N.return=M,M=N;break e}a(M,me);break}else i(M,me);me=me.sibling}b.type===x?(N=Xi(b.props.children,M.mode,J,b.key),N.return=M,M=N):(J=wu(b.type,b.key,b.props,null,M.mode,J),J.ref=ca(M,N,b),J.return=M,M=J)}return _(M);case Re:e:{for(me=b.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else i(M,N);N=N.sibling}N=rd(b,M.mode,J),N.return=M,M=N}return _(M);case Dt:return me=b._init,rt(M,N,me(b._payload),J)}if(ir(b))return se(M,N,b,J);if(pe(b))return oe(M,N,b,J);Xl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=nd(b,M.mode,J),N.return=M,M=N),_(M)):a(M,N)}return rt}var Js=Up(!0),jp=Up(!1),Jl=Hr(null),Zl=null,Zs=null,dh=null;function fh(){dh=Zs=Zl=null}function ph(n){var i=Jl.current;Ke(Jl),n._currentValue=i}function mh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function eo(n,i){Zl=n,dh=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xt=!0),n.firstContext=null)}function vn(n){var i=n._currentValue;if(dh!==n)if(n={context:n,memoizedValue:i,next:null},Zs===null){if(Zl===null)throw Error(t(308));Zs=n,Zl.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return i}var Wi=null;function gh(n){Wi===null?Wi=[n]:Wi.push(n)}function Bp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,gh(i)):(a.next=d.next,d.next=a),i.interleaved=a,yr(n,c)}function yr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Qr=!1;function yh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,yr(n,a)}return d=c.interleaved,d===null?(i.next=i,gh(c)):(i.next=d.next,d.next=i),c.interleaved=i,yr(n,a)}function eu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}function $p(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=_:g=g.next=_,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function tu(n,i,a,c){var d=n.updateQueue;Qr=!1;var g=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,U=P.next;P.next=null,_===null?g=U:_.next=U,_=P;var G=n.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==_&&(I===null?G.firstBaseUpdate=U:I.next=U,G.lastBaseUpdate=P))}if(g!==null){var Y=d.baseState;_=0,G=U=P=null,I=g;do{var H=I.lane,te=I.eventTime;if((c&H)===H){G!==null&&(G=G.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,oe=I;switch(H=i,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Y=se.call(te,Y,H);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(te,Y,H):se,H==null)break e;Y=ne({},Y,H);break e;case 2:Qr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[I]:H.push(I))}else te={eventTime:te,lane:H,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(U=G=te,P=Y):G=G.next=te,_|=H;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;H=I,I=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(G===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Ki|=_,n.lanes=_,n.memoizedState=Y}}function Wp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},Gn=Hr(ha),da=Hr(ha),fa=Hr(ha);function qi(n){if(n===ha)throw Error(t(174));return n}function vh(n,i){switch(qe(fa,i),qe(da,n),qe(Gn,ha),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ht(i,n)}Ke(Gn),qe(Gn,i)}function to(){Ke(Gn),Ke(da),Ke(fa)}function qp(n){qi(fa.current);var i=qi(Gn.current),a=ht(i,n.type);i!==a&&(qe(da,n),qe(Gn,a))}function _h(n){da.current===n&&(Ke(Gn),Ke(da))}var Xe=Hr(0);function nu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Eh=[];function wh(){for(var n=0;n<Eh.length;n++)Eh[n]._workInProgressVersionPrimary=null;Eh.length=0}var ru=Te.ReactCurrentDispatcher,Th=Te.ReactCurrentBatchConfig,Hi=0,Je=null,ft=null,_t=null,iu=!1,pa=!1,ma=0,Q0=0;function Vt(){throw Error(t(321))}function Ih(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xn(n[a],i[a]))return!1;return!0}function Sh(n,i,a,c,d,g){if(Hi=g,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ru.current=n===null||n.memoizedState===null?Z0:eE,n=a(c,d),pa){g=0;do{if(pa=!1,ma=0,25<=g)throw Error(t(301));g+=1,_t=ft=null,i.updateQueue=null,ru.current=tE,n=a(c,d)}while(pa)}if(ru.current=au,i=ft!==null&&ft.next!==null,Hi=0,_t=ft=Je=null,iu=!1,i)throw Error(t(300));return n}function Ah(){var n=ma!==0;return ma=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Je.memoizedState=_t=n:_t=_t.next=n,_t}function _n(){if(ft===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var i=_t===null?Je.memoizedState:_t.next;if(i!==null)_t=i,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},_t===null?Je.memoizedState=_t=n:_t=_t.next=n}return _t}function ga(n,i){return typeof i=="function"?i(n):i}function Rh(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var _=d.next;d.next=g.next,g.next=_}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var I=_=null,P=null,U=g;do{var G=U.lane;if((Hi&G)===G)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Y={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(I=P=Y,_=c):P=P.next=Y,Je.lanes|=G,Ki|=G}U=U.next}while(U!==null&&U!==g);P===null?_=c:P.next=I,xn(c,i.memoizedState)||(Xt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Je.lanes|=g,Ki|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ch(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do g=n(g,_.action),_=_.next;while(_!==d);xn(g,i.memoizedState)||(Xt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Hp(){}function Kp(n,i){var a=Je,c=_n(),d=i(),g=!xn(c.memoizedState,d);if(g&&(c.memoizedState=d,Xt=!0),c=c.queue,Ph(Yp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,ya(9,Qp.bind(null,a,c,d,i),void 0,null),Et===null)throw Error(t(349));(Hi&30)!==0||Gp(a,i,d)}return d}function Gp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Qp(n,i,a,c){i.value=a,i.getSnapshot=c,Xp(i)&&Jp(n)}function Yp(n,i,a){return a(function(){Xp(i)&&Jp(n)})}function Xp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xn(n,a)}catch{return!0}}function Jp(n){var i=yr(n,1);i!==null&&Mn(i,n,1,-1)}function Zp(n){var i=Qn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},i.queue=n,n=n.dispatch=J0.bind(null,Je,n),[i.memoizedState,n]}function ya(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function em(){return _n().memoizedState}function su(n,i,a,c){var d=Qn();Je.flags|=n,d.memoizedState=ya(1|i,a,void 0,c===void 0?null:c)}function ou(n,i,a,c){var d=_n();c=c===void 0?null:c;var g=void 0;if(ft!==null){var _=ft.memoizedState;if(g=_.destroy,c!==null&&Ih(c,_.deps)){d.memoizedState=ya(i,a,g,c);return}}Je.flags|=n,d.memoizedState=ya(1|i,a,g,c)}function tm(n,i){return su(8390656,8,n,i)}function Ph(n,i){return ou(2048,8,n,i)}function nm(n,i){return ou(4,2,n,i)}function rm(n,i){return ou(4,4,n,i)}function im(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sm(n,i,a){return a=a!=null?a.concat([n]):null,ou(4,4,im.bind(null,i,n),a)}function kh(){}function om(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ih(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function am(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ih(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function lm(n,i,a){return(Hi&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(xn(a,i)||(a=Li(),Je.lanes|=a,Ki|=a,n.baseState=!0),i)}function Y0(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Th.transition;Th.transition={};try{n(!1),i()}finally{Pe=a,Th.transition=c}}function um(){return _n().memoizedState}function X0(n,i,a){var c=ei(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},cm(n))hm(i,a);else if(a=Bp(n,i,a,c),a!==null){var d=qt();Mn(a,n,c,d),dm(a,i,c)}}function J0(n,i,a){var c=ei(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(cm(n))hm(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var _=i.lastRenderedState,I=g(_,a);if(d.hasEagerState=!0,d.eagerState=I,xn(I,_)){var P=i.interleaved;P===null?(d.next=d,gh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Bp(n,i,d,c),a!==null&&(d=qt(),Mn(a,n,c,d),dm(a,i,c))}}function cm(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function hm(n,i){pa=iu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function dm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}var au={readContext:vn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Z0={readContext:vn,useCallback:function(n,i){return Qn().memoizedState=[n,i===void 0?null:i],n},useContext:vn,useEffect:tm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,su(4194308,4,im.bind(null,i,n),a)},useLayoutEffect:function(n,i){return su(4194308,4,n,i)},useInsertionEffect:function(n,i){return su(4,2,n,i)},useMemo:function(n,i){var a=Qn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Qn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=X0.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Qn();return n={current:n},i.memoizedState=n},useState:Zp,useDebugValue:kh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Zp(!1),i=n[0];return n=Y0.bind(null,n[1]),Qn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=Qn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Et===null)throw Error(t(349));(Hi&30)!==0||Gp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,tm(Yp.bind(null,c,g,n),[n]),c.flags|=2048,ya(9,Qp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Qn(),i=Et.identifierPrefix;if(Ye){var a=gr,c=mr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Q0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},eE={readContext:vn,useCallback:om,useContext:vn,useEffect:Ph,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:am,useReducer:Rh,useRef:em,useState:function(){return Rh(ga)},useDebugValue:kh,useDeferredValue:function(n){var i=_n();return lm(i,ft.memoizedState,n)},useTransition:function(){var n=Rh(ga)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1},tE={readContext:vn,useCallback:om,useContext:vn,useEffect:Ph,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:am,useReducer:Ch,useRef:em,useState:function(){return Ch(ga)},useDebugValue:kh,useDeferredValue:function(n){var i=_n();return ft===null?i.memoizedState=n:lm(i,ft.memoizedState,n)},useTransition:function(){var n=Ch(ga)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Nh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var lu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ei(n),g=vr(c,d);g.payload=i,a!=null&&(g.callback=a),i=Yr(n,g,d),i!==null&&(Mn(i,n,d,c),eu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ei(n),g=vr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Yr(n,g,d),i!==null&&(Mn(i,n,d,c),eu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=ei(n),d=vr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Yr(n,d,c),i!==null&&(Mn(i,n,c,a),eu(i,n,c))}};function fm(n,i,a,c,d,g,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,_):i.prototype&&i.prototype.isPureReactComponent?!ra(a,c)||!ra(d,g):!0}function pm(n,i,a){var c=!1,d=Kr,g=i.contextType;return typeof g=="object"&&g!==null?g=vn(g):(d=Yt(i)?Bi:Ot.current,c=i.contextTypes,g=(c=c!=null)?Gs(n,d):Kr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function mm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&lu.enqueueReplaceState(i,i.state,null)}function xh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},yh(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=vn(g):(g=Yt(i)?Bi:Ot.current,d.context=Gs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Nh(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&lu.enqueueReplaceState(d,d.state,null),tu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Dh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Oh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var nE=typeof WeakMap=="function"?WeakMap:Map;function gm(n,i,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){mu||(mu=!0,Gh=c),Oh(n,i)},a}function ym(n,i,a){a=vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Oh(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Oh(n,i),typeof c!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function vm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new nE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=gE.bind(null,n,i,a),i.then(n,n))}function _m(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Em(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=vr(-1,1),i.tag=2,Yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rE=Te.ReactCurrentOwner,Xt=!1;function Wt(n,i,a,c){i.child=n===null?jp(i,null,a,c):Js(i,n.child,a,c)}function wm(n,i,a,c,d){a=a.render;var g=i.ref;return eo(i,d),c=Sh(n,i,a,c,g,d),a=Ah(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_r(n,i,d)):(Ye&&a&&ah(i),i.flags|=1,Wt(n,i,c,d),i.child)}function Tm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!td(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Im(n,i,g,c,d)):(n=wu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var _=g.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(_,c)&&n.ref===i.ref)return _r(n,i,d)}return i.flags|=1,n=ni(g,c),n.ref=i.ref,n.return=i,i.child=n}function Im(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(ra(g,c)&&n.ref===i.ref)if(Xt=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return i.lanes=n.lanes,_r(n,i,d)}return Vh(n,i,a,c,d)}function Sm(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(io,un),un|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(io,un),un|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,qe(io,un),un|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,qe(io,un),un|=c;return Wt(n,i,d,a),i.child}function Am(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Vh(n,i,a,c,d){var g=Yt(a)?Bi:Ot.current;return g=Gs(i,g),eo(i,d),a=Sh(n,i,a,c,g,d),c=Ah(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_r(n,i,d)):(Ye&&c&&ah(i),i.flags|=1,Wt(n,i,a,d),i.child)}function Rm(n,i,a,c,d){if(Yt(a)){var g=!0;Hl(i)}else g=!1;if(eo(i,d),i.stateNode===null)cu(n,i),pm(i,a,c),xh(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,I=i.memoizedProps;_.props=I;var P=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=vn(U):(U=Yt(a)?Bi:Ot.current,U=Gs(i,U));var G=a.getDerivedStateFromProps,Y=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";Y||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||P!==U)&&mm(i,_,c,U),Qr=!1;var H=i.memoizedState;_.state=H,tu(i,c,_,d),P=i.memoizedState,I!==c||H!==P||Qt.current||Qr?(typeof G=="function"&&(Nh(i,a,G,c),P=i.memoizedState),(I=Qr||fm(i,a,I,c,H,P,U))?(Y||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),_.props=c,_.state=P,_.context=U,c=I):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,zp(n,i),I=i.memoizedProps,U=i.type===i.elementType?I:On(i.type,I),_.props=U,Y=i.pendingProps,H=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=vn(P):(P=Yt(a)?Bi:Ot.current,P=Gs(i,P));var te=a.getDerivedStateFromProps;(G=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==Y||H!==P)&&mm(i,_,c,P),Qr=!1,H=i.memoizedState,_.state=H,tu(i,c,_,d);var se=i.memoizedState;I!==Y||H!==se||Qt.current||Qr?(typeof te=="function"&&(Nh(i,a,te,c),se=i.memoizedState),(U=Qr||fm(i,a,U,c,H,se,P)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,se,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,se,P)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),_.props=c,_.state=se,_.context=P,c=U):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),c=!1)}return Lh(n,i,a,c,g,d)}function Lh(n,i,a,c,d,g){Am(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&xp(i,a,!1),_r(n,i,g);c=i.stateNode,rE.current=i;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=Js(i,n.child,null,g),i.child=Js(i,null,I,g)):Wt(n,i,I,g),i.memoizedState=c.state,d&&xp(i,a,!0),i.child}function Cm(n){var i=n.stateNode;i.pendingContext?kp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kp(n,i.context,!1),vh(n,i.containerInfo)}function Pm(n,i,a,c,d){return Xs(),hh(d),i.flags|=256,Wt(n,i,a,c),i.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function km(n,i,a){var c=i.pendingProps,d=Xe.current,g=!1,_=(i.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Xe,d&1),n===null)return ch(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,g?(c=i.mode,g=i.child,_={mode:"hidden",children:_},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=_):g=Tu(_,c,0,null),n=Xi(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=bh(a),i.memoizedState=Mh,n):Fh(i,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return iE(n,i,_,c,I,d,a);if(g){g=c.fallback,_=i.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ni(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?g=ni(I,g):(g=Xi(g,_,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,_=n.child.memoizedState,_=_===null?bh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},g.memoizedState=_,g.childLanes=n.childLanes&~a,i.memoizedState=Mh,c}return g=n.child,n=g.sibling,c=ni(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Fh(n,i){return i=Tu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function uu(n,i,a,c){return c!==null&&hh(c),Js(i,n.child,null,a),n=Fh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iE(n,i,a,c,d,g,_){if(a)return i.flags&256?(i.flags&=-257,c=Dh(Error(t(422))),uu(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=Tu({mode:"visible",children:c.children},d,0,null),g=Xi(g,d,_,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Js(i,n.child,null,_),i.child.memoizedState=bh(_),i.memoizedState=Mh,g);if((i.mode&1)===0)return uu(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=Dh(g,c,void 0),uu(n,i,_,c)}if(I=(_&n.childLanes)!==0,Xt||I){if(c=Et,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,yr(n,d),Mn(c,n,d,-1))}return ed(),c=Dh(Error(t(421))),uu(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=yE.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,ln=qr(d.nextSibling),an=i,Ye=!0,Dn=null,n!==null&&(gn[yn++]=mr,gn[yn++]=gr,gn[yn++]=zi,mr=n.id,gr=n.overflow,zi=i),i=Fh(i,c.children),i.flags|=4096,i)}function Nm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),mh(n.return,i,a)}function Uh(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function xm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Wt(n,i,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nm(n,a,i);else if(n.tag===19)Nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Xe,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&nu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Uh(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&nu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Uh(i,!0,a,null,g);break;case"together":Uh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function _r(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ki|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ni(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ni(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function sE(n,i,a){switch(i.tag){case 3:Cm(i),Xs();break;case 5:qp(i);break;case 1:Yt(i.type)&&Hl(i);break;case 4:vh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(Jl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?km(n,i,a):(qe(Xe,Xe.current&1),n=_r(n,i,a),n!==null?n.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return xm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,Sm(n,i,a)}return _r(n,i,a)}var Dm,jh,Om,Vm;Dm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},jh=function(){},Om=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,qi(Gn.current);var g=null;switch(a){case"input":d=Si(n,d),c=Si(n,c),g=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),g=[];break;case"textarea":d=Do(n,d),c=Do(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=$l)}Fo(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?g||(g=[]):(g=g||[]).push(U,null));for(U in c){var P=c[U];if(I=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==I&&(P!=null||I!=null))if(U==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&I[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(g||(g=[]),g.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(g=g||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&He("scroll",n),g||I===P||(g=[])):(g=g||[]).push(U,P))}a&&(g=g||[]).push("style",a);var U=g;(i.updateQueue=U)&&(i.flags|=4)}},Vm=function(n,i,a,c){a!==c&&(i.flags|=4)};function va(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function oE(n,i,a){var c=i.pendingProps;switch(lh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Yt(i.type)&&ql(),Lt(i),null;case 3:return c=i.stateNode,to(),Ke(Qt),Ke(Ot),wh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Yl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Dn!==null&&(Xh(Dn),Dn=null))),jh(n,i),Lt(i),null;case 5:_h(i);var d=qi(fa.current);if(a=i.type,n!==null&&i.stateNode!=null)Om(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=qi(Gn.current),Yl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Kn]=i,c[la]=g,n=(i.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)He(sa[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":gs(c,g),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},He("invalid",c);break;case"textarea":vs(c,g),He("invalid",c)}Fo(a,g),d=null;for(var _ in g)if(g.hasOwnProperty(_)){var I=g[_];_==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&zl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&zl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&He("scroll",c)}switch(a){case"input":rr(c),pl(c,g,!0);break;case"textarea":rr(c),Oo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=$l)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Kn]=i,n[la]=c,Dm(n,i,!1,!1),i.stateNode=n;e:{switch(_=Uo(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)He(sa[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":gs(n,c),d=Si(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),He("invalid",n);break;case"textarea":vs(n,c),d=Do(n,c),He("invalid",n);break;default:d=c}Fo(a,d),I=d;for(g in I)if(I.hasOwnProperty(g)){var P=I[g];g==="style"?Mo(n,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Vo(n,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Vr(n,P):typeof P=="number"&&Vr(n,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&He("scroll",n):P!=null&&fe(n,g,P,_))}switch(a){case"input":rr(n),pl(n,c,!1);break;case"textarea":rr(n),Oo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?sr(n,!!c.multiple,g,!1):c.defaultValue!=null&&sr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=$l)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)Vm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=qi(fa.current),qi(Gn.current),Yl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Kn]=i,(g=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:zl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ke(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bp(),Xs(),i.flags|=98560,g=!1;else if(g=Yl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Kn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),g=!1}else Dn!==null&&(Xh(Dn),Dn=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xe.current&1)!==0?pt===0&&(pt=3):ed())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return to(),jh(n,i),n===null&&oa(i.stateNode.containerInfo),Lt(i),null;case 10:return ph(i.type._context),Lt(i),null;case 17:return Yt(i.type)&&ql(),Lt(i),null;case 19:if(Ke(Xe),g=i.memoizedState,g===null)return Lt(i),null;if(c=(i.flags&128)!==0,_=g.rendering,_===null)if(c)va(g,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=nu(n),_!==null){for(i.flags|=128,va(g,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,_=g.alternate,_===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=_.childLanes,g.lanes=_.lanes,g.child=_.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=_.memoizedProps,g.memoizedState=_.memoizedState,g.updateQueue=_.updateQueue,g.type=_.type,n=_.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),i.child}n=n.sibling}g.tail!==null&&We()>so&&(i.flags|=128,c=!0,va(g,!1),i.lanes=4194304)}else{if(!c)if(n=nu(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),va(g,!0),g.tail===null&&g.tailMode==="hidden"&&!_.alternate&&!Ye)return Lt(i),null}else 2*We()-g.renderingStartTime>so&&a!==1073741824&&(i.flags|=128,c=!0,va(g,!1),i.lanes=4194304);g.isBackwards?(_.sibling=i.child,i.child=_):(a=g.last,a!==null?a.sibling=_:i.child=_,g.last=_)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=We(),i.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Zh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(un&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function aE(n,i){switch(lh(i),i.tag){case 1:return Yt(i.type)&&ql(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return to(),Ke(Qt),Ke(Ot),wh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _h(i),null;case 13:if(Ke(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Xe),null;case 4:return to(),null;case 10:return ph(i.type._context),null;case 22:case 23:return Zh(),null;case 24:return null;default:return null}}var hu=!1,Mt=!1,lE=typeof WeakSet=="function"?WeakSet:Set,re=null;function ro(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,i,c)}else a.current=null}function Bh(n,i,a){try{a()}catch(c){et(n,i,c)}}var Lm=!1;function uE(n,i){if(Zc=zr,n=fp(),qc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var _=0,I=-1,P=-1,U=0,G=0,Y=n,H=null;t:for(;;){for(var te;Y!==a||d!==0&&Y.nodeType!==3||(I=_+d),Y!==g||c!==0&&Y.nodeType!==3||(P=_+c),Y.nodeType===3&&(_+=Y.nodeValue.length),(te=Y.firstChild)!==null;)H=Y,Y=te;for(;;){if(Y===n)break t;if(H===a&&++U===d&&(I=_),H===g&&++G===c&&(P=_),(te=Y.nextSibling)!==null)break;Y=H,H=Y.parentNode}Y=te}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(eh={focusedElem:n,selectionRange:a},zr=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,rt=se.memoizedState,M=i.stateNode,N=M.getSnapshotBeforeUpdate(i.elementType===i.type?oe:On(i.type,oe),rt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){et(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return se=Lm,Lm=!1,se}function _a(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Bh(i,a,g)}d=d.next}while(d!==c)}}function du(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function zh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Mm(n){var i=n.alternate;i!==null&&(n.alternate=null,Mm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Kn],delete i[la],delete i[ih],delete i[q0],delete i[H0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $h(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$l));else if(c!==4&&(n=n.child,n!==null))for($h(n,i,a),n=n.sibling;n!==null;)$h(n,i,a),n=n.sibling}function Wh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Wh(n,i,a),n=n.sibling;n!==null;)Wh(n,i,a),n=n.sibling}var At=null,Vn=!1;function Xr(n,i,a){for(a=a.child;a!==null;)Um(n,i,a),a=a.sibling}function Um(n,i,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:Mt||ro(a,i);case 6:var c=At,d=Vn;At=null,Xr(n,i,a),At=c,Vn=d,At!==null&&(Vn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Vn?(n=At,a=a.stateNode,n.nodeType===8?rh(n.parentNode,a):n.nodeType===1&&rh(n,a),kn(n)):rh(At,a.stateNode));break;case 4:c=At,d=Vn,At=a.stateNode.containerInfo,Vn=!0,Xr(n,i,a),At=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,_=g.destroy;g=g.tag,_!==void 0&&((g&2)!==0||(g&4)!==0)&&Bh(a,i,_),d=d.next}while(d!==c)}Xr(n,i,a);break;case 1:if(!Mt&&(ro(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){et(a,i,I)}Xr(n,i,a);break;case 21:Xr(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,Xr(n,i,a),Mt=c):Xr(n,i,a);break;default:Xr(n,i,a)}}function jm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new lE),i.forEach(function(c){var d=vE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,_=i,I=_;e:for(;I!==null;){switch(I.tag){case 5:At=I.stateNode,Vn=!1;break e;case 3:At=I.stateNode.containerInfo,Vn=!0;break e;case 4:At=I.stateNode.containerInfo,Vn=!0;break e}I=I.return}if(At===null)throw Error(t(160));Um(g,_,d),At=null,Vn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){et(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Bm(i,n),i=i.sibling}function Bm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(i,n),Yn(n),c&4){try{_a(3,n,n.return),du(3,n)}catch(oe){et(n,n.return,oe)}try{_a(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:Ln(i,n),Yn(n),c&512&&a!==null&&ro(a,a.return);break;case 5:if(Ln(i,n),Yn(n),c&512&&a!==null&&ro(a,a.return),n.flags&32){var d=n.stateNode;try{Vr(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,_=a!==null?a.memoizedProps:g,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&No(d,g),Uo(I,_);var U=Uo(I,g);for(_=0;_<P.length;_+=2){var G=P[_],Y=P[_+1];G==="style"?Mo(d,Y):G==="dangerouslySetInnerHTML"?Vo(d,Y):G==="children"?Vr(d,Y):fe(d,G,Y,U)}switch(I){case"input":xo(d,g);break;case"textarea":_s(d,g);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var te=g.value;te!=null?sr(d,!!g.multiple,te,!1):H!==!!g.multiple&&(g.defaultValue!=null?sr(d,!!g.multiple,g.defaultValue,!0):sr(d,!!g.multiple,g.multiple?[]:"",!1))}d[la]=g}catch(oe){et(n,n.return,oe)}}break;case 6:if(Ln(i,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(oe){et(n,n.return,oe)}}break;case 3:if(Ln(i,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(i.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:Ln(i,n),Yn(n);break;case 13:Ln(i,n),Yn(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Kh=We())),c&4&&jm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(U=Mt)||G,Ln(i,n),Mt=U):Ln(i,n),Yn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&(n.mode&1)!==0)for(re=n,G=n.child;G!==null;){for(Y=re=G;re!==null;){switch(H=re,te=H.child,H.tag){case 0:case 11:case 14:case 15:_a(4,H,H.return);break;case 1:ro(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:ro(H,H.return);break;case 22:if(H.memoizedState!==null){Wm(Y);continue}}te!==null?(te.return=H,re=te):Wm(Y)}G=G.sibling}e:for(G=null,Y=n;;){if(Y.tag===5){if(G===null){G=Y;try{d=Y.stateNode,U?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Y.stateNode,P=Y.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Lo("display",_))}catch(oe){et(n,n.return,oe)}}}else if(Y.tag===6){if(G===null)try{Y.stateNode.nodeValue=U?"":Y.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;G===Y&&(G=null),Y=Y.return}G===Y&&(G=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Ln(i,n),Yn(n),c&4&&jm(n);break;case 21:break;default:Ln(i,n),Yn(n)}}function Yn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(bm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Vr(d,""),c.flags&=-33);var g=Fm(n);Wh(n,g,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=Fm(n);$h(n,I,_);break;default:throw Error(t(161))}}catch(P){et(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function cE(n,i,a){re=n,zm(n)}function zm(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,g=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||hu;if(!_){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Mt;I=hu;var U=Mt;if(hu=_,(Mt=P)&&!U)for(re=d;re!==null;)_=re,P=_.child,_.tag===22&&_.memoizedState!==null?qm(d):P!==null?(P.return=_,re=P):qm(d);for(;g!==null;)re=g,zm(g),g=g.sibling;re=d,hu=I,Mt=U}$m(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,re=g):$m(n)}}function $m(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||du(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Wp(i,g,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Wp(i,_,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var Y=G.dehydrated;Y!==null&&kn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&zh(i)}catch(H){et(i,i.return,H)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function Wm(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function qm(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{du(4,i)}catch(P){et(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){et(i,d,P)}}var g=i.return;try{zh(i)}catch(P){et(i,g,P)}break;case 5:var _=i.return;try{zh(i)}catch(P){et(i,_,P)}}}catch(P){et(i,i.return,P)}if(i===n){re=null;break}var I=i.sibling;if(I!==null){I.return=i.return,re=I;break}re=i.return}}var hE=Math.ceil,fu=Te.ReactCurrentDispatcher,qh=Te.ReactCurrentOwner,En=Te.ReactCurrentBatchConfig,Oe=0,Et=null,ot=null,Rt=0,un=0,io=Hr(0),pt=0,Ea=null,Ki=0,pu=0,Hh=0,wa=null,Jt=null,Kh=0,so=1/0,Er=null,mu=!1,Gh=null,Jr=null,gu=!1,Zr=null,yu=0,Ta=0,Qh=null,vu=-1,_u=0;function qt(){return(Oe&6)!==0?We():vu!==-1?vu:vu=We()}function ei(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Rt!==0?Rt&-Rt:G0.transition!==null?(_u===0&&(_u=Li()),_u):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Yo(n.type)),n)}function Mn(n,i,a,c){if(50<Ta)throw Ta=0,Qh=null,Error(t(185));Fr(n,a,c),((Oe&2)===0||n!==Et)&&(n===Et&&((Oe&2)===0&&(pu|=a),pt===4&&ti(n,Rt)),Zt(n,c),a===1&&Oe===0&&(i.mode&1)===0&&(so=We()+500,Kl&&Gr()))}function Zt(n,i){var a=n.callbackNode;lr(n,i);var c=Vi(n,n===Et?Rt:0);if(c===0)a!==null&&qo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&qo(a),i===1)n.tag===0?K0(Km.bind(null,n)):Dp(Km.bind(null,n)),$0(function(){(Oe&6)===0&&Gr()}),a=null;else{switch(jr(c)){case 1:a=Di;break;case 4:a=Lr;break;case 16:a=fn;break;case 536870912:a=_l;break;default:a=fn}a=tg(a,Hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hm(n,i){if(vu=-1,_u=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(oo()&&n.callbackNode!==a)return null;var c=Vi(n,n===Et?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Eu(n,c);else{i=c;var d=Oe;Oe|=2;var g=Qm();(Et!==n||Rt!==i)&&(Er=null,so=We()+500,Qi(n,i));do try{pE();break}catch(I){Gm(n,I)}while(!0);fh(),fu.current=g,Oe=d,ot!==null?i=0:(Et=null,Rt=0,i=pt)}if(i!==0){if(i===2&&(d=rn(n),d!==0&&(c=d,i=Yh(n,d))),i===1)throw a=Ea,Qi(n,0),ti(n,c),Zt(n,We()),a;if(i===6)ti(n,c);else{if(d=n.current.alternate,(c&30)===0&&!dE(d)&&(i=Eu(n,c),i===2&&(g=rn(n),g!==0&&(c=g,i=Yh(n,g))),i===1))throw a=Ea,Qi(n,0),ti(n,c),Zt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yi(n,Jt,Er);break;case 3:if(ti(n,c),(c&130023424)===c&&(i=Kh+500-We(),10<i)){if(Vi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=nh(Yi.bind(null,n,Jt,Er),i);break}Yi(n,Jt,Er);break;case 4:if(ti(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-zt(c);g=1<<_,_=i[_],_>d&&(d=_),c&=~g}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hE(c/1960))-c,10<c){n.timeoutHandle=nh(Yi.bind(null,n,Jt,Er),c);break}Yi(n,Jt,Er);break;case 5:Yi(n,Jt,Er);break;default:throw Error(t(329))}}}return Zt(n,We()),n.callbackNode===a?Hm.bind(null,n):null}function Yh(n,i){var a=wa;return n.current.memoizedState.isDehydrated&&(Qi(n,i).flags|=256),n=Eu(n,i),n!==2&&(i=Jt,Jt=a,i!==null&&Xh(i)),n}function Xh(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function dE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!xn(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ti(n,i){for(i&=~Hh,i&=~pu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-zt(i),c=1<<a;n[a]=-1,i&=~c}}function Km(n){if((Oe&6)!==0)throw Error(t(327));oo();var i=Vi(n,0);if((i&1)===0)return Zt(n,We()),null;var a=Eu(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=Yh(n,c))}if(a===1)throw a=Ea,Qi(n,0),ti(n,i),Zt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yi(n,Jt,Er),Zt(n,We()),null}function Jh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(so=We()+500,Kl&&Gr())}}function Gi(n){Zr!==null&&Zr.tag===0&&(Oe&6)===0&&oo();var i=Oe;Oe|=1;var a=En.transition,c=Pe;try{if(En.transition=null,Pe=1,n)return n()}finally{Pe=c,En.transition=a,Oe=i,(Oe&6)===0&&Gr()}}function Zh(){un=io.current,Ke(io)}function Qi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,z0(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(lh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ql();break;case 3:to(),Ke(Qt),Ke(Ot),wh();break;case 5:_h(c);break;case 4:to();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:ph(c.type._context);break;case 22:case 23:Zh()}a=a.return}if(Et=n,ot=n=ni(n.current,null),Rt=un=i,pt=0,Ea=null,Hh=pu=Ki=0,Jt=wa=null,Wi!==null){for(i=0;i<Wi.length;i++)if(a=Wi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var _=g.next;g.next=d,c.next=_}a.pending=c}Wi=null}return n}function Gm(n,i){do{var a=ot;try{if(fh(),ru.current=au,iu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}iu=!1}if(Hi=0,_t=ft=Je=null,pa=!1,ma=0,qh.current=null,a===null||a.return===null){pt=1,Ea=i,ot=null;break}e:{var g=n,_=a.return,I=a,P=i;if(i=Rt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,G=I,Y=G.tag;if((G.mode&1)===0&&(Y===0||Y===11||Y===15)){var H=G.alternate;H?(G.updateQueue=H.updateQueue,G.memoizedState=H.memoizedState,G.lanes=H.lanes):(G.updateQueue=null,G.memoizedState=null)}var te=_m(_);if(te!==null){te.flags&=-257,Em(te,_,I,g,i),te.mode&1&&vm(g,U,i),i=te,P=U;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(P),i.updateQueue=oe}else se.add(P);break e}else{if((i&1)===0){vm(g,U,i),ed();break e}P=Error(t(426))}}else if(Ye&&I.mode&1){var rt=_m(_);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),Em(rt,_,I,g,i),hh(no(P,I));break e}}g=P=no(P,I),pt!==4&&(pt=2),wa===null?wa=[g]:wa.push(g),g=_;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var M=gm(g,P,i);$p(g,M);break e;case 1:I=P;var N=g.type,b=g.stateNode;if((g.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Jr===null||!Jr.has(b)))){g.flags|=65536,i&=-i,g.lanes|=i;var J=ym(g,I,i);$p(g,J);break e}}g=g.return}while(g!==null)}Xm(a)}catch(ue){i=ue,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function Qm(){var n=fu.current;return fu.current=au,n===null?au:n}function ed(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||(Ki&268435455)===0&&(pu&268435455)===0||ti(Et,Rt)}function Eu(n,i){var a=Oe;Oe|=2;var c=Qm();(Et!==n||Rt!==i)&&(Er=null,Qi(n,i));do try{fE();break}catch(d){Gm(n,d)}while(!0);if(fh(),Oe=a,fu.current=c,ot!==null)throw Error(t(261));return Et=null,Rt=0,pt}function fE(){for(;ot!==null;)Ym(ot)}function pE(){for(;ot!==null&&!yl();)Ym(ot)}function Ym(n){var i=eg(n.alternate,n,un);n.memoizedProps=n.pendingProps,i===null?Xm(n):ot=i,qh.current=null}function Xm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=oE(a,i,un),a!==null){ot=a;return}}else{if(a=aE(a,i),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ot=null;return}}if(i=i.sibling,i!==null){ot=i;return}ot=i=n}while(i!==null);pt===0&&(pt=5)}function Yi(n,i,a){var c=Pe,d=En.transition;try{En.transition=null,Pe=1,mE(n,i,a,c)}finally{En.transition=d,Pe=c}return null}function mE(n,i,a,c){do oo();while(Zr!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(n,g),n===Et&&(ot=Et=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||gu||(gu=!0,tg(fn,function(){return oo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=En.transition,En.transition=null;var _=Pe;Pe=1;var I=Oe;Oe|=4,qh.current=null,uE(n,a),Bm(a,n),L0(eh),zr=!!Zc,eh=Zc=null,n.current=a,cE(a),bc(),Oe=I,Pe=_,En.transition=g}else n.current=a;if(gu&&(gu=!1,Zr=n,yu=d),g=n.pendingLanes,g===0&&(Jr=null),El(a.stateNode),Zt(n,We()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(mu)throw mu=!1,n=Gh,Gh=null,n;return(yu&1)!==0&&n.tag!==0&&oo(),g=n.pendingLanes,(g&1)!==0?n===Qh?Ta++:(Ta=0,Qh=n):Ta=0,Gr(),null}function oo(){if(Zr!==null){var n=jr(yu),i=En.transition,a=Pe;try{if(En.transition=null,Pe=16>n?16:n,Zr===null)var c=!1;else{if(n=Zr,Zr=null,yu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,re=n.current;re!==null;){var g=re,_=g.child;if((re.flags&16)!==0){var I=g.deletions;if(I!==null){for(var P=0;P<I.length;P++){var U=I[P];for(re=U;re!==null;){var G=re;switch(G.tag){case 0:case 11:case 15:_a(8,G,g)}var Y=G.child;if(Y!==null)Y.return=G,re=Y;else for(;re!==null;){G=re;var H=G.sibling,te=G.return;if(Mm(G),G===U){re=null;break}if(H!==null){H.return=te,re=H;break}re=te}}}var se=g.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var rt=oe.sibling;oe.sibling=null,oe=rt}while(oe!==null)}}re=g}}if((g.subtreeFlags&2064)!==0&&_!==null)_.return=g,re=_;else e:for(;re!==null;){if(g=re,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:_a(9,g,g.return)}var M=g.sibling;if(M!==null){M.return=g.return,re=M;break e}re=g.return}}var N=n.current;for(re=N;re!==null;){_=re;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,re=b;else e:for(_=N;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:du(9,I)}}catch(ue){et(I,I.return,ue)}if(I===_){re=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,re=J;break e}re=I.return}}if(Oe=d,Gr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Oi,n)}catch{}c=!0}return c}finally{Pe=a,En.transition=i}}return!1}function Jm(n,i,a){i=no(a,i),i=gm(n,i,1),n=Yr(n,i,1),i=qt(),n!==null&&(Fr(n,1,i),Zt(n,i))}function et(n,i,a){if(n.tag===3)Jm(n,n,a);else for(;i!==null;){if(i.tag===3){Jm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Jr===null||!Jr.has(c))){n=no(a,n),n=ym(i,n,1),i=Yr(i,n,1),n=qt(),i!==null&&(Fr(i,1,n),Zt(i,n));break}}i=i.return}}function gE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Rt&a)===a&&(pt===4||pt===3&&(Rt&130023424)===Rt&&500>We()-Kh?Qi(n,0):Hh|=a),Zt(n,i)}function Zm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var a=qt();n=yr(n,i),n!==null&&(Fr(n,i,a),Zt(n,a))}function yE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Zm(n,a)}function vE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Zm(n,a)}var eg;eg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qt.current)Xt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xt=!1,sE(n,i,a);Xt=(n.flags&131072)!==0}else Xt=!1,Ye&&(i.flags&1048576)!==0&&Op(i,Ql,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;cu(n,i),n=i.pendingProps;var d=Gs(i,Ot.current);eo(i,a),d=Sh(null,i,c,n,d,a);var g=Ah();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yt(c)?(g=!0,Hl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,yh(i),d.updater=lu,i.stateNode=d,d._reactInternals=i,xh(i,c,n,a),i=Lh(null,i,c,!0,g,a)):(i.tag=0,Ye&&g&&ah(i),Wt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(cu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=EE(c),n=On(c,n),d){case 0:i=Vh(null,i,c,n,a);break e;case 1:i=Rm(null,i,c,n,a);break e;case 11:i=wm(null,i,c,n,a);break e;case 14:i=Tm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Vh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Rm(n,i,c,d,a);case 3:e:{if(Cm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,zp(n,i),tu(i,c,null,a);var _=i.memoizedState;if(c=_.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=no(Error(t(423)),i),i=Pm(n,i,c,a,d);break e}else if(c!==d){d=no(Error(t(424)),i),i=Pm(n,i,c,a,d);break e}else for(ln=qr(i.stateNode.containerInfo.firstChild),an=i,Ye=!0,Dn=null,a=jp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),c===d){i=_r(n,i,a);break e}Wt(n,i,c,a)}i=i.child}return i;case 5:return qp(i),n===null&&ch(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,_=d.children,th(c,d)?_=null:g!==null&&th(c,g)&&(i.flags|=32),Am(n,i),Wt(n,i,_,a),i.child;case 6:return n===null&&ch(i),null;case 13:return km(n,i,a);case 4:return vh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Js(i,null,c,a):Wt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),wm(n,i,c,d,a);case 7:return Wt(n,i,i.pendingProps,a),i.child;case 8:return Wt(n,i,i.pendingProps.children,a),i.child;case 12:return Wt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,_=d.value,qe(Jl,c._currentValue),c._currentValue=_,g!==null)if(xn(g.value,_)){if(g.children===d.children&&!Qt.current){i=_r(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){_=g.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=vr(-1,a&-a),P.tag=2;var U=g.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?P.next=P:(P.next=G.next,G.next=P),U.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),mh(g.return,a,i),I.lanes|=a;break}P=P.next}}else if(g.tag===10)_=g.type===i.type?null:g.child;else if(g.tag===18){if(_=g.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),mh(_,a,i),_=g.sibling}else _=g.child;if(_!==null)_.return=g;else for(_=g;_!==null;){if(_===i){_=null;break}if(g=_.sibling,g!==null){g.return=_.return,_=g;break}_=_.return}g=_}Wt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,eo(i,a),d=vn(d),c=c(d),i.flags|=1,Wt(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),Tm(n,i,c,d,a);case 15:return Im(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),cu(n,i),i.tag=1,Yt(c)?(n=!0,Hl(i)):n=!1,eo(i,a),pm(i,c,d),xh(i,c,d,a),Lh(null,i,c,!0,n,a);case 19:return xm(n,i,a);case 22:return Sm(n,i,a)}throw Error(t(156,i.tag))};function tg(n,i){return Cs(n,i)}function _E(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,i,a,c){return new _E(n,i,a,c)}function td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function EE(n){if(typeof n=="function")return td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===xt)return 14}return 2}function ni(n,i){var a=n.alternate;return a===null?(a=wn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function wu(n,i,a,c,d,g){var _=2;if(c=n,typeof n=="function")td(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case x:return Xi(a.children,d,g,i);case S:_=8,d|=8;break;case C:return n=wn(12,a,i,d|2),n.elementType=C,n.lanes=g,n;case A:return n=wn(13,a,i,d),n.elementType=A,n.lanes=g,n;case tt:return n=wn(19,a,i,d),n.elementType=tt,n.lanes=g,n;case Be:return Tu(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case D:_=9;break e;case V:_=11;break e;case xt:_=14;break e;case Dt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function Xi(n,i,a,c){return n=wn(7,n,c,i),n.lanes=a,n}function Tu(n,i,a,c){return n=wn(22,n,c,i),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function nd(n,i,a){return n=wn(6,n,null,i),n.lanes=a,n}function rd(n,i,a){return i=wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function wE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=br(0),this.expirationTimes=br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function id(n,i,a,c,d,g,_,I,P){return n=new wE(n,i,a,I,P),i===1?(i=1,g===!0&&(i|=8)):i=0,g=wn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(g),n}function TE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function ng(n){if(!n)return Kr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Np(n,a,i)}return i}function rg(n,i,a,c,d,g,_,I,P){return n=id(a,c,!0,n,d,g,_,I,P),n.context=ng(null),a=n.current,c=qt(),d=ei(a),g=vr(c,d),g.callback=i??null,Yr(a,g,d),n.current.lanes=d,Fr(n,d,c),Zt(n,c),n}function Iu(n,i,a,c){var d=i.current,g=qt(),_=ei(d);return a=ng(a),i.context===null?i.context=a:i.pendingContext=a,i=vr(g,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Yr(d,i,_),n!==null&&(Mn(n,d,_,g),eu(n,d,_)),_}function Su(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ig(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function sd(n,i){ig(n,i),(n=n.alternate)&&ig(n,i)}function IE(){return null}var sg=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}Au.prototype.render=od.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Iu(n,i,null,null)},Au.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gi(function(){Iu(null,n,null,null)}),i[fr]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var i=Al();n={blockedOn:null,target:n,priority:i};for(var a=0;a<$n.length&&i!==0&&i<$n[a].priority;a++);$n.splice(a,0,n),a===0&&Pl(n)}};function ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function og(){}function SE(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var U=Su(_);g.call(U)}}var _=rg(i,c,n,0,null,!1,!1,"",og);return n._reactRootContainer=_,n[fr]=_.current,oa(n.nodeType===8?n.parentNode:n),Gi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=Su(P);I.call(U)}}var P=id(n,0,!1,null,null,!1,!1,"",og);return n._reactRootContainer=P,n[fr]=P.current,oa(n.nodeType===8?n.parentNode:n),Gi(function(){Iu(i,P,a,c)}),P}function Cu(n,i,a,c,d){var g=a._reactRootContainer;if(g){var _=g;if(typeof d=="function"){var I=d;d=function(){var P=Su(_);I.call(P)}}Iu(i,_,n,d)}else _=SE(a,i,n,d,c);return Su(_)}Il=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mr(i.pendingLanes);a!==0&&(Ur(i,a|1),Zt(i,We()),(Oe&6)===0&&(so=We()+500,Gr()))}break;case 13:Gi(function(){var c=yr(n,1);if(c!==null){var d=qt();Mn(c,n,1,d)}}),sd(n,1)}},Ns=function(n){if(n.tag===13){var i=yr(n,134217728);if(i!==null){var a=qt();Mn(i,n,134217728,a)}sd(n,134217728)}},Sl=function(n){if(n.tag===13){var i=ei(n),a=yr(n,i);if(a!==null){var c=qt();Mn(a,n,i,c)}sd(n,i)}},Al=function(){return Pe},Rl=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},ws=function(n,i,a){switch(i){case"input":if(xo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Wl(c);if(!d)throw Error(t(90));ms(c),xo(c,d)}}}break;case"textarea":_s(n,a);break;case"select":i=a.value,i!=null&&sr(n,!!a.multiple,i,!1)}},Pi=Jh,Bo=Gi;var AE={usingClientEntryPoint:!1,Events:[ua,Hs,Wl,Bn,jo,Jh]},Ia={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RE={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Oi=Pu.inject(RE),nn=Pu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE,en.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(i))throw Error(t(200));return TE(n,i,null,a)},en.createRoot=function(n,i){if(!ad(n))throw Error(t(299));var a=!1,c="",d=sg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=id(n,1,!1,null,null,a,!1,c,d),n[fr]=i.current,oa(n.nodeType===8?n.parentNode:n),new od(i)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wo(i),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return Gi(n)},en.hydrate=function(n,i,a){if(!Ru(i))throw Error(t(200));return Cu(null,n,i,!0,a)},en.hydrateRoot=function(n,i,a){if(!ad(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",_=sg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=rg(i,null,n,1,a??null,d,!1,g,_),n[fr]=i.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Au(i)},en.render=function(n,i,a){if(!Ru(i))throw Error(t(200));return Cu(null,n,i,!1,a)},en.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(Gi(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[fr]=null})}),!0):!1},en.unstable_batchedUpdates=Jh,en.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cu(n,i,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var pg;function Wy(){if(pg)return cd.exports;pg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),cd.exports=LE(),cd.exports}var mg;function ME(){if(mg)return ku;mg=1;var r=Wy();return ku.createRoot=r.createRoot,ku.hydrateRoot=r.hydrateRoot,ku}var bE=ME();const FE=zy(bE);Wy();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Ua.apply(this,arguments)}var ci;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(ci||(ci={}));const gg="popstate";function UE(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Ad("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Hy(o)}return BE(e,t,null,r)}function ut(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function qy(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jE(){return Math.random().toString(36).substr(2,8)}function yg(r,e){return{usr:r.state,key:r.key,idx:e}}function Ad(r,e,t,s){return t===void 0&&(t=null),Ua({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?So(e):e,{state:t,key:e&&e.key||s||jE()})}function Hy(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function So(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function BE(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f=ci.Pop,m=null,v=E();v==null&&(v=0,h.replaceState(Ua({},h.state,{idx:v}),""));function E(){return(h.state||{idx:null}).idx}function T(){f=ci.Pop;let j=E(),le=j==null?null:j-v;v=j,m&&m({action:f,location:q.location,delta:le})}function R(j,le){f=ci.Push;let ce=Ad(q.location,j,le);v=E()+1;let fe=yg(ce,v),Te=q.createHref(ce);try{h.pushState(fe,"",Te)}catch(je){if(je instanceof DOMException&&je.name==="DataCloneError")throw je;o.location.assign(Te)}l&&m&&m({action:f,location:q.location,delta:1})}function F(j,le){f=ci.Replace;let ce=Ad(q.location,j,le);v=E();let fe=yg(ce,v),Te=q.createHref(ce);h.replaceState(fe,"",Te),l&&m&&m({action:f,location:q.location,delta:0})}function z(j){let le=o.location.origin!=="null"?o.location.origin:o.location.href,ce=typeof j=="string"?j:Hy(j);return ce=ce.replace(/ $/,"%20"),ut(le,"No window.location.(origin|href) available to create URL for href: "+ce),new URL(ce,le)}let q={get action(){return f},get location(){return r(o,h)},listen(j){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(gg,T),m=j,()=>{o.removeEventListener(gg,T),m=null}},createHref(j){return e(o,j)},createURL:z,encodeLocation(j){let le=z(j);return{pathname:le.pathname,search:le.search,hash:le.hash}},push:R,replace:F,go(j){return h.go(j)}};return q}var vg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(vg||(vg={}));function zE(r,e,t){return t===void 0&&(t="/"),$E(r,e,t)}function $E(r,e,t,s){let o=typeof e=="string"?So(e):e,l=Qy(o.pathname||"/",t);if(l==null)return null;let h=Ky(r);WE(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let v=nw(l);f=ZE(h[m],v)}return f}function Ky(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(ut(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let v=ts([s,m.relativePath]),E=t.concat(m);l.children&&l.children.length>0&&(ut(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Ky(l.children,e,E,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:XE(v,l.index),routesMeta:E})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let m of Gy(l.path))o(l,h,m)}),e}function Gy(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=Gy(s.join("/")),f=[];return f.push(...h.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...h),f.map(m=>r.startsWith("/")&&m===""?"/":m)}function WE(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:JE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const qE=/^:[\w-]+$/,HE=3,KE=2,GE=1,QE=10,YE=-2,_g=r=>r==="*";function XE(r,e){let t=r.split("/"),s=t.length;return t.some(_g)&&(s+=YE),e&&(s+=KE),t.filter(o=>!_g(o)).reduce((o,l)=>o+(qE.test(l)?HE:l===""?GE:QE),s)}function JE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function ZE(r,e,t){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let m=s[f],v=f===s.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=ew({path:m.relativePath,caseSensitive:m.caseSensitive,end:v},E),R=m.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:ts([l,T.pathname]),pathnameBase:ow(ts([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=ts([l,T.pathnameBase]))}return h}function ew(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=tw(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((v,E,T)=>{let{paramName:R,isOptional:F}=E;if(R==="*"){let q=f[T]||"";h=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const z=f[T];return F&&!z?v[R]=void 0:v[R]=(z||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:h,pattern:r}}function tw(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),qy(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m)=>(s.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function nw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qy(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Qy(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function rw(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?So(r):r;return{pathname:t?t.startsWith("/")?t:iw(t,e):e,search:aw(s),hash:lw(o)}}function iw(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function fd(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sw(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Yy(r,e){let t=sw(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Xy(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=So(r):(o=Ua({},r),ut(!o.pathname||!o.pathname.includes("?"),fd("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),fd("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),fd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}f=T>=0?e[T]:"/"}let m=rw(o,f),v=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(v||E)&&(m.pathname+="/"),m}const ts=r=>r.join("/").replace(/\/\/+/g,"/"),ow=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),aw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,lw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function uw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Jy=["post","put","patch","delete"];new Set(Jy);const cw=["get",...Jy];new Set(cw);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},ja.apply(this,arguments)}const nf=K.createContext(null),hw=K.createContext(null),Xa=K.createContext(null),fc=K.createContext(null),us=K.createContext({outlet:null,matches:[],isDataRoute:!1}),Zy=K.createContext(null);function Ja(){return K.useContext(fc)!=null}function rf(){return Ja()||ut(!1),K.useContext(fc).location}function ev(r){K.useContext(Xa).static||K.useLayoutEffect(r)}function tv(){let{isDataRoute:r}=K.useContext(us);return r?Sw():dw()}function dw(){Ja()||ut(!1);let r=K.useContext(nf),{basename:e,future:t,navigator:s}=K.useContext(Xa),{matches:o}=K.useContext(us),{pathname:l}=rf(),h=JSON.stringify(Yy(o,t.v7_relativeSplatPath)),f=K.useRef(!1);return ev(()=>{f.current=!0}),K.useCallback(function(v,E){if(E===void 0&&(E={}),!f.current)return;if(typeof v=="number"){s.go(v);return}let T=Xy(v,JSON.parse(h),l,E.relative==="path");r==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:ts([e,T.pathname])),(E.replace?s.replace:s.push)(T,E.state,E)},[e,s,h,l,r])}function fw(r,e){return pw(r,e)}function pw(r,e,t,s){Ja()||ut(!1);let{navigator:o}=K.useContext(Xa),{matches:l}=K.useContext(us),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let v=rf(),E;if(e){var T;let j=typeof e=="string"?So(e):e;m==="/"||(T=j.pathname)!=null&&T.startsWith(m)||ut(!1),E=j}else E=v;let R=E.pathname||"/",F=R;if(m!=="/"){let j=m.replace(/^\//,"").split("/");F="/"+R.replace(/^\//,"").split("/").slice(j.length).join("/")}let z=zE(r,{pathname:F}),q=_w(z&&z.map(j=>Object.assign({},j,{params:Object.assign({},f,j.params),pathname:ts([m,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?m:ts([m,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,t,s);return e&&q?K.createElement(fc.Provider,{value:{location:ja({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:ci.Pop}},q):q}function mw(){let r=Iw(),e=uw(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:o},t):null,null)}const gw=K.createElement(mw,null);class yw extends K.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?K.createElement(us.Provider,{value:this.props.routeContext},K.createElement(Zy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vw(r){let{routeContext:e,match:t,children:s}=r,o=K.useContext(nf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(us.Provider,{value:e},s)}function _w(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);E>=0||ut(!1),h=h.slice(0,Math.min(h.length,E+1))}let m=!1,v=-1;if(t&&s&&s.v7_partialHydration)for(let E=0;E<h.length;E++){let T=h[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(v=E),T.route.id){let{loaderData:R,errors:F}=t,z=T.route.loader&&R[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||z){m=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}return h.reduceRight((E,T,R)=>{let F,z=!1,q=null,j=null;t&&(F=f&&T.route.id?f[T.route.id]:void 0,q=T.route.errorElement||gw,m&&(v<0&&R===0?(Aw("route-fallback"),z=!0,j=null):v===R&&(z=!0,j=T.route.hydrateFallbackElement||null)));let le=e.concat(h.slice(0,R+1)),ce=()=>{let fe;return F?fe=q:z?fe=j:T.route.Component?fe=K.createElement(T.route.Component,null):T.route.element?fe=T.route.element:fe=E,K.createElement(vw,{match:T,routeContext:{outlet:E,matches:le,isDataRoute:t!=null},children:fe})};return t&&(T.route.ErrorBoundary||T.route.errorElement||R===0)?K.createElement(yw,{location:t.location,revalidation:t.revalidation,component:q,error:F,children:ce(),routeContext:{outlet:null,matches:le,isDataRoute:!0}}):ce()},null)}var nv=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(nv||{}),rv=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(rv||{});function Ew(r){let e=K.useContext(nf);return e||ut(!1),e}function ww(r){let e=K.useContext(hw);return e||ut(!1),e}function Tw(r){let e=K.useContext(us);return e||ut(!1),e}function iv(r){let e=Tw(),t=e.matches[e.matches.length-1];return t.route.id||ut(!1),t.route.id}function Iw(){var r;let e=K.useContext(Zy),t=ww(),s=iv();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function Sw(){let{router:r}=Ew(nv.UseNavigateStable),e=iv(rv.UseNavigateStable),t=K.useRef(!1);return ev(()=>{t.current=!0}),K.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,ja({fromRouteId:e},l)))},[r,e])}const Eg={};function Aw(r,e,t){Eg[r]||(Eg[r]=!0)}function Rw(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Cw(r){let{to:e,replace:t,state:s,relative:o}=r;Ja()||ut(!1);let{future:l,static:h}=K.useContext(Xa),{matches:f}=K.useContext(us),{pathname:m}=rf(),v=tv(),E=Xy(e,Yy(f,l.v7_relativeSplatPath),m,o==="path"),T=JSON.stringify(E);return K.useEffect(()=>v(JSON.parse(T),{replace:t,state:s,relative:o}),[v,T,o,t,s]),null}function Rd(r){ut(!1)}function Pw(r){let{basename:e="/",children:t=null,location:s,navigationType:o=ci.Pop,navigator:l,static:h=!1,future:f}=r;Ja()&&ut(!1);let m=e.replace(/^\/*/,"/"),v=K.useMemo(()=>({basename:m,navigator:l,static:h,future:ja({v7_relativeSplatPath:!1},f)}),[m,f,l,h]);typeof s=="string"&&(s=So(s));let{pathname:E="/",search:T="",hash:R="",state:F=null,key:z="default"}=s,q=K.useMemo(()=>{let j=Qy(E,m);return j==null?null:{location:{pathname:j,search:T,hash:R,state:F,key:z},navigationType:o}},[m,E,T,R,F,z,o]);return q==null?null:K.createElement(Xa.Provider,{value:v},K.createElement(fc.Provider,{children:t,value:q}))}function kw(r){let{children:e,location:t}=r;return fw(Cd(e),t)}new Promise(()=>{});function Cd(r,e){e===void 0&&(e=[]);let t=[];return K.Children.forEach(r,(s,o)=>{if(!K.isValidElement(s))return;let l=[...e,o];if(s.type===K.Fragment){t.push.apply(t,Cd(s.props.children,l));return}s.type!==Rd&&ut(!1),!s.props.index||!s.props.children||ut(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Cd(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Nw="6";try{window.__reactRouterVersion=Nw}catch{}const xw="startTransition",wg=DE[xw];function Dw(r){let{basename:e,children:t,future:s,window:o}=r,l=K.useRef();l.current==null&&(l.current=UE({window:o,v5Compat:!0}));let h=l.current,[f,m]=K.useState({action:h.action,location:h.location}),{v7_startTransition:v}=s||{},E=K.useCallback(T=>{v&&wg?wg(()=>m(T)):m(T)},[m,v]);return K.useLayoutEffect(()=>h.listen(E),[h,E]),K.useEffect(()=>Rw(s),[s]),K.createElement(Pw,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:s})}var Tg;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Tg||(Tg={}));var Ig;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Ig||(Ig={}));let Ow={data:""},Vw=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||Ow,Lw=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Mw=/\/\*[^]*?\*\/|  +/g,Sg=/\n+/g,si=(r,e)=>{let t="",s="",o="";for(let l in r){let h=r[l];l[0]=="@"?l[1]=="i"?t=l+" "+h+";":s+=l[1]=="f"?si(h,l):l+"{"+si(h,l[1]=="k"?"":e)+"}":typeof h=="object"?s+=si(h,e?e.replace(/([^,])+/g,f=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,m=>/&/.test(m)?m.replace(/&/g,f):f?f+" "+m:m)):l):h!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=si.p?si.p(l,h):l+":"+h+";")}return t+(e&&o?e+"{"+o+"}":o)+s},wr={},sv=r=>{if(typeof r=="object"){let e="";for(let t in r)e+=t+sv(r[t]);return e}return r},bw=(r,e,t,s,o)=>{let l=sv(r),h=wr[l]||(wr[l]=(m=>{let v=0,E=11;for(;v<m.length;)E=101*E+m.charCodeAt(v++)>>>0;return"go"+E})(l));if(!wr[h]){let m=l!==r?r:(v=>{let E,T,R=[{}];for(;E=Lw.exec(v.replace(Mw,""));)E[4]?R.shift():E[3]?(T=E[3].replace(Sg," ").trim(),R.unshift(R[0][T]=R[0][T]||{})):R[0][E[1]]=E[2].replace(Sg," ").trim();return R[0]})(r);wr[h]=si(o?{["@keyframes "+h]:m}:m,t?"":"."+h)}let f=t&&wr.g?wr.g:null;return t&&(wr.g=wr[h]),((m,v,E,T)=>{T?v.data=v.data.replace(T,m):v.data.indexOf(m)===-1&&(v.data=E?m+v.data:v.data+m)})(wr[h],e,s,f),h},Fw=(r,e,t)=>r.reduce((s,o,l)=>{let h=e[l];if(h&&h.call){let f=h(t),m=f&&f.props&&f.props.className||/^go/.test(f)&&f;h=m?"."+m:f&&typeof f=="object"?f.props?"":si(f,""):f===!1?"":f}return s+o+(h??"")},"");function pc(r){let e=this||{},t=r.call?r(e.p):r;return bw(t.unshift?t.raw?Fw(t,[].slice.call(arguments,1),e.p):t.reduce((s,o)=>Object.assign(s,o&&o.call?o(e.p):o),{}):t,Vw(e.target),e.g,e.o,e.k)}let ov,Pd,kd;pc.bind({g:1});let Cr=pc.bind({k:1});function Uw(r,e,t,s){si.p=e,ov=r,Pd=t,kd=s}function Ei(r,e){let t=this||{};return function(){let s=arguments;function o(l,h){let f=Object.assign({},l),m=f.className||o.className;t.p=Object.assign({theme:Pd&&Pd()},f),t.o=/ *go\d+/.test(m),f.className=pc.apply(t,s)+(m?" "+m:"");let v=r;return r[0]&&(v=f.as||r,delete f.as),kd&&v[0]&&kd(f),ov(v,f)}return o}}var jw=r=>typeof r=="function",Ku=(r,e)=>jw(r)?r(e):r,Bw=(()=>{let r=0;return()=>(++r).toString()})(),av=(()=>{let r;return()=>{if(r===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r}})(),zw=20,lv=(r,e)=>{switch(e.type){case 0:return{...r,toasts:[e.toast,...r.toasts].slice(0,zw)};case 1:return{...r,toasts:r.toasts.map(l=>l.id===e.toast.id?{...l,...e.toast}:l)};case 2:let{toast:t}=e;return lv(r,{type:r.toasts.find(l=>l.id===t.id)?1:0,toast:t});case 3:let{toastId:s}=e;return{...r,toasts:r.toasts.map(l=>l.id===s||s===void 0?{...l,dismissed:!0,visible:!1}:l)};case 4:return e.toastId===void 0?{...r,toasts:[]}:{...r,toasts:r.toasts.filter(l=>l.id!==e.toastId)};case 5:return{...r,pausedAt:e.time};case 6:let o=e.time-(r.pausedAt||0);return{...r,pausedAt:void 0,toasts:r.toasts.map(l=>({...l,pauseDuration:l.pauseDuration+o}))}}},bu=[],Zi={toasts:[],pausedAt:void 0},cs=r=>{Zi=lv(Zi,r),bu.forEach(e=>{e(Zi)})},$w={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ww=(r={})=>{let[e,t]=K.useState(Zi),s=K.useRef(Zi);K.useEffect(()=>(s.current!==Zi&&t(Zi),bu.push(t),()=>{let l=bu.indexOf(t);l>-1&&bu.splice(l,1)}),[]);let o=e.toasts.map(l=>{var h,f,m;return{...r,...r[l.type],...l,removeDelay:l.removeDelay||((h=r[l.type])==null?void 0:h.removeDelay)||(r==null?void 0:r.removeDelay),duration:l.duration||((f=r[l.type])==null?void 0:f.duration)||(r==null?void 0:r.duration)||$w[l.type],style:{...r.style,...(m=r[l.type])==null?void 0:m.style,...l.style}}});return{...e,toasts:o}},qw=(r,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:r,pauseDuration:0,...t,id:(t==null?void 0:t.id)||Bw()}),Za=r=>(e,t)=>{let s=qw(e,r,t);return cs({type:2,toast:s}),s.id},Ht=(r,e)=>Za("blank")(r,e);Ht.error=Za("error");Ht.success=Za("success");Ht.loading=Za("loading");Ht.custom=Za("custom");Ht.dismiss=r=>{cs({type:3,toastId:r})};Ht.remove=r=>cs({type:4,toastId:r});Ht.promise=(r,e,t)=>{let s=Ht.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof r=="function"&&(r=r()),r.then(o=>{let l=e.success?Ku(e.success,o):void 0;return l?Ht.success(l,{id:s,...t,...t==null?void 0:t.success}):Ht.dismiss(s),o}).catch(o=>{let l=e.error?Ku(e.error,o):void 0;l?Ht.error(l,{id:s,...t,...t==null?void 0:t.error}):Ht.dismiss(s)}),r};var Hw=(r,e)=>{cs({type:1,toast:{id:r,height:e}})},Kw=()=>{cs({type:5,time:Date.now()})},Da=new Map,Gw=1e3,Qw=(r,e=Gw)=>{if(Da.has(r))return;let t=setTimeout(()=>{Da.delete(r),cs({type:4,toastId:r})},e);Da.set(r,t)},Yw=r=>{let{toasts:e,pausedAt:t}=Ww(r);K.useEffect(()=>{if(t)return;let l=Date.now(),h=e.map(f=>{if(f.duration===1/0)return;let m=(f.duration||0)+f.pauseDuration-(l-f.createdAt);if(m<0){f.visible&&Ht.dismiss(f.id);return}return setTimeout(()=>Ht.dismiss(f.id),m)});return()=>{h.forEach(f=>f&&clearTimeout(f))}},[e,t]);let s=K.useCallback(()=>{t&&cs({type:6,time:Date.now()})},[t]),o=K.useCallback((l,h)=>{let{reverseOrder:f=!1,gutter:m=8,defaultPosition:v}=h||{},E=e.filter(F=>(F.position||v)===(l.position||v)&&F.height),T=E.findIndex(F=>F.id===l.id),R=E.filter((F,z)=>z<T&&F.visible).length;return E.filter(F=>F.visible).slice(...f?[R+1]:[0,R]).reduce((F,z)=>F+(z.height||0)+m,0)},[e]);return K.useEffect(()=>{e.forEach(l=>{if(l.dismissed)Qw(l.id,l.removeDelay);else{let h=Da.get(l.id);h&&(clearTimeout(h),Da.delete(l.id))}})},[e]),{toasts:e,handlers:{updateHeight:Hw,startPause:Kw,endPause:s,calculateOffset:o}}},Xw=Cr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Jw=Cr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Zw=Cr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,eT=Ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xw} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Jw} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${r=>r.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Zw} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,tT=Cr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,nT=Ei("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${r=>r.secondary||"#e0e0e0"};
  border-right-color: ${r=>r.primary||"#616161"};
  animation: ${tT} 1s linear infinite;
`,rT=Cr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,iT=Cr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,sT=Ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${iT} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${r=>r.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,oT=Ei("div")`
  position: absolute;
`,aT=Ei("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,lT=Cr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,uT=Ei("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${lT} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,cT=({toast:r})=>{let{icon:e,type:t,iconTheme:s}=r;return e!==void 0?typeof e=="string"?K.createElement(uT,null,e):e:t==="blank"?null:K.createElement(aT,null,K.createElement(nT,{...s}),t!=="loading"&&K.createElement(oT,null,t==="error"?K.createElement(eT,{...s}):K.createElement(sT,{...s})))},hT=r=>`
0% {transform: translate3d(0,${r*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,dT=r=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${r*-150}%,-1px) scale(.6); opacity:0;}
`,fT="0%{opacity:0;} 100%{opacity:1;}",pT="0%{opacity:1;} 100%{opacity:0;}",mT=Ei("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,gT=Ei("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,yT=(r,e)=>{let t=r.includes("top")?1:-1,[s,o]=av()?[fT,pT]:[hT(t),dT(t)];return{animation:e?`${Cr(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Cr(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},vT=K.memo(({toast:r,position:e,style:t,children:s})=>{let o=r.height?yT(r.position||e||"top-center",r.visible):{opacity:0},l=K.createElement(cT,{toast:r}),h=K.createElement(gT,{...r.ariaProps},Ku(r.message,r));return K.createElement(mT,{className:r.className,style:{...o,...t,...r.style}},typeof s=="function"?s({icon:l,message:h}):K.createElement(K.Fragment,null,l,h))});Uw(K.createElement);var _T=({id:r,className:e,style:t,onHeightUpdate:s,children:o})=>{let l=K.useCallback(h=>{if(h){let f=()=>{let m=h.getBoundingClientRect().height;s(r,m)};f(),new MutationObserver(f).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[r,s]);return K.createElement("div",{ref:l,className:e,style:t},o)},ET=(r,e)=>{let t=r.includes("top"),s=t?{top:0}:{bottom:0},o=r.includes("center")?{justifyContent:"center"}:r.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:av()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...s,...o}},wT=pc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Nu=16,TT=({reverseOrder:r,position:e="top-center",toastOptions:t,gutter:s,children:o,containerStyle:l,containerClassName:h})=>{let{toasts:f,handlers:m}=Yw(t);return K.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Nu,left:Nu,right:Nu,bottom:Nu,pointerEvents:"none",...l},className:h,onMouseEnter:m.startPause,onMouseLeave:m.endPause},f.map(v=>{let E=v.position||e,T=m.calculateOffset(v,{reverseOrder:r,gutter:s,defaultPosition:e}),R=ET(E,T);return K.createElement(_T,{id:v.id,key:v.id,onHeightUpdate:m.updateHeight,className:v.visible?wT:"",style:R},v.type==="custom"?Ku(v.message,v):o?o(v):K.createElement(vT,{toast:v,position:E}))}))},IT=Ht,Ag={};/**
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
 */const uv=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},ST=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],m=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},cv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,m=o+2<r.length,v=m?r[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let R=(f&15)<<2|v>>6,F=v&63;m||(F=64,h||(R=64)),s.push(t[E],t[T],t[R],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(uv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ST(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||T==null)throw new AT;const R=l<<2|f>>4;if(s.push(R),v!==64){const F=f<<4&240|v>>2;if(s.push(F),T!==64){const z=v<<6&192|T;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class AT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RT=function(r){const e=uv(r);return cv.encodeByteArray(e,!0)},Gu=function(r){return RT(r).replace(/\./g,"")},hv=function(r){try{return cv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PT=()=>CT().__FIREBASE_DEFAULTS__,kT=()=>{if(typeof process>"u"||typeof Ag>"u")return;const r=Ag.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},NT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&hv(r[1]);return e&&JSON.parse(e)},mc=()=>{try{return PT()||kT()||NT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},dv=r=>{var e,t;return(t=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},xT=r=>{const e=dv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},fv=()=>{var r;return(r=mc())===null||r===void 0?void 0:r.config},pv=r=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class DT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function OT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Gu(JSON.stringify(t)),Gu(JSON.stringify(h)),""].join(".")}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function LT(){var r;const e=(r=mc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function FT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UT(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jT(){return!LT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BT(){try{return typeof indexedDB=="object"}catch{return!1}}function zT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const $T="FirebaseError";class Dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$T,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?WT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Dr(o,f,s)}}function WT(r,e){return r.replace(qT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const qT=/\{\$([^}]+)}/g;function HT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Qu(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Rg(l)&&Rg(h)){if(!Qu(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Rg(r){return r!==null&&typeof r=="object"}/**
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
 */function tl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ra(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ca(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function KT(r,e){const t=new GT(r,e);return t.subscribe.bind(t)}class GT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");QT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=pd),o.error===void 0&&(o.error=pd),o.complete===void 0&&(o.complete=pd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function pd(){}/**
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
 */function gt(r){return r&&r._delegate?r._delegate:r}class rs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ji="[DEFAULT]";/**
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
 */class YT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new DT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JT(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:XT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XT(r){return r===Ji?void 0:r}function JT(r){return r.instantiationMode==="EAGER"}/**
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
 */class ZT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new YT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const eI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},tI=ke.INFO,nI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},rI=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=nI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sf{constructor(e){this.name=e,this._logLevel=tI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const iI=(r,e)=>e.some(t=>r instanceof t);let Cg,Pg;function sI(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oI(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,Nd=new WeakMap,gv=new WeakMap,md=new WeakMap,of=new WeakMap;function aI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(di(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&mv.set(t,r)}).catch(()=>{}),of.set(e,r),e}function lI(r){if(Nd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Nd.set(r,e)}let xd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Nd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||gv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function uI(r){xd=r(xd)}function cI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(gd(this),e,...t);return gv.set(s,e.sort?e.sort():[e]),di(s)}:oI().includes(r)?function(...e){return r.apply(gd(this),e),di(mv.get(this))}:function(...e){return di(r.apply(gd(this),e))}}function hI(r){return typeof r=="function"?cI(r):(r instanceof IDBTransaction&&lI(r),iI(r,sI())?new Proxy(r,xd):r)}function di(r){if(r instanceof IDBRequest)return aI(r);if(md.has(r))return md.get(r);const e=hI(r);return e!==r&&(md.set(r,e),of.set(e,r)),e}const gd=r=>of.get(r);function dI(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=di(h);return s&&h.addEventListener("upgradeneeded",m=>{s(di(h.result),m.oldVersion,m.newVersion,di(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const fI=["get","getKey","getAll","getAllKeys","count"],pI=["put","add","delete","clear"],yd=new Map;function kg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(yd.get(e))return yd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=pI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||fI.includes(t)))return;const l=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let v=m.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&m.done]))[0]};return yd.set(e,l),l}uI(r=>({...r,get:(e,t,s)=>kg(e,t)||r.get(e,t,s),has:(e,t)=>!!kg(e,t)||r.has(e,t)}));/**
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
 */class mI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function gI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",Ng="0.10.13";/**
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
 */const Pr=new sf("@firebase/app"),yI="@firebase/app-compat",vI="@firebase/analytics-compat",_I="@firebase/analytics",EI="@firebase/app-check-compat",wI="@firebase/app-check",TI="@firebase/auth",II="@firebase/auth-compat",SI="@firebase/database",AI="@firebase/data-connect",RI="@firebase/database-compat",CI="@firebase/functions",PI="@firebase/functions-compat",kI="@firebase/installations",NI="@firebase/installations-compat",xI="@firebase/messaging",DI="@firebase/messaging-compat",OI="@firebase/performance",VI="@firebase/performance-compat",LI="@firebase/remote-config",MI="@firebase/remote-config-compat",bI="@firebase/storage",FI="@firebase/storage-compat",UI="@firebase/firestore",jI="@firebase/vertexai-preview",BI="@firebase/firestore-compat",zI="firebase",$I="10.14.1";/**
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
 */const Od="[DEFAULT]",WI={[Dd]:"fire-core",[yI]:"fire-core-compat",[_I]:"fire-analytics",[vI]:"fire-analytics-compat",[wI]:"fire-app-check",[EI]:"fire-app-check-compat",[TI]:"fire-auth",[II]:"fire-auth-compat",[SI]:"fire-rtdb",[AI]:"fire-data-connect",[RI]:"fire-rtdb-compat",[CI]:"fire-fn",[PI]:"fire-fn-compat",[kI]:"fire-iid",[NI]:"fire-iid-compat",[xI]:"fire-fcm",[DI]:"fire-fcm-compat",[OI]:"fire-perf",[VI]:"fire-perf-compat",[LI]:"fire-rc",[MI]:"fire-rc-compat",[bI]:"fire-gcs",[FI]:"fire-gcs-compat",[UI]:"fire-fst",[BI]:"fire-fst-compat",[jI]:"fire-vertex","fire-js":"fire-js",[zI]:"fire-js-all"};/**
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
 */const Yu=new Map,qI=new Map,Vd=new Map;function xg(r,e){try{r.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function go(r){const e=r.name;if(Vd.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,r);for(const t of Yu.values())xg(t,r);for(const t of qI.values())xg(t,r);return!0}function af(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Xn(r){return r.settings!==void 0}/**
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
 */const HI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new el("app","Firebase",HI);/**
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
 */class KI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ao=$I;function yv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Od,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(t||(t=fv()),!t)throw fi.create("no-options");const l=Yu.get(o);if(l){if(Qu(t,l.options)&&Qu(s,l.config))return l;throw fi.create("duplicate-app",{appName:o})}const h=new ZT(o);for(const m of Vd.values())h.addComponent(m);const f=new KI(t,s,h);return Yu.set(o,f),f}function vv(r=Od){const e=Yu.get(r);if(!e&&r===Od&&fv())return yv();if(!e)throw fi.create("no-app",{appName:r});return e}function pi(r,e,t){var s;let o=(s=WI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(f.join(" "));return}go(new rs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const GI="firebase-heartbeat-database",QI=1,Ba="firebase-heartbeat-store";let vd=null;function _v(){return vd||(vd=dI(GI,QI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(r=>{throw fi.create("idb-open",{originalErrorMessage:r.message})})),vd}async function YI(r){try{const t=(await _v()).transaction(Ba),s=await t.objectStore(Ba).get(Ev(r));return await t.done,s}catch(e){if(e instanceof Dr)Pr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(t.message)}}}async function Dg(r,e){try{const s=(await _v()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,Ev(r)),await s.done}catch(t){if(t instanceof Dr)Pr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(s.message)}}}function Ev(r){return`${r.name}!${r.options.appId}`}/**
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
 */const XI=1024,JI=30*24*60*60*1e3;class ZI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tS(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Og();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=JI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Pr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Og(),{heartbeatsToSend:s,unsentEntries:o}=eS(this._heartbeatsCache.heartbeats),l=Gu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Pr.warn(t),""}}}function Og(){return new Date().toISOString().substring(0,10)}function eS(r,e=XI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Vg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Vg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class tS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BT()?zT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Vg(r){return Gu(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function nS(r){go(new rs("platform-logger",e=>new mI(e),"PRIVATE")),go(new rs("heartbeat",e=>new ZI(e),"PRIVATE")),pi(Dd,Ng,r),pi(Dd,Ng,"esm2017"),pi("fire-js","")}nS("");function lf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rS=wv,Tv=new el("auth","Firebase",wv());/**
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
 */const Xu=new sf("@firebase/auth");function iS(r,...e){Xu.logLevel<=ke.WARN&&Xu.warn(`Auth (${Ao}): ${r}`,...e)}function Fu(r,...e){Xu.logLevel<=ke.ERROR&&Xu.error(`Auth (${Ao}): ${r}`,...e)}/**
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
 */function Fn(r,...e){throw uf(r,...e)}function Jn(r,...e){return uf(r,...e)}function Iv(r,e,t){const s=Object.assign(Object.assign({},rS()),{[e]:t});return new el("auth","Firebase",s).create(e,{appName:r.name})}function Ar(r){return Iv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Tv.create(r,...e)}function ye(r,e,...t){if(!r)throw uf(e,...t)}function Tr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Fu(e),new Error(e)}function kr(r,e){r||Tr(e)}/**
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
 */function Ld(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function sS(){return Lg()==="http:"||Lg()==="https:"}function Lg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function oS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sS()||bT()||"connection"in navigator)?navigator.onLine:!0}function aS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=VT()||FT()}get(){return oS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cf(r,e){kr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uS=new nl(3e4,6e4);function wi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ti(r,e,t,s,o={}){return Av(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=tl(Object.assign({key:r.config.apiKey},h)).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:m},l);return MT()||(v.referrerPolicy="no-referrer"),Sv.fetch()(Rv(r,r.config.apiHost,t,f),v)})}async function Av(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},lS),e);try{const o=new hS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw xu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[m,v]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw xu(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw xu(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw xu(r,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Iv(r,E,v);Fn(r,E)}}catch(o){if(o instanceof Dr)throw o;Fn(r,"network-request-failed",{message:String(o)})}}async function rl(r,e,t,s,o={}){const l=await Ti(r,e,t,s,o);return"mfaPendingCredential"in l&&Fn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function Rv(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?cf(r.config,o):`${r.config.apiScheme}://${o}`}function cS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),uS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Jn(r,e,s);return o.customData._tokenResponse=t,o}function Mg(r){return r!==void 0&&r.enterprise!==void 0}class dS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fS(r,e){return Ti(r,"GET","/v2/recaptchaConfig",wi(r,e))}/**
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
 */async function pS(r,e){return Ti(r,"POST","/v1/accounts:delete",e)}async function Cv(r,e){return Ti(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mS(r,e=!1){const t=gt(r),s=await t.getIdToken(e),o=hf(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Oa(_d(o.auth_time)),issuedAtTime:Oa(_d(o.iat)),expirationTime:Oa(_d(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function _d(r){return Number(r)*1e3}function hf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Fu("JWT malformed, contained fewer than 3 sections"),null;try{const o=hv(t);return o?JSON.parse(o):(Fu("Failed to decode base64 JWT payload"),null)}catch(o){return Fu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function bg(r){const e=hf(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function za(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dr&&gS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function gS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class yS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Md{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(r){var e;const t=r.auth,s=await r.getIdToken(),o=await za(r,Cv(t,{idToken:s}));ye(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Pv(l.providerUserInfo):[],f=_S(r.providerData,h),m=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=m?v:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Md(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function vS(r){const e=gt(r);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _S(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Pv(r){return r.map(e=>{var{providerId:t}=e,s=lf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ES(r,e){const t=await Av(r,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=Rv(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Sv.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wS(r,e){return Ti(r,"POST","/v2/accounts:revokeToken",wi(r,e))}/**
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
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=bg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await ES(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new ho;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
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
 */function ii(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Md(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await za(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mS(this,e)}reload(){return vS(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await za(this,pS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,m,v,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,j=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,le=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ce=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:fe,emailVerified:Te,isAnonymous:je,providerData:Re,stsTokenManager:x}=t;ye(fe&&x,e,"internal-error");const S=ho.fromJSON(this.name,x);ye(typeof fe=="string",e,"internal-error"),ii(T,e.name),ii(R,e.name),ye(typeof Te=="boolean",e,"internal-error"),ye(typeof je=="boolean",e,"internal-error"),ii(F,e.name),ii(z,e.name),ii(q,e.name),ii(j,e.name),ii(le,e.name),ii(ce,e.name);const C=new Ir({uid:fe,auth:e,email:R,emailVerified:Te,displayName:T,isAnonymous:je,photoURL:z,phoneNumber:F,tenantId:q,stsTokenManager:S,createdAt:le,lastLoginAt:ce});return Re&&Array.isArray(Re)&&(C.providerData=Re.map(k=>Object.assign({},k))),j&&(C._redirectEventId=j),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new ho;o.updateFromServerResponse(t);const l=new Ir({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ju(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Pv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new ho;f.updateFromIdToken(s);const m=new Ir({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Md(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,v),m}}/**
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
 */const Fg=new Map;function Sr(r){kr(r instanceof Function,"Expected a class definition");let e=Fg.get(r);return e?(kr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Fg.set(r,e),e)}/**
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
 */class kv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kv.type="NONE";const Ug=kv;/**
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
 */function Uu(r,e,t){return`firebase:${r}:${e}:${t}`}class fo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Uu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Uu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new fo(Sr(Ug),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Sr(Ug);const h=Uu(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const E=await v._get(h);if(E){const T=Ir._fromJSON(e,E);v!==l&&(f=T),l=v;break}}catch{}const m=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new fo(l,e,s):(l=m[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new fo(l,e,s))}}/**
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
 */function jg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(Mv(e))return"Webos";if(xv(e))return"Safari";if((e.includes("chrome/")||Dv(e))&&!e.includes("edge/"))return"Chrome";if(Vv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nv(r=Bt()){return/firefox\//i.test(r)}function xv(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dv(r=Bt()){return/crios\//i.test(r)}function Ov(r=Bt()){return/iemobile/i.test(r)}function Vv(r=Bt()){return/android/i.test(r)}function Lv(r=Bt()){return/blackberry/i.test(r)}function Mv(r=Bt()){return/webos/i.test(r)}function df(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function TS(r=Bt()){var e;return df(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IS(){return UT()&&document.documentMode===10}function bv(r=Bt()){return df(r)||Vv(r)||Mv(r)||Lv(r)||/windows phone/i.test(r)||Ov(r)}/**
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
 */function Fv(r,e=[]){let t;switch(r){case"Browser":t=jg(Bt());break;case"Worker":t=`${jg(Bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ao}/${s}`}/**
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
 */class SS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const m=e(l);h(m)}catch(m){f(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function AS(r,e={}){return Ti(r,"GET","/v2/passwordPolicy",wi(r,e))}/**
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
 */const RS=6;class CS{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:RS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class PS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bg(this),this.idTokenSubscription=new Bg(this),this.beforeStateQueue=new SS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cv(this,{idToken:e}),s=await Ir._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===f)&&(m!=null&&m.user)&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Ar(this));const t=e?gt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AS(this),t=new CS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await wS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&iS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hs(r){return gt(r)}class Bg{constructor(e){this.auth=e,this.observer=null,this.addObserver=KT(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kS(r){gc=r}function Uv(r){return gc.loadJS(r)}function NS(){return gc.recaptchaEnterpriseScript}function xS(){return gc.gapiScript}function DS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const OS="recaptcha-enterprise",VS="NO_RECAPTCHA";class LS{constructor(e){this.type=OS,this.auth=hs(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{fS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new dS(m);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(m=>{f(m)})})}function o(l,h,f){const m=window.grecaptcha;Mg(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(VS)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Mg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=NS();m.length!==0&&(m+=f),Uv(m).then(()=>{o(f,l,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function zg(r,e,t,s=!1){const o=new LS(r);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function bd(r,e,t,s){var o;if(!((o=r._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await zg(r,e,t,t==="getOobCode");return s(r,l)}else return s(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await zg(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(l)})}/**
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
 */function MS(r,e){const t=af(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Qu(l,e??{}))return o;Fn(o,"already-initialized")}return t.initialize({options:e})}function bS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function FS(r,e,t){const s=hs(r);ye(s._canInitEmulator,s,"emulator-config-failed"),ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=jv(e),{host:h,port:f}=US(e),m=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${m}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),jS()}function jv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function US(r){const e=jv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:$g(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:$g(h)}}}function $g(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function jS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,t){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}async function BS(r,e){return Ti(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function zS(r,e){return rl(r,"POST","/v1/accounts:signInWithPassword",wi(r,e))}/**
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
 */async function $S(r,e){return rl(r,"POST","/v1/accounts:signInWithEmailLink",wi(r,e))}async function WS(r,e){return rl(r,"POST","/v1/accounts:signInWithEmailLink",wi(r,e))}/**
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
 */class $a extends ff{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new $a(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new $a(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,t,"signInWithPassword",zS);case"emailLink":return $S(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,s,"signUpPassword",BS);case"emailLink":return WS(e,{idToken:t,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function po(r,e){return rl(r,"POST","/v1/accounts:signInWithIdp",wi(r,e))}/**
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
 */const qS="http://localhost";class is extends ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=lf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new is(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return po(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,po(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,po(e,t)}buildRequest(){const e={requestUri:qS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
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
 */function HS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KS(r){const e=Ra(Ca(r)).link,t=e?Ra(Ca(e)).deep_link_id:null,s=Ra(Ca(r)).deep_link_id;return(s?Ra(Ca(s)).link:null)||s||t||e||r}class pf{constructor(e){var t,s,o,l,h,f;const m=Ra(Ca(e)),v=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,T=HS((o=m.mode)!==null&&o!==void 0?o:null);ye(v&&E&&T,"argument-error"),this.apiKey=v,this.operation=T,this.code=E,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=m.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=KS(e);try{return new pf(t)}catch{return null}}}/**
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
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,t){return $a._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=pf.parseLink(t);return ye(s,"argument-error"),$a._fromEmailAndCode(e,s.code,s.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class il extends Bv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends il{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class ai extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return is._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
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
 */class li extends il{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
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
 */class ui extends il{constructor(){super("twitter.com")}static credential(e,t){return is._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
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
 */async function GS(r,e){return rl(r,"POST","/v1/accounts:signUp",wi(r,e))}/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Ir._fromIdTokenResponse(e,s,o),h=Wg(s);return new ss({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Wg(s);return new ss({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Wg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Zu extends Dr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Zu(e,t,s,o)}}function zv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(r,l,e,s):l})}async function QS(r,e,t=!1){const s=await za(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ss._forOperation(r,"link",s)}/**
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
 */async function YS(r,e,t=!1){const{auth:s}=r;if(Xn(s.app))return Promise.reject(Ar(s));const o="reauthenticate";try{const l=await za(r,zv(s,o,e,r),t);ye(l.idToken,s,"internal-error");const h=hf(l.idToken);ye(h,s,"internal-error");const{sub:f}=h;return ye(r.uid===f,s,"user-mismatch"),ss._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),l}}/**
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
 */async function $v(r,e,t=!1){if(Xn(r.app))return Promise.reject(Ar(r));const s="signIn",o=await zv(r,s,e),l=await ss._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function XS(r,e){return $v(hs(r),e)}/**
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
 */async function Wv(r){const e=hs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JS(r,e,t){if(Xn(r.app))return Promise.reject(Ar(r));const s=hs(r),h=await bd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GS).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Wv(r),m}),f=await ss._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function ZS(r,e,t){return Xn(r.app)?Promise.reject(Ar(r)):XS(gt(r),Ro.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Wv(r),s})}function eA(r,e,t,s){return gt(r).onIdTokenChanged(e,t,s)}function tA(r,e,t){return gt(r).beforeAuthStateChanged(e,t)}function nA(r,e,t,s){return gt(r).onAuthStateChanged(e,t,s)}function rA(r){return gt(r).signOut()}const ec="__sak";/**
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
 */class qv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iA=1e3,sA=10;class Hv extends qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);IS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,sA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hv.type="LOCAL";const oA=Hv;/**
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
 */class Kv extends qv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kv.type="SESSION";const Gv=Kv;/**
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
 */function aA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new yc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),m=await aA(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
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
 */function mf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class lA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,m)=>{const v=mf("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===v)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(E),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Zn(){return window}function uA(r){Zn().location.href=r}/**
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
 */function Qv(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function cA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function dA(){return Qv()?self:null}/**
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
 */const Yv="firebaseLocalStorageDb",fA=1,tc="firebaseLocalStorage",Xv="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vc(r,e){return r.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function pA(){const r=indexedDB.deleteDatabase(Yv);return new sl(r).toPromise()}function Fd(){const r=indexedDB.open(Yv,fA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(tc,{keyPath:Xv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(tc)?e(s):(s.close(),await pA(),e(await Fd()))})})}async function qg(r,e,t){const s=vc(r,!0).put({[Xv]:e,value:t});return new sl(s).toPromise()}async function mA(r,e){const t=vc(r,!1).get(e),s=await new sl(t).toPromise();return s===void 0?null:s.value}function Hg(r,e){const t=vc(r,!0).delete(e);return new sl(t).toPromise()}const gA=800,yA=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>yA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(dA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cA(),!this.activeServiceWorker)return;this.sender=new lA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fd();return await qg(e,ec,"1"),await Hg(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>qg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>mA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=vc(o,!1).getAll();return new sl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const vA=Jv;new nl(3e4,6e4);/**
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
 */function _A(r,e){return e?Sr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class gf extends ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EA(r){return $v(r.auth,new gf(r),r.bypassAuthState)}function wA(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),YS(t,new gf(r),r.bypassAuthState)}async function TA(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),QS(t,new gf(r),r.bypassAuthState)}/**
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
 */class Zv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EA;case"linkViaPopup":case"linkViaRedirect":return TA;case"reauthViaPopup":case"reauthViaRedirect":return wA;default:Fn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IA=new nl(2e3,1e4);class co extends Zv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,co.currentPopupAction&&co.currentPopupAction.cancel(),co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IA.get())};e()}}co.currentPopupAction=null;/**
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
 */const SA="pendingRedirect",ju=new Map;class AA extends Zv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const s=await RA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ju.set(this.auth._key(),e)}return this.bypassAuthState||ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RA(r,e){const t=kA(e),s=PA(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function CA(r,e){ju.set(r._key(),e)}function PA(r){return Sr(r._redirectPersistence)}function kA(r){return Uu(SA,r.config.apiKey,r.name)}async function NA(r,e,t=!1){if(Xn(r.app))return Promise.reject(Ar(r));const s=hs(r),o=_A(s,e),h=await new AA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const xA=10*60*1e3;class DA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!e_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kg(e))}saveEventToCache(e){this.cachedEventUids.add(Kg(e)),this.lastProcessedEventTime=Date.now()}}function Kg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function e_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return e_(r);default:return!1}}/**
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
 */async function VA(r,e={}){return Ti(r,"GET","/v1/projects",e)}/**
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
 */const LA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MA=/^https?/;async function bA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await VA(r);for(const t of e)try{if(FA(t))return}catch{}Fn(r,"unauthorized-domain")}function FA(r){const e=Ld(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!MA.test(t))return!1;if(LA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const UA=new nl(3e4,6e4);function Gg(){const r=Zn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function jA(r){return new Promise((e,t)=>{var s,o,l;function h(){Gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gg(),t(Jn(r,"network-request-failed"))},timeout:UA.get()})}if(!((o=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Zn().gapi)===null||l===void 0)&&l.load)h();else{const f=DS("iframefcb");return Zn()[f]=()=>{gapi.load?h():t(Jn(r,"network-request-failed"))},Uv(`${xS()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function BA(r){return Bu=Bu||jA(r),Bu}/**
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
 */const zA=new nl(5e3,15e3),$A="__/auth/iframe",WA="emulator/auth/iframe",qA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KA(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?cf(e,WA):`https://${r.config.authDomain}/${$A}`,s={apiKey:e.apiKey,appName:r.name,v:Ao},o=HA.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${tl(s).slice(1)}`}async function GA(r){const e=await BA(r),t=Zn().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:KA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(r,"network-request-failed"),f=Zn().setTimeout(()=>{l(h)},zA.get());function m(){Zn().clearTimeout(f),o(s)}s.ping(m).then(m,()=>{l(h)})}))}/**
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
 */const QA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,XA=600,JA="_blank",ZA="http://localhost";class Qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eR(r,e,t,s=YA,o=XA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},QA),{width:s.toString(),height:o.toString(),top:l,left:h}),v=Bt().toLowerCase();t&&(f=Dv(v)?JA:t),Nv(v)&&(e=e||ZA,m.scrollbars="yes");const E=Object.entries(m).reduce((R,[F,z])=>`${R}${F}=${z},`,"");if(TS(v)&&f!=="_self")return tR(e||"",f),new Qg(null);const T=window.open(e||"",f,E);ye(T,r,"popup-blocked");try{T.focus()}catch{}return new Qg(T)}function tR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const nR="__/auth/handler",rR="emulator/auth/handler",iR=encodeURIComponent("fac");async function Yg(r,e,t,s,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ao,eventId:o};if(e instanceof Bv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",HT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof il){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const m=await r._getAppCheckToken(),v=m?`#${iR}=${encodeURIComponent(m)}`:"";return`${sR(r)}?${tl(f).slice(1)}${v}`}function sR({config:r}){return r.emulator?cf(r,rR):`https://${r.authDomain}/${nR}`}/**
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
 */const Ed="webStorageSupport";class oR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gv,this._completeRedirectFn=NA,this._overrideRedirectResult=CA}async _openPopup(e,t,s,o){var l;kr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Yg(e,t,s,Ld(),o);return eR(e,h,mf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Yg(e,t,s,Ld(),o);return uA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(kr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await GA(e),s=new DA(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ed,{type:Ed},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ed];h!==void 0&&t(!!h),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bv()||xv()||df()}}const aR=oR;var Xg="@firebase/auth",Jg="1.7.9";/**
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
 */class lR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cR(r){go(new rs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(r)},v=new PS(s,o,l,m);return bS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),go(new rs("auth-internal",e=>{const t=hs(e.getProvider("auth").getImmediate());return(s=>new lR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(Xg,Jg,uR(r)),pi(Xg,Jg,"esm2017")}/**
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
 */const hR=5*60,dR=pv("authIdTokenMaxAge")||hR;let Zg=null;const fR=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>dR)return;const o=t==null?void 0:t.token;Zg!==o&&(Zg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function pR(r=vv()){const e=af(r,"auth");if(e.isInitialized())return e.getImmediate();const t=MS(r,{popupRedirectResolver:aR,persistence:[vA,oA,Gv]}),s=pv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=fR(l.toString());tA(t,h,()=>h(t.currentUser)),eA(t,f=>h(f))}}const o=dv("auth");return o&&FS(t,`http://${o}`),t}function mR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}kS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Jn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",mR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cR("Browser");var gR="firebase",yR="10.14.1";/**
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
 */pi(gR,yR,"app");var ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,t_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function C(){}C.prototype=S.prototype,x.D=S.prototype,x.prototype=new C,x.prototype.constructor=x,x.C=function(k,D,V){for(var A=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)A[tt-2]=arguments[tt];return S.prototype[D].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,C){C||(C=0);var k=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)k[D]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(D=0;16>D;++D)k[D]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=x.g[0],C=x.g[1],D=x.g[2];var V=x.g[3],A=S+(V^C&(D^V))+k[0]+3614090360&4294967295;S=C+(A<<7&4294967295|A>>>25),A=V+(D^S&(C^D))+k[1]+3905402710&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(C^V&(S^C))+k[2]+606105819&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(S^D&(V^S))+k[3]+3250441966&4294967295,C=D+(A<<22&4294967295|A>>>10),A=S+(V^C&(D^V))+k[4]+4118548399&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(D^S&(C^D))+k[5]+1200080426&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(C^V&(S^C))+k[6]+2821735955&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(S^D&(V^S))+k[7]+4249261313&4294967295,C=D+(A<<22&4294967295|A>>>10),A=S+(V^C&(D^V))+k[8]+1770035416&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(D^S&(C^D))+k[9]+2336552879&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(C^V&(S^C))+k[10]+4294925233&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(S^D&(V^S))+k[11]+2304563134&4294967295,C=D+(A<<22&4294967295|A>>>10),A=S+(V^C&(D^V))+k[12]+1804603682&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(D^S&(C^D))+k[13]+4254626195&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(C^V&(S^C))+k[14]+2792965006&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(S^D&(V^S))+k[15]+1236535329&4294967295,C=D+(A<<22&4294967295|A>>>10),A=S+(D^V&(C^D))+k[1]+4129170786&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(S^C))+k[6]+3225465664&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^C&(V^S))+k[11]+643717713&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(D^V))+k[0]+3921069994&4294967295,C=D+(A<<20&4294967295|A>>>12),A=S+(D^V&(C^D))+k[5]+3593408605&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(S^C))+k[10]+38016083&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^C&(V^S))+k[15]+3634488961&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(D^V))+k[4]+3889429448&4294967295,C=D+(A<<20&4294967295|A>>>12),A=S+(D^V&(C^D))+k[9]+568446438&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(S^C))+k[14]+3275163606&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^C&(V^S))+k[3]+4107603335&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(D^V))+k[8]+1163531501&4294967295,C=D+(A<<20&4294967295|A>>>12),A=S+(D^V&(C^D))+k[13]+2850285829&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(S^C))+k[2]+4243563512&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^C&(V^S))+k[7]+1735328473&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(D^V))+k[12]+2368359562&4294967295,C=D+(A<<20&4294967295|A>>>12),A=S+(C^D^V)+k[5]+4294588738&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^D)+k[8]+2272392833&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^C)+k[11]+1839030562&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^S)+k[14]+4259657740&4294967295,C=D+(A<<23&4294967295|A>>>9),A=S+(C^D^V)+k[1]+2763975236&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^D)+k[4]+1272893353&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^C)+k[7]+4139469664&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^S)+k[10]+3200236656&4294967295,C=D+(A<<23&4294967295|A>>>9),A=S+(C^D^V)+k[13]+681279174&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^D)+k[0]+3936430074&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^C)+k[3]+3572445317&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^S)+k[6]+76029189&4294967295,C=D+(A<<23&4294967295|A>>>9),A=S+(C^D^V)+k[9]+3654602809&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^D)+k[12]+3873151461&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^C)+k[15]+530742520&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^S)+k[2]+3299628645&4294967295,C=D+(A<<23&4294967295|A>>>9),A=S+(D^(C|~V))+k[0]+4096336452&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~D))+k[7]+1126891415&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~C))+k[14]+2878612391&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~S))+k[5]+4237533241&4294967295,C=D+(A<<21&4294967295|A>>>11),A=S+(D^(C|~V))+k[12]+1700485571&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~D))+k[3]+2399980690&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~C))+k[10]+4293915773&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~S))+k[1]+2240044497&4294967295,C=D+(A<<21&4294967295|A>>>11),A=S+(D^(C|~V))+k[8]+1873313359&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~D))+k[15]+4264355552&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~C))+k[6]+2734768916&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~S))+k[13]+1309151649&4294967295,C=D+(A<<21&4294967295|A>>>11),A=S+(D^(C|~V))+k[4]+4149444226&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~D))+k[11]+3174756917&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~C))+k[2]+718787259&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~S))+k[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+V&4294967295}s.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var C=S-this.blockSize,k=this.B,D=this.h,V=0;V<S;){if(D==0)for(;V<=C;)o(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<S;)if(k[D++]=x.charCodeAt(V++),D==this.blockSize){o(this,k),D=0;break}}else for(;V<S;)if(k[D++]=x[V++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var C=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=C&255,C/=256;for(this.u(x),x=Array(16),S=C=0;4>S;++S)for(var k=0;32>k;k+=8)x[C++]=this.g[S]>>>k&255;return x};function l(x,S){var C=f;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=S(x)}function h(x,S){this.h=S;for(var C=[],k=!0,D=x.length-1;0<=D;D--){var V=x[D]|0;k&&V==S||(C[D]=V,k=!1)}this.g=C}var f={};function m(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function v(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return j(v(-x));for(var S=[],C=1,k=0;x>=C;k++)S[k]=x/C|0,C*=4294967296;return new h(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return j(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=v(Math.pow(S,8)),k=T,D=0;D<x.length;D+=8){var V=Math.min(8,x.length-D),A=parseInt(x.substring(D,D+V),S);8>V?(V=v(Math.pow(S,V)),k=k.j(V).add(v(A))):(k=k.j(C),k=k.add(v(A)))}return k}var T=m(0),R=m(1),F=m(16777216);r=h.prototype,r.m=function(){if(q(this))return-j(this).m();for(var x=0,S=1,C=0;C<this.g.length;C++){var k=this.i(C);x+=(0<=k?k:4294967296+k)*S,S*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(z(this))return"0";if(q(this))return"-"+j(this).toString(x);for(var S=v(Math.pow(x,6)),C=this,k="";;){var D=Te(C,S).g;C=le(C,D.j(S));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(x);if(C=D,z(C))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function z(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function q(x){return x.h==-1}r.l=function(x){return x=le(this,x),q(x)?-1:z(x)?0:1};function j(x){for(var S=x.g.length,C=[],k=0;k<S;k++)C[k]=~x.g[k];return new h(C,~x.h).add(R)}r.abs=function(){return q(this)?j(this):this},r.add=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0,D=0;D<=S;D++){var V=k+(this.i(D)&65535)+(x.i(D)&65535),A=(V>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);k=A>>>16,V&=65535,A&=65535,C[D]=A<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function le(x,S){return x.add(j(S))}r.j=function(x){if(z(this)||z(x))return T;if(q(this))return q(x)?j(this).j(j(x)):j(j(this).j(x));if(q(x))return j(this.j(j(x)));if(0>this.l(F)&&0>x.l(F))return v(this.m()*x.m());for(var S=this.g.length+x.g.length,C=[],k=0;k<2*S;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<x.g.length;D++){var V=this.i(k)>>>16,A=this.i(k)&65535,tt=x.i(D)>>>16,xt=x.i(D)&65535;C[2*k+2*D]+=A*xt,ce(C,2*k+2*D),C[2*k+2*D+1]+=V*xt,ce(C,2*k+2*D+1),C[2*k+2*D+1]+=A*tt,ce(C,2*k+2*D+1),C[2*k+2*D+2]+=V*tt,ce(C,2*k+2*D+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function ce(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function fe(x,S){this.g=x,this.h=S}function Te(x,S){if(z(S))throw Error("division by zero");if(z(x))return new fe(T,T);if(q(x))return S=Te(j(x),S),new fe(j(S.g),j(S.h));if(q(S))return S=Te(x,j(S)),new fe(j(S.g),S.h);if(30<x.g.length){if(q(x)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,k=S;0>=k.l(x);)C=je(C),k=je(k);var D=Re(C,1),V=Re(k,1);for(k=Re(k,2),C=Re(C,2);!z(k);){var A=V.add(k);0>=A.l(x)&&(D=D.add(C),V=A),k=Re(k,1),C=Re(C,1)}return S=le(x,D.j(S)),new fe(D,S)}for(D=T;0<=x.l(S);){for(C=Math.max(1,Math.floor(x.m()/S.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=v(C),A=V.j(S);q(A)||0<A.l(x);)C-=k,V=v(C),A=V.j(S);z(V)&&(V=R),D=D.add(V),x=le(x,A)}return new fe(D,x)}r.A=function(x){return Te(this,x).h},r.and=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)&x.i(k);return new h(C,this.h&x.h)},r.or=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)|x.i(k);return new h(C,this.h|x.h)},r.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)^x.i(k);return new h(C,this.h^x.h)};function je(x){for(var S=x.g.length+1,C=[],k=0;k<S;k++)C[k]=x.i(k)<<1|x.i(k-1)>>>31;return new h(C,x.h)}function Re(x,S){var C=S>>5;S%=32;for(var k=x.g.length-C,D=[],V=0;V<k;V++)D[V]=0<S?x.i(V+C)>>>S|x.i(V+C+1)<<32-S:x.i(V+C);return new h(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,t_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,ns=h}).apply(typeof ey<"u"?ey:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var n_,Pa,r_,zu,Ud,i_,s_,o_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,L={next:function(){if(!w&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function R(u,p,y){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,R.apply(null,arguments)}function F(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function z(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,L,B){for(var Z=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Z[Fe-2]=arguments[Fe];return p.prototype[L].apply(w,Z)}}function q(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function j(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(m(w)){const L=u.length||0,B=w.length||0;u.length=L+B;for(let Z=0;Z<B;Z++)u[L+Z]=w[Z]}else u.push(w)}}class le{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ce(u){return/^[\s\xa0]*$/.test(u)}function fe(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function Te(u){return Te[" "](u),u}Te[" "]=function(){};var je=fe().indexOf("Gecko")!=-1&&!(fe().toLowerCase().indexOf("webkit")!=-1&&fe().indexOf("Edge")==-1)&&!(fe().indexOf("Trident")!=-1||fe().indexOf("MSIE")!=-1)&&fe().indexOf("Edge")==-1;function Re(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function x(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function S(u){const p={};for(const y in u)p[y]=u[y];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let B=0;B<C.length;B++)y=C[B],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function A(){var u=pe;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,y){const w=xt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var xt=new le(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ee=!1,pe=new tt,ne=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(O)}};var O=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){V(y)}var p=xt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u}();function Se(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(je){e:{try{Te(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}z(Se,he);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function $e(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++be,this.da=this.fa=!1}function yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function rr(u){this.src=u,this.g={},this.h=0}rr.prototype.add=function(u,p,y,w,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=Or(u,p,w,L);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new $e(p,this.src,B,!!w,L),p.fa=y,u.push(p)),p};function ms(u,p){var y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(w,L,1),B&&(yt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Or(u,p,y,w){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==w)return L}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),gs={};function No(u,p,y,w,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)No(u,p[B],y,w,L);return null}return y=Oo(y),u&&u[Me]?u.K(p,y,v(w)?!!w.capture:!1,L):xo(u,p,y,!1,w,L)}function xo(u,p,y,w,L,B){if(!p)throw Error("Invalid event type");var Z=v(L)?!!L.capture:!!L,Fe=vs(u);if(Fe||(u[Si]=Fe=new rr(u)),y=Fe.add(p,y,w,Z,B),y.proxy)return y;if(w=pl(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ie||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(sr(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function pl(){function u(y){return p.call(u.src,u.listener,y)}const p=Do;return u}function ys(u,p,y,w,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)ys(u,p[B],y,w,L);else w=v(w)?!!w.capture:!!w,y=Oo(y),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Or(B,y,w,L),-1<y&&(yt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=vs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Or(p,y,w,L)),(y=-1<u?p[u]:null)&&ir(y))}function ir(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])ms(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(sr(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=vs(p))?(ms(y,u),y.h==0&&(y.src=null,p[Si]=null)):yt(u)}}}function sr(u){return u in gs?gs[u]:gs[u]="on"+u}function Do(u,p){if(u.da)u=!0;else{p=new Se(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&ir(u),u=y.call(w,p)}return u}function vs(u){return u=u[Si],u instanceof rr?u:null}var _s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oo(u){return typeof u=="function"?u:(u[_s]||(u[_s]=function(p){return u.handleEvent(p)}),u[_s])}function ct(){$.call(this),this.i=new rr(this),this.M=this,this.F=null}z(ct,$),ct.prototype[Me]=!0,ct.prototype.removeEventListener=function(u,p,y,w){ys(this,u,p,y,w)};function ht(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var L=p;p=new he(w,u),k(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var Z=p.g=y[B];L=or(Z,w,!0,p)&&L}if(Z=p.g=u,L=or(Z,w,!0,p)&&L,L=or(Z,w,!1,p)&&L,y)for(B=0;B<y.length;B++)Z=p.g=y[B],L=or(Z,w,!1,p)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)yt(y[w]);delete u.g[p],u.h--}}this.F=null},ct.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ct.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function or(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var Z=p[B];if(Z&&!Z.da&&Z.capture==y){var Fe=Z.listener,dt=Z.ha||Z.src;Z.fa&&ms(u.i,Z),L=Fe.call(dt,w)!==!1&&L}}return L&&!w.defaultPrevented}function Vo(u,p,y){if(typeof u=="function")y&&(u=R(u,y));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Vr(u){u.g=Vo(()=>{u.g=null,u.i&&(u.i=!1,Vr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ai extends ${constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(u){$.call(this),this.h=u,this.g={}}z(Ri,$);var Lo=[];function Mo(u){Re(u.g,function(p,y){this.g.hasOwnProperty(y)&&ir(p)},u),u.g={}}Ri.prototype.N=function(){Ri.aa.N.call(this),Mo(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bo=f.JSON.stringify,Fo=f.JSON.parse,Uo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ci(){}Ci.prototype.h=null;function Es(u){return u.h||(u.h=u.i())}function ws(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){he.call(this,"d")}z(jn,he);function Ts(){he.call(this,"c")}z(Ts,he);var Bn={},jo=null;function Pi(){return jo=jo||new ct}Bn.La="serverreachability";function Bo(u){he.call(this,Bn.La,u)}z(Bo,he);function ar(u){const p=Pi();ht(p,new Bo(p))}Bn.STAT_EVENT="statevent";function zo(u,p){he.call(this,Bn.STAT_EVENT,u),this.stat=p}z(zo,he);function nt(u){const p=Pi();ht(p,new zo(p,u))}Bn.Ma="timingevent";function Is(u,p){he.call(this,Bn.Ma,u),this.size=p}z(Is,he);function Tn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function ki(){this.g=!0}ki.prototype.xa=function(){this.g=!1};function Ni(u,p,y,w,L,B){u.info(function(){if(u.g)if(B)for(var Z="",Fe=B.split("&"),dt=0;dt<Fe.length;dt++){var xe=Fe[dt].split("=");if(1<xe.length){var vt=xe[0];xe=xe[1];var st=vt.split("_");Z=2<=st.length&&st[1]=="type"?Z+(vt+"="+xe+"&"):Z+(vt+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function Ss(u,p,y,w,L,B,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+Z})}function In(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Mc(u,y)+(w?" "+w:"")})}function $o(u,p){u.info(function(){return"TIMEOUT: "+p})}ki.prototype.info=function(){};function Mc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return bo(y)}catch{return p}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ml={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function xi(){}z(xi,Ci),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},Sn=new xi;function An(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new Ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gl}function gl(){this.i=null,this.g="",this.h=!1}var Wo={},Rs={};function Cs(u,p,y){u.L=1,u.v=Ur(rn(p)),u.m=y,u.P=!0,qo(u,null)}function qo(u,p){u.F=Date.now(),We(u),u.A=rn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Br(y.i,"t",w),u.C=0,y=u.j.J,u.h=new gl,u.g=Vl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Ai(R(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Lo[0]=L.toString()),L=Lo);for(var B=0;B<L.length;B++){var Z=No(y,L[B],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),ar(),Ni(u.i,u.u,u.A,u.l,u.R,u.m)}An.prototype.ca=function(u){u=u.target;const p=this.M;p&&Gt(u)==3?p.j():this.Y(u)},An.prototype.Y=function(u){try{if(u==this.g)e:{const st=Gt(this.g);var p=this.g.Ba();const mn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Xo(this.g)))){this.J||st!=4||p==7||(p==8||0>=mn?ar(3):ar(2)),Di(this);var y=this.g.Z();this.X=y;t:if(yl(this)){var w=Xo(this.g);u="";var L=w.length,B=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Lr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(B&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,Ss(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,dt=this.g;if((Fe=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Fe)){var xe=Fe;break t}}xe=null}if(y=xe)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,y);else{this.o=!1,this.s=3,nt(12),fn(this),Lr(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<Z.length;)if(on=bc(this,Z),on==Rs){st==4&&(this.s=4,nt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Wo){this.s=4,nt(15),In(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,on,null),Ho(this,on);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||Z.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,Z,"[Invalid Chunked Response]"),fn(this),Lr(this);else if(0<Z.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Zo(vt),vt.M=!0,nt(11))}}else In(this.i,this.l,Z,null),Ho(this,Z);st==4&&fn(this),this.o&&!this.J&&(st==4?Fs(this.j,this):(this.o=!1,We(this)))}else Os(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),fn(this),Lr(this)}}}catch{}finally{}};function yl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function bc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Rs:(y=Number(p.substring(y,w)),isNaN(y)?Wo:(w+=1,w+y>p.length?Rs:(p=p.slice(w,w+y),u.C=w+y,p)))}An.prototype.cancel=function(){this.J=!0,fn(this)};function We(u){u.S=Date.now()+u.I,vl(u,u.I)}function vl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Tn(R(u.ba,u),p)}function Di(u){u.B&&(f.clearTimeout(u.B),u.B=null)}An.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?($o(this.i,this.A),this.L!=2&&(ar(),nt(17)),fn(this),this.s=2,Lr(this)):vl(this,this.S-u)};function Lr(u){u.j.G==0||u.J||Fs(u.j,u)}function fn(u){Di(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Mo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Ho(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||zt(y.h,u))){if(!u.K&&zt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)bs(y),Nn(y);else break e;Ms(y),nt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(R(y.Za,y),6e3));if(1>=El(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else dr(y,11)}else if((u.K||y.g==u)&&bs(y),!ce(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let xe=L[p];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const vt=xe[3];vt!=null&&(y.la=vt,y.j.info("VER="+y.la));const st=xe[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const mn=xe[5];mn!=null&&typeof mn=="number"&&0<mn&&(w=1.5*mn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const on=u.g;if(on){const Ui=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var B=w.h;B.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Ko(B,B.h),B.h=null))}if(w.D){const js=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(w.ya=js,ze(w.I,w.D,js))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=u;if(w.qa=Ol(w,w.J?w.ia:null,w.W),Z.K){wl(w.h,Z);var Fe=Z,dt=w.L;dt&&(Fe.I=dt),Fe.B&&(Di(Fe),We(Fe)),w.g=Z}else Fi(w);0<y.i.length&&qn(y)}else xe[0]!="stop"&&xe[0]!="close"||dr(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?dr(y,7):St(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}ar(4)}catch{}}var _l=class{constructor(u,p){this.g=u,this.map=p}};function Oi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function El(u){return u.h?1:u.g?u.g.size:0}function zt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Ko(u,p){u.g?u.g.add(p):u.h=p}function wl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Oi.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Tl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return q(u.i)}function Ps(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function ks(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Mr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=ks(u),w=Ps(u),L=w.length,B=0;B<L;B++)p.call(void 0,w[B],y&&y[B],u)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),L=null;if(0<=w){var B=u[y].substring(0,w);L=u[y].substring(w+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function lr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof lr){this.h=u.h,Li(this,u.j),this.o=u.o,this.g=u.g,br(this,u.s),this.l=u.l;var p=u.i,y=new zn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Fr(this,y),this.m=u.m}else u&&(p=String(u).match(Vi))?(this.h=!1,Li(this,p[1]||"",!0),this.o=Pe(p[2]||""),this.g=Pe(p[3]||"",!0),br(this,p[4]),this.l=Pe(p[5]||"",!0),Fr(this,p[6]||"",!0),this.m=Pe(p[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}lr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(jr(p,Ns,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(jr(p,Ns,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(jr(y,y.charAt(0)=="/"?Al:Sl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",jr(y,Go)),u.join("")};function rn(u){return new lr(u)}function Li(u,p,y){u.j=y?Pe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function br(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Fr(u,p,y){p instanceof zn?(u.i=p,$n(u.i,u.h)):(y||(p=jr(p,Rl)),u.i=new zn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function Ur(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function jr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Il),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Il(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ns=/[#\/\?@]/g,Sl=/[#\?:]/g,Al=/[#\?]/g,Rl=/[#\?@]/g,Go=/#/g;function zn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function It(u){u.g||(u.g=new Map,u.h=0,u.i&&Fc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=zn.prototype,r.add=function(u,p){It(this),this.i=null,u=pn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Rn(u,p){It(u),p=pn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Cn(u,p){return It(u),p=pn(u,p),u.g.has(p)}r.forEach=function(u,p){It(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)},r.na=function(){It(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=u[w];for(let B=0;B<L.length;B++)y.push(p[w])}return y},r.V=function(u){It(this);let p=[];if(typeof u=="string")Cn(this,u)&&(p=p.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return It(this),this.i=null,u=pn(this,u),Cn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Br(u,p,y){Rn(u,p),0<y.length&&(u.i=null,u.g.set(pn(u,p),q(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const B=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var L=B;Z[w]!==""&&(L+="="+encodeURIComponent(String(Z[w]))),u.push(L)}}return this.i=u.join("&")};function pn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function $n(u,p){p&&!u.j&&(It(u),u.i=null,u.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(Rn(this,w),Br(this,L,y))},u)),u.j=p}function Uc(u,p){const y=new ki;if(f.Image){const w=new Image;w.onload=F(Kt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=F(Kt,y,"TestLoadImage: error",!1,p,w),w.onabort=F(Kt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=F(Kt,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Cl(u,p){const y=new ki,w=new AbortController,L=setTimeout(()=>{w.abort(),Kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(L),B.ok?Kt(y,"TestPingServer: ok",!0,p):Kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Kt(y,"TestPingServer: error",!1,p)})}function Kt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function jc(){this.g=new Uo}function Pl(u,p,y){const w=y||"";try{Mr(u,function(L,B){let Z=L;v(L)&&(Z=bo(L)),p.push(w+B+"="+encodeURIComponent(Z))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function ur(u){this.l=u.Ub||null,this.j=u.eb||!1}z(ur,Ci),ur.prototype.g=function(){return new Mi(this.l,this.j)},ur.prototype.i=function(u){return function(){return u}}({});function Mi(u,p){ct.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Mi,ct),r=Mi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,kn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Pn(this):kn(this),this.readyState==3&&kl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Pn(this))},r.Qa=function(u){this.g&&(this.response=u,Pn(this))},r.ga=function(){this.g&&Pn(this)};function Pn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,kn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function kn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function cr(u){let p="";return Re(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function zr(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=cr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Qe(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Qe,ct);var Bc=/^https?$/i,Qo=["POST","PUT"];r=Qe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?Es(this.o):Es(Sn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){bi(this,B);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())y.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Qo,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ds(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){bi(this,B)}};function bi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,xs(u),sn(u)}function xs(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),sn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},r.bb=function(){Yo(this)};function Yo(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Vo(u.Ea,0,u);else if(ht(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=Z===0){var L=String(u.D).match(Vi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!Bc.test(L?L.toLowerCase():"")}y=w}if(y)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var B=2<Gt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",xs(u)}}finally{sn(u)}}}}function sn(u,p){if(u.g){Ds(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ht(u,"ready");try{y.onreadystatechange=w}catch{}}}function Ds(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Fo(p)}};function Xo(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Os(u){const p={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ce(u[w]))continue;var y=D(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}x(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Jo(u){this.Aa=0,this.i=[],this.j=new ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,u),this.cb=Wn("retryDelaySeedMs",1e4,u),this.Wa=Wn("forwardChannelMaxRetries",2,u),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(u&&u.concurrentRequestLimit),this.Da=new jc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Jo.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){nt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Ol(this,null,this.W),qn(this)};function St(u){if(Vs(u),u.G==3){var p=u.U++,y=rn(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),hr(u,y),p=new An(u,u.j,p),p.L=2,p.v=Ur(rn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Vl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}Dl(u)}function Nn(u){u.g&&(Zo(u),u.g.cancel(),u.g=null)}function Vs(u){Nn(u),u.u&&(f.clearTimeout(u.u),u.u=null),bs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function qn(u){if(!nn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||ne(),ee||(Be(),ee=!0),pe.add(p,u),u.B=0}}function zc(u,p){return El(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Tn(R(u.Ga,u,p),xl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new An(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=$r(this,L,p),y=rn(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),hr(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(cr(B)))+"&"+p:this.m&&zr(y,this.m,B)),Ko(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,Cs(L,y,null)):Cs(L,y,p),this.G=2}}else this.G==3&&(u?Ls(this,u):this.i.length==0||nn(this.h)||Ls(this))};function Ls(u,p){var y;p?y=p.l:y=u.U++;const w=rn(u.I);ze(w,"SID",u.K),ze(w,"RID",y),ze(w,"AID",u.T),hr(u,w),u.m&&u.o&&zr(w,u.m,u.o),y=new An(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=$r(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ko(u.h,y),Cs(y,w,p)}function hr(u,p){u.H&&Re(u.H,function(y,w){ze(p,w,y)}),u.l&&Mr({},function(y,w){ze(p,w,y)})}function $r(u,p,y){y=Math.min(u.i.length,y);var w=u.l?R(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const Z=["count="+y];B==-1?0<y?(B=L[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let Fe=!0;for(let dt=0;dt<y;dt++){let xe=L[dt].g;const vt=L[dt].map;if(xe-=B,0>xe)B=Math.max(0,L[dt].g-100),Fe=!1;else try{Pl(vt,Z,"req"+xe+"_")}catch{w&&w(vt)}}if(Fe){w=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function Fi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||ne(),ee||(Be(),ee=!0),pe.add(p,u),u.v=0}}function Ms(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Tn(R(u.Fa,u),xl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Tn(R(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Nn(this),Nl(this))};function Zo(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Nl(u){u.g=new An(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=rn(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),hr(u,p),u.m&&u.o&&zr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Ur(rn(p)),y.m=null,y.P=!0,qo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Nn(this),Ms(this),nt(19))};function bs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Fs(u,p){var y=null;if(u.g==p){bs(u),Zo(u),u.g=null;var w=2}else if(zt(u.h,p))y=p.D,wl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=Pi(),ht(w,new Is(w,y)),qn(u)}else Fi(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&zc(u,p)||w==2&&Ms(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:dr(u,5);break;case 4:dr(u,10);break;case 3:dr(u,6);break;default:dr(u,2)}}}function xl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function dr(u,p){if(u.j.info("Error code "+p),p==2){var y=R(u.fb,u),w=u.Xa;const L=!w;w=new lr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Li(w,"https"),Ur(w),L?Uc(w.toString(),y):Cl(w.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(p),Dl(u),Vs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Dl(u){if(u.G=0,u.ka=[],u.l){const p=Tl(u.h);(p.length!=0||u.i.length!=0)&&(j(u.ka,p),j(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function Ol(u,p,y){var w=y instanceof lr?rn(y):new lr(y);if(w.g!="")p&&(w.g=p+"."+w.g),br(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new lr(null);w&&Li(B,w),p&&(B.g=p),L&&br(B,L),y&&(B.l=y),w=B}return y=u.D,p=u.ya,y&&p&&ze(w,y,p),ze(w,"VER",u.la),hr(u,w),w}function Vl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Qe(new ur({eb:y})):new Qe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ea(){}r=ea.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Us(){}Us.prototype.g=function(u,p){return new $t(u,p)};function $t(u,p){ct.call(this),this.g=new Jo(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ce(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ce(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Hn(this)}z($t,ct),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){St(this.g)},$t.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=bo(u),u=y);p.i.push(new _l(p.Ya++,u)),p.G==3&&qn(p)},$t.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,$t.aa.N.call(this)};function Ll(u){jn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}z(Ll,jn);function Ml(){Ts.call(this),this.status=1}z(Ml,Ts);function Hn(u){this.g=u}z(Hn,ea),Hn.prototype.ua=function(){ht(this.g,"a")},Hn.prototype.ta=function(u){ht(this.g,new Ll(u))},Hn.prototype.sa=function(u){ht(this.g,new Ml)},Hn.prototype.ra=function(){ht(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,o_=function(){return new Us},s_=function(){return Pi()},i_=Bn,Ud={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,zu=As,ml.COMPLETE="complete",r_=ml,ws.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Pa=ws,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,n_=Qe}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});const ty="@firebase/firestore";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Co="10.14.0";/**
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
 */const os=new sf("@firebase/firestore");function Aa(){return os.logLevel}function ae(r,...e){if(os.logLevel<=ke.DEBUG){const t=e.map(yf);os.debug(`Firestore (${Co}): ${r}`,...t)}}function Nr(r,...e){if(os.logLevel<=ke.ERROR){const t=e.map(yf);os.error(`Firestore (${Co}): ${r}`,...t)}}function yo(r,...e){if(os.logLevel<=ke.WARN){const t=e.map(yf);os.warn(`Firestore (${Co}): ${r}`,...t)}}function yf(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function _e(r="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+r;throw Nr(e),new Error(e)}function Ue(r,e){r||_e()}function we(r,e){return r}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class a_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class _R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ER{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Rr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},f=m=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Rr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new a_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class wR{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TR{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new wR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new IR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class l_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=AR(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function Le(r,e){return r<e?-1:r>e?1:0}function vo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */class mt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new mt(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new mt(0,0))}static max(){return new Ee(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wa{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(),s===void 0?s=e.length-t:s>e.length-t&&_e(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Wa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends Wa{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const RR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Wa{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return RR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ie(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ie(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ge.fromString(e))}static fromName(e){return new de(Ge.fromString(e).popFirst(5))}static empty(){return new de(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ge(e.slice()))}}function CR(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new mt(t+1,0):new mt(t,s));return new gi(o,de.empty(),e)}function PR(r){return new gi(r.readTime,r.key,-1)}class gi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new gi(Ee.min(),de.empty(),-1)}static max(){return new gi(Ee.max(),de.empty(),-1)}}function kR(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:Le(r.largestBatchId,e.largestBatchId))}/**
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
 */const NR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ol(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==NR)throw r;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,s)=>{t(e)})}static reject(e){return new Q((t,s)=>{s(e)})}static waitFor(e){return new Q((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},m=>s(m))}),h=!0,l===o&&t()})}static or(e){let t=Q.resolve(!1);for(const s of e)t=t.next(o=>o?Q.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new Q((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let m=0;m<l;m++){const v=m;t(e[v]).next(E=>{h[v]=E,++f,f===l&&s(h)},E=>o(E))}})}static doWhile(e,t){return new Q((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function DR(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function al(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class vf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vf.oe=-1;function _c(r){return r==null}function nc(r){return r===0&&1/r==-1/0}function OR(r){return typeof r=="number"&&Number.isInteger(r)&&!nc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function ny(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ds(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function u_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ou(this.root,e,this.comparator,!0)}}class Ou{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ry(this.data.getIterator())}getIteratorFrom(e){return new ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class cn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new kt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class c_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new c_("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const VR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(r){if(Ue(!!r),typeof r=="string"){let e=0;const t=VR.exec(r);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function as(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
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
 */function _f(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ef(r){const e=r.mapValue.fields.__previous_value__;return _f(e)?Ef(e):e}function qa(r){const e=yi(r.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class LR{constructor(e,t,s,o,l,h,f,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=v}}class Ha{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vu={mapValue:{}};function ls(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?_f(r)?4:bR(r)?9007199254740991:MR(r)?10:11:_e()}function nr(r,e){if(r===e)return!0;const t=ls(r);if(t!==ls(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return qa(r).isEqual(qa(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=yi(o.timestampValue),f=yi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return as(o.bytesValue).isEqual(as(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),f=it(l.doubleValue);return h===f?nc(h)===nc(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return vo(r.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(ny(h)!==ny(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!nr(h[m],f[m])))return!1;return!0}(r,e);default:return _e()}}function Ka(r,e){return(r.values||[]).find(t=>nr(t,e))!==void 0}function _o(r,e){if(r===e)return 0;const t=ls(r),s=ls(e);if(t!==s)return Le(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=it(l.integerValue||l.doubleValue),m=it(h.integerValue||h.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(r,e);case 3:return iy(r.timestampValue,e.timestampValue);case 4:return iy(qa(r),qa(e));case 5:return Le(r.stringValue,e.stringValue);case 6:return function(l,h){const f=as(l),m=as(h);return f.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),m=h.split("/");for(let v=0;v<f.length&&v<m.length;v++){const E=Le(f[v],m[v]);if(E!==0)return E}return Le(f.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Le(it(l.latitude),it(h.latitude));return f!==0?f:Le(it(l.longitude),it(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return sy(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,m,v,E;const T=l.fields||{},R=h.fields||{},F=(f=T.value)===null||f===void 0?void 0:f.arrayValue,z=(m=R.value)===null||m===void 0?void 0:m.arrayValue,q=Le(((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0,((E=z==null?void 0:z.values)===null||E===void 0?void 0:E.length)||0);return q!==0?q:sy(F,z)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Vu.mapValue&&h===Vu.mapValue)return 0;if(l===Vu.mapValue)return 1;if(h===Vu.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),v=h.fields||{},E=Object.keys(v);m.sort(),E.sort();for(let T=0;T<m.length&&T<E.length;++T){const R=Le(m[T],E[T]);if(R!==0)return R;const F=_o(f[m[T]],v[E[T]]);if(F!==0)return F}return Le(m.length,E.length)}(r.mapValue,e.mapValue);default:throw _e()}}function iy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Le(r,e);const t=yi(r),s=yi(e),o=Le(t.seconds,s.seconds);return o!==0?o:Le(t.nanos,s.nanos)}function sy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=_o(t[o],s[o]);if(l)return l}return Le(t.length,s.length)}function Eo(r){return jd(r)}function jd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=yi(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return as(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return de.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=jd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${jd(t.fields[h])}`;return o+"}"}(r.mapValue):_e()}function oy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Bd(r){return!!r&&"integerValue"in r}function wf(r){return!!r&&"arrayValue"in r}function ay(r){return!!r&&"nullValue"in r}function ly(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $u(r){return!!r&&"mapValue"in r}function MR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Va(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ds(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Va(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Va(r.arrayValue.values[t]);return e}return Object.assign({},r)}function bR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!$u(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Va(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());$u(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];$u(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ds(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new tn(Va(this.value))}}function h_(r){const e=[];return ds(r.fields,(t,s)=>{const o=new Pt([t]);if($u(s)){const l=h_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new cn(e)}/**
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
 */class Ut{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,Ee.min(),Ee.min(),Ee.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ee.min(),Ee.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ee.min(),Ee.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rc{constructor(e,t){this.position=e,this.inclusive=t}}function uy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=_o(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function cy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!nr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ic{constructor(e,t="asc"){this.field=e,this.dir=t}}function FR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class d_{}class lt extends d_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new jR(e,t,s):t==="array-contains"?new $R(e,s):t==="in"?new WR(e,s):t==="not-in"?new qR(e,s):t==="array-contains-any"?new HR(e,s):new lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new BR(e,s):new zR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_o(t,this.value)):t!==null&&ls(this.value)===ls(t)&&this.matchesComparison(_o(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends d_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Un(e,t)}matches(e){return f_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function f_(r){return r.op==="and"}function p_(r){return UR(r)&&f_(r)}function UR(r){for(const e of r.filters)if(e instanceof Un)return!1;return!0}function zd(r){if(r instanceof lt)return r.field.canonicalString()+r.op.toString()+Eo(r.value);if(p_(r))return r.filters.map(e=>zd(e)).join(",");{const e=r.filters.map(t=>zd(t)).join(",");return`${r.op}(${e})`}}function m_(r,e){return r instanceof lt?function(s,o){return o instanceof lt&&s.op===o.op&&s.field.isEqual(o.field)&&nr(s.value,o.value)}(r,e):r instanceof Un?function(s,o){return o instanceof Un&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&m_(h,o.filters[f]),!0):!1}(r,e):void _e()}function g_(r){return r instanceof lt?function(t){return`${t.field.canonicalString()} ${t.op} ${Eo(t.value)}`}(r):r instanceof Un?function(t){return t.op.toString()+" {"+t.getFilters().map(g_).join(" ,")+"}"}(r):"Filter"}class jR extends lt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class BR extends lt{constructor(e,t){super(e,"in",t),this.keys=y_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zR extends lt{constructor(e,t){super(e,"not-in",t),this.keys=y_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function y_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class $R extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wf(t)&&Ka(t.arrayValue,this.value)}}class WR extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class qR extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ka(this.value.arrayValue,t)}}class HR extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ka(this.value.arrayValue,s))}}/**
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
 */class KR{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function hy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new KR(r,e,t,s,o,l,h)}function Tf(r){const e=we(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>zd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),_c(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Eo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Eo(s)).join(",")),e.ue=t}return e.ue}function If(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!FR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!m_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!cy(r.startAt,e.startAt)&&cy(r.endAt,e.endAt)}function $d(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class ll{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=m,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GR(r,e,t,s,o,l,h,f){return new ll(r,e,t,s,o,l,h,f)}function Ec(r){return new ll(r)}function dy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function v_(r){return r.collectionGroup!==null}function La(r){const e=we(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new kt(Pt.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(v=>{v.isInequality()&&(f=f.add(v.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new ic(l,s))}),t.has(Pt.keyField().canonicalString())||e.ce.push(new ic(Pt.keyField(),s))}return e.ce}function er(r){const e=we(r);return e.le||(e.le=QR(e,La(r))),e.le}function QR(r,e){if(r.limitType==="F")return hy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new ic(o.field,l)});const t=r.endAt?new rc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new rc(r.startAt.position,r.startAt.inclusive):null;return hy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Wd(r,e){const t=r.filters.concat([e]);return new ll(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function qd(r,e,t){return new ll(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function wc(r,e){return If(er(r),er(e))&&r.limitType===e.limitType}function __(r){return`${Tf(er(r))}|lt:${r.limitType}`}function ao(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>g_(o)).join(", ")}]`),_c(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Eo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Eo(o)).join(",")),`Target(${s})`}(er(r))}; limitType=${r.limitType})`}function Tc(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of La(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,m){const v=uy(h,f,m);return h.inclusive?v<=0:v<0}(s.startAt,La(s),o)||s.endAt&&!function(h,f,m){const v=uy(h,f,m);return h.inclusive?v>=0:v>0}(s.endAt,La(s),o))}(r,e)}function YR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function E_(r){return(e,t)=>{let s=!1;for(const o of La(r)){const l=XR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function XR(r,e,t){const s=r.field.isKeyField()?de.comparator(e.key,t.key):function(l,h,f){const m=h.data.field(l),v=f.data.field(l);return m!==null&&v!==null?_o(m,v):_e()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e()}}/**
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
 */class Po{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return u_(this.inner)}size(){return this.innerSize}}/**
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
 */const JR=new Ze(de.comparator);function xr(){return JR}const w_=new Ze(de.comparator);function ka(...r){let e=w_;for(const t of r)e=e.insert(t.key,t);return e}function T_(r){let e=w_;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function es(){return Ma()}function I_(){return Ma()}function Ma(){return new Po(r=>r.toString(),(r,e)=>r.isEqual(e))}const ZR=new Ze(de.comparator),eC=new kt(de.comparator);function Ce(...r){let e=eC;for(const t of r)e=e.add(t);return e}const tC=new kt(Le);function nC(){return tC}/**
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
 */function Sf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function S_(r){return{integerValue:""+r}}function rC(r,e){return OR(e)?S_(e):Sf(r,e)}/**
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
 */class Ic{constructor(){this._=void 0}}function iC(r,e,t){return r instanceof sc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&_f(l)&&(l=Ef(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof Ga?R_(r,e):r instanceof Qa?C_(r,e):function(o,l){const h=A_(o,l),f=fy(h)+fy(o.Pe);return Bd(h)&&Bd(o.Pe)?S_(f):Sf(o.serializer,f)}(r,e)}function sC(r,e,t){return r instanceof Ga?R_(r,e):r instanceof Qa?C_(r,e):t}function A_(r,e){return r instanceof oc?function(s){return Bd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class sc extends Ic{}class Ga extends Ic{constructor(e){super(),this.elements=e}}function R_(r,e){const t=P_(e);for(const s of r.elements)t.some(o=>nr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Qa extends Ic{constructor(e){super(),this.elements=e}}function C_(r,e){let t=P_(e);for(const s of r.elements)t=t.filter(o=>!nr(o,s));return{arrayValue:{values:t}}}class oc extends Ic{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function fy(r){return it(r.integerValue||r.doubleValue)}function P_(r){return wf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function oC(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Ga&&o instanceof Ga||s instanceof Qa&&o instanceof Qa?vo(s.elements,o.elements,nr):s instanceof oc&&o instanceof oc?nr(s.Pe,o.Pe):s instanceof sc&&o instanceof sc}(r.transform,e.transform)}class aC{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Sc{}function k_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new x_(r.key,bn.none()):new ul(r.key,r.data,bn.none());{const t=r.data,s=tn.empty();let o=new kt(Pt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Ii(r.key,s,new cn(o.toArray()),bn.none())}}function lC(r,e,t){r instanceof ul?function(o,l,h){const f=o.value.clone(),m=my(o.fieldTransforms,l,h.transformResults);f.setAll(m),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof Ii?function(o,l,h){if(!Wu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=my(o.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(N_(o)),m.setAll(f),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ba(r,e,t,s){return r instanceof ul?function(l,h,f,m){if(!Wu(l.precondition,h))return f;const v=l.value.clone(),E=gy(l.fieldTransforms,m,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(r,e,t,s):r instanceof Ii?function(l,h,f,m){if(!Wu(l.precondition,h))return f;const v=gy(l.fieldTransforms,m,h),E=h.data;return E.setAll(N_(l)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(l,h,f){return Wu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function uC(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=A_(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function py(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&vo(s,o,(l,h)=>oC(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ul extends Sc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ii extends Sc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function N_(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function my(r,e,t){const s=new Map;Ue(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,sC(h,f,t[o]))}return s}function gy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,iC(l,h,e))}return s}class x_ extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cC extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hC{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&lC(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=I_();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const m=k_(h,f);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(t,s)=>py(t,s))&&vo(this.baseMutations,e.baseMutations,(t,s)=>py(t,s))}}class Af{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length);let o=function(){return ZR}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Af(e,t,s,o)}}/**
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
 */class dC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var at,De;function pC(r){switch(r){default:return _e();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function D_(r){if(r===void 0)return Nr("GRPC error has no .code"),W.UNKNOWN;switch(r){case at.OK:return W.OK;case at.CANCELLED:return W.CANCELLED;case at.UNKNOWN:return W.UNKNOWN;case at.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case at.INTERNAL:return W.INTERNAL;case at.UNAVAILABLE:return W.UNAVAILABLE;case at.UNAUTHENTICATED:return W.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case at.NOT_FOUND:return W.NOT_FOUND;case at.ALREADY_EXISTS:return W.ALREADY_EXISTS;case at.PERMISSION_DENIED:return W.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case at.ABORTED:return W.ABORTED;case at.OUT_OF_RANGE:return W.OUT_OF_RANGE;case at.UNIMPLEMENTED:return W.UNIMPLEMENTED;case at.DATA_LOSS:return W.DATA_LOSS;default:return _e()}}(De=at||(at={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mC(){return new TextEncoder}/**
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
 */const gC=new ns([4294967295,4294967295],0);function yy(r){const e=mC().encode(r),t=new t_;return t.update(e),new Uint8Array(t.digest())}function vy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ns([t,s],0),new ns([o,l],0)]}class Rf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(s<0)throw new Na(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ns.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(ns.fromNumber(s)));return o.compare(gC)===1&&(o=new ns([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=yy(e),[s,o]=vy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Rf(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Ie===0)return;const t=yy(e),[s,o]=vy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ac{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ac(Ee.min(),o,new Ze(Le),xr(),Ce())}}class cl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new cl(s,t,Ce(),Ce(),Ce())}}/**
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
 */class qu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class O_{constructor(e,t){this.targetId=e,this.me=t}}class V_{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class _y{constructor(){this.fe=0,this.ge=wy(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e()}}),new cl(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=wy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yC{constructor(e){this.Le=e,this.Be=new Map,this.ke=xr(),this.qe=Ey(),this.Qe=new Ze(Le)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const l=o.target;if($d(l))if(s===0){const h=new de(l.path);this.Ue(t,h,Ut.newNoDocument(h,Ee.min()))}else Ue(s===1);else{const h=this.Ye(t);if(h!==s){const f=this.Ze(e),m=f?this.Xe(f,e,h):1;if(m!==0){this.je(t);const v=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=as(s).toUint8Array()}catch(m){if(m instanceof c_)return yo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new Rf(h,o,l)}catch(m){return yo(m instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.Ie===0?null:f}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.Le.tt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Je(h);if(f){if(l.current&&$d(f.target)){const m=new de(f.target.path);this.ke.get(m)!==null||this.it(h,m)||this.Ue(h,m,Ut.newNoDocument(m,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let s=Ce();this.qe.forEach((l,h)=>{let f=!0;h.forEachWhile(m=>{const v=this.Je(m);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Ac(e,t,this.Qe,this.ke,s);return this.ke=xr(),this.qe=Ey(),this.Qe=new Ze(Le),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new _y,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new kt(Le),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _y),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ey(){return new Ze(de.comparator)}function wy(){return new Ze(de.comparator)}const vC={asc:"ASCENDING",desc:"DESCENDING"},_C={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EC={and:"AND",or:"OR"};class wC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hd(r,e){return r.useProto3Json||_c(e)?e:{value:e}}function ac(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function TC(r,e){return ac(r,e.toTimestamp())}function tr(r){return Ue(!!r),Ee.fromTimestamp(function(t){const s=yi(t);return new mt(s.seconds,s.nanos)}(r))}function Cf(r,e){return Kd(r,e).canonicalString()}function Kd(r,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function M_(r){const e=Ge.fromString(r);return Ue(B_(e)),e}function Gd(r,e){return Cf(r.databaseId,e.path)}function wd(r,e){const t=M_(e);if(t.get(1)!==r.databaseId.projectId)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(F_(t))}function b_(r,e){return Cf(r.databaseId,e)}function IC(r){const e=M_(r);return e.length===4?Ge.emptyPath():F_(e)}function Qd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function F_(r){return Ue(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ty(r,e,t){return{name:Gd(r,e),fields:t.value.mapValue.fields}}function SC(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(v,E){return v.useProto3Json?(Ue(E===void 0||typeof E=="string"),Nt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Nt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(v){const E=v.code===void 0?W.UNKNOWN:D_(v.code);return new ie(E,v.message||"")}(h);t=new V_(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=wd(r,s.document.name),l=tr(s.document.updateTime),h=s.document.createTime?tr(s.document.createTime):Ee.min(),f=new tn({mapValue:{fields:s.document.fields}}),m=Ut.newFoundDocument(o,l,h,f),v=s.targetIds||[],E=s.removedTargetIds||[];t=new qu(v,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=wd(r,s.document),l=s.readTime?tr(s.readTime):Ee.min(),h=Ut.newNoDocument(o,l),f=s.removedTargetIds||[];t=new qu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=wd(r,s.document),l=s.removedTargetIds||[];t=new qu([],l,o,null)}else{if(!("filter"in e))return _e();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new fC(o,l),f=s.targetId;t=new O_(f,h)}}return t}function AC(r,e){let t;if(e instanceof ul)t={update:Ty(r,e.key,e.value)};else if(e instanceof x_)t={delete:Gd(r,e.key)};else if(e instanceof Ii)t={update:Ty(r,e.key,e.data),updateMask:VC(e.fieldMask)};else{if(!(e instanceof cC))return _e();t={verify:Gd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const f=h.transform;if(f instanceof sc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ga)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof oc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw _e()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:TC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e()}(r,e.precondition)),t}function RC(r,e){return r&&r.length>0?(Ue(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?tr(o.updateTime):tr(l);return h.isEqual(Ee.min())&&(h=tr(l)),new aC(h,o.transformResults||[])}(t,e))):[]}function CC(r,e){return{documents:[b_(r,e.path)]}}function PC(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=b_(r,o);const l=function(v){if(v.length!==0)return j_(Un.create(v,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(v){if(v.length!==0)return v.map(E=>function(R){return{field:lo(R.field),direction:xC(R.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Hd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{_t:t,parent:o}}function kC(r){let e=IC(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const R=U_(T);return R instanceof Un&&p_(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function(z){return new ic(uo(z.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(R))}(t.orderBy));let f=null;t.limit&&(f=function(T){let R;return R=typeof T=="object"?T.value:T,_c(R)?null:R}(t.limit));let m=null;t.startAt&&(m=function(T){const R=!!T.before,F=T.values||[];return new rc(F,R)}(t.startAt));let v=null;return t.endAt&&(v=function(T){const R=!T.before,F=T.values||[];return new rc(F,R)}(t.endAt)),GR(e,o,h,l,f,"F",m,v)}function NC(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function U_(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=uo(t.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=uo(t.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=uo(t.unaryFilter.field);return lt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=uo(t.unaryFilter.field);return lt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(r):r.fieldFilter!==void 0?function(t){return lt.create(uo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Un.create(t.compositeFilter.filters.map(s=>U_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e()}}(t.compositeFilter.op))}(r):_e()}function xC(r){return vC[r]}function DC(r){return _C[r]}function OC(r){return EC[r]}function lo(r){return{fieldPath:r.canonicalString()}}function uo(r){return Pt.fromServerFormat(r.fieldPath)}function j_(r){return r instanceof lt?function(t){if(t.op==="=="){if(ly(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NAN"}};if(ay(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ly(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NAN"}};if(ay(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(t.field),op:DC(t.op),value:t.value}}}(r):r instanceof Un?function(t){const s=t.getFilters().map(o=>j_(o));return s.length===1?s[0]:{compositeFilter:{op:OC(t.op),filters:s}}}(r):_e()}function VC(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function B_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class hi{constructor(e,t,s,o,l=Ee.min(),h=Ee.min(),f=Nt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LC{constructor(e){this.ct=e}}function MC(r){const e=kC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?qd(e,e.limit,"L"):e}/**
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
 */class bC{constructor(){this.un=new FC}addToCollectionParentIndex(e,t){return this.un.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(gi.min())}updateCollectionGroup(e,t,s){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class FC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new kt(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new kt(Ge.comparator)).toArray()}}/**
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
 */class wo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new wo(0)}static kn(){return new wo(-1)}}/**
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
 */class UC{constructor(){this.changes=new Po(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class BC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ba(s.mutation,o,cn.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=ka();return l.forEach((f,m)=>{h=h.insert(f,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=es();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=xr();const h=Ma(),f=function(){return Ma()}();return t.forEach((m,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof Ii)?l=l.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),ba(E.mutation,v,E.mutation.getFieldMask(),mt.now())):h.set(v.key,cn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var T;return f.set(v,new jC(E,(T=h.get(v))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Ma();let o=new Ze((h,f)=>h-f),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(m=>{const v=t.get(m);if(v===null)return;let E=s.get(m)||cn.empty();E=f.applyToLocalView(v,E),s.set(m,E);const T=(o.get(f.batchId)||Ce()).add(m);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),v=m.key,E=m.value,T=I_();E.forEach(R=>{if(!l.has(R)){const F=k_(t.get(R),s.get(R));F!==null&&T.set(R,F),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,T))}return Q.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):v_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):Q.resolve(es());let f=-1,m=l;return h.next(v=>Q.forEach(v,(E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?Q.resolve():this.remoteDocumentCache.getEntry(e,E).next(R=>{m=m.insert(E,R)}))).next(()=>this.populateOverlays(e,v,l)).next(()=>this.computeViews(e,m,v,Ce())).next(E=>({batchId:f,changes:T_(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=ka();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=ka();return this.indexManager.getCollectionParents(e,l).next(f=>Q.forEach(f,m=>{const v=function(T,R){return new ll(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((m,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))});let f=ka();return h.forEach((m,v)=>{const E=l.get(m);E!==void 0&&ba(E.mutation,v,cn.empty(),mt.now()),Tc(t,v)&&(f=f.insert(m,v))}),f})}}/**
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
 */class zC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Q.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:MC(o.bundledQuery),readTime:tr(o.readTime)}}(t)),Q.resolve()}}/**
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
 */class $C{constructor(){this.overlays=new Ze(de.comparator),this.Ir=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=es();return Q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.ht(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(s)),Q.resolve()}getOverlaysForCollection(e,t,s){const o=es(),l=t.length+1,h=new de(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const m=f.getNext().value,v=m.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&m.largestBatchId>s&&o.set(m.getKey(),m)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new Ze((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=l.get(v.largestBatchId);E===null&&(E=es(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const f=es(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((v,E)=>f.set(v,E)),!(f.size()>=o)););return Q.resolve(f)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new dC(t,s));let l=this.Ir.get(t);l===void 0&&(l=Ce(),this.Ir.set(t,l)),this.Ir.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class WC{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class Pf{constructor(){this.Tr=new kt(Tt.Er),this.dr=new kt(Tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new Tt(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new de(new Ge([])),s=new Tt(t,e),o=new Tt(t,e+1),l=[];return this.dr.forEachInRange([s,o],h=>{this.Vr(h),l.push(h.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new de(new Ge([])),s=new Tt(t,e),o=new Tt(t,e+1);let l=Ce();return this.dr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Tt(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return de.comparator(e.key,t.key)||Le(e.wr,t.wr)}static Ar(e,t){return Le(e.wr,t.wr)||de.comparator(e.key,t.key)}}/**
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
 */class qC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new kt(Tt.Er)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new hC(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.br=this.br.add(new Tt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return Q.resolve(h)}lookupMutationBatch(e,t){return Q.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([s,o],h=>{const f=this.Dr(h.wr);l.push(f)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new kt(Le);return t.forEach(o=>{const l=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,h],f=>{s=s.add(f.wr)})}),Q.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const h=new Tt(new de(l),0);let f=new kt(Le);return this.br.forEachWhile(m=>{const v=m.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(m.wr)),!0)},h),Q.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach(s=>{const o=this.Dr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return Q.forEach(t.mutations,o=>{const l=new Tt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new Tt(t,0),o=this.br.firstAfterOrEqual(s);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class HC{constructor(e){this.Mr=e,this.docs=function(){return new Ze(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Q.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=xr();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),Q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=xr();const h=t.path,f=new de(h.child("")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:v,value:{document:E}}=m.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||kR(PR(E),s)<=0||(o.has(E.key)||Tc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e()}Or(e,t){return Q.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new KC(this)}getSize(e){return Q.resolve(this.size)}}class KC extends UC{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)}),Q.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class GC{constructor(e){this.persistence=e,this.Nr=new Po(t=>Tf(t),If),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pf,this.targetCount=0,this.kr=wo.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),Q.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new wo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Kn(t),Q.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Nr.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Nr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),Q.waitFor(l).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return Q.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),Q.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return Q.resolve(s)}containsKey(e,t){return Q.resolve(this.Br.containsKey(t))}}/**
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
 */class QC{constructor(e,t){this.qr={},this.overlays={},this.Qr=new vf(0),this.Kr=!1,this.Kr=!0,this.$r=new WC,this.referenceDelegate=e(this),this.Ur=new GC(this),this.indexManager=new bC,this.remoteDocumentCache=function(o){return new HC(o)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new LC(t),this.Gr=new zC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $C,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new qC(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const o=new YC(this.Qr.next());return this.referenceDelegate.zr(),s(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return Q.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class YC extends xR{constructor(e){super(),this.currentSequenceNumber=e}}class kf{constructor(e){this.persistence=e,this.Jr=new Pf,this.Yr=null}static Zr(e){return new kf(e)}get Xr(){if(this.Yr)return this.Yr;throw _e()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),Q.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Xr,s=>{const o=de.fromPath(s);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Ee.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Q.or([()=>Q.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Nf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Ce(),o=Ce();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Nf(e,t.fromCache,s,o)}}/**
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
 */class XC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jT()?8:DR(Bt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Yi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Zi(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new XC;return this.Xi(e,t,h).next(f=>{if(l.result=f,this.zi)return this.es(e,t,h,f.size)})}).next(()=>l.result)}es(e,t,s,o){return s.documentReadCount<this.ji?(Aa()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Q.resolve()):(Aa()<=ke.DEBUG&&ae("QueryEngine","Query:",ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(Aa()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):Q.resolve())}Yi(e,t){if(dy(t))return Q.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=qd(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=Ce(...l);return this.Ji.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(m=>{const v=this.ts(t,f);return this.ns(t,v,h,m.readTime)?this.Yi(e,qd(t,null,"F")):this.rs(e,v,t,m)}))})))}Zi(e,t,s,o){return dy(t)||o.isEqual(Ee.min())?Q.resolve(null):this.Ji.getDocuments(e,s).next(l=>{const h=this.ts(t,l);return this.ns(t,h,s,o)?Q.resolve(null):(Aa()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ao(t)),this.rs(e,h,t,CR(o,-1)).next(f=>f))})}ts(e,t){let s=new kt(E_(e));return t.forEach((o,l)=>{Tc(e,l)&&(s=s.add(l))}),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,s){return Aa()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",ao(t)),this.Ji.getDocumentsMatchingQuery(e,t,gi.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class ZC{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Ze(Le),this._s=new Po(l=>Tf(l),If),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function eP(r,e,t,s){return new ZC(r,e,t,s)}async function z_(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let m=Ce();for(const v of o){h.push(v.batchId);for(const E of v.mutations)m=m.add(E.key)}for(const v of l){f.push(v.batchId);for(const E of v.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(v=>({hs:v,removedBatchIds:h,addedBatchIds:f}))})})}function tP(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(f,m,v,E){const T=v.batch,R=T.keys();let F=Q.resolve();return R.forEach(z=>{F=F.next(()=>E.getEntry(m,z)).next(q=>{const j=v.docVersions.get(z);Ue(j!==null),q.version.compareTo(j)<0&&(T.applyToRemoteDocument(q,v),q.isValidDocument()&&(q.setReadTime(v.commitVersion),E.addEntry(q)))})}),F.next(()=>f.mutationQueue.removeMutationBatch(m,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let m=Ce();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(m=m.add(f.batch.mutations[v].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function $_(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function nP(r,e){const t=we(r),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const f=[];e.targetChanges.forEach((E,T)=>{const R=o.get(T);if(!R)return;f.push(t.Ur.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Ur.addMatchingKeys(l,E.addedDocuments,T)));let F=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Nt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,s)),o=o.insert(T,F),function(q,j,le){return q.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0}(R,F,E)&&f.push(t.Ur.updateTargetData(l,F))});let m=xr(),v=Ce();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(rP(l,h,e.documentUpdates).next(E=>{m=E.Ps,v=E.Is})),!s.isEqual(Ee.min())){const E=t.Ur.getLastRemoteSnapshotVersion(l).next(T=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(E)}return Q.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,v)).next(()=>m)}).then(l=>(t.os=o,l))}function rP(r,e,t){let s=Ce(),o=Ce();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=xr();return t.forEach((f,m)=>{const v=l.get(f);m.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(Ee.min())?(e.removeEntry(f,m.readTime),h=h.insert(f,m)):!v.isValidDocument()||m.version.compareTo(v.version)>0||m.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(m),h=h.insert(f,m)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",m.version)}),{Ps:h,Is:o}})}function iP(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function sP(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ur.getTargetData(s,e).next(l=>l?(o=l,Q.resolve(o)):t.Ur.allocateTargetId(s).next(h=>(o=new hi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s})}async function Yd(r,e,t){const s=we(r),o=s.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!al(h))throw h;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function Iy(r,e,t){const s=we(r);let o=Ee.min(),l=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,v,E){const T=we(m),R=T._s.get(E);return R!==void 0?Q.resolve(T.os.get(R)):T.Ur.getTargetData(v,E)}(s,h,er(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,f.targetId).next(m=>{l=m})}).next(()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Ce())).next(f=>(oP(s,YR(e),f),{documents:f,Ts:l})))}function oP(r,e,t){let s=r.us.get(e)||Ee.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.us.set(e,s)}class Sy{constructor(){this.activeTargetIds=nC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aP{constructor(){this.so=new Sy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Sy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lP{_o(e){}shutdown(){}}/**
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
 */class Ay{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lu=null;function Td(){return Lu===null?Lu=function(){return 268435456+Math.round(2147483648*Math.random())}():Lu++,"0x"+Lu.toString(16)}/**
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
 */const uP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const bt="WebChannelConnection";class hP extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,s,o,l,h){const f=Td(),m=this.xo(t,s.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,m,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,l,h),this.No(t,m,v,o).then(E=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw yo("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",m,"request:",o),E})}Lo(t,s,o,l,h,f){return this.Mo(t,s,o,l,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}xo(t,s){const o=uP[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const l=Td();return new Promise((h,f)=>{const m=new n_;m.setWithCredentials(!0),m.listenOnce(r_.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case zu.NO_ERROR:const E=m.getResponseJson();ae(bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case zu.TIMEOUT:ae(bt,`RPC '${e}' ${l} timed out`),f(new ie(W.DEADLINE_EXCEEDED,"Request time out"));break;case zu.HTTP_ERROR:const T=m.getStatus();if(ae(bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",m.getResponseText()),T>0){let R=m.getResponseJson();Array.isArray(R)&&(R=R[0]);const F=R==null?void 0:R.error;if(F&&F.status&&F.message){const z=function(j){const le=j.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(le)>=0?le:W.UNKNOWN}(F.status);f(new ie(z,F.message))}else f(new ie(W.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new ie(W.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ae(bt,`RPC '${e}' ${l} completed.`)}});const v=JSON.stringify(o);ae(bt,`RPC '${e}' ${l} sending request:`,o),m.send(t,"POST",v,s,15)})}Bo(e,t,s){const o=Td(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=o_(),f=s_(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(m.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Oo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=l.join("");ae(bt,`Creating RPC '${e}' stream ${o}: ${E}`,m);const T=h.createWebChannel(E,m);let R=!1,F=!1;const z=new cP({Io:j=>{F?ae(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(R||(ae(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),ae(bt,`RPC '${e}' stream ${o} sending:`,j),T.send(j))},To:()=>T.close()}),q=(j,le,ce)=>{j.listen(le,fe=>{try{ce(fe)}catch(Te){setTimeout(()=>{throw Te},0)}})};return q(T,Pa.EventType.OPEN,()=>{F||(ae(bt,`RPC '${e}' stream ${o} transport opened.`),z.yo())}),q(T,Pa.EventType.CLOSE,()=>{F||(F=!0,ae(bt,`RPC '${e}' stream ${o} transport closed`),z.So())}),q(T,Pa.EventType.ERROR,j=>{F||(F=!0,yo(bt,`RPC '${e}' stream ${o} transport errored:`,j),z.So(new ie(W.UNAVAILABLE,"The operation could not be completed")))}),q(T,Pa.EventType.MESSAGE,j=>{var le;if(!F){const ce=j.data[0];Ue(!!ce);const fe=ce,Te=fe.error||((le=fe[0])===null||le===void 0?void 0:le.error);if(Te){ae(bt,`RPC '${e}' stream ${o} received error:`,Te);const je=Te.status;let Re=function(C){const k=at[C];if(k!==void 0)return D_(k)}(je),x=Te.message;Re===void 0&&(Re=W.INTERNAL,x="Unknown error status: "+je+" with message "+Te.message),F=!0,z.So(new ie(Re,x)),T.close()}else ae(bt,`RPC '${e}' stream ${o} received:`,ce),z.bo(ce)}}),q(f,i_.STAT_EVENT,j=>{j.stat===Ud.PROXY?ae(bt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===Ud.NOPROXY&&ae(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.wo()},0),z}}function Id(){return typeof document<"u"?document:null}/**
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
 */function Rc(r){return new wC(r,!0)}/**
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
 */class W_{constructor(e,t,s=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class q_{constructor(e,t,s,o,l,h,f,m){this.ui=e,this.Ho=s,this.Jo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new W_(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Yo===t&&this.P_(s,o)},s=>{e(()=>{const o=new ie(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{s(()=>this.I_(o))}),this.stream.onMessage(o=>{s(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dP extends q_{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=SC(this.serializer,e),s=function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?tr(h.readTime):Ee.min()}(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=Qd(this.serializer),t.addTarget=function(l,h){let f;const m=h.target;if(f=$d(m)?{documents:CC(l,m)}:{query:PC(l,m)._t},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=L_(l,h.resumeToken);const v=Hd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=ac(l,h.snapshotVersion.toTimestamp());const v=Hd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f}(this.serializer,e);const s=NC(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=Qd(this.serializer),t.removeTarget=e,this.a_(t)}}class fP extends q_{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=RC(e.writeResults,e.commitTime),s=tr(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=Qd(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>AC(this.serializer,s))};this.a_(t)}}/**
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
 */class pP extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Mo(e,Kd(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(W.UNKNOWN,l.toString())})}Lo(e,t,s,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Lo(e,Kd(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(W.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nr(t),this.D_=!1):ae("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gP{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(h=>{s.enqueueAndForget(async()=>{fs(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(m){const v=we(m);v.L_.add(4),await hl(v),v.q_.set("Unknown"),v.L_.delete(4),await Cc(v)}(this))})}),this.q_=new mP(s,o)}}async function Cc(r){if(fs(r))for(const e of r.B_)await e(!0)}async function hl(r){for(const e of r.B_)await e(!1)}function H_(r,e){const t=we(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Vf(t)?Of(t):ko(t).r_()&&Df(t,e))}function xf(r,e){const t=we(r),s=ko(t);t.N_.delete(e),s.r_()&&K_(t,e),t.N_.size===0&&(s.r_()?s.o_():fs(t)&&t.q_.set("Unknown"))}function Df(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ko(r).A_(e)}function K_(r,e){r.Q_.xe(e),ko(r).R_(e)}function Of(r){r.Q_=new yC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),ko(r).start(),r.q_.v_()}function Vf(r){return fs(r)&&!ko(r).n_()&&r.N_.size>0}function fs(r){return we(r).L_.size===0}function G_(r){r.Q_=void 0}async function yP(r){r.q_.set("Online")}async function vP(r){r.N_.forEach((e,t)=>{Df(r,e)})}async function _P(r,e){G_(r),Vf(r)?(r.q_.M_(e),Of(r)):r.q_.set("Unknown")}async function EP(r,e,t){if(r.q_.set("Online"),e instanceof V_&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.N_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.N_.delete(f),o.Q_.removeTarget(f))}(r,e)}catch(s){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await lc(r,s)}else if(e instanceof qu?r.Q_.Ke(e):e instanceof O_?r.Q_.He(e):r.Q_.We(e),!t.isEqual(Ee.min()))try{const s=await $_(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.Q_.rt(h);return f.targetChanges.forEach((m,v)=>{if(m.resumeToken.approximateByteSize()>0){const E=l.N_.get(v);E&&l.N_.set(v,E.withResumeToken(m.resumeToken,h))}}),f.targetMismatches.forEach((m,v)=>{const E=l.N_.get(m);if(!E)return;l.N_.set(m,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),K_(l,m);const T=new hi(E.target,m,v,E.sequenceNumber);Df(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){ae("RemoteStore","Failed to raise snapshot:",s),await lc(r,s)}}async function lc(r,e,t){if(!al(e))throw e;r.L_.add(1),await hl(r),r.q_.set("Offline"),t||(t=()=>$_(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Cc(r)})}function Q_(r,e){return e().catch(t=>lc(r,t,e))}async function Pc(r){const e=we(r),t=vi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wP(e);)try{const o=await iP(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,TP(e,o)}catch(o){await lc(e,o)}Y_(e)&&X_(e)}function wP(r){return fs(r)&&r.O_.length<10}function TP(r,e){r.O_.push(e);const t=vi(r);t.r_()&&t.V_&&t.m_(e.mutations)}function Y_(r){return fs(r)&&!vi(r).n_()&&r.O_.length>0}function X_(r){vi(r).start()}async function IP(r){vi(r).p_()}async function SP(r){const e=vi(r);for(const t of r.O_)e.m_(t.mutations)}async function AP(r,e,t){const s=r.O_.shift(),o=Af.from(s,e,t);await Q_(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Pc(r)}async function RP(r,e){e&&vi(r).V_&&await async function(s,o){if(function(h){return pC(h)&&h!==W.ABORTED}(o.code)){const l=s.O_.shift();vi(s).s_(),await Q_(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Pc(s)}}(r,e),Y_(r)&&X_(r)}async function Ry(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const s=fs(t);t.L_.add(3),await hl(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Cc(t)}async function CP(r,e){const t=we(r);e?(t.L_.delete(2),await Cc(t)):e||(t.L_.add(2),await hl(t),t.q_.set("Unknown"))}function ko(r){return r.K_||(r.K_=function(t,s,o){const l=we(t);return l.w_(),new dP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Eo:yP.bind(null,r),Ro:vP.bind(null,r),mo:_P.bind(null,r),d_:EP.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Vf(r)?Of(r):r.q_.set("Unknown")):(await r.K_.stop(),G_(r))})),r.K_}function vi(r){return r.U_||(r.U_=function(t,s,o){const l=we(t);return l.w_(),new fP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IP.bind(null,r),mo:RP.bind(null,r),f_:SP.bind(null,r),g_:AP.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await Pc(r)):(await r.U_.stop(),r.O_.length>0&&(ae("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class Lf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Lf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mf(r,e){if(Nr("AsyncQueue",`${e}: ${r}`),al(r))return new ie(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class mo{constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=ka(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new mo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Cy{constructor(){this.W_=new Ze(de.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):_e():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,s)=>{e.push(s)}),e}}class To{constructor(e,t,s,o,l,h,f,m,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new To(e,t,mo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class PP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kP{constructor(){this.queries=Py(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=we(t),l=o.queries;o.queries=Py(),l.forEach((h,f)=>{for(const m of f.j_)m.onError(s)})})(this,new ie(W.ABORTED,"Firestore shutting down"))}}function Py(){return new Po(r=>__(r),wc)}async function bf(r,e){const t=we(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(s=2):(l=new PP,s=e.J_()?0:1);try{switch(s){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Mf(h,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Uf(t)}async function Ff(r,e){const t=we(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.j_.indexOf(e);h>=0&&(l.j_.splice(h,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function NP(r,e){const t=we(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.j_)f.X_(o)&&(s=!0);h.z_=o}}s&&Uf(t)}function xP(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const l of o.j_)l.onError(t);s.queries.delete(e)}function Uf(r){r.Y_.forEach(e=>{e.next()})}var Xd,ky;(ky=Xd||(Xd={})).ea="default",ky.Cache="cache";class jf{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new To(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xd.Cache}}/**
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
 */class J_{constructor(e){this.key=e}}class Z_{constructor(e){this.key=e}}class DP{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=E_(e),this.Ra=new mo(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new Cy,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const R=o.get(E),F=Tc(this.query,T)?T:null,z=!!R&&this.mutatedKeys.has(R.key),q=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let j=!1;R&&F?R.data.isEqual(F.data)?z!==q&&(s.track({type:3,doc:F}),j=!0):this.ga(R,F)||(s.track({type:2,doc:F}),j=!0,(m&&this.Aa(F,m)>0||v&&this.Aa(F,v)<0)&&(f=!0)):!R&&F?(s.track({type:0,doc:F}),j=!0):R&&!F&&(s.track({type:1,doc:R}),j=!0,(m||v)&&(f=!0)),j&&(F?(h=h.add(F),l=q?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{Ra:h,fa:s,ns:f,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort((E,T)=>function(F,z){const q=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return q(F)-q(z)}(E.type,T.type)||this.Aa(E.doc,T.doc)),this.pa(s),o=o!=null&&o;const f=t&&!o?this.ya():[],m=this.da.size===0&&this.current&&!o?1:0,v=m!==this.Ea;return this.Ea=m,h.length!==0||v?{snapshot:new To(this.query,e.Ra,l,h,e.mutatedKeys,m===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Cy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const t=[];return e.forEach(s=>{this.da.has(s)||t.push(new Z_(s))}),this.da.forEach(s=>{e.has(s)||t.push(new J_(s))}),t}ba(e){this.Ta=e.Ts,this.da=Ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return To.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class OP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class VP{constructor(e){this.key=e,this.va=!1}}class LP{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new Po(f=>__(f),wc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ze(de.comparator),this.Na=new Map,this.La=new Pf,this.Ba={},this.ka=new Map,this.qa=wo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function MP(r,e,t=!0){const s=s0(r);let o;const l=s.Fa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await e0(s,e,t,!0),o}async function bP(r,e){const t=s0(r);await e0(t,e,!0,!1)}async function e0(r,e,t,s){const o=await sP(r.localStore,er(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await FP(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&H_(r.remoteStore,o),f}async function FP(r,e,t,s,o){r.Ka=(T,R,F)=>async function(q,j,le,ce){let fe=j.view.ma(le);fe.ns&&(fe=await Iy(q.localStore,j.query,!1).then(({documents:x})=>j.view.ma(x,fe)));const Te=ce&&ce.targetChanges.get(j.targetId),je=ce&&ce.targetMismatches.get(j.targetId)!=null,Re=j.view.applyChanges(fe,q.isPrimaryClient,Te,je);return xy(q,j.targetId,Re.wa),Re.snapshot}(r,T,R,F);const l=await Iy(r.localStore,e,!0),h=new DP(e,l.Ts),f=h.ma(l.documents),m=cl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,m);xy(r,t,v.wa);const E=new OP(e,t,h);return r.Fa.set(e,E),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),v.snapshot}async function UP(r,e,t){const s=we(r),o=s.Fa.get(e),l=s.Ma.get(o.targetId);if(l.length>1)return s.Ma.set(o.targetId,l.filter(h=>!wc(h,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Yd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&xf(s.remoteStore,o.targetId),Jd(s,o.targetId)}).catch(ol)):(Jd(s,o.targetId),await Yd(s.localStore,o.targetId,!0))}async function jP(r,e){const t=we(r),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),xf(t.remoteStore,s.targetId))}async function BP(r,e,t){const s=GP(r);try{const o=await function(h,f){const m=we(h),v=mt.now(),E=f.reduce((F,z)=>F.add(z.key),Ce());let T,R;return m.persistence.runTransaction("Locally write mutations","readwrite",F=>{let z=xr(),q=Ce();return m.cs.getEntries(F,E).next(j=>{z=j,z.forEach((le,ce)=>{ce.isValidDocument()||(q=q.add(le))})}).next(()=>m.localDocuments.getOverlayedDocuments(F,z)).next(j=>{T=j;const le=[];for(const ce of f){const fe=uC(ce,T.get(ce.key).overlayedDocument);fe!=null&&le.push(new Ii(ce.key,fe,h_(fe.value.mapValue),bn.exists(!0)))}return m.mutationQueue.addMutationBatch(F,v,le,f)}).next(j=>{R=j;const le=j.applyToLocalDocumentSet(T,q);return m.documentOverlayCache.saveOverlays(F,j.batchId,le)})}).then(()=>({batchId:R.batchId,changes:T_(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,m){let v=h.Ba[h.currentUser.toKey()];v||(v=new Ze(Le)),v=v.insert(f,m),h.Ba[h.currentUser.toKey()]=v}(s,o.batchId,t),await dl(s,o.changes),await Pc(s.remoteStore)}catch(o){const l=Mf(o,"Failed to persist write");t.reject(l)}}async function t0(r,e){const t=we(r);try{const s=await nP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Na.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?Ue(h.va):o.removedDocuments.size>0&&(Ue(h.va),h.va=!1))}),await dl(t,s,e)}catch(s){await ol(s)}}function Ny(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach((l,h)=>{const f=h.view.Z_(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const m=we(h);m.onlineState=f;let v=!1;m.queries.forEach((E,T)=>{for(const R of T.j_)R.Z_(f)&&(v=!0)}),v&&Uf(m)}(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zP(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),l=o&&o.key;if(l){let h=new Ze(de.comparator);h=h.insert(l,Ut.newNoDocument(l,Ee.min()));const f=Ce().add(l),m=new Ac(Ee.min(),new Map,new Ze(Le),h,f);await t0(s,m),s.Oa=s.Oa.remove(l),s.Na.delete(e),Bf(s)}else await Yd(s.localStore,e,!1).then(()=>Jd(s,e,t)).catch(ol)}async function $P(r,e){const t=we(r),s=e.batch.batchId;try{const o=await tP(t.localStore,e);r0(t,s,null),n0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await dl(t,o)}catch(o){await ol(o)}}async function WP(r,e,t){const s=we(r);try{const o=await function(h,f){const m=we(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let E;return m.mutationQueue.lookupMutationBatch(v,f).next(T=>(Ue(T!==null),E=T.keys(),m.mutationQueue.removeMutationBatch(v,T))).next(()=>m.mutationQueue.performConsistencyCheck(v)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(v,E,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E)).next(()=>m.localDocuments.getDocuments(v,E))})}(s.localStore,e);r0(s,e,t),n0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await dl(s,o)}catch(o){await ol(o)}}function n0(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function r0(r,e,t){const s=we(r);let o=s.Ba[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function Jd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Ma.get(e))r.Fa.delete(s),t&&r.Ca.$a(s,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(s=>{r.La.containsKey(s)||i0(r,s)})}function i0(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(xf(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Bf(r))}function xy(r,e,t){for(const s of t)s instanceof J_?(r.La.addReference(s.key,e),qP(r,s)):s instanceof Z_?(ae("SyncEngine","Document no longer in limbo: "+s.key),r.La.removeReference(s.key,e),r.La.containsKey(s.key)||i0(r,s.key)):_e()}function qP(r,e){const t=e.key,s=t.path.canonicalString();r.Oa.get(t)||r.xa.has(s)||(ae("SyncEngine","New document in limbo: "+t),r.xa.add(s),Bf(r))}function Bf(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new de(Ge.fromString(e)),s=r.qa.next();r.Na.set(s,new VP(t)),r.Oa=r.Oa.insert(t,s),H_(r.remoteStore,new hi(er(Ec(t.path)),s,"TargetPurposeLimboResolution",vf.oe))}}async function dl(r,e,t){const s=we(r),o=[],l=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach((f,m)=>{h.push(s.Ka(m,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(v){o.push(v);const T=Nf.Wi(m.targetId,v);l.push(T)}}))}),await Promise.all(h),s.Ca.d_(o),await async function(m,v){const E=we(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Q.forEach(v,R=>Q.forEach(R.$i,F=>E.persistence.referenceDelegate.addReference(T,R.targetId,F)).next(()=>Q.forEach(R.Ui,F=>E.persistence.referenceDelegate.removeReference(T,R.targetId,F)))))}catch(T){if(!al(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of v){const R=T.targetId;if(!T.fromCache){const F=E.os.get(R),z=F.snapshotVersion,q=F.withLastLimboFreeSnapshotVersion(z);E.os=E.os.insert(R,q)}}}(s.localStore,l))}async function HP(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const s=await z_(t.localStore,e);t.currentUser=e,function(l,h){l.ka.forEach(f=>{f.forEach(m=>{m.reject(new ie(W.CANCELLED,h))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await dl(t,s.hs)}}function KP(r,e){const t=we(r),s=t.Na.get(e);if(s&&s.va)return Ce().add(s.key);{let o=Ce();const l=t.Ma.get(e);if(!l)return o;for(const h of l){const f=t.Fa.get(h);o=o.unionWith(f.view.Va)}return o}}function s0(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=t0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zP.bind(null,e),e.Ca.d_=NP.bind(null,e.eventManager),e.Ca.$a=xP.bind(null,e.eventManager),e}function GP(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WP.bind(null,e),e}class uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return eP(this.persistence,new JC,e.initialUser,this.serializer)}Ga(e){return new QC(kf.Zr,this.serializer)}Wa(e){return new aP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uc.provider={build:()=>new uc};class Zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ny(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=HP.bind(null,this.syncEngine),await CP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kP}()}createDatastore(e){const t=Rc(e.databaseInfo.databaseId),s=function(l){return new hP(l)}(e.databaseInfo);return function(l,h,f,m){return new pP(l,h,f,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new gP(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Ny(this.syncEngine,t,0),function(){return Ay.D()?new Ay:new lP}())}createSyncEngine(e,t){return function(o,l,h,f,m,v,E){const T=new LP(o,l,h,f,m,v);return E&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=we(o);ae("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await hl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zd.provider={build:()=>new Zd};/**
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
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class QP{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=l_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Mf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Sd(r,e){r.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await z_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Dy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await YP(r);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Ry(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Ry(e.remoteStore,o)),r._onlineComponents=e}async function YP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;yo("Error using user provided cache. Falling back to memory cache: "+t),await Sd(r,new uc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Sd(r,new uc);return r._offlineComponents}async function o0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Dy(r,r._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Dy(r,new Zd))),r._onlineComponents}function XP(r){return o0(r).then(e=>e.syncEngine)}async function cc(r){const e=await o0(r),t=e.eventManager;return t.onListen=MP.bind(null,e.syncEngine),t.onUnlisten=UP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jP.bind(null,e.syncEngine),t}function JP(r,e,t={}){const s=new Rr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,m,v){const E=new zf({next:R=>{E.Za(),h.enqueueAndForget(()=>Ff(l,T));const F=R.docs.has(f);!F&&R.fromCache?v.reject(new ie(W.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&R.fromCache&&m&&m.source==="server"?v.reject(new ie(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(R)},error:R=>v.reject(R)}),T=new jf(Ec(f.path),E,{includeMetadataChanges:!0,_a:!0});return bf(l,T)}(await cc(r),r.asyncQueue,e,t,s)),s.promise}function ZP(r,e,t={}){const s=new Rr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,m,v){const E=new zf({next:R=>{E.Za(),h.enqueueAndForget(()=>Ff(l,T)),R.fromCache&&m.source==="server"?v.reject(new ie(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(R)},error:R=>v.reject(R)}),T=new jf(f,E,{includeMetadataChanges:!0,_a:!0});return bf(l,T)}(await cc(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function a0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Oy=new Map;/**
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
 */function l0(r,e,t){if(!t)throw new ie(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function e1(r,e,t,s){if(e===!0&&s===!0)throw new ie(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Vy(r){if(!de.isDocumentKey(r))throw new ie(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ly(r){if(de.isDocumentKey(r))throw new ie(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function kc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e()}function hn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ie(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kc(r);throw new ie(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class My{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}e1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new My({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new My(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vR;switch(s.type){case"firstParty":return new TR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Oy.get(t);s&&(ae("ComponentProvider","Removing Datastore"),Oy.delete(t),s.terminate())}(this),Promise.resolve()}}function t1(r,e,t,s={}){var o;const l=(r=hn(r,Nc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,m;if(typeof s.mockUserToken=="string")f=s.mockUserToken,m=Ft.MOCK_USER;else{f=OT(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ft(v)}r._authCredentials=new _R(new a_(f,m))}}/**
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
 */class ps{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class jt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class mi extends ps{constructor(e,t,s){super(e,t,Ec(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new de(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function by(r,e,...t){if(r=gt(r),l0("collection","path",e),r instanceof Nc){const s=Ge.fromString(e,...t);return Ly(s),new mi(r,null,s)}{if(!(r instanceof jt||r instanceof mi))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Ly(s),new mi(r.firestore,null,s)}}function hc(r,e,...t){if(r=gt(r),arguments.length===1&&(e=l_.newId()),l0("doc","path",e),r instanceof Nc){const s=Ge.fromString(e,...t);return Vy(s),new jt(r,null,new de(s))}{if(!(r instanceof jt||r instanceof mi))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Vy(s),new jt(r.firestore,r instanceof mi?r.converter:null,new de(s))}}/**
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
 */class Fy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new W_(this,"async_queue_retry"),this.Vu=()=>{const s=Id();s&&ae("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Id();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Id();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!al(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Nr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Lf.createAndSchedule(this,e,t,s,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&_e()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Uy(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1}(r,["next","error","complete"])}class _i extends Nc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Fy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fy(e),this._firestoreClient=void 0,await e}}}function n1(r,e){const t=typeof r=="object"?r:vv(),s=typeof r=="string"?r:"(default)",o=af(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=xT("firestore");l&&t1(o,...l)}return o}function xc(r){if(r._terminated)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||r1(r),r._firestoreClient}function r1(r){var e,t,s;const o=r._freezeSettings(),l=function(f,m,v,E){return new LR(f,m,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,a0(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new QP(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(r._componentsProvider))}/**
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
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(Nt.fromBase64String(e))}catch(t){throw new ie(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Io(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $f{constructor(e){this._methodName=e}}/**
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
 */class Wf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class qf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const i1=/^__.*__$/;class s1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms):new ul(e,this.data,t,this.fieldTransforms)}}class u0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function c0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Hf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return dc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(c0(this.Cu)&&i1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class o1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Rc(e)}Qu(e,t,s,o=!1){return new Hf({Cu:e,methodName:t,qu:s,path:Pt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oc(r){const e=r._freezeSettings(),t=Rc(r._databaseId);return new o1(r._databaseId,!!e.ignoreUndefinedProperties,t)}function h0(r,e,t,s,o,l={}){const h=r.Qu(l.merge||l.mergeFields?2:0,e,t,o);Kf("Data must be an object, but it was:",h,s);const f=d0(s,h);let m,v;if(l.merge)m=new cn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const R=ef(e,T,t);if(!h.contains(R))throw new ie(W.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);p0(E,R)||E.push(R)}m=new cn(E),v=h.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,v=h.fieldTransforms;return new s1(new tn(f),m,v)}class Vc extends $f{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}function a1(r,e,t,s){const o=r.Qu(1,e,t);Kf("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();ds(s,(m,v)=>{const E=Gf(e,m,t);v=gt(v);const T=o.Nu(E);if(v instanceof Vc)l.push(E);else{const R=fl(v,T);R!=null&&(l.push(E),h.set(E,R))}});const f=new cn(l);return new u0(h,f,o.fieldTransforms)}function l1(r,e,t,s,o,l){const h=r.Qu(1,e,t),f=[ef(e,s,t)],m=[o];if(l.length%2!=0)throw new ie(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)f.push(ef(e,l[R])),m.push(l[R+1]);const v=[],E=tn.empty();for(let R=f.length-1;R>=0;--R)if(!p0(v,f[R])){const F=f[R];let z=m[R];z=gt(z);const q=h.Nu(F);if(z instanceof Vc)v.push(F);else{const j=fl(z,q);j!=null&&(v.push(F),E.set(F,j))}}const T=new cn(v);return new u0(E,T,h.fieldTransforms)}function u1(r,e,t,s=!1){return fl(t,r.Qu(s?4:3,e))}function fl(r,e){if(f0(r=gt(r)))return Kf("Unsupported field value:",e,r),d0(r,e);if(r instanceof $f)return function(s,o){if(!c0(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const f of s){let m=fl(f,o.Lu(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return rC(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=mt.fromDate(s);return{timestampValue:ac(o.serializer,l)}}if(s instanceof mt){const l=new mt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ac(o.serializer,l)}}if(s instanceof Wf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Io)return{bytesValue:L_(o.serializer,s._byteString)};if(s instanceof jt){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Cf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof qf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(m=>{if(typeof m!="number")throw f.Bu("VectorValues must only contain numeric values.");return Sf(f.serializer,m)})}}}}}}(s,o);throw o.Bu(`Unsupported field value: ${kc(s)}`)}(r,e)}function d0(r,e){const t={};return u_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(r,(s,o)=>{const l=fl(o,e.Mu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function f0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof mt||r instanceof Wf||r instanceof Io||r instanceof jt||r instanceof $f||r instanceof qf)}function Kf(r,e,t){if(!f0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=kc(t);throw s==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+s)}}function ef(r,e,t){if((e=gt(e))instanceof Dc)return e._internalPath;if(typeof e=="string")return Gf(r,e);throw dc("Field path arguments must be of type string or ",r,!1,void 0,t)}const c1=new RegExp("[~\\*/\\[\\]]");function Gf(r,e,t){if(e.search(c1)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Dc(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function dc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new ie(W.INVALID_ARGUMENT,f+r+m)}function p0(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class m0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class h1 extends m0{data(){return super.data()}}function Qf(r,e){return typeof e=="string"?Gf(r,e):e instanceof Dc?e._internalPath:e._delegate._internalPath}/**
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
 */function g0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ie(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yf{}class d1 extends Yf{}function f1(r,e,...t){let s=[];e instanceof Yf&&s.push(e),s=s.concat(t),function(l){const h=l.filter(m=>m instanceof Xf).length,f=l.filter(m=>m instanceof Lc).length;if(h>1||h>0&&f>0)throw new ie(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Lc extends d1{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Lc(e,t,s)}_apply(e){const t=this._parse(e);return y0(e._query,t),new ps(e.firestore,e.converter,Wd(e._query,t))}_parse(e){const t=Oc(e.firestore);return function(l,h,f,m,v,E,T){let R;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ie(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){By(T,E);const F=[];for(const z of T)F.push(jy(m,l,z));R={arrayValue:{values:F}}}else R=jy(m,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||By(T,E),R=u1(f,h,T,E==="in"||E==="not-in");return lt.create(v,E,R)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function p1(r,e,t){const s=e,o=Qf("where",r);return Lc._create(o,s,t)}class Xf extends Yf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Un.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const f=l.getFlattenedFilters();for(const m of f)y0(h,m),h=Wd(h,m)}(e._query,t),new ps(e.firestore,e.converter,Wd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function jy(r,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new ie(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!v_(e)&&t.indexOf("/")!==-1)throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!de.isDocumentKey(s))throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return oy(r,new de(s))}if(t instanceof jt)return oy(r,t._key);throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kc(t)}.`)}function By(r,e){if(!Array.isArray(r)||r.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function y0(r,e){const t=function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class m1{convertValue(e,t="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ds(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>it(h.doubleValue));return new qf(l)}convertGeoPoint(e){return new Wf(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ef(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const t=yi(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Ue(B_(s));const o=new Ha(s.get(1),s.get(3)),l=new de(s.popFirst(5));return o.isEqual(t)||Nr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function v0(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
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
 */class xa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _0 extends m0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Qf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Hu extends _0{data(e={}){return super.data(e)}}class E0{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new xa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Hu(this._firestore,this._userDataWriter,s.key,s,new xa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const m=new Hu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new xa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const m=new Hu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new xa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:g1(f.type),doc:m,oldIndex:v,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function g1(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
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
 */function y1(r){r=hn(r,jt);const e=hn(r.firestore,_i);return JP(xc(e),r._key).then(t=>w0(e,r,t))}class Jf extends m1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,t)}}function v1(r){r=hn(r,ps);const e=hn(r.firestore,_i),t=xc(e),s=new Jf(e);return g0(r._query),ZP(t,r._query).then(o=>new E0(e,s,r,o))}function _1(r,e,t){r=hn(r,jt);const s=hn(r.firestore,_i),o=v0(r.converter,e);return Zf(s,[h0(Oc(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,bn.none())])}function E1(r,e,t,...s){r=hn(r,jt);const o=hn(r.firestore,_i),l=Oc(o);let h;return h=typeof(e=gt(e))=="string"||e instanceof Dc?l1(l,"updateDoc",r._key,e,t,s):a1(l,"updateDoc",r._key,e),Zf(o,[h.toMutation(r._key,bn.exists(!0))])}function w1(r,e){const t=hn(r.firestore,_i),s=hc(r),o=v0(r.converter,e);return Zf(t,[h0(Oc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,bn.exists(!1))]).then(()=>s)}function T1(r,...e){var t,s,o;r=gt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Uy(e[h])||(l=e[h],h++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Uy(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let m,v,E;if(r instanceof jt)v=hn(r.firestore,_i),E=Ec(r._key.path),m={next:T=>{e[h]&&e[h](w0(v,r,T))},error:e[h+1],complete:e[h+2]};else{const T=hn(r,ps);v=hn(T.firestore,_i),E=T._query;const R=new Jf(v);m={next:F=>{e[h]&&e[h](new E0(v,R,T,F))},error:e[h+1],complete:e[h+2]},g0(r._query)}return function(R,F,z,q){const j=new zf(q),le=new jf(F,j,z);return R.asyncQueue.enqueueAndForget(async()=>bf(await cc(R),le)),()=>{j.Za(),R.asyncQueue.enqueueAndForget(async()=>Ff(await cc(R),le))}}(xc(v),E,f,m)}function Zf(r,e){return function(s,o){const l=new Rr;return s.asyncQueue.enqueueAndForget(async()=>BP(await XP(s),o,l)),l.promise}(xc(r),e)}function w0(r,e,t){const s=t.docs.get(e._key),o=new Jf(r);return new _0(r,o,e._key,s,new xa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Co=o})(Ao),go(new rs("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new _i(new ER(s.getProvider("auth-internal")),new SR(s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(v.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),pi(ty,"4.7.3",e),pi(ty,"4.7.3","esm2017")})();const T0={apiKey:"AIzaSyDF1OVtBytuuZp6aug9QNdnf9NbkqZ8gKw",authDomain:"task-reminder-bot-84887.firebaseapp.com",projectId:"task-reminder-bot-84887",storageBucket:"task-reminder-bot-84887.firebasestorage.app",messagingSenderId:"907076111743",appId:"1:907076111743:web:364d7191e9fd1d9c379e4a"},I0=yv(T0);console.log("firebase Config : ",T0);const Mu=pR(I0),Fa=n1(I0),S0=K.createContext({}),Ya=()=>K.useContext(S0),I1=({children:r})=>{const[e,t]=K.useState(null),[s,o]=K.useState(!0);K.useEffect(()=>nA(Mu,E=>{t(E),o(!1)}),[]),K.useEffect(()=>{if(s||!e)return;const v=hc(Fa,"users",e.uid);let E=null;return(async()=>{const R=await y1(v);R.exists()?(console.log("User data:",R.data()),E=T1(v,F=>{console.log("User doc updated:",F.data())})):console.warn("⚠️ No user document found in Firestore.")})(),()=>{E&&E()}},[e,s]);const m={user:e,loading:s,login:async(v,E)=>{try{await ZS(Mu,v,E)}catch(T){throw console.error("Login error:",T.message),T}},signup:async(v,E)=>{try{const R=(await JS(Mu,v,E)).user;await _1(hc(Fa,"users",R.uid),{uid:R.uid,email:R.email,createdAt:new Date().toISOString()}),console.log("User document crated in firestore.")}catch(T){throw console.log("Signup error: ",T.message),T}},logout:async()=>{await rA(Mu)}};return X.jsx(S0.Provider,{value:m,children:!s&&r})},S1=()=>{const[r,e]=K.useState(""),[t,s]=K.useState(""),[o,l]=K.useState(!1),{login:h,signup:f}=Ya(),m=tv(),{user:v}=Ya(),E=async T=>{T.preventDefault();try{o?await f(r,t):await h(r,t),m("/")}catch(R){console.log("Auth error: ",R.message),IT.error("Authentication failed")}};return K.useEffect(()=>{v&&m("/")},[v]),X.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-900 px-4",children:X.jsxs("div",{className:"max-w-md w-full space-y-8 p-8 bg-slate-800 rounded-xl shadow-2xl",children:[X.jsx("div",{children:X.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-white",children:o?"Create your account":"Sign in to your account"})}),X.jsxs("form",{className:"mt-8 space-y-6",onSubmit:E,children:[X.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[X.jsx("div",{children:X.jsx("input",{type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-slate-700",placeholder:"Email address",value:r,onChange:T=>e(T.target.value)})}),X.jsx("div",{children:X.jsx("input",{type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-white rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-slate-700",placeholder:"Password",value:t,onChange:T=>s(T.target.value)})})]}),X.jsx("div",{children:X.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:o?"Sign up":"Sign in"})})]}),X.jsx("div",{className:"text-center",children:X.jsx("button",{onClick:()=>l(!o),className:"text-blue-500 hover:text-blue-400",children:o?"Already have an account? Sign in":"Don't have an account? Sign up"})})]})})};var A1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const R1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ep=(r,e)=>{const t=K.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:h,children:f,...m},v)=>K.createElement("svg",{ref:v,...A1,width:o,height:o,stroke:s,strokeWidth:h?Number(l)*24/Number(o):l,className:`lucide lucide-${R1(r)}`,...m},[...e.map(([E,T])=>K.createElement(E,T)),...(Array.isArray(f)?f:[f])||[]]));return t.displayName=`${r}`,t},C1=ep("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),P1=ep("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),k1=ep("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),N1=({tasks:r,onToggle:e})=>X.jsxs("div",{className:"space-y-4",children:[r.map(t=>X.jsxs("div",{className:`p-4 rounded-lg ${t.completed?"bg-slate-800/50":"bg-slate-800"} flex items-center justify-between transition-all duration-200`,children:[X.jsxs("div",{className:"flex items-center space-x-3",children:[X.jsx("button",{onClick:()=>e(t.id,!t.completed),className:"text-2xl",children:t.completed?X.jsx(C1,{className:"text-green-500"}):X.jsx(P1,{className:"text-slate-400"})}),X.jsxs("div",{children:[X.jsx("h3",{className:`font-medium ${t.completed?"text-slate-400 line-through":"text-white"}`,children:t.title}),X.jsx("p",{className:"text-sm text-slate-400",children:t.category})]})]}),X.jsx("div",{className:"text-sm text-slate-400",children:new Date(t.dueDate).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]},t.id)),r.length===0&&X.jsx("div",{className:"text-center text-slate-400 py-8",children:"No tasks for today. Add some tasks to get started!"})]}),x1=({isOpen:r,onClose:e,onAdd:t})=>{const[s,o]=K.useState(""),[l,h]=K.useState("DSA"),[f,m]=K.useState(""),v=E=>{E.preventDefault(),t({title:s,category:l,dueDate:new Date(f).toISOString(),completed:!1,createdAt:new Date}),o(""),h("DSA"),m(""),e()};return r?X.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:X.jsxs("div",{className:"bg-slate-800 rounded-lg p-6 w-full max-w-md",children:[X.jsxs("div",{className:"flex justify-between items-center mb-4",children:[X.jsx("h2",{className:"text-xl font-semibold",children:"Add New Task"}),X.jsx("button",{onClick:e,className:"text-slate-400 hover:text-white",children:X.jsx(k1,{})})]}),X.jsxs("form",{onSubmit:v,className:"space-y-4",children:[X.jsxs("div",{children:[X.jsx("label",{className:"block text-sm font-medium mb-1",children:"Task Title"}),X.jsx("input",{type:"text",value:s,onChange:E=>o(E.target.value),className:"w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white",required:!0})]}),X.jsxs("div",{children:[X.jsx("label",{className:"block text-sm font-medium mb-1",children:"Category"}),X.jsxs("select",{value:l,onChange:E=>h(E.target.value),className:"w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white",children:[X.jsx("option",{value:"DSA",children:"DSA"}),X.jsx("option",{value:"Project",children:"Project"}),X.jsx("option",{value:"Academics",children:"Academics"}),X.jsx("option",{value:"Development",children:"Development"}),X.jsx("option",{value:"Other",children:"Other"})]})]}),X.jsxs("div",{children:[X.jsx("label",{className:"block text-sm font-medium mb-1",children:"Due Time"}),X.jsx("input",{type:"datetime-local",value:f,onChange:E=>m(E.target.value),className:"w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white",required:!0})]}),X.jsx("button",{type:"submit",className:"w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Add Task"})]})]})}):null},D1=({tasks:r})=>{const e=K.useMemo(()=>["DSA","Project","Academics","Development","Other"].map(s=>{const o=r.filter(f=>f.category===s),l=o.filter(f=>f.completed).length,h=o.length;return{category:s,streak:l,total:h}}),[r]);return X.jsxs("div",{className:"bg-slate-800 rounded-lg p-6",children:[X.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Streak Tracker"}),X.jsx("div",{className:"space-y-4",children:e.map(({category:t,streak:s,total:o})=>X.jsxs("div",{className:"space-y-2",children:[X.jsxs("div",{className:"flex justify-between items-center",children:[X.jsx("span",{className:"text-sm font-medium",children:t}),X.jsxs("span",{className:"text-sm text-slate-400",children:[s,"/",o," tasks"]})]}),X.jsx("div",{className:"h-2 bg-slate-700 rounded-full overflow-hidden",children:X.jsx("div",{className:"h-full bg-blue-600 transition-all duration-300",style:{width:`${o>0?s/o*100:0}%`}})})]},t))}),r.length===0&&X.jsx("div",{className:"text-center text-slate-400 py-4",children:"Complete tasks to build your streak!"})]})},O1=()=>{const[r,e]=K.useState([]),[t,s]=K.useState(!1),{user:o,logout:l}=Ya();K.useEffect(()=>{o&&h()},[o]);const h=async()=>{if(o)try{const v=f1(by(Fa,"tasks"),p1("userId","==",o.uid)),T=(await v1(v)).docs.map(R=>({id:R.id,...R.data()}));e(T)}catch(v){console.error("failed to fetch tasks : ",v)}},f=async v=>{o&&(await w1(by(Fa,"tasks"),{...v,userId:o.uid,completed:!1,createdAt:new Date}),h())},m=async(v,E)=>{try{await E1(hc(Fa,"tasks",v),{completed:E}),h()}catch(T){console.error("error updating task: ",T)}};return X.jsxs("div",{className:"min-h-screen bg-slate-900 text-white",children:[X.jsx("nav",{className:"bg-slate-800 p-4",children:X.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[X.jsx("h1",{className:"text-2xl font-bold",children:"Task Reminder Bot"}),X.jsx("button",{onClick:l,className:"px-4 py-2 bg-red-600 rounded hover:bg-red-700",children:"Logout"})]})}),X.jsx("main",{className:"max-w-7xl mx-auto p-4",children:X.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[X.jsxs("div",{className:"md:col-span-2",children:[X.jsxs("div",{className:"flex justify-between items-center mb-6",children:[X.jsx("h2",{className:"text-xl font-semibold",children:"Today's Tasks"}),X.jsx("button",{onClick:()=>s(!0),className:"px-4 py-2 bg-blue-600 rounded hover:bg-blue-700",children:"Add Task"})]}),X.jsx(N1,{tasks:r,onToggle:m})]}),X.jsx("div",{children:X.jsx(D1,{tasks:r})})]})}),X.jsx(x1,{isOpen:t,onClose:()=>s(!1),onAdd:f})]})},V1=({children:r})=>{const{user:e}=Ya();return e?X.jsx(X.Fragment,{children:r}):X.jsx(Cw,{to:"/login"})},L1=()=>{const{loading:r}=Ya();return r?X.jsx("div",{className:"flex h-screen items-center justify-center",children:X.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}):X.jsxs(X.Fragment,{children:[X.jsx(TT,{position:"top-right"}),X.jsxs(kw,{children:[X.jsx(Rd,{path:"/login",element:X.jsx(S1,{})}),X.jsx(Rd,{path:"/",element:X.jsx(V1,{children:X.jsx(O1,{})})})]})]})};FE.createRoot(document.getElementById("root")).render(X.jsx($y.StrictMode,{children:X.jsx(Dw,{children:X.jsx(I1,{children:X.jsx(L1,{})})})}));

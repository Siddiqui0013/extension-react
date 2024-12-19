function T_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var yh={exports:{}},aa={},vh={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function I_(){if(Gp)return we;Gp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),N=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=N&&O[N]||O["@@iterator"],typeof O=="function"?O:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function K(O,z,oe){this.props=O,this.context=z,this.refs=J,this.updater=oe||$}K.prototype.isReactComponent={},K.prototype.setState=function(O,z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,z,"setState")},K.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Ce(){}Ce.prototype=K.prototype;function Ie(O,z,oe){this.props=O,this.context=z,this.refs=J,this.updater=oe||$}var ye=Ie.prototype=new Ce;ye.constructor=Ie,X(ye,K.prototype),ye.isPureReactComponent=!0;var _e=Array.isArray,qe=Object.prototype.hasOwnProperty,Te={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(O,z,oe){var ve,Ee={},Re=null,Ve=null;if(z!=null)for(ve in z.ref!==void 0&&(Ve=z.ref),z.key!==void 0&&(Re=""+z.key),z)qe.call(z,ve)&&!k.hasOwnProperty(ve)&&(Ee[ve]=z[ve]);var Me=arguments.length-2;if(Me===1)Ee.children=oe;else if(1<Me){for(var ze=Array(Me),pt=0;pt<Me;pt++)ze[pt]=arguments[pt+2];Ee.children=ze}if(O&&O.defaultProps)for(ve in Me=O.defaultProps,Me)Ee[ve]===void 0&&(Ee[ve]=Me[ve]);return{$$typeof:i,type:O,key:Re,ref:Ve,props:Ee,_owner:Te.current}}function A(O,z){return{$$typeof:i,type:O.type,key:z,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(oe){return z[oe]})}var x=/\/+/g;function S(O,z){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):z.toString(36)}function Ze(O,z,oe,ve,Ee){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var Ve=!1;if(O===null)Ve=!0;else switch(Re){case"string":case"number":Ve=!0;break;case"object":switch(O.$$typeof){case i:case e:Ve=!0}}if(Ve)return Ve=O,Ee=Ee(Ve),O=ve===""?"."+S(Ve,0):ve,_e(Ee)?(oe="",O!=null&&(oe=O.replace(x,"$&/")+"/"),Ze(Ee,z,oe,"",function(pt){return pt})):Ee!=null&&(R(Ee)&&(Ee=A(Ee,oe+(!Ee.key||Ve&&Ve.key===Ee.key?"":(""+Ee.key).replace(x,"$&/")+"/")+O)),z.push(Ee)),1;if(Ve=0,ve=ve===""?".":ve+":",_e(O))for(var Me=0;Me<O.length;Me++){Re=O[Me];var ze=ve+S(Re,Me);Ve+=Ze(Re,z,oe,ze,Ee)}else if(ze=b(O),typeof ze=="function")for(O=ze.call(O),Me=0;!(Re=O.next()).done;)Re=Re.value,ze=ve+S(Re,Me++),Ve+=Ze(Re,z,oe,ze,Ee);else if(Re==="object")throw z=String(O),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Ve}function Ct(O,z,oe){if(O==null)return O;var ve=[],Ee=0;return Ze(O,ve,"","",function(Re){return z.call(oe,Re,Ee++)}),ve}function Rt(O){if(O._status===-1){var z=O._result;z=z(),z.then(function(oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=oe)},function(oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=oe)}),O._status===-1&&(O._status=0,O._result=z)}if(O._status===1)return O._result.default;throw O._result}var be={current:null},Q={transition:null},ae={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Q,ReactCurrentOwner:Te};function ee(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:Ct,forEach:function(O,z,oe){Ct(O,function(){z.apply(this,arguments)},oe)},count:function(O){var z=0;return Ct(O,function(){z++}),z},toArray:function(O){return Ct(O,function(z){return z})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},we.Component=K,we.Fragment=t,we.Profiler=a,we.PureComponent=Ie,we.StrictMode=s,we.Suspense=y,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,we.act=ee,we.cloneElement=function(O,z,oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ve=X({},O.props),Ee=O.key,Re=O.ref,Ve=O._owner;if(z!=null){if(z.ref!==void 0&&(Re=z.ref,Ve=Te.current),z.key!==void 0&&(Ee=""+z.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(ze in z)qe.call(z,ze)&&!k.hasOwnProperty(ze)&&(ve[ze]=z[ze]===void 0&&Me!==void 0?Me[ze]:z[ze])}var ze=arguments.length-2;if(ze===1)ve.children=oe;else if(1<ze){Me=Array(ze);for(var pt=0;pt<ze;pt++)Me[pt]=arguments[pt+2];ve.children=Me}return{$$typeof:i,type:O.type,key:Ee,ref:Re,props:ve,_owner:Ve}},we.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},we.createElement=T,we.createFactory=function(O){var z=T.bind(null,O);return z.type=O,z},we.createRef=function(){return{current:null}},we.forwardRef=function(O){return{$$typeof:m,render:O}},we.isValidElement=R,we.lazy=function(O){return{$$typeof:I,_payload:{_status:-1,_result:O},_init:Rt}},we.memo=function(O,z){return{$$typeof:_,type:O,compare:z===void 0?null:z}},we.startTransition=function(O){var z=Q.transition;Q.transition={};try{O()}finally{Q.transition=z}},we.unstable_act=ee,we.useCallback=function(O,z){return be.current.useCallback(O,z)},we.useContext=function(O){return be.current.useContext(O)},we.useDebugValue=function(){},we.useDeferredValue=function(O){return be.current.useDeferredValue(O)},we.useEffect=function(O,z){return be.current.useEffect(O,z)},we.useId=function(){return be.current.useId()},we.useImperativeHandle=function(O,z,oe){return be.current.useImperativeHandle(O,z,oe)},we.useInsertionEffect=function(O,z){return be.current.useInsertionEffect(O,z)},we.useLayoutEffect=function(O,z){return be.current.useLayoutEffect(O,z)},we.useMemo=function(O,z){return be.current.useMemo(O,z)},we.useReducer=function(O,z,oe){return be.current.useReducer(O,z,oe)},we.useRef=function(O){return be.current.useRef(O)},we.useState=function(O){return be.current.useState(O)},we.useSyncExternalStore=function(O,z,oe){return be.current.useSyncExternalStore(O,z,oe)},we.useTransition=function(){return be.current.useTransition()},we.version="18.3.1",we}var Qp;function ad(){return Qp||(Qp=1,vh.exports=I_()),vh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function S_(){if(Yp)return aa;Yp=1;var i=ad(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(m,y,_){var I,N={},b=null,$=null;_!==void 0&&(b=""+_),y.key!==void 0&&(b=""+y.key),y.ref!==void 0&&($=y.ref);for(I in y)s.call(y,I)&&!c.hasOwnProperty(I)&&(N[I]=y[I]);if(m&&m.defaultProps)for(I in y=m.defaultProps,y)N[I]===void 0&&(N[I]=y[I]);return{$$typeof:e,type:m,key:b,ref:$,props:N,_owner:a.current}}return aa.Fragment=t,aa.jsx=d,aa.jsxs=d,aa}var Xp;function A_(){return Xp||(Xp=1,yh.exports=S_()),yh.exports}var pe=A_(),zt=ad();const ti=T_(zt);var Yl={},_h={exports:{}},Qt={},Eh={exports:{}},wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function C_(){return Jp||(Jp=1,function(i){function e(Q,ae){var ee=Q.length;Q.push(ae);e:for(;0<ee;){var O=ee-1>>>1,z=Q[O];if(0<a(z,ae))Q[O]=ae,Q[ee]=z,ee=O;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var ae=Q[0],ee=Q.pop();if(ee!==ae){Q[0]=ee;e:for(var O=0,z=Q.length,oe=z>>>1;O<oe;){var ve=2*(O+1)-1,Ee=Q[ve],Re=ve+1,Ve=Q[Re];if(0>a(Ee,ee))Re<z&&0>a(Ve,Ee)?(Q[O]=Ve,Q[Re]=ee,O=Re):(Q[O]=Ee,Q[ve]=ee,O=ve);else if(Re<z&&0>a(Ve,ee))Q[O]=Ve,Q[Re]=ee,O=Re;else break e}}return ae}function a(Q,ae){var ee=Q.sortIndex-ae.sortIndex;return ee!==0?ee:Q.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();i.unstable_now=function(){return d.now()-m}}var y=[],_=[],I=1,N=null,b=3,$=!1,X=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,Ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(Q){for(var ae=t(_);ae!==null;){if(ae.callback===null)s(_);else if(ae.startTime<=Q)s(_),ae.sortIndex=ae.expirationTime,e(y,ae);else break;ae=t(_)}}function _e(Q){if(J=!1,ye(Q),!X)if(t(y)!==null)X=!0,Rt(qe);else{var ae=t(_);ae!==null&&be(_e,ae.startTime-Q)}}function qe(Q,ae){X=!1,J&&(J=!1,Ce(T),T=-1),$=!0;var ee=b;try{for(ye(ae),N=t(y);N!==null&&(!(N.expirationTime>ae)||Q&&!D());){var O=N.callback;if(typeof O=="function"){N.callback=null,b=N.priorityLevel;var z=O(N.expirationTime<=ae);ae=i.unstable_now(),typeof z=="function"?N.callback=z:N===t(y)&&s(y),ye(ae)}else s(y);N=t(y)}if(N!==null)var oe=!0;else{var ve=t(_);ve!==null&&be(_e,ve.startTime-ae),oe=!1}return oe}finally{N=null,b=ee,$=!1}}var Te=!1,k=null,T=-1,A=5,R=-1;function D(){return!(i.unstable_now()-R<A)}function x(){if(k!==null){var Q=i.unstable_now();R=Q;var ae=!0;try{ae=k(!0,Q)}finally{ae?S():(Te=!1,k=null)}}else Te=!1}var S;if(typeof Ie=="function")S=function(){Ie(x)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Ct=Ze.port2;Ze.port1.onmessage=x,S=function(){Ct.postMessage(null)}}else S=function(){K(x,0)};function Rt(Q){k=Q,Te||(Te=!0,S())}function be(Q,ae){T=K(function(){Q(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_continueExecution=function(){X||$||(X=!0,Rt(qe))},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Q){switch(b){case 1:case 2:case 3:var ae=3;break;default:ae=b}var ee=b;b=ae;try{return Q()}finally{b=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Q,ae){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ee=b;b=Q;try{return ae()}finally{b=ee}},i.unstable_scheduleCallback=function(Q,ae,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,Q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ee+z,Q={id:I++,callback:ae,priorityLevel:Q,startTime:ee,expirationTime:z,sortIndex:-1},ee>O?(Q.sortIndex=ee,e(_,Q),t(y)===null&&Q===t(_)&&(J?(Ce(T),T=-1):J=!0,be(_e,ee-O))):(Q.sortIndex=z,e(y,Q),X||$||(X=!0,Rt(qe))),Q},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Q){var ae=b;return function(){var ee=b;b=ae;try{return Q.apply(this,arguments)}finally{b=ee}}}}(wh)),wh}var Zp;function R_(){return Zp||(Zp=1,Eh.exports=C_()),Eh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function P_(){if(em)return Qt;em=1;var i=ad(),e=R_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(n,r){d(n,r),d(n+"Capture",r)}function d(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},N={};function b(n){return y.call(N,n)?!0:y.call(I,n)?!1:_.test(n)?N[n]=!0:(I[n]=!0,!1)}function $(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X(n,r,o,u){if(r===null||typeof r>"u"||$(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,o,u,h,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){K[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];K[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){K[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){K[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){K[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){K[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){K[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){K[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){K[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ce=/[\-:]([a-z])/g;function Ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ce,Ie);K[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ce,Ie);K[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ce,Ie);K[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,o,u){var h=K.hasOwnProperty(r)?K[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,o,h,u)&&(o=null),u||h===null?b(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var _e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Te=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),D=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),Q=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,O;function z(n){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var oe=!1;function ve(n,r){if(!n||oe)return"";oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var u=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){u=F}n.call(r.prototype)}else{try{throw Error()}catch(F){u=F}n()}}catch(F){if(F&&u&&typeof F.stack=="string"){for(var h=F.stack.split(`
`),p=u.stack.split(`
`),v=h.length-1,w=p.length-1;1<=v&&0<=w&&h[v]!==p[w];)w--;for(;1<=v&&0<=w;v--,w--)if(h[v]!==p[w]){if(v!==1||w!==1)do if(v--,w--,0>w||h[v]!==p[w]){var C=`
`+h[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=w);break}}}finally{oe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?z(n):""}function Ee(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=ve(n.type,!1),n;case 11:return n=ve(n.type.render,!1),n;case 1:return n=ve(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Te:return"Portal";case A:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ct:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case Rt:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(n){var r=ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Yn(n){n._valueTracker||(n._valueTracker=pt(n))}function Yi(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ir(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function di(n,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Xi(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Me(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function fo(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function po(n,r){fo(n,r);var o=Me(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ji(n,r.type,o):r.hasOwnProperty("defaultValue")&&Ji(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Va(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Ji(n,r,o){(r!=="number"||Ir(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Xn=Array.isArray;function Jn(n,r,o,u){if(n=n.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=r.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Me(o),r=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function mo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Zi(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Xn(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Me(o)}}function es(n,r){var o=Me(r.value),u=Me(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function go(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Zn,yo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,h)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Zn=Zn||document.createElement("div"),Zn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Zn.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Sr(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pi=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(n){pi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),fi[r]=fi[n]})});function vo(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||fi.hasOwnProperty(n)&&fi[n]?(""+r).trim():r+"px"}function _o(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=vo(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var Eo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wo(n,r){if(r){if(Eo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function To(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function ts(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ns=null,on=null,On=null;function rs(n){if(n=Wo(n)){if(typeof ns!="function")throw Error(t(280));var r=n.stateNode;r&&(r=hl(r),ns(n.stateNode,n.type,r))}}function xn(n){on?On?On.push(n):On=[n]:on=n}function Io(){if(on){var n=on,r=On;if(On=on=null,rs(n),r)for(n=0;n<r.length;n++)rs(r[n])}}function gi(n,r){return n(r)}function So(){}var er=!1;function Ao(n,r,o){if(er)return n(r,o);er=!0;try{return gi(n,r,o)}finally{er=!1,(on!==null||On!==null)&&(So(),Io())}}function et(n,r){var o=n.stateNode;if(o===null)return null;var u=hl(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var is=!1;if(m)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){is=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{is=!1}function yi(n,r,o,u,h,p,v,w,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch(H){this.onError(H)}}var vi=!1,ss=null,yn=!1,Co=null,qu={onError:function(n){vi=!0,ss=n}};function os(n,r,o,u,h,p,v,w,C){vi=!1,ss=null,yi.apply(qu,arguments)}function Ma(n,r,o,u,h,p,v,w,C){if(os.apply(this,arguments),vi){if(vi){var F=ss;vi=!1,ss=null}else throw Error(t(198));yn||(yn=!0,Co=F)}}function vn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function _i(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _n(n){if(vn(n)!==n)throw Error(t(188))}function Fa(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return _n(h),n;if(p===u)return _n(h),r;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=p;else{for(var v=!1,w=h.child;w;){if(w===o){v=!0,o=h,u=p;break}if(w===u){v=!0,u=h,o=p;break}w=w.sibling}if(!v){for(w=p.child;w;){if(w===o){v=!0,o=p,u=h;break}if(w===u){v=!0,u=p,o=h;break}w=w.sibling}if(!v)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Ro(n){return n=Fa(n),n!==null?as(n):null}function as(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=as(n);if(r!==null)return r;n=n.sibling}return null}var ls=e.unstable_scheduleCallback,Po=e.unstable_cancelCallback,ba=e.unstable_shouldYield,Wu=e.unstable_requestPaint,je=e.unstable_now,Ua=e.unstable_getCurrentPriorityLevel,Ei=e.unstable_ImmediatePriority,Ar=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,ko=e.unstable_LowPriority,za=e.unstable_IdlePriority,wi=null,Jt=null;function ja(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(wi,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:$a,No=Math.log,Ba=Math.LN2;function $a(n){return n>>>=0,n===0?32:31-(No(n)/Ba|0)|0}var us=64,cs=4194304;function Cr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ti(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,p=n.pingedLanes,v=o&268435455;if(v!==0){var w=v&~h;w!==0?u=Cr(w):(p&=v,p!==0&&(u=Cr(p)))}else v=o&~h,v!==0?u=Cr(v):p!==0&&(u=Cr(p));if(u===0)return 0;if(r!==0&&r!==u&&!(r&h)&&(h=u&-u,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if(u&4&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-Mt(r),h=1<<o,u|=n[o],r&=~h;return u}function Ku(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tr(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Mt(p),w=1<<v,C=h[v];C===-1?(!(w&o)||w&u)&&(h[v]=Ku(w,r)):C<=r&&(n.expiredLanes|=w),p&=~w}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ii(){var n=us;return us<<=1,!(us&4194240)&&(us=64),n}function Rr(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Pr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Mt(r),n[r]=o}function Ue(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-Mt(o),p=1<<h;r[h]=0,u[h]=-1,n[h]=-1,o&=~p}}function kr(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Mt(o),h=1<<u;h&r|n[u]&r&&(n[u]|=r),o&=~h}}var Ae=0;function Nr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ha,hs,qa,Wa,Ka,Do=!1,Ln=[],Et=null,En=null,wn=null,Dr=new Map,ln=new Map,Vn=[],Gu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ga(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Dr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function Bt(n,r,o,u,h,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},r!==null&&(r=Wo(r),r!==null&&hs(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function Qu(n,r,o,u,h){switch(r){case"focusin":return Et=Bt(Et,n,r,o,u,h),!0;case"dragenter":return En=Bt(En,n,r,o,u,h),!0;case"mouseover":return wn=Bt(wn,n,r,o,u,h),!0;case"pointerover":var p=h.pointerId;return Dr.set(p,Bt(Dr.get(p)||null,n,r,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,ln.set(p,Bt(ln.get(p)||null,n,r,o,u,h)),!0}return!1}function Qa(n){var r=Pi(n.target);if(r!==null){var o=vn(r);if(o!==null){if(r=o.tag,r===13){if(r=_i(o),r!==null){n.blockedOn=r,Ka(n.priority,function(){qa(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=ds(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);mi=u,o.target.dispatchEvent(u),mi=null}else return r=Wo(o),r!==null&&hs(r),n.blockedOn=o,!1;r.shift()}return!0}function Si(n,r,o){nr(n)&&o.delete(r)}function Ya(){Do=!1,Et!==null&&nr(Et)&&(Et=null),En!==null&&nr(En)&&(En=null),wn!==null&&nr(wn)&&(wn=null),Dr.forEach(Si),ln.forEach(Si)}function Tn(n,r){n.blockedOn===r&&(n.blockedOn=null,Do||(Do=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ya)))}function In(n){function r(h){return Tn(h,n)}if(0<Ln.length){Tn(Ln[0],n);for(var o=1;o<Ln.length;o++){var u=Ln[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Et!==null&&Tn(Et,n),En!==null&&Tn(En,n),wn!==null&&Tn(wn,n),Dr.forEach(r),ln.forEach(r),o=0;o<Vn.length;o++)u=Vn[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Vn.length&&(o=Vn[0],o.blockedOn===null);)Qa(o),o.blockedOn===null&&Vn.shift()}var rr=_e.ReactCurrentBatchConfig,Or=!0;function We(n,r,o,u){var h=Ae,p=rr.transition;rr.transition=null;try{Ae=1,Oo(n,r,o,u)}finally{Ae=h,rr.transition=p}}function Yu(n,r,o,u){var h=Ae,p=rr.transition;rr.transition=null;try{Ae=4,Oo(n,r,o,u)}finally{Ae=h,rr.transition=p}}function Oo(n,r,o,u){if(Or){var h=ds(n,r,o,u);if(h===null)ac(n,r,u,Ai,o),Ga(n,u);else if(Qu(h,n,r,o,u))u.stopPropagation();else if(Ga(n,u),r&4&&-1<Gu.indexOf(n)){for(;h!==null;){var p=Wo(h);if(p!==null&&Ha(p),p=ds(n,r,o,u),p===null&&ac(n,r,u,Ai,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else ac(n,r,u,null,o)}}var Ai=null;function ds(n,r,o,u){if(Ai=null,n=ts(u),n=Pi(n),n!==null)if(r=vn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=_i(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ai=n,null}function xo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ua()){case Ei:return 1;case Ar:return 4;case an:case ko:return 16;case za:return 536870912;default:return 16}default:return 16}}var en=null,fs=null,$t=null;function Lo(){if($t)return $t;var n,r=fs,o=r.length,u,h="value"in en?en.value:en.textContent,p=h.length;for(n=0;n<o&&r[n]===h[n];n++);var v=o-n;for(u=1;u<=v&&r[o-u]===h[p-u];u++);return $t=h.slice(n,1<u?1-u:void 0)}function ps(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Mn(){return!0}function Vo(){return!1}function wt(n){function r(o,u,h,p,v){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(o=n[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Mn:Vo,this.isPropagationStopped=Vo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),r}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=wt(Sn),Fn=ee({},Sn,{view:0,detail:0}),Xu=wt(Fn),gs,ir,xr,Ci=ee({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xr&&(xr&&n.type==="mousemove"?(gs=n.screenX-xr.screenX,ir=n.screenY-xr.screenY):ir=gs=0,xr=n),gs)},movementY:function(n){return"movementY"in n?n.movementY:ir}}),ys=wt(Ci),Mo=ee({},Ci,{dataTransfer:0}),Xa=wt(Mo),vs=ee({},Fn,{relatedTarget:0}),_s=wt(vs),Ja=ee({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),sr=wt(Ja),Za=ee({},Sn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),el=wt(Za),tl=ee({},Sn,{data:0}),Fo=wt(tl),Es={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ft={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=nl[n])?!!r[n]:!1}function bn(){return rl}var l=ee({},Fn,{key:function(n){if(n.key){var r=Es[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ps(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ft[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bn,charCode:function(n){return n.type==="keypress"?ps(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ps(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=wt(l),g=ee({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=wt(g),L=ee({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bn}),U=wt(L),G=ee({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=wt(G),ut=ee({},Ci,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pe=wt(ut),mt=[9,13,27,32],it=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var tn=m&&"TextEvent"in window&&!un,Ri=m&&(!it||un&&8<un&&11>=un),ws=" ",jd=!1;function Bd(n,r){switch(n){case"keyup":return mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function _v(n,r){switch(n){case"compositionend":return $d(r);case"keypress":return r.which!==32?null:(jd=!0,ws);case"textInput":return n=r.data,n===ws&&jd?null:n;default:return null}}function Ev(n,r){if(Ts)return n==="compositionend"||!it&&Bd(n,r)?(n=Lo(),$t=fs=en=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ri&&r.locale!=="ko"?null:r.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!wv[n.type]:r==="textarea"}function qd(n,r,o,u){xn(u),r=ll(r,"onChange"),0<r.length&&(o=new ms("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var bo=null,Uo=null;function Tv(n){cf(n,0)}function il(n){var r=Rs(n);if(Yi(r))return n}function Iv(n,r){if(n==="change")return r}var Wd=!1;if(m){var Ju;if(m){var Zu="oninput"in document;if(!Zu){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Zu=typeof Kd.oninput=="function"}Ju=Zu}else Ju=!1;Wd=Ju&&(!document.documentMode||9<document.documentMode)}function Gd(){bo&&(bo.detachEvent("onpropertychange",Qd),Uo=bo=null)}function Qd(n){if(n.propertyName==="value"&&il(Uo)){var r=[];qd(r,Uo,n,ts(n)),Ao(Tv,r)}}function Sv(n,r,o){n==="focusin"?(Gd(),bo=r,Uo=o,bo.attachEvent("onpropertychange",Qd)):n==="focusout"&&Gd()}function Av(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return il(Uo)}function Cv(n,r){if(n==="click")return il(r)}function Rv(n,r){if(n==="input"||n==="change")return il(r)}function Pv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var An=typeof Object.is=="function"?Object.is:Pv;function zo(n,r){if(An(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!y.call(r,h)||!An(n[h],r[h]))return!1}return!0}function Yd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xd(n,r){var o=Yd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Yd(o)}}function Jd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Jd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Zd(){for(var n=window,r=Ir();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ir(n.document)}return r}function ec(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function kv(n){var r=Zd(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Jd(o.ownerDocument.documentElement,o)){if(u!==null&&ec(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,p=Math.min(u.start,h);u=u.end===void 0?p:Math.min(u.end,h),!n.extend&&p>u&&(h=u,u=p,p=h),h=Xd(o,p);var v=Xd(o,u);h&&v&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),p>u?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nv=m&&"documentMode"in document&&11>=document.documentMode,Is=null,tc=null,jo=null,nc=!1;function ef(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nc||Is==null||Is!==Ir(u)||(u=Is,"selectionStart"in u&&ec(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),jo&&zo(jo,u)||(jo=u,u=ll(tc,"onSelect"),0<u.length&&(r=new ms("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Is)))}function sl(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ss={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},rc={},tf={};m&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function ol(n){if(rc[n])return rc[n];if(!Ss[n])return n;var r=Ss[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in tf)return rc[n]=r[o];return n}var nf=ol("animationend"),rf=ol("animationiteration"),sf=ol("animationstart"),of=ol("transitionend"),af=new Map,lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,r){af.set(n,r),c(r,[n])}for(var ic=0;ic<lf.length;ic++){var sc=lf[ic],Dv=sc.toLowerCase(),Ov=sc[0].toUpperCase()+sc.slice(1);Lr(Dv,"on"+Ov)}Lr(nf,"onAnimationEnd"),Lr(rf,"onAnimationIteration"),Lr(sf,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(of,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function uf(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,Ma(u,r,void 0,n),n.currentTarget=null}function cf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var w=u[v],C=w.instance,F=w.currentTarget;if(w=w.listener,C!==p&&h.isPropagationStopped())break e;uf(h,w,F),p=C}else for(v=0;v<u.length;v++){if(w=u[v],C=w.instance,F=w.currentTarget,w=w.listener,C!==p&&h.isPropagationStopped())break e;uf(h,w,F),p=C}}}if(yn)throw n=Co,yn=!1,Co=null,n}function $e(n,r){var o=r[fc];o===void 0&&(o=r[fc]=new Set);var u=n+"__bubble";o.has(u)||(hf(r,n,2,!1),o.add(u))}function oc(n,r,o){var u=0;r&&(u|=4),hf(o,n,u,r)}var al="_reactListening"+Math.random().toString(36).slice(2);function $o(n){if(!n[al]){n[al]=!0,s.forEach(function(o){o!=="selectionchange"&&(xv.has(o)||oc(o,!1,n),oc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[al]||(r[al]=!0,oc("selectionchange",!1,r))}}function hf(n,r,o,u){switch(xo(r)){case 1:var h=We;break;case 4:h=Yu;break;default:h=Oo}o=h.bind(null,r,o,n),h=void 0,!is||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,o,{capture:!0,passive:h}):n.addEventListener(r,o,!0):h!==void 0?n.addEventListener(r,o,{passive:h}):n.addEventListener(r,o,!1)}function ac(n,r,o,u,h){var p=u;if(!(r&1)&&!(r&2)&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var w=u.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(v===4)for(v=u.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===h||C.nodeType===8&&C.parentNode===h))return;v=v.return}for(;w!==null;){if(v=Pi(w),v===null)return;if(C=v.tag,C===5||C===6){u=p=v;continue e}w=w.parentNode}}u=u.return}Ao(function(){var F=p,H=ts(o),q=[];e:{var B=af.get(n);if(B!==void 0){var Z=ms,re=n;switch(n){case"keypress":if(ps(o)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=_s;break;case"focusout":re="blur",Z=_s;break;case"beforeblur":case"afterblur":Z=_s;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Xa;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case nf:case rf:case sf:Z=sr;break;case of:Z=Fe;break;case"scroll":Z=Xu;break;case"wheel":Z=Pe;break;case"copy":case"cut":case"paste":Z=el;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,tt=!ie&&n==="scroll",V=ie?B!==null?B+"Capture":null:B;ie=[];for(var P=F,M;P!==null;){M=P;var W=M.stateNode;if(M.tag===5&&W!==null&&(M=W,V!==null&&(W=et(P,V),W!=null&&ie.push(Ho(P,W,M)))),tt)break;P=P.return}0<ie.length&&(B=new Z(B,re,null,o,H),q.push({event:B,listeners:ie}))}}if(!(r&7)){e:{if(B=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",B&&o!==mi&&(re=o.relatedTarget||o.fromElement)&&(Pi(re)||re[or]))break e;if((Z||B)&&(B=H.window===H?H:(B=H.ownerDocument)?B.defaultView||B.parentWindow:window,Z?(re=o.relatedTarget||o.toElement,Z=F,re=re?Pi(re):null,re!==null&&(tt=vn(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(ie=ys,W="onMouseLeave",V="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,W="onPointerLeave",V="onPointerEnter",P="pointer"),tt=Z==null?B:Rs(Z),M=re==null?B:Rs(re),B=new ie(W,P+"leave",Z,o,H),B.target=tt,B.relatedTarget=M,W=null,Pi(H)===F&&(ie=new ie(V,P+"enter",re,o,H),ie.target=M,ie.relatedTarget=tt,W=ie),tt=W,Z&&re)t:{for(ie=Z,V=re,P=0,M=ie;M;M=As(M))P++;for(M=0,W=V;W;W=As(W))M++;for(;0<P-M;)ie=As(ie),P--;for(;0<M-P;)V=As(V),M--;for(;P--;){if(ie===V||V!==null&&ie===V.alternate)break t;ie=As(ie),V=As(V)}ie=null}else ie=null;Z!==null&&df(q,B,Z,ie,!1),re!==null&&tt!==null&&df(q,tt,re,ie,!0)}}e:{if(B=F?Rs(F):window,Z=B.nodeName&&B.nodeName.toLowerCase(),Z==="select"||Z==="input"&&B.type==="file")var se=Iv;else if(Hd(B))if(Wd)se=Rv;else{se=Av;var le=Sv}else(Z=B.nodeName)&&Z.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(se=Cv);if(se&&(se=se(n,F))){qd(q,se,o,H);break e}le&&le(n,B,F),n==="focusout"&&(le=B._wrapperState)&&le.controlled&&B.type==="number"&&Ji(B,"number",B.value)}switch(le=F?Rs(F):window,n){case"focusin":(Hd(le)||le.contentEditable==="true")&&(Is=le,tc=F,jo=null);break;case"focusout":jo=tc=Is=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,ef(q,o,H);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":ef(q,o,H)}var ue;if(it)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ts?Bd(n,o)&&(fe="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(fe="onCompositionStart");fe&&(Ri&&o.locale!=="ko"&&(Ts||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ts&&(ue=Lo()):(en=H,fs="value"in en?en.value:en.textContent,Ts=!0)),le=ll(F,fe),0<le.length&&(fe=new Fo(fe,n,null,o,H),q.push({event:fe,listeners:le}),ue?fe.data=ue:(ue=$d(o),ue!==null&&(fe.data=ue)))),(ue=tn?_v(n,o):Ev(n,o))&&(F=ll(F,"onBeforeInput"),0<F.length&&(H=new Fo("onBeforeInput","beforeinput",null,o,H),q.push({event:H,listeners:F}),H.data=ue))}cf(q,r)})}function Ho(n,r,o){return{instance:n,listener:r,currentTarget:o}}function ll(n,r){for(var o=r+"Capture",u=[];n!==null;){var h=n,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=et(n,o),p!=null&&u.unshift(Ho(n,p,h)),p=et(n,r),p!=null&&u.push(Ho(n,p,h))),n=n.return}return u}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function df(n,r,o,u,h){for(var p=r._reactName,v=[];o!==null&&o!==u;){var w=o,C=w.alternate,F=w.stateNode;if(C!==null&&C===u)break;w.tag===5&&F!==null&&(w=F,h?(C=et(o,p),C!=null&&v.unshift(Ho(o,C,w))):h||(C=et(o,p),C!=null&&v.push(Ho(o,C,w)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var Lv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function ff(n){return(typeof n=="string"?n:""+n).replace(Lv,`
`).replace(Vv,"")}function ul(n,r,o){if(r=ff(r),ff(n)!==r&&o)throw Error(t(425))}function cl(){}var lc=null,uc=null;function cc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(n){return pf.resolve(null).then(n).catch(bv)}:hc;function bv(n){setTimeout(function(){throw n})}function dc(n,r){var o=r,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),In(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);In(r)}function Vr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function mf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Un="__reactFiber$"+Cs,qo="__reactProps$"+Cs,or="__reactContainer$"+Cs,fc="__reactEvents$"+Cs,Uv="__reactListeners$"+Cs,zv="__reactHandles$"+Cs;function Pi(n){var r=n[Un];if(r)return r;for(var o=n.parentNode;o;){if(r=o[or]||o[Un]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=mf(n);n!==null;){if(o=n[Un])return o;n=mf(n)}return r}n=o,o=n.parentNode}return null}function Wo(n){return n=n[Un]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[qo]||null}var pc=[],Ps=-1;function Mr(n){return{current:n}}function He(n){0>Ps||(n.current=pc[Ps],pc[Ps]=null,Ps--)}function Be(n,r){Ps++,pc[Ps]=n.current,n.current=r}var Fr={},Pt=Mr(Fr),Ht=Mr(!1),ki=Fr;function ks(n,r){var o=n.type.contextTypes;if(!o)return Fr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in o)h[p]=r[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function qt(n){return n=n.childContextTypes,n!=null}function dl(){He(Ht),He(Pt)}function gf(n,r,o){if(Pt.current!==Fr)throw Error(t(168));Be(Pt,r),Be(Ht,o)}function yf(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,Ve(n)||"Unknown",h));return ee({},o,u)}function fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,ki=Pt.current,Be(Pt,n),Be(Ht,Ht.current),!0}function vf(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=yf(n,r,ki),u.__reactInternalMemoizedMergedChildContext=n,He(Ht),He(Pt),Be(Pt,n)):He(Ht),Be(Ht,o)}var ar=null,pl=!1,mc=!1;function _f(n){ar===null?ar=[n]:ar.push(n)}function jv(n){pl=!0,_f(n)}function br(){if(!mc&&ar!==null){mc=!0;var n=0,r=Ae;try{var o=ar;for(Ae=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}ar=null,pl=!1}catch(h){throw ar!==null&&(ar=ar.slice(n+1)),ls(Ei,br),h}finally{Ae=r,mc=!1}}return null}var Ns=[],Ds=0,ml=null,gl=0,cn=[],hn=0,Ni=null,lr=1,ur="";function Di(n,r){Ns[Ds++]=gl,Ns[Ds++]=ml,ml=n,gl=r}function Ef(n,r,o){cn[hn++]=lr,cn[hn++]=ur,cn[hn++]=Ni,Ni=n;var u=lr;n=ur;var h=32-Mt(u)-1;u&=~(1<<h),o+=1;var p=32-Mt(r)+h;if(30<p){var v=h-h%5;p=(u&(1<<v)-1).toString(32),u>>=v,h-=v,lr=1<<32-Mt(r)+h|o<<h|u,ur=p+n}else lr=1<<p|o<<h|u,ur=n}function gc(n){n.return!==null&&(Di(n,1),Ef(n,1,0))}function yc(n){for(;n===ml;)ml=Ns[--Ds],Ns[Ds]=null,gl=Ns[--Ds],Ns[Ds]=null;for(;n===Ni;)Ni=cn[--hn],cn[hn]=null,ur=cn[--hn],cn[hn]=null,lr=cn[--hn],cn[hn]=null}var nn=null,rn=null,Ke=!1,Cn=null;function wf(n,r){var o=mn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Tf(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=Vr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Ni!==null?{id:lr,overflow:ur}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=mn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _c(n){if(Ke){var r=rn;if(r){var o=r;if(!Tf(n,r)){if(vc(n))throw Error(t(418));r=Vr(o.nextSibling);var u=nn;r&&Tf(n,r)?wf(u,o):(n.flags=n.flags&-4097|2,Ke=!1,nn=n)}}else{if(vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,nn=n}}}function If(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function yl(n){if(n!==nn)return!1;if(!Ke)return If(n),Ke=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!cc(n.type,n.memoizedProps)),r&&(r=rn)){if(vc(n))throw Sf(),Error(t(418));for(;r;)wf(n,r),r=Vr(r.nextSibling)}if(If(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){rn=Vr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?Vr(n.stateNode.nextSibling):null;return!0}function Sf(){for(var n=rn;n;)n=Vr(n.nextSibling)}function Os(){rn=nn=null,Ke=!1}function Ec(n){Cn===null?Cn=[n]:Cn.push(n)}var Bv=_e.ReactCurrentBatchConfig;function Ko(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var w=h.refs;v===null?delete w[p]:w[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function vl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Af(n){var r=n._init;return r(n._payload)}function Cf(n){function r(V,P){if(n){var M=V.deletions;M===null?(V.deletions=[P],V.flags|=16):M.push(P)}}function o(V,P){if(!n)return null;for(;P!==null;)r(V,P),P=P.sibling;return null}function u(V,P){for(V=new Map;P!==null;)P.key!==null?V.set(P.key,P):V.set(P.index,P),P=P.sibling;return V}function h(V,P){return V=Wr(V,P),V.index=0,V.sibling=null,V}function p(V,P,M){return V.index=M,n?(M=V.alternate,M!==null?(M=M.index,M<P?(V.flags|=2,P):M):(V.flags|=2,P)):(V.flags|=1048576,P)}function v(V){return n&&V.alternate===null&&(V.flags|=2),V}function w(V,P,M,W){return P===null||P.tag!==6?(P=hh(M,V.mode,W),P.return=V,P):(P=h(P,M),P.return=V,P)}function C(V,P,M,W){var se=M.type;return se===k?H(V,P,M.props.children,W,M.key):P!==null&&(P.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Rt&&Af(se)===P.type)?(W=h(P,M.props),W.ref=Ko(V,P,M),W.return=V,W):(W=Bl(M.type,M.key,M.props,null,V.mode,W),W.ref=Ko(V,P,M),W.return=V,W)}function F(V,P,M,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=dh(M,V.mode,W),P.return=V,P):(P=h(P,M.children||[]),P.return=V,P)}function H(V,P,M,W,se){return P===null||P.tag!==7?(P=Ui(M,V.mode,W,se),P.return=V,P):(P=h(P,M),P.return=V,P)}function q(V,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return P=hh(""+P,V.mode,M),P.return=V,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case qe:return M=Bl(P.type,P.key,P.props,null,V.mode,M),M.ref=Ko(V,null,P),M.return=V,M;case Te:return P=dh(P,V.mode,M),P.return=V,P;case Rt:var W=P._init;return q(V,W(P._payload),M)}if(Xn(P)||ae(P))return P=Ui(P,V.mode,M,null),P.return=V,P;vl(V,P)}return null}function B(V,P,M,W){var se=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:w(V,P,""+M,W);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:return M.key===se?C(V,P,M,W):null;case Te:return M.key===se?F(V,P,M,W):null;case Rt:return se=M._init,B(V,P,se(M._payload),W)}if(Xn(M)||ae(M))return se!==null?null:H(V,P,M,W,null);vl(V,M)}return null}function Z(V,P,M,W,se){if(typeof W=="string"&&W!==""||typeof W=="number")return V=V.get(M)||null,w(P,V,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case qe:return V=V.get(W.key===null?M:W.key)||null,C(P,V,W,se);case Te:return V=V.get(W.key===null?M:W.key)||null,F(P,V,W,se);case Rt:var le=W._init;return Z(V,P,M,le(W._payload),se)}if(Xn(W)||ae(W))return V=V.get(M)||null,H(P,V,W,se,null);vl(P,W)}return null}function re(V,P,M,W){for(var se=null,le=null,ue=P,fe=P=0,vt=null;ue!==null&&fe<M.length;fe++){ue.index>fe?(vt=ue,ue=null):vt=ue.sibling;var Le=B(V,ue,M[fe],W);if(Le===null){ue===null&&(ue=vt);break}n&&ue&&Le.alternate===null&&r(V,ue),P=p(Le,P,fe),le===null?se=Le:le.sibling=Le,le=Le,ue=vt}if(fe===M.length)return o(V,ue),Ke&&Di(V,fe),se;if(ue===null){for(;fe<M.length;fe++)ue=q(V,M[fe],W),ue!==null&&(P=p(ue,P,fe),le===null?se=ue:le.sibling=ue,le=ue);return Ke&&Di(V,fe),se}for(ue=u(V,ue);fe<M.length;fe++)vt=Z(ue,V,fe,M[fe],W),vt!==null&&(n&&vt.alternate!==null&&ue.delete(vt.key===null?fe:vt.key),P=p(vt,P,fe),le===null?se=vt:le.sibling=vt,le=vt);return n&&ue.forEach(function(Kr){return r(V,Kr)}),Ke&&Di(V,fe),se}function ie(V,P,M,W){var se=ae(M);if(typeof se!="function")throw Error(t(150));if(M=se.call(M),M==null)throw Error(t(151));for(var le=se=null,ue=P,fe=P=0,vt=null,Le=M.next();ue!==null&&!Le.done;fe++,Le=M.next()){ue.index>fe?(vt=ue,ue=null):vt=ue.sibling;var Kr=B(V,ue,Le.value,W);if(Kr===null){ue===null&&(ue=vt);break}n&&ue&&Kr.alternate===null&&r(V,ue),P=p(Kr,P,fe),le===null?se=Kr:le.sibling=Kr,le=Kr,ue=vt}if(Le.done)return o(V,ue),Ke&&Di(V,fe),se;if(ue===null){for(;!Le.done;fe++,Le=M.next())Le=q(V,Le.value,W),Le!==null&&(P=p(Le,P,fe),le===null?se=Le:le.sibling=Le,le=Le);return Ke&&Di(V,fe),se}for(ue=u(V,ue);!Le.done;fe++,Le=M.next())Le=Z(ue,V,fe,Le.value,W),Le!==null&&(n&&Le.alternate!==null&&ue.delete(Le.key===null?fe:Le.key),P=p(Le,P,fe),le===null?se=Le:le.sibling=Le,le=Le);return n&&ue.forEach(function(w_){return r(V,w_)}),Ke&&Di(V,fe),se}function tt(V,P,M,W){if(typeof M=="object"&&M!==null&&M.type===k&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case qe:e:{for(var se=M.key,le=P;le!==null;){if(le.key===se){if(se=M.type,se===k){if(le.tag===7){o(V,le.sibling),P=h(le,M.props.children),P.return=V,V=P;break e}}else if(le.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Rt&&Af(se)===le.type){o(V,le.sibling),P=h(le,M.props),P.ref=Ko(V,le,M),P.return=V,V=P;break e}o(V,le);break}else r(V,le);le=le.sibling}M.type===k?(P=Ui(M.props.children,V.mode,W,M.key),P.return=V,V=P):(W=Bl(M.type,M.key,M.props,null,V.mode,W),W.ref=Ko(V,P,M),W.return=V,V=W)}return v(V);case Te:e:{for(le=M.key;P!==null;){if(P.key===le)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){o(V,P.sibling),P=h(P,M.children||[]),P.return=V,V=P;break e}else{o(V,P);break}else r(V,P);P=P.sibling}P=dh(M,V.mode,W),P.return=V,V=P}return v(V);case Rt:return le=M._init,tt(V,P,le(M._payload),W)}if(Xn(M))return re(V,P,M,W);if(ae(M))return ie(V,P,M,W);vl(V,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,P!==null&&P.tag===6?(o(V,P.sibling),P=h(P,M),P.return=V,V=P):(o(V,P),P=hh(M,V.mode,W),P.return=V,V=P),v(V)):o(V,P)}return tt}var xs=Cf(!0),Rf=Cf(!1),_l=Mr(null),El=null,Ls=null,wc=null;function Tc(){wc=Ls=El=null}function Ic(n){var r=_l.current;He(_l),n._currentValue=r}function Sc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Vs(n,r){El=n,wc=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Wt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(wc!==n)if(n={context:n,memoizedValue:r,next:null},Ls===null){if(El===null)throw Error(t(308));Ls=n,El.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return r}var Oi=null;function Ac(n){Oi===null?Oi=[n]:Oi.push(n)}function Pf(n,r,o,u){var h=r.interleaved;return h===null?(o.next=o,Ac(r)):(o.next=h.next,h.next=o),r.interleaved=o,cr(n,u)}function cr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ur=!1;function Cc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function zr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Oe&2){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,cr(n,o)}return h=u.interleaved,h===null?(r.next=r,Ac(u)):(r.next=h.next,h.next=r),u.interleaved=r,cr(n,o)}function wl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,kr(n,o)}}function Nf(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?h=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?h=p=r:p=p.next=r}else h=p=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Tl(n,r,o,u){var h=n.updateQueue;Ur=!1;var p=h.firstBaseUpdate,v=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var C=w,F=C.next;C.next=null,v===null?p=F:v.next=F,v=C;var H=n.alternate;H!==null&&(H=H.updateQueue,w=H.lastBaseUpdate,w!==v&&(w===null?H.firstBaseUpdate=F:w.next=F,H.lastBaseUpdate=C))}if(p!==null){var q=h.baseState;v=0,H=F=C=null,w=p;do{var B=w.lane,Z=w.eventTime;if((u&B)===B){H!==null&&(H=H.next={eventTime:Z,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var re=n,ie=w;switch(B=r,Z=o,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){q=re.call(Z,q,B);break e}q=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,B=typeof re=="function"?re.call(Z,q,B):re,B==null)break e;q=ee({},q,B);break e;case 2:Ur=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,B=h.effects,B===null?h.effects=[w]:B.push(w))}else Z={eventTime:Z,lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},H===null?(F=H=Z,C=q):H=H.next=Z,v|=B;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;B=w,w=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);if(H===null&&(C=q),h.baseState=C,h.firstBaseUpdate=F,h.lastBaseUpdate=H,r=h.shared.interleaved,r!==null){h=r;do v|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Vi|=v,n.lanes=v,n.memoizedState=q}}function Df(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Go={},zn=Mr(Go),Qo=Mr(Go),Yo=Mr(Go);function xi(n){if(n===Go)throw Error(t(174));return n}function Rc(n,r){switch(Be(Yo,r),Be(Qo,n),Be(zn,Go),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}He(zn),Be(zn,r)}function Ms(){He(zn),He(Qo),He(Yo)}function Of(n){xi(Yo.current);var r=xi(zn.current),o=lt(r,n.type);r!==o&&(Be(Qo,n),Be(zn,o))}function Pc(n){Qo.current===n&&(He(zn),He(Qo))}var Ge=Mr(0);function Il(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var kc=[];function Nc(){for(var n=0;n<kc.length;n++)kc[n]._workInProgressVersionPrimary=null;kc.length=0}var Sl=_e.ReactCurrentDispatcher,Dc=_e.ReactCurrentBatchConfig,Li=0,Qe=null,ct=null,gt=null,Al=!1,Xo=!1,Jo=0,$v=0;function kt(){throw Error(t(321))}function Oc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!An(n[o],r[o]))return!1;return!0}function xc(n,r,o,u,h,p){if(Li=p,Qe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Sl.current=n===null||n.memoizedState===null?Kv:Gv,n=o(u,h),Xo){p=0;do{if(Xo=!1,Jo=0,25<=p)throw Error(t(301));p+=1,gt=ct=null,r.updateQueue=null,Sl.current=Qv,n=o(u,h)}while(Xo)}if(Sl.current=Pl,r=ct!==null&&ct.next!==null,Li=0,gt=ct=Qe=null,Al=!1,r)throw Error(t(300));return n}function Lc(){var n=Jo!==0;return Jo=0,n}function jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Qe.memoizedState=gt=n:gt=gt.next=n,gt}function fn(){if(ct===null){var n=Qe.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=gt===null?Qe.memoizedState:gt.next;if(r!==null)gt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},gt===null?Qe.memoizedState=gt=n:gt=gt.next=n}return gt}function Zo(n,r){return typeof r=="function"?r(n):r}function Vc(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=ct,h=u.baseQueue,p=o.pending;if(p!==null){if(h!==null){var v=h.next;h.next=p.next,p.next=v}u.baseQueue=h=p,o.pending=null}if(h!==null){p=h.next,u=u.baseState;var w=v=null,C=null,F=p;do{var H=F.lane;if((Li&H)===H)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),u=F.hasEagerState?F.eagerState:n(u,F.action);else{var q={lane:H,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(w=C=q,v=u):C=C.next=q,Qe.lanes|=H,Vi|=H}F=F.next}while(F!==null&&F!==p);C===null?v=u:C.next=w,An(u,r.memoizedState)||(Wt=!0),r.memoizedState=u,r.baseState=v,r.baseQueue=C,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do p=h.lane,Qe.lanes|=p,Vi|=p,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Mc(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,p=r.memoizedState;if(h!==null){o.pending=null;var v=h=h.next;do p=n(p,v.action),v=v.next;while(v!==h);An(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function xf(){}function Lf(n,r){var o=Qe,u=fn(),h=r(),p=!An(u.memoizedState,h);if(p&&(u.memoizedState=h,Wt=!0),u=u.queue,Fc(Ff.bind(null,o,u,n),[n]),u.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(o.flags|=2048,ea(9,Mf.bind(null,o,u,h,r),void 0,null),yt===null)throw Error(t(349));Li&30||Vf(o,r,h)}return h}function Vf(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Qe.updateQueue,r===null?(r={lastEffect:null,stores:null},Qe.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Mf(n,r,o,u){r.value=o,r.getSnapshot=u,bf(r)&&Uf(n)}function Ff(n,r,o){return o(function(){bf(r)&&Uf(n)})}function bf(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!An(n,o)}catch{return!0}}function Uf(n){var r=cr(n,1);r!==null&&Nn(r,n,1,-1)}function zf(n){var r=jn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:n},r.queue=n,n=n.dispatch=Wv.bind(null,Qe,n),[r.memoizedState,n]}function ea(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Qe.updateQueue,r===null?(r={lastEffect:null,stores:null},Qe.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function jf(){return fn().memoizedState}function Cl(n,r,o,u){var h=jn();Qe.flags|=n,h.memoizedState=ea(1|r,o,void 0,u===void 0?null:u)}function Rl(n,r,o,u){var h=fn();u=u===void 0?null:u;var p=void 0;if(ct!==null){var v=ct.memoizedState;if(p=v.destroy,u!==null&&Oc(u,v.deps)){h.memoizedState=ea(r,o,p,u);return}}Qe.flags|=n,h.memoizedState=ea(1|r,o,p,u)}function Bf(n,r){return Cl(8390656,8,n,r)}function Fc(n,r){return Rl(2048,8,n,r)}function $f(n,r){return Rl(4,2,n,r)}function Hf(n,r){return Rl(4,4,n,r)}function qf(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Wf(n,r,o){return o=o!=null?o.concat([n]):null,Rl(4,4,qf.bind(null,r,n),o)}function bc(){}function Kf(n,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Oc(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Gf(n,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Oc(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Qf(n,r,o){return Li&21?(An(o,r)||(o=Ii(),Qe.lanes|=o,Vi|=o,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=o)}function Hv(n,r){var o=Ae;Ae=o!==0&&4>o?o:4,n(!0);var u=Dc.transition;Dc.transition={};try{n(!1),r()}finally{Ae=o,Dc.transition=u}}function Yf(){return fn().memoizedState}function qv(n,r,o){var u=Hr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Xf(n))Jf(r,o);else if(o=Pf(n,r,o,u),o!==null){var h=Ut();Nn(o,n,u,h),Zf(o,r,u)}}function Wv(n,r,o){var u=Hr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xf(n))Jf(r,h);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,w=p(v,o);if(h.hasEagerState=!0,h.eagerState=w,An(w,v)){var C=r.interleaved;C===null?(h.next=h,Ac(r)):(h.next=C.next,C.next=h),r.interleaved=h;return}}catch{}finally{}o=Pf(n,r,h,u),o!==null&&(h=Ut(),Nn(o,n,u,h),Zf(o,r,u))}}function Xf(n){var r=n.alternate;return n===Qe||r!==null&&r===Qe}function Jf(n,r){Xo=Al=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Zf(n,r,o){if(o&4194240){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,kr(n,o)}}var Pl={readContext:dn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Kv={readContext:dn,useCallback:function(n,r){return jn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:Bf,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Cl(4194308,4,qf.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Cl(4,2,n,r)},useMemo:function(n,r){var o=jn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=jn();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=qv.bind(null,Qe,n),[u.memoizedState,n]},useRef:function(n){var r=jn();return n={current:n},r.memoizedState=n},useState:zf,useDebugValue:bc,useDeferredValue:function(n){return jn().memoizedState=n},useTransition:function(){var n=zf(!1),r=n[0];return n=Hv.bind(null,n[1]),jn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Qe,h=jn();if(Ke){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),yt===null)throw Error(t(349));Li&30||Vf(u,r,o)}h.memoizedState=o;var p={value:o,getSnapshot:r};return h.queue=p,Bf(Ff.bind(null,u,p,n),[n]),u.flags|=2048,ea(9,Mf.bind(null,u,p,o,r),void 0,null),o},useId:function(){var n=jn(),r=yt.identifierPrefix;if(Ke){var o=ur,u=lr;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Jo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=$v++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Gv={readContext:dn,useCallback:Kf,useContext:dn,useEffect:Fc,useImperativeHandle:Wf,useInsertionEffect:$f,useLayoutEffect:Hf,useMemo:Gf,useReducer:Vc,useRef:jf,useState:function(){return Vc(Zo)},useDebugValue:bc,useDeferredValue:function(n){var r=fn();return Qf(r,ct.memoizedState,n)},useTransition:function(){var n=Vc(Zo)[0],r=fn().memoizedState;return[n,r]},useMutableSource:xf,useSyncExternalStore:Lf,useId:Yf,unstable_isNewReconciler:!1},Qv={readContext:dn,useCallback:Kf,useContext:dn,useEffect:Fc,useImperativeHandle:Wf,useInsertionEffect:$f,useLayoutEffect:Hf,useMemo:Gf,useReducer:Mc,useRef:jf,useState:function(){return Mc(Zo)},useDebugValue:bc,useDeferredValue:function(n){var r=fn();return ct===null?r.memoizedState=n:Qf(r,ct.memoizedState,n)},useTransition:function(){var n=Mc(Zo)[0],r=fn().memoizedState;return[n,r]},useMutableSource:xf,useSyncExternalStore:Lf,useId:Yf,unstable_isNewReconciler:!1};function Rn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Uc(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:ee({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var kl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Ut(),h=Hr(n),p=hr(u,h);p.payload=r,o!=null&&(p.callback=o),r=zr(n,p,h),r!==null&&(Nn(r,n,h,u),wl(r,n,h))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Ut(),h=Hr(n),p=hr(u,h);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=zr(n,p,h),r!==null&&(Nn(r,n,h,u),wl(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Ut(),u=Hr(n),h=hr(o,u);h.tag=2,r!=null&&(h.callback=r),r=zr(n,h,u),r!==null&&(Nn(r,n,u,o),wl(r,n,u))}};function ep(n,r,o,u,h,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!zo(o,u)||!zo(h,p):!0}function tp(n,r,o){var u=!1,h=Fr,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(h=qt(r)?ki:Pt.current,u=r.contextTypes,p=(u=u!=null)?ks(n,h):Fr),r=new r(o,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=kl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=p),r}function np(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&kl.enqueueReplaceState(r,r.state,null)}function zc(n,r,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Cc(n);var p=r.contextType;typeof p=="object"&&p!==null?h.context=dn(p):(p=qt(r)?ki:Pt.current,h.context=ks(n,p)),h.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Uc(n,r,p,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&kl.enqueueReplaceState(h,h.state,null),Tl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,r){try{var o="",u=r;do o+=Ee(u),u=u.return;while(u);var h=o}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:h,digest:null}}function jc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Bc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Yv=typeof WeakMap=="function"?WeakMap:Map;function rp(n,r,o){o=hr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Ml||(Ml=!0,rh=u),Bc(n,r)},o}function ip(n,r,o){o=hr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Bc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Bc(n,r),typeof u!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),o}function sp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Yv;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),n=c_.bind(null,n,r,o),r.then(n,n))}function op(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function ap(n,r,o,u,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=hr(-1,1),r.tag=2,zr(o,r,1))),o.lanes|=1),n)}var Xv=_e.ReactCurrentOwner,Wt=!1;function bt(n,r,o,u){r.child=n===null?Rf(r,null,o,u):xs(r,n.child,o,u)}function lp(n,r,o,u,h){o=o.render;var p=r.ref;return Vs(r,h),u=xc(n,r,o,u,p,h),o=Lc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,dr(n,r,h)):(Ke&&o&&gc(r),r.flags|=1,bt(n,r,u,h),r.child)}function up(n,r,o,u,h){if(n===null){var p=o.type;return typeof p=="function"&&!ch(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,cp(n,r,p,u,h)):(n=Bl(o.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&h)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:zo,o(v,u)&&n.ref===r.ref)return dr(n,r,h)}return r.flags|=1,n=Wr(p,u),n.ref=r.ref,n.return=r,r.child=n}function cp(n,r,o,u,h){if(n!==null){var p=n.memoizedProps;if(zo(p,u)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=u=p,(n.lanes&h)!==0)n.flags&131072&&(Wt=!0);else return r.lanes=n.lanes,dr(n,r,h)}return $c(n,r,o,u,h)}function hp(n,r,o){var u=r.pendingProps,h=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Us,sn),sn|=o;else{if(!(o&1073741824))return n=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Be(Us,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Be(Us,sn),sn|=u}else p!==null?(u=p.baseLanes|o,r.memoizedState=null):u=o,Be(Us,sn),sn|=u;return bt(n,r,h,o),r.child}function dp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function $c(n,r,o,u,h){var p=qt(o)?ki:Pt.current;return p=ks(r,p),Vs(r,h),o=xc(n,r,o,u,p,h),u=Lc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,dr(n,r,h)):(Ke&&u&&gc(r),r.flags|=1,bt(n,r,o,h),r.child)}function fp(n,r,o,u,h){if(qt(o)){var p=!0;fl(r)}else p=!1;if(Vs(r,h),r.stateNode===null)Dl(n,r),tp(r,o,u),zc(r,o,u,h),u=!0;else if(n===null){var v=r.stateNode,w=r.memoizedProps;v.props=w;var C=v.context,F=o.contextType;typeof F=="object"&&F!==null?F=dn(F):(F=qt(o)?ki:Pt.current,F=ks(r,F));var H=o.getDerivedStateFromProps,q=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function";q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==u||C!==F)&&np(r,v,u,F),Ur=!1;var B=r.memoizedState;v.state=B,Tl(r,u,v,h),C=r.memoizedState,w!==u||B!==C||Ht.current||Ur?(typeof H=="function"&&(Uc(r,o,H,u),C=r.memoizedState),(w=Ur||ep(r,o,w,u,B,C,F))?(q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=C),v.props=u,v.state=C,v.context=F,u=w):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{v=r.stateNode,kf(n,r),w=r.memoizedProps,F=r.type===r.elementType?w:Rn(r.type,w),v.props=F,q=r.pendingProps,B=v.context,C=o.contextType,typeof C=="object"&&C!==null?C=dn(C):(C=qt(o)?ki:Pt.current,C=ks(r,C));var Z=o.getDerivedStateFromProps;(H=typeof Z=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==q||B!==C)&&np(r,v,u,C),Ur=!1,B=r.memoizedState,v.state=B,Tl(r,u,v,h);var re=r.memoizedState;w!==q||B!==re||Ht.current||Ur?(typeof Z=="function"&&(Uc(r,o,Z,u),re=r.memoizedState),(F=Ur||ep(r,o,F,u,B,re,C)||!1)?(H||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(u,re,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(u,re,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||w===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=re),v.props=u,v.state=re,v.context=C,u=F):(typeof v.componentDidUpdate!="function"||w===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),u=!1)}return Hc(n,r,o,u,p,h)}function Hc(n,r,o,u,h,p){dp(n,r);var v=(r.flags&128)!==0;if(!u&&!v)return h&&vf(r,o,!1),dr(n,r,p);u=r.stateNode,Xv.current=r;var w=v&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&v?(r.child=xs(r,n.child,null,p),r.child=xs(r,null,w,p)):bt(n,r,w,p),r.memoizedState=u.state,h&&vf(r,o,!0),r.child}function pp(n){var r=n.stateNode;r.pendingContext?gf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&gf(n,r.context,!1),Rc(n,r.containerInfo)}function mp(n,r,o,u,h){return Os(),Ec(h),r.flags|=256,bt(n,r,o,u),r.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Wc(n){return{baseLanes:n,cachePool:null,transitions:null}}function gp(n,r,o){var u=r.pendingProps,h=Ge.current,p=!1,v=(r.flags&128)!==0,w;if((w=v)||(w=n!==null&&n.memoizedState===null?!1:(h&2)!==0),w?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Be(Ge,h&1),n===null)return _c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=u.children,n=u.fallback,p?(u=r.mode,p=r.child,v={mode:"hidden",children:v},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=v):p=$l(v,u,0,null),n=Ui(n,u,o,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Wc(o),r.memoizedState=qc,n):Kc(r,v));if(h=n.memoizedState,h!==null&&(w=h.dehydrated,w!==null))return Jv(n,r,v,u,w,h,o);if(p){p=u.fallback,v=r.mode,h=n.child,w=h.sibling;var C={mode:"hidden",children:u.children};return!(v&1)&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=C,r.deletions=null):(u=Wr(h,C),u.subtreeFlags=h.subtreeFlags&14680064),w!==null?p=Wr(w,p):(p=Ui(p,v,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,v=n.child.memoizedState,v=v===null?Wc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~o,r.memoizedState=qc,u}return p=n.child,n=p.sibling,u=Wr(p,{mode:"visible",children:u.children}),!(r.mode&1)&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Kc(n,r){return r=$l({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Nl(n,r,o,u){return u!==null&&Ec(u),xs(r,n.child,null,o),n=Kc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Jv(n,r,o,u,h,p,v){if(o)return r.flags&256?(r.flags&=-257,u=jc(Error(t(422))),Nl(n,r,v,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=u.fallback,h=r.mode,u=$l({mode:"visible",children:u.children},h,0,null),p=Ui(p,h,v,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,r.mode&1&&xs(r,n.child,null,v),r.child.memoizedState=Wc(v),r.memoizedState=qc,p);if(!(r.mode&1))return Nl(n,r,v,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(t(419)),u=jc(p,u,void 0),Nl(n,r,v,u)}if(w=(v&n.childLanes)!==0,Wt||w){if(u=yt,u!==null){switch(v&-v){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(u.suspendedLanes|v)?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,cr(n,h),Nn(u,n,h,-1))}return uh(),u=jc(Error(t(421))),Nl(n,r,v,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=h_.bind(null,n),h._reactRetry=r,null):(n=p.treeContext,rn=Vr(h.nextSibling),nn=r,Ke=!0,Cn=null,n!==null&&(cn[hn++]=lr,cn[hn++]=ur,cn[hn++]=Ni,lr=n.id,ur=n.overflow,Ni=r),r=Kc(r,u.children),r.flags|=4096,r)}function yp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Sc(n.return,r,o)}function Gc(n,r,o,u,h){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function vp(n,r,o){var u=r.pendingProps,h=u.revealOrder,p=u.tail;if(bt(n,r,u.children,o),u=Ge.current,u&2)u=u&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yp(n,o,r);else if(n.tag===19)yp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Be(Ge,u),!(r.mode&1))r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)n=o.alternate,n!==null&&Il(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Gc(r,!1,h,o,p);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Il(n)===null){r.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Gc(r,!0,o,null,p);break;case"together":Gc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Dl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function dr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Vi|=r.lanes,!(o&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Wr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Wr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Zv(n,r,o){switch(r.tag){case 3:pp(r),Os();break;case 5:Of(r);break;case 1:qt(r.type)&&fl(r);break;case 4:Rc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Be(_l,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Be(Ge,Ge.current&1),r.flags|=128,null):o&r.child.childLanes?gp(n,r,o):(Be(Ge,Ge.current&1),n=dr(n,r,o),n!==null?n.sibling:null);Be(Ge,Ge.current&1);break;case 19:if(u=(o&r.childLanes)!==0,n.flags&128){if(u)return vp(n,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Be(Ge,Ge.current),u)break;return null;case 22:case 23:return r.lanes=0,hp(n,r,o)}return dr(n,r,o)}var _p,Qc,Ep,wp;_p=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Qc=function(){},Ep=function(n,r,o,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,xi(zn.current);var p=null;switch(o){case"input":h=di(n,h),u=di(n,u),p=[];break;case"select":h=ee({},h,{value:void 0}),u=ee({},u,{value:void 0}),p=[];break;case"textarea":h=mo(n,h),u=mo(n,u),p=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=cl)}wo(o,u);var v;o=null;for(F in h)if(!u.hasOwnProperty(F)&&h.hasOwnProperty(F)&&h[F]!=null)if(F==="style"){var w=h[F];for(v in w)w.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in u){var C=u[F];if(w=h!=null?h[F]:void 0,u.hasOwnProperty(F)&&C!==w&&(C!=null||w!=null))if(F==="style")if(w){for(v in w)!w.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in C)C.hasOwnProperty(v)&&w[v]!==C[v]&&(o||(o={}),o[v]=C[v])}else o||(p||(p=[]),p.push(F,o)),o=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,w=w?w.__html:void 0,C!=null&&w!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&$e("scroll",n),p||w===C||(p=[])):(p=p||[]).push(F,C))}o&&(p=p||[]).push("style",o);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},wp=function(n,r,o,u){o!==u&&(r.flags|=4)};function ta(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Nt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function e_(n,r,o){var u=r.pendingProps;switch(yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(r),null;case 1:return qt(r.type)&&dl(),Nt(r),null;case 3:return u=r.stateNode,Ms(),He(Ht),He(Pt),Nc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(yl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Cn!==null&&(oh(Cn),Cn=null))),Qc(n,r),Nt(r),null;case 5:Pc(r);var h=xi(Yo.current);if(o=r.type,n!==null&&r.stateNode!=null)Ep(n,r,o,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Nt(r),null}if(n=xi(zn.current),yl(r)){u=r.stateNode,o=r.type;var p=r.memoizedProps;switch(u[Un]=r,u[qo]=p,n=(r.mode&1)!==0,o){case"dialog":$e("cancel",u),$e("close",u);break;case"iframe":case"object":case"embed":$e("load",u);break;case"video":case"audio":for(h=0;h<Bo.length;h++)$e(Bo[h],u);break;case"source":$e("error",u);break;case"img":case"image":case"link":$e("error",u),$e("load",u);break;case"details":$e("toggle",u);break;case"input":Xi(u,p),$e("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},$e("invalid",u);break;case"textarea":Zi(u,p),$e("invalid",u)}wo(o,p),h=null;for(var v in p)if(p.hasOwnProperty(v)){var w=p[v];v==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&ul(u.textContent,w,n),h=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&ul(u.textContent,w,n),h=["children",""+w]):a.hasOwnProperty(v)&&w!=null&&v==="onScroll"&&$e("scroll",u)}switch(o){case"input":Yn(u),Va(u,p,!0);break;case"textarea":Yn(u),go(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=cl)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{v=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=v.createElement(o,{is:u.is}):(n=v.createElement(o),o==="select"&&(v=n,u.multiple?v.multiple=!0:u.size&&(v.size=u.size))):n=v.createElementNS(n,o),n[Un]=r,n[qo]=u,_p(n,r,!1,!1),r.stateNode=n;e:{switch(v=To(o,u),o){case"dialog":$e("cancel",n),$e("close",n),h=u;break;case"iframe":case"object":case"embed":$e("load",n),h=u;break;case"video":case"audio":for(h=0;h<Bo.length;h++)$e(Bo[h],n);h=u;break;case"source":$e("error",n),h=u;break;case"img":case"image":case"link":$e("error",n),$e("load",n),h=u;break;case"details":$e("toggle",n),h=u;break;case"input":Xi(n,u),h=di(n,u),$e("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=ee({},u,{value:void 0}),$e("invalid",n);break;case"textarea":Zi(n,u),h=mo(n,u),$e("invalid",n);break;default:h=u}wo(o,h),w=h;for(p in w)if(w.hasOwnProperty(p)){var C=w[p];p==="style"?_o(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&yo(n,C)):p==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&Sr(n,C):typeof C=="number"&&Sr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?C!=null&&p==="onScroll"&&$e("scroll",n):C!=null&&ye(n,p,C,v))}switch(o){case"input":Yn(n),Va(n,u,!1);break;case"textarea":Yn(n),go(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Me(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?Jn(n,!!u.multiple,p,!1):u.defaultValue!=null&&Jn(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=cl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Nt(r),null;case 6:if(n&&r.stateNode!=null)wp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=xi(Yo.current),xi(zn.current),yl(r)){if(u=r.stateNode,o=r.memoizedProps,u[Un]=r,(p=u.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:ul(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(u.nodeValue,o,(n.mode&1)!==0)}p&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Un]=r,r.stateNode=u}return Nt(r),null;case 13:if(He(Ge),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&rn!==null&&r.mode&1&&!(r.flags&128))Sf(),Os(),r.flags|=98560,p=!1;else if(p=yl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Un]=r}else Os(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Nt(r),p=!1}else Cn!==null&&(oh(Cn),Cn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,r.mode&1&&(n===null||Ge.current&1?ht===0&&(ht=3):uh())),r.updateQueue!==null&&(r.flags|=4),Nt(r),null);case 4:return Ms(),Qc(n,r),n===null&&$o(r.stateNode.containerInfo),Nt(r),null;case 10:return Ic(r.type._context),Nt(r),null;case 17:return qt(r.type)&&dl(),Nt(r),null;case 19:if(He(Ge),p=r.memoizedState,p===null)return Nt(r),null;if(u=(r.flags&128)!==0,v=p.rendering,v===null)if(u)ta(p,!1);else{if(ht!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(v=Il(n),v!==null){for(r.flags|=128,ta(p,!1),u=v.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)p=o,n=u,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Be(Ge,Ge.current&1|2),r.child}n=n.sibling}p.tail!==null&&je()>zs&&(r.flags|=128,u=!0,ta(p,!1),r.lanes=4194304)}else{if(!u)if(n=Il(v),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ta(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ke)return Nt(r),null}else 2*je()-p.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,u=!0,ta(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(o=p.last,o!==null?o.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=je(),r.sibling=null,o=Ge.current,Be(Ge,u?o&1|2:o&1),r):(Nt(r),null);case 22:case 23:return lh(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&r.mode&1?sn&1073741824&&(Nt(r),r.subtreeFlags&6&&(r.flags|=8192)):Nt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function t_(n,r){switch(yc(r),r.tag){case 1:return qt(r.type)&&dl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ms(),He(Ht),He(Pt),Nc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Pc(r),null;case 13:if(He(Ge),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Os()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ge),null;case 4:return Ms(),null;case 10:return Ic(r.type._context),null;case 22:case 23:return lh(),null;case 24:return null;default:return null}}var Ol=!1,Dt=!1,n_=typeof WeakSet=="function"?WeakSet:Set,ne=null;function bs(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xe(n,r,u)}else o.current=null}function Yc(n,r,o){try{o()}catch(u){Xe(n,r,u)}}var Tp=!1;function r_(n,r){if(lc=Or,n=Zd(),ec(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,w=-1,C=-1,F=0,H=0,q=n,B=null;t:for(;;){for(var Z;q!==o||h!==0&&q.nodeType!==3||(w=v+h),q!==p||u!==0&&q.nodeType!==3||(C=v+u),q.nodeType===3&&(v+=q.nodeValue.length),(Z=q.firstChild)!==null;)B=q,q=Z;for(;;){if(q===n)break t;if(B===o&&++F===h&&(w=v),B===p&&++H===u&&(C=v),(Z=q.nextSibling)!==null)break;q=B,B=q.parentNode}q=Z}o=w===-1||C===-1?null:{start:w,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(uc={focusedElem:n,selectionRange:o},Or=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,tt=re.memoizedState,V=r.stateNode,P=V.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Rn(r.type,ie),tt);V.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(W){Xe(r,r.return,W)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=Tp,Tp=!1,re}function na(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var p=h.destroy;h.destroy=void 0,p!==void 0&&Yc(r,o,p)}h=h.next}while(h!==u)}}function xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Xc(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Ip(n){var r=n.alternate;r!==null&&(n.alternate=null,Ip(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Un],delete r[qo],delete r[fc],delete r[Uv],delete r[zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sp(n){return n.tag===5||n.tag===3||n.tag===4}function Ap(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=cl));else if(u!==4&&(n=n.child,n!==null))for(Jc(n,r,o),n=n.sibling;n!==null;)Jc(n,r,o),n=n.sibling}function Zc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Zc(n,r,o),n=n.sibling;n!==null;)Zc(n,r,o),n=n.sibling}var Tt=null,Pn=!1;function jr(n,r,o){for(o=o.child;o!==null;)Cp(n,r,o),o=o.sibling}function Cp(n,r,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(wi,o)}catch{}switch(o.tag){case 5:Dt||bs(o,r);case 6:var u=Tt,h=Pn;Tt=null,jr(n,r,o),Tt=u,Pn=h,Tt!==null&&(Pn?(n=Tt,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tt.removeChild(o.stateNode));break;case 18:Tt!==null&&(Pn?(n=Tt,o=o.stateNode,n.nodeType===8?dc(n.parentNode,o):n.nodeType===1&&dc(n,o),In(n)):dc(Tt,o.stateNode));break;case 4:u=Tt,h=Pn,Tt=o.stateNode.containerInfo,Pn=!0,jr(n,r,o),Tt=u,Pn=h;break;case 0:case 11:case 14:case 15:if(!Dt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var p=h,v=p.destroy;p=p.tag,v!==void 0&&(p&2||p&4)&&Yc(o,r,v),h=h.next}while(h!==u)}jr(n,r,o);break;case 1:if(!Dt&&(bs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(w){Xe(o,r,w)}jr(n,r,o);break;case 21:jr(n,r,o);break;case 22:o.mode&1?(Dt=(u=Dt)||o.memoizedState!==null,jr(n,r,o),Dt=u):jr(n,r,o);break;default:jr(n,r,o)}}function Rp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new n_),r.forEach(function(u){var h=d_.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function kn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var p=n,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 5:Tt=w.stateNode,Pn=!1;break e;case 3:Tt=w.stateNode.containerInfo,Pn=!0;break e;case 4:Tt=w.stateNode.containerInfo,Pn=!0;break e}w=w.return}if(Tt===null)throw Error(t(160));Cp(p,v,h),Tt=null,Pn=!1;var C=h.alternate;C!==null&&(C.return=null),h.return=null}catch(F){Xe(h,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Pp(r,n),r=r.sibling}function Pp(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(kn(r,n),Bn(n),u&4){try{na(3,n,n.return),xl(3,n)}catch(ie){Xe(n,n.return,ie)}try{na(5,n,n.return)}catch(ie){Xe(n,n.return,ie)}}break;case 1:kn(r,n),Bn(n),u&512&&o!==null&&bs(o,o.return);break;case 5:if(kn(r,n),Bn(n),u&512&&o!==null&&bs(o,o.return),n.flags&32){var h=n.stateNode;try{Sr(h,"")}catch(ie){Xe(n,n.return,ie)}}if(u&4&&(h=n.stateNode,h!=null)){var p=n.memoizedProps,v=o!==null?o.memoizedProps:p,w=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&fo(h,p),To(w,v);var F=To(w,p);for(v=0;v<C.length;v+=2){var H=C[v],q=C[v+1];H==="style"?_o(h,q):H==="dangerouslySetInnerHTML"?yo(h,q):H==="children"?Sr(h,q):ye(h,H,q,F)}switch(w){case"input":po(h,p);break;case"textarea":es(h,p);break;case"select":var B=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?Jn(h,!!p.multiple,Z,!1):B!==!!p.multiple&&(p.defaultValue!=null?Jn(h,!!p.multiple,p.defaultValue,!0):Jn(h,!!p.multiple,p.multiple?[]:"",!1))}h[qo]=p}catch(ie){Xe(n,n.return,ie)}}break;case 6:if(kn(r,n),Bn(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,p=n.memoizedProps;try{h.nodeValue=p}catch(ie){Xe(n,n.return,ie)}}break;case 3:if(kn(r,n),Bn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{In(r.containerInfo)}catch(ie){Xe(n,n.return,ie)}break;case 4:kn(r,n),Bn(n);break;case 13:kn(r,n),Bn(n),h=n.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(nh=je())),u&4&&Rp(n);break;case 22:if(H=o!==null&&o.memoizedState!==null,n.mode&1?(Dt=(F=Dt)||H,kn(r,n),Dt=F):kn(r,n),Bn(n),u&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!H&&n.mode&1)for(ne=n,H=n.child;H!==null;){for(q=ne=H;ne!==null;){switch(B=ne,Z=B.child,B.tag){case 0:case 11:case 14:case 15:na(4,B,B.return);break;case 1:bs(B,B.return);var re=B.stateNode;if(typeof re.componentWillUnmount=="function"){u=B,o=B.return;try{r=u,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Xe(u,o,ie)}}break;case 5:bs(B,B.return);break;case 22:if(B.memoizedState!==null){Dp(q);continue}}Z!==null?(Z.return=B,ne=Z):Dp(q)}H=H.sibling}e:for(H=null,q=n;;){if(q.tag===5){if(H===null){H=q;try{h=q.stateNode,F?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=q.stateNode,C=q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,w.style.display=vo("display",v))}catch(ie){Xe(n,n.return,ie)}}}else if(q.tag===6){if(H===null)try{q.stateNode.nodeValue=F?"":q.memoizedProps}catch(ie){Xe(n,n.return,ie)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===n)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===n)break e;for(;q.sibling===null;){if(q.return===null||q.return===n)break e;H===q&&(H=null),q=q.return}H===q&&(H=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:kn(r,n),Bn(n),u&4&&Rp(n);break;case 21:break;default:kn(r,n),Bn(n)}}function Bn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Sp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Sr(h,""),u.flags&=-33);var p=Ap(n);Zc(n,p,h);break;case 3:case 4:var v=u.stateNode.containerInfo,w=Ap(n);Jc(n,w,v);break;default:throw Error(t(161))}}catch(C){Xe(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function i_(n,r,o){ne=n,kp(n)}function kp(n,r,o){for(var u=(n.mode&1)!==0;ne!==null;){var h=ne,p=h.child;if(h.tag===22&&u){var v=h.memoizedState!==null||Ol;if(!v){var w=h.alternate,C=w!==null&&w.memoizedState!==null||Dt;w=Ol;var F=Dt;if(Ol=v,(Dt=C)&&!F)for(ne=h;ne!==null;)v=ne,C=v.child,v.tag===22&&v.memoizedState!==null?Op(h):C!==null?(C.return=v,ne=C):Op(h);for(;p!==null;)ne=p,kp(p),p=p.sibling;ne=h,Ol=w,Dt=F}Np(n)}else h.subtreeFlags&8772&&p!==null?(p.return=h,ne=p):Np(n)}}function Np(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Dt||xl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Dt)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Rn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Df(r,p,u);break;case 3:var v=r.updateQueue;if(v!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Df(r,v,o)}break;case 5:var w=r.stateNode;if(o===null&&r.flags&4){o=w;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var H=F.memoizedState;if(H!==null){var q=H.dehydrated;q!==null&&In(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dt||r.flags&512&&Xc(r)}catch(B){Xe(r,r.return,B)}}if(r===n){ne=null;break}if(o=r.sibling,o!==null){o.return=r.return,ne=o;break}ne=r.return}}function Dp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ne=o;break}ne=r.return}}function Op(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{xl(4,r)}catch(C){Xe(r,o,C)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(C){Xe(r,h,C)}}var p=r.return;try{Xc(r)}catch(C){Xe(r,p,C)}break;case 5:var v=r.return;try{Xc(r)}catch(C){Xe(r,v,C)}}}catch(C){Xe(r,r.return,C)}if(r===n){ne=null;break}var w=r.sibling;if(w!==null){w.return=r.return,ne=w;break}ne=r.return}}var s_=Math.ceil,Ll=_e.ReactCurrentDispatcher,eh=_e.ReactCurrentOwner,pn=_e.ReactCurrentBatchConfig,Oe=0,yt=null,st=null,It=0,sn=0,Us=Mr(0),ht=0,ra=null,Vi=0,Vl=0,th=0,ia=null,Kt=null,nh=0,zs=1/0,fr=null,Ml=!1,rh=null,Br=null,Fl=!1,$r=null,bl=0,sa=0,ih=null,Ul=-1,zl=0;function Ut(){return Oe&6?je():Ul!==-1?Ul:Ul=je()}function Hr(n){return n.mode&1?Oe&2&&It!==0?It&-It:Bv.transition!==null?(zl===0&&(zl=Ii()),zl):(n=Ae,n!==0||(n=window.event,n=n===void 0?16:xo(n.type)),n):1}function Nn(n,r,o,u){if(50<sa)throw sa=0,ih=null,Error(t(185));Pr(n,o,u),(!(Oe&2)||n!==yt)&&(n===yt&&(!(Oe&2)&&(Vl|=o),ht===4&&qr(n,It)),Gt(n,u),o===1&&Oe===0&&!(r.mode&1)&&(zs=je()+500,pl&&br()))}function Gt(n,r){var o=n.callbackNode;tr(n,r);var u=Ti(n,n===yt?It:0);if(u===0)o!==null&&Po(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&Po(o),r===1)n.tag===0?jv(Lp.bind(null,n)):_f(Lp.bind(null,n)),Fv(function(){!(Oe&6)&&br()}),o=null;else{switch(Nr(u)){case 1:o=Ei;break;case 4:o=Ar;break;case 16:o=an;break;case 536870912:o=za;break;default:o=an}o=Bp(o,xp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function xp(n,r){if(Ul=-1,zl=0,Oe&6)throw Error(t(327));var o=n.callbackNode;if(js()&&n.callbackNode!==o)return null;var u=Ti(n,n===yt?It:0);if(u===0)return null;if(u&30||u&n.expiredLanes||r)r=jl(n,u);else{r=u;var h=Oe;Oe|=2;var p=Mp();(yt!==n||It!==r)&&(fr=null,zs=je()+500,Fi(n,r));do try{l_();break}catch(w){Vp(n,w)}while(!0);Tc(),Ll.current=p,Oe=h,st!==null?r=0:(yt=null,It=0,r=ht)}if(r!==0){if(r===2&&(h=Zt(n),h!==0&&(u=h,r=sh(n,h))),r===1)throw o=ra,Fi(n,0),qr(n,u),Gt(n,je()),o;if(r===6)qr(n,u);else{if(h=n.current.alternate,!(u&30)&&!o_(h)&&(r=jl(n,u),r===2&&(p=Zt(n),p!==0&&(u=p,r=sh(n,p))),r===1))throw o=ra,Fi(n,0),qr(n,u),Gt(n,je()),o;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:bi(n,Kt,fr);break;case 3:if(qr(n,u),(u&130023424)===u&&(r=nh+500-je(),10<r)){if(Ti(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Ut(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=hc(bi.bind(null,n,Kt,fr),r);break}bi(n,Kt,fr);break;case 4:if(qr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var v=31-Mt(u);p=1<<v,v=r[v],v>h&&(h=v),u&=~p}if(u=h,u=je()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*s_(u/1960))-u,10<u){n.timeoutHandle=hc(bi.bind(null,n,Kt,fr),u);break}bi(n,Kt,fr);break;case 5:bi(n,Kt,fr);break;default:throw Error(t(329))}}}return Gt(n,je()),n.callbackNode===o?xp.bind(null,n):null}function sh(n,r){var o=ia;return n.current.memoizedState.isDehydrated&&(Fi(n,r).flags|=256),n=jl(n,r),n!==2&&(r=Kt,Kt=o,r!==null&&oh(r)),n}function oh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function o_(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!An(p(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function qr(n,r){for(r&=~th,r&=~Vl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Mt(r),u=1<<o;n[o]=-1,r&=~u}}function Lp(n){if(Oe&6)throw Error(t(327));js();var r=Ti(n,0);if(!(r&1))return Gt(n,je()),null;var o=jl(n,r);if(n.tag!==0&&o===2){var u=Zt(n);u!==0&&(r=u,o=sh(n,u))}if(o===1)throw o=ra,Fi(n,0),qr(n,r),Gt(n,je()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,bi(n,Kt,fr),Gt(n,je()),null}function ah(n,r){var o=Oe;Oe|=1;try{return n(r)}finally{Oe=o,Oe===0&&(zs=je()+500,pl&&br())}}function Mi(n){$r!==null&&$r.tag===0&&!(Oe&6)&&js();var r=Oe;Oe|=1;var o=pn.transition,u=Ae;try{if(pn.transition=null,Ae=1,n)return n()}finally{Ae=u,pn.transition=o,Oe=r,!(Oe&6)&&br()}}function lh(){sn=Us.current,He(Us)}function Fi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Mv(o)),st!==null)for(o=st.return;o!==null;){var u=o;switch(yc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&dl();break;case 3:Ms(),He(Ht),He(Pt),Nc();break;case 5:Pc(u);break;case 4:Ms();break;case 13:He(Ge);break;case 19:He(Ge);break;case 10:Ic(u.type._context);break;case 22:case 23:lh()}o=o.return}if(yt=n,st=n=Wr(n.current,null),It=sn=r,ht=0,ra=null,th=Vl=Vi=0,Kt=ia=null,Oi!==null){for(r=0;r<Oi.length;r++)if(o=Oi[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,p=o.pending;if(p!==null){var v=p.next;p.next=h,u.next=v}o.pending=u}Oi=null}return n}function Vp(n,r){do{var o=st;try{if(Tc(),Sl.current=Pl,Al){for(var u=Qe.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Al=!1}if(Li=0,gt=ct=Qe=null,Xo=!1,Jo=0,eh.current=null,o===null||o.return===null){ht=1,ra=r,st=null;break}e:{var p=n,v=o.return,w=o,C=r;if(r=It,w.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,H=w,q=H.tag;if(!(H.mode&1)&&(q===0||q===11||q===15)){var B=H.alternate;B?(H.updateQueue=B.updateQueue,H.memoizedState=B.memoizedState,H.lanes=B.lanes):(H.updateQueue=null,H.memoizedState=null)}var Z=op(v);if(Z!==null){Z.flags&=-257,ap(Z,v,w,p,r),Z.mode&1&&sp(p,F,r),r=Z,C=F;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(C),r.updateQueue=ie}else re.add(C);break e}else{if(!(r&1)){sp(p,F,r),uh();break e}C=Error(t(426))}}else if(Ke&&w.mode&1){var tt=op(v);if(tt!==null){!(tt.flags&65536)&&(tt.flags|=256),ap(tt,v,w,p,r),Ec(Fs(C,w));break e}}p=C=Fs(C,w),ht!==4&&(ht=2),ia===null?ia=[p]:ia.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var V=rp(p,C,r);Nf(p,V);break e;case 1:w=C;var P=p.type,M=p.stateNode;if(!(p.flags&128)&&(typeof P.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Br===null||!Br.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var W=ip(p,w,r);Nf(p,W);break e}}p=p.return}while(p!==null)}bp(o)}catch(se){r=se,st===o&&o!==null&&(st=o=o.return);continue}break}while(!0)}function Mp(){var n=Ll.current;return Ll.current=Pl,n===null?Pl:n}function uh(){(ht===0||ht===3||ht===2)&&(ht=4),yt===null||!(Vi&268435455)&&!(Vl&268435455)||qr(yt,It)}function jl(n,r){var o=Oe;Oe|=2;var u=Mp();(yt!==n||It!==r)&&(fr=null,Fi(n,r));do try{a_();break}catch(h){Vp(n,h)}while(!0);if(Tc(),Oe=o,Ll.current=u,st!==null)throw Error(t(261));return yt=null,It=0,ht}function a_(){for(;st!==null;)Fp(st)}function l_(){for(;st!==null&&!ba();)Fp(st)}function Fp(n){var r=jp(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?bp(n):st=r,eh.current=null}function bp(n){var r=n;do{var o=r.alternate;if(n=r.return,r.flags&32768){if(o=t_(o,r),o!==null){o.flags&=32767,st=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}else if(o=e_(o,r,sn),o!==null){st=o;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function bi(n,r,o){var u=Ae,h=pn.transition;try{pn.transition=null,Ae=1,u_(n,r,o,u)}finally{pn.transition=h,Ae=u}return null}function u_(n,r,o,u){do js();while($r!==null);if(Oe&6)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(Ue(n,p),n===yt&&(st=yt=null,It=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Fl||(Fl=!0,Bp(an,function(){return js(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=pn.transition,pn.transition=null;var v=Ae;Ae=1;var w=Oe;Oe|=4,eh.current=null,r_(n,o),Pp(o,n),kv(uc),Or=!!lc,uc=lc=null,n.current=o,i_(o),Wu(),Oe=w,Ae=v,pn.transition=p}else n.current=o;if(Fl&&(Fl=!1,$r=n,bl=h),p=n.pendingLanes,p===0&&(Br=null),ja(o.stateNode),Gt(n,je()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Ml)throw Ml=!1,n=rh,rh=null,n;return bl&1&&n.tag!==0&&js(),p=n.pendingLanes,p&1?n===ih?sa++:(sa=0,ih=n):sa=0,br(),null}function js(){if($r!==null){var n=Nr(bl),r=pn.transition,o=Ae;try{if(pn.transition=null,Ae=16>n?16:n,$r===null)var u=!1;else{if(n=$r,$r=null,bl=0,Oe&6)throw Error(t(331));var h=Oe;for(Oe|=4,ne=n.current;ne!==null;){var p=ne,v=p.child;if(ne.flags&16){var w=p.deletions;if(w!==null){for(var C=0;C<w.length;C++){var F=w[C];for(ne=F;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:na(8,H,p)}var q=H.child;if(q!==null)q.return=H,ne=q;else for(;ne!==null;){H=ne;var B=H.sibling,Z=H.return;if(Ip(H),H===F){ne=null;break}if(B!==null){B.return=Z,ne=B;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var tt=ie.sibling;ie.sibling=null,ie=tt}while(ie!==null)}}ne=p}}if(p.subtreeFlags&2064&&v!==null)v.return=p,ne=v;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:na(9,p,p.return)}var V=p.sibling;if(V!==null){V.return=p.return,ne=V;break e}ne=p.return}}var P=n.current;for(ne=P;ne!==null;){v=ne;var M=v.child;if(v.subtreeFlags&2064&&M!==null)M.return=v,ne=M;else e:for(v=P;ne!==null;){if(w=ne,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:xl(9,w)}}catch(se){Xe(w,w.return,se)}if(w===v){ne=null;break e}var W=w.sibling;if(W!==null){W.return=w.return,ne=W;break e}ne=w.return}}if(Oe=h,br(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(wi,n)}catch{}u=!0}return u}finally{Ae=o,pn.transition=r}}return!1}function Up(n,r,o){r=Fs(o,r),r=rp(n,r,1),n=zr(n,r,1),r=Ut(),n!==null&&(Pr(n,1,r),Gt(n,r))}function Xe(n,r,o){if(n.tag===3)Up(n,n,o);else for(;r!==null;){if(r.tag===3){Up(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Br===null||!Br.has(u))){n=Fs(o,n),n=ip(r,n,1),r=zr(r,n,1),n=Ut(),r!==null&&(Pr(r,1,n),Gt(r,n));break}}r=r.return}}function c_(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Ut(),n.pingedLanes|=n.suspendedLanes&o,yt===n&&(It&o)===o&&(ht===4||ht===3&&(It&130023424)===It&&500>je()-nh?Fi(n,0):th|=o),Gt(n,r)}function zp(n,r){r===0&&(n.mode&1?(r=cs,cs<<=1,!(cs&130023424)&&(cs=4194304)):r=1);var o=Ut();n=cr(n,r),n!==null&&(Pr(n,r,o),Gt(n,o))}function h_(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),zp(n,o)}function d_(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),zp(n,o)}var jp;jp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Wt=!0;else{if(!(n.lanes&o)&&!(r.flags&128))return Wt=!1,Zv(n,r,o);Wt=!!(n.flags&131072)}else Wt=!1,Ke&&r.flags&1048576&&Ef(r,gl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Dl(n,r),n=r.pendingProps;var h=ks(r,Pt.current);Vs(r,o),h=xc(null,r,u,n,h,o);var p=Lc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(u)?(p=!0,fl(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Cc(r),h.updater=kl,r.stateNode=h,h._reactInternals=r,zc(r,u,n,o),r=Hc(null,r,u,!0,p,o)):(r.tag=0,Ke&&p&&gc(r),bt(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Dl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=p_(u),n=Rn(u,n),h){case 0:r=$c(null,r,u,n,o);break e;case 1:r=fp(null,r,u,n,o);break e;case 11:r=lp(null,r,u,n,o);break e;case 14:r=up(null,r,u,Rn(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),$c(n,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),fp(n,r,u,h,o);case 3:e:{if(pp(r),n===null)throw Error(t(387));u=r.pendingProps,p=r.memoizedState,h=p.element,kf(n,r),Tl(r,u,null,o);var v=r.memoizedState;if(u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=Fs(Error(t(423)),r),r=mp(n,r,u,o,h);break e}else if(u!==h){h=Fs(Error(t(424)),r),r=mp(n,r,u,o,h);break e}else for(rn=Vr(r.stateNode.containerInfo.firstChild),nn=r,Ke=!0,Cn=null,o=Rf(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Os(),u===h){r=dr(n,r,o);break e}bt(n,r,u,o)}r=r.child}return r;case 5:return Of(r),n===null&&_c(r),u=r.type,h=r.pendingProps,p=n!==null?n.memoizedProps:null,v=h.children,cc(u,h)?v=null:p!==null&&cc(u,p)&&(r.flags|=32),dp(n,r),bt(n,r,v,o),r.child;case 6:return n===null&&_c(r),null;case 13:return gp(n,r,o);case 4:return Rc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=xs(r,null,u,o):bt(n,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),lp(n,r,u,h,o);case 7:return bt(n,r,r.pendingProps,o),r.child;case 8:return bt(n,r,r.pendingProps.children,o),r.child;case 12:return bt(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,p=r.memoizedProps,v=h.value,Be(_l,u._currentValue),u._currentValue=v,p!==null)if(An(p.value,v)){if(p.children===h.children&&!Ht.current){r=dr(n,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var w=p.dependencies;if(w!==null){v=p.child;for(var C=w.firstContext;C!==null;){if(C.context===u){if(p.tag===1){C=hr(-1,o&-o),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var H=F.pending;H===null?C.next=C:(C.next=H.next,H.next=C),F.pending=C}}p.lanes|=o,C=p.alternate,C!==null&&(C.lanes|=o),Sc(p.return,o,r),w.lanes|=o;break}C=C.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=o,w=v.alternate,w!==null&&(w.lanes|=o),Sc(v,o,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}bt(n,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Vs(r,o),h=dn(h),u=u(h),r.flags|=1,bt(n,r,u,o),r.child;case 14:return u=r.type,h=Rn(u,r.pendingProps),h=Rn(u.type,h),up(n,r,u,h,o);case 15:return cp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),Dl(n,r),r.tag=1,qt(u)?(n=!0,fl(r)):n=!1,Vs(r,o),tp(r,u,h),zc(r,u,h,o),Hc(null,r,u,!0,n,o);case 19:return vp(n,r,o);case 22:return hp(n,r,o)}throw Error(t(156,r.tag))};function Bp(n,r){return ls(n,r)}function f_(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,o,u){return new f_(n,r,o,u)}function ch(n){return n=n.prototype,!(!n||!n.isReactComponent)}function p_(n){if(typeof n=="function")return ch(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Ct)return 14}return 2}function Wr(n,r){var o=n.alternate;return o===null?(o=mn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Bl(n,r,o,u,h,p){var v=2;if(u=n,typeof n=="function")ch(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return Ui(o.children,h,p,r);case T:v=8,h|=8;break;case A:return n=mn(12,o,r,h|2),n.elementType=A,n.lanes=p,n;case S:return n=mn(13,o,r,h),n.elementType=S,n.lanes=p,n;case Ze:return n=mn(19,o,r,h),n.elementType=Ze,n.lanes=p,n;case be:return $l(o,h,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:v=10;break e;case D:v=9;break e;case x:v=11;break e;case Ct:v=14;break e;case Rt:v=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(v,o,r,h),r.elementType=n,r.type=u,r.lanes=p,r}function Ui(n,r,o,u){return n=mn(7,n,u,r),n.lanes=o,n}function $l(n,r,o,u){return n=mn(22,n,u,r),n.elementType=be,n.lanes=o,n.stateNode={isHidden:!1},n}function hh(n,r,o){return n=mn(6,n,null,r),n.lanes=o,n}function dh(n,r,o){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function m_(n,r,o,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rr(0),this.expirationTimes=Rr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rr(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function fh(n,r,o,u,h,p,v,w,C){return n=new m_(n,r,o,w,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(p),n}function g_(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function $p(n){if(!n)return Fr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(qt(o))return yf(n,o,r)}return r}function Hp(n,r,o,u,h,p,v,w,C){return n=fh(o,u,!0,n,h,p,v,w,C),n.context=$p(null),o=n.current,u=Ut(),h=Hr(o),p=hr(u,h),p.callback=r??null,zr(o,p,h),n.current.lanes=h,Pr(n,h,u),Gt(n,u),n}function Hl(n,r,o,u){var h=r.current,p=Ut(),v=Hr(h);return o=$p(o),r.context===null?r.context=o:r.pendingContext=o,r=hr(p,v),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=zr(h,r,v),n!==null&&(Nn(n,h,v,p),wl(n,h,v)),v}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function ph(n,r){qp(n,r),(n=n.alternate)&&qp(n,r)}function y_(){return null}var Wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function mh(n){this._internalRoot=n}Wl.prototype.render=mh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Hl(n,r,null,null)},Wl.prototype.unmount=mh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Mi(function(){Hl(null,n,null,null)}),r[or]=null}};function Wl(n){this._internalRoot=n}Wl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Wa();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Vn.length&&r!==0&&r<Vn[o].priority;o++);Vn.splice(o,0,n),o===0&&Qa(n)}};function gh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function v_(n,r,o,u,h){if(h){if(typeof u=="function"){var p=u;u=function(){var F=ql(v);p.call(F)}}var v=Hp(r,u,n,0,null,!1,!1,"",Kp);return n._reactRootContainer=v,n[or]=v.current,$o(n.nodeType===8?n.parentNode:n),Mi(),v}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var w=u;u=function(){var F=ql(C);w.call(F)}}var C=fh(n,0,!1,null,null,!1,!1,"",Kp);return n._reactRootContainer=C,n[or]=C.current,$o(n.nodeType===8?n.parentNode:n),Mi(function(){Hl(r,C,o,u)}),C}function Gl(n,r,o,u,h){var p=o._reactRootContainer;if(p){var v=p;if(typeof h=="function"){var w=h;h=function(){var C=ql(v);w.call(C)}}Hl(r,v,n,h)}else v=v_(o,r,n,h,u);return ql(v)}Ha=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Cr(r.pendingLanes);o!==0&&(kr(r,o|1),Gt(r,je()),!(Oe&6)&&(zs=je()+500,br()))}break;case 13:Mi(function(){var u=cr(n,1);if(u!==null){var h=Ut();Nn(u,n,1,h)}}),ph(n,1)}},hs=function(n){if(n.tag===13){var r=cr(n,134217728);if(r!==null){var o=Ut();Nn(r,n,134217728,o)}ph(n,134217728)}},qa=function(n){if(n.tag===13){var r=Hr(n),o=cr(n,r);if(o!==null){var u=Ut();Nn(o,n,r,u)}ph(n,r)}},Wa=function(){return Ae},Ka=function(n,r){var o=Ae;try{return Ae=n,r()}finally{Ae=o}},ns=function(n,r,o){switch(r){case"input":if(po(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var h=hl(u);if(!h)throw Error(t(90));Yi(u),po(u,h)}}}break;case"textarea":es(n,o);break;case"select":r=o.value,r!=null&&Jn(n,!!o.multiple,r,!1)}},gi=ah,So=Mi;var __={usingClientEntryPoint:!1,Events:[Wo,Rs,hl,xn,Io,ah]},oa={findFiberByHostInstance:Pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E_={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ro(n),n===null?null:n.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{wi=Ql.inject(E_),Jt=Ql}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__,Qt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(r))throw Error(t(200));return g_(n,r,null,o)},Qt.createRoot=function(n,r){if(!gh(n))throw Error(t(299));var o=!1,u="",h=Wp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=fh(n,1,!1,null,null,o,!1,u,h),n[or]=r.current,$o(n.nodeType===8?n.parentNode:n),new mh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ro(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Mi(n)},Qt.hydrate=function(n,r,o){if(!Kl(r))throw Error(t(200));return Gl(null,n,r,!0,o)},Qt.hydrateRoot=function(n,r,o){if(!gh(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,p="",v=Wp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),r=Hp(r,null,n,1,o??null,h,!1,p,v),n[or]=r.current,$o(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Wl(r)},Qt.render=function(n,r,o){if(!Kl(r))throw Error(t(200));return Gl(null,n,r,!1,o)},Qt.unmountComponentAtNode=function(n){if(!Kl(n))throw Error(t(40));return n._reactRootContainer?(Mi(function(){Gl(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1},Qt.unstable_batchedUpdates=ah,Qt.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Kl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Gl(n,r,o,!1,u)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var tm;function k_(){if(tm)return _h.exports;tm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),_h.exports=P_(),_h.exports}var nm;function N_(){if(nm)return Yl;nm=1;var i=k_();return Yl.createRoot=i.createRoot,Yl.hydrateRoot=i.hydrateRoot,Yl}var D_=N_(),rm={};/**
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
 */const wg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},O_=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[t++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[t++],d=i[t++],m=i[t++],y=((a&7)<<18|(c&63)<<12|(d&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[t++],d=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],d=a+1<i.length,m=d?i[a+1]:0,y=a+2<i.length,_=y?i[a+2]:0,I=c>>2,N=(c&3)<<4|m>>4;let b=(m&15)<<2|_>>6,$=_&63;y||($=64,d||(b=64)),s.push(t[I],t[N],t[b],t[$])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(wg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):O_(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const _=a<i.length?t[i.charAt(a)]:64;++a;const N=a<i.length?t[i.charAt(a)]:64;if(++a,c==null||m==null||_==null||N==null)throw new x_;const b=c<<2|m>>4;if(s.push(b),_!==64){const $=m<<4&240|_>>2;if(s.push($),N!==64){const X=_<<6&192|N;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class x_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L_=function(i){const e=wg(i);return Tg.encodeByteArray(e,!0)},hu=function(i){return L_(i).replace(/\./g,"")},Ig=function(i){try{return Tg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function V_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const M_=()=>V_().__FIREBASE_DEFAULTS__,F_=()=>{if(typeof process>"u"||typeof rm>"u")return;const i=rm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},b_=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ig(i[1]);return e&&JSON.parse(e)},Pu=()=>{try{return M_()||F_()||b_()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Sg=i=>{var e,t;return(t=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},U_=i=>{const e=Sg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ag=()=>{var i;return(i=Pu())===null||i===void 0?void 0:i.config},Cg=i=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class z_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function j_(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[hu(JSON.stringify(t)),hu(JSON.stringify(d)),""].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function B_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function $_(){var i;const e=(i=Pu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function W_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K_(){const i=Vt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function G_(){return!$_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Q_(){try{return typeof indexedDB=="object"}catch{return!1}}function Y_(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(t){e(t)}})}/**
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
 */const X_="FirebaseError";class Tr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=X_,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?J_(c,s):"Error",m=`${this.serviceName}: ${d} (${a}).`;return new Tr(a,m,s)}}function J_(i,e){return i.replace(Z_,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Z_=/\{\$([^}]+)}/g;function e0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function du(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const c=i[a],d=e[a];if(im(c)&&im(d)){if(!du(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function im(i){return i!==null&&typeof i=="object"}/**
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
 */function Ra(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function la(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function ua(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function t0(i,e){const t=new n0(i,e);return t.subscribe.bind(t)}class n0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");r0(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Th),a.error===void 0&&(a.error=Th),a.complete===void 0&&(a.complete=Th);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Th(){}/**
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
 */function Qn(i){return i&&i._delegate?i._delegate:i}class qi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zi="[DEFAULT]";/**
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
 */class i0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new z_;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o0(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&d.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:s0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s0(i){return i===zi?void 0:i}function o0(i){return i.instantiationMode==="EAGER"}/**
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
 */class a0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Se||(Se={}));const l0={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},u0=Se.INFO,c0={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},h0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=c0[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ld{constructor(e){this.name=e,this._logLevel=u0,this._logHandler=h0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const d0=(i,e)=>e.some(t=>i instanceof t);let sm,om;function f0(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p0(){return om||(om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rg=new WeakMap,Mh=new WeakMap,Pg=new WeakMap,Ih=new WeakMap,ud=new WeakMap;function m0(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",d)},c=()=>{t(ni(i.result)),a()},d=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&Rg.set(t,i)}).catch(()=>{}),ud.set(e,i),e}function g0(i){if(Mh.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",d),i.removeEventListener("abort",d)},c=()=>{t(),a()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",d),i.addEventListener("abort",d)});Mh.set(i,e)}let Fh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Mh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Pg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ni(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function y0(i){Fh=i(Fh)}function v0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Sh(this),e,...t);return Pg.set(s,e.sort?e.sort():[e]),ni(s)}:p0().includes(i)?function(...e){return i.apply(Sh(this),e),ni(Rg.get(this))}:function(...e){return ni(i.apply(Sh(this),e))}}function _0(i){return typeof i=="function"?v0(i):(i instanceof IDBTransaction&&g0(i),d0(i,f0())?new Proxy(i,Fh):i)}function ni(i){if(i instanceof IDBRequest)return m0(i);if(Ih.has(i))return Ih.get(i);const e=_0(i);return e!==i&&(Ih.set(i,e),ud.set(e,i)),e}const Sh=i=>ud.get(i);function E0(i,e,{blocked:t,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(i,e),m=ni(d);return s&&d.addEventListener("upgradeneeded",y=>{s(ni(d.result),y.oldVersion,y.newVersion,ni(d.transaction),y)}),t&&d.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const w0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],Ah=new Map;function am(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=T0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||w0.includes(t)))return;const c=async function(d,...m){const y=this.transaction(d,a?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),a&&y.done]))[0]};return Ah.set(e,c),c}y0(i=>({...i,get:(e,t,s)=>am(e,t)||i.get(e,t,s),has:(e,t)=>!!am(e,t)||i.has(e,t)}));/**
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
 */class I0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(S0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function S0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",lm="0.10.17";/**
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
 */const _r=new ld("@firebase/app"),A0="@firebase/app-compat",C0="@firebase/analytics-compat",R0="@firebase/analytics",P0="@firebase/app-check-compat",k0="@firebase/app-check",N0="@firebase/auth",D0="@firebase/auth-compat",O0="@firebase/database",x0="@firebase/data-connect",L0="@firebase/database-compat",V0="@firebase/functions",M0="@firebase/functions-compat",F0="@firebase/installations",b0="@firebase/installations-compat",U0="@firebase/messaging",z0="@firebase/messaging-compat",j0="@firebase/performance",B0="@firebase/performance-compat",$0="@firebase/remote-config",H0="@firebase/remote-config-compat",q0="@firebase/storage",W0="@firebase/storage-compat",K0="@firebase/firestore",G0="@firebase/vertexai",Q0="@firebase/firestore-compat",Y0="firebase",X0="11.1.0";/**
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
 */const Uh="[DEFAULT]",J0={[bh]:"fire-core",[A0]:"fire-core-compat",[R0]:"fire-analytics",[C0]:"fire-analytics-compat",[k0]:"fire-app-check",[P0]:"fire-app-check-compat",[N0]:"fire-auth",[D0]:"fire-auth-compat",[O0]:"fire-rtdb",[x0]:"fire-data-connect",[L0]:"fire-rtdb-compat",[V0]:"fire-fn",[M0]:"fire-fn-compat",[F0]:"fire-iid",[b0]:"fire-iid-compat",[U0]:"fire-fcm",[z0]:"fire-fcm-compat",[j0]:"fire-perf",[B0]:"fire-perf-compat",[$0]:"fire-rc",[H0]:"fire-rc-compat",[q0]:"fire-gcs",[W0]:"fire-gcs-compat",[K0]:"fire-fst",[Q0]:"fire-fst-compat",[G0]:"fire-vertex","fire-js":"fire-js",[Y0]:"fire-js-all"};/**
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
 */const fu=new Map,Z0=new Map,zh=new Map;function um(i,e){try{i.container.addComponent(e)}catch(t){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Js(i){const e=i.name;if(zh.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,i);for(const t of fu.values())um(t,i);for(const t of Z0.values())um(t,i);return!0}function cd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function pr(i){return i.settings!==void 0}/**
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
 */const eE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ri=new Ca("app","Firebase",eE);/**
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
 */class tE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ri.create("app-deleted",{appName:this._name})}}/**
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
 */const oo=X0;function kg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Uh,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw ri.create("bad-app-name",{appName:String(a)});if(t||(t=Ag()),!t)throw ri.create("no-options");const c=fu.get(a);if(c){if(du(t,c.options)&&du(s,c.config))return c;throw ri.create("duplicate-app",{appName:a})}const d=new a0(a);for(const y of zh.values())d.addComponent(y);const m=new tE(t,s,d);return fu.set(a,m),m}function Ng(i=Uh){const e=fu.get(i);if(!e&&i===Uh&&Ag())return kg();if(!e)throw ri.create("no-app",{appName:i});return e}function ii(i,e,t){var s;let a=(s=J0[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const m=[`Unable to register library "${a}" with version "${e}":`];c&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&m.push("and"),d&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(m.join(" "));return}Js(new qi(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const nE="firebase-heartbeat-database",rE=1,va="firebase-heartbeat-store";let Ch=null;function Dg(){return Ch||(Ch=E0(nE,rE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(va)}catch(t){console.warn(t)}}}}).catch(i=>{throw ri.create("idb-open",{originalErrorMessage:i.message})})),Ch}async function iE(i){try{const t=(await Dg()).transaction(va),s=await t.objectStore(va).get(Og(i));return await t.done,s}catch(e){if(e instanceof Tr)_r.warn(e.message);else{const t=ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(t.message)}}}async function cm(i,e){try{const s=(await Dg()).transaction(va,"readwrite");await s.objectStore(va).put(e,Og(i)),await s.done}catch(t){if(t instanceof Tr)_r.warn(t.message);else{const s=ri.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_r.warn(s.message)}}}function Og(i){return`${i.name}!${i.options.appId}`}/**
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
 */const sE=1024,oE=30*24*60*60*1e3;class aE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=hm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const m=new Date(d.date).valueOf();return Date.now()-m<=oE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){_r.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hm(),{heartbeatsToSend:s,unsentEntries:a}=lE(this._heartbeatsCache.heartbeats),c=hu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(t){return _r.warn(t),""}}}function hm(){return new Date().toISOString().substring(0,10)}function lE(i,e=sE){const t=[];let s=i.slice();for(const a of i){const c=t.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),dm(t)>e){c.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),dm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class uE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q_()?Y_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return cm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return cm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function dm(i){return hu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function cE(i){Js(new qi("platform-logger",e=>new I0(e),"PRIVATE")),Js(new qi("heartbeat",e=>new aE(e),"PRIVATE")),ii(bh,lm,i),ii(bh,lm,"esm2017"),ii("fire-js","")}cE("");var hE="firebase",dE="11.1.0";/**
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
 */ii(hE,dE,"app");function hd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fE=xg,Lg=new Ca("auth","Firebase",xg());/**
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
 */const pu=new ld("@firebase/auth");function pE(i,...e){pu.logLevel<=Se.WARN&&pu.warn(`Auth (${oo}): ${i}`,...e)}function ru(i,...e){pu.logLevel<=Se.ERROR&&pu.error(`Auth (${oo}): ${i}`,...e)}/**
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
 */function Dn(i,...e){throw dd(i,...e)}function Hn(i,...e){return dd(i,...e)}function Vg(i,e,t){const s=Object.assign(Object.assign({},fE()),{[e]:t});return new Ca("auth","Firebase",s).create(e,{appName:i.name})}function si(i){return Vg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Lg.create(i,...e)}function de(i,e,...t){if(!i)throw dd(e,...t)}function mr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ru(e),new Error(e)}function Er(i,e){i||mr(e)}/**
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
 */function jh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function mE(){return fm()==="http:"||fm()==="https:"}function fm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function gE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mE()||q_()||"connection"in navigator)?navigator.onLine:!0}function yE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Pa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Er(t>e,"Short delay should be less than long delay!"),this.isMobile=B_()||W_()}get(){return gE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fd(i,e){Er(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Mg{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _E=new Pa(3e4,6e4);function Gi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function hi(i,e,t,s,a={}){return Fg(i,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const m=Ra(Object.assign({key:i.config.apiKey},d)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:y},c);return H_()||(_.referrerPolicy="no-referrer"),Mg.fetch()(bg(i,i.config.apiHost,t,m),_)})}async function Fg(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},vE),e);try{const a=new wE(i),c=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Xl(i,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const m=c.ok?d.errorMessage:d.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(i,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Xl(i,"email-already-in-use",d);if(y==="USER_DISABLED")throw Xl(i,"user-disabled",d);const I=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Vg(i,I,_);Dn(i,I)}}catch(a){if(a instanceof Tr)throw a;Dn(i,"network-request-failed",{message:String(a)})}}async function ku(i,e,t,s,a={}){const c=await hi(i,e,t,s,a);return"mfaPendingCredential"in c&&Dn(i,"multi-factor-auth-required",{_serverResponse:c}),c}function bg(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?fd(i.config,a):`${i.config.apiScheme}://${a}`}function EE(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Hn(this.auth,"network-request-failed")),_E.get())})}}function Xl(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Hn(i,e,s);return a.customData._tokenResponse=t,a}function pm(i){return i!==void 0&&i.enterprise!==void 0}class TE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IE(i,e){return hi(i,"GET","/v2/recaptchaConfig",Gi(i,e))}/**
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
 */async function SE(i,e){return hi(i,"POST","/v1/accounts:delete",e)}async function Ug(i,e){return hi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function fa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AE(i,e=!1){const t=Qn(i),s=await t.getIdToken(e),a=pd(s);de(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:fa(Rh(a.auth_time)),issuedAtTime:fa(Rh(a.iat)),expirationTime:fa(Rh(a.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Rh(i){return Number(i)*1e3}function pd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ig(t);return a?JSON.parse(a):(ru("Failed to decode base64 JWT payload"),null)}catch(a){return ru("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function mm(i){const e=pd(i);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _a(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Tr&&CE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function CE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class RE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mu(i){var e;const t=i.auth,s=await i.getIdToken(),a=await _a(i,Ug(t,{idToken:s}));de(a==null?void 0:a.users.length,t,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?zg(c.providerUserInfo):[],m=kE(i.providerData,d),y=i.isAnonymous,_=!(i.email&&c.passwordHash)&&!(m!=null&&m.length),I=y?_:!1,N={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:m,metadata:new Bh(c.createdAt,c.lastLoginAt),isAnonymous:I};Object.assign(i,N)}async function PE(i){const e=Qn(i);await mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kE(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function zg(i){return i.map(e=>{var{providerId:t}=e,s=hd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function NE(i,e){const t=await Fg(i,{},async()=>{const s=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,d=bg(i,a,"/v1/token",`key=${c}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Mg.fetch()(d,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function DE(i,e){return hi(i,"POST","/v2/accounts:revokeToken",Gi(i,e))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=mm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:c}=await NE(e,t);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:c}=t,d=new Ks;return s&&(de(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(de(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(de(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
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
 */function Gr(i,e){de(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,c=hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Bh(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const t=await _a(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AE(this,e)}reload(){return PE(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pr(this.auth.app))return Promise.reject(si(this.auth));const e=await this.getIdToken();return await _a(this,SE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,c,d,m,y,_,I;const N=(s=t.displayName)!==null&&s!==void 0?s:void 0,b=(a=t.email)!==null&&a!==void 0?a:void 0,$=(c=t.phoneNumber)!==null&&c!==void 0?c:void 0,X=(d=t.photoURL)!==null&&d!==void 0?d:void 0,J=(m=t.tenantId)!==null&&m!==void 0?m:void 0,K=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,Ce=(_=t.createdAt)!==null&&_!==void 0?_:void 0,Ie=(I=t.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:ye,emailVerified:_e,isAnonymous:qe,providerData:Te,stsTokenManager:k}=t;de(ye&&k,e,"internal-error");const T=Ks.fromJSON(this.name,k);de(typeof ye=="string",e,"internal-error"),Gr(N,e.name),Gr(b,e.name),de(typeof _e=="boolean",e,"internal-error"),de(typeof qe=="boolean",e,"internal-error"),Gr($,e.name),Gr(X,e.name),Gr(J,e.name),Gr(K,e.name),Gr(Ce,e.name),Gr(Ie,e.name);const A=new gr({uid:ye,auth:e,email:b,emailVerified:_e,displayName:N,isAnonymous:qe,photoURL:X,phoneNumber:$,tenantId:J,stsTokenManager:T,createdAt:Ce,lastLoginAt:Ie});return Te&&Array.isArray(Te)&&(A.providerData=Te.map(R=>Object.assign({},R))),K&&(A._redirectEventId=K),A}static async _fromIdTokenResponse(e,t,s=!1){const a=new Ks;a.updateFromServerResponse(t);const c=new gr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await mu(c),c}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];de(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?zg(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),m=new Ks;m.updateFromIdToken(s);const y=new gr({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:d}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Bh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(y,_),y}}/**
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
 */const gm=new Map;function yr(i){Er(i instanceof Function,"Expected a class definition");let e=gm.get(i);return e?(Er(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,gm.set(i,e),e)}/**
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
 */class jg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jg.type="NONE";const ym=jg;/**
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
 */function iu(i,e,t){return`firebase:${i}:${e}:${t}`}class Gs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=iu(this.userKey,a.apiKey,c),this.fullPersistenceKey=iu("persistence",a.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Gs(yr(ym),e,s);const a=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=a[0]||yr(ym);const d=iu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const I=await _._get(d);if(I){const N=gr._fromJSON(e,I);_!==c&&(m=N),c=_;break}}catch{}const y=a.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new Gs(c,e,s):(c=y[0],m&&await c._set(d,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new Gs(c,e,s))}}/**
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
 */function vm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kg(e))return"Blackberry";if(Gg(e))return"Webos";if($g(e))return"Safari";if((e.includes("chrome/")||Hg(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bg(i=Vt()){return/firefox\//i.test(i)}function $g(i=Vt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hg(i=Vt()){return/crios\//i.test(i)}function qg(i=Vt()){return/iemobile/i.test(i)}function Wg(i=Vt()){return/android/i.test(i)}function Kg(i=Vt()){return/blackberry/i.test(i)}function Gg(i=Vt()){return/webos/i.test(i)}function md(i=Vt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function OE(i=Vt()){var e;return md(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xE(){return K_()&&document.documentMode===10}function Qg(i=Vt()){return md(i)||Wg(i)||Gg(i)||Kg(i)||/windows phone/i.test(i)||qg(i)}/**
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
 */function Yg(i,e=[]){let t;switch(i){case"Browser":t=vm(Vt());break;case"Worker":t=`${vm(Vt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oo}/${s}`}/**
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
 */class LE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((d,m)=>{try{const y=e(c);d(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function VE(i,e={}){return hi(i,"GET","/v2/passwordPolicy",Gi(i,e))}/**
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
 */const ME=6;class FE{constructor(e){var t,s,a,c;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=d.minPasswordLength)!==null&&t!==void 0?t:ME,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,c,d,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(d=y.containsNumericCharacter)!==null&&d!==void 0?d:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class bE{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _m(this),this.idTokenSubscription=new _m(this),this.beforeStateQueue=new LE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yr(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ug(this,{idToken:e}),s=await gr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pr(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!d||d===m)&&(y!=null&&y.user)&&(a=y.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pr(this.app))return Promise.reject(si(this));const t=e?Qn(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pr(this.app)?Promise.reject(si(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pr(this.app)?Promise.reject(si(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VE(this),t=new FE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ca("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await DE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[yr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{d||c(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{d=!0,y()}}else{const y=e.addObserver(t);return()=>{d=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ao(i){return Qn(i)}class _m{constructor(e){this.auth=e,this.observer=null,this.addObserver=t0(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UE(i){Nu=i}function Xg(i){return Nu.loadJS(i)}function zE(){return Nu.recaptchaEnterpriseScript}function jE(){return Nu.gapiScript}function BE(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class $E{constructor(){this.enterprise=new HE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class HE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qE="recaptcha-enterprise",Jg="NO_RECAPTCHA";class WE{constructor(e){this.type=qE,this.auth=ao(e)}async verify(e="verify",t=!1){async function s(c){if(!t){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,m)=>{IE(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new TE(y);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(y=>{m(y)})})}function a(c,d,m){const y=window.grecaptcha;pm(y)?y.enterprise.ready(()=>{y.enterprise.execute(c,{action:e}).then(_=>{d(_)}).catch(()=>{d(Jg)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $E().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{s(this.auth).then(m=>{if(!t&&pm(window.grecaptcha))a(m,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let y=zE();y.length!==0&&(y+=m),Xg(y).then(()=>{a(m,c,d)}).catch(_=>{d(_)})}}).catch(m=>{d(m)})})}}async function Em(i,e,t,s=!1,a=!1){const c=new WE(i);let d;if(a)d=Jg;else try{d=await c.verify(t)}catch{d=await c.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:d}):Object.assign(m,{captchaResponse:d}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function wm(i,e,t,s,a){var c;if(!((c=i._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Em(i,e,t,t==="getOobCode");return s(i,d)}else return s(i,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Em(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(d)})}/**
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
 */function KE(i,e){const t=cd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),c=t.getOptions();if(du(c,e??{}))return a;Dn(a,"already-initialized")}return t.initialize({options:e})}function GE(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(yr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function QE(i,e,t){const s=ao(i);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=Zg(e),{host:d,port:m}=YE(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${c}//${d}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})}),XE()}function Zg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function YE(i){const e=Zg(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:Tm(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:Tm(d)}}}function Tm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function XE(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class gd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,t){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}async function JE(i,e){return hi(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ZE(i,e){return ku(i,"POST","/v1/accounts:signInWithPassword",Gi(i,e))}/**
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
 */async function ew(i,e){return ku(i,"POST","/v1/accounts:signInWithEmailLink",Gi(i,e))}async function tw(i,e){return ku(i,"POST","/v1/accounts:signInWithEmailLink",Gi(i,e))}/**
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
 */class Ea extends gd{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ea(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ea(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wm(e,t,"signInWithPassword",ZE);case"emailLink":return ew(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wm(e,s,"signUpPassword",JE);case"emailLink":return tw(e,{idToken:t,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qs(i,e){return ku(i,"POST","/v1/accounts:signInWithIdp",Gi(i,e))}/**
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
 */const nw="http://localhost";class Wi extends gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,c=hd(t,["providerId","signInMethod"]);if(!s||!a)return null;const d=new Wi(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return Qs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Qs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qs(e,t)}buildRequest(){const e={requestUri:nw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ra(t)}return e}}/**
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
 */function rw(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iw(i){const e=la(ua(i)).link,t=e?la(ua(e)).deep_link_id:null,s=la(ua(i)).deep_link_id;return(s?la(ua(s)).link:null)||s||t||e||i}class yd{constructor(e){var t,s,a,c,d,m;const y=la(ua(e)),_=(t=y.apiKey)!==null&&t!==void 0?t:null,I=(s=y.oobCode)!==null&&s!==void 0?s:null,N=rw((a=y.mode)!==null&&a!==void 0?a:null);de(_&&I&&N,"argument-error"),this.apiKey=_,this.operation=N,this.code=I,this.continueUrl=(c=y.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(d=y.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(m=y.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=iw(e);try{return new yd(t)}catch{return null}}}/**
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
 */class lo{constructor(){this.providerId=lo.PROVIDER_ID}static credential(e,t){return Ea._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=yd.parseLink(t);return de(s,"argument-error"),Ea._fromEmailAndCode(e,s.code,s.tenantId)}}lo.PROVIDER_ID="password";lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ey{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends ey{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qr extends ka{constructor(){super("facebook.com")}static credential(e){return Wi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
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
 */class Yr extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Yr.credential(t,s)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
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
 */class Xr extends ka{constructor(){super("github.com")}static credential(e){return Wi._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
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
 */class Jr extends ka{constructor(){super("twitter.com")}static credential(e,t){return Wi._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Jr.credential(t,s)}catch{return null}}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com";Jr.PROVIDER_ID="twitter.com";/**
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
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const c=await gr._fromIdTokenResponse(e,s,a),d=Im(s);return new Zs({user:c,providerId:d,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=Im(s);return new Zs({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function Im(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class gu extends Tr{constructor(e,t,s,a){var c;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new gu(e,t,s,a)}}function ty(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?gu._fromErrorAndOperation(i,c,e,s):c})}async function sw(i,e,t=!1){const s=await _a(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Zs._forOperation(i,"link",s)}/**
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
 */async function ow(i,e,t=!1){const{auth:s}=i;if(pr(s.app))return Promise.reject(si(s));const a="reauthenticate";try{const c=await _a(i,ty(s,a,e,i),t);de(c.idToken,s,"internal-error");const d=pd(c.idToken);de(d,s,"internal-error");const{sub:m}=d;return de(i.uid===m,s,"user-mismatch"),Zs._forOperation(i,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Dn(s,"user-mismatch"),c}}/**
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
 */async function ny(i,e,t=!1){if(pr(i.app))return Promise.reject(si(i));const s="signIn",a=await ty(i,s,e),c=await Zs._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(c.user),c}async function aw(i,e){return ny(ao(i),e)}/**
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
 */async function lw(i){const e=ao(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uw(i,e,t){return pr(i.app)?Promise.reject(si(i)):aw(Qn(i),lo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&lw(i),s})}function cw(i,e,t,s){return Qn(i).onIdTokenChanged(e,t,s)}function hw(i,e,t){return Qn(i).beforeAuthStateChanged(e,t)}function dw(i,e,t,s){return Qn(i).onAuthStateChanged(e,t,s)}function fw(i){return Qn(i).signOut()}const yu="__sak";/**
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
 */class ry{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pw=1e3,mw=10;class iy extends ry{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,m,y)=>{this.notifyListeners(d,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!t&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);xE()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,mw):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},pw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iy.type="LOCAL";const gw=iy;/**
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
 */class sy extends ry{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sy.type="SESSION";const oy=sy;/**
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
 */function yw(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Du(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:c}=t.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(d).map(async _=>_(t.origin,c)),y=await yw(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Du.receivers=[];/**
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
 */function vd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class vw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((m,y)=>{const _=vd("",20);a.port1.start();const I=setTimeout(()=>{y(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(N){const b=N;if(b.data.eventId===_)switch(b.data.status){case"ack":clearTimeout(I),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(b.data.response);break;default:clearTimeout(I),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function qn(){return window}function _w(i){qn().location.href=i}/**
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
 */function ay(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function Ew(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ww(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Tw(){return ay()?self:null}/**
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
 */const ly="firebaseLocalStorageDb",Iw=1,vu="firebaseLocalStorage",uy="fbase_key";class Na{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ou(i,e){return i.transaction([vu],e?"readwrite":"readonly").objectStore(vu)}function Sw(){const i=indexedDB.deleteDatabase(ly);return new Na(i).toPromise()}function $h(){const i=indexedDB.open(ly,Iw);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(vu,{keyPath:uy})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(vu)?e(s):(s.close(),await Sw(),e(await $h()))})})}async function Sm(i,e,t){const s=Ou(i,!0).put({[uy]:e,value:t});return new Na(s).toPromise()}async function Aw(i,e){const t=Ou(i,!1).get(e),s=await new Na(t).toPromise();return s===void 0?null:s.value}function Am(i,e){const t=Ou(i,!0).delete(e);return new Na(t).toPromise()}const Cw=800,Rw=3;class cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $h(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Rw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Du._getInstance(Tw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ew(),!this.activeServiceWorker)return;this.sender=new vw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ww()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $h();return await Sm(e,yu,"1"),await Am(e,yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Aw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Am(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Ou(a,!1).getAll();return new Na(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cy.type="LOCAL";const Pw=cy;new Pa(3e4,6e4);/**
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
 */function kw(i,e){return e?yr(e):(de(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class _d extends gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nw(i){return ny(i.auth,new _d(i),i.bypassAuthState)}function Dw(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),ow(t,new _d(i),i.bypassAuthState)}async function Ow(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),sw(t,new _d(i),i.bypassAuthState)}/**
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
 */class hy{constructor(e,t,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:c,error:d,type:m}=e;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nw;case"linkViaPopup":case"linkViaRedirect":return Ow;case"reauthViaPopup":case"reauthViaRedirect":return Dw;default:Dn(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xw=new Pa(2e3,1e4);class Ws extends hy{constructor(e,t,s,a,c){super(e,t,a,c),this.provider=s,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xw.get())};e()}}Ws.currentPopupAction=null;/**
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
 */const Lw="pendingRedirect",su=new Map;class Vw extends hy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=su.get(this.auth._key());if(!e){try{const s=await Mw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}su.set(this.auth._key(),e)}return this.bypassAuthState||su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mw(i,e){const t=Uw(e),s=bw(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function Fw(i,e){su.set(i._key(),e)}function bw(i){return yr(i._redirectPersistence)}function Uw(i){return iu(Lw,i.config.apiKey,i.name)}async function zw(i,e,t=!1){if(pr(i.app))return Promise.reject(si(i));const s=ao(i),a=kw(s,e),d=await new Vw(s,a,t).execute();return d&&!t&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const jw=10*60*1e3;class Bw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$w(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!dy(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Hn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cm(e))}saveEventToCache(e){this.cachedEventUids.add(Cm(e)),this.lastProcessedEventTime=Date.now()}}function Cm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function dy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $w(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dy(i);default:return!1}}/**
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
 */async function Hw(i,e={}){return hi(i,"GET","/v1/projects",e)}/**
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
 */const qw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ww=/^https?/;async function Kw(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Hw(i);for(const t of e)try{if(Gw(t))return}catch{}Dn(i,"unauthorized-domain")}function Gw(i){const e=jh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===s}if(!Ww.test(t))return!1;if(qw.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const Qw=new Pa(3e4,6e4);function Rm(){const i=qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Yw(i){return new Promise((e,t)=>{var s,a,c;function d(){Rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rm(),t(Hn(i,"network-request-failed"))},timeout:Qw.get()})}if(!((a=(s=qn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=qn().gapi)===null||c===void 0)&&c.load)d();else{const m=BE("iframefcb");return qn()[m]=()=>{gapi.load?d():t(Hn(i,"network-request-failed"))},Xg(`${jE()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw ou=null,e})}let ou=null;function Xw(i){return ou=ou||Yw(i),ou}/**
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
 */const Jw=new Pa(5e3,15e3),Zw="__/auth/iframe",eT="emulator/auth/iframe",tT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rT(i){const e=i.config;de(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?fd(e,eT):`https://${i.config.authDomain}/${Zw}`,s={apiKey:e.apiKey,appName:i.name,v:oo},a=nT.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${Ra(s).slice(1)}`}async function iT(i){const e=await Xw(i),t=qn().gapi;return de(t,i,"internal-error"),e.open({where:document.body,url:rT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tT,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=Hn(i,"network-request-failed"),m=qn().setTimeout(()=>{c(d)},Jw.get());function y(){qn().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{c(d)})}))}/**
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
 */const sT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oT=500,aT=600,lT="_blank",uT="http://localhost";class Pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cT(i,e,t,s=oT,a=aT){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},sT),{width:s.toString(),height:a.toString(),top:c,left:d}),_=Vt().toLowerCase();t&&(m=Hg(_)?lT:t),Bg(_)&&(e=e||uT,y.scrollbars="yes");const I=Object.entries(y).reduce((b,[$,X])=>`${b}${$}=${X},`,"");if(OE(_)&&m!=="_self")return hT(e||"",m),new Pm(null);const N=window.open(e||"",m,I);de(N,i,"popup-blocked");try{N.focus()}catch{}return new Pm(N)}function hT(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const dT="__/auth/handler",fT="emulator/auth/handler",pT=encodeURIComponent("fac");async function km(i,e,t,s,a,c){de(i.config.authDomain,i,"auth-domain-config-required"),de(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:oo,eventId:a};if(e instanceof ey){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",e0(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,N]of Object.entries({}))d[I]=N}if(e instanceof ka){const I=e.getScopes().filter(N=>N!=="");I.length>0&&(d.scopes=I.join(","))}i.tenantId&&(d.tid=i.tenantId);const m=d;for(const I of Object.keys(m))m[I]===void 0&&delete m[I];const y=await i._getAppCheckToken(),_=y?`#${pT}=${encodeURIComponent(y)}`:"";return`${mT(i)}?${Ra(m).slice(1)}${_}`}function mT({config:i}){return i.emulator?fd(i,fT):`https://${i.authDomain}/${dT}`}/**
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
 */const Ph="webStorageSupport";class gT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oy,this._completeRedirectFn=zw,this._overrideRedirectResult=Fw}async _openPopup(e,t,s,a){var c;Er((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await km(e,t,s,jh(),a);return cT(e,d,vd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const c=await km(e,t,s,jh(),a);return _w(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:c}=this.eventManagers[t];return a?Promise.resolve(a):(Er(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await iT(e),s=new Bw(e);return t.register("authEvent",a=>(de(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ph,{type:Ph},a=>{var c;const d=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[Ph];d!==void 0&&t(!!d),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qg()||$g()||md()}}const yT=gT;var Nm="@firebase/auth",Dm="1.8.1";/**
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
 */class vT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _T(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ET(i){Js(new qi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=s.options;de(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:d,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yg(i)},_=new bE(s,a,c,y);return GE(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Js(new qi("auth-internal",e=>{const t=ao(e.getProvider("auth").getImmediate());return(s=>new vT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ii(Nm,Dm,_T(i)),ii(Nm,Dm,"esm2017")}/**
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
 */const wT=5*60,TT=Cg("authIdTokenMaxAge")||wT;let Om=null;const IT=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>TT)return;const a=t==null?void 0:t.token;Om!==a&&(Om=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ST(i=Ng()){const e=cd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=KE(i,{popupRedirectResolver:yT,persistence:[Pw,gw,oy]}),s=Cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=IT(c.toString());hw(t,d,()=>d(t.currentUser)),cw(t,m=>d(m))}}const a=Sg("auth");return a&&QE(t,`http://${a}`),t}function AT(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}UE({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Hn("internal-error");c.customData=a,t(c)},s.type="text/javascript",s.charset="UTF-8",AT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ET("Browser");var xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bi,fy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,T){function A(){}A.prototype=T.prototype,k.D=T.prototype,k.prototype=new A,k.prototype.constructor=k,k.C=function(R,D,x){for(var S=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)S[Ze-2]=arguments[Ze];return T.prototype[D].apply(R,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,T,A){A||(A=0);var R=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)R[D]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(D=0;16>D;++D)R[D]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=k.g[0],A=k.g[1],D=k.g[2];var x=k.g[3],S=T+(x^A&(D^x))+R[0]+3614090360&4294967295;T=A+(S<<7&4294967295|S>>>25),S=x+(D^T&(A^D))+R[1]+3905402710&4294967295,x=T+(S<<12&4294967295|S>>>20),S=D+(A^x&(T^A))+R[2]+606105819&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(T^D&(x^T))+R[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(x^A&(D^x))+R[4]+4118548399&4294967295,T=A+(S<<7&4294967295|S>>>25),S=x+(D^T&(A^D))+R[5]+1200080426&4294967295,x=T+(S<<12&4294967295|S>>>20),S=D+(A^x&(T^A))+R[6]+2821735955&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(T^D&(x^T))+R[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(x^A&(D^x))+R[8]+1770035416&4294967295,T=A+(S<<7&4294967295|S>>>25),S=x+(D^T&(A^D))+R[9]+2336552879&4294967295,x=T+(S<<12&4294967295|S>>>20),S=D+(A^x&(T^A))+R[10]+4294925233&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(T^D&(x^T))+R[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(x^A&(D^x))+R[12]+1804603682&4294967295,T=A+(S<<7&4294967295|S>>>25),S=x+(D^T&(A^D))+R[13]+4254626195&4294967295,x=T+(S<<12&4294967295|S>>>20),S=D+(A^x&(T^A))+R[14]+2792965006&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(T^D&(x^T))+R[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(D^x&(A^D))+R[1]+4129170786&4294967295,T=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(T^A))+R[6]+3225465664&4294967295,x=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(x^T))+R[11]+643717713&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^T&(D^x))+R[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(D^x&(A^D))+R[5]+3593408605&4294967295,T=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(T^A))+R[10]+38016083&4294967295,x=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(x^T))+R[15]+3634488961&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^T&(D^x))+R[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(D^x&(A^D))+R[9]+568446438&4294967295,T=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(T^A))+R[14]+3275163606&4294967295,x=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(x^T))+R[3]+4107603335&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^T&(D^x))+R[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(D^x&(A^D))+R[13]+2850285829&4294967295,T=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(T^A))+R[2]+4243563512&4294967295,x=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(x^T))+R[7]+1735328473&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^T&(D^x))+R[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(A^D^x)+R[5]+4294588738&4294967295,T=A+(S<<4&4294967295|S>>>28),S=x+(T^A^D)+R[8]+2272392833&4294967295,x=T+(S<<11&4294967295|S>>>21),S=D+(x^T^A)+R[11]+1839030562&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^T)+R[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(A^D^x)+R[1]+2763975236&4294967295,T=A+(S<<4&4294967295|S>>>28),S=x+(T^A^D)+R[4]+1272893353&4294967295,x=T+(S<<11&4294967295|S>>>21),S=D+(x^T^A)+R[7]+4139469664&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^T)+R[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(A^D^x)+R[13]+681279174&4294967295,T=A+(S<<4&4294967295|S>>>28),S=x+(T^A^D)+R[0]+3936430074&4294967295,x=T+(S<<11&4294967295|S>>>21),S=D+(x^T^A)+R[3]+3572445317&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^T)+R[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(A^D^x)+R[9]+3654602809&4294967295,T=A+(S<<4&4294967295|S>>>28),S=x+(T^A^D)+R[12]+3873151461&4294967295,x=T+(S<<11&4294967295|S>>>21),S=D+(x^T^A)+R[15]+530742520&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^T)+R[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(D^(A|~x))+R[0]+4096336452&4294967295,T=A+(S<<6&4294967295|S>>>26),S=x+(A^(T|~D))+R[7]+1126891415&4294967295,x=T+(S<<10&4294967295|S>>>22),S=D+(T^(x|~A))+R[14]+2878612391&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~T))+R[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=T+(D^(A|~x))+R[12]+1700485571&4294967295,T=A+(S<<6&4294967295|S>>>26),S=x+(A^(T|~D))+R[3]+2399980690&4294967295,x=T+(S<<10&4294967295|S>>>22),S=D+(T^(x|~A))+R[10]+4293915773&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~T))+R[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=T+(D^(A|~x))+R[8]+1873313359&4294967295,T=A+(S<<6&4294967295|S>>>26),S=x+(A^(T|~D))+R[15]+4264355552&4294967295,x=T+(S<<10&4294967295|S>>>22),S=D+(T^(x|~A))+R[6]+2734768916&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~T))+R[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=T+(D^(A|~x))+R[4]+4149444226&4294967295,T=A+(S<<6&4294967295|S>>>26),S=x+(A^(T|~D))+R[11]+3174756917&4294967295,x=T+(S<<10&4294967295|S>>>22),S=D+(T^(x|~A))+R[2]+718787259&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~T))+R[9]+3951481745&4294967295,k.g[0]=k.g[0]+T&4294967295,k.g[1]=k.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+D&4294967295,k.g[3]=k.g[3]+x&4294967295}s.prototype.u=function(k,T){T===void 0&&(T=k.length);for(var A=T-this.blockSize,R=this.B,D=this.h,x=0;x<T;){if(D==0)for(;x<=A;)a(this,k,x),x+=this.blockSize;if(typeof k=="string"){for(;x<T;)if(R[D++]=k.charCodeAt(x++),D==this.blockSize){a(this,R),D=0;break}}else for(;x<T;)if(R[D++]=k[x++],D==this.blockSize){a(this,R),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var T=1;T<k.length-8;++T)k[T]=0;var A=8*this.o;for(T=k.length-8;T<k.length;++T)k[T]=A&255,A/=256;for(this.u(k),k=Array(16),T=A=0;4>T;++T)for(var R=0;32>R;R+=8)k[A++]=this.g[T]>>>R&255;return k};function c(k,T){var A=m;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=T(k)}function d(k,T){this.h=T;for(var A=[],R=!0,D=k.length-1;0<=D;D--){var x=k[D]|0;R&&x==T||(A[D]=x,R=!1)}this.g=A}var m={};function y(k){return-128<=k&&128>k?c(k,function(T){return new d([T|0],0>T?-1:0)}):new d([k|0],0>k?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return N;if(0>k)return K(_(-k));for(var T=[],A=1,R=0;k>=A;R++)T[R]=k/A|0,A*=4294967296;return new d(T,0)}function I(k,T){if(k.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k.charAt(0)=="-")return K(I(k.substring(1),T));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(T,8)),R=N,D=0;D<k.length;D+=8){var x=Math.min(8,k.length-D),S=parseInt(k.substring(D,D+x),T);8>x?(x=_(Math.pow(T,x)),R=R.j(x).add(_(S))):(R=R.j(A),R=R.add(_(S)))}return R}var N=y(0),b=y(1),$=y(16777216);i=d.prototype,i.m=function(){if(J(this))return-K(this).m();for(var k=0,T=1,A=0;A<this.g.length;A++){var R=this.i(A);k+=(0<=R?R:4294967296+R)*T,T*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(X(this))return"0";if(J(this))return"-"+K(this).toString(k);for(var T=_(Math.pow(k,6)),A=this,R="";;){var D=_e(A,T).g;A=Ce(A,D.j(T));var x=((0<A.g.length?A.g[0]:A.h)>>>0).toString(k);if(A=D,X(A))return x+R;for(;6>x.length;)x="0"+x;R=x+R}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function X(k){if(k.h!=0)return!1;for(var T=0;T<k.g.length;T++)if(k.g[T]!=0)return!1;return!0}function J(k){return k.h==-1}i.l=function(k){return k=Ce(this,k),J(k)?-1:X(k)?0:1};function K(k){for(var T=k.g.length,A=[],R=0;R<T;R++)A[R]=~k.g[R];return new d(A,~k.h).add(b)}i.abs=function(){return J(this)?K(this):this},i.add=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],R=0,D=0;D<=T;D++){var x=R+(this.i(D)&65535)+(k.i(D)&65535),S=(x>>>16)+(this.i(D)>>>16)+(k.i(D)>>>16);R=S>>>16,x&=65535,S&=65535,A[D]=S<<16|x}return new d(A,A[A.length-1]&-2147483648?-1:0)};function Ce(k,T){return k.add(K(T))}i.j=function(k){if(X(this)||X(k))return N;if(J(this))return J(k)?K(this).j(K(k)):K(K(this).j(k));if(J(k))return K(this.j(K(k)));if(0>this.l($)&&0>k.l($))return _(this.m()*k.m());for(var T=this.g.length+k.g.length,A=[],R=0;R<2*T;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var D=0;D<k.g.length;D++){var x=this.i(R)>>>16,S=this.i(R)&65535,Ze=k.i(D)>>>16,Ct=k.i(D)&65535;A[2*R+2*D]+=S*Ct,Ie(A,2*R+2*D),A[2*R+2*D+1]+=x*Ct,Ie(A,2*R+2*D+1),A[2*R+2*D+1]+=S*Ze,Ie(A,2*R+2*D+1),A[2*R+2*D+2]+=x*Ze,Ie(A,2*R+2*D+2)}for(R=0;R<T;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=T;R<2*T;R++)A[R]=0;return new d(A,0)};function Ie(k,T){for(;(k[T]&65535)!=k[T];)k[T+1]+=k[T]>>>16,k[T]&=65535,T++}function ye(k,T){this.g=k,this.h=T}function _e(k,T){if(X(T))throw Error("division by zero");if(X(k))return new ye(N,N);if(J(k))return T=_e(K(k),T),new ye(K(T.g),K(T.h));if(J(T))return T=_e(k,K(T)),new ye(K(T.g),T.h);if(30<k.g.length){if(J(k)||J(T))throw Error("slowDivide_ only works with positive integers.");for(var A=b,R=T;0>=R.l(k);)A=qe(A),R=qe(R);var D=Te(A,1),x=Te(R,1);for(R=Te(R,2),A=Te(A,2);!X(R);){var S=x.add(R);0>=S.l(k)&&(D=D.add(A),x=S),R=Te(R,1),A=Te(A,1)}return T=Ce(k,D.j(T)),new ye(D,T)}for(D=N;0<=k.l(T);){for(A=Math.max(1,Math.floor(k.m()/T.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),x=_(A),S=x.j(T);J(S)||0<S.l(k);)A-=R,x=_(A),S=x.j(T);X(x)&&(x=b),D=D.add(x),k=Ce(k,S)}return new ye(D,k)}i.A=function(k){return _e(this,k).h},i.and=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],R=0;R<T;R++)A[R]=this.i(R)&k.i(R);return new d(A,this.h&k.h)},i.or=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],R=0;R<T;R++)A[R]=this.i(R)|k.i(R);return new d(A,this.h|k.h)},i.xor=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],R=0;R<T;R++)A[R]=this.i(R)^k.i(R);return new d(A,this.h^k.h)};function qe(k){for(var T=k.g.length+1,A=[],R=0;R<T;R++)A[R]=k.i(R)<<1|k.i(R-1)>>>31;return new d(A,k.h)}function Te(k,T){var A=T>>5;T%=32;for(var R=k.g.length-A,D=[],x=0;x<R;x++)D[x]=0<T?k.i(x+A)>>>T|k.i(x+A+1)<<32-T:k.i(x+A);return new d(D,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,fy=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=_,d.fromString=I,Bi=d}).apply(typeof xm<"u"?xm:typeof self<"u"?self:typeof window<"u"?window:{});var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var py,ca,my,au,Hh,gy,yy,vy;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jl=="object"&&Jl];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function c(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var U=g++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(l){return l||function(){return c(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function I(l,f,g){return l.call.apply(l.bind,arguments)}function N(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function b(l,f,g){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:N,b.apply(null,arguments)}function $(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function X(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var G=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)G[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,G)}}function J(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function K(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let G=0;G<U;G++)l[L+G]=E[G]}else l.push(E)}}class Ce{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Ie(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function _e(l){return _e[" "](l),l}_e[" "]=function(){};var qe=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Te(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function k(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let U=0;U<A.length;U++)g=A[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function x(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ae;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,g){const E=Ct.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Ct=new Ce(()=>new Rt,l=>l.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Q=!1,ae=new Ze,ee=()=>{const l=m.Promise.resolve(void 0);be=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){x(g)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Q=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Ee(l,f){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(qe){e:{try{_e(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Re[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ee.aa.h.call(this)}}X(Ee,oe);var Re={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Yn(l){this.src=l,this.g={},this.h=0}Yn.prototype.add=function(l,f,g,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var G=Ir(l,f,E,L);return-1<G?(f=l[G],g||(f.fa=!1)):(f=new ze(f,this.src,U,!!E,L),f.fa=g,l.push(f)),f};function Yi(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(pt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ir(l,f,g,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==E)return L}return-1}var di="closure_lm_"+(1e6*Math.random()|0),Xi={};function fo(l,f,g,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)fo(l,f[U],g,E,L);return null}return g=go(g),l&&l[Ve]?l.K(f,g,_(E)?!!E.capture:!!E,L):po(l,f,g,!1,E,L)}function po(l,f,g,E,L,U){if(!f)throw Error("Invalid event type");var G=_(L)?!!L.capture:!!L,Fe=Zi(l);if(Fe||(l[di]=Fe=new Yn(l)),g=Fe.add(f,g,E,G,U),g.proxy)return g;if(E=Va(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)ve||(L=G),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(Jn(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Va(){function l(g){return f.call(l.src,l.listener,g)}const f=mo;return l}function Ji(l,f,g,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)Ji(l,f[U],g,E,L);else E=_(E)?!!E.capture:!!E,g=go(g),l&&l[Ve]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],g=Ir(U,g,E,L),-1<g&&(pt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=Zi(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Ir(f,g,E,L)),(g=-1<l?f[l]:null)&&Xn(g))}function Xn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Ve])Yi(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(Jn(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=Zi(f))?(Yi(g,l),g.h==0&&(g.src=null,f[di]=null)):pt(l)}}}function Jn(l){return l in Xi?Xi[l]:Xi[l]="on"+l}function mo(l,f){if(l.da)l=!0;else{f=new Ee(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&Xn(l),l=g.call(E,f)}return l}function Zi(l){return l=l[di],l instanceof Yn?l:null}var es="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(l){return typeof l=="function"?l:(l[es]||(l[es]=function(f){return l.handleEvent(f)}),l[es])}function at(){z.call(this),this.i=new Yn(this),this.M=this,this.F=null}X(at,z),at.prototype[Ve]=!0,at.prototype.removeEventListener=function(l,f,g,E){Ji(this,l,f,g,E)};function lt(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new oe(f,l);else if(f instanceof oe)f.target=f.target||l;else{var L=f;f=new oe(E,l),R(f,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var G=f.g=g[U];L=Zn(G,E,!0,f)&&L}if(G=f.g=l,L=Zn(G,E,!0,f)&&L,L=Zn(G,E,!1,f)&&L,g)for(U=0;U<g.length;U++)G=f.g=g[U],L=Zn(G,E,!1,f)&&L}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)pt(g[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},at.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function Zn(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var G=f[U];if(G&&!G.da&&G.capture==g){var Fe=G.listener,ut=G.ha||G.src;G.fa&&Yi(l.i,G),L=Fe.call(ut,E)!==!1&&L}}return L&&!E.defaultPrevented}function yo(l,f,g){if(typeof l=="function")g&&(l=b(l,g));else if(l&&typeof l.handleEvent=="function")l=b(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Sr(l){l.g=yo(()=>{l.g=null,l.i&&(l.i=!1,Sr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class fi extends z{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Sr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(l){z.call(this),this.h=l,this.g={}}X(pi,z);var vo=[];function _o(l){Te(l.g,function(f,g){this.g.hasOwnProperty(g)&&Xn(f)},l),l.g={}}pi.prototype.N=function(){pi.aa.N.call(this),_o(this)},pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Eo=m.JSON.stringify,wo=m.JSON.parse,To=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function mi(){}mi.prototype.h=null;function ts(l){return l.h||(l.h=l.i())}function ns(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function On(){oe.call(this,"d")}X(On,oe);function rs(){oe.call(this,"c")}X(rs,oe);var xn={},Io=null;function gi(){return Io=Io||new at}xn.La="serverreachability";function So(l){oe.call(this,xn.La,l)}X(So,oe);function er(l){const f=gi();lt(f,new So(f))}xn.STAT_EVENT="statevent";function Ao(l,f){oe.call(this,xn.STAT_EVENT,l),this.stat=f}X(Ao,oe);function et(l){const f=gi();lt(f,new Ao(f,l))}xn.Ma="timingevent";function is(l,f){oe.call(this,xn.Ma,l),this.size=f}X(is,oe);function gn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function yi(){this.g=!0}yi.prototype.xa=function(){this.g=!1};function vi(l,f,g,E,L,U){l.info(function(){if(l.g)if(U)for(var G="",Fe=U.split("&"),ut=0;ut<Fe.length;ut++){var Pe=Fe[ut].split("=");if(1<Pe.length){var mt=Pe[0];Pe=Pe[1];var it=mt.split("_");G=2<=it.length&&it[1]=="type"?G+(mt+"="+Pe+"&"):G+(mt+"=redacted&")}}else G=null;else G=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+G})}function ss(l,f,g,E,L,U,G){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+U+" "+G})}function yn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+qu(l,g)+(E?" "+E:"")})}function Co(l,f){l.info(function(){return"TIMEOUT: "+f})}yi.prototype.info=function(){};function qu(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return Eo(g)}catch{return f}}var os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ma={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function _i(){}X(_i,mi),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},vn=new _i;function _n(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Ro={},as={};function ls(l,f,g){l.L=1,l.v=kr(Zt(f)),l.m=g,l.P=!0,Po(l,null)}function Po(l,f){l.F=Date.now(),je(l),l.A=Zt(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Dr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new Fa,l.g=tl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new fi(b(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(vo[0]=L.toString()),L=vo);for(var U=0;U<L.length;U++){var G=fo(g,L[U],E||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),er(),vi(l.i,l.u,l.A,l.l,l.R,l.m)}_n.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},_n.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Lo(this.g)))){this.J||it!=4||f==7||(f==8||0>=un?er(3):er(2)),Ei(this);var g=this.g.Z();this.X=g;t:if(ba(this)){var E=Lo(this.g);l="";var L=E.length,U=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Ar(this);var G="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,ss(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ut=this.g;if((Fe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ie(Fe)){var Pe=Fe;break t}}Pe=null}if(g=Pe)yn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ko(this,g);else{this.o=!1,this.s=3,et(12),an(this),Ar(this);break e}}if(this.P){g=!0;let tn;for(;!this.J&&this.C<G.length;)if(tn=Wu(this,G),tn==as){it==4&&(this.s=4,et(14),g=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Ro){this.s=4,et(15),yn(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else yn(this.i,this.l,tn,null),ko(this,tn);if(ba(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||G.length!=0||this.h.h||(this.s=1,et(16),g=!1),this.o=this.o&&g,!g)yn(this.i,this.l,G,"[Invalid Chunked Response]"),an(this),Ar(this);else if(0<G.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Mo(mt),mt.M=!0,et(11))}}else yn(this.i,this.l,G,null),ko(this,G);it==4&&an(this),this.o&&!this.J&&(it==4?_s(this.j,this):(this.o=!1,je(this)))}else ps(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),an(this),Ar(this)}}}catch{}finally{}};function ba(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Wu(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?as:(g=Number(f.substring(g,E)),isNaN(g)?Ro:(E+=1,E+g>f.length?as:(f=f.slice(E,E+g),l.C=E+g,f)))}_n.prototype.cancel=function(){this.J=!0,an(this)};function je(l){l.S=Date.now()+l.I,Ua(l,l.I)}function Ua(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=gn(b(l.ba,l),f)}function Ei(l){l.B&&(m.clearTimeout(l.B),l.B=null)}_n.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Co(this.i,this.A),this.L!=2&&(er(),et(17)),an(this),this.s=2,Ar(this)):Ua(this,this.S-l)};function Ar(l){l.j.G==0||l.J||_s(l.j,l)}function an(l){Ei(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,_o(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function ko(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Mt(g.h,l))){if(!l.K&&Mt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)vs(g),Sn(g);else break e;ys(g),et(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=gn(b(g.Za,g),6e3));if(1>=ja(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else sr(g,11)}else if((l.K||g.g==l)&&vs(g),!Ie(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let Pe=L[f];if(g.T=Pe[0],Pe=Pe[1],g.G==2)if(Pe[0]=="c"){g.K=Pe[1],g.ia=Pe[2];const mt=Pe[3];mt!=null&&(g.la=mt,g.j.info("VER="+g.la));const it=Pe[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const un=Pe[5];un!=null&&typeof un=="number"&&0<un&&(E=1.5*un,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const tn=l.g;if(tn){const Ri=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var U=E.h;U.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(No(U,U.h),U.h=null))}if(E.D){const ws=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;ws&&(E.ya=ws,Ue(E.I,E.D,ws))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var G=l;if(E.qa=el(E,E.J?E.ia:null,E.W),G.K){Ba(E.h,G);var Fe=G,ut=E.L;ut&&(Fe.I=ut),Fe.B&&(Ei(Fe),je(Fe)),E.g=G}else Ci(E);0<g.i.length&&Fn(g)}else Pe[0]!="stop"&&Pe[0]!="close"||sr(g,7);else g.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?sr(g,7):wt(g):Pe[0]!="noop"&&g.l&&g.l.ta(Pe),g.v=0)}}er(4)}catch{}}var za=class{constructor(l,f){this.g=l,this.map=f}};function wi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ja(l){return l.h?1:l.g?l.g.size:0}function Mt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function No(l,f){l.g?l.g.add(f):l.h=f}function Ba(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}wi.prototype.cancel=function(){if(this.i=$a(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function $a(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return J(l.i)}function us(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function cs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Cr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=cs(l),E=us(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],g&&g[U],l)}var Ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ku(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var U=l[g].substring(0,E);L=l[g].substring(E+1)}else U=l[g];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function tr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof tr){this.h=l.h,Ii(this,l.j),this.o=l.o,this.g=l.g,Rr(this,l.s),this.l=l.l;var f=l.i,g=new Ln;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Pr(this,g),this.m=l.m}else l&&(f=String(l).match(Ti))?(this.h=!1,Ii(this,f[1]||"",!0),this.o=Ae(f[2]||""),this.g=Ae(f[3]||"",!0),Rr(this,f[4]),this.l=Ae(f[5]||"",!0),Pr(this,f[6]||"",!0),this.m=Ae(f[7]||"")):(this.h=!1,this.i=new Ln(null,this.h))}tr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Nr(f,hs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Nr(f,hs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Nr(g,g.charAt(0)=="/"?Wa:qa,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Nr(g,Do)),l.join("")};function Zt(l){return new tr(l)}function Ii(l,f,g){l.j=g?Ae(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Rr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Pr(l,f,g){f instanceof Ln?(l.i=f,Vn(l.i,l.h)):(g||(f=Nr(f,Ka)),l.i=new Ln(f,l.h))}function Ue(l,f,g){l.i.set(f,g)}function kr(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ae(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Nr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Ha),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ha(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var hs=/[#\/\?@]/g,qa=/[#\?:]/g,Wa=/[#\?]/g,Ka=/[#\?@]/g,Do=/#/g;function Ln(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&Ku(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Ln.prototype,i.add=function(l,f){Et(this),this.i=null,l=ln(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function En(l,f){Et(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function wn(l,f){return Et(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)g.push(f[E])}return g},i.V=function(l){Et(this);let f=[];if(typeof l=="string")wn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return Et(this),this.i=null,l=ln(this,l),wn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Dr(l,f,g){En(l,f),0<g.length&&(l.i=null,l.g.set(ln(l,f),J(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const U=encodeURIComponent(String(E)),G=this.V(E);for(E=0;E<G.length;E++){var L=U;G[E]!==""&&(L+="="+encodeURIComponent(String(G[E]))),l.push(L)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Vn(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(En(this,E),Dr(this,L,g))},l)),l.j=f}function Gu(l,f){const g=new yi;if(m.Image){const E=new Image;E.onload=$(Bt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=$(Bt,g,"TestLoadImage: error",!1,f,E),E.onabort=$(Bt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=$(Bt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Ga(l,f){const g=new yi,E=new AbortController,L=setTimeout(()=>{E.abort(),Bt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Bt(g,"TestPingServer: ok",!0,f):Bt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Bt(g,"TestPingServer: error",!1,f)})}function Bt(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function Qu(){this.g=new To}function Qa(l,f,g){const E=g||"";try{Cr(l,function(L,U){let G=L;_(L)&&(G=Eo(L)),f.push(E+U+"="+encodeURIComponent(G))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function nr(l){this.l=l.Ub||null,this.j=l.eb||!1}X(nr,mi),nr.prototype.g=function(){return new Si(this.l,this.j)},nr.prototype.i=function(l){return function(){return l}}({});function Si(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Si,at),i=Si.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,In(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ya(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ya(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Tn(this):In(this),this.readyState==3&&Ya(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Tn(this))},i.Qa=function(l){this.g&&(this.response=l,Tn(this))},i.ga=function(){this.g&&Tn(this)};function Tn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,In(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function rr(l){let f="";return Te(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Or(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=rr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ue(l,f,g))}function We(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(We,at);var Yu=/^https?$/i,Oo=["POST","PUT"];i=We.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?ts(this.o):ts(vn),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Ai(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Oo,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,G]of g)this.g.setRequestHeader(U,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Ai(this,U)}};function Ai(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ds(l),en(l)}function ds(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),We.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},i.bb=function(){xo(this)};function xo(l){if(l.h&&typeof d<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)yo(l.Ea,0,l);else if(lt(l,"readystatechange"),$t(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=G===0){var L=String(l.D).match(Ti)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Yu.test(L?L.toLowerCase():"")}g=E}if(g)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var U=2<$t(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ds(l)}}finally{en(l)}}}}function en(l,f){if(l.g){fs(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{g.onreadystatechange=E}catch{}}}function fs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),wo(f)}};function Lo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ps(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(Ie(l[E]))continue;var g=D(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[L]||[];f[L]=U,U.push(g)}k(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Vo(l){this.Aa=0,this.i=[],this.j=new yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mn("baseRetryDelayMs",5e3,l),this.cb=Mn("retryDelaySeedMs",1e4,l),this.Wa=Mn("forwardChannelMaxRetries",2,l),this.wa=Mn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new wi(l&&l.concurrentRequestLimit),this.Da=new Qu,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Vo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){et(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=el(this,null,this.W),Fn(this)};function wt(l){if(ms(l),l.G==3){var f=l.U++,g=Zt(l.I);if(Ue(g,"SID",l.K),Ue(g,"RID",f),Ue(g,"TYPE","terminate"),ir(l,g),f=new _n(l,l.j,f),f.L=2,f.v=kr(Zt(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=tl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),je(f)}Za(l)}function Sn(l){l.g&&(Mo(l),l.g.cancel(),l.g=null)}function ms(l){Sn(l),l.u&&(m.clearTimeout(l.u),l.u=null),vs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Fn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;be||ee(),Q||(be(),Q=!0),ae.add(f,l),l.B=0}}function Xu(l,f){return ja(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=gn(b(l.Ga,l,f),Ja(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new _n(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),R(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=xr(this,L,f),g=Zt(this.I),Ue(g,"RID",l),Ue(g,"CVER",22),this.D&&Ue(g,"X-HTTP-Session-Id",this.D),ir(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(rr(U)))+"&"+f:this.m&&Or(g,this.m,U)),No(this.h,L),this.Ua&&Ue(g,"TYPE","init"),this.P?(Ue(g,"$req",f),Ue(g,"SID","null"),L.T=!0,ls(L,g,null)):ls(L,g,f),this.G=2}}else this.G==3&&(l?gs(this,l):this.i.length==0||Jt(this.h)||gs(this))};function gs(l,f){var g;f?g=f.l:g=l.U++;const E=Zt(l.I);Ue(E,"SID",l.K),Ue(E,"RID",g),Ue(E,"AID",l.T),ir(l,E),l.m&&l.o&&Or(E,l.m,l.o),g=new _n(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=xr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),No(l.h,g),ls(g,E,f)}function ir(l,f){l.H&&Te(l.H,function(g,E){Ue(f,E,g)}),l.l&&Cr({},function(g,E){Ue(f,E,g)})}function xr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?b(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const G=["count="+g];U==-1?0<g?(U=L[0].g,G.push("ofs="+U)):U=0:G.push("ofs="+U);let Fe=!0;for(let ut=0;ut<g;ut++){let Pe=L[ut].g;const mt=L[ut].map;if(Pe-=U,0>Pe)U=Math.max(0,L[ut].g-100),Fe=!1;else try{Qa(mt,G,"req"+Pe+"_")}catch{E&&E(mt)}}if(Fe){E=G.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Ci(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;be||ee(),Q||(be(),Q=!0),ae.add(f,l),l.v=0}}function ys(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=gn(b(l.Fa,l),Ja(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Xa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=gn(b(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),Sn(this),Xa(this))};function Mo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Xa(l){l.g=new _n(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);Ue(f,"RID","rpc"),Ue(f,"SID",l.K),Ue(f,"AID",l.T),Ue(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(f,"TO",l.ja),Ue(f,"TYPE","xmlhttp"),ir(l,f),l.m&&l.o&&Or(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=kr(Zt(f)),g.m=null,g.P=!0,Po(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Sn(this),ys(this),et(19))};function vs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function _s(l,f){var g=null;if(l.g==f){vs(l),Mo(l),l.g=null;var E=2}else if(Mt(l.h,f))g=f.D,Ba(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=gi(),lt(E,new is(E,g)),Fn(l)}else Ci(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Xu(l,f)||E==2&&ys(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:sr(l,5);break;case 4:sr(l,10);break;case 3:sr(l,6);break;default:sr(l,2)}}}function Ja(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function sr(l,f){if(l.j.info("Error code "+f),f==2){var g=b(l.fb,l),E=l.Xa;const L=!E;E=new tr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ii(E,"https"),kr(E),L?Gu(E.toString(),g):Ga(E.toString(),g)}else et(2);l.G=0,l.l&&l.l.sa(f),Za(l),ms(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Za(l){if(l.G=0,l.ka=[],l.l){const f=$a(l.h);(f.length!=0||l.i.length!=0)&&(K(l.ka,f),K(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function el(l,f,g){var E=g instanceof tr?Zt(g):new tr(g);if(E.g!="")f&&(E.g=f+"."+E.g),Rr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new tr(null);E&&Ii(U,E),f&&(U.g=f),L&&Rr(U,L),g&&(U.l=g),E=U}return g=l.D,f=l.ya,g&&f&&Ue(E,g,f),Ue(E,"VER",l.la),ir(l,E),E}function tl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new We(new nr({eb:g})):new We(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fo(){}i=Fo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Es(){}Es.prototype.g=function(l,f){return new Ft(l,f)};function Ft(l,f){at.call(this),this.g=new Vo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!Ie(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!Ie(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new bn(this)}X(Ft,at),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){wt(this.g)},Ft.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Eo(l),l=g);f.i.push(new za(f.Ya++,l)),f.G==3&&Fn(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,wt(this.g),delete this.g,Ft.aa.N.call(this)};function nl(l){On.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}X(nl,On);function rl(){rs.call(this),this.status=1}X(rl,rs);function bn(l){this.g=l}X(bn,Fo),bn.prototype.ua=function(){lt(this.g,"a")},bn.prototype.ta=function(l){lt(this.g,new nl(l))},bn.prototype.sa=function(l){lt(this.g,new rl)},bn.prototype.ra=function(){lt(this.g,"b")},Es.prototype.createWebChannel=Es.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,vy=function(){return new Es},yy=function(){return gi()},gy=xn,Hh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,au=os,Ma.COMPLETE="complete",my=Ma,ns.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",at.prototype.listen=at.prototype.K,ca=ns,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,py=We}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});const Lm="@firebase/firestore";/**
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
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */let uo="11.0.2";/**
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
 */const Ki=new ld("@firebase/firestore");function Bs(){return Ki.logLevel}function te(i,...e){if(Ki.logLevel<=Se.DEBUG){const t=e.map(Ed);Ki.debug(`Firestore (${uo}): ${i}`,...t)}}function wr(i,...e){if(Ki.logLevel<=Se.ERROR){const t=e.map(Ed);Ki.error(`Firestore (${uo}): ${i}`,...t)}}function eo(i,...e){if(Ki.logLevel<=Se.WARN){const t=e.map(Ed);Ki.warn(`Firestore (${uo}): ${i}`,...t)}}function Ed(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function ge(i="Unexpected state"){const e=`FIRESTORE (${uo}) INTERNAL ASSERTION FAILED: `+i;throw wr(e),new Error(e)}function Ye(i,e){i||ge()}function De(i,e){return i}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Tr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $i{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class _y{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xt.UNAUTHENTICATED))}shutdown(){}}class RT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class PT{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let c=new $i;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new $i,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const y=c;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new $i)}},0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string"),new _y(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new xt(e)}}class kT{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class NT{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new kT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ye(this.o===void 0);const s=c=>{c.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.R;return this.R=c.token,te("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const a=c=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?a(c):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string"),this.R=t.token,new DT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Ey{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=xT(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<t&&(s+=e.charAt(a[c]%e.length))}return s}}function Ne(i,e){return i<e?-1:i>e?1:0}function to(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
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
 */class Xt{static now(){return Xt.fromMillis(Date.now())}static fromDate(e){return Xt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Xt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ce(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new Xt(0,0))}static max(){return new me(new Xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wa{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(),s===void 0?s=e.length-t:s>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return wa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const c=e.get(a),d=t.get(a);if(c<d)return-1;if(c>d)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Je extends wa{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const LT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends wa{construct(e,t,s){return new jt(e,t,s)}static isValidIdentifier(e){return LT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(e){const t=[];let s="",a=0;const c=()=>{if(s.length===0)throw new ce(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let d=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ce(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ce(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(d=!d,a++):m!=="."||d?(s+=m,a++):(c(),a++)}if(c(),d)throw new ce(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Je.fromString(e))}static fromName(e){return new he(Je.fromString(e).popFirst(5))}static empty(){return new he(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Je(e.slice()))}}function VT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=me.fromTimestamp(s===1e9?new Xt(t+1,0):new Xt(t,s));return new oi(a,he.empty(),e)}function MT(i){return new oi(i.readTime,i.key,-1)}class oi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new oi(me.min(),he.empty(),-1)}static max(){return new oi(me.max(),he.empty(),-1)}}function FT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:Ne(i.largestBatchId,e.largestBatchId))}/**
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
 */const bT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xu(i){if(i.code!==Y.FAILED_PRECONDITION||i.message!==bT)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(t,c).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,s)=>{t(e)})}static reject(e){return new j((t,s)=>{s(e)})}static waitFor(e){return new j((t,s)=>{let a=0,c=0,d=!1;e.forEach(m=>{++a,m.next(()=>{++c,d&&c===a&&t()},y=>s(y))}),d=!0,c===a&&t()})}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next(a=>a?j.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,c)=>{s.push(t.call(this,a,c))}),this.waitFor(s)}static mapArray(e,t){return new j((s,a)=>{const c=e.length,d=new Array(c);let m=0;for(let y=0;y<c;y++){const _=y;t(e[_]).next(I=>{d[_]=I,++m,m===c&&s(d)},I=>a(I))}})}static doWhile(e,t){return new j((s,a)=>{const c=()=>{e()===!0?t().next(()=>{c()},a):s()};c()})}}function zT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function co(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Lu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lu.oe=-1;function Vu(i){return i==null}function qh(i){return i===0&&1/i==-1/0}/**
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
 */function jT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Vm(e)),e=BT(i.get(t),e);return Vm(e)}function BT(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":t+="";break;case"":t+="";break;default:t+=c}}return t}function Vm(i){return i+""}/**
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
 */function Mm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Da(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function $T(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zl(this.root,e,this.comparator,!0)}}class Zl{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=t?s(e.key,t):1,t&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,s,a,c){this.key=e,this.value=t,this.color=s??St.RED,this.left=a??St.EMPTY,this.right=c??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,c){return new St(e??this.key,t??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,t,s),null):c===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return St.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,t,s,a,c){return this}insert(e,t,s){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fm(this.data.getIterator())}getIteratorFrom(e){return new Fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ft(this.comparator);return t.data=e,t}}class Fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zr{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new Zr([])}unionWith(e){let t=new ft(jt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Zr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return to(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class wy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new wy("Invalid base64 string: "+c):c}}(e);return new At(t)}static fromUint8Array(e){const t=function(a){let c="";for(let d=0;d<a.length;++d)c+=String.fromCharCode(a[d]);return c}(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const HT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(i){if(Ye(!!i),typeof i=="string"){let e=0;const t=HT.exec(i);if(Ye(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(i.seconds),nanos:nt(i.nanos)}}function nt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function li(i){return typeof i=="string"?At.fromBase64String(i):At.fromUint8Array(i)}/**
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
 */function wd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mu(i){const e=i.mapValue.fields.__previous_value__;return wd(e)?Mu(e):e}function Ta(i){const e=ai(i.mapValue.fields.__local_write_time__.timestampValue);return new Xt(e.seconds,e.nanos)}/**
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
 */class qT{constructor(e,t,s,a,c,d,m,y,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_}}class Ia{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ui(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?wd(i)?4:KT(i)?9007199254740991:WT(i)?10:11:ge()}function Kn(i,e){if(i===e)return!0;const t=ui(i);if(t!==ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ta(i).isEqual(Ta(e));case 3:return function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const d=ai(a.timestampValue),m=ai(c.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,c){return li(a.bytesValue).isEqual(li(c.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,c){return nt(a.geoPointValue.latitude)===nt(c.geoPointValue.latitude)&&nt(a.geoPointValue.longitude)===nt(c.geoPointValue.longitude)}(i,e);case 2:return function(a,c){if("integerValue"in a&&"integerValue"in c)return nt(a.integerValue)===nt(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const d=nt(a.doubleValue),m=nt(c.doubleValue);return d===m?qh(d)===qh(m):isNaN(d)&&isNaN(m)}return!1}(i,e);case 9:return to(i.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return function(a,c){const d=a.mapValue.fields||{},m=c.mapValue.fields||{};if(Mm(d)!==Mm(m))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(m[y]===void 0||!Kn(d[y],m[y])))return!1;return!0}(i,e);default:return ge()}}function Sa(i,e){return(i.values||[]).find(t=>Kn(t,e))!==void 0}function no(i,e){if(i===e)return 0;const t=ui(i),s=ui(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(i.booleanValue,e.booleanValue);case 2:return function(c,d){const m=nt(c.integerValue||c.doubleValue),y=nt(d.integerValue||d.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return bm(i.timestampValue,e.timestampValue);case 4:return bm(Ta(i),Ta(e));case 5:return Ne(i.stringValue,e.stringValue);case 6:return function(c,d){const m=li(c),y=li(d);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(c,d){const m=c.split("/"),y=d.split("/");for(let _=0;_<m.length&&_<y.length;_++){const I=Ne(m[_],y[_]);if(I!==0)return I}return Ne(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(c,d){const m=Ne(nt(c.latitude),nt(d.latitude));return m!==0?m:Ne(nt(c.longitude),nt(d.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Um(i.arrayValue,e.arrayValue);case 10:return function(c,d){var m,y,_,I;const N=c.fields||{},b=d.fields||{},$=(m=N.value)===null||m===void 0?void 0:m.arrayValue,X=(y=b.value)===null||y===void 0?void 0:y.arrayValue,J=Ne(((_=$==null?void 0:$.values)===null||_===void 0?void 0:_.length)||0,((I=X==null?void 0:X.values)===null||I===void 0?void 0:I.length)||0);return J!==0?J:Um($,X)}(i.mapValue,e.mapValue);case 11:return function(c,d){if(c===eu.mapValue&&d===eu.mapValue)return 0;if(c===eu.mapValue)return 1;if(d===eu.mapValue)return-1;const m=c.fields||{},y=Object.keys(m),_=d.fields||{},I=Object.keys(_);y.sort(),I.sort();for(let N=0;N<y.length&&N<I.length;++N){const b=Ne(y[N],I[N]);if(b!==0)return b;const $=no(m[y[N]],_[I[N]]);if($!==0)return $}return Ne(y.length,I.length)}(i.mapValue,e.mapValue);default:throw ge()}}function bm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ne(i,e);const t=ai(i),s=ai(e),a=Ne(t.seconds,s.seconds);return a!==0?a:Ne(t.nanos,s.nanos)}function Um(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const c=no(t[a],s[a]);if(c)return c}return Ne(t.length,s.length)}function ro(i){return Wh(i)}function Wh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=ai(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return li(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return he.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const c of t.values||[])a?a=!1:s+=",",s+=Wh(c);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",c=!0;for(const d of s)c?c=!1:a+=",",a+=`${d}:${Wh(t.fields[d])}`;return a+"}"}(i.mapValue):ge()}function lu(i){switch(ui(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mu(i);return e?16+lu(e):16;case 5:return 2*i.stringValue.length;case 6:return li(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,c)=>a+lu(c),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Da(s.fields,(c,d)=>{a+=c.length+lu(d)}),a}(i.mapValue);default:throw ge()}}function Kh(i){return!!i&&"integerValue"in i}function Td(i){return!!i&&"arrayValue"in i}function zm(i){return!!i&&"nullValue"in i}function jm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function kh(i){return!!i&&"mapValue"in i}function WT(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Da(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=pa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function KT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $n{constructor(e){this.value=e}static empty(){return new $n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!kh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pa(t)}setAll(e){let t=jt.emptyPath(),s={},a=[];e.forEach((d,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}d?s[m.lastSegment()]=pa(d):a.push(m.lastSegment())});const c=this.getFieldsMap(t);this.applyChanges(c,s,a)}delete(e){const t=this.field(e.popLast());kh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];kh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Da(t,(a,c)=>e[a]=c);for(const a of s)delete e[a]}clone(){return new $n(pa(this.value))}}/**
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
 */class Lt{constructor(e,t,s,a,c,d,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=c,this.data=d,this.documentState=m}static newInvalidDocument(e){return new Lt(e,0,me.min(),me.min(),me.min(),$n.empty(),0)}static newFoundDocument(e,t,s,a){return new Lt(e,1,t,me.min(),s,a,0)}static newNoDocument(e,t){return new Lt(e,2,t,me.min(),me.min(),$n.empty(),0)}static newUnknownDocument(e,t){return new Lt(e,3,t,me.min(),me.min(),$n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _u{constructor(e,t){this.position=e,this.inclusive=t}}function Bm(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],d=i.position[a];if(c.field.isKeyField()?s=he.comparator(he.fromName(d.referenceValue),t.key):s=no(d,t.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function $m(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Kn(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Eu{constructor(e,t="asc"){this.field=e,this.dir=t}}function GT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Ty{}class dt extends Ty{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new YT(e,t,s):t==="array-contains"?new ZT(e,s):t==="in"?new eI(e,s):t==="not-in"?new tI(e,s):t==="array-contains-any"?new nI(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new XT(e,s):new JT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(no(t,this.value)):t!==null&&ui(this.value)===ui(t)&&this.matchesComparison(no(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends Ty{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Gn(e,t)}matches(e){return Iy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Iy(i){return i.op==="and"}function Sy(i){return QT(i)&&Iy(i)}function QT(i){for(const e of i.filters)if(e instanceof Gn)return!1;return!0}function Gh(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+ro(i.value);if(Sy(i))return i.filters.map(e=>Gh(e)).join(",");{const e=i.filters.map(t=>Gh(t)).join(",");return`${i.op}(${e})`}}function Ay(i,e){return i instanceof dt?function(s,a){return a instanceof dt&&s.op===a.op&&s.field.isEqual(a.field)&&Kn(s.value,a.value)}(i,e):i instanceof Gn?function(s,a){return a instanceof Gn&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((c,d,m)=>c&&Ay(d,a.filters[m]),!0):!1}(i,e):void ge()}function Cy(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${ro(t.value)}`}(i):i instanceof Gn?function(t){return t.op.toString()+" {"+t.getFilters().map(Cy).join(" ,")+"}"}(i):"Filter"}class YT extends dt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class XT extends dt{constructor(e,t){super(e,"in",t),this.keys=Ry("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class JT extends dt{constructor(e,t){super(e,"not-in",t),this.keys=Ry("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ry(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class ZT extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Td(t)&&Sa(t.arrayValue,this.value)}}class eI extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Sa(this.value.arrayValue,t)}}class tI extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Sa(this.value.arrayValue,t)}}class nI extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Td(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Sa(this.value.arrayValue,s))}}/**
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
 */class rI{constructor(e,t=null,s=[],a=[],c=null,d=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=d,this.endAt=m,this.ue=null}}function Hm(i,e=null,t=[],s=[],a=null,c=null,d=null){return new rI(i,e,t,s,a,c,d)}function Id(i){const e=De(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Gh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Vu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ro(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ro(s)).join(",")),e.ue=t}return e.ue}function Sd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!GT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Ay(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!$m(i.startAt,e.startAt)&&$m(i.endAt,e.endAt)}function Qh(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Fu{constructor(e,t=null,s=[],a=[],c=null,d="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=d,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iI(i,e,t,s,a,c,d,m){return new Fu(i,e,t,s,a,c,d,m)}function Ad(i){return new Fu(i)}function qm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function sI(i){return i.collectionGroup!==null}function ma(i){const e=De(i);if(e.ce===null){e.ce=[];const t=new Set;for(const c of e.explicitOrderBy)e.ce.push(c),t.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new ft(jt.comparator);return d.filters.forEach(y=>{y.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(c=>{t.has(c.canonicalString())||c.isKeyField()||e.ce.push(new Eu(c,s))}),t.has(jt.keyField().canonicalString())||e.ce.push(new Eu(jt.keyField(),s))}return e.ce}function Wn(i){const e=De(i);return e.le||(e.le=oI(e,ma(i))),e.le}function oI(i,e){if(i.limitType==="F")return Hm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const c=a.dir==="desc"?"asc":"desc";return new Eu(a.field,c)});const t=i.endAt?new _u(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new _u(i.startAt.position,i.startAt.inclusive):null;return Hm(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Yh(i,e,t){return new Fu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function bu(i,e){return Sd(Wn(i),Wn(e))&&i.limitType===e.limitType}function Py(i){return`${Id(Wn(i))}|lt:${i.limitType}`}function $s(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Cy(a)).join(", ")}]`),Vu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>ro(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>ro(a)).join(",")),`Target(${s})`}(Wn(i))}; limitType=${i.limitType})`}function Uu(i,e){return e.isFoundDocument()&&function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):he.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(i,e)&&function(s,a){for(const c of ma(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(d,m,y){const _=Bm(d,m,y);return d.inclusive?_<=0:_<0}(s.startAt,ma(s),a)||s.endAt&&!function(d,m,y){const _=Bm(d,m,y);return d.inclusive?_>=0:_>0}(s.endAt,ma(s),a))}(i,e)}function aI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ky(i){return(e,t)=>{let s=!1;for(const a of ma(i)){const c=lI(a,e,t);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function lI(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):function(c,d,m){const y=d.data.field(c),_=m.data.field(c);return y!==null&&_!==null?no(y,_):ge()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ge()}}/**
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
 */class Qi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Da(this.inner,(t,s)=>{for(const[a,c]of s)e(a,c)})}isEmpty(){return $T(this.inner)}size(){return this.innerSize}}/**
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
 */const uI=new rt(he.comparator);function ci(){return uI}const Ny=new rt(he.comparator);function ha(...i){let e=Ny;for(const t of i)e=e.insert(t.key,t);return e}function cI(i){let e=Ny;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ji(){return ga()}function Dy(){return ga()}function ga(){return new Qi(i=>i.toString(),(i,e)=>i.isEqual(e))}const hI=new ft(he.comparator);function xe(...i){let e=hI;for(const t of i)e=e.add(t);return e}const dI=new ft(Ne);function fI(){return dI}/**
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
 */function pI(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qh(e)?"-0":e}}function mI(i){return{integerValue:""+i}}/**
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
 */class zu{constructor(){this._=void 0}}function gI(i,e,t){return i instanceof Xh?function(a,c){const d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&wd(c)&&(c=Mu(c)),c&&(d.fields.__previous_value__=c),{mapValue:d}}(t,e):i instanceof wu?Oy(i,e):i instanceof Tu?xy(i,e):function(a,c){const d=vI(a,c),m=Wm(d)+Wm(a.Pe);return Kh(d)&&Kh(a.Pe)?mI(m):pI(a.serializer,m)}(i,e)}function yI(i,e,t){return i instanceof wu?Oy(i,e):i instanceof Tu?xy(i,e):t}function vI(i,e){return i instanceof Jh?function(s){return Kh(s)||function(c){return!!c&&"doubleValue"in c}(s)}(e)?e:{integerValue:0}:null}class Xh extends zu{}class wu extends zu{constructor(e){super(),this.elements=e}}function Oy(i,e){const t=Ly(e);for(const s of i.elements)t.some(a=>Kn(a,s))||t.push(s);return{arrayValue:{values:t}}}class Tu extends zu{constructor(e){super(),this.elements=e}}function xy(i,e){let t=Ly(e);for(const s of i.elements)t=t.filter(a=>!Kn(a,s));return{arrayValue:{values:t}}}class Jh extends zu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Wm(i){return nt(i.integerValue||i.doubleValue)}function Ly(i){return Td(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function _I(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof wu&&a instanceof wu||s instanceof Tu&&a instanceof Tu?to(s.elements,a.elements,Kn):s instanceof Jh&&a instanceof Jh?Kn(s.Pe,a.Pe):s instanceof Xh&&a instanceof Xh}(i.transform,e.transform)}class Hi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Hi}static exists(e){return new Hi(void 0,e)}static updateTime(e){return new Hi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Cd{}function Vy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new wI(i.key,Hi.none()):new Rd(i.key,i.data,Hi.none());{const t=i.data,s=$n.empty();let a=new ft(jt.comparator);for(let c of e.fields)if(!a.has(c)){let d=t.field(c);d===null&&c.length>1&&(c=c.popLast(),d=t.field(c)),d===null?s.delete(c):s.set(c,d),a=a.add(c)}return new ju(i.key,s,new Zr(a.toArray()),Hi.none())}}function EI(i,e,t){i instanceof Rd?function(a,c,d){const m=a.value.clone(),y=Gm(a.fieldTransforms,c,d.transformResults);m.setAll(y),c.convertToFoundDocument(d.version,m).setHasCommittedMutations()}(i,e,t):i instanceof ju?function(a,c,d){if(!uu(a.precondition,c))return void c.convertToUnknownDocument(d.version);const m=Gm(a.fieldTransforms,c,d.transformResults),y=c.data;y.setAll(My(a)),y.setAll(m),c.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(i,e,t):function(a,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,t)}function ya(i,e,t,s){return i instanceof Rd?function(c,d,m,y){if(!uu(c.precondition,d))return m;const _=c.value.clone(),I=Qm(c.fieldTransforms,y,d);return _.setAll(I),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),null}(i,e,t,s):i instanceof ju?function(c,d,m,y){if(!uu(c.precondition,d))return m;const _=Qm(c.fieldTransforms,y,d),I=d.data;return I.setAll(My(c)),I.setAll(_),d.convertToFoundDocument(d.version,I).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(N=>N.field))}(i,e,t,s):function(c,d,m){return uu(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m}(i,e,t)}function Km(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&to(s,a,(c,d)=>_I(c,d))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Rd extends Cd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ju extends Cd{constructor(e,t,s,a,c=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function My(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Gm(i,e,t){const s=new Map;Ye(i.length===t.length);for(let a=0;a<t.length;a++){const c=i[a],d=c.transform,m=e.data.field(c.field);s.set(c.field,yI(d,m,t[a]))}return s}function Qm(i,e,t){const s=new Map;for(const a of i){const c=a.transform,d=t.data.field(a.field);s.set(a.field,gI(c,d,e))}return s}class wI extends Cd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TI{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&EI(c,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ya(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ya(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Dy();return this.mutations.forEach(a=>{const c=e.get(a.key),d=c.overlayedDocument;let m=this.applyToLocalView(d,c.mutatedFields);m=t.has(a.key)?null:m;const y=Vy(d,m);y!==null&&s.set(a.key,y),d.isValidDocument()||d.convertToNoDocument(me.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&to(this.mutations,e.mutations,(t,s)=>Km(t,s))&&to(this.baseMutations,e.baseMutations,(t,s)=>Km(t,s))}}/**
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
 */class II{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,ke;function Fy(i){if(i===void 0)return wr("GRPC error has no .code"),Y.UNKNOWN;switch(i){case ot.OK:return Y.OK;case ot.CANCELLED:return Y.CANCELLED;case ot.UNKNOWN:return Y.UNKNOWN;case ot.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ot.INTERNAL:return Y.INTERNAL;case ot.UNAVAILABLE:return Y.UNAVAILABLE;case ot.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ot.NOT_FOUND:return Y.NOT_FOUND;case ot.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ot.ABORTED:return Y.ABORTED;case ot.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ot.DATA_LOSS:return Y.DATA_LOSS;default:return ge()}}(ke=ot||(ot={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AI(){return new TextEncoder}/**
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
 */const CI=new Bi([4294967295,4294967295],0);function Ym(i){const e=AI().encode(i),t=new fy;return t.update(e),new Uint8Array(t.digest())}function Xm(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Bi([t,s],0),new Bi([a,c],0)]}class Pd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new da(`Invalid padding: ${t}`);if(s<0)throw new da(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new da(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new da(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Bi.fromNumber(this.Te)}Ee(e,t,s){let a=e.add(t.multiply(Bi.fromNumber(s)));return a.compare(CI)===1&&(a=new Bi([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Ym(e),[s,a]=Xm(t);for(let c=0;c<this.hashCount;c++){const d=this.Ee(s,a,c);if(!this.de(d))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),d=new Pd(c,a,t);return s.forEach(m=>d.insert(m)),d}insert(e){if(this.Te===0)return;const t=Ym(e),[s,a]=Xm(t);for(let c=0;c<this.hashCount;c++){const d=this.Ee(s,a,c);this.Ae(d)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bu{constructor(e,t,s,a,c){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Bu(me.min(),a,new rt(Ne),ci(),xe())}}class Oa{constructor(e,t,s,a,c){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Oa(s,t,xe(),xe(),xe())}}/**
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
 */class cu{constructor(e,t,s,a){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=a}}class by{constructor(e,t){this.targetId=e,this.me=t}}class Uy{constructor(e,t,s=At.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Jm{constructor(){this.fe=0,this.ge=Zm(),this.pe=At.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=xe(),t=xe(),s=xe();return this.ge.forEach((a,c)=>{switch(c){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:ge()}}),new Oa(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Zm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RI{constructor(e){this.Le=e,this.Be=new Map,this.ke=ci(),this.qe=tu(),this.Qe=tu(),this.Ke=new rt(Ne)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,a)=>{this.je(a)&&t(a)})}Je(e){const t=e.targetId,s=e.me.count,a=this.Ye(t);if(a){const c=a.target;if(Qh(c))if(s===0){const d=new he(c.path);this.We(t,d,Lt.newNoDocument(d,me.min()))}else Ye(s===1);else{const d=this.Ze(t);if(d!==s){const m=this.Xe(e),y=m?this.et(m,e,d):1;if(y!==0){this.He(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:c=0}=t;let d,m;try{d=li(s).toUint8Array()}catch(y){if(y instanceof wy)return eo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Pd(d,a,c)}catch(y){return eo(y instanceof da?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let a=0;return s.forEach(c=>{const d=this.Le.nt(),m=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;e.mightContain(m)||(this.We(t,c,null),a++)}),a}it(e){const t=new Map;this.Be.forEach((c,d)=>{const m=this.Ye(d);if(m){if(c.current&&Qh(m.target)){const y=new he(m.target.path);this.st(y).has(d)||this.ot(d,y)||this.We(d,y,Lt.newNoDocument(y,e))}c.be&&(t.set(d,c.ve()),c.Ce())}});let s=xe();this.Qe.forEach((c,d)=>{let m=!0;d.forEachWhile(y=>{const _=this.Ye(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(c))}),this.ke.forEach((c,d)=>d.setReadTime(e));const a=new Bu(e,t,this.Ke,this.ke,s);return this.ke=ci(),this.qe=tu(),this.Qe=tu(),this.Ke=new rt(Ne),a}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const a=this.ze(e);this.ot(e,t)?a.Fe(t,1):a.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Jm,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ft(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ft(Ne),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Jm),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function tu(){return new rt(he.comparator)}function Zm(){return new rt(he.comparator)}const PI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NI={and:"AND",or:"OR"};class DI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zh(i,e){return i.useProto3Json||Vu(e)?e:{value:e}}function OI(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xI(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Ys(i){return Ye(!!i),me.fromTimestamp(function(t){const s=ai(t);return new Xt(s.seconds,s.nanos)}(i))}function LI(i,e){return ed(i,e).canonicalString()}function ed(i,e){const t=function(a){return new Je(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function zy(i){const e=Je.fromString(i);return Ye(qy(e)),e}function Nh(i,e){const t=zy(e);if(t.get(1)!==i.databaseId.projectId)throw new ce(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ce(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(By(t))}function jy(i,e){return LI(i.databaseId,e)}function VI(i){const e=zy(i);return e.length===4?Je.emptyPath():By(e)}function eg(i){return new Je(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function By(i){return Ye(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function MI(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],c=function(_,I){return _.useProto3Json?(Ye(I===void 0||typeof I=="string"),At.fromBase64String(I||"")):(Ye(I===void 0||I instanceof Buffer||I instanceof Uint8Array),At.fromUint8Array(I||new Uint8Array))}(i,e.targetChange.resumeToken),d=e.targetChange.cause,m=d&&function(_){const I=_.code===void 0?Y.UNKNOWN:Fy(_.code);return new ce(I,_.message||"")}(d);t=new Uy(s,a,c,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Nh(i,s.document.name),c=Ys(s.document.updateTime),d=s.document.createTime?Ys(s.document.createTime):me.min(),m=new $n({mapValue:{fields:s.document.fields}}),y=Lt.newFoundDocument(a,c,d,m),_=s.targetIds||[],I=s.removedTargetIds||[];t=new cu(_,I,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Nh(i,s.document),c=s.readTime?Ys(s.readTime):me.min(),d=Lt.newNoDocument(a,c),m=s.removedTargetIds||[];t=new cu([],m,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Nh(i,s.document),c=s.removedTargetIds||[];t=new cu([],c,a,null)}else{if(!("filter"in e))return ge();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:c}=s,d=new SI(a,c),m=s.targetId;t=new by(m,d)}}return t}function FI(i,e){return{documents:[jy(i,e.path)]}}function bI(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=jy(i,a);const c=function(_){if(_.length!==0)return Hy(Gn.create(_,"and"))}(e.filters);c&&(t.structuredQuery.where=c);const d=function(_){if(_.length!==0)return _.map(I=>function(b){return{field:Hs(b.field),direction:jI(b.dir)}}(I))}(e.orderBy);d&&(t.structuredQuery.orderBy=d);const m=Zh(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:a}}function UI(i){let e=VI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ye(s===1);const I=t.from[0];I.allDescendants?a=I.collectionId:e=e.child(I.collectionId)}let c=[];t.where&&(c=function(N){const b=$y(N);return b instanceof Gn&&Sy(b)?b.getFilters():[b]}(t.where));let d=[];t.orderBy&&(d=function(N){return N.map(b=>function(X){return new Eu(qs(X.field),function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(b))}(t.orderBy));let m=null;t.limit&&(m=function(N){let b;return b=typeof N=="object"?N.value:N,Vu(b)?null:b}(t.limit));let y=null;t.startAt&&(y=function(N){const b=!!N.before,$=N.values||[];return new _u($,b)}(t.startAt));let _=null;return t.endAt&&(_=function(N){const b=!N.before,$=N.values||[];return new _u($,b)}(t.endAt)),iI(e,a,d,c,m,"F",y,_)}function zI(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $y(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=qs(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=qs(t.unaryFilter.field);return dt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=qs(t.unaryFilter.field);return dt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=qs(t.unaryFilter.field);return dt.create(d,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(qs(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Gn.create(t.compositeFilter.filters.map(s=>$y(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ge()}}(t.compositeFilter.op))}(i):ge()}function jI(i){return PI[i]}function BI(i){return kI[i]}function $I(i){return NI[i]}function Hs(i){return{fieldPath:i.canonicalString()}}function qs(i){return jt.fromServerFormat(i.fieldPath)}function Hy(i){return i instanceof dt?function(t){if(t.op==="=="){if(jm(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NAN"}};if(zm(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jm(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NOT_NAN"}};if(zm(t.value))return{unaryFilter:{field:Hs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(t.field),op:BI(t.op),value:t.value}}}(i):i instanceof Gn?function(t){const s=t.getFilters().map(a=>Hy(a));return s.length===1?s[0]:{compositeFilter:{op:$I(t.op),filters:s}}}(i):ge()}function qy(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ei{constructor(e,t,s,a,c=me.min(),d=me.min(),m=At.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HI{constructor(e){this.ht=e}}function qI(i){const e=UI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Yh(e,e.limit,"L"):e}/**
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
 */class WI{constructor(){this.ln=new KI}addToCollectionParentIndex(e,t){return this.ln.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(oi.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(oi.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class KI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new ft(Je.comparator),c=!a.has(s);return this.index[t]=a.add(s),c}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new ft(Je.comparator)).toArray()}}/**
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
 */const tg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
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
 */class io{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new io(0)}static Qn(){return new io(-1)}}/**
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
 */function ng([i,e],[t,s]){const a=Ne(i,t);return a===0?Ne(e,s):a}class GI{constructor(e){this.Gn=e,this.buffer=new ft(ng),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ng(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){co(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await xu(t)}await this.Yn(3e5)})}}class YI{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Lu.oe);const s=new GI(t);return this.Zn.forEachTarget(e,a=>s.Hn(a.sequenceNumber)).next(()=>this.Zn.er(e,a=>s.Hn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(tg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,a,c,d,m,y,_;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(N=>(N>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${N}`),a=this.params.maximumSequenceNumbersToCollect):a=N,d=Date.now(),this.nthSequenceNumber(e,a))).next(N=>(s=N,m=Date.now(),this.removeTargets(e,s,t))).next(N=>(c=N,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(N=>(_=Date.now(),Bs()<=Se.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-I}ms
	Determined least recently used ${a} in `+(m-d)+`ms
	Removed ${c} targets in `+(y-m)+`ms
	Removed ${N} documents in `+(_-y)+`ms
Total Duration: ${_-I}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:N})))}}function XI(i,e){return new YI(i,e)}/**
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
 */class JI{constructor(){this.changes=new Qi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class e1{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&ya(s.mutation,a,Zr.empty(),Xt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,xe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=xe()){const a=ji();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(c=>{let d=ha();return c.forEach((m,y)=>{d=d.insert(m,y.overlayedDocument)}),d}))}getOverlayedDocuments(e,t){const s=ji();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,xe()))}populateOverlays(e,t,s){const a=[];return s.forEach(c=>{t.has(c)||a.push(c)}),this.documentOverlayCache.getOverlays(e,a).next(c=>{c.forEach((d,m)=>{t.set(d,m)})})}computeViews(e,t,s,a){let c=ci();const d=ga(),m=function(){return ga()}();return t.forEach((y,_)=>{const I=s.get(_.key);a.has(_.key)&&(I===void 0||I.mutation instanceof ju)?c=c.insert(_.key,_):I!==void 0?(d.set(_.key,I.mutation.getFieldMask()),ya(I.mutation,_,I.mutation.getFieldMask(),Xt.now())):d.set(_.key,Zr.empty())}),this.recalculateAndSaveOverlays(e,c).next(y=>(y.forEach((_,I)=>d.set(_,I)),t.forEach((_,I)=>{var N;return m.set(_,new ZI(I,(N=d.get(_))!==null&&N!==void 0?N:null))}),m))}recalculateAndSaveOverlays(e,t){const s=ga();let a=new rt((d,m)=>d-m),c=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(d=>{for(const m of d)m.keys().forEach(y=>{const _=t.get(y);if(_===null)return;let I=s.get(y)||Zr.empty();I=m.applyToLocalView(_,I),s.set(y,I);const N=(a.get(m.batchId)||xe()).add(y);a=a.insert(m.batchId,N)})}).next(()=>{const d=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,I=y.value,N=Dy();I.forEach(b=>{if(!c.has(b)){const $=Vy(t.get(b),s.get(b));$!==null&&N.set(b,$),c=c.add(b)}}),d.push(this.documentOverlayCache.saveOverlays(e,_,N))}return j.waitFor(d)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(d){return he.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(c=>{const d=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-c.size):j.resolve(ji());let m=-1,y=c;return d.next(_=>j.forEach(_,(I,N)=>(m<N.largestBatchId&&(m=N.largestBatchId),c.get(I)?j.resolve():this.remoteDocumentCache.getEntry(e,I).next(b=>{y=y.insert(I,b)}))).next(()=>this.populateOverlays(e,_,c)).next(()=>this.computeViews(e,y,_,xe())).next(I=>({batchId:m,changes:cI(I)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let a=ha();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const c=t.collectionGroup;let d=ha();return this.indexManager.getCollectionParents(e,c).next(m=>j.forEach(m,y=>{const _=function(N,b){return new Fu(b,null,N.explicitOrderBy.slice(),N.filters.slice(),N.limit,N.limitType,N.startAt,N.endAt)}(t,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,_,s,a).next(I=>{I.forEach((N,b)=>{d=d.insert(N,b)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,t,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,c,a))).next(d=>{c.forEach((y,_)=>{const I=_.getKey();d.get(I)===null&&(d=d.insert(I,Lt.newInvalidDocument(I)))});let m=ha();return d.forEach((y,_)=>{const I=c.get(y);I!==void 0&&ya(I.mutation,_,Zr.empty(),Xt.now()),Uu(t,_)&&(m=m.insert(y,_))}),m})}}/**
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
 */class t1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return j.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Ys(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(a){return{name:a.name,query:qI(a.bundledQuery),readTime:Ys(a.readTime)}}(t)),j.resolve()}}/**
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
 */class n1{constructor(){this.overlays=new rt(he.comparator),this.Er=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ji();return j.forEach(t,a=>this.getOverlay(e,a).next(c=>{c!==null&&s.set(a,c)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,c)=>{this.Tt(e,t,c)}),j.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Er.get(s);return a!==void 0&&(a.forEach(c=>this.overlays=this.overlays.remove(c)),this.Er.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const a=ji(),c=t.length+1,d=new he(t.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let c=new rt((_,I)=>_-I);const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let I=c.get(_.largestBatchId);I===null&&(I=ji(),c=c.insert(_.largestBatchId,I)),I.set(_.getKey(),_)}}const m=ji(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((_,I)=>m.set(_,I)),!(m.size()>=a)););return j.resolve(m)}Tt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const d=this.Er.get(a.largestBatchId).delete(s.key);this.Er.set(a.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new II(t,s));let c=this.Er.get(t);c===void 0&&(c=xe(),this.Er.set(t,c)),this.Er.set(t,c.add(s.key))}}/**
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
 */class r1{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
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
 */class kd{constructor(){this.dr=new ft(_t.Ar),this.Rr=new ft(_t.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new _t(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new _t(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new he(new Je([])),s=new _t(t,e),a=new _t(t,e+1),c=[];return this.Rr.forEachInRange([s,a],d=>{this.gr(d),c.push(d.key)}),c}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new he(new Je([])),s=new _t(t,e),a=new _t(t,e+1);let c=xe();return this.Rr.forEachInRange([s,a],d=>{c=c.add(d.key)}),c}containsKey(e){const t=new _t(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _t{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return he.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||he.comparator(e.key,t.key)}}/**
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
 */class i1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ft(_t.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const c=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new TI(c,t,s,a);this.mutationQueue.push(d);for(const m of a)this.vr=this.vr.add(new _t(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return j.resolve(d)}lookupMutationBatch(e,t){return j.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Fr(s),c=a<0?0:a;return j.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _t(t,0),a=new _t(t,Number.POSITIVE_INFINITY),c=[];return this.vr.forEachInRange([s,a],d=>{const m=this.Cr(d.br);c.push(m)}),j.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ft(Ne);return t.forEach(a=>{const c=new _t(a,0),d=new _t(a,Number.POSITIVE_INFINITY);this.vr.forEachInRange([c,d],m=>{s=s.add(m.br)})}),j.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let c=s;he.isDocumentKey(c)||(c=c.child(""));const d=new _t(new he(c),0);let m=new ft(Ne);return this.vr.forEachWhile(y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===a&&(m=m.add(y.br)),!0)},d),j.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const a=this.Cr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ye(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return j.forEach(t.mutations,a=>{const c=new _t(a.key,t.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new _t(t,0),a=this.vr.firstAfterOrEqual(s);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class s1{constructor(e){this.Nr=e,this.docs=function(){return new rt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),c=a?a.size:0,d=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():Lt.newInvalidDocument(t))}getEntries(e,t){let s=ci();return t.forEach(a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Lt.newInvalidDocument(a))}),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let c=ci();const d=t.path,m=new he(d.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:I}}=y.getNext();if(!d.isPrefixOf(_.path))break;_.path.length>d.length+1||FT(MT(I),s)<=0||(a.has(I.key)||Uu(t,I))&&(c=c.insert(I.key,I.mutableCopy()))}return j.resolve(c)}getAllFromCollectionGroup(e,t,s,a){ge()}Lr(e,t){return j.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new o1(this)}getSize(e){return j.resolve(this.size)}}class o1 extends JI{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.hr.addEntry(e,a)):this.hr.removeEntry(s)}),j.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class a1{constructor(e){this.persistence=e,this.Br=new Qi(t=>Id(t),Sd),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new kd,this.targetCount=0,this.Qr=io.qn()}forEachTarget(e,t){return this.Br.forEach((s,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),j.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new io(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Un(t),j.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let a=0;const c=[];return this.Br.forEach((d,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(d),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),j.waitFor(c).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const a=this.persistence.referenceDelegate,c=[];return a&&t.forEach(d=>{c.push(a.markPotentiallyOrphaned(e,d))}),j.waitFor(c)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this.qr.containsKey(t))}}/**
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
 */class Wy{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Lu(0),this.Ur=!1,this.Ur=!0,this.Wr=new r1,this.referenceDelegate=e(this),this.Gr=new a1(this),this.indexManager=new WI,this.remoteDocumentCache=function(a){return new s1(a)}(s=>this.referenceDelegate.zr(s)),this.serializer=new HI(t),this.jr=new t1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new i1(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const a=new l1(this.$r.next());return this.referenceDelegate.Hr(),s(a).next(c=>this.referenceDelegate.Jr(a).next(()=>c)).toPromise().then(c=>(a.raiseOnCommittedEvent(),c))}Yr(e,t){return j.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class l1 extends UT{constructor(e){super(),this.currentSequenceNumber=e}}class Nd{constructor(e){this.persistence=e,this.Zr=new kd,this.Xr=null}static ei(e){return new Nd(e)}get ti(){if(this.Xr)return this.Xr;throw ge()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),j.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(a=>this.ti.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(c=>this.ti.add(c.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,s=>{const a=he.fromPath(s);return this.ni(e,a).next(c=>{c||t.removeEntry(a,me.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return j.or([()=>j.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Iu{constructor(e,t){this.persistence=e,this.ri=new Qi(s=>jT(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=XI(this,t)}static ei(e,t){return new Iu(e,t)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return j.forEach(this.ri,(s,a)=>this.ir(e,s,a).next(c=>c?j.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.Lr(e,d=>this.ir(e,d,t).next(m=>{m||(s++,c.removeEntry(d,me.min()))})).next(()=>c.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),j.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lu(e.data.value)),t}ir(e,t,s){return j.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.ri.get(t);return j.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Dd{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=a}static zi(e,t){let s=xe(),a=xe();for(const c of t.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new Dd(e,t.fromCache,s,a)}}/**
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
 */class u1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return G_()?8:zT(Vt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,a){const c={result:null};return this.Xi(e,t).next(d=>{c.result=d}).next(()=>{if(!c.result)return this.es(e,t,a,s).next(d=>{c.result=d})}).next(()=>{if(c.result)return;const d=new u1;return this.ts(e,t,d).next(m=>{if(c.result=m,this.Hi)return this.ns(e,t,d,m.size)})}).next(()=>c.result)}ns(e,t,s,a){return s.documentReadCount<this.Ji?(Bs()<=Se.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",$s(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(Bs()<=Se.DEBUG&&te("QueryEngine","Query:",$s(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.Yi*a?(Bs()<=Se.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",$s(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(t))):j.resolve())}Xi(e,t){if(qm(t))return j.resolve(null);let s=Wn(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Yh(t,null,"F"),s=Wn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(c=>{const d=xe(...c);return this.Zi.getDocuments(e,d).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const _=this.rs(t,m);return this.ss(t,_,d,y.readTime)?this.Xi(e,Yh(t,null,"F")):this.os(e,_,t,y)}))})))}es(e,t,s,a){return qm(t)||a.isEqual(me.min())?j.resolve(null):this.Zi.getDocuments(e,s).next(c=>{const d=this.rs(t,c);return this.ss(t,d,s,a)?j.resolve(null):(Bs()<=Se.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),$s(t)),this.os(e,d,t,VT(a,-1)).next(m=>m))})}rs(e,t){let s=new ft(ky(e));return t.forEach((a,c)=>{Uu(e,c)&&(s=s.add(c))}),s}ss(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const c=e.limitType==="F"?t.last():t.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}ts(e,t,s){return Bs()<=Se.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",$s(t)),this.Zi.getDocumentsMatchingQuery(e,t,oi.min(),s)}os(e,t,s,a){return this.Zi.getDocumentsMatchingQuery(e,s,a).next(c=>(t.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
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
 */class h1{constructor(e,t,s,a){this.persistence=e,this._s=t,this.serializer=a,this.us=new rt(Ne),this.cs=new Qi(c=>Id(c),Sd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e1(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function d1(i,e,t,s){return new h1(i,e,t,s)}async function Ky(i,e){const t=De(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(c=>(a=c,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(c=>{const d=[],m=[];let y=xe();for(const _ of a){d.push(_.batchId);for(const I of _.mutations)y=y.add(I.key)}for(const _ of c){m.push(_.batchId);for(const I of _.mutations)y=y.add(I.key)}return t.localDocuments.getDocuments(s,y).next(_=>({Ts:_,removedBatchIds:d,addedBatchIds:m}))})})}function Gy(i){const e=De(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function f1(i,e){const t=De(i),s=e.snapshotVersion;let a=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const d=t.hs.newChangeBuffer({trackRemovals:!0});a=t.us;const m=[];e.targetChanges.forEach((I,N)=>{const b=a.get(N);if(!b)return;m.push(t.Gr.removeMatchingKeys(c,I.removedDocuments,N).next(()=>t.Gr.addMatchingKeys(c,I.addedDocuments,N)));let $=b.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(N)!==null?$=$.withResumeToken(At.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):I.resumeToken.approximateByteSize()>0&&($=$.withResumeToken(I.resumeToken,s)),a=a.insert(N,$),function(J,K,Ce){return J.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=3e8?!0:Ce.addedDocuments.size+Ce.modifiedDocuments.size+Ce.removedDocuments.size>0}(b,$,I)&&m.push(t.Gr.updateTargetData(c,$))});let y=ci(),_=xe();if(e.documentUpdates.forEach(I=>{e.resolvedLimboDocuments.has(I)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(c,I))}),m.push(p1(c,d,e.documentUpdates).next(I=>{y=I.Is,_=I.Es})),!s.isEqual(me.min())){const I=t.Gr.getLastRemoteSnapshotVersion(c).next(N=>t.Gr.setTargetsMetadata(c,c.currentSequenceNumber,s));m.push(I)}return j.waitFor(m).next(()=>d.apply(c)).next(()=>t.localDocuments.getLocalViewOfDocuments(c,y,_)).next(()=>y)}).then(c=>(t.us=a,c))}function p1(i,e,t){let s=xe(),a=xe();return t.forEach(c=>s=s.add(c)),e.getEntries(i,s).next(c=>{let d=ci();return t.forEach((m,y)=>{const _=c.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(me.min())?(e.removeEntry(m,y.readTime),d=d.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),d=d.insert(m,y)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)}),{Is:d,Es:a}})}function m1(i,e){const t=De(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Gr.getTargetData(s,e).next(c=>c?(a=c,j.resolve(a)):t.Gr.allocateTargetId(s).next(d=>(a=new ei(e,d,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.us.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function td(i,e,t){const s=De(i),a=s.us.get(e),c=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",c,d=>s.persistence.referenceDelegate.removeTarget(d,a))}catch(d){if(!co(d))throw d;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}s.us=s.us.remove(e),s.cs.delete(a.target)}function rg(i,e,t){const s=De(i);let a=me.min(),c=xe();return s.persistence.runTransaction("Execute query","readwrite",d=>function(y,_,I){const N=De(y),b=N.cs.get(I);return b!==void 0?j.resolve(N.us.get(b)):N.Gr.getTargetData(_,I)}(s,d,Wn(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(d,m.targetId).next(y=>{c=y})}).next(()=>s._s.getDocumentsMatchingQuery(d,e,t?a:me.min(),t?c:xe())).next(m=>(g1(s,aI(e),m),{documents:m,ds:c})))}function g1(i,e,t){let s=i.ls.get(e)||me.min();t.forEach((a,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),i.ls.set(e,s)}class ig{constructor(){this.activeTargetIds=fI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y1{constructor(){this._o=new ig,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ig,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v1{uo(e){}shutdown(){}}/**
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
 */class sg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nu=null;function Dh(){return nu===null?nu=function(){return 268435456+Math.round(2147483648*Math.random())}():nu++,"0x"+nu.toString(16)}/**
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
 */const _1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class E1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Ot="WebChannelConnection";class w1 extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),c=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${a}/databases/${c}`,this.xo=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${c}`}Oo(t,s,a,c,d){const m=Dh(),y=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,y,a);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,c,d),this.Bo(t,y,_,a).then(I=>(te("RestConnection",`Received RPC '${t}' ${m}: `,I),I),I=>{throw eo("RestConnection",`RPC '${t}' ${m} failed with error: `,I,"url: ",y,"request:",a),I})}ko(t,s,a,c,d,m){return this.Oo(t,s,a,c,d)}Lo(t,s,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+uo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((c,d)=>t[d]=c),a&&a.headers.forEach((c,d)=>t[d]=c)}No(t,s){const a=_1[t];return`${this.Fo}/v1/${s}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,a){const c=Dh();return new Promise((d,m)=>{const y=new py;y.setWithCredentials(!0),y.listenOnce(my.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case au.NO_ERROR:const I=y.getResponseJson();te(Ot,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(I)),d(I);break;case au.TIMEOUT:te(Ot,`RPC '${e}' ${c} timed out`),m(new ce(Y.DEADLINE_EXCEEDED,"Request time out"));break;case au.HTTP_ERROR:const N=y.getStatus();if(te(Ot,`RPC '${e}' ${c} failed with status:`,N,"response text:",y.getResponseText()),N>0){let b=y.getResponseJson();Array.isArray(b)&&(b=b[0]);const $=b==null?void 0:b.error;if($&&$.status&&$.message){const X=function(K){const Ce=K.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(Ce)>=0?Ce:Y.UNKNOWN}($.status);m(new ce(X,$.message))}else m(new ce(Y.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ce(Y.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{te(Ot,`RPC '${e}' ${c} completed.`)}});const _=JSON.stringify(a);te(Ot,`RPC '${e}' ${c} sending request:`,a),y.send(t,"POST",_,s,15)})}qo(e,t,s){const a=Dh(),c=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=vy(),m=yy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Lo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const I=c.join("");te(Ot,`Creating RPC '${e}' stream ${a}: ${I}`,y);const N=d.createWebChannel(I,y);let b=!1,$=!1;const X=new E1({Eo:K=>{$?te(Ot,`Not sending because RPC '${e}' stream ${a} is closed:`,K):(b||(te(Ot,`Opening RPC '${e}' stream ${a} transport.`),N.open(),b=!0),te(Ot,`RPC '${e}' stream ${a} sending:`,K),N.send(K))},Ao:()=>N.close()}),J=(K,Ce,Ie)=>{K.listen(Ce,ye=>{try{Ie(ye)}catch(_e){setTimeout(()=>{throw _e},0)}})};return J(N,ca.EventType.OPEN,()=>{$||(te(Ot,`RPC '${e}' stream ${a} transport opened.`),X.So())}),J(N,ca.EventType.CLOSE,()=>{$||($=!0,te(Ot,`RPC '${e}' stream ${a} transport closed`),X.Do())}),J(N,ca.EventType.ERROR,K=>{$||($=!0,eo(Ot,`RPC '${e}' stream ${a} transport errored:`,K),X.Do(new ce(Y.UNAVAILABLE,"The operation could not be completed")))}),J(N,ca.EventType.MESSAGE,K=>{var Ce;if(!$){const Ie=K.data[0];Ye(!!Ie);const ye=Ie,_e=(ye==null?void 0:ye.error)||((Ce=ye[0])===null||Ce===void 0?void 0:Ce.error);if(_e){te(Ot,`RPC '${e}' stream ${a} received error:`,_e);const qe=_e.status;let Te=function(A){const R=ot[A];if(R!==void 0)return Fy(R)}(qe),k=_e.message;Te===void 0&&(Te=Y.INTERNAL,k="Unknown error status: "+qe+" with message "+_e.message),$=!0,X.Do(new ce(Te,k)),N.close()}else te(Ot,`RPC '${e}' stream ${a} received:`,Ie),X.vo(Ie)}}),J(m,gy.STAT_EVENT,K=>{K.stat===Hh.PROXY?te(Ot,`RPC '${e}' stream ${a} detected buffering proxy`):K.stat===Hh.NOPROXY&&te(Ot,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{X.bo()},0),X}}function Oh(){return typeof document<"u"?document:null}/**
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
 */function Qy(i){return new DI(i,!0)}/**
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
 */class Yy{constructor(e,t,s=1e3,a=1.5,c=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=a,this.$o=c,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),a=Math.max(0,t-s);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,a,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class T1{constructor(e,t,s,a,c,d,m,y){this.li=e,this.Yo=s,this.Zo=a,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Yy(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(wr(t.toString()),wr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.Xo===t&&this.I_(s,a)},s=>{e(()=>{const a=new ce(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(a)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(a=>{s(()=>this.E_(a))}),this.stream.onMessage(a=>{s(()=>++this.n_==1?this.A_(a):this.onNext(a))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I1 extends T1{constructor(e,t,s,a,c,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,d),this.serializer=c}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=MI(this.serializer,e),s=function(c){if(!("targetChange"in c))return me.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?me.min():d.readTime?Ys(d.readTime):me.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=eg(this.serializer),t.addTarget=function(c,d){let m;const y=d.target;if(m=Qh(y)?{documents:FI(c,y)}:{query:bI(c,y).ct},m.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){m.resumeToken=xI(c,d.resumeToken);const _=Zh(c,d.expectedCount);_!==null&&(m.expectedCount=_)}else if(d.snapshotVersion.compareTo(me.min())>0){m.readTime=OI(c,d.snapshotVersion.toTimestamp());const _=Zh(c,d.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=zI(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=eg(this.serializer),t.removeTarget=e,this.c_(t)}}/**
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
 */class S1 extends class{}{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.S_=!1}b_(){if(this.S_)throw new ce(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Oo(e,ed(t,s),a,c,d)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ce(Y.UNKNOWN,c.toString())})}ko(e,t,s,a,c){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,m])=>this.connection.ko(e,ed(t,s),a,d,m,c)).catch(d=>{throw d.name==="FirebaseError"?(d.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ce(Y.UNKNOWN,d.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class A1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(wr(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class C1{constructor(e,t,s,a,c){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=c,this.Q_.uo(d=>{s.enqueueAndForget(async()=>{La(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(y){const _=De(y);_.k_.add(4),await xa(_),_.K_.set("Unknown"),_.k_.delete(4),await $u(_)}(this))})}),this.K_=new A1(s,a)}}async function $u(i){if(La(i))for(const e of i.q_)await e(!0)}async function xa(i){for(const e of i.q_)await e(!1)}function Xy(i,e){const t=De(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Vd(t)?Ld(t):ho(t).s_()&&xd(t,e))}function Od(i,e){const t=De(i),s=ho(t);t.B_.delete(e),s.s_()&&Jy(t,e),t.B_.size===0&&(s.s_()?s.a_():La(t)&&t.K_.set("Unknown"))}function xd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ho(i).V_(e)}function Jy(i,e){i.U_.xe(e),ho(i).m_(e)}function Ld(i){i.U_=new RI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),ho(i).start(),i.K_.F_()}function Vd(i){return La(i)&&!ho(i).i_()&&i.B_.size>0}function La(i){return De(i).k_.size===0}function Zy(i){i.U_=void 0}async function R1(i){i.K_.set("Online")}async function P1(i){i.B_.forEach((e,t)=>{xd(i,e)})}async function k1(i,e){Zy(i),Vd(i)?(i.K_.O_(e),Ld(i)):i.K_.set("Unknown")}async function N1(i,e,t){if(i.K_.set("Online"),e instanceof Uy&&e.state===2&&e.cause)try{await async function(a,c){const d=c.cause;for(const m of c.targetIds)a.B_.has(m)&&(await a.remoteSyncer.rejectListen(m,d),a.B_.delete(m),a.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await og(i,s)}else if(e instanceof cu?i.U_.$e(e):e instanceof by?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(me.min()))try{const s=await Gy(i.localStore);t.compareTo(s)>=0&&await function(c,d){const m=c.U_.it(d);return m.targetChanges.forEach((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const I=c.B_.get(_);I&&c.B_.set(_,I.withResumeToken(y.resumeToken,d))}}),m.targetMismatches.forEach((y,_)=>{const I=c.B_.get(y);if(!I)return;c.B_.set(y,I.withResumeToken(At.EMPTY_BYTE_STRING,I.snapshotVersion)),Jy(c,y);const N=new ei(I.target,y,_,I.sequenceNumber);xd(c,N)}),c.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await og(i,s)}}async function og(i,e,t){if(!co(e))throw e;i.k_.add(1),await xa(i),i.K_.set("Offline"),t||(t=()=>Gy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await $u(i)})}async function ag(i,e){const t=De(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=La(t);t.k_.add(3),await xa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await $u(t)}async function D1(i,e){const t=De(i);e?(t.k_.delete(2),await $u(t)):e||(t.k_.add(2),await xa(t),t.K_.set("Unknown"))}function ho(i){return i.W_||(i.W_=function(t,s,a){const c=De(t);return c.b_(),new I1(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)}(i.datastore,i.asyncQueue,{Ro:R1.bind(null,i),mo:P1.bind(null,i),po:k1.bind(null,i),R_:N1.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),Vd(i)?Ld(i):i.K_.set("Unknown")):(await i.W_.stop(),Zy(i))})),i.W_}/**
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
 */class Md{constructor(e,t,s,a,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new $i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,c){const d=Date.now()+s,m=new Md(e,t,d,a,c);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ev(i,e){if(wr("AsyncQueue",`${e}: ${i}`),co(i))return new ce(Y.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Xs{static emptySet(e){return new Xs(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=ha(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,c=s.getNext().key;if(!a.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Xs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class lg{constructor(){this.z_=new rt(he.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ge():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class so{constructor(e,t,s,a,c,d,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,a,c){const d=[];return t.forEach(m=>{d.push({type:0,doc:m})}),new so(e,t,Xs.emptySet(t),d,s,a,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class O1{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class x1{constructor(){this.queries=ug(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const a=De(t),c=a.queries;a.queries=ug(),c.forEach((d,m)=>{for(const y of m.J_)y.onError(s)})})(this,new ce(Y.ABORTED,"Firestore shutting down"))}}function ug(){return new Qi(i=>Py(i),bu)}async function L1(i,e){const t=De(i);let s=3;const a=e.query;let c=t.queries.get(a);c?!c.Y_()&&e.Z_()&&(s=2):(c=new O1,s=e.Z_()?0:1);try{switch(s){case 0:c.H_=await t.onListen(a,!0);break;case 1:c.H_=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(d){const m=ev(d,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,c),c.J_.push(e),e.ea(t.onlineState),c.H_&&e.ta(c.H_)&&Fd(t)}async function V1(i,e){const t=De(i),s=e.query;let a=3;const c=t.queries.get(s);if(c){const d=c.J_.indexOf(e);d>=0&&(c.J_.splice(d,1),c.J_.length===0?a=e.Z_()?0:1:!c.Y_()&&e.Z_()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function M1(i,e){const t=De(i);let s=!1;for(const a of e){const c=a.query,d=t.queries.get(c);if(d){for(const m of d.J_)m.ta(a)&&(s=!0);d.H_=a}}s&&Fd(t)}function F1(i,e,t){const s=De(i),a=s.queries.get(e);if(a)for(const c of a.J_)c.onError(t);s.queries.delete(e)}function Fd(i){i.X_.forEach(e=>{e.next()})}var nd,cg;(cg=nd||(nd={})).na="default",cg.Cache="cache";class b1{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new so(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==nd.Cache}}/**
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
 */class tv{constructor(e){this.key=e}}class nv{constructor(e){this.key=e}}class U1{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=xe(),this.mutatedKeys=xe(),this.Va=ky(e),this.ma=new Xs(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new lg,a=t?t.ma:this.ma;let c=t?t.mutatedKeys:this.mutatedKeys,d=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,_=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((I,N)=>{const b=a.get(I),$=Uu(this.query,N)?N:null,X=!!b&&this.mutatedKeys.has(b.key),J=!!$&&($.hasLocalMutations||this.mutatedKeys.has($.key)&&$.hasCommittedMutations);let K=!1;b&&$?b.data.isEqual($.data)?X!==J&&(s.track({type:3,doc:$}),K=!0):this.ya(b,$)||(s.track({type:2,doc:$}),K=!0,(y&&this.Va($,y)>0||_&&this.Va($,_)<0)&&(m=!0)):!b&&$?(s.track({type:0,doc:$}),K=!0):b&&!$&&(s.track({type:1,doc:b}),K=!0,(y||_)&&(m=!0)),K&&($?(d=d.add($),c=J?c.add(I):c.delete(I)):(d=d.delete(I),c=c.delete(I)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const I=this.query.limitType==="F"?d.last():d.first();d=d.delete(I.key),c=c.delete(I.key),s.track({type:1,doc:I})}return{ma:d,pa:s,ss:m,mutatedKeys:c}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const c=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const d=e.pa.j_();d.sort((I,N)=>function($,X){const J=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return J($)-J(X)}(I.type,N.type)||this.Va(I.doc,N.doc)),this.wa(s),a=a!=null&&a;const m=t&&!a?this.Sa():[],y=this.Ra.size===0&&this.current&&!a?1:0,_=y!==this.Aa;return this.Aa=y,d.length!==0||_?{snapshot:new so(this.query,e.ma,c,d,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new lg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=xe(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new nv(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new tv(s))}),t}va(e){this.da=e.ds,this.Ra=xe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return so.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class z1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class j1{constructor(e){this.key=e,this.Fa=!1}}class B1{constructor(e,t,s,a,c,d){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Ma={},this.xa=new Qi(m=>Py(m),bu),this.Oa=new Map,this.Na=new Set,this.La=new rt(he.comparator),this.Ba=new Map,this.ka=new kd,this.qa={},this.Qa=new Map,this.Ka=io.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function $1(i,e,t=!0){const s=av(i);let a;const c=s.xa.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),a=c.view.Ca()):a=await rv(s,e,t,!0),a}async function H1(i,e){const t=av(i);await rv(t,e,!0,!1)}async function rv(i,e,t,s){const a=await m1(i.localStore,Wn(e)),c=a.targetId,d=i.sharedClientState.addLocalQueryTarget(c,t);let m;return s&&(m=await q1(i,e,c,d==="current",a.resumeToken)),i.isPrimaryClient&&t&&Xy(i.remoteStore,a),m}async function q1(i,e,t,s,a){i.Ua=(N,b,$)=>async function(J,K,Ce,Ie){let ye=K.view.ga(Ce);ye.ss&&(ye=await rg(J.localStore,K.query,!1).then(({documents:k})=>K.view.ga(k,ye)));const _e=Ie&&Ie.targetChanges.get(K.targetId),qe=Ie&&Ie.targetMismatches.get(K.targetId)!=null,Te=K.view.applyChanges(ye,J.isPrimaryClient,_e,qe);return dg(J,K.targetId,Te.ba),Te.snapshot}(i,N,b,$);const c=await rg(i.localStore,e,!0),d=new U1(e,c.ds),m=d.ga(c.documents),y=Oa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),_=d.applyChanges(m,i.isPrimaryClient,y);dg(i,t,_.ba);const I=new z1(e,t,d);return i.xa.set(e,I),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),_.snapshot}async function W1(i,e,t){const s=De(i),a=s.xa.get(e),c=s.Oa.get(a.targetId);if(c.length>1)return s.Oa.set(a.targetId,c.filter(d=>!bu(d,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await td(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Od(s.remoteStore,a.targetId),rd(s,a.targetId)}).catch(xu)):(rd(s,a.targetId),await td(s.localStore,a.targetId,!0))}async function K1(i,e){const t=De(i),s=t.xa.get(e),a=t.Oa.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Od(t.remoteStore,s.targetId))}async function iv(i,e){const t=De(i);try{const s=await f1(t.localStore,e);e.targetChanges.forEach((a,c)=>{const d=t.Ba.get(c);d&&(Ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?d.Fa=!0:a.modifiedDocuments.size>0?Ye(d.Fa):a.removedDocuments.size>0&&(Ye(d.Fa),d.Fa=!1))}),await ov(t,s,e)}catch(s){await xu(s)}}function hg(i,e,t){const s=De(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.xa.forEach((c,d)=>{const m=d.view.ea(e);m.snapshot&&a.push(m.snapshot)}),function(d,m){const y=De(d);y.onlineState=m;let _=!1;y.queries.forEach((I,N)=>{for(const b of N.J_)b.ea(m)&&(_=!0)}),_&&Fd(y)}(s.eventManager,e),a.length&&s.Ma.R_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function G1(i,e,t){const s=De(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Ba.get(e),c=a&&a.key;if(c){let d=new rt(he.comparator);d=d.insert(c,Lt.newNoDocument(c,me.min()));const m=xe().add(c),y=new Bu(me.min(),new Map,new rt(Ne),d,m);await iv(s,y),s.La=s.La.remove(c),s.Ba.delete(e),bd(s)}else await td(s.localStore,e,!1).then(()=>rd(s,e,t)).catch(xu)}function rd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||sv(i,s)})}function sv(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Od(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),bd(i))}function dg(i,e,t){for(const s of t)s instanceof tv?(i.ka.addReference(s.key,e),Q1(i,s)):s instanceof nv?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||sv(i,s.key)):ge()}function Q1(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),bd(i))}function bd(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new he(Je.fromString(e)),s=i.Ka.next();i.Ba.set(s,new j1(t)),i.La=i.La.insert(t,s),Xy(i.remoteStore,new ei(Wn(Ad(t.path)),s,"TargetPurposeLimboResolution",Lu.oe))}}async function ov(i,e,t){const s=De(i),a=[],c=[],d=[];s.xa.isEmpty()||(s.xa.forEach((m,y)=>{d.push(s.Ua(y,e,t).then(_=>{var I;if((_||t)&&s.isPrimaryClient){const N=_?!_.fromCache:(I=t==null?void 0:t.targetChanges.get(y.targetId))===null||I===void 0?void 0:I.current;s.sharedClientState.updateQueryState(y.targetId,N?"current":"not-current")}if(_){a.push(_);const N=Dd.zi(y.targetId,_);c.push(N)}}))}),await Promise.all(d),s.Ma.R_(a),await async function(y,_){const I=De(y);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",N=>j.forEach(_,b=>j.forEach(b.Wi,$=>I.persistence.referenceDelegate.addReference(N,b.targetId,$)).next(()=>j.forEach(b.Gi,$=>I.persistence.referenceDelegate.removeReference(N,b.targetId,$)))))}catch(N){if(!co(N))throw N;te("LocalStore","Failed to update sequence numbers: "+N)}for(const N of _){const b=N.targetId;if(!N.fromCache){const $=I.us.get(b),X=$.snapshotVersion,J=$.withLastLimboFreeSnapshotVersion(X);I.us=I.us.insert(b,J)}}}(s.localStore,c))}async function Y1(i,e){const t=De(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await Ky(t.localStore,e);t.currentUser=e,function(c,d){c.Qa.forEach(m=>{m.forEach(y=>{y.reject(new ce(Y.CANCELLED,d))})}),c.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ov(t,s.Ts)}}function X1(i,e){const t=De(i),s=t.Ba.get(e);if(s&&s.Fa)return xe().add(s.key);{let a=xe();const c=t.Oa.get(e);if(!c)return a;for(const d of c){const m=t.xa.get(d);a=a.unionWith(m.view.fa)}return a}}function av(i){const e=De(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=G1.bind(null,e),e.Ma.R_=M1.bind(null,e.eventManager),e.Ma.Wa=F1.bind(null,e.eventManager),e}class Su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qy(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return d1(this.persistence,new c1,e.initialUser,this.serializer)}ja(e){return new Wy(Nd.ei,this.serializer)}za(e){return new y1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Su.provider={build:()=>new Su};class J1 extends Su{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ye(this.persistence.referenceDelegate instanceof Iu);const s=this.persistence.referenceDelegate.garbageCollector;return new QI(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Wy(s=>Iu.ei(s,t),this.serializer)}}class id{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y1.bind(null,this.syncEngine),await D1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new x1}()}createDatastore(e){const t=Qy(e.databaseInfo.databaseId),s=function(c){return new w1(c)}(e.databaseInfo);return function(c,d,m,y){return new S1(c,d,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,c,d,m){return new C1(s,a,c,d,m)}(this.localStore,this.datastore,e.asyncQueue,t=>hg(this.syncEngine,t,0),function(){return sg.p()?new sg:new v1}())}createSyncEngine(e,t){return function(a,c,d,m,y,_,I){const N=new B1(a,c,d,m,y,_);return I&&(N.$a=!0),N}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const c=De(a);te("RemoteStore","RemoteStore shutting down."),c.k_.add(5),await xa(c),c.Q_.shutdown(),c.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}id.provider={build:()=>new id};/**
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
 */class Z1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):wr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class eS{constructor(e,t,s,a,c){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=xt.UNAUTHENTICATED,this.clientId=Ey.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async d=>{te("FirestoreClient","Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(s,d=>(te("FirestoreClient","Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ev(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Ky(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function fg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await tS(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>ag(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>ag(e.remoteStore,a)),i._onlineComponents=e}async function tS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await xh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Y.FAILED_PRECONDITION||a.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;eo("Error using user provided cache. Falling back to memory cache: "+t),await xh(i,new Su)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await xh(i,new J1(void 0));return i._offlineComponents}async function nS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await fg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await fg(i,new id))),i._onlineComponents}async function rS(i){const e=await nS(i),t=e.eventManager;return t.onListen=$1.bind(null,e.syncEngine),t.onUnlisten=W1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=H1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=K1.bind(null,e.syncEngine),t}function iS(i,e,t={}){const s=new $i;return i.asyncQueue.enqueueAndForget(async()=>function(c,d,m,y,_){const I=new Z1({next:b=>{I.eu(),d.enqueueAndForget(()=>V1(c,N));const $=b.docs.has(m);!$&&b.fromCache?_.reject(new ce(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):$&&b.fromCache&&y&&y.source==="server"?_.reject(new ce(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(b)},error:b=>_.reject(b)}),N=new b1(Ad(m.path),I,{includeMetadataChanges:!0,ua:!0});return L1(c,N)}(await rS(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function lv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const pg=new Map;/**
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
 */function sS(i,e,t){if(!t)throw new ce(Y.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function oS(i,e,t,s){if(e===!0&&s===!0)throw new ce(Y.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function mg(i){if(!he.isDocumentKey(i))throw new ce(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function aS(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ge()}function sd(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=aS(i);throw new ce(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */class gg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ud{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new CT;switch(s.type){case"firstParty":return new NT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=pg.get(t);s&&(te("ComponentProvider","Removing Datastore"),pg.delete(t),s.terminate())}(this),Promise.resolve()}}function lS(i,e,t,s={}){var a;const c=(i=sd(i,Ud))._getSettings(),d=`${e}:${t}`;if(c.host!=="firestore.googleapis.com"&&c.host!==d&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},c),{host:d,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=xt.MOCK_USER;else{m=j_(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new ce(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new xt(_)}i._authCredentials=new RT(new _y(m,y))}}/**
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
 */class zd{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zd(this.firestore,e,this._query)}}class vr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vr(this.firestore,e,this._key)}}class Aa extends zd{constructor(e,t,s){super(e,t,Ad(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vr(this.firestore,null,new he(e))}withConverter(e){return new Aa(this.firestore,e,this._path)}}function uS(i,e,...t){if(i=Qn(i),arguments.length===1&&(e=Ey.newId()),sS("doc","path",e),i instanceof Ud){const s=Je.fromString(e,...t);return mg(s),new vr(i,null,new he(s))}{if(!(i instanceof vr||i instanceof Aa))throw new ce(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return mg(s),new vr(i.firestore,i instanceof Aa?i.converter:null,new he(s))}}/**
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
 */class yg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Yy(this,"async_queue_retry"),this.fu=()=>{const s=Oh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Oh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Oh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new $i;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!co(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const a=function(d){let m=d.message||"";return d.stack&&(m=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),m}(s);throw wr("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const a=Md.createAndSchedule(this,e,t,s,c=>this.Su(c));return this.du.push(a),a}pu(){this.Au&&ge()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class uv extends Ud{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new yg,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yg(e),this._firestoreClient=void 0,await e}}}function cS(i,e){const t=typeof i=="object"?i:Ng(),s=typeof i=="string"?i:"(default)",a=cd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=U_("firestore");c&&lS(a,...c)}return a}function hS(i){if(i._terminated)throw new ce(Y.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||dS(i),i._firestoreClient}function dS(i){var e,t,s;const a=i._freezeSettings(),c=function(m,y,_,I){return new qT(m,y,_,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,lv(I.experimentalLongPollingOptions),I.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new eS(i._authCredentials,i._appCheckCredentials,i._queue,c,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
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
 */class Au{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Au(At.fromBase64String(e))}catch(t){throw new ce(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Au(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class cv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class pS{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0}(this._values,e._values)}}const mS=new RegExp("[~\\*/\\[\\]]");function gS(i,e,t){if(e.search(mS)>=0)throw vg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new cv(...e.split("."))._internalPath}catch{throw vg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function vg(i,e,t,s,a){let c=`Function ${e}() called with invalid data`;c+=". ";let d="";return new ce(Y.INVALID_ARGUMENT,c+i+d)}/**
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
 */class hv{constructor(e,t,s,a,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new vr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yS extends hv{data(){return super.data()}}function dv(i,e){return typeof e=="string"?gS(i,e):e instanceof cv?e._internalPath:e._delegate._internalPath}class vS{convertValue(e,t="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Da(e,(a,c)=>{s[a]=this.convertValue(c,t)}),s}convertVectorValue(e){var t,s,a;const c=(a=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(d=>nt(d.doubleValue));return new pS(c)}convertGeoPoint(e){return new fS(nt(e.latitude),nt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Mu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ta(e));default:return null}}convertTimestamp(e){const t=ai(e);return new Xt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);Ye(qy(s));const a=new Ia(s.get(1),s.get(3)),c=new he(s.popFirst(5));return a.isEqual(t)||wr(`Document ${c} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),c}}/**
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
 */class _S{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fv extends hv{constructor(e,t,s,a,c,d){super(e,t,s,a,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ES(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(dv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class ES extends fv{data(e={}){return super.data(e)}}/**
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
 */function wS(i){i=sd(i,vr);const e=sd(i.firestore,uv);return iS(hS(e),i._key).then(t=>IS(e,i,t))}class TS extends vS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Au(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vr(this.firestore,null,t)}}function IS(i,e,t){const s=t.docs.get(e._key),a=new TS(i);return new fv(i,a,e._key,s,new _S(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){uo=a})(oo),Js(new qi("firestore",(s,{instanceIdentifier:a,options:c})=>{const d=s.getProvider("app").getImmediate(),m=new uv(new PT(s.getProvider("auth-internal")),new OT(s.getProvider("app-check-internal")),function(_,I){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ce(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(_.options.projectId,I)}(d,a),d);return c=Object.assign({useFetchStreams:t},c),m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),ii(Lm,"4.7.5",e),ii(Lm,"4.7.5","esm2017")})();const SS={apiKey:"AIzaSyBqn9spXCzvJIRaiIX-8N4MNPQaalBXSWE",authDomain:"seller-tool-d63f6.firebaseapp.com",projectId:"seller-tool-d63f6",storageBucket:"seller-tool-d63f6.appspot.com",messagingSenderId:"197601742841",appId:"1:197601742841:web:aaa898dda1e4855c4c3728",measurementId:"G-LBWTB8XYM9"},pv=kg(SS),Lh=ST(pv),AS=cS(pv),mv=zt.createContext(null),CS=({children:i})=>{const[e,t]=zt.useState(null),[s,a]=zt.useState(!0);zt.useEffect(()=>dw(Lh,_=>{t(_),a(!1)}),[]);const m={currentUser:e,login:async(y,_)=>{await uw(Lh,y,_)},logout:()=>fw(Lh)};return pe.jsx(mv.Provider,{value:m,children:!s&&i})},gv=()=>{const i=zt.useContext(mv);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i};var yv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_g=ti.createContext&&ti.createContext(yv),RS=["attr","size","title"];function PS(i,e){if(i==null)return{};var t=kS(i,e),s,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);for(a=0;a<c.length;a++)s=c[a],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(t[s]=i[s])}return t}function kS(i,e){if(i==null)return{};var t={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;t[s]=i[s]}return t}function Cu(){return Cu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},Cu.apply(this,arguments)}function Eg(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,s)}return t}function Ru(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Eg(Object(t),!0).forEach(function(s){NS(i,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Eg(Object(t)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(t,s))})}return i}function NS(i,e,t){return e=DS(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function DS(i){var e=OS(i,"string");return typeof e=="symbol"?e:e+""}function OS(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var s=t.call(i,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function vv(i){return i&&i.map((e,t)=>ti.createElement(e.tag,Ru({key:t},e.attr),vv(e.child)))}function Hu(i){return e=>ti.createElement(xS,Cu({attr:Ru({},i.attr)},e),vv(i.child))}function xS(i){var e=t=>{var{attr:s,size:a,title:c}=i,d=PS(i,RS),m=a||t.size||"1em",y;return t.className&&(y=t.className),i.className&&(y=(y?y+" ":"")+i.className),ti.createElement("svg",Cu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,d,{className:y,style:Ru(Ru({color:i.color||t.color},t.style),i.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&ti.createElement("title",null,c),i.children)};return _g!==void 0?ti.createElement(_g.Consumer,null,t=>e(t)):e(yv)}function LS(i){return Hu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(i)}function VS(i){return Hu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(i)}function MS(i){return Hu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}const FS=()=>{const[i,e]=zt.useState(""),[t,s]=zt.useState(""),[a,c]=zt.useState(!1),[d,m]=zt.useState(""),{login:y}=gv(),_=async I=>{I.preventDefault();try{m(""),await y(i,t)}catch(N){m("Invalid email or password"+N)}};return pe.jsxs("div",{className:"login-container",children:[pe.jsx("h2",{className:"login-title",children:"Login"}),pe.jsxs("form",{onSubmit:_,className:"login-form",children:[pe.jsxs("div",{className:"form-group",children:[pe.jsx("label",{children:"Email"}),pe.jsxs("div",{className:"input-wrapper",children:[pe.jsx("input",{type:"email",value:i,onChange:I=>e(I.target.value),required:!0}),pe.jsx(MS,{className:"input-icon"})]})]}),pe.jsxs("div",{className:"form-group",children:[pe.jsx("label",{children:"Password"}),pe.jsxs("div",{className:"input-wrapper",children:[pe.jsx("input",{type:a?"text":"password",value:t,onChange:I=>s(I.target.value),required:!0}),pe.jsx("div",{className:"password-toggle",onClick:()=>c(!a),children:a?pe.jsx(LS,{}):pe.jsx(VS,{})})]})]}),d&&pe.jsx("div",{className:"error-message",children:d}),pe.jsx("button",{type:"submit",className:"login-button",children:"Login"}),pe.jsxs("div",{className:"help-text",children:["Dont have an account?",pe.jsx("a",{href:"https://amazon-seller-tool.vercel.app/signup?source=extension",target:"_blank",rel:"noopener noreferrer",children:"Create an account"})]})]})]})};function bS(i){return Hu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(i)}const US=()=>{const[i,e]=zt.useState("product-insights"),{currentUser:t,logout:s}=gv(),[a,c]=zt.useState({}),[d,m]=zt.useState(!0),y=uS(AS,"userPreferences",t==null?void 0:t.uid);zt.useEffect(()=>{(async()=>{try{const b=await wS(y);if(b.exists()){const $=b.data();$.toggles&&c($.toggles)}}catch(b){console.error("Error loading preferences:",b)}finally{m(!1)}})()},[t==null?void 0:t.uid]),zt.useEffect(()=>{console.log("Updated state of toggles:",a)},[a]);const _=async()=>{try{await s()}catch(N){console.error("Failed to log out",N)}},I=()=>{const N=document.getElementById("amazon-seller-sidebar-root");N&&(N.style.display="none")};return pe.jsx("div",{className:"sidebar-content",children:d?pe.jsx("div",{children:"Loading..."}):pe.jsxs("div",{className:"box",children:[pe.jsx("header",{className:"header",children:pe.jsxs("div",{className:"dd",children:[pe.jsx("button",{id:"close-button",onClick:I,children:"✕"}),pe.jsx("div",{className:"header-icons",children:t&&pe.jsxs("div",{className:"user-menu",children:[pe.jsx(bS,{size:20,color:"white"}),pe.jsxs("div",{className:"dropdown-content",children:[pe.jsxs("p",{children:["Name: ",t==null?void 0:t.displayName]}),pe.jsxs("p",{children:["Email: ",t==null?void 0:t.email]}),pe.jsx("button",{style:{backgroundColor:"#0E4DA4",color:"white",border:"none",padding:"5px 10px",borderRadius:"5px",cursor:"pointer"},className:"logout-button",onClick:_,children:"Logout"})]})]})})]})}),t?pe.jsxs(pe.Fragment,{children:[pe.jsxs("div",{className:"nav-buttons",children:[pe.jsx("button",{className:`nav-btn ${i==="product-insights"?"active":""}`,onClick:()=>e("product-insights"),children:"Product Insights"}),pe.jsx("button",{className:`nav-btn ${i==="seller-insights"?"active":""}`,onClick:()=>e("seller-insights"),children:"Seller Insights"})]}),Object.entries(a).map(([N,b])=>pe.jsxs("div",{className:"toggle-item",children:[pe.jsx("label",{children:N}),pe.jsx("span",{children:b?"Enabled":"Disabled"})]},N))]}):pe.jsx(FS,{})]})})},od=()=>{let i=document.getElementById("amazon-seller-sidebar-root");if(!i){i=document.createElement("div"),i.id="amazon-seller-sidebar-root",document.body.appendChild(i);const e=i.attachShadow({mode:"open"}),t=document.createElement("div");t.id="react-root",e.appendChild(t);const s=document.createElement("link");s.rel="stylesheet",s.href=chrome.runtime.getURL("assets/sidebar.css"),e.appendChild(s),D_.createRoot(t).render(pe.jsx(ti.StrictMode,{children:pe.jsx(CS,{children:pe.jsx(US,{})})}))}},Vh=document.getElementById("close-button");Vh==null||Vh.addEventListener("click",()=>{const i=document.getElementById("amazon-seller-sidebar-root");i&&(i.style.display="none")});chrome.runtime.onMessage.addListener(i=>{if(i.action==="toggleSidebar"){const e=document.getElementById("amazon-seller-sidebar-root");e?e.style.display=e.style.display==="none"?"block":"none":od()}});window.location.pathname.includes("/dp/")&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",od):od());

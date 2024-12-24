function I_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var vh={exports:{}},la={},_h={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function S_(){if(Qp)return Ae;Qp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),N=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=N&&D[N]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function W(D,B,ae){this.props=D,this.context=B,this.refs=Y,this.updater=ae||z}W.prototype.isReactComponent={},W.prototype.setState=function(D,B){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,B,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function we(){}we.prototype=W.prototype;function ge(D,B,ae){this.props=D,this.context=B,this.refs=Y,this.updater=ae||z}var ye=ge.prototype=new we;ye.constructor=ge,Q(ye,W.prototype),ye.isPureReactComponent=!0;var fe=Array.isArray,je=Object.prototype.hasOwnProperty,Ee={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function I(D,B,ae){var Ie,Se={},Pe=null,Me=null;if(B!=null)for(Ie in B.ref!==void 0&&(Me=B.ref),B.key!==void 0&&(Pe=""+B.key),B)je.call(B,Ie)&&!R.hasOwnProperty(Ie)&&(Se[Ie]=B[Ie]);var be=arguments.length-2;if(be===1)Se.children=ae;else if(1<be){for(var Be=Array(be),mt=0;mt<be;mt++)Be[mt]=arguments[mt+2];Se.children=Be}if(D&&D.defaultProps)for(Ie in be=D.defaultProps,be)Se[Ie]===void 0&&(Se[Ie]=be[Ie]);return{$$typeof:i,type:D,key:Pe,ref:Me,props:Se,_owner:Ee.current}}function A(D,B){return{$$typeof:i,type:D.type,key:B,ref:D.ref,props:D.props,_owner:D._owner}}function P(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function x(D){var B={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return B[ae]})}var O=/\/+/g;function S(D,B){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):B.toString(36)}function et(D,B,ae,Ie,Se){var Pe=typeof D;(Pe==="undefined"||Pe==="boolean")&&(D=null);var Me=!1;if(D===null)Me=!0;else switch(Pe){case"string":case"number":Me=!0;break;case"object":switch(D.$$typeof){case i:case e:Me=!0}}if(Me)return Me=D,Se=Se(Me),D=Ie===""?"."+S(Me,0):Ie,fe(Se)?(ae="",D!=null&&(ae=D.replace(O,"$&/")+"/"),et(Se,B,ae,"",function(mt){return mt})):Se!=null&&(P(Se)&&(Se=A(Se,ae+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(O,"$&/")+"/")+D)),B.push(Se)),1;if(Me=0,Ie=Ie===""?".":Ie+":",fe(D))for(var be=0;be<D.length;be++){Pe=D[be];var Be=Ie+S(Pe,be);Me+=et(Pe,B,ae,Be,Se)}else if(Be=M(D),typeof Be=="function")for(D=Be.call(D),be=0;!(Pe=D.next()).done;)Pe=Pe.value,Be=Ie+S(Pe,be++),Me+=et(Pe,B,ae,Be,Se);else if(Pe==="object")throw B=String(D),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Me}function Rt(D,B,ae){if(D==null)return D;var Ie=[],Se=0;return et(D,Ie,"","",function(Pe){return B.call(ae,Pe,Se++)}),Ie}function Pt(D){if(D._status===-1){var B=D._result;B=B(),B.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=B)}if(D._status===1)return D._result.default;throw D._result}var Ue={current:null},J={transition:null},le={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ee};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Rt,forEach:function(D,B,ae){Rt(D,function(){B.apply(this,arguments)},ae)},count:function(D){var B=0;return Rt(D,function(){B++}),B},toArray:function(D){return Rt(D,function(B){return B})||[]},only:function(D){if(!P(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ae.Component=W,Ae.Fragment=t,Ae.Profiler=a,Ae.PureComponent=ge,Ae.StrictMode=s,Ae.Suspense=y,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ae.act=te,Ae.cloneElement=function(D,B,ae){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ie=Q({},D.props),Se=D.key,Pe=D.ref,Me=D._owner;if(B!=null){if(B.ref!==void 0&&(Pe=B.ref,Me=Ee.current),B.key!==void 0&&(Se=""+B.key),D.type&&D.type.defaultProps)var be=D.type.defaultProps;for(Be in B)je.call(B,Be)&&!R.hasOwnProperty(Be)&&(Ie[Be]=B[Be]===void 0&&be!==void 0?be[Be]:B[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=ae;else if(1<Be){be=Array(Be);for(var mt=0;mt<Be;mt++)be[mt]=arguments[mt+2];Ie.children=be}return{$$typeof:i,type:D.type,key:Se,ref:Pe,props:Ie,_owner:Me}},Ae.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Ae.createElement=I,Ae.createFactory=function(D){var B=I.bind(null,D);return B.type=D,B},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(D){return{$$typeof:m,render:D}},Ae.isValidElement=P,Ae.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Pt}},Ae.memo=function(D,B){return{$$typeof:_,type:D,compare:B===void 0?null:B}},Ae.startTransition=function(D){var B=J.transition;J.transition={};try{D()}finally{J.transition=B}},Ae.unstable_act=te,Ae.useCallback=function(D,B){return Ue.current.useCallback(D,B)},Ae.useContext=function(D){return Ue.current.useContext(D)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(D){return Ue.current.useDeferredValue(D)},Ae.useEffect=function(D,B){return Ue.current.useEffect(D,B)},Ae.useId=function(){return Ue.current.useId()},Ae.useImperativeHandle=function(D,B,ae){return Ue.current.useImperativeHandle(D,B,ae)},Ae.useInsertionEffect=function(D,B){return Ue.current.useInsertionEffect(D,B)},Ae.useLayoutEffect=function(D,B){return Ue.current.useLayoutEffect(D,B)},Ae.useMemo=function(D,B){return Ue.current.useMemo(D,B)},Ae.useReducer=function(D,B,ae){return Ue.current.useReducer(D,B,ae)},Ae.useRef=function(D){return Ue.current.useRef(D)},Ae.useState=function(D){return Ue.current.useState(D)},Ae.useSyncExternalStore=function(D,B,ae){return Ue.current.useSyncExternalStore(D,B,ae)},Ae.useTransition=function(){return Ue.current.useTransition()},Ae.version="18.3.1",Ae}var Yp;function ld(){return Yp||(Yp=1,_h.exports=S_()),_h.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function A_(){if(Xp)return la;Xp=1;var i=ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var w,N={},M=null,z=null;_!==void 0&&(M=""+_),y.key!==void 0&&(M=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(N[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)N[w]===void 0&&(N[w]=y[w]);return{$$typeof:e,type:m,key:M,ref:z,props:N,_owner:a.current}}return la.Fragment=t,la.jsx=h,la.jsxs=h,la}var Jp;function C_(){return Jp||(Jp=1,vh.exports=A_()),vh.exports}var F=C_(),ve=ld();const ni=I_(ve);var Xl={},Eh={exports:{}},Qt={},wh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function R_(){return Zp||(Zp=1,function(i){function e(J,le){var te=J.length;J.push(le);e:for(;0<te;){var D=te-1>>>1,B=J[D];if(0<a(B,le))J[D]=le,J[te]=B,te=D;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],te=J.pop();if(te!==le){J[0]=te;e:for(var D=0,B=J.length,ae=B>>>1;D<ae;){var Ie=2*(D+1)-1,Se=J[Ie],Pe=Ie+1,Me=J[Pe];if(0>a(Se,te))Pe<B&&0>a(Me,Se)?(J[D]=Me,J[Pe]=te,D=Pe):(J[D]=Se,J[Ie]=te,D=Ie);else if(Pe<B&&0>a(Me,te))J[D]=Me,J[Pe]=te,D=Pe;else break e}}return le}function a(J,le){var te=J.sortIndex-le.sortIndex;return te!==0?te:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],w=1,N=null,M=3,z=!1,Q=!1,Y=!1,W=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(J){for(var le=t(_);le!==null;){if(le.callback===null)s(_);else if(le.startTime<=J)s(_),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(_)}}function fe(J){if(Y=!1,ye(J),!Q)if(t(y)!==null)Q=!0,Pt(je);else{var le=t(_);le!==null&&Ue(fe,le.startTime-J)}}function je(J,le){Q=!1,Y&&(Y=!1,we(I),I=-1),z=!0;var te=M;try{for(ye(le),N=t(y);N!==null&&(!(N.expirationTime>le)||J&&!x());){var D=N.callback;if(typeof D=="function"){N.callback=null,M=N.priorityLevel;var B=D(N.expirationTime<=le);le=i.unstable_now(),typeof B=="function"?N.callback=B:N===t(y)&&s(y),ye(le)}else s(y);N=t(y)}if(N!==null)var ae=!0;else{var Ie=t(_);Ie!==null&&Ue(fe,Ie.startTime-le),ae=!1}return ae}finally{N=null,M=te,z=!1}}var Ee=!1,R=null,I=-1,A=5,P=-1;function x(){return!(i.unstable_now()-P<A)}function O(){if(R!==null){var J=i.unstable_now();P=J;var le=!0;try{le=R(!0,J)}finally{le?S():(Ee=!1,R=null)}}else Ee=!1}var S;if(typeof ge=="function")S=function(){ge(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Rt=et.port2;et.port1.onmessage=O,S=function(){Rt.postMessage(null)}}else S=function(){W(O,0)};function Pt(J){R=J,Ee||(Ee=!0,S())}function Ue(J,le){I=W(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Q||z||(Q=!0,Pt(je))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(M){case 1:case 2:case 3:var le=3;break;default:le=M}var te=M;M=le;try{return J()}finally{M=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var te=M;M=J;try{return le()}finally{M=te}},i.unstable_scheduleCallback=function(J,le,te){var D=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=te+B,J={id:w++,callback:le,priorityLevel:J,startTime:te,expirationTime:B,sortIndex:-1},te>D?(J.sortIndex=te,e(_,J),t(y)===null&&J===t(_)&&(Y?(we(I),I=-1):Y=!0,Ue(fe,te-D))):(J.sortIndex=B,e(y,J),Q||z||(Q=!0,Pt(je))),J},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(J){var le=M;return function(){var te=M;M=le;try{return J.apply(this,arguments)}finally{M=te}}}}(Th)),Th}var em;function P_(){return em||(em=1,wh.exports=R_()),wh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function k_(){if(tm)return Qt;tm=1;var i=ld(),e=P_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},N={};function M(n){return y.call(N,n)?!0:y.call(w,n)?!1:_.test(n)?N[n]=!0:(w[n]=!0,!1)}function z(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,o,c){if(r===null||typeof r>"u"||z(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,o,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var we=/[\-:]([a-z])/g;function ge(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(we,ge);W[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(we,ge);W[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(we,ge);W[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,o,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,o,d,c)&&(o=null),c||d===null?M(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var fe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function B(n){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var ae=!1;function Ie(n,r){if(!n||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?B(n):""}function Se(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case Ee:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rt:return r=n.displayName||null,r!==null?r:Pe(n.type)||"Memo";case Pt:r=n._payload,n=n._init;try{return Pe(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=Be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Xn(n){n._valueTracker||(n._valueTracker=mt(n))}function Xi(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function Sr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function fi(n,r){var o=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ji(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=be(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function po(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function mo(n,r){po(n,r);var o=be(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Zi(n,r.type,o):r.hasOwnProperty("defaultValue")&&Zi(n,r.type,be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ma(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Zi(n,r,o){(r!=="number"||Sr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Jn=Array.isArray;function Zn(n,r,o,c){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+be(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function go(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function es(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Jn(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:be(o)}}function ts(n,r){var o=be(r.value),c=be(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function yo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var er,vo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=er.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ar(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mi=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(n){mi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),pi[r]=pi[n]})});function _o(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||pi.hasOwnProperty(n)&&pi[n]?(""+r).trim():r+"px"}function Eo(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=_o(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var wo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(n,r){if(r){if(wo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Io(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function ns(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rs=null,on=null,Dn=null;function is(n){if(n=Ko(n)){if(typeof rs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=dl(r),rs(n.stateNode,n.type,r))}}function On(n){on?Dn?Dn.push(n):Dn=[n]:on=n}function So(){if(on){var n=on,r=Dn;if(Dn=on=null,is(n),r)for(n=0;n<r.length;n++)is(r[n])}}function yi(n,r){return n(r)}function Ao(){}var tr=!1;function Co(n,r,o){if(tr)return n(r,o);tr=!0;try{return yi(n,r,o)}finally{tr=!1,(on!==null||Dn!==null)&&(Ao(),So())}}function tt(n,r){var o=n.stateNode;if(o===null)return null;var c=dl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ss=!1;if(m)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){ss=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{ss=!1}function vi(n,r,o,c,d,p,v,T,C){var U=Array.prototype.slice.call(arguments,3);try{r.apply(o,U)}catch(q){this.onError(q)}}var _i=!1,os=null,yn=!1,Ro=null,Wu={onError:function(n){_i=!0,os=n}};function as(n,r,o,c,d,p,v,T,C){_i=!1,os=null,vi.apply(Wu,arguments)}function ba(n,r,o,c,d,p,v,T,C){if(as.apply(this,arguments),_i){if(_i){var U=os;_i=!1,os=null}else throw Error(t(198));yn||(yn=!0,Ro=U)}}function vn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ei(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _n(n){if(vn(n)!==n)throw Error(t(188))}function Fa(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return _n(d),n;if(p===c)return _n(d),r;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===o){v=!0,o=d,c=p;break}if(T===c){v=!0,c=d,o=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===o){v=!0,o=p,c=d;break}if(T===c){v=!0,c=p,o=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Po(n){return n=Fa(n),n!==null?ls(n):null}function ls(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ls(n);if(r!==null)return r;n=n.sibling}return null}var us=e.unstable_scheduleCallback,ko=e.unstable_cancelCallback,Ua=e.unstable_shouldYield,Ku=e.unstable_requestPaint,$e=e.unstable_now,ja=e.unstable_getCurrentPriorityLevel,wi=e.unstable_ImmediatePriority,Cr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,No=e.unstable_LowPriority,za=e.unstable_IdlePriority,Ti=null,Jt=null;function Ba(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ti,n,void 0,(n.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Ha,xo=Math.log,$a=Math.LN2;function Ha(n){return n>>>=0,n===0?32:31-(xo(n)/$a|0)|0}var cs=64,hs=4194304;function Rr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ii(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=o&268435455;if(v!==0){var T=v&~d;T!==0?c=Rr(T):(p&=v,p!==0&&(c=Rr(p)))}else v=o&~d,v!==0?c=Rr(v):p!==0&&(c=Rr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-bt(r),d=1<<o,c|=n[o],r&=~d;return c}function Gu(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nr(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-bt(p),T=1<<v,C=d[v];C===-1?(!(T&o)||T&c)&&(d[v]=Gu(T,r)):C<=r&&(n.expiredLanes|=T),p&=~T}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Si(){var n=cs;return cs<<=1,!(cs&4194240)&&(cs=64),n}function Pr(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function kr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-bt(r),n[r]=o}function ze(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-bt(o),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function Nr(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-bt(o),d=1<<c;d&r|n[c]&r&&(n[c]|=r),o&=~d}}var Re=0;function xr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var qa,ds,Wa,Ka,Ga,Do=!1,Ln=[],wt=null,En=null,wn=null,Dr=new Map,ln=new Map,Vn=[],Qu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Dr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function Bt(n,r,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Ko(r),r!==null&&ds(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Yu(n,r,o,c,d){switch(r){case"focusin":return wt=Bt(wt,n,r,o,c,d),!0;case"dragenter":return En=Bt(En,n,r,o,c,d),!0;case"mouseover":return wn=Bt(wn,n,r,o,c,d),!0;case"pointerover":var p=d.pointerId;return Dr.set(p,Bt(Dr.get(p)||null,n,r,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ln.set(p,Bt(ln.get(p)||null,n,r,o,c,d)),!0}return!1}function Ya(n){var r=ki(n.target);if(r!==null){var o=vn(r);if(o!==null){if(r=o.tag,r===13){if(r=Ei(o),r!==null){n.blockedOn=r,Ga(n.priority,function(){Wa(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=fs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);gi=c,o.target.dispatchEvent(c),gi=null}else return r=Ko(o),r!==null&&ds(r),n.blockedOn=o,!1;r.shift()}return!0}function Ai(n,r,o){rr(n)&&o.delete(r)}function Xa(){Do=!1,wt!==null&&rr(wt)&&(wt=null),En!==null&&rr(En)&&(En=null),wn!==null&&rr(wn)&&(wn=null),Dr.forEach(Ai),ln.forEach(Ai)}function Tn(n,r){n.blockedOn===r&&(n.blockedOn=null,Do||(Do=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xa)))}function In(n){function r(d){return Tn(d,n)}if(0<Ln.length){Tn(Ln[0],n);for(var o=1;o<Ln.length;o++){var c=Ln[o];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Tn(wt,n),En!==null&&Tn(En,n),wn!==null&&Tn(wn,n),Dr.forEach(r),ln.forEach(r),o=0;o<Vn.length;o++)c=Vn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Vn.length&&(o=Vn[0],o.blockedOn===null);)Ya(o),o.blockedOn===null&&Vn.shift()}var ir=fe.ReactCurrentBatchConfig,Or=!0;function Ke(n,r,o,c){var d=Re,p=ir.transition;ir.transition=null;try{Re=1,Oo(n,r,o,c)}finally{Re=d,ir.transition=p}}function Xu(n,r,o,c){var d=Re,p=ir.transition;ir.transition=null;try{Re=4,Oo(n,r,o,c)}finally{Re=d,ir.transition=p}}function Oo(n,r,o,c){if(Or){var d=fs(n,r,o,c);if(d===null)lc(n,r,c,Ci,o),Qa(n,c);else if(Yu(d,n,r,o,c))c.stopPropagation();else if(Qa(n,c),r&4&&-1<Qu.indexOf(n)){for(;d!==null;){var p=Ko(d);if(p!==null&&qa(p),p=fs(n,r,o,c),p===null&&lc(n,r,c,Ci,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else lc(n,r,c,null,o)}}var Ci=null;function fs(n,r,o,c){if(Ci=null,n=ns(c),n=ki(n),n!==null)if(r=vn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Ei(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ci=n,null}function Lo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ja()){case wi:return 1;case Cr:return 4;case an:case No:return 16;case za:return 536870912;default:return 16}default:return 16}}var en=null,ps=null,$t=null;function Vo(){if($t)return $t;var n,r=ps,o=r.length,c,d="value"in en?en.value:en.textContent,p=d.length;for(n=0;n<o&&r[n]===d[n];n++);var v=o-n;for(c=1;c<=v&&r[o-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function ms(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Mn(){return!0}function Mo(){return!1}function Tt(n){function r(o,c,d,p,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Mn:Mo,this.isPropagationStopped=Mo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),r}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=Tt(Sn),bn=te({},Sn,{view:0,detail:0}),Ju=Tt(bn),ys,sr,Lr,Ri=te({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lr&&(Lr&&n.type==="mousemove"?(ys=n.screenX-Lr.screenX,sr=n.screenY-Lr.screenY):sr=ys=0,Lr=n),ys)},movementY:function(n){return"movementY"in n?n.movementY:sr}}),vs=Tt(Ri),bo=te({},Ri,{dataTransfer:0}),Ja=Tt(bo),_s=te({},bn,{relatedTarget:0}),Es=Tt(_s),Za=te({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),or=Tt(Za),el=te({},Sn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tl=Tt(el),nl=te({},Sn,{data:0}),Fo=Tt(nl),ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ft={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function il(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=rl[n])?!!r[n]:!1}function Fn(){return il}var l=te({},bn,{key:function(n){if(n.key){var r=ws[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ms(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ft[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(n){return n.type==="keypress"?ms(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ms(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),g=te({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(g),L=te({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn}),j=Tt(L),X=te({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Tt(X),ct=te({},Ri,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ke=Tt(ct),gt=[9,13,27,32],st=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var tn=m&&"TextEvent"in window&&!un,Pi=m&&(!st||un&&8<un&&11>=un),Ts=" ",Bd=!1;function $d(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function Ev(n,r){switch(n){case"compositionend":return Hd(r);case"keypress":return r.which!==32?null:(Bd=!0,Ts);case"textInput":return n=r.data,n===Ts&&Bd?null:n;default:return null}}function wv(n,r){if(Is)return n==="compositionend"||!st&&$d(n,r)?(n=Vo(),$t=ps=en=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pi&&r.locale!=="ko"?null:r.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Tv[n.type]:r==="textarea"}function Wd(n,r,o,c){On(c),r=ul(r,"onChange"),0<r.length&&(o=new gs("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Uo=null,jo=null;function Iv(n){hf(n,0)}function sl(n){var r=Ps(n);if(Xi(r))return n}function Sv(n,r){if(n==="change")return r}var Kd=!1;if(m){var Zu;if(m){var ec="oninput"in document;if(!ec){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),ec=typeof Gd.oninput=="function"}Zu=ec}else Zu=!1;Kd=Zu&&(!document.documentMode||9<document.documentMode)}function Qd(){Uo&&(Uo.detachEvent("onpropertychange",Yd),jo=Uo=null)}function Yd(n){if(n.propertyName==="value"&&sl(jo)){var r=[];Wd(r,jo,n,ns(n)),Co(Iv,r)}}function Av(n,r,o){n==="focusin"?(Qd(),Uo=r,jo=o,Uo.attachEvent("onpropertychange",Yd)):n==="focusout"&&Qd()}function Cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sl(jo)}function Rv(n,r){if(n==="click")return sl(r)}function Pv(n,r){if(n==="input"||n==="change")return sl(r)}function kv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var An=typeof Object.is=="function"?Object.is:kv;function zo(n,r){if(An(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!y.call(r,d)||!An(n[d],r[d]))return!1}return!0}function Xd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jd(n,r){var o=Xd(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xd(o)}}function Zd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Zd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ef(){for(var n=window,r=Sr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Sr(n.document)}return r}function tc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Nv(n){var r=ef(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Zd(o.ownerDocument.documentElement,o)){if(c!==null&&tc(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Jd(o,p);var v=Jd(o,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var xv=m&&"documentMode"in document&&11>=document.documentMode,Ss=null,nc=null,Bo=null,rc=!1;function tf(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;rc||Ss==null||Ss!==Sr(c)||(c=Ss,"selectionStart"in c&&tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Bo&&zo(Bo,c)||(Bo=c,c=ul(nc,"onSelect"),0<c.length&&(r=new gs("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=Ss)))}function ol(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var As={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},ic={},nf={};m&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function al(n){if(ic[n])return ic[n];if(!As[n])return n;var r=As[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in nf)return ic[n]=r[o];return n}var rf=al("animationend"),sf=al("animationiteration"),of=al("animationstart"),af=al("transitionend"),lf=new Map,uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(n,r){lf.set(n,r),u(r,[n])}for(var sc=0;sc<uf.length;sc++){var oc=uf[sc],Dv=oc.toLowerCase(),Ov=oc[0].toUpperCase()+oc.slice(1);Vr(Dv,"on"+Ov)}Vr(rf,"onAnimationEnd"),Vr(sf,"onAnimationIteration"),Vr(of,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(af,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function cf(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,ba(c,r,void 0,n),n.currentTarget=null}function hf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,U=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;cf(d,T,U),p=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,U=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;cf(d,T,U),p=C}}}if(yn)throw n=Ro,yn=!1,Ro=null,n}function qe(n,r){var o=r[pc];o===void 0&&(o=r[pc]=new Set);var c=n+"__bubble";o.has(c)||(df(r,n,2,!1),o.add(c))}function ac(n,r,o){var c=0;r&&(c|=4),df(o,n,c,r)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[ll]){n[ll]=!0,s.forEach(function(o){o!=="selectionchange"&&(Lv.has(o)||ac(o,!1,n),ac(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ll]||(r[ll]=!0,ac("selectionchange",!1,r))}}function df(n,r,o,c){switch(Lo(r)){case 1:var d=Ke;break;case 4:d=Xu;break;default:d=Oo}o=d.bind(null,r,o,n),d=void 0,!ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function lc(n,r,o,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=ki(T),v===null)return;if(C=v.tag,C===5||C===6){c=p=v;continue e}T=T.parentNode}}c=c.return}Co(function(){var U=p,q=ns(o),K=[];e:{var H=lf.get(n);if(H!==void 0){var ee=gs,ie=n;switch(n){case"keypress":if(ms(o)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=Es;break;case"focusout":ie="blur",ee=Es;break;case"beforeblur":case"afterblur":ee=Es;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Ja;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=j;break;case rf:case sf:case of:ee=or;break;case af:ee=Fe;break;case"scroll":ee=Ju;break;case"wheel":ee=ke;break;case"copy":case"cut":case"paste":ee=tl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var se=(r&4)!==0,nt=!se&&n==="scroll",V=se?H!==null?H+"Capture":null:H;se=[];for(var k=U,b;k!==null;){b=k;var G=b.stateNode;if(b.tag===5&&G!==null&&(b=G,V!==null&&(G=tt(k,V),G!=null&&se.push(qo(k,G,b)))),nt)break;k=k.return}0<se.length&&(H=new ee(H,ie,null,o,q),K.push({event:H,listeners:se}))}}if(!(r&7)){e:{if(H=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",H&&o!==gi&&(ie=o.relatedTarget||o.fromElement)&&(ki(ie)||ie[ar]))break e;if((ee||H)&&(H=q.window===q?q:(H=q.ownerDocument)?H.defaultView||H.parentWindow:window,ee?(ie=o.relatedTarget||o.toElement,ee=U,ie=ie?ki(ie):null,ie!==null&&(nt=vn(ie),ie!==nt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=U),ee!==ie)){if(se=vs,G="onMouseLeave",V="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,G="onPointerLeave",V="onPointerEnter",k="pointer"),nt=ee==null?H:Ps(ee),b=ie==null?H:Ps(ie),H=new se(G,k+"leave",ee,o,q),H.target=nt,H.relatedTarget=b,G=null,ki(q)===U&&(se=new se(V,k+"enter",ie,o,q),se.target=b,se.relatedTarget=nt,G=se),nt=G,ee&&ie)t:{for(se=ee,V=ie,k=0,b=se;b;b=Cs(b))k++;for(b=0,G=V;G;G=Cs(G))b++;for(;0<k-b;)se=Cs(se),k--;for(;0<b-k;)V=Cs(V),b--;for(;k--;){if(se===V||V!==null&&se===V.alternate)break t;se=Cs(se),V=Cs(V)}se=null}else se=null;ee!==null&&ff(K,H,ee,se,!1),ie!==null&&nt!==null&&ff(K,nt,ie,se,!0)}}e:{if(H=U?Ps(U):window,ee=H.nodeName&&H.nodeName.toLowerCase(),ee==="select"||ee==="input"&&H.type==="file")var oe=Sv;else if(qd(H))if(Kd)oe=Pv;else{oe=Cv;var ue=Av}else(ee=H.nodeName)&&ee.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(oe=Rv);if(oe&&(oe=oe(n,U))){Wd(K,oe,o,q);break e}ue&&ue(n,H,U),n==="focusout"&&(ue=H._wrapperState)&&ue.controlled&&H.type==="number"&&Zi(H,"number",H.value)}switch(ue=U?Ps(U):window,n){case"focusin":(qd(ue)||ue.contentEditable==="true")&&(Ss=ue,nc=U,Bo=null);break;case"focusout":Bo=nc=Ss=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,tf(K,o,q);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":tf(K,o,q)}var ce;if(st)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Is?$d(n,o)&&(me="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(me="onCompositionStart");me&&(Pi&&o.locale!=="ko"&&(Is||me!=="onCompositionStart"?me==="onCompositionEnd"&&Is&&(ce=Vo()):(en=q,ps="value"in en?en.value:en.textContent,Is=!0)),ue=ul(U,me),0<ue.length&&(me=new Fo(me,n,null,o,q),K.push({event:me,listeners:ue}),ce?me.data=ce:(ce=Hd(o),ce!==null&&(me.data=ce)))),(ce=tn?Ev(n,o):wv(n,o))&&(U=ul(U,"onBeforeInput"),0<U.length&&(q=new Fo("onBeforeInput","beforeinput",null,o,q),K.push({event:q,listeners:U}),q.data=ce))}hf(K,r)})}function qo(n,r,o){return{instance:n,listener:r,currentTarget:o}}function ul(n,r){for(var o=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,o),p!=null&&c.unshift(qo(n,p,d)),p=tt(n,r),p!=null&&c.push(qo(n,p,d))),n=n.return}return c}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ff(n,r,o,c,d){for(var p=r._reactName,v=[];o!==null&&o!==c;){var T=o,C=T.alternate,U=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&U!==null&&(T=U,d?(C=tt(o,p),C!=null&&v.unshift(qo(o,C,T))):d||(C=tt(o,p),C!=null&&v.push(qo(o,C,T)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var Vv=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function pf(n){return(typeof n=="string"?n:""+n).replace(Vv,`
`).replace(Mv,"")}function cl(n,r,o){if(r=pf(r),pf(n)!==r&&o)throw Error(t(425))}function hl(){}var uc=null,cc=null;function hc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,mf=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof mf<"u"?function(n){return mf.resolve(null).then(n).catch(Uv)}:dc;function Uv(n){setTimeout(function(){throw n})}function fc(n,r){var o=r,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),In(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);In(r)}function Mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function gf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Un="__reactFiber$"+Rs,Wo="__reactProps$"+Rs,ar="__reactContainer$"+Rs,pc="__reactEvents$"+Rs,jv="__reactListeners$"+Rs,zv="__reactHandles$"+Rs;function ki(n){var r=n[Un];if(r)return r;for(var o=n.parentNode;o;){if(r=o[ar]||o[Un]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=gf(n);n!==null;){if(o=n[Un])return o;n=gf(n)}return r}n=o,o=n.parentNode}return null}function Ko(n){return n=n[Un]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[Wo]||null}var mc=[],ks=-1;function br(n){return{current:n}}function We(n){0>ks||(n.current=mc[ks],mc[ks]=null,ks--)}function He(n,r){ks++,mc[ks]=n.current,n.current=r}var Fr={},kt=br(Fr),Ht=br(!1),Ni=Fr;function Ns(n,r){var o=n.type.contextTypes;if(!o)return Fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function fl(){We(Ht),We(kt)}function yf(n,r,o){if(kt.current!==Fr)throw Error(t(168));He(kt,r),He(Ht,o)}function vf(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Me(n)||"Unknown",d));return te({},o,c)}function pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,Ni=kt.current,He(kt,n),He(Ht,Ht.current),!0}function _f(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=vf(n,r,Ni),c.__reactInternalMemoizedMergedChildContext=n,We(Ht),We(kt),He(kt,n)):We(Ht),He(Ht,o)}var lr=null,ml=!1,gc=!1;function Ef(n){lr===null?lr=[n]:lr.push(n)}function Bv(n){ml=!0,Ef(n)}function Ur(){if(!gc&&lr!==null){gc=!0;var n=0,r=Re;try{var o=lr;for(Re=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}lr=null,ml=!1}catch(d){throw lr!==null&&(lr=lr.slice(n+1)),us(wi,Ur),d}finally{Re=r,gc=!1}}return null}var xs=[],Ds=0,gl=null,yl=0,cn=[],hn=0,xi=null,ur=1,cr="";function Di(n,r){xs[Ds++]=yl,xs[Ds++]=gl,gl=n,yl=r}function wf(n,r,o){cn[hn++]=ur,cn[hn++]=cr,cn[hn++]=xi,xi=n;var c=ur;n=cr;var d=32-bt(c)-1;c&=~(1<<d),o+=1;var p=32-bt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,ur=1<<32-bt(r)+d|o<<d|c,cr=p+n}else ur=1<<p|o<<d|c,cr=n}function yc(n){n.return!==null&&(Di(n,1),wf(n,1,0))}function vc(n){for(;n===gl;)gl=xs[--Ds],xs[Ds]=null,yl=xs[--Ds],xs[Ds]=null;for(;n===xi;)xi=cn[--hn],cn[hn]=null,cr=cn[--hn],cn[hn]=null,ur=cn[--hn],cn[hn]=null}var nn=null,rn=null,Ge=!1,Cn=null;function Tf(n,r){var o=mn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function If(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=Mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=xi!==null?{id:ur,overflow:cr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=mn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function _c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ec(n){if(Ge){var r=rn;if(r){var o=r;if(!If(n,r)){if(_c(n))throw Error(t(418));r=Mr(o.nextSibling);var c=nn;r&&If(n,r)?Tf(c,o):(n.flags=n.flags&-4097|2,Ge=!1,nn=n)}}else{if(_c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,nn=n}}}function Sf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function vl(n){if(n!==nn)return!1;if(!Ge)return Sf(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!hc(n.type,n.memoizedProps)),r&&(r=rn)){if(_c(n))throw Af(),Error(t(418));for(;r;)Tf(n,r),r=Mr(r.nextSibling)}if(Sf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){rn=Mr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?Mr(n.stateNode.nextSibling):null;return!0}function Af(){for(var n=rn;n;)n=Mr(n.nextSibling)}function Os(){rn=nn=null,Ge=!1}function wc(n){Cn===null?Cn=[n]:Cn.push(n)}var $v=fe.ReactCurrentBatchConfig;function Go(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function _l(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Cf(n){var r=n._init;return r(n._payload)}function Rf(n){function r(V,k){if(n){var b=V.deletions;b===null?(V.deletions=[k],V.flags|=16):b.push(k)}}function o(V,k){if(!n)return null;for(;k!==null;)r(V,k),k=k.sibling;return null}function c(V,k){for(V=new Map;k!==null;)k.key!==null?V.set(k.key,k):V.set(k.index,k),k=k.sibling;return V}function d(V,k){return V=Kr(V,k),V.index=0,V.sibling=null,V}function p(V,k,b){return V.index=b,n?(b=V.alternate,b!==null?(b=b.index,b<k?(V.flags|=2,k):b):(V.flags|=2,k)):(V.flags|=1048576,k)}function v(V){return n&&V.alternate===null&&(V.flags|=2),V}function T(V,k,b,G){return k===null||k.tag!==6?(k=dh(b,V.mode,G),k.return=V,k):(k=d(k,b),k.return=V,k)}function C(V,k,b,G){var oe=b.type;return oe===R?q(V,k,b.props.children,G,b.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Pt&&Cf(oe)===k.type)?(G=d(k,b.props),G.ref=Go(V,k,b),G.return=V,G):(G=$l(b.type,b.key,b.props,null,V.mode,G),G.ref=Go(V,k,b),G.return=V,G)}function U(V,k,b,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=fh(b,V.mode,G),k.return=V,k):(k=d(k,b.children||[]),k.return=V,k)}function q(V,k,b,G,oe){return k===null||k.tag!==7?(k=ji(b,V.mode,G,oe),k.return=V,k):(k=d(k,b),k.return=V,k)}function K(V,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=dh(""+k,V.mode,b),k.return=V,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case je:return b=$l(k.type,k.key,k.props,null,V.mode,b),b.ref=Go(V,null,k),b.return=V,b;case Ee:return k=fh(k,V.mode,b),k.return=V,k;case Pt:var G=k._init;return K(V,G(k._payload),b)}if(Jn(k)||le(k))return k=ji(k,V.mode,b,null),k.return=V,k;_l(V,k)}return null}function H(V,k,b,G){var oe=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:T(V,k,""+b,G);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case je:return b.key===oe?C(V,k,b,G):null;case Ee:return b.key===oe?U(V,k,b,G):null;case Pt:return oe=b._init,H(V,k,oe(b._payload),G)}if(Jn(b)||le(b))return oe!==null?null:q(V,k,b,G,null);_l(V,b)}return null}function ee(V,k,b,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number")return V=V.get(b)||null,T(k,V,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case je:return V=V.get(G.key===null?b:G.key)||null,C(k,V,G,oe);case Ee:return V=V.get(G.key===null?b:G.key)||null,U(k,V,G,oe);case Pt:var ue=G._init;return ee(V,k,b,ue(G._payload),oe)}if(Jn(G)||le(G))return V=V.get(b)||null,q(k,V,G,oe,null);_l(k,G)}return null}function ie(V,k,b,G){for(var oe=null,ue=null,ce=k,me=k=0,_t=null;ce!==null&&me<b.length;me++){ce.index>me?(_t=ce,ce=null):_t=ce.sibling;var Ve=H(V,ce,b[me],G);if(Ve===null){ce===null&&(ce=_t);break}n&&ce&&Ve.alternate===null&&r(V,ce),k=p(Ve,k,me),ue===null?oe=Ve:ue.sibling=Ve,ue=Ve,ce=_t}if(me===b.length)return o(V,ce),Ge&&Di(V,me),oe;if(ce===null){for(;me<b.length;me++)ce=K(V,b[me],G),ce!==null&&(k=p(ce,k,me),ue===null?oe=ce:ue.sibling=ce,ue=ce);return Ge&&Di(V,me),oe}for(ce=c(V,ce);me<b.length;me++)_t=ee(ce,V,me,b[me],G),_t!==null&&(n&&_t.alternate!==null&&ce.delete(_t.key===null?me:_t.key),k=p(_t,k,me),ue===null?oe=_t:ue.sibling=_t,ue=_t);return n&&ce.forEach(function(Gr){return r(V,Gr)}),Ge&&Di(V,me),oe}function se(V,k,b,G){var oe=le(b);if(typeof oe!="function")throw Error(t(150));if(b=oe.call(b),b==null)throw Error(t(151));for(var ue=oe=null,ce=k,me=k=0,_t=null,Ve=b.next();ce!==null&&!Ve.done;me++,Ve=b.next()){ce.index>me?(_t=ce,ce=null):_t=ce.sibling;var Gr=H(V,ce,Ve.value,G);if(Gr===null){ce===null&&(ce=_t);break}n&&ce&&Gr.alternate===null&&r(V,ce),k=p(Gr,k,me),ue===null?oe=Gr:ue.sibling=Gr,ue=Gr,ce=_t}if(Ve.done)return o(V,ce),Ge&&Di(V,me),oe;if(ce===null){for(;!Ve.done;me++,Ve=b.next())Ve=K(V,Ve.value,G),Ve!==null&&(k=p(Ve,k,me),ue===null?oe=Ve:ue.sibling=Ve,ue=Ve);return Ge&&Di(V,me),oe}for(ce=c(V,ce);!Ve.done;me++,Ve=b.next())Ve=ee(ce,V,me,Ve.value,G),Ve!==null&&(n&&Ve.alternate!==null&&ce.delete(Ve.key===null?me:Ve.key),k=p(Ve,k,me),ue===null?oe=Ve:ue.sibling=Ve,ue=Ve);return n&&ce.forEach(function(T_){return r(V,T_)}),Ge&&Di(V,me),oe}function nt(V,k,b,G){if(typeof b=="object"&&b!==null&&b.type===R&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case je:e:{for(var oe=b.key,ue=k;ue!==null;){if(ue.key===oe){if(oe=b.type,oe===R){if(ue.tag===7){o(V,ue.sibling),k=d(ue,b.props.children),k.return=V,V=k;break e}}else if(ue.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Pt&&Cf(oe)===ue.type){o(V,ue.sibling),k=d(ue,b.props),k.ref=Go(V,ue,b),k.return=V,V=k;break e}o(V,ue);break}else r(V,ue);ue=ue.sibling}b.type===R?(k=ji(b.props.children,V.mode,G,b.key),k.return=V,V=k):(G=$l(b.type,b.key,b.props,null,V.mode,G),G.ref=Go(V,k,b),G.return=V,V=G)}return v(V);case Ee:e:{for(ue=b.key;k!==null;){if(k.key===ue)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){o(V,k.sibling),k=d(k,b.children||[]),k.return=V,V=k;break e}else{o(V,k);break}else r(V,k);k=k.sibling}k=fh(b,V.mode,G),k.return=V,V=k}return v(V);case Pt:return ue=b._init,nt(V,k,ue(b._payload),G)}if(Jn(b))return ie(V,k,b,G);if(le(b))return se(V,k,b,G);_l(V,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(o(V,k.sibling),k=d(k,b),k.return=V,V=k):(o(V,k),k=dh(b,V.mode,G),k.return=V,V=k),v(V)):o(V,k)}return nt}var Ls=Rf(!0),Pf=Rf(!1),El=br(null),wl=null,Vs=null,Tc=null;function Ic(){Tc=Vs=wl=null}function Sc(n){var r=El.current;We(El),n._currentValue=r}function Ac(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Ms(n,r){wl=n,Tc=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Wt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Tc!==n)if(n={context:n,memoizedValue:r,next:null},Vs===null){if(wl===null)throw Error(t(308));Vs=n,wl.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return r}var Oi=null;function Cc(n){Oi===null?Oi=[n]:Oi.push(n)}function kf(n,r,o,c){var d=r.interleaved;return d===null?(o.next=o,Cc(r)):(o.next=d.next,d.next=o),r.interleaved=o,hr(n,c)}function hr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var jr=!1;function Rc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function zr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,hr(n,o)}return d=c.interleaved,d===null?(r.next=r,Cc(c)):(r.next=d.next,d.next=r),c.interleaved=r,hr(n,o)}function Tl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Nr(n,o)}}function xf(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?d=p=r:p=p.next=r}else d=p=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Il(n,r,o,c){var d=n.updateQueue;jr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,U=C.next;C.next=null,v===null?p=U:v.next=U,v=C;var q=n.alternate;q!==null&&(q=q.updateQueue,T=q.lastBaseUpdate,T!==v&&(T===null?q.firstBaseUpdate=U:T.next=U,q.lastBaseUpdate=C))}if(p!==null){var K=d.baseState;v=0,q=U=C=null,T=p;do{var H=T.lane,ee=T.eventTime;if((c&H)===H){q!==null&&(q=q.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,se=T;switch(H=r,ee=o,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){K=ie.call(ee,K,H);break e}K=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,H=typeof ie=="function"?ie.call(ee,K,H):ie,H==null)break e;K=te({},K,H);break e;case 2:jr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[T]:H.push(T))}else ee={eventTime:ee,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},q===null?(U=q=ee,C=K):q=q.next=ee,v|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;H=T,T=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(q===null&&(C=K),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Mi|=v,n.lanes=v,n.memoizedState=K}}function Df(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Qo={},jn=br(Qo),Yo=br(Qo),Xo=br(Qo);function Li(n){if(n===Qo)throw Error(t(174));return n}function Pc(n,r){switch(He(Xo,r),He(Yo,n),He(jn,Qo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}We(jn),He(jn,r)}function bs(){We(jn),We(Yo),We(Xo)}function Of(n){Li(Xo.current);var r=Li(jn.current),o=ut(r,n.type);r!==o&&(He(Yo,n),He(jn,o))}function kc(n){Yo.current===n&&(We(jn),We(Yo))}var Qe=br(0);function Sl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Nc=[];function xc(){for(var n=0;n<Nc.length;n++)Nc[n]._workInProgressVersionPrimary=null;Nc.length=0}var Al=fe.ReactCurrentDispatcher,Dc=fe.ReactCurrentBatchConfig,Vi=0,Ye=null,ht=null,yt=null,Cl=!1,Jo=!1,Zo=0,Hv=0;function Nt(){throw Error(t(321))}function Oc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!An(n[o],r[o]))return!1;return!0}function Lc(n,r,o,c,d,p){if(Vi=p,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Al.current=n===null||n.memoizedState===null?Gv:Qv,n=o(c,d),Jo){p=0;do{if(Jo=!1,Zo=0,25<=p)throw Error(t(301));p+=1,yt=ht=null,r.updateQueue=null,Al.current=Yv,n=o(c,d)}while(Jo)}if(Al.current=kl,r=ht!==null&&ht.next!==null,Vi=0,yt=ht=Ye=null,Cl=!1,r)throw Error(t(300));return n}function Vc(){var n=Zo!==0;return Zo=0,n}function zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ye.memoizedState=yt=n:yt=yt.next=n,yt}function fn(){if(ht===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=yt===null?Ye.memoizedState:yt.next;if(r!==null)yt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Ye.memoizedState=yt=n:yt=yt.next=n}return yt}function ea(n,r){return typeof r=="function"?r(n):r}function Mc(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,C=null,U=p;do{var q=U.lane;if((Vi&q)===q)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(T=C=K,v=c):C=C.next=K,Ye.lanes|=q,Mi|=q}U=U.next}while(U!==null&&U!==p);C===null?v=c:C.next=T,An(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,Ye.lanes|=p,Mi|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function bc(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=r.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);An(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,c]}function Lf(){}function Vf(n,r){var o=Ye,c=fn(),d=r(),p=!An(c.memoizedState,d);if(p&&(c.memoizedState=d,Wt=!0),c=c.queue,Fc(Ff.bind(null,o,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(o.flags|=2048,ta(9,bf.bind(null,o,c,d,r),void 0,null),vt===null)throw Error(t(349));Vi&30||Mf(o,r,d)}return d}function Mf(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function bf(n,r,o,c){r.value=o,r.getSnapshot=c,Uf(r)&&jf(n)}function Ff(n,r,o){return o(function(){Uf(r)&&jf(n)})}function Uf(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!An(n,o)}catch{return!0}}function jf(n){var r=hr(n,1);r!==null&&Nn(r,n,1,-1)}function zf(n){var r=zn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},r.queue=n,n=n.dispatch=Kv.bind(null,Ye,n),[r.memoizedState,n]}function ta(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function Bf(){return fn().memoizedState}function Rl(n,r,o,c){var d=zn();Ye.flags|=n,d.memoizedState=ta(1|r,o,void 0,c===void 0?null:c)}function Pl(n,r,o,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var v=ht.memoizedState;if(p=v.destroy,c!==null&&Oc(c,v.deps)){d.memoizedState=ta(r,o,p,c);return}}Ye.flags|=n,d.memoizedState=ta(1|r,o,p,c)}function $f(n,r){return Rl(8390656,8,n,r)}function Fc(n,r){return Pl(2048,8,n,r)}function Hf(n,r){return Pl(4,2,n,r)}function qf(n,r){return Pl(4,4,n,r)}function Wf(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kf(n,r,o){return o=o!=null?o.concat([n]):null,Pl(4,4,Wf.bind(null,r,n),o)}function Uc(){}function Gf(n,r){var o=fn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Oc(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function Qf(n,r){var o=fn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Oc(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function Yf(n,r,o){return Vi&21?(An(o,r)||(o=Si(),Ye.lanes|=o,Mi|=o,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=o)}function qv(n,r){var o=Re;Re=o!==0&&4>o?o:4,n(!0);var c=Dc.transition;Dc.transition={};try{n(!1),r()}finally{Re=o,Dc.transition=c}}function Xf(){return fn().memoizedState}function Wv(n,r,o){var c=qr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Jf(n))Zf(r,o);else if(o=kf(n,r,o,c),o!==null){var d=jt();Nn(o,n,c,d),ep(o,r,c)}}function Kv(n,r,o){var c=qr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Jf(n))Zf(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,T=p(v,o);if(d.hasEagerState=!0,d.eagerState=T,An(T,v)){var C=r.interleaved;C===null?(d.next=d,Cc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}o=kf(n,r,d,c),o!==null&&(d=jt(),Nn(o,n,c,d),ep(o,r,c))}}function Jf(n){var r=n.alternate;return n===Ye||r!==null&&r===Ye}function Zf(n,r){Jo=Cl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function ep(n,r,o){if(o&4194240){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Nr(n,o)}}var kl={readContext:dn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},Gv={readContext:dn,useCallback:function(n,r){return zn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:$f,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Rl(4194308,4,Wf.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Rl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Rl(4,2,n,r)},useMemo:function(n,r){var o=zn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=zn();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Wv.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var r=zn();return n={current:n},r.memoizedState=n},useState:zf,useDebugValue:Uc,useDeferredValue:function(n){return zn().memoizedState=n},useTransition:function(){var n=zf(!1),r=n[0];return n=qv.bind(null,n[1]),zn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=Ye,d=zn();if(Ge){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),vt===null)throw Error(t(349));Vi&30||Mf(c,r,o)}d.memoizedState=o;var p={value:o,getSnapshot:r};return d.queue=p,$f(Ff.bind(null,c,p,n),[n]),c.flags|=2048,ta(9,bf.bind(null,c,p,o,r),void 0,null),o},useId:function(){var n=zn(),r=vt.identifierPrefix;if(Ge){var o=cr,c=ur;o=(c&~(1<<32-bt(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=Zo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Hv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Qv={readContext:dn,useCallback:Gf,useContext:dn,useEffect:Fc,useImperativeHandle:Kf,useInsertionEffect:Hf,useLayoutEffect:qf,useMemo:Qf,useReducer:Mc,useRef:Bf,useState:function(){return Mc(ea)},useDebugValue:Uc,useDeferredValue:function(n){var r=fn();return Yf(r,ht.memoizedState,n)},useTransition:function(){var n=Mc(ea)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Lf,useSyncExternalStore:Vf,useId:Xf,unstable_isNewReconciler:!1},Yv={readContext:dn,useCallback:Gf,useContext:dn,useEffect:Fc,useImperativeHandle:Kf,useInsertionEffect:Hf,useLayoutEffect:qf,useMemo:Qf,useReducer:bc,useRef:Bf,useState:function(){return bc(ea)},useDebugValue:Uc,useDeferredValue:function(n){var r=fn();return ht===null?r.memoizedState=n:Yf(r,ht.memoizedState,n)},useTransition:function(){var n=bc(ea)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Lf,useSyncExternalStore:Vf,useId:Xf,unstable_isNewReconciler:!1};function Rn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function jc(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:te({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Nl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=jt(),d=qr(n),p=dr(c,d);p.payload=r,o!=null&&(p.callback=o),r=zr(n,p,d),r!==null&&(Nn(r,n,d,c),Tl(r,n,d))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=jt(),d=qr(n),p=dr(c,d);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=zr(n,p,d),r!==null&&(Nn(r,n,d,c),Tl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=jt(),c=qr(n),d=dr(o,c);d.tag=2,r!=null&&(d.callback=r),r=zr(n,d,c),r!==null&&(Nn(r,n,c,o),Tl(r,n,c))}};function tp(n,r,o,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!zo(o,c)||!zo(d,p):!0}function np(n,r,o){var c=!1,d=Fr,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=qt(r)?Ni:kt.current,c=r.contextTypes,p=(c=c!=null)?Ns(n,d):Fr),r=new r(o,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Nl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function rp(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&Nl.enqueueReplaceState(r,r.state,null)}function zc(n,r,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Rc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=qt(r)?Ni:kt.current,d.context=Ns(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(jc(n,r,p,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Nl.enqueueReplaceState(d,d.state,null),Il(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,r){try{var o="",c=r;do o+=Se(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Bc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function $c(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Xv=typeof WeakMap=="function"?WeakMap:Map;function ip(n,r,o){o=dr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){bl||(bl=!0,ih=c),$c(n,r)},o}function sp(n,r,o){o=dr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;o.payload=function(){return c(d)},o.callback=function(){$c(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){$c(n,r),typeof c!="function"&&($r===null?$r=new Set([this]):$r.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),o}function op(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Xv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(d.add(o),n=h_.bind(null,n,r,o),r.then(n,n))}function ap(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function lp(n,r,o,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=dr(-1,1),r.tag=2,zr(o,r,1))),o.lanes|=1),n)}var Jv=fe.ReactCurrentOwner,Wt=!1;function Ut(n,r,o,c){r.child=n===null?Pf(r,null,o,c):Ls(r,n.child,o,c)}function up(n,r,o,c,d){o=o.render;var p=r.ref;return Ms(r,d),c=Lc(n,r,o,c,p,d),o=Vc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,fr(n,r,d)):(Ge&&o&&yc(r),r.flags|=1,Ut(n,r,c,d),r.child)}function cp(n,r,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!hh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,hp(n,r,p,c,d)):(n=$l(o.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:zo,o(v,c)&&n.ref===r.ref)return fr(n,r,d)}return r.flags|=1,n=Kr(p,c),n.ref=r.ref,n.return=r,r.child=n}function hp(n,r,o,c,d){if(n!==null){var p=n.memoizedProps;if(zo(p,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Wt=!0);else return r.lanes=n.lanes,fr(n,r,d)}return Hc(n,r,o,c,d)}function dp(n,r,o){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(js,sn),sn|=o;else{if(!(o&1073741824))return n=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(js,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,He(js,sn),sn|=c}else p!==null?(c=p.baseLanes|o,r.memoizedState=null):c=o,He(js,sn),sn|=c;return Ut(n,r,d,o),r.child}function fp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Hc(n,r,o,c,d){var p=qt(o)?Ni:kt.current;return p=Ns(r,p),Ms(r,d),o=Lc(n,r,o,c,p,d),c=Vc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,fr(n,r,d)):(Ge&&c&&yc(r),r.flags|=1,Ut(n,r,o,d),r.child)}function pp(n,r,o,c,d){if(qt(o)){var p=!0;pl(r)}else p=!1;if(Ms(r,d),r.stateNode===null)Dl(n,r),np(r,o,c),zc(r,o,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var C=v.context,U=o.contextType;typeof U=="object"&&U!==null?U=dn(U):(U=qt(o)?Ni:kt.current,U=Ns(r,U));var q=o.getDerivedStateFromProps,K=typeof q=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==U)&&rp(r,v,c,U),jr=!1;var H=r.memoizedState;v.state=H,Il(r,c,v,d),C=r.memoizedState,T!==c||H!==C||Ht.current||jr?(typeof q=="function"&&(jc(r,o,q,c),C=r.memoizedState),(T=jr||tp(r,o,T,c,H,C,U))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Nf(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Rn(r.type,T),v.props=U,K=r.pendingProps,H=v.context,C=o.contextType,typeof C=="object"&&C!==null?C=dn(C):(C=qt(o)?Ni:kt.current,C=Ns(r,C));var ee=o.getDerivedStateFromProps;(q=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==K||H!==C)&&rp(r,v,c,C),jr=!1,H=r.memoizedState,v.state=H,Il(r,c,v,d);var ie=r.memoizedState;T!==K||H!==ie||Ht.current||jr?(typeof ee=="function"&&(jc(r,o,ee,c),ie=r.memoizedState),(U=jr||tp(r,o,U,c,H,ie,C)||!1)?(q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),v.props=c,v.state=ie,v.context=C,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return qc(n,r,o,c,p,d)}function qc(n,r,o,c,d,p){fp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&_f(r,o,!1),fr(n,r,p);c=r.stateNode,Jv.current=r;var T=v&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Ls(r,n.child,null,p),r.child=Ls(r,null,T,p)):Ut(n,r,T,p),r.memoizedState=c.state,d&&_f(r,o,!0),r.child}function mp(n){var r=n.stateNode;r.pendingContext?yf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&yf(n,r.context,!1),Pc(n,r.containerInfo)}function gp(n,r,o,c,d){return Os(),wc(d),r.flags|=256,Ut(n,r,o,c),r.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Kc(n){return{baseLanes:n,cachePool:null,transitions:null}}function yp(n,r,o){var c=r.pendingProps,d=Qe.current,p=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Qe,d&1),n===null)return Ec(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Hl(v,c,0,null),n=ji(n,c,o,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Kc(o),r.memoizedState=Wc,n):Gc(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Zv(n,r,v,c,T,d,o);if(p){p=c.fallback,v=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return!(v&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Kr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Kr(T,p):(p=ji(p,v,o,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?Kc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~o,r.memoizedState=Wc,c}return p=n.child,n=p.sibling,c=Kr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function Gc(n,r){return r=Hl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function xl(n,r,o,c){return c!==null&&wc(c),Ls(r,n.child,null,o),n=Gc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Zv(n,r,o,c,d,p,v){if(o)return r.flags&256?(r.flags&=-257,c=Bc(Error(t(422))),xl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Hl({mode:"visible",children:c.children},d,0,null),p=ji(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&Ls(r,n.child,null,v),r.child.memoizedState=Kc(v),r.memoizedState=Wc,p);if(!(r.mode&1))return xl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Bc(p,c,void 0),xl(n,r,v,c)}if(T=(v&n.childLanes)!==0,Wt||T){if(c=vt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,hr(n,d),Nn(c,n,d,-1))}return ch(),c=Bc(Error(t(421))),xl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=d_.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,rn=Mr(d.nextSibling),nn=r,Ge=!0,Cn=null,n!==null&&(cn[hn++]=ur,cn[hn++]=cr,cn[hn++]=xi,ur=n.id,cr=n.overflow,xi=r),r=Gc(r,c.children),r.flags|=4096,r)}function vp(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Ac(n.return,r,o)}function Qc(n,r,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function _p(n,r,o){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Ut(n,r,c.children,o),c=Qe.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vp(n,o,r);else if(n.tag===19)vp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Qe,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&Sl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Qc(r,!1,d,o,p);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Sl(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Qc(r,!0,o,null,p);break;case"together":Qc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Dl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function fr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Mi|=r.lanes,!(o&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Kr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Kr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function e_(n,r,o){switch(r.tag){case 3:mp(r),Os();break;case 5:Of(r);break;case 1:qt(r.type)&&pl(r);break;case 4:Pc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(El,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Qe,Qe.current&1),r.flags|=128,null):o&r.child.childLanes?yp(n,r,o):(He(Qe,Qe.current&1),n=fr(n,r,o),n!==null?n.sibling:null);He(Qe,Qe.current&1);break;case 19:if(c=(o&r.childLanes)!==0,n.flags&128){if(c)return _p(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Qe,Qe.current),c)break;return null;case 22:case 23:return r.lanes=0,dp(n,r,o)}return fr(n,r,o)}var Ep,Yc,wp,Tp;Ep=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Yc=function(){},wp=function(n,r,o,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Li(jn.current);var p=null;switch(o){case"input":d=fi(n,d),c=fi(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=go(n,d),c=go(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=hl)}To(o,c);var v;o=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(v in T)T.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(a.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var C=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&C!==T&&(C!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(o||(o={}),o[v]=C[v])}else o||(p||(p=[]),p.push(U,o)),o=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(a.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&qe("scroll",n),p||T===C||(p=[])):(p=p||[]).push(U,C))}o&&(p=p||[]).push("style",o);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Tp=function(n,r,o,c){o!==c&&(r.flags|=4)};function na(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function t_(n,r,o){var c=r.pendingProps;switch(vc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(r),null;case 1:return qt(r.type)&&fl(),xt(r),null;case 3:return c=r.stateNode,bs(),We(Ht),We(kt),xc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Cn!==null&&(ah(Cn),Cn=null))),Yc(n,r),xt(r),null;case 5:kc(r);var d=Li(Xo.current);if(o=r.type,n!==null&&r.stateNode!=null)wp(n,r,o,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return xt(r),null}if(n=Li(jn.current),vl(r)){c=r.stateNode,o=r.type;var p=r.memoizedProps;switch(c[Un]=r,c[Wo]=p,n=(r.mode&1)!==0,o){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<$o.length;d++)qe($o[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Ji(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":es(c,p),qe("invalid",c)}To(o,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&cl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&cl(c.textContent,T,n),d=["children",""+T]):a.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&qe("scroll",c)}switch(o){case"input":Xn(c),Ma(c,p,!0);break;case"textarea":Xn(c),yo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=hl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(o,{is:c.is}):(n=v.createElement(o),o==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,o),n[Un]=r,n[Wo]=c,Ep(n,r,!1,!1),r.stateNode=n;e:{switch(v=Io(o,c),o){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<$o.length;d++)qe($o[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":Ji(n,c),d=fi(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),qe("invalid",n);break;case"textarea":es(n,c),d=go(n,c),qe("invalid",n);break;default:d=c}To(o,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?Eo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&vo(n,C)):p==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&Ar(n,C):typeof C=="number"&&Ar(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?C!=null&&p==="onScroll"&&qe("scroll",n):C!=null&&ye(n,p,C,v))}switch(o){case"input":Xn(n),Ma(n,c,!1);break;case"textarea":Xn(n),yo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Zn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Zn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=hl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xt(r),null;case 6:if(n&&r.stateNode!=null)Tp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=Li(Xo.current),Li(jn.current),vl(r)){if(c=r.stateNode,o=r.memoizedProps,c[Un]=r,(p=c.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:cl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cl(c.nodeValue,o,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Un]=r,r.stateNode=c}return xt(r),null;case 13:if(We(Qe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&rn!==null&&r.mode&1&&!(r.flags&128))Af(),Os(),r.flags|=98560,p=!1;else if(p=vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Un]=r}else Os(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;xt(r),p=!1}else Cn!==null&&(ah(Cn),Cn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Qe.current&1?dt===0&&(dt=3):ch())),r.updateQueue!==null&&(r.flags|=4),xt(r),null);case 4:return bs(),Yc(n,r),n===null&&Ho(r.stateNode.containerInfo),xt(r),null;case 10:return Sc(r.type._context),xt(r),null;case 17:return qt(r.type)&&fl(),xt(r),null;case 19:if(We(Qe),p=r.memoizedState,p===null)return xt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)na(p,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(v=Sl(n),v!==null){for(r.flags|=128,na(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)p=o,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return He(Qe,Qe.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>zs&&(r.flags|=128,c=!0,na(p,!1),r.lanes=4194304)}else{if(!c)if(n=Sl(v),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),na(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ge)return xt(r),null}else 2*$e()-p.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,c=!0,na(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(o=p.last,o!==null?o.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,o=Qe.current,He(Qe,c?o&1|2:o&1),r):(xt(r),null);case 22:case 23:return uh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?sn&1073741824&&(xt(r),r.subtreeFlags&6&&(r.flags|=8192)):xt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function n_(n,r){switch(vc(r),r.tag){case 1:return qt(r.type)&&fl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return bs(),We(Ht),We(kt),xc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return kc(r),null;case 13:if(We(Qe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Os()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Qe),null;case 4:return bs(),null;case 10:return Sc(r.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var Ol=!1,Dt=!1,r_=typeof WeakSet=="function"?WeakSet:Set,re=null;function Us(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Je(n,r,c)}else o.current=null}function Xc(n,r,o){try{o()}catch(c){Je(n,r,c)}}var Ip=!1;function i_(n,r){if(uc=Or,n=ef(),tc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,T=-1,C=-1,U=0,q=0,K=n,H=null;t:for(;;){for(var ee;K!==o||d!==0&&K.nodeType!==3||(T=v+d),K!==p||c!==0&&K.nodeType!==3||(C=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(ee=K.firstChild)!==null;)H=K,K=ee;for(;;){if(K===n)break t;if(H===o&&++U===d&&(T=v),H===p&&++q===c&&(C=v),(ee=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=ee}o=T===-1||C===-1?null:{start:T,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(cc={focusedElem:n,selectionRange:o},Or=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,nt=ie.memoizedState,V=r.stateNode,k=V.getSnapshotBeforeUpdate(r.elementType===r.type?se:Rn(r.type,se),nt);V.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Je(r,r.return,G)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=Ip,Ip=!1,ie}function ra(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Xc(r,o,p)}d=d.next}while(d!==c)}}function Ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function Jc(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Sp(n){var r=n.alternate;r!==null&&(n.alternate=null,Sp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Un],delete r[Wo],delete r[pc],delete r[jv],delete r[zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ap(n){return n.tag===5||n.tag===3||n.tag===4}function Cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zc(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=hl));else if(c!==4&&(n=n.child,n!==null))for(Zc(n,r,o),n=n.sibling;n!==null;)Zc(n,r,o),n=n.sibling}function eh(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(eh(n,r,o),n=n.sibling;n!==null;)eh(n,r,o),n=n.sibling}var It=null,Pn=!1;function Br(n,r,o){for(o=o.child;o!==null;)Rp(n,r,o),o=o.sibling}function Rp(n,r,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ti,o)}catch{}switch(o.tag){case 5:Dt||Us(o,r);case 6:var c=It,d=Pn;It=null,Br(n,r,o),It=c,Pn=d,It!==null&&(Pn?(n=It,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):It.removeChild(o.stateNode));break;case 18:It!==null&&(Pn?(n=It,o=o.stateNode,n.nodeType===8?fc(n.parentNode,o):n.nodeType===1&&fc(n,o),In(n)):fc(It,o.stateNode));break;case 4:c=It,d=Pn,It=o.stateNode.containerInfo,Pn=!0,Br(n,r,o),It=c,Pn=d;break;case 0:case 11:case 14:case 15:if(!Dt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&(p&2||p&4)&&Xc(o,r,v),d=d.next}while(d!==c)}Br(n,r,o);break;case 1:if(!Dt&&(Us(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(T){Je(o,r,T)}Br(n,r,o);break;case 21:Br(n,r,o);break;case 22:o.mode&1?(Dt=(c=Dt)||o.memoizedState!==null,Br(n,r,o),Dt=c):Br(n,r,o);break;default:Br(n,r,o)}}function Pp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new r_),r.forEach(function(c){var d=f_.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function kn(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Pn=!1;break e;case 3:It=T.stateNode.containerInfo,Pn=!0;break e;case 4:It=T.stateNode.containerInfo,Pn=!0;break e}T=T.return}if(It===null)throw Error(t(160));Rp(p,v,d),It=null,Pn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(U){Je(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)kp(r,n),r=r.sibling}function kp(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(kn(r,n),Bn(n),c&4){try{ra(3,n,n.return),Ll(3,n)}catch(se){Je(n,n.return,se)}try{ra(5,n,n.return)}catch(se){Je(n,n.return,se)}}break;case 1:kn(r,n),Bn(n),c&512&&o!==null&&Us(o,o.return);break;case 5:if(kn(r,n),Bn(n),c&512&&o!==null&&Us(o,o.return),n.flags&32){var d=n.stateNode;try{Ar(d,"")}catch(se){Je(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=o!==null?o.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&po(d,p),Io(T,v);var U=Io(T,p);for(v=0;v<C.length;v+=2){var q=C[v],K=C[v+1];q==="style"?Eo(d,K):q==="dangerouslySetInnerHTML"?vo(d,K):q==="children"?Ar(d,K):ye(d,q,K,U)}switch(T){case"input":mo(d,p);break;case"textarea":ts(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?Zn(d,!!p.multiple,ee,!1):H!==!!p.multiple&&(p.defaultValue!=null?Zn(d,!!p.multiple,p.defaultValue,!0):Zn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Wo]=p}catch(se){Je(n,n.return,se)}}break;case 6:if(kn(r,n),Bn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){Je(n,n.return,se)}}break;case 3:if(kn(r,n),Bn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{In(r.containerInfo)}catch(se){Je(n,n.return,se)}break;case 4:kn(r,n),Bn(n);break;case 13:kn(r,n),Bn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(rh=$e())),c&4&&Pp(n);break;case 22:if(q=o!==null&&o.memoizedState!==null,n.mode&1?(Dt=(U=Dt)||q,kn(r,n),Dt=U):kn(r,n),Bn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!q&&n.mode&1)for(re=n,q=n.child;q!==null;){for(K=re=q;re!==null;){switch(H=re,ee=H.child,H.tag){case 0:case 11:case 14:case 15:ra(4,H,H.return);break;case 1:Us(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){c=H,o=H.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){Je(c,o,se)}}break;case 5:Us(H,H.return);break;case 22:if(H.memoizedState!==null){Dp(K);continue}}ee!==null?(ee.return=H,re=ee):Dp(K)}q=q.sibling}e:for(q=null,K=n;;){if(K.tag===5){if(q===null){q=K;try{d=K.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,C=K.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=_o("display",v))}catch(se){Je(n,n.return,se)}}}else if(K.tag===6){if(q===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(se){Je(n,n.return,se)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;q===K&&(q=null),K=K.return}q===K&&(q=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:kn(r,n),Bn(n),c&4&&Pp(n);break;case 21:break;default:kn(r,n),Bn(n)}}function Bn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Ap(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ar(d,""),c.flags&=-33);var p=Cp(n);eh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Cp(n);Zc(n,T,v);break;default:throw Error(t(161))}}catch(C){Je(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function s_(n,r,o){re=n,Np(n)}function Np(n,r,o){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Ol;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Dt;T=Ol;var U=Dt;if(Ol=v,(Dt=C)&&!U)for(re=d;re!==null;)v=re,C=v.child,v.tag===22&&v.memoizedState!==null?Op(d):C!==null?(C.return=v,re=C):Op(d);for(;p!==null;)re=p,Np(p),p=p.sibling;re=d,Ol=T,Dt=U}xp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,re=p):xp(n)}}function xp(n){for(;re!==null;){var r=re;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Dt||Ll(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Dt)if(o===null)c.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:Rn(r.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Df(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Df(r,v,o)}break;case 5:var T=r.stateNode;if(o===null&&r.flags&4){o=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var q=U.memoizedState;if(q!==null){var K=q.dehydrated;K!==null&&In(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dt||r.flags&512&&Jc(r)}catch(H){Je(r,r.return,H)}}if(r===n){re=null;break}if(o=r.sibling,o!==null){o.return=r.return,re=o;break}re=r.return}}function Dp(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var o=r.sibling;if(o!==null){o.return=r.return,re=o;break}re=r.return}}function Op(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Ll(4,r)}catch(C){Je(r,o,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Je(r,d,C)}}var p=r.return;try{Jc(r)}catch(C){Je(r,p,C)}break;case 5:var v=r.return;try{Jc(r)}catch(C){Je(r,v,C)}}}catch(C){Je(r,r.return,C)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var o_=Math.ceil,Vl=fe.ReactCurrentDispatcher,th=fe.ReactCurrentOwner,pn=fe.ReactCurrentBatchConfig,Oe=0,vt=null,ot=null,St=0,sn=0,js=br(0),dt=0,ia=null,Mi=0,Ml=0,nh=0,sa=null,Kt=null,rh=0,zs=1/0,pr=null,bl=!1,ih=null,$r=null,Fl=!1,Hr=null,Ul=0,oa=0,sh=null,jl=-1,zl=0;function jt(){return Oe&6?$e():jl!==-1?jl:jl=$e()}function qr(n){return n.mode&1?Oe&2&&St!==0?St&-St:$v.transition!==null?(zl===0&&(zl=Si()),zl):(n=Re,n!==0||(n=window.event,n=n===void 0?16:Lo(n.type)),n):1}function Nn(n,r,o,c){if(50<oa)throw oa=0,sh=null,Error(t(185));kr(n,o,c),(!(Oe&2)||n!==vt)&&(n===vt&&(!(Oe&2)&&(Ml|=o),dt===4&&Wr(n,St)),Gt(n,c),o===1&&Oe===0&&!(r.mode&1)&&(zs=$e()+500,ml&&Ur()))}function Gt(n,r){var o=n.callbackNode;nr(n,r);var c=Ii(n,n===vt?St:0);if(c===0)o!==null&&ko(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&ko(o),r===1)n.tag===0?Bv(Vp.bind(null,n)):Ef(Vp.bind(null,n)),Fv(function(){!(Oe&6)&&Ur()}),o=null;else{switch(xr(c)){case 1:o=wi;break;case 4:o=Cr;break;case 16:o=an;break;case 536870912:o=za;break;default:o=an}o=$p(o,Lp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Lp(n,r){if(jl=-1,zl=0,Oe&6)throw Error(t(327));var o=n.callbackNode;if(Bs()&&n.callbackNode!==o)return null;var c=Ii(n,n===vt?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=Bl(n,c);else{r=c;var d=Oe;Oe|=2;var p=bp();(vt!==n||St!==r)&&(pr=null,zs=$e()+500,Fi(n,r));do try{u_();break}catch(T){Mp(n,T)}while(!0);Ic(),Vl.current=p,Oe=d,ot!==null?r=0:(vt=null,St=0,r=dt)}if(r!==0){if(r===2&&(d=Zt(n),d!==0&&(c=d,r=oh(n,d))),r===1)throw o=ia,Fi(n,0),Wr(n,c),Gt(n,$e()),o;if(r===6)Wr(n,c);else{if(d=n.current.alternate,!(c&30)&&!a_(d)&&(r=Bl(n,c),r===2&&(p=Zt(n),p!==0&&(c=p,r=oh(n,p))),r===1))throw o=ia,Fi(n,0),Wr(n,c),Gt(n,$e()),o;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ui(n,Kt,pr);break;case 3:if(Wr(n,c),(c&130023424)===c&&(r=rh+500-$e(),10<r)){if(Ii(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=dc(Ui.bind(null,n,Kt,pr),r);break}Ui(n,Kt,pr);break;case 4:if(Wr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-bt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*o_(c/1960))-c,10<c){n.timeoutHandle=dc(Ui.bind(null,n,Kt,pr),c);break}Ui(n,Kt,pr);break;case 5:Ui(n,Kt,pr);break;default:throw Error(t(329))}}}return Gt(n,$e()),n.callbackNode===o?Lp.bind(null,n):null}function oh(n,r){var o=sa;return n.current.memoizedState.isDehydrated&&(Fi(n,r).flags|=256),n=Bl(n,r),n!==2&&(r=Kt,Kt=o,r!==null&&ah(r)),n}function ah(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function a_(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!An(p(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wr(n,r){for(r&=~nh,r&=~Ml,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-bt(r),c=1<<o;n[o]=-1,r&=~c}}function Vp(n){if(Oe&6)throw Error(t(327));Bs();var r=Ii(n,0);if(!(r&1))return Gt(n,$e()),null;var o=Bl(n,r);if(n.tag!==0&&o===2){var c=Zt(n);c!==0&&(r=c,o=oh(n,c))}if(o===1)throw o=ia,Fi(n,0),Wr(n,r),Gt(n,$e()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ui(n,Kt,pr),Gt(n,$e()),null}function lh(n,r){var o=Oe;Oe|=1;try{return n(r)}finally{Oe=o,Oe===0&&(zs=$e()+500,ml&&Ur())}}function bi(n){Hr!==null&&Hr.tag===0&&!(Oe&6)&&Bs();var r=Oe;Oe|=1;var o=pn.transition,c=Re;try{if(pn.transition=null,Re=1,n)return n()}finally{Re=c,pn.transition=o,Oe=r,!(Oe&6)&&Ur()}}function uh(){sn=js.current,We(js)}function Fi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,bv(o)),ot!==null)for(o=ot.return;o!==null;){var c=o;switch(vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&fl();break;case 3:bs(),We(Ht),We(kt),xc();break;case 5:kc(c);break;case 4:bs();break;case 13:We(Qe);break;case 19:We(Qe);break;case 10:Sc(c.type._context);break;case 22:case 23:uh()}o=o.return}if(vt=n,ot=n=Kr(n.current,null),St=sn=r,dt=0,ia=null,nh=Ml=Mi=0,Kt=sa=null,Oi!==null){for(r=0;r<Oi.length;r++)if(o=Oi[r],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}o.pending=c}Oi=null}return n}function Mp(n,r){do{var o=ot;try{if(Ic(),Al.current=kl,Cl){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Cl=!1}if(Vi=0,yt=ht=Ye=null,Jo=!1,Zo=0,th.current=null,o===null||o.return===null){dt=1,ia=r,ot=null;break}e:{var p=n,v=o.return,T=o,C=r;if(r=St,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,q=T,K=q.tag;if(!(q.mode&1)&&(K===0||K===11||K===15)){var H=q.alternate;H?(q.updateQueue=H.updateQueue,q.memoizedState=H.memoizedState,q.lanes=H.lanes):(q.updateQueue=null,q.memoizedState=null)}var ee=ap(v);if(ee!==null){ee.flags&=-257,lp(ee,v,T,p,r),ee.mode&1&&op(p,U,r),r=ee,C=U;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(C),r.updateQueue=se}else ie.add(C);break e}else{if(!(r&1)){op(p,U,r),ch();break e}C=Error(t(426))}}else if(Ge&&T.mode&1){var nt=ap(v);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),lp(nt,v,T,p,r),wc(Fs(C,T));break e}}p=C=Fs(C,T),dt!==4&&(dt=2),sa===null?sa=[p]:sa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var V=ip(p,C,r);xf(p,V);break e;case 1:T=C;var k=p.type,b=p.stateNode;if(!(p.flags&128)&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&($r===null||!$r.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=sp(p,T,r);xf(p,G);break e}}p=p.return}while(p!==null)}Up(o)}catch(oe){r=oe,ot===o&&o!==null&&(ot=o=o.return);continue}break}while(!0)}function bp(){var n=Vl.current;return Vl.current=kl,n===null?kl:n}function ch(){(dt===0||dt===3||dt===2)&&(dt=4),vt===null||!(Mi&268435455)&&!(Ml&268435455)||Wr(vt,St)}function Bl(n,r){var o=Oe;Oe|=2;var c=bp();(vt!==n||St!==r)&&(pr=null,Fi(n,r));do try{l_();break}catch(d){Mp(n,d)}while(!0);if(Ic(),Oe=o,Vl.current=c,ot!==null)throw Error(t(261));return vt=null,St=0,dt}function l_(){for(;ot!==null;)Fp(ot)}function u_(){for(;ot!==null&&!Ua();)Fp(ot)}function Fp(n){var r=Bp(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?Up(n):ot=r,th.current=null}function Up(n){var r=n;do{var o=r.alternate;if(n=r.return,r.flags&32768){if(o=n_(o,r),o!==null){o.flags&=32767,ot=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,ot=null;return}}else if(o=t_(o,r,sn),o!==null){ot=o;return}if(r=r.sibling,r!==null){ot=r;return}ot=r=n}while(r!==null);dt===0&&(dt=5)}function Ui(n,r,o){var c=Re,d=pn.transition;try{pn.transition=null,Re=1,c_(n,r,o,c)}finally{pn.transition=d,Re=c}return null}function c_(n,r,o,c){do Bs();while(Hr!==null);if(Oe&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(ze(n,p),n===vt&&(ot=vt=null,St=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Fl||(Fl=!0,$p(an,function(){return Bs(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=pn.transition,pn.transition=null;var v=Re;Re=1;var T=Oe;Oe|=4,th.current=null,i_(n,o),kp(o,n),Nv(cc),Or=!!uc,cc=uc=null,n.current=o,s_(o),Ku(),Oe=T,Re=v,pn.transition=p}else n.current=o;if(Fl&&(Fl=!1,Hr=n,Ul=d),p=n.pendingLanes,p===0&&($r=null),Ba(o.stateNode),Gt(n,$e()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)d=r[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(bl)throw bl=!1,n=ih,ih=null,n;return Ul&1&&n.tag!==0&&Bs(),p=n.pendingLanes,p&1?n===sh?oa++:(oa=0,sh=n):oa=0,Ur(),null}function Bs(){if(Hr!==null){var n=xr(Ul),r=pn.transition,o=Re;try{if(pn.transition=null,Re=16>n?16:n,Hr===null)var c=!1;else{if(n=Hr,Hr=null,Ul=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,re=n.current;re!==null;){var p=re,v=p.child;if(re.flags&16){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var U=T[C];for(re=U;re!==null;){var q=re;switch(q.tag){case 0:case 11:case 15:ra(8,q,p)}var K=q.child;if(K!==null)K.return=q,re=K;else for(;re!==null;){q=re;var H=q.sibling,ee=q.return;if(Sp(q),q===U){re=null;break}if(H!==null){H.return=ee,re=H;break}re=ee}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var nt=se.sibling;se.sibling=null,se=nt}while(se!==null)}}re=p}}if(p.subtreeFlags&2064&&v!==null)v.return=p,re=v;else e:for(;re!==null;){if(p=re,p.flags&2048)switch(p.tag){case 0:case 11:case 15:ra(9,p,p.return)}var V=p.sibling;if(V!==null){V.return=p.return,re=V;break e}re=p.return}}var k=n.current;for(re=k;re!==null;){v=re;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,re=b;else e:for(v=k;re!==null;){if(T=re,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:Ll(9,T)}}catch(oe){Je(T,T.return,oe)}if(T===v){re=null;break e}var G=T.sibling;if(G!==null){G.return=T.return,re=G;break e}re=T.return}}if(Oe=d,Ur(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ti,n)}catch{}c=!0}return c}finally{Re=o,pn.transition=r}}return!1}function jp(n,r,o){r=Fs(o,r),r=ip(n,r,1),n=zr(n,r,1),r=jt(),n!==null&&(kr(n,1,r),Gt(n,r))}function Je(n,r,o){if(n.tag===3)jp(n,n,o);else for(;r!==null;){if(r.tag===3){jp(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&($r===null||!$r.has(c))){n=Fs(o,n),n=sp(r,n,1),r=zr(r,n,1),n=jt(),r!==null&&(kr(r,1,n),Gt(r,n));break}}r=r.return}}function h_(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=jt(),n.pingedLanes|=n.suspendedLanes&o,vt===n&&(St&o)===o&&(dt===4||dt===3&&(St&130023424)===St&&500>$e()-rh?Fi(n,0):nh|=o),Gt(n,r)}function zp(n,r){r===0&&(n.mode&1?(r=hs,hs<<=1,!(hs&130023424)&&(hs=4194304)):r=1);var o=jt();n=hr(n,r),n!==null&&(kr(n,r,o),Gt(n,o))}function d_(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),zp(n,o)}function f_(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),zp(n,o)}var Bp;Bp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Wt=!0;else{if(!(n.lanes&o)&&!(r.flags&128))return Wt=!1,e_(n,r,o);Wt=!!(n.flags&131072)}else Wt=!1,Ge&&r.flags&1048576&&wf(r,yl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Dl(n,r),n=r.pendingProps;var d=Ns(r,kt.current);Ms(r,o),d=Lc(null,r,c,n,d,o);var p=Vc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(c)?(p=!0,pl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Rc(r),d.updater=Nl,r.stateNode=d,d._reactInternals=r,zc(r,c,n,o),r=qc(null,r,c,!0,p,o)):(r.tag=0,Ge&&p&&yc(r),Ut(null,r,d,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Dl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=m_(c),n=Rn(c,n),d){case 0:r=Hc(null,r,c,n,o);break e;case 1:r=pp(null,r,c,n,o);break e;case 11:r=up(null,r,c,n,o);break e;case 14:r=cp(null,r,c,Rn(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),Hc(n,r,c,d,o);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),pp(n,r,c,d,o);case 3:e:{if(mp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Nf(n,r),Il(r,c,null,o);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Fs(Error(t(423)),r),r=gp(n,r,c,o,d);break e}else if(c!==d){d=Fs(Error(t(424)),r),r=gp(n,r,c,o,d);break e}else for(rn=Mr(r.stateNode.containerInfo.firstChild),nn=r,Ge=!0,Cn=null,o=Pf(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Os(),c===d){r=fr(n,r,o);break e}Ut(n,r,c,o)}r=r.child}return r;case 5:return Of(r),n===null&&Ec(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,hc(c,d)?v=null:p!==null&&hc(c,p)&&(r.flags|=32),fp(n,r),Ut(n,r,v,o),r.child;case 6:return n===null&&Ec(r),null;case 13:return yp(n,r,o);case 4:return Pc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ls(r,null,c,o):Ut(n,r,c,o),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),up(n,r,c,d,o);case 7:return Ut(n,r,r.pendingProps,o),r.child;case 8:return Ut(n,r,r.pendingProps.children,o),r.child;case 12:return Ut(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,He(El,c._currentValue),c._currentValue=v,p!==null)if(An(p.value,v)){if(p.children===d.children&&!Ht.current){r=fr(n,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=dr(-1,o&-o),C.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var q=U.pending;q===null?C.next=C:(C.next=q.next,q.next=C),U.pending=C}}p.lanes|=o,C=p.alternate,C!==null&&(C.lanes|=o),Ac(p.return,o,r),T.lanes|=o;break}C=C.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=o,T=v.alternate,T!==null&&(T.lanes|=o),Ac(v,o,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Ut(n,r,d.children,o),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ms(r,o),d=dn(d),c=c(d),r.flags|=1,Ut(n,r,c,o),r.child;case 14:return c=r.type,d=Rn(c,r.pendingProps),d=Rn(c.type,d),cp(n,r,c,d,o);case 15:return hp(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),Dl(n,r),r.tag=1,qt(c)?(n=!0,pl(r)):n=!1,Ms(r,o),np(r,c,d),zc(r,c,d,o),qc(null,r,c,!0,n,o);case 19:return _p(n,r,o);case 22:return dp(n,r,o)}throw Error(t(156,r.tag))};function $p(n,r){return us(n,r)}function p_(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,o,c){return new p_(n,r,o,c)}function hh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function m_(n){if(typeof n=="function")return hh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Rt)return 14}return 2}function Kr(n,r){var o=n.alternate;return o===null?(o=mn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function $l(n,r,o,c,d,p){var v=2;if(c=n,typeof n=="function")hh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case R:return ji(o.children,d,p,r);case I:v=8,d|=8;break;case A:return n=mn(12,o,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=mn(13,o,r,d),n.elementType=S,n.lanes=p,n;case et:return n=mn(19,o,r,d),n.elementType=et,n.lanes=p,n;case Ue:return Hl(o,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case x:v=9;break e;case O:v=11;break e;case Rt:v=14;break e;case Pt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(v,o,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function ji(n,r,o,c){return n=mn(7,n,c,r),n.lanes=o,n}function Hl(n,r,o,c){return n=mn(22,n,c,r),n.elementType=Ue,n.lanes=o,n.stateNode={isHidden:!1},n}function dh(n,r,o){return n=mn(6,n,null,r),n.lanes=o,n}function fh(n,r,o){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function g_(n,r,o,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pr(0),this.expirationTimes=Pr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ph(n,r,o,c,d,p,v,T,C){return n=new g_(n,r,o,T,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(p),n}function y_(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function Hp(n){if(!n)return Fr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(qt(o))return vf(n,o,r)}return r}function qp(n,r,o,c,d,p,v,T,C){return n=ph(o,c,!0,n,d,p,v,T,C),n.context=Hp(null),o=n.current,c=jt(),d=qr(o),p=dr(c,d),p.callback=r??null,zr(o,p,d),n.current.lanes=d,kr(n,d,c),Gt(n,c),n}function ql(n,r,o,c){var d=r.current,p=jt(),v=qr(d);return o=Hp(o),r.context===null?r.context=o:r.pendingContext=o,r=dr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=zr(d,r,v),n!==null&&(Nn(n,d,v,p),Tl(n,d,v)),v}function Wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function mh(n,r){Wp(n,r),(n=n.alternate)&&Wp(n,r)}function v_(){return null}var Kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function gh(n){this._internalRoot=n}Kl.prototype.render=gh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ql(n,r,null,null)},Kl.prototype.unmount=gh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;bi(function(){ql(null,n,null,null)}),r[ar]=null}};function Kl(n){this._internalRoot=n}Kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ka();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Vn.length&&r!==0&&r<Vn[o].priority;o++);Vn.splice(o,0,n),o===0&&Ya(n)}};function yh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function __(n,r,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=Wl(v);p.call(U)}}var v=qp(r,c,n,0,null,!1,!1,"",Gp);return n._reactRootContainer=v,n[ar]=v.current,Ho(n.nodeType===8?n.parentNode:n),bi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=Wl(C);T.call(U)}}var C=ph(n,0,!1,null,null,!1,!1,"",Gp);return n._reactRootContainer=C,n[ar]=C.current,Ho(n.nodeType===8?n.parentNode:n),bi(function(){ql(r,C,o,c)}),C}function Ql(n,r,o,c,d){var p=o._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var C=Wl(v);T.call(C)}}ql(r,v,n,d)}else v=__(o,r,n,d,c);return Wl(v)}qa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Rr(r.pendingLanes);o!==0&&(Nr(r,o|1),Gt(r,$e()),!(Oe&6)&&(zs=$e()+500,Ur()))}break;case 13:bi(function(){var c=hr(n,1);if(c!==null){var d=jt();Nn(c,n,1,d)}}),mh(n,1)}},ds=function(n){if(n.tag===13){var r=hr(n,134217728);if(r!==null){var o=jt();Nn(r,n,134217728,o)}mh(n,134217728)}},Wa=function(n){if(n.tag===13){var r=qr(n),o=hr(n,r);if(o!==null){var c=jt();Nn(o,n,r,c)}mh(n,r)}},Ka=function(){return Re},Ga=function(n,r){var o=Re;try{return Re=n,r()}finally{Re=o}},rs=function(n,r,o){switch(r){case"input":if(mo(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var d=dl(c);if(!d)throw Error(t(90));Xi(c),mo(c,d)}}}break;case"textarea":ts(n,o);break;case"select":r=o.value,r!=null&&Zn(n,!!o.multiple,r,!1)}},yi=lh,Ao=bi;var E_={usingClientEntryPoint:!1,Events:[Ko,Ps,dl,On,So,lh]},aa={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w_={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Po(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||v_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Ti=Yl.inject(w_),Jt=Yl}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_,Qt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(r))throw Error(t(200));return y_(n,r,null,o)},Qt.createRoot=function(n,r){if(!yh(n))throw Error(t(299));var o=!1,c="",d=Kp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=ph(n,1,!1,null,null,o,!1,c,d),n[ar]=r.current,Ho(n.nodeType===8?n.parentNode:n),new gh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Po(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return bi(n)},Qt.hydrate=function(n,r,o){if(!Gl(r))throw Error(t(200));return Ql(null,n,r,!0,o)},Qt.hydrateRoot=function(n,r,o){if(!yh(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",v=Kp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),r=qp(r,null,n,1,o??null,d,!1,p,v),n[ar]=r.current,Ho(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new Kl(r)},Qt.render=function(n,r,o){if(!Gl(r))throw Error(t(200));return Ql(null,n,r,!1,o)},Qt.unmountComponentAtNode=function(n){if(!Gl(n))throw Error(t(40));return n._reactRootContainer?(bi(function(){Ql(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},Qt.unstable_batchedUpdates=lh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!Gl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ql(n,r,o,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var nm;function N_(){if(nm)return Eh.exports;nm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Eh.exports=k_(),Eh.exports}var rm;function x_(){if(rm)return Xl;rm=1;var i=N_();return Xl.createRoot=i.createRoot,Xl.hydrateRoot=i.hydrateRoot,Xl}var D_=x_(),im={};/**
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
 */const Tg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},O_=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=i[t++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=i[t++],h=i[t++],m=i[t++],y=((a&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const u=i[a],h=a+1<i.length,m=h?i[a+1]:0,y=a+2<i.length,_=y?i[a+2]:0,w=u>>2,N=(u&3)<<4|m>>4;let M=(m&15)<<2|_>>6,z=_&63;y||(z=64,h||(M=64)),s.push(t[w],t[N],t[M],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Tg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):O_(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const u=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const _=a<i.length?t[i.charAt(a)]:64;++a;const N=a<i.length?t[i.charAt(a)]:64;if(++a,u==null||m==null||_==null||N==null)throw new L_;const M=u<<2|m>>4;if(s.push(M),_!==64){const z=m<<4&240|_>>2;if(s.push(z),N!==64){const Q=_<<6&192|N;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class L_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V_=function(i){const e=Tg(i);return Ig.encodeByteArray(e,!0)},du=function(i){return V_(i).replace(/\./g,"")},Sg=function(i){try{return Ig.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function M_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const b_=()=>M_().__FIREBASE_DEFAULTS__,F_=()=>{if(typeof process>"u"||typeof im>"u")return;const i=im.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},U_=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Sg(i[1]);return e&&JSON.parse(e)},ku=()=>{try{return b_()||F_()||U_()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ag=i=>{var e,t;return(t=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},j_=i=>{const e=Ag(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Cg=()=>{var i;return(i=ku())===null||i===void 0?void 0:i.config},Rg=i=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */function B_(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[du(JSON.stringify(t)),du(JSON.stringify(h)),""].join(".")}/**
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function H_(){var i;const e=(i=ku())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function q_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function K_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G_(){const i=Mt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Q_(){return!H_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y_(){try{return typeof indexedDB=="object"}catch{return!1}}function X_(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var u;e(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const J_="FirebaseError";class Ir extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=J_,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,u=this.errors[e],h=u?Z_(u,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Ir(a,m,s)}}function Z_(i,e){return i.replace(e0,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;function t0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function fu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const u=i[a],h=e[a];if(sm(u)&&sm(h)){if(!fu(u,h))return!1}else if(u!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function sm(i){return i!==null&&typeof i=="object"}/**
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
 */function Pa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ua(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,u]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(u)}}),e}function ca(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function n0(i,e){const t=new r0(i,e);return t.subscribe.bind(t)}class r0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");i0(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Ih),a.error===void 0&&(a.error=Ih),a.complete===void 0&&(a.complete=Ih);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Ih(){}/**
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
 */function Qn(i){return i&&i._delegate?i._delegate:i}class Wi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class s0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new z_;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(a)return null;throw u}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a0(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(a,u);const h=this.instances.get(a);return h&&e(h,a),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o0(i){return i===zi?void 0:i}function a0(i){return i.instantiationMode==="EAGER"}/**
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
 */class l0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const u0={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},c0=Ce.INFO,h0={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},d0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=h0[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ud{constructor(e){this.name=e,this._logLevel=c0,this._logHandler=d0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const f0=(i,e)=>e.some(t=>i instanceof t);let om,am;function p0(){return om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m0(){return am||(am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pg=new WeakMap,bh=new WeakMap,kg=new WeakMap,Sh=new WeakMap,cd=new WeakMap;function g0(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ri(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Pg.set(t,i)}).catch(()=>{}),cd.set(e,i),e}function y0(i){if(bh.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});bh.set(i,e)}let Fh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return bh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||kg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ri(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function v0(i){Fh=i(Fh)}function _0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Ah(this),e,...t);return kg.set(s,e.sort?e.sort():[e]),ri(s)}:m0().includes(i)?function(...e){return i.apply(Ah(this),e),ri(Pg.get(this))}:function(...e){return ri(i.apply(Ah(this),e))}}function E0(i){return typeof i=="function"?_0(i):(i instanceof IDBTransaction&&y0(i),f0(i,p0())?new Proxy(i,Fh):i)}function ri(i){if(i instanceof IDBRequest)return g0(i);if(Sh.has(i))return Sh.get(i);const e=E0(i);return e!==i&&(Sh.set(i,e),cd.set(e,i)),e}const Ah=i=>cd.get(i);function w0(i,e,{blocked:t,upgrade:s,blocking:a,terminated:u}={}){const h=indexedDB.open(i,e),m=ri(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ri(h.result),y.oldVersion,y.newVersion,ri(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),a&&y.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const T0=["get","getKey","getAll","getAllKeys","count"],I0=["put","add","delete","clear"],Ch=new Map;function lm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ch.get(e))return Ch.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=I0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||T0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),a&&y.done]))[0]};return Ch.set(e,u),u}v0(i=>({...i,get:(e,t,s)=>lm(e,t)||i.get(e,t,s),has:(e,t)=>!!lm(e,t)||i.has(e,t)}));/**
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
 */class S0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(A0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function A0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uh="@firebase/app",um="0.10.17";/**
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
 */const Er=new ud("@firebase/app"),C0="@firebase/app-compat",R0="@firebase/analytics-compat",P0="@firebase/analytics",k0="@firebase/app-check-compat",N0="@firebase/app-check",x0="@firebase/auth",D0="@firebase/auth-compat",O0="@firebase/database",L0="@firebase/data-connect",V0="@firebase/database-compat",M0="@firebase/functions",b0="@firebase/functions-compat",F0="@firebase/installations",U0="@firebase/installations-compat",j0="@firebase/messaging",z0="@firebase/messaging-compat",B0="@firebase/performance",$0="@firebase/performance-compat",H0="@firebase/remote-config",q0="@firebase/remote-config-compat",W0="@firebase/storage",K0="@firebase/storage-compat",G0="@firebase/firestore",Q0="@firebase/vertexai",Y0="@firebase/firestore-compat",X0="firebase",J0="11.1.0";/**
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
 */const jh="[DEFAULT]",Z0={[Uh]:"fire-core",[C0]:"fire-core-compat",[P0]:"fire-analytics",[R0]:"fire-analytics-compat",[N0]:"fire-app-check",[k0]:"fire-app-check-compat",[x0]:"fire-auth",[D0]:"fire-auth-compat",[O0]:"fire-rtdb",[L0]:"fire-data-connect",[V0]:"fire-rtdb-compat",[M0]:"fire-fn",[b0]:"fire-fn-compat",[F0]:"fire-iid",[U0]:"fire-iid-compat",[j0]:"fire-fcm",[z0]:"fire-fcm-compat",[B0]:"fire-perf",[$0]:"fire-perf-compat",[H0]:"fire-rc",[q0]:"fire-rc-compat",[W0]:"fire-gcs",[K0]:"fire-gcs-compat",[G0]:"fire-fst",[Y0]:"fire-fst-compat",[Q0]:"fire-vertex","fire-js":"fire-js",[X0]:"fire-js-all"};/**
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
 */const pu=new Map,eE=new Map,zh=new Map;function cm(i,e){try{i.container.addComponent(e)}catch(t){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Zs(i){const e=i.name;if(zh.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,i);for(const t of pu.values())cm(t,i);for(const t of eE.values())cm(t,i);return!0}function hd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function mr(i){return i.settings!==void 0}/**
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
 */const tE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new Ra("app","Firebase",tE);/**
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
 */class nE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const ao=J0;function Ng(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jh,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw ii.create("bad-app-name",{appName:String(a)});if(t||(t=Cg()),!t)throw ii.create("no-options");const u=pu.get(a);if(u){if(fu(t,u.options)&&fu(s,u.config))return u;throw ii.create("duplicate-app",{appName:a})}const h=new l0(a);for(const y of zh.values())h.addComponent(y);const m=new nE(t,s,h);return pu.set(a,m),m}function xg(i=jh){const e=pu.get(i);if(!e&&i===jh&&Cg())return Ng();if(!e)throw ii.create("no-app",{appName:i});return e}function si(i,e,t){var s;let a=(s=Z0[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const u=a.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${a}" with version "${e}":`];u&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(m.join(" "));return}Zs(new Wi(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const rE="firebase-heartbeat-database",iE=1,_a="firebase-heartbeat-store";let Rh=null;function Dg(){return Rh||(Rh=w0(rE,iE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(_a)}catch(t){console.warn(t)}}}}).catch(i=>{throw ii.create("idb-open",{originalErrorMessage:i.message})})),Rh}async function sE(i){try{const t=(await Dg()).transaction(_a),s=await t.objectStore(_a).get(Og(i));return await t.done,s}catch(e){if(e instanceof Ir)Er.warn(e.message);else{const t=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(t.message)}}}async function hm(i,e){try{const s=(await Dg()).transaction(_a,"readwrite");await s.objectStore(_a).put(e,Og(i)),await s.done}catch(t){if(t instanceof Ir)Er.warn(t.message);else{const s=ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Er.warn(s.message)}}}function Og(i){return`${i.name}!${i.options.appId}`}/**
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
 */const oE=1024,aE=30*24*60*60*1e3;class lE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=dm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=aE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Er.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dm(),{heartbeatsToSend:s,unsentEntries:a}=uE(this._heartbeatsCache.heartbeats),u=du(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Er.warn(t),""}}}function dm(){return new Date().toISOString().substring(0,10)}function uE(i,e=oE){const t=[];let s=i.slice();for(const a of i){const u=t.find(h=>h.agent===a.agent);if(u){if(u.dates.push(a.date),fm(t)>e){u.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),fm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class cE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y_()?X_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function fm(i){return du(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function hE(i){Zs(new Wi("platform-logger",e=>new S0(e),"PRIVATE")),Zs(new Wi("heartbeat",e=>new lE(e),"PRIVATE")),si(Uh,um,i),si(Uh,um,"esm2017"),si("fire-js","")}hE("");var dE="firebase",fE="11.1.0";/**
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
 */si(dE,fE,"app");function dd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function Lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=Lg,Vg=new Ra("auth","Firebase",Lg());/**
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
 */const mu=new ud("@firebase/auth");function mE(i,...e){mu.logLevel<=Ce.WARN&&mu.warn(`Auth (${ao}): ${i}`,...e)}function iu(i,...e){mu.logLevel<=Ce.ERROR&&mu.error(`Auth (${ao}): ${i}`,...e)}/**
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
 */function xn(i,...e){throw fd(i,...e)}function Hn(i,...e){return fd(i,...e)}function Mg(i,e,t){const s=Object.assign(Object.assign({},pE()),{[e]:t});return new Ra("auth","Firebase",s).create(e,{appName:i.name})}function oi(i){return Mg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Vg.create(i,...e)}function pe(i,e,...t){if(!i)throw fd(e,...t)}function gr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw iu(e),new Error(e)}function wr(i,e){i||gr(e)}/**
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
 */function Bh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function gE(){return pm()==="http:"||pm()==="https:"}function pm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function yE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gE()||W_()||"connection"in navigator)?navigator.onLine:!0}function vE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class ka{constructor(e,t){this.shortDelay=e,this.longDelay=t,wr(t>e,"Short delay should be less than long delay!"),this.isMobile=$_()||K_()}get(){return yE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pd(i,e){wr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bg{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _E={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EE=new ka(3e4,6e4);function Qi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function di(i,e,t,s,a={}){return Fg(i,a,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Pa(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:y},u);return q_()||(_.referrerPolicy="no-referrer"),bg.fetch()(Ug(i,i.config.apiHost,t,m),_)})}async function Fg(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},_E),e);try{const a=new TE(i),u=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Jl(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Jl(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Jl(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Mg(i,w,_);xn(i,w)}}catch(a){if(a instanceof Ir)throw a;xn(i,"network-request-failed",{message:String(a)})}}async function Nu(i,e,t,s,a={}){const u=await di(i,e,t,s,a);return"mfaPendingCredential"in u&&xn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Ug(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?pd(i.config,a):`${i.config.apiScheme}://${a}`}function wE(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Hn(this.auth,"network-request-failed")),EE.get())})}}function Jl(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Hn(i,e,s);return a.customData._tokenResponse=t,a}function mm(i){return i!==void 0&&i.enterprise!==void 0}class IE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SE(i,e){return di(i,"GET","/v2/recaptchaConfig",Qi(i,e))}/**
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
 */async function AE(i,e){return di(i,"POST","/v1/accounts:delete",e)}async function jg(i,e){return di(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function pa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CE(i,e=!1){const t=Qn(i),s=await t.getIdToken(e),a=md(s);pe(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:a,token:s,authTime:pa(Ph(a.auth_time)),issuedAtTime:pa(Ph(a.iat)),expirationTime:pa(Ph(a.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Ph(i){return Number(i)*1e3}function md(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return iu("JWT malformed, contained fewer than 3 sections"),null;try{const a=Sg(t);return a?JSON.parse(a):(iu("Failed to decode base64 JWT payload"),null)}catch(a){return iu("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function gm(i){const e=md(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ea(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ir&&RE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function RE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class PE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $h{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gu(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Ea(i,jg(t,{idToken:s}));pe(a==null?void 0:a.users.length,t,"internal-error");const u=a.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?zg(u.providerUserInfo):[],m=NE(i.providerData,h),y=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?_:!1,N={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new $h(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,N)}async function kE(i){const e=Qn(i);await gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NE(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function zg(i){return i.map(e=>{var{providerId:t}=e,s=dd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function xE(i,e){const t=await Fg(i,{},async()=>{const s=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=i.config,h=Ug(i,a,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",bg.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function DE(i,e){return di(i,"POST","/v2/accounts:revokeToken",Qi(i,e))}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=gm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:u}=await xE(e,t);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:u}=t,h=new Gs;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(pe(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
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
 */function Qr(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,u=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new $h(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ea(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CE(this,e)}reload(){return kE(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(oi(this.auth));const e=await this.getIdToken();return await Ea(this,AE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,u,h,m,y,_,w;const N=(s=t.displayName)!==null&&s!==void 0?s:void 0,M=(a=t.email)!==null&&a!==void 0?a:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,we=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ge=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ye,emailVerified:fe,isAnonymous:je,providerData:Ee,stsTokenManager:R}=t;pe(ye&&R,e,"internal-error");const I=Gs.fromJSON(this.name,R);pe(typeof ye=="string",e,"internal-error"),Qr(N,e.name),Qr(M,e.name),pe(typeof fe=="boolean",e,"internal-error"),pe(typeof je=="boolean",e,"internal-error"),Qr(z,e.name),Qr(Q,e.name),Qr(Y,e.name),Qr(W,e.name),Qr(we,e.name),Qr(ge,e.name);const A=new yr({uid:ye,auth:e,email:M,emailVerified:fe,displayName:N,isAnonymous:je,photoURL:Q,phoneNumber:z,tenantId:Y,stsTokenManager:I,createdAt:we,lastLoginAt:ge});return Ee&&Array.isArray(Ee)&&(A.providerData=Ee.map(P=>Object.assign({},P))),W&&(A._redirectEventId=W),A}static async _fromIdTokenResponse(e,t,s=!1){const a=new Gs;a.updateFromServerResponse(t);const u=new yr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];pe(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?zg(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),m=new Gs;m.updateFromIdToken(s);const y=new yr({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new $h(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const ym=new Map;function vr(i){wr(i instanceof Function,"Expected a class definition");let e=ym.get(i);return e?(wr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ym.set(i,e),e)}/**
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
 */class Bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bg.type="NONE";const vm=Bg;/**
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
 */function su(i,e,t){return`firebase:${i}:${e}:${t}`}class Qs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=su(this.userKey,a.apiKey,u),this.fullPersistenceKey=su("persistence",a.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Qs(vr(vm),e,s);const a=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=a[0]||vr(vm);const h=su(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){const N=yr._fromJSON(e,w);_!==u&&(m=N),u=_;break}}catch{}const y=a.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Qs(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new Qs(u,e,s))}}/**
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
 */function _m(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gg(e))return"Blackberry";if(Qg(e))return"Webos";if(Hg(e))return"Safari";if((e.includes("chrome/")||qg(e))&&!e.includes("edge/"))return"Chrome";if(Kg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $g(i=Mt()){return/firefox\//i.test(i)}function Hg(i=Mt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qg(i=Mt()){return/crios\//i.test(i)}function Wg(i=Mt()){return/iemobile/i.test(i)}function Kg(i=Mt()){return/android/i.test(i)}function Gg(i=Mt()){return/blackberry/i.test(i)}function Qg(i=Mt()){return/webos/i.test(i)}function gd(i=Mt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function OE(i=Mt()){var e;return gd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LE(){return G_()&&document.documentMode===10}function Yg(i=Mt()){return gd(i)||Kg(i)||Qg(i)||Gg(i)||/windows phone/i.test(i)||Wg(i)}/**
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
 */function Xg(i,e=[]){let t;switch(i){case"Browser":t=_m(Mt());break;case"Worker":t=`${_m(Mt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ao}/${s}`}/**
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
 */class VE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ME(i,e={}){return di(i,"GET","/v2/passwordPolicy",Qi(i,e))}/**
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
 */const bE=6;class FE{constructor(e){var t,s,a,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:bE,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class UE{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new VE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vr(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jg(this,{idToken:e}),s=await yr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(a=y.user,u=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(oi(this));const t=e?Qn(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(oi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(oi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ME(this),t=new FE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await DE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vr(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function lo(i){return Qn(i)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=n0(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jE(i){xu=i}function Jg(i){return xu.loadJS(i)}function zE(){return xu.recaptchaEnterpriseScript}function BE(){return xu.gapiScript}function $E(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class HE{constructor(){this.enterprise=new qE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const WE="recaptcha-enterprise",Zg="NO_RECAPTCHA";class KE{constructor(e){this.type=WE,this.auth=lo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{SE(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new IE(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(y=>{m(y)})})}function a(u,h,m){const y=window.grecaptcha;mm(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Zg)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HE().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&mm(window.grecaptcha))a(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=zE();y.length!==0&&(y+=m),Jg(y).then(()=>{a(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function wm(i,e,t,s=!1,a=!1){const u=new KE(i);let h;if(a)h=Zg;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Tm(i,e,t,s,a){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await wm(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await wm(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function GE(i,e){const t=hd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),u=t.getOptions();if(fu(u,e??{}))return a;xn(a,"already-initialized")}return t.initialize({options:e})}function QE(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(vr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function YE(i,e,t){const s=lo(i);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,u=ey(e),{host:h,port:m}=XE(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})}),JE()}function ey(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function XE(i){const e=ey(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const u=a[1];return{host:u,port:Im(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Im(h)}}}function Im(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function JE(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gr("not implemented")}_getIdTokenResponse(e){return gr("not implemented")}_linkToIdToken(e,t){return gr("not implemented")}_getReauthenticationResolver(e){return gr("not implemented")}}async function ZE(i,e){return di(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function e1(i,e){return Nu(i,"POST","/v1/accounts:signInWithPassword",Qi(i,e))}/**
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
 */async function t1(i,e){return Nu(i,"POST","/v1/accounts:signInWithEmailLink",Qi(i,e))}async function n1(i,e){return Nu(i,"POST","/v1/accounts:signInWithEmailLink",Qi(i,e))}/**
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
 */class wa extends yd{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new wa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new wa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tm(e,t,"signInWithPassword",e1);case"emailLink":return t1(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tm(e,s,"signUpPassword",ZE);case"emailLink":return n1(e,{idToken:t,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(i,e){return Nu(i,"POST","/v1/accounts:signInWithIdp",Qi(i,e))}/**
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
 */const r1="http://localhost";class Ki extends yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,u=dd(t,["providerId","signInMethod"]);if(!s||!a)return null;const h=new Ki(s,a);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ys(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ys(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ys(e,t)}buildRequest(){const e={requestUri:r1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pa(t)}return e}}/**
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
 */function i1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s1(i){const e=ua(ca(i)).link,t=e?ua(ca(e)).deep_link_id:null,s=ua(ca(i)).deep_link_id;return(s?ua(ca(s)).link:null)||s||t||e||i}class vd{constructor(e){var t,s,a,u,h,m;const y=ua(ca(e)),_=(t=y.apiKey)!==null&&t!==void 0?t:null,w=(s=y.oobCode)!==null&&s!==void 0?s:null,N=i1((a=y.mode)!==null&&a!==void 0?a:null);pe(_&&w&&N,"argument-error"),this.apiKey=_,this.operation=N,this.code=w,this.continueUrl=(u=y.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=y.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=y.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=s1(e);try{return new vd(t)}catch{return null}}}/**
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
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,t){return wa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=vd.parseLink(t);return pe(s,"argument-error"),wa._fromEmailAndCode(e,s.code,s.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ty{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Na extends ty{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yr extends Na{constructor(){super("facebook.com")}static credential(e){return Ki._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
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
 */class Xr extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ki._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Xr.credential(t,s)}catch{return null}}}Xr.GOOGLE_SIGN_IN_METHOD="google.com";Xr.PROVIDER_ID="google.com";/**
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
 */class Jr extends Na{constructor(){super("github.com")}static credential(e){return Ki._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
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
 */class Zr extends Na{constructor(){super("twitter.com")}static credential(e,t){return Ki._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Zr.credential(t,s)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
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
 */class eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const u=await yr._fromIdTokenResponse(e,s,a),h=Sm(s);return new eo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=Sm(s);return new eo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function Sm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class yu extends Ir{constructor(e,t,s,a){var u;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,yu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new yu(e,t,s,a)}}function ny(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?yu._fromErrorAndOperation(i,u,e,s):u})}async function o1(i,e,t=!1){const s=await Ea(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return eo._forOperation(i,"link",s)}/**
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
 */async function a1(i,e,t=!1){const{auth:s}=i;if(mr(s.app))return Promise.reject(oi(s));const a="reauthenticate";try{const u=await Ea(i,ny(s,a,e,i),t);pe(u.idToken,s,"internal-error");const h=md(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),eo._forOperation(i,a,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&xn(s,"user-mismatch"),u}}/**
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
 */async function ry(i,e,t=!1){if(mr(i.app))return Promise.reject(oi(i));const s="signIn",a=await ny(i,s,e),u=await eo._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(u.user),u}async function l1(i,e){return ry(lo(i),e)}/**
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
 */async function u1(i){const e=lo(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function c1(i,e,t){return mr(i.app)?Promise.reject(oi(i)):l1(Qn(i),uo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&u1(i),s})}function h1(i,e,t,s){return Qn(i).onIdTokenChanged(e,t,s)}function d1(i,e,t){return Qn(i).beforeAuthStateChanged(e,t)}function f1(i,e,t,s){return Qn(i).onAuthStateChanged(e,t,s)}function p1(i){return Qn(i).signOut()}const vu="__sak";/**
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
 */class iy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m1=1e3,g1=10;class sy extends iy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);LE()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,g1):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},m1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sy.type="LOCAL";const y1=sy;/**
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
 */class oy extends iy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oy.type="SESSION";const ay=oy;/**
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
 */function v1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Du(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:u}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await v1(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Du.receivers=[];/**
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
 */function _d(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class _1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=_d("",20);a.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(N){const M=N;if(M.data.eventId===_)switch(M.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(M.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function qn(){return window}function E1(i){qn().location.href=i}/**
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
 */function ly(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function w1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function I1(){return ly()?self:null}/**
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
 */const uy="firebaseLocalStorageDb",S1=1,_u="firebaseLocalStorage",cy="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ou(i,e){return i.transaction([_u],e?"readwrite":"readonly").objectStore(_u)}function A1(){const i=indexedDB.deleteDatabase(uy);return new xa(i).toPromise()}function Hh(){const i=indexedDB.open(uy,S1);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(_u,{keyPath:cy})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(_u)?e(s):(s.close(),await A1(),e(await Hh()))})})}async function Am(i,e,t){const s=Ou(i,!0).put({[cy]:e,value:t});return new xa(s).toPromise()}async function C1(i,e){const t=Ou(i,!1).get(e),s=await new xa(t).toPromise();return s===void 0?null:s.value}function Cm(i,e){const t=Ou(i,!0).delete(e);return new xa(t).toPromise()}const R1=800,P1=3;class hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>P1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ly()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Du._getInstance(I1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await w1(),!this.activeServiceWorker)return;this.sender=new _1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hh();return await Am(e,vu,"1"),await Cm(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Am(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>C1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=Ou(a,!1).getAll();return new xa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hy.type="LOCAL";const k1=hy;new ka(3e4,6e4);/**
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
 */function N1(i,e){return e?vr(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ed extends yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ys(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x1(i){return ry(i.auth,new Ed(i),i.bypassAuthState)}function D1(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),a1(t,new Ed(i),i.bypassAuthState)}async function O1(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),o1(t,new Ed(i),i.bypassAuthState)}/**
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
 */class dy{constructor(e,t,s,a,u=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x1;case"linkViaPopup":case"linkViaRedirect":return O1;case"reauthViaPopup":case"reauthViaRedirect":return D1;default:xn(this.auth,"internal-error")}}resolve(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L1=new ka(2e3,1e4);class Ks extends dy{constructor(e,t,s,a,u){super(e,t,a,u),this.provider=s,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){wr(this.filter.length===1,"Popup operations only handle one event");const e=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L1.get())};e()}}Ks.currentPopupAction=null;/**
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
 */const V1="pendingRedirect",ou=new Map;class M1 extends dy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ou.get(this.auth._key());if(!e){try{const s=await b1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ou.set(this.auth._key(),e)}return this.bypassAuthState||ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b1(i,e){const t=j1(e),s=U1(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function F1(i,e){ou.set(i._key(),e)}function U1(i){return vr(i._redirectPersistence)}function j1(i){return su(V1,i.config.apiKey,i.name)}async function z1(i,e,t=!1){if(mr(i.app))return Promise.reject(oi(i));const s=lo(i),a=N1(s,e),h=await new M1(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const B1=10*60*1e3;class $1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!fy(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Hn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rm(e))}saveEventToCache(e){this.cachedEventUids.add(Rm(e)),this.lastProcessedEventTime=Date.now()}}function Rm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function fy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fy(i);default:return!1}}/**
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
 */async function q1(i,e={}){return di(i,"GET","/v1/projects",e)}/**
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
 */const W1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K1=/^https?/;async function G1(i){if(i.config.emulator)return;const{authorizedDomains:e}=await q1(i);for(const t of e)try{if(Q1(t))return}catch{}xn(i,"unauthorized-domain")}function Q1(i){const e=Bh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!K1.test(t))return!1;if(W1.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const Y1=new ka(3e4,6e4);function Pm(){const i=qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function X1(i){return new Promise((e,t)=>{var s,a,u;function h(){Pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pm(),t(Hn(i,"network-request-failed"))},timeout:Y1.get()})}if(!((a=(s=qn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((u=qn().gapi)===null||u===void 0)&&u.load)h();else{const m=$E("iframefcb");return qn()[m]=()=>{gapi.load?h():t(Hn(i,"network-request-failed"))},Jg(`${BE()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw au=null,e})}let au=null;function J1(i){return au=au||X1(i),au}/**
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
 */const Z1=new ka(5e3,15e3),ew="__/auth/iframe",tw="emulator/auth/iframe",nw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iw(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?pd(e,tw):`https://${i.config.authDomain}/${ew}`,s={apiKey:e.apiKey,appName:i.name,v:ao},a=rw.get(i.config.apiHost);a&&(s.eid=a);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Pa(s).slice(1)}`}async function sw(i){const e=await J1(i),t=qn().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:iw(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nw,dontclear:!0},s=>new Promise(async(a,u)=>{await s.restyle({setHideOnLeave:!1});const h=Hn(i,"network-request-failed"),m=qn().setTimeout(()=>{u(h)},Z1.get());function y(){qn().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aw=500,lw=600,uw="_blank",cw="http://localhost";class km{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hw(i,e,t,s=aw,a=lw){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},ow),{width:s.toString(),height:a.toString(),top:u,left:h}),_=Mt().toLowerCase();t&&(m=qg(_)?uw:t),$g(_)&&(e=e||cw,y.scrollbars="yes");const w=Object.entries(y).reduce((M,[z,Q])=>`${M}${z}=${Q},`,"");if(OE(_)&&m!=="_self")return dw(e||"",m),new km(null);const N=window.open(e||"",m,w);pe(N,i,"popup-blocked");try{N.focus()}catch{}return new km(N)}function dw(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const fw="__/auth/handler",pw="emulator/auth/handler",mw=encodeURIComponent("fac");async function Nm(i,e,t,s,a,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ao,eventId:a};if(e instanceof ty){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",t0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,N]of Object.entries({}))h[w]=N}if(e instanceof Na){const w=e.getScopes().filter(N=>N!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),_=y?`#${mw}=${encodeURIComponent(y)}`:"";return`${gw(i)}?${Pa(m).slice(1)}${_}`}function gw({config:i}){return i.emulator?pd(i,pw):`https://${i.authDomain}/${fw}`}/**
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
 */const kh="webStorageSupport";class yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ay,this._completeRedirectFn=z1,this._overrideRedirectResult=F1}async _openPopup(e,t,s,a){var u;wr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Nm(e,t,s,Bh(),a);return hw(e,h,_d())}async _openRedirect(e,t,s,a){await this._originValidation(e);const u=await Nm(e,t,s,Bh(),a);return E1(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:u}=this.eventManagers[t];return a?Promise.resolve(a):(wr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await sw(e),s=new $1(e);return t.register("authEvent",a=>(pe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kh,{type:kh},a=>{var u;const h=(u=a==null?void 0:a[0])===null||u===void 0?void 0:u[kh];h!==void 0&&t(!!h),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=G1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yg()||Hg()||gd()}}const vw=yw;var xm="@firebase/auth",Dm="1.8.1";/**
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
 */class _w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ew(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ww(i){Zs(new Wi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xg(i)},_=new UE(s,a,u,y);return QE(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Zs(new Wi("auth-internal",e=>{const t=lo(e.getProvider("auth").getImmediate());return(s=>new _w(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(xm,Dm,Ew(i)),si(xm,Dm,"esm2017")}/**
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
 */const Tw=5*60,Iw=Rg("authIdTokenMaxAge")||Tw;let Om=null;const Sw=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Iw)return;const a=t==null?void 0:t.token;Om!==a&&(Om=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Aw(i=xg()){const e=hd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=GE(i,{popupRedirectResolver:vw,persistence:[k1,y1,ay]}),s=Rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=Sw(u.toString());d1(t,h,()=>h(t.currentUser)),h1(t,m=>h(m))}}const a=Ag("auth");return a&&YE(t,`http://${a}`),t}function Cw(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}jE({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const u=Hn("internal-error");u.customData=a,t(u)},s.type="text/javascript",s.charset="UTF-8",Cw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ww("Browser");var Lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,py;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,I){function A(){}A.prototype=I.prototype,R.D=I.prototype,R.prototype=new A,R.prototype.constructor=R,R.C=function(P,x,O){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[x].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,I,A){A||(A=0);var P=Array(16);if(typeof I=="string")for(var x=0;16>x;++x)P[x]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(x=0;16>x;++x)P[x]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=R.g[0],A=R.g[1],x=R.g[2];var O=R.g[3],S=I+(O^A&(x^O))+P[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(x^I&(A^x))+P[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(A^O&(I^A))+P[2]+606105819&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(I^x&(O^I))+P[3]+3250441966&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(O^A&(x^O))+P[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(x^I&(A^x))+P[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(A^O&(I^A))+P[6]+2821735955&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(I^x&(O^I))+P[7]+4249261313&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(O^A&(x^O))+P[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(x^I&(A^x))+P[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(A^O&(I^A))+P[10]+4294925233&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(I^x&(O^I))+P[11]+2304563134&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(O^A&(x^O))+P[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(x^I&(A^x))+P[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(A^O&(I^A))+P[14]+2792965006&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(I^x&(O^I))+P[15]+1236535329&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(x^O&(A^x))+P[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(I^A))+P[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(O^I))+P[11]+643717713&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(x^O))+P[0]+3921069994&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^O&(A^x))+P[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(I^A))+P[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(O^I))+P[15]+3634488961&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(x^O))+P[4]+3889429448&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^O&(A^x))+P[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(I^A))+P[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(O^I))+P[3]+4107603335&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(x^O))+P[8]+1163531501&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^O&(A^x))+P[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(I^A))+P[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(O^I))+P[7]+1735328473&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(x^O))+P[12]+2368359562&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(A^x^O)+P[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^x)+P[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^A)+P[11]+1839030562&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^I)+P[14]+4259657740&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^O)+P[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^x)+P[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^A)+P[7]+4139469664&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^I)+P[10]+3200236656&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^O)+P[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^x)+P[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^A)+P[3]+3572445317&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^I)+P[6]+76029189&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^O)+P[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^x)+P[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^A)+P[15]+530742520&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^I)+P[2]+3299628645&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(x^(A|~O))+P[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~x))+P[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~A))+P[14]+2878612391&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~I))+P[5]+4237533241&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~O))+P[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~x))+P[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~A))+P[10]+4293915773&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~I))+P[1]+2240044497&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~O))+P[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~x))+P[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~A))+P[6]+2734768916&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~I))+P[13]+1309151649&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~O))+P[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~x))+P[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~A))+P[2]+718787259&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~I))+P[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+O&4294967295}s.prototype.u=function(R,I){I===void 0&&(I=R.length);for(var A=I-this.blockSize,P=this.B,x=this.h,O=0;O<I;){if(x==0)for(;O<=A;)a(this,R,O),O+=this.blockSize;if(typeof R=="string"){for(;O<I;)if(P[x++]=R.charCodeAt(O++),x==this.blockSize){a(this,P),x=0;break}}else for(;O<I;)if(P[x++]=R[O++],x==this.blockSize){a(this,P),x=0;break}}this.h=x,this.o+=I},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;var A=8*this.o;for(I=R.length-8;I<R.length;++I)R[I]=A&255,A/=256;for(this.u(R),R=Array(16),I=A=0;4>I;++I)for(var P=0;32>P;P+=8)R[A++]=this.g[I]>>>P&255;return R};function u(R,I){var A=m;return Object.prototype.hasOwnProperty.call(A,R)?A[R]:A[R]=I(R)}function h(R,I){this.h=I;for(var A=[],P=!0,x=R.length-1;0<=x;x--){var O=R[x]|0;P&&O==I||(A[x]=O,P=!1)}this.g=A}var m={};function y(R){return-128<=R&&128>R?u(R,function(I){return new h([I|0],0>I?-1:0)}):new h([R|0],0>R?-1:0)}function _(R){if(isNaN(R)||!isFinite(R))return N;if(0>R)return W(_(-R));for(var I=[],A=1,P=0;R>=A;P++)I[P]=R/A|0,A*=4294967296;return new h(I,0)}function w(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return W(w(R.substring(1),I));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(I,8)),P=N,x=0;x<R.length;x+=8){var O=Math.min(8,R.length-x),S=parseInt(R.substring(x,x+O),I);8>O?(O=_(Math.pow(I,O)),P=P.j(O).add(_(S))):(P=P.j(A),P=P.add(_(S)))}return P}var N=y(0),M=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-W(this).m();for(var R=0,I=1,A=0;A<this.g.length;A++){var P=this.i(A);R+=(0<=P?P:4294967296+P)*I,I*=4294967296}return R},i.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(Q(this))return"0";if(Y(this))return"-"+W(this).toString(R);for(var I=_(Math.pow(R,6)),A=this,P="";;){var x=fe(A,I).g;A=we(A,x.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(R);if(A=x,Q(A))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},i.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function Q(R){if(R.h!=0)return!1;for(var I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function Y(R){return R.h==-1}i.l=function(R){return R=we(this,R),Y(R)?-1:Q(R)?0:1};function W(R){for(var I=R.g.length,A=[],P=0;P<I;P++)A[P]=~R.g[P];return new h(A,~R.h).add(M)}i.abs=function(){return Y(this)?W(this):this},i.add=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0,x=0;x<=I;x++){var O=P+(this.i(x)&65535)+(R.i(x)&65535),S=(O>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);P=S>>>16,O&=65535,S&=65535,A[x]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function we(R,I){return R.add(W(I))}i.j=function(R){if(Q(this)||Q(R))return N;if(Y(this))return Y(R)?W(this).j(W(R)):W(W(this).j(R));if(Y(R))return W(this.j(W(R)));if(0>this.l(z)&&0>R.l(z))return _(this.m()*R.m());for(var I=this.g.length+R.g.length,A=[],P=0;P<2*I;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<R.g.length;x++){var O=this.i(P)>>>16,S=this.i(P)&65535,et=R.i(x)>>>16,Rt=R.i(x)&65535;A[2*P+2*x]+=S*Rt,ge(A,2*P+2*x),A[2*P+2*x+1]+=O*Rt,ge(A,2*P+2*x+1),A[2*P+2*x+1]+=S*et,ge(A,2*P+2*x+1),A[2*P+2*x+2]+=O*et,ge(A,2*P+2*x+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new h(A,0)};function ge(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function ye(R,I){this.g=R,this.h=I}function fe(R,I){if(Q(I))throw Error("division by zero");if(Q(R))return new ye(N,N);if(Y(R))return I=fe(W(R),I),new ye(W(I.g),W(I.h));if(Y(I))return I=fe(R,W(I)),new ye(W(I.g),I.h);if(30<R.g.length){if(Y(R)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var A=M,P=I;0>=P.l(R);)A=je(A),P=je(P);var x=Ee(A,1),O=Ee(P,1);for(P=Ee(P,2),A=Ee(A,2);!Q(P);){var S=O.add(P);0>=S.l(R)&&(x=x.add(A),O=S),P=Ee(P,1),A=Ee(A,1)}return I=we(R,x.j(I)),new ye(x,I)}for(x=N;0<=R.l(I);){for(A=Math.max(1,Math.floor(R.m()/I.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=_(A),S=O.j(I);Y(S)||0<S.l(R);)A-=P,O=_(A),S=O.j(I);Q(O)&&(O=M),x=x.add(O),R=we(R,S)}return new ye(x,R)}i.A=function(R){return fe(this,R).h},i.and=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)&R.i(P);return new h(A,this.h&R.h)},i.or=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)|R.i(P);return new h(A,this.h|R.h)},i.xor=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)^R.i(P);return new h(A,this.h^R.h)};function je(R){for(var I=R.g.length+1,A=[],P=0;P<I;P++)A[P]=R.i(P)<<1|R.i(P-1)>>>31;return new h(A,R.h)}function Ee(R,I){var A=I>>5;I%=32;for(var P=R.g.length-A,x=[],O=0;O<P;O++)x[O]=0<I?R.i(O+A)>>>I|R.i(O+A+1)<<32-I:R.i(O+A);return new h(x,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,py=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,$i=h}).apply(typeof Lm<"u"?Lm:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var my,ha,gy,lu,qh,yy,vy,_y;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function N(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function M(l,f,g){return M=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:N,M.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,j){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,X)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function W(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,j=E.length||0;l.length=L+j;for(let X=0;X<j;X++)l[L+X]=E[X]}else l.push(E)}}class we{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ge(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function fe(l){return fe[" "](l),l}fe[" "]=function(){};var je=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ee(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function R(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let j=0;j<A.length;j++)g=A[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function x(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const E=Rt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Rt=new we(()=>new Pt,l=>l.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,le=new et,te=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(D)}};var D=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=Rt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Se(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(je){e:{try{fe(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Pe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}Q(Se,ae);var Pe={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function Be(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++be,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Xn(l){this.src=l,this.g={},this.h=0}Xn.prototype.add=function(l,f,g,E,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var X=Sr(l,f,E,L);return-1<X?(f=l[X],g||(f.fa=!1)):(f=new Be(f,this.src,j,!!E,L),f.fa=g,l.push(f)),f};function Xi(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(E,L,1),j&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Sr(l,f,g,E){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==E)return L}return-1}var fi="closure_lm_"+(1e6*Math.random()|0),Ji={};function po(l,f,g,E,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)po(l,f[j],g,E,L);return null}return g=yo(g),l&&l[Me]?l.K(f,g,_(E)?!!E.capture:!!E,L):mo(l,f,g,!1,E,L)}function mo(l,f,g,E,L,j){if(!f)throw Error("Invalid event type");var X=_(L)?!!L.capture:!!L,Fe=es(l);if(Fe||(l[fi]=Fe=new Xn(l)),g=Fe.add(f,g,E,X,j),g.proxy)return g;if(E=Ma(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ie||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(Zn(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ma(){function l(g){return f.call(l.src,l.listener,g)}const f=go;return l}function Zi(l,f,g,E,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)Zi(l,f[j],g,E,L);else E=_(E)?!!E.capture:!!E,g=yo(g),l&&l[Me]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Sr(j,g,E,L),-1<g&&(mt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=es(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Sr(f,g,E,L)),(g=-1<l?f[l]:null)&&Jn(g))}function Jn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Me])Xi(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(Zn(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=es(f))?(Xi(g,l),g.h==0&&(g.src=null,f[fi]=null)):mt(l)}}}function Zn(l){return l in Ji?Ji[l]:Ji[l]="on"+l}function go(l,f){if(l.da)l=!0;else{f=new Se(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&Jn(l),l=g.call(E,f)}return l}function es(l){return l=l[fi],l instanceof Xn?l:null}var ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function yo(l){return typeof l=="function"?l:(l[ts]||(l[ts]=function(f){return l.handleEvent(f)}),l[ts])}function lt(){B.call(this),this.i=new Xn(this),this.M=this,this.F=null}Q(lt,B),lt.prototype[Me]=!0,lt.prototype.removeEventListener=function(l,f,g,E){Zi(this,l,f,g,E)};function ut(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(E,l),P(f,L)}if(L=!0,g)for(var j=g.length-1;0<=j;j--){var X=f.g=g[j];L=er(X,E,!0,f)&&L}if(X=f.g=l,L=er(X,E,!0,f)&&L,L=er(X,E,!1,f)&&L,g)for(j=0;j<g.length;j++)X=f.g=g[j],L=er(X,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)mt(g[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},lt.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function er(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var X=f[j];if(X&&!X.da&&X.capture==g){var Fe=X.listener,ct=X.ha||X.src;X.fa&&Xi(l.i,X),L=Fe.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function vo(l,f,g){if(typeof l=="function")g&&(l=M(l,g));else if(l&&typeof l.handleEvent=="function")l=M(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Ar(l){l.g=vo(()=>{l.g=null,l.i&&(l.i=!1,Ar(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class pi extends B{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ar(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(l){B.call(this),this.h=l,this.g={}}Q(mi,B);var _o=[];function Eo(l){Ee(l.g,function(f,g){this.g.hasOwnProperty(g)&&Jn(f)},l),l.g={}}mi.prototype.N=function(){mi.aa.N.call(this),Eo(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=m.JSON.stringify,To=m.JSON.parse,Io=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function gi(){}gi.prototype.h=null;function ns(l){return l.h||(l.h=l.i())}function rs(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dn(){ae.call(this,"d")}Q(Dn,ae);function is(){ae.call(this,"c")}Q(is,ae);var On={},So=null;function yi(){return So=So||new lt}On.La="serverreachability";function Ao(l){ae.call(this,On.La,l)}Q(Ao,ae);function tr(l){const f=yi();ut(f,new Ao(f))}On.STAT_EVENT="statevent";function Co(l,f){ae.call(this,On.STAT_EVENT,l),this.stat=f}Q(Co,ae);function tt(l){const f=yi();ut(f,new Co(f,l))}On.Ma="timingevent";function ss(l,f){ae.call(this,On.Ma,l),this.size=f}Q(ss,ae);function gn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function _i(l,f,g,E,L,j){l.info(function(){if(l.g)if(j)for(var X="",Fe=j.split("&"),ct=0;ct<Fe.length;ct++){var ke=Fe[ct].split("=");if(1<ke.length){var gt=ke[0];ke=ke[1];var st=gt.split("_");X=2<=st.length&&st[1]=="type"?X+(gt+"="+ke+"&"):X+(gt+"=redacted&")}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+X})}function os(l,f,g,E,L,j,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+j+" "+X})}function yn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Wu(l,g)+(E?" "+E:"")})}function Ro(l,f){l.info(function(){return"TIMEOUT: "+f})}vi.prototype.info=function(){};function Wu(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return wo(g)}catch{return f}}var as={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function Ei(){}Q(Ei,gi),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},vn=new Ei;function _n(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Po={},ls={};function us(l,f,g){l.L=1,l.v=Nr(Zt(f)),l.m=g,l.P=!0,ko(l,null)}function ko(l,f){l.F=Date.now(),$e(l),l.A=Zt(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Dr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new Fa,l.g=nl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new pi(M(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(_o[0]=L.toString()),L=_o);for(var j=0;j<L.length;j++){var X=po(g,L[j],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),tr(),_i(l.i,l.u,l.A,l.l,l.R,l.m)}_n.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},_n.prototype.Y=function(l){try{if(l==this.g)e:{const st=$t(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Vo(this.g)))){this.J||st!=4||f==7||(f==8||0>=un?tr(3):tr(2)),wi(this);var g=this.g.Z();this.X=g;t:if(Ua(this)){var E=Vo(this.g);l="";var L=E.length,j=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Cr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(j&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,os(this.i,this.u,this.A,this.l,this.R,st,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ct=this.g;if((Fe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(Fe)){var ke=Fe;break t}}ke=null}if(g=ke)yn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,g);else{this.o=!1,this.s=3,tt(12),an(this),Cr(this);break e}}if(this.P){g=!0;let tn;for(;!this.J&&this.C<X.length;)if(tn=Ku(this,X),tn==ls){st==4&&(this.s=4,tt(14),g=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Po){this.s=4,tt(15),yn(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else yn(this.i,this.l,tn,null),No(this,tn);if(Ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||X.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)yn(this.i,this.l,X,"[Invalid Chunked Response]"),an(this),Cr(this);else if(0<X.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),bo(gt),gt.M=!0,tt(11))}}else yn(this.i,this.l,X,null),No(this,X);st==4&&an(this),this.o&&!this.J&&(st==4?Es(this.j,this):(this.o=!1,$e(this)))}else ms(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),an(this),Cr(this)}}}catch{}finally{}};function Ua(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Ku(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?ls:(g=Number(f.substring(g,E)),isNaN(g)?Po:(E+=1,E+g>f.length?ls:(f=f.slice(E,E+g),l.C=E+g,f)))}_n.prototype.cancel=function(){this.J=!0,an(this)};function $e(l){l.S=Date.now()+l.I,ja(l,l.I)}function ja(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=gn(M(l.ba,l),f)}function wi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}_n.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ro(this.i,this.A),this.L!=2&&(tr(),tt(17)),an(this),this.s=2,Cr(this)):ja(this,this.S-l)};function Cr(l){l.j.G==0||l.J||Es(l.j,l)}function an(l){wi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Eo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function No(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||bt(g.h,l))){if(!l.K&&bt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)_s(g),Sn(g);else break e;vs(g),tt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=gn(M(g.Za,g),6e3));if(1>=Ba(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else or(g,11)}else if((l.K||g.g==l)&&_s(g),!ge(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let ke=L[f];if(g.T=ke[0],ke=ke[1],g.G==2)if(ke[0]=="c"){g.K=ke[1],g.ia=ke[2];const gt=ke[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const st=ke[4];st!=null&&(g.Aa=st,g.j.info("SVER="+g.Aa));const un=ke[5];un!=null&&typeof un=="number"&&0<un&&(E=1.5*un,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const tn=l.g;if(tn){const Pi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pi){var j=E.h;j.g||Pi.indexOf("spdy")==-1&&Pi.indexOf("quic")==-1&&Pi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(xo(j,j.h),j.h=null))}if(E.D){const Ts=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ts&&(E.ya=Ts,ze(E.I,E.D,Ts))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var X=l;if(E.qa=tl(E,E.J?E.ia:null,E.W),X.K){$a(E.h,X);var Fe=X,ct=E.L;ct&&(Fe.I=ct),Fe.B&&(wi(Fe),$e(Fe)),E.g=X}else Ri(E);0<g.i.length&&bn(g)}else ke[0]!="stop"&&ke[0]!="close"||or(g,7);else g.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?or(g,7):Tt(g):ke[0]!="noop"&&g.l&&g.l.ta(ke),g.v=0)}}tr(4)}catch{}}var za=class{constructor(l,f){this.g=l,this.map=f}};function Ti(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ba(l){return l.h?1:l.g?l.g.size:0}function bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function xo(l,f){l.g?l.g.add(f):l.h=f}function $a(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ti.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ha(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function cs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function hs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Rr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=hs(l),E=cs(l),L=E.length,j=0;j<L;j++)f.call(void 0,E[j],g&&g[j],l)}var Ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gu(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var j=l[g].substring(0,E);L=l[g].substring(E+1)}else j=l[g];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function nr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof nr){this.h=l.h,Si(this,l.j),this.o=l.o,this.g=l.g,Pr(this,l.s),this.l=l.l;var f=l.i,g=new Ln;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),kr(this,g),this.m=l.m}else l&&(f=String(l).match(Ii))?(this.h=!1,Si(this,f[1]||"",!0),this.o=Re(f[2]||""),this.g=Re(f[3]||"",!0),Pr(this,f[4]),this.l=Re(f[5]||"",!0),kr(this,f[6]||"",!0),this.m=Re(f[7]||"")):(this.h=!1,this.i=new Ln(null,this.h))}nr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(xr(f,ds,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(xr(f,ds,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(xr(g,g.charAt(0)=="/"?Ka:Wa,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",xr(g,Do)),l.join("")};function Zt(l){return new nr(l)}function Si(l,f,g){l.j=g?Re(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Pr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function kr(l,f,g){f instanceof Ln?(l.i=f,Vn(l.i,l.h)):(g||(f=xr(f,Ga)),l.i=new Ln(f,l.h))}function ze(l,f,g){l.i.set(f,g)}function Nr(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Re(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,qa),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function qa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ds=/[#\/\?@]/g,Wa=/[#\?:]/g,Ka=/[#\?]/g,Ga=/[#\?@]/g,Do=/#/g;function Ln(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&Gu(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Ln.prototype,i.add=function(l,f){wt(this),this.i=null,l=ln(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function En(l,f){wt(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function wn(l,f){return wt(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let j=0;j<L.length;j++)g.push(f[E])}return g},i.V=function(l){wt(this);let f=[];if(typeof l=="string")wn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return wt(this),this.i=null,l=ln(this,l),wn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Dr(l,f,g){En(l,f),0<g.length&&(l.i=null,l.g.set(ln(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const j=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=j;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Vn(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(En(this,E),Dr(this,L,g))},l)),l.j=f}function Qu(l,f){const g=new vi;if(m.Image){const E=new Image;E.onload=z(Bt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=z(Bt,g,"TestLoadImage: error",!1,f,E),E.onabort=z(Bt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=z(Bt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Qa(l,f){const g=new vi,E=new AbortController,L=setTimeout(()=>{E.abort(),Bt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(L),j.ok?Bt(g,"TestPingServer: ok",!0,f):Bt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Bt(g,"TestPingServer: error",!1,f)})}function Bt(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function Yu(){this.g=new Io}function Ya(l,f,g){const E=g||"";try{Rr(l,function(L,j){let X=L;_(L)&&(X=wo(L)),f.push(E+j+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function rr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(rr,gi),rr.prototype.g=function(){return new Ai(this.l,this.j)},rr.prototype.i=function(l){return function(){return l}}({});function Ai(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ai,lt),i=Ai.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,In(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xa(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xa(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Tn(this):In(this),this.readyState==3&&Xa(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Tn(this))},i.Qa=function(l){this.g&&(this.response=l,Tn(this))},i.ga=function(){this.g&&Tn(this)};function Tn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,In(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ir(l){let f="";return Ee(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Or(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ir(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,f,g))}function Ke(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Ke,lt);var Xu=/^https?$/i,Oo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?ns(this.o):ns(vn),this.g.onreadystatechange=M(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Ci(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Oo,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of g)this.g.setRequestHeader(j,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Ci(this,j)}};function Ci(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,fs(l),en(l)}function fs(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Lo(this):this.bb())},i.bb=function(){Lo(this)};function Lo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)vo(l.Ea,0,l);else if(ut(l,"readystatechange"),$t(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=X===0){var L=String(l.D).match(Ii)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Xu.test(L?L.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var j=2<$t(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",fs(l)}}finally{en(l)}}}}function en(l,f){if(l.g){ps(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function ps(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),To(f)}};function Vo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ms(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ge(l[E]))continue;var g=x(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[L]||[];f[L]=j,j.push(g)}R(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Mo(l){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mn("baseRetryDelayMs",5e3,l),this.cb=Mn("retryDelaySeedMs",1e4,l),this.Wa=Mn("forwardChannelMaxRetries",2,l),this.wa=Mn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(l&&l.concurrentRequestLimit),this.Da=new Yu,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Mo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=tl(this,null,this.W),bn(this)};function Tt(l){if(gs(l),l.G==3){var f=l.U++,g=Zt(l.I);if(ze(g,"SID",l.K),ze(g,"RID",f),ze(g,"TYPE","terminate"),sr(l,g),f=new _n(l,l.j,f),f.L=2,f.v=Nr(Zt(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=nl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}el(l)}function Sn(l){l.g&&(bo(l),l.g.cancel(),l.g=null)}function gs(l){Sn(l),l.u&&(m.clearTimeout(l.u),l.u=null),_s(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function bn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||te(),J||(Ue(),J=!0),le.add(f,l),l.B=0}}function Ju(l,f){return Ba(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=gn(M(l.Ga,l,f),Za(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new _n(this,this.j,l);let j=this.o;if(this.S&&(j?(j=I(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Lr(this,L,f),g=Zt(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),sr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(ir(j)))+"&"+f:this.m&&Or(g,this.m,j)),xo(this.h,L),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",f),ze(g,"SID","null"),L.T=!0,us(L,g,null)):us(L,g,f),this.G=2}}else this.G==3&&(l?ys(this,l):this.i.length==0||Jt(this.h)||ys(this))};function ys(l,f){var g;f?g=f.l:g=l.U++;const E=Zt(l.I);ze(E,"SID",l.K),ze(E,"RID",g),ze(E,"AID",l.T),sr(l,E),l.m&&l.o&&Or(E,l.m,l.o),g=new _n(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Lr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),xo(l.h,g),us(g,E,f)}function sr(l,f){l.H&&Ee(l.H,function(g,E){ze(f,E,g)}),l.l&&Rr({},function(g,E){ze(f,E,g)})}function Lr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?M(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const X=["count="+g];j==-1?0<g?(j=L[0].g,X.push("ofs="+j)):j=0:X.push("ofs="+j);let Fe=!0;for(let ct=0;ct<g;ct++){let ke=L[ct].g;const gt=L[ct].map;if(ke-=j,0>ke)j=Math.max(0,L[ct].g-100),Fe=!1;else try{Ya(gt,X,"req"+ke+"_")}catch{E&&E(gt)}}if(Fe){E=X.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Ri(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||te(),J||(Ue(),J=!0),le.add(f,l),l.v=0}}function vs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=gn(M(l.Fa,l),Za(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=gn(M(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Sn(this),Ja(this))};function bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Ja(l){l.g=new _n(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),sr(l,f),l.m&&l.o&&Or(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Nr(Zt(f)),g.m=null,g.P=!0,ko(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Sn(this),vs(this),tt(19))};function _s(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Es(l,f){var g=null;if(l.g==f){_s(l),bo(l),l.g=null;var E=2}else if(bt(l.h,f))g=f.D,$a(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=yi(),ut(E,new ss(E,g)),bn(l)}else Ri(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Ju(l,f)||E==2&&vs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:or(l,5);break;case 4:or(l,10);break;case 3:or(l,6);break;default:or(l,2)}}}function Za(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function or(l,f){if(l.j.info("Error code "+f),f==2){var g=M(l.fb,l),E=l.Xa;const L=!E;E=new nr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Si(E,"https"),Nr(E),L?Qu(E.toString(),g):Qa(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),el(l),gs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function el(l){if(l.G=0,l.ka=[],l.l){const f=Ha(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function tl(l,f,g){var E=g instanceof nr?Zt(g):new nr(g);if(E.g!="")f&&(E.g=f+"."+E.g),Pr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new nr(null);E&&Si(j,E),f&&(j.g=f),L&&Pr(j,L),g&&(j.l=g),E=j}return g=l.D,f=l.ya,g&&f&&ze(E,g,f),ze(E,"VER",l.la),sr(l,E),E}function nl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new rr({eb:g})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fo(){}i=Fo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ws(){}ws.prototype.g=function(l,f){return new Ft(l,f)};function Ft(l,f){lt.call(this),this.g=new Mo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ge(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ge(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Fn(this)}Q(Ft,lt),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Tt(this.g)},Ft.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=wo(l),l=g);f.i.push(new za(f.Ya++,l)),f.G==3&&bn(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,Ft.aa.N.call(this)};function rl(l){Dn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(rl,Dn);function il(){is.call(this),this.status=1}Q(il,is);function Fn(l){this.g=l}Q(Fn,Fo),Fn.prototype.ua=function(){ut(this.g,"a")},Fn.prototype.ta=function(l){ut(this.g,new rl(l))},Fn.prototype.sa=function(l){ut(this.g,new il)},Fn.prototype.ra=function(){ut(this.g,"b")},ws.prototype.createWebChannel=ws.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,_y=function(){return new ws},vy=function(){return yi()},yy=On,qh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},as.NO_ERROR=0,as.TIMEOUT=8,as.HTTP_ERROR=6,lu=as,ba.COMPLETE="complete",gy=ba,rs.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ha=rs,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,my=Ke}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});const Vm="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let co="11.0.2";/**
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
 */const Gi=new ud("@firebase/firestore");function $s(){return Gi.logLevel}function ne(i,...e){if(Gi.logLevel<=Ce.DEBUG){const t=e.map(wd);Gi.debug(`Firestore (${co}): ${i}`,...t)}}function Tr(i,...e){if(Gi.logLevel<=Ce.ERROR){const t=e.map(wd);Gi.error(`Firestore (${co}): ${i}`,...t)}}function to(i,...e){if(Gi.logLevel<=Ce.WARN){const t=e.map(wd);Gi.warn(`Firestore (${co}): ${i}`,...t)}}function wd(i){if(typeof i=="string")return i;try{/**
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
 */function Te(i="Unexpected state"){const e=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: `+i;throw Tr(e),new Error(e)}function Xe(i,e){i||Te()}function De(i,e){return i}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ey{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class Pw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kw{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Hi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Hi,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Hi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string"),new Ey(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new Lt(e)}}class Nw{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xw{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Nw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ow{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Xe(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const a=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>a(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?a(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Xe(typeof t.token=="string"),this.R=t.token,new Dw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Lw(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class wy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=Lw(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<t&&(s+=e.charAt(a[u]%e.length))}return s}}function xe(i,e){return i<e?-1:i>e?1:0}function no(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
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
 */class Xt{static now(){return Xt.fromMillis(Date.now())}static fromDate(e){return Xt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Xt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new he(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Xt(0,0))}static max(){return new _e(new Xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ta{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(),s===void 0?s=e.length-t:s>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const u=e.get(a),h=t.get(a);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ze extends Ta{construct(e,t,s){return new Ze(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const Vw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends Ta{construct(e,t,s){return new zt(e,t,s)}static isValidIdentifier(e){return Vw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new zt(["__name__"])}static fromServerFormat(e){const t=[];let s="",a=0;const u=()=>{if(s.length===0)throw new he(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new he(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(u(),a++)}if(u(),h)throw new he(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zt(t)}static emptyPath(){return new zt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ze.fromString(e))}static fromName(e){return new de(Ze.fromString(e).popFirst(5))}static empty(){return new de(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ze(e.slice()))}}function Mw(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=_e.fromTimestamp(s===1e9?new Xt(t+1,0):new Xt(t,s));return new ai(a,de.empty(),e)}function bw(i){return new ai(i.readTime,i.key,-1)}class ai{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ai(_e.min(),de.empty(),-1)}static max(){return new ai(_e.max(),de.empty(),-1)}}function Fw(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:xe(i.largestBatchId,e.largestBatchId))}/**
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
 */const Uw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Lu(i){if(i.code!==Z.FAILED_PRECONDITION||i.message!==Uw)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let a=0,u=0,h=!1;e.forEach(m=>{++a,m.next(()=>{++u,h&&u===a&&t()},y=>s(y))}),h=!0,u===a&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(a=>a?$.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,u)=>{s.push(t.call(this,a,u))}),this.waitFor(s)}static mapArray(e,t){return new $((s,a)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>a(w))}})}static doWhile(e,t){return new $((s,a)=>{const u=()=>{e()===!0?t().next(()=>{u()},a):s()};u()})}}function zw(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ho(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Vu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vu.oe=-1;function Mu(i){return i==null}function Wh(i){return i===0&&1/i==-1/0}/**
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
 */function Bw(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Mm(e)),e=$w(i.get(t),e);return Mm(e)}function $w(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const u=i.charAt(a);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Mm(i){return i+""}/**
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
 */function bm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Da(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Hw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,a,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=a??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,u){return new At(e??this.key,t??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,t,s),null):u===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return At.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,s,a,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fm(this.data.getIterator())}getIteratorFrom(e){return new Fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ei{constructor(e){this.fields=e,e.sort(zt.comparator)}static empty(){return new ei([])}unionWith(e){let t=new pt(zt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ei(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Ty extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Ty("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(a){let u="";for(let h=0;h<a.length;++h)u+=String.fromCharCode(a[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const qw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(i){if(Xe(!!i),typeof i=="string"){let e=0;const t=qw.exec(i);if(Xe(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ui(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
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
 */function Td(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bu(i){const e=i.mapValue.fields.__previous_value__;return Td(e)?bu(e):e}function Ia(i){const e=li(i.mapValue.fields.__local_write_time__.timestampValue);return new Xt(e.seconds,e.nanos)}/**
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
 */class Ww{constructor(e,t,s,a,u,h,m,y,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_}}class Sa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ci(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Td(i)?4:Gw(i)?9007199254740991:Kw(i)?10:11:Te()}function Kn(i,e){if(i===e)return!0;const t=ci(i);if(t!==ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ia(i).isEqual(Ia(e));case 3:return function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const h=li(a.timestampValue),m=li(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,u){return ui(a.bytesValue).isEqual(ui(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,u){return rt(a.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(a.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(a,u){if("integerValue"in a&&"integerValue"in u)return rt(a.integerValue)===rt(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const h=rt(a.doubleValue),m=rt(u.doubleValue);return h===m?Wh(h)===Wh(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return no(i.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return function(a,u){const h=a.mapValue.fields||{},m=u.mapValue.fields||{};if(bm(h)!==bm(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!Kn(h[y],m[y])))return!1;return!0}(i,e);default:return Te()}}function Aa(i,e){return(i.values||[]).find(t=>Kn(t,e))!==void 0}function ro(i,e){if(i===e)return 0;const t=ci(i),s=ci(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return Um(i.timestampValue,e.timestampValue);case 4:return Um(Ia(i),Ia(e));case 5:return xe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=ui(u),y=ui(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const w=xe(m[_],y[_]);if(w!==0)return w}return xe(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=xe(rt(u.latitude),rt(h.latitude));return m!==0?m:xe(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return jm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,_,w;const N=u.fields||{},M=h.fields||{},z=(m=N.value)===null||m===void 0?void 0:m.arrayValue,Q=(y=M.value)===null||y===void 0?void 0:y.arrayValue,Y=xe(((_=z==null?void 0:z.values)===null||_===void 0?void 0:_.length)||0,((w=Q==null?void 0:Q.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:jm(z,Q)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===tu.mapValue&&h===tu.mapValue)return 0;if(u===tu.mapValue)return 1;if(h===tu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},w=Object.keys(_);y.sort(),w.sort();for(let N=0;N<y.length&&N<w.length;++N){const M=xe(y[N],w[N]);if(M!==0)return M;const z=ro(m[y[N]],_[w[N]]);if(z!==0)return z}return xe(y.length,w.length)}(i.mapValue,e.mapValue);default:throw Te()}}function Um(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const t=li(i),s=li(e),a=xe(t.seconds,s.seconds);return a!==0?a:xe(t.nanos,s.nanos)}function jm(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const u=ro(t[a],s[a]);if(u)return u}return xe(t.length,s.length)}function io(i){return Kh(i)}function Kh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=li(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return ui(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return de.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const u of t.values||[])a?a=!1:s+=",",s+=Kh(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${Kh(t.fields[h])}`;return a+"}"}(i.mapValue):Te()}function uu(i){switch(ci(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bu(i);return e?16+uu(e):16;case 5:return 2*i.stringValue.length;case 6:return ui(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,u)=>a+uu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Da(s.fields,(u,h)=>{a+=u.length+uu(h)}),a}(i.mapValue);default:throw Te()}}function Gh(i){return!!i&&"integerValue"in i}function Id(i){return!!i&&"arrayValue"in i}function zm(i){return!!i&&"nullValue"in i}function Bm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Nh(i){return!!i&&"mapValue"in i}function Kw(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ma(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Da(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ma(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ma(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Gw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $n{constructor(e){this.value=e}static empty(){return new $n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Nh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(t)}setAll(e){let t=zt.emptyPath(),s={},a=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=ma(h):a.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,a)}delete(e){const t=this.field(e.popLast());Nh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Nh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Da(t,(a,u)=>e[a]=u);for(const a of s)delete e[a]}clone(){return new $n(ma(this.value))}}/**
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
 */class Vt{constructor(e,t,s,a,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Vt(e,0,_e.min(),_e.min(),_e.min(),$n.empty(),0)}static newFoundDocument(e,t,s,a){return new Vt(e,1,t,_e.min(),s,a,0)}static newNoDocument(e,t){return new Vt(e,2,t,_e.min(),_e.min(),$n.empty(),0)}static newUnknownDocument(e,t){return new Vt(e,3,t,_e.min(),_e.min(),$n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eu{constructor(e,t){this.position=e,this.inclusive=t}}function $m(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const u=e[a],h=i.position[a];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=ro(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Kn(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class wu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qw(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Iy{}class ft extends Iy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Xw(e,t,s):t==="array-contains"?new eT(e,s):t==="in"?new tT(e,s):t==="not-in"?new nT(e,s):t==="array-contains-any"?new rT(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Jw(e,s):new Zw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ro(t,this.value)):t!==null&&ci(this.value)===ci(t)&&this.matchesComparison(ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends Iy{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Gn(e,t)}matches(e){return Sy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sy(i){return i.op==="and"}function Ay(i){return Yw(i)&&Sy(i)}function Yw(i){for(const e of i.filters)if(e instanceof Gn)return!1;return!0}function Qh(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+io(i.value);if(Ay(i))return i.filters.map(e=>Qh(e)).join(",");{const e=i.filters.map(t=>Qh(t)).join(",");return`${i.op}(${e})`}}function Cy(i,e){return i instanceof ft?function(s,a){return a instanceof ft&&s.op===a.op&&s.field.isEqual(a.field)&&Kn(s.value,a.value)}(i,e):i instanceof Gn?function(s,a){return a instanceof Gn&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((u,h,m)=>u&&Cy(h,a.filters[m]),!0):!1}(i,e):void Te()}function Ry(i){return i instanceof ft?function(t){return`${t.field.canonicalString()} ${t.op} ${io(t.value)}`}(i):i instanceof Gn?function(t){return t.op.toString()+" {"+t.getFilters().map(Ry).join(" ,")+"}"}(i):"Filter"}class Xw extends ft{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class Jw extends ft{constructor(e,t){super(e,"in",t),this.keys=Py("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Zw extends ft{constructor(e,t){super(e,"not-in",t),this.keys=Py("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Py(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class eT extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Id(t)&&Aa(t.arrayValue,this.value)}}class tT extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Aa(this.value.arrayValue,t)}}class nT extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Aa(this.value.arrayValue,t)}}class rT extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Id(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Aa(this.value.arrayValue,s))}}/**
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
 */class iT{constructor(e,t=null,s=[],a=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function qm(i,e=null,t=[],s=[],a=null,u=null,h=null){return new iT(i,e,t,s,a,u,h)}function Sd(i){const e=De(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Qh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Mu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>io(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>io(s)).join(",")),e.ue=t}return e.ue}function Ad(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Qw(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Cy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Hm(i.startAt,e.startAt)&&Hm(i.endAt,e.endAt)}function Yh(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Fu{constructor(e,t=null,s=[],a=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sT(i,e,t,s,a,u,h,m){return new Fu(i,e,t,s,a,u,h,m)}function Cd(i){return new Fu(i)}function Wm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function oT(i){return i.collectionGroup!==null}function ga(i){const e=De(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(zt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new wu(u,s))}),t.has(zt.keyField().canonicalString())||e.ce.push(new wu(zt.keyField(),s))}return e.ce}function Wn(i){const e=De(i);return e.le||(e.le=aT(e,ga(i))),e.le}function aT(i,e){if(i.limitType==="F")return qm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const u=a.dir==="desc"?"asc":"desc";return new wu(a.field,u)});const t=i.endAt?new Eu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Eu(i.startAt.position,i.startAt.inclusive):null;return qm(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Xh(i,e,t){return new Fu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Uu(i,e){return Ad(Wn(i),Wn(e))&&i.limitType===e.limitType}function ky(i){return`${Sd(Wn(i))}|lt:${i.limitType}`}function Hs(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Ry(a)).join(", ")}]`),Mu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>io(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>io(a)).join(",")),`Target(${s})`}(Wn(i))}; limitType=${i.limitType})`}function ju(i,e){return e.isFoundDocument()&&function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,a){for(const u of ga(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(h,m,y){const _=$m(h,m,y);return h.inclusive?_<=0:_<0}(s.startAt,ga(s),a)||s.endAt&&!function(h,m,y){const _=$m(h,m,y);return h.inclusive?_>=0:_>0}(s.endAt,ga(s),a))}(i,e)}function lT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Ny(i){return(e,t)=>{let s=!1;for(const a of ga(i)){const u=uT(a,e,t);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function uT(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?ro(y,_):Te()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
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
 */class Yi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Da(this.inner,(t,s)=>{for(const[a,u]of s)e(a,u)})}isEmpty(){return Hw(this.inner)}size(){return this.innerSize}}/**
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
 */const cT=new it(de.comparator);function hi(){return cT}const xy=new it(de.comparator);function da(...i){let e=xy;for(const t of i)e=e.insert(t.key,t);return e}function hT(i){let e=xy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Bi(){return ya()}function Dy(){return ya()}function ya(){return new Yi(i=>i.toString(),(i,e)=>i.isEqual(e))}const dT=new pt(de.comparator);function Le(...i){let e=dT;for(const t of i)e=e.add(t);return e}const fT=new pt(xe);function pT(){return fT}/**
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
 */function mT(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wh(e)?"-0":e}}function gT(i){return{integerValue:""+i}}/**
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
 */class zu{constructor(){this._=void 0}}function yT(i,e,t){return i instanceof Jh?function(a,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&Td(u)&&(u=bu(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Tu?Oy(i,e):i instanceof Iu?Ly(i,e):function(a,u){const h=_T(a,u),m=Km(h)+Km(a.Pe);return Gh(h)&&Gh(a.Pe)?gT(m):mT(a.serializer,m)}(i,e)}function vT(i,e,t){return i instanceof Tu?Oy(i,e):i instanceof Iu?Ly(i,e):t}function _T(i,e){return i instanceof Zh?function(s){return Gh(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Jh extends zu{}class Tu extends zu{constructor(e){super(),this.elements=e}}function Oy(i,e){const t=Vy(e);for(const s of i.elements)t.some(a=>Kn(a,s))||t.push(s);return{arrayValue:{values:t}}}class Iu extends zu{constructor(e){super(),this.elements=e}}function Ly(i,e){let t=Vy(e);for(const s of i.elements)t=t.filter(a=>!Kn(a,s));return{arrayValue:{values:t}}}class Zh extends zu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Km(i){return rt(i.integerValue||i.doubleValue)}function Vy(i){return Id(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function ET(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Tu&&a instanceof Tu||s instanceof Iu&&a instanceof Iu?no(s.elements,a.elements,Kn):s instanceof Zh&&a instanceof Zh?Kn(s.Pe,a.Pe):s instanceof Jh&&a instanceof Jh}(i.transform,e.transform)}class qi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qi}static exists(e){return new qi(void 0,e)}static updateTime(e){return new qi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Rd{}function My(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new TT(i.key,qi.none()):new Pd(i.key,i.data,qi.none());{const t=i.data,s=$n.empty();let a=new pt(zt.comparator);for(let u of e.fields)if(!a.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),a=a.add(u)}return new Bu(i.key,s,new ei(a.toArray()),qi.none())}}function wT(i,e,t){i instanceof Pd?function(a,u,h){const m=a.value.clone(),y=Qm(a.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Bu?function(a,u,h){if(!cu(a.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Qm(a.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(by(a)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(a,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function va(i,e,t,s){return i instanceof Pd?function(u,h,m,y){if(!cu(u.precondition,h))return m;const _=u.value.clone(),w=Ym(u.fieldTransforms,y,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(i,e,t,s):i instanceof Bu?function(u,h,m,y){if(!cu(u.precondition,h))return m;const _=Ym(u.fieldTransforms,y,h),w=h.data;return w.setAll(by(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(N=>N.field))}(i,e,t,s):function(u,h,m){return cu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function Gm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&no(s,a,(u,h)=>ET(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Pd extends Rd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Bu extends Rd{constructor(e,t,s,a,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function by(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Qm(i,e,t){const s=new Map;Xe(i.length===t.length);for(let a=0;a<t.length;a++){const u=i[a],h=u.transform,m=e.data.field(u.field);s.set(u.field,vT(h,m,t[a]))}return s}function Ym(i,e,t){const s=new Map;for(const a of i){const u=a.transform,h=t.data.field(a.field);s.set(a.field,yT(u,h,e))}return s}class TT extends Rd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IT{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&wT(u,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Dy();return this.mutations.forEach(a=>{const u=e.get(a.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(a.key)?null:m;const y=My(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(_e.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(t,s)=>Gm(t,s))&&no(this.baseMutations,e.baseMutations,(t,s)=>Gm(t,s))}}/**
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
 */class ST{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var at,Ne;function Fy(i){if(i===void 0)return Tr("GRPC error has no .code"),Z.UNKNOWN;switch(i){case at.OK:return Z.OK;case at.CANCELLED:return Z.CANCELLED;case at.UNKNOWN:return Z.UNKNOWN;case at.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case at.INTERNAL:return Z.INTERNAL;case at.UNAVAILABLE:return Z.UNAVAILABLE;case at.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case at.NOT_FOUND:return Z.NOT_FOUND;case at.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case at.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case at.ABORTED:return Z.ABORTED;case at.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case at.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case at.DATA_LOSS:return Z.DATA_LOSS;default:return Te()}}(Ne=at||(at={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CT(){return new TextEncoder}/**
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
 */const RT=new $i([4294967295,4294967295],0);function Xm(i){const e=CT().encode(i),t=new py;return t.update(e),new Uint8Array(t.digest())}function Jm(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new $i([t,s],0),new $i([a,u],0)]}class kd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new fa(`Invalid padding: ${t}`);if(s<0)throw new fa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new fa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=$i.fromNumber(this.Te)}Ee(e,t,s){let a=e.add(t.multiply($i.fromNumber(s)));return a.compare(RT)===1&&(a=new $i([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Xm(e),[s,a]=Jm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,a,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new kd(u,a,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=Xm(e),[s,a]=Jm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,a,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $u{constructor(e,t,s,a,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new $u(_e.min(),a,new it(xe),hi(),Le())}}class Oa{constructor(e,t,s,a,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Oa(s,t,Le(),Le(),Le())}}/**
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
 */class hu{constructor(e,t,s,a){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=a}}class Uy{constructor(e,t){this.targetId=e,this.me=t}}class jy{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Zm{constructor(){this.fe=0,this.ge=eg(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Le(),t=Le(),s=Le();return this.ge.forEach((a,u)=>{switch(u){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te()}}),new Oa(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=eg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PT{constructor(e){this.Le=e,this.Be=new Map,this.ke=hi(),this.qe=nu(),this.Qe=nu(),this.Ke=new it(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,a)=>{this.je(a)&&t(a)})}Je(e){const t=e.targetId,s=e.me.count,a=this.Ye(t);if(a){const u=a.target;if(Yh(u))if(s===0){const h=new de(u.path);this.We(t,h,Vt.newNoDocument(h,_e.min()))}else Xe(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),y=m?this.et(m,e,h):1;if(y!==0){this.He(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:u=0}=t;let h,m;try{h=ui(s).toUint8Array()}catch(y){if(y instanceof Ty)return to("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new kd(h,a,u)}catch(y){return to(y instanceof fa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let a=0;return s.forEach(u=>{const h=this.Le.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),a++)}),a}it(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&Yh(m.target)){const y=new de(m.target.path);this.st(y).has(h)||this.ot(h,y)||this.We(h,y,Vt.newNoDocument(y,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Le();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const _=this.Ye(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const a=new $u(e,t,this.Ke,this.ke,s);return this.ke=hi(),this.qe=nu(),this.Qe=nu(),this.Ke=new it(xe),a}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const a=this.ze(e);this.ot(e,t)?a.Fe(t,1):a.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Zm,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Zm),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function nu(){return new it(de.comparator)}function eg(){return new it(de.comparator)}const kT={asc:"ASCENDING",desc:"DESCENDING"},NT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xT={and:"AND",or:"OR"};class DT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ed(i,e){return i.useProto3Json||Mu(e)?e:{value:e}}function OT(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LT(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Xs(i){return Xe(!!i),_e.fromTimestamp(function(t){const s=li(t);return new Xt(s.seconds,s.nanos)}(i))}function VT(i,e){return td(i,e).canonicalString()}function td(i,e){const t=function(a){return new Ze(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function zy(i){const e=Ze.fromString(i);return Xe(Wy(e)),e}function xh(i,e){const t=zy(e);if(t.get(1)!==i.databaseId.projectId)throw new he(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new he(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de($y(t))}function By(i,e){return VT(i.databaseId,e)}function MT(i){const e=zy(i);return e.length===4?Ze.emptyPath():$y(e)}function tg(i){return new Ze(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function $y(i){return Xe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function bT(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(Xe(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(Xe(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?Z.UNKNOWN:Fy(_.code);return new he(w,_.message||"")}(h);t=new jy(s,a,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=xh(i,s.document.name),u=Xs(s.document.updateTime),h=s.document.createTime?Xs(s.document.createTime):_e.min(),m=new $n({mapValue:{fields:s.document.fields}}),y=Vt.newFoundDocument(a,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new hu(_,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=xh(i,s.document),u=s.readTime?Xs(s.readTime):_e.min(),h=Vt.newNoDocument(a,u),m=s.removedTargetIds||[];t=new hu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=xh(i,s.document),u=s.removedTargetIds||[];t=new hu([],u,a,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:u}=s,h=new AT(a,u),m=s.targetId;t=new Uy(m,h)}}return t}function FT(i,e){return{documents:[By(i,e.path)]}}function UT(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=By(i,a);const u=function(_){if(_.length!==0)return qy(Gn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(M){return{field:qs(M.field),direction:BT(M.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=ed(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:a}}function jT(i){let e=MT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1);const w=t.from[0];w.allDescendants?a=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(N){const M=Hy(N);return M instanceof Gn&&Ay(M)?M.getFilters():[M]}(t.where));let h=[];t.orderBy&&(h=function(N){return N.map(M=>function(Q){return new wu(Ws(Q.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(M))}(t.orderBy));let m=null;t.limit&&(m=function(N){let M;return M=typeof N=="object"?N.value:N,Mu(M)?null:M}(t.limit));let y=null;t.startAt&&(y=function(N){const M=!!N.before,z=N.values||[];return new Eu(z,M)}(t.startAt));let _=null;return t.endAt&&(_=function(N){const M=!N.before,z=N.values||[];return new Eu(z,M)}(t.endAt)),sT(e,a,h,u,m,"F",y,_)}function zT(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hy(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ws(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ws(t.unaryFilter.field);return ft.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ws(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ws(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(i):i.fieldFilter!==void 0?function(t){return ft.create(Ws(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Gn.create(t.compositeFilter.filters.map(s=>Hy(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(i):Te()}function BT(i){return kT[i]}function $T(i){return NT[i]}function HT(i){return xT[i]}function qs(i){return{fieldPath:i.canonicalString()}}function Ws(i){return zt.fromServerFormat(i.fieldPath)}function qy(i){return i instanceof ft?function(t){if(t.op==="=="){if(Bm(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NAN"}};if(zm(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bm(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NAN"}};if(zm(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(t.field),op:$T(t.op),value:t.value}}}(i):i instanceof Gn?function(t){const s=t.getFilters().map(a=>qy(a));return s.length===1?s[0]:{compositeFilter:{op:HT(t.op),filters:s}}}(i):Te()}function Wy(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ti{constructor(e,t,s,a,u=_e.min(),h=_e.min(),m=Ct.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qT{constructor(e){this.ht=e}}function WT(i){const e=jT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Xh(e,e.limit,"L"):e}/**
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
 */class KT{constructor(){this.ln=new GT}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(ai.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class GT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new pt(Ze.comparator),u=!a.has(s);return this.index[t]=a.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new pt(Ze.comparator)).toArray()}}/**
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
 */const ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */class so{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new so(0)}static Qn(){return new so(-1)}}/**
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
 */function rg([i,e],[t,s]){const a=xe(i,t);return a===0?xe(e,s):a}class QT{constructor(e){this.Gn=e,this.buffer=new pt(rg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();rg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ho(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Lu(t)}await this.Yn(3e5)})}}class XT{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Vu.oe);const s=new QT(t);return this.Zn.forEachTarget(e,a=>s.Hn(a.sequenceNumber)).next(()=>this.Zn.er(e,a=>s.Hn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(ng)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ng):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,a,u,h,m,y,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(N=>(N>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${N}`),a=this.params.maximumSequenceNumbersToCollect):a=N,h=Date.now(),this.nthSequenceNumber(e,a))).next(N=>(s=N,m=Date.now(),this.removeTargets(e,s,t))).next(N=>(u=N,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(N=>(_=Date.now(),$s()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${N} documents in `+(_-y)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:u,documentsRemoved:N})))}}function JT(i,e){return new XT(i,e)}/**
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
 */class ZT{constructor(){this.changes=new Yi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class tI{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&va(s.mutation,a,ei.empty(),Xt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const a=Bi();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(u=>{let h=da();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Bi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const a=[];return s.forEach(u=>{t.has(u)||a.push(u)}),this.documentOverlayCache.getOverlays(e,a).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,a){let u=hi();const h=ya(),m=function(){return ya()}();return t.forEach((y,_)=>{const w=s.get(_.key);a.has(_.key)&&(w===void 0||w.mutation instanceof Bu)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),va(w.mutation,_,w.mutation.getFieldMask(),Xt.now())):h.set(_.key,ei.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var N;return m.set(_,new eI(w,(N=h.get(_))!==null&&N!==void 0?N:null))}),m))}recalculateAndSaveOverlays(e,t){const s=ya();let a=new it((h,m)=>h-m),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const _=t.get(y);if(_===null)return;let w=s.get(y)||ei.empty();w=m.applyToLocalView(_,w),s.set(y,w);const N=(a.get(m.batchId)||Le()).add(y);a=a.insert(m.batchId,N)})}).next(()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,w=y.value,N=Dy();w.forEach(M=>{if(!u.has(M)){const z=My(t.get(M),s.get(M));z!==null&&N.set(M,z),u=u.add(M)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,N))}return $.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(u=>{const h=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-u.size):$.resolve(Bi());let m=-1,y=u;return h.next(_=>$.forEach(_,(w,N)=>(m<N.largestBatchId&&(m=N.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next(M=>{y=y.insert(w,M)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,y,_,Le())).next(w=>({batchId:m,changes:hT(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let a=da();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const u=t.collectionGroup;let h=da();return this.indexManager.getCollectionParents(e,u).next(m=>$.forEach(m,y=>{const _=function(N,M){return new Fu(M,null,N.explicitOrderBy.slice(),N.filters.slice(),N.limit,N.limitType,N.startAt,N.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,a).next(w=>{w.forEach((N,M)=>{h=h.insert(N,M)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,a))).next(h=>{u.forEach((y,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Vt.newInvalidDocument(w)))});let m=da();return h.forEach((y,_)=>{const w=u.get(y);w!==void 0&&va(w.mutation,_,ei.empty(),Xt.now()),ju(t,_)&&(m=m.insert(y,_))}),m})}}/**
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
 */class nI{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Xs(a.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(a){return{name:a.name,query:WT(a.bundledQuery),readTime:Xs(a.readTime)}}(t)),$.resolve()}}/**
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
 */class rI{constructor(){this.overlays=new it(de.comparator),this.Er=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Bi();return $.forEach(t,a=>this.getOverlay(e,a).next(u=>{u!==null&&s.set(a,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,u)=>{this.Tt(e,t,u)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Er.get(s);return a!==void 0&&(a.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const a=Bi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&a.set(y.getKey(),y)}return $.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let u=new it((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=Bi(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=Bi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=a)););return $.resolve(m)}Tt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.Er.get(a.largestBatchId).delete(s.key);this.Er.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new ST(t,s));let u=this.Er.get(t);u===void 0&&(u=Le(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
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
 */class iI{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class Nd{constructor(){this.dr=new pt(Et.Ar),this.Rr=new pt(Et.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Et(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new de(new Ze([])),s=new Et(t,e),a=new Et(t,e+1),u=[];return this.Rr.forEachInRange([s,a],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new de(new Ze([])),s=new Et(t,e),a=new Et(t,e+1);let u=Le();return this.Rr.forEachInRange([s,a],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return de.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||de.comparator(e.key,t.key)}}/**
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
 */class sI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pt(Et.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new IT(u,t,s,a);this.mutationQueue.push(h);for(const m of a)this.vr=this.vr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Fr(s),u=a<0?0:a;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),a=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,a],h=>{const m=this.Cr(h.br);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(xe);return t.forEach(a=>{const u=new Et(a,0),h=new Et(a,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Et(new de(u),0);let m=new pt(xe);return this.vr.forEachWhile(y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===a&&(m=m.add(y.br)),!0)},h),$.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const a=this.Cr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Xe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(t.mutations,a=>{const u=new Et(a.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new Et(t,0),a=this.vr.firstAfterOrEqual(s);return $.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class oI{constructor(e){this.Nr=e,this.docs=function(){return new it(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),u=a?a.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Vt.newInvalidDocument(t))}getEntries(e,t){let s=hi();return t.forEach(a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():Vt.newInvalidDocument(a))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let u=hi();const h=t.path,m=new de(h.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:w}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||Fw(bw(w),s)<=0||(a.has(w.key)||ju(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,a){Te()}Lr(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new aI(this)}getSize(e){return $.resolve(this.size)}}class aI extends ZT{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.hr.addEntry(e,a)):this.hr.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class lI{constructor(e){this.persistence=e,this.Br=new Yi(t=>Sd(t),Ad),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new Nd,this.targetCount=0,this.Qr=so.qn()}forEachTarget(e,t){return this.Br.forEach((s,a)=>t(a)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new so(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let a=0;const u=[];return this.Br.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),$.waitFor(u).next(()=>a)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const a=this.persistence.referenceDelegate,u=[];return a&&t.forEach(h=>{u.push(a.markPotentiallyOrphaned(e,h))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
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
 */class Ky{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Vu(0),this.Ur=!1,this.Ur=!0,this.Wr=new iI,this.referenceDelegate=e(this),this.Gr=new lI(this),this.indexManager=new KT,this.remoteDocumentCache=function(a){return new oI(a)}(s=>this.referenceDelegate.zr(s)),this.serializer=new qT(t),this.jr=new nI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new sI(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const a=new uI(this.$r.next());return this.referenceDelegate.Hr(),s(a).next(u=>this.referenceDelegate.Jr(a).next(()=>u)).toPromise().then(u=>(a.raiseOnCommittedEvent(),u))}Yr(e,t){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class uI extends jw{constructor(e){super(),this.currentSequenceNumber=e}}class xd{constructor(e){this.persistence=e,this.Zr=new Nd,this.Xr=null}static ei(e){return new xd(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(a=>this.ti.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const a=de.fromPath(s);return this.ni(e,a).next(u=>{u||t.removeEntry(a,_e.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Su{constructor(e,t){this.persistence=e,this.ri=new Yi(s=>Bw(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=JT(this,t)}static ei(e,t){return new Su(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(s,a)=>this.ir(e,s,a).next(u=>u?$.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),u=a.newChangeBuffer();return a.Lr(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,_e.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uu(e.data.value)),t}ir(e,t,s){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.ri.get(t);return $.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Dd{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=a}static zi(e,t){let s=Le(),a=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new Dd(e,t.fromCache,s,a)}}/**
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
 */class cI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hI{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Q_()?8:zw(Mt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,a){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,a,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new cI;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,a){return s.documentReadCount<this.Ji?($s()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Hs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):($s()<=Ce.DEBUG&&ne("QueryEngine","Query:",Hs(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.Yi*a?($s()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Hs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(t))):$.resolve())}Xi(e,t){if(Wm(t))return $.resolve(null);let s=Wn(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Xh(t,null,"F"),s=Wn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const _=this.rs(t,m);return this.ss(t,_,h,y.readTime)?this.Xi(e,Xh(t,null,"F")):this.os(e,_,t,y)}))})))}es(e,t,s,a){return Wm(t)||a.isEqual(_e.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,a)?$.resolve(null):($s()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Hs(t)),this.os(e,h,t,Mw(a,-1)).next(m=>m))})}rs(e,t){let s=new pt(Ny(e));return t.forEach((a,u)=>{ju(e,u)&&(s=s.add(u))}),s}ss(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}ts(e,t,s){return $s()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Hs(t)),this.Zi.getDocumentsMatchingQuery(e,t,ai.min(),s)}os(e,t,s,a){return this.Zi.getDocumentsMatchingQuery(e,s,a).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */class dI{constructor(e,t,s,a){this.persistence=e,this._s=t,this.serializer=a,this.us=new it(xe),this.cs=new Yi(u=>Sd(u),Ad),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tI(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function fI(i,e,t,s){return new dI(i,e,t,s)}async function Gy(i,e){const t=De(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(u=>(a=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Le();for(const _ of a){h.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:m}))})})}function Qy(i){const e=De(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function pI(i,e){const t=De(i),s=e.snapshotVersion;let a=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});a=t.us;const m=[];e.targetChanges.forEach((w,N)=>{const M=a.get(N);if(!M)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,N).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,N)));let z=M.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(N)!==null?z=z.withResumeToken(Ct.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),a=a.insert(N,z),function(Y,W,we){return Y.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=3e8?!0:we.addedDocuments.size+we.modifiedDocuments.size+we.removedDocuments.size>0}(M,z,w)&&m.push(t.Gr.updateTargetData(u,z))});let y=hi(),_=Le();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(mI(u,h,e.documentUpdates).next(w=>{y=w.Is,_=w.Es})),!s.isEqual(_e.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(N=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return $.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,_)).next(()=>y)}).then(u=>(t.us=a,u))}function mI(i,e,t){let s=Le(),a=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=hi();return t.forEach((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(_e.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne("LocalStore","Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)}),{Is:h,Es:a}})}function gI(i,e){const t=De(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Gr.getTargetData(s,e).next(u=>u?(a=u,$.resolve(a)):t.Gr.allocateTargetId(s).next(h=>(a=new ti(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.us.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function nd(i,e,t){const s=De(i),a=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,a))}catch(h){if(!ho(h))throw h;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(a.target)}function ig(i,e,t){const s=De(i);let a=_e.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,_,w){const N=De(y),M=N.cs.get(w);return M!==void 0?$.resolve(N.us.get(M)):N.Gr.getTargetData(_,w)}(s,h,Wn(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?a:_e.min(),t?u:Le())).next(m=>(yI(s,lT(e),m),{documents:m,ds:u})))}function yI(i,e,t){let s=i.ls.get(e)||_e.min();t.forEach((a,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class sg{constructor(){this.activeTargetIds=pT()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vI{constructor(){this._o=new sg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new sg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _I{uo(e){}shutdown(){}}/**
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
 */class og{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ru=null;function Dh(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
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
 */const EI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wI{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Ot="WebChannelConnection";class TI extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${a}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${u}`}Oo(t,s,a,u,h){const m=Dh(),y=this.No(t,s.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${m}:`,y,a);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,u,h),this.Bo(t,y,_,a).then(w=>(ne("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw to("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",y,"request:",a),w})}ko(t,s,a,u,h,m){return this.Oo(t,s,a,u,h)}Lo(t,s,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),a&&a.headers.forEach((u,h)=>t[h]=u)}No(t,s){const a=EI[t];return`${this.Fo}/v1/${s}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,a){const u=Dh();return new Promise((h,m)=>{const y=new my;y.setWithCredentials(!0),y.listenOnce(gy.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case lu.NO_ERROR:const w=y.getResponseJson();ne(Ot,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case lu.TIMEOUT:ne(Ot,`RPC '${e}' ${u} timed out`),m(new he(Z.DEADLINE_EXCEEDED,"Request time out"));break;case lu.HTTP_ERROR:const N=y.getStatus();if(ne(Ot,`RPC '${e}' ${u} failed with status:`,N,"response text:",y.getResponseText()),N>0){let M=y.getResponseJson();Array.isArray(M)&&(M=M[0]);const z=M==null?void 0:M.error;if(z&&z.status&&z.message){const Q=function(W){const we=W.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(we)>=0?we:Z.UNKNOWN}(z.status);m(new he(Q,z.message))}else m(new he(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new he(Z.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ne(Ot,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(a);ne(Ot,`RPC '${e}' ${u} sending request:`,a),y.send(t,"POST",_,s,15)})}qo(e,t,s){const a=Dh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=_y(),m=vy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Lo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ne(Ot,`Creating RPC '${e}' stream ${a}: ${w}`,y);const N=h.createWebChannel(w,y);let M=!1,z=!1;const Q=new wI({Eo:W=>{z?ne(Ot,`Not sending because RPC '${e}' stream ${a} is closed:`,W):(M||(ne(Ot,`Opening RPC '${e}' stream ${a} transport.`),N.open(),M=!0),ne(Ot,`RPC '${e}' stream ${a} sending:`,W),N.send(W))},Ao:()=>N.close()}),Y=(W,we,ge)=>{W.listen(we,ye=>{try{ge(ye)}catch(fe){setTimeout(()=>{throw fe},0)}})};return Y(N,ha.EventType.OPEN,()=>{z||(ne(Ot,`RPC '${e}' stream ${a} transport opened.`),Q.So())}),Y(N,ha.EventType.CLOSE,()=>{z||(z=!0,ne(Ot,`RPC '${e}' stream ${a} transport closed`),Q.Do())}),Y(N,ha.EventType.ERROR,W=>{z||(z=!0,to(Ot,`RPC '${e}' stream ${a} transport errored:`,W),Q.Do(new he(Z.UNAVAILABLE,"The operation could not be completed")))}),Y(N,ha.EventType.MESSAGE,W=>{var we;if(!z){const ge=W.data[0];Xe(!!ge);const ye=ge,fe=(ye==null?void 0:ye.error)||((we=ye[0])===null||we===void 0?void 0:we.error);if(fe){ne(Ot,`RPC '${e}' stream ${a} received error:`,fe);const je=fe.status;let Ee=function(A){const P=at[A];if(P!==void 0)return Fy(P)}(je),R=fe.message;Ee===void 0&&(Ee=Z.INTERNAL,R="Unknown error status: "+je+" with message "+fe.message),z=!0,Q.Do(new he(Ee,R)),N.close()}else ne(Ot,`RPC '${e}' stream ${a} received:`,ge),Q.vo(ge)}}),Y(m,yy.STAT_EVENT,W=>{W.stat===qh.PROXY?ne(Ot,`RPC '${e}' stream ${a} detected buffering proxy`):W.stat===qh.NOPROXY&&ne(Ot,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{Q.bo()},0),Q}}function Oh(){return typeof document<"u"?document:null}/**
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
 */function Yy(i){return new DT(i,!0)}/**
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
 */class Xy{constructor(e,t,s=1e3,a=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=a,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),a=Math.max(0,t-s);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,a,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class II{constructor(e,t,s,a,u,h,m,y){this.li=e,this.Yo=s,this.Zo=a,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Xy(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(Tr(t.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.Xo===t&&this.I_(s,a)},s=>{e(()=>{const a=new he(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(a)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(a=>{s(()=>this.E_(a))}),this.stream.onMessage(a=>{s(()=>++this.n_==1?this.A_(a):this.onNext(a))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SI extends II{constructor(e,t,s,a,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=bT(this.serializer,e),s=function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?Xs(h.readTime):_e.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=tg(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=Yh(y)?{documents:FT(u,y)}:{query:UT(u,y).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=LT(u,h.resumeToken);const _=ed(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=OT(u,h.snapshotVersion.toTimestamp());const _=ed(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=zT(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=tg(this.serializer),t.removeTarget=e,this.c_(t)}}/**
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
 */class AI extends class{}{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.S_=!1}b_(){if(this.S_)throw new he(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,td(t,s),a,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(Z.UNKNOWN,u.toString())})}ko(e,t,s,a,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,td(t,s),a,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(Z.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class CI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Tr(t),this.C_=!1):ne("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class RI{constructor(e,t,s,a,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Va(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(y){const _=De(y);_.k_.add(4),await La(_),_.K_.set("Unknown"),_.k_.delete(4),await Hu(_)}(this))})}),this.K_=new CI(s,a)}}async function Hu(i){if(Va(i))for(const e of i.q_)await e(!0)}async function La(i){for(const e of i.q_)await e(!1)}function Jy(i,e){const t=De(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Md(t)?Vd(t):fo(t).s_()&&Ld(t,e))}function Od(i,e){const t=De(i),s=fo(t);t.B_.delete(e),s.s_()&&Zy(t,e),t.B_.size===0&&(s.s_()?s.a_():Va(t)&&t.K_.set("Unknown"))}function Ld(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fo(i).V_(e)}function Zy(i,e){i.U_.xe(e),fo(i).m_(e)}function Vd(i){i.U_=new PT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),fo(i).start(),i.K_.F_()}function Md(i){return Va(i)&&!fo(i).i_()&&i.B_.size>0}function Va(i){return De(i).k_.size===0}function ev(i){i.U_=void 0}async function PI(i){i.K_.set("Online")}async function kI(i){i.B_.forEach((e,t)=>{Ld(i,e)})}async function NI(i,e){ev(i),Md(i)?(i.K_.O_(e),Vd(i)):i.K_.set("Unknown")}async function xI(i,e,t){if(i.K_.set("Online"),e instanceof jy&&e.state===2&&e.cause)try{await async function(a,u){const h=u.cause;for(const m of u.targetIds)a.B_.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.B_.delete(m),a.U_.removeTarget(m))}(i,e)}catch(s){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ag(i,s)}else if(e instanceof hu?i.U_.$e(e):e instanceof Uy?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(_e.min()))try{const s=await Qy(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.B_.get(_);w&&u.B_.set(_,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,_)=>{const w=u.B_.get(y);if(!w)return;u.B_.set(y,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),Zy(u,y);const N=new ti(w.target,y,_,w.sequenceNumber);Ld(u,N)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ne("RemoteStore","Failed to raise snapshot:",s),await ag(i,s)}}async function ag(i,e,t){if(!ho(e))throw e;i.k_.add(1),await La(i),i.K_.set("Offline"),t||(t=()=>Qy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await Hu(i)})}async function lg(i,e){const t=De(i);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const s=Va(t);t.k_.add(3),await La(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Hu(t)}async function DI(i,e){const t=De(i);e?(t.k_.delete(2),await Hu(t)):e||(t.k_.add(2),await La(t),t.K_.set("Unknown"))}function fo(i){return i.W_||(i.W_=function(t,s,a){const u=De(t);return u.b_(),new SI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)}(i.datastore,i.asyncQueue,{Ro:PI.bind(null,i),mo:kI.bind(null,i),po:NI.bind(null,i),R_:xI.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),Md(i)?Vd(i):i.K_.set("Unknown")):(await i.W_.stop(),ev(i))})),i.W_}/**
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
 */class bd{constructor(e,t,s,a,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new Hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,u){const h=Date.now()+s,m=new bd(e,t,h,a,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tv(i,e){if(Tr("AsyncQueue",`${e}: ${i}`),ho(i))return new he(Z.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Js{static emptySet(e){return new Js(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=da(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(!a.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Js;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ug{constructor(){this.z_=new it(de.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class oo{constructor(e,t,s,a,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,a,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new oo(e,t,Js.emptySet(t),h,s,a,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class OI{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class LI{constructor(){this.queries=cg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const a=De(t),u=a.queries;a.queries=cg(),u.forEach((h,m)=>{for(const y of m.J_)y.onError(s)})})(this,new he(Z.ABORTED,"Firestore shutting down"))}}function cg(){return new Yi(i=>ky(i),Uu)}async function VI(i,e){const t=De(i);let s=3;const a=e.query;let u=t.queries.get(a);u?!u.Y_()&&e.Z_()&&(s=2):(u=new OI,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(a,!0);break;case 1:u.H_=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=tv(h,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&Fd(t)}async function MI(i,e){const t=De(i),s=e.query;let a=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?a=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function bI(i,e){const t=De(i);let s=!1;for(const a of e){const u=a.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(a)&&(s=!0);h.H_=a}}s&&Fd(t)}function FI(i,e,t){const s=De(i),a=s.queries.get(e);if(a)for(const u of a.J_)u.onError(t);s.queries.delete(e)}function Fd(i){i.X_.forEach(e=>{e.next()})}var rd,hg;(hg=rd||(rd={})).na="default",hg.Cache="cache";class UI{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==rd.Cache}}/**
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
 */class nv{constructor(e){this.key=e}}class rv{constructor(e){this.key=e}}class jI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Le(),this.mutatedKeys=Le(),this.Va=Ny(e),this.ma=new Js(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new ug,a=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,_=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((w,N)=>{const M=a.get(w),z=ju(this.query,N)?N:null,Q=!!M&&this.mutatedKeys.has(M.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let W=!1;M&&z?M.data.isEqual(z.data)?Q!==Y&&(s.track({type:3,doc:z}),W=!0):this.ya(M,z)||(s.track({type:2,doc:z}),W=!0,(y&&this.Va(z,y)>0||_&&this.Va(z,_)<0)&&(m=!0)):!M&&z?(s.track({type:0,doc:z}),W=!0):M&&!z&&(s.track({type:1,doc:M}),W=!0,(y||_)&&(m=!0)),W&&(z?(h=h.add(z),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,N)=>function(z,Q){const Y=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return Y(z)-Y(Q)}(w.type,N.type)||this.Va(w.doc,N.doc)),this.wa(s),a=a!=null&&a;const m=t&&!a?this.Sa():[],y=this.Ra.size===0&&this.current&&!a?1:0,_=y!==this.Aa;return this.Aa=y,h.length!==0||_?{snapshot:new oo(this.query,e.ma,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ug,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Le(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new rv(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new nv(s))}),t}va(e){this.da=e.ds,this.Ra=Le();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return oo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class zI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class BI{constructor(e){this.key=e,this.Fa=!1}}class $I{constructor(e,t,s,a,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Yi(m=>ky(m),Uu),this.Oa=new Map,this.Na=new Set,this.La=new it(de.comparator),this.Ba=new Map,this.ka=new Nd,this.qa={},this.Qa=new Map,this.Ka=so.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function HI(i,e,t=!0){const s=lv(i);let a;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),a=u.view.Ca()):a=await iv(s,e,t,!0),a}async function qI(i,e){const t=lv(i);await iv(t,e,!0,!1)}async function iv(i,e,t,s){const a=await gI(i.localStore,Wn(e)),u=a.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await WI(i,e,u,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&Jy(i.remoteStore,a),m}async function WI(i,e,t,s,a){i.Ua=(N,M,z)=>async function(Y,W,we,ge){let ye=W.view.ga(we);ye.ss&&(ye=await ig(Y.localStore,W.query,!1).then(({documents:R})=>W.view.ga(R,ye)));const fe=ge&&ge.targetChanges.get(W.targetId),je=ge&&ge.targetMismatches.get(W.targetId)!=null,Ee=W.view.applyChanges(ye,Y.isPrimaryClient,fe,je);return fg(Y,W.targetId,Ee.ba),Ee.snapshot}(i,N,M,z);const u=await ig(i.localStore,e,!0),h=new jI(e,u.ds),m=h.ga(u.documents),y=Oa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),_=h.applyChanges(m,i.isPrimaryClient,y);fg(i,t,_.ba);const w=new zI(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),_.snapshot}async function KI(i,e,t){const s=De(i),a=s.xa.get(e),u=s.Oa.get(a.targetId);if(u.length>1)return s.Oa.set(a.targetId,u.filter(h=>!Uu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await nd(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Od(s.remoteStore,a.targetId),id(s,a.targetId)}).catch(Lu)):(id(s,a.targetId),await nd(s.localStore,a.targetId,!0))}async function GI(i,e){const t=De(i),s=t.xa.get(e),a=t.Oa.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Od(t.remoteStore,s.targetId))}async function sv(i,e){const t=De(i);try{const s=await pI(t.localStore,e);e.targetChanges.forEach((a,u)=>{const h=t.Ba.get(u);h&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?h.Fa=!0:a.modifiedDocuments.size>0?Xe(h.Fa):a.removedDocuments.size>0&&(Xe(h.Fa),h.Fa=!1))}),await av(t,s,e)}catch(s){await Lu(s)}}function dg(i,e,t){const s=De(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&a.push(m.snapshot)}),function(h,m){const y=De(h);y.onlineState=m;let _=!1;y.queries.forEach((w,N)=>{for(const M of N.J_)M.ea(m)&&(_=!0)}),_&&Fd(y)}(s.eventManager,e),a.length&&s.Ma.R_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function QI(i,e,t){const s=De(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Ba.get(e),u=a&&a.key;if(u){let h=new it(de.comparator);h=h.insert(u,Vt.newNoDocument(u,_e.min()));const m=Le().add(u),y=new $u(_e.min(),new Map,new it(xe),h,m);await sv(s,y),s.La=s.La.remove(u),s.Ba.delete(e),Ud(s)}else await nd(s.localStore,e,!1).then(()=>id(s,e,t)).catch(Lu)}function id(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||ov(i,s)})}function ov(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Od(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),Ud(i))}function fg(i,e,t){for(const s of t)s instanceof nv?(i.ka.addReference(s.key,e),YI(i,s)):s instanceof rv?(ne("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||ov(i,s.key)):Te()}function YI(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(ne("SyncEngine","New document in limbo: "+t),i.Na.add(s),Ud(i))}function Ud(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new de(Ze.fromString(e)),s=i.Ka.next();i.Ba.set(s,new BI(t)),i.La=i.La.insert(t,s),Jy(i.remoteStore,new ti(Wn(Cd(t.path)),s,"TargetPurposeLimboResolution",Vu.oe))}}async function av(i,e,t){const s=De(i),a=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,y)=>{h.push(s.Ua(y,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const N=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,N?"current":"not-current")}if(_){a.push(_);const N=Dd.zi(y.targetId,_);u.push(N)}}))}),await Promise.all(h),s.Ma.R_(a),await async function(y,_){const w=De(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",N=>$.forEach(_,M=>$.forEach(M.Wi,z=>w.persistence.referenceDelegate.addReference(N,M.targetId,z)).next(()=>$.forEach(M.Gi,z=>w.persistence.referenceDelegate.removeReference(N,M.targetId,z)))))}catch(N){if(!ho(N))throw N;ne("LocalStore","Failed to update sequence numbers: "+N)}for(const N of _){const M=N.targetId;if(!N.fromCache){const z=w.us.get(M),Q=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(Q);w.us=w.us.insert(M,Y)}}}(s.localStore,u))}async function XI(i,e){const t=De(i);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const s=await Gy(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(y=>{y.reject(new he(Z.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await av(t,s.Ts)}}function JI(i,e){const t=De(i),s=t.Ba.get(e);if(s&&s.Fa)return Le().add(s.key);{let a=Le();const u=t.Oa.get(e);if(!u)return a;for(const h of u){const m=t.xa.get(h);a=a.unionWith(m.view.fa)}return a}}function lv(i){const e=De(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QI.bind(null,e),e.Ma.R_=bI.bind(null,e.eventManager),e.Ma.Wa=FI.bind(null,e.eventManager),e}class Au{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yy(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return fI(this.persistence,new hI,e.initialUser,this.serializer)}ja(e){return new Ky(xd.ei,this.serializer)}za(e){return new vI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Au.provider={build:()=>new Au};class ZI extends Au{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Xe(this.persistence.referenceDelegate instanceof Su);const s=this.persistence.referenceDelegate.garbageCollector;return new YT(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Ky(s=>Su.ei(s,t),this.serializer)}}class sd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>dg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XI.bind(null,this.syncEngine),await DI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LI}()}createDatastore(e){const t=Yy(e.databaseInfo.databaseId),s=function(u){return new TI(u)}(e.databaseInfo);return function(u,h,m,y){return new AI(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,u,h,m){return new RI(s,a,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>dg(this.syncEngine,t,0),function(){return og.p()?new og:new _I}())}createSyncEngine(e,t){return function(a,u,h,m,y,_,w){const N=new $I(a,u,h,m,y,_);return w&&(N.$a=!0),N}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const u=De(a);ne("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await La(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sd.provider={build:()=>new sd};/**
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
 */class eS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class tS{constructor(e,t,s,a,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Lt.UNAUTHENTICATED,this.clientId=wy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=tv(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Lh(i,e){i.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Gy(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function pg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await nS(i);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>lg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>lg(e.remoteStore,a)),i._onlineComponents=e}async function nS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Z.FAILED_PRECONDITION||a.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;to("Error using user provided cache. Falling back to memory cache: "+t),await Lh(i,new Au)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Lh(i,new ZI(void 0));return i._offlineComponents}async function rS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await pg(i,i._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await pg(i,new sd))),i._onlineComponents}async function iS(i){const e=await rS(i),t=e.eventManager;return t.onListen=HI.bind(null,e.syncEngine),t.onUnlisten=KI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=GI.bind(null,e.syncEngine),t}function sS(i,e,t={}){const s=new Hi;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,_){const w=new eS({next:M=>{w.eu(),h.enqueueAndForget(()=>MI(u,N));const z=M.docs.has(m);!z&&M.fromCache?_.reject(new he(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&M.fromCache&&y&&y.source==="server"?_.reject(new he(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(M)},error:M=>_.reject(M)}),N=new UI(Cd(m.path),w,{includeMetadataChanges:!0,ua:!0});return VI(u,N)}(await iS(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function uv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const mg=new Map;/**
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
 */function oS(i,e,t){if(!t)throw new he(Z.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function aS(i,e,t,s){if(e===!0&&s===!0)throw new he(Z.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function gg(i){if(!de.isDocumentKey(i))throw new he(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function lS(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te()}function od(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lS(i);throw new he(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */class yg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new he(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new he(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new he(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Rw;switch(s.type){case"firstParty":return new xw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=mg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),mg.delete(t),s.terminate())}(this),Promise.resolve()}}function uS(i,e,t,s={}){var a;const u=(i=od(i,jd))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Lt.MOCK_USER;else{m=B_(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new he(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Lt(_)}i._authCredentials=new Pw(new Ey(m,y))}}/**
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
 */class zd{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zd(this.firestore,e,this._query)}}class _r{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ca(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _r(this.firestore,e,this._key)}}class Ca extends zd{constructor(e,t,s){super(e,t,Cd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _r(this.firestore,null,new de(e))}withConverter(e){return new Ca(this.firestore,e,this._path)}}function cS(i,e,...t){if(i=Qn(i),arguments.length===1&&(e=wy.newId()),oS("doc","path",e),i instanceof jd){const s=Ze.fromString(e,...t);return gg(s),new _r(i,null,new de(s))}{if(!(i instanceof _r||i instanceof Ca))throw new he(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ze.fromString(e,...t));return gg(s),new _r(i.firestore,i instanceof Ca?i.converter:null,new de(s))}}/**
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
 */class vg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Xy(this,"async_queue_retry"),this.fu=()=>{const s=Oh();s&&ne("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Oh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Oh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Hi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ho(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const a=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Tr("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const a=bd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(a),a}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class cv extends jd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new vg,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vg(e),this._firestoreClient=void 0,await e}}}function hS(i,e){const t=typeof i=="object"?i:xg(),s=typeof i=="string"?i:"(default)",a=hd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=j_("firestore");u&&uS(a,...u)}return a}function dS(i){if(i._terminated)throw new he(Z.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||fS(i),i._firestoreClient}function fS(i){var e,t,s;const a=i._freezeSettings(),u=function(m,y,_,w){return new Ww(m,y,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,uv(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new tS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
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
 */class Cu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cu(Ct.fromBase64String(e))}catch(t){throw new he(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cu(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class mS{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0}(this._values,e._values)}}const gS=new RegExp("[~\\*/\\[\\]]");function yS(i,e,t){if(e.search(gS)>=0)throw _g(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new hv(...e.split("."))._internalPath}catch{throw _g(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function _g(i,e,t,s,a){let u=`Function ${e}() called with invalid data`;u+=". ";let h="";return new he(Z.INVALID_ARGUMENT,u+i+h)}/**
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
 */class dv{constructor(e,t,s,a,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _r(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vS extends dv{data(){return super.data()}}function fv(i,e){return typeof e=="string"?yS(i,e):e instanceof hv?e._internalPath:e._delegate._internalPath}class _S{convertValue(e,t="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Da(e,(a,u)=>{s[a]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,a;const u=(a=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(h=>rt(h.doubleValue));return new mS(u)}convertGeoPoint(e){return new pS(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=bu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ia(e));default:return null}}convertTimestamp(e){const t=li(e);return new Xt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ze.fromString(e);Xe(Wy(s));const a=new Sa(s.get(1),s.get(3)),u=new de(s.popFirst(5));return a.isEqual(t)||Tr(`Document ${u} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class ES{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pv extends dv{constructor(e,t,s,a,u,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(fv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class wS extends pv{data(e={}){return super.data(e)}}/**
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
 */function TS(i){i=od(i,_r);const e=od(i.firestore,cv);return sS(dS(e),i._key).then(t=>SS(e,i,t))}class IS extends _S{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _r(this.firestore,null,t)}}function SS(i,e,t){const s=t.docs.get(e._key),a=new IS(i);return new pv(i,a,e._key,s,new ES(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){co=a})(ao),Zs(new Wi("firestore",(s,{instanceIdentifier:a,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new cv(new kw(s.getProvider("auth-internal")),new Ow(s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new he(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sa(_.options.projectId,w)}(h,a),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),si(Vm,"4.7.5",e),si(Vm,"4.7.5","esm2017")})();const AS={apiKey:"AIzaSyBqn9spXCzvJIRaiIX-8N4MNPQaalBXSWE",authDomain:"seller-tool-d63f6.firebaseapp.com",projectId:"seller-tool-d63f6",storageBucket:"seller-tool-d63f6.appspot.com",messagingSenderId:"197601742841",appId:"1:197601742841:web:aaa898dda1e4855c4c3728",measurementId:"G-LBWTB8XYM9"},mv=Ng(AS),Vh=Aw(mv),CS=hS(mv),gv=ve.createContext(null),RS=({children:i})=>{const[e,t]=ve.useState(null),[s,a]=ve.useState({}),[u,h]=ve.useState({}),[m,y]=ve.useState(!0);ve.useEffect(()=>f1(Vh,async z=>{if(t(z),z)try{const Q=cS(CS,"userPreferences",z.uid),Y=await TS(Q);if(Y.exists()){const W=Y.data();a(W.toggles||{}),h(W.settings||{})}}catch(Q){console.error("Error fetching user preferences:",Q)}else a({}),h({});y(!1)}),[]),ve.useEffect(()=>{console.log("Updated state of toggles and settings ")},[s,u]);const N={currentUser:e,toggles:s,settings:u,login:async(M,z)=>{await c1(Vh,M,z)},logout:()=>p1(Vh)};return F.jsx(gv.Provider,{value:N,children:!m&&i})},qu=()=>{const i=ve.useContext(gv);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i};var yv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Eg=ni.createContext&&ni.createContext(yv),PS=["attr","size","title"];function kS(i,e){if(i==null)return{};var t=NS(i,e),s,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(a=0;a<u.length;a++)s=u[a],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(t[s]=i[s])}return t}function NS(i,e){if(i==null)return{};var t={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;t[s]=i[s]}return t}function Ru(){return Ru=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},Ru.apply(this,arguments)}function wg(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,s)}return t}function Pu(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wg(Object(t),!0).forEach(function(s){xS(i,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):wg(Object(t)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(t,s))})}return i}function xS(i,e,t){return e=DS(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function DS(i){var e=OS(i,"string");return typeof e=="symbol"?e:e+""}function OS(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var s=t.call(i,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function vv(i){return i&&i.map((e,t)=>ni.createElement(e.tag,Pu({key:t},e.attr),vv(e.child)))}function Yn(i){return e=>ni.createElement(LS,Ru({attr:Pu({},i.attr)},e),vv(i.child))}function LS(i){var e=t=>{var{attr:s,size:a,title:u}=i,h=kS(i,PS),m=a||t.size||"1em",y;return t.className&&(y=t.className),i.className&&(y=(y?y+" ":"")+i.className),ni.createElement("svg",Ru({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,h,{className:y,style:Pu(Pu({color:i.color||t.color},t.style),i.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&ni.createElement("title",null,u),i.children)};return Eg!==void 0?ni.createElement(Eg.Consumer,null,t=>e(t)):e(yv)}function VS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(i)}function MS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(i)}function bS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}const FS=()=>{const[i,e]=ve.useState(""),[t,s]=ve.useState(""),[a,u]=ve.useState(!1),[h,m]=ve.useState(""),{login:y}=qu(),_=async w=>{w.preventDefault();try{m(""),await y(i,t)}catch(N){m("Invalid email or password"+N)}};return F.jsxs("div",{className:"login-container",children:[F.jsx("h2",{className:"login-title",children:"Login"}),F.jsxs("form",{onSubmit:_,className:"login-form",children:[F.jsxs("div",{className:"form-group",children:[F.jsx("label",{children:"Email"}),F.jsxs("div",{className:"input-wrapper",children:[F.jsx("input",{type:"email",value:i,onChange:w=>e(w.target.value),required:!0}),F.jsx(bS,{className:"input-icon"})]})]}),F.jsxs("div",{className:"form-group",children:[F.jsx("label",{children:"Password"}),F.jsxs("div",{className:"input-wrapper",children:[F.jsx("input",{type:a?"text":"password",value:t,onChange:w=>s(w.target.value),required:!0}),F.jsx("div",{className:"password-toggle",onClick:()=>u(!a),children:a?F.jsx(VS,{}):F.jsx(MS,{})})]})]}),h&&F.jsx("div",{className:"error-message",children:h}),F.jsx("button",{type:"submit",className:"login-button",children:"Login"}),F.jsxs("div",{className:"help-text",children:["Dont have an account?",F.jsx("a",{href:"https://amazon-seller-tool.vercel.app/signup?source=extension",target:"_blank",rel:"noopener noreferrer",children:"Create an account"})]})]})]})},US=({activeTab:i,onTabChange:e})=>{const t=[{id:"info-section",label:"Info"},{id:"rank-price-section",label:"Rank & Price"},{id:"chart-section",label:"Chart"},{id:"calculator-section",label:"Calculator"}],s=a=>{e(a);const u=document.getElementById(a);u&&u.scrollIntoView({behavior:"smooth"})};return F.jsx("nav",{className:"tab-navigation",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"3px"},children:t.map(a=>F.jsx("a",{href:`#${a.id}`,className:`tab-button ${i===a.id?"active":""}`,onClick:u=>{u.preventDefault(),s(a.id)},children:a.label},a.id))})},_v=()=>{var y,_,w,N,M,z,Q;const i=((_=(y=document.querySelector('span.a-price span[aria-hidden="true"]'))==null?void 0:y.textContent)==null?void 0:_.trim())||"",e=((w=document.querySelector("#landingImage"))==null?void 0:w.src)||"",t=document.getElementById("sellerProfileTriggerId")?"FBM":"FBA";let s=null;const a=document.querySelector("#merchant-info");a&&(s=((N=a.textContent)==null?void 0:N.trim())||null);let u=(M=document.getElementById("ASIN"))==null?void 0:M.getAttribute("value");if(!u){const Y=window.location.pathname.match(/\/dp\/([A-Z0-9]{10})/);u=Y?Y[1]:null}let h="";const m=document.querySelectorAll("tr");for(const Y of m){const W=Y.querySelector("th");if(W&&((z=W.textContent)!=null&&z.includes("Best Sellers Rank"))){const ge=(((Q=Y.querySelector("td"))==null?void 0:Q.textContent)||"").match(/#([0-9,]+)\s+in\s+([^(]+)/);ge&&(h=`#${ge[1]} in ${ge[2]}`);break}}return{asin:u,price:i,mainImage:e,fulfillmentType:t,buyboxSeller:s,bsr:h}},jS="2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban",zS=async i=>{try{const e=await fetch(`https://api.keepa.com/product?key=${jS}&domain=1&asin=${i}`);if(!e.ok)throw new Error(`Keepa API responded with status: ${e.status}`);const t=await e.json();return t.products&&t.products.length>0?t.products[0]:null}catch(e){return console.error("Error fetching Keepa data:",e),null}};function BS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"},child:[]}]})(i)}function $S(i){return Yn({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(i)}function HS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(i)}function qS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(i)}function WS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(i)}const KS=({onFbaFeeChange:i,onCostChange:e})=>{var _,w;const[t,s]=ve.useState(null),[a,u]=ve.useState(null),[h,m]=ve.useState(0);ve.useEffect(()=>{(async()=>{const M=_v();if(s(M),M.price){const z=parseFloat(M.price.replace("$",""));e(z)}if(M.asin){const z=await zS(M.asin);if(u(z),z){const Q=parseFloat(String(z.fbaFees.pickAndPackFee))/100;m(Q),i(Q)}}})()},[i,e]);const y=N=>{if(!(t!=null&&t.asin)||!(a!=null&&a.title))return;const M=N==="google"?`https://www.google.com/search?q=${a.title}`:`https://www.amazon.com/dp/${t.asin}`;window.open(M,"_blank")};return F.jsx("div",{id:"product-insights",children:F.jsxs("main",{children:[F.jsxs("section",{className:"product-basic",children:[F.jsx("div",{className:"box",children:F.jsx("img",{id:"sidebar-image",height:"150",src:t==null?void 0:t.mainImage,alt:""})}),F.jsx("div",{className:"box",children:F.jsx("p",{id:"sidebar-title",style:{textAlign:"center",fontWeight:"bold"},children:a!=null&&a.title&&a.title.length>80?a.title.slice(0,80)+"......":(a==null?void 0:a.title)||"Loading..."})}),F.jsx("div",{className:"box",children:F.jsx("p",{children:F.jsx("span",{id:"sidebar-asin",children:(t==null?void 0:t.asin)||"Loading..."})})}),F.jsx("div",{className:"box",children:F.jsx("p",{children:F.jsx("span",{id:"sidebar-price",children:(t==null?void 0:t.price)||"Loading..."})})}),F.jsxs("div",{className:"icons-container",children:[F.jsx("div",{className:"icon",children:F.jsx("div",{className:"icon-circle",onClick:()=>y("google"),children:F.jsx($S,{size:20})})}),F.jsx("div",{className:"icon",children:F.jsx("div",{className:"icon-circle",onClick:()=>y("amazon"),children:F.jsx(BS,{size:20})})}),F.jsx("div",{className:"icon",children:F.jsx("div",{className:"icon-circle",children:F.jsx(HS,{size:20})})}),F.jsx("div",{className:"icon",children:F.jsx("div",{className:"icon-circle",children:F.jsx(qS,{size:20})})})]})]}),F.jsxs("div",{className:"info-section",id:"info-section",children:[F.jsx("div",{className:"table-header1",children:"Info"}),F.jsxs("div",{className:"info-grid",children:[F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"Eligible"}),F.jsx("div",{className:"item-value",id:"sidebar-fulfillment",children:(t==null?void 0:t.fulfillmentType)||"Not available"})]}),F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"FBA fee"}),F.jsx("div",{className:"item-value",id:"sidebar-fba",children:h?`$${h.toFixed(2)}`:"Not available"})]}),F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"Category"}),F.jsx("div",{className:"item-value",id:"sidebar-category",children:((w=(_=a==null?void 0:a.categoryTree)==null?void 0:_[0])==null?void 0:w.name)||"Not available"})]}),F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"Brand"}),F.jsx("div",{className:"item-value",id:"sidebar-brand",children:(a==null?void 0:a.brand)||"Not available"})]}),F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"Model"}),F.jsx("div",{className:"item-value",id:"sidebar-model",children:(a==null?void 0:a.model)||"Not available"})]}),F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"BSR"}),F.jsx("div",{className:"item-value",style:{color:"red"},id:"sidebar-bsr",children:(t==null?void 0:t.bsr)||"Unknown"})]}),F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"Variations"}),F.jsx("div",{className:"item-value",style:{color:"blue"},id:"sidebar-variations",children:a!=null&&a.variations?`This listing has ${a.variations.length} variations`:"Not available"})]}),F.jsxs("div",{className:"info-item",children:[F.jsx("div",{className:"item-label",children:"Monthly Sales"}),F.jsx("div",{className:"item-value",style:{color:"blue"},id:"sidebar-sold",children:a!=null&&a.monthlySold?`${a.monthlySold} +`:"Not available"})]})]})]})]})})},GS=({fbaFee:i=0,cost:e=0})=>{const{settings:t}=qu(),[s,a]=ve.useState("0"),[u,h]=ve.useState(e.toFixed(2)),[m,y]=ve.useState("0"),[_,w]=ve.useState("0%"),[N,M]=ve.useState("#00cc00"),[z,Q]=ve.useState("#00cc00"),[Y,W]=ve.useState(0),[we,ge]=ve.useState(0),ye=()=>{const fe=parseFloat(s),Ee=parseFloat(u)-(fe+i+Y+we),R=fe>0?`${(Ee/fe*100).toFixed(2)}`:"%";y(Ee.toFixed(2)),w(R),M(Ee>=t.minProfit?"#00cc00":"#ff4444"),Q(R>=t.minROI?"#00cc00":"#ff4444")};return ve.useEffect(()=>{W(t.miscFee),ge(t.prepFee)},[t]),ve.useEffect(()=>{h(e.toFixed(2))},[e]),ve.useEffect(()=>{ye()},[s,u,i,Y,we]),F.jsxs("div",{className:"calculator-section",children:[F.jsx("div",{className:"table-header5",children:"Calculator"}),F.jsxs("div",{className:"calculator-grid",children:[F.jsxs("div",{className:"calc-field",children:[F.jsx("label",{children:"Cost Price"}),F.jsxs("div",{className:"input-wrapper",children:[F.jsx("span",{className:"currency",children:"$"}),F.jsx("input",{type:"text",value:s,className:"calc-input",onChange:fe=>a(fe.target.value),placeholder:"0"})]})]}),F.jsxs("div",{className:"calc-field",children:[F.jsx("label",{children:"Sale Price"}),F.jsxs("div",{className:"input-wrapper",children:[F.jsx("span",{className:"currency",children:"$"}),F.jsx("input",{type:"text",value:u,className:"calc-input",onChange:fe=>h(fe.target.value),placeholder:"0"})]})]}),F.jsxs("div",{className:"calc-field",children:[F.jsx("label",{children:"Profit"}),F.jsxs("div",{className:"input-wrapper",children:[F.jsx("span",{className:"currency",children:"$"}),F.jsx("input",{type:"text",value:m,className:"calc-input",readOnly:!0,style:{color:N}})]})]}),F.jsxs("div",{className:"calc-field",children:[F.jsx("label",{children:"ROI"}),F.jsxs("div",{className:"input-wrapper",children:[F.jsx("span",{className:"currency",children:"%"}),F.jsx("input",{type:"text",value:_,className:"calc-input",readOnly:!0,style:{color:z}})]})]})]})]})};function QS(){const[i,e]=ve.useState(null),{settings:t,toggles:s}=qu(),[a,u]=ve.useState(1),[h,m]=ve.useState({showSalesChart:!1,showPricesChart:!1,showBBChart:!1});ve.useEffect(()=>{(async()=>{const N=_v();e(N)})()},[]),ve.useEffect(()=>{u(t.chartsTimeSpan),m({showSalesChart:s.showSalesChart,showPricesChart:s.showPricesChart,showBBChart:s.showBBChart})},[t,s]);const _=`https://api.keepa.com/graphimage?key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&asin=${i==null?void 0:i.asin}&domain=1&range=${a}&width=350&height=250`;return F.jsxs("div",{className:"chart-table",children:[F.jsx("div",{className:"table-header4",children:"Chart"}),F.jsxs("div",{className:"chart-content",children:[h.showPricesChart&&F.jsxs("div",{className:"chart-image",children:[F.jsx("h1",{children:"Price History"}),F.jsx("img",{id:"keepa-chart",width:"350",height:"200",src:`${_}&used=1`,alt:"Price History Chart"}),F.jsx("div",{className:"logo"})]}),h.showSalesChart&&F.jsxs("div",{className:"chart-image",children:[F.jsx("h1",{children:"Sales Rank History"}),F.jsx("img",{id:"keepa-chart",width:"350",height:"200",src:`${_}&new=0&amazon=0&salesrank=1`,alt:"Sales History Chart"}),F.jsx("div",{className:"logo"})]}),h.showBBChart&&F.jsxs("div",{className:"chart-image",children:[F.jsx("h1",{children:"Buy Box History"}),F.jsx("img",{id:"keepa-chart",width:"350",height:"200",src:`${_}&new=0&amazon=0&bb=1`,alt:"BB History Chart"}),F.jsx("div",{className:"logo"})]})]})]})}function YS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16zm299.31-11.31-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z"},child:[]}]})(i)}function XS(i){return Yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"48"},child:[]},{tag:"path",attr:{d:"m470.39 300-.47-.38-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56-5.57 39.67a16 16 0 0 1-8.13 11.82 175.21 175.21 0 0 0-10 5.82 15.92 15.92 0 0 1-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22 26.86 26.86 0 0 0 32.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56 5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0 0 32.48-11.34 2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67z"},child:[]}]})(i)}const JS=()=>{const[i,e]=ve.useState("product-insights"),[t,s]=ve.useState("info-section"),{currentUser:a,logout:u,toggles:h,settings:m}=qu(),[y,_]=ve.useState(!1),[w,N]=ve.useState(0),[M,z]=ve.useState(0);console.log("Updated state of toggles:",h),console.log("Updated state of settings:",m);const Q=async()=>{try{_(!0),await u()}catch(R){console.error("Failed to log out",R)}finally{_(!1)}},Y=()=>{const R=document.getElementById("amazon-seller-sidebar-root");R&&(R.style.display="none")},W=ve.useRef(null),we=ve.useRef(null),ge=ve.useRef(null),ye=ve.useRef(null),fe=R=>{s(R);const A={"info-section":W,"rank-price-section":we,"chart-section":ge,"calculator-section":ye}[R];A!=null&&A.current&&A.current.scrollIntoView({behavior:"smooth",block:"start"})},je=ve.useMemo(()=>F.jsxs("div",{className:"product-insights-content",style:{display:i==="product-insights"?"block":"none",height:"calc(100vh - 100px)"},children:[F.jsx(US,{activeTab:t,onTabChange:fe}),F.jsx("div",{ref:W,id:"info-section",className:"section",children:F.jsx(KS,{onFbaFeeChange:N,onCostChange:z})}),F.jsx("div",{ref:ge,id:"chart-section",className:"section",children:F.jsx(QS,{})}),F.jsxs("div",{ref:we,id:"rank-price-section",className:"section",children:[F.jsx("div",{className:"table-header2",children:"Rank & Price"}),F.jsx("div",{className:"rank-price-content",style:{height:"200px",background:"blue",marginTop:"10px"}})]}),F.jsx("div",{ref:ye,id:"calculator-section",className:"section",children:F.jsx(GS,{fbaFee:w,cost:M})})]}),[t,i,M,w]),Ee=ve.useMemo(()=>F.jsxs("div",{id:"seller-insights",style:{height:"calc(100vh - 100px)",background:"pink",marginTop:"10px",display:i==="seller-insights"?"block":"none",overflowY:"auto"},children:[F.jsx("h2",{children:"Seller Insights"}),F.jsx("p",{children:"Seller analytics and data will be displayed here."})]}),[i]);return F.jsx("div",{className:"sidebar-content",children:y?F.jsx("div",{children:"Loading..."}):a?F.jsxs("div",{className:"box",children:[F.jsx("header",{className:"header",children:F.jsxs("div",{className:"dd",children:[F.jsx("button",{id:"close-button",onClick:Y,children:"✕"}),F.jsx("div",{className:"header-icons",children:a&&F.jsx(F.Fragment,{children:F.jsxs("div",{className:"box",style:{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center"},children:[F.jsxs("div",{className:"parent-container1",style:{position:"relative"},children:[F.jsx("div",{className:"logoutmodal",children:"Logout"}),F.jsx(YS,{size:24,color:"white",cursor:"pointer",onClick:Q})]}),F.jsxs("div",{className:"parent-container2",style:{position:"relative"},children:[F.jsx("div",{className:"settingsmodal",children:"Settings "}),F.jsx(XS,{size:22,color:"white",cursor:"pointer",onClick:()=>{window.open("https://amazon-seller-tool.vercel.app/settings/","_blank")}})]}),F.jsxs("div",{className:"user-menu",children:[F.jsx(WS,{size:20,color:"white"}),F.jsxs("div",{className:"dropdown-content",children:[F.jsxs("p",{children:["Name: ",a==null?void 0:a.displayName]}),F.jsxs("p",{children:["Email: ",a==null?void 0:a.email]})]})]})]})})})]})}),F.jsxs("div",{className:"nav-buttons",children:[F.jsx("button",{className:`nav-btn ${i==="product-insights"?"active":""}`,onClick:()=>e("product-insights"),children:"Product Insights"}),F.jsx("button",{className:`nav-btn ${i==="seller-insights"?"active":""}`,onClick:()=>e("seller-insights"),children:"Seller Insights"})]}),je,Ee]}):F.jsx(FS,{})})},ad=()=>{let i=document.getElementById("amazon-seller-sidebar-root");if(!i){i=document.createElement("div"),i.id="amazon-seller-sidebar-root",document.body.appendChild(i);const e=i.attachShadow({mode:"open"}),t=document.createElement("div");t.id="react-root",e.appendChild(t);const s=document.createElement("link");s.rel="stylesheet",s.href=chrome.runtime.getURL("assets/sidebar.css"),e.appendChild(s),D_.createRoot(t).render(F.jsx(ni.StrictMode,{children:F.jsx(RS,{children:F.jsx(JS,{})})}))}},Mh=document.getElementById("close-button");Mh==null||Mh.addEventListener("click",()=>{const i=document.getElementById("amazon-seller-sidebar-root");i&&(i.style.display="none")});chrome.runtime.onMessage.addListener(i=>{if(i.action==="toggleSidebar"){const e=document.getElementById("amazon-seller-sidebar-root");e?e.style.display=e.style.display==="none"?"block":"none":ad()}});window.location.pathname.includes("/dp/")&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ad):ad());

/*! For license information please see main.ba8687a6.chunk.js.LICENSE.txt */
(this["webpackJsonprhcv-example"]=this["webpackJsonprhcv-example"]||[]).push([[0],{24:function(e,t,r){e.exports=r(440)},25:function(e,t,r){},439:function(e,t,r){},440:function(e,t,r){"use strict";r.r(t);r(25);var n=r(0),o=r.n(n),a=r(12),l=r.n(a),i=r(21),s=r(13),c=r(14),u=r(2),p=r(23),f=r(22),m=r(15),y=r.n(m),b=r(443),h=r(16),d=r(5),g=r(4),v=r(444);function O(e,t){return e(t={exports:{}},t.exports),t.exports}var w="function"===typeof Symbol&&Symbol.for,_=w?Symbol.for("react.element"):60103,j=w?Symbol.for("react.portal"):60106,E=w?Symbol.for("react.fragment"):60107,S=w?Symbol.for("react.strict_mode"):60108,x=w?Symbol.for("react.profiler"):60114,C=w?Symbol.for("react.provider"):60109,k=w?Symbol.for("react.context"):60110,P=w?Symbol.for("react.async_mode"):60111,T=w?Symbol.for("react.concurrent_mode"):60111,N=w?Symbol.for("react.forward_ref"):60112,$=w?Symbol.for("react.suspense"):60113,I=w?Symbol.for("react.suspense_list"):60120,z=w?Symbol.for("react.memo"):60115,A=w?Symbol.for("react.lazy"):60116,R=w?Symbol.for("react.block"):60121,H=w?Symbol.for("react.fundamental"):60117,M=w?Symbol.for("react.responder"):60118,V=w?Symbol.for("react.scope"):60119;function L(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case _:switch(e=e.type){case P:case T:case E:case x:case S:case $:return e;default:switch(e=e&&e.$$typeof){case k:case N:case A:case z:case C:return e;default:return t}}case j:return t}}}function B(e){return L(e)===T}var F={AsyncMode:P,ConcurrentMode:T,ContextConsumer:k,ContextProvider:C,Element:_,ForwardRef:N,Fragment:E,Lazy:A,Memo:z,Portal:j,Profiler:x,StrictMode:S,Suspense:$,isAsyncMode:function(e){return B(e)||L(e)===P},isConcurrentMode:B,isContextConsumer:function(e){return L(e)===k},isContextProvider:function(e){return L(e)===C},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===_},isForwardRef:function(e){return L(e)===N},isFragment:function(e){return L(e)===E},isLazy:function(e){return L(e)===A},isMemo:function(e){return L(e)===z},isPortal:function(e){return L(e)===j},isProfiler:function(e){return L(e)===x},isStrictMode:function(e){return L(e)===S},isSuspense:function(e){return L(e)===$},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===E||e===T||e===x||e===S||e===$||e===I||"object"===typeof e&&null!==e&&(e.$$typeof===A||e.$$typeof===z||e.$$typeof===C||e.$$typeof===k||e.$$typeof===N||e.$$typeof===H||e.$$typeof===M||e.$$typeof===V||e.$$typeof===R)},typeOf:L},W=(O((function(e,t){0})),O((function(e){e.exports=F})),Object.getOwnPropertySymbols),D=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;function U(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var G="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function J(e,t,r,n,o){}J.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function K(){}function Y(){}Y.resetWarningCache=K;var Q=O((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==G){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Y,resetWarningCache:K};return r.PropTypes=r,r}()}));function X(e){return(X="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function re(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ne(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function oe(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function ae(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=oe(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var le=!1;try{le=!0}catch(we){}function ie(e){return null===e?null:"object"===X(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function se(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}function ce(e){var t=e.forwardedRef,r=re(e,["forwardedRef"]),n=r.icon,o=r.mask,a=r.symbol,l=r.className,i=r.title,s=ie(n),c=se("classes",[].concat(ne(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,a=e.inverse,l=e.border,i=e.listItem,s=e.flip,c=e.size,u=e.rotation,p=e.pull,f=(Z(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(c),"undefined"!==typeof c&&null!==c),Z(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),Z(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),Z(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(r)),ne(l.split(" ")))),u=se("transform","string"===typeof r.transform?d.b.transform(r.transform):r.transform),p=se("mask",ie(o)),f=Object(d.a)(s,te({},c,{},u,{},p,{symbol:a,title:i}));if(!f)return function(){var e;!le&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var m=f.abstract,y={ref:t};return Object.keys(r).forEach((function(e){ce.defaultProps.hasOwnProperty(e)||(y[e]=r[e])})),ue(m[0],y)}ce.displayName="FontAwesomeIcon",ce.propTypes={border:Q.bool,className:Q.string,mask:Q.oneOfType([Q.object,Q.array,Q.string]),fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf(["horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),size:Q.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool},ce.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var ue=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=ae(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[oe(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,s=re(n,["style"]);return a.attrs.style=te({},a.attrs.style,{},i),t.apply(void 0,[r.tag,te({},a.attrs,{},s)].concat(ne(o)))}.bind(null,o.a.createElement),pe={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]},fe={prefix:"far",iconName:"window-maximize",icon:[512,512,[],"f2d0","M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"]},me={htmlViewer:"_styles-module__htmlViewer__2c7eY",content:"_styles-module__content__2jwZj",togglerContainer:"_styles-module__togglerContainer__EKI9R",title:"_styles-module__title__2KezC",toggler:"_styles-module__toggler__2_oI1",label:"_styles-module__label__3sXmF",whiteToGray:"_styles-module__whiteToGray__1NGsQ",none:"_styles-module__none__1utM2",contentContainer:"_styles-module__contentContainer__19tr9",grayToBlue:"_styles-module__grayToBlue__26l3t"},ye=function(e){Object(p.a)(r,e);var t=Object(f.a)(r);function r(e){var n;if(Object(s.a)(this,r),(n=t.call(this,e)).labels={html:"html",raw:"raw",copy:"copy",copied:"copied",column:o.a.createElement(ce,{icon:g.b}),square:o.a.createElement(ce,{icon:fe})},n.props.labels)for(var a in n.props.labels)n.labels[a]=n.props.labels[a];return n.highlighterId=Object(v.a)(),n.onChange=n.props.onChange?n.props.onChange:function(){},n.style=n.props.highlighter?n.props.highlighter:h.agate,n.id=e.id?e.id:Object(v.a)(),n.str=y()(e.children).replace(/{' '}/g,""),n.props.active||(n.props.active=n.labels.html),"html"===e.language&&(n.str=n.str.replace(/className/g,"class")),n.raw=o.a.createElement(b.a,{id:n.highlighterId,wrapLines:!0,showLineNumbers:!0,wrapLongLines:!0,language:"htmlbars",style:n.style},n.str),n.html=e.children,n.state={content:null,label:n.props.active,copyLabel:n.labels.copy,split:!!n.props.split,splitIcon:n.props.split?n.labels.square:n.labels.column,copyIcon:o.a.createElement(ce,{icon:pe})},n.html=o.a.createElement("div",{key:1,className:me.content},n.html),n.raw=o.a.createElement("div",{key:2,className:me.content},n.raw),n.displayHtml=n.displayHtml.bind(Object(u.a)(n)),n.displayRaw=n.displayRaw.bind(Object(u.a)(n)),n.toggle=n.toggle.bind(Object(u.a)(n)),n.copyToClipBoard=n.copyToClipBoard.bind(Object(u.a)(n)),n}return Object(c.a)(r,[{key:"toggle",value:function(){this.state.label===this.labels.raw?(this.displayRaw(),this.setState({label:this.labels.html})):this.state.label===this.labels.html&&(this.displayHtml(),this.setState({label:this.labels.raw}))}},{key:"displayHtml",value:function(){this.onChange(this.state.label),this.setState({content:this.state.split?[this.html,this.raw]:this.html})}},{key:"displayRaw",value:function(){this.onChange(this.state.label),this.setState({content:this.state.split?[this.raw,this.html]:this.raw})}},{key:"componentDidMount",value:function(){this.toggle()}},{key:"copyToClipBoard",value:function(e){var t=this;this.setState({copyIcon:o.a.createElement(ce,{icon:g.a})}),navigator.clipboard.writeText(this.str).then((function(){setTimeout((function(){t.setState({copyIcon:o.a.createElement(ce,{icon:pe})})}),500)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:[me.htmlViewer,me.overflowHidden].join(" "),id:this.id},o.a.createElement("div",{className:me.togglerContainer,id:this.id+"-togglerContainer"},this.props.title?o.a.createElement("div",{className:me.title},this.props.title):null,o.a.createElement("div",{className:me.toggler,id:this.id+"-toggler"},o.a.createElement("button",{id:"split",onClick:function(){var t=!e.state.split,r=t?e.labels.square:e.labels.column;e.setState({split:t,splitIcon:r},(function(){e.state.label===e.labels.html?e.displayRaw():e.displayHtml()}))},className:this.state.split?[me.label,me.active].join(" "):me.label},this.state.splitIcon),o.a.createElement("button",{id:"toggle",onClick:this.toggle,className:me.label},o.a.createElement(ce,{icon:g.c})),o.a.createElement("button",{className:this.state.copying?[me.label,me.copying].join(" "):me.label,onClick:this.copyToClipBoard},this.state.copyIcon))),o.a.createElement("div",{className:me.contentContainer},this.state.content))}}]),r}(o.a.Component),be=r(6),he=[],de=0;for(var ge in be)he.push(o.a.createElement("option",{key:de,value:ge},ge)),de++;function ve(e){return o.a.createElement(ye,{id:"htmlViewer",key:e,highlighter:be[e],active:"raw",split:!0,title:"This is an example of how it works",onChange:function(e){}},o.a.createElement("div",{id:"htmlExample"},o.a.createElement("div",null,"This is an example text"),o.a.createElement("div",null,"click on ",o.a.createElement("strong",null,"the frame")," to change the view"),o.a.createElement("div",null,"click on ",o.a.createElement("strong",null,"the arrows")," to split the view"),o.a.createElement("div",null,"click on ",o.a.createElement("strong",null,"the copy logo")," to save code in the clipboard"),o.a.createElement("div",null,"you can resize me, i am responsive :)")))}var Oe=function(){var e=Object(n.useState)(ve("darcula")),t=Object(i.a)(e,2),r=t[0],a=t[1];return o.a.createElement("div",{className:"example"},o.a.createElement("div",{className:"container"},o.a.createElement("select",{className:"select",onChange:function(e){a(ve(e.currentTarget.value))}},o.a.createElement("option",null,"-- pick a highlighter style --"),he)),o.a.createElement("div",null,r))};r(439);l.a.render(o.a.createElement(Oe,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ba8687a6.chunk.js.map
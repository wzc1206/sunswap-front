(this["webpackJsonpswap-front"]=this["webpackJsonpswap-front"]||[]).push([[1],{1417:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(7),a=n(0),o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},c=a.createContext(null),i=function(e){var t=e.children,n=o(e,["children"]),i=a.useContext(c),l=a.useMemo((function(){return Object(r.a)(Object(r.a)({},i),n)}),[i,n.prefixCls,n.mode,n.selectable]);return a.createElement(c.Provider,{value:l},t)};t.b=c},1428:function(e,t,n){"use strict";var r=n(65),a=n(66),o=n(207),c=n(206),i=n(154),l=n(76),u=n(7),s=n(1464),f=n(31),d=n.n(f),p=n(1436),v=n(121),b=n(197),m=n(0),O=n(136),y=n(1463),j=n(120),h=n(102),C=n(34),g=n(1),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=function(e){var t=e.prefixCls,n=e.className,r=e.dashed,a=E(e,["prefixCls","className","dashed"]),o=(0,m.useContext(O.b).getPrefixCls)("menu",t),c=d()(Object(g.a)({},"".concat(o,"-item-divider-dashed"),!!r),n);return m.createElement(p.a,Object(u.a)({className:c},a))},I=n(199),M=n(303),N=Object(m.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},w=function(e){function t(){var e,n,a,l;return Object(r.a)(this,t),n=this,a=t,l=arguments,a=Object(i.a)(a),(e=Object(o.a)(n,Object(c.a)()?Reflect.construct(a,l||[],Object(i.a)(n).constructor):a.apply(n,l))).renderItem=function(t){var n,r=t.siderCollapsed,a=e.context,o=a.prefixCls,c=a.firstLevel,i=a.inlineCollapsed,l=a.direction,s=a.disableMenuItemTitleTooltip,f=e.props,v=f.className,b=f.children,O=e.props,y=O.title,j=O.icon,C=O.danger,E=P(O,["title","icon","danger"]),x=y;"undefined"===typeof y?x=c?b:"":!1===y&&(x="");var N={title:x};r||i||(N.title=null,N.open=!1);var w=Object(I.a)(b).length,k=m.createElement(p.b,Object(u.a)({},E,{className:d()(Object(g.a)(Object(g.a)({},"".concat(o,"-item-danger"),C),"".concat(o,"-item-only-child"),1===(j?w+1:w)),v),title:"string"===typeof y?y:void 0}),Object(h.a)(j,{className:d()(Object(h.c)(j)?null===(n=j.props)||void 0===n?void 0:n.className:"","".concat(o,"-item-icon"))}),e.renderItemChildren(i));return s||(k=m.createElement(M.a,Object(u.a)({},N,{placement:"rtl"===l?"left":"right",overlayClassName:"".concat(o,"-inline-collapsed-tooltip")}),k)),k},e}return Object(l.a)(t,e),Object(a.a)(t,[{key:"renderItemChildren",value:function(e){var t=this.context,n=t.prefixCls,r=t.firstLevel,a=this.props,o=a.icon,c=a.children,i=m.createElement("span",{className:"".concat(n,"-title-content")},c);return(!o||Object(h.c)(c)&&"span"===c.type)&&c&&e&&r&&"string"===typeof c?m.createElement("div",{className:"".concat(n,"-inline-collapsed-noicon")},c.charAt(0)):i}},{key:"render",value:function(){return m.createElement(y.a.Consumer,null,this.renderItem)}}]),t}(m.Component);w.contextType=N;var k=function(e){var t,n,r=e.popupClassName,a=e.icon,o=e.title,c=e.theme,i=m.useContext(N),l=i.prefixCls,s=i.inlineCollapsed,f=i.antdMenuTheme,v=Object(p.h)();if(a){var O=Object(h.c)(o)&&"span"===o.type;n=m.createElement(m.Fragment,null,Object(h.a)(a,{className:d()(Object(h.c)(a)?null===(t=a.props)||void 0===t?void 0:t.className:"","".concat(l,"-item-icon"))}),O?o:m.createElement("span",{className:"".concat(l,"-title-content")},o))}else n=s&&!v.length&&o&&"string"===typeof o?m.createElement("div",{className:"".concat(l,"-inline-collapsed-noicon")},o.charAt(0)):m.createElement("span",{className:"".concat(l,"-title-content")},o);var y=m.useMemo((function(){return Object(u.a)(Object(u.a)({},i),{firstLevel:!1})}),[i]);return m.createElement(N.Provider,{value:y},m.createElement(p.f,Object(u.a)({},Object(b.a)(e,["icon"]),{title:n,popupClassName:d()(l,"".concat(l,"-").concat(c||f),r)})))},S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function K(e){return(e||[]).map((function(e,t){if(e&&"object"===Object(C.a)(e)){var n=e,r=n.label,a=n.children,o=n.key,c=n.type,i=S(n,["label","children","key","type"]),l=null!==o&&void 0!==o?o:"tmp-".concat(t);return a||"group"===c?"group"===c?m.createElement(p.c,Object(u.a)({key:l},i,{title:r}),K(a)):m.createElement(k,Object(u.a)({key:l},i,{title:r}),K(a)):"divider"===c?m.createElement(x,Object(u.a)({key:l},i)):m.createElement(w,Object(u.a)({key:l},i),r)}return null})).filter((function(e){return e}))}function R(e){return m.useMemo((function(){return e?K(e):e}),[e])}var T=n(1417);var A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},D=Object(m.forwardRef)((function(e,t){var n,r=m.useContext(T.b)||{},a=m.useContext(O.b),o=a.getPrefixCls,c=a.getPopupContainer,i=a.direction,l=o(),f=e.prefixCls,y=e.className,C=e.theme,g=void 0===C?"light":C,E=e.expandIcon,x=e._internalDisableMenuItemTitleTooltip,I=e.inlineCollapsed,M=e.siderCollapsed,P=e.items,w=e.children,k=e.mode,S=e.selectable,K=e.onClick,D=A(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable","onClick"]),L=Object(b.a)(D,["collapsedWidth"]),_=R(P)||w;null===(n=r.validator)||void 0===n||n.call(r,{mode:k});var z,V=Object(v.a)((function(){var e;null===K||void 0===K||K.apply(void 0,arguments),null===(e=null===r||void 0===r?void 0:r.onClick)||void 0===e||e.call(r)})),F=r.mode||k,q=null!==S&&void 0!==S?S:r.selectable,H=m.useMemo((function(){return void 0!==M?M:I}),[I,M]),W={horizontal:{motionName:"".concat(l,"-slide-up")},inline:j.a,other:{motionName:"".concat(l,"-zoom-big")}},G=o("menu",f||r.prefixCls),B=d()("".concat(G,"-").concat(g),y);z="function"===typeof E?E:Object(h.a)(E||r.expandIcon,{className:"".concat(G,"-submenu-expand-icon")});var J=m.useMemo((function(){return{prefixCls:G,inlineCollapsed:H||!1,antdMenuTheme:g,direction:i,firstLevel:!0,disableMenuItemTitleTooltip:x}}),[G,H,g,i,x]);return m.createElement(T.b.Provider,{value:null},m.createElement(N.Provider,{value:J},m.createElement(p.g,Object(u.a)({getPopupContainer:c,overflowedIndicator:m.createElement(s.a,null),overflowedIndicatorPopupClassName:"".concat(G,"-").concat(g),mode:F,selectable:q,onClick:V},L,{inlineCollapsed:H,className:B,prefixCls:G,direction:i,defaultMotions:W,expandIcon:z,ref:t}),_)))})),L=function(e){function t(){var e,n,a,l;return Object(r.a)(this,t),n=this,a=t,l=arguments,a=Object(i.a)(a),(e=Object(o.a)(n,Object(c.a)()?Reflect.construct(a,l||[],Object(i.a)(n).constructor):a.apply(n,l))).focus=function(t){var n;null===(n=e.menu)||void 0===n||n.focus(t)},e}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return m.createElement(y.a.Consumer,null,(function(t){return m.createElement(D,Object(u.a)({ref:function(t){e.menu=t}},e.props,t))}))}}]),t}(m.Component);L.Divider=x,L.Item=w,L.SubMenu=k,L.ItemGroup=p.c;t.a=L},1436:function(e,t,n){"use strict";n.d(t,"f",(function(){return ze})),n.d(t,"b",(function(){return me})),n.d(t,"d",(function(){return me})),n.d(t,"e",(function(){return Be})),n.d(t,"c",(function(){return Be})),n.d(t,"a",(function(){return Je})),n.d(t,"h",(function(){return P}));var r=n(7),a=n(1),o=n(5),c=n(28),i=n(15),l=n(55),u=n(31),s=n.n(u),f=n(1462),d=n(198),p=n(56),v=n(0),b=n(53),m=n(220),O=v.createContext(null);function y(e,t){return void 0===e?null:"".concat(e,"-").concat(t)}function j(e){return y(v.useContext(O),e)}var h=n(218),C=["children","locked"],g=v.createContext(null);function E(e){var t=e.children,n=e.locked,r=Object(l.a)(e,C),a=v.useContext(g),c=Object(h.a)((function(){return function(e,t){var n=Object(o.a)({},e);return Object.keys(t).forEach((function(e){var r=t[e];void 0!==r&&(n[e]=r)})),n}(a,r)}),[a,r],(function(e,t){return!n&&(e[0]!==t[0]||!Object(m.a)(e[1],t[1],!0))}));return v.createElement(g.Provider,{value:c},t)}var x=[],I=v.createContext(null);function M(){return v.useContext(I)}var N=v.createContext(x);function P(e){var t=v.useContext(N);return v.useMemo((function(){return void 0!==e?[].concat(Object(c.a)(t),[e]):t}),[t,e])}var w=v.createContext(null),k=v.createContext({}),S=n(254),K=n(73),R=n(1487),T=S.a.LEFT,A=S.a.RIGHT,D=S.a.UP,L=S.a.DOWN,_=S.a.ENTER,z=S.a.ESC,V=S.a.HOME,F=S.a.END,q=[D,L,T,A];function H(e,t){return Object(R.a)(e,!0).filter((function(e){return t.has(e)}))}function W(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var a=H(e,t),o=a.length,c=a.findIndex((function(e){return n===e}));return r<0?-1===c?c=o-1:c-=1:r>0&&(c+=1),a[c=(c+o)%o]}function G(e,t,n,r,o,c,i,l,u,s){var f=v.useRef(),d=v.useRef();d.current=t;var p=function(){K.a.cancel(f.current)};return v.useEffect((function(){return function(){p()}}),[]),function(v){var b=v.which;if([].concat(q,[_,z,V,F]).includes(b)){var m,O,j,h=function(){return m=new Set,O=new Map,j=new Map,c().forEach((function(e){var t=document.querySelector("[data-menu-id='".concat(y(r,e),"']"));t&&(m.add(t),j.set(t,e),O.set(e,t))})),m};h();var C=function(e,t){for(var n=e||document.activeElement;n;){if(t.has(n))return n;n=n.parentElement}return null}(O.get(t),m),g=j.get(C),E=function(e,t,n,r){var o,c,i,l,u="prev",s="next",f="children",d="parent";if("inline"===e&&r===_)return{inlineTrigger:!0};var p=(o={},Object(a.a)(o,D,u),Object(a.a)(o,L,s),o),v=(c={},Object(a.a)(c,T,n?s:u),Object(a.a)(c,A,n?u:s),Object(a.a)(c,L,f),Object(a.a)(c,_,f),c),b=(i={},Object(a.a)(i,D,u),Object(a.a)(i,L,s),Object(a.a)(i,_,f),Object(a.a)(i,z,d),Object(a.a)(i,T,n?f:d),Object(a.a)(i,A,n?d:f),i);switch(null===(l={inline:p,horizontal:v,vertical:b,inlineSub:p,horizontalSub:b,verticalSub:b}["".concat(e).concat(t?"":"Sub")])||void 0===l?void 0:l[r]){case u:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(e,1===i(g,!0).length,n,b);if(!E&&b!==V&&b!==F)return;(q.includes(b)||[V,F].includes(b))&&v.preventDefault();var x=function(e){if(e){var t=e,n=e.querySelector("a");null!==n&&void 0!==n&&n.getAttribute("href")&&(t=n);var r=j.get(e);l(r),p(),f.current=Object(K.a)((function(){d.current===r&&t.focus()}))}};if([V,F].includes(b)||E.sibling||!C){var I,M,N=H(I=C&&"inline"!==e?function(e){for(var t=e;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}(C):o.current,m);M=b===V?N[0]:b===F?N[N.length-1]:W(I,m,C,E.offset),x(M)}else if(E.inlineTrigger)u(g);else if(E.offset>0)u(g,!0),p(),f.current=Object(K.a)((function(){h();var e=C.getAttribute("aria-controls"),t=W(document.getElementById(e),m);x(t)}),5);else if(E.offset<0){var P=i(g,!0),w=P[P.length-2],k=O.get(w);u(w,!1),x(k)}}null===s||void 0===s||s(v)}}var B="__RC_UTIL_PATH_SPLIT__",J=function(e){return e.join(B)},U="rc-menu-more";function X(){var e=v.useState({}),t=Object(i.a)(e,2)[1],n=Object(v.useRef)(new Map),r=Object(v.useRef)(new Map),a=v.useState([]),o=Object(i.a)(a,2),l=o[0],u=o[1],s=Object(v.useRef)(0),f=Object(v.useRef)(!1),d=Object(v.useCallback)((function(e,a){var o=J(a);r.current.set(o,e),n.current.set(e,o),s.current+=1;var c,i=s.current;c=function(){i===s.current&&(f.current||t({}))},Promise.resolve().then(c)}),[]),p=Object(v.useCallback)((function(e,t){var a=J(t);r.current.delete(a),n.current.delete(e)}),[]),b=Object(v.useCallback)((function(e){u(e)}),[]),m=Object(v.useCallback)((function(e,t){var r=n.current.get(e)||"",a=r.split(B);return t&&l.includes(a[0])&&a.unshift(U),a}),[l]),O=Object(v.useCallback)((function(e,t){return e.some((function(e){return m(e,!0).includes(t)}))}),[m]),y=Object(v.useCallback)((function(e){var t="".concat(n.current.get(e)).concat(B),a=new Set;return Object(c.a)(r.current.keys()).forEach((function(e){e.startsWith(t)&&a.add(r.current.get(e))})),a}),[]);return v.useEffect((function(){return function(){f.current=!0}}),[]),{registerPath:d,unregisterPath:p,refreshOverflowKeys:b,isSubPathKey:O,getKeyPath:m,getKeys:function(){var e=Object(c.a)(n.current.keys());return l.length&&e.push(U),e},getSubPathKeys:y}}function Y(e){var t=v.useRef(e);t.current=e;var n=v.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[]);return e?n:void 0}var Q=Math.random().toFixed(5).toString().slice(2),Z=0;var $=n(65),ee=n(66),te=n(76),ne=n(89),re=n(197),ae=n(67);function oe(e,t,n,r){var a=v.useContext(g),o=a.activeKey,c=a.onActive,i=a.onInactive,l={active:o===e};return t||(l.onMouseEnter=function(t){null===n||void 0===n||n({key:e,domEvent:t}),c(e)},l.onMouseLeave=function(t){null===r||void 0===r||r({key:e,domEvent:t}),i(e)}),l}function ce(e){var t=v.useContext(g),n=t.mode,r=t.rtl,a=t.inlineIndent;if("inline"!==n)return null;return r?{paddingRight:e*a}:{paddingLeft:e*a}}function ie(e){var t=e.icon,n=e.props,r=e.children;return("function"===typeof t?v.createElement(t,Object(o.a)({},n)):t)||r||null}var le=["item"];function ue(e){var t=e.item,n=Object(l.a)(e,le);return Object.defineProperty(n,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),t}}),n}var se=["title","attribute","elementRef"],fe=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],de=["active"],pe=function(e){Object(te.a)(n,e);var t=Object(ne.a)(n);function n(){return Object($.a)(this,n),t.apply(this,arguments)}return Object(ee.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.attribute,a=e.elementRef,o=Object(l.a)(e,se),c=Object(re.a)(o,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Object(p.a)(!n,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),v.createElement(f.a.Item,Object(r.a)({},n,{title:"string"===typeof t?t:void 0},c,{ref:a}))}}]),n}(v.Component),ve=v.forwardRef((function(e,t){var n,i=e.style,u=e.className,f=e.eventKey,d=(e.warnKey,e.disabled),p=e.itemIcon,b=e.children,m=e.role,O=e.onMouseEnter,y=e.onMouseLeave,h=e.onClick,C=e.onKeyDown,E=e.onFocus,x=Object(l.a)(e,fe),I=j(f),M=v.useContext(g),N=M.prefixCls,w=M.onItemClick,K=M.disabled,R=M.overflowDisabled,T=M.itemIcon,A=M.selectedKeys,D=M.onActive,L=v.useContext(k)._internalRenderMenuItem,_="".concat(N,"-item"),z=v.useRef(),V=v.useRef(),F=K||d,q=Object(ae.d)(t,V),H=P(f);var W=function(e){return{key:f,keyPath:Object(c.a)(H).reverse(),item:z.current,domEvent:e}},G=p||T,B=oe(f,F,O,y),J=B.active,U=Object(l.a)(B,de),X=A.includes(f),Y=ce(H.length),Q={};"option"===e.role&&(Q["aria-selected"]=X);var Z=v.createElement(pe,Object(r.a)({ref:z,elementRef:q,role:null===m?"none":m||"menuitem",tabIndex:d?null:-1,"data-menu-id":R&&I?null:I},x,U,Q,{component:"li","aria-disabled":d,style:Object(o.a)(Object(o.a)({},Y),i),className:s()(_,(n={},Object(a.a)(n,"".concat(_,"-active"),J),Object(a.a)(n,"".concat(_,"-selected"),X),Object(a.a)(n,"".concat(_,"-disabled"),F),n),u),onClick:function(e){if(!F){var t=W(e);null===h||void 0===h||h(ue(t)),w(t)}},onKeyDown:function(e){if(null===C||void 0===C||C(e),e.which===S.a.ENTER){var t=W(e);null===h||void 0===h||h(ue(t)),w(t)}},onFocus:function(e){D(f),null===E||void 0===E||E(e)}}),b,v.createElement(ie,{props:Object(o.a)(Object(o.a)({},e),{},{isSelected:X}),icon:G}));return L&&(Z=L(Z,e,{selected:X})),Z}));function be(e,t){var n=e.eventKey,a=M(),o=P(n);return v.useEffect((function(){if(a)return a.registerPath(n,o),function(){a.unregisterPath(n,o)}}),[o]),a?null:v.createElement(ve,Object(r.a)({},e,{ref:t}))}var me=v.forwardRef(be),Oe=["className","children"],ye=function(e,t){var n=e.className,a=e.children,o=Object(l.a)(e,Oe),c=v.useContext(g),i=c.prefixCls,u=c.mode,f=c.rtl;return v.createElement("ul",Object(r.a)({className:s()(i,f&&"".concat(i,"-rtl"),"".concat(i,"-sub"),"".concat(i,"-").concat("inline"===u?"inline":"vertical"),n),role:"menu"},o,{"data-menu-list":!0,ref:t}),a)},je=v.forwardRef(ye);je.displayName="SubMenuList";var he=je,Ce=n(34),ge=n(199),Ee=["label","children","key","type"];function xe(e,t){return Object(ge.a)(e).map((function(e,n){if(v.isValidElement(e)){var r,a,o=e.key,i=null!==(r=null===(a=e.props)||void 0===a?void 0:a.eventKey)&&void 0!==r?r:o;(null===i||void 0===i)&&(i="tmp_key-".concat([].concat(Object(c.a)(t),[n]).join("-")));var l={key:i,eventKey:i};return v.cloneElement(e,l)}return e}))}function Ie(e){return(e||[]).map((function(e,t){if(e&&"object"===Object(Ce.a)(e)){var n=e,a=n.label,o=n.children,c=n.key,i=n.type,u=Object(l.a)(n,Ee),s=null!==c&&void 0!==c?c:"tmp-".concat(t);return o||"group"===i?"group"===i?v.createElement(Be,Object(r.a)({key:s},u,{title:a}),Ie(o)):v.createElement(ze,Object(r.a)({key:s},u,{title:a}),Ie(o)):"divider"===i?v.createElement(Je,Object(r.a)({key:s},u)):v.createElement(me,Object(r.a)({key:s},u),a)}return null})).filter((function(e){return e}))}function Me(e,t,n){var r=e;return t&&(r=Ie(t)),xe(r,n)}var Ne=n(311),Pe={adjustX:1,adjustY:1},we={topLeft:{points:["bl","tl"],overflow:Pe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Pe,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Pe,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Pe,offset:[4,0]}},ke={topLeft:{points:["bl","tl"],overflow:Pe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Pe,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Pe,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Pe,offset:[4,0]}};function Se(e,t,n){return t||(n?n[e]||n.other:void 0)}var Ke={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Re(e){var t=e.prefixCls,n=e.visible,r=e.children,c=e.popup,l=e.popupClassName,u=e.popupOffset,f=e.disabled,d=e.mode,p=e.onVisibleChange,b=v.useContext(g),m=b.getPopupContainer,O=b.rtl,y=b.subMenuOpenDelay,j=b.subMenuCloseDelay,h=b.builtinPlacements,C=b.triggerSubMenuAction,E=b.forceSubMenuRender,x=b.rootClassName,I=b.motion,M=b.defaultMotions,N=v.useState(!1),P=Object(i.a)(N,2),w=P[0],k=P[1],S=O?Object(o.a)(Object(o.a)({},ke),h):Object(o.a)(Object(o.a)({},we),h),R=Ke[d],T=Se(d,I,M),A=v.useRef(T);"inline"!==d&&(A.current=T);var D=Object(o.a)(Object(o.a)({},A.current),{},{leavedClassName:"".concat(t,"-hidden"),removeOnLeave:!1,motionAppear:!0}),L=v.useRef();return v.useEffect((function(){return L.current=Object(K.a)((function(){k(n)})),function(){K.a.cancel(L.current)}}),[n]),v.createElement(Ne.a,{prefixCls:t,popupClassName:s()("".concat(t,"-popup"),Object(a.a)({},"".concat(t,"-rtl"),O),l,x),stretch:"horizontal"===d?"minWidth":null,getPopupContainer:m,builtinPlacements:S,popupPlacement:R,popupVisible:w,popup:c,popupAlign:u&&{offset:u},action:f?[]:[C],mouseEnterDelay:y,mouseLeaveDelay:j,onPopupVisibleChange:p,forceRender:E,popupMotion:D},r)}var Te=n(77);function Ae(e){var t=e.id,n=e.open,a=e.keyPath,c=e.children,l="inline",u=v.useContext(g),s=u.prefixCls,f=u.forceSubMenuRender,d=u.motion,p=u.defaultMotions,b=u.mode,m=v.useRef(!1);m.current=b===l;var O=v.useState(!m.current),y=Object(i.a)(O,2),j=y[0],h=y[1],C=!!m.current&&n;v.useEffect((function(){m.current&&h(!1)}),[b]);var x=Object(o.a)({},Se(l,d,p));a.length>1&&(x.motionAppear=!1);var I=x.onVisibleChanged;return x.onVisibleChanged=function(e){return m.current||e||h(!0),null===I||void 0===I?void 0:I(e)},j?null:v.createElement(E,{mode:l,locked:!m.current},v.createElement(Te.b,Object(r.a)({visible:C},x,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),(function(e){var n=e.className,r=e.style;return v.createElement(he,{id:t,className:n,style:r},c)})))}var De=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Le=["active"],_e=function(e){var t,n=e.style,c=e.className,u=e.title,d=e.eventKey,p=(e.warnKey,e.disabled),b=e.internalPopupClose,m=e.children,O=e.itemIcon,y=e.expandIcon,h=e.popupClassName,C=e.popupOffset,x=e.onClick,I=e.onMouseEnter,M=e.onMouseLeave,N=e.onTitleClick,S=e.onTitleMouseEnter,K=e.onTitleMouseLeave,R=Object(l.a)(e,De),T=j(d),A=v.useContext(g),D=A.prefixCls,L=A.mode,_=A.openKeys,z=A.disabled,V=A.overflowDisabled,F=A.activeKey,q=A.selectedKeys,H=A.itemIcon,W=A.expandIcon,G=A.onItemClick,B=A.onOpenChange,J=A.onActive,U=v.useContext(k)._internalRenderSubMenuItem,X=v.useContext(w).isSubPathKey,Q=P(),Z="".concat(D,"-submenu"),$=z||p,ee=v.useRef(),te=v.useRef();var ne=O||H,re=y||W,ae=_.includes(d),le=!V&&ae,se=X(q,d),fe=oe(d,$,S,K),de=fe.active,pe=Object(l.a)(fe,Le),ve=v.useState(!1),be=Object(i.a)(ve,2),me=be[0],Oe=be[1],ye=function(e){$||Oe(e)},je=v.useMemo((function(){return de||"inline"!==L&&(me||X([F],d))}),[L,de,F,me,d,X]),Ce=ce(Q.length),ge=Y((function(e){null===x||void 0===x||x(ue(e)),G(e)})),Ee=T&&"".concat(T,"-popup"),xe=v.createElement("div",Object(r.a)({role:"menuitem",style:Ce,className:"".concat(Z,"-title"),tabIndex:$?null:-1,ref:ee,title:"string"===typeof u?u:null,"data-menu-id":V&&T?null:T,"aria-expanded":le,"aria-haspopup":!0,"aria-controls":Ee,"aria-disabled":$,onClick:function(e){$||(null===N||void 0===N||N({key:d,domEvent:e}),"inline"===L&&B(d,!ae))},onFocus:function(){J(d)}},pe),u,v.createElement(ie,{icon:"horizontal"!==L?re:null,props:Object(o.a)(Object(o.a)({},e),{},{isOpen:le,isSubMenu:!0})},v.createElement("i",{className:"".concat(Z,"-arrow")}))),Ie=v.useRef(L);if("inline"!==L&&Q.length>1?Ie.current="vertical":Ie.current=L,!V){var Me=Ie.current;xe=v.createElement(Re,{mode:Me,prefixCls:Z,visible:!b&&le&&"inline"!==L,popupClassName:h,popupOffset:C,popup:v.createElement(E,{mode:"horizontal"===Me?"vertical":Me},v.createElement(he,{id:Ee,ref:te},m)),disabled:$,onVisibleChange:function(e){"inline"!==L&&B(d,e)}},xe)}var Ne=v.createElement(f.a.Item,Object(r.a)({role:"none"},R,{component:"li",style:n,className:s()(Z,"".concat(Z,"-").concat(L),c,(t={},Object(a.a)(t,"".concat(Z,"-open"),le),Object(a.a)(t,"".concat(Z,"-active"),je),Object(a.a)(t,"".concat(Z,"-selected"),se),Object(a.a)(t,"".concat(Z,"-disabled"),$),t)),onMouseEnter:function(e){ye(!0),null===I||void 0===I||I({key:d,domEvent:e})},onMouseLeave:function(e){ye(!1),null===M||void 0===M||M({key:d,domEvent:e})}}),xe,!V&&v.createElement(Ae,{id:Ee,open:le,keyPath:Q},m));return U&&(Ne=U(Ne,e,{selected:se,active:je,open:le,disabled:$})),v.createElement(E,{onItemClick:ge,mode:"horizontal"===L?"vertical":L,itemIcon:ne,expandIcon:re},Ne)};function ze(e){var t,n=e.eventKey,r=e.children,a=P(n),o=xe(r,a),c=M();return v.useEffect((function(){if(c)return c.registerPath(n,a),function(){c.unregisterPath(n,a)}}),[a]),t=c?o:v.createElement(_e,e,o),v.createElement(N.Provider,{value:a},t)}var Ve=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Fe=[],qe=v.forwardRef((function(e,t){var n,u,p=e,j=p.prefixCls,h=void 0===j?"rc-menu":j,C=p.rootClassName,g=p.style,x=p.className,M=p.tabIndex,N=void 0===M?0:M,P=p.items,S=p.children,K=p.direction,R=p.id,T=p.mode,A=void 0===T?"vertical":T,D=p.inlineCollapsed,L=p.disabled,_=p.disabledOverflow,z=p.subMenuOpenDelay,V=void 0===z?.1:z,F=p.subMenuCloseDelay,q=void 0===F?.1:F,H=p.forceSubMenuRender,W=p.defaultOpenKeys,B=p.openKeys,J=p.activeKey,$=p.defaultActiveFirst,ee=p.selectable,te=void 0===ee||ee,ne=p.multiple,re=void 0!==ne&&ne,ae=p.defaultSelectedKeys,oe=p.selectedKeys,ce=p.onSelect,ie=p.onDeselect,le=p.inlineIndent,se=void 0===le?24:le,fe=p.motion,de=p.defaultMotions,pe=p.triggerSubMenuAction,ve=void 0===pe?"hover":pe,be=p.builtinPlacements,Oe=p.itemIcon,ye=p.expandIcon,je=p.overflowedIndicator,he=void 0===je?"...":je,Ce=p.overflowedIndicatorPopupClassName,ge=p.getPopupContainer,Ee=p.onClick,xe=p.onOpenChange,Ie=p.onKeyDown,Ne=(p.openAnimation,p.openTransitionName,p._internalRenderMenuItem),Pe=p._internalRenderSubMenuItem,we=Object(l.a)(p,Ve),ke=v.useMemo((function(){return Me(S,P,Fe)}),[S,P]),Se=v.useState(!1),Ke=Object(i.a)(Se,2),Re=Ke[0],Te=Ke[1],Ae=v.useRef(),De=function(e){var t=Object(d.a)(e,{value:e}),n=Object(i.a)(t,2),r=n[0],a=n[1];return v.useEffect((function(){Z+=1;var e="".concat(Q,"-").concat(Z);a("rc-menu-uuid-".concat(e))}),[]),r}(R),Le="rtl"===K;var _e=Object(d.a)(W,{value:B,postState:function(e){return e||Fe}}),qe=Object(i.a)(_e,2),He=qe[0],We=qe[1],Ge=function(e){function t(){We(e),null===xe||void 0===xe||xe(e)}arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Object(b.flushSync)(t):t()},Be=v.useState(He),Je=Object(i.a)(Be,2),Ue=Je[0],Xe=Je[1],Ye=v.useRef(!1),Qe=v.useMemo((function(){return"inline"!==A&&"vertical"!==A||!D?[A,!1]:["vertical",D]}),[A,D]),Ze=Object(i.a)(Qe,2),$e=Ze[0],et=Ze[1],tt="inline"===$e,nt=v.useState($e),rt=Object(i.a)(nt,2),at=rt[0],ot=rt[1],ct=v.useState(et),it=Object(i.a)(ct,2),lt=it[0],ut=it[1];v.useEffect((function(){ot($e),ut(et),Ye.current&&(tt?We(Ue):Ge(Fe))}),[$e,et]);var st=v.useState(0),ft=Object(i.a)(st,2),dt=ft[0],pt=ft[1],vt=dt>=ke.length-1||"horizontal"!==at||_;v.useEffect((function(){tt&&Xe(He)}),[He]),v.useEffect((function(){return Ye.current=!0,function(){Ye.current=!1}}),[]);var bt=X(),mt=bt.registerPath,Ot=bt.unregisterPath,yt=bt.refreshOverflowKeys,jt=bt.isSubPathKey,ht=bt.getKeyPath,Ct=bt.getKeys,gt=bt.getSubPathKeys,Et=v.useMemo((function(){return{registerPath:mt,unregisterPath:Ot}}),[mt,Ot]),xt=v.useMemo((function(){return{isSubPathKey:jt}}),[jt]);v.useEffect((function(){yt(vt?Fe:ke.slice(dt+1).map((function(e){return e.key})))}),[dt,vt]);var It=Object(d.a)(J||$&&(null===(n=ke[0])||void 0===n?void 0:n.key),{value:J}),Mt=Object(i.a)(It,2),Nt=Mt[0],Pt=Mt[1],wt=Y((function(e){Pt(e)})),kt=Y((function(){Pt(void 0)}));Object(v.useImperativeHandle)(t,(function(){return{list:Ae.current,focus:function(e){var t,n,r,a,o=null!==Nt&&void 0!==Nt?Nt:null===(t=ke.find((function(e){return!e.props.disabled})))||void 0===t?void 0:t.key;o&&(null===(n=Ae.current)||void 0===n||null===(r=n.querySelector("li[data-menu-id='".concat(y(De,o),"']")))||void 0===r||null===(a=r.focus)||void 0===a||a.call(r,e))}}}));var St=Object(d.a)(ae||[],{value:oe,postState:function(e){return Array.isArray(e)?e:null===e||void 0===e?Fe:[e]}}),Kt=Object(i.a)(St,2),Rt=Kt[0],Tt=Kt[1],At=Y((function(e){null===Ee||void 0===Ee||Ee(ue(e)),function(e){if(te){var t,n=e.key,r=Rt.includes(n);t=re?r?Rt.filter((function(e){return e!==n})):[].concat(Object(c.a)(Rt),[n]):[n],Tt(t);var a=Object(o.a)(Object(o.a)({},e),{},{selectedKeys:t});r?null===ie||void 0===ie||ie(a):null===ce||void 0===ce||ce(a)}!re&&He.length&&"inline"!==at&&Ge(Fe)}(e)})),Dt=Y((function(e,t){var n=He.filter((function(t){return t!==e}));if(t)n.push(e);else if("inline"!==at){var r=gt(e);n=n.filter((function(e){return!r.has(e)}))}Object(m.a)(He,n,!0)||Ge(n,!0)})),Lt=Y(ge),_t=G(at,Nt,Le,De,Ae,Ct,ht,Pt,(function(e,t){var n=null!==t&&void 0!==t?t:!He.includes(e);Dt(e,n)}),Ie);v.useEffect((function(){Te(!0)}),[]);var zt=v.useMemo((function(){return{_internalRenderMenuItem:Ne,_internalRenderSubMenuItem:Pe}}),[Ne,Pe]),Vt="horizontal"!==at||_?ke:ke.map((function(e,t){return v.createElement(E,{key:e.key,overflowDisabled:t>dt},e)})),Ft=v.createElement(f.a,Object(r.a)({id:R,ref:Ae,prefixCls:"".concat(h,"-overflow"),component:"ul",itemComponent:me,className:s()(h,"".concat(h,"-root"),"".concat(h,"-").concat(at),x,(u={},Object(a.a)(u,"".concat(h,"-inline-collapsed"),lt),Object(a.a)(u,"".concat(h,"-rtl"),Le),u),C),dir:K,style:g,role:"menu",tabIndex:N,data:Vt,renderRawItem:function(e){return e},renderRawRest:function(e){var t=e.length,n=t?ke.slice(-t):null;return v.createElement(ze,{eventKey:U,title:he,disabled:vt,internalPopupClose:0===t,popupClassName:Ce},n)},maxCount:"horizontal"!==at||_?f.a.INVALIDATE:f.a.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){pt(e)},onKeyDown:_t},we));return v.createElement(k.Provider,{value:zt},v.createElement(O.Provider,{value:De},v.createElement(E,{prefixCls:h,rootClassName:C,mode:at,openKeys:He,rtl:Le,disabled:L,motion:Re?fe:null,defaultMotions:Re?de:null,activeKey:Nt,onActive:wt,onInactive:kt,selectedKeys:Rt,inlineIndent:se,subMenuOpenDelay:V,subMenuCloseDelay:q,forceSubMenuRender:H,builtinPlacements:be,triggerSubMenuAction:ve,getPopupContainer:Lt,itemIcon:Oe,expandIcon:ye,onItemClick:At,onOpenChange:Dt},v.createElement(w.Provider,{value:xt},Ft),v.createElement("div",{style:{display:"none"},"aria-hidden":!0},v.createElement(I.Provider,{value:Et},ke)))))})),He=["className","title","eventKey","children"],We=["children"],Ge=function(e){var t=e.className,n=e.title,a=(e.eventKey,e.children),o=Object(l.a)(e,He),c=v.useContext(g).prefixCls,i="".concat(c,"-item-group");return v.createElement("li",Object(r.a)({role:"presentation"},o,{onClick:function(e){return e.stopPropagation()},className:s()(i,t)}),v.createElement("div",{role:"presentation",className:"".concat(i,"-title"),title:"string"===typeof n?n:void 0},n),v.createElement("ul",{role:"group",className:"".concat(i,"-list")},a))};function Be(e){var t=e.children,n=Object(l.a)(e,We),r=xe(t,P(n.eventKey));return M()?r:v.createElement(Ge,Object(re.a)(n,["warnKey"]),r)}function Je(e){var t=e.className,n=e.style,r=v.useContext(g).prefixCls;return M()?null:v.createElement("li",{className:s()("".concat(r,"-item-divider"),t),style:n})}var Ue=qe;Ue.Item=me,Ue.SubMenu=ze,Ue.ItemGroup=Be,Ue.Divider=Je;t.g=Ue},1464:function(e,t,n){"use strict";var r=n(5),a=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},c=n(59),i=function(e,t){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))},l=a.forwardRef(i);t.a=l},1487:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(28),a=n(308);function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Object(a.a)(e)){var n=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(n)||e.isContentEditable||"a"===n&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),c=Number(o),i=null;return o&&!Number.isNaN(c)?i=c:r&&null===i&&(i=0),r&&e.disabled&&(i=null),null!==i&&(i>=0||t&&i<0)}return!1}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(r.a)(e.querySelectorAll("*")).filter((function(e){return o(e,t)}));return o(e,t)&&n.unshift(e),n}}}]);
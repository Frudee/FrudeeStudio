(self.webpackChunkfrudee_web_studio=self.webpackChunkfrudee_web_studio||[]).push([[185],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},6872:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ie}});var r={};n.r(r);var o,a,i,c,l=n(7294),u=n(5697),s=n.n(u),f=n(6124),p=n.n(f),d=n(523),m=n.n(d),y=n(4756),h=n.n(y),v="bodyAttributes",b="htmlAttributes",E="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",A="href",C="http-equiv",O="innerHTML",S="itemprop",k="name",N="property",L="rel",j="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",_="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",B=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),H=[g.NOSCRIPT,g.SCRIPT,g.STYLE],U="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=G(e,g.TITLE),n=G(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,I);return t||r||void 0},X=function(e){return G(e,R)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),le(f,p);var d={baseTag:se(g.BASE,n),linkTags:se(g.LINK,a),metaTags:se(g.META,i),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,u),styleTags:se(g.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,m,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(U):n.getAttribute(U)!==i.join(",")&&n.setAttribute(U,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,o=pe(n,r),[l.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=fe(n),a=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:de(g.BASE,t,r),bodyAttributes:de(v,n,r),htmlAttributes:de(b,o,r),link:de(g.LINK,a,r),meta:de(g.META,i,r),noscript:de(g.NOSCRIPT,c,r),script:de(g.SCRIPT,l,r),style:de(g.STYLE,u,r),title:de(g.TITLE,{title:f,titleAttributes:p},r)}},ye=p()((function(e){return{baseTag:Q([A,P],e),bodyAttributes:J(v,e),defer:G(e,M),encode:G(e,_),htmlAttributes:J(b,e),linkTags:$(g.LINK,[L,A],e),metaTags:$(g.META,[k,T,C,N,S],e),noscriptTags:$(g.NOSCRIPT,[O],e),onChangeClientState:X(e),scriptTags:$(g.SCRIPT,[j,O],e),styleTags:$(g.STYLE,[w],e),title:z(e),titleAttributes:J(E,e)}}),(function(e){ae&&re(ae),e.defer?ae=ne((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),he=(a=ye,c=i=function(e){function t(){return q(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return Z({},o,((t={})[r.type]=i,t.titleAttributes=Z({},a),t));case g.BODY:return Z({},o,{bodyAttributes:Z({},a)});case g.HTML:return Z({},o,{htmlAttributes:Z({},a)})}return Z({},o,((n={})[r.type]=Z({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=Z({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);he.renderStatic=he.rewind;var ve=n(5444),be="nav-bar-module--hamburger__bar--1uT-p",Ee="nav-bar-module--animate--2DyWe",ge=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],r=(0,l.useState)(!1),o=r[0],a=r[1],i=(0,l.useState)(!1),c=i[0],u=i[1];(0,l.useEffect)((function(){document.body.style.overflow=t?"hidden":"auto"}));var s=function(){n((function(e){return!e})),c?(a(!1),setTimeout((function(){u(!1)}),300)):(u((function(e){return!e})),setTimeout((function(){a(!0)}),20))},f=function(){t&&s()},p=(0,ve.K2)("328071575");return l.createElement("nav",{className:"nav-bar-module--navbar--Ofv0Y"},l.createElement("div",{className:"nav-bar-module--logo--3ETN7"},l.createElement(ve.rU,{to:"/"},"Frudee Web Studio")),l.createElement("div",{className:"nav-bar-module--nav-links--AaV-E"},l.createElement("input",{type:"checkbox",id:"menu_toggle"}),l.createElement("div",{onClick:s,onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),s())},"aria-label":"Open menu",role:"button",tabIndex:0,className:"nav-bar-module--hamburger--2w81D"},l.createElement("span",{className:(t?Ee:"")+" "+be}),l.createElement("span",{className:(t?Ee:"")+" "+be}),l.createElement("span",{className:(t?Ee:"")+" "+be})),l.createElement("ul",{className:"nav-bar-module--menu--2Hf3U "+(c?"nav-bar-module--shown--1KJJl":"")+" "+(o?"nav-bar-module--visuallyshown--2d6DP":"")},p.allContentfulNavigation.nodes.sort((function(e,t){return e.order-t.order})).map((function(e){return l.createElement("li",{key:e.order},l.createElement(ve.rU,{to:"/"+e.address,onClick:f},e.linkName))})))))},Te=n(9694),we=function(e){var t=e.title,n=e.description,r=e.myImage,o=e.article,a=(0,Te.useLocation)().pathname,i=(0,ve.K2)(Ce).site.siteMetadata,c=i.defaultTitle,u=i.defaultDescription,s=i.url,f={title:t||c,description:n||u,image:""+s+(i.image||r),url:""+s+a};return l.createElement(he,{title:f.title},l.createElement("meta",{name:"description",content:f.description}),l.createElement("meta",{name:"image",content:f.image}),f.url&&l.createElement("meta",{property:"og:url",content:f.url}),!o?null:l.createElement("meta",{property:"og:type",content:"article"}),f.title&&l.createElement("meta",{property:"og:title",content:f.title}),f.description&&l.createElement("meta",{property:"og:description",content:f.description}),f.image&&l.createElement("meta",{property:"og:image",content:f.image}))},Ae=we,Ce="3383159725";we.defaultProps={title:null,description:null,image:null,article:!1};var Oe="footer-module--footer-contact--_SNxI",Se=n(7974),ke=n.n(Se),Ne=n(1070),Le=n.n(Ne),je=n(8207),Pe=n.n(je),xe=function(){return l.createElement("footer",null,l.createElement("div",{className:"footer-module--footer--f8BR2"},l.createElement("div",{className:"footer-module--footer-container--pVzhp"},l.createElement("div",{className:"footer-module--footer-box--Xwkvd"},l.createElement("div",{className:"footer-module--footer-contacts--57P2V"},l.createElement("span",{className:"footer-module--footer-text--1lXQQ"},"Frudee Web Studio - создание сайтов любой сложности, в кратчайшие сроки."),l.createElement("div",{className:Oe},l.createElement(ke(),null),l.createElement("div",null,l.createElement("span",null,"Телефон"),l.createElement("span",null,"+7 982 324 16 84"))),l.createElement("div",{className:Oe},l.createElement(Le(),null),l.createElement("div",null,l.createElement("span",null,"Email"),l.createElement("span",null,"support@frudee.ru"))),l.createElement("div",{className:Oe},l.createElement(Pe(),null),l.createElement("div",null,l.createElement("span",null,"Адрес"),l.createElement("span",null,"Россия, Московская обл., г. Истра")))),l.createElement("div",{className:"footer-module--footer-flex--3_CXC"},l.createElement("div",{className:"footer-module--footer-logo--2RBRE"},l.createElement("span",null,"Frudee Web Studio")),l.createElement("div",{className:"footer-module--footer-links--36Ax7"},l.createElement("ul",null,l.createElement("li",null,l.createElement(ve.rU,{to:"/#about"},"О нас")),l.createElement("li",null,l.createElement(ve.rU,{to:"/prices"},"Цены")),l.createElement("li",null,l.createElement(ve.rU,{to:"/#services"},"Услуги")),l.createElement("li",null,l.createElement(ve.rU,{to:"/#contact"},"Контакты")))))),l.createElement("div",{className:"footer-module--footer-bottom--29Z17"},l.createElement("span",null,"Создано Frudee Web Studio"),l.createElement("span",null,"Copyright © 2022 All rights reserved")))))},Ie=function(e){e.pageTitle;var t=e.children;return l.createElement("div",null,l.createElement(Ae,null),l.createElement("header",null,l.createElement(ge,null)),l.createElement("main",{className:r},t,l.createElement(xe,null)))}},1070:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"email"),r.createElement("path",{d:"M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z",key:1})])}o.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 122.88 88.86"},e.exports=o,o.default=o},8207:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".cls-1{fill-rule:evenodd;}")),r.createElement("title",{key:1},"map-pin-point"),r.createElement("path",{className:"cls-1",d:"M46.27,24.08A22.75,22.75,0,1,1,23.52,46.83,22.75,22.75,0,0,1,46.27,24.08Zm1.36,91.62A82.87,82.87,0,0,0,64,101.81,85.44,85.44,0,0,0,84.56,62.23c2.81-13.67,1.5-27-4.75-37.34a36.74,36.74,0,0,0-6.63-8.06C65.62,9.93,57,6.64,48.23,6.56,39.07,6.49,29.77,10,21.55,16.5a38.54,38.54,0,0,0-8.63,9.56C7.15,35.15,5.41,46.43,7.31,58.24c1.94,12,7.66,24.61,16.77,36A102.46,102.46,0,0,0,47.63,115.7Zm21.24-9.46a89.32,89.32,0,0,1-19.33,16,3.28,3.28,0,0,1-3.71.13,109.25,109.25,0,0,1-26.9-24c-9.8-12.31-16-26-18.1-39.1C-1.33,45.89.7,33,7.36,22.53a45.3,45.3,0,0,1,10.1-11.18C26.85,3.87,37.6-.09,48.29,0,58.6.09,68.79,3.92,77.6,12a43.1,43.1,0,0,1,7.82,9.52c7.15,11.8,8.71,26.83,5.57,42.05a92.2,92.2,0,0,1-22.12,42.7Z",key:2})])}o.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 92.53 122.88"},e.exports=o,o.default=o},7974:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"mobile-outline"),r.createElement("path",{d:"M52.07,68.5A72.28,72.28,0,0,0,61.58,77a83.47,83.47,0,0,0,11.7,7.28l.17-.12c.3-.24.64-.55,1-.9s.6-.65.92-1l1.13-1.47a2.93,2.93,0,0,1,.34-.43c4.31-5.68,9.68-12.51,18.32-8.51a4.1,4.1,0,0,1,.52.26c7,4.14,14.18,8.15,21.24,12.21a3.39,3.39,0,0,1,.5.32l0,0a12,12,0,0,1,4.07,4.72,14.73,14.73,0,0,1,1.36,6.26v0a21.71,21.71,0,0,1-.94,6.1,29.07,29.07,0,0,1-2.6,6.06,23.51,23.51,0,0,1-5.19,6.3,26.81,26.81,0,0,1-6.53,4.11l-.05,0a39.78,39.78,0,0,1-6.66,2.32,64.53,64.53,0,0,1-6.73,1.34,44.49,44.49,0,0,1-10.47.32,49.29,49.29,0,0,1-10.17-2,68.93,68.93,0,0,1-9.89-4,114.94,114.94,0,0,1-10.16-5.67l-.84-.52c-3.07-1.91-6.38-4-9.73-6.47l0,0a129.47,129.47,0,0,1-19-17.67A116.79,116.79,0,0,1,9.39,65.39a77.53,77.53,0,0,1-8-20.6A52.13,52.13,0,0,1,.59,25.22,35.51,35.51,0,0,1,4.21,14.16a26.75,26.75,0,0,1,6.84-8.37A25.64,25.64,0,0,1,20.56,1,32.45,32.45,0,0,1,31.8.15a5.9,5.9,0,0,1,2.82.93,6.07,6.07,0,0,1,2,2.13L50.08,26a11.34,11.34,0,0,1,2.25,5.25,10.56,10.56,0,0,1-.82,5.59v0a14.27,14.27,0,0,1-2.6,3.95,24.06,24.06,0,0,1-3.52,3.12c-.73.63-1.65,1.3-2.61,2l-.09.07a27.86,27.86,0,0,0-3.23,2.59,3.06,3.06,0,0,0-.9,1.2c0,.11.09,0,.19.17l.34.53c1.13,1.77,3.31,5.15,5.8,8.74a91.46,91.46,0,0,0,7.18,9.31Zm5.45,13.9a80.64,80.64,0,0,1-10.38-9.25,94.48,94.48,0,0,1-7.82-10.1c-2.48-3.58-4.76-7.11-5.94-9l-.29-.43a6,6,0,0,1-1.31-4.44,8.81,8.81,0,0,1,2.87-5.47,33.42,33.42,0,0,1,4.05-3.28l0,0c.8-.58,1.56-1.14,2.25-1.73l.21-.16a16.57,16.57,0,0,0,2.67-2.33,7.81,7.81,0,0,0,1.4-2.09,3.81,3.81,0,0,0,.33-2,4.67,4.67,0,0,0-1-2.11,2.51,2.51,0,0,1-.32-.46L30.92,6.86a25.43,25.43,0,0,0-8.61.69,18.67,18.67,0,0,0-7,3.53,20.16,20.16,0,0,0-5.11,6.26,28.8,28.8,0,0,0-2.9,8.94,45.29,45.29,0,0,0,.7,17,71.09,71.09,0,0,0,7.36,18.8A108.83,108.83,0,0,0,29,81.27,122.72,122.72,0,0,0,47,98c3,2.27,6.26,4.28,9.26,6.14l.85.54A108.32,108.32,0,0,0,66.62,110a60.6,60.6,0,0,0,8.91,3.59,42.22,42.22,0,0,0,8.77,1.76,38.12,38.12,0,0,0,8.9-.28,56,56,0,0,0,6-1.18,32.87,32.87,0,0,0,5.53-1.92l.09,0a20.48,20.48,0,0,0,4.92-3.08,16.86,16.86,0,0,0,3.7-4.49,22.54,22.54,0,0,0,2-4.63,15.34,15.34,0,0,0,.66-4.19,7.62,7.62,0,0,0-.69-3.34,5.25,5.25,0,0,0-1.81-2.1c-5.41-3.87-14.91-8.59-21-12.11l-.29-.15.12.06-.12-.06c-3.75-1.67-7.23,2.75-10.06,6.48l-.17.24c-.49.65-1,1.28-1.4,1.82s-1,1.2-1.4,1.6a18.66,18.66,0,0,1-1.71,1.51,9.39,9.39,0,0,1-2.21,1.24,5.59,5.59,0,0,1-2.35.38,6,6,0,0,1-2-.49l-.32-.14A91.42,91.42,0,0,1,57.52,82.4Z",key:1})])}o.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 122.88 122.31"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=4f727c8e67519588f38a6a9659aca965caaeef6e-1a218be7d77573770f66.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GOef:function(Z,q,K){"use strict";K.d(q,"c",function(){return or}),K.d(q,"a",function(){return Re}),K.d(q,"b",function(){return dr});var G=K("n2rz"),k=K.n(G);function J(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function m(e,t){t===void 0&&(t=J);var r,n=[],u,i=!1;function a(){for(var v=[],c=0;c<arguments.length;c++)v[c]=arguments[c];return i&&r===this&&t(v,n)||(u=e.apply(this,v),i=!0,r=this,n=v),u}return a}var b=m;function P(e){for(var t=[],r=0;r<e.length;){var n=e[r];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(n==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(n==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(n===":"){for(var u="",i=r+1;i<e.length;){var a=e.charCodeAt(i);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){u+=e[i++];continue}break}if(!u)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:u}),r=i;continue}if(n==="("){var v=1,c="",i=r+1;if(e[i]==="?")throw new TypeError('Pattern cannot start with "?" at '+i);for(;i<e.length;){if(e[i]==="\\"){c+=e[i++]+e[i++];continue}if(e[i]===")"){if(v--,v===0){i++;break}}else if(e[i]==="("&&(v++,e[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+i);c+=e[i++]}if(v)throw new TypeError("Unbalanced pattern at "+r);if(!c)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:c}),r=i;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function M(e,t){t===void 0&&(t={});for(var r=P(e),n=t.prefixes,u=n===void 0?"./":n,i="[^"+y(t.delimiter||"/#?")+"]+?",a=[],v=0,c=0,p="",g=function(te){if(c<r.length&&r[c].type===te)return r[c++].value},d=function(te){var oe=g(te);if(oe!==void 0)return oe;var je=r[c],pr=je.type,hr=je.index;throw new TypeError("Unexpected "+pr+" at "+hr+", expected "+te)},E=function(){for(var te="",oe;oe=g("CHAR")||g("ESCAPED_CHAR");)te+=oe;return te};c<r.length;){var R=g("CHAR"),N=g("NAME"),B=g("PATTERN");if(N||B){var w=R||"";u.indexOf(w)===-1&&(p+=w,w=""),p&&(a.push(p),p=""),a.push({name:N||v++,prefix:w,suffix:"",pattern:B||i,modifier:g("MODIFIER")||""});continue}var U=R||g("ESCAPED_CHAR");if(U){p+=U;continue}p&&(a.push(p),p="");var j=g("OPEN");if(j){var w=E(),X=g("NAME")||"",Y=g("PATTERN")||"",_e=E();d("CLOSE"),a.push({name:X||(Y?v++:""),pattern:X&&!Y?i:Y,prefix:w,suffix:_e,modifier:g("MODIFIER")||""});continue}d("END")}return a}function L(e,t){return V(M(e,t),t)}function V(e,t){t===void 0&&(t={});var r=o(t),n=t.encode,u=n===void 0?function(c){return c}:n,i=t.validate,a=i===void 0?!0:i,v=e.map(function(c){if(typeof c=="object")return new RegExp("^(?:"+c.pattern+")$",r)});return function(c){for(var p="",g=0;g<e.length;g++){var d=e[g];if(typeof d=="string"){p+=d;continue}var E=c?c[d.name]:void 0,R=d.modifier==="?"||d.modifier==="*",N=d.modifier==="*"||d.modifier==="+";if(Array.isArray(E)){if(!N)throw new TypeError('Expected "'+d.name+'" to not repeat, but got an array');if(E.length===0){if(R)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var B=0;B<E.length;B++){var w=u(E[B],d);if(a&&!v[g].test(w))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but got "'+w+'"');p+=d.prefix+w+d.suffix}continue}if(typeof E=="string"||typeof E=="number"){var w=u(String(E),d);if(a&&!v[g].test(w))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+w+'"');p+=d.prefix+w+d.suffix;continue}if(!R){var U=N?"an array":"a string";throw new TypeError('Expected "'+d.name+'" to be '+U)}}return p}}function ee(e,t){var r=[],n=O(e,r,t);return z(n,r,t)}function z(e,t,r){r===void 0&&(r={});var n=r.decode,u=n===void 0?function(i){return i}:n;return function(i){var a=e.exec(i);if(!a)return!1;for(var v=a[0],c=a.index,p=Object.create(null),g=function(R){if(a[R]===void 0)return"continue";var N=t[R-1];N.modifier==="*"||N.modifier==="+"?p[N.name]=a[R].split(N.prefix+N.suffix).map(function(B){return u(B,N)}):p[N.name]=u(a[R],N)},d=1;d<a.length;d++)g(d);return{path:v,index:c,params:p}}}function y(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function f(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}function l(e,t,r){var n=e.map(function(u){return O(u,t,r).source});return new RegExp("(?:"+n.join("|")+")",o(r))}function s(e,t,r){return T(M(e,r),t,r)}function T(e,t,r){r===void 0&&(r={});for(var n=r.strict,u=n===void 0?!1:n,i=r.start,a=i===void 0?!0:i,v=r.end,c=v===void 0?!0:v,p=r.encode,g=p===void 0?function(de){return de}:p,d="["+y(r.endsWith||"")+"]|$",E="["+y(r.delimiter||"/#?")+"]",R=a?"^":"",N=0,B=e;N<B.length;N++){var w=B[N];if(typeof w=="string")R+=y(g(w));else{var U=y(g(w.prefix)),j=y(g(w.suffix));if(w.pattern)if(t&&t.push(w),U||j)if(w.modifier==="+"||w.modifier==="*"){var X=w.modifier==="*"?"?":"";R+="(?:"+U+"((?:"+w.pattern+")(?:"+j+U+"(?:"+w.pattern+"))*)"+j+")"+X}else R+="(?:"+U+"("+w.pattern+")"+j+")"+w.modifier;else R+="("+w.pattern+")"+w.modifier;else R+="(?:"+U+j+")"+w.modifier}}if(c)u||(R+=E+"?"),R+=r.endsWith?"(?="+d+")":"$";else{var Y=e[e.length-1],_e=typeof Y=="string"?E.indexOf(Y[Y.length-1])>-1:Y===void 0;u||(R+="(?:"+E+"(?="+d+"))?"),_e||(R+="(?="+E+"|"+d+")")}return new RegExp(R,o(r))}function O(e,t,r){return e instanceof RegExp?f(e,t):Array.isArray(e)?l(e,t,r):s(e,t,r)}function h(e,t){return t>>>e|t<<32-e}function C(e,t,r){return e&t^~e&r}function H(e,t,r){return e&t^e&r^t&r}function x(e){return h(2,e)^h(13,e)^h(22,e)}function A(e){return h(6,e)^h(11,e)^h(25,e)}function F(e){return h(7,e)^h(18,e)^e>>>3}function D(e){return h(17,e)^h(19,e)^e>>>10}function S(e,t){return e[t&15]+=D(e[t+14&15])+e[t+9&15]+F(e[t+1&15])}var Q=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],_,$,I,pe="0123456789abcdef";function re(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function ne(){_=new Array(8),$=new Array(2),I=new Array(64),$[0]=$[1]=0,_[0]=1779033703,_[1]=3144134277,_[2]=1013904242,_[3]=2773480762,_[4]=1359893119,_[5]=2600822924,_[6]=528734635,_[7]=1541459225}function ae(){var e,t,r,n,u,i,a,v,c,p,g=new Array(16);e=_[0],t=_[1],r=_[2],n=_[3],u=_[4],i=_[5],a=_[6],v=_[7];for(var d=0;d<16;d++)g[d]=I[(d<<2)+3]|I[(d<<2)+2]<<8|I[(d<<2)+1]<<16|I[d<<2]<<24;for(var E=0;E<64;E++)c=v+A(u)+C(u,i,a)+Q[E],E<16?c+=g[E]:c+=S(g,E),p=x(e)+H(e,t,r),v=a,a=i,i=u,u=re(n,c),n=r,r=t,t=e,e=re(c,p);_[0]+=e,_[1]+=t,_[2]+=r,_[3]+=n,_[4]+=u,_[5]+=i,_[6]+=a,_[7]+=v}function he(e,t){var r,n,u=0;n=$[0]>>3&63;var i=t&63;for(($[0]+=t<<3)<t<<3&&$[1]++,$[1]+=t>>29,r=0;r+63<t;r+=64){for(var a=n;a<64;a++)I[a]=e.charCodeAt(u++);ae(),n=0}for(var a=0;a<i;a++)I[a]=e.charCodeAt(u++)}function ye(){var e=$[0]>>3&63;if(I[e++]=128,e<=56)for(var t=e;t<56;t++)I[t]=0;else{for(var t=e;t<64;t++)I[t]=0;ae();for(var t=0;t<56;t++)I[t]=0}I[56]=$[1]>>>24&255,I[57]=$[1]>>>16&255,I[58]=$[1]>>>8&255,I[59]=$[1]&255,I[60]=$[0]>>>24&255,I[61]=$[0]>>>16&255,I[62]=$[0]>>>8&255,I[63]=$[0]&255,ae()}function ge(){for(var e=0,t=new Array(32),r=0;r<8;r++)t[e++]=_[r]>>>24&255,t[e++]=_[r]>>>16&255,t[e++]=_[r]>>>8&255,t[e++]=_[r]&255;return t}function ce(){for(var e=new String,t=0;t<8;t++)for(var r=28;r>=0;r-=4)e+=pe.charAt(_[t]>>>r&15);return e}function De(e){return ne(),he(e,e.length),ye(),ce()}var Ie=De;function le(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?le=function(r){return typeof r}:le=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},le(e)}function Ne(e,t){return $e(e)||Fe(e,t)||be(e,t)||Ce()}function Ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,u=!1,i=void 0;try{for(var a=e[Symbol.iterator](),v;!(n=(v=a.next()).done)&&(r.push(v.value),!(t&&r.length===t));n=!0);}catch(c){u=!0,i=c}finally{try{!n&&a.return!=null&&a.return()}finally{if(u)throw i}}return r}}function $e(e){if(Array.isArray(e))return e}function We(e,t){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=be(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,u=function(){};return{s:u,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(p){throw p},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,v;return{s:function(){r=e[Symbol.iterator]()},n:function(){var p=r.next();return i=p.done,p},e:function(p){a=!0,v=p},f:function(){try{!i&&r.return!=null&&r.return()}finally{if(a)throw v}}}}function He(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ke(e,t,r){return t&&Ae(e.prototype,t),r&&Ae(e,r),e}function Ue(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}function Le(e){var t=Ee();return function(){var n=fe(e),u;if(t){var i=fe(this).constructor;u=Reflect.construct(n,arguments,i)}else u=n.apply(this,arguments);return Be(this,u)}}function Be(e,t){return t&&(le(t)==="object"||typeof t=="function")?t:ze(e)}function ze(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){var t=typeof Map=="function"?new Map:void 0;return me=function(n){if(n===null||!Ge(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(n))return t.get(n);t.set(n,u)}function u(){return se(n,arguments,fe(this).constructor)}return u.prototype=Object.create(n.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),ue(u,n)},me(e)}function se(e,t,r){return Ee()?se=Reflect.construct:se=function(u,i,a){var v=[null];v.push.apply(v,i);var c=Function.bind.apply(u,v),p=new c;return a&&ue(p,a.prototype),p},se.apply(null,arguments)}function Ee(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function Ge(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ue(e,t){return ue=Object.setPrototypeOf||function(n,u){return n.__proto__=u,n},ue(e,t)}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},fe(e)}function Me(e){return Qe(e)||Ve(e)||be(e)||Je()}function Je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e,t){if(!!e){if(typeof e=="string")return xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,t)}}function Ve(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function Qe(e){if(Array.isArray(e))return xe(e)}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Xe(e,t){if(e==null)return{};var r=Ye(e,t),n,u;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(u=0;u<i.length;u++)n=i[u],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Ye(e,t){if(e==null)return{};var r={},n=Object.keys(e),u,i;for(i=0;i<n.length;i++)u=n[i],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Te(Object(r),!0).forEach(function(n){Ze(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ie(e){return e.split("?")[0].split("#")[0]}var Oe=function(t){if(!t.startsWith("http"))return!1;try{var r=new URL(t);return!!r}catch(n){return!1}},qe=function(t){var r=t.path;if(!r||r==="/")try{return"/".concat(Ie(JSON.stringify(t)))}catch(n){}return r&&ie(r)},ke=function(t,r){var n=t.name,u=t.locale;return"locale"in t&&u===!1||!n?!1:t.locale||"".concat(r,".").concat(n)},Se=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return(t||r).startsWith("/")||Oe(t)?t:"/".concat(r,"/").concat(t).replace(/\/\//g,"/").replace(/\/\//g,"/")},er=function(t,r){var n=t.menu,u=n===void 0?{}:n,i=t.indexRoute,a=t.path,v=a===void 0?"":a,c=t.children,p=u.name,g=p===void 0?t.name:p,d=u.icon,E=d===void 0?t.icon:d,R=u.hideChildren,N=R===void 0?t.hideChildren:R,B=u.flatMenu,w=B===void 0?t.flatMenu:B,U=i&&Object.keys(i).join(",")!=="redirect"?[W({path:v,menu:u},i)].concat(c||[]):c,j=W({},t);if(g&&(j.name=g),E&&(j.icon=E),U&&U.length){if(N)return delete j.children,j;var X=we(W(W({},r),{},{data:U}),t);if(w)return X;j.children=X}return j};function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},r=e.data,n=e.formatMessage,u=e.parentName,i=e.locale;return!r||!Array.isArray(r)?[]:r.filter(function(a){return a?a.routes||a.children||a.path||a.layout?!0:(a.redirect,!1):!1}).filter(function(a){var v,c;return a.unaccessible&&delete a.name,(a==null||(v=a.menu)===null||v===void 0?void 0:v.name)||(a==null?void 0:a.flatMenu)||(a==null||(c=a.menu)===null||c===void 0?void 0:c.flatMenu)?!0:a.menu!==!1}).map(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},v=Se(a.path,t?t.path:"/"),c=a.name,p=ke(a,u||"menu"),g=p!==!1&&i!==!1&&n&&p?n({id:p,defaultMessage:c}):c,d=t.pro_layout_parentKeys,E=d===void 0?[]:d,R=t.children,N=t.icon,B=t.flatMenu,w=t.indexRoute,U=Xe(t,["pro_layout_parentKeys","children","icon","flatMenu","indexRoute"]),j=W(W(W({},U),{},{menu:void 0},a),{},{path:v,locale:p,key:a.key||qe(W(W({},a),{},{path:v})),routes:null,pro_layout_parentKeys:Array.from(new Set([].concat(Me(a.parentKeys||[]),Me(E),["/".concat(t.key||"").replace(/\/\//g,"/").replace(/\/\//g,"/")]))).filter(function(Y){return Y&&Y!=="/"})});if(g?j.name=g:delete j.name,j.menu===void 0&&delete j.menu,a.routes||a.children){var X=we(W(W({},e),{},{data:a.routes||a.children,parentName:p||""}),j);j.children=X&&X.length>0?X:void 0,j.children||delete j.children}return er(j,e)}).flat(1)}var rr=b(we,k.a),tr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.filter(function(r){return r&&(r.name||r.children)&&!r.hideInMenu&&!r.redirect}).map(function(r){if(r.children&&Array.isArray(r.children)&&!r.hideChildrenInMenu&&r.children.some(function(u){return u&&!!u.name})){var n=e(r.children);if(n.length)return W(W({},r),{},{children:n})}return W(W({},r),{},{children:void 0})}).filter(function(r){return r})},nr=function(e){Ue(r,e);var t=Le(r);function r(){return He(this,r),t.apply(this,arguments)}return Ke(r,[{key:"get",value:function(u){var i;try{var a=We(this.entries()),v;try{for(a.s();!(v=a.n()).done;){var c=Ne(v.value,2),p=c[0],g=c[1],d=ie(p);if(!Oe(p)&&O(d,[]).test(u)){i=g;break}}}catch(E){a.e(E)}finally{a.f()}}catch(E){i=void 0}return i}}]),r}(me(Map)),ar=function(t){var r=new nr,n=function u(i,a){i.forEach(function(v){v&&v.children&&u(v.children,v);var c=Se(v.path,a?a.path:"/");r.set(ie(c),v)})};return n(t),r},ur=b(ar,k.a),fr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.map(function(r){if(r.children&&Array.isArray(r.children)&&r.children.length>0){var n=e(r.children);if(n.length)return W(W({},r),{},{children:n})}var u=W({},r);return delete u.children,u}).filter(function(r){return r})},ir=function(t,r,n,u){var i=rr({data:t,formatMessage:n,locale:r}),a=u?fr(i):tr(i),v=ur(i);return{breadcrumb:v,menuData:a}},or=ir;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pe(Object(r),!0).forEach(function(n){cr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function cr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var lr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r={};return t.forEach(function(n){!n||!n.key||(r[ie(n.path||n.key||"/")]=ve({},n),r[n.key||n.path||"/"]=ve({},n),n.children&&(r=ve(ve({},r),e(n.children))))}),r},Re=lr,sr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return t.filter(function(n){if(n==="/"&&r==="/")return!0;if(n!=="/"&&n!=="/*"&&n&&!Oe(n)){var u=ie(n);try{if(O("".concat(u),[]).test(r)||O("".concat(u,"/(.*)")).test(r))return!0}catch(i){}}return!1}).sort(function(n,u){return n===r?10:u===r?-10:n.substr(1).split("/").length-u.substr(1).split("/").length})},vr=function(t,r,n){var u=Re(r),i=Object.keys(u),a=sr(i,t||"/");return!a||a.length<1?[]:(n||(a=[a[a.length-1]]),a.map(function(v){var c=u[v]||{pro_layout_parentKeys:"",key:""},p=new Map,g=(c.pro_layout_parentKeys||[]).map(function(d){return p.has(d)?null:(p.set(d,!0),u[d])}).filter(function(d){return d});return c.key&&g.push(c),g}).flat(1))},dr=vr},Qv07:function(Z,q,K){"use strict";var G=K("GOef");function k(o,f){return b(o)||m(o,f)||L(o,f)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(o,f){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(o)))){var l=[],s=!0,T=!1,O=void 0;try{for(var h=o[Symbol.iterator](),C;!(s=(C=h.next()).done)&&(l.push(C.value),!(f&&l.length===f));s=!0);}catch(H){T=!0,O=H}finally{try{!s&&h.return!=null&&h.return()}finally{if(T)throw O}}return l}}function b(o){if(Array.isArray(o))return o}function P(o){return ee(o)||V(o)||L(o)||M()}function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(o,f){if(!!o){if(typeof o=="string")return z(o,f);var l=Object.prototype.toString.call(o).slice(8,-1);if(l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set")return Array.from(o);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return z(o,f)}}function V(o){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(o))return Array.from(o)}function ee(o){if(Array.isArray(o))return z(o)}function z(o,f){(f==null||f>o.length)&&(f=o.length);for(var l=0,s=new Array(f);l<f;l++)s[l]=o[l];return s}function y(o){return P(o).reduce(function(f,l){var s=k(l,2),T=s[0],O=s[1];return f[T]=O,f},{})}q.a=function(o,f,l,s){var T=Object(G.c)(o,(f==null?void 0:f.locale)||!1,l,!0),O=T.menuData,h=T.breadcrumb;if(!s)return{breadcrumb:y(h),breadcrumbMap:h,menuData:O};var C=Object(G.c)(s(O),(f==null?void 0:f.locale)||!1,l,!0);return{breadcrumb:y(C.breadcrumb),breadcrumbMap:C.breadcrumb,menuData:C.menuData}}},jfsG:function(Z,q){Z.exports=o,Z.exports.parse=J,Z.exports.compile=m,Z.exports.tokensToFunction=b,Z.exports.tokensToRegExp=y;var K="/",G="./",k=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function J(f,l){for(var s=[],T=0,O=0,h="",C=l&&l.delimiter||K,H=l&&l.delimiters||G,x=!1,A;(A=k.exec(f))!==null;){var F=A[0],D=A[1],S=A.index;if(h+=f.slice(O,S),O=S+F.length,D){h+=D[1],x=!0;continue}var Q="",_=f[O],$=A[2],I=A[3],pe=A[4],re=A[5];if(!x&&h.length){var ne=h.length-1;H.indexOf(h[ne])>-1&&(Q=h[ne],h=h.slice(0,ne))}h&&(s.push(h),h="",x=!1);var ae=Q!==""&&_!==void 0&&_!==Q,he=re==="+"||re==="*",ye=re==="?"||re==="*",ge=Q||C,ce=I||pe;s.push({name:$||T++,prefix:Q,delimiter:ge,optional:ye,repeat:he,partial:ae,pattern:ce?M(ce):"[^"+P(ge)+"]+?"})}return(h||O<f.length)&&s.push(h+f.substr(O)),s}function m(f,l){return b(J(f,l))}function b(f){for(var l=new Array(f.length),s=0;s<f.length;s++)typeof f[s]=="object"&&(l[s]=new RegExp("^(?:"+f[s].pattern+")$"));return function(T,O){for(var h="",C=O&&O.encode||encodeURIComponent,H=0;H<f.length;H++){var x=f[H];if(typeof x=="string"){h+=x;continue}var A=T?T[x.name]:void 0,F;if(Array.isArray(A)){if(!x.repeat)throw new TypeError('Expected "'+x.name+'" to not repeat, but got array');if(A.length===0){if(x.optional)continue;throw new TypeError('Expected "'+x.name+'" to not be empty')}for(var D=0;D<A.length;D++){if(F=C(A[D],x),!l[H].test(F))throw new TypeError('Expected all "'+x.name+'" to match "'+x.pattern+'"');h+=(D===0?x.prefix:x.delimiter)+F}continue}if(typeof A=="string"||typeof A=="number"||typeof A=="boolean"){if(F=C(String(A),x),!l[H].test(F))throw new TypeError('Expected "'+x.name+'" to match "'+x.pattern+'", but got "'+F+'"');h+=x.prefix+F;continue}if(x.optional){x.partial&&(h+=x.prefix);continue}throw new TypeError('Expected "'+x.name+'" to be '+(x.repeat?"an array":"a string"))}return h}}function P(f){return f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function M(f){return f.replace(/([=!:$/()])/g,"\\$1")}function L(f){return f&&f.sensitive?"":"i"}function V(f,l){if(!l)return f;var s=f.source.match(/\((?!\?)/g);if(s)for(var T=0;T<s.length;T++)l.push({name:T,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return f}function ee(f,l,s){for(var T=[],O=0;O<f.length;O++)T.push(o(f[O],l,s).source);return new RegExp("(?:"+T.join("|")+")",L(s))}function z(f,l,s){return y(J(f,s),l,s)}function y(f,l,s){s=s||{};for(var T=s.strict,O=s.start!==!1,h=s.end!==!1,C=P(s.delimiter||K),H=s.delimiters||G,x=[].concat(s.endsWith||[]).map(P).concat("$").join("|"),A=O?"^":"",F=f.length===0,D=0;D<f.length;D++){var S=f[D];if(typeof S=="string")A+=P(S),F=D===f.length-1&&H.indexOf(S[S.length-1])>-1;else{var Q=S.repeat?"(?:"+S.pattern+")(?:"+P(S.delimiter)+"(?:"+S.pattern+"))*":S.pattern;l&&l.push(S),S.optional?S.partial?A+=P(S.prefix)+"("+Q+")?":A+="(?:"+P(S.prefix)+"("+Q+"))?":A+=P(S.prefix)+"("+Q+")"}}return h?(T||(A+="(?:"+C+")?"),A+=x==="$"?"$":"(?="+x+")"):(T||(A+="(?:"+C+"(?="+x+"))?"),F||(A+="(?="+C+"|"+x+")")),new RegExp(A,L(s))}function o(f,l,s){return f instanceof RegExp?V(f,l):Array.isArray(f)?ee(f,l,s):z(f,l,s)}},n2rz:function(Z,q,K){"use strict";var G=K("bfL6"),k=typeof BigInt64Array!="undefined";Z.exports=function J(m,b){if(m===b)return!0;if(m&&b&&typeof m=="object"&&typeof b=="object"){if(m.constructor!==b.constructor)return!1;var P,M,L;if(Array.isArray(m)){if(P=m.length,P!=b.length)return!1;for(M=P;M--!=0;)if(!J(m[M],b[M]))return!1;return!0}if(m instanceof Map&&b instanceof Map){if(m.size!==b.size)return!1;var V=G(m.entries()),ee;try{for(V.s();!(ee=V.n()).done;)if(M=ee.value,!b.has(M[0]))return!1}catch(s){V.e(s)}finally{V.f()}var z=G(m.entries()),y;try{for(z.s();!(y=z.n()).done;)if(M=y.value,!J(M[1],b.get(M[0])))return!1}catch(s){z.e(s)}finally{z.f()}return!0}if(m instanceof Set&&b instanceof Set){if(m.size!==b.size)return!1;var o=G(m.entries()),f;try{for(o.s();!(f=o.n()).done;)if(M=f.value,!b.has(M[0]))return!1}catch(s){o.e(s)}finally{o.f()}return!0}if(ArrayBuffer.isView(m)&&ArrayBuffer.isView(b)){if(P=m.length,P!=b.length)return!1;for(M=P;M--!=0;)if(m[M]!==b[M])return!1;return!0}if(m.constructor===RegExp)return m.source===b.source&&m.flags===b.flags;if(m.valueOf!==Object.prototype.valueOf)return m.valueOf()===b.valueOf();if(m.toString!==Object.prototype.toString)return m.toString()===b.toString();if(L=Object.keys(m),P=L.length,P!==Object.keys(b).length)return!1;for(M=P;M--!=0;)if(!Object.prototype.hasOwnProperty.call(b,L[M]))return!1;for(M=P;M--!=0;){var l=L[M];if(!J(m[l],b[l]))return!1}return!0}return m!==m&&b!==b}},su3W:function(Z,q,K){"use strict";K.d(q,"b",function(){return ee});var G=K("jfsG"),k=K.n(G);function J(y){return M(y)||P(y)||b(y)||m()}function m(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(y,o){if(!!y){if(typeof y=="string")return L(y,o);var f=Object.prototype.toString.call(y).slice(8,-1);if(f==="Object"&&y.constructor&&(f=y.constructor.name),f==="Map"||f==="Set")return Array.from(y);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return L(y,o)}}function P(y){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(y))return Array.from(y)}function M(y){if(Array.isArray(y))return L(y)}function L(y,o){(o==null||o>y.length)&&(o=y.length);for(var f=0,l=new Array(o);f<o;f++)l[f]=y[f];return l}var V=function(o,f,l){if(l){var s=J(l.keys()).find(function(O){return k()(O).test(o)});if(s)return l.get(s)}if(f){var T=Object.keys(f).find(function(O){return k()(O).test(o)});if(T)return f[T]}return{path:""}},ee=function(o,f){var l=o.pathname,s=l===void 0?"/":l,T=o.breadcrumb,O=o.breadcrumbMap,h=o.formatMessage,C=o.title,H=C===void 0?"Ant Design Pro":C,x=o.menu,A=x===void 0?{locale:!1}:x,F=f?"":H||"",D=V(s,T,O);if(!D)return{title:F,id:"",pageName:F};var S=D.name;return A.locale!==!1&&D.locale&&h&&(S=h({id:D.locale||"",defaultMessage:D.name})),S?f||!H?{title:S,id:D.locale||"",pageName:S}:{title:"".concat(S," - ").concat(H),id:D.locale||"",pageName:S}:{title:F,id:D.locale||"",pageName:F}},z=function(o,f){return ee(o,f).title};q.a=z}}]);

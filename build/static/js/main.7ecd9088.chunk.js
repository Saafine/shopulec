(this.webpackJsonpshopulec=this.webpackJsonpshopulec||[]).push([[0],{73:function(e,t,n){e.exports=n(88)},78:function(e,t,n){},79:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(78),n(79),n(65)),i=n(64),u=n(126),s=n(66),m=n(22),f=n(67),d=n(61),b=n.n(d),p=n(62),h=n.n(p),v=n(63),E=n.n(v),g=n(46),y=n(130),w=n(129),k=n(122),S=n(123),j={color:g.a[500]};var O=function(e){return o.a.createElement(o.a.Fragment,null,e.shopItems.map((function(t,n){return o.a.createElement("div",{key:n,className:"border-solid border-gray-300 border-b"},o.a.createElement(y.a,{className:"px-6",control:o.a.createElement(w.a,{icon:o.a.createElement(k.a,{style:j}),checkedIcon:o.a.createElement(S.a,null),checked:t.value,onChange:function(){return e.onShopItemClick(n)}}),label:t.label}))})))},C=n(124),x=n(128),I=n(125),W=n(19),R=n(60),A=n.n(R);var N=function(e){return o.a.createElement("div",{style:{height:"100%",width:"100%",left:0,top:0,position:"absolute"}},o.a.createElement("div",{onClick:e.onOverlayClick,style:{position:"relative",height:"100%",width:"100%",opacity:"0.6",background:"gray"}}))},T=n(127),F=n(59),P=n.n(F);var B=function(e){var t=Object(W.a)(),n=Object(a.useRef)(null),r=Object(a.useState)(""),c=Object(m.a)(r,2),l=c[0],i=c[1];return o.a.createElement("div",{style:{position:"absolute",borderTopLeftRadius:"20px",borderTopRightRadius:"20px",boxShadow:"0 0 0 1px rgba(0, 0, 0, 0.05)",bottom:"0",background:"white",width:"100%"}},o.a.createElement("div",{className:"p-8 flex justify-center items-center"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(l),i(""),n.current.focus()}},o.a.createElement(T.a,{inputRef:n,autoFocus:!0,label:"Add product",value:l,onChange:function(e){return i(e.target.value)}}),o.a.createElement("button",{type:"submit"},o.a.createElement(P.a,{className:"ml-5",style:{transform:"rotate(90deg)",color:t.palette.primary.main}})))))};var L=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),r=n[0],c=n[1],l=Object(W.a)(),i=function(){return c(!1)};return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(N,{onOverlayClick:i}),r&&o.a.createElement(B,{onSubmit:e.onSubmit,onBlur:i}),!r&&o.a.createElement("button",{onClick:function(){return c(!0)}},o.a.createElement(A.a,{style:{fontSize:"60px",color:l.palette.primary.main,position:"fixed",right:"5%",bottom:"5%"}})))},U=["Mro\u017cone owoce"].map((function(e){return{label:e,value:!1}}));function z(e,t){return e.map((function(e,n){return t!==n?Object(f.a)({},e):{label:e.label,value:!e.value}}))}var J=function(e){var t=Object(a.useState)(0),n=Object(m.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)([]),i=Object(m.a)(l,2),u=i[0],f=i[1],d=Object(a.useState)(U),p=Object(m.a)(d,2),v=p[0],g=p[1],y=function(e){f([].concat(Object(s.a)(u),[{value:!1,label:e}]))},w=function(e){f(u.filter((function(t,n){return e!==n})))},k=function(e){var t=u.findIndex((function(t){return t.label===e}));w(t)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{square:!0},o.a.createElement(x.a,{value:r,onChange:function(e,t){c(t)},variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary","aria-label":"icon label tabs"},o.a.createElement(I.a,{icon:o.a.createElement(b.a,null),label:"Zakupy"}),o.a.createElement(I.a,{icon:o.a.createElement(h.a,null),label:"Produkty"}),o.a.createElement(I.a,{icon:o.a.createElement(E.a,null),label:"Przepisy"}))),o.a.createElement("div",{hidden:0!==r},o.a.createElement(O,{shopItems:u,onShopItemClick:function(e){f(z(u,e)),setTimeout((function(){return w(e)}),100)}})),o.a.createElement("div",{hidden:1!==r},o.a.createElement(O,{shopItems:v,onShopItemClick:function(e){var t=v[e],n=t.value,a=t.label;n?k(a):y(v[e].label),g(z(v,e))}})),o.a.createElement(L,{onSubmit:y}))},M=function(){return"/"},q=Object(i.a)({typography:{button:{textTransform:"none"}},palette:{primary:{main:"#c62828"},secondary:{main:"#ff5252"}}});var D=function(){return o.a.createElement(u.a,{theme:q},o.a.createElement(l.a,null,o.a.createElement(J,{path:M()})))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()}},[[73,1,2]]]);
//# sourceMappingURL=main.7ecd9088.chunk.js.map
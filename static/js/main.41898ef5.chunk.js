(this["webpackJsonphooks-2-front"]=this["webpackJsonphooks-2-front"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(5),s=n.n(a),o=(n(11),n(12),n(1)),u=n(4),j=n.n(u),i=n(6);function h(t,e){var n=Object(c.useState)([]),r=Object(o.a)(n,2),a=r[0],s=r[1],u=Object(c.useState)(null),h=Object(o.a)(u,2),b=h[0],p=h[1],O=Object(c.useState)(!1),f=Object(o.a)(O,2),l=f[0],d=f[1];return Object(c.useEffect)((function(){(function(){var n=Object(i.a)(j.a.mark((function n(){var c,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,fetch(t,e);case 4:if((c=n.sent).ok){n.next=7;break}throw new Error(c.statusText);case 7:return n.next=9,c.json();case 9:r=n.sent,s(r),p(null),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),p(n.t0.message);case 17:return n.prev=17,d(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,14,17,20]])})));return function(){return n.apply(this,arguments)}})()()}),[t,e]),[a,l,b]}var b=n(0);var p=function(){var t=h("".concat("https://hooks-2.herokuapp.com","/data")),e=Object(o.a)(t,3),n=e[0];return e[1],e[2],Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"\u042d\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(b.jsx)("p",{children:n.status})]})};var O=function(){var t=h("".concat("https://hooks-2.herokuapp.com","/error")),e=Object(o.a)(t,3),n=(e[0],e[1],e[2]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"\u042d\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"}),n&&Object(b.jsx)("p",{children:n})]})};var f=function(){var t=h("".concat("https://hooks-2.herokuapp.com","/loading")),e=Object(o.a)(t,3),n=(e[0],e[1]);return e[2],Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"\u042d\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),n&&Object(b.jsx)("p",{children:"Loading..."})]})};var l=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsx)(O,{}),Object(b.jsx)(f,{})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.41898ef5.chunk.js.map
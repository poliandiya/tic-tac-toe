(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),l=n.n(a),i=n(2),o=(n(12),n(7)),s=(n(13),n(0)),u=function(e){var t=e.value,n=e.onClick;return Object(s.jsx)("button",{className:"Square",onClick:n,children:t})},j=(n(15),function(e){var t=e.squares,n=e.onClick;return Object(s.jsx)("div",{className:"Board",children:t.map((function(e,t){return Object(s.jsx)(u,{value:e,onClick:function(){return n(t)}},t)}))})}),b=(n(16),function(e){e.player1,e.player2;var t=Object(r.useState)(Array(9).fill(null)),n=Object(i.a)(t,2),c=n[0],a=n[1],l=Object(r.useState)(!0),u=Object(i.a)(l,2),b=u[0],O=u[1],d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(i.a)(t[n],3),c=r[0],a=r[1],l=r[2];if(e[c]&&e[c]===e[a]&&e[c]===e[l])return e[c]}return null}(c);return Object(s.jsxs)("div",{className:"Game",children:[Object(s.jsx)(j,{squares:c,onClick:function(e){var t=Object(o.a)(c);d||t[e]||(t[e]=b?"X":"O",a(t),O(!b))}}),Object(s.jsx)("div",{className:"Game__info",children:Object(s.jsxs)("div",{className:"Win",children:[Object(s.jsx)("p",{children:d?"Winner: "+d:c.every((function(e){return null!==e}))&&!d?"Draw!":"Next player: "+(b?"X":"O")}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{type:"button",onClick:function(){return a(Array(9).fill(null))},children:"Play again"}),Object(s.jsx)("button",{type:"button",onClick:function(){return window.location.reload()},children:"Reset game"})]})]})})]})});var O=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),l=Object(i.a)(a,2),o=l[0],u=l[1],j=Object(r.useState)(""),O=Object(i.a)(j,2),d=O[0],p=O[1],f=function(e){var t=e.target.value,n=e.target.name;if(!isNaN(t))throw new Error("".concat(n," field cannot be a number"));if(!t)throw new Error("".concat(n," field cannot be empty"));"player1"===n?u(t):p(t)};return Object(s.jsxs)("div",{className:"App",children:[!n&&Object(s.jsxs)("form",{className:"Form",onSubmit:function(){c(!0)},children:[Object(s.jsx)("label",{htmlFor:"player1",children:"Player 1: "}),Object(s.jsx)("input",{type:"text",id:"player1",value:o,name:"player1",placeholder:"Player 1",onChange:f,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"player2",children:"Player 2: "}),Object(s.jsx)("input",{type:"text",id:"player2",value:d,name:"player2",placeholder:"Player 2",onChange:f,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",children:"Start game"})]}),n&&Object(s.jsx)(b,{player1:o,player2:d})]})};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a765dd64.chunk.js.map
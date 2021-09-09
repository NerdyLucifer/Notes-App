(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),r=n.n(s),o=n(8),l=n(2),i=n(5),d=n(0),j=function(e){var t=e.note,n=e.handleDeleteNode,a=t.id,c=t.text,s=t.date;return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("span",{className:"text-area",children:c}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("small",{children:s}),Object(d.jsx)(i.a,{className:"delete-icon",size:"1.8rem",onClick:function(){n(a)}})]})]})},u=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(200),i=Object(l.a)(o,2),j=i[0],u=i[1];return Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)("textarea",{cols:"10",rows:"8",placeholder:"Type to add note...",onChange:function(e){return function(e){r(e.target.value),u(200-s.trim().length)}(e)},value:s}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsxs)("small",{children:["Characters remaining:",j]}),Object(d.jsx)("button",{className:"save",onClick:function(){s.trim().length<=200&&s.trim().length>0&&(t(s),r(""),u(200))},children:"Save"})]})]})},h=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNode;return Object(d.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(d.jsx)(j,{note:e,handleDeleteNode:a})})),Object(d.jsx)(u,{handleAddNote:n})]})},b=function(e){var t=e.handleSearchNote;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(i.b,{className:"search-icons",size:"1.3em"}),Object(d.jsx)("input",{type:"text",placeholder:"Type to search...",onChange:function(e){t(e.target.value)}})]})},O=function(e){var t=e.handleToggleDarkMode;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Notes"}),Object(d.jsx)("button",{className:"save",onClick:function(){return t((function(e){return!e}))},children:"Toggle Mode"})]})},x=n(9),f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],j=r[1],u=Object(a.useState)(!1),f=Object(l.a)(u,2),m=f[0],N=f[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n))}),[n]),Object(d.jsx)("div",{className:"".concat(m&&"dark-mode"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{handleToggleDarkMode:N}),Object(d.jsx)(b,{handleSearchNote:j}),Object(d.jsx)(h,{notes:n.filter((function(e){return e.text.toLowerCase().includes(i)})),handleAddNote:function(e){var t=new Date,a={id:Object(x.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[a]);c(s)},handleDeleteNode:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})})};n(15);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1944b05f.chunk.js.map
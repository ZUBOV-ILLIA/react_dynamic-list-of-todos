(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),o=c(2),i=c(1),a=(c(10),c(11),c(5)),l=c.n(a),r=(c(12),c(0)),d=function(e){var t=e.todosFromServer,c=e.selectUser,n=Object(i.useState)(""),s=Object(o.a)(n,2),a=s[0],d=s[1],u=Object(i.useState)("all"),j=Object(o.a)(u,2),b=j[0],h=j[1],m=t.filter((function(e){return!0===e.completed&&"completed"===b||(!1===e.completed&&"active"===b||"all"===b)})).filter((function(e){return e.title.includes(a)}));return Object(r.jsxs)("div",{className:"TodoList",children:[Object(r.jsx)("h2",{children:"Todos:"}),Object(r.jsx)("input",{className:"input",type:"text","data-cy":"filterByTitle",value:a,onChange:function(e){d(e.target.value)}}),Object(r.jsx)("div",{className:"select",children:Object(r.jsxs)("select",{value:b,onChange:function(e){h(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"all"}),Object(r.jsx)("option",{value:"active",children:"active"}),Object(r.jsx)("option",{value:"completed",children:"completed"})]})}),Object(r.jsx)("button",{type:"button",className:"button",children:"Randomize"}),Object(r.jsx)("div",{className:"TodoList__list-container",children:Object(r.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:m.map((function(e){return Object(r.jsxs)("li",{className:l()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(r.jsx)("p",{children:e.title})]}),Object(r.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ","data-cy":"userButton",type:"button",onClick:function(){c(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},u=(c(14),"https://mate.academy/students-api");var j=function(e){var t=e.selectedUserId,c=e.setSelectedUserId,n=Object(i.useState)(),s=Object(o.a)(n,2),a=s[0],l=s[1];return Object(i.useEffect)((function(){var e;(e=t,fetch("".concat(u,"/users/").concat(e)).then((function(e){return e.json()}))).then((function(e){return l(e)})).catch((function(e){console.log(e,"something wrong with syntax")}))}),[t]),Object(r.jsxs)("div",{className:"CurrentUser",children:[Object(r.jsx)("button",{className:" TodoList__user-button TodoList__user-button--red button ",type:"button",onClick:function(){c(0)},children:"clear"}),Object(r.jsx)("h2",{className:"CurrentUser__title",children:Object(r.jsx)("span",{children:"Selected user: ".concat(t)})}),Object(r.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:null===a||void 0===a?void 0:a.name}),Object(r.jsx)("p",{className:"CurrentUser__email",children:null===a||void 0===a?void 0:a.email}),Object(r.jsx)("p",{className:"CurrentUser__phone",children:null===a||void 0===a?void 0:a.phone})]})},b=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(0),a=Object(o.a)(s,2),l=a[0],b=a[1];return Object(i.useEffect)((function(){fetch("".concat(u,"/todos")).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"App__sidebar",children:Object(r.jsx)(d,{todosFromServer:c,selectUser:b})}),Object(r.jsx)("div",{className:"App__content",children:Object(r.jsx)("div",{className:"App__content-container",children:l?Object(r.jsx)(j,{selectedUserId:l,setSelectedUserId:b}):"No user selected"})})]})};s.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.978bd9ad.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",entry:"ContactList_entry__12DSb",number:"ContactList_number__14V4G"}},function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK",field:"ContactForm_field__2c9Zi"}},,function(t,e,n){t.exports={app:"App_app__1IksY",title:"App_title__1YcTA"}},,,function(t,e,n){t.exports={filter:"Filter_filter__1E5tH"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(9),r=n.n(c),s=(n(17),n(11)),i=n(2),o=n(4),u=n.n(o),l=n(0),b=function(t){var e=t.filter,n=t.contacts,a=t.onDeleteContact;return Object(l.jsx)("ul",{className:u.a.list,children:n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(l.jsxs)("li",{className:u.a.item,children:[Object(l.jsxs)("p",{className:u.a.entry,children:[Object(l.jsx)("span",{children:n}),Object(l.jsx)("span",{className:u.a.number,children:c})]}),Object(l.jsx)("button",{type:"button",onClick:function(){return a(e)},children:"Delete"})]},e)}))})},d=n(5),m=n.n(d),j="name",f="number",p=function(t){var e=t.onAddContact,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),b=u[0],d=u[1],p=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case j:return void s(a);case f:return void d(a);default:return}};return Object(l.jsxs)("form",{className:m.a.form,onSubmit:function(t){t.preventDefault(),e(r,b),s(""),d("")},children:[Object(l.jsxs)("label",{className:m.a.field,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:r,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(l.jsxs)("label",{className:m.a.field,children:["Number",Object(l.jsx)("input",{type:"tel",name:"number",value:b,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(l.jsx)("button",{className:m.a.button,type:"submit",children:"Add contact"})]})},h=n(10),O=n.n(h),x=function(t){var e=t.onFilter,n=t.filter;return Object(l.jsxs)("div",{className:O.a.filter,children:[Object(l.jsx)("p",{children:"Find contacts by name"}),Object(l.jsx)("input",{type:"text",name:"filter",onChange:e,value:n})]})},_=n(7),C=n.n(_),v=n(12),N=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],g=function(){var t=Object(a.useState)(N),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],d=o[1];return Object(a.useEffect)((function(){var t=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return null}}("contacts");t&&t.length>0&&c(t)}),[]),Object(a.useEffect)((function(){!function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){return null}}("contacts",n)}),[n]),Object(l.jsxs)("div",{className:C.a.app,children:[Object(l.jsx)("h1",{className:C.a.title,children:"Phonebook"}),Object(l.jsx)(p,{onAddContact:function(t,e){var a=function(t){return t.split(" ").map((function(t){var e=t.charAt(0).toUpperCase(),n=t.substring(1);return"".concat(e).concat(n)})).join(" ")}(t);if(n.some((function(t){return t.name===a})))alert("".concat(a," is already in contacts."));else{var r={name:a,number:e,id:Object(v.a)()};c((function(t){return[].concat(Object(s.a)(t),[r])}))}}}),Object(l.jsx)("h2",{className:C.a.title,children:"Contacts"}),Object(l.jsx)(x,{filter:u,onFilter:function(t){d(t.target.value)}}),Object(l.jsx)(b,{filter:u,contacts:n,onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};r.a.render(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.23837f9d.chunk.js.map
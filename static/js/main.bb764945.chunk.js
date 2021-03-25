(this["webpackJsonpjs-band-store"]=this["webpackJsonpjs-band-store"]||[]).push([[0],{36:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(2),o=c.n(a),s=c(10),r=c.n(s),n=c(3),i=c(6),b=c(25),l=c(9),j=c(1),O=function(e,t){switch(t.type){case"AUTHORIZE_USER_STARTED":return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{isAuthorized:!1,error:null})});case"AUTHORIZE_USER_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{isAuthorized:!0,userName:t.payload.username,avatar:t.payload.avatar,token:t.payload.token})});case"AUTHORIZE_USER_FAILURE":return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{isAuthorized:!0,error:t.payload.error})});case"GET_BOOK_CATALOG_STARTED":return Object(j.a)(Object(j.a)({},e),{},{booksCatalog:Object(j.a)(Object(j.a)({},e.booksCatalog),{},{isLoading:!0,error:null})});case"GET_BOOK_CATALOG_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{booksCatalog:Object(j.a)(Object(j.a)({},e.booksCatalog),{},{isLoading:!1,books:t.payload})});case"GET_BOOK_CATALOG_FAILURE":return Object(j.a)(Object(j.a)({},e),{},{booksCatalog:Object(j.a)(Object(j.a)({},e.booksCatalog),{},{isLoading:!1,error:t.payload.error})});case"GET_BOOK_DETAILS_STARTED":return Object(j.a)(Object(j.a)({},e),{},{book:Object(j.a)(Object(j.a)({},e.book),{},{isLoading:!0,error:null})});case"GET_BOOK_DETAILS_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{book:Object(j.a)(Object(j.a)({},e.book),{},{isActive:!0,isLoading:!1,details:t.payload})});case"GET_BOOK_DETAILS_FAILURE":return Object(j.a)(Object(j.a)({},e),{},{book:Object(j.a)(Object(j.a)({},e.book),{},{isLoading:!1,error:t.payload.error})});case"PURCHASE_BOOKS_STARTED":return Object(j.a)(Object(j.a)({},e),{},{purchase:Object(j.a)(Object(j.a)({},e.purchase),{},{isLoading:!0,error:null})});case"PURCHASE_BOOKS_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{purchase:Object(j.a)(Object(j.a)({},e.purchase),{},{isActive:!0,isLoading:!1,message:t.payload}),cart:Object(j.a)(Object(j.a)({},e.cart),{},{isActive:!1,books:[]})});case"PURCHASE_BOOKS_FAILURE":return Object(j.a)(Object(j.a)({},e),{},{purchase:Object(j.a)(Object(j.a)({},e.purchase),{},{isLoading:!1,error:t.payload.error})});case"REDIRECT_TO_MAIN":return Object(j.a)(Object(j.a)({},e),{},{book:Object(j.a)(Object(j.a)({},e.book),{},{details:{},isActive:!1}),cart:Object(j.a)(Object(j.a)({},e.cart),{},{isActive:!1})});case"REDIRECT_TO_CART":return Object(j.a)(Object(j.a)({},e),{},{book:Object(j.a)(Object(j.a)({},e.book),{},{isActive:!1}),cart:Object(j.a)(Object(j.a)({},e.cart),{},{isActive:!0})});case"ADD_TO_CART":return Object(j.a)(Object(j.a)({},e),{},{book:Object(j.a)(Object(j.a)({},e.book),{},{isActive:!1}),cart:Object(j.a)(Object(j.a)({},e.cart),{},{isActive:!0,books:[].concat(Object(l.a)(e.cart.books),Object(l.a)(t.payload))})});case"SIGN_OUT":return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{isAuthorized:!1,userName:"",avatar:"",token:""})});default:return Object(j.a)({},e)}},d=localStorage.pechPavloBookStore&&JSON.parse(localStorage.pechPavloBookStore),u={isLoading:!1,user:{isAuthorized:!!d,isLoading:!1,userName:(null===d||void 0===d?void 0:d.username)||"",token:(null===d||void 0===d?void 0:d.token)||"",avatar:(null===d||void 0===d?void 0:d.avatar)||"",error:null},booksCatalog:{books:[],isLoading:!1,error:null},book:{details:{},isActive:!1,isLoading:!1,error:null},cart:{isActive:!1,books:[]},purchase:{isActive:!1,isLoading:!1,message:null,error:null},error:null},h=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):i.c)(Object(i.a)(b.a)),p=Object(i.d)(O,u,h),_=(c(36),c(7)),x=c.n(_);x.a.defaults.baseURL="https://js-band-store-api.glitch.me/";var m=function(e){return function(t){t({type:"GET_BOOK_CATALOG_STARTED"}),x.a.get("books",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){t({type:"GET_BOOK_CATALOG_SUCCESS",payload:e.data})})).catch((function(e){return t(function(e){return{type:"GET_BOOK_CATALOG_FAILURE",payload:{error:e}}}(e.message))}))}},k=(c(55),c.p+"static/media/shopping-cart.a96af164.svg"),v=c(0),A=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e})),c=t.user,a=t.cart;return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"header-authorization",children:[Object(v.jsx)("h4",{className:"user-name",children:c.userName}),Object(v.jsx)("button",{type:"button",onClick:function(){e({type:"SIGN_OUT"}),localStorage.removeItem("pechPavloBookStore")},children:"Sign Out"})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"header-cart",children:[Object(v.jsx)("button",{className:"to-main-button",type:"button",onClick:function(){e({type:"REDIRECT_TO_MAIN"})},children:Object(v.jsx)("h1",{children:"JS Band Store"})}),Object(v.jsxs)("button",{type:"button",className:"cart-button",onClick:function(){e({type:"REDIRECT_TO_CART"})},children:[Object(v.jsx)("img",{src:k,className:"shopping-cart",alt:"shopping-cart"}),"Cart (",a.books.length,")"]})]}),Object(v.jsx)("hr",{})]})},E=c(5),f=(c(57),function(){var e=Object(n.b)(),t=Object(a.useState)(""),c=Object(E.a)(t,2),o=c[0],s=c[1],r=Object(a.useState)(!0),i=Object(E.a)(r,2),b=i[0],l=i[1];return Object(v.jsxs)("div",{className:"login-page",children:[Object(v.jsx)("h2",{children:"JS Band Store"}),Object(v.jsxs)("form",{id:"authorization",onSubmit:function(t){var c;t.preventDefault(),o.length>3&&o.length<17?(e((c=o,function(e){e({type:"AUTHORIZE_USER_STARTED"}),x.a.post("signin",{username:c}).then((function(t){localStorage.pechPavloBookStore=JSON.stringify(t.data),e({type:"AUTHORIZE_USER_SUCCESS",payload:t.data}),e(m(t.data.token))})).catch((function(t){return e(function(e){return{type:"AUTHORIZE_USER_FAILURE",payload:{error:e}}}(t.message))}))})),s(""),l(!0)):l(!1)},children:[!b&&Object(v.jsx)("span",{className:"name-error",children:"Username is not valid"}),Object(v.jsxs)("label",{htmlFor:"name-input",children:["Name",Object(v.jsx)("input",{id:"name-input",placeholder:"Event name",type:"text",required:!0,value:o,onChange:function(e){l(!0),s(e.target.value)}})]}),Object(v.jsx)("button",{type:"submit",children:"Log In"})]})]})}),S=(c(58),function(e){var t=e.cardBook,c=Object(n.c)((function(e){return e})).user,a=Object(n.b)();return Object(v.jsxs)("article",{className:"book-card",children:[Object(v.jsx)("div",{className:"book-card_image-container",children:Object(v.jsx)("img",{src:t.cover,alt:"cover of ".concat(t.title)})}),Object(v.jsxs)("div",{className:"book-card-content",children:[Object(v.jsx)("h3",{className:"book-card_title",children:"".concat(t.title)}),Object(v.jsx)("p",{className:"book-card_subtitle",children:"".concat(t.author)})]}),Object(v.jsxs)("div",{className:"book-card-footer",children:[Object(v.jsx)("span",{className:"book-card_price",children:"".concat(t.price,"$")}),Object(v.jsx)("button",{className:"book-card_button",type:"button",onClick:function(){var e,o;a((e=c.token,o=t.id,function(t){t({type:"GET_BOOK_DETAILS_STARTED"}),x.a.get("books/".concat(o),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){t({type:"GET_BOOK_DETAILS_SUCCESS",payload:e.data})})).catch((function(e){return t(function(e){return{type:"GET_BOOK_DETAILS_FAILURE",payload:{error:e}}}(e.message))}))}))},children:"View"})]})]})}),g=(c(59),function(){var e=Object(n.c)((function(e){return e})),t=e.cart,c=e.user,a=Object(n.b)();return Object(v.jsx)("div",{className:"cart-container",children:Object(v.jsxs)("div",{className:"cart",children:[Object(v.jsxs)("div",{className:"cart-controls",children:[Object(v.jsx)("button",{className:"cart_to-catalog_button",type:"button",onClick:function(){a({type:"REDIRECT_TO_MAIN"})},children:"Back To Catalog"}),Object(v.jsx)("button",{className:"cart_purchase-button",type:"button",onClick:function(){var e,o;a((e=c.token,o=t.books,function(t){t({type:"PURCHASE_BOOKS_STARTED"}),x.a.post("purchase",{books:Object(l.a)(o)},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){t({type:"PURCHASE_BOOKS_SUCCESS",payload:e.data})})).catch((function(e){return t(function(e){return{type:"PURCHASE_BOOKS_FAILURE",payload:{error:e}}}(e.message))}))}))},children:"Purchase"})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Count"}),Object(v.jsx)("th",{children:"Price"}),Object(v.jsx)("th",{children:"Total"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Eloquent Javascript"}),Object(v.jsx)("td",{children:"2"}),Object(v.jsx)("td",{children:"15.38"}),Object(v.jsx)("td",{children:"30.76"})]})})]})}),Object(v.jsx)("div",{className:"cart-cart_total-price",children:Object(v.jsx)("p",{children:"Total Price: ".concat("100"," $")})})]})})}),T=c.p+"static/media/tags.a8ecab46.svg",C=(c(60),function(){var e=Object(n.c)((function(e){return e})),t=e.book,c=e.cart,o=Object(a.useState)(""),s=Object(E.a)(o,2),r=s[0],i=s[1],b=Object(n.b)(),l=c.books.reduce((function(e,c){return c===t.details.id?e+1:e}),0),j=t.details.count-l,O=Array(+r).fill(t.details.id),d=t.details.tags.map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(", ");return Object(v.jsxs)("div",{className:"book-details-container",children:[Object(v.jsxs)("div",{className:"book-details",children:[Object(v.jsxs)("div",{className:"book-details_image-container",children:[Object(v.jsx)("img",{src:t.details.cover,alt:"cover of ".concat(t.details.title)}),Object(v.jsx)("span",{className:"book-details_description",children:t.details.description})]}),Object(v.jsxs)("div",{className:"book-details-content",children:[Object(v.jsx)("h3",{className:"book-details_title",children:"".concat(t.details.title)}),Object(v.jsx)("p",{className:"book-details_subtitle",children:"".concat(t.details.author)}),Object(v.jsxs)("div",{className:"book-details_tags-container",children:[Object(v.jsx)("img",{src:T,alt:"tags of ".concat(t.details.title)}),Object(v.jsx)("p",{className:"book-details_tags",children:"".concat(d)})]})]})]}),Object(v.jsx)("div",{className:"book-details-cart-container",children:Object(v.jsxs)("div",{className:"book-details-cart",children:[Object(v.jsxs)("div",{className:"book-details-cart_price",children:[Object(v.jsx)("p",{children:"Price, $"}),Object(v.jsx)("p",{children:t.details.price})]}),Object(v.jsxs)("label",{className:"book-count-label",htmlFor:"book-count",children:["Count",Object(v.jsx)("input",{type:"number",id:"book-count",name:"book-count",min:"0",max:j,value:+r||"",onChange:function(e){return i(e.target.value)}})]}),Object(v.jsxs)("div",{className:"book-details-cart_total-price",children:[Object(v.jsx)("p",{children:"Total Price, $"}),Object(v.jsx)("p",{children:+(t.details.price*r).toFixed(2)})]}),Object(v.jsxs)("div",{className:"book-details-cart_footer",children:[Object(v.jsx)("button",{className:"book-details_button",type:"button",onClick:function(){b({type:"REDIRECT_TO_MAIN"})},children:"Back To Catalog"}),Object(v.jsx)("button",{className:"book-details_cart-button",type:"button",onClick:function(){b({type:"ADD_TO_CART",payload:O})},children:"Add To Cart"})]})]})})]})}),N=(c(61),function(){var e=Object(n.c)((function(e){return e})),t=e.booksCatalog,c=e.book,o=e.cart,s=Object(a.useState)([]),r=Object(E.a)(s,2),i=r[0],b=r[1],l=Object(a.useState)([]),j=Object(E.a)(l,2),O=j[0],d=j[1],u=Object(a.useState)([]),h=Object(E.a)(u,2),p=h[0],_=h[1];Object(a.useEffect)((function(){d(t.books),b(t.books)}),[t]),Object(a.useEffect)((function(){d(i),_("")}),[i]);return Object(v.jsxs)("div",{className:"main",children:[!c.isActive&&!o.isActive&&Object(v.jsxs)("div",{className:"main-controls",children:[Object(v.jsxs)("label",{htmlFor:"book-seach",children:[Object(v.jsx)("input",{list:"books-list",name:"browser",id:"book-seach",placeholder:"search",value:p,onChange:function(e){_(e.target.value);var t=e.target.value.toLowerCase();d(i.filter((function(e){return e.title.toLowerCase().includes(t)})))},onFocus:function(){_(""),d(i)}}),Object(v.jsx)("datalist",{id:"books-list",children:i.map((function(e){return Object(v.jsx)("option",{value:e.title,children:" "},e.id)}))})]}),Object(v.jsx)("label",{htmlFor:"price-filter",children:Object(v.jsxs)("select",{id:"price-filter",onChange:function(e){var c=e.target.value.split(":"),a=+c[0],o=+c[1];b(t.books.filter((function(e){return e.price>=a&&e.price<=o})))},children:[Object(v.jsx)("option",{value:"0:Infinity ",children:"Price"}),Object(v.jsx)("option",{value:"0:25",children:"0 < price < 25"}),Object(v.jsx)("option",{value:"25:50",children:"25 < price < 50"}),Object(v.jsx)("option",{value:"50:Infinity ",children:"price > 50"})]})})]}),Object(v.jsxs)("div",{className:"main-content",children:[!c.isActive&&!o.isActive&&Object(v.jsx)("ul",{className:"book-list",children:O.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(S,{cardBook:e})},e.id)}))}),c.isActive&&Object(v.jsx)(C,{}),o.isActive&&Object(v.jsx)(g,{})]}),Object(v.jsx)("hr",{})]})});var y=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e})),c=t.isLoading,o=t.user;return t.booksCatalog,Object(a.useEffect)((function(){o.isAuthorized&&e(m(o.token))}),[]),c?Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Loading ..."}),Object(v.jsx)("span",{className:"loading-ring"})]}):Object(v.jsxs)("div",{className:"App",children:[!o.isAuthorized&&Object(v.jsx)(f,{}),o.isAuthorized&&Object(v.jsx)(A,{}),o.isAuthorized&&Object(v.jsx)(N,{})]})};r.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(n.a,{store:p,children:Object(v.jsx)(y,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.bb764945.chunk.js.map
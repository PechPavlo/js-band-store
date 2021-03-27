(this["webpackJsonpjs-band-store"]=this["webpackJsonpjs-band-store"]||[]).push([[0],{46:function(e,t,c){},65:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),o=c(19),s=c.n(o),n=c(3),i=c(15),b=c(37),j=c(12),l=c(2),d=function(e,t){switch(t.type){case"AUTHORIZE_USER_STARTED":return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)(Object(l.a)({},e.user),{},{isAuthorized:!1,error:null}),error:null});case"AUTHORIZE_USER_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)(Object(l.a)({},e.user),{},{isAuthorized:!0,userName:t.payload.username,avatar:t.payload.avatar,token:t.payload.token})});case"AUTHORIZE_USER_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)(Object(l.a)({},e.user),{},{isAuthorized:!0,error:t.payload.error}),error:t.payload.error});case"GET_BOOK_CATALOG_STARTED":return Object(l.a)(Object(l.a)({},e),{},{booksCatalog:Object(l.a)(Object(l.a)({},e.booksCatalog),{},{isLoading:!0,error:null}),error:null});case"GET_BOOK_CATALOG_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{booksCatalog:Object(l.a)(Object(l.a)({},e.booksCatalog),{},{isLoading:!1,books:t.payload})});case"GET_BOOK_CATALOG_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{booksCatalog:Object(l.a)(Object(l.a)({},e.booksCatalog),{},{isLoading:!1,error:t.payload.error}),error:t.payload.error});case"GET_BOOK_DETAILS_STARTED":return Object(l.a)(Object(l.a)({},e),{},{book:Object(l.a)(Object(l.a)({},e.book),{},{isLoading:!0,error:null}),error:null});case"GET_BOOK_DETAILS_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{book:Object(l.a)(Object(l.a)({},e.book),{},{isLoading:!1,details:t.payload})});case"GET_BOOK_DETAILS_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{book:Object(l.a)(Object(l.a)({},e.book),{},{isLoading:!1,error:t.payload.error}),error:t.payload.error});case"PURCHASE_BOOKS_STARTED":return Object(l.a)(Object(l.a)({},e),{},{purchase:Object(l.a)(Object(l.a)({},e.purchase),{},{isLoading:!0,error:null}),error:null});case"PURCHASE_BOOKS_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{purchase:Object(l.a)(Object(l.a)({},e.purchase),{},{isActive:!0,isLoading:!1,message:t.payload}),cart:Object(l.a)(Object(l.a)({},e.cart),{},{books:[]})});case"PURCHASE_BOOKS_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{purchase:Object(l.a)(Object(l.a)({},e.purchase),{},{isLoading:!1,error:t.payload.error}),error:t.payload.error});case"RESET_ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:null});case"CLOSE_PURCHASE_MODAL":return Object(l.a)(Object(l.a)({},e),{},{purchase:Object(l.a)(Object(l.a)({},e.purchase),{},{isActive:!1,message:null,books:[]})});case"ADD_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:Object(l.a)(Object(l.a)({},e.cart),{},{books:[].concat(Object(j.a)(e.cart.books),Object(j.a)(t.payload))}),purchase:Object(l.a)(Object(l.a)({},e.purchase),{},{books:[].concat(Object(j.a)(e.purchase.books),Object(j.a)(t.payload))})});case"SIGN_OUT":return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)(Object(l.a)({},e.user),{},{isAuthorized:!1,userName:"",avatar:"",token:""})});default:return Object(l.a)({},e)}},u=localStorage.pechPavloBookStore&&JSON.parse(localStorage.pechPavloBookStore),O={isLoading:!1,user:{isAuthorized:!!u,isLoading:!1,userName:(null===u||void 0===u?void 0:u.username)||"",token:(null===u||void 0===u?void 0:u.token)||"",avatar:(null===u||void 0===u?void 0:u.avatar)||"",error:null},booksCatalog:{books:[],isLoading:!1,error:null},book:{details:{},isLoading:!1,error:null},cart:{books:[]},purchase:{isActive:!1,isLoading:!1,books:[],message:null,error:null},error:null},h=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):i.c)(Object(i.a)(b.a)),p=Object(i.d)(d,O,h),x=(c(46),c(11)),m=c(5),g=c(16),f=c.n(g);f.a.defaults.baseURL="https://js-band-store-api.glitch.me/";var _=function(e){return function(t){t({type:"GET_BOOK_CATALOG_STARTED"}),f.a.get("books",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){t({type:"GET_BOOK_CATALOG_SUCCESS",payload:e.data})})).catch((function(e){return t(function(e){return{type:"GET_BOOK_CATALOG_FAILURE",payload:{error:e}}}(e.message))}))}},v=function(e,t){return function(c){c({type:"GET_BOOK_DETAILS_STARTED"}),f.a.get("books/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){c({type:"GET_BOOK_DETAILS_SUCCESS",payload:e.data})})).catch((function(e){return c(function(e){return{type:"GET_BOOK_DETAILS_FAILURE",payload:{error:e}}}(e.message))}))}},k=(c(65),c.p+"static/media/shopping-cart.a96af164.svg"),S=c(0),E=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e})),c=t.user,a=t.cart;return Object(S.jsxs)("div",{className:"header",children:[Object(S.jsxs)("div",{className:"header-authorization",children:[Object(S.jsx)("h4",{className:"user-name",children:c.userName}),Object(S.jsx)("button",{type:"button",onClick:function(){e({type:"SIGN_OUT"}),localStorage.removeItem("pechPavloBookStore")},children:"Sign Out"})]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{className:"header-cart",children:[Object(S.jsx)(x.b,{activeClassName:"nav_link-active",className:"to-main-button",to:"/js-band-store/catalog",children:Object(S.jsx)("h1",{children:"JS Band Store"})}),Object(S.jsxs)(x.b,{activeClassName:"nav_link-active",className:"cart-button",to:"/js-band-store/cart",children:[" ",Object(S.jsx)("img",{src:k,className:"shopping-cart",alt:"shopping-cart"}),"Cart (",a.books.length,")"]})]}),Object(S.jsx)("hr",{})]})},A=c(13),N=(c(68),function(){var e=Object(n.b)(),t=Object(a.useState)(""),c=Object(A.a)(t,2),r=c[0],o=c[1],s=Object(a.useState)(!0),i=Object(A.a)(s,2),b=i[0],j=i[1];return Object(S.jsxs)("div",{className:"login-page",children:[Object(S.jsx)("h2",{children:"JS Band Store"}),Object(S.jsxs)("form",{id:"authorization",onSubmit:function(t){var c;t.preventDefault(),r.length>3&&r.length<17?(e((c=r,function(e){e({type:"AUTHORIZE_USER_STARTED"}),f.a.post("signin",{username:c}).then((function(t){localStorage.pechPavloBookStore=JSON.stringify(t.data),e({type:"AUTHORIZE_USER_SUCCESS",payload:t.data}),e(_(t.data.token))})).catch((function(t){return e(function(e){return{type:"AUTHORIZE_USER_FAILURE",payload:{error:e}}}(t.message))}))})),o(""),j(!0)):j(!1)},children:[!b&&Object(S.jsx)("span",{className:"name-error",children:"Username is not valid"}),Object(S.jsxs)("label",{htmlFor:"name-input",children:["Name",Object(S.jsx)("input",{id:"name-input",placeholder:"Event name",type:"text",required:!0,value:r,onChange:function(e){j(!0),o(e.target.value)}})]}),Object(S.jsx)("button",{type:"submit",children:"Log In"})]})]})}),C=(c(69),function(e){var t=e.cardBook,c=Object(n.c)((function(e){return e})).user,a=Object(n.b)(),r=Object(m.g)();return Object(S.jsxs)("article",{className:"book-card",children:[Object(S.jsx)("div",{className:"book-card_image-container",children:Object(S.jsx)("img",{src:t.cover,alt:"cover of ".concat(t.title)})}),Object(S.jsxs)("div",{className:"book-card-content",children:[Object(S.jsx)("h3",{className:"book-card_title",children:"".concat(t.title)}),Object(S.jsx)("p",{className:"book-card_subtitle",children:"".concat(t.author)})]}),Object(S.jsxs)("div",{className:"book-card-footer",children:[Object(S.jsx)("span",{className:"book-card_price",children:"".concat(t.price,"$")}),Object(S.jsx)("button",{className:"book-card_button",type:"button",onClick:function(){a(v(c.token,t.id)),r.push("/js-band-store/catalog/".concat(t.id))},children:"View"})]})]})}),T=(c(70),function(){var e=Object(n.c)((function(e){return e})).booksCatalog,t=Object(a.useState)([]),c=Object(A.a)(t,2),r=c[0],o=c[1],s=Object(a.useState)([]),i=Object(A.a)(s,2),b=i[0],j=i[1],l=Object(a.useState)([]),d=Object(A.a)(l,2),u=d[0],O=d[1];Object(a.useEffect)((function(){j(e.books),o(e.books)}),[e]),Object(a.useEffect)((function(){j(r),O("")}),[r]);return Object(S.jsxs)("div",{className:"main",children:[Object(S.jsxs)("div",{className:"main-controls",children:[Object(S.jsxs)("label",{htmlFor:"book-seach",children:[Object(S.jsx)("input",{list:"books-list",name:"browser",id:"book-seach",placeholder:"search",value:u,onChange:function(e){O(e.target.value);var t=e.target.value.toLowerCase();j(r.filter((function(e){return e.title.toLowerCase().includes(t)})))},onFocus:function(){O(""),j(r)}}),Object(S.jsx)("datalist",{id:"books-list",children:r.map((function(e){return Object(S.jsx)("option",{value:e.title,children:" "},e.id)}))})]}),Object(S.jsx)("label",{htmlFor:"price-filter",children:Object(S.jsxs)("select",{id:"price-filter",onChange:function(t){var c=t.target.value.split(":"),a=+c[0],r=+c[1];o(e.books.filter((function(e){return e.price>=a&&e.price<=r})))},children:[Object(S.jsx)("option",{value:"0:Infinity ",children:"Price"}),Object(S.jsx)("option",{value:"0:25",children:"0 < price < 25"}),Object(S.jsx)("option",{value:"25:50",children:"25 < price < 50"}),Object(S.jsx)("option",{value:"50:Infinity ",children:"price > 50"})]})})]}),Object(S.jsx)("div",{className:"main-content",children:Object(S.jsx)("ul",{className:"book-list",children:b.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(C,{cardBook:e})},e.id)}))})})]})}),y=(c(71),function(){var e=Object(n.c)((function(e){return e})),t=e.purchase,c=e.booksCatalog,a=Object(j.a)(new Set(Object(j.a)(t.books))),r=function(e){var a=c.books.find((function(t){return t.id===e})),r=t.books.reduce((function(t,c){return c===e?t+1:t}),0),o=a.price;return{currentName:a.title,countInCart:r,currentPrice:o,currentTotalPrice:+(o*r).toFixed(2)}};return Object(S.jsxs)("div",{className:"cart-table",children:[Object(S.jsxs)("table",{className:"table",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Name"}),Object(S.jsx)("th",{children:"Count"}),Object(S.jsx)("th",{children:"Price"}),Object(S.jsx)("th",{children:"Total"})]})}),Object(S.jsx)("tbody",{children:a.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:r(e).currentName}),Object(S.jsx)("td",{children:r(e).countInCart}),Object(S.jsx)("td",{children:r(e).currentPrice}),Object(S.jsx)("td",{children:r(e).currentTotalPrice})]},e)}))})]}),Object(S.jsx)("div",{className:"cart-cart_total-price",children:Object(S.jsx)("p",{children:"Total Price: ".concat(+a.reduce((function(e,t){return r(t).currentTotalPrice+e}),0).toFixed(2)," $")})})]})}),L=(c(72),function(){var e=Object(n.b)(),t=Object(m.g)(),c=function(c){"purchase-wrapper"!==c.target.id&&"purchase_close-button"!==c.target.id||(e({type:"CLOSE_PURCHASE_MODAL"}),t.push("/js-band-store/catalog"))};return Object(S.jsx)("div",{id:"purchase-wrapper",role:"button",tabIndex:"0",className:"purchase-container",onClick:c,onKeyPress:c,children:Object(S.jsxs)("div",{className:"purchase",children:[Object(S.jsx)("p",{children:"You successfully placed an order!"}),Object(S.jsx)(y,{}),Object(S.jsx)("div",{className:"purchase-controls",children:Object(S.jsx)("button",{id:"purchase_close-button",type:"button",children:"Close"})})]})})}),R=(c(73),function(){var e=Object(n.c)((function(e){return e})),t=e.cart,c=e.user,a=e.purchase,r=Object(n.b)();return Object(S.jsx)("div",{className:"cart-container",children:Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsx)("div",{className:"cart-controls",children:Object(S.jsx)("button",{className:"cart_purchase-button",type:"button",disabled:!t.books.length,onClick:function(){var e,a;r((e=c.token,a=t.books,function(t){t({type:"PURCHASE_BOOKS_STARTED"}),f.a.post("purchase",{books:Object(j.a)(a)},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){t({type:"PURCHASE_BOOKS_SUCCESS",payload:e.data})})).catch((function(e){return t(function(e){return{type:"PURCHASE_BOOKS_FAILURE",payload:{error:e}}}(e.message))}))}))},children:"Purchase"})}),!!t.books.length&&Object(S.jsx)(y,{}),!t.books.length&&Object(S.jsxs)("div",{className:"empty-cart",children:[Object(S.jsx)("img",{src:k,alt:"shopping-cart"}),Object(S.jsx)("p",{children:"Cart empty..."})]}),a.isActive&&Object(S.jsx)(L,{})]})})}),U=c.p+"static/media/tags.a8ecab46.svg",I=(c(74),function(){var e,t=Object(m.h)().id,c=Object(n.b)(),r=Object(n.c)((function(e){return e})),o=r.book,s=r.user,i=r.cart,b=(null===(e=o.details)||void 0===e?void 0:e.id)===t;if(Object(a.useEffect)((function(){b||c(v(s.token,t))}),[o]),!b)return Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Loading ..."}),Object(S.jsx)("span",{className:"loading-ring"})]});var j=Object(a.useState)("1"),l=Object(A.a)(j,2),d=l[0],u=l[1],O=Object(a.useState)(""),h=Object(A.a)(O,2),p=h[0],g=h[1],f=i.books.reduce((function(e,c){return c==="".concat(t)?e+1:e}),0),_=o.details.count-f,k=Array(+d).fill("".concat(t)),E=o.details.tags.map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(", ");return Object(S.jsxs)("div",{className:"book-details-container",children:[Object(S.jsxs)("div",{className:"book-details",children:[Object(S.jsxs)("div",{className:"book-details_image-container",children:[Object(S.jsx)("img",{src:o.details.cover,alt:"cover of ".concat(o.details.title)}),Object(S.jsx)("span",{className:"book-details_description",children:o.details.description})]}),Object(S.jsxs)("div",{className:"book-details-content",children:[Object(S.jsx)("h3",{className:"book-details_title",children:"".concat(o.details.title)}),Object(S.jsx)("p",{className:"book-details_subtitle",children:"".concat(o.details.author)}),Object(S.jsxs)("div",{className:"book-details_tags-container",children:[Object(S.jsx)("img",{src:U,alt:"tags of ".concat(o.details.title)}),Object(S.jsx)("p",{className:"book-details_tags",children:"".concat(E)})]})]})]}),Object(S.jsx)("div",{className:"book-details-cart-container",children:Object(S.jsxs)("div",{className:"book-details-cart",children:[Object(S.jsxs)("div",{className:"book-details-cart_price",children:[Object(S.jsx)("p",{children:"Price, $"}),Object(S.jsx)("p",{children:o.details.price})]}),Object(S.jsxs)("label",{className:"book-count-label",htmlFor:"book-count",children:["Count    ".concat(p),Object(S.jsx)("input",{type:"number",id:"book-count",name:"book-count",min:"0",max:_,value:+d,onChange:function(e){e.target.value<=_?(u(e.target.value),g("")):g("-   max limit ".concat(_))}})]}),Object(S.jsxs)("div",{className:"book-details-cart_total-price",children:[Object(S.jsx)("p",{children:"Total Price, $"}),Object(S.jsx)("p",{children:+(o.details.price*d).toFixed(2)})]}),Object(S.jsx)("div",{className:"book-details-cart_footer",children:Object(S.jsx)(x.b,{activeClassName:"nav_link-active",className:"book-details_cart-button",to:"/js-band-store/cart",onClick:function(){c({type:"ADD_TO_CART",payload:k})},children:"Add To Cart"})})]})})]})}),B=(c(75),function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e})).error,c=Object(m.g)(),a=function(t){"purchase-wrapper"!==t.target.id&&"purchase_close-button"!==t.target.id||(e({type:"RESET_ERROR"}),c.push("/js-band-store/catalog"))};return Object(S.jsx)("div",{id:"purchase-wrapper",role:"button",tabIndex:"0",className:"purchase-container",onClick:a,onKeyPress:a,children:Object(S.jsxs)("div",{className:"purchase",children:[Object(S.jsx)("h2",{children:t}),Object(S.jsx)("div",{className:"purchase-controls",children:Object(S.jsx)("button",{id:"purchase_close-button",type:"button",children:"Close"})})]})})});var P=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e})),c=t.isLoading,r=t.user,o=t.book,s=t.booksCatalog,i=t.error;return Object(a.useEffect)((function(){r.isAuthorized&&e(_(r.token))}),[]),c?Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Loading ..."}),Object(S.jsx)("span",{className:"loading-ring"})]}):Object(S.jsxs)(x.a,{children:[Object(S.jsxs)(m.d,{children:[Object(S.jsxs)(m.b,{exact:!0,path:"/js-band-store",children:[i&&Object(S.jsx)(m.a,{to:"/js-band-store/not-found"}),!r.isAuthorized&&Object(S.jsx)(m.a,{to:"/js-band-store/login"}),r.isAuthorized&&Object(S.jsx)(m.a,{to:"/js-band-store/catalog"})]}),Object(S.jsxs)(m.b,{path:"/js-band-store/login",children:[i&&Object(S.jsx)(m.a,{to:"/js-band-store/not-found"}),r.isAuthorized&&!s.isLoading&&Object(S.jsx)(m.a,{to:"/js-band-store/catalog"})]}),Object(S.jsxs)(m.b,{exact:!0,path:"/js-band-store/catalog",children:[i&&Object(S.jsx)(m.a,{to:"/js-band-store/not-found"}),!r.isAuthorized&&Object(S.jsx)(m.a,{to:"/js-band-store/login"})]}),Object(S.jsxs)(m.b,{path:"/js-band-store/cart",children:[i&&Object(S.jsx)(m.a,{to:"/js-band-store/not-found"}),!r.isAuthorized&&Object(S.jsx)(m.a,{to:"/js-band-store/login"})]}),Object(S.jsxs)(m.b,{path:"/js-band-store/catalog/:id",children:[i&&Object(S.jsx)(m.a,{to:"/js-band-store/not-found"}),!r.isAuthorized&&Object(S.jsx)(m.a,{to:"/js-band-store/login"})]})]}),Object(S.jsx)(m.b,{exact:!0,path:"/js-band-store/not-found",component:B}),Object(S.jsx)(m.b,{exact:!0,path:"/js-band-store/login",component:N}),Object(S.jsx)(m.b,{exact:!0,path:"/js-band-store/catalog",component:E}),Object(S.jsx)(m.b,{exact:!0,path:"/js-band-store/catalog",component:T}),Object(S.jsx)(m.b,{exact:!0,path:"/js-band-store/catalog/:id",component:E}),!o.isLoading&&Object(S.jsx)(m.b,{exact:!0,path:"/js-band-store/catalog/:id",component:I}),Object(S.jsx)(m.b,{path:"/js-band-store/cart",component:E}),Object(S.jsx)(m.b,{path:"/js-band-store/cart",component:R})]})};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(n.a,{store:p,children:Object(S.jsx)(P,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d27dd7d8.chunk.js.map
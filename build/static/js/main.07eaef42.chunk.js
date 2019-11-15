(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),c=a(17),o=a.n(c),s=(a(71),a(72),a(11)),i=a(20),m=a(6),u=a(12),d=a(39),E=a(58),b={query:"",isFetching:!1,data:{},error:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_BOOKS":return Object.assign({},e,{isFetching:!0,query:t.query});case"RECEIVE_BOOKS":return Object.assign({},e,{isFetching:!1,data:"success"===t.status?t.payload:b.data,error:"error"===t.status?t.payload:b.error});default:return e}},h=a(60),g=Object(m.b)(),y=Object(u.createStore)((n=g,Object(u.combineReducers)({router:Object(i.b)(n),books:p})),{},Object(E.composeWithDevTools)(Object(u.applyMiddleware)(Object(d.a)(g),h.a))),v=a(37),f=function(){return r.a.createElement("header",{id:"app-header"},r.a.createElement(v.a,{bg:"light",expand:"lg"},r.a.createElement(v.a.Brand,{href:"#/"},r.a.createElement("span",{style:{color:"hotpink"}},"IT Books Finder"))))},k=function(){return r.a.createElement("footer",{id:"app-footer"},"\xa9 ",(new Date).getFullYear())},N=a(10),x=a(31),w=a.n(x).a.create({baseURL:"https://nameless-hollows-24059.herokuapp.com/?url=https://api.itbook.store",timeout:3e3}),O=function(e){return{type:"RECEIVE_BOOKS",status:e.status,payload:e.payload}},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;parseInt(t);return function(a){a(function(e){return{type:"REQUEST_BOOKS",query:e}}(e));var n="/1.0/search/".concat(e,"/").concat(t);return w.get(n,{crossDomain:!0}).then(function(e){a(O({status:"success",payload:e.data}))}).catch(function(e){a(O({status:"error",payload:e}))})}},S=a(63),B=a.n(S),F=Object(s.c)(function(e){return{query:e.books.query}},function(e){return Object(u.bindActionCreators)({getBooks:j},e)})(function(e){var t=e.getBooks,a=(e.query,B()(function(e){t(e)},700)),n=function(e){a(e.target.value)};return r.a.createElement("div",{className:"row",style:{marginTtop:"10%",marginBottom:"30px"}},r.a.createElement("div",{className:"col-sm-3 col-xs-12"}),r.a.createElement("div",{className:" col-sm-6 col-xs-12"},r.a.createElement("form",{class:"form-inline",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{class:"form-group",style:{width:"100%"}},r.a.createElement("input",{type:"text",className:"form-control d-none d-sm-block",onChange:n,placeholder:"Java,Javascript .",style:{margin:"10px",width:"80%"}}),r.a.createElement("input",{type:"text",className:"form-control d-block d-sm-none",onChange:n,placeholder:"Java,Javascript ."}),r.a.createElement("button",{className:"btn  d-none d-sm-block ",style:{background:"hotpink",color:"white"}},"Search"))),r.a.createElement("div",{className:"text-muted"},"Search the world's most comprehensive index of full-text books.")))}),q=a(22),I=a.n(q),C=a(35),D=a(27),T=function(e){var t=e.book,a=t.title,n=(t.subtitle,t.image),l=t.price;return r.a.createElement("div",{className:"book col-sm-3 col-xs-12"},r.a.createElement("div",{className:"book-card"},r.a.createElement("div",null,n?r.a.createElement(D.a,{className:"",to:"/book/".concat(t.isbn13)},r.a.createElement("span",null,r.a.createElement("img",{src:n,alt:a,className:"img img-responsive",width:"100%"}))):null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{marginTop:"-20px"}},r.a.createElement(D.a,{className:"",to:"/book/".concat(t.isbn13)},r.a.createElement("span",{style:{lineHeight:"normal",fontWeight:"400",color:"black"}},a))),r.a.createElement("div",{style:{paddingTop:"10px",color:"hotpink"},className:""},r.a.createElement("span",null,r.a.createElement("span",{style:{color:"black"}},"Price : "),l)))))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-block d-sm-none container-fluid"},r.a.createElement(C.a,null,r.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"0",width:"110",height:"40"}),r.a.createElement("rect",{x:"0",y:"45",rx:"5",ry:"0",width:"70",height:"30"}),r.a.createElement("rect",{x:"0",y:"60",rx:"2",ry:"2",width:"300",height:"400"}),r.a.createElement("rect",{x:"0",y:"500",rx:"2",ry:"2",width:"300",height:"400"}),r.a.createElement("rect",{x:"0",y:"950",rx:"2",ry:"2",width:"300",height:"400"}))),r.a.createElement("div",{className:"d-none d-sm-block"},r.a.createElement(C.a,null,r.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"0",width:"110",height:"10"}),r.a.createElement("rect",{x:"0",y:"13",rx:"5",ry:"0",width:"70",height:"7"}),r.a.createElement("rect",{x:"0",y:"24",rx:"2",ry:"2",width:"90",height:"300"}),r.a.createElement("rect",{x:"100",y:"24",rx:"2",ry:"2",width:"90",height:"300"}),r.a.createElement("rect",{x:"200",y:"24",rx:"2",ry:"2",width:"90",height:"300"}),r.a.createElement("rect",{x:"300",y:"24",rx:"2",ry:"2",width:"90",height:"300"}))))},R=Object(s.c)(function(e){var t=e.books;return{data:t.data,isFetching:t.isFetching,query:t.query,error:t.error}},null)(function(e){var t=e.data,a=e.isFetching,n=e.query,l=e.error,c="";return c=a?r.a.createElement(P,null):I()(l)?0==t.total?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"No books found")):function(e,t){if(I()(e))return null;var a=e.books,n=e.total;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Search results for: ",t),r.a.createElement("p",null,"Total results: ",n),r.a.createElement("div",{className:"books-list"},a.map(function(e){return r.a.createElement(T,{key:e.isbn13,book:e})})))}(t,n):JSON.stringify(l),r.a.createElement("div",{className:"books"},c)}),_=a(15),J=a(64),L=a.n(J),A=Object(s.c)(function(e){var t=e.books;return{data:t.data,isFetching:t.isFetching,query:t.query,error:t.error}},{getBooks:j})(function(e){var t=e.data,a=(e.isFetching,e.query),n=(e.error,e.getBooks),c=Object(l.useState)(1),o=Object(_.a)(c,2),s=o[0],i=o[1];return Object(l.useEffect)(function(){var e=Math.floor(parseInt(t.total)/10);i(e)},[t]),t.total?0===parseInt(t.total)?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"paginate-section"},r.a.createElement(L.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:s,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){n(a,e.selected)},containerClassName:"pagination",subContainerClassName:"",activeClassName:"active"})):r.a.createElement(r.a.Fragment,null)}),W=(a(132),function(){return r.a.createElement("div",{id:"home",className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement(F,null),r.a.createElement(R,null),r.a.createElement(A,null)))}),K=(a(133),a(36)),M=a.n(K),U=a(65);var H=function(e){var t=e.query,a=Object(l.useState)([]),n=Object(_.a)(a,2),c=n[0],o=n[1];function s(){return(s=Object(U.a)(M.a.mark(function e(){var a,n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/1.0/search/".concat(t),{crossDomain:!0});case 2:a=e.sent,n=a.data.books,o(n||[]);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(l.useEffect)(function(){!function(){s.apply(this,arguments)}()},[t]),r.a.createElement("div",{className:"books-list"},c.slice(1).map(function(e){return r.a.createElement(T,{keybooks:e.isbn13,book:e})}))},Q=function(e){var t=e.match.params,a=Object(l.useState)({}),n=Object(_.a)(a,2),c=n[0],o=n[1],s=Object(l.useState)(!1),i=Object(_.a)(s,2),m=i[0],u=i[1];Object(l.useEffect)(function(){u(!0),w.get("/1.0/books/".concat(t.ID),{crossDomain:!0}).then(function(e){o(e.data)}).catch(function(){o({})}).finally(function(){u(!1)})},[t.ID]);var d,E="";if(m&&(E=r.a.createElement("p",null,"Loading...")),!I()(c)){var b=c.title,p=c.subtitle,h=c.image,g=c.desc,y=c.price,v=c.rating,f=c.year,k=c.pages,N=c.language,x=c.publisher,O=c.authors,j=c.isbn10,S=(c.url,c.isbn13),B=c.pdf,F=Object.keys(B||{}),q=Object(_.a)(F,1)[0];console.log("key",q);var C=B?B[q]:null;E=r.a.createElement("div",{className:""},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"book-card-header-title"},b),r.a.createElement("span",{className:"book-item-value"}," ",p)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 col-xs-12",style:{marginBottom:"30px"}},h?r.a.createElement("img",{src:h,className:"img-responsive",alt:b,style:{boxShadow:"0 2px 12px 0 rgba(0,0,0,.1)",width:"100%"}}):null,r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("a",{className:"bnt btn-lg",href:"https://itbook.store/go/buy/"+S,target:"_blank",style:{background:"hotpink",color:"white",display:"block",width:"100%",textAlign:"center"}},"Buy Now"),C?r.a.createElement("a",{href:C,target:"_blank",className:"btn btn-lg",style:{background:"dimgray",display:"block",marginTop:"10px",color:"white",width:"100%",textAlign:"center"}},"Preview"):r.a.createElement(r.a.Fragment,null))),r.a.createElement("div",{className:"col-sm-8 col-xs-12 book-info"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Price"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value",style:{color:"hotpink"}},y))),r.a.createElement("tr",null,r.a.createElement("td",null,"Rating"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},v))),r.a.createElement("tr",null,r.a.createElement("td",null,"Pages"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},k))),r.a.createElement("tr",null,r.a.createElement("td",null,"Language"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},N))),r.a.createElement("tr",null,r.a.createElement("td",null,"Authors"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},O))),r.a.createElement("tr",null,r.a.createElement("td",null,"Publisher"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},x))),r.a.createElement("tr",null,r.a.createElement("td",null,"Published"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},f))),r.a.createElement("tr",null,r.a.createElement("td",null,"ISBN-10"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},j))),r.a.createElement("tr",null,r.a.createElement("td",null,"ISBN-13"),r.a.createElement("td",null,r.a.createElement("span",{className:"book-item-value"},S))))),r.a.createElement("div",null,r.a.createElement("label",{style:{fontWeight:"700"}},"Description"),r.a.createElement("p",{className:"book-card--description",dangerouslySetInnerHTML:(d=g,{__html:d})})))))}return r.a.createElement("div",{id:"book",className:"page"},r.a.createElement("div",{className:"container"},E,r.a.createElement("br",null),r.a.createElement("h3",{class:"par"},r.a.createElement("span",null,"Similar Books")),m?r.a.createElement(r.a.Fragment,null):r.a.createElement(H,{query:c.title})))},V=r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:W}),r.a.createElement(N.a,{path:"/book/:ID",component:Q}));a(135);var Y=function(){return r.a.createElement(s.a,{store:y},r.a.createElement(i.a,{history:g},r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement("main",null,V),r.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(136)},72:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.07eaef42.chunk.js.map
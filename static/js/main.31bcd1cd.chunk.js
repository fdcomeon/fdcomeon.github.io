(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},85:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(0),a=c.n(i),s=c(17),r=c.n(s),o=(c(66),c(30)),j=c(23),l=c(102),d=c(103),b=c(101),h=c(100),u=c(60),O=(c(67),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),x=c(22),p=c(7),m=c(41),f=c(33),g=c.n(f),v=c(42);c(85);function k(){var e=Object(m.a)(["\n    font-size : 25px;\n    color : ","\n"]);return k=function(){return e},e}function N(){var e=Object(m.a)(["\n    padding : 20px;\n"]);return N=function(){return e},e}var S=v.a.div(N()),w=v.a.h4(k(),(function(e){return e.\uc0c9\uc0c1}));function B(){return Object(n.jsx)("div",{className:"my-alert my-alert-2",children:Object(n.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})})}function C(e){return Object(n.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock[0]]})}var y=function(e){var t=Object(i.useState)(!0),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(i.useState)(""),l=Object(j.a)(r,2),d=l[0],b=l[1];Object(i.useEffect)((function(){return g.a.get().then().catch(),setTimeout((function(){s(!1)}),2e3),function(){clearTimeout()}}),[a]);var h=Object(p.g)().id,u=e.product.find((function(e){return e.id==h})),O=Object(p.f)();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(S,{children:Object(n.jsx)(w,{className:"red","\uc0c9\uc0c1":"red",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),Object(n.jsx)(S,{children:Object(n.jsx)(w,{className:"blue",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),d,Object(n.jsx)("input",{onChange:function(e){b(e.target.value)}}),!0===a?Object(n.jsx)(B,{}):null,Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(u.id+1)+".jpg",width:"100%"})}),Object(n.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(n.jsx)("h4",{className:"pt-5",children:u.title}),Object(n.jsx)("p",{children:u.content}),Object(n.jsx)("p",{children:u.price}),Object(n.jsx)(C,{stock:e.stock}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){Object(o.a)(e.stock);e.setStock()},children:"\uc8fc\ubb38\ud558\uae30"})," \xa0",Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){O.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})};var I=function(){var e=Object(i.useState)(O),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([10,20,30]),r=Object(j.a)(s,2),m=r[0],f=r[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(l.a.Brand,{href:"#home",children:"\uad6c\ub9e4 \uc77c\ubc18\uc790\uc7ac \uc2dc\uc2a4\ud15c"}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{className:"mr-auto",children:[Object(n.jsx)(d.a.Link,{as:x.b,to:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{as:x.b,to:"/detail",children:"Detail"}),Object(n.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(n.jsx)(b.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(b.a.Divider,{}),Object(n.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(n.jsxs)(p.c,{children:[Object(n.jsxs)(p.a,{exact:!0,path:"/",children:[Object(n.jsxs)(h.a,{className:"jumbo",children:[Object(n.jsx)("h1",{children:"\uc810\ubcf4\ud2b8\ub860 \uc81c\ubaa9"}),Object(n.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(n.jsx)("p",{children:Object(n.jsx)(u.a,{variant:"primary",children:"Learn more"})})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[c.map((function(e,t){return Object(n.jsx)(v,{product:c[t],i:t},t)})),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){g.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log("\uc131\uacf5"),console.log(e.data),a([].concat(Object(o.a)(c),Object(o.a)(e.data))),c.map((function(e,t){return Object(n.jsx)(v,{product:c[t],i:t},t)}))})).catch((function(){console.log("\uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})})]}),Object(n.jsx)(p.a,{path:"/detail/:id",children:Object(n.jsx)(y,{product:c,stock:m,setStock:f})}),Object(n.jsx)(p.a,{path:"/:id",children:Object(n.jsx)("div",{children:"test"})})]})]});function v(e){return Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(n.jsx)("h4",{children:e.product.title}),Object(n.jsx)("h4",{children:e.product.content}),Object(n.jsx)("h4",{children:e.product.price})]})}},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,104)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x.a,{children:Object(n.jsx)(I,{})})}),document.getElementById("root")),T()}},[[94,1,2]]]);
//# sourceMappingURL=main.31bcd1cd.chunk.js.map
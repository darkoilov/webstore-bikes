(this["webpackJsonpwebstore-bikes"]=this["webpackJsonpwebstore-bikes"]||[]).push([[0],{23:function(e,a,t){e.exports=t(51)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(19),c=t.n(r),s=(t(28),t(29),t(30),function(){return n.a.createElement("nav",{className:"nav navv"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 flex"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#menu-button","aria-expanded":"false"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation"),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"})),n.a.createElement("a",{href:"/",className:"navbar-brand"},n.a.createElement("img",{src:"image/logo.png",className:"img img-responsive",alt:"logo"}))),n.a.createElement("div",{className:"collapse navbar-collapse",id:"menu-button"},n.a.createElement("ul",{className:"nav navbar-nav"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"\u0412ikes")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Gear")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Parts")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Tires")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Service-info")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Catalogues")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Contact")))),n.a.createElement("div",{className:"icons-menu"},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-search"}),n.a.createElement("i",{className:"fas fa-shopping-bag"})))))),n.a.createElement("hr",null))}),i=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"title"},"Bikes"),n.a.createElement("hr",null)))},m=t(3),o=t(4),E=t(9),u=t(8),d=(t(31),t(53)),f=t(52),h=t(20),p=t.n(h),g=(t(49),function(e){Object(E.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,this.props.newPost.map((function(e,a){return n.a.createElement(f.a,{md:4,key:a,className:"card-cont"},n.a.createElement("a",{href:"#",className:"inner"},n.a.createElement("div",{className:"img-cont"},n.a.createElement("img",{src:"/image/"+e.image+".png",className:"card-img img img-responsive"})),n.a.createElement("div",{className:"content-cont"},n.a.createElement("h2",null,e.name),n.a.createElement("p",{className:"price"},e.price," $"))))})))}}]),t}(n.a.Component)),b=function(e){Object(E.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).loadUser=function(){p()("https://json-project3.herokuapp.com/products").then((function(a){e.products=a.data.slice(),e.setState({post:a.data}),e.setState({female:e.filterize("FEMALE","gender"),male:e.filterize("MALE","gender"),legrand:e.filterize("LE GRAND BIKES","brand"),kross:e.filterize("KROSS","brand"),explorer:e.filterize("EXPLORER","brand"),visitor:e.filterize("VISITOR","brand"),pony:e.filterize("PONY","brand"),force:e.filterize("FORCE","brand"),ebikes:e.filterize("E-BIKES","brand"),ideal:e.filterize("IDEAL","brand")})}))},e.filterize=function(a,t){return a=e.products.filter((function(e){return e[t]===a}))},e.filter=function(a){var t=e.products.filter((function(e){return e.gender.toLowerCase()===a.currentTarget.children[0].innerText.toLowerCase()||e.brand.toLowerCase()===a.currentTarget.children[0].innerText.toLowerCase()}));e.setState({post:t}),console.log(t)},e.setFilter=function(a){e.setState({selected:a})},e.products=[],e.state={post:[],selected:"",male:[],female:[],legrand:[],kross:[],explorer:[],visitor:[],pony:[],force:[],ebikes:[],ideal:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"isActive",value:function(e){return e===this.state.selected?"active":""}},{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement(f.a,{md:3},n.a.createElement("h3",null,"Filter by:"),n.a.createElement("ul",{className:"sub-menu"},n.a.createElement("li",{className:this.isActive(""),onClick:function(a){e.setFilter(""),e.loadUser(a)},"data-type":"all"},n.a.createElement("span",null,"Show all"),n.a.createElement("span",{className:"badge",id:"allBadge"},this.products.length))),n.a.createElement("hr",null),n.a.createElement("h4",null,"Gender"),n.a.createElement("ul",{className:"sub-menu"},n.a.createElement("li",{className:this.isActive("Male"),onClick:function(a){e.setFilter("Male"),e.filter(a)},"data-type":"gender"},n.a.createElement("span",null,"Male"),n.a.createElement("span",{className:"badge",id:"maleBadge"},this.state.male.length)),n.a.createElement("li",{className:this.isActive("Female"),onClick:function(a){e.setFilter("Female"),e.filter(a)},"data-type":"gender"},n.a.createElement("span",null,"Female"),n.a.createElement("span",{className:"badge",id:"femaleBadge"},this.state.female.length))),n.a.createElement("hr",null),n.a.createElement("h4",null,"Brand"),n.a.createElement("ul",{className:"sub-menu"},n.a.createElement("li",{className:this.isActive("LE GRAND BIKES"),onClick:function(a){e.setFilter("LE GRAND BIKES"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"LE GRAND BIKES"),n.a.createElement("span",{className:"badge",id:"leGrand"},this.state.legrand.length)),n.a.createElement("li",{className:this.isActive("KROSS"),onClick:function(a){e.setFilter("KROSS"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"KROSS"),n.a.createElement("span",{className:"badge",id:"kross"},this.state.kross.length)),n.a.createElement("li",{className:this.isActive("EXPLORER"),onClick:function(a){e.setFilter("EXPLORER"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"EXPLORER"),n.a.createElement("span",{className:"badge",id:"explorer"},this.state.explorer.length)),n.a.createElement("li",{className:this.isActive("VISITOR"),onClick:function(a){e.setFilter("VISITOR"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"VISITOR"),n.a.createElement("span",{className:"badge",id:"visitor"},this.state.visitor.length)),n.a.createElement("li",{className:this.isActive("PONY"),onClick:function(a){e.setFilter("PONY"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"PONY"),n.a.createElement("span",{className:"badge",id:"pony"},this.state.pony.length)),n.a.createElement("li",{className:this.isActive("FORCE"),onClick:function(a){e.setFilter("FORCE"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"FORCE"),n.a.createElement("span",{className:"badge",id:"force"},this.state.force.length)),n.a.createElement("li",{className:this.isActive("E-BIKES"),onClick:function(a){e.setFilter("E-BIKES"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"E-BIKES"),n.a.createElement("span",{className:"badge",id:"eBikes"},this.state.ebikes.length)),n.a.createElement("li",{className:this.isActive("IDEAL"),onClick:function(a){e.setFilter("IDEAL"),e.filter(a)},"data-type":"brand"},n.a.createElement("span",null,"IDEAL"),n.a.createElement("span",{className:"badge",id:"ideal"},this.state.ideal.length)))),n.a.createElement(f.a,{md:9},n.a.createElement(d.a,{className:"card"},n.a.createElement(g,{newPost:this.state.post}))))}}]),t}(n.a.Component),N=(t(50),function(){return n.a.createElement("div",{className:"row footer"},n.a.createElement("div",{className:"col-md-3 share-icons"},n.a.createElement("h2",null,"Social share"),n.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank"},n.a.createElement("i",{className:"fab fa-facebook-f"})),n.a.createElement("a",{href:"https://www.instagram.com/?hl=en",target:"_blank"},n.a.createElement("i",{className:"fab fa-instagram"})),n.a.createElement("a",{href:"https://twitter.com/",target:"_blank"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank"},n.a.createElement("i",{className:"fab fa-linkedin-in"}))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("h2",null,"Event info"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Enter Now")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Event Info")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Course Maps")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Race Pack")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Results")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"FAQs")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Am I Registered?")))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("h2",null,"Registration"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Volunteers")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Gallery")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Press")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Results")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Privacy Policy")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Service Plus")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Contacts")))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("h2",null,"Schedule"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Gallery")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Videos")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Results")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"FAQs")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Results")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Volunteers")))))});var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(i,null),n.a.createElement(b,null),n.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.cea45c9b.chunk.js.map
(window.webpackJsonpdbmsmini22=window.webpackJsonpdbmsmini22||[]).push([[0],{47:function(e,a,t){e.exports=t(67)},52:function(e,a,t){},53:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t.n(r),i=t(5),m=(t(52),t(19)),s=(t(53),t(54),t(6)),o=t(7),d=t(9),h=t(8),u=t(10),p=t(22),b=t(18),E=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(h.a)(a).call(this))).state={email:"",password:""},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"render",value:function(){return l.a.createElement("div",{className:"FormCenter"},l.a.createElement("form",Object(p.a)({onSubmit:this.handleSubmit,className:"FormFields"},"onSubmit",this.handleSubmit),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-Mail Address"),l.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button mr-20"},"Sign In")," ",l.a.createElement(i.b,{to:"/",className:"FormField__Link"},"Create an account"))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App__Aside"}),l.a.createElement("div",{className:"App__Form"},l.a.createElement("div",{className:"PageSwitcher"},l.a.createElement(i.c,{to:"/firstpages-signin",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign In"),l.a.createElement(i.c,{exact:!0,to:"/firstpages-signup",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign Up")),l.a.createElement("div",{className:"FormTitle"},l.a.createElement(i.c,{to:"/signin",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign In")," or ",l.a.createElement(i.c,{exact:!0,to:"/",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign Up")),l.a.createElement(m.a,{component:E}),l.a.createElement(m.a,{exact:!0,path:"/signin",component:E})))}}]),a}(n.Component),g=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(h.a)(a).call(this))).state={email:"",password:"",name:"",hasAgreed:!1},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"render",value:function(){return l.a.createElement("div",{className:"FormCenter"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"Full Name"),l.a.createElement("input",{type:"text",id:"name",className:"FormField__Input",placeholder:"Enter your full name",name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-Mail Address"),l.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__CheckboxLabel"},l.a.createElement("input",{className:"FormField__Checkbox",type:"checkbox",name:"hasAgreed",value:this.state.hasAgreed,onChange:this.handleChange})," I agree all statements in ",l.a.createElement("a",{href:"",className:"FormField__TermsLink"},"terms of service"))),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button mr-20"},"Sign Up")," ",l.a.createElement(i.b,{to:"/sign-in",className:"FormField__Link"},"I'm already member"))))}}]),a}(n.Component),F=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App__Aside"}),l.a.createElement("div",{className:"App__Form"},l.a.createElement("div",{className:"PageSwitcher"},l.a.createElement(i.c,{to:"/firstpages-signin",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign In"),l.a.createElement(i.c,{exact:!0,to:"/firstpages-signup",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign Up")),l.a.createElement("div",{className:"FormTitle"},l.a.createElement(i.c,{to:"/fisrtpages-signin",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign In")," or ",l.a.createElement(i.c,{exact:!0,to:"/",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign Up")),l.a.createElement(m.a,{component:g})))}}]),a}(n.Component),_=t(73),N=t(71),f=t(72),O=t(46),j=t(70),w=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(_.a,{bg:"dark",variant:"dark"},l.a.createElement(_.a.Brand,{href:"#home"},"Navbar",l.a.createElement("img",{src:""})),l.a.createElement(N.a,{className:"mr-auto"},l.a.createElement(N.a.Link,{href:"#home"}),l.a.createElement(N.a.Link,{href:"#features"},"Brands"),l.a.createElement(N.a.Link,{href:"#pricing"},"Savings")),l.a.createElement(f.a,{inline:!0},l.a.createElement(O.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(j.a,{variant:"outline-info"},"Search"))))}}]),a}(n.Component);function k(e){var a=e.name,t=e.title;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},l.a.createElement("h2",{className:"text-capitalize font-weight-bold"}),a,l.a.createElement("strong",{className:"text-blue"},t)))}var y=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"hgdfhddh"),l.a.createElement(w,null),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"py-5"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{name:"Deals Of The",title:"Day"}),l.a.createElement("div",{className:"row"})))))}}]),a}(n.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(w,null)}}]),a}(n.Component),S=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(w,null)))}}]),a}(n.Component);var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/firstpages-signin",component:v}),l.a.createElement(m.a,{exact:!0,path:"/firstpages-signup",component:F}),l.a.createElement(m.a,{exact:!0,path:"/navbar",component:w}),l.a.createElement(m.a,{exact:!0,path:"/dealsoftheday",component:S}),l.a.createElement(m.a,{exact:!0,path:"/productlist",component:y}),l.a.createElement(m.a,{exact:!0,path:"/product",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,null,l.a.createElement(x,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.0e6f6d13.chunk.js.map
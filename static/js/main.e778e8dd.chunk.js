(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,a,t){e.exports=t.p+"static/media/Andrew.f7d19268.jpg"},152:function(e,a,t){e.exports=t.p+"static/media/Ashwin.da094018.jpg"},153:function(e,a,t){e.exports=t.p+"static/media/Vinnie.212efc3b.jpg"},154:function(e,a,t){e.exports=t.p+"static/media/Tika.cf9decc0.jpg"},155:function(e,a,t){e.exports=t.p+"static/media/max.21a3c672.jpg"},217:function(e,a,t){e.exports=t(376)},222:function(e,a,t){},376:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),l=t.n(o),i=(t(222),t(17)),s=t(18),c=t(20),m=t(19),u=t(21),h=t(31),d=t(15),p=t(1),E=t(25),g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).onSubmit=function(e){setTimeout(function(){},5e3)},t.handleChange=function(e){return function(a){t.setState(Object(h.a)({},e,a.target.value)),"walkingTime"===e&&("Nearby"===a.target.value?t.setState({zipcodeVisible:!0}):t.setState({zipcodeVisible:!1}))}},t.isValidLocation=function(e){return 5!==e.length&&0!==e.length},t.state={location:"",foodPreference:"",walkingTime:"",restaurants:[],zipcodeVisible:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(p.h,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:0,className:a.fade},r.a.createElement("br",null),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:a.formControl},r.a.createElement(p.j,{htmlFor:"walkingTime"},"Your Location Scope"),r.a.createElement(p.q,{name:"walkingTime",value:this.state.walkingTime,onChange:this.handleChange("walkingTime")},r.a.createElement(p.o,{value:"No Preference"},"No Preference"),r.a.createElement(p.o,{value:"Nearby"},"Nearby")),r.a.createElement(p.g,null,"How far are you willing to go?"))),this.state.zipcodeVisible?r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:a.formControl},r.a.createElement(p.t,{id:"standard-name",label:"Your Zipcode",value:this.state.location,onChange:this.handleChange("location"),error:this.isValidLocation(this.state.location),helperText:5!==this.state.location.length&&0!==this.state.location.length?"Not valid":"Enter a zipcode",margin:"normal"}))):null,r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:a.formControl},r.a.createElement(p.j,{htmlFor:"foodPreference"},"Your Food Preference"),r.a.createElement(p.q,{name:"foodPreference",margin:"normal",value:this.state.foodPreference,onChange:this.handleChange("foodPreference")},r.a.createElement(p.o,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(p.o,{value:"No Preference"},"No Preference"),r.a.createElement(p.o,{value:"Afghan"},"Afghan"),r.a.createElement(p.o,{value:"African"},"African"),r.a.createElement(p.o,{value:"American"},"American"),r.a.createElement(p.o,{value:"Armenian"},"Armenian"),r.a.createElement(p.o,{value:"Asian"},"Asian"),r.a.createElement(p.o,{value:"Australian"},"Australian"),r.a.createElement(p.o,{value:"Bagels/Pretzels"},"Bagels/Pretzels"),r.a.createElement(p.o,{value:"Bakery"},"Bakery"),r.a.createElement(p.o,{value:"Bangladeshi"},"Bangladeshi"),r.a.createElement(p.o,{value:"Barbecue"},"Barbecue"),r.a.createElement(p.o,{value:"Basque"},"Basque"),r.a.createElement(p.o,{value:"Bottled Beverages"},"Bottled Beverages"),r.a.createElement(p.o,{value:"Brazilian"},"Brazilian"),r.a.createElement(p.o,{value:"Cafe/Coffee/Tea"},"Cafe/Coffee/Tea"),r.a.createElement(p.o,{value:"Cajun"},"Cajun"),r.a.createElement(p.o,{value:"Californian"},"Californian"),r.a.createElement(p.o,{value:"Caribbean"},"Caribbean"),r.a.createElement(p.o,{value:"Chicken"},"Chicken"),r.a.createElement(p.o,{value:"Chilean"},"Chilean"),r.a.createElement(p.o,{value:"Chinese"},"Chinese"),r.a.createElement(p.o,{value:"Chinese/Cuban"},"Chinese/Cuban"),r.a.createElement(p.o,{value:"Chinese/Japanese"},"Chinese/Japanese"),r.a.createElement(p.o,{value:"Continental"},"Continental"),r.a.createElement(p.o,{value:"Creole"},"Creole"),r.a.createElement(p.o,{value:"Creole/Cajun"},"Creole/Cajun"),r.a.createElement(p.o,{value:"Czech"},"Czech"),r.a.createElement(p.o,{value:"Delicatessen"},"Delicatessen"),r.a.createElement(p.o,{value:"Donuts"},"Donuts"),r.a.createElement(p.o,{value:"Eastern European"},"Eastern European"),r.a.createElement(p.o,{value:"Egyptian"},"Egyptian"),r.a.createElement(p.o,{value:"English"},"English"),r.a.createElement(p.o,{value:"Ethiopian"},"Ethiopian"),r.a.createElement(p.o,{value:"Filipino"},"Filipino"),r.a.createElement(p.o,{value:"French"},"French"),r.a.createElement(p.o,{value:"Fruits/Vegetables"},"Fruits/Vegetables"),r.a.createElement(p.o,{value:"German"},"German"),r.a.createElement(p.o,{value:"Greek"},"Greek"),r.a.createElement(p.o,{value:"Hamburgers"},"Hamburgers"),r.a.createElement(p.o,{value:"Hawaiian"},"Hawaiian"),r.a.createElement(p.o,{value:"Hotdogs"},"Hotdogs"),r.a.createElement(p.o,{value:"Hotdogs/Pretzels"},"Hotdogs/Pretzels"),r.a.createElement(p.o,{value:"Ice Cream/Gelato/Yogurt/Ices"},"Ice Cream/Gelato/Yogurt/Ices"),r.a.createElement(p.o,{value:"Indian"},"Indian"),r.a.createElement(p.o,{value:"Indonesian"},"Indonesian"),r.a.createElement(p.o,{value:"Iranian"},"Iranian"),r.a.createElement(p.o,{value:"Irish"},"Irish"),r.a.createElement(p.o,{value:"Italian"},"Italian"),r.a.createElement(p.o,{value:"Japanese"},"Japanese"),r.a.createElement(p.o,{value:"Jewish/Kosher"},"Jewish/Kosher"),r.a.createElement(p.o,{value:"Juice/Smoothies/Fruit Salads"},"Juice/Smoothies/Fruit Salads"),r.a.createElement(p.o,{value:"Korean"},"Korean"),r.a.createElement(p.o,{value:"Latin"},"Latin"),r.a.createElement(p.o,{value:"Mediterranean"},"Mediterranean"),r.a.createElement(p.o,{value:"Mexican"},"Mexican"),r.a.createElement(p.o,{value:"Middle Eastern"},"Middle Eastern"),r.a.createElement(p.o,{value:"Moroccan"},"Moroccan"),r.a.createElement(p.o,{value:"Not Listed/Not Applicable"},"Not Listed/Not Applicable"),r.a.createElement(p.o,{value:"Nuts/Confectionary"},"Nuts/Confectionary"),r.a.createElement(p.o,{value:"Other"},"Other"),r.a.createElement(p.o,{value:"Pakistani"},"Pakistani"),r.a.createElement(p.o,{value:"Pancakes/Waffles"},"Pancakes/Waffles"),r.a.createElement(p.o,{value:"Peruvian"},"Peruvian"),r.a.createElement(p.o,{value:"Pizza"},"Pizza"),r.a.createElement(p.o,{value:"Pizza/Italian"},"Pizza/Italian"),r.a.createElement(p.o,{value:"Polish"},"Polish"),r.a.createElement(p.o,{value:"Polynesian"},"Polynesian"),r.a.createElement(p.o,{value:"Portuguese"},"Portuguese"),r.a.createElement(p.o,{value:"Russian"},"Russian"),r.a.createElement(p.o,{value:"Salads"},"Salads"),r.a.createElement(p.o,{value:"Sandwiches"},"Sandwiches"),r.a.createElement(p.o,{value:"Sandwiches/Salads/Mixed Buffet"},"Sandwiches/Salads/Mixed Buffet"),r.a.createElement(p.o,{value:"Scandinavian"},"Scandinavian"),r.a.createElement(p.o,{value:"Seafood"},"Seafood"),r.a.createElement(p.o,{value:"Soul Food"},"Soul Food"),r.a.createElement(p.o,{value:"Soups"},"Soups"),r.a.createElement(p.o,{value:"Soups & Sandwiches"},"Soups & Sandwiches"),r.a.createElement(p.o,{value:"Southwestern"},"Southwestern"),r.a.createElement(p.o,{value:"Spanish"},"Spanish"),r.a.createElement(p.o,{value:"Steak"},"Steak"),r.a.createElement(p.o,{value:"Tapas"},"Tapas"),r.a.createElement(p.o,{value:"Tex-Mex"},"Tex-Mex"),r.a.createElement(p.o,{value:"Thai"},"Thai"),r.a.createElement(p.o,{value:"Turkish"},"Turkish"),r.a.createElement(p.o,{value:"Vegetarian"},"Vegetarian"),r.a.createElement(p.o,{value:"Vietnamese/Cambodian/Malaysia"},"Vietnamese/Cambodian/Malaysia")),r.a.createElement(p.g,null,"What type of food are you looking for?"))),r.a.createElement("br",null),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.c,{component:E.b,to:"/rouxlette-demo/results",color:"secondary",margin:"small",size:"large",variant:"raised",disabled:!(0!==e.state.foodPreference.length&&!e.isValidLocation(e.state.location)&&0!==e.state.walkingTime.length),className:a.button},"Submit")))}}]),a}(r.a.Component),f=Object(d.withStyles)(function(e){return{fade:{animation:"1s ease-out 0s 1 fadein"},"@keyframes fadein":{from:{opacity:0,transform:"translateY(-15px)"},to:{opacity:1,transform:"translateY(0)"}},"@keyframes fadeinBottom":{from:{opacity:0,transform:"translateY(15px)"},to:{opacity:1,transform:"translateY(0)"}},button:{animation:"2s ease-out 0s 1 fadeinBottom"},root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:200}}})(g),v=t(71),b=t.n(v),y=t(56),w=t.n(y),C=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){this.props.classes;return r.a.createElement(b.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(w.a,{label:"Placeholder 1"}),r.a.createElement(w.a,{label:"Placeholder 2"}))}}]),a}(r.a.Component),x=(Object(d.withStyles)({root:{flexGrow:1}})(C),t(148)),j=t.n(x),k=t(145),S=t.n(k),O=t(147),N=t.n(O),T=t(29),P=t.n(T),B=t(146),I=t.n(B);function z(){return r.a.createElement(P.a,null,r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))}var A=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={left:!1},t.toggleDrawer=function(e){return function(){t.setState(Object(h.a)({},"left",e))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=r.a.createElement("div",{className:e.list},r.a.createElement(p.k,null,r.a.createElement(p.l,{button:!0,component:E.b,to:"/rouxlette-demo/"},r.a.createElement(p.n,{primary:"Home"}),r.a.createElement(p.m,null,r.a.createElement(S.a,null))),r.a.createElement(p.l,{button:!0,component:E.b,to:"/rouxlette-demo/about"},r.a.createElement(p.n,{primary:"About"}),r.a.createElement(p.m,null,r.a.createElement(I.a,null))),r.a.createElement(p.l,{button:!0,component:E.b,to:"/rouxlette-demo/team"},r.a.createElement(p.n,{primary:"The Rouxlette Team"}),r.a.createElement(p.m,null,r.a.createElement(N.a,null)))));return r.a.createElement("div",{className:e.header},r.a.createElement(p.e,{open:this.state.left,onClose:this.toggleDrawer(!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},a)),r.a.createElement(p.a,{position:"static"},r.a.createElement(p.u,null,r.a.createElement(p.v,{title:"Menu"},r.a.createElement(p.i,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer(!0)},r.a.createElement(j.a,null))),r.a.createElement(p.w,{variant:"h4",color:"inherit",className:e.grow,component:E.b,style:{textDecoration:"none"},to:"/rouxlette-demo/"},"Rouxlette"),r.a.createElement(p.v,{title:"Github Repository",placement:"bottom",leaveDelay:300},r.a.createElement(p.i,{className:e.rightButton,color:"inherit","aria-label":"Github Repository",onClick:function(){return window.open("https://github.com/nyu-software-engineering/food-finder","_blank")}},r.a.createElement(z,null))),this.props.user.loggedIn?r.a.createElement(p.d,{avatar:r.a.createElement(p.b,{className:e.avatar},this.props.user.username.charAt(0)),label:this.props.user.username,className:e.chip}):r.a.createElement(p.c,{color:"inherit",component:E.b,to:"/rouxlette-demo/login",className:e.rightButton},"Login"))))}}]),a}(r.a.Component);A.defaultProps={user:{loggedIn:!1,username:""}};var R=Object(d.withStyles)({"@keyframes slideInFromTop":{"0%":{transform:"translateY(-100%)"},"100%":{transform:"translateY(0)"}},header:{animation:"0.5s ease-out 0s 1 slideInFromTop"},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},list:{width:250},rightButton:{marginLeft:10,marginRight:10},chip:{margin:10},avatar:{color:"#fff",backgroundColor:"#355fb2"}})(A),Y=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).onSubmit=function(e){},t.handleChange=function(e){return function(a){t.setState(Object(h.a)({},e,a.target.value))}},t.handleChangeTab=function(e,a){t.setState({value:a})},t.state={username:"",email:"",password:"",value:0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.value,t=this.props.classes;switch(a){case 0:return r.a.createElement(n.Fragment,null,r.a.createElement(p.s,{value:this.state.value,onChange:this.handleChangeTab,indicatorColor:"primary",textColor:"primary",centered:!0,className:t.root},r.a.createElement(p.r,{label:"Login"}),r.a.createElement(p.r,{label:"Register"})),r.a.createElement(p.h,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:0},r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:t.formControl},r.a.createElement(p.t,{label:"Username",value:this.state.username,onChange:this.handleChange("username"),margin:"normal"}))),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:t.formControl},r.a.createElement(p.t,{label:"Password",type:"password",value:this.state.password,onChange:this.handleChange("password"),margin:"normal"}))),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.c,{onClick:function(){return e.onSubmit()},color:"secondary",margin:"small",size:"large",variant:"raised"},"Submit"))));case 1:return r.a.createElement(n.Fragment,null,r.a.createElement(p.s,{value:this.state.value,onChange:this.handleChangeTab,indicatorColor:"primary",textColor:"primary",centered:!0,className:t.root},r.a.createElement(p.r,{label:"Login"}),r.a.createElement(p.r,{label:"Register"})),r.a.createElement(p.h,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:0},r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:t.formControl},r.a.createElement(p.t,{label:"Username",value:this.state.username,onChange:this.handleChange("username"),margin:"normal"}))),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:t.formControl},r.a.createElement(p.t,{label:"Email",value:this.state.email,onChange:this.handleChange("email"),helperText:"",margin:"normal"}))),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:t.formControl},r.a.createElement(p.t,{label:"Password",type:"password",value:this.state.password,onChange:this.handleChange("password"),helperText:"",margin:"normal"}))),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.f,{className:t.formControl},r.a.createElement(p.t,{label:"Confirm Password",type:"password",value:this.state.password,onChange:this.handleChange("password"),margin:"normal"}))),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.c,{onClick:function(){return e.onSubmit()},color:"secondary",margin:"small",size:"large",variant:"raised"},"Submit"))))}}}]),a}(r.a.Component),M=Object(d.withStyles)(function(e){return{root:{marginTop:10,flexGrow:1},formControl:{margin:e.spacing.unit,minWidth:200}}})(Y),D=t(34),F=t(149),W=t.n(F),L=function(e){function a(e){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(p.h,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:40,className:e.grid,style:{minHeight:"70vh"}},r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.p,{className:e.paper,elevation:2},r.a.createElement(p.w,{variant:"h4"},"Sorry!"),r.a.createElement("br",null),r.a.createElement(p.w,{variant:"body1"},"No restaurants found matching your criteria. This demo is purely visual, so it does not have a connected database. For a working version, follow the github repository and install Rouxlette following the instructions. You won't find any restaurants here. :("))),r.a.createElement(p.h,{item:!0,xs:12},r.a.createElement(p.c,{variant:"contained",color:"primary",component:E.b,to:"/rouxlette-demo/"},r.a.createElement(W.a,{className:e.leftIcon}),"Back to Search")))}}]),a}(r.a.Component),G=Object(d.withStyles)(function(e){return{"@keyframes fadein":{from:{opacity:0,transform:"translateY(-15px)"},to:{opacity:1,transform:"translateY(0)"}},paper:{padding:25,textAlign:"center",color:e.palette.text.secondary,animation:"1s ease-out 0s 1 fadein"},leftIcon:{marginRight:e.spacing.unit},grid:{paddingTop:"1em"}}})(L),V=t(6),H=t.n(V),J=t(72),U=t.n(J),q=t(74),K=t.n(q),X=t(57),_=t.n(X),Z=t(73),$=t.n(Z),Q=t(70),ee=t.n(Q),ae=t(150),te=t.n(ae),ne=t(75),re=t.n(ne),oe=t(43),le=t.n(oe),ie=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={expanded:!1},t.handleExpandClick=function(){t.setState(function(e){return{expanded:!e.expanded}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(U.a,{className:e.card,raised:"true"},r.a.createElement($.a,{title:this.props.name,subheader:this.props.subheader}),r.a.createElement(_.a,null,r.a.createElement("img",{src:this.props.image,className:e.image,bo:!0})),r.a.createElement(K.a,null,r.a.createElement(ee.a,{className:H()(e.expand,Object(h.a)({},e.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(te.a,null))),r.a.createElement(re.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(_.a,null,r.a.createElement(le.a,null,this.props.subcontent))))}}]),a}(r.a.Component),se=Object(d.withStyles)(function(e){return{root:{padding:50,textAlign:"center"},card:{maxWidth:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},image:{maxWidth:"90%",display:"flex",margin:"auto",borderRadius:3}}})(ie),ce=t(151),me=t.n(ce),ue=t(152),he=t.n(ue),de=t(153),pe=t.n(de),Ee=t(154),ge=t.n(Ee),fe=t(155),ve=t.n(fe),be=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(p.w,{variant:"h2",gutterBottom:!0,className:e.title},"Meet the Rouxlette Team"),r.a.createElement("br",null),r.a.createElement(p.h,{container:!0,spacing:16},r.a.createElement(p.h,{item:!0,md:!0,className:e.card},r.a.createElement(se,{name:"Andrew",subheader:"azaw502@gmail.com",image:me.a,subcontent:"Andrew Zaw is currently studying Computer Science at New York University, and hails from Miami. When not messing around with the UI and React design of Rouxlette, he enjoys cooking up dishes (follow him on Instagram @chef_zaw !!) and attempting to get to Diamond on League of Legends."})),r.a.createElement(p.h,{item:!0,md:!0,className:e.card},r.a.createElement(se,{name:"Ashwin",subheader:"akt352@nyu.edu",image:he.a,subcontent:"Ashwin Tanuku is currently a senior studying Computer Science at New York University, and is double minoring in Game Design and Japanese. \r When not trying to deal with the many, many listings of documents in Rouxlette's databases, he likes to frequent bookstores around the city and consume copious amounts of green tea."})),r.a.createElement(p.h,{item:!0,md:!0,className:e.card},r.a.createElement(se,{name:"Max",subheader:"mb6376@nyu.edu",image:ve.a,subcontent:"Max is currently a junior at New York University studying Computer Science and minoring in Web Development. He likes comic books, videogames, and going to small museums. Follow him @spliced_tea!"})),r.a.createElement(p.h,{item:!0,md:!0,className:e.card},r.a.createElement(se,{name:"Tika",subheader:"ak5352@nyu.edu",image:ge.a,subcontent:"Tika is currently a senior at NYU, majoring in Computer Science and minoring in Web Development and Game Design. In her spare time, she likes to watch anime and play horror JRPGs."})),r.a.createElement(p.h,{item:!0,md:!0,className:e.card},r.a.createElement(se,{name:"Vinnie",subheader:"vz377@nyu.edu",image:pe.a,subcontent:"Vinnie is currently a junior studying Computer Science at NYU, and is double minoring in Web Development\r and Creative Writing. She's a New York native and enjoys reading/writing poetry, thrift shopping, and attending concerts in her free time."}))))}}]),a}(r.a.Component),ye=Object(d.withStyles)(function(e){return{"@keyframes fade-in-right":{from:{opacity:0,transform:"translateX(-15px)"},to:{opacity:1,transform:"translateX(0)"}},"@keyframes fade-in-bottom":{from:{opacity:0,transform:"translateY(15px)"},to:{opacity:1,transform:"translateY(0)"}},title:{animation:"0.5s ease-out 0s 1 fade-in-right"},root:{flexGrow:1,padding:50,marginLeft:"3em",marginRight:"3em"},card:{marginBottom:50,animation:"1s ease-out 0s 1 fade-in-bottom"}}})(be),we=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(p.w,{variant:"h2",gutterBottom:!0,className:e.title},"About Rouxlette"),r.a.createElement(p.w,{variant:"h6",className:e.text},"Rouxlette is the collective project of a"," ",r.a.createElement(p.v,{title:"Meet the Team",placement:"top",enterDelay:300},r.a.createElement(p.w,{variant:"h6",component:E.b,to:"/rouxlette-demo/team",className:e.hoverText},"team of five students"," ")),"at New York University hoping to help others make deciding where to eat, quick and easy. Whether you're in a hurry, are unfamiliar with the local digs, and/or are just plain indecisive, we've got you covered! Simply choose your desired preferences and Rouxlette will generate five destinations just for you. With Rouxlette, finding a place to eat has never been easier!"))}}]),a}(r.a.Component),Ce=Object(d.withStyles)(function(e){return{"@keyframes fade-in-right":{from:{opacity:0,transform:"translateX(-15px)"},to:{opacity:1,transform:"translateX(0)"}},"@keyframes fade-in-bottom":{from:{opacity:0,transform:"translateY(15px)"},to:{opacity:1,transform:"translateY(0)"}},title:{animation:"0.5s ease-out 0s 1 fade-in-right"},root:{flexGrow:1,padding:50,marginLeft:"3em",marginRight:"3em"},text:{marginTop:"3em",marginRight:"30%",fontWeight:300,animation:"1s ease-out 0s 1 fade-in-bottom"},hoverText:{display:"inline",fontWeight:500,textDecoration:"none","&:hover":{color:"#777"}}}})(we),xe=(t(375),Object(d.createMuiTheme)({palette:{primary:{main:"#222831"},secondary:{main:"#393e46"}}})),je=function(e){function a(e){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.MuiThemeProvider,{theme:xe},r.a.createElement(E.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(R,null),r.a.createElement(D.a,{exact:!0,path:"/rouxlette-demo/",component:f}),r.a.createElement(D.a,{path:"/rouxlette-demo/login",component:M}),r.a.createElement(D.a,{path:"/rouxlette-demo/results",component:G}),r.a.createElement(D.a,{path:"/rouxlette-demo/team",component:ye}),r.a.createElement(D.a,{path:"/rouxlette-demo/about",component:Ce}))))}}]),a}(n.Component),ke=Object(d.withStyles)({})(je);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,1,2]]]);
//# sourceMappingURL=main.e778e8dd.chunk.js.map
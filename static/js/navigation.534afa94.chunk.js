(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1061:function(e,t,n){"use strict";n.r(t);var a=n(45),r=n(48),o=n(47),l=n(46),i=n(49),s=n(1),c=n.n(s),u=n(56),p=n(114),m=n(227),h=n.n(m),d=n(12),v=n.n(d),f=n(5),g=n.n(f),b=n(298),y=n(115),k=n(610),E=n.n(k),O=n(359),P=n(449),C=n.n(P),w=n(450),S=n.n(w),j=n(640),M=n.n(j),A=n(8),I=n(418),N=n(299),B=n(20),H=n(13),x=n(14),U=n(320),D=n(35),L=n.n(D),T=(n(641),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={isPopUpOpen:!1,insurerArrowHorizontal:0,exitCallback:null},n.handleInsurerHover=n.handleInsurerHover.bind(Object(p.a)(Object(p.a)(n))),n.handleInsurerBlur=n.handleInsurerBlur.bind(Object(p.a)(Object(p.a)(n))),n.handleMouseMoveOnHoverButton=n.handleMouseMoveOnHoverButton.bind(Object(p.a)(Object(p.a)(n))),n.handleClickOnHoverButton=n.handleClickOnHoverButton.bind(Object(p.a)(Object(p.a)(n))),n}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.hide()}},{key:"componentWillUnmount",value:function(){this.hide()}},{key:"show",value:function(){L.a.body.scroll="no"}},{key:"hide",value:function(){L.a.body.scroll="yes"}},{key:"handleInsurerHover",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!this.state.isPopUpOpen){var a=e.target.getBoundingClientRect(),r=v.a.innerWidth-450-20-20,o=a.left+.5*a.width-225-20,l=Math.max(20,Math.min(o,r)),i=l-o;this.insurerPopUp.style.left="".concat(l,"px"),this.insurerPopUp.style.top="".concat(a.top,"px"),this.setState({isPopUpOpen:!0,insurerArrowHorizontal:i,exitCallback:n}),this.show(),t&&t(),this.insurerPopUpScroll.children.length>4&&setTimeout(this.handlePopUpScroll,10)}}},{key:"handleInsurerBlur",value:function(e){var t=this.state.exitCallback;e&&e.preventDefault(),this.setState({isPopUpOpen:!1}),t&&t(),this.hide()}},{key:"handleMouseMoveOnHoverButton",value:function(e){var t=this.insurerPopUp.getBoundingClientRect();if(e.clientY-t.top<40){var n=this.state.insurerArrowHorizontal,a=t.left+.5*t.width-50-n,r=a+100;a<e.clientX&&e.clientX<r||this.handleInsurerBlur(e)}}},{key:"handleClickOnHoverButton",value:function(e){var t=this.props.onHoverButtonClick;if(t){var n=this.insurerPopUp.getBoundingClientRect();if(e.clientY-n.top<40){var a=this.state.insurerArrowHorizontal,r=n.left+.5*n.width-20-a,o=r+60;r<e.clientX&&e.clientX<o&&t()}}}},{key:"handlePopUpWheel",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state,n=t.isPopUpOpen,a=t.insurerArrowHorizontal,r=this.props,o=r.offsetHeight,l=r.maxWidth,i=n?"":"list-popup-container-closed",s=r.onHoverButtonClick?"speech-scroll-clickable":"";return c.a.createElement("div",{className:"speech-scroll-2"},c.a.createElement("div",{role:"button",tabIndex:-1,onKeyUp:function(){},className:"list-popup-container ".concat(s," ").concat(i),ref:function(t){return e.insurerPopUp=t},onMouseMove:this.handleMouseMoveOnHoverButton,onMouseLeave:this.handleInsurerBlur,onClick:this.handleClickOnHoverButton,style:{paddingTop:o,width:l}},c.a.createElement("div",{className:"list-popup-background",style:{maxWidth:l}},c.a.createElement("div",{className:"arrow",style:{marginRight:a}}),c.a.createElement("div",{className:"list-popup",onWheel:this.handlePopUpWheel,ref:function(t){return e.insurerPopUpScroll=t}},this.props.children))))}}]),t}(s.Component));T.defaultProps={offsetHeight:40,maxWidth:450,onHoverButtonClick:null};var R=T,F=(n(611),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={currentNavBG:"",isScrolled:!1},n.moreTab=[{name:"Claims",url:"/claims"},{name:"Partnership",url:"/partnership"},{name:"About Us",url:"/about"},{name:"Career",url:"/career"},{name:"FAQ",url:"/faq"}],n.clickLogo=n.clickLogo.bind(Object(p.a)(Object(p.a)(n))),n.renderHoverIn=n.renderHoverIn.bind(Object(p.a)(Object(p.a)(n))),n.renderHoverOut=n.renderHoverOut.bind(Object(p.a)(Object(p.a)(n))),n.renderFull=n.renderFull.bind(Object(p.a)(Object(p.a)(n))),n.renderCategory=n.renderCategory.bind(Object(p.a)(Object(p.a)(n))),n.onScroll=n.onScroll.bind(Object(p.a)(Object(p.a)(n))),n}return Object(i.a)(t,e),Object(l.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.navBG!==t.currentNavBG?{currentNavBG:e.navBG,currentNavCol:e.navColors}:null}}]),Object(l.a)(t,[{key:"componentDidMount",value:function(){v.a.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){v.a.removeEventListener("scroll",this.onScroll)}},{key:"onScroll",value:function(){var e=this.state.isScrolled,t=v.a.scrollY>0;t!==e&&this.setState({isScrolled:t})}},{key:"setNavRef",value:function(e){this.navRef=e}},{key:"isSignedIn",value:function(){var e=this,t=this.props,n=t.login,a=t.userDetails,r=t.isCategory,o=t.isBusiness,l=t.getQuoteCallback,i=this.state,u=i.speechScrollProfile,p=i.isOnHoverProfile;if(o)return r?null:c.a.createElement("div",{className:"nav-item business-button"},c.a.createElement(N.a,{variant:"small-light-green",width:105,height:32,onClick:function(){l&&l()}},c.a.createElement("p",null,"Get Quote")));var m=p?"green-hover-col":"green-font-col",h=null!==a,d=h&&a.gender&&"FEMALE"===a.gender.toUpperCase()?C.a:S.a,v=h?a.surname:null;v=v||"User";var f=r?"category-style":"",g=r?"medium-flat-light-green":"small-flat-dark",b=r?"Register":"Sign Up";return c.a.createElement(s.Fragment,null,c.a.createElement("ul",{className:"nav-ul user-ul user-nav",style:{display:h?"block":"none"},ref:function(t){return e.loginRef=t}},c.a.createElement("div",{className:"green-font-col nav-link"},c.a.createElement("div",{className:"profile-pic"},c.a.createElement("img",{src:d,alt:"profile"})),c.a.createElement("div",{className:"user-name",onMouseMove:function(t){u.handleInsurerHover(t,function(){return e.renderHoverIn("profile")},function(){return e.renderHoverOut("profile")})}},c.a.createElement("p",{className:m},v)))),c.a.createElement("div",{className:f,style:{display:h?"none":"block"}},c.a.createElement(N.a,{className:"nav-item",variant:"small-outline",width:97,height:36,onClick:function(){n.popup.openPopup(n.loginContainer.setInitialIndex(1))}},c.a.createElement("p",null,"Sign In")),c.a.createElement(N.a,{className:"nav-item",variant:g,width:97,height:36,onClick:function(){n.popup.openPopup(n.loginContainer.setInitialIndex(2))}},c.a.createElement("p",null,b))))}},{key:"clickLogo",value:function(){var e=this.props.history,t=h()("#dot-first-button");t&&h()(t).trigger("click"),e.push("/")}},{key:"renderInsuranceLinks",value:function(){var e=this,t=this.state.speechScrollInsurance,n=this.props.history,a=O.a.color,r=g.a.map(a,function(a,r){var o=a.name.length>10?"14px":"16px";return c.a.createElement(y.f,{key:"".concat(a,"-").concat(r),xs:6},c.a.createElement("button",{className:"nav-drop-button",onClick:function(r){e.props.resetInsuranceForm(),n.push(a.url),t.handleInsurerBlur(r)},key:"insurer-link-".concat(r)},c.a.createElement("span",{className:"nav-font",style:{fontSize:o}},c.a.createElement("img",{src:a.src,className:"nav-icon",alt:"icon-".concat(r)}),a.name)))});return c.a.createElement(y.y,{noGutters:!0},r)}},{key:"renderMoreLinks",value:function(){var e=this.state.speechScrollMore,t=this.props.history,n=g.a.map(this.moreTab,function(n,a){return c.a.createElement("button",{className:"nav-drop-button",onClick:function(a){t.push(n.url),e.handleInsurerBlur(a)},key:"more-link-".concat(a)},c.a.createElement("span",{className:"nav-font"},n.name))});return n}},{key:"renderHoverIn",value:function(e){switch(e){case"insurance":return this.setState({isOnHoverInsurance:!0});case"more":return this.setState({isOnHoverMore:!0});case"profile":return this.setState({isOnHoverProfile:!0});default:return this.setState({isOnHoverInsurance:!1,isOnHoverMore:!1,isOnHoverProfile:!1})}}},{key:"renderHoverOut",value:function(e){switch(e){case"insurance":return this.setState({isOnHoverInsurance:!1});case"more":return this.setState({isOnHoverMore:!1});case"profile":return this.setState({isOnHoverProfile:!1});default:return this.setState({isOnHoverInsurance:!1,isOnHoverMore:!1,isOnHoverProfile:!1})}}},{key:"renderFull",value:function(){var e=this,t=this.state,n=t.speechScrollMore,a=t.speechScrollInsurance,r=t.isOnHoverInsurance,o=t.isOnHoverMore,l=this.props,i=l.navColors,s=l.onPageInsurance,u=l.onPageMore,p=l.history,m=l.isBusiness,h=r?"green-hover-col":"green-font-col",d=o?"green-hover-col":"green-font-col";return c.a.createElement("div",null,c.a.createElement(y.g,{isOpen:!0,navbar:!0},c.a.createElement(y.s,{className:"ml-auto",navbar:!0},c.a.createElement(y.s,{className:"nav-main-links"},c.a.createElement("ul",{className:"business-toggle"},c.a.createElement(N.a,{variant:"medium-outline",height:32,width:110,onClick:function(){p.push(m?"/":"/business")}},c.a.createElement("p",null,m?"Personal":"Business"))),c.a.createElement("ul",{className:"nav-ul ".concat(s," insurance-nav")},c.a.createElement(R,{onHoverButtonClick:function(){return p.push("/categories")},ref:function(t){return!e.state.speechScrollInsurance&&e.setState({speechScrollInsurance:t})}},this.renderInsuranceLinks()),c.a.createElement("div",{className:"green-font-col nav-link"},c.a.createElement("span",{onMouseMove:function(t){a.handleInsurerHover(t,function(){return e.renderHoverIn("insurance")},function(){return e.renderHoverOut("insurance")})},className:h},"Buy Policy"),c.a.createElement("div",{className:"page-indicator"}))),c.a.createElement("ul",{className:"nav-ul ".concat(u," more-nav"),style:{width:"80px"}},c.a.createElement(U.a,{maxHeight:350,ref:function(t){return!e.state.speechScrollMore&&e.setState({speechScrollMore:t})}},this.renderMoreLinks()),c.a.createElement("div",{className:"green-font-col nav-link"},c.a.createElement("span",{onMouseMove:function(t){n.handleInsurerHover(t,function(){return e.renderHoverIn("more")},function(){return e.renderHoverOut("more")})},className:d},"More"),c.a.createElement("div",{className:"page-indicator"}))),c.a.createElement(y.t,{className:"nav-ul blog-a"},c.a.createElement("a",{href:"https://blog.policypal.com",className:"nav-link ".concat(i)},"Blog")),this.isSignedIn()))))}},{key:"renderCategory",value:function(){var e=this.props.quoteData,t=null,n=!1;try{var a=e&&e.isDeposit;n=e&&e.isBalance;var r=e&&e.quote&&e.quote.quote;t=r&&(n?r.outstanding_premium:a?r.deposit_premium:r.final_premium)}catch(o){}return c.a.createElement("div",null,c.a.createElement(y.g,{isOpen:!0,navbar:!0},c.a.createElement(y.s,{className:"ml-auto",navbar:!0},c.a.createElement(y.s,{className:"nav-main-links"},t&&c.a.createElement("div",{className:"sticky-top-price"},c.a.createElement("p",null,n?"Balance":"Total price"),c.a.createElement("p",null,"$",Object(A.l)(t))),c.a.createElement(I.a,null),this.isSignedIn()))))}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentNavBG,a=t.speechScrollProfile,r=t.isScrolled,o=this.props,l=o.history,i=o.isCategory,s=o.isMain,u=o.logout,p=o.navColors,m=n,h="";return i?(m=s?"category-main":"category-sub",!r&&s||(h="category-opaque")):r&&m===B.i.WHITE&&(h="nav-white-bg-opaque"),c.a.createElement("div",{className:"navigation d-sm-none d-none d-md-none d-lg-block d-xl-block"},c.a.createElement(y.v,{className:"".concat(m," ").concat(h),fixed:"top",expand:"md"},c.a.createElement(y.h,{fluid:!0},c.a.createElement(y.w,null,c.a.createElement("div",{className:"brand-container"},c.a.createElement("button",{onClick:function(){e.clickLogo()}},c.a.createElement("img",{src:E.a,alt:"PolicyPal Logo"})),c.a.createElement("button",{onClick:function(){return l.push("/rewards")},style:{marginLeft:"20px"}},c.a.createElement("img",{src:M.a,alt:"get5.svg"})))),c.a.createElement(y.x,null),c.a.createElement("div",{className:i?"d-block":"d-none"},this.renderCategory()),c.a.createElement("div",{className:i?"d-none":"d-block"},this.renderFull()),c.a.createElement("div",{className:"account-speech-scroll"},c.a.createElement(U.a,{maxHeight:350,ref:function(t){return!e.state.speechScrollProfile&&e.setState({speechScrollProfile:t})}},c.a.createElement("button",{className:p,onClick:function(t){e.props.resetInsuranceForm(),l.push("/profile"),a.handleInsurerBlur(t)}}),c.a.createElement("div",null,c.a.createElement("button",{className:"nav-drop-button",onClick:function(){l.push("/profile")}},c.a.createElement("span",{className:"nav-font"},"My Account")),c.a.createElement("button",{className:"nav-drop-button",onClick:function(){u(),v.a.location.href="/"}},c.a.createElement("span",{className:"nav-font"},"Log Out"))))))))}}]),t}(s.Component));F.defaultProps={onPageInsurance:"",onPageMore:"",login:null,userDetails:null,getQuoteCallback:null,quoteData:null};var W=Object(b.a)(Object(u.connect)(function(e){return{isCategory:e.nav.isCategory,isMain:e.nav.isMain,isBusiness:e.nav.isBusiness,getQuoteCallback:e.business.getQuoteCallback,quoteData:e.business.quoteData,formState:e.insurance.formState}},function(e){return{resetInsuranceForm:function(){return e(Object(H.D)())},logout:function(){return e(Object(x.t)())}}})(F)),G=n(451),q=n(421),Y=n.n(q),_=(n(642),n(643)),Q=n.n(_),z=n(300),X=n.n(z),K=n(644),J=n.n(K),V=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={modal:!1,collapseInsurance:!1,collapseMore:!1,rotateInsuranceArrow:!0,rotateMoreArrow:!0,visible:!1},n.show=n.show.bind(Object(p.a)(Object(p.a)(n))),n.hide=n.hide.bind(Object(p.a)(Object(p.a)(n))),n.closeMenu=n.closeMenu.bind(Object(p.a)(Object(p.a)(n))),n.toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.toggleSubInsurance=n.toggleSubInsurance.bind(Object(p.a)(Object(p.a)(n))),n.toggleSubMore=n.toggleSubMore.bind(Object(p.a)(Object(p.a)(n))),n.toggleSubProfile=n.toggleSubProfile.bind(Object(p.a)(Object(p.a)(n))),n.moreTab=[{name:"Claims",url:"/claims"},{name:"Partnership",url:"/partnership"},{name:"Rewards",url:"/rewards"},{name:"About Us",url:"/about"},{name:"Career",url:"/career"},{name:"FAQ",url:"/faq"},{name:"Blog",url:"https://blog.policypal.com/blog/"}],n}return Object(i.a)(t,e),Object(l.a)(t,[{key:"show",value:function(){L.a.getElementsByTagName("body")[0].classList.add("noscroll"),this.setState({visible:!0})}},{key:"hide",value:function(){L.a.getElementsByTagName("body")[0].classList.remove("noscroll"),this.setState({visible:!1})}},{key:"closeMenu",value:function(){L.a.getElementsByTagName("body")[0].classList.remove("noscroll"),this.setState({visible:!1,modal:!1,collapseInsurance:!1,collapseMore:!1,collapseProfile:!1,rotateInsuranceArrow:!0,rotateMoreArrow:!0,rotateProfileArrow:!1})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleSubInsurance",value:function(){this.setState({collapseInsurance:!this.state.collapseInsurance,rotateInsuranceArrow:!this.state.rotateInsuranceArrow,collapseMore:!1,rotateMoreArrow:!0,collapseProfile:!1,rotateProfileArrow:!1})}},{key:"toggleSubMore",value:function(){this.setState({collapseInsurance:!1,rotateInsuranceArrow:!0,collapseMore:!this.state.collapseMore,rotateMoreArrow:!this.state.rotateMoreArrow,collapseProfile:!1,rotateProfileArrow:!1})}},{key:"toggleSubProfile",value:function(){this.setState({collapseInsurance:!1,rotateInsuranceArrow:!0,collapseMore:!1,rotateMoreArrow:!0,collapseProfile:!this.state.collapseProfile,rotateProfileArrow:!this.state.rotateProfileArrow})}},{key:"renderInsuranceLink",value:function(){var e=this,t=O.a.white;return g.a.map(t,function(t,n){return c.a.createElement(y.u,{key:"insur-".concat(n),tag:G.a,to:t.url,onClick:e.closeMenu},c.a.createElement(y.j,{key:n},c.a.createElement("span",{className:"nav-font"},c.a.createElement("img",{src:t.src,className:"nav-icon",alt:"icon-".concat(n)}),t.name)))})}},{key:"renderMoreLinks",value:function(){var e=this,t=g.a.map(this.moreTab,function(t,n){return c.a.createElement(y.u,{key:"insur-more-".concat(n),tag:G.a,to:t.url,onClick:function(){e.closeMenu(),e.props.resetInsuranceForm()}},c.a.createElement(y.j,{key:n},c.a.createElement("span",{className:"nav-font"},t.name)))});return t}},{key:"renderSignIn",value:function(){var e=this,t=this.props,n=t.userDetails,a=t.login,r=t.logout,o=this.state.rotateProfileArrow?"turn":"arrow";if(null!==n){var l=n.gender&&"FEMALE"===n.gender.toUpperCase()?C.a:S.a,i=n.surname||"User";return c.a.createElement(s.Fragment,null,c.a.createElement(y.D,{nav:!0,inNavbar:!0},c.a.createElement(y.l,{nav:!0,onClick:this.toggleSubProfile},c.a.createElement("div",{className:"profile-pic"},c.a.createElement("img",{src:l,alt:"profile"})),c.a.createElement("div",{className:"user-name"},c.a.createElement("p",null,i)),c.a.createElement("div",{className:"arrow-container"},c.a.createElement("img",{src:X.a,alt:"/",className:o}))),c.a.createElement(y.g,{className:"sub-nav-menu",isOpen:this.state.collapseProfile},c.a.createElement(y.u,{tag:G.a,to:"/profile",onClick:this.closeMenu},c.a.createElement(y.j,null,c.a.createElement("span",{className:"nav-font"},"My Account"))),c.a.createElement(y.u,{tag:G.a,to:"/",onClick:function(){r(),e.closeMenu()}},c.a.createElement(y.j,null,c.a.createElement("span",{className:"nav-font"},"Log Out"))))))}return c.a.createElement("div",{className:"button-container"},c.a.createElement(N.a,{variant:"small-outline",width:140,height:60,onClick:function(){a.popup.openPopup(a.loginContainer.setInitialIndex(1))}},c.a.createElement("p",null,"Sign In")),c.a.createElement(N.a,{variant:"small-flat",width:140,height:60,onClick:function(){a.popup.openPopup(a.loginContainer.setInitialIndex(2))}},c.a.createElement("p",null,"Sign Up")))}},{key:"render",value:function(){var e=this.state.rotateInsuranceArrow?"arrow":"turn",t=this.state.rotateMoreArrow?"arrow":"turn",n=this.props,a=n.navBG,r=n.navColors;return c.a.createElement("div",{className:"navigation d-md-block d-lg-none d-xl-none"},c.a.createElement(y.v,{fixed:"top",expand:"lg",className:"mobile-nav ".concat(a)},c.a.createElement(y.h,{fluid:!0},c.a.createElement(y.w,{tag:G.a,to:"/",onClick:function(){v.a.scrollTo(0,0)}},c.a.createElement("img",{src:E.a,alt:"PolicyPal Logo"})),c.a.createElement(y.x,{onClick:this.show},c.a.createElement("img",{src:Q.a,alt:""})),c.a.createElement(Y.a,{className:"nav-mobile-opened nav-mobile-opened-content",visible:this.state.visible,onClose:this.hide,animation:"door"},c.a.createElement(s.Fragment,null,c.a.createElement(y.u,{tag:G.a,to:"/",className:"PP-logo navbar-brand",onClick:this.closeMenu},c.a.createElement("img",{src:J.a,alt:"PolicyPal Logo"})),this.renderSignIn(),c.a.createElement(y.t,null,c.a.createElement(y.u,{tag:G.a,to:"/referral",onClick:this.closeMenu},"Get $5")),c.a.createElement(y.D,{nav:!0,inNavbar:!0},c.a.createElement(y.l,{nav:!0,onClick:this.toggleSubInsurance},"Buy Policy",c.a.createElement("div",{className:"arrow-container"},c.a.createElement("img",{src:X.a,alt:"/",className:e}))),c.a.createElement(y.g,{className:"sub-nav-menu",isOpen:this.state.collapseInsurance},this.renderInsuranceLink())),c.a.createElement(y.D,{nav:!0,inNavbar:!0},c.a.createElement(y.l,{nav:!0,onClick:this.toggleSubMore,className:r},"More",c.a.createElement("div",{className:"arrow-container"},c.a.createElement("img",{src:X.a,alt:"/",className:t}))),c.a.createElement(y.g,{className:"sub-nav-menu",isOpen:this.state.collapseMore},this.renderMoreLinks())),c.a.createElement(y.t,null,c.a.createElement(y.u,{tag:G.a,to:"/business",onClick:this.closeMenu},"Business")),c.a.createElement(y.t,null,c.a.createElement("a",{href:"https://blog.policypal.com",className:"nav-link ".concat(r)},"Blog")))))))}}]),t}(s.Component);V.defaultProps={navBG:null,navColors:null,login:null,userDetails:null};var Z=Object(u.connect)(null,function(e){return{resetInsuranceForm:function(){return e(Object(H.D)())},logout:function(){return e(Object(x.t)())}}})(V),$=function(e){function t(e){var n;Object(a.a)(this,t);var l=(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).props;return n.state={currColor:B.j,currBGColor:B.i,currPageInsurance:B.l,currPageMore:B.m,currPageBusiness:B.k,currLoginState:!0},l&&l.data&&(n.state={userDetails:l}),n}return Object(i.a)(t,e),Object(l.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.navColors!==t.currColor||e.navBg!==t.navBg||e.onPageInsurance!==t.onPageInsurance||e.onPageMore!==t.onPageMore||e.onPageBusiness!==t.onPageBusiness||e.userDetails.data!==t.userDetails.data?{currColor:e.navColors,currBGColor:e.navBg,currPageInsurance:e.onPageInsurance,currPageMore:e.onPageMore,currPageBusiness:e.onPageBusiness,userDetails:e.userDetails.data}:null}}]),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currColor,n=e.currBGColor,a=e.currPageInsurance,r=e.currPageMore,o=e.currPageBusiness,l=e.currLoginState,i=e.userDetails,u=this.props.login;return c.a.createElement(s.Fragment,null,c.a.createElement(Z,{navBG:"nav-white-bg",loginState:l,userDetails:i,login:u}),c.a.createElement(W,{navColors:t,navBG:n,onPageInsurance:a,onPageMore:r,onPageBusiness:o,loginState:l,userDetails:i,login:u}))}}]),t}(s.Component);t.default=Object(u.connect)(function(e){return{navColors:e.nav.navColors,currIndex:e.nav.currIndex,navBg:e.nav.navBg,onPageInsurance:e.nav.onPageInsurance,onPageMore:e.nav.onPageMore,onPageBusiness:e.nav.onPageBusiness,login:e.login,userDetails:e.userDetails}},null)($)},299:function(e,t,n){"use strict";var a=n(45),r=n(46),o=n(48),l=n(47),i=n(49),s=n(1),c=n.n(s),u=n(306),p=(n(308),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={variantStyle:n.getVariantClassString()},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.variant!==e.variant&&this.setState({variantStyle:this.getVariantClassString()})}},{key:"getVariantClassString",value:function(){var e=this.props.variant;return e?"button-".concat(e):"button-medium-color"}},{key:"render",value:function(){var e=this.state.variantStyle,t=this.props,n=t.onClick,a=t.type,r=t.children,o=t.disabled,l=t.width,i=t.height,s=t.className,p=t.isLoading,m=o?"disabled":"",h=l?"".concat(l,"px"):"101%",d=i?"".concat(i,"px"):"100%";return c.a.createElement("button",{type:a,className:"".concat(s," ").concat(e," ").concat(m),onClick:function(){p||n()},tabIndex:0,onKeyUp:function(){p||n()},disabled:o,style:{width:h,minHeight:d}},p?c.a.createElement(u.a,null):r)}}]),t}(s.Component));p.defaultProps={type:"button",onClick:function(){},disabled:!1,width:"",height:"",className:"",isLoading:!1},t.a=p},300:function(e,t,n){e.exports=n.p+"static/media/arrow.bf1f0d90.svg"},306:function(e,t,n){"use strict";var a=n(45),r=n(46),o=n(48),l=n(47),i=n(49),s=n(1),c=n.n(s),u=(n(307),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.dotsColor;return c.a.createElement("div",{className:"spinner-animation"},c.a.createElement("div",{className:"dot1",style:{backgroundColor:e}}),c.a.createElement("div",{className:"dot2",style:{backgroundColor:e}}))}}]),t}(s.Component));u.defaultProps={dotsColor:"#333"},t.a=u},307:function(e,t,n){},308:function(e,t,n){},320:function(e,t,n){"use strict";var a=n(45),r=n(46),o=n(48),l=n(47),i=n(49),s=n(114),c=n(35),u=n.n(c),p=n(12),m=n.n(p),h=n(5),d=n.n(h),v=n(1),f=n.n(v),g=(n(346),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={isPopUpOpen:!1,insurerArrowHorizontal:0,scrollPos:0,scrollheight:0,popUpHeight:0,exitCallback:null},n.handleInsurerHover=n.handleInsurerHover.bind(Object(s.a)(Object(s.a)(n))),n.handleInsurerBlur=n.handleInsurerBlur.bind(Object(s.a)(Object(s.a)(n))),n.handleMouseMoveOnHoverButton=n.handleMouseMoveOnHoverButton.bind(Object(s.a)(Object(s.a)(n))),n.handleClickOnHoverButton=n.handleClickOnHoverButton.bind(Object(s.a)(Object(s.a)(n))),n.handleScroll=n.handleScroll.bind(Object(s.a)(Object(s.a)(n))),n.handlePopUpScroll=n.handlePopUpScroll.bind(Object(s.a)(Object(s.a)(n))),n.handlePopUpWheel=n.handlePopUpWheel.bind(Object(s.a)(Object(s.a)(n))),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.a.addEventListener("scroll",this.handleScroll),this.hide()}},{key:"componentWillUnmount",value:function(){m.a.removeEventListener("scroll",this.handleScroll),this.hide()}},{key:"show",value:function(){u.a.body.scroll="no"}},{key:"hide",value:function(){u.a.body.scroll="yes"}},{key:"handleScroll",value:function(){this.state.isPopUpOpen&&(this.setState({isPopUpOpen:!1}),this.hide())}},{key:"handleInsurerHover",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.state.isPopUpOpen,r=this.props.maxHeight;if(!a){var o=20;d.a.each(this.insurerPopUpScroll.children,function(e){o+=e.scrollHeight});var l=e.target.getBoundingClientRect(),i=m.a.innerWidth-262-20-20,s=l.left+.5*l.width-131-20,c=Math.max(20,Math.min(s,i)),u=c-s;this.insurerPopUp.style.left="".concat(c,"px"),this.insurerPopUp.style.top="".concat(l.top,"px"),this.setState({isPopUpOpen:!0,insurerArrowHorizontal:u,popUpHeight:Math.min(o,r),exitCallback:n}),this.show(),t&&t(),this.insurerPopUpScroll.children.length>4&&setTimeout(this.handlePopUpScroll,10)}}},{key:"handleInsurerBlur",value:function(e){var t=this.state.exitCallback;e&&e.preventDefault(),this.setState({isPopUpOpen:!1}),t&&t(),this.hide()}},{key:"handleMouseMoveOnHoverButton",value:function(e){var t=this.insurerPopUp.getBoundingClientRect();if(e.clientY-t.top<40){var n=this.state.insurerArrowHorizontal,a=t.left+.5*t.width-20-n,r=a+60;a<e.clientX&&e.clientX<r||this.handleInsurerBlur(e)}}},{key:"handleClickOnHoverButton",value:function(e){var t=this.props.onHoverButtonClick;if(t){var n=this.insurerPopUp.getBoundingClientRect();if(e.clientY-n.top<40){var a=this.state.insurerArrowHorizontal,r=n.left+.5*n.width-20-a,o=r+60;r<e.clientX&&e.clientX<o&&t()}}}},{key:"handlePopUpScroll",value:function(){var e=this.insurerPopUpScroll.scrollTop/(this.insurerPopUpScroll.scrollHeight-this.insurerPopUpScroll.offsetHeight),t=this.insurerPopUpScroll.offsetHeight/this.insurerPopUpScroll.scrollHeight*this.insurerPopUpScroll.offsetHeight,n=e*(this.insurerPopUpScroll.offsetHeight-t);this.setState({scrollPos:n,scrollheight:t}),this.show()}},{key:"handlePopUpWheel",value:function(e){var t=this.insurerPopUpScroll.offsetHeight+this.insurerPopUpScroll.scrollTop;(e.deltaY<0&&this.insurerPopUpScroll.scrollTop<=0||e.deltaY>0&&t===this.insurerPopUpScroll.scrollHeight)&&e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state,n=t.isPopUpOpen,a=t.insurerArrowHorizontal,r=t.scrollPos,o=t.scrollheight,l=t.popUpHeight,i=this.props,s=i.offsetHeight,c=n?"":"list-popup-container-closed",u=i.onHoverButtonClick?"speech-scroll-clickable":"";return f.a.createElement("div",{className:"speech-scroll"},f.a.createElement("div",{role:"button",tabIndex:-1,onKeyUp:function(){},className:"list-popup-container ".concat(u," ").concat(c),ref:function(t){return e.insurerPopUp=t},onMouseMove:this.handleMouseMoveOnHoverButton,onMouseLeave:this.handleInsurerBlur,onClick:this.handleClickOnHoverButton,style:{height:l+s,paddingTop:s}},f.a.createElement("div",{className:"list-popup-background",style:{height:l}},f.a.createElement("div",{className:"arrow",style:{marginRight:a}})),f.a.createElement("div",{className:"scrollbar-container",style:{top:s+2}},f.a.createElement("div",{className:"scrollbar",ref:function(t){return e.scrollBar=t},style:{marginTop:"".concat(r,"px"),height:o}})),f.a.createElement("div",{className:"list-popup",onScroll:this.handlePopUpScroll,onWheel:this.handlePopUpWheel,ref:function(t){return e.insurerPopUpScroll=t},style:{height:l}},this.props.children)))}}]),t}(v.Component));g.defaultProps={maxHeight:273,offsetHeight:40,onHoverButtonClick:null},t.a=g},346:function(e,t,n){},359:function(e,t,n){"use strict";var a=n(396),r=n.n(a),o=n(397),l=n.n(o),i=n(398),s=n.n(i),c=n(399),u=n.n(c),p=n(400),m=n.n(p),h=n(401),d=n.n(h),v=n(402),f=n.n(v),g=n(403),b=n.n(g),y=n(404),k=n.n(y),E=n(405),O=n.n(E),P=n(406),C=n.n(P),w=n(407),S=n.n(w),j=n(408),M=n.n(j),A=n(409),I=n.n(A);t.a={color:[{name:"Travel",src:r.a,url:"/travel"},{name:"Endowment",src:m.a,url:"/endowment"},{name:"Motor",src:l.a,url:"/motor"},{name:"Retirement",src:d.a,url:"/retirement"},{name:"Life",src:s.a,url:"/life"},{name:"Pet",src:f.a,url:"/pet"},{name:"Personal Accident",src:u.a,url:"/personal-accident"}],white:[{name:"Travel",src:b.a,url:"/travel"},{name:"Motor",src:k.a,url:"/motor"},{name:"Life",src:O.a,url:"/life"},{name:"Personal Accident",src:C.a,url:"/personal-accident"},{name:"Endowment",src:S.a,url:"/endowment"},{name:"Retirement",src:M.a,url:"/retirement"},{name:"Pet",src:I.a,url:"/pet"}]}},396:function(e,t,n){e.exports=n.p+"static/media/nav-Travel.464c2073.svg"},397:function(e,t,n){e.exports=n.p+"static/media/nav-Motor.72a9893c.svg"},398:function(e,t,n){e.exports=n.p+"static/media/nav-Life.6b99f177.svg"},399:function(e,t,n){e.exports=n.p+"static/media/nav-PA.119b8bbd.svg"},400:function(e,t,n){e.exports=n.p+"static/media/nav-Endowment.cdadd440.svg"},401:function(e,t,n){e.exports=n.p+"static/media/nav-Retirement.5500d486.svg"},402:function(e,t,n){e.exports=n.p+"static/media/nav-Pet.ccdeef49.svg"},403:function(e,t,n){e.exports=n.p+"static/media/nav-travel-white.1306cee1.svg"},404:function(e,t,n){e.exports=n.p+"static/media/nav-motor-white.f0c8a355.svg"},405:function(e,t,n){e.exports=n.p+"static/media/nav-life-white.06fb5716.svg"},406:function(e,t,n){e.exports=n.p+"static/media/nav-pa-white.cbb62304.svg"},407:function(e,t,n){e.exports=n.p+"static/media/nav-endowment-white.99f1bc45.svg"},408:function(e,t,n){e.exports=n.p+"static/media/nav-retirement-white.1642689e.svg"},409:function(e,t,n){e.exports=n.p+"static/media/nav-pet-white.255b4067.svg"},418:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(419),l=n.n(o);n(420);t.a=function(){return r.a.createElement("a",{className:"phone-button-container",href:"tel:+6531639184"},r.a.createElement("img",{src:l.a,alt:"Phone.png"}),"+65 31639184")}},419:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACaSURBVHgBvZNhDYAgEIUvghGMYAQj2EAbaANtYhQiGIEIRDiPiT9kHOyh89vexmD3ccAgCjDzLHESK+moBilc+YmDZVIwcRrfWYOIDOtsiCjHgYhcRjQgIqNIFkJg/bJbQlG6srDMF4TC/2R8/QAj2dVNSjLJmJjvUJmG+1JmqeLOkl1R5QPEbFQiyI5Xkkjof4C5jxLG/b1+AnRwaSPYzfqoAAAAAElFTkSuQmCC"},420:function(e,t,n){},421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=i(n(1)),l=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c="undefined"!==typeof window&&window.navigator.userAgent.toLowerCase(),u=c&&c.indexOf("msie 9.0")>0,p=function(e){var t="rodal-dialog rodal-"+(("enter"===e.animationType?e.enterAnimation:e.leaveAnimation)||e.animation)+"-"+e.animationType,n=e.showCloseButton?o.default.createElement("span",{className:"rodal-close",onClick:e.onClose}):null,a=e.width,l=e.height,i=e.measure,s=e.duration,c=e.customStyles,u=r({},{width:a+i,height:l+i,animationDuration:s+"ms",WebkitAnimationDuration:s+"ms"},c);return o.default.createElement("div",{style:u,className:t},e.children,n)},m=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return n=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={isShow:!1,animationType:"leave"},a.onKeyUp=function(e){a.props.closeOnEsc&&27===e.keyCode&&a.props.onClose()},a.animationEnd=function(e){if("leave"===a.state.animationType?a.setState({isShow:!1}):a.props.closeOnEsc&&a.el.focus(),e.target===a.el){var t=a.props.onAnimationEnd;t&&t()}},s(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.enter()}},{key:"componentWillReceiveProps",value:function(e){!this.props.visible&&e.visible?this.enter():this.props.visible&&!e.visible&&this.leave()}},{key:"enter",value:function(){this.setState({isShow:!0,animationType:"enter"})}},{key:"leave",value:function(){this.setState(u?{isShow:!1}:{animationType:"leave"})}},{key:"render",value:function(){var e=this,t=this.props,n=this.state,a=t.closeMaskOnClick?t.onClose:null,l=t.showMask?o.default.createElement("div",{className:"rodal-mask",style:t.customMaskStyles,onClick:a}):null,i={display:n.isShow?"":"none",animationDuration:t.duration+"ms",WebkitAnimationDuration:t.duration+"ms"};return o.default.createElement("div",{style:i,className:"rodal rodal-fade-"+n.animationType+" "+t.className,onAnimationEnd:this.animationEnd,tabIndex:"-1",ref:function(t){e.el=t},onKeyUp:this.onKeyUp},l,o.default.createElement(p,r({},t,{animationType:n.animationType}),t.children))}}]),t}();m.propTypes={width:l.default.number,height:l.default.number,measure:l.default.string,visible:l.default.bool,showMask:l.default.bool,closeOnEsc:l.default.bool,closeMaskOnClick:l.default.bool,showCloseButton:l.default.bool,animation:l.default.string,enterAnimation:l.default.string,leaveAnimation:l.default.string,duration:l.default.number,className:l.default.string,customStyles:l.default.object,customMaskStyles:l.default.object,onClose:l.default.func.isRequired,onAnimationEnd:l.default.func},m.defaultProps={width:400,height:240,measure:"px",visible:!1,showMask:!0,closeOnEsc:!1,closeMaskOnClick:!0,showCloseButton:!0,animation:"zoom",enterAnimation:"",leaveAnimation:"",duration:300,className:"",customStyles:{},customMaskStyles:{}},t.default=m},449:function(e,t,n){e.exports=n.p+"static/media/Female.ee72b1ef.png"},450:function(e,t,n){e.exports=n.p+"static/media/Male.c9356573.png"},451:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),l=n.n(o),i=n(19),s=n.n(i),c=n(21),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return n=a=p(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!m(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,l="string"===typeof t?Object(c.b)(t,null,null,o.location):t,i=o.createHref(l);return r.a.createElement("a",u({},a,{onClick:this.handleClick,href:i,ref:n}))},t}(r.a.Component);h.propTypes={onClick:l.a.func,target:l.a.string,replace:l.a.bool,to:l.a.oneOfType([l.a.string,l.a.object]).isRequired,innerRef:l.a.oneOfType([l.a.string,l.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:l.a.shape({history:l.a.shape({push:l.a.func.isRequired,replace:l.a.func.isRequired,createHref:l.a.func.isRequired}).isRequired}).isRequired},t.a=h},610:function(e,t,n){e.exports=n.p+"static/media/PolicyPalLogo.39d58d99.svg"},611:function(e,t,n){},640:function(e,t,n){e.exports=n.p+"static/media/get5.6dddd696.svg"},641:function(e,t,n){},642:function(e,t,n){},643:function(e,t,n){e.exports=n.p+"static/media/mobile-hamburger.ad193d14.svg"},644:function(e,t,n){e.exports=n.p+"static/media/policypal-logo-white.f020f9eb.svg"}}]);
//# sourceMappingURL=navigation.534afa94.chunk.js.map
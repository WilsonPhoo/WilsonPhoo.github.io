(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1037:function(e,t,a){"use strict";a.r(t);var n=a(45),r=a(46),c=a(48),s=a(47),i=a(49),l=a(1),o=a.n(l),u=a(115),m=a(22),d=a(5),p=a.n(d),h=a(298),g=a(371),b=a(584),f=a(884),y=[{containerClass:"market-place",title:["TM Xplora Japan"],description:"Extensive coverage exclusively for your travels to The Land Of The Rising Sun!",src:"https://webassets.policypal.com/LandingPromo/tm-japan-ad.png",srcClass:"img-market-place",alt:"TmJapanAd Ad",route:"/travel/plan/tokio_marine/xplora_japan",type:"image-right",button:"Learn more",circle:""},{containerClass:"cashback",title:["Purchase policy","Get 5% cashback"],description:"Get 5% Cashback instantly with every purchase of Travel, Motor or Pet Insurance from us!",src:"https://webassets.policypal.com/LandingPromo/cashback.png",alt:"Cackback",route:"/categories",type:"image-left",button:"Buy Policy",circle:""},{containerClass:"ergo",title:["Automated Flight Delay Insurance"],titleClass:"title-mid",description:"Say goodbye to the old traditional claims processing!",src:"https://webassets.policypal.com/LandingPromo/ergo-ad.png",srcClass:"img-ergo",srcAnchor:"https://www.youtube.com/watch?v=ioMooVj4V2Q&feature=youtu.be",alt:"Ergo Ad",route:"/gotoappstore",type:"image-right",button:"Try it today",circle:""}],v=(a.n(f).a,a(885)),E=a.n(v),k=a(299),j=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"renderInitialSlide",value:function(){var e=this.props.history;return o.a.createElement("div",{className:"initial-splash",key:1},o.a.createElement(b.LazyLoadImage,{className:"get-covered",alt:"landing-page-header.jpg",src:E.a}),o.a.createElement("div",{className:"desc"},o.a.createElement("div",{className:"start-btn"},o.a.createElement(k.a,{variant:"medium-color",width:225,height:60,onClick:function(){return e.push("/categories")}},o.a.createElement("p",null,"Browse all categories")))))}},{key:"renderSlides",value:function(){var e=this.props.history,t=y,a=p.a.map(t,function(t,a){return"cashback"===t.containerClass?o.a.createElement("div",{key:"landing".concat(a),className:"".concat(t.containerClass," landing-slides")},o.a.createElement(u.y,{className:"landing-slides-inner"},o.a.createElement(u.f,{className:"d-none d-md-block",md:{size:6}}),o.a.createElement(u.f,{className:"landing-circle",sm:{size:8},md:{size:6}},t.srcAnchor?o.a.createElement("a",{className:t.srcClass,href:t.srcAnchor,target:"__blank"},o.a.createElement(b.LazyLoadImage,{alt:t.altText,src:t.src})):o.a.createElement(b.LazyLoadImage,{className:t.srcClass,alt:t.altText,src:t.src})),o.a.createElement(u.f,{className:"landing-des",xs:{size:12},md:{size:10,offset:1}},p.a.map(t.title,function(e,a){return o.a.createElement("p",{key:"".concat(t.titleClass,"-title-").concat(a),className:"title ".concat(t.titleClass)},e)}),o.a.createElement("p",{className:"description"},t.description),o.a.createElement(u.y,{className:"button-container",noGutters:!0},o.a.createElement(u.f,{className:"learn-more",xs:12,sm:6},o.a.createElement(k.a,{variant:"medium-outline-inverse",width:165,height:60,onClick:function(){return e.push("/cashback")}},o.a.createElement("p",null,"Learn more"))),o.a.createElement(u.f,{className:"buy-policy",xs:12,sm:6},o.a.createElement(k.a,{variant:"medium-color",width:165,height:60,onClick:function(){t.route&&e.push(t.route)}},o.a.createElement("p",null,t.button))))))):o.a.createElement("div",{key:"landing".concat(a),className:"landing-slides"},o.a.createElement(u.y,{className:"".concat(t.containerClass," landing-slides-inner")},o.a.createElement(u.f,{className:"landing-des",xs:{size:10},md:{size:6}},o.a.createElement("p",{className:"title ".concat(t.titleClass)},t.title),o.a.createElement("p",null,t.description),o.a.createElement("div",{className:"button-container"},t.anchor?o.a.createElement("a",{href:t.anchor,target:"__blank"},o.a.createElement(k.a,{variant:"medium-color",width:165,height:60},o.a.createElement("p",null,t.button))):o.a.createElement(k.a,{variant:"medium-color",width:165,height:60,onClick:function(){t.route&&e.push(t.route)}},o.a.createElement("p",null,t.button)))),o.a.createElement(u.f,{className:"landing-circle",sm:{size:8},md:{size:6}},t.srcAnchor?o.a.createElement("a",{className:t.srcClass,href:t.srcAnchor,target:"__blank"},o.a.createElement("img",{src:t.src,alt:t.altText}),o.a.createElement(b.LazyLoadImage,{alt:t.altText,src:t.src})):o.a.createElement(b.LazyLoadImage,{className:t.srcClass,alt:t.altText,src:t.src}))))}),n=this.renderInitialSlide();return[].concat(Object(m.a)(a),[n])}},{key:"render",value:function(){return o.a.createElement(g.Carousel,{selectedItem:0,showThumbs:!1,showIndicators:!0,showArrows:!1,showStatus:!1,swipeable:!0,emulateTouch:!0,infiniteLoop:!0,interval:4e3,autoPlay:!1,swipeScrollTolerance:100,className:"landing-carousel"},this.renderSlides())}}]),t}(l.Component);j.defaultProps={};var N=Object(h.a)(j),C=a(585),O=a(587),w=(a(886),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(u.f,{xs:12,className:"section-container landing-container"},o.a.createElement(u.y,{className:"d-flex justify-content-center w-100",noGutters:!0},o.a.createElement(u.f,{className:"d-flex upper-container",xs:12},o.a.createElement(u.y,{className:"d-flex w-100",noGutters:!0},o.a.createElement(u.f,{xs:12,lg:7,className:"landing-header scroll-landing"},o.a.createElement(N,null)),o.a.createElement(u.f,{xs:12,lg:5,className:"landing-category-section d-none d-lg-block"},o.a.createElement("p",{className:"trusted-text text-center"},o.a.createElement("strong",null,"Select a category to begin")),o.a.createElement(O.a,null)))),o.a.createElement(u.f,{xs:12,className:"header-carousel header-footer justify-content-end flex-column"},o.a.createElement("p",{className:"trusted-text"},o.a.createElement("strong",null,"TRUSTED PARTNERS")),o.a.createElement(C.a,null))))}}]),t}(l.Component));t.default=w},299:function(e,t,a){"use strict";var n=a(45),r=a(46),c=a(48),s=a(47),i=a(49),l=a(1),o=a.n(l),u=a(306),m=(a(308),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={variantStyle:a.getVariantClassString()},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.variant!==e.variant&&this.setState({variantStyle:this.getVariantClassString()})}},{key:"getVariantClassString",value:function(){var e=this.props.variant;return e?"button-".concat(e):"button-medium-color"}},{key:"render",value:function(){var e=this.state.variantStyle,t=this.props,a=t.onClick,n=t.type,r=t.children,c=t.disabled,s=t.width,i=t.height,l=t.className,m=t.isLoading,d=c?"disabled":"",p=s?"".concat(s,"px"):"101%",h=i?"".concat(i,"px"):"100%";return o.a.createElement("button",{type:n,className:"".concat(l," ").concat(e," ").concat(d),onClick:function(){m||a()},tabIndex:0,onKeyUp:function(){m||a()},disabled:c,style:{width:p,minHeight:h}},m?o.a.createElement(u.a,null):r)}}]),t}(l.Component));m.defaultProps={type:"button",onClick:function(){},disabled:!1,width:"",height:"",className:"",isLoading:!1},t.a=m},306:function(e,t,a){"use strict";var n=a(45),r=a(46),c=a(48),s=a(47),i=a(49),l=a(1),o=a.n(l),u=(a(307),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.dotsColor;return o.a.createElement("div",{className:"spinner-animation"},o.a.createElement("div",{className:"dot1",style:{backgroundColor:e}}),o.a.createElement("div",{className:"dot2",style:{backgroundColor:e}}))}}]),t}(l.Component));u.defaultProps={dotsColor:"#333"},t.a=u},307:function(e,t,a){},308:function(e,t,a){},585:function(e,t,a){"use strict";var n=a(2),r=a(45),c=a(46),s=a(48),i=a(47),l=a(49),o=a(114),u=a(12),m=a.n(u),d=a(5),p=a.n(d),h=a(1),g=a.n(h),b=a(77),f=(a(586),{items:8,nav:!0,rewind:!0,autoplay:!0}),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={width:0},a.renderLogo=a.renderLogo.bind(Object(o.a)(Object(o.a)(a))),a.updateScreenWidth=a.updateScreenWidth.bind(Object(o.a)(Object(o.a)(a))),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateScreenWidth(),m.a.addEventListener("resize",this.updateScreenWidth)}},{key:"componentWillUnmount",value:function(){m.a.removeEventListener("resize",this.updateScreenWidth)}},{key:"updateScreenWidth",value:function(){this.setState({width:m.a.innerWidth})}},{key:"renderLogo",value:function(){var e=this.props.monotone?b.a.smallTinted:b.a.small;return p.a.map(e,function(e,t){return g.a.createElement("div",{className:"insurer-logo-sq",key:t},g.a.createElement("img",{src:e,alt:"logo-".concat(t)}))})}},{key:"render",value:function(){var e=this.state.width;Object(n.a)({},f,this.props.options);return e<360?Object(n.a)({},f,this.props.options,{items:3}):e<520&&Object(n.a)({},f,this.props.options,{items:4}),null}}]),t}(h.Component);y.defaultProps={monotone:!1,options:{}},t.a=y},586:function(e,t,a){},587:function(e,t,a){"use strict";var n=a(45),r=a(46),c=a(48),s=a(47),i=a(49),l=a(1),o=a.n(l),u=a(298),m=a(115),d=a(299),p=a(588),h=a.n(p),g=a(589),b=a.n(g),f=a(590),y=a.n(f),v=a(591),E=a.n(v),k=[{src:h.a,alt:"travel-category-btn.jpg",route:"/travel",url:"/travel"},{src:b.a,alt:"motor-category-btn.jpg",route:"/motor",url:"/motor"},{src:y.a,alt:"pet-category-btn.jpg",route:"/pet",url:"/pet"},{src:E.a,alt:"personal-accident-category-btn.jpg",route:"/personal-accident",url:"/personal-accident"}],j=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"renderButton",value:function(e){var t=this.props.history;return o.a.createElement("button",{key:e.route,className:"cat-img-button",onClick:function(){return t.push(e.route)}},o.a.createElement("img",{src:e.src,className:"cat-img",alt:e.alt}))}},{key:"renderIcons",value:function(){for(var e=[],t=0;t<k.length;t+=2){var a=o.a.createElement(m.f,{xs:12,className:"cat-img-container",key:t},this.renderButton(k[t]),this.renderButton(k[t+1]));e.push(a)}return e}},{key:"render",value:function(){var e=this.props.history;return o.a.createElement(m.y,{noGutters:!0},this.renderIcons(k),o.a.createElement(m.f,{className:"cat-icon-more-button",xs:12},o.a.createElement(d.a,{variant:"medium-color",width:270,height:60,onClick:function(){return e.push("/categories")}},o.a.createElement("div",{className:"plus fa fa-plus"}),o.a.createElement("span",null," More Categories"))))}}]),t}(l.Component);t.a=Object(u.a)(j)},588:function(e,t,a){e.exports=a.p+"static/media/Travel.8c5be815.svg"},589:function(e,t,a){e.exports=a.p+"static/media/Motor.6dbf4dbf.svg"},590:function(e,t,a){e.exports=a.p+"static/media/Pet.6b7ece9e.svg"},591:function(e,t,a){e.exports=a.p+"static/media/PA.afebcb24.svg"},884:function(e,t,a){e.exports=a.p+"static/media/MobileApp.8c1ac786.svg"},885:function(e,t,a){e.exports=a.p+"static/media/getcovered.095e4b02.png"},886:function(e,t,a){}}]);
//# sourceMappingURL=LandingHeader.56778e6a.chunk.js.map
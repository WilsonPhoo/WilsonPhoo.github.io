(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1139:function(e,t,a){"use strict";a.r(t);var n=a(45),r=a(46),o=a(48),c=a(47),i=a(49),s=a(1),l=a.n(s),u=a(56),m=a(306),p=a(12),d=a.n(p),f=a(5),h=a.n(f),g=a(115),b=a(842),y=a.n(b),v=a(843),E=a.n(v),w=a(844),O=a.n(w),j=a(845),N=a.n(j),P=a(427),k=a.n(P),x=a(524),C={data:{contents:["This programme is applicable for PolicyPal's mobile app and website.","This programme is only valid for new sign-ups and purchases made.","The email address which the user signs up with must be a first-time register. This programme is not valid for email addresses that were registered previously.","There are no limitation to the number of friends you can refer to.","Our referral programme is applicable to all travel insurance except FWD.","The P$5 PolicyPal credits will be credited to your PolicyPal account.","PolicyPal reserves the right to suspend or terminate any fraudulent activities and any rewards earned will be deemed as invalid.","PolicyPal reserves the right to amend these terms and conditions at any time without any prior notice. Modifications of these terms will be effective from the time they are updated in the Terms & Conditions section."]}},S=a(425),T=(a(357),a(358),a(20)),I=(a(846),[{img:E.a,title:"Refer your loved ones",desc:"Download PolicyPal app, go to Profile to view your 'Unique Sharing Code'. Tap on 'Share' to start."},{img:O.a,title:"Share code",desc:"Share your 'Unique Sharing Code' with your loved ones via Whatsapp, Twitter or Facebook, or better yet, in person!"},{img:N.a,title:"Use your \u2018Referral Code",desc:"Let your loved ones enter your 'Unique Sharing Code' in the 'Promo Code' section during checkout & they will get $5 off any travel purchase while you will get your $5 PolicyPal credits!"}]),M=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var r=T.l.NONE,i=T.m.NONE,s=T.k.NONE,l=a.props,u=l.resetIndicatorInsurance,m=l.resetIndicatorMore,p=l.resetIndicatorBusiness;return u(r),m(i),p(s),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){d.a.scroll(0,0)}},{key:"renderShareCode",value:function(){var e=this.props,t=e.shareCode,a=e.login;return t?l.a.createElement(s.Fragment,null,l.a.createElement("div",{className:"referral-code"},l.a.createElement("p",{className:"unique"},"Your Unique Sharing Code"),l.a.createElement("p",{className:"code"},t)),l.a.createElement("p",{className:"referral-desc"},"This is the same code you will see from the app.")):l.a.createElement("div",{className:"referral-code sign-in"},l.a.createElement("button",{onClick:function(){a.popup.openPopup(a.loginContainer.setInitialIndex(1))}},l.a.createElement("span",null,l.a.createElement("b",null,"Login / Sign up"))),l.a.createElement("span",{className:"code"}," to get your referral code!"))}},{key:"renderHow",value:function(){return h.a.map(I,function(e,t){return l.a.createElement(g.f,{className:"how-container",key:"referral-how-".concat(t),xs:12,md:4},l.a.createElement("img",{src:e.img,alt:"referral-how-".concat(t,".svg")}),l.a.createElement("h3",null,e.title),l.a.createElement("h5",null,e.desc))})}},{key:"render",value:function(){return l.a.createElement(S.a,{className:"referral-info"},l.a.createElement(s.Fragment,null,l.a.createElement(g.f,{xs:12,lg:4,className:"content"},l.a.createElement("h1",null,"Give $5 get $5"),l.a.createElement("h5",null,"Earn PolicyPal credits by inviting your loved ones to sign up & purchase their policies. Once they have successfully signed up & checked out with your code, we will send the $5 PolicyPal credits to your PolicyPal account. Your loved ones will also get $5 off their first policy purchased."),l.a.createElement("h5",null,"Get $5 as fast as you give $5. All in one code!"),this.renderShareCode()),l.a.createElement(g.f,{className:"main-img",xs:12,lg:8},l.a.createElement("img",{src:y.a,alt:"ReferralMain.svg"})),l.a.createElement(g.f,{xs:12,className:"mouse d-none d-md-flex"},l.a.createElement("img",{src:k.a,alt:"Mouse.svg"})),l.a.createElement(g.f,{className:"travel-top-info",xs:12},l.a.createElement(g.y,{className:"form-landing-information-container landing-green-style",noGutters:!0},l.a.createElement(g.f,{xs:12},l.a.createElement("h2",{className:"main-title"},"HOW IT WORKS"),l.a.createElement("h2",{className:"sub-title"},"HOW IT WORKS?")),l.a.createElement(g.f,{xs:12,className:"information-container"},this.renderHow()))),l.a.createElement(g.f,{xs:12},l.a.createElement(x.a,{data:C}))))}}]),t}(s.Component);M.defaultProps={resetIndicatorInsurance:null,resetIndicatorMore:null,resetIndicatorBusiness:null,shareCode:null};var G=Object(u.connect)(null,function(e){return{resetIndicatorInsurance:function(t){e(Object(T.p)(t))},resetIndicatorMore:function(t){e(Object(T.q)(t))},resetIndicatorBusiness:function(t){e(Object(T.o)(t))}}})(M),W=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.userDetails,a=e.login,n=t?t.share_code:null;return l.a.createElement(m.a,{id:"referral"},l.a.createElement(G,{login:a,shareCode:n}))}}]),t}(s.Component);W.defaultProps={userDetails:null};t.default=Object(u.connect)(function(e){return{userDetails:e.userDetails.data,login:e.login}})(W)},306:function(e,t,a){"use strict";var n=a(308),r=a(45),o=a(46),c=a(48),i=a(47),s=a(49),l=a(1),u=a.n(l),m=a(65),p=a(226),d=a.n(p),f=a(307),h=a.n(f),g="https://web.policypal.com",b="".concat(g).concat(h.a),y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"getMetaTags",value:function(e,t){var a=e.title,n=e.description,r=e.image,o=e.contentType,c=e.twitter,i=e.noCrawl,s=e.published,l=e.updated,u=e.category,m=e.tags,p=a?(a+" | My Website").substring(0,60):"My Website",d=n?n.substring(0,155):"This is a really awesome website where we can render on the server. Supa cool.",f=r?"".concat(g).concat(r):b,h=[{itemprop:"name",content:p},{itemprop:"description",content:d},{itemprop:"image",content:f},{name:"description",content:d},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@cereallarceny"},{name:"twitter:title",content:p},{name:"twitter:description",content:d},{name:"twitter:creator",content:c||"@cereallarceny"},{name:"twitter:image:src",content:f},{property:"og:title",content:p},{property:"og:type",content:o||"website"},{property:"og:url",content:g+t},{property:"og:image",content:f},{property:"og:description",content:d},{property:"og:site_name",content:"My Website"},{property:"fb:app_id",content:"XXXXXXXXX"}];return i&&h.push({name:"robots",content:"noindex, nofollow"}),s&&h.push({name:"article:published_time",content:s}),l&&h.push({name:"article:modified_time",content:l}),u&&h.push({name:"article:section",content:u}),m&&h.push({name:"article:tag",content:m}),h}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.id,r=e.className,o=Object(n.a)(e,["children","id","className"]);return u.a.createElement("div",{id:a,className:r},u.a.createElement(d.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:"http://schema.org/".concat(o.schema||"WebPage")},title:o.title?o.title+" | My Website":"My Website",link:[{rel:"canonical",href:g+this.props.location.pathname}],meta:this.getMetaTags(o,this.props.location.pathname)}),t)}}]),t}(l.Component);t.a=Object(m.a)(y)},307:function(e,t,a){e.exports=a.p+"static/media/logo.f0988bd7.png"},308:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return n})},354:function(e,t,a){e.exports=a.p+"static/media/ArrowGradient.21653fa2.svg"},357:function(e,t,a){},358:function(e,t,a){},397:function(e,t,a){e.exports=a.p+"static/media/Subscribe.31122fc1.png"},425:function(e,t,a){"use strict";var n=a(45),r=a(46),o=a(48),c=a(47),i=a(49),s=a(12),l=a.n(s),u=a(1),m=a.n(u),p=a(115),d=a(385),f=a(397),h=a.n(f),g=a(386),b=a.n(g),y=a(387),v=a.n(y),E=a(435),w=(a(426),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){l.a.scroll(0,0)}},{key:"renderSubscribe",value:function(){return m.a.createElement(p.y,{className:"subscribe-container",noGutters:!0},m.a.createElement(p.f,{className:"d-none d-sm-flex",xs:12,sm:5},m.a.createElement(d.LazyLoadImage,{className:"subscribe-main-img",src:h.a,alt:"subscribe-img.svg"})),m.a.createElement(p.f,{className:"right-container",xs:12,sm:7},m.a.createElement("h3",null,"Download our free app"),m.a.createElement("h5",null,"Get covered on the go, manage all your insurance matters in a single app."),m.a.createElement(p.y,{noGutters:!0},m.a.createElement(p.f,{className:"d-flex d-lg-block justify-content-center",xs:6},m.a.createElement("a",{href:"https://itunes.apple.com/sg/app/policypal/id1118511972?mt=8"},m.a.createElement(d.LazyLoadImage,{src:b.a,alt:"appstore.jpg",className:"store-btn"}))),m.a.createElement(p.f,{className:"d-flex d-lg-block justify-content-center",xs:6},m.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.idvsgjo31w9m05f6raeb3&hl=en"},m.a.createElement(d.LazyLoadImage,{src:v.a,alt:"playstore.jpg",className:"store-btn"}))))))}},{key:"renderBackGround",value:function(){var e=this.props.upperBG;return m.a.createElement(u.Fragment,null,e&&m.a.createElement("div",{className:"circle-shape circle-upper"}),m.a.createElement("div",{className:"circle-shape circle-bottom"}),e&&m.a.createElement("div",{className:"circle-green"}))}},{key:"renderSubscribeSection",value:function(){var e=this.props,t=e.noFooter,a=e.subscribeOverwrite;return t?null:a||m.a.createElement(p.f,{xs:12},a||this.renderSubscribe())}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.noBg,n=e.noPolicyPal,r=e.noFooter,o=e.noAutoMargin,c=e.mode,i=o&&"no-margin";return m.a.createElement("div",{className:"position-relative"},m.a.createElement(p.y,{className:"info-page ".concat(t),noGutters:!0},m.a.createElement(p.f,{xs:12,className:["landing-form-outer-container-new",i].join(" ")},a?null:this.renderBackGround(),m.a.createElement(p.y,{noGutters:!0},this.props.children,this.renderSubscribeSection()))),r?null:m.a.createElement(E.a,{big:!0,noPolicyPal:n,mode:c}))}}]),t}(u.Component));w.defaultProps={className:"",noBg:!1,noPolicyPal:!1,noFooter:!1,subscribeOverwrite:null,noAutoMargin:!1,mode:"short",upperBG:!1},t.a=w},426:function(e,t,a){},427:function(e,t,a){e.exports=a.p+"static/media/Mouse.01511870.svg"},524:function(e,t,a){"use strict";var n=a(45),r=a(46),o=a(48),c=a(47),i=a(49),s=a(114),l=a(12),u=a.n(l),m=a(5),p=a.n(m),d=a(1),f=a.n(d),h=a(115),g=a(354),b=a.n(g),y=(a(525),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).toggle=a.toggle.bind(Object(s.a)(Object(s.a)(a))),a.toggleCollapse=a.toggleCollapse.bind(Object(s.a)(Object(s.a)(a))),a.state={activeTab:"1",collapse:!0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u.a.scroll(0,0)}},{key:"toggleCollapse",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props.data,a=this.state.collapse?"turn":"arrow",n="1"===this.state.activeTab?"active":"";return f.a.createElement(d.Fragment,null,f.a.createElement(h.s,{tabs:!0,className:"tos-container",onClick:function(){e.toggleCollapse()}},f.a.createElement(h.t,{style:{flex:1}},f.a.createElement(h.u,{className:n,onClick:function(){e.toggle("1")}},"Terms & Conditions")),f.a.createElement("img",{src:b.a,className:a,alt:"arrow"})),f.a.createElement(h.z,{activeTab:this.state.activeTab,className:"tos-inner"},f.a.createElement(h.A,{tabId:"1"},f.a.createElement(h.g,{isOpen:this.state.collapse},f.a.createElement(h.b,null,f.a.createElement(h.c,null,f.a.createElement("ol",null,p.a.map(t.data.contents,function(e,t){return f.a.createElement("li",{key:t},e)}))))))))}}]),t}(d.Component));y.defaultProps={},t.a=y},525:function(e,t,a){},842:function(e,t,a){e.exports=a.p+"static/media/ReferralMain.95870cec.svg"},843:function(e,t,a){e.exports=a.p+"static/media/how-1.6db7561f.png"},844:function(e,t,a){e.exports=a.p+"static/media/how-2.3cb14718.png"},845:function(e,t,a){e.exports=a.p+"static/media/how-3.05a466f7.png"},846:function(e,t,a){}}]);
//# sourceMappingURL=referral.a76201b4.chunk.js.map
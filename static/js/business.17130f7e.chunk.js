(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1122:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n(2),o=n(22),s=n(3),i=n.n(s),c=n(6),u=n(45),l=n(48),p=n(47),m=n(46),h=n(49),d=n(114),f=n(12),b=n.n(f),v=n(5),g=n.n(v),O=n(14),w=n.n(O),y=n(1),x=n.n(y),j=n(226),k=n(56),S=n(298),C=n(306),I=n(11),E=n.n(I),T=n(13),P=n(88),F=n(20),_=n(783),L=n.n(_),N=n(398),D=n(8),q=n(121),B=E()({loader:function(){return Promise.all([n.e(0),n.e(93),n.e(11),n.e(52)]).then(n.bind(null,694))},loading:function(){return null},modules:["StepProgressBarNew"]}),U=E()({loader:function(){return Promise.all([n.e(0),n.e(6),n.e(8),n.e(7),n.e(17)]).then(n.bind(null,1083))},loading:function(){return null},modules:["BusinessLanding"]}),M=E()({loader:function(){return Promise.all([n.e(0),n.e(7),n.e(11),n.e(16)]).then(n.bind(null,1095))},loading:function(){return null},modules:["BusinessForm"]}),A=E()({loader:function(){return Promise.all([n.e(0),n.e(9),n.e(7),n.e(11),n.e(15)]).then(n.bind(null,1082))},loading:function(){return null},modules:["BusinessCheckout"]}),W=E()({loader:function(){return Promise.all([n.e(9),n.e(34)]).then(n.bind(null,445))},loading:function(){return null},modules:["LoadingScreenV2"]}),V={slug:"email",placeholderString:"Enter company email address",type:"email",is_required:!0,size:12},R=[{title:"Contact Details",forms:[{size:12,title:"Email",slug:"email",placeholderString:"Enter company email address",type:"email",readOnly:!0,is_required:!0},{size:12,title:"Company",slug:"company",placeholder:"E.g Singtel",type:"text",is_required:!0},{size:12,title:"First name",slug:"first_name",placeholder:"E.g John",type:"text",is_required:!0},{size:12,title:"Last name",slug:"last_name",placeholder:"E.g Doe",type:"text",is_required:!0},{size:12,title:"Mobile no",slug:"mobile_number",placeholder:"E.g 8888 8888",type:"number",is_required:!0}]},{title:"Plan Details",forms:[{size:12,title:"No of employees",slug:"no_of_employees",placeholder:"No of employees",type:"text",readOnly:!0},{size:12,title:"Expected start date",slug:"start_date",placeholder:"DD/MM/YYYY",type:"date",min_date:w()().startOf("day").add(1,"days").toDate(),is_required:!0}]}],Q="customize",K="review",z="checkout",H="pending_payment",X=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).props,r=a.history,o=a.doSetQuoteData;return n.state={formIndex:0,values:{},errors:{},pageForms:null,currPage:null,allFields:null,transitionClass:"flow-visible",showLoading:!1,showLoadingError:!1,token:null,paymentIntent:null,quoteData:null,promoCode:null,isFromSession:r&&r.location&&"/business/review"===r.location.pathname,partialFlowStatus:null,formStatesToUse:P.a},o(null),n.renderStepProgress=n.renderStepProgress.bind(Object(d.a)(Object(d.a)(n))),n.renderFlow=n.renderFlow.bind(Object(d.a)(Object(d.a)(n))),n.onChangeValue=n.onChangeValue.bind(Object(d.a)(Object(d.a)(n))),n.onInitalSetup=n.onInitalSetup.bind(Object(d.a)(Object(d.a)(n))),n.validateForm=n.validateForm.bind(Object(d.a)(Object(d.a)(n))),n.setFormIndex=n.setFormIndex.bind(Object(d.a)(Object(d.a)(n))),n.showLoading=n.showLoading.bind(Object(d.a)(Object(d.a)(n))),n.showLoadingError=n.showLoadingError.bind(Object(d.a)(Object(d.a)(n))),n.handleTransition=n.handleTransition.bind(Object(d.a)(Object(d.a)(n))),n.getCurrentFormIndex=n.getCurrentFormIndex.bind(Object(d.a)(Object(d.a)(n))),n.getNewQuote=n.getNewQuote.bind(Object(d.a)(Object(d.a)(n))),n.handleAPI=n.handleAPI.bind(Object(d.a)(Object(d.a)(n))),n.checkOtp=n.checkOtp.bind(Object(d.a)(Object(d.a)(n))),n.quoteButtonCallback=n.quoteButtonCallback.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(m.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.formIndex,a=t.isMounted,r=e.formState,o=e.match,s=e.history,i=e.doSetCategoryNavBar,c=e.partialFlowStatus;if(a){var u=Object(D.n)("business",r.index,n,o,s,c?P.b:P.a);if(u&&null!==u.formIndex)return i(0!==u.formIndex,!0),{formIndex:u.formIndex}}return null}}]),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark(function e(){var t,n,a,r,o=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.doSetCategoryNavBar,a=t.setFormState,r=t.doSetGetQuoteNavbar,a(P.a.MAIN),this.setState({isMounted:!0}),n(!1,!0),r(function(){return o.quoteButtonCallback(!0)}),this.onInitalSetup();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.doSetCategoryNavBar,n=e.doSetQuoteData;t(!1,!1),n(null)}},{key:"onInitalSetup",value:function(){var e=Object(c.a)(i.a.mark(function e(){var t,n,a,s,c,u,l,p,m,h,d,f,b,v,O,w,y,x,j,k=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.isFromSession,n=this.props,a=n.history,s=n.setFormState,c=n.doSetQuoteData,u={};try{t&&(l=a.location.search.split("?")[1].split("&"),g.a.each(l,function(e){try{var t=e.split("=");u[t[0]]=t[1]}catch(n){}}))}catch(i){}if(p=null,m=null,h=null,d={},f=!1,b=P.a,e.prev=10,!u.session){e.next=17;break}return e.next=14,this.handleAPI(function(){return Object(P.f)(u.session)});case 14:e.t0=e.sent,e.next=18;break;case 17:e.t0=null;case 18:return v=e.t0,O=v&&v.status,b=(f="deposited"===O||"paid"===O?O:null)?P.b:P.a,e.next=24,this.handleAPI(P.e);case 24:if(!(w=e.sent)){e.next=54;break}if(h=[].concat(Object(o.a)(Object(D.i)(w)),[V],Object(o.a)(Object(D.i)(R))),(p=w)&&(m=p[0].slug,v&&v.page&&g.a.find(p,function(e){return e.slug===v.page})&&(m=v.page)),!v||!v.status){e.next=38;break}return y=!0,e.next=33,new Promise(function(e){return k.setState({token:u.session,paymentIntent:u.payment_intent},e)});case 33:s(b.CUSTOMIZE),a.push("/business".concat(b.CUSTOMIZE.path).concat(a.location.search)),v.status===Q&&(y=!1),y&&(s(b.REVIEW),a.push("/business".concat(b.REVIEW.path).concat(a.location.search)),v.status===K&&(y=!1)),u.payment_intent&&(s(b.CHECKOUT),a.push("/business".concat(b.CHECKOUT.path).concat(a.location.search)));case 38:if(!v||!v.input_data){e.next=54;break}if(x=v.input_data,d=g.a.reduce(x,function(e,t,n){var a=Object(r.a)({},e),o=g.a.find(h,function(e){return e.slug===n});if(o){var s=t;"date"!==o.type&&"end_date"!==o.type||(s=new Date(t)),a[n]={type:o.type,value:s}}return a},{}),!f||!u.session){e.next=51;break}return e.next=44,Object(P.g)(u.session);case 44:if(!(j=e.sent)||!j.quote){e.next=49;break}return e.next=48,new Promise(function(e){k.setState({quoteData:j.quote},e)});case 48:c({quote:{info:j.info,quote:j.quote},isBalance:j.quote&&j.quote.outstanding_premium&&j.quote.amount_paid});case 49:e.next=54;break;case 51:if(g.a.isEmpty(d)){e.next=54;break}return e.next=54,this.getNewQuote(h,d,u.session,1);case 54:e.next=58;break;case 56:e.prev=56,e.t1=e.catch(10);case 58:this.setState({pageForms:p,currPage:m,values:d,allFields:h,partialFlowStatus:f,formStatesToUse:b,isFromSession:!1});case 59:case"end":return e.stop()}},e,this,[[10,56]])}));return function(){return e.apply(this,arguments)}}()},{key:"onChangeValue",value:function(){var e=Object(c.a)(i.a.mark(function e(t,n,o){var s,u,l,p,m,h,d,f,b,v,O=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.state,u=s.values,l=s.errors,p=s.allFields,m=s.token,h=s.formIndex,d=s.promoCode,f=s.formStatesToUse,e.prev=1,b=l&&l[n],v={},!b){e.next=12;break}return e.t0=a.a,e.t1={},e.t2=n,e.next=10,Object(q.b)(n,{type:t,value:o},u,p);case 10:e.t3=e.sent,v=(0,e.t0)(e.t1,e.t2,e.t3);case 12:return e.abrupt("return",new Promise(function(e){O.setState({values:Object(r.a)({},u,Object(a.a)({},n,{type:t,value:o})),errors:Object(r.a)({},l,v)},Object(c.a)(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=O.state.values,h!==f.CUSTOMIZE.index){t.next=10;break}if(!g.a.isEmpty(v)){t.next=10;break}if("age_group"===n){t.next=10;break}if(!(a&&a.age_group&&a.age_group.value)){t.next=10;break}if(!(a&&a.no_of_employees&&a.no_of_employees.value>=0)){t.next=10;break}return t.next=10,O.getNewQuote(p,a,m,1,d);case 10:e();case 11:case"end":return t.stop()}},t)})))}));case 15:e.prev=15,e.t4=e.catch(1);case 17:return e.abrupt("return",null);case 18:case"end":return e.stop()}},e,this,[[1,15]])}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"setFormIndex",value:function(e){if(e){var t=this.props,n=t.doSetCategoryNavBar,a=t.history,r=t.setFormState;n(0!==e.index,!0),r(e),a.push("/".concat("business").concat(e.path))}}},{key:"getNewQuote",value:function(){var e=Object(c.a)(i.a.mark(function e(t,n,a,r,o){var s,c,u,l=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=this.props.doSetQuoteData,c=Object(D.b)(t,n),u=null,!(c.no_of_employees&&c.no_of_employees>0)){e.next=8;break}return e.next=7,Object(P.k)(c,a,r,o);case 7:u=e.sent;case 8:return e.next=10,new Promise(function(e){l.setState({quoteData:u},e)});case 10:return s({quote:u,isDeposit:!1}),e.abrupt("return",u);case 14:e.prev=14,e.t0=e.catch(0);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,n,a,r,o){return e.apply(this,arguments)}}()},{key:"getCurrentFormIndex",value:function(){var e=this.state,t=e.pageForms,n=e.currPage,a=-1;try{a=g.a.findIndex(t,function(e){return e.slug===n})}catch(r){}return a}},{key:"checkOtp",value:function(){var e=Object(c.a)(i.a.mark(function e(){var t,n,a,r,o=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.paymentIntent,a=t.token,e.prev=1,e.next=4,this.handleAPI(function(){return new Promise(function(e){var t=5,r=!1,s=!1;o.checkOtpInterval=setInterval(Object(c.a)(i.a.mark(function c(){var u;return i.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(s){i.next=12;break}return s=!0,i.next=4,Object(P.p)(a,n);case 4:if(u=i.sent,t-=1,r=u&&"succeeded"===u.status,0!==t&&!r){i.next=11;break}return clearInterval(o.checkOtpInterval),e(r),i.abrupt("return");case 11:s=!1;case 12:case"end":return i.stop()}},c)})),1e3)})});case 4:return r=e.sent,this.setState({paymentIntent:null}),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleAPI",value:function(){var e=Object(c.a)(i.a.mark(function e(t){var n,a,r,o=this,s=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]&&s[1],a=this.state.isFromSession,e.prev=2,clearInterval(this.showLoadigInterval),a||(this.showLoadigInterval=setInterval(function(){return o.setState({showLoading:!0})},300)),e.next=7,t();case 7:return r=e.sent,clearInterval(this.showLoadigInterval),this.setState({showLoadingError:!n&&!r,showLoading:!n&&!r}),e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(2);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}},e,this,[[2,13]])}));return function(t){return e.apply(this,arguments)}}()},{key:"showLoading",value:function(){var e=Object(c.a)(i.a.mark(function e(t){var n=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){n.setState({showLoading:t},e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"showLoadingError",value:function(){var e=Object(c.a)(i.a.mark(function e(t){var n=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){n.setState({showLoadingError:t},e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleTransition",value:function(){var e=Object(c.a)(i.a.mark(function e(t){var n=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({transitionClass:"flow-invisible"},Object(c.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){setTimeout(function(){e()},200)});case 2:return t(),e.next=5,new Promise(function(e){setTimeout(function(){e()},100)});case 5:n.setState({transitionClass:"flow-visible"});case 6:case"end":return e.stop()}},e)})));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"quoteButtonCallback",value:function(){var e=Object(c.a)(i.a.mark(function e(t){var n,a,r,o,s,u=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state,a=n.values,r=n.pageForms,o=n.formStatesToUse,e.prev=1,e.next=4,this.validateForm([V.slug],Object(c.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.l)(Object(D.b)([V],a));case 2:return t=e.sent,e.next=5,u.handleAPI(function(){return Object(P.m)(Object(D.b)([V],a),t,Q,r[0].slug)});case 5:if(!e.sent){e.next=7;break}u.setState({token:t},function(){u.handleTransition(function(){b.a.scrollTo(0,0),u.setFormIndex(o.CUSTOMIZE)})});case 7:case"end":return e.stop()}},e)})));case 4:s=e.sent,t&&!s&&b.a.scrollTo({top:0,left:0,behavior:"smooth"}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"validateForm",value:function(){var e=Object(c.a)(i.a.mark(function e(){var t,n,a,o,s,c,u,l,p,m=this,h=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>0&&void 0!==h[0]?h[0]:null,n=h.length>1&&void 0!==h[1]?h[1]:null,a=h.length>2&&void 0!==h[2]?h[2]:null,o=this.state,s=o.values,c=o.errors,u=o.allFields,l=a||u,p=Object(r.a)({},c),e.prev=6,e.next=9,Object(q.a)(s,t,l);case 9:p=e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:return e.abrupt("return",new Promise(function(e){m.setState({errors:p},function(){g.a.isEmpty(p)&&(n&&n(),e(!0)),e(!1)})}));case 15:case"end":return e.stop()}},e,this,[[6,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderStepProgress",value:function(){var e=this.state,t=e.formIndex,n=e.partialFlowStatus,a=e.formStatesToUse,r=n?["Review","Checkout"]:["Customize","Review","Checkout"],o=n?[a.REVIEW,a.CHECKOUT]:[a.CUSTOMIZE,a.REVIEW,a.CHECKOUT],s=n?[{main:""},{main:""}]:[{main:""},{main:""},{main:""}];return x.a.createElement(B,{className:"business-step-progress",maxWidth:"244px",formState:t>a.CHECKOUT.index?a.CHECKOUT.index:t,inputList:r,formStates:a,stateList:o,stateDescriptions:s,charged:!1,v3Slider:!0})}},{key:"renderFlow",value:function(){var e=this,t=this.state,n=t.formIndex,a=t.values,o=t.errors,s=t.pageForms,u=t.currPage,l=t.transitionClass,p=t.allFields,m=t.token,h=t.promoCode,d=t.paymentIntent,f=t.isFromSession,v=t.partialFlowStatus,O=t.formStatesToUse,w=this.props,y=w.userDetails,j=w.doSetQuoteData,k=w.quoteDataFromState,S=w.setFormState,C=w.history,I=!g.a.isEmpty(y),E=this.getCurrentFormIndex();switch(n){case O.CUSTOMIZE.index:return x.a.createElement(M,{handleAPI:this.handleAPI,isFromSession:f,stickyInfo:k,values:a,errors:o,onChangeValue:this.onChangeValue,validateForm:this.validateForm,pageForms:s,currPage:u,isLoggedIn:I,headerImage:0===E?L.a:null,onNext:Object(c.a)(i.a.mark(function t(){var n,r,o,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.getCurrentFormIndex(),r=n+1<s.length,o=r?s[n+1].slug:u,c=r?Q:K,t.next=6,e.handleAPI(function(){return Object(P.m)(Object(D.b)(p,a),m,c,o,1,v)});case 6:t.sent&&e.handleTransition(function(){b.a.scrollTo(0,0);try{r?e.setState({currPage:o}):e.setFormIndex(O.REVIEW)}catch(t){}});case 8:case"end":return t.stop()}},t)})),onBack:Object(c.a)(i.a.mark(function t(){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.getCurrentFormIndex(),r=s[n-1].slug,t.next=4,e.handleAPI(function(){return Object(P.m)(Object(D.b)(p,a),m,Q,r,1,v)});case 4:t.sent&&e.handleTransition(function(){b.a.scrollTo(0,0);try{n-1>=0&&e.setState({currPage:r})}catch(t){}});case 6:case"end":return t.stop()}},t)})),transitionClass:l});case O.REVIEW.index:case O.CHECKOUT.index:case O.SUBMITTED.index:return x.a.createElement(A,{setStateToSubmitted:function(){S(O.SUBMITTED),C.push("/business".concat(O.SUBMITTED.path).concat(C.location.search))},partialFlowStatus:v,postComeBackLater:function(){var t=Object(c.a)(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.handleAPI(function(){return Object(P.j)(n,m)}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),doSetQuoteData:j,stickyInfo:k,isFromSession:f,checkOtp:this.checkOtp,paymentIntent:d,handleAPI:this.handleAPI,promoCode:h,token:m,postBankTransfer:function(){var t=Object(c.a)(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.handleAPI(function(){return Object(P.h)(n,m)}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),getSummary:Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.handleAPI(function(){return Object(P.g)(m)}));case 1:case"end":return t.stop()}},t)})),postCheckout:Object(c.a)(i.a.mark(function t(){var n,o,s,c,l=arguments;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:null,o=l.length>1&&void 0!==l[1]&&l[1],t.next=4,e.handleAPI(function(){return Object(P.i)(m,n)},!o);case 4:if(!(s=t.sent)){t.next=9;break}return c=s.quote?{quoteData:Object(r.a)({},e.state.quoteData||{},{quote:Object(r.a)({},s.quote)})}:{},t.next=9,new Promise(function(t){e.setState(Object(r.a)({promoCode:n},c),t)});case 9:if(o){t.next=11;break}return t.abrupt("return",s);case 11:if(!o){t.next=16;break}return t.next=14,e.handleAPI(function(){return Object(P.m)(Object(D.b)(p,a),m,H,u,1,v)});case 14:if(!s||!s.payment_template_links){t.next=16;break}return t.abrupt("return",s);case 16:return t.abrupt("return",null);case 17:case"end":return t.stop()}},t)})),checkoutFields:R,isCheckout:n===O.CHECKOUT.index,values:a,errors:o,onChangeValue:this.onChangeValue,validateForm:this.validateForm,isLoggedIn:I,onBack:Object(c.a)(i.a.mark(function t(){var r,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n===O.REVIEW.index?Q:K,o=n===O.REVIEW.index?O.CUSTOMIZE:O.REVIEW,t.next=4,e.handleAPI(function(){return Object(P.m)(Object(D.b)(p,a),m,r,u,1,v)});case 4:t.sent&&e.handleTransition(function(){b.a.scrollTo(0,0),e.setFormIndex(o)});case 6:case"end":return t.stop()}},t)})),onNext:n===O.REVIEW.index?Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleAPI(function(){return Object(P.m)(Object(D.b)(p,a),m,z,u,1,v)});case 2:t.sent&&e.handleTransition(function(){b.a.scrollTo(0,0),e.setFormIndex(O.CHECKOUT)});case 4:case"end":return t.stop()}},t)})):null,transitionClass:l,handleTransition:this.handleTransition});default:return x.a.createElement(U,{isFromSession:f,emailField:V,values:a,errors:o,onChangeValue:this.onChangeValue,isLoggedIn:I,quoteButtonCallback:this.quoteButtonCallback,transitionClass:l,handleAPI:this.handleAPI})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.formIndex,a=t.showLoading,r=t.showLoadingError;return x.a.createElement(C.a,{id:"business"},x.a.createElement(j.Helmet,null,x.a.createElement("title",null,"PolicyPal 2.0 - Business Insurance"),x.a.createElement("meta",{name:"title",content:"PolicyPal 2.0 - Business Insurance"}),x.a.createElement("meta",{name:"description",content:"PolicyPal Business can offer tailored quotations to protect your business. From corporate companies, to SMEs, startups, we\u2019ve got just the best benefits and coverage for you so you can gain full protection."})),0!==n&&this.renderStepProgress(),this.renderFlow(),x.a.createElement(N.a,{ref:function(t){e.refresher||t.invokeNewTimer(),e.refresher=t}}),x.a.createElement(W,{isLoading:a,isLoadingError:r,message:x.a.createElement("h5",null,"Please try again."),showLoading:this.showLoading,showLoadingError:this.showLoadingError,noLogos:!0}))}}]),t}(y.Component);X.defaultProps={userDetails:null,quoteDataFromState:null};t.default=Object(S.a)(Object(k.connect)(function(e){return{formState:e.insurance.formState,constants:e.insurance.constants,userDetails:e.userDetails.data,quoteDataFromState:e.business.quoteData}},function(e){return{setFormState:function(t){e(Object(T.K)(t))},doSetCategoryNavBar:function(t,n){e(Object(F.n)(t,!1,n))},doSetGetQuoteNavbar:function(t){e(Object(P.n)(t))},doSetQuoteData:function(t){e(Object(P.o)(t))}}})(X))},306:function(e,t,n){"use strict";var a=n(308),r=n(45),o=n(46),s=n(48),i=n(47),c=n(49),u=n(1),l=n.n(u),p=n(65),m=n(226),h=n.n(m),d=n(307),f=n.n(d),b="https://web.policypal.com",v="".concat(b).concat(f.a),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"getMetaTags",value:function(e,t){var n=e.title,a=e.description,r=e.image,o=e.contentType,s=e.twitter,i=e.noCrawl,c=e.published,u=e.updated,l=e.category,p=e.tags,m=n?(n+" | My Website").substring(0,60):"My Website",h=a?a.substring(0,155):"This is a really awesome website where we can render on the server. Supa cool.",d=r?"".concat(b).concat(r):v,f=[{itemprop:"name",content:m},{itemprop:"description",content:h},{itemprop:"image",content:d},{name:"description",content:h},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@cereallarceny"},{name:"twitter:title",content:m},{name:"twitter:description",content:h},{name:"twitter:creator",content:s||"@cereallarceny"},{name:"twitter:image:src",content:d},{property:"og:title",content:m},{property:"og:type",content:o||"website"},{property:"og:url",content:b+t},{property:"og:image",content:d},{property:"og:description",content:h},{property:"og:site_name",content:"My Website"},{property:"fb:app_id",content:"XXXXXXXXX"}];return i&&f.push({name:"robots",content:"noindex, nofollow"}),c&&f.push({name:"article:published_time",content:c}),u&&f.push({name:"article:modified_time",content:u}),l&&f.push({name:"article:section",content:l}),p&&f.push({name:"article:tag",content:p}),f}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.id,r=e.className,o=Object(a.a)(e,["children","id","className"]);return l.a.createElement("div",{id:n,className:r},l.a.createElement(h.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:"http://schema.org/".concat(o.schema||"WebPage")},title:o.title?o.title+" | My Website":"My Website",link:[{rel:"canonical",href:b+this.props.location.pathname}],meta:this.getMetaTags(o,this.props.location.pathname)}),t)}}]),t}(u.Component);t.a=Object(p.a)(g)},307:function(e,t,n){e.exports=n.p+"static/media/logo.f0988bd7.png"},308:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",function(){return a})},374:function(e,t,n){"use strict";var a=n(45),r=n(46),o=n(48),s=n(47),i=n(49),c=n(114),u=n(1),l=n.n(u),p=n(299),m=n(310),h=(n(389),function(e){function t(e){var n;Object(a.a)(this,t);var r=(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).props.onConfirm;return n.state={text:"",jsx:null,useConfirm:!0,onConfirm:r},n.openPopupWithText=n.openPopupWithText.bind(Object(c.a)(Object(c.a)(n))),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"openPopupWithText",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.setState({text:e,useConfirm:t}),n&&this.setState({onConfirm:n}),setTimeout(this.popupRef.openPopup,10)}},{key:"openPopupWithJSX",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.setState({jsx:e,useConfirm:t}),n&&this.setState({onConfirm:n}),setTimeout(this.popupRef.openPopup,10)}},{key:"render",value:function(){var e=this,t=this.state,n=t.text,a=t.jsx,r=t.useConfirm,o=t.onConfirm,s=this.props,i=s.showCancelButton,c=s.hideCloseButton;return l.a.createElement("div",{className:"popup-with-text"},l.a.createElement(m.a,{hideCloseButton:c,ref:function(t){e.popupRef=t}},l.a.createElement(u.Fragment,null,l.a.createElement("div",{className:"check-out-popup"},l.a.createElement("div",{className:"upper-container upper-margin-down"},a||l.a.createElement("p",null,l.a.createElement("span",{className:"focus-text"},n))),l.a.createElement("div",{className:"button-container"},i?l.a.createElement(p.a,{className:"checkout-button",variant:"medium-flat",width:166,height:72,onClick:function(){e.popupRef.closePopup()}},l.a.createElement("p",null,"Cancel")):null,l.a.createElement(p.a,{className:"checkout-button",variant:"medium-flat-green",width:166,height:72,onClick:function(){r&&o(),e.popupRef.closePopup()}},l.a.createElement("p",null,"Confirm")))))))}}]),t}(u.Component));h.defaultProps={onConfirm:function(){},showCancelButton:!1,hideCloseButton:!1},t.a=h},389:function(e,t,n){},398:function(e,t,n){"use strict";var a=n(45),r=n(46),o=n(48),s=n(47),i=n(49),c=n(114),u=n(12),l=n.n(u),p=n(1),m=n.n(p),h=n(374),d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).oldTime=new Date,n.timeout=null,n.invokeNewTimer=n.invokeNewTimer.bind(Object(c.a)(Object(c.a)(n))),n.setTimer=n.setTimer.bind(Object(c.a)(Object(c.a)(n))),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.interval=l.a.setInterval(function(){l.a.addEventListener&&(l.a.addEventListener("mousemove",e.invokeNewTimer),l.a.addEventListener("keypress",e.invokeNewTimer),clearInterval(e.interval))},100)}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout),l.a.removeEventListener("mousemove",this.invokeNewTimer),l.a.removeEventListener("keypress",this.invokeNewTimer)}},{key:"setTimer",value:function(){var e=this,t=this.props,n=t.popupTimer,a=t.refreshTimer;this.timeout=setTimeout(function(){var t=l.a.confirm("Your session will expire due inactivity. Please click \u201cOK\u201d within ".concat(a/1e3/60," mins to continue, or \u201cCancel\u201d, if you wish to leave the page.")),r=new Date-e.oldTime;t&&r<n+a?e.invokeNewTimer():l.a.location.assign("/")},n),this.oldTime=new Date}},{key:"invokeNewTimer",value:function(){this.timeout&&clearTimeout(this.timeout),this.setTimer()}},{key:"render",value:function(){var e=this;return m.a.createElement(p.Fragment,null,m.a.createElement(h.a,{hideCloseButton:!0,ref:function(t){return e.popup=t}}))}}]),t}(p.Component);d.defaultProps={popupTimer:6e5,refreshTimer:12e4},t.a=d},783:function(e,t,n){e.exports=n.p+"static/media/Flow.c0acf2e8.svg"}}]);
//# sourceMappingURL=business.17130f7e.chunk.js.map
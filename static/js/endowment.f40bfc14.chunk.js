(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1010:function(e,t,n){e.exports=n.p+"static/media/policypal-endowment-insurance-1.12ba6b83.svg"},1011:function(e,t,n){e.exports=n.p+"static/media/policypal-endowment-insurance-2.b260f8c0.svg"},1012:function(e,t,n){e.exports=n.p+"static/media/policypal-endowment-insurance-3.a09039d7.svg"},1013:function(e,t,n){},1146:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(14),o=n(13),i=n(11),s=n(15),c=n(4),l=n(5),u=n.n(l),m=n(1),d=n.n(m),p=n(185),b=n(22),f=n(59),h=n(476),g=n(68),v=n(23),O=n(70),y=n(50),j=n(523),w=n(507),F=n(1010),E=n.n(F),D=n(1011),S=n.n(D),I=n(1012),k=n.n(I),x=n(133),P=n(212),C=n(6),_=n(520),T=n.n(_),A=n(559),N=n.n(A),L=n(560),G=n.n(L),R=n(35),U=n(488),z=n(496),B=n(585),M=n(182),V=n(513),H=n(142),Q=n(140),J=n(139),K=n(18),W=n(16),Y=function(e){function t(e){var n;Object(a.a)(this,t);var i=(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).props.endowmentFields;return n.state={errorStringData:{},birthDate:null,data:Object(W.m)(i.form_fields)},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(Object(c.a)(n))),n.handleCloseEdit=n.handleCloseEdit.bind(Object(c.a)(Object(c.a)(n))),n.handleRevert=n.handleRevert.bind(Object(c.a)(Object(c.a)(n))),n.validateForm=n.validateForm.bind(Object(c.a)(Object(c.a)(n))),n}return Object(s.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.storeForm;return n&&n.birth_date!==t.birthDate?{birthDate:n.birth_date}:null}}]),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.storeForm,n=e.setCloseCallBack;this.originalValues=t,n&&n(this.handleRevert)}},{key:"getAge",value:function(e){var t="";return e&&-1!==e&&(t=Object(K.f)(e)),t}},{key:"validateForm",value:function(e){var t=this.state.data,n=Object(J.b)(e,["gender","smoker","birth_date","coverage_amount","premium_term"],{birth_date:{type:"DATE",start:Object(K.i)(t.birth_date.min_date),end:Object(K.i)(t.birth_date.max_date)},smoker:{type:"ARRAY",data:t.smoker.options},coverage_amount:{type:"ARRAY",data:t.coverage_amount.options},premium_term:{type:"ARRAY",data:t.premium_term.options}});return this.setState({errorStringData:n}),n}},{key:"handleSubmit",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.birthDate,r=this.props,o=r.closePopUp,i=r.setInsurFormState,s=r.setSubmit,c=r.storeForm,l=r.submitCallback,m=r.history,d=this.validateForm(n?e:c),p=u.a.isEmpty(d);if(!Object(J.a)(p,n,d,function(e){return t.setState({errorStringData:e})},function(){return t.handleSubmit(c,!1)})&&p){if(s(),this.originalValues=c,l)l();else{Object(y.b)("Endowment - Get Quote",{event_category:"Endowment",event_label:"Button - Endowment - Get Quote"});var b=Object(K.j)(a),f=this.getAge(b);Object(y.a)("EndGetQuoteA",{gender:e.gender,smoker:e.smoker,age:f,premium:e.coverage_amount,term:e.premium_term})}i(v.b.CHOOSEPLAN.index),m.push("/endowment".concat(v.b.CHOOSEPLAN.path)),o&&o()}}},{key:"handleRevert",value:function(){var e=this,t=this.props,n=t.change;(0,t.resetForm)(),Object.keys(this.originalValues).forEach(function(t){n(t,e.originalValues[t])})}},{key:"handleCloseEdit",value:function(){(0,this.props.closePopUp)(this.handleRevert)}},{key:"renderBirthDate",value:function(){var e=this,t=this.state,n=t.errorStringData,a=t.birthDate,r=t.data,o=this.props,i=o.form,s=o.change,c=o.storeForm,l=Object(K.j)(a),u=l?"active":"inactive",m=this.getAge(l);return d.a.createElement(C.f,{className:"birth-date-container",xs:12,sm:10},d.a.createElement("p",{className:"age"},d.a.createElement("span",{className:u},"Age"),d.a.createElement("span",{className:"age-value"},m)),d.a.createElement(z.a,{form:i,change:s,name:"birth_date",size:"medium",zIndex:97,desc:r.birth_date.display_name,startDate:Object(K.i)(r.birth_date.min_date),endDate:Object(K.i)(r.birth_date.max_date),currDate:Object(K.i)(r.birth_date.default_date),errorString:n.birth_date,validateForm:function(){return e.validateForm(c)}}))}},{key:"renderFields",value:function(){var e=this,t=this.state,n=t.errorStringData,a=t.data,r=this.props,o=r.form,i=r.change,s=r.storeForm;return d.a.createElement(C.z,{noGutters:!0},d.a.createElement(C.f,{className:"justify-content-center icon icon-car d-none d-sm-flex",sm:2},d.a.createElement("img",{src:T.a,alt:"Avatar.svg"})),d.a.createElement(C.f,{className:"input-padding-right",xs:12,sm:5},d.a.createElement(U.a,{form:o,change:i,name:"gender",type:"text-selection",noEmptyTextSelection:!0,options:u.a.map(a.gender.options,function(e){return{key:e,description:e}}),sizeInSM:6,desc:a.gender.display_name,zIndex:99,errorString:n.gender,validateForm:function(){return e.validateForm(s)}})),d.a.createElement(C.f,{className:"input-padding-left",xs:12,sm:5},d.a.createElement(U.a,{form:o,change:i,name:"smoker",type:"text-selection",noEmptyTextSelection:!0,options:u.a.map(a.smoker.options,function(e){return{key:e,description:e}}),sizeInSM:6,zIndex:98,desc:a.smoker.display_name,errorString:n.smoker,validateForm:function(){return e.validateForm(s)}})),d.a.createElement(C.f,{className:"justify-content-center icon d-none d-sm-flex",sm:2}),this.renderBirthDate(),d.a.createElement(C.f,{className:"justify-content-center icon icon-car d-none d-sm-flex",sm:2},d.a.createElement("img",{style:{marginTop:32},src:N.a,alt:"Dollar.svg"})),d.a.createElement(C.f,{xs:12,sm:10},d.a.createElement(B.a,{form:o,change:i,name:"coverage_amount",desc:a.coverage_amount.display_name,zIndex:96,hideWidth:576,inputList:a.coverage_amount.options,displayList:Object(W.p)(a.coverage_amount.options),suffix:"Annual Premium",errorString:n.coverage_amount,validateForm:function(){return e.validateForm(s)}})),d.a.createElement(C.f,{className:"justify-content-center icon icon-car d-none d-sm-flex",sm:2},d.a.createElement("img",{src:G.a,alt:"Umbrella.svg"})),d.a.createElement(C.f,{className:"input-padding-right",xs:12,sm:5},d.a.createElement(M.a,{form:o,change:i,name:"premium_term",placeholderString:"Payment Term",dropList:a.premium_term.options,size:"medium",zIndex:95,desc:a.premium_term.display_name,errorString:n.premium_term,validateForm:function(){return e.validateForm(s)}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.handleSubmit,a=t.isPopUp;t.form;return d.a.createElement("div",{className:"landing-form-container"},a?d.a.createElement("p",{className:"edit-header"},"Edit Endowment Insurance Details"):null,d.a.createElement("form",{onSubmit:n(this.handleSubmit)},d.a.createElement(C.z,{className:"input-offset",noGutters:!0},this.renderFields()),d.a.createElement(C.z,{className:"align-items-center button-container",noGutters:!0},a?d.a.createElement(C.f,{className:"justify-content-center button",xs:12},d.a.createElement(C.z,{noGutters:!0},d.a.createElement(C.f,{className:"button-container-inner",xs:12,sm:6},d.a.createElement(R.a,{className:"button-left",variant:"medium-flat",width:165,height:72,onClick:function(){return e.handleCloseEdit()}},d.a.createElement("p",null,"Cancel"))),d.a.createElement(C.f,{className:"button-container-inner",xs:12,sm:6},d.a.createElement(R.a,{type:"submit",variant:"medium-flat-green",width:165,height:72},d.a.createElement("p",null,"Save"))))):d.a.createElement(C.f,{className:"justify-content-center button",xs:12},d.a.createElement(R.a,{type:"submit",variant:"medium-flat-green",width:165,height:72},d.a.createElement("p",null,"Get Quote"))))),d.a.createElement(V.a,{ref:function(t){return e.resPopup=t}}))}}]),t}(m.Component);Y.defaultProps={isPopUp:!1,setCloseCallBack:null,storeForm:null,closePopUp:null,submitCallback:null};var $=Object(h.a)(Object(P.a)({form:"endowment",destroyOnUnmount:!1})(Object(b.b)(function(e){return{storeForm:Object(x.a)("endowment")(e),isRevert:e.editForm.isRevert}},function(e){return{resetForm:function(){e(Object(f.b)("endowment"))},setInsurFormState:function(t){e(Object(v.K)(t))},setSubmit:function(){e(Object(H.c)())},setRestrictionPopup:function(t){e(Object(Q.d)(t))}}})(Y))),q=n(524),X=(n(1013),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.endowmentFields,n=e.endowmentPromoGiveAway;return d.a.createElement("div",{className:"endowment-container"},d.a.createElement(q.a,{img1:E.a,img2:S.a,img3:k.a,imgAlt:"PolicyPal Endowment Insurance",promo:n,desc:d.a.createElement(m.Fragment,null,d.a.createElement("p",null,"Get your Endowment Quotation"),d.a.createElement("p",null,"in minutes!"))},d.a.createElement($,{endowmentFields:t})))}}]),t}(m.Component));X.defaultProps={endowmentPromoGiveAway:null};var Z=X,ee=n(96),te=function(e){function t(e){var n;Object(a.a)(this,t);var i=(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).props,s=i.loading,c=i.endowmentFields,l=i.history;return(0,i.clearData)(),c||(s(function(){return l.push("/")}),n.props.getEndowmentFields()),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setFormState,n=e.history;t(v.b.MAIN.index),window.scrollTo(0,0),Object(y.c)({page_title:"Endowment",page_path:"/endowment".concat(n.location.search)}),Object(y.a)("EndFormS")}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.endowmentFields,a=t.loadingEnd;!e.endowmentFields&&n&&a()}},{key:"render",value:function(){var e=this.props,t=e.endowmentFields,n=e.endowmentPromoGiveAway;return t?d.a.createElement(Z,{endowmentFields:t,endowmentPromoGiveAway:n}):null}}]),t}(m.Component);te.defaultProps={endowmentFields:null,endowmentPromoGiveAway:null};var ne=Object(h.a)(Object(b.b)(function(e){return{endowmentFields:e.endowment.endowmentFields,endowmentPromoGiveAway:e.insurance.promoGiveaways.endowment}},function(e){return{getEndowmentFields:function(){e(Object(O.h)())},loading:function(t,n,a){e(Object(ee.d)(t,n,a))},loadingEnd:function(){e(Object(ee.c)())},clearData:function(){e(Object(O.g)())},setFormState:function(t){e(Object(v.K)(t))}}})(te)),ae=n(521),re=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"getAmpTags",value:function(e){try{return{partner:e.info.insurer_slug}}catch(t){console.log("Endowment choose plan Buy now Amp tag failed: ".concat(t.message))}return{}}},{key:"render",value:function(){var e=this,t=this.props.endowmentFields;return d.a.createElement(ae.a,Object.assign({},this.props,{category:"endowment",form:"endowment",editForm:{valuesToListen:[{value:"gender",desc:"Gender"},{value:"smoker",desc:"S.Status"},{value:"birth_date",desc:"Age"},{value:"coverage_amount",desc:"Sum",extra:"cost_simplify"},{value:"premium_term",desc:"For"}],editDetail:d.a.createElement($,{endowmentFields:t,isPopUp:!0})},buttonDesc:"Select",forceFixedOnDesktop:!0,trackingTags:{default:function(t){Object(y.a)("EndSelectA",e.getAmpTags(t,"default"))}}}))}}]),t}(m.Component);re.defaultProps={};var oe=re,ie=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.setFormState)(v.b.CHOOSEPLAN.index),Object(y.c)({page_title:"Endowment - Choose Plan",page_path:"/endowment/chooseplan"}),Object(y.a)("EndResultsS")}},{key:"render",value:function(){var e=this.props,t=e.endowmentForm,n=e.getPlans,a=e.getInsurersList,r=e.clearData,o=e.setFormState,i=e.plansData,s=e.validInsurersList,c=e.endowmentFields,l=e.history;return d.a.createElement(oe,{mainForm:t,endowmentFields:c,parseForm:O.l,getPlans:n,getInsurersList:a,clearData:r,setSelectedPlanData:this.props.setSelectedPlanData,setFormState:function(){o(v.b.DETAILFORM.index),l.push("/endowment".concat(v.b.DETAILFORM.path))},loadingFailBackState:function(){l.goBack()},plansData:i,validInsurersList:s})}}]),t}(m.Component);ie.defaultProps={plansData:null,validInsurersList:null};var se=Object(h.a)(Object(b.b)(function(e){return{endowmentForm:Object(x.a)("endowment")(e),endowmentFields:e.endowment.endowmentFields,plansData:e.endowment.plansData,validInsurersList:e.endowment.validInsurersList}},function(e){return{setFormState:function(t){e(Object(v.K)(t))},getPlans:function(t){e(Object(O.i)(t))},getInsurersList:function(t){e(Object(O.k)(t))},clearData:function(){e(Object(O.g)())},setSelectedPlanData:function(t){e(Object(O.m)(t))}}})(ie)),ce=n(2),le=n(76),ue=n(528),me=n(56),de=n(486),pe=n(511),be=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={sessionId:null,errorStringData:{},errorArray:[]},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(Object(c.a)(n))),n.validateForm=n.validateForm.bind(Object(c.a)(Object(c.a)(n))),n}return Object(s.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.sessionId;return n!==t.sessionId?{sessionId:n}:null}}]),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state.sessionId,n=this.props.loadingEnd;t&&(n(),setTimeout(function(){e.checkoutComplete.openCheckoutComplete(),Object(y.a)("EndConfirmationS")},300))}},{key:"validateForm",value:function(e){var t=Object(J.b)(e,["email","name","birth_date","mobile_number"]);this.setState({errorStringData:t});var n=[];return u.a.isEmpty(t)||(n=[d.a.createElement("p",{className:"error-string",key:"error-1"},"Fields are not properly filled, please check again.")]),this.setState({errorArray:n}),t}},{key:"handleSubmit",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.props,r=a.checkOutOthers,o=a.loading,i=a.storeForm,s=this.validateForm(n?e:i),c=u.a.isEmpty(s);Object(J.a)(c,n,s,function(e){return t.setState({errorStringData:e,errorArray:null})},function(){return t.handleSubmit(i,!1)})||(c&&(Object(y.a)("EndConfirm1A"),Object(y.a)("EndNoticeS"),this.popup.openPopupWithJSX(Object(v.C)(),!0,function(){setTimeout(function(){o(),r(e),Object(y.b)("Endowment - DetailForm - Checkout",{event_category:"Endowment",event_label:"Endowment - DetailForm - Checkout"}),Object(y.a)("EndConfirm2A")},350)})),window.scrollTo(0,document.body.scrollHeight))}},{key:"render",value:function(){var e=this,t=this.state,n=t.errorStringData,a=t.errorArray,r=this.props,o=r.form,i=r.change,s=r.planDetails,c=r.isLoggedIn,l=r.piggyCallback,u=r.changePlan,p=r.storeForm;return d.a.createElement(m.Fragment,null,d.a.createElement(ue.a,{category:"endowment",changePlan:u,handleSubmit:this.props.handleSubmit,onSubmit:this.handleSubmit,change:i,form:o,planDetails:s,isLoggedIn:c,piggyCallback:l,errorArray:a,checkoutButtonDesc:"Confirm"},d.a.createElement(C.z,{className:"main-form",noGutters:!0},d.a.createElement(C.f,{xs:12},d.a.createElement(me.a,{form:o,change:i,name:"email",placeholderString:"",size:"medium",zIndex:99,desc:"Email Address",errorString:n.email,validateForm:function(){return e.validateForm(p)}})),d.a.createElement(C.f,{className:"right-padding",xs:12,sm:6},d.a.createElement(me.a,{form:o,change:i,name:"name",placeholderString:"",size:"medium",zIndex:98,desc:"Full Name",errorString:n.name,validateForm:function(){return e.validateForm(p)}})),d.a.createElement(C.f,{className:"left-padding",xs:12,sm:6},d.a.createElement(z.a,{form:o,change:i,name:"birth_date",size:"medium",zIndex:97,desc:"Date of Birth",errorString:n.birth_date,validateForm:function(){return e.validateForm(p)},endDate:new Date})),d.a.createElement(C.f,{className:"right-padding",xs:12,sm:6},d.a.createElement(me.a,{form:o,change:i,name:"mobile_number",placeholderString:"",size:"medium",zIndex:96,desc:"Mobile Number",errorString:n.mobile_number,validateForm:function(){return e.validateForm(p)}})))),d.a.createElement(pe.a,{ref:function(t){return e.popup=t},showCancelButton:!0}),d.a.createElement(de.a,{isQuoteOnly:!0,isSellLeads:!0,wrappedComponentRef:function(t){return e.checkoutComplete=t}}))}}]),t}(m.Component);be.defaultProps={storeForm:null};var fe=Object(P.a)({form:"endowment-detail",destroyOnUnmount:!1})(Object(b.b)(function(e){return{storeForm:Object(x.a)("endowment-detail")(e),constants:e.insurance.constants}},function(e){return{loading:function(t,n,a){e(Object(ee.d)(t,n,a))},loadingEnd:function(){e(Object(ee.c)())}}})(be)),he=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.setFormState)(v.b.DETAILFORM.index),Object(y.c)({page_title:"Endowment - Detail Form",page_path:"/endowment/detailform"}),Object(y.a)("EndDetailsS")}},{key:"render",value:function(){var e=this.props,t=e.plansData,n=e.isLoggedIn,a=e.profileValues,r=e.piggyCallback,o=e.endowmentFields,i=e.sessionId,s=e.checkOutOthers,c=e.history;if(!t)return null;var l=t,u={logo:le.a.others,logoDesc:"",planName:"",planTotal:null};try{var m=l.policyInfo[l.planType].net_price;m=m?"$".concat(m.toFixed(2)):"",u={logo:le.a[l.info.insurer_slug],logoDesc:"".concat(l.info.insurer_name,".svg"),planName:l.info.product_name,planTotal:m}}catch(p){console.log("Get plan details failed")}return d.a.createElement(fe,{endowmentFields:o,selectedData:l,planDetails:u,isLoggedIn:n,sessionId:i,piggyCallback:r,checkOutOthers:s,changePlan:function(){c.goBack(),Object(y.b)("Endowment - DetailForm - ChangePlan",{event_category:"Endowment",event_label:"Endowment - DetailForm - ChangePlan"})},profileValues:a})}}]),t}(m.Component);he.defaultProps={sessionId:null,plansData:null};var ge=Object(h.a)(Object(b.b)(function(e){return{endowmentForm:Object(x.a)("endowment")(e),endowmentFields:e.endowment.endowmentFields,profileValues:e.userDetails,plansData:e.endowment.selectedPlanData,sessionId:e.insurance.sessionId}},function(e){return{getAnonymousSession:function(t){e(Object(v.v)(t,!0))},setFormState:function(t){e(Object(v.K)(t))}}},function(e,t,n){return Object(ce.a)({},n,e,t,{checkOutOthers:function(n){t.getAnonymousSession(Object(O.j)(e.endowmentForm,n,e.plansData),!0)}})})(he)),ve=function(e){function t(e){var n;Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={formIndex:0};var i=n.props,s=i.resetStoreForm,l=i.endowmentPromoGiveAway,u=i.clearData,m=i.history;return m.replace("/endowment".concat(m.location.search)),u(),n.props.resetCompare(),n.props.resetInsuranceForm(),s("endowment"),s("endowment-detail"),void 0===l&&n.props.getPromoGiveaways(),n.setInitialFormState=n.setInitialFormState.bind(Object(c.a)(Object(c.a)(n))),n.renderStepProgress=n.renderStepProgress.bind(Object(c.a)(Object(c.a)(n))),n.renderLifeForms=n.renderLifeForms.bind(Object(c.a)(Object(c.a)(n))),n.changeUserDetails=n.changeUserDetails.bind(Object(c.a)(Object(c.a)(n))),n}return Object(s.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.formIndex,a=t.isMounted,r=e.formState,o=e.match,i=e.history;if(a){var s=Object(W.n)("endowment",r,n,o,i);if(s&&null!==s.formIndex)return{formIndex:s.formIndex}}return null}}]),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setInitialFormState(),this.setState({isMounted:!0})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.clearData,n=e.resetStoreForm;t(),this.props.resetCompare(),this.props.resetInsuranceForm(),n("endowment"),n("endowment-detail")}},{key:"setInitialFormState",value:function(){var e=this.props.changeForm;e("endowment","birth_date","01 Jan 1990"),e("endowment","premium_term","16-20 years"),this.changeUserDetails()}},{key:"changeUserDetails",value:function(){var e=this.props,t=e.userDetails,n=e.changeForm;if(t){var a=t&&t.surname?t.surname:"",r=t&&t.firstName?" ".concat(t.firstName):"";n("endowment-detail","email",t.email),n("endowment-detail","name","".concat(a).concat(r)),n("endowment-detail","birth_date",t.dateOfBirth),n("endowment-detail","mobile_number",t.contact)}}},{key:"renderStepProgress",value:function(){var e=this.state.formIndex;return d.a.createElement(j.a,{maxWidth:"556px",formState:e,inputList:["Choose Plan","Details"],form:"endowment",stateList:[v.b.CHOOSEPLAN,v.b.DETAILFORM],stateDescriptions:[{main:""},{main:"Fill in your details - Get $5 Credits"}],charged:!1})}},{key:"renderLifeForms",value:function(){var e=this.state.formIndex,t=this.props.userDetails,n=!u.a.isEmpty(t);switch(e){case v.b.CHOOSEPLAN.index:return d.a.createElement(se,{isLoggedIn:n});case v.b.DETAILFORM.index:return d.a.createElement(ge,{isLoggedIn:n,piggyCallback:this.changeUserDetails});default:return d.a.createElement(ne,{isLoggedIn:n})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.endowmentPromoGiveAway;if(!t.constants||void 0===n)return null;var a=y.d?"PolicyPal, insurance, insurance broker, endowment, endowment plan, savings plan singapore, best endowment plan singapore, 5 years saving plan singapore, endowment fund, endowment insurance, what is endowment plan, best insurance savings plan singapore, endowment policy, ntuc endowment, short term endowment plan singapore, short term endowment plan, best endowment plan, ntuc income endowment, endowment plan comparison, singapore endowment insurance, savings insurance, savings insurance singapore, compare insurance":"";return d.a.createElement(m.Fragment,null,d.a.createElement(p.Helmet,null,d.a.createElement("meta",{name:"keywords",content:a}),d.a.createElement("title",null,"PolicyPal 2.0 - Endowment Insurance"),d.a.createElement("meta",{name:"title",content:"PolicyPal 2.0 - Endowment Insurance"}),d.a.createElement("meta",{name:"description",content:"Browse products for endowment insurance."})),this.renderStepProgress(),this.renderLifeForms(),d.a.createElement(w.a,{ref:function(t){e.refresher||t.invokeNewTimer(),e.refresher=t}}))}}]),t}(m.Component);ve.defaultProps={userDetails:null,endowmentPromoGiveAway:void 0,constants:null};t.default=Object(h.a)(Object(b.b)(function(e){return{endowmentPromoGiveAway:e.insurance.promoGiveaways.endowment,formState:e.insurance.formState,constants:e.insurance.constants,userDetails:e.userDetails.data}},function(e){return{changeForm:function(t,n,a){return e(Object(f.a)(t,n,a))},resetInsuranceForm:function(){return e(Object(v.H)())},resetStoreForm:function(t){return e(Object(f.b)(t))},getPromoGiveaways:function(){e(Object(v.A)("endowment"))},resetCompare:function(){e(Object(g.g)())},clearData:function(){e(Object(O.g)())}}})(ve))},520:function(e,t,n){e.exports=n.p+"static/media/Avatar.95378d46.svg"},521:function(e,t,n){"use strict";var a=n(12),r=n(14),o=n(13),i=n(11),s=n(15),c=n(4),l=n(5),u=n.n(l),m=n(1),d=n.n(m),p=n(22),b=n(23),f=n(68),h=n(96),g=n(140),v=n(2),O=n(6),y=n(183),j=n(527),w=n(512),F=n(504),E=["basic","essential","elite","default"],D=function(e){function t(e){var n;Object(a.a)(this,t);var i=(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).props.data;return n.state={tabIndex:0,currentTab:null,tabs:null,policyTypes:i.policyTypes},n.handleTabClick=n.handleTabClick.bind(Object(c.a)(Object(c.a)(n))),n.renderTabs=n.renderTabs.bind(Object(c.a)(Object(c.a)(n))),n}return Object(s.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.data.policyTypes!==t.policyTypes?{policyTypes:e.data.policyTypes}:null}}]),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.renderTabs(null,!0);this.props.setPlanType(u.a.lowerCase(e.currentTab))}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.state,a=n.policyTypes,r=n.tabs,o=n.currentTab,i=this.props.data;return u.a.isEqual(a,t.policyTypes)||this.renderTabs(t.policyTypes),r!==t.tabs||o!==t.currentTab||i!==e.data}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.tabs,r=n.tabIndex,o=this.props,i=o.selectedIndex,s=o.initialIndex;if(a!==t.tabs&&this.categoryTab&&this.categoryTab.wrappedInstance){var c=i&&i!==r;if(c||null===i&&s){var l=c?i:s,u=l<a.length?l:0;return this.categoryTab.wrappedInstance.goToIndex(u,!0),this.setState({tabIndex:u}),void this.props.setSelectedIndex(u)}this.categoryTab.wrappedInstance.goToIndex(r)}}},{key:"handleTabClick",value:function(e,t){this.setState({currentTab:e}),this.props.setPlanType(e),this.props.setSelectedIndex(t)}},{key:"renderTabs",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.state,r=a.policyTypes,o=a.currentTab,i=this.props.planImages,s=t||r,c=0,l=u.a.reduce(E,function(t,n){if(-1!==u.a.findIndex(s,function(e){return e===n})){var a=c,r=i?i[n]:null;t.push({desc:u.a.startCase(n),img:r,onClick:function(){e.handleTabClick(n,a)}}),c+=1}return t},[]),m={currentTab:u.a.lowerCase(l[0].desc)};if(!n){var d=u.a.findIndex(l,function(e){return u.a.lowerCase(e.desc)===o}),p=-1!==d?d:0,b=u.a.lowerCase(l[p].desc);m={tabIndex:p,currentTab:b},this.props.setPlanType(b),this.props.setSelectedIndex(p)}var f=Object(v.a)({},m,{tabs:l});return this.setState(f),f}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentTab,a=t.tabs,r=this.props,o=r.data,i=r.scrollPopUpCallback,s=r.submitCallback,c=r.editForm,l=r.form,u=r.buttonDesc,p=r.forceFixedOnDesktop,b=r.category;if(!o||!a||!n)return null;var f="default"===n?"inner-form-no-tabs":"";return d.a.createElement(m.Fragment,null,d.a.createElement(O.z,{className:"inner-form-container ".concat(f," inner-form-extra-padding"),noGutters:!0},d.a.createElement(y.a,{tabs:a,isDataFadeOnly:!0,isDisableDropdown:!0,big:!0,name:"".concat(l,"-tab"),ref:function(t){return e.categoryTab=t}},[d.a.createElement(j.a,{category:b,key:"overview",className:"overview-container-padding",notAccordion:!0,data:o,currentTab:n,scrollPopUpCallback:i,productChangable:!0,editForm:d.a.createElement(w.a,{submitCallback:s,form:l,headerValue:c.headerValue,valuesToListen:c.valuesToListen,conditions:c.conditions},c.editDetail),buttonDesc:u,forceFixedOnDesktop:p})]),d.a.createElement(F.a,null)))}}]),t}(m.Component);D.defaultProps={initialIndex:0,selectedIndex:null,data:null,planImages:null,buttonDesc:null,forceFixedOnDesktop:!1,category:null};var S=Object(p.b)(function(e){return{selectedIndex:e.compare.selectedIndex}},function(e){return{setSelectedIndex:function(t){e(Object(f.i)(t))},setPlanType:function(t){e(Object(f.h)(t))}}})(D),I=function(e){function t(e){var n;Object(a.a)(this,t);var i=(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).props,s=i.mainForm,l=i.parseForm,u=i.getPlans,m=i.getInsurersList,d=i.loading,p=i.defaultInsurers,f=i.plansData,h=i.validInsurersList,g=i.selectedInsurers,v=i.setSelectedPlanData,O=i.loadingEnd,y=i.setFormState,j=i.loadingFailBackState,w=i.clearData,F=i.trackingTags;try{if(f&&h)n.state={currentInsurers:g,parsedData:Object(b.E)(f,h,g,s.trip_type,function(){return y()},v,O,n.props.setRestrictionPopup,null,F)};else{var E=l(s,p);d(function(){w(),j()},"No available plans found.",3e4,""),u(E),m(E),n.props.setSelectedInsurers(p),n.state={currentInsurers:p,parsedData:null}}}catch(D){}return n.getNewData=n.getNewData.bind(Object(c.a)(Object(c.a)(n))),n.onInsurerClick=n.onInsurerClick.bind(Object(c.a)(Object(c.a)(n))),n}return Object(s.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){try{var n=t.currentInsurers,a=e.plansData,r=e.validInsurersList,o=e.setFormState,i=e.loadingEnd,s=e.mainForm,c=e.setSelectedPlanData,l=e.trackingTags;if(a&&"INVALID"===a[0])return null;if(r&&a){var m=n||{};return!n&&a&&(m=(m=u.a.map(a,function(e){return e.info.insurer_slug})).slice(0,3),e.setSelectedInsurers(m)),{parsedData:Object(b.E)(a,r,m,s.trip_type,function(){o()},c,i,e.setRestrictionPopup,null,l),currentInsurers:m}}}catch(d){return null}return null}}]),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props,n=t.plansData,a=t.loadingEnd,r=t.loading,o=t.clearData,i=t.loadingFailBackState;n&&"INVALID"===n[0]&&(a(),this.isLoading||(this.isLoading=!0,setTimeout(function(){return r(function(){o(),i(),e.isLoading=!1},"No available plans found.",50,"")},500)))}},{key:"onInsurerClick",value:function(e,t){var n=this.state.parsedData,a=u.a.reduce(n.selectedInsurers,function(e,t){return t&&e.push(t.insurerSlug),e},[]);a[t]=e.insurer_slug,this.setState({currentInsurers:a}),this.props.setSelectedInsurers(a),this.getNewData(a)}},{key:"getNewData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.state.currentInsurers,n=this.props,a=n.loading,r=n.getPlans,o=n.getInsurersList,i=n.clearData,s=n.mainForm,c=n.parseForm,l=n.loadingFailBackState,u=c(s,e||t);i(),a(function(){i(),l()},"No available plans found.",3e4,""),r(u),o(u)}},{key:"render",value:function(){try{var e=this.state.parsedData,t=this.props,n=t.editForm,a=t.form,r=t.planImages,o=t.initialIndex,i=t.buttonDesc,s=t.forceFixedOnDesktop,c=t.category;return e?d.a.createElement(S,{category:c,initialIndex:o,planImages:r,data:e,form:a,editForm:n,scrollPopUpCallback:this.onInsurerClick,submitCallback:this.getNewData,buttonDesc:i,forceFixedOnDesktop:s}):null}catch(l){return null}}}]),t}(m.Component);I.defaultProps={initialIndex:0,plansData:null,validInsurersList:null,selectedInsurers:null,trackingTags:null,planImages:null,defaultInsurers:null,buttonDesc:null,forceFixedOnDesktop:!1,category:null};t.a=Object(p.b)(function(e){return{selectedInsurers:e.compare.selectedInsurers}},function(e){return{loading:function(t,n,a,r){e(Object(h.d)(t,n,a,r))},loadingEnd:function(){e(Object(h.c)())},setRestrictionPopup:function(t){e(Object(g.d)(t))},setSelectedInsurers:function(t){e(Object(f.j)(t))}}})(I)},559:function(e,t,n){e.exports=n.p+"static/media/Dollar.962423c9.svg"},560:function(e,t,n){e.exports=n.p+"static/media/Umbrella.d081f752.svg"}}]);
//# sourceMappingURL=endowment.f40bfc14.chunk.js.map
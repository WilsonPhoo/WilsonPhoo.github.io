(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1068:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a(29),i=a(31),l=a(30),o=a(32),s=a(1),c=a.n(s),m=a(52),d=a(184),p=a(196),u=a(3),h=a.n(u),f=a(5),g=a(26),b=a(7),v=a.n(b),_=a(193),F=a(221),E=a(84),S=a(377),y=a(261),x=a(218),D=a(194),P=a(203),O=a(70),j=a(8),N=a(67),k=(a(849),function(e){function t(e){var a;Object(r.a)(this,t);var n=(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).props.petFields,o=v.a.find(n.form_fields,function(e){return"pet_birth_date"===e.name});return a.state={errorStringData:{},petMinDate:Object(j.i)(o.min_date),petMaxDate:Object(j.i)(o.max_date),errorArray:[]},a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a.validateForm=a.validateForm.bind(Object(g.a)(Object(g.a)(a))),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"validateForm",value:function(){var e=Object(f.a)(h.a.mark(function e(t){var a,r,n,i,l,o,s=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>1&&void 0!==s[1]&&s[1],a=this.state,r=a.petMinDate,n=a.petMaxDate,i=["email","family_name","given_name","id_type","nric","mobile_number","address","unit_no","postal","pet_name","pet_microchip_no","pet_birth_date","pet_illness"],"Yes"===t.pet_illness&&i.push("pet_medical_record"),l=Object(O.b)(t,i,{pet_birth_date:{type:"DATE",start:r,end:n},pet_illness:{type:"ARRAY",data:["Yes","No"]}}),this.setState({errorStringData:l}),o=[],v.a.isEmpty(l)||(o=[c.a.createElement("p",{className:"error-string",key:"error-1"},"Fields are not properly filled, please check again.")]),this.setState({errorArray:o}),e.abrupt("return",l);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(f.a)(h.a.mark(function e(t){var a,r,n,i,l,o,s=this,c=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(c.length>1&&void 0!==c[1])||c[1],r=this.props,n=r.submitCallback,i=r.storeForm,e.next=4,this.validateForm(a?t:i,!0);case 4:if(l=e.sent,o=v.a.isEmpty(l),!Object(O.a)(o,a,l,function(e){return s.setState({errorStringData:e,errorArray:null})},function(){return s.handleSubmit(i,!1)})){e.next=8;break}return e.abrupt("return");case 8:o&&(Object(N.b)("PPS2 - ButtonClick - Pet - DetailForm_Checkout",{Product:"Pet",Click_Text:"Checkout"}),Object(N.c)("Pet - DetailForm - Checkout",{event_category:"Pet",event_label:"Pet - DetailForm - Checkout"}),Object(N.a)("PetGoCheckoutA",{idtype:t.id_type,hospital:"Yes"===t.pet_illness}),n()),window.scrollTo(0,document.body.scrollHeight);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderIllnessForm",value:function(){var e=this,t=this.state.errorStringData,a=this.props,r=a.form,n=a.change,i=a.storeForm;return i&&"Yes"===i.pet_illness?c.a.createElement(E.f,{xs:12,className:"illness-input"},c.a.createElement(y.a,{form:r,change:n,name:"pet_medical_record",placeholderString:"",size:"medium",zIndex:87,desc:"If yes, please complete below with Date of Illness, nature of Illness, treatment, and name of vet",errorString:t.pet_medical_record,validateForm:function(){return e.validateForm(i)}})):null}},{key:"render",value:function(){var e=this,t=this.state,a=t.errorStringData,r=t.petMinDate,n=t.petMaxDate,i=t.errorArray,l=this.props,o=l.form,s=l.change,m=l.planDetails,d=l.isLoggedIn,p=l.piggyCallback,u=l.changePlan,h=l.constants,f=l.storeForm;return c.a.createElement(S.a,{category:"pet",changePlan:u,handleSubmit:this.props.handleSubmit,onSubmit:this.handleSubmit,change:s,form:o,planDetails:m,isLoggedIn:d,piggyCallback:p,errorArray:i},c.a.createElement(E.y,{className:"main-form",noGutters:!0},c.a.createElement(E.f,{xs:12},c.a.createElement(y.a,{form:o,change:s,name:"email",placeholderString:"",size:"medium",zIndex:99,desc:"Email Address",errorString:a.email,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"right-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"family_name",placeholderString:"",size:"medium",zIndex:98,desc:"Surname",errorString:a.family_name,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"left-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"given_name",placeholderString:"",size:"medium",zIndex:97,desc:"Name (as shown in ID document)",errorString:a.given_name,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"right-padding",xs:12,sm:6},c.a.createElement(D.a,{form:o,change:s,name:"id_type",placeholderString:"Select ID Type",dropList:h.idTypes,size:"medium",zIndex:96,desc:"Type of ID",errorString:a.id_type,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"left-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"nric",placeholderString:"",size:"medium",zIndex:95,desc:"ID Number",errorString:a.nric,validateForm:function(){return e.validateForm(f)},toUpper:!0})),c.a.createElement(E.f,{className:"right-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"mobile_number",placeholderString:"",size:"medium",zIndex:94,desc:"Mobile Number",errorString:a.mobile_number,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{xs:12},c.a.createElement("hr",{className:"hr-margin"})),c.a.createElement(E.f,{xs:12,className:"header"},c.a.createElement("p",null,"Address")),c.a.createElement(E.f,{xs:12},c.a.createElement(y.a,{form:o,change:s,name:"address",placeholderString:"",size:"medium",zIndex:93,desc:"Address",errorString:a.address,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"right-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"unit_no",placeholderString:"enter NA if no unit",size:"medium",zIndex:92,desc:"Unit No",errorString:a.unit_no,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"left-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"postal",placeholderString:"",size:"medium",zIndex:91,desc:"Postcode",errorString:a.postal,validateForm:function(){return e.validateForm(f)},isPostCode:!0,addressFields:{address:"address",unitNo:"unit_no"}})),c.a.createElement(E.f,{xs:12},c.a.createElement("hr",{className:"hr-margin"})),c.a.createElement(E.f,{xs:12,className:"header"},c.a.createElement("p",null,"Pet's details")),c.a.createElement(E.f,{className:"right-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"pet_name",placeholderString:"",size:"medium",zIndex:90,desc:"Name of Pet",errorString:a.pet_name,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"left-padding",xs:12,sm:6},c.a.createElement(y.a,{form:o,change:s,name:"pet_microchip_no",placeholderString:"",size:"medium",zIndex:89,desc:"Microchip Number",errorString:a.pet_microchip_no,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{className:"right-padding",xs:12,sm:6},c.a.createElement(x.a,{form:o,change:s,name:"pet_birth_date",size:"medium",zIndex:88,desc:"Pet's Birthday",startDate:r,endDate:n,currDate:r,errorString:a.pet_birth_date,validateForm:function(){return e.validateForm(f)}})),c.a.createElement(E.f,{xs:12},c.a.createElement("div",{className:"input-wrapper-main pet-illness-desc"},c.a.createElement("p",{className:"input-wrapper-desc"},"My pet has been to the vet or hospital for other than routine checkups or preventive medicine"))),c.a.createElement(E.f,{xs:12,sm:4},c.a.createElement(P.a,{form:o,change:s,name:"pet_illness",type:"radio",options:[{key:"Yes",description:"Yes"},{key:"No",description:"No"}],sizeInSM:6,desc:"",errorString:a.pet_illness,validateForm:function(){return e.validateForm(f)},noEmptyTextSelection:!0})),this.renderIllnessForm(),c.a.createElement(E.f,{xs:12},c.a.createElement("hr",{className:"hr-margin"}))))}}]),t}(s.Component));k.defaultProps={storeForm:null};var I=Object(F.a)({form:"pet-detail",destroyOnUnmount:!1})(Object(m.b)(function(e){return{storeForm:Object(_.a)("pet-detail")(e),constants:e.insurance.constants}})(k)),z=a(12),C=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.setFormState)(z.b.DETAILFORM.index),Object(N.b)("PPS2 - Pageview - Pet - DetailForm",{Product:"Pet"}),Object(N.d)({page_title:"Pet - Detail Form",page_path:"/pet/detailform"}),Object(N.a)("PetDetailsS")}},{key:"render",value:function(){var e=this.props,t=e.plansData,a=e.isLoggedIn,r=e.setFormState,n=e.profileValues,i=e.piggyCallback,l=e.petFields,o=e.history;if(!t)return null;var s=t,m={logo:p.a.others,logoDesc:"",planName:"",planTotal:null};try{m={logo:p.a[s.info.insurer_slug],logoDesc:"".concat(s.info.insurer_name,".svg"),planName:s.info.product_name,planTotal:"$".concat(s.policyInfo[s.planType].net_price.toFixed(2))}}catch(d){console.log("Get plan details failed")}return c.a.createElement(I,{petFields:l,selectedData:s,planDetails:m,isLoggedIn:a,piggyCallback:i,changePlan:function(){o.goBack(),Object(N.b)("PPS2 - ButtonClick - Pet - DetailForm_ChangePlan",{Product:"Pet",Click_Text:"ChangePlan"}),Object(N.c)("Pet - DetailForm - ChangePlan",{event_category:"Pet",event_label:"Pet - DetailForm - ChangePlan"})},profileValues:n,submitCallback:function(){r(z.b.CHECKOUT.index),o.push("/pet".concat(z.b.CHECKOUT.path))}})}}]),t}(s.Component);C.defaultProps={};t.default=Object(d.a)(Object(m.b)(function(e){return{petFields:e.pet.petFields,profileValues:e.userDetails,plansData:e.pet.selectedPlanData}},function(e){return{setFormState:function(t){e(Object(z.H)(t))}}})(C))},849:function(e,t,a){}}]);
//# sourceMappingURL=PetDetailContainer.5444cf6c.chunk.js.map
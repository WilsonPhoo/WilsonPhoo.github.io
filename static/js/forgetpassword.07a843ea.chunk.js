(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1096:function(e,t,n){},1162:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=n(8),o=n(12),i=n(11),c=n(14),u=n(13),l=n(15),p=n(3),m=n(5),h=n.n(m),d=n(1),f=n.n(d),b=n(477),w=n(22),v=n(213),g=n(6),j=n(57),C=n(35),E=(n(1096),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={errorString:null},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this.props.submitCallback;e.password1&&e.password2?e.password1===e.password2?e.password1.length<8?this.setState({errorString:"Password must be at least 8 characters."}):(this.setState({errorString:null}),t(e.password1)):this.setState({errorString:"Password are not the same."}):this.setState({errorString:"Please fill in both password fields."})}},{key:"render",value:function(){var e=this.state.errorString,t=this.props,n=t.handleSubmit,a=t.form,r=t.change;return f.a.createElement(g.z,{className:"reset-password"},f.a.createElement(g.f,{className:"reset-text",xs:12},f.a.createElement("p",null,"Reset Password")),f.a.createElement("form",{onSubmit:n(this.handleSubmit)},f.a.createElement(g.f,{xs:12},f.a.createElement(j.a,{form:a,change:r,name:"password1",placeholderString:"Enter your new Password",size:"medium",isPassword:!0,desc:"New Password",zIndex:99})),f.a.createElement(g.f,{xs:12},f.a.createElement(j.a,{form:a,change:r,name:"password2",placeholderString:"Confirm Password",size:"medium",isPassword:!0,desc:"Confirm Password",zIndex:98})),f.a.createElement(g.f,{xs:12},f.a.createElement("p",{className:"error-text"},e)),f.a.createElement(g.f,{className:"justify-content-center button",xs:12},f.a.createElement(C.a,{type:"submit",variant:"medium-color",width:165,height:72},f.a.createElement("p",null,"Reset Password")))))}}]),t}(d.Component));E.defaultProps={};var O=Object(v.a)({form:"reset-password"})(E),k=n(512),x=n(97),P=n(19),S=function(e){function t(e){var n;Object(o.a)(this,t);var a=(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).props.location,r=null;try{r=a.search.substring(h.a.findIndex(a.search,function(e){return"="===e})+1)}catch(s){console.log("Token parse error")}return n.state={token:r},n.submitCallback=n.submitCallback.bind(Object(p.a)(Object(p.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"submitCallback",value:function(){var e=Object(s.a)(r.a.mark(function e(t){var n,a,s,o,i,c,u=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.token,a=this.props,s=a.loading,o=a.loadingEnd,s(),e.next=5,Object(P.x)(t,n);case 5:i=e.sent,o(),c=i?"Your password has been reset successfully.":"Password reset failed. Please try again.",setTimeout(function(){return u.popup.openPopupWithText(c,i)},300);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.token,n=this.props.history;return t?f.a.createElement(d.Fragment,null,f.a.createElement(O,{submitCallback:this.submitCallback}),f.a.createElement(k.a,{ref:function(t){return e.popup=t},onConfirm:function(){return n.push("/")}})):null}}]),t}(d.Component);t.default=Object(b.a)(Object(w.b)(function(e){return{login:e.login}},function(e){return{loading:function(t,n,a){e(Object(x.d)(t,n,a))},loadingEnd:function(){e(Object(x.c)())}}})(S))},512:function(e,t,n){"use strict";var a=n(12),r=n(11),s=n(14),o=n(13),i=n(15),c=n(3),u=n(1),l=n.n(u),p=n(35),m=n(105),h=(n(548),function(e){function t(e){var n;Object(a.a)(this,t);var r=(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).props.onConfirm;return n.state={text:"",jsx:null,useConfirm:!0,onConfirm:r},n.openPopupWithText=n.openPopupWithText.bind(Object(c.a)(Object(c.a)(n))),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"openPopupWithText",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.setState({text:e,useConfirm:t}),n&&this.setState({onConfirm:n}),setTimeout(this.popupRef.openPopup,10)}},{key:"openPopupWithJSX",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.setState({jsx:e,useConfirm:t}),n&&this.setState({onConfirm:n}),setTimeout(this.popupRef.openPopup,10)}},{key:"render",value:function(){var e=this,t=this.state,n=t.text,a=t.jsx,r=t.useConfirm,s=t.onConfirm,o=this.props,i=o.showCancelButton,c=o.hideCloseButton;return l.a.createElement("div",{className:"popup-with-text"},l.a.createElement(m.a,{hideCloseButton:c,ref:function(t){e.popupRef=t}},l.a.createElement(u.Fragment,null,l.a.createElement("div",{className:"check-out-popup"},l.a.createElement("div",{className:"upper-container upper-margin-down"},a||l.a.createElement("p",null,l.a.createElement("span",{className:"focus-text"},n))),l.a.createElement("div",{className:"button-container"},i?l.a.createElement(p.a,{className:"checkout-button",variant:"medium-flat",width:166,height:72,onClick:function(){e.popupRef.closePopup()}},l.a.createElement("p",null,"Cancel")):null,l.a.createElement(p.a,{className:"checkout-button",variant:"medium-flat-green",width:166,height:72,onClick:function(){r&&s(),e.popupRef.closePopup()}},l.a.createElement("p",null,"Confirm")))))))}}]),t}(u.Component));h.defaultProps={onConfirm:function(){},showCancelButton:!1,hideCloseButton:!1},t.a=h},548:function(e,t,n){}}]);
//# sourceMappingURL=forgetpassword.07a843ea.chunk.js.map
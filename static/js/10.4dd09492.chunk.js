(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{270:function(e,t,n){"use strict";var i=n(28),l=n(31),a=n(30),r=n(29),s=n(32),o=n(26),c=n(1),u=n.n(c),d=(n(362),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(a.a)(t).call(this,e))).state={errorString:null},n.setErrorString=n.setErrorString.bind(Object(o.a)(Object(o.a)(n))),n.clearErrorString=n.clearErrorString.bind(Object(o.a)(Object(o.a)(n))),n}return Object(s.a)(t,e),Object(r.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return t.errorString!==e.errorString?{errorString:e.errorString,refValue:e.refValue}:e.validateForm&&t.errorString&&t.refValue!==e.refValue?(e.validateForm(),{errorString:null}):null}}]),Object(r.a)(t,[{key:"setErrorString",value:function(e){this.setState({errorString:e})}},{key:"clearErrorString",value:function(){this.setState({errorString:null})}},{key:"render",value:function(){var e=this.state.errorString,t=this.props,n=t.extraInfo,i=t.desc;return u.a.createElement("div",{className:"input-wrapper-main-new input-wrapper-error"},null!==i?u.a.createElement("p",{className:"input-wrapper-desc"},i):null,this.props.children,null!==n?u.a.createElement("div",{className:"extra-info-container"},n):null,null!==e?u.a.createElement("div",{className:"input-wrapper-error-text"},u.a.createElement("p",null,e)):null)}}]),t}(c.Component));d.defaultProps={desc:null,extraInfo:null},t.a=d},301:function(e,t,n){"use strict";var i=n(3),l=n.n(i),a=n(5),r=n(49),s=n(28),o=n(31),c=n(30),u=n(29),d=n(32),h=n(26),p=n(7),m=n.n(p),f=n(1),g=n.n(f),v=n(52),S=n(192),b=n(193),y=n(180),C=n(254),E=n(270),O=n(189),I=n.n(O),k=n(211),x=n.n(k),j=n(199),w=n.n(j),D=(n(353),n(363),5),F=48,P=72,N=function(e){function t(e){var n;Object(s.a)(this,t);var i=(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).props,l=i.dropList,a=i.placeholderString,r=i.size,u=i.numItemsDisplay,d="big"===r?P:F,p=u||D,f=(m.a.min([l?l.length:0,p])+1)*d;return n.state={isOpened:!1,listItems:l,selectedString:a,height:d,numItemsDisplay:p,maxheight:f,listHeight:f,multipleSelectedElements:null,listElementsCounter:-1,clientHeight:d,extraPadding:0,noTransition:!0},n.updateDimensions=n.updateDimensions.bind(Object(h.a)(Object(h.a)(n))),n.handleClickOutside=n.handleClickOutside.bind(Object(h.a)(Object(h.a)(n))),n.renderListItems=n.renderListItems.bind(Object(h.a)(Object(h.a)(n))),n.renderTextInput=n.renderTextInput.bind(Object(h.a)(Object(h.a)(n))),n.handleSelectClick=n.handleSelectClick.bind(Object(h.a)(Object(h.a)(n))),n.handleOnInputChange=n.handleOnInputChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSetMultipleSelectedItem=n.handleSetMultipleSelectedItem.bind(Object(h.a)(Object(h.a)(n))),n.handleDestroySelected=n.handleDestroySelected.bind(Object(h.a)(Object(h.a)(n))),n.handleInputKeyPress=n.handleInputKeyPress.bind(Object(h.a)(Object(h.a)(n))),n.handleItemKeyPress=n.handleItemKeyPress.bind(Object(h.a)(Object(h.a)(n))),n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleExit=n.handleExit.bind(Object(h.a)(Object(h.a)(n))),n.handleBlur=n.handleBlur.bind(Object(h.a)(Object(h.a)(n))),n.handleFocus=n.handleFocus.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.dropList,i=e.numItemsDisplay,l=e.size;if(!m.a.isEqual(n,t.initialListItems)){var a="big"===l?P:F,r=i||D,s=(m.a.min([n?n.length:0,r])+1)*a;return{initialListItems:n,listItems:n,maxheight:s,listHeight:s}}return null}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside),window.addEventListener("resize",this.updateDimensions),this.updateDimensions();var e=this.props,t=e.formStore,n=e.name,i=e.overrideValue;if(t&&t[n]){var l=t[n];l.constructor===Array&&this.setState({multipleSelectedElements:l})}i&&this.handleChange(i),this.setState({noTransition:!1})}},{key:"shouldComponentUpdate",value:function(e){return this.props.overrideValue!==e.overrideValue&&this.handleChange(e.overrideValue),!0}},{key:"componentDidUpdate",value:function(){var e=this.state.multipleSelectedElements,t=this.props,n=t.formStore,i=t.name,l=n&&n[i],a=!m.a.isEmpty(e);if(l){var s=n[i];(!a||a&&!m.a.isEqual(s,e))&&s.constructor===Array&&this.setState({multipleSelectedElements:Object(r.a)(s)})}a&&!l&&this.setState({multipleSelectedElements:null}),this.updateDimensions()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside),window.removeEventListener("resize",this.updateDimensions)}},{key:"updateDimensions",value:function(){if(this.props.isMultiple){var e=this.state,t=e.clientHeight,n=e.height,i=e.extraPadding,l=F;try{l=(l=this.selectedItemsContainer.children[this.selectedItemsContainer.childElementCount-1].getBoundingClientRect().bottom-this.selectedItemsContainer.children[0].getBoundingClientRect().top)<F?F:l+10}catch(a){}t!==l&&this.setState({clientHeight:l,extraPadding:l-2*i>n?5:0})}}},{key:"handleChange",value:function(e){var t=this.props,n=t.name,i=t.form,l=t.formChange,a=t.notForm,r=t.valueChangeCallback;if(a)return r&&r(e),void(this.inputField.value=e);l(i,n,e)}},{key:"handleClickOutside",value:function(e){this.state.isOpened&&this.wrapperRef&&!this.wrapperRef.contains(e.target)&&(this.setState({isOpened:!1}),this.isFromFocus=!1)}},{key:"handleInputKeyPress",value:function(e){var t=this.state,n=t.isOpened,i=t.listElementsCounter,l=t.selectedString,a=t.multipleSelectedElements,r=this.props,s=r.placeholderString,o=r.isMultiple;if("Enter"===e.key)return this.handleExit(),void e.preventDefault();"ArrowDown"===e.key&&(n?(-1===i&&e.preventDefault(),this.handleItemKeyPress(e)):this.setState({isOpened:!0})),!o||"Backspace"!==e.key||""!==l&&l!==s||m.a.isEmpty(a)||this.handleDestroySelected(a[a.length-1])}},{key:"handleItemKeyPress",value:function(e){var t=this.state.listElementsCounter,n=t;if("Enter"===e.key)return this.handleExit(this.listElements[n].getAttribute("value")),void e.preventDefault();"ArrowDown"===e.key?n=t+1:"ArrowUp"===e.key&&(n=t-1),n=Math.max(0,Math.min(n,this.listElements.length-1)),this.listElements[n].focus(),n!==t&&this.setState({listElementsCounter:n}),e.stopPropagation()}},{key:"handleSelectClick",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.state,n=t.isOpened,i=t.selectedString,l=t.maxheight,a=t.multipleSelectedElements,r=this.props,s=r.dropList,o=r.isMultiple;this.isFromFocus||((!e||e&&!n)&&this.setState({isOpened:!n}),i&&"No results found"!==i||(this.setState({listItems:s,listHeight:l,listElementsCounter:-1}),(!o||o&&m.a.isEmpty(a))&&this.handleChange(null))),this.isFromFocus=!1}},{key:"handleSelectItemClick",value:function(e,t){if("No results found"!==t){var n=this.props.dropList,i=this.props.isMultiple;this.setState({listItems:n}),i?(this.setState({selectedString:""}),this.inputField.value="",this.handleSetMultipleSelectedItem(t)):(this.setState({selectedString:t}),this.handleSelectClick(),this.handleChange(t),this.setState({isOpened:!1})),e.stopPropagation()}}},{key:"handleSetMultipleSelectedItem",value:function(e){var t=this.state,n=t.multipleSelectedElements,i=t.height,l=n||[];l.indexOf(e)<0&&(l.push(e),this.setState({multipleSelectedElements:l,clientHeight:this.selectedContainer?this.selectedContainer.clientHeight:i,isOpened:!1}),this.handleChange(l))}},{key:"handleDestroySelected",value:function(e){var t=this.state.height,n=this.state.multipleSelectedElements.slice(),i=n.indexOf(e);n.splice(i,1),n=0===n.length?null:n,this.setState({multipleSelectedElements:n,clientHeight:this.selectedContainer?this.selectedContainer.clientHeight:t}),this.handleChange(n),this.isFromFocus=!1}},{key:"handleOnInputChange",value:function(){var e=Object(a.a)(l.a.mark(function e(t){var n,i,a,r,s,o,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,i=this.props.dropList,a=this.state,r=a.height,s=a.numItemsDisplay,o=m.a.filter(i,function(e){return 0===e.toString().toUpperCase().indexOf(n.toString().toUpperCase())}),c=o.length?o.length:1,this.setState({listItems:o.length?o:["No results found"],listHeight:(m.a.min([c,s])+1)*r,isOpened:!0,selectedString:n,listElementsCounter:-1});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleBlur",value:function(e){this.wrapperRef.contains(e.relatedTarget)||(this.setState({isOpened:!1}),this.handleExit(),this.isFromFocus=!1)}},{key:"handleFocus",value:function(e){var t=this.state.isOpened;this.wrapperRef.contains(e.relatedTarget)||t||(this.handleSelectClick(!0),this.isFromFocus=!0)}},{key:"handleExit",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.state,n=t.selectedString,i=t.listItems,l=this.props,a=l.placeholderString,r=l.dropList,s=l.isMultiple,o=null,c=!1,u=null!==e?e:n;u&&u!==a&&""!==u&&(i.some(function(e){var t=e.toString().toLowerCase()===u.toString().toLowerCase();return t&&(o=e),t}),o=(c=!o)?null:o,s?(c||this.handleSetMultipleSelectedItem(o),this.inputField.value=""):(this.handleChange(o),this.setState({isOpened:!1}))),this.setState({listItems:c?i:r,selectedString:o})}},{key:"renderListItems",value:function(){var e=this,t=this.state,n=t.listItems,i=t.height;return this.listElements=[],m.a.map(n,function(t){return g.a.createElement("li",{key:t},g.a.createElement("div",{className:"list-item text-style",style:{height:i},onClick:function(n){return e.handleSelectItemClick(n,t)},role:"button",tabIndex:-1,value:t,onKeyDown:function(t){e.handleItemKeyPress(t)},ref:function(t){null!==t&&e.listElements.push(t)}},g.a.createElement("p",null,t)))})}},{key:"renderMultipleSelectedElements",value:function(){var e=this,t=this.state.multipleSelectedElements;return this.props.isMultiple?m.a.map(t,function(t){return g.a.createElement("div",{className:"selected-item-container",key:t},g.a.createElement("div",{className:"selected-item"},g.a.createElement("p",null,t),g.a.createElement("button",{className:"selected-item-destroy",onMouseUp:function(){return e.handleDestroySelected(t)},tabIndex:-1},g.a.createElement("img",{src:x.a,alt:"cross.svg"}))))}):null}},{key:"renderTextInput",value:function(){var e=this,t=this.props,n=t.isMultiple,i=t.isDisableTyping,l=t.placeholderString,a=t.name,r=t.notForm;return n||r?i?g.a.createElement("input",{component:"input",type:"text",placeholder:l,autoComplete:"off",ref:function(t){return e.inputField=t},onChange:function(t){return e.handleOnInputChange(t)},onKeyDown:function(t){return e.handleInputKeyPress(t)},onClick:function(){return e.handleSelectClick(!0)},tabIndex:0,disabled:!0}):g.a.createElement("input",{component:"input",type:"text",placeholder:l,autoComplete:"off",ref:function(t){return e.inputField=t},onChange:function(t){return e.handleOnInputChange(t)},onKeyDown:function(t){return e.handleInputKeyPress(t)},onClick:function(){return e.handleSelectClick(!0)},tabIndex:0}):i?g.a.createElement(S.a,{name:a,component:"input",type:"text",autoComplete:"off",ref:function(t){return e.inputField=t},onChange:function(t){return e.handleOnInputChange(t)},onKeyDown:function(t){return e.handleInputKeyPress(t)},onClick:function(){return e.handleSelectClick(!0)},tabIndex:0,disabled:!0}):g.a.createElement(S.a,{name:a,component:"input",type:"text",autoComplete:"off",ref:function(t){return e.inputField=t},onChange:function(t){return e.handleOnInputChange(t)},onKeyDown:function(t){return e.handleInputKeyPress(t)},onClick:function(){return e.handleSelectClick(!0)},tabIndex:0})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isOpened,i=t.listHeight,l=t.height,a=t.clientHeight,r=t.extraPadding,s=t.noTransition;if(l&&i){var o=this.props,c=o.maxWidth,u=o.isMultiple,d=o.desc,h=o.extraInfo,p=o.errorString,m=o.formStore,f=o.name,v=o.validateForm,S=o.noInternalDesc,b=o.logo,y=o.noExternalDesc,O=o.placeholderString,k=(n?i:l)-l,x=n?"dropdown-container-opened":"dropdown-container-closed",j=n?"angle-up":"angle-down",D=s?"":"do-transition",P=n?"list-opened ".concat(D):"list-closed ".concat(D),N=u||b?"multi-drop-new":"",K=p?"error":"",M=S?"no-internal-desc":"",L=m?m[f]:null,H=L?"focused-title":"",T=a>F||n?a:0,B=a>F?6:0,V=u?w.a:b,R=y?null:d,U=n?"drop-open":"drop-close";return g.a.createElement(E.a,{desc:R,ref:function(t){return e.formParent=t},extraInfo:h,errorString:p,refValue:L,validateForm:v,minHeight:a},g.a.createElement("div",{className:"dropdown-new ".concat(U," ").concat(N," ").concat(M),style:{height:a,maxWidth:c,marginBottom:B},ref:function(t){return e.wrapperRef=t},onBlur:function(t){return e.handleBlur(t)},onFocus:function(t){return e.handleFocus(t)}},g.a.createElement("div",{className:"dropdown-container ".concat(x," ").concat(K)},u||S?null:g.a.createElement("div",{className:"title-header ".concat(H)},O),g.a.createElement("div",{className:"selected-container",onKeyDown:function(t){return e.handleInputKeyPress(t)},role:"button",style:{minHeight:l},tabIndex:-1,ref:function(t){return e.selectedContainer=t}},V?g.a.createElement("div",{className:"icon-container",style:{minHeight:l}},g.a.createElement("img",{src:V,alt:"DropdownImage.svg"})):null,g.a.createElement("div",{className:"selected-items-container",ref:function(t){return e.selectedItemsContainer=t},style:{paddingTop:r,paddingBottom:r}},this.renderMultipleSelectedElements(),g.a.createElement("div",{className:"selected-text selected-text-multi"},this.renderTextInput())),g.a.createElement("div",{className:"selected-arrow",onClick:function(){return e.handleSelectClick()},onKeyPress:function(){},role:"button",tabIndex:-1},g.a.createElement("img",{src:I.a,alt:"arrow.svg",className:"selected-arrow-style ".concat(j)}))),g.a.createElement(C.Scrollbars,{className:"list-container ".concat(P),style:{minHeight:k,marginTop:T},ref:function(t){return e.listContainer=t},tabIndex:-1},n?this.renderListItems():null))))}return null}}]),t}(f.Component);N.defaultProps={maxWidth:"100%",numItemsDisplay:D,isMultiple:!1,desc:null,isDisableTyping:!1,extraInfo:null,notForm:!1,overrideValue:null,errorString:null,dropList:null,formStore:null,valueChangeCallback:null,name:null,form:null,validateForm:null,noInternalDesc:!1,noExternalDesc:!1,logo:null};t.a=Object(v.b)(function(e,t){return{formStore:Object(b.a)(t.form)(e)}},function(e){return{formChange:function(t,n,i){e(Object(y.a)(t,n,i))}}})(N)},353:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){}}]);
//# sourceMappingURL=10.4dd09492.chunk.js.map
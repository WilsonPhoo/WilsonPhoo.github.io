(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1102:function(e,t,a){},1164:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(12),l=a(11),o=a(14),c=a(13),s=a(15),i=a(5),u=a.n(i),m=a(1),g=a.n(m),f=a(6),b=a(41),d=a(487),p=(a(1102),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={index:0},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getBlogData}},{key:"renderBlogImage",value:function(){var e=this,t=this.props.blogData;if(!t)return null;try{return g.a.createElement("div",{className:"blog-carousel-container"},g.a.createElement(d.a,{lazyLoad:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!0,slidesToShow:1,className:"white-sliders",beforeChange:function(t,a){return e.setState({index:a})},responsive:[{breakpoint:992,settings:{dots:!0,arrows:!1,className:"green-dots"}}]},u.a.map(t,function(e,t){return g.a.createElement(b.LazyLoadImage,{key:"blog-img-".concat(t),className:"blog-img",src:e.img,alt:"blog-img-".concat(t)})})))}catch(a){}return null}},{key:"renderBlogInfo",value:function(){var e=this.state.index,t=this.props.blogData,a=t&&t[e];if(!a)return null;try{return g.a.createElement("div",{className:"blog-info-container"},g.a.createElement("h3",null,g.a.createElement("a",{href:a.link,target:"__blank",dangerouslySetInnerHTML:{__html:a.title||"&nbsp;"}})),g.a.createElement("p",{className:"date"},a.date),g.a.createElement("p",{className:"info",dangerouslySetInnerHTML:{__html:a.excerpt||"&nbsp;"}}),g.a.createElement("a",{className:"read-more",href:a.link,target:"__blank"},"Read more"))}catch(n){}return null}},{key:"render",value:function(){return g.a.createElement(f.z,{className:"landing-blog-container",noGutters:!0},g.a.createElement(f.f,{xs:12},g.a.createElement("h2",null,"Blog")),g.a.createElement(f.f,{xs:12,lg:6},this.renderBlogImage()),g.a.createElement(f.f,{className:"my-auto",xs:12,lg:6},this.renderBlogInfo()))}}]),t}(m.Component));p.defaultProps={blogData:null};var h=p,y=a(80);t.default=Object(n.b)(function(e){return{blogData:e.blog.blogData}},function(e){return{getBlogData:function(){e(Object(y.d)())}}})(h)},487:function(e,t,a){"use strict";var n=a(12),r=a(11),l=a(14),o=a(13),c=a(15),s=a(1),i=a.n(s),u=a(513),m=a.n(u),g=(a(488),a(489),a(490),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"react-slick-carousel"},i.a.createElement(m.a,this.props,this.props.children))}}]),t}(s.Component));t.a=g},488:function(e,t,a){},489:function(e,t,a){},490:function(e,t,a){}}]);
//# sourceMappingURL=LandingBlogContainer.9d423676.chunk.js.map
(this["webpackJsonprhcv-example"]=this["webpackJsonprhcv-example"]||[]).push([[0],{103:function(e,t,a){e.exports=a(491)},104:function(e,t,a){},491:function(e,t,a){"use strict";a.r(t);a(104);var l=a(1),i=a.n(l),n=a(92),r=a.n(n),s=a(93),c=a(94),o=a(17),d=a(102),m=a(101),h=a(95),u=a.n(h),p=a(494),_=a(100),v=a(495),y={htmlViewer:"_styles-module__htmlViewer__2c7eY",delimiter:"_styles-module__delimiter__YL-i7",content:"_styles-module__content__2jwZj",togglerContainer:"_styles-module__togglerContainer__EKI9R",title:"_styles-module__title__2KezC",toggler:"_styles-module__toggler__2_oI1",label:"_styles-module__label__3sXmF",whiteToGray:"_styles-module__whiteToGray__1NGsQ",grayToBlue:"_styles-module__grayToBlue__26l3t"},g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChange=l.props.onChange?l.props.onChange:function(){},l.htmlIsActive="html"===l.props.active?y.active:null,l.rawIsActive="raw"===l.props.active?y.active:null,null===l.htmlIsActive&&null===l.rawIsActive&&(l.htmlIsActive=y.active),l.id=e.id?e.id:Object(v.a)(),e.title&&(l.title=i.a.createElement("div",{className:y.title},l.props.title)),l.str=u()(e.children),"html"===e.language&&(l.str=l.str.replace(/className/g,"class")),l.rendered=e.children,l.raw=i.a.createElement(p.a,{wrapLines:!0,showLineNumbers:!0,wrapLongLines:!0,language:"htmlbars",style:_.agate},l.str),l.state={content:"raw"===e.active?l.raw:l.rendered,htmlLabelStyle:y.labelActive,rawLabelStyle:y.label,copyLabelStyle:y.copyLabel},l.displayHtml=l.displayHtml.bind(Object(o.a)(l)),l.displayRaw=l.displayRaw.bind(Object(o.a)(l)),l.handleChecked=l.handleChecked.bind(Object(o.a)(l)),l.copyToClipBoard=l.copyToClipBoard.bind(Object(o.a)(l)),l}return Object(c.a)(a,[{key:"displayRaw",value:function(){this.setState({content:this.raw})}},{key:"displayHtml",value:function(){this.setState({content:this.rendered})}},{key:"handleChecked",value:function(e){this.display(e.currentTarget.value)}},{key:"copyToClipBoard",value:function(e){e.persist();var t=e.currentTarget;t.innerText="copied",navigator.clipboard.writeText(this.str).then((function(){setTimeout((function(){t.innerText="copy"}),500)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:y.htmlViewer},i.a.createElement("div",{className:y.togglerContainer},this.title,i.a.createElement("div",{className:y.toggler},i.a.createElement("input",{type:"radio",name:"contentRadio-"+this.id,id:"htmlRadio-"+this.id,onChange:function(){return e.onChange("html")},defaultChecked:this.htmlIsActive===y.active}),i.a.createElement("label",{htmlFor:"htmlRadio-"+this.id,className:y.label+" "+this.htmlIsActive,onClick:this.displayHtml},"html"),i.a.createElement("input",{type:"radio",name:"contentRadio-"+this.id,id:"rawRadio-"+this.id,onChange:function(){return e.onChange("raw")},defaultChecked:this.rawIsActive===y.active}),i.a.createElement("label",{htmlFor:"rawRadio-"+this.id,className:y.label+" "+this.rawIsActive,onClick:this.displayRaw},"code"),i.a.createElement("div",{className:y.label,onClick:this.copyToClipBoard},"copy"))),i.a.createElement("div",{className:y.delimiter}),i.a.createElement("div",{className:y.content},this.state.content))}}]),a}(i.a.Component),w=(a(91),function(){return i.a.createElement("div",null,i.a.createElement(g,{title:"Example title",id:"unique-id",active:"raw",onChange:function(e){console.log(e)}},i.a.createElement("div",null,"This is an example of how react-html-code-viewer works.")))});r.a.render(i.a.createElement(w,null),document.getElementById("root"))},91:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.3cff11e6.chunk.js.map
(this["webpackJsonprhcv-example"]=this["webpackJsonprhcv-example"]||[]).push([[0],{22:function(e,t,a){e.exports=a(435)},23:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);a(23);var l=a(0),n=a.n(l),i=a(10),r=a.n(i),c=a(19),o=a(11),s=a(12),d=a(2),h=a(21),m=a(20),u=a(13),p=a.n(u),y=a(438),v=a(14),g=a(439),_={htmlViewer:"_styles-module__htmlViewer__2c7eY",content:"_styles-module__content__2jwZj",togglerContainer:"_styles-module__togglerContainer__EKI9R",title:"_styles-module__title__2KezC",toggler:"_styles-module__toggler__2_oI1",label:"_styles-module__label__3sXmF",copyLabel:"_styles-module__copyLabel__254Qp",whiteToGray:"_styles-module__whiteToGray__1NGsQ",grayToBlue:"_styles-module__grayToBlue__26l3t"},b=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(o.a)(this,a),l=t.call(this,e),console.log(l.props.style),l.onChange=l.props.onChange?l.props.onChange:function(){},l.htmlIsActive="html"===l.props.active?_.active:null,l.rawIsActive="raw"===l.props.active?_.active:null,l.style=l.props.highlighter?l.props.highlighter:v.agate,null===l.htmlIsActive&&null===l.rawIsActive&&(l.htmlIsActive=_.active),l.id=e.id?e.id:Object(g.a)(),e.title&&(l.title=n.a.createElement("div",{className:_.title},l.props.title)),l.str=p()(e.children),"html"===e.language&&(l.str=l.str.replace(/className/g,"class")),l.rendered=e.children,l.raw=n.a.createElement(y.a,{wrapLines:!0,showLineNumbers:!0,wrapLongLines:!0,language:"htmlbars",style:l.style},l.str),l.state={content:"raw"===e.active?l.raw:l.rendered,htmlLabelStyle:_.labelActive,rawLabelStyle:_.label,copyLabelStyle:_.copyLabel},l.displayHtml=l.displayHtml.bind(Object(d.a)(l)),l.displayRaw=l.displayRaw.bind(Object(d.a)(l)),l.handleChecked=l.handleChecked.bind(Object(d.a)(l)),l.copyToClipBoard=l.copyToClipBoard.bind(Object(d.a)(l)),l}return Object(s.a)(a,[{key:"displayRaw",value:function(){this.setState({content:this.raw})}},{key:"displayHtml",value:function(){this.setState({content:this.rendered})}},{key:"handleChecked",value:function(e){this.display(e.currentTarget.value)}},{key:"copyToClipBoard",value:function(e){e.persist();var t=e.currentTarget;t.innerText="copied",navigator.clipboard.writeText(this.str).then((function(){setTimeout((function(){t.innerText="copy"}),500)}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:_.htmlViewer},n.a.createElement("div",{className:_.togglerContainer},this.title,n.a.createElement("div",{className:_.toggler},n.a.createElement("input",{type:"radio",name:"contentRadio-"+this.id,id:"htmlRadio-"+this.id,onChange:function(){return e.onChange("html")},defaultChecked:this.htmlIsActive===_.active}),n.a.createElement("label",{htmlFor:"htmlRadio-"+this.id,className:_.label+" "+this.htmlIsActive,onClick:this.displayHtml},"html"),n.a.createElement("input",{type:"radio",name:"contentRadio-"+this.id,id:"rawRadio-"+this.id,onChange:function(){return e.onChange("raw")},defaultChecked:this.rawIsActive===_.active}),n.a.createElement("label",{htmlFor:"rawRadio-"+this.id,className:_.label+" "+this.rawIsActive,onClick:this.displayRaw},"code"),n.a.createElement("div",{className:_.label+" "+_.copyLabel,onClick:this.copyToClipBoard},"copy"))),n.a.createElement("div",{className:_.content},this.state.content))}}]),a}(n.a.Component),w=(a(9),a(3)),E=[],C=0,f="html";for(var k in w)E.push(n.a.createElement("option",{key:C,value:k},k)),C++;function T(e){return n.a.createElement(b,{key:e,highlighter:w[e],active:f,title:"I am a title",id:"unique-id",onChange:function(e){f=e}},n.a.createElement("div",null,"This is an example text ",n.a.createElement("br",null),"click on ",n.a.createElement("strong",null,"html")," to display rendered html",n.a.createElement("br",null),"click on ",n.a.createElement("strong",null,"code")," to display raw code",n.a.createElement("br",null),"click on ",n.a.createElement("strong",null,"copy")," to save code in the clipboard",n.a.createElement("br",null)))}var N=function(){var e=Object(l.useState)(T("darcula")),t=Object(c.a)(e,2),a=t[0],i=t[1];return n.a.createElement("div",{className:"example"},n.a.createElement("div",{className:"container"},n.a.createElement("select",{className:"select",onChange:function(e){i(T(e.currentTarget.value))}},n.a.createElement("option",null,"-- pick a highlighter style --"),E)),n.a.createElement("div",null,a))};r.a.render(n.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.026620a1.chunk.js.map
(this["webpackJsonprhcv-example"]=this["webpackJsonprhcv-example"]||[]).push([[0],{485:function(e,t,r){},486:function(e,t,r){"use strict";r.r(t);r(98);var l=r(3),a=r.n(l),n=r(90),o=r.n(n),i=r(91),s=r.n(i),c=r(488),d=r(96);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m={delimiter:{borderTop:"0.1px solid #bababa",height:"0.1rem",marginTop:"0.1rem"},htmlViewer:{border:"0.1px solid #bababa",borderRadius:"0.5rem",padding:"1rem",display:"grid",gridTemplateRows:"auto",gap:"1rem"},content:{borderRadius:"0.5rem",padding:"0.5rem"},togglerContainer:{display:"flex",flexDirection:"row-reverse",flex:1},copyLabel:{border:"none",outline:"none",margin:"0.2rem",padding:"0.2rem 0.5rem",cursor:"pointer",borderRadius:"0.25rem"},copyLabelHover:{border:"none",outline:"none",margin:"0.2rem",padding:"0.2rem 0.5rem",cursor:"pointer",borderRadius:"0.25rem",color:"#007bff"},copyLabelActive:{border:"none",outline:"none",margin:"0.2rem",padding:"0.2rem 0.5rem",cursor:"pointer",borderRadius:"0.25rem",backgroundColor:"#007bff",color:"#fff"},toggler:{borderRadius:" 0.25rem",display:"grid",gridTemplateColumns:"minmax(5rem, auto) minmax(5rem, auto) minmax(3rem, auto)",border:"0.1px solid #bababa",textAlign:"center"},label:{borderRadius:"0.25rem",cursor:"pointer",display:"inline-block",margin:"0.2rem",padding:"0.2rem 0.5rem",textAlign:"center"},labelHover:{borderRadius:"0.25rem",cursor:"pointer",display:"inline-block",margin:"0.2rem",padding:"0.2rem 0.5rem",textAlign:"center",color:"#000",backgroundColor:"#efefef"},labelActive:{borderRadius:"0.25rem",cursor:"pointer",display:"inline-block",margin:"0.2rem",padding:"0.2rem 0.5rem",textAlign:"center",background:"#007bff",color:"white"},togglerInput:{display:"none"},togglerVertical:{flexFlow:"column wrap"}},p=function(e){var t,r;function l(t){var r;return(r=e.call(this,t)||this).str=s()(t.children),"html"===t.language&&(r.str=r.str.replace(/className/g,"class")),r.rendered=t.children,r.raw=a.a.createElement(c.a,{wrapLines:!0,showLineNumbers:!0,wrapLongLines:!0,language:"htmlbars",style:d.agate},r.str),r.state={content:t.children,htmlLabelStyle:m.label,rawLabelStyle:m.label,copyLabelStyle:m.copyLabel},r.displayHtml=r.displayHtml.bind(b(r)),r.displayRaw=r.displayRaw.bind(b(r)),r.handleChecked=r.handleChecked.bind(b(r)),r.copyToClipBoard=r.copyToClipBoard.bind(b(r)),r}r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n=l.prototype;return n.displayRaw=function(){this.setState({content:this.raw})},n.displayHtml=function(){this.setState({content:this.rendered})},n.handleChecked=function(e){this.display(e.currentTarget.value)},n.copyToClipBoard=function(e){var t=this;e.persist(),navigator.clipboard.writeText(this.str).then((function(){t.setLabelStyle("copyLabelStyle","copyLabelActive"),setTimeout((function(){t.setLabelStyle("copyLabelStyle","copyLabel")}),150)}))},n.setLabelStyle=function(e,t,r){(r||this.state[e]!==m.labelActive)&&(this.state[e]=m[t],this.setState(this.state))},n.render=function(){var e=this;return a.a.createElement("div",{style:m.htmlViewer,className:".htmlViewer"},a.a.createElement("div",{style:m.togglerContainer,className:".togglerContainer"},a.a.createElement("div",{style:m.toggler,className:".toggler"},a.a.createElement("div",{id:"htmlLabel",style:this.state.htmlLabelStyle,onClick:function(){e.setLabelStyle("htmlLabelStyle","labelActive"),e.setLabelStyle("rawLabelStyle","label",!0),e.displayHtml()},onMouseEnter:function(){return e.setLabelStyle("htmlLabelStyle","labelHover")},onMouseLeave:function(){return e.setLabelStyle("htmlLabelStyle","label")}},"html"),a.a.createElement("div",{id:"rawLabel",style:this.state.rawLabelStyle,onClick:function(){e.setLabelStyle("rawLabelStyle","labelActive"),e.setLabelStyle("htmlLabelStyle","label",!0),e.displayRaw()},onMouseEnter:function(){return e.setLabelStyle("rawLabelStyle","labelHover")},onMouseLeave:function(){e.setLabelStyle("rawLabelStyle","label")}},"code"),a.a.createElement("div",{style:this.state.copyLabelStyle,onClick:this.copyToClipBoard,onMouseEnter:function(){return e.setLabelStyle("copyLabelStyle","copyLabelHover")},onMouseLeave:function(){return e.setLabelStyle("copyLabelStyle","copyLabel")}},"copy"))),a.a.createElement("div",{className:".delimiter",style:m.delimiter}),a.a.createElement("div",{className:".content",style:m.content},this.state.content))},l}(a.a.Component),u=(r(485),function(){return a.a.createElement(p,null,a.a.createElement("div",null,"This is an example of how react-html-code-viewer works."))});o.a.render(a.a.createElement(u,null),document.getElementById("root"))},97:function(e,t,r){e.exports=r(486)},98:function(e,t,r){}},[[97,1,2]]]);
//# sourceMappingURL=main.cd968507.chunk.js.map
(function(e){function t(t){for(var i,l,r=t[0],s=t[1],c=t[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&h.push(o[l][0]),o[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},o={index:0},a=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("e35a")},a7e2:function(e,t,n){"use strict";var i=n("b021"),o=n.n(i);o.a},b021:function(e,t,n){},cd4d:function(e,t,n){},e35a:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("编辑器演示")]),n("p",[e._v("tip： 打开console查看调试信息")]),n("div",[n("button",{on:{click:function(){return e.readOnly=!e.readOnly}}},[e.readOnly?n("span",[e._v("只读")]):e._e(),e.readOnly?e._e():n("span",[e._v("非只读")])]),n("button",{on:{click:function(t){return e.callMethod("getText")}}},[e._v("获取纯文本内容")]),n("button",{on:{click:function(t){return e.callMethod("getHtml")}}},[e._v("获取html内容")]),n("button",{on:{click:function(t){return e.callMethod("getLength")}}},[e._v("获取内容长度")]),n("button",{on:{click:function(t){return e.callMethod("blur")}}},[e._v("失去焦点")]),n("button",{on:{click:function(t){return e.callMethod("focus")}}},[e._v("获取焦点")]),n("button",{on:{click:function(t){return e.callMethod("hasFocus")}}},[e._v("是否获取焦点")]),e.maxLength?n("button",{on:{click:e.handleLimitCount}},[e._v("取消字数限制")]):n("button",{on:{click:e.handleLimitCount}},[e._v("限制100字长度输入")])]),n("div",{staticStyle:{width:"1200px","margin-top":"10px",display:"flex","flex-direction":"row"}},[n("div",{staticStyle:{flex:"1"}},[n("div",[n("quill-editor",{ref:"editor",attrs:{"read-only":e.readOnly,"max-length":e.maxLength,"show-counter":"",image:e.imageConfig,height:"100"},model:{value:e.item.text1,callback:function(t){e.$set(e.item,"text1",t)},expression:"item.text1"}})],1),n("div",[n("quill-editor",{ref:"editor1",attrs:{"read-only":e.readOnly,"max-length":e.maxLength,"show-counter":"",image:e.imageConfig,height:"100"},model:{value:e.item.text2,callback:function(t){e.$set(e.item,"text2",t)},expression:"item.text2"}})],1),n("div",[n("quill-editor",{ref:"editor2",attrs:{"read-only":e.readOnly,"toolbar-sticky":100,"show-counter":"",image:e.imageConfig,height:"100"},model:{value:e.item.text3,callback:function(t){e.$set(e.item,"text3",t)},expression:"item.text3"}})],1)]),n("div",{staticClass:"ql-container",staticStyle:{flex:"1","padding-left":"10px","word-break":"break-all"}},[n("p",[e._v("第一个编辑器内容")]),n("div",{staticClass:"ql-editor",staticStyle:{background:"#fff",padding:"12px"},domProps:{innerHTML:e._s(e.item.text1)}}),n("p",[e._v("第二个编辑器内容")]),n("div",{staticClass:"ql-editor",staticStyle:{background:"#fff",padding:"12px"},domProps:{innerHTML:e._s(e.item.text2)}}),n("p",[e._v("第三个编辑器内容")]),n("div",{staticClass:"ql-editor",staticStyle:{background:"#fff",padding:"12px"},domProps:{innerHTML:e._s(e.item.text3)}})])])])},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"editor",staticClass:"vue-quill-editor",style:e.style},[e._t("default")],2),e.showCounter?n("div",{staticClass:"ql-counter-desc"},[e._v(" 已输入 "+e._s(e.textLength)),e.maxLength?n("span",[e._v("/"+e._s(e.maxLength))]):e._e(),e._v(" 字 ")]):e._e()])},r=[],s=(n("4160"),n("a9e3"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),c=n("9339"),u=n.n(c),d=(n("7db0"),n("d81d"),n("fb6a"),n("d4ec")),h=n("ade3"),g=n("3f84"),p=n.n(g),f={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}},m=(n("99af"),n("a15b"),n("257e")),b=n("262e"),y=n("2caf"),v=function e(t){Object(d["a"])(this,e),Object(h["a"])(this,"onCreate",(function(){})),Object(h["a"])(this,"onDestroy",(function(){})),Object(h["a"])(this,"onUpdate",(function(){})),this.overlay=t.overlay,this.img=t.img,this.options=t.options,this.requestUpdate=t.onUpdate},x=function(e){Object(b["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;Object(d["a"])(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(h["a"])(Object(m["a"])(e),"onCreate",(function(){e.display=document.createElement("div"),Object.assign(e.display.style,e.options.displayStyles),e.overlay.appendChild(e.display)})),Object(h["a"])(Object(m["a"])(e),"onDestroy",(function(){})),Object(h["a"])(Object(m["a"])(e),"onUpdate",(function(){if(e.display&&e.img){var t=e.getCurrentSize();if(e.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(e.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"==e.img.style.float){var n=e.display.getBoundingClientRect();Object.assign(e.display.style,{right:"auto",bottom:"-".concat(n.height+4,"px"),left:"-".concat(n.width+4,"px")})}else{var i=e.display.getBoundingClientRect();Object.assign(e.display.style,{right:"-".concat(i.width+4,"px"),bottom:"-".concat(i.height+4,"px"),left:"auto"})}}})),Object(h["a"])(Object(m["a"])(e),"getCurrentSize",(function(){return[e.img.width,Math.round(e.img.width/e.img.naturalWidth*e.img.naturalHeight)]})),e}return n}(v),O=(n("4de4"),n("b2cd")),j=n.n(O),C=n("09c6"),w=n.n(C),S=n("be13"),q=n.n(S),k=u.a.imports.parchment,L=new k.Attributor.Style("float","float"),_=new k.Attributor.Style("margin","margin"),E=new k.Attributor.Style("display","display"),M=function(e){Object(b["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;Object(d["a"])(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(h["a"])(Object(m["a"])(e),"onCreate",(function(){e.toolbar=document.createElement("div"),Object.assign(e.toolbar.style,e.options.toolbarStyles),e.overlay.appendChild(e.toolbar),e._defineAlignments()})),Object(h["a"])(Object(m["a"])(e),"onDestroy",(function(){})),Object(h["a"])(Object(m["a"])(e),"onUpdate",(function(){})),Object(h["a"])(Object(m["a"])(e),"_defineAlignments",(function(){e.alignments=[{icon:j.a,apply:function(){E.add(e.img,"inline"),L.add(e.img,"left"),_.add(e.img,"0 1em 1em 0")},isApplied:function(){return"left"==L.value(e.img)}},{icon:w.a,apply:function(){E.add(e.img,"block"),L.remove(e.img),_.add(e.img,"auto")},isApplied:function(){return"auto"==_.value(e.img)}},{icon:q.a,apply:function(){E.add(e.img,"inline"),L.add(e.img,"right"),_.add(e.img,"0 0 1em 1em")},isApplied:function(){return"right"==L.value(e.img)}}]})),Object(h["a"])(Object(m["a"])(e),"_addToolbarButtons",(function(){var t=[];e.alignments.forEach((function(n,i){var o=document.createElement("span");t.push(o),o.innerHTML=n.icon,o.addEventListener("click",(function(){t.forEach((function(e){return e.style.filter=""})),n.isApplied()?(L.remove(e.img),_.remove(e.img),E.remove(e.img)):(e._selectButton(o),n.apply()),e.requestUpdate()})),Object.assign(o.style,e.options.toolbarButtonStyles),i>0&&(o.style.borderLeftWidth="0"),console.log(o),n.isApplied()&&e._selectButton(o),e.toolbar.appendChild(o)}))})),Object(h["a"])(Object(m["a"])(e),"_selectButton",(function(e){e.style.filter="invert(20%)"})),e}return n}(v),T=function(e){Object(b["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;Object(d["a"])(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(h["a"])(Object(m["a"])(e),"onCreate",(function(){e.boxes=[],e.addBox("nwse-resize"),e.addBox("nesw-resize"),e.addBox("nwse-resize"),e.addBox("nesw-resize"),e.positionBoxes()})),Object(h["a"])(Object(m["a"])(e),"onDestroy",(function(){e.setCursor("")})),Object(h["a"])(Object(m["a"])(e),"positionBoxes",(function(){var t="".concat(-parseFloat(e.options.handleStyles.width)/2,"px"),n="".concat(-parseFloat(e.options.handleStyles.height)/2,"px");[{left:t,top:n},{right:t,top:n},{right:t,bottom:n},{left:t,bottom:n}].forEach((function(t,n){Object.assign(e.boxes[n].style,t)}))})),Object(h["a"])(Object(m["a"])(e),"addBox",(function(t){var n=document.createElement("div");Object.assign(n.style,e.options.handleStyles),n.style.cursor=t,n.style.width="".concat(e.options.handleStyles.width,"px"),n.style.height="".concat(e.options.handleStyles.height,"px"),n.addEventListener("mousedown",e.handleMousedown,!1),e.overlay.appendChild(n),e.boxes.push(n)})),Object(h["a"])(Object(m["a"])(e),"handleMousedown",(function(t){e.dragBox=t.target,e.dragStartX=t.clientX,e.preDragWidth=e.img.width||e.img.naturalWidth,e.setCursor(e.dragBox.style.cursor),document.addEventListener("mousemove",e.handleDrag,!1),document.addEventListener("mouseup",e.handleMouseup,!1)})),Object(h["a"])(Object(m["a"])(e),"handleMouseup",(function(){e.setCursor(""),document.removeEventListener("mousemove",e.handleDrag),document.removeEventListener("mouseup",e.handleMouseup)})),Object(h["a"])(Object(m["a"])(e),"handleDrag",(function(t){if(e.img){var n=t.clientX-e.dragStartX;e.dragBox===e.boxes[0]||e.dragBox===e.boxes[3]?e.img.width=Math.round(e.preDragWidth-n):e.img.width=Math.round(e.preDragWidth+n),e.requestUpdate()}})),Object(h["a"])(Object(m["a"])(e),"setCursor",(function(t){[document.body,e.img].forEach((function(e){e.style.cursor=t}))})),e}return n}(v),B={DisplaySize:x,Toolbar:M,Resize:T},A=function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(d["a"])(this,e),Object(h["a"])(this,"initializeModules",(function(){n.removeModules(),n.modules=n.moduleClasses.map((function(e){return new(B[e]||e)(n)})),n.modules.forEach((function(e){e.onCreate()})),n.onUpdate()})),Object(h["a"])(this,"onUpdate",(function(){n.repositionElements(),n.modules.forEach((function(e){e.onUpdate()}))})),Object(h["a"])(this,"removeModules",(function(){n.modules.forEach((function(e){e.onDestroy()})),n.modules=[]})),Object(h["a"])(this,"handleClick",(function(e){if(!n.quill.container.classList.contains("ql-disabled"))if(e.target&&e.target.tagName&&"IMG"===e.target.tagName.toUpperCase()){if(n.img===e.target)return;n.img&&n.hide(),n.show(e.target)}else n.img&&n.hide()})),Object(h["a"])(this,"show",(function(e){n.quill.options.readOnly?console.log("readonly"):(n.img=e,console.log(n.img),n.showOverlay(),n.initializeModules())})),Object(h["a"])(this,"showOverlay",(function(){n.overlay&&n.hideOverlay(),n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0),n.overlay=document.createElement("div"),Object.assign(n.overlay.style,n.options.overlayStyles),n.quill.root.parentNode.appendChild(n.overlay),n.repositionElements()})),Object(h["a"])(this,"hideOverlay",(function(){n.overlay&&(n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.setUserSelect(""))})),Object(h["a"])(this,"repositionElements",(function(){if(n.overlay&&n.img){var e=n.quill.root.parentNode,t=n.img.getBoundingClientRect(),i=e.getBoundingClientRect();Object.assign(n.overlay.style,{left:"".concat(t.left-i.left-1+e.scrollLeft,"px"),top:"".concat(t.top-i.top+e.scrollTop,"px"),width:"".concat(t.width,"px"),height:"".concat(t.height,"px")})}})),Object(h["a"])(this,"hide",(function(){n.hideOverlay(),n.removeModules(),n.img=void 0})),Object(h["a"])(this,"setUserSelect",(function(e){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach((function(t){n.quill.root.style[t]=e,document.documentElement.style[t]=e}))})),Object(h["a"])(this,"checkImage",(function(e){n.img&&(46!=e.keyCode&&8!=e.keyCode||u.a.find(n.img).deleteAt(0),n.hide())})),this.quill=t;var o=!1;i.modules&&(o=i.modules.slice()),this.options=p()({},i,f),!1!==o&&(this.options.modules=o),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),document.body.addEventListener("click",(function(e){n.quill.root.contains(e.target)||n.hide()})),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[]},H=A;u.a.register("modules/imageResize",H);var U={name:"QuillEditor",data:function(){return{quill:void 0,imageConfig:{serverUrl:void 0,fileName:"file",withCredentials:!0,multiple:!0},textLength:0}},created:function(){},mounted:function(){this.initParams(),this.initQuill()},props:{toolbarSticky:Number,borderColor:{type:String,default:"#eee"},maxLength:Number,showCounter:Boolean,value:{type:String,default:""},placeholder:{type:String,default:"请输入内容……"},toolbar:{type:Array,default:function(){return[[{header:[1,2,3,4,5,!1]}],[{color:[]},{background:[]}],["bold","italic","underline","strike"],["link","image"],[{list:"ordered"},{list:"bullet"}],["blockquote","code-block"],[{indent:"-1"},{indent:"+1"}],[{align:[]}],["clean"]]}},image:{type:Object},readOnly:Boolean,autoHeight:{type:Boolean,default:!0},height:{type:[Number,String],default:200}},watch:{readOnly:{handler:function(){this.quill&&this.handleReadOnlyChange()}}},computed:{style:function(){return{height:this.autoHeight?void 0:this.height+"px",minHeight:this.autoHeight?this.height+"px":void 0,borderColor:this.borderColor}}},methods:{initParams:function(){this.imageConfig=Object.assign({},this.imageConfig,this.image),console.log("imageConfig",this.imageConfig),this.imageConfig.serverUrl&&console.log("服务器相应图片上传的格式应为：",{errno:0,data:["imgurl1","imgurl2"]})},initQuill:function(){var e=this,t={modules:{toolbar:{container:this.toolbar,handlers:{image:this.imageConfig.serverUrl?this.handleImage:void 0}},imageResize:{}},theme:"snow",placeholder:this.placeholder};this.quill=new u.a(this.$refs["editor"],t),console.log("init quill config: ",t),this.$nextTick((function(t){e.value&&e.setHtml(e.value),e.$emit("input",e.getHtml())})),this.textLength=this.getLength(),this.bindEvents(),console.log("editor container",this.quill.container),setTimeout((function(t){e.handleReadOnlyChange()}),300),this.$nextTick((function(t){e.$el.querySelector(".ql-toolbar").style.borderColor=e.borderColor,e.setToolbarSticky(),e.fixBugs()}))},fixBugs:function(){this.$el.querySelector(".ql-toolbar").addEventListener("mousedown",(function(e){e.preventDefault(),e.stopPropagation()}))},setToolbarSticky:function(){if(this.toolbarSticky){var e=this.$el.querySelector(".ql-toolbar");e.style.position="sticky",e.style.top=this.toolbarSticky+"px",e.style.zIndex=1}},bindEvents:function(){var e=this;this.quill.on("text-change",(function(t,n,i){e.getText();var o=e.getHtml(),a=e.getLength();e.maxLength&&a>e.maxLength&&e.quill.deleteText(e.maxLength,a),e.textLength=e.getLength(),e.$emit("input",o),e.$emit("textChange",{delta:t,oldDelta:n,source:i})})),this.quill.on("selection-change",(function(t,n,i){e.$emit("selectionChange",{range:t,oldRange:n,source:i})})),this.quill.on("editor-change",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];e.$emit("editorChange",{eventName:t,args:i})}))},handleImage:function(){var e=this;console.log("选择图片进行上传");var t=document.createElement("input");t.setAttribute("type","file"),this.imageConfig.multiple&&t.setAttribute("multiple","true"),t.setAttribute("accept","image/*"),t.click(),t.onchange=Object(s["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=e.quill.getSelection(!0),e.uploadImage(e.imageConfig.multiple?t.files:t.files[0]).then((function(t){t.forEach((function(t){e.quill.insertEmbed(i.index,"image",t),e.quill.setSelection(i.index+1)}))}));case 2:case"end":return n.stop()}}),n)})))},uploadImage:function(e){var t=this;return new Promise((function(n,i){var o=new FormData;t.imageConfig.multiple?e.forEach((function(e){o.append(t.imageConfig.fileName,e)})):o.append(t.imageConfig.fileName,e);var a=new XMLHttpRequest;a.open("POST",t.imageConfig.serverUrl,!0),t.imageConfig.withCredentials&&(a.withCredentials=!0),a.onreadystatechange=function(e){if(a.readyState===XMLHttpRequest.DONE)if(200===a.status){var o=JSON.parse(a.responseText);console.log("upload success",o),0===o.errno||t.imageConfig.error&&t.imageConfig.error(o),n(o.data)}else console.log(a),alert("图片上传失败！".concat(a.responseText)),i(a.responseText)},a.send(o)}))},handleReadOnlyChange:function(){this.quill.enable(!this.readOnly),this.readOnly?this.$el.querySelector(".ql-toolbar").style.pointerEvents="none":this.$el.querySelector(".ql-toolbar").style.pointerEvents="unset"},getEditor:function(){return this.quill},getHtml:function(){return this.quill.container.firstChild.innerHTML},setHtml:function(e){this.quill.container.firstChild.innerHTML=e},getText:function(){return this.quill.getText()},getContents:function(){return this.quill.getContents()},getLength:function(){return this.quill.getLength()-1},blur:function(){this.quill.blur()},focus:function(){this.quill.focus()},hasFocus:function(){return this.quill.hasFocus()}},beforeDestroy:function(){this.$el.remove(),this.quill=void 0}},z=U,$=n("2877"),D=Object($["a"])(z,l,r,!1,null,"e6abf212",null),R=D.exports,N=(n("cd4d"),R),P={name:"App",components:{QuillEditor:N},data:function(){return{maxLength:20,readOnly:!1,imageConfig:{multiple:!1,serverUrl:"http://localhost:12388/api/facade/open/general/edit/upload"},content:"",item:{text1:'1234<img src="https://static.oschina.net/uploads/user/276/552167_50.jpg?t=1358392807000" />',text2:"",text3:'<p><span style="color: rgb(51, 51, 51);">东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动东方赛发动发动发动</span></p><h1>一级标题</h1><p>懂非懂发动发动发动发动发东方赛风赛风</p><h2>二级标题</h2><p><span style="color: rgb(51, 51, 51);">懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂懂非懂发动分懂非懂复赛复赛发东方懂非懂懂</span></p><h3>三级标题</h3><p><span style="color: rgb(51, 51, 51);">东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动东方森赛发动发动分东方懂复赛发动</span></p><blockquote><span style="color: rgb(51, 51, 51);">出处：简书</span></blockquote><p><br></p><h5>这是一行小字</h5><p>继续说吧下面怎么办</p><p><br></p><p><span style="color: rgb(51, 51, 51);">欢迎访问</span><a href="满意吧" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">满意吧</a></p>'}}},mounted:function(){var e=this;setTimeout((function(t){e.item.text2="1233444"}),1e3)},watch:{content:function(){}},methods:{callMethod:function(e){var t=this.$refs["editor"][e]();alert(t),console.log(t)},handleLimitCount:function(){this.maxLength?this.maxLength=void 0:this.maxLength=100}}},I=P,W=(n("a7e2"),Object($["a"])(I,o,a,!1,null,null,null)),F=W.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=index.b72d7a0c.js.map
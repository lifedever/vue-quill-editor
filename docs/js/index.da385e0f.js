(function(e){function t(t){for(var i,l,a=t[0],u=t[1],c=t[2],d=0,f=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);s&&s(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},o={index:0},r=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("e35a")},a7e2:function(e,t,n){"use strict";var i=n("b021"),o=n.n(i);o.a},b021:function(e,t,n){},cd4d:function(e,t,n){},e35a:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("编辑器演示")]),n("p",[e._v("tip： 打开console查看调试信息")]),n("div",[n("button",{on:{click:function(){return e.readOnly=!e.readOnly}}},[e.readOnly?n("span",[e._v("只读")]):e._e(),e.readOnly?e._e():n("span",[e._v("非只读")])]),n("button",{on:{click:function(t){return e.callMethod("getText")}}},[e._v("获取纯文本内容")]),n("button",{on:{click:function(t){return e.callMethod("getContents")}}},[e._v("获取文本内容")]),n("button",{on:{click:function(t){return e.callMethod("getLength")}}},[e._v("获取内容长度")]),n("button",{on:{click:function(t){return e.callMethod("blur")}}},[e._v("失去焦点")]),n("button",{on:{click:function(t){return e.callMethod("focus")}}},[e._v("获取焦点")]),n("button",{on:{click:function(t){return e.callMethod("hasFocus")}}},[e._v("是否获取焦点")])]),n("div",{staticStyle:{width:"1200px","margin-top":"10px",display:"flex","flex-direction":"row"}},[n("div",{staticStyle:{flex:"1"}},[n("quill-editor",{ref:"editor",attrs:{"read-only":e.readOnly,image:e.imageConfig,height:"400","auto-height":!1},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),n("div",{staticStyle:{flex:"1","padding-left":"10px","word-break":"break-all"}},[n("div",{staticStyle:{background:"#fff",padding:"12px"},domProps:{innerHTML:e._s(e.content)}})])])])},r=[],l={name:"App",components:{},data:function(){return{readOnly:!1,imageConfig:{serverUrl:"http://localhost:12388/api/facade/open/general/edit/upload"},content:"<h1>标题一标题一</h1><h2>标题二标题二</h2><h3>标题三标题三</h3><h4>标题四标题四</h4><h5>标题五标题五</h5><h6>标题六标题六</h6>"}},watch:{content:function(){}},methods:{callMethod:function(e){var t=this.$refs["editor"][e]();alert(t),console.log(t)}}},a=l,u=(n("a7e2"),n("2877")),c=Object(u["a"])(a,o,r,!1,null,null,null),s=c.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"toolbar"}),n("div",{ref:"editor",staticClass:"vue-quill-editor",style:e.style})])},f=[],h=(n("4160"),n("a9e3"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),g=n("9339"),p=n.n(g),m=(n("a753"),n("cd4d"),{name:"QuillEditor",data:function(){return{quill:void 0,imageConfig:{serverUrl:void 0,fileName:"file",withCredentials:!0,multiple:!0}}},created:function(){},mounted:function(){this.initParams(),this.initQuill()},props:{value:{type:String,default:""},placeholder:{type:String,default:"请输入内容……"},toolbar:{type:Array,default:function(){return[[{header:[1,2,3,4,5,!1]}],[{color:[]},{background:[]}],["bold","italic","underline","strike"],["link","image"],[{list:"ordered"},{list:"bullet"}],["blockquote","code-block"],[{indent:"-1"},{indent:"+1"}],[{align:[]}],["clean"]]}},image:{type:Object},readOnly:Boolean,autoHeight:{type:Boolean,default:!0},height:{type:[Number,String],default:200}},watch:{readOnly:function(){this.quill&&this.quill.enable(!this.readOnly)}},computed:{style:function(){return{height:this.autoHeight?void 0:this.height+"px",minHeight:this.autoHeight?this.height+"px":void 0}}},methods:{initParams:function(){var e=this;this.imageConfig=Object.assign({},this.imageConfig,this.image),console.log("imageConfig",this.imageConfig),this.imageConfig.serverUrl&&console.log("服务器相应图片上传的格式应为：",{errno:0,data:["imgurl1","imgurl2"]}),p.a.prototype.getHtml=function(){return e.$refs["editor"].querySelector(".ql-editor").innerHTML},p.a.prototype.setHtml=function(t){e.$refs["editor"].querySelector(".ql-editor").innerHTML=t}},initQuill:function(){var e=this;this.quill=new p.a(this.$refs["editor"],{modules:{toolbar:{container:this.toolbar,handlers:{image:this.imageConfig.serverUrl?this.handleImage:void 0}}},theme:"snow",placeholder:this.placeholder,readOnly:this.readOnly}),this.$nextTick((function(t){e.value?(e.quill.root.dataset.placeholder="",e.quill.setHtml(e.value)):e.quill.root.dataset.placeholder=e.placeholder})),this.bindEvents()},bindEvents:function(){var e=this;this.quill.on("text-change",(function(t,n,i){e.$emit("input",e.quill.getHtml()),e.$emit("textChange",{delta:t,oldDelta:n,source:i})})),this.quill.on("selection-change",(function(t,n,i){e.$emit("selectionChange",{range:t,oldRange:n,source:i})})),this.quill.on("editor-change",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];e.$emit("editorChange",{eventName:t,args:i})}))},handleImage:function(){var e=this;console.log("选择图片进行上传");var t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("multiple","true"),t.setAttribute("accept","image/*"),t.click(),t.onchange=Object(h["a"])(regeneratorRuntime.mark((function n(){var i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=t.files[0],o=e.quill.getSelection(!0),e.uploadImage(i).then((function(t){t.forEach((function(t){e.quill.insertEmbed(o.index,"image",t),e.quill.setSelection(o.index+1)}))}));case 3:case"end":return n.stop()}}),n)})))},uploadImage:function(e){var t=this;return new Promise((function(n,i){var o=new FormData;o.append(t.imageConfig.fileName,e);var r=new XMLHttpRequest;r.open("POST",t.imageConfig.serverUrl,!0),t.imageConfig.withCredentials&&(r.withCredentials=!0),r.onreadystatechange=function(e){if(r.readyState===XMLHttpRequest.DONE)if(200===r.status){var t=JSON.parse(r.responseText);console.log("upload success",t),0===t.errno&&n(t.data)}else alert("图片上传失败！"),i(r.responseText)},r.send(o)}))},getEditor:function(){return this.quill},getHtml:function(){return this.quill.getHtml()},setHtml:function(e){this.quill.setHtml(e)},getText:function(){return this.quill.getText()},getContents:function(){return this.quill.getContents()},getLength:function(){return this.quill.getLength()},blur:function(){this.quill.blur()},focus:function(){this.quill.focus()},hasFocus:function(){return this.quill.hasFocus()}},beforeDestroy:function(){this.$el.remove(),this.quill=void 0}}),v=m,b=Object(u["a"])(v,d,f,!1,null,"e2e5b376",null),y=b.exports;var q=function e(t){e.installed||t.component("quill-editor",y)},x={install:q};i["a"].config.productionTip=!1,i["a"].use(x),new i["a"]({render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=index.da385e0f.js.map
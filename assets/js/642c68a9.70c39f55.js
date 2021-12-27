"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3422],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=a,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},746:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u=void 0,p={unversionedId:"configuration/output-plugins/Tidb",id:"configuration/output-plugins/Tidb",title:"Tidb",description:"Output plugin : TiDB",source:"@site/docs/configuration/output-plugins/Tidb.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Tidb",permalink:"/docs/configuration/output-plugins/Tidb",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/output-plugins/Tidb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stdout",permalink:"/docs/configuration/output-plugins/Stdout"},next:{title:"\u63d2\u4ef6\u5f00\u53d1",permalink:"/docs/development/"}},s=[{value:"Output plugin : TiDB",id:"output-plugin--tidb",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"batchsize number",id:"batchsize-number",children:[],level:5},{value:"isolationLevel string",id:"isolationlevel-string",children:[],level:5},{value:"password string",id:"password-string",children:[],level:5},{value:"save_mode string",id:"save_mode-string",children:[],level:5},{value:"table string",id:"table-string",children:[],level:5},{value:"url string",id:"url-string",children:[],level:5},{value:"user string",id:"user-string",children:[],level:5},{value:"useSSL boolean",id:"usessl-boolean",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],d={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"output-plugin--tidb"},"Output plugin : TiDB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.1.5")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u901a\u8fc7JDBC\u5c06\u6570\u636e\u5199\u5165",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb"},"TiDB")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#batchsize-number"},"batchsize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"150")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#isolationLevel-string"},"isolationLevel")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"NONE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#password-string"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#save_mode-string"},"save_mode")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"append")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#url-string"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#user-string"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#useSSL-boolean"},"useSSL")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"batchsize-number"},"batchsize ","[number]"),(0,l.kt)("p",null,"\u5199\u5165\u6279\u6b21\u5927\u5c0f"),(0,l.kt)("h5",{id:"isolationlevel-string"},"isolationLevel ","[string]"),(0,l.kt)("p",null,"Isolation level means whether do the resolve lock for the underlying tidb clusters."),(0,l.kt)("h5",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"\u5bc6\u7801"),(0,l.kt)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,l.kt)("p",null,"\u5b58\u50a8\u6a21\u5f0f\uff0c\u5f53\u524d\u652f\u6301overwrite\uff0cappend\uff0cignore\u4ee5\u53caerror\u3002\u6bcf\u4e2a\u6a21\u5f0f\u5177\u4f53\u542b\u4e49\u89c1",(0,l.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/2.2.0/sql-programming-guide.html#save-modes"},"save-modes")),(0,l.kt)("h5",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"\u8868\u540d"),(0,l.kt)("h5",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"JDBC\u8fde\u63a5\u7684URL\u3002\u53c2\u8003\u4e00\u4e2a\u6848\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://127.0.0.1:4000/test?rewriteBatchedStatements=true")),(0,l.kt)("h5",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"\u7528\u6237\u540d"),(0,l.kt)("h5",{id:"usessl-boolean"},"useSSL ","[boolean]"),(0,l.kt)("p",null,"useSSL"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/output-plugin"},"Output Plugin")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'tidb {\n    url = "jdbc:mysql://127.0.0.1:4000/test?useUnicode=true&characterEncoding=utf8"\n    table = "access"\n    user = "username"\n    password = "password"\n    save_mode = "append"\n}\n')))}m.isMDXComponent=!0}}]);
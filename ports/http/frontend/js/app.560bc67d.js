(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],f=0,v=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0793":function(t,e,n){},"1ecd":function(t,e,n){},"2cd4":function(t,e,n){"use strict";var r=n("c6e9"),i=n.n(r);i.a},"3a35":function(t,e,n){"use strict";var r=n("9c1f"),i=n.n(r);i.a},"42fb":function(t,e,n){},"6c6d":function(t,e,n){"use strict";var r=n("42fb"),i=n.n(r);i.a},"9c1f":function(t,e,n){},"9c55":function(t,e,n){"use strict";var r=n("1ecd"),i=n.n(r);i.a},"9d14":function(t,e,n){"use strict";var r=n("eaaa"),i=n.n(r);i.a},ab59:function(t,e,n){"use strict";var r=n("0793"),i=n.n(r);i.a},c6e9:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"container"},[n("router-view")],1)]),n("notifications",{staticClass:"notifications"})],1)},s=[],o=n("276c"),c=n("920b"),u=n("92a6"),l=n("9ab4"),f=n("1b40"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"notifications"},t._l(t.notifications,(function(e){return n("li",{key:e.id,staticClass:"notification",class:[e.class,t.shouldHide(e)?"hide":""]},[n("div",{staticClass:"text"},[t._v(" "+t._s(e.text)+" ")]),e.extra?n("div",{staticClass:"extra"},[t._v(" "+t._s(e.extra)+" ")]):t._e()])})),0)},d=[],h=(n("4de4"),n("a434"),n("e954")),p=r=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.notifications=[],t}return Object(h["a"])(n,[{key:"mounted",value:function(){var t=this;this.$root.$on(r.notificationEvent,(function(e){t.notifications.splice(0,0,e)})),this.intervalID=window.setInterval(this.processErrors,100)}},{key:"destroyed",value:function(){window.clearInterval(this.intervalID)}},{key:"shouldHide",value:function(t){var e=this.duration(new Date,t.created);return e>r.visibilityDuration}},{key:"processErrors",value:function(){var t=this;this.notifications=this.notifications.filter((function(e){var n=t.duration(new Date,e.created);return n<r.visibilityDuration+r.animationDuration}))}},{key:"duration",value:function(t,e){return(t.getTime()-e.getTime())/1e3}}],[{key:"pushError",value:function(t,e,n){var r=n&&n.response&&n.response.data&&n.response.data.message?n.response.data.message:null,i={id:this.notificationId++,class:"error",created:new Date,text:e,extra:r};t.$root.$emit(this.notificationEvent,i)}},{key:"pushSuccess",value:function(t,e){var n={id:this.notificationId++,class:"success",created:new Date,text:e,extra:null};t.$root.$emit(this.notificationEvent,n)}}]),n}(f["c"]);p.notificationEvent="eggplant_notification",p.notificationId=0,p.visibilityDuration=10,p.animationDuration=2,p=r=Object(l["a"])([f["a"]],p);var b=p,y=b,k=(n("2cd4"),n("2877")),j=Object(k["a"])(y,v,d,!1,null,"fa2d66b2",null),O=j.exports,m=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(f["c"]);m=Object(l["a"])([Object(f["a"])({components:{Notifications:O}})],m);var _,g=m,w=g,x=(n("9d14"),Object(k["a"])(w,a,s,!1,null,null,null)),C=x.exports,T=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"browse"},[n("div",{staticClass:"top-bar"},[n("a",{staticClass:"main-header",on:{click:t.onHeaderClick}},[t._v("Bolt UI")]),n("ul",t._l(t.selectedPath,(function(t){return n("li",{key:t.hex},[n("key",{attrs:{k:t}})],1)})),0)]),n("div",{staticClass:"wrapper"},[t._l(t.visibleTrees,(function(e){return n("entries",{key:t.treeKey(e),attrs:{entries:e.entries,selected:t.selectedInTree(e)},on:{entry:function(n){return t.onEntry(e,n)}}})})),t.selected?n("value",{attrs:{entry:t.selected}}):t._e()],2)])},$=[],S=(n("99af"),n("7db0"),n("4160"),n("c975"),n("a15b"),n("d81d"),n("d3b7"),n("159b"),n("ddb0"),n("d0ff")),P=n("2c4c"),D=n("bc3a"),I=n.n(D),M=n("fc11"),K=n("2f62");i["a"].use(K["a"]),function(t){t["SetToken"]="setToken"}(_||(_={}));var q=new K["a"].Store({state:{token:void 0},mutations:Object(M["a"])({},_.SetToken,(function(t,e){t.token=e}))}),H="Access-Token",F=function(){function t(e){var n=this;Object(o["a"])(this,t),this.vue=e,this.axios=I.a.create(),this.axios.interceptors.request.use((function(t){var e=n.vue.$store.state.token;return e&&(t.headers[H]=e),t}),(function(t){return Promise.reject(t)})),this.axios.interceptors.response.use((function(t){return t}),(function(t){return t.response&&401===t.response.status&&n.vue.$store.commit(_.SetToken,null),Promise.reject(t)}))}return Object(h["a"])(t,[{key:"browse",value:function(t,e,n){var r=t?"browse/".concat(t):"browse/";return this.axios.get("/api/"+r,{params:this.browseParams(e,n)})}},{key:"browseParams",value:function(t,e){if(t&&e)throw new Error("defined both before and after");return t?{before:t}:e?{after:e}:null}}]),t}(),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entries"},[n("ul",t._l(t.entries,(function(e){return n("li",{key:e.key.hex},[n("a",{class:{selected:t.selected===e},on:{click:function(n){return t.onClick(e)}}},[n("span",{staticClass:"icon"},[e.bucket?n("i",{staticClass:"fas fa-folder"}):n("i",{staticClass:"fas fa-file"})]),n("key",{attrs:{k:e.key}})],1)])})),0)])},J=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"key"},[t.k.str?n("span",[n("span",{staticClass:"decoration"},[t._v('"')]),t._v(t._s(t.k.str)),n("span",{staticClass:"decoration"},[t._v('"')])]):n("span",[n("span",{staticClass:"decoration"},[t._v("0x")]),t._v(t._s(t.k.hex)+" ")])])},U=[],A=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(f["c"]);Object(l["a"])([Object(f["b"])()],A.prototype,"k",void 0),A=Object(l["a"])([f["a"]],A);var B=A,Z=B,z=(n("3a35"),Object(k["a"])(Z,N,U,!1,null,"47160388",null)),G=z.exports,L=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(h["a"])(n,[{key:"onClick",value:function(t){this.$emit("entry",t)}}]),n}(f["c"]);Object(l["a"])([Object(f["b"])()],L.prototype,"entries",void 0),Object(l["a"])([Object(f["b"])()],L.prototype,"selected",void 0),L=Object(l["a"])([Object(f["a"])({components:{Key:G}})],L);var Q=L,R=Q,W=(n("9c55"),Object(k["a"])(R,V,J,!1,null,"72d295df",null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"value"},[n("div",{staticClass:"header"},[n("i",{staticClass:"fas fa-file"}),n("key",{attrs:{k:t.entry.key}}),n("div",{staticClass:"format-note"},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.formatTooltip,expression:"formatTooltip"}]},[t._v("("+t._s(t.format)+")")])])],1),t.entry.value?n("div",{staticClass:"value-string"},[t._v(" "+t._s(t.valueString)+" ")]):n("div",{staticClass:"value-empty"},[t._v(" This value is not set. ")])])},tt=[],et=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(h["a"])(n,[{key:"format",get:function(){return this.entry.value?this.entry.value.str?"string":"hex":"nil"}},{key:"formatTooltip",get:function(){return this.entry.value?this.entry.value.str?"Displaying the value as string.":"Display the bytes using hexadecimal encoding.":"The value is empty."}},{key:"valueString",get:function(){return this.entry.value?this.entry.value.str?this.entry.value.str:this.entry.value.hex:null}}]),n}(f["c"]);Object(l["a"])([Object(f["b"])()],et.prototype,"entry",void 0),et=Object(l["a"])([Object(f["a"])({components:{Key:G}})],et);var nt=et,rt=nt,it=(n("6c6d"),Object(k["a"])(rt,Y,tt,!1,null,"cbf7ae80",null)),at=it.exports,st=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.trees=[],t.selected=null,t.apiService=new F(Object(P["a"])(t)),t.numVisibleTrees=3,t}return Object(h["a"])(n,[{key:"created",value:function(){this.setToken(),this.load()}},{key:"treeKey",value:function(t){return t.path.map((function(t){return t.hex})).join("-")}},{key:"onHeaderClick",value:function(){this.load()}},{key:"onEntry",value:function(t,e){var n=this,r=this.trees.indexOf(t);if(r>=0&&(this.trees.length=r+1),this.selected=null,e.bucket){var i=[].concat(Object(S["a"])(t.path),[e.key]),a=i.map((function(t){return t.hex})).join("/");this.apiService.browse(a,null,null).then((function(t){n.trees.push(t.data)}),(function(t){O.pushError(n,"Could not query the backend.",t)}))}else this.selected=e}},{key:"selectedInTree",value:function(t){var e=this.trees.indexOf(t);if(e<0)return null;var n=this.selectedPath;return e>n.length-1?null:t.entries.find((function(t){return t.key.hex===n[e].hex}))}},{key:"setToken",value:function(){var t=this.$route.query.token;this.$store.commit(_.SetToken,t)}},{key:"load",value:function(){var t=this;this.trees=[],this.selected=null,this.apiService.browse(null,null,null).then((function(e){t.trees=[e.data]}),(function(e){O.pushError(t,"Could not query the backend.",e)}))}},{key:"selectedPath",get:function(){if(0===this.trees.length)return[];var t=Object(S["a"])(this.trees[this.trees.length-1].path);return this.selected&&t.push(this.selected.key),t}},{key:"visibleTrees",get:function(){var t=[],e=this.trees.length-this.numVisibleTrees;return this.selected&&e++,this.trees.forEach((function(n,r){r>=e&&t.push(n)})),t}}]),n}(f["c"]);st=Object(l["a"])([Object(f["a"])({components:{Entries:X,Value:at,Key:G}})],st);var ot=st,ct=ot,ut=(n("ab59"),Object(k["a"])(ct,E,$,!1,null,"5d93be83",null)),lt=ut.exports;i["a"].use(T["a"]);var ft=new T["a"]({mode:"history",base:"/",routes:[{path:"/*",name:"browse-children",component:lt},{path:"/",name:"browse",component:lt},{path:"*",redirect:{name:"browse"}}]}),vt=n("e37d"),dt=n("8682"),ht=(n("ac1f"),n("5319"),i["a"].filter("date",(function(t){return t=t.replace("T"," "),t=t.replace("Z"," UTC"),t}))),pt=i["a"].filter("distance",(function(t){return yt(t/1e3,1)+"km"})),bt=i["a"].filter("duration",(function(t){for(var e=["s","m","h","d"],n=[60,60,24],r=[],i=0;i<n.length;i++){var a=t/n[i];r.splice(0,0,[t%n[i],e[i]]),i===n.length-1&&r.splice(0,0,[a,e[i+1]]),t=a}return r.filter((function(t){return t[0]>=1})).filter((function(t,e){return e<2})).map((function(t){return Math.floor(t[0])+t[1]})).join(" ")}));function yt(t,e){var n=Math.pow(10,e||0);return Math.round(t*n)/n}i["a"].use(vt["a"]),i["a"].use(dt["a"],{}),i["a"].config.productionTip=!1,new i["a"]({router:ft,store:q,render:function(t){return t(C)},filters:{distanceFilter:pt,durationFilter:bt,dateFilter:ht}}).$mount("#app")},eaaa:function(t,e,n){}});
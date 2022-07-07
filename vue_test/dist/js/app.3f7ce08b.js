(function(){"use strict";var t={2706:function(t,e,n){var i=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("Banner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")]),n("button",{on:{click:t.back}},[t._v("后退")]),n("button",{on:{click:t.forward}},[t._v("前进")])])])},o=[],s={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()}}},u=s,c=n(1001),v=(0,c.Z)(u,l,o,!1,null,null,null),f=v.exports,p={name:"App",components:{Banner:f}},m=p,h=(0,c.Z)(m,r,a,!1,null,null,null),d=h.exports,_=n(2809),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},b=[],w={name:"About",beforeRouteEnter(t,e,n){console.log("come!"),t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("学校名不对，无权限查看！"):n()},beforeRouteLeave(t,e,n){console.log("Leave!"),n()}},y=w,x=(0,c.Z)(y,g,b,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])},$=[],E={name:"Home"},Z=E,O=(0,c.Z)(Z,C,$,!1,null,null,null),q=O.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("Hello, Vue")]),t._m(0),t._m(1),t._m(2)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news001 "),n("input")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news002 "),n("input")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news003 "),n("input")])}],H={name:"News",data(){return{opacity:1}},activated(){this.timer=setInterval((()=>{this.opacity-=.1,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){clearInterval(this.timer)}},L=H,B=(0,c.Z)(L,A,j,!1,null,null,null),I=B.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"xiangqing",query:{id:e.id,title:e.title}}}},[t._v(" "+t._s(e.title)+" ")]),t._v("   "),n("button",{on:{click:function(n){return t.push(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replace(e)}}},[t._v("replace查看")])],1)})),0),n("hr"),n("router-view")],1)},N=[],R={name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{push(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replace(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}},T=R,D=(0,c.Z)(T,M,N,!1,null,null,null),P=D.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号："+t._s(t.id))]),n("li",[t._v("消息标题："+t._s(t.title))])])},z=[],F={name:"Details",props:["id","title"]},S=F,G=(0,c.Z)(S,V,z,!1,null,"31b3c207",null),J=G.exports;const K=new _.Z({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:q,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:I,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:P,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"details/:id/:title",component:J,props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});K.afterEach(((t,e)=>{document.title=t.meta.title||"未知标签"}));var Q=K;i.Z.config.productionTip=!1,i.Z.use(_.Z),new i.Z({el:"#app",render:t=>t(d),router:Q})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,a){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],a=t[c][2];for(var o=!0,s=0;s<i.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(o=!1,a<l&&(l=a));if(o){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,l=i[0],o=i[1],s=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(s)var c=s(n)}for(e&&e(i);u<l.length;u++)a=l[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2706)}));i=n.O(i)})();
//# sourceMappingURL=app.3f7ce08b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d394dd0"],{"97b4":function(t,c,n){"use strict";n.r(c);var e=function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"collect"},[n("van-nav-bar",{attrs:{title:"我的收藏","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("ul",t._l(t.collectList,(function(c,e){return n("li",{key:e,staticClass:"border-bottom",on:{click:function(c){return t.collectDetail()}}},[n("p",[n("img",{attrs:{src:c.teachersAvatar,alt:""}})]),n("div",[n("div",[n("p",{staticClass:"title"},[n("span",[t._v("券")]),n("span",[t._v(t._s(c.title))])]),n("p",{staticClass:"gray"},[t._v(t._s(c.section_num)+"人已报名")])]),n("p",{staticClass:"red"},[t._v("￥"+t._s(c.price))])])])})),0)],1)},i=[],l=n("7b12"),s={data:function(){return{collectList:[]}},mounted:function(){var t=this;Object(l["b"])({page:1,limit:10,type:1}).then((function(c){console.log(c),t.collectList=c.list}))},methods:{onClickLeft:function(){this.$router.go(-1)},collectDetail:function(){}}},a=s,o=(n("b004"),n("2877")),r=Object(o["a"])(a,e,i,!1,null,"81889ab8",null);c["default"]=r.exports},b004:function(t,c,n){"use strict";n("dad8")},dad8:function(t,c,n){}}]);
//# sourceMappingURL=chunk-6d394dd0.bed36af6.js.map
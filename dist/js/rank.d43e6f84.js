(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rank"],{3871:function(t,e,s){},"5a98":function(t,e,s){"use strict";var i=s("3871"),n=s.n(i);n.a},"65fe":function(t,e,s){},"76f3":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-bar"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:t.placeholder,readonly:""},on:{click:t.clickInput}}),s("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-sousuo"}})])])},n=[],a=s("cebc"),o=(s("cadf"),s("551c"),s("097d"),s("2f62")),c={name:"",components:{},props:{placeholder:{type:String,default:"搜歌手，搜歌曲"}},data:function(){return{}},watch:{},computed:Object(a["a"])({},Object(o["c"])(["showFooter","query"])),methods:{clickInput:function(){this.$router.push({path:"/search"})}}},r=c,l=(s("a007"),s("2877")),u=Object(l["a"])(r,i,n,!1,null,"3798c977",null);u.options.__file="SearchNav.vue";e["a"]=u.exports},"948d3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"rank"},[s("search-bar"),s("div",{staticClass:"rank-list-wrapper"},[s("rank-list",{ref:"rankList",attrs:{topList:t.topList},on:{selectTopList:t.chooseItem}})],1),s("router-view",{ref:"musicList",attrs:{title:t.title,songs:t.songs,picUrl:t.picUrl,id:t.id},on:{select:t.selectItem,play:t.playAll}})],1)])},n=[],a=(s("ac6a"),s("cebc")),o=(s("7f7f"),s("ed08")),c=s("d225"),r=s("b0b4"),l=s("e1d2"),u=function(){function t(){Object(c["a"])(this,t)}return Object(r["a"])(t,null,[{key:"getTopList",value:function(){return Object(l["a"])("topList")}},{key:"getTopListDetail",value:function(t){return Object(l["a"])("topListDetail",{params:{idx:t}})}}]),t}(),p=u,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Scroll",{staticClass:"rank-list",attrs:{data:t.topList}},[s("ul",{staticClass:"list-wrapper"},t._l(t.topList,function(e){return s("li",{key:e.id,staticClass:"list border-bottom",on:{click:function(s){t.selectTopList(e)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.coverImgUrl,expression:"item.coverImgUrl"}],staticClass:"pic",attrs:{alt:""}}),s("div",{staticClass:"updateFrequency"},[t._v(t._s(e.updateFrequency))]),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.tracks.length,expression:"item.tracks.length"}],staticClass:"song-list"},t._l(e.tracks,function(e,i){return s("li",{key:e.first,staticClass:"song"},[t._v("\n          "+t._s(i+1)+"."+t._s(e.first)+"-"+t._s(e.second)+"\n        ")])}),0)])}),0)])},d=[],h=s("3ce5"),m={name:"",components:{Scroll:h["a"]},props:{topList:{type:Array,default:function(){return[]}}},data:function(){return{}},watch:{},computed:{},methods:{selectTopList:function(t){this.$emit("selectTopList",t)}},created:function(){},mounted:function(){}},L=m,v=(s("e356"),s("2877")),g=Object(v["a"])(L,f,d,!1,null,"260b14e9",null);g.options.__file="RankList.vue";var b=g.exports,k=s("2f62"),y=s("76f3"),_=["云音乐新歌榜","云音乐热歌榜","网易原创歌曲榜","云音乐飙升榜","云音乐电音榜","UK排行榜周榜","美国Billboard周榜","KTV嗨榜","iTunes榜","Hit FM Top榜","日本Oricon周榜","韩国Melon排行榜周榜","韩国Mnet排行榜周榜","韩国Melon原声周榜","中国TOP排行榜(港台榜)","中国TOP排行榜(内地榜)","香港电台中文歌曲龙虎榜","华语金曲榜","中国嘻哈榜","法国 NRJ EuroHot 30周榜","台湾Hito排行榜","Beatport全球电子舞曲榜","云音乐ACG音乐榜","云音乐嘻哈榜"],T={name:"rank",components:{RankList:b,SearchBar:y["a"]},props:{},data:function(){return{topList:[],songs:[],topDetailList:[]}},watch:{},computed:{title:function(){return this.topDetailList.name},picUrl:function(){return this.topDetailList.coverImgUrl},id:function(){return this.topDetailList.id}},methods:Object(a["a"])({},Object(k["b"])(["selectPlay","randomPlay"]),Object(k["d"])({setLoading:"SET_LOADING"}),{getTopList:function(){var t=this;p.getTopList().then(function(e){t.setLoading(!1),t.setTopList(e)})},setTopList:function(t){var e=t.list,s=[];e.forEach(function(t){_.forEach(function(e){t.name===e&&s.push(t)})}),this.topList=s},chooseItem:function(t){for(var e=0,s=0;s<_.length;s++)t.name===_[s]&&(e=s);this.getTopListDetail(e),this.$router.push({path:"/rank/".concat(t.id)})},getTopListDetail:function(t){var e=this;this.setLoading(!0),p.getTopListDetail(t).then(function(t){e.setLoading(!1),e.topDetailList=t.playlist;var s=e.topDetailList.tracks;e.songs=e.normalizeSongs(s)})},normalizeSongs:function(t){var e=[];return t.forEach(function(t){e.push(Object(o["c"])(t))}),e},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},playAll:function(){this.randomPlay({list:this.songs})}}),activated:function(){this.$refs.rankList.$children[0].refresh()},created:function(){this.setLoading(!0),this.getTopList()},mounted:function(){}},w=T,O=(s("5a98"),Object(v["a"])(w,i,n,!1,null,"34e5d596",null));O.options.__file="index.vue";e["default"]=O.exports},a007:function(t,e,s){"use strict";var i=s("65fe"),n=s.n(i);n.a},e356:function(t,e,s){"use strict";var i=s("f89c"),n=s.n(i);n.a},f89c:function(t,e,s){}}]);
//# sourceMappingURL=rank.d43e6f84.js.map
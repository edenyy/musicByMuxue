(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"0e0f":function(t,e,s){},"214f":function(t,e,s){"use strict";s("b0c5");var i=s("2aba"),n=s("32e9"),a=s("79e5"),r=s("be13"),o=s("2b4c"),c=s("520a"),l=o("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,e,s){var f=o(t),d=!a(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),v=d?!a(function(){var e=!1,s=/a/;return s.exec=function(){return e=!0,null},"split"===t&&(s.constructor={},s.constructor[l]=function(){return s}),s[f](""),!e}):void 0;if(!d||!v||"replace"===t&&!u||"split"===t&&!h){var g=/./[f],m=s(r,f,""[t],function(t,e,s,i,n){return e.exec===c?d&&!n?{done:!0,value:g.call(e,s,i)}:{done:!0,value:t.call(s,e,i)}:{done:!1}}),p=m[0],b=m[1];i(String.prototype,t,p),n(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28e1":function(t,e,s){"use strict";var i=s("0e0f"),n=s.n(i);n.a},"386d":function(t,e,s){"use strict";var i=s("cb7c"),n=s("83a1"),a=s("5f1b");s("214f")("search",1,function(t,e,s,r){return[function(s){var i=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,i):new RegExp(s)[e](String(i))},function(t){var e=r(s,t,this);if(e.done)return e.value;var o=i(t),c=String(this),l=o.lastIndex;n(l,0)||(o.lastIndex=0);var u=a(o,c);return n(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]})},4160:function(t,e,s){"use strict";var i=s("a38e"),n=s.n(i);n.a},"512b":function(t,e,s){"use strict";var i=s("d225"),n=s("b0b4"),a=s("e1d2"),r=function(){function t(){Object(i["a"])(this,t)}return Object(n["a"])(t,null,[{key:"singer",value:function(){return Object(a["a"])("artist",{})}},{key:"getSingerDetail",value:function(t){return Object(a["a"])("singerDetail",{params:{id:t}})}}]),t}();e["a"]=r},"520a":function(t,e,s){"use strict";var i=s("0bfb"),n=RegExp.prototype.exec,a=String.prototype.replace,r=n,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(r=function(t){var e,s,r,u,h=this;return l&&(s=new RegExp("^"+h.source+"$(?!\\s)",i.call(h))),c&&(e=h[o]),r=n.call(h,t),c&&r&&(h[o]=h.global?r.index+r[0].length:e),l&&r&&r.length>1&&a.call(r[0],s,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),t.exports=r},"5dff":function(t,e,s){"use strict";var i=s("e415"),n=s.n(i);n.a},"5f1b":function(t,e,s){"use strict";var i=s("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var a=s.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},7978:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"pop-menu",on:{click:[t.hide,function(t){t.stopPropagation()}]}},[s("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[s("Scroll",{ref:"listContent",staticClass:"list-content",attrs:{data:t.scrollData}},[s("div",{staticClass:"item-wrapper"},[s("div",{staticClass:"header  item border-bottom",on:{click:t.play}},[t._v("\n            歌曲："+t._s(t.song.name)+"\n          ")]),s("div",{staticClass:"next-play item border-bottom",on:{click:t.playNext}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),t._v("下一首播放\n          ")]),s("div",{staticClass:"like item border-bottom",on:{click:function(e){t.toggleFavorite(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.getFavoriteIcon(t.song)}})]),t._v("喜欢\n          ")]),s("div",{staticClass:"singer item border-bottom",on:{click:function(e){t.toSinger(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-user"}})]),t._v("歌手："+t._s(t.song.singer)+"\n          ")]),s("div",{staticClass:"singer item border-bottom"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-album"}})]),t._v("专辑："+t._s(t.song.album)+"\n          ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"delete item border-bottom",on:{click:function(e){t.deleteOne(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})]),t._v("删除\n          ")])])])],1)])])},n=[],a=s("cebc"),r=s("3ce5"),o=s("0712"),c=s("2f62"),l={name:"popMenu",components:{Scroll:r["a"]},mixins:[o["a"]],props:{showDelete:{type:Boolean,default:!1}},data:function(){return{isShow:!1,song:[]}},watch:{},computed:{scrollData:function(){var t=[this.song];return t}},methods:Object(a["a"])({},Object(c["b"])(["setTips"]),{show:function(t){this.isShow=!0,this.song=t},hide:function(){this.isShow=!1},playNext:function(){this.$emit("nextPlay",this.song),this.setTips("已经将一首歌曲添加到播放队列")},play:function(){this.$emit("playNow",this.song)},deleteOne:function(t){this.hide(),this.$emit("deleteOne",t),this.setTips("已经删除一首歌曲啦")}}),created:function(){},mounted:function(){}},u=l,h=(s("cf63"),s("2877")),f=Object(h["a"])(u,i,n,!1,null,"3221c0c0",null);f.options.__file="PopMenu.vue";e["a"]=f.exports},"79ce":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("search-bar",{ref:"searchbar"}),s("Scroll",{ref:"list",staticClass:"shortcut",attrs:{data:t.shortCut}},[s("div",[s("h3",{staticClass:"title"},[t._v("热门搜索")]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],staticClass:"hots border-bottom"},t._l(t.hots,function(e){return s("div",{key:e.first,staticClass:"hot",on:{click:function(s){t.setQuery(e.first)}}},[t._v("\n          "+t._s(e.first)+"\n        ")])}),0),s("History",{directives:[{name:"show",rawName:"v-show",value:!t.query&&t.searchHistory&&t.searchHistory.length>0,expression:"!query && searchHistory && searchHistory.length > 0"}],on:{selectItem:t.setQuery,deleteOne:t.deleteSearchHistory,deleteAll:t.showConfirm}})],1)]),s("Suggest",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],on:{handleAlbum:t.getAlbum,handleSinger:t.getSinger,handleSong:t.setSong}}),s("transition",{attrs:{name:"slide-left"}},[s("router-view",{ref:"musicList",attrs:{title:t.title,songs:t.songsList,picUrl:t.picUrl,id:t.id},on:{select:t.selectItem}})],1),s("Confirm",{ref:"confirm",attrs:{text:"确定要清空所有搜索历史吗"},on:{deleteAll:t.deleteAllSearchHistory}})],1)},n=[],a=(s("ac6a"),s("7f7f"),s("cebc")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-bar"},[s("svg",{staticClass:"icon back",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.hideSearch(e)}}},[s("use",{attrs:{"xlink:href":"#icon-left"}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.queryArg,expression:"queryArg"}],ref:"input",staticClass:"input",attrs:{type:"text",placeholder:t.placeholder,autofocus:""},domProps:{value:t.queryArg},on:{input:function(e){e.target.composing||(t.queryArg=e.target.value)}}}),t.query?s("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"},on:{click:t.deleteQuery}},[s("use",{attrs:{"xlink:href":"#icon-close"}})]):s("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-sousuo"}})])])},o=[],c=s("2f62"),l={name:"",components:{},props:{placeholder:{type:String,default:"搜歌手，搜歌曲"}},data:function(){return{queryArg:""}},watch:{},computed:Object(a["a"])({},Object(c["c"])(["showFooter","query"])),methods:Object(a["a"])({},Object(c["d"])({setShowSearch:"SET_SHOW_SEARCH",setQuery:"SET_QUERY",setShowFooter:"SET_SHOW_FOOTER"}),{hideSearch:function(){this.setQuery(""),this.$router.go(-1)},deleteQuery:function(){this.setQuery("")}}),created:function(){var t=this;this.$watch("queryArg",function(e){t.setQuery(e)}),this.$watch("query",function(e){t.queryArg=e})}},u=l,h=(s("4160"),s("2877")),f=Object(h["a"])(u,r,o,!1,null,"5e624450",null);f.options.__file="SearchBar.vue";var d=f.exports,v=s("d225"),g=s("b0b4"),m=s("e1d2"),p=function(){function t(){Object(v["a"])(this,t)}return Object(g["a"])(t,null,[{key:"getHotSearch",value:function(){return Object(m["a"])("hotSearch")}},{key:"getSuggest",value:function(t){return Object(m["a"])("suggest",{params:{keywords:t}})}},{key:"getAlbumDetail",value:function(t){return Object(m["a"])("album",{params:{id:t}})}}]),t}(),b=p,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suggest"},[s("Scroll",{ref:"list",staticClass:"scroll-wrapper",attrs:{data:t.allData}},[s("div",{staticClass:"list-detail"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.album&&t.album.length>0,expression:"album && album.length > 0"}],staticClass:"album"},[s("ul",{staticClass:"list"},[s("h3",{staticClass:"title"},[t._v("专辑")]),t._l(t.album,function(e){return s("li",{key:e.albumId,staticClass:"item border-bottom",on:{click:function(s){t.selectAlbum(e)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"img",attrs:{alt:""}}),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[t._v("专辑："+t._s(e.name))]),s("div",{staticClass:"singer"},[t._v(t._s(e.singer))])])])})],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.artists&&t.artists.length>0,expression:"artists && artists.length > 0"}],staticClass:"artists"},[s("ul",{staticClass:"list"},[s("h3",{staticClass:"title"},[t._v("歌手")]),t._l(t.artists,function(e){return s("li",{key:e.id,staticClass:"item border-bottom",on:{click:function(s){t.selectSinger(e)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"img",attrs:{alt:""}}),s("div",{staticClass:"singer"},[t._v("歌手："+t._s(e.singer))])])})],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.songs&&t.songs.length>0,expression:"songs && songs.length > 0"}],staticClass:"songs"},[s("ul",{ref:"wrapper",staticClass:"song-list"},[s("h3",{staticClass:"title"},[t._v("歌曲")]),t._l(t.songs,function(e,i){return s("li",{key:e.id,staticClass:"song border-bottom",on:{click:function(s){t.selectSong(e)}}},[s("div",{staticClass:"number"},[t._v(t._s(i+1))]),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"singer"},[t._v("\n                "+t._s(e.singer)+" "),s("span",{staticClass:"album"},[t._v("-"+t._s(e.album))])])]),s("svg",{staticClass:"icon i-switch",attrs:{"aria-hidden":"true"},on:{click:function(s){s.stopPropagation(),t.showPopOver(e)}}},[s("use",{attrs:{"xlink:href":"#icon-switch"}})])])})],2),s("pop-menu",{ref:"popMenu",on:{nextPlay:t.nextPlay,playNow:t.nowPlay}})],1)])])],1)},w=[],x=(s("386d"),s("3ce5")),S=s("0712"),C=s("7978"),_={name:"",components:{Scroll:x["a"],PopMenu:C["a"]},mixins:[S["b"],S["c"]],props:{},data:function(){return{page:1,album:[],artists:[],songs:[]}},watch:{query:function(t){""!==t&&this.search(t)}},computed:Object(a["a"])({},Object(c["c"])(["query"]),{allData:function(){return this.album.concat(this.artists,this.songs)}}),methods:{selectAlbum:function(t){this.$emit("handleAlbum",t)},selectSinger:function(t){this.$emit("handleSinger",t)},selectSong:function(t){this.$emit("handleSong",t)},search:function(t){var e=this;b.getSuggest(t).then(function(t){var s,i=t.result;s=i.albums&&i.albums[0].artist.picUrl?i.albums[0].artist.picUrl:"https://ws2.sinaimg.cn/large/006tNbRwly1fy54tapw58j30yl0u0h16.jpg",i.albums&&i.albums.length>0&&e.setAlbum(i.albums),i.artists&&i.artists.length>0&&e.setArtist(i.artists),i.songs&&i.songs.length>0&&e.setSongs(i.songs,s)})},setAlbum:function(t){var e=this;this.album=[],t.forEach(function(t){var s=t.id,i=t.name,n=t.artist.name,a=t.artist.picUrl;e.album.push({id:s,name:i,singer:n,picUrl:a})})},setArtist:function(t){var e=this;this.artists=[],t.forEach(function(t){var s=t.id,i=t.name,n=t.picUrl;e.artists.push({id:s,singer:i,picUrl:n})})},setSongs:function(t,e){var s=this;this.songs=[],t.forEach(function(t){var i=t.id,n=t.name,a=t.artists[0].name,r=t.album.name;s.songs.push({id:i,name:n,singer:a,picUrl:e,album:r})})}},created:function(){},mounted:function(){}},k=_,O=(s("b652"),Object(h["a"])(k,y,w,!1,null,"7aa24842",null));O.options.__file="Suggest.vue";var j=O.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history"},[s("h3",{staticClass:"title"},[t._v("搜索历史")]),s("p",{staticClass:"delete",on:{click:function(e){return e.stopPropagation(),t.deleteAll(e)}}},[t._v("清空历史")]),s("transition-group",{staticClass:"list",attrs:{tag:"ul",name:"list"}},t._l(t.searchHistory,function(e){return s("li",{key:e,staticClass:"item border-bottom",on:{click:function(s){t.selectItem(e)}}},[s("span",{staticClass:"text"},[t._v(t._s(e))]),s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(s){s.stopPropagation(),t.deleteHistoryItem(e)}}},[s("use",{attrs:{"xlink:href":"#icon-close"}})])])}),0)],1)},E=[],H={name:"",components:{},props:{},data:function(){return{}},watch:{},computed:Object(a["a"])({},Object(c["c"])(["searchHistory"])),methods:{deleteHistoryItem:function(t){this.$emit("deleteOne",t)},selectItem:function(t){this.$emit("selectItem",t)},deleteAll:function(){this.$emit("deleteAll")}},created:function(){},mounted:function(){}},q=H,$=(s("28e1"),Object(h["a"])(q,A,E,!1,null,"4ae9ea16",null));$.options.__file="History.vue";var D=$.exports,N=s("512b"),U=s("ed08"),I=s("a32c"),P={name:"Search",components:{SearchBar:d,Suggest:j,History:D,Confirm:I["a"],Scroll:x["a"]},mixins:[S["b"]],props:{},data:function(){return{hots:[],songsList:[],list:{}}},watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.list.refresh()},20)}},computed:Object(a["a"])({},Object(c["c"])(["query","searchHistory"]),{title:function(){return this.list.name},picUrl:function(){return this.list.picUrl},id:function(){return this.list.id},shortCut:function(){return this.hots.concat(this.searchHistory)}}),methods:Object(a["a"])({},Object(c["d"])({setQuery:"SET_QUERY"}),Object(c["b"])(["randomPlay","insertSong","insertSongNext","saveSearchHistory","deleteSearchHistory","deleteAllSearchHistory"]),{showConfirm:function(){this.$refs.confirm.show()},getAlbumDetail:function(t){var e=this;b.getAlbumDetail(t).then(function(s){var i=s.songs;e.setDetail(i,t)})},getDeatil:function(t){var e=this;N["a"].getSingerDetail(t).then(function(s){var i=s.hotSongs;e.setDetail(i,t)})},setDetail:function(t,e){this.songsList=this.normalizeSongs(t),this.$router.push({path:"/search/".concat(e)})},normalizeSongs:function(t){var e=[];return t.forEach(function(t){e.push(Object(U["c"])(t))}),e},getAlbum:function(t){this.saveSearchHistory(this.query),this.list=t;var e=t.id;this.getAlbumDetail(e)},getSinger:function(t){this.saveSearchHistory(this.query),this.list=t;var e=t.id;this.getDeatil(e)},setSong:function(t){this.saveSearchHistory(this.query),this.insertSong(t)},selectItem:function(t){this.insertSong(t)}}),created:function(){var t=this;b.getHotSearch().then(function(e){t.hots=e.result.hots})},mounted:function(){}},R=P,Q=(s("5dff"),Object(h["a"])(R,i,n,!1,null,"a1174af8",null));Q.options.__file="index.vue";e["default"]=Q.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8f80":function(t,e,s){},a38e:function(t,e,s){},b0c5:function(t,e,s){"use strict";var i=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b652:function(t,e,s){"use strict";var i=s("8f80"),n=s.n(i);n.a},cf63:function(t,e,s){"use strict";var i=s("e34f"),n=s.n(i);n.a},e34f:function(t,e,s){},e415:function(t,e,s){}}]);
//# sourceMappingURL=search.9cc2f6a6.js.map
(function(t){function e(e){for(var s,n,o=e[0],c=e[1],d=e[2],l=0,u=[];l<o.length;l++)n=o[l],r[n]&&u.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a7c810a9"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"5de9f841"}[t]+".css",r=c.p+s,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var d=i[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===s||l===r))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){d=u[o],l=d.getAttribute("data-href");if(l===s||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.request=s,delete n[t],m.parentNode.removeChild(m),a(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){n[t]=0}));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise(function(e,a){s=r[t]=[e,a]});e.push(s[2]=i);var d,l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),d=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");i.type=s,i.request=n,a[1](i)}r[t]=void 0}};var m=setTimeout(function(){d({type:"timeout",target:u})},12e4);u.onerror=u.onload=d,l.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/battle-cardz/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"1acb":function(t,e,a){t.exports=a.p+"img/7fdf9b_5461819.8923c536.jpg"},"52e0":function(t,e,a){},5580:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("034f"),a("2877")),o={},c=Object(i["a"])(o,n,r,!1,null,null,null);c.options.__file="App.vue";var d=c.exports,l=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("div",{staticClass:"home"},[a("h1",[t._v("Battle Cardz")]),a("div",[a("button",{staticClass:"btn btn-outline-primary btn-width",attrs:{type:"button"},on:{click:t.makeGame},model:{value:t.gameConfig.set=2,callback:function(e){t.$set(t.gameConfig,"set = 2",e)},expression:"gameConfig.set = 2"}},[t._v("DECK\n        1 (easy)")])]),a("div",[a("button",{staticClass:"btn btn-outline-primary btn-width",attrs:{type:"button"},on:{click:t.makeGame},model:{value:t.gameConfig.set=3,callback:function(e){t.$set(t.gameConfig,"set = 3",e)},expression:"gameConfig.set = 3"}},[t._v("DECK\n        2 (medium)")])]),a("div",[a("button",{staticClass:"btn btn-outline-primary btn-width",attrs:{type:"button"},on:{click:t.makeGame},model:{value:t.gameConfig.set=4,callback:function(e){t.$set(t.gameConfig,"set = 4",e)},expression:"gameConfig.set = 4"}},[t._v("DECK\n        3 (medium)")])]),a("div",[a("button",{staticClass:"btn btn-outline-danger btn-width",attrs:{type:"button"},on:{click:t.makeGame},model:{value:t.gameConfig.set=1,callback:function(e){t.$set(t.gameConfig,"set = 1",e)},expression:"gameConfig.set = 1"}},[t._v("DECK\n        4 (hard)")])])])])},m=[],p={name:"home",data(){return{gameConfig:{playerName:"player 1",set:""}}},components:{},methods:{getGames(){this.$store.dispatch("getGames")},makeGame(){this.$store.dispatch("makeGame",this.gameConfig)}},computed:{games(){return this.$store.state.games},game(){return this.$store.state.game}}},g=p,f=(a("cccb"),Object(i["a"])(g,u,m,!1,null,null,null));f.options.__file="Home.vue";var h=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game container-fluid bg"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-outline-secondary d-flex lefted",attrs:{type:"button"},on:{click:t.homePage}},[t._v("Home")])])]),a("opponentHand",{staticClass:"row"}),t.ready()?a("div",[t.game.opponent.dead||t.game.player.dead?t._e():a("button",{staticClass:"btn btn-primary battle-button",on:{click:t.battle}},[t._v("Battle")])]):t._e(),t.game.opponent.dead&&t.game.player.dead?a("div",{staticClass:"hand-text"},[t._m(0)]):t._e(),t.game.opponent.dead&&!t.game.player.dead?a("div",{staticClass:"hand-text"},[t._m(1)]):t._e(),!t.game.opponent.dead&&t.game.player.dead?a("div",{staticClass:"hand-text"},[t._m(2)]):t._e(),a("playerHand",{staticClass:"row"})],1)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("i",{staticClass:"fas fa-balance-scale"}),t._v(" Draw"),a("i",{staticClass:"fas fa-balance-scale"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Victory "),a("i",{staticClass:"fas fa-fist-raised"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("i",{staticClass:"fas fa-skull-crossbones"}),t._v(" Defeated "),a("i",{staticClass:"fas fa-skull-crossbones"})])}],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.game.id?s("div",{staticClass:"opponentHand justify-content-center"},[s("div",{staticClass:"col-3 centered"},[s("p",[t._v("Cards in Deck: "+t._s(t.getOpponent.remainingCards))])]),s("div",{staticClass:"col-6 centered2"},[t.getOpponent.hand.length?s("h3",{staticClass:"hand-text"},[t._v("Opponent's Hand")]):t._e()]),s("div",{staticClass:"col-3 centered"},[s("p",[t._v("Cards in graveyard: "+t._s(t.getOpponent.deadCards.length))])]),t._l(t.getOpponent.hand,function(e){return s("div",{staticClass:"col-2",on:{click:function(e){t.attackedCard(t.active.cardId)}}},[s("div",{staticClass:"card text-white bg-dark mb-3",class:{"border-success my-border":e.id==t.active.cardId},staticStyle:{"max-width":"20rem"},on:{click:function(a){t.active.cardId=e.id}}},[s("div",{staticClass:"card-body"},[e.visible?s("div",{staticClass:"card-text right"},[t._v(t._s(e.name))]):t._e(),e.visible?t._e():s("img",{staticClass:"card-img",attrs:{src:a("1acb")}}),e.visible?s("img",{staticClass:"card-img",attrs:{src:e.img}}):t._e(),s("div",{staticClass:"right d-flex justify-content-around align-items-center"},[e.visible?s("div",{staticClass:"card-text right"},[s("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(e.health))]):t._e(),e.visible?s("div",{staticClass:"card-text right"},[s("i",{staticClass:"fas fa-shield-alt"}),t._v(" "+t._s(e.defense))]):t._e(),e.visible?s("div",{staticClass:"card-text right"},[s("img",{staticClass:"pic",attrs:{src:a("f255")}}),t._v("\n            "+t._s(e.attack)+" ")]):t._e()])])])])})],2):t._e()},_=[],y={name:"opponentHand",data(){return{active:{cardId:""}}},props:["hand"],computed:{getOpponent(){return console.log(this.$store.state.game.opponent.hand),this.$store.state.game.opponent},game(){return this.$store.state.game}},methods:{attackedCard(t){this.$store.dispatch("attackedCard",t)}}},k=y,x=(a("c5eb"),Object(i["a"])(k,C,_,!1,null,null,null));x.options.__file="opponentHand.vue";var $=x.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.game.id?s("div",{staticClass:"playerHand align-items-end justify-content-center"},[s("div",{staticClass:"col-3 centered"},[s("p",[t._v("Cards in Deck: "+t._s(t.getPlayer.remainingCards))])]),s("div",{staticClass:"col-6 centered2"},[t.getPlayer.hand.length?s("h3",{staticClass:"hand-text player-hand"},[t._v("Your Hand")]):t._e()]),s("div",{staticClass:"col-3 centered "},[s("p",[t._v("Cards in graveyard: "+t._s(t.getPlayer.deadCards.length))])]),t._l(t.getPlayer.hand,function(e){return s("div",{staticClass:"col-2",on:{click:function(e){t.testAttack(t.active.cardId)}}},[s("div",{staticClass:"card text-white bg-dark mb-3",class:{"border-success my-border":e.id==t.active.cardId},staticStyle:{"max-width":"20rem"},on:{click:function(a){t.active.cardId=e.id}}},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-text right"},[t._v(t._s(e.name))]),s("img",{staticClass:"card-img",attrs:{src:e.img}}),s("div",{staticClass:"right d-flex justify-content-around align-items-center"},[s("div",{staticClass:"card-text right"},[s("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(e.health))]),s("div",{staticClass:"card-text right"},[s("i",{staticClass:"fas fa-shield-alt"}),t._v(" "+t._s(e.defense))]),s("div",{staticClass:"card-text right"},[s("img",{staticClass:"pic",attrs:{src:a("f255")}}),t._v(" "+t._s(e.attack)+" ")])]),s("div")])])])})],2):t._e()},I=[],O={name:"playerHand",data(){return{active:{cardId:""}}},computed:{getPlayer(){return console.log(this.$store.state.game.player.hand),this.$store.state.game.player},game(){return this.$store.state.game}},methods:{testAttack(t){this.$store.dispatch("playerCard",t)}}},j=O,E=(a("d19c"),Object(i["a"])(j,w,I,!1,null,null,null));E.options.__file="playerHand.vue";var G=E.exports,P={name:"game",data(){return{tie:{}}},computed:{game(){return this.$store.state.game},cards(){return{playerCardId:this.$store.state.playerCardId,opponentCardId:this.$store.state.opponentCardId}}},methods:{playBall(){console.log(this.cards)},ready(){return this.cards.playerCardId.length>1&&this.cards.opponentCardId.length>1},battle(){this.$store.dispatch("battle",{gameId:this.$route.params.gameId,cardIds:this.cards})},homePage(){this.$store.dispatch("home")}},components:{opponentHand:$,playerHand:G},mounted(){this.game.id||this.$store.dispatch("getGameId",this.$route.params.gameId)}},H=P,S=(a("805e"),Object(i["a"])(H,v,b,!1,null,null,null));S.options.__file="game.vue";var A=S.exports;s["a"].use(l["a"]);var D=new l["a"]({routes:[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/:gameId",name:"game",component:A}]}),T=a("2f62"),B=a("bc3a"),N=a.n(B);let K=N.a.create({baseURL:"https://battlecardz.herokuapp.com/api/games",timeout:3e3});s["a"].use(T["a"]);var M=new T["a"].Store({state:{games:[],game:{},playerCardId:"",opponentCardId:""},mutations:{setGames(t,e){t.games=e},setGame(t,e){t.game=e,console.log(t.game)},setPlayerCard(t,e){t.playerCardId=e},setOpponentCard(t,e){t.opponentCardId=e}},actions:{getGames({commit:t}){K.get("").then(e=>{t("setGames",e.data)})},getGameId({commit:t},e){K.get("/"+e).then(e=>{t("setGame",e.data.data)})},makeGame({commit:t},e){K.post("",e).then(e=>{t("setGame",e.data.game),D.push({name:"game",params:{gameId:e.data.game.id}})})},battle({commit:t},e){K.put("/"+e.gameId,e.cardIds).then(e=>{t("setGame",e.data.game)})},playerCard({commit:t},e){t("setPlayerCard",e)},attackedCard({commit:t},e){t("setOpponentCard",e)},home(){D.push({name:"home"})}}});new s["a"]({router:D,store:M,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,a){},"805e":function(t,e,a){"use strict";var s=a("5580"),n=a.n(s);n.a},c5eb:function(t,e,a){"use strict";var s=a("52e0"),n=a.n(s);n.a},cccb:function(t,e,a){"use strict";var s=a("d563"),n=a.n(s);n.a},d066:function(t,e,a){},d19c:function(t,e,a){"use strict";var s=a("d066"),n=a.n(s);n.a},d563:function(t,e,a){},f255:function(t,e,a){t.exports=a.p+"img/gladius.4b27c564.png"}});
//# sourceMappingURL=app.8782e939.js.map
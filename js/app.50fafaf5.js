(function(){"use strict";var e={3990:function(e,n,o){var a=o(9242),t=o(3396);function i(e,n,o,a,i,r){const s=(0,t.up)("WeatherApp");return(0,t.wg)(),(0,t.j4)(s)}const r={id:"card"};function s(e,n,o,a,i,s){const d=(0,t.up)("BarraPesquisa"),c=(0,t.up)("CardPrincipal"),u=(0,t.up)("FooterVue");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(d,{onShowProvince:s.showProvince},null,8,["onShowProvince"]),(0,t._)("div",r,[(0,t.Wm)(c,{dados:i.dados1},null,8,["dados"]),i.province?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(c,{key:0,dados:i.dados2},null,8,["dados"])),i.province?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(c,{key:1,dados:i.dados3},null,8,["dados"]))]),(0,t.Wm)(u)],64)}const d=e=>((0,t.dD)("data-v-08809d1c"),e=e(),(0,t.Cn)(),e),c=d((()=>(0,t._)("h4",null,"Reizen Dos Santos - DAW 2022",-1))),u=[c];function l(e,n,o,a,i,r){return(0,t.wg)(),(0,t.iD)("div",null,u)}var h={name:"FooterVue"},p=o(89);const m=(0,p.Z)(h,[["render",l],["__scopeId","data-v-08809d1c"]]);var v=m,f=o(7139);const w={id:"main-card"},b={key:0},g={id:"icon"},P={key:0},_={key:1},k={key:2},q=(0,t.Uk)("Tempo actual: ");function y(e,n,o,a,i,r){return(0,t.wg)(),(0,t.iD)("div",w,[o.dados?((0,t.wg)(),(0,t.iD)("h2",b,(0,f.zw)(o.dados[0]),1)):(0,t.kq)("",!0),(0,t._)("div",g,["Rain"==o.dados[3]?((0,t.wg)(),(0,t.iD)("div",P,"🌧️")):(0,t.kq)("",!0),"Clouds"==o.dados[3]?((0,t.wg)(),(0,t.iD)("div",_,"🌥️")):(0,t.kq)("",!0),"Clear"==o.dados[3]?((0,t.wg)(),(0,t.iD)("div",k,"☀️")):(0,t.kq)("",!0)]),(0,t._)("h4",null,[q,(0,t._)("span",null,(0,f.zw)(o.dados[1])+" ºC",1)])])}var C={name:"CardPrincipal",props:["dados"]};const D=(0,p.Z)(C,[["render",y]]);var j=D;const O={id:"container"};function I(e,n,o,a,i,r){const s=(0,t.up)("v-select");return(0,t.wg)(),(0,t.iD)("div",O,[(0,t.Wm)(s,{placeholder:"Choose a province",modelValue:i.selected,"onUpdate:modelValue":n[0]||(n[0]=e=>i.selected=e),options:i.provinces,label:"name",id:"search-text"},null,8,["modelValue","options"]),(0,t._)("input",{type:"submit",value:"Pesquisar",id:"search-button",onClick:n[1]||(n[1]=(...e)=>r.showProvince&&r.showProvince(...e))})])}var Z={name:"BarraPesquisa",data(){return{selected:null,provinces:["Maputo","Xai-Xai","Pemba","Inhambane","Chimoio","Nampula","Lichinga","Beira","Tete","Quielimane"]}},methods:{showProvince(){this.selected?(this.$emit("show-province",this.selected),console.log("Provincia selecionada: "+this.selected)):(console.log("Nenhuma provincia selecionada"),alert("Choose a province first"))}}};const x=(0,p.Z)(Z,[["render",I],["__scopeId","data-v-f9e46fe4"]]);var A=x,W={name:"WeatherApp",components:{BarraPesquisa:A,CardPrincipal:j,FooterVue:v},data(){return{cidades:["Maputo","Xai-Xai","Inhambane","Beira","Chimoio","Tete","Quelimane","Nampula","Pemba"],dados1:[],dados2:[],dados3:[],interval:null,controlador:0,province:null}},methods:{renew(){if(9==this.controlador)this.controlador=0,fetch("https://api.openweathermap.org/data/2.5/weather?q=Lichinga,MZ&units=metric&APPID=7e8b2fa8fa95ff3263ecf4158d59b26d").then((e=>e.json())).then((e=>{this.dados1[0]=e.name,this.dados1[1]=e.main.temp,this.dados1[3]=e.weather[0].main,console.log(e)})).catch((e=>console.log(e)));else{this.controlador=this.controlador+3;for(let e=this.controlador-3;e<this.controlador;e++)fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.cidades[e]+",MZ&units=metric&APPID=e3cebe94c098059265d182ddb3baa9ea").then((e=>e.json())).then((n=>{0==e||3==e||6==e?(this.dados1[0]=n.name,this.dados1[1]=n.main.temp_min,this.dados1[2]=n.main.temp_max,this.dados1[3]=n.weather[0].main):1==e||4==e||7==e?(this.dados2[0]=n.name,this.dados2[1]=n.main.temp_min,this.dados2[2]=n.main.temp_max,this.dados2[3]=n.weather[0].main):2!=e&&5!=e&&8!=e||(this.dados3[0]=n.name,this.dados3[1]=n.main.temp_min,this.dados3[2]=n.main.temp_max,this.dados3[3]=n.weather[0].main)})).catch((e=>console.log(e)))}},showProvince(e){fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+",MZ&units=metric&APPID=e3cebe94c098059265d182ddb3baa9ea").then((e=>e.json())).then((e=>{this.dados1[0]=e.name,this.dados1[1]=e.main.temp_min,this.dados1[3]=e.weather[0].main})).catch((e=>console.log(e))),this.province=e,clearInterval(this.interval)}},mounted(){this.renew()},created(){this.interval=setInterval((()=>{this.renew()}),7e3)}};const M=(0,p.Z)(W,[["render",s]]);var V=M,z={name:"App",components:{WeatherApp:V}};const B=(0,p.Z)(z,[["render",i]]);var T=B,F=o(3636);(0,a.ri)(T).component("v-select",F.Z).mount("#app")}},n={};function o(a){var t=n[a];if(void 0!==t)return t.exports;var i=n[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,a,t,i){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],t=e[u][1],i=e[u][2];for(var s=!0,d=0;d<a.length;d++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](a[d])}))?a.splice(d--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var c=t();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,t,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var a in n)o.o(n,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,a){var t,i,r=a[0],s=a[1],d=a[2],c=0;if(r.some((function(n){return 0!==e[n]}))){for(t in s)o.o(s,t)&&(o.m[t]=s[t]);if(d)var u=d(o)}for(n&&n(a);c<r.length;c++)i=r[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},a=self["webpackChunkvue_mozambique_weather"]=self["webpackChunkvue_mozambique_weather"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(3990)}));a=o.O(a)})();
//# sourceMappingURL=app.50fafaf5.js.map
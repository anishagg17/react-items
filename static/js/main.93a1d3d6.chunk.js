(window.webpackJsonpreminder=window.webpackJsonpreminder||[]).push([[0],{13:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=(a(18),a(4)),s=a(7),o=a(8),u=a(11),m=a(9),d=a(12),p=a(22),v=(a(19),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={newItem:"",list:[]},a.addItem=function(){var e={id:1+Math.random(),value:a.state.newItem},t=[].concat(Object(i.a)(a.state.list),[e]);a.setState({list:t,newItem:""})},a.updateItem=function(e){a.setState({newItem:e.target.value})},a.resetItems=function(){a.setState({list:[]})},a.resetItem=function(e){var t=Object(i.a)(a.state.list).filter((function(t){return t.id!==e}));a.setState({list:t})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)"))))),r.a.createElement("br",null),r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text",id:"basic-addon3"},"Add an Item....")),r.a.createElement("input",{type:"text",class:"form-control",id:"basic-url","aria-describedby":"basic-addon3",placeholder:"Enter new item here",value:this.state.newItem,onChange:function(t){return e.updateItem(t)}}),r.a.createElement("button",{class:"input-group-text",onClick:function(){return e.addItem()}}," ADD ")),r.a.createElement("ul",{class:" list-group"},this.state.list.map((function(t){return r.a.createElement("li",{class:"list-group-item",key:t.id},t.value,r.a.createElement("button",{onClick:function(){return e.resetItem(t.id)},type:"button",class:"btn btn-outline-light"},"DELETE"))}))),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"warning",onClick:function(){return e.resetItems()}},"Reset All"),r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("nav2",{class:"navbar navbar-expand-lg navbar-light bg-light fixed-bottom"},r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},"Made By : Anish Aggarwal")))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.93a1d3d6.chunk.js.map
(this["webpackJsonpping-pong"]=this["webpackJsonpping-pong"]||[]).push([[0],{16:function(e,t,a){},30:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=a(17),i=a(19),u=a(3),o={players:[],pairs:[],roundWinners:0,view:!0},d=function(e,t){for(var a=[],n=0;n<e.length;n+=t){var r=e.slice(n,n+t);a.push(r)}return a},m=function(e){for(var t,a,n=e.length;n;)a=Math.floor(Math.random()*n--),t=e[n],e[n]=e[a],e[a]=t;return e},b=function(e,t){var a=t.playerName;return Object(u.a)(Object(u.a)({},e),{},{players:[].concat(Object(i.a)(e.players),[a])})},h=function(e){return Object(u.a)(Object(u.a)({},e),{},{pairs:d(Object(i.a)(e.players),2)})},p=function(e){return Object(u.a)(Object(u.a)({},e),{},{players:m(Object(i.a)(e.players))})},f=function(e,t){var a=t.winners;return Object(u.a)(Object(u.a)({},e),{},{roundWinners:[].concat(Object(i.a)(e.roundWinners),[a])})},O=function(e){return Object(u.a)(Object(u.a)({},e),{},{view:!1})},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLAYER":return b(e,t);case"NEXT_ROUND":return f(e,t);case"START":return O(h(p(e)));case"CLEAR":return o;default:return e}},v=a(28),j=a.n(v),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.b,y=Object(s.c)(E,o,N(j()())),_=a(8),C=a(9),g=a(12),k=a(11),S=a(5),A=Object(S.b)(),w=a(15),R=a(2),T=(a(16),a(10)),D=a(13),x=function(e){Object(g.a)(a,e);var t=Object(k.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"render",value:function(){var e=this.props.players;return r.a.createElement("ul",{className:"listGroup"},e.map((function(e,t){return r.a.createElement("div",{className:"list-item__edit"},r.a.createElement("li",{className:"list-item list-item--fade list-item--show",key:t},e))})))}}]),a}(n.Component),P=Object(T.b)((function(e){return{players:e.players}}))(x),G=function(e){var t=e.type,a=e.handleClick,n=e.buttonClass,l=e.label,c=e.disabled;return r.a.createElement("button",{label:l,onClick:a,type:t,className:n,disabled:c},l)},L=function(e){Object(g.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({playerName:e.target.value})},n.handleAddName=function(e){e.preventDefault(),n.setState({playerName:n.state.playerName}),n.props.handleAdd(n.state)},n.handleStart=function(){n.props.handleStart(n.state)},n.state={playerName:""},n.handleChange=n.handleChange.bind(Object(D.a)(n)),n.handleStart=n.handleStart.bind(Object(D.a)(n)),n.handleAddName=n.handleAddName.bind(Object(D.a)(n)),n}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state.playerName,t=this.props,a=t.players,n=t.handleClear;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," PING PONG"),r.a.createElement("h2",null," TOURNAMENT"),r.a.createElement("form",{className:"form ",onSubmit:this.handleAddName},r.a.createElement("input",{required:!0,className:"form-control",type:"text",value:e,onChange:this.handleChange}),r.a.createElement(G,{buttonClass:"button button__form",label:"Add A Player",type:"submit",disabled:8===a.length})),r.a.createElement(w.b,{to:"/Tournament",className:"nav nav__settings"},r.a.createElement(G,{buttonClass:"button grid-child1",label:"Start",handleClick:this.handleStart,disabled:8!==a.length})),r.a.createElement(G,{buttonClass:"button grid-child2",label:"Reset",handleClick:n}),r.a.createElement("article",{className:"player-list"},r.a.createElement(P,null)),r.a.createElement("div",{className:"circle__container"},r.a.createElement("div",{className:"circle"})))}}]),a}(n.Component),M=Object(T.b)((function(e){return{players:e.players,pairs:e.pairs}}),(function(e){return{handleAdd:function(t){return e(function(e){return Object(u.a)({type:"ADD_PLAYER"},e)}(t))},handleClear:function(t){return e({type:"CLEAR"})},handleStart:function(t){return e(function(e){return Object(u.a)({type:"START"},e)}(t))}}}))(L),I=function(e){Object(g.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={selected:!1},n.handleClick=n.handleClick.bind(Object(D.a)(n)),n}return Object(C.a)(a,[{key:"handleClick",value:function(){this.setState({selected:!this.state.selected})}},{key:"render",value:function(){var e=this,t=this.props.pairs;this.state.selected;return r.a.createElement("ul",null,t.map((function(t,a){return r.a.createElement("div",{className:"pairs container__roster__list",key:a},t.map((function(t,a){return r.a.createElement("button",{onClick:e.handleClick,className:"player"},t)})))})))}}]),a}(n.Component),U=Object(T.b)((function(e){return{pairs:e.pairs}}))(I),X=function(e){Object(g.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=n.state,t=e.winners,a=e.round;n.setState({winners:t,round:a+1}),n.props.handleNextRound(n.state)},n.state={winners:[],round:0},n}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state.winners;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container__tournament"},r.a.createElement("h1",{className:"title__App"},"PING PONG"),r.a.createElement("section",{className:"container__roster round-one"},r.a.createElement(U,null),r.a.createElement(G,{buttonClass:"button",label:"Next Round",handleClick:this.handleSubmit,disabled:4!==e.length})),r.a.createElement("section",{className:"container__roster semi-final"},r.a.createElement("h2",{className:"round__title"}),r.a.createElement(G,{buttonClass:"button",label:"Next Round",handleClick:this.handleSubmit})),r.a.createElement("section",{className:"container__roster final"}),r.a.createElement(w.b,{to:"/",className:"nav-link nav__tournament"},r.a.createElement(G,{buttonClass:"button ",label:"Settings"}))))}}]),a}(n.Component),W=Object(T.b)((function(e){return{pairs:e.pairs,view:console.log(e.view)}}),(function(e){return{handleNextRound:function(t){return e(function(e){return Object(u.a)({type:"NEXT_ROUND"},e)}(t))}}}))(X),J=function(e){Object(g.a)(a,e);var t=Object(k.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{history:A},r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/"},r.a.createElement(M,null)),r.a.createElement(R.a,{exact:!0,path:"/Tournament"},r.a.createElement(W,null),r.a.createElement("div",{className:"nav"}))))}}]),a}(n.Component);c.a.render(r.a.createElement(T.a,{store:y},r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d523e80d.chunk.js.map
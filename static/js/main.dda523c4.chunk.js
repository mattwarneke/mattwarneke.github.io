(this["webpackJsonpmattwarneke.github.io"]=this["webpackJsonpmattwarneke.github.io"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){e.exports=n(58)},45:function(e,t,n){},46:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a,r=n(1),l=n.n(r),o=n(30),i=n.n(o),c=(n(45),n(10)),s=n(11),u=n(15),d=n(13),m=n(12),h=(n(46),n(27),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"row-900"},l.a.createElement("div",{className:"HeadingRow"},l.a.createElement("span",{className:"ContainerHeading"},this.props.heading)),l.a.createElement("div",{className:"ContentContainer"},this.props.children))}}]),n}(l.a.Component)),b=n(19),p=n.n(b),E=n(8),v=n(16),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).unityContent=new b.UnityContext({loaderUrl:"JoJosAdventure/Build/UnityLoader.js",dataUrl:"JoJosAdventure/Build/WebGL.data",frameworkUrl:"JoJosAdventure/Build/WebGL.framework.js",codeUrl:"JoJosAdventure/Build/WebGL.wasm"}),a.state={progression:0,isLoading:!0},a.unityContent.on("loaded",(function(){a.setState({isLoading:!1})})),a.unityContent.on("progress",(function(e){a.setState({progression:e})})),a.fullScreen=a.fullScreen.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"fullScreen",value:function(){this.unityContent.setFullscreen(!0)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.props.ContentBlurb,l.a.createElement("div",null,l.a.createElement("div",{className:"loadingFullScreen"},!0===this.state.isLoading?"Loading "+100*this.state.progression+" percent...":l.a.createElement("span",{onClick:function(){return e.fullScreen()},style:{cursor:"pointer"}},l.a.createElement(E.a,{icon:v.c}),"  Fullscreen")),l.a.createElement(p.a,{id:"jojos",unityContext:this.unityContent,devicePixelRatio:1,style:{height:960,width:1280,border:"2px solid black",background:"grey",display:"inline"}})))}}]),n}(l.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).unityContent=new b.UnityContext({loaderUrl:"LabyrinthTD/Build/WebGL.loader.js",dataUrl:"LabyrinthTD/Build/WebGL.data",frameworkUrl:"LabyrinthTD/Build/WebGL.framework.js",codeUrl:"LabyrinthTD/Build/WebGL.wasm"}),a.state={progression:0,isLoading:!0},a.unityContent.on("loaded",(function(){a.setState({isLoading:!1})})),a.unityContent.on("progress",(function(e){a.setState({progression:e})})),a.fullScreen=a.fullScreen.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"fullScreen",value:function(){this.unityContent.setFullscreen(!0)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.props.ContentBlurb,l.a.createElement("div",null,l.a.createElement("div",{className:"loadingFullScreen"},!0===this.state.isLoading?"Loading "+100*this.state.progression+" percent...":l.a.createElement("span",{onClick:function(){return e.fullScreen()},style:{cursor:"pointer"}},l.a.createElement(E.a,{icon:v.c}),"  Fullscreen")),l.a.createElement(p.a,{id:"labTd",unityContext:this.unityContent,devicePixelRatio:1,style:{height:960,width:1280,border:"2px solid black",background:"grey",display:"inline"}})))}}]),n}(l.a.Component),y=(n(29),l.a.Component,n(31)),f=(n(32),n(37));n.n(f)()(a||(a=Object(y.a)(["\nquery\n{\n  scores {\n    score\n    user\n    level\n    version\n  }\n}\n"])));var w=n(18),k=n(7),j=n(17),L=n(38),O=n(39),x=new j.a({cache:new L.a,link:new O.a({uri:"http://localhost:8085/graphql"}),connectToDevTools:!0,fetchOptions:{mode:"no-cors"}}),S={textAlign:"right",float:"right"},T=[{name:"JoJosAdventure",ContentHeader:"JoJos Marvelous Adventure",ComponentToRender:l.a.createElement(g,{ContentBlurb:l.a.createElement("div",null,l.a.createElement("p",null,"As Jojo(cat) save Princess Paige from her trapped state!"),l.a.createElement("p",null,"Click to move - JoJo will walk in a straight line to the clicked spot. Move her around obstacles."),l.a.createElement("p",null,"Pay attention to the prompts coming from Matt(me) to make it to Paige."))})},{name:"LabyrinthTD",ContentHeader:"Labyrinth Tower Defense",ComponentToRender:l.a.createElement(C,{ContentBlurb:l.a.createElement("div",null,l.a.createElement("p",null,"Protect your sacred tree from the invaders!"),l.a.createElement("p",null,"Drag the defenders from the bottom on to a square - the defenders will automatically shoot approaching enemies."),l.a.createElement("p",null,"Zoom the camera with the mousewheel, move the camera by holding left click and dragging"),l.a.createElement("p",null,"Try to create a maze so the enemies must run as long as possible - see the dirt path for enemy path."))})}],J=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(c.a)(this,n);return(a=t.call(this,e)).state={CurrentIndex:0,ComponentToRender:T[0].ComponentToRender,ContentHeader:T[0].ContentHeader,ContentBlurb:T[0].ContentBlurb},a.changeContent=a.changeContent.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"changeContent",value:function(e){this.setState({CurrentIndex:e,ComponentToRender:T[e].ComponentToRender,ContentHeader:T[e].ContentHeader,ContentBlurb:T[e].ContentBlurb})}},{key:"render",value:function(){var e=this;return l.a.createElement(k.a,{client:x},l.a.createElement(h,{heading:"Navigation"},l.a.createElement("div",null,l.a.createElement("b",null,T[0].ContentHeader),l.a.createElement("span",{style:S},0!==this.state.CurrentIndex&&l.a.createElement("button",{onClick:function(){return e.changeContent(0)}},l.a.createElement(E.a,{icon:v.a})," Play Game"))),l.a.createElement("p",null,"Unity 2D Game built with C#"),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("b",null,T[1].ContentHeader),l.a.createElement("span",{style:S},1!==this.state.CurrentIndex&&l.a.createElement("button",{onClick:function(){return e.changeContent(1)}},l.a.createElement(E.a,{icon:v.d})," Play Game"))),l.a.createElement("div",null,"Unity 2D Game built with C#"),l.a.createElement("div",null,"WebGL, also available on android (closed beta)")),l.a.createElement(h,{ID:"mainContent",heading:this.state.ContentHeader},this.state.ComponentToRender),l.a.createElement(h,{ID:"scoreboard",heading:"Games Scoreboard"}),l.a.createElement(h,{heading:"About"},l.a.createElement("div",{className:"flex-container"},l.a.createElement("span",{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(E.a,{icon:w.d,className:"big-icon"})),"ReactJS"),l.a.createElement("span",{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(E.a,{icon:w.b,className:"big-icon"})),"HTML5"),l.a.createElement("span",{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(E.a,{icon:w.a,className:"big-icon"})),"CSS3"),l.a.createElement("span",{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(E.a,{icon:w.c,className:"big-icon"})),"JavaScript ES6"),l.a.createElement("span",{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(E.a,{icon:v.b,className:"big-icon"})),"Unity"))))}}]),n}(l.a.Component),B=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"headerMenuItem"},l.a.createElement(E.a,{icon:w.d,className:"icon-header"})),l.a.createElement("div",{className:"headerText"},"Matt Warneke"))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement("div",null,l.a.createElement(B,null),l.a.createElement("div",{id:"ListViewContainer",style:{paddingTop:"5em"}},l.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.dda523c4.chunk.js.map
(this.webpackJsonpredditimageviewer=this.webpackJsonpredditimageviewer||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),o=(a(13),a(2)),c=a(3),u=a(1),l=a(5),d=a(4),h=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isZoom:!1,imageError:!1},e.handleClick=e.handleClick.bind(Object(u.a)(e)),e.handleError=e.handleError.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"handleClick",value:function(){this.setState((function(e){return{isZoom:!e.isZoom}}))}},{key:"handleError",value:function(){this.setState((function(e){return{imageError:!0}}))}},{key:"render",value:function(){var e=this.props.imagen.urls.find((function(e){return e.height>=400&&e.width>=600}));e=e?e.url.replace(/&amp;/g,"&"):this.props.imagen.urlFull,this.state.imageError&&(e=this.props.imagen.urls[this.props.imagen.urls.length-1].url.replace(/&amp;/g,"&"));var t=this.state.isZoom?this.state.imageError?e:this.props.imagen.urlFull:e;return i.a.createElement("div",{className:this.state.isZoom?"postal zoom":"postal"},i.a.createElement("div",{className:"hover",onClick:this.handleClick}),i.a.createElement("img",{onClick:this.handleClick,onError:this.handleError,src:t,alt:""}),i.a.createElement("h3",null,this.props.imagen.titulo),i.a.createElement("a",{href:"https://reddit.com"+this.props.imagen.link_publicacion},"u/",this.props.imagen.autor))}}]),a}(i.a.Component),m=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e){return this.props.sr!==e.sr}},{key:"render",value:function(){var e=this,t=[],a=["Photographs","AnalogPhotography","FotosMexico","Generative","HeavyMind","ImaginaryLandscapes","PrintMaking","StreetArt","Isometric","Glitch_Art","AccidentalWesAnderson","UnstirredPaint","Museum"];a=a.map((function(t,a){return i.a.createElement("button",{key:a,onClick:function(){return e.props.buscar(t)},className:"recomendado"},""+t)}));for(var n=0;n<5;n++){var r=Math.floor(Math.random()*a.length);t.push(a[r]),a.splice(r,1)}return i.a.createElement("div",{className:"sb"},t)}}]),a}(i.a.Component),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).anterior=e.anterior.bind(Object(u.a)(e)),e.siguiente=e.siguiente.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"anterior",value:function(){this.props.cambio("before="+this.props.estado.anterior)}},{key:"siguiente",value:function(){this.props.cambio("after="+this.props.estado.siguiente)}},{key:"render",value:function(){return i.a.createElement("div",{className:"top"},this.props.estado.anterior&&i.a.createElement("button",{className:"nav",onClick:this.anterior},"<"),this.props.estado.siguiente&&i.a.createElement("button",{className:"nav",onClick:this.siguiente},">"))}}]),a}(i.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={imagenes:[],cargando:!0,subreddit:"photographs",estado:"",siguiente:"",anterior:"",contador:3,postxpagina:10},e.handleClick=e.handleClick.bind(Object(u.a)(e)),e.handleKeyUp=e.handleKeyUp.bind(Object(u.a)(e)),e.busqueda=e.busqueda.bind(Object(u.a)(e)),e.cambio=e.cambio.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"busqueda",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.postxpagina;document.getElementById("subreddit").value="",this.setState({contador:n});var i="https://www.reddit.com/r/".concat(e,"/new/.json?limit=").concat(this.state.postxpagina,"&").concat(a,"&count=").concat(n);console.log("2",i),this.setState({cargando:!0,estado:"...",subreddit:e}),fetch(i).then((function(e){return e.json()})).then((function(e){var a=e.data.children.reduce((function(e,t){return t.data.preview&&e.push({titulo:t.data.title,urlFull:t.data.url,urls:t.data.preview.images[0].resolutions,id:t.data.id,autor:t.data.author,link_publicacion:t.data.permalink}),e}),[]);t.setState({imagenes:a,cargando:!1,siguiente:e.data.after,anterior:e.data.before})})).catch((function(e){t.setState({estado:"no encontrado"})}))}},{key:"cambio",value:function(e){e.includes("after")?this.busqueda(this.state.subreddit,e,this.state.contador+this.state.postxpagina):e.includes("before")&&this.busqueda(this.state.subreddit,e,this.state.contador-this.state.postxpagina)}},{key:"handleClick",value:function(){var e=document.getElementById("subreddit").value;this.busqueda(e)}},{key:"handleKeyUp",value:function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("buscar").click())}},{key:"componentDidMount",value:function(){this.busqueda(this.state.subreddit)}},{key:"render",value:function(){var e=this,t=this.state.imagenes.map((function(e){return i.a.createElement(h,{key:e.id,imagen:e})}));return i.a.createElement("div",null,i.a.createElement("div",{className:"top"},i.a.createElement("div",{className:"caja"},i.a.createElement("a",{href:"https://www.reddit.com/r/"+this.state.subreddit,className:"prefijo"},"r/"),i.a.createElement("input",{label:"buscar",placeholder:this.state.subreddit,spellCheck:"false",onKeyUp:function(t){return e.handleKeyUp(t)},id:"subreddit"}),i.a.createElement("button",{id:"buscar",className:"buscar",onClick:this.handleClick},i.a.createElement("img",{alt:">",src:"https://www.queryly.com/images/whitesearchicon.png  "}))),i.a.createElement(m,{sr:this.state.subreddit,buscar:this.busqueda})),this.state.cargando?this.state.estado:i.a.createElement("div",{className:"contenedor"},t),this.state.cargando?null:i.a.createElement(p,{estado:this.state,cambio:this.cambio}))}}]),a}(i.a.Component);s.a.render(i.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.af67b9d2.chunk.js.map
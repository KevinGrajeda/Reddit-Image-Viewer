import React from "react"
import Postal from "./components/Postal"
import Recomendados from "./components/Recomendados"
import Navegacion from "./components/Navegacion"

class App extends React.Component{
    
    constructor(){
        super();
        this.state={
            imagenes:[],
            cargando:true,
            subreddit:"photographs",
            estado:"",
            siguiente:"",
            anterior:"",
            contador:0,
            postxpagina:25,
            buscarPor:"hot",
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleKeyUp=this.handleKeyUp.bind(this);
        this.busqueda=this.busqueda.bind(this);
        this.cambio=this.cambio.bind(this);
        this.cambioBuscar=this.cambioBuscar.bind(this);
    }

    busqueda(sr=this.state.subreddit,siguiente="",contador=this.state.postxpagina,buscarx=this.state.buscarPor){
        document.getElementById("subreddit").value="";
        
        this.setState({contador: contador,buscarPor:buscarx});

        if(siguiente===""){
            contador=0;
        }
        const url=
        `https://www.reddit.com/r/${sr}/${buscarx}/.json?limit=${this.state.postxpagina}&${siguiente}&count=${contador}`
        
        this.setState({cargando:true, estado:"...",subreddit:sr});
        fetch(url)
        .then(res=>res.json())
        .then(res=> {
            const resultados=res.data.children.reduce((result,id)=>{
                if(id.data.preview){//es imagen?
                    result.push({
                        titulo: id.data.title,
                        urlFull: id.data.url,
                        urls:id.data.preview.images[0].resolutions,
                        id: id.data.id,
                        autor: id.data.author,
                        link_publicacion: id.data.permalink,
                    });
                }
                return result;
            },[]);
            this.setState({
                imagenes: resultados,
                cargando: false,
                siguiente: res.data.after,
                anterior: res.data.before,
            });
            
        }).catch(error=>{
            //console.log(error)
            this.setState({estado:"no encontrado/not found"})
        });
    }
    cambio(siguiente){
        if(siguiente.includes("after")){
            this.busqueda(this.state.subreddit,siguiente,this.state.contador+this.state.postxpagina);
        }else if(siguiente.includes("before")){
            this.busqueda(this.state.subreddit,siguiente,this.state.contador-this.state.postxpagina);
        }
    }
    cambioBuscar(buscarx){
        this.busqueda(undefined,undefined,undefined,buscarx);
    }

    handleClick(){
        const subReddit=document.getElementById("subreddit").value;
        this.busqueda(subReddit);
    }

    handleKeyUp(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("buscar").click();
        }
    }

    componentDidMount(){
        this.busqueda(this.state.subreddit);
    }

    render(){
        const postales=this.state.imagenes.map(imagen=> <Postal key={imagen.id} imagen={imagen} />);

        return(
        <div>
            <div className="top">
                <div className="recomendados">
                    <button className={this.state.buscarPor==="hot"?"seleccion":""} onClick={()=>this.cambioBuscar("hot")}>Hot</button>
                    <button className={this.state.buscarPor==="new"?"seleccion":""} onClick={()=>this.cambioBuscar("new")}>New</button> 
                </div>
                <div className="caja">
                    <a href={"https://www.reddit.com/r/"+this.state.subreddit} className="prefijo">r/</a>
                    <input aria-label="buscar subreddit" placeholder={this.state.subreddit} spellCheck="false" onKeyUp={evt => this.handleKeyUp(evt)} id="subreddit"/>
                <button id="buscar" className="buscar" onClick={this.handleClick}><img alt=">" src="https://www.queryly.com/images/whitesearchicon.png  "></img></button>

                </div>
                <Recomendados sr={this.state.subreddit} buscar={this.busqueda}/>
                
            </div>
            
            {!this.state.cargando?
            <div className="contenedor">
                {postales}
            </div>
            :<h1 className="estado">{this.state.estado}</h1>}

            {!this.state.cargando?
                <Navegacion estado={this.state} cambio={this.cambio}/>
            :null}
            <footer>
                <a href="https://github.com/KevinGrajeda">Kevin Grajeda 2020</a>
            </footer>
        </div>)
    }
}

export default App;
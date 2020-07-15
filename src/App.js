import React from "react"
import Postal from "./components/Postal"
import Recomendados from "./components/Recomendados"

class App extends React.Component{
    constructor(){
        super();
        this.state={
            imagenes:[],
            cargando:true,
            subreddit:"photographs",
            estado:"",
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleKeyUp=this.handleKeyUp.bind(this);
        this.busqueda=this.busqueda.bind(this);
    }

    busqueda(sr){
        const url=`https://www.reddit.com/r/${sr}/hot/.json`
        this.setState({cargando:true, estado:"...",subreddit:sr});
        fetch(url)
        .then(res=>res.json())
        .then(res=> {
            const resultados=res.data.children.map((id)=>{
                return{
                    titulo: id.data.title,
                    url: id.data.url,
                    id: id.data.id,
                    autor: id.data.author,
                    link_publicacion: id.data.permalink,
                };
            })
            this.setState({
                imagenes: resultados,
                cargando: false,
            });
        }).catch(error=>{
            this.setState({estado:"no encontrado"})
        });
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
                <div className="caja">
                    <a href={"https://www.reddit.com/r/"+this.state.subreddit} className="prefijo">r/</a>
                    <input placeholder={this.state.subreddit} spellCheck="false" onKeyUp={evt => this.handleKeyUp(evt)} id="subreddit"/>
                    <button id="buscar" className="buscar" onClick={this.handleClick}><img alt=">" src="https://lh3.googleusercontent.com/proxy/_H9cqBKbs4BCfrSpfAi_H6ihUV7bUhhXrqDlGLY4ueHycbvM_b_yOExKHGYLz5SyUSKO6CSi2wkh-jhBSXMGhUmTzJaoNKjnqXQrrg"></img></button>

                </div>
                <Recomendados sr={this.state.subreddit} buscar={this.busqueda}/>
            </div>
            
            <div className="contenedor">
                {!this.state.cargando?postales:this.state.estado}
            </div>
        </div>)
    }
}

export default App;
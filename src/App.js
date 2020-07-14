import React from "react"
import Postal from "./components/Postal"

class App extends React.Component{
    constructor(){
        super();
        this.state={
            imagenes:[],
            cargando:true,
        }
        this.handleClick=this.handleClick.bind(this)
    }

    busqueda(url){
        fetch(url)
        .then(res=>res.json())
        .then(res=> {
            const resultados=res.data.children.map((id)=>{
                //console.log(id.data);
                return{
                    titulo: id.data.title,
                    url: id.data.url,
                    id: id.data.id,
                    autor: id.data.author,
                };
            })
            this.setState({
                imagenes: resultados,
                cargando: false,
            });
        })
    }

    handleClick(){
        //https://www.reddit.com/r/fotosmexico/new/.json
        this.busqueda("https://www.reddit.com/r/pics/new/.json");
    }

    componentDidMount(){
        this.busqueda("https://www.reddit.com/r/photographs/new/.json");
        
        
    }

    render(){
        const postales=this.state.imagenes.map(imagen=> <Postal key={imagen.id} imagen={imagen} />);

        return(
        <div>
            <button onClick={this.handleClick}>pepe</button>
            <div className="contenedor">
                {postales}
            </div>
        </div>)
    }
}

export default App;
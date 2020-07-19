import React from "react";

class Navegacion extends React.Component{
    constructor(){
        super();
        this.anterior=this.anterior.bind(this);
        this.siguiente=this.siguiente.bind(this);
    }
    anterior(){
        this.props.cambio("before="+this.props.estado.anterior);
    }
    siguiente(){
        this.props.cambio("after="+this.props.estado.siguiente);
    }
    render(){
        return( 
            <div className="top">
                {this.props.estado.anterior&&<button className="nav" onClick={this.anterior}>&lt;</button>}
                {this.props.estado.siguiente&&<button className="nav" onClick={this.siguiente}>&gt;</button>}
            </div>
        )
    }
    
}

export default Navegacion;
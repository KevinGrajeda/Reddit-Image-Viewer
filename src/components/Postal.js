import React from "react";

class Postal extends React.Component{
    constructor(){
        super();
        this.state={
            isZoom:false,
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prev=>{
            return{isZoom : !prev.isZoom}
        })
    }
    render(){
        return(
            <div className={this.state.isZoom?"postal zoom":"postal"}>
                <div className="hover" onClick={this.handleClick}/>
                <img   src={this.props.imagen.url}  alt=""/>
                <h3>{this.props.imagen.titulo}</h3>
                <a href={"https://reddit.com"+this.props.imagen.link_publicacion}>u/{this.props.imagen.autor}</a>
            </div>
        )
    }
    
}

export default Postal;
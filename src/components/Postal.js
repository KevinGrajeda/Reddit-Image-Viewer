import React from "react";

class Postal extends React.Component{
    constructor(){
        super();
        this.state={
            isZoom:false,
            imageError:false,
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleError=this.handleError.bind(this);
    }

    handleClick(){
        this.setState(prev=>{
            return{isZoom : !prev.isZoom}
        })
    }
    handleError(){
        this.setState(prev=>{
            return{imageError : true}
        })
    }
    render(){
        return( this.state.imageError?null:
                <div className={this.state.isZoom?"postal zoom":"postal"}>
                <div className="hover" onClick={this.handleClick}/>
                <img  onError={this.handleError} src={this.props.imagen.url}  alt=""/>
                <h3>{this.props.imagen.titulo}</h3>
                <a href={"https://reddit.com"+this.props.imagen.link_publicacion}>u/{this.props.imagen.autor}</a>
                </div>
            
        )
    }
    
}

export default Postal;
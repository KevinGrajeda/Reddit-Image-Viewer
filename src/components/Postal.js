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
            <div>
                <div className={this.state.isZoom?"postal zoom":"postal"}>
                    <div className="hover" onClick={this.handleClick}/>
                    <img   src={this.props.imagen.url}  alt=""/>
                    <h3>{this.props.imagen.titulo}</h3>
                    <h4>r/{this.props.imagen.autor}</h4>
                </div>
            </div>
        )
    }
    
}

export default Postal;
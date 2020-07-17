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
        console.log(this.props.imagen.urls);
        let imgRes=this.props.imagen.urls.find((res)=>res.height>=400).url.replace(/&amp;/g, '&');
        if(this.state.imageError){
            imgRes=this.props.imagen.urls[this.props.imagen.urls.length-1].url.replace(/&amp;/g, '&');
        }
        const imgUrl=this.state.isZoom?this.state.imageError?imgRes :this.props.imagen.urlFull:imgRes;
        return( 
            <div className={this.state.isZoom?"postal zoom":"postal"}>
                <div className="hover" onClick={this.handleClick}/>
                <img onClick={this.handleClick} onError={this.handleError} src={imgUrl}  alt=""/>
                <h3>{this.props.imagen.titulo}</h3>
                <a href={"https://reddit.com"+this.props.imagen.link_publicacion}>u/{this.props.imagen.autor}</a>
            </div>
            
        )
    }
    
}

export default Postal;
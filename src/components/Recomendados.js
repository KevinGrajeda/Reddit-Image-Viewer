import React from "react"

class Recomendados extends React.Component{
    shouldComponentUpdate(nextProps) {
        if(this.props.sr===nextProps.sr){
            return false;
        }else{
            return true;
        }
    }
    
    render(){
        let botones=[];
        let subreddits=[
            "Photographs",
            "AnalogPhotography",
            "FotosMexico",
            "Generative",
            "HeavyMind",
            "ImaginaryLandscapes",
            "PrintMaking",
            "StreetArt",
            "Isometric",
            "Glitch_Art",
            "AccidentalWesAnderson",
            "UnstirredPaint",
            "Museum",
        ];

        subreddits=subreddits.map((sr,id)=>{
            return <button key={id} onClick={()=> this.props.buscar(sr)} className="recomendado">{""+sr}</button>
        });
        
        for(let i=0;i<5;i++){
            const random=Math.floor(Math.random()*(subreddits.length));
            botones.push(subreddits[random]);
            
            subreddits.splice(random,1);

        }
        return(
            <div className="sb">
                {botones}
            </div>
        )
    }
}


export default Recomendados
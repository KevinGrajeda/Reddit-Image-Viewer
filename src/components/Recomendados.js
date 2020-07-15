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
            "photographs",
            "AnalogPhotography",
            "FotosMexico",
            "generative",
            "heavymind",
            "imaginarylandscapes",
            "printmaking",
            "streetart",
            "isometric",
            "Glitch_Art",
            "AccidentalWesAnderson",
            "unstirredpaint",
            "museum",
        ];
        
        subreddits=subreddits.map((sr,id)=>{
            return <button key={id} onClick={()=> this.props.buscar(sr)} className="recomendado">{""+sr}</button>
        });
        
        for(let i=0;i<5;i++){
            const random=Math.floor(Math.random()*(subreddits.length));
            botones.push(subreddits[random]);
            
            subreddits.splice(random,1);

        }
        console.log("kk");
        return(
            <div className="sb">
                {botones}
            </div>
        )
    }
}


export default Recomendados
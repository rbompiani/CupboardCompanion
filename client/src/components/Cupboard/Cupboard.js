import React from 'react';
import Gauge from 'react-svg-gauge';
import Button from '@material-ui/core/Button';
import "./Cupboard.css"



function Cupboard({data, product, link}) {
    if(data<0) {data = 0}
    else if(data>100){data =100}
    
    var color;
    function findColor(data) {
        if(data <= 25) {
            color= "red";
        } else if (data >= 75) {
            color="green";
        } else
            color = "yellow";
    }
    findColor(data);

    return (
        <>
        <div className="Cupboard">
           
            <div className="gauge">
                <Gauge value={data} width={300} height={240} label={product} color={color}/>
            </div>
            
            <Button color="inherit" href={link} target="new">Restock</Button>

        </div>
        
        </>
    )
}

export default Cupboard 
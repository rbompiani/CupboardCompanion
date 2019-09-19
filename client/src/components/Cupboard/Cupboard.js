import React from 'react';
import Gauge from 'react-svg-gauge';
import Button from '@material-ui/core/Button';
import "./Cupboard.css"



function Cupboard({data, product, link}) {
    if(data<0) {data = 0}
    else if(data>100){data =100}
    
    var color = {
        '#fe0400': (data <= 25),
        'green': (data >= 75),
        'yellow': (data >=26 && data <= 74)
    }

    return (
        <>
        <div className="Cupboard">
           
            <div className="gauge">
                <Gauge value={data} width={300} height={240} label={product} color={'green'}/>
            </div>
            
            <Button color="inherit" href={link} target="new">Restock</Button>

        </div>
        
        </>
    )
}

export default Cupboard 
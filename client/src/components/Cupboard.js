import React from 'react';
import Gauge from 'react-svg-gauge';
import Button from '@material-ui/core/Button';
import NewItemButton from './NewItem';

function Cupboard({data, product}) {
    if(data<0) {data = 0}
    else if(data>100){data =100}
    
    return (
        <>
        <div className="Cupboard">
           
            <div>
                <Gauge value={data} width={400} height={320} label={product} />
            </div>
            
            <Button color="inherit" href="">Restock</Button>

            
        </div>
        
        </>
    )
}

export default Cupboard 
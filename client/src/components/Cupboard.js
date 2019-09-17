import React from 'react';
import Gauge from 'react-svg-gauge';
import Button from '@material-ui/core/Button';
import NewItemButton from './NewItem';

function Cupboard({data, product}) {
    return (
        <>
        <div className="Cupboard">
            <div>
                <NewItemButton>
                    
                </NewItemButton>
            </div>
            <div>
                <Gauge value={data} width={400} height={320} label={product} />
            </div>
            
            <Button color="inherit" href="">Restock</Button>

            
        </div>
        
        </>
    )
}

export default Cupboard 
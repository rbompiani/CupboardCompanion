import React from 'react';
import Gauge from 'react-svg-gauge';

function Cupboard(props) {
    return (
        <div className="Cupboard">
            <div>
                <Gauge value={this.state.value} width={400} height={320} label={this.state.id} />
            </div>
            
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            
        </div>
    )
}

export default Cupboard 
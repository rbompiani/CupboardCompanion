import React, {Component} from 'react';
import Modal from "./Modal";


  class NewItemButton extends Component {
    state = {
      creating: false
    };

    startCreateNewItem = () => {
      this.setState({creating: true});
    };

    modalConfirmHandler = () => {
      this.setState({creating: false});
    };

    modalCancelHandler = () => {
      this.setState({creating: false});
    };


    render() {
      return (
        <React.Fragment>
          {this.state.creating && (
          <Modal 
          title="Add Sensor" 
          canCancel 
          canConfirm 
          onCancel={this.modalCancelHandler} 
          onConfirm={this.modalConfirmHandler}
          >
            <p>Modal Content</p>
          </Modal>
          )}
          <div>
            <p>Click here to add a new sensor!</p>
            <button className="btn" onCLick={this.startCreateNewItem}>Add New Sensor</button>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default NewItemButton;

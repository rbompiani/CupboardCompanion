import React, {Component} from 'react';
import Modal from "./Modal.js";
import Backdrop from "./Backdrop";

  class NewItemButton extends Component {
    state = {
      creating: false
    };

    constructor(props) {
      super(props);
      this.itemRef = React.createRef();
      this.weightRef = React.createRef();
      this.reminderRef = React.createRef();
    }

    startCreateNewItem = () => {
      this.setState({ creating: true });
    };

    modalConfirmHandler = () => {
      this.setState({ creating: false });
      const item = this.itemRef.current.value;
      const weight = +this.weightRef.current.value;
      const reminder = this.reminderRef.current.value;

      const newSensor = {item, weight, reminder};
      console.log(newSensor);
    };

    modalCancelHandler = () => {
      this.setState({ creating: false });
    };


    render() {
      return (
        <React.Fragment>
          {this.state.creating && <Backdrop />}
          {this.state.creating && (
          <Modal 
            title="Add Sensor" 
            canCancel 
            canConfirm 
            onCancel={this.modalCancelHandler} 
            onConfirm={this.modalConfirmHandler}
          >
            <form>
              <div className="form-control">
                <label htmlFor="item">Item</label>
                <input type="text" id="item" ref={this.itemRef}></input>
              </div>
              <div className="form-control">
                <label htmlFor="weight">Start Weight</label>
                <input type="number" id="weight" ref={this.weightRef}></input>
              </div>
              <div className="form-control">
                <label htmlFor="reminder">Reminder</label>
                <input type="checkbox" id="reminder" ref={this.reminderRef}></input>
              </div>
            </form>
          </Modal>
          )}
          <div className="events-control">
            <p>Click here to add a new sensor!</p>
            <button className="btn" onClick={this.startCreateNewItem}>Add New Sensor</button>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default NewItemButton;

import React, {Component} from 'react';
import Modal from "./Modal.js";
import Backdrop from "./Backdrop";
import axios from "axios";


  class NewItemButton extends Component {
    state = {
      creating: false
    };

    constructor(props) {
      super(props);
      this.itemRef = React.createRef();
      this.weightRef = React.createRef();
      this.reminderRef = React.createRef();
      this.linkRef = React.createRef();
      this.emailRef = React.createRef();
    }

    startCreateNewItem = () => {
      this.setState({ creating: true });
    };

    modalConfirmHandler = () => {
      this.setState({ creating: false });
      const item = this.itemRef.current.value;
      const weight = +this.weightRef.current.value;
      const reminder = this.reminderRef.current.value;
      const link = this.linkRef.current.value;
      const email = this.emailRef.current.value;

      const newSensor = {item, weight, reminder, link, email};
      //console.log(newSensor);
      axios.post("/new_sensor", newSensor);

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
                <label htmlFor="weight">Weight When Full</label>
                <input type="number" id="weight" ref={this.weightRef}></input>
              </div>
              <div className="form-control">
                <label htmlFor="reminder">Reorder Reminder at</label>
                <input type="number" id="reminder" ref={this.reminderRef}></input>
              </div>
              <div className="form-control">
                <label htmlFor="link">Link to Reorder</label>
                <input type="url" id="link" ref={this.linkRef}></input>
              </div>
              <div className="form-control">
                <label htmlFor="email">Email Address to Be Notified</label>
                <input type="email" id="email" ref={this.emailRef}></input>
              </div>
            </form>
          </Modal>
          )}
          <div className="events-control">
            <h4>Click here to add a new sensor!</h4>
            <button className="btn" onClick={this.startCreateNewItem}>Add New Sensor</button>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default NewItemButton;

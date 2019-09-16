import React from 'react';
import ReactDOM from 'react-dom';
//import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';



// class App extends React.Component {
//     state = { show: false }
  
//     showModal = () => {
//       this.setState({ show: true });
//       <p>I am open</p>
//     }
    
//     hideModal = () => {
//       this.setState({ show: false });
//     }
      
//     render() {
//       return (
//         <main>
//           <h1>React Modal</h1>
//           <Modal show={this.state.show} handleClose={this.hideModal} >
//             <p>Modal</p>
//             <p>Data</p>
//           </Modal>
//           <button type='button' onClick={this.showModal}>Open</button>
//         </main>
//       )
//     }
//   }
  
//   const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
//     return (
//       <div className={showHideClassName}>
//         <section className='modal-main'>
//           {children}
//           <button
//             onClick={handleClose}
//           >
//             Close
//           </button>
//         </section>
//       </div>
//     );
//   };
  
  
//   const container = document.createElement('div');
//   document.body.appendChild(container);
//   ReactDOM.render(<App />, container);
//   export default Modal

function NewItemModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<NewItemModal />);
  export default NewItemModal
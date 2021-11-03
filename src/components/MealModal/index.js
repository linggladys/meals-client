import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';


function MealModal({title, image}) {

            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                    View the recipe 🍰
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                 <img src={image} fluid/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="info" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
    
export default MealModal

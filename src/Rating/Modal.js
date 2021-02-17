import React, { useState } from "react";
import { Button, Modal ,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'


const ModalMovie = ({addMovie}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span  onClick={handleShow} className="addbtn">
        [ + ]
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="enter title .."
            onChange={(e)=> setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="enter rating.."
              min="1"
              max="5"
              onChange={(e)=> setRating(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
           onClick={()=> {addMovie({ id:Math.random() ,title ,rating }); handleClose() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalMovie;

import React, { useState } from 'react'
import { Button, ListGroup, Modal } from 'react-bootstrap';



function Time({timeData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <div>
        <Button className='w-100 fs-4 text-success' variant='success' onClick={handleShow}>
                Operating Hours
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success mt-2' style={{marginLeft:'150px'}}>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup className='fs-5 '>
                        <ListGroup.Item>Monday: {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday: {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday: {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Thursday: {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Friday: {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Saturday: {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Sunday: {timeData.Monday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
             </Modal>
    </div>
  )
}

export default Time
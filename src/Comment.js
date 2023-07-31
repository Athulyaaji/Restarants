import React from 'react'
import { Accordion, ListGroup } from 'react-bootstrap'


function Comment({reviews}) {
  return (
    <div>
        <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='fs-4 text-success'>Reviews</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            {
                                reviews.map(i => 
                                    <ListGroup.Item>
                                        <p>Name: {i.name}</p>
                                        <h5>Date: {i.date}</h5>
                                        <h5>Rating: {i.rating}</h5>
                                        <p>Comments: {i.comments}</p>
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

    </div>
  )
}

export default Comment
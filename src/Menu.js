import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Menu({ data }) {
  return (
    <div>
      {/* step -5 map atfer mapping the give the data to  */}
      <Container>
                    <Row>
                        {
                            data.map(i => (

                                <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mt-5'>
                                    <Link to={`menuView/${i.id}`} style={{textDecoration:'none', transition: '{.5}s ease-in-out'}}>
                                        <Card style={{ width:'16rem',height:'510px'}}>
                                            <Card.Img className='p-3' variant="top" src={i.photograph} />
                                            <Card.Body>
                                                <Card.Title className=' text-center text-dark fs-5'>{i.name}</Card.Title>
                                                <Card.Text className='p-1 text-dark'>
                                                    {i.address}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

    </div >
  )
}

export default Menu
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, ListGroup,  Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Time from './Time'
import Comment from './Comment'



function Singleview() {

  const [allUser, setUser] = useState([])

  const params = useParams()

  const getUser = async () => {
    const result = await fetch(`/restaurants.json`)
    result.json().then(data => {
      setUser(data.restaurants);
    })
  }
  //  console.log(allUser);


  useEffect(() => {
    getUser()
    //  console.log(params.id);

  }, [])

  const singleUser = allUser.find(i => i.id == params.id)
  console.log(singleUser);


  return (
   
   <div>

      {
        singleUser ?
          <div>
            <Container>
                            <Row>
                                <Col lg={6} md={12} sm={12} xl={6} >
                                    <Image className='w-75 p-5' style={{ height: '800px' }} src={singleUser.photograph} rounded />
                                </Col>
                                <Col lg={6} md={12} sm={12} xl={6} >
                                    <h1 className='p-5'>{singleUser.name}</h1>
                                    <ListGroup className='fs-4 mt-2 w-75' style={{ marginLeft: '2%' }}>
                                        <ListGroup.Item className='mt-2 p-4'  >Neighborhood <strong className='text-success'>{singleUser.neighborhood}</strong></ListGroup.Item>
                                        <ListGroup.Item className='mt-2 p-4'  >Address <strong className='text-success'>{singleUser.address}</strong></ListGroup.Item>
                                        <ListGroup.Item className='mt-2 p-4'  >Cusine Type <strong className='text-success'>{singleUser.cuisine_type}</strong></ListGroup.Item>
                                        <ListGroup.Item className='mt-2 p-4'>
                                            <Time timeData={singleUser.operating_hours} />
                                        </ListGroup.Item>
                                        <ListGroup.Item className='mt-2 p-4'>
                                            <Comment reviews={singleUser.reviews} />
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
          </div>
          : <h1>No Details present</h1>
      }

    </div>




  )
}

export default Singleview
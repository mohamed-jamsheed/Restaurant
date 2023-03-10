import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Row,Col,Image, ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Review from './Review';
import { useDispatch,useSelector } from 'react-redux';
import { RestaurantsList } from '../actions/homeAction';

function RestaurantView() {
    const params = useParams()
    console.log(params.id);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(RestaurantsList())
},[])


    const {restaurants} = useSelector(state=>state.restaurantReducer)
    console.log(restaurants);
    const restaurant = restaurants.find(item=>item.id == params.id)
    console.log(restaurant);
  return (
<>
{
    restaurant?  (<Row className='p-5'>
        <Col md={3}>
        <Image className='rounded border p-1' src={restaurant.photograph} alt={restaurant.name} fluid></Image>
        </Col>
        <Col md={8}>
        <ListGroup>
      <ListGroup.Item>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.neighborhood}</p>
      </ListGroup.Item>
      <ListGroup.Item><p>Cuisine: {restaurant.cuisine_type}</p></ListGroup.Item>
      <ListGroup.Item><p>Address: {restaurant.address}</p></ListGroup.Item>

      <ListGroup.Item>
      
      <Button className='ps-0 my-3' variant="dark" onClick={handleShow}>
        Click here See Restaurant Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <ListGroup>
        <ListGroup.Item><p>Monday: {restaurant.operating_hours.Monday}</p></ListGroup.Item>
        <ListGroup.Item><p>Tuesday: {restaurant.operating_hours.Tuesday}</p></ListGroup.Item>
        <ListGroup.Item><p>Wednesday: {restaurant.operating_hours.Wednesday}</p></ListGroup.Item>
        <ListGroup.Item><p>Monday: {restaurant.operating_hours.Thursday}</p></ListGroup.Item>
        <ListGroup.Item><p>Monday: {restaurant.operating_hours.Friday}</p></ListGroup.Item>
        <ListGroup.Item><p>Monday: {restaurant.operating_hours.Saturday}</p></ListGroup.Item>
        <ListGroup.Item><p>Monday: {restaurant.operating_hours.Sunday}</p></ListGroup.Item>

        </ListGroup>
        </Modal.Body>
       
      </Modal>
      </ListGroup.Item>

    <ListGroupItem>
      <p>
        <Review reviews={restaurant.reviews}/>
      </p>
    </ListGroupItem>

    </ListGroup>
        </Col>
      </Row>) : 'Nothing to Display'
      }
</>
  )
}

export default RestaurantView
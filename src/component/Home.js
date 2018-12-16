import React, {Component} from 'react';
import { Card, CardImg, ListGroup, ListGroupItem, CardBody,
  CardTitle } from 'reactstrap';
import './Home.css'

class Homes extends Component {
    render (){ 
        return (
            <div>
            <Card>
                <CardImg top width="100%" src="https://i.pinimg.com/originals/56/7c/e5/567ce59bb032960448baa9ee44ee8da3.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Suku dan Budaya Indonesia</CardTitle>
                    <ListGroup>
                        <ListGroupItem color="info">Suku dan Budaya Batak</ListGroupItem>
                        <ListGroupItem color="warning">Suku dan Budaya Padang</ListGroupItem>
                        <ListGroupItem color="success">Suku dan Budaya Jawa</ListGroupItem>
                        <ListGroupItem color="info">Suku dan Budaya Madura</ListGroupItem>
                        <ListGroupItem color="warning">Suku dan Budaya Dayak</ListGroupItem>
                        <ListGroupItem color="danger">Suku dan Budaya Sasak</ListGroupItem>
                        <ListGroupItem color="success">Suku dan Budaya Badui</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
            </div>
        );
        };
}

export default Homes;
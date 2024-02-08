import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import buildingImage from "../assets/images/building.png";
import officeImage from "../assets/images/office.jpg";
import castleImage from '../assets/images/castle.jpg';
export default function Dasboard() {
    return (
        <div>
            <Row className='mt-5'>
                <Col md={3}>
                    <Card className='card-struct'>
                        <Card.Body>
                            <div className='card-body'>
                                <div className="card-div">
                                    <p className='p-icon'>
                                        <FontAwesomeIcon icon="clone" />
                                    </p>
                                </div>
                                <div className='f-right'>
                                    <p className='text-heading'>Used Space</p>
                                    <h3 className='f-size'>49/50 Gb</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card-struct'>
                        <Card.Body className='card-body'>
                            <div className="card-div car-div2-color">
                                <p className='p-icon'>
                                    <FontAwesomeIcon icon="home" />
                                </p>
                            </div>
                            <div className='f-right'>
                                <p className='text-heading'>Revenue</p>
                                <h3 className='f-size'>$32.70</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card-struct'>
                        <Card.Body className='card-body'>
                            <div className="card-div car-div3-color">
                                <p className='p-icon'>
                                    <FontAwesomeIcon icon="warning" />
                                </p>
                            </div>
                            <div className='f-right'>
                                <p className='text-heading'>Fixed Issues</p>
                                <h3 className='f-size'>100</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card-struct'>
                        <Card.Body className='card-body'>
                            <div className="card-div car-div4-color">
                                <p className='p-icon'>
                                    <FontAwesomeIcon icon="kiwi-bird" />
                                </p>
                            </div>
                            <div className='f-right'>
                                <p className='text-heading'>Followers</p>
                                <h3 className='f-size'>+250</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <h3 className='mt-3'> Manage listing </h3>
                <Col md={4}>
                    <Card >
                        <Card.Img className="card-img" variant="top" src={buildingImage} alt="Card image" />
                        <Card.Body >
                            <Card.Title className='card-title-img'>Cozy 5 Stars Apartment</Card.Title>
                            <Card.Text>
                                <p className="card-text">The place is close to Barcelona Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.</p>
                                <hr />
                                <div className='d-inline'>
                                    <div className='f-left'>
                                        <h6>$899/night</h6>
                                    </div>
                                    <div className='f-right'>
                                        <h6> <FontAwesomeIcon icon="location-pin" /> &nbsp;Barcelona, Spain</h6>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={officeImage} alt="Card image" />
                        <Card.Body >
                            <Card.Title className='card-title-img'>Office Studio</Card.Title>
                            <Card.Text>
                                <p className="card-text">The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.</p>
                                <hr />
                                <div className='d-inline'>
                                    <div className='f-left'>
                                        <h6>$1899/night</h6>
                                    </div>
                                    <div className='f-right'>
                                        <h6> <FontAwesomeIcon icon="location-pin" /> &nbsp;Uk</h6>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card >
                        <Card.Img className="card-img" variant="top" src={castleImage} alt="Card image" />
                        <Card.Body >
                            <Card.Title className='card-title-img'>Beautiful Castle</Card.Title>
                            <Card.Text>
                                <p className="card-text">The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.</p>
                                <hr />
                                <div className='d-inline'>
                                    <div className='f-left'>
                                        <h6>$399/night</h6>
                                    </div>
                                    <div className='f-right'>
                                        <h6> <FontAwesomeIcon icon="location-pin" /> &nbsp;Milan, Italy</h6>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

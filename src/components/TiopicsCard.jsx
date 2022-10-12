import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const TiopicsCard = ({ topic }) => {
    const { id, logo, name, total } = topic;
    const navigate = useNavigate();
    
    const getSpecificQuiz = () => {
        navigate(`/quiz/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={logo} className="bg-dark" />
                <Card.Body className='d-flex justify-content-between align-items-center'>

                    <div><h5>{name}</h5></div>
                    <div className='text-danger'>Quiz <sup className='bg-primary text-white fw-bold rounded px-1'> {total}</sup></div>
                    <div><Button variant="info" className='fw-bolder text-white' onClick={getSpecificQuiz}>Practice</Button></div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default TiopicsCard;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const QuestionTiopicsCard = ({ topic }) => {
    const { id, logo, name, total } = topic;
    const navigate = useNavigate();
    const questionDetails = () => {
        navigate(`/quiz/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={logo} className="bg-dark" />
                <Card.Body className='d-flex justify-content-between align-items-center'>

                    <div><h5>{name}</h5></div>
                    <div><span className='text-danger fw-bold'>Total</span>: {total}</div>
                    <div><Button variant="info" className='fw-bolder text-white' onClick={questionDetails}>Practice</Button></div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default QuestionTiopicsCard;
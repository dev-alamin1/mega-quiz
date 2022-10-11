import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Quiz from './Quiz';

const Quizs = () => {
    const data = useLoaderData();
    const quizs = data.data
    const quizQuesitons = data.data.questions;
   
    return (
        <div className='container'>
            <Row xs={1} className="g-4 mb-5">
                <h2 className='text-center mt-5 fw-bolder'>Quiz of <span className='text-warning'>{quizs.name}</span></h2>
                {
                    quizQuesitons.map((questions, index) => <Quiz key={index} index={index} questions={questions} />)
                }
            </Row>
        </div>
    );
};

export default Quizs;




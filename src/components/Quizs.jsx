import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Quiz from './Quiz';

const Quizs = () => {
    const specificQuetion = useLoaderData();
    let { data } = specificQuetion;
    let {name , questions} = data;
   
    return (
        <div className='container'>
            <Row xs={1} className="g-4 mb-5">
                <h2 className='text-center mt-5 fw-bolder text-success'>Quiz of <span className='text-primary fw-bold'>{name}</span></h2>
                {
                    questions.map((questions, questionSerial) => <Quiz key={questionSerial} questionSerial={questionSerial} questions={questions} />)
                }
            </Row>
        </div>
    );
};

export default Quizs;




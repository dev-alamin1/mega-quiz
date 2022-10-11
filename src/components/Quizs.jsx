import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Quiz from './Quiz';

const Quizs = () => {
    const data = useLoaderData();
    const quizs = data.data
    const quizQuesitons = quizs.questions;
    // console.log(quesitons)

    // for(let quesiton of quesitons)
    // {
    //     console.log(quesiton)
    // }

    // console.log(data)

    return (
        <div className='container'>
            <Row xs={1} className="g-4 mb-5">
                <h2 className='text-center mt-5'>Quiz of {quizs.name}</h2>
                {
                    quizQuesitons.map((questions, index) => <Quiz key={index} questions={questions} />)
                }
            </Row>
        </div>
    );
};

export default Quizs;




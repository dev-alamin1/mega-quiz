import React from 'react';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Options from './Options';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = ({ questions }) => {

    // console.log(questions)
    const { options, id, question, correctAnswer } = questions;

    const correctAnshandler = (option) => {
        if (correctAnswer === option) {
            toast.success("Ans is correct ", { autoClose: 1000 });
        } else {
            toast.warning("Ans is False ", { autoClose: 1000 });
        }
    }

    const showCorrectAns = () => {
        toast.success(`Correct ans is : ${correctAnswer}`, { autoClose: 1000 });
    }

    return (
        <Col>
            <Card style={{ width: "70%", margin: "0 auto" }}>

                <Card.Body>
                    <div className='relative'>
                        <Card.Title className='text-center text-danger'>{question}</Card.Title>
                        <EyeIcon onClick={showCorrectAns} style={{ width: "20px", position: 'absolute', top: '15', right: '0' }} />

                    </div>
                    <div className="row  row-cols-md-2 g-4">

                        {
                            options.map((option, index) => <Options key={index} option={option} correctAnshandler={correctAnshandler} />)
                        }

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Quiz;
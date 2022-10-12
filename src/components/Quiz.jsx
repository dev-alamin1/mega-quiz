import React from 'react';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import QuizOptions from './QuizOptions';
import { EyeIcon } from '@heroicons/react/24/solid';
import { removeTags } from '../utils/StringReplace';

const Quiz = ({ questions, questionSerial }) => {
    
    const { options, question, correctAnswer } = questions;

    if (questionSerial >= 0) {
        questionSerial += 1;
    }

    const correctAnshandler = (option) => {
        if (correctAnswer === option) {
            toast.success("Ans is correct ", { autoClose: 1000 });
        } else {
            toast.warning("Ans is False ", { autoClose: 1000 });
        }
    }

    const viewCorrectAnswer = () => {
        toast.success(`Correct ans is : ${correctAnswer}`, { autoClose: 1000 });
    }

    const ques = removeTags(question);
    
    return (
        <Col>
            <Card style={{ width: "70%", margin: "0 auto" }} className='shadow-lg'>

                <Card.Body>
                    <div className='relative'>
                        <Card.Title className='text-center text-secondary'>Qeustion <sup className='bg-primary text-white px-2 rounded'>{questionSerial}</sup> : {ques}   </Card.Title>
                        <EyeIcon className='text-primary' onClick={viewCorrectAnswer} style={{ width: "20px", position: 'absolute', top: '15', right: '5' }} />

                    </div>
                    <div className="row  row-cols-md-2 g-4">

                        {
                            options.map((option, index) => <QuizOptions key={index} option={option} correctAnshandler={correctAnshandler} />)
                        }

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Quiz;
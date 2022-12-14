import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import TiopicsCard from './TiopicsCard';
import { TopicsContext } from './Root';
import { Col } from 'react-bootstrap';
const Home = () => {

    const topics = useContext(TopicsContext);
    const data = topics.data;
   
    return (
        <div className='mb-5'>
            <div className='container mb-4 mt-4'>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <div className='text-center mt-4'>
                            <h2 className='fw-bolder'><span className='text-warning'>Hello Dev ,</span> <br /> <span className='underline'>Test Your Skills Here..</span></h2>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <img src={'code-3.png'} alt="" style={{ height: '200px', width: "100%", borderRadius: "5px" }} />
                        </div>
                    </Col>
                </Row>

            </div>

            <div className='container'>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        data.map(topic=><TiopicsCard key={topic.id} topic={topic}/>)
                    }
                </Row>
             </div>

        </div>
    );
};

export default Home;
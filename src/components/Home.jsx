import Row from 'react-bootstrap/Row';

import { Col } from 'react-bootstrap';


const Home = () => {




    return (
        <div>
            <div className='container mb-4 mt-4'>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <div className='text-center mt-4'>
                            <h2><span className='text-warning'>Hello Devs ,</span> <br /> <span className='underline'>Test Your Skill Here..</span></h2>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <img src={'code-3.png'} alt="" style={{ height: '200px', width: "100%", borderRadius: "5px" }} />
                        </div>
                    </Col>
                </Row>

            </div>


        </div>
    );
};

export default Home;
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <div className='mt-5 w-75 mx-auto'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> What is the pupose of React Router ? </Accordion.Header>
                    <Accordion.Body>
                        React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. It plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>How context api works ?</Accordion.Header>
                    <Accordion.Body>
                        The Context API can be used to share data with multiple components, without having to pass data through props manually.
                        First, we will create a context API. After that, inside the provider of that context API, let's put our code. The Context API works like mobile towers. All components within its area will receive data from the Context API. No need to drill props separately. Simply, where the data is required, we can get the data  by using the context API.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is useRef hook? </Accordion.Header>
                    <Accordion.Body>
                        useRef() hook helps us to access DOM nodes directly. In React, data-flow is unidirectional. If a child component in React, needs to update something in parent component, the parent needs to pass a reference to child. Child then uses the reference for updating the parent.
                            <br/> <br/>
                        It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined.

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default Blogs;
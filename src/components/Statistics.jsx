import React, { useContext, PureComponent } from 'react';
import { TopicsContext } from './Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const quizTopics = useContext(TopicsContext);
    console.log(quizTopics.data)
    const datas = quizTopics.data;
    return (
        <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
    
                    <LineChart width={400} height={350}
                        data={datas.map(data => data)}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                        {/* <Line type="monotone" dataKey="total" stroke="#82ca9d" /> */}
                    </LineChart>
                    <br />
                    <h2 className='text-warning'>Statistics Of Quiz</h2>

         </div>
    );
};

export default Statistics;
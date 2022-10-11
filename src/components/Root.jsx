import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const TopicsContext = createContext([]);

const Root = () => {

    const topics = useLoaderData();
    console.log(topics)

    return (
        <TopicsContext.Provider value={topics}>
            <Header />
            <Outlet />
        </TopicsContext.Provider>
    );
};

export default Root;
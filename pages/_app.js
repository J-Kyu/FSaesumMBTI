import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
// import 'antd/dist/antd.css';


import {wrapper} from "./../store";


const App = ({Component}) => {

    
    return (
        <>
            <Head>
                <title>
                    SaesumMe
                </title>
            </Head>
            <style jsx global>{
            `
                body {
                    background: gray;
                }
            `
            }
            </style>
            
            <Component/>
        </>
    );
};

App.protoTypes ={
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
// export default App;
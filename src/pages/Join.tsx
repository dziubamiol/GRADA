import React from 'react';
import ScrollPage from '../components/ScrollPage';
import useJoinStyles from './styles/Join';
import Hello from './virtual/join/Hello';
import Personal from './virtual/join/Personal';
import Success from './virtual/join/Success';
import Security from './virtual/join/Security';
import Photo from './virtual/join/Photo';
import { FileReceiveEvent } from '../components/DragnDrop';


const Join = () => {
    const classes = useJoinStyles();

    const photoHandler = (event: FileReceiveEvent) => {
        console.log(event);
    }

    return (
        <div>
            <ScrollPage
                showNextButton={false}
                progressBar={true}
                pageClassName={classes.page}
            >
                <Hello/>
                <Security/>
                <Personal/>
                <Photo
                    photoHandler={photoHandler}
                />
                <Success/>
            </ScrollPage>
        </div>
    );
};

export default Join;

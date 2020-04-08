import React from 'react';
import { LinearProgress, Stepper } from '@material-ui/core';
import ScrollPage from '../components/ScrollPage';

const Join = () => {
    return (
        <div>
            <div
                style={{
                    height: '200px',
                    backgroundColor: '#000'
                }}
            >

            </div>
            <ScrollPage
                progressBar={true}
            >
                <div>
                    aaa
                </div>
                <div>
                    bbb
                </div>
                <div>
                    ccc
                </div>
            </ScrollPage>
        </div>
    );
};

export default Join;

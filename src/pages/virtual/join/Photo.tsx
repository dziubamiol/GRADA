import React from 'react';
import DragnDrop, { FileReceiveEvent } from '../../../components/DragnDrop';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useJoinStyles from '../../styles/Join';
import { nextPageFactory } from './utils/handlers';

export interface IPagePhoto {
    photoHandler: (event: FileReceiveEvent) => void;
}

const Photo = (props: IPagePhoto) => {
    const classes = useJoinStyles();
    const {photoHandler} = props;

    return (
        <React.Fragment>
            <div className={classes.logo}>
                <h1>
                    Photo? <span
                    role='img'
                    aria-label='camera'
                >
                            📸
                        </span>
                </h1>
                <p>
                    Provide any profile photo you want or skip this step, we will use stub.
                </p>
            </div>
            <div className={classes.contentBox}>
                <DragnDrop
                    onFileReceived={photoHandler}
                    allowedTypes={['image/jpeg', 'image/png']}
                >
                    Drop or click here
                </DragnDrop>
                <Link
                    to='/join?page=4'
                    className={classes.link}
                >
                    <Button
                        className={`${classes.button} ${classes.nextButton}`}
                        variant='contained'
                        fullWidth
                    >
                        Next
                    </Button>
                </Link>
            </div>

        </React.Fragment>
    );
};

export default Photo;

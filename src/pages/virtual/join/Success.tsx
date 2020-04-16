import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useJoinStyles from '../../styles/Join';

const Success = () => {
    const classes = useJoinStyles();

    return (
        <React.Fragment>
            <div className={classes.logo}>
                <p
                    className={classes.icon}
                >
                            <span
                                role='img'
                                aria-label='success'
                            >
                                🎉
                            </span>
                </p>
                <h1>
                    Success!
                </h1>
                <p>
                    Welcome aboard.
                </p>
            </div>
            <div className={classes.contentBox}>
                <Link
                    to='/'
                    className={classes.link}
                >
                    <Button
                        className={`${classes.button} ${classes.nextButton}`}
                        variant='contained'
                        fullWidth
                    >
                        Finish
                    </Button>
                </Link>
            </div>

        </React.Fragment>
    );
};

export default Success;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { useForm } from '../components/hooks/hooks';
import Validator from '../API/Validator';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        minHeight: '100vh',
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '3 1',
        textAlign: 'center',
        margin: '0 40px',
        maxWidth: '350px',
    },
    logo: {
        flex: '1 1',
        display: 'flex',
        alignItems: 'center',
    },
    animationBox: {
        backgroundColor: theme.palette.secondary.dark
    },
    formBox: {},
    signUpBox: {},
    button: {
        margin: '8px 0 4px 0',
    },
    signUpButton: {
        backgroundColor: theme.palette.success.main,
        '&:hover': {
            backgroundColor: theme.palette.success.dark
        }
    },
    footer: {
        height: '50px',
        fontSize: '.8em'
    },
    '@media screen and (max-width: 1000px)': {
        root: {
            gridTemplateColumns: '1fr'
        },
        animationBox: {
            display: 'none'

        }
    },
    link: {
        width: '100%',
        textDecoration: 'none'
    },
}));


const Join = () => {
    const classes = useStyles();

    const [formData, fillForm] = useForm();
    const [errors, setErrors] = useState<Map<string, string>>(new Map());

    const validator = new Validator([
        {
            name: 'password',
            type: 'password',
            required: true
        },
        {
            name: 'email',
            type: 'email',
            required: true
        }
    ]);

    const authorize = () => {
        const errors = validator.validate(formData);
        setErrors(errors);
    };

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.logo}>
                    <h1>GRADA!</h1>
                </div>
                <div className={classes.contentBox}>
                    <div className={classes.formBox}>
                        <form noValidate>
                            <TextField
                                fullWidth
                                label='Email'
                                type='email'
                                name='email'
                                variant='outlined'
                                margin='dense'
                                required
                                error={errors.has('email')}
                                helperText={errors.get('email')}
                                onChange={fillForm}
                            />
                            <TextField
                                fullWidth
                                label='Password'
                                type='password'
                                name='password'
                                variant='outlined'
                                margin='dense'
                                required
                                error={errors.has('password')}
                                helperText={errors.get('password')}
                                onChange={fillForm}
                            />

                            <Button
                                className={classes.button}
                                color='primary'
                                fullWidth
                                variant='contained'
                                onClick={authorize}
                            >
                                Sign In
                            </Button>
                        </form>
                        <div className={classes.signUpBox}>
                            <Link
                                to='/join?page=0'
                                className={classes.link}
                            >
                                <Button
                                    className={`${classes.signUpButton} ${classes.button}`}
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                        <p>New to our service?</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className={classes.footer}>
                    <p>
                        Some credits text © 2020
                    </p>
                </div>
            </div>
            <div className={classes.animationBox}>

            </div>
        </div>
    );
};

export default Join;

import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useJoinStyles from '../../styles/Join';
import { FormActionElements, formRefFactory, keyDownHandlerFactory, nextPageFactory } from './utils/handlers';
import { useForm } from '../../../components/hooks/hooks';
import Validator from '../../../API/Validator';

const Security = () => {
    const classes = useJoinStyles();
    const history = useHistory();
    const [formData, fillForm] = useForm();
    const [errors, setErrors] = useState<Map<string, string>>(new Map());

    const validator = new Validator([
        {
            name: 'password',
            type: 'password',
            required: true,
        },
        {
            name: 'repeatPassword',
            type: 'password',
            required: true,
        }
    ]);

    const refCollection: Array<FormActionElements> = [];
    const formRef = formRefFactory(refCollection);

    const keyDownHandler = keyDownHandlerFactory(refCollection);

    const nextPage = nextPageFactory(history);

    const handleNext = (pageURL: string) => {
        return () => {
            const errors = validator.validate(formData);
            if (errors.size === 0) {
                if (formData.get('password') !== formData.get('repeatPassword')) {
                    errors.set('repeatPassword', 'Passwords are not the same')
                    setErrors(new Map(errors));
                } else {
                    setErrors(new Map());
                    nextPage(pageURL);
                }
            }
        }
    }

    return (
        <React.Fragment>
            <div className={classes.logo}>
                <h1>
                    About security <span
                    role='img'
                    aria-label='key'
                >
                            🔑
                        </span>
                </h1>
                <p>
                    Your password should contain 8-16 symbols with numbers, lower and upper case.
                </p>
            </div>
            <div className={classes.contentBox}>
                <form
                    noValidate
                    className={classes.form}
                >
                    <TextField
                        fullWidth
                        label='Password'
                        type='password'
                        name='password'
                        variant='outlined'
                        margin='dense'
                        required
                        onKeyDown={keyDownHandler}
                        inputRef={(el: HTMLInputElement) => formRef(el)}
                        onChange={fillForm}
                        error={errors.has('password')}
                        helperText={errors.get('password')}
                    />
                    <TextField
                        fullWidth
                        label='Repeat password'
                        type='password'
                        name='repeatPassword'
                        variant='outlined'
                        margin='dense'
                        required
                        onKeyDown={keyDownHandler}
                        inputRef={(el: HTMLInputElement) => formRef(el)}
                        onChange={fillForm}
                        error={errors.has('repeatPassword')}
                        helperText={errors.get('repeatPassword')}
                    />
                </form>
                <Button
                    className={`${classes.button} ${classes.nextButton}`}
                    variant='contained'
                    fullWidth
                    onClick={handleNext('/join?page=2')}
                    ref={(el: HTMLButtonElement) => formRef(el)}
                >
                    Next
                </Button>
            </div>

        </React.Fragment>
    );
};

export default Security;

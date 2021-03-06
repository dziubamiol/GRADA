import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useJoinStyles from '../../styles/Join';
import { FormActionElements, formRefFactory, keyDownHandlerFactory, nextPageFactory } from './utils/handlers';
import { useForm } from '../../../components/hooks/hooks';
import Validator from '../../../API/Validator';

const Hello = () => {
    const classes = useJoinStyles();
    const history = useHistory();
    const [formData, fillForm] = useForm();
    const [errors, setErrors] = useState<Map<string, string>>(new Map());

    const validator = new Validator([
        {
            name: 'username',
            type: 'username',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
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
            setErrors(errors)

            if (errors.size === 0) {
                console.log('nextPage');
                nextPage(pageURL);
            }
        }
    }

    return (
        <React.Fragment>
            <div className={classes.logo}>
                <h1>
                    Hello! <span
                    role='img'
                    aria-label='hand'
                >
                            👋
                        </span>
                </h1>
                <p>
                    My name is GRADA, lets get started!
                </p>
            </div>
            <div className={classes.contentBox}>
                <form
                    noValidate
                    className={classes.form}
                >
                    <TextField
                        fullWidth
                        label='Username'
                        type='text'
                        name='username'
                        variant='outlined'
                        margin='dense'
                        required
                        onKeyDown={keyDownHandler}
                        inputRef={(el: HTMLInputElement) => formRef(el)}
                        autoFocus={true}
                        onChange={fillForm}
                        error={errors.has('username')}
                        helperText={errors.get('username')}
                    />
                    <TextField
                        fullWidth
                        label='Email'
                        type='email'
                        name='email'
                        variant='outlined'
                        margin='dense'
                        required
                        onKeyDown={keyDownHandler}
                        inputRef={(el: HTMLInputElement) => formRef(el)}
                        onChange={fillForm}
                        error={errors.has('email')}
                        helperText={errors.get('email')}
                    />
                </form>

                <Button

                    className={`${classes.button} ${classes.nextButton}`}
                    variant='contained'
                    fullWidth
                    onClick={handleNext('/join?page=1')}
                    ref={(el: HTMLButtonElement) => formRef(el)}
                >
                    Next
                </Button>
            </div>

        </React.Fragment>
    );
};

export default Hello;

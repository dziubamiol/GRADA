import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useJoinStyles from '../../styles/Join';
import { FormActionElements, formRefFactory, keyDownHandlerFactory, nextPageFactory } from './utils/handlers';
import { useForm } from '../../../components/hooks/hooks';
import Validator from '../../../API/Validator';

const Personal = () => {
    const classes = useJoinStyles();
    const history = useHistory();
    const [formData, fillForm] = useForm();
    const [errors, setErrors] = useState<Map<string, string>>(new Map());

    const validator = new Validator([
        {
            name: 'firstName',
            type: 'name',
            required: true,
        },
        {
            name: 'lastName',
            type: 'name',
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
            console.log(errors);
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
                    About You <span
                    role='img'
                    aria-label='pupil'
                >
                            👩‍🎓👩‍🏫👨‍💻
                        </span>
                </h1>
                <p>
                    Provide your real names and position, this is for your colleagues.
                </p>
            </div>
            <div className={classes.contentBox}>
                <form
                    noValidate
                    className={classes.form}
                >
                    <TextField
                        fullWidth
                        label='First name'
                        type='text'
                        name='firstName'
                        variant='outlined'
                        margin='dense'
                        required
                        onKeyDown={keyDownHandler}
                        inputRef={(el: HTMLInputElement) => formRef(el)}
                        error={errors.has('firstName')}
                        helperText={errors.get('firstName')}
                        onChange={fillForm}
                    />
                    <TextField
                        fullWidth
                        label='Last name'
                        type='text'
                        name='lastName'
                        variant='outlined'
                        margin='dense'
                        required
                        onKeyDown={keyDownHandler}
                        inputRef={(el: HTMLInputElement) => formRef(el)}
                        error={errors.has('lastName')}
                        helperText={errors.get('lastName')}
                        onChange={fillForm}
                    />
                    <FormControl
                        variant='outlined'
                        fullWidth
                        disabled
                        margin='dense'
                    >
                        <InputLabel>Position</InputLabel>
                        <Select>
                            <MenuItem>
                                Student
                            </MenuItem>
                            <MenuItem>
                                Teacher
                            </MenuItem>
                            <MenuItem>
                                Helicopter
                            </MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Button
                    ref={(el: HTMLButtonElement) => formRef(el)}
                    className={`${classes.button} ${classes.nextButton}`}
                    variant='contained'
                    fullWidth
                    onClick={handleNext('/join?page=3')}
                >
                    Next
                </Button>
            </div>

        </React.Fragment>
    );
};

export default Personal;

import React, { useState } from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core';
import ScrollPage from '../components/ScrollPage';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    page: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '2 1',
        textAlign: 'center',
        margin: '0 40px',
        maxWidth: '350px',
    },
    form: {
        width: '100%'
    },
    logo: {
        flex: '1 1',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '100px'
    },
    button: {
        margin: '8px 0 4px 0',
        color: '#fff'
    },
    nextButton: {
        backgroundColor: theme.palette.success.main,
        '&:hover': {
            backgroundColor: theme.palette.success.dark
        }
    },
    link: {
        width: '100%',
        textDecoration: 'none'
    }
}));


const Join = () => {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(0);
    const lastPageIndex = 4;
    // Hello!
    // login {form}
    // email {form}
    // ->
    // now create your password
    // password {form}
    // repeat your password {form}
    // ->
    // More about real You
    // First name {form}
    // Last name {form}
    // Position: student, teacher, helicopter {form}
    // ->
    // What about photo?
    // Drag & drop photo {form}
    // Skip {button}
    // ->
    // Success!
    // Welcome aboard {button}

    const nextPageHandler = () => {
        setCurrentPage(prevState => prevState < lastPageIndex ? prevState + 1 : 4);
    }


    return (
        <div>
            <ScrollPage
                showNextButton={false}
                progressBar={true}
                pageClassName={classes.page}
            >
                <React.Fragment>
                    <div className={classes.logo}>
                        <h1>
                            Hello! 👋
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
                            />
                            <TextField
                                fullWidth
                                label='Email'
                                type='email'
                                name='email'
                                variant='outlined'
                                margin='dense'
                                required
                            />
                        </form>

                        <Link
                            to='/join?page=1'
                            className={classes.link}
                        >
                            <Button
                                className={`${classes.button} ${classes.nextButton}`}
                                variant='contained'
                                fullWidth
                                onClick={nextPageHandler}
                            >
                                Next
                            </Button>
                        </Link>
                    </div>

                </React.Fragment>
                <React.Fragment>
                    <div className={classes.logo}>
                        <h1>
                            About security 🔑
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
                            />
                            <TextField
                                fullWidth
                                label='Repeat password'
                                type='password'
                                name='repeatPassword'
                                variant='outlined'
                                margin='dense'
                                required
                            />
                        </form>
                        <Link
                            to='/join?page=2'
                            className={classes.link}
                        >
                            <Button
                                className={`${classes.button} ${classes.nextButton}`}
                                variant='contained'
                                fullWidth
                                onClick={nextPageHandler}
                            >
                                Next
                            </Button>
                        </Link>
                    </div>

                </React.Fragment>
                <React.Fragment>
                    <div className={classes.logo}>
                        <h1>
                            About You 👩‍🎓👩‍🏫👨‍💻
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
                            />
                            <TextField
                                fullWidth
                                label='Last name'
                                type='text'
                                name='lastName'
                                variant='outlined'
                                margin='dense'
                                required
                            />
                            <FormControl
                                variant='outlined'
                                fullWidth
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
                        <Link
                            to='/join?page=3'
                            className={classes.link}
                        >
                            <Button
                                className={`${classes.button} ${classes.nextButton}`}
                                variant='contained'
                                fullWidth
                                onClick={nextPageHandler}
                            >
                                Next
                            </Button>
                        </Link>
                    </div>

                </React.Fragment>
            </ScrollPage>
        </div>
    );
};

export default Join;

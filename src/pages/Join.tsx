import React from 'react';
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
import DragnDrop, { FileReceiveEvent } from '../components/DragnDrop';


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
        minWidth: '150px',
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
        paddingTop: '100px',
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
    },
    icon: {
        marginBottom: '-10px',
        fontSize: '2.5em',
    }
}));


const Join = () => {
    const classes = useStyles();


    const fileHandler = (event: FileReceiveEvent) => console.log(event);


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
                            >
                                Next
                            </Button>
                        </Link>
                    </div>

                </React.Fragment>
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
                            >
                                Next
                            </Button>
                        </Link>
                    </div>

                </React.Fragment>
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
                            >
                                Next
                            </Button>
                        </Link>
                    </div>

                </React.Fragment>
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
                            onFileReceived={fileHandler}
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
            </ScrollPage>
        </div>
    );
};

export default Join;

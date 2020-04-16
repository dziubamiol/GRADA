import { makeStyles } from '@material-ui/core/styles';

const useJoinStyles = makeStyles(theme => ({
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

export default useJoinStyles;

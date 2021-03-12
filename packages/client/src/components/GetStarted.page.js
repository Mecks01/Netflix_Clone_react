import React from 'react'
import {
    Typography,
    TextField,
    makeStyles,
    Button
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      padding: '70px 45px',
      color: '#fff',
      borderBottom: '8px solid #222',
    },
    container: {
        maxWidth: '950px',
        zIndex: '1',
    },
    text2: {
        fontSize: '20px',
        marginTop: '20px',
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        marginTop: '20px',
        borderTopLeftRadius: '0%',
        borderBottomLeftRadius: '0%',
        height: '60px',
        width: '30%',
        fontSize: '20px',
        backgroundColor: '#e50914',

        '&:hover': {
            backgroundColor: '#e50914',
        },
    },
    heading: {
        fontSize: '3.125em',
        lineHeight: '1.1',
        marginBottom: '1em',
        fontWeight: 'bold',  
    },
    title: {
      fontSize: '26px',
      paddingLeft: '.8em',
    },
    description: {
        fontSize: '26px',
        display: 'inline-block',
        padding: '1.2em',
        textAlign: 'left',
        maxWidth: '780px',
      },
    form: {
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        alignItems: 'center',
        maxWidth: '950px',
        paddingTop: '.85rem;',
    },
  });

const useStylesReddit = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius:0,
        backgroundColor: '#fcfcfb',
        height: '60px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',    
            borderColor: theme.palette.primary.main,
        },
    },

    focused: {},
}));

const CustomTextField = makeStyles((theme) => ({

    textField: {
        marginTop: '20px',
        width: '70%',
        borderTopRightRadius: '0%',
        borderBottomRightRadius: '0%',
    },
}));

function RedditTextField(props) {
    const classes = useStylesReddit();
    const classTextField = CustomTextField();

    return <TextField className={classTextField.textField} InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const GetStarted = () =>{
    const classe = useStyles(); 
    return (
        <>
            <form className={classe.container}>
                <Typography variant="h6" className={classe.text2}>Ready to watch? Enter your email to create or restart your membership.</Typography>
                <div className={classe.form}>
                <RedditTextField
                    label="Email address"  
                    variant="filled"
                    id="reddit-input"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classe.button}
                >
                    GET STARTED
                </Button>
                </div>
            
            </form>
        </>
    );
}

export default GetStarted

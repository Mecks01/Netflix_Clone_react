import './HomePage.style.css';
import {
    Typography,
    CardContent,
    makeStyles,
    Grid
} from '@material-ui/core';
import React from "react";
import Background from "../../components/Background.page";
import NavBar from '../../components/NavBar.page';
import Footer from '../../components/Footer.page';
import GetStarted from "../../components/GetStarted.page";
import Faq from "../../components/Sections/Faqs";
import SectionVideo from "../../components/Sections/SectionVideo";


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
        backgroundColor: '#303030',
        color: '#fff',
        alignItems: 'center',
        margin: '0 auto',
        marginBottom: '8px',
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
    home: {
        position: 'absolute',
        zIndex: '10',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderBottom: '8px solid #222',
    },
  });

const HomePage = () =>{
    const classe = useStyles(); 
    return (
        <>
            <NavBar />
            <Background />
            <CardContent
                className={classe.home}
            >
                <Grid
                    container
                    spacing={2}
                    className="container"
                >
                    <Grid
                        item
                        md={12}
                        xs={12}
                    >
                        <Typography variant="h1" className="text1">Unlimited movies, TV shows, and more.</Typography>
                        <Typography variant="h4" className="text2">Watch anywhere. Cancel anytime.</Typography>

                        <GetStarted />
                    
                    </Grid>
                </Grid>
            </CardContent>
            <SectionVideo/>
            <Faq/>
            <Footer/>
        </>
    );
}

export default HomePage;
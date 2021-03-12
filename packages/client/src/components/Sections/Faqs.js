import React from 'react';
import './Section.css'
import GetStarted from "../GetStarted.page";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,    
    makeStyles
} from '@material-ui/core';


import AddIcon from '@material-ui/icons/Add';
import faqData from '../../fixtures/faqs.json';

const useStyles = makeStyles({
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
  });


function Faqs() {
    const classe = useStyles();
    return (
        <div className="bloc-section">
                <Typography variant="h2" className={classe.heading}>
                    Frequently Asked Questions
                </Typography>

                {faqData.map((item) => (
                <Accordion key={item.id} className={classe.container}>
                    <AccordionSummary
                    expandIcon={<AddIcon fontSize="large" style={{ color: '#fff' }} />}
                    >
                    <Typography className={classe.title}>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classe.description}>
                        {item.description}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                ))}
                
                <GetStarted />    
            </div>
    )
}

export default Faqs

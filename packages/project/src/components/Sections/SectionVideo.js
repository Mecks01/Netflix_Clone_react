import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../../fixtures/Sections.json';

const useStyles = makeStyles((theme) => ({
    image: {
        height: 'auto',
        margin: '-8% 0 -4% -15%',
        maxWidth: '75%',
    },
    img: {
    //   margin: 'auto',
    //   display: 'block',
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
    },
    heading: {
        fontSize: '3.125em',
        lineHeight: '1.1',
        marginBottom: '20px',
        fontWeight: 'bold',
        marginTop: '.25em',
    },
  }));

const SectionVideo =()=> {
    const classes = useStyles();
    return (
        <>
        {Section.map((item, index)=>
            index%2?
                <Grid className="bloc-height" container key={index}>
                    <Grid className="bloc-item" container>
                        <Grid className="child-bloc marg" item lg={6} md={6} container>
                            <Grid className={classes.image}>
                                <img className={classes.img} alt="complex" src={item.image} />
                            </Grid>
                        </Grid> 
                        <Grid className="child-bloc marg" item lg={6} md={6} container>
                            <Grid item>
                                <Typography variant="h2" className={classes.heading}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h5">
                                    {item.description}
                                </Typography>
                            </Grid>
                        </Grid> 
                    </Grid>           
                </Grid>
            :<Grid  className="bloc-height" container key={index}>
                <Grid className="bloc-item" container>
                    <Grid className="align-center marg" item lg={6} md={6} container>
                        <Grid item>
                            <Typography variant="h2" className={classes.heading}>
                                {item.title}
                            </Typography>
                            <Typography variant="h5">
                                {item.description}
                            </Typography>
                        </Grid>
                    </Grid> 
                    <Grid className="align-center marg" item lg={6} md={6} container>
                        <Grid item className={classes.image}>
                            <img className={classes.img} alt="complex" src={item.image} />
                        </Grid>
                    </Grid>
                </Grid>     
            </Grid>
            
        )}  
        </>
    )
}

export default SectionVideo

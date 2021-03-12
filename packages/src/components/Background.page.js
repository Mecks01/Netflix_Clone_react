import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fond from "../public/image/Fond.jpg";

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  imgGradient: {
    width: '100%',
    height: '100%',
    position: "absolute",
    background: 'rgba(0,0,0,.7)',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
}
});

const Background = () =>{ 
    const classes = useStyles();
    return (
        <> 
          <div className={classes.imgGradient}></div>
            <img src={Fond} alt="fond" className={classes.root}/>
        </>
    );
}

export default Background;
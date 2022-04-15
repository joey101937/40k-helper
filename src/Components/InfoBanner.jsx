import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'rgba(40,40,40, 1)',
            textAlign: 'center',
            minHeight: '20px',
            width: '1000px',
            display: 'inline-block',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            color: 'white',
            fontWeight: 'bold',
            paddingTop: '10px',
            paddingBottom: '10px',
            marginBottom: '10px',
        }),
        item: () => ({
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingTop: '5px',
            paddingBottom: '5px',
            display: 'inline-block',
            cursor: 'pointer',
            role: 'button',
            borderRadius: '5px',
            "&:hover": {
                background: "rgb(60,60,60)"
              },
        })
    }
});

const InfoBanner = (props) => {
    const classes = useStyles(props);
    const {
        onSiClick
    } = props;
    return (
        <div className={classes.root}>
            <div className={classes.item}>
             Strategems
            </div>
            <div className={classes.item} onClick={onSiClick}>
             Synaptic Imperatives
            </div>
            <div className={classes.item}>
             Psychic Powers
            </div>
            <div className={classes.item}>
             Adaptive Physiologies
            </div>
        </div>
    );
};

export default InfoBanner; 
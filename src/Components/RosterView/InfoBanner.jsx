import React from 'react';
import { makeStyles } from '@mui/styles';
import HiveFleetPanel from './HiveFleetPanel';

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
            paddingLeft: '25px',
            paddingRight: '25px',
            paddingTop: '5px',
            paddingBottom: '5px',
            display: 'inline-block',
            cursor: 'pointer',
            role: 'button',
            verticalAlign: 'middle',
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
        onSiClick, onWiClick, onPpClick, onApClick, onRClick, onSClick
    } = props;
    return (
        <div className={classes.root}>
            <div className={classes.item} onClick={onSClick}>
                Strategems
            </div>
            <div className={classes.item} onClick={onSiClick}>
                Synaptic Imperatives
            </div>
            <div className={classes.item} onClick={onPpClick}>
                Psychic Powers
            </div>
            <div className={classes.item} onClick={onApClick}>
                Adaptive Physiologies
            </div>
            <div className={classes.item} onClick={onWiClick}>
                Warlord Traits
            </div>
            <div className={classes.item} onClick={onRClick}>
                Relics
            </div>
        </div>
    );
};

export default InfoBanner; 
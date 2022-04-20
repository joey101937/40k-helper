import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import image from '../40khelperlogo.png'
import { darkGray, mediumGray } from '../GLOBALS';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            color: props.testValue === 'hi' ? 'blue' : 'rgb(240,240,240)',
            background: darkGray,
            textAlign: 'left',
            minHeight: '80px',
            paddingTop: '15px',
            minWidth: '1000px',
        }),
        titleText: (props) => ({
            color: props.testValue === 'hi' ? 'blue' : 'rgb(240,240,240)',
            display: 'inline-block',
        }),
        item: (props) => ({
            display: 'inline-block',
            fontWeight: 'bold',
            verticalAlign: 'top',
            marginLeft: '20px',
            marginTop: '10px',
            fontSize: '14pt',
           // background: 'rgb(40,80,40)',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            "&:hover": {
                background: mediumGray
              },
        }),
    }
});

const TopBanner = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
           <Link className={classes.titleText} to="/">
                <img alt={'logo'} src={image} />
            </Link>
            <div className={classes.item}>
                Create Roster
            </div>
            <div className={classes.item}>
                Load Roster
            </div>
        </div>
    );
};

export default TopBanner; 
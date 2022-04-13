import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import image from '../40khelperlogo.png'

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            color: props.testValue === 'hi' ? 'blue' : 'rgb(240,240,240)',
            background: 'rgb(40,40,40)',
            textAlign: 'center',
            minHeight: '80px',
            paddingTop: '15px',
            minWidth: '1000px',
        }),
        titleText: (props) => ({
            color: props.testValue === 'hi' ? 'blue' : 'rgb(240,240,240)',
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
        </div>
    );
};

export default TopBanner; 
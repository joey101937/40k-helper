import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'rgba(220,220,220, .9)',
            textAlign: 'center',
            minHeight: '80px',
            width: '1000px',
            display: 'inline-block',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }),
    }
});

const ContentPanel = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
        </div>
    );
};

export default ContentPanel; 
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import image from '../40khelperlogo.png'
import { darkGray, loginColor, mediumGray, red1 } from '../GLOBALS';
import ProfileLoginButton from './ProfileLoginButton';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            color: props.testValue === 'hi' ? 'blue' : 'rgb(240,240,240)',
            background: darkGray,
            textAlign: 'left',
            minHeight: '80px',
            paddingTop: '15px',
            minWidth: '1100px',
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
            borderRadius: '5px',
            padding: '10px',
            color: 'white',
            cursor: 'pointer',
            "&:hover": {
                background: mediumGray
              },
        }),
    }
});

const TopBanner = (props) => {
    const { loadingLoginRequest } = props;
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
           <Link className={classes.titleText} to="/">
                <img alt={'logo'} src={image} />
            </Link>
            <Link to={'/createRoster'}>
                <div className={classes.item}>
                    Create Roster
                </div>
            </Link>
            <Link to={'/load'}>
                <div className={classes.item}>
                    Load Roster
                </div>
            </Link>
            {loadingLoginRequest && <CircularProgress style={{ color: loginColor, float: 'right', marginRight: '25px'}} />}
            {!loadingLoginRequest && <ProfileLoginButton currentUser={props.currentUser} openLoginModal={props.openLoginModal} doLogout={props.doLogout} />}
        </div>
    );
};

export default TopBanner; 
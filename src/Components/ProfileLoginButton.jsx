import React from 'react';
import { makeStyles } from '@mui/styles';
import { loginColor, red1 } from '../GLOBALS';

const useStyles = makeStyles((theme) => {
    return {
        loginButton: (props) => ({
            background: red1,
            textAlign: 'center',
            height: '30px',
            width: '100px',
            marginRight: '15px',
            marginTop: '10px',
            display: 'inline-block',
            borderRadius: '5px',
            float: 'right',
            paddingTop: '8px',
            verticalAlign: 'middle',
            cursor: 'pointer',
        }),
        profilePanel: (props) => ({
            background: red1,
            textAlign: 'center',
            height: '30px',
            width: '100px',
            marginRight: '15px',
            display: 'inline-block',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            float: 'right',
            paddingTop: '8px',
            verticalAlign: 'middle',
        }),
        logoutButton: (props) => ({
            background:  red1, // 'rgba(255,50,50, .9)',
            textAlign: 'center',
            marginTop: '8px',
            width: '100px',
            display: 'inline-block',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            float: 'right',
            verticalAlign: 'middle',
            cursor: 'pointer',
        }),
    }
});

const ProfileLoginButton = (props) => {
    const { currentUser, openLoginModal, doLogout } = props;
    const classes = useStyles(props);
    if (!currentUser) {
        return (
            <div className={classes.loginButton} onClick={openLoginModal}>
                Log In
            </div>
        );
    } else {
        return (
            <div className={classes.profilePanel}>
                {currentUser?.user?.username || 'error'}
                <div className={classes.logoutButton} onClick={doLogout}>
                    Log Out
                </div>
            </div>
        )
    }
};

export default ProfileLoginButton; 
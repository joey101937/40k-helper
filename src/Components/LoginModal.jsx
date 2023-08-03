import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, CircularProgress, Dialog, DialogContent, OutlinedInput } from '@material-ui/core';
import { loginColor, red1 } from '../GLOBALS';

const useStyles = makeStyles((theme) => {
    return {
        paper: (props) => ({
            top: '15%',
            position: 'absolute',
        }),
        modalContents: (props) => ({
            background: 'rgba(220,220,220, .9)',
            minHeight: '80px',
            width: '500px',
            display: 'block',
            paddingTop: '10px !important',
        }),
        titleBar: () => ({
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '16pt',
            paddingBottom: '10px',
            borderBottom: '1px solid #555555',
            marginBottom: '20px',
        }),
        footer: () => ({
            textAlign: 'center',
            marginTop: '20px',
        }),
        LoginButton: () => ({
            backgroundColor: `${red1} !important`,
            color: 'white !important',
            marginBottom: '2px',
            minWidth: '100px',
        }),
        body: () => ({
            marginLeft: '0%',
            textAlign: 'center',
        }),
        label: () => ({
            display: 'inline-block',
            marginRight: '10px',
            paddingTop: '5px',
        }),
        inputRoot: () => ({
            height: '40px',
        }),
        usernameContainer: () => ({
            marginBottom: '10px',
        }),
        registerTag: () => ({
            color: red1,
            cursor: 'pointer',
        }),
    }
});


const LoginModal = (props) => {
    const { open, onClose, onLogin, onRegister } = props;
    const classes = useStyles(props);
    const [registerMode, setRegisterMode] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onLoginPress = async () => {
        if (!username || !password || isLoading) {
            console.log(username);
            console.log(password);
            return;
        }
        setisLoading(true)
        if (!registerMode) {
            const res = await onLogin(username, password);
            if (res.jwt) {
                setErrorMessage('')
                onClose();
            } else if(res.message) {
                setErrorMessage(res.message);
            }
        } else {
            const res = await onRegister(username, password);
            if (res.jwt) {
                setErrorMessage('')
                onClose();
            } else if(res.message) {
                setErrorMessage(res.message);
            }
        }
        setisLoading(false);
    };


    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    {`${registerMode ? 'Register' : 'Login'}`}
                </div>
                {!isLoading && <><div className={classes.body}>
                    <div className={classes.usernameContainer}>
                        <div className={classes.label}>Username: </div>
                        <OutlinedInput
                            classes={{ root: classes.inputRoot }}
                            variant='outlined'
                            value={username}
                            onChange={({ target: { value } }) => { setUsername(value) }}
                        />
                    </div>
                    <div>
                        <div className={classes.label}>Password: </div>
                        <OutlinedInput
                            classes={{ root: classes.inputRoot }}
                            type='password'
                            value={password}
                            onChange={({ target: { value } }) => { setPassword(value) }}
                        />
                    </div>
                    <div>
                        {errorMessage}
                    </div>
                </div>
                    <div className={classes.footer}>
                        <Button className={classes.LoginButton} onClick={onLoginPress}>
                            {registerMode ? 'Register' : 'Login'}
                        </Button>
                        <div className={classes.registerTag} onClick={() => setRegisterMode(!registerMode)}>
                            {registerMode ? 'Login' : 'Register'}
                        </div>
                    </div></>}
                {isLoading && <div style={{ textAlign: 'center' }}><CircularProgress style={{ color: red1 }} /></div>}
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal; 
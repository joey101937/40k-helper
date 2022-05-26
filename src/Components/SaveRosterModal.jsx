import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent, OutlinedInput } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { loginColor } from '../GLOBALS';
import { upsertRoster } from '../actions/rosterActions';
import LoginModal from './LoginModal';

const useStyles = makeStyles((theme) => {
    return {
        paper: (props) => ({
            top: '15%',
            position: 'absolute',
        }),
        modalContents: (props) => ({
            background: 'rgba(220,220,220, .9)',
            minHeight: '80px',
            width: '860px',
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
            verticalAlign: 'bottom'
        }),
        cacheButtonRoot: () => ({
            backgroundColor: '#805938 !important',
            color: 'white !important',
            marginTop: '10px',
        }),
        loginButtonRoot: () => ({
            backgroundColor: `${loginColor} !important`,
            color: 'white !important',
            marginTop: '10px',
        }),
        body: () => ({
            marginLeft: '0%',
            whiteSpace: 'nowrap',
        }),
        optionPane: () => ({
            verticalAlign: 'top',
            display: 'inline-block',
            width: '50%',
            height: '300px',
            textAlign: 'center',
            whiteSpace: 'normal'
        }),
        optionHeader: () => ({
            fontWeight: 'bold',
            fontSize: '14pt',
            marginBottom: '15px',
        }),
    }
});



const SaveRosterModal = (props) => {
    const {open, onClose, units, currentHiveFleet, saveToCache, onCreateRoster, currentUser, loginModalProps, setLoadedRoster} = props;
    const classes = useStyles(props);
    const navigate = useNavigate();
    const [rosterName, setRosterName] = useState('');
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const onAccountSave = async () => {
        const metadata = { fleet: currentHiveFleet };
        const rosterObj = {
            content: JSON.stringify(units),
            metadata: JSON.stringify(metadata),
            name: rosterName || 'Unnamed Roster',
        };
        const res = await upsertRoster(rosterObj);
        console.log(res.status);
        if(res.status >= 200 && res.status <300) {
            setLoadedRoster({
                content: units,
                name: rosterName || 'Unnamed Roster',
                metadata
            })
            onClose();
            navigate('/loaded');
        } else {
            alert('Network Error')
        }
    }

    useEffect(() => {
        setRosterName('');
    }, [open])

    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Save Roster
                </div>
                <div className={classes.body}>
                    <div className={classes.optionPane} style={{ borderRight: '1px solid black'}}>
                        <div className={classes.optionHeader}>
                            Save to Cache
                        </div>
                        <div>
                            You can save one roster to your brower cache without needing an account. This will be local to the computer you are currently on
                        </div>
                        <div className={classes.footer}>
                                <Button
                                    classes={{root: classes.cacheButtonRoot}}
                                    onClick={() => {
                                        saveToCache(units, currentHiveFleet);
                                        onCreateRoster();
                                        onClose();
                                    }}
                                >
                                    Save to Cache
                                </Button>
                        </div>
                    </div>
                    <div className={classes.optionPane}>
                    <div className={classes.optionHeader}>
                            Save to Account
                    </div>
                    <div>
                        Saving to your account will allow you to name your roster and it will be available on any device you are logged in on.
                    </div>
                    <br />
                    <div className={classes.footer}>
                        {!currentUser && <Button classes={{root: classes.loginButtonRoot}} onClick={() => {setLoginModalOpen(true)}} >Log in</Button>}
                        {currentUser && (
                            <div>
                                <OutlinedInput placeholder='Roster Name' value={rosterName} onChange={({target: {value}}) => {setRosterName(value)}}/>
                                <br/>
                                <Button classes={{root: classes.loginButtonRoot}} onClick={onAccountSave}>Save</Button>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            </DialogContent>
            <LoginModal
                open={loginModalOpen}
                onClose={() => setLoginModalOpen(false)}
                {...loginModalProps}
            />
        </Dialog>
    );
};

export default SaveRosterModal; 
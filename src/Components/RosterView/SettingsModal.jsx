import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Checkbox, Dialog, DialogContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        paper: (props) => ({
            top: '15%',
            position: 'absolute',
        }),
        modalContents: (props) => ({
            background: 'rgba(220,220,220, .9)',
            minHeight: '80px',
            width: '400px',
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
        checkboxColor: () => ({
            color: 'rgb(150, 0, 0)  !important',
        }),
        footer: () => ({
            textAlign: 'center',
            marginTop: '20px',
        }),
        buttonRoot: () => ({
            backgroundColor: 'rgb(150, 0, 0) !important',
            color: 'white !important',
        }),
        settingsItem: () => ({
            marginLeft: '0%'
        }),
    }
});

const SettingsModal = (props) => {
    const {open, onClose, showBrackets, unitRoleBackgrounds, toggleShowBrackets, toggleShowBackgrounds} = props;
    const classes = useStyles(props);


    const onSave = () => {
        onClose();
    };

    return (
        <Dialog classes={classes} open={open} onClose={onClose}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Settings
                </div>
                <div className={classes.settingsItem} onClick={toggleShowBrackets}>
                    <Checkbox
                        checked={showBrackets}
                        color={'primary'}
                        classes={{colorPrimary: classes.checkboxColor}}
                    />
                    Show Brackets
                </div>
                <div className={classes.settingsItem} onClick={toggleShowBackgrounds}>
                    <Checkbox
                        checked={unitRoleBackgrounds}
                        color={'primary'}
                        classes={{colorPrimary: classes.checkboxColor}}
                    />
                    Unit Role Backgrounds
                </div>
                <div className={classes.footer}>
                    <Button
                        classes={{ root: classes.buttonRoot}}
                        onClick={onSave}
                    >
                        Done
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SettingsModal; 
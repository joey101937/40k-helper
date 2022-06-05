import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent, OutlinedInput } from '@material-ui/core';
import {red1} from '../GLOBALS';

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
            textAlign: 'center',
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
        body: () => ({
            marginLeft: '0%',
            whiteSpace: 'nowrap',
        }),
        confirmButton: () => ({
            background: 'green',
            color: 'white',
            marginRight: '50px',
        }),
        denyButton: () => ({
            background: red1,
            color: 'white',
        }),
    }
});



const ConfirmModal = (props) => {
    const {open, title, bodyText, onConfirm, onDeny, confirmText, denyText} = props;
    const classes = useStyles(props);

    return (
        <Dialog classes={classes} open={open} onClose={onDeny} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    {title}
                </div>
                <div className={classes.body}>
                    <div>
                        {bodyText}
                    </div>
                </div>
                <div className={classes.footer}>
                    <Button
                        onClick={onConfirm}
                        classes={{root: classes.confirmButton}}
                    >
                    {confirmText || 'Confirm'}
                    </Button>
                    <Button
                        onClick={onDeny}
                        classes={{root: classes.denyButton}}
                    >
                    {denyText || 'Deny'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmModal; 
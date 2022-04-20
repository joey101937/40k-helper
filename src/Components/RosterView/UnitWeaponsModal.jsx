import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';

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
        }),
        buttonRoot: () => ({
            backgroundColor: 'rgb(150, 0, 0) !important',
            color: 'white !important',
        }),
        body: () => ({
            marginLeft: '0%'
        }),
    }
});


const headers = [
    {
        label: '',
        value: 'name',
        width: '25%',
        textAlign: 'left',
    },
    {
        label: 'Range',
        value: 'range',
        width: '7%',
    },
    {
        label: 'Type',
        value: 'type',
        width: '20%',
    },
    {
        label: 'S',
        value: 's',
        width: '7%',
    },
    {
        label: 'AP',
        value: 'ap',
        width: '7%',
    },
    {
        label: 'D',
        value: 'd',
        width: '7%',
    },
    {
        label: 'Notes',
        value: 'notes',
        width: '27%',
    },
]

const UnitWeaponsModal = (props) => {
    const {open, onClose, unit} = props;
    const classes = useStyles(props);

    const getFormattedValues = () => {
        return unit?.weapons?.map(x => ({
            ...x,
            cellStyles: { background: 'rgb(200,200,200)', },
            name: <b>{x.name}</b>
        })) || [];
    }

    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Weapons
                </div>
                <div className={classes.body}>
                  <InteractiveTable
                    width={'100%'}
                    headers={headers}
                    values={getFormattedValues()}
                    small
                  />
                </div>
                <div className={classes.footer}>
                    <Button
                        classes={{ root: classes.buttonRoot}}
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UnitWeaponsModal; 
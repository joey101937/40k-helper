import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent, Checkbox } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';
import { lightGray } from '../../GLOBALS';

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
        checkboxColor: () => ({
            color: 'rgb(150, 0, 0)  !important',
        }),
        checkboxRoot: () => ({
            padding: '0px !important'
        }),
    }
});


const headers = [
    {
        label: '',
        value: 'formattedName',
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
    const {open, onClose, unit, editMode, onUnitUpdate} = props;
    const classes = useStyles(props);

    const onCheckboxClick = (weapon) => {
        const newWeapons = _.cloneDeep(unit.weapons);
        const weaponItem = newWeapons.find(w => w.name === weapon.name);
        weaponItem.removed = !(weaponItem.removed);
        onUnitUpdate({
            ...unit,
            weapons: newWeapons,
        });
    };

    const getFormattedValues = () => {
        if (editMode) {
            return unit?.weapons?.map(x => ({
                ...x,
                cellStyles: { background: lightGray, },
                formattedName: <b>{x.name}</b>,
                checkbox: (
                    <Checkbox
                        color={'primary'}
                        classes={{root: classes.checkboxRoot, colorPrimary: classes.checkboxColor}}
                        checked={!x.removed}
                        onChange={() => onCheckboxClick(x)}
                    />
                ),
            })) || [];
        } else {
            return unit?.weapons?.filter(j => !j.removed).map(x => ({
                ...x,
                cellStyles: { background: lightGray, },
                formattedName: <b>{x.name}</b>,
            })) || [];
        }
    }

    const editModeHeaders = [
        {
            label: '',
            value: 'checkbox',
            width: '5%',
        },
        {
            label: '',
            value: 'formattedName',
            width: '20%',
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
    ];

    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Weapons
                </div>
                <div className={classes.body}>
                  <InteractiveTable
                    width={'100%'}
                    headers={editMode ? editModeHeaders : headers}
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
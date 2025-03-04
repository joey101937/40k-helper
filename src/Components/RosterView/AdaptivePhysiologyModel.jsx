import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';
import { dermicSymbiosis, enragedReserves, hardenedBiology, precognitiveSensoria,
        predatoryInstincts, synapticEnhancement, voraciousAmmunition, whipcoilReflexes } from '../../adaptivePhysiologies';
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
            marginBottom: '10px',
        }),
        body: () => ({
            marginLeft: '0%'
        }),
        scrollbox: () => ({
            maxHeight: '600px',
            overflowy: 'auto',
        })
    }
});


const headers = [
    {
        label: 'Physiology',
        value: 'name',
        width: '20%',
        textAlign: 'left',
    },
    {
        label: 'Description',
        value: 'desc',
        width: '80%',
        textAlign: 'left',
    },
]


const values = [
    dermicSymbiosis,
    enragedReserves,
    hardenedBiology,
    precognitiveSensoria,
    predatoryInstincts,
    synapticEnhancement,
    voraciousAmmunition,
    whipcoilReflexes,
]

const AdaptivePhysoilogyModal = (props) => {
    const {open, onClose} = props;
    const classes = useStyles(props);

    const getFormattedValues = () => {
      return values.map(x => ({
        ...x,
        name: <b>{x.name}</b>,
        cellStyles: { background: lightGray, verticalAlign: 'middle', paddingBottom: '5px' },
      }));
    }

    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Adaptive Physiology
                </div>
                <div className={classes.scrollbox}>
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
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AdaptivePhysoilogyModal; 
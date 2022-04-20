import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';
import * as powers from '../../psychicPowers';

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
        scrollbox: () => ({
            maxHeight: '600px',
            overflowy: 'auto',
        })
    }
});


const headers = [
    {
        label: 'Power',
        value: 'name',
        width: '15%',
        textAlign: 'left',
    },
    {
        label: 'WC',
        value: 'warpChargeValue',
        width: '5%',
    },
    {
        label: 'Description',
        value: 'desc',
        width: '80%',
        textAlign: 'left',
    },
]


const values = [
    powers.catalyst,
    powers.theHorror,
    powers.neuroparasite,
    powers.onslaught,
    powers.paroxysm,
    powers.psychicScream
]

const PsychicPowerModal = (props) => {
    const {open, onClose} = props;
    const classes = useStyles(props);

    const getFormattedValues = () => {
      return values.map(x => ({
        ...x,
        name: <b>{x.name}</b>,
        cellStyles: { background: 'rgb(200,200,200)' },
      }));
    }

    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Psychic Powers
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

export default PsychicPowerModal; 
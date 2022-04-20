import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';
import { goadedToSlaughter, guideMind, predatoryGuile, psychicAugmentation, psychicOversight, relentlessFurocity, surgingVitality, swiftOnslaught, thrashingDemise, warpShielding } from '../../abilities';
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
            paddingBottom: '10px'
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
        }),
        summaryText: () => ({
            marginBottom: '15px'
        })
    }
});


const headers = [
    {
        label: 'Unit',
        value: 'unit',
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
    {
        unit: 'Hive Tyrant',
        ability: relentlessFurocity
    },
    {
        unit: 'Broodlord',
        ability: predatoryGuile,
    },
    {
        unit: 'Tervigon',
        ability: surgingVitality
    },
    {
        unit: 'Tyranid Prime',
        ability: guideMind
    },
    {
        unit: 'Warriors',
        ability: goadedToSlaughter
    },
    
    {
        unit: 'Neurothrope',
        ability: psychicAugmentation
    },
    {
        unit: 'Trygon Prime',
        ability: thrashingDemise
    },
    {
        unit: 'Maleceptor',
        ability: psychicOversight
    },
    {
        unit: 'Zoanthropes',
        ability: warpShielding
    },
    {
        unit: 'Parasite Of Mortrex',
        ability: swiftOnslaught
    },
]

const SynapticImperativesModal = (props) => {
    const {open, onClose} = props;
    const classes = useStyles(props);

    const getFormattedValues = () => {
      return values.map(x => ({
        ...x,
        unit: <b>{x.unit}</b>,
        desc: x.ability.desc,
        cellStyles: { background: lightGray },
      }));
    }


    const summaryText = 'At the start of the battle round, you can select one of the Synaptic Imperative abilities from a unit from your army to activate. That unit must be on the battlefield. Each synaptic imperative can be activated only once per game. Once activated, each SYANPASE model gains its effects until the end of the battle round.'

    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Synaptic Imperatives
                </div>
                <div className={classes.scrollbox}>
                <div className={classes.summaryText}>{summaryText}</div>
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

export default SynapticImperativesModal; 
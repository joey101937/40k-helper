import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogContent, Checkbox } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';
import * as strategems from '../../strategems';
import { lightGray, psykerColorLight } from '../../GLOBALS';
import { useState } from 'react';

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
        }),
        checkboxColor: () => ({
            color: 'rgb(150, 0, 0)  !important',
        }),
        checkboxContainer: () => ({
            display: 'inline-block',
            marginRight: '36px',
        }),
        
    }
});


const headers = [
    {
        label: 'Strategem',
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

const getColorForStrategem = (strategem) => {
    switch(strategem.timing) {
        case 'commandPhase': return '#b3b350';
        case 'psychicPhase': return psykerColorLight;
        case 'startOfRound': return lightGray;
        case 'movementPhase': return '#8888bb';
        case 'shootingPhase': return '#77aa77';
        case 'fightPhase': return '#bb8888';
        case 'chargePhase': return '#bb8888';
        case 'beforeBattle': return '#ffffff';
        default: return lightGray;
    }
}

const getSortFuntion = (orderByTiming) => (x, y) => {
    if (orderByTiming) {
        if (x.timing > y.timing) return 1;
        else if (x.timing < y.timing) return -1;
        return getSortFuntion(false)(x,y); // order by name secondarily
    }
    if (x.name > y.name) return 1;
    else if (x.name < y.name) return -1;
    return 0;
}


const values = Object.values(strategems);

const StrategemsModal = (props) => {
    const {open, onClose, currentHiveFleet} = props;
    const classes = useStyles(props);
    
    const [hideBeforeBattle, setHideBeforeBattle] = useState(true);
    const [orderByTiming, setOrderByTiming] = useState(false);
    

    const getFormattedValues = () => {
      return values
      .filter(x => (!x.fleet || x.fleet === currentHiveFleet) && !(hideBeforeBattle && x.timing=== 'beforeBattle'))
      .sort(getSortFuntion(orderByTiming)).map(x => ({
        ...x,
        name: <b>{x.name}<br/>{x.cost}</b>,
        cellStyles: { background: getColorForStrategem(x) },
      }));
    }


    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Strategems 
                </div>
                <div>
                    <div className={classes.checkboxContainer} onClick={() => setHideBeforeBattle(!hideBeforeBattle)}>
                        <Checkbox
                            checked={!hideBeforeBattle}
                            color={'primary'}
                            classes={{colorPrimary: classes.checkboxColor}}
                            />
                        Show Pre-Battle Strategems
                    </div>
                    <div className={classes.checkboxContainer} onClick={() => setOrderByTiming(!orderByTiming)}>
                        <Checkbox
                            checked={orderByTiming}
                            color={'primary'}
                            classes={{colorPrimary: classes.checkboxColor}}
                            />
                        Order By Timing
                    </div>
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

export default StrategemsModal; 
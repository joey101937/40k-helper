import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@mui/styles';
import { Button, Checkbox, Chip, Dialog, DialogContent, Tooltip } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';
import { lightGray, mediumGray,  red1, } from '../../GLOBALS';

const useStyles = makeStyles((theme) => {
    return {
        paper: (props) => ({
            top: '10%',
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
            paddingBottom: '5px'
        }),
        buttonRoot: () => ({
            backgroundColor: 'rgb(150, 0, 0) !important',
            color: 'white !important',
        }),
        addPsychicButton: () => ({
            backgroundColor: 'rgb(120, 0, 120) !important',
            color: 'white !important',
            marginRight: '10px',
        }),
        addWargearButton: () => ({
            backgroundColor: 'rgb(50, 100, 0) !important',
            color: 'white !important',
            marginRight: '10px',
        }),
        addWarlordTraitButton: () => ({
            backgroundColor: 'rgb(102, 102, 84) !important',
            color: 'white !important',
            marginRight: '10px',
        }),
        addAdaptivePhysiologyButton: () => ({
            backgroundColor: 'rgb(0, 90, 0) !important',
            color: 'white !important',
            marginRight: '10px',
        }),
        body: () => ({
            marginLeft: '0%'
        }),
        scrollbox: () => ({
            maxHeight: '600px',
            overflowy: 'auto',
        }),
        chipContainer: () => ({
            marginBottom: '15px',
        }),
        chipRoot: () => ({
            background: mediumGray + " !important",
            fontWeight: 'bold',
            marginLeft: '10px',
            color: 'white',
        }),
        interactiveChipRoot: () => ({
            background: red1 + "!important",
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '10px',
            color: 'white',
        }),
        interactiveChipRootPurple: () => ({
            background: "rgb(120, 0, 120) !important",
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '10px',
            color: 'white',
        }),
        checkboxColor: () => ({
            color: 'rgb(150, 0, 0)  !important',
        }),
        checkboxRoot: () => ({
            padding: '0px !important'
        }),
        editModeButtons: () => ({
            display: 'inline-block',
            marginTop: '10px',
        }),
    }
});


const headers = [
    {
        label: 'Ability',
        value: 'formattedName',
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

const psychicHeaders = [
    {
        label: 'Ability',
        value: 'formattedName',
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


const UnitAbilitiesModal = (props) => {
    const {open, onClose, unit, editMode, onUnitUpdate} = props;
    const classes = useStyles(props);

    const onCheckboxClick = (ability) => {
        const newAbilities = _.cloneDeep(unit.abilities);
        const abilityItem = newAbilities.find(a => a.name === ability.name);
        abilityItem.removed = !(abilityItem.removed);
        onUnitUpdate({
            ...unit,
            abilities: newAbilities,
        });
    };

    const getFormattedValues = () => {
        return unit?.abilities?.filter(a => editMode || !a.removed)?.map(x => ({
            ...x,
            cellStyles: { background: lightGray },
            formattedName: <b>{x.name}</b>,
            checkbox: (
                <Checkbox
                    color={'primary'}
                    classes={{root: classes.checkboxRoot, colorPrimary: classes.checkboxColor}}
                    checked={!x.removed}
                    onChange={() => onCheckboxClick(x)}
                />
            )
        })) || [];
    }

    const getFormattedPsychicPowers = () => {
        return unit?.psychicPowers?.filter(a => editMode || !a.removed)?.map(x => ({
            ...x,
            cellStyles: { background: lightGray },
            formattedName: <b>{x.name}</b>,
            checkbox: (
                <Checkbox
                    color={'primary'}
                    classes={{root: classes.checkboxRoot, colorPrimary: classes.checkboxColor}}
                    checked={!x.removed}
                    onChange={() => onCheckboxClick(x)}
                />
            )
        })) || [];
    }

    const renderKeywordPills = () => {
        return unit?.keywords?.map(k => {
            if (!k.desc) {
                return (
                    <Chip
                        classes={{ root: classes.chipRoot}}
                        label={k.name}
                    />
                )
            } else {
                return (
                    <Tooltip title={k.desc} placement="top">
                        <Chip
                            classes={{ root: k.color === 'purple' ? classes.interactiveChipRootPurple : classes.interactiveChipRoot}}
                            label={k.name}
                        />
                    </Tooltip>
                )
            }
        }) || []
    };

    const editModeHeaders = [
        {
            label: '',
            value: 'checkbox',
            width: '5%',
            textAlign: 'left',
        },
        {
            label: 'Ability',
            value: 'formattedName',
            width: '20%',
            textAlign: 'left',
        },
        {
            label: 'Description',
            value: 'desc',
            width: '75%',
            textAlign: 'left',
        },
    ]

    const editModePsychHeaders = [
        {
            label: '',
            value: 'checkbox',
            width: '5%',
            textAlign: 'left',
        },
        {
            label: 'Psychic Power',
            value: 'formattedName',
            width: '20%',
            textAlign: 'left',
        },
        {
            label: 'Description',
            value: 'desc',
            width: '75%',
            textAlign: 'left',
        },
    ]

    return (
        <Dialog classes={classes} open={open} onClose={onClose} maxWidth={'lg'}>
            <DialogContent className={classes.modalContents}>
                <div className={classes.titleBar}>
                    Abilities
                </div>
                <div className={classes.chipContainer}>
                    {renderKeywordPills()}
                </div>
                <div className={classes.scrollbox}>
                    <div className={classes.body}>
                    <InteractiveTable
                        width={'100%'}
                        headers={editMode ? editModeHeaders : headers}
                        values={getFormattedValues()}
                        small
                    />
                    {unit?.psychicPowers?.length > 0 &&
                        <InteractiveTable
                            width={'100%'}
                            headers={editMode ? editModePsychHeaders : psychicHeaders}
                            values={getFormattedPsychicPowers()}
                            small
                        />
                    }
                    </div>
                    <div className={classes.editModeButtons}>
                            {editMode && unit?.keywords?.filter(k => k.name.startsWith('Psyker'))?.length > 0 && 
                            (<Button
                                classes={{ root: classes.addPsychicButton}}
                                onClick={() => {alert('open add psych modal')}}
                            >
                                + Psychic Power
                            </Button>)}
                            {editMode && unit?.wargear?.filter(g => !g.active)?.length > 0 && 
                            (<Button
                                classes={{ root: classes.addWargearButton}}
                                onClick={() => {alert('open add wargear modal')}}
                            >
                                + Wargear
                            </Button>)}
                            {editMode && unit?.role === 'hq' && 
                            (<Button
                                classes={{ root: classes.addWarlordTraitButton}}
                                onClick={() => {alert('open add warlord trait modal')}}
                            >
                                + Warlord Trait
                            </Button>)}
                            {editMode && unit?.keywords.filter(k => k.name === "Monster").length > 0 && unit?.keywords.filter(k => k.name === "Character").length === 0 &&
                            (<Button
                                classes={{ root: classes.addAdaptivePhysiologyButton}}
                                onClick={() => {alert('open add warlord trait modal')}}
                            >
                                + Adaptive Physiology
                            </Button>)}
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

export default UnitAbilitiesModal; 
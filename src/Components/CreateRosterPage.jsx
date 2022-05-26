import React, { useState } from 'react';
import _ from 'lodash';
import { makeStyles } from '@mui/styles';
import { units } from '../codex';
import InteractiveTable from './Table/InteractiveTable';
import { Button, Checkbox } from '@material-ui/core';
import { eliteColor, fastAttackColor, heavySupportColor, hqColor, lightGray, red1, red2, troopColor } from '../GLOBALS';
import UnitWeaponsModal from './RosterView/UnitWeaponsModal';
import UnitAbilitiesModal from './RosterView/UnitAbilitiesModal';
import { noFleet } from '../fleets';
import HiveFleetPanel from './RosterView/HiveFleetPanel';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: lightGray,
            textAlign: 'center',
            minHeight: '80px',
            width: '1000px',
            display: 'inline-block',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            paddingTop: '15px',
        }),
        title: () => ({
            fontSize: '16pt',
            fontWeight: 'bold',
            marginBottom: '20px',
        }),
        subTitle: () => ({
            marginBottom: '20px',
        }),
        checkboxColor: () => ({
            color: 'rgb(150, 0, 0)  !important',
        }),
        checkboxRoot: () => ({
            padding: '0px !important'
        }),
        tableButton: () => ({
            cursor: 'pointer',
            role: 'button',
            textDecoration: 'underline',
            color: 'blue'
        }),
        finishAndSaveButton: () => ({
            color: 'white',
            background: 'rgb(20, 110, 20)',
            margin: '8px',
            "&:hover": {
                background: 'rgb(20, 90, 20)',
              },
        }),
        resetButton: () => ({
            color: 'white',
            background: red1,
            margin: '8px',
            "&:hover": {
                background: red2,
              },
        }),
    }
});

const getColorForRole = (unit) => {
    switch(unit.role) {
        case 'troops':
            return troopColor;
        case 'fastAttack':
            return fastAttackColor;
        case 'elite':
                return eliteColor;
        case 'heavySupport':
            return heavySupportColor;
        case 'hq':
            return hqColor;
        default: 
            return lightGray;
    }
}

const saveToCache = (rosterToSave, defaultFleet) => {
    if(localStorage.getItem('whHelperCachedRoster')) {
        // alert('overriding');
    }
    const saveItem = {
        content: rosterToSave,
        metadata: { fleet: defaultFleet },
        name: 'Cached Roster',
    }
    localStorage.setItem('whHelperCachedRoster', JSON.stringify(saveItem));
}

const CreateRosterPage = (props) => {
    const classes = useStyles(props);
    const { onCreateRoster } = props;

    const [currentHiveFleet, setCurrentHiveFleet] = useState(noFleet.key);
    const [currentRoster, setCurrentRoster] = useState(units);
    const [weaponUnit, setWeaponUnit] = useState(null);
    const [abilityUnit, setAbilityUnit] = useState(null);

    
    const headers = [
        {
            label: '',
            value: 'checkbox',
            width: '5%',
        },
        {
            label: '',
            value: 'formattedName',
            width: '65%',
            textAlign: 'left',
        },
        {
            label: 'Weapons',
            value: 'weaponButton',
            width: '15%',
        },
        {
            label: 'Abilities',
            value: 'abilitiesButton',
            width: '15%',
        },
    ];

    const onCheckboxClick = (unit) => {
        const newRoster = _.cloneDeep(currentRoster);
        const foundUnit = newRoster.find(x => x.name === unit.name);
        foundUnit.selected = !unit.selected;
        setCurrentRoster(newRoster);
    };

    const updateUnit = (updatedUnit) => {
        const newRoster = _.cloneDeep(currentRoster);
        const foundUnit = newRoster.find(x => x.name === updatedUnit.name);
        foundUnit.weapons = updatedUnit.weapons;
        foundUnit.abilities = updatedUnit.abilities;
        foundUnit.psychicPowers = updatedUnit.psychicPowers;
        foundUnit.wargear = updatedUnit.wargear;
        foundUnit.warlordTraits = updatedUnit.warlordTraits;
        foundUnit.adaptivePhysiologies = updatedUnit.adaptivePhysiologies;
        foundUnit.relics = updatedUnit.relics;
        foundUnit.strategems = updatedUnit.strategems;

        setCurrentRoster(newRoster);
        if (weaponUnit?.name === updatedUnit.name) {
            setWeaponUnit(updatedUnit);
        }
        if (abilityUnit?.name === updatedUnit.name) {
            setAbilityUnit(updatedUnit);
        }
    }

    const getFormattedValues = () => {
        return currentRoster.map(x => {
            return {
                ...x,
                formattedName: <div style={{cursor: 'pointer'}} onClick={() => onCheckboxClick(x)}>{x.name}</div>,
                checkbox: <Checkbox
                        color={'primary'}
                        classes={{root: classes.checkboxRoot, colorPrimary: classes.checkboxColor}}
                        checked={x.selected || false} // this cannot be undefined
                        onClick={() => onCheckboxClick(x)}
                />,
                weaponButton: x.selected ? (
                <div
                className={classes.tableButton}
                onClick={() => setWeaponUnit(x)}
                >
                    Edit
                </div>) : null,
                abilitiesButton: x.selected ? (
                    <div
                    className={classes.tableButton}
                    onClick={() => setAbilityUnit(x)}
                    >
                        Edit
                    </div>) : null,
                cellStyles: {
                    background: getColorForRole(x),
                    paddingBottom: '2px',
                }
            }
        });
    }

    return (
        <>
        <div className={classes.root}>
            <div className={classes.title}>
                Create Roster
            </div>
            <div className={classes.subTitle}>
                Select the units you want to be included using the table below. Weapons and abilities may be added or removed with the corresponding buttons. <b> Psychic Powers, Relics, Wargear, and Warlord Traits are included in the abilities section.</b>
            <div>
                <HiveFleetPanel currentHiveFleet={currentHiveFleet} setCurrentHiveFleet={setCurrentHiveFleet} />
            </div>
            </div>
            <InteractiveTable
                values={getFormattedValues()}
                headers={headers}
            />
            <Button
                classes={{ root: classes.resetButton}}
                onClick={() => {setCurrentRoster(units)}}
            >
            Reset
            </Button>
            <Button
                classes={{ root: classes.finishAndSaveButton}}
                onClick={() => {
                    saveToCache(currentRoster, currentHiveFleet);
                    onCreateRoster();
                }}
            >
            {'Finish & Save'}
            </Button>
        </div>
        <UnitWeaponsModal
            open={!!weaponUnit}
            unit={weaponUnit}
            onClose={() => setWeaponUnit(null)}
            editMode
            onUnitUpdate={updateUnit}
        />
        <UnitAbilitiesModal
            open={!!abilityUnit}
            unit={abilityUnit}
            onClose={() => setAbilityUnit(null)}
            editMode
            onUnitUpdate={updateUnit}
            currentHiveFleet={currentHiveFleet}
        />
        </>
    );
};

export default CreateRosterPage; 
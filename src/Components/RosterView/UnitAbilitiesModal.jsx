import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Close } from '@material-ui/icons';
import { makeStyles } from '@mui/styles';
import { Button, Checkbox, Chip, Dialog, DialogContent, Tooltip } from '@material-ui/core';
import InteractiveTable from '../Table/InteractiveTable';
import { lightGray, mediumGray,  miscKewordColor,  psykerColor,  red1, relicColor, wargearColor, warlordTraitColor, } from '../../GLOBALS';
import AddItemPanel from './AddItemPanel';
import * as warlordTraits from '../../warlordTraits';
import * as adaptivePhysiologies from '../../adaptivePhysiologies';
import * as relics from '../../relics';
import * as powers from '../../psychicPowers';

const useStyles = makeStyles((theme) => {
    return {
        paper: (props) => ({
            top: '10%',
            position: 'absolute',
        }),
        modalContents: (props) => ({
            background: 'rgba(220,220,220, .9)',
            minHeight: '80px',
            maxHeight: '800px',
            width: '860px',
            display: 'block',
            paddingTop: '10px !important',
            overflowX: 'auto'
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
            backgroundColor: `${psykerColor} !important`,
            color: 'white !important',
            marginRight: '10px !important',
        }),
        addWargearButton: () => ({
            backgroundColor: `${wargearColor} !important`,
            color: 'white !important',
            marginRight: '10px !important',
        }),
        addWarlordTraitButton: () => ({
            backgroundColor: `${warlordTraitColor} !important`,
            color: 'white !important',
            marginRight: '10px !important',
        }),
        addAdaptivePhysiologyButton: () => ({
            backgroundColor: 'rgb(0, 90, 0) !important',
            color: 'white !important',
            marginRight: '10px !important',
        }),
        addRelicButton: () => ({
            backgroundColor: `${relicColor} !important`,
            color: 'white !important',
            marginRight: '10px !important',
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
            fontWeight: 'bold !important',
            marginLeft: '10px !important',
            color: 'white !important',
        }),
        interactiveChipRoot: () => ({
            background: mediumGray + " !important",
            cursor: 'pointer !important',
            fontWeight: 'bold !imporant',
            marginLeft: '10px !important',
            color: 'white !important',
        }),
        interactiveChipRootRed: () => ({
            background: red1 + " !important",
            cursor: 'pointer !important',
            fontWeight: 'bold !imporant',
            marginLeft: '10px !important',
            color: 'white !important',
        }),
        interactiveChipRootPurple: () => ({
            background: `${psykerColor} !important`,
            cursor: 'pointer !important',
            fontWeight: 'bold !imporant',
            marginLeft: '10px !important',
            color: 'white !important',
        }),
        interactiveChipRootGreen: () => ({
            background: `${miscKewordColor} !important`,
            cursor: 'pointer !important',
            fontWeight: 'bold !imporant',
            marginLeft: '10px !important',
            color: 'white !important',
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
        itemContainer: () => ({
            display: 'block',
            textAlign: 'left',
            width: '100%',
            minHeight: '30px',
            marginTop: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            borderRadius: '5px',
            background: 'lightGray',
        }),
        itemSection: () => ({
            textAlign: 'left',
        }),
        itemTitleBar: () => ({
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            color: 'white',
            padding: '2px',
            paddingLeft: '5px',
        }),
        itemDesc: () => ({
            background: 'lightGray',
            padding: '5px',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
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


const UnitAbilitiesModal = (props) => {
    const {open, onClose, unit, editMode, onUnitUpdate, currentHiveFleet} = props;
    const classes = useStyles(props);

    const [addItemOptions, setAddItemOptions] = useState([]);
    const [addItemCatagory, setAddItemCatagory] = useState(null);

    useEffect(() => {
        setAddItemCatagory(null);
        setAddItemOptions(null);
    }, [unit?.name])

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
            desc: x.subName ? <span><b>{x.subName}:</b> {x.desc}</span> : x.desc,
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

    const getPillClassForColor = (color) => {
        switch(color) {
            case 'red': return classes.interactiveChipRootRed;
            case 'purple': return classes.interactiveChipRootPurple;
            case 'green': return classes.interactiveChipRootGreen;
            default: return classes.interactiveChipRoot;
        }
    }

    const renderKeywordPills = () => {
        return unit?.keywords?.map(k => {
            if (!k.desc) {
                return (
                    <Chip
                        classes={{ root: classes.chipRoot}}
                        label={<b>{k.name}</b>}
                    />
                )
            } else {
                return (
                    <Tooltip title={k.desc} placement="top">
                        <Chip
                            classes={{ root: getPillClassForColor(k.color)}}
                            label={<b>{k.name}</b>}
                        />
                    </Tooltip>
                )
            }
        }) || []
    };

    const handleAddItem = ({ target: { value }}) => {
        const newUnit = _.cloneDeep(unit);
        switch(addItemCatagory) {
            case 'psychicPower':
                newUnit.psychicPowers = newUnit.psychicPowers || [];
                if (!newUnit.psychicPowers.filter(x => x.name === value.name).length) newUnit.psychicPowers.push(value);
                onUnitUpdate(newUnit);
                break;
            case 'warlordTrait':
                newUnit.warlordTraits = newUnit.warlordTraits || [];
                if (!newUnit.warlordTraits.filter(x => x.name === value.name).length) newUnit.warlordTraits.push(value);
                onUnitUpdate(newUnit);
                break;
            case 'wargear':
                newUnit.wargear.find(g => g.name === value.name).active = true;
                onUnitUpdate(newUnit);
                break;
            case 'relic':
                newUnit.relics = newUnit.relics || [];
                if (!newUnit.relics.filter(x => x.name === value.name).length) newUnit.relics.push(value);
                onUnitUpdate(newUnit);
                break;
            case 'adaptivePhysiologies':
                newUnit.adaptivePhysiologies = newUnit.adaptivePhysiologies || [];
                if (!newUnit.adaptivePhysiologies.filter(x => x.name === value.name).length) newUnit.adaptivePhysiologies.push(value);
                onUnitUpdate(newUnit);
                break;
            default:
                break;
        }
        setAddItemCatagory(null);
        setAddItemOptions([]);
    }

    const onRemovePsychicPower = (power) => {
        const newUnit = _.cloneDeep(unit);
        newUnit.psychicPowers = newUnit.psychicPowers.filter(x => x.name !== power.name)
        onUnitUpdate(newUnit);
    }

    const onRemoveWarlordTrait = (trait) => {
        const newUnit = _.cloneDeep(unit);
        newUnit.warlordTraits = newUnit.warlordTraits.filter(x => x.name !== trait.name)
        onUnitUpdate(newUnit);
    }

    const onRemoveRelic = (trait) => {
        const newUnit = _.cloneDeep(unit);
        newUnit.relics = newUnit.relics.filter(x => x.name !== trait.name)
        onUnitUpdate(newUnit);
    }

    const onRemoveAdaptivePhysiology = (trait) => {
        const newUnit = _.cloneDeep(unit);
        newUnit.adaptivePhysiologies = newUnit.adaptivePhysiologies.filter(x => x.name !== trait.name)
        onUnitUpdate(newUnit);
    }

    const onRemoveWargear = (gear) => {
        const newUnit = _.cloneDeep(unit);
        newUnit.wargear.find(x => x.name === gear.name).active = false;
        onUnitUpdate(newUnit);
    }

    const getAddItemTitleFromCatagory = () => {
        switch(addItemCatagory){
            case 'psychicPower': return 'Power';
            case 'wargear': return 'Wargear';
            case 'warlordTrait': return 'Trait';
            case 'adaptivePhysiologies': return 'Physiology';
            case 'relic': return 'Relic';
            default: return 'Item'
        }
    };


    const renderPsychicPowers = () => {
        return unit?.psychicPowers?.map(p => {
            return (
                <div className={classes.itemContainer}>
                    <div className={classes.itemTitleBar} style={{ background: psykerColor}}>
                        {p.name} - {p.warpChargeValue}
                        {editMode && (
                        <Close
                            style={{ float: 'right', color: 'white', cursor: 'pointer'}}
                            onClick={() => onRemovePsychicPower(p)}
                        />
                        )}
                    </div>
                    <div className={classes.itemDesc}>
                        {typeof p.desc === 'string' ? p.desc : React.createClass(p.desc)}
                    </div>
                </div>
            )
        }) || [];
    }

    const renderWargear = () => {
        return unit?.wargear?.filter(g => g.active)?.map(wg => {
            return (
                <div className={classes.itemContainer}>
                    <div className={classes.itemTitleBar} style={{ background: wargearColor}}>
                        {wg.name}
                        {editMode && (
                        <Close
                            style={{ float: 'right', color: 'white', cursor: 'pointer'}}
                            onClick={() => onRemoveWargear(wg)}
                        />
                        )}
                    </div>
                    <div className={classes.itemDesc}>
                        {wg.desc}
                    </div>
                </div>
            )
        }) || [];
    }

    const renderWarlordTraits = () => {
        return unit?.warlordTraits?.map(wl => {
            return (
                <div className={classes.itemContainer}>
                    <div className={classes.itemTitleBar} style={{ background: warlordTraitColor}}>
                        {wl.name}
                        {editMode && (
                        <Close
                            style={{ float: 'right', color: 'white', cursor: 'pointer'}}
                            onClick={() => onRemoveWarlordTrait(wl)}
                        />
                        )}
                    </div>
                    <div className={classes.itemDesc}>
                        {wl.desc}
                    </div>
                </div>
            )
        }) || [];
    }

    const renderRelics = () => {
        return unit?.relics?.map(relicItem => {
            return (
                <div className={classes.itemContainer}>
                    <div className={classes.itemTitleBar} style={{ background: relicColor}}>
                        {relicItem.name}
                        {editMode && (
                        <Close
                            style={{ float: 'right', color: 'white', cursor: 'pointer'}}
                            onClick={() => onRemoveRelic(relicItem)}
                        />
                        )}
                    </div>
                    <div className={classes.itemDesc}>
                        {relicItem.desc}
                    </div>
                </div>
            )
        }) || [];
    }

    const renderAtaptivePhysiologies = () => {
        return unit?.adaptivePhysiologies?.map(ap => {
            return (
                <div className={classes.itemContainer}>
                    <div className={classes.itemTitleBar} style={{ background: 'rgb(0, 90, 0)'}}>
                        {ap.name}
                        {editMode && (
                        <Close
                            style={{ float: 'right', color: 'white', cursor: 'pointer'}}
                            onClick={() => onRemoveAdaptivePhysiology(ap)}
                        />
                        )}
                    </div>
                    <div className={classes.itemDesc}>
                        {ap.desc}
                    </div>
                </div>
            )
        }) || [];
    }

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

    const hiveFleetCheck = (x) => {
        return !x.fleet || x.fleet === currentHiveFleet;
    }

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
                    <div className={classes.itemSection}>
                        {renderRelics()}
                        {renderWarlordTraits()}
                        {renderWargear()}
                        {renderAtaptivePhysiologies()}
                        {renderPsychicPowers()}
                    </div>
                    </div>
                    <div className={classes.editModeButtons}>
                            {editMode && unit?.keywords?.filter(k => k.name.startsWith('Psyker'))?.length > 0 && 
                            (<Button
                                classes={{ root: classes.addPsychicButton}}
                                onClick={() => {
                                    setAddItemCatagory('psychicPower');
                                    setAddItemOptions(Object.values(powers).filter(hiveFleetCheck));
                                }}
                            >
                                + Psychic Power
                            </Button>)}
                            {editMode && unit?.wargear?.filter(g => !g.active)?.length > 0 && 
                            (<Button
                                classes={{ root: classes.addWargearButton}}
                                onClick={() => {
                                    setAddItemCatagory('wargear');
                                    setAddItemOptions(unit.wargear);
                                }}
                            >
                                + Wargear
                            </Button>)}
                            {editMode && unit?.role === 'hq' && 
                            (<Button
                                classes={{ root: classes.addWarlordTraitButton}}
                                onClick={() => {
                                    setAddItemCatagory('warlordTrait');
                                    setAddItemOptions(Object.values(warlordTraits).filter(hiveFleetCheck));
                                }}
                            >
                                + Warlord Trait
                            </Button>)}
                            {editMode && unit?.role === 'hq' && 
                            (<Button
                                classes={{ root: classes.addRelicButton}}
                                onClick={() => {
                                    setAddItemCatagory('relic');
                                    setAddItemOptions(Object.values(relics).filter(hiveFleetCheck));
                                }}
                            >
                                + Relic
                            </Button>)}
                            {editMode && unit?.keywords.filter(k => k.name === "Monster").length > 0 && unit?.keywords.filter(k => k.name === "Character").length === 0 &&
                            (<Button
                                classes={{ root: classes.addAdaptivePhysiologyButton}}
                                onClick={() => {
                                    setAddItemCatagory('adaptivePhysiologies');
                                    setAddItemOptions(Object.values(adaptivePhysiologies));
                                }}
                            >
                                + Adaptive Physiology
                            </Button>)}
                        </div>
                    {editMode && addItemOptions?.length > 0 && (
                        <AddItemPanel
                            options={addItemOptions}
                            onAdd={handleAddItem}
                            onClose={() => {
                                setAddItemCatagory(null);
                                setAddItemOptions([]);
                            }}
                            itemName={getAddItemTitleFromCatagory()}
                        />
                    )}
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
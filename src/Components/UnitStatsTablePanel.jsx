import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import InteractiveTable from './Table/InteractiveTable';
import { units } from '../codex';
import troopIcon from '../Icons/troopIcon.png'
import fistIcon from '../Icons/fistIcon.png'
import eliteIcon from '../Icons/eliteIcon.png'
import heavySupportIcon from '../Icons/heavySupportIcon.png'
import fastAttackIcon from '../Icons/fastAttackIcon.png'
import hqIcon from '../Icons/hqIcon.png'
import SettingsModal from './RosterView/SettingsModal';
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import UnitWeaponsModal from './RosterView/UnitWeaponsModal';
import UnitAbilitiesModal from './RosterView/UnitAbilitiesModal';
import InfoBanner from './RosterView/InfoBanner';
import SynapticImperativesModal from './RosterView/SynapticImperativesModal';
import WarlordTraitsModal from './RosterView/WarlordTraitsModal';
import PsychicPowerModal from './RosterView/PsychicPowersModal';
import AdaptivePhysoilogyModal from './RosterView/AdaptivePhysiologyModel';
import { eliteColor, fastAttackColor, heavySupportColor, hqColor, troopColor } from '../GLOBALS';
import RelicsModel from './RosterView/RelicsModel';
import { noFleet } from '../fleets';
import HiveFleetPanel from './RosterView/HiveFleetPanel';


const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'rgba(220,220,220, .9)',
            textAlign: 'center',
            minHeight: '80px',
            whiteSpace: 'nowrap',
            width: 'min(100%, 1000px)',
            display: 'inline-block',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }),
        settingButton: () => ({
            color: 'black',
            position: 'absolute',
            cursor: 'pointer',
            paddingTop: '3px',
            paddingLeft: '3px',
        }),
        weaponLink: () => ({
            color: 'blue',
            cursor: 'pointer',
            display: 'inline-block',
            borderRadius: '5px',
            paddingRight: '10px',
            paddingLeft: '10px',
            '&:hover': {
                background: 'rgba(40,40,40,.23)',
            },
        }),
    }
});

const UnitStatsTablePanel = (props) => {
    const classes = useStyles(props);

    const { rosterUnits = units } = props;

    const [currentHiveFleet, setCurrentHiveFleet] = useState(noFleet.key);

    const [showBrackets, setShowBrackets] = useState(false);
    const [unitRoleBackgrounds, setUnitRoleBackgrounds] = useState(true);

    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const [siModalOpen, setSiModalOpen] = useState(false);
    const [wtModalOpen, setWtModalOpen] = useState(false);
    const [ppModalOpen, setPpModalOpen] = useState(false);
    const [apModalOpen, setApModalOpen] = useState(false);
    const [rModalOpen, setRModalOpen] = useState(false);
    const [selectedUnitWeapons, setSelectedUnitWeapon] = useState(null);
    const [selectedUnitAbilities, setSelectedUnitAbility] = useState(null);




    const headers = [
        {
            label: (
                <div style={{ color: 'rgba(0,0,0,0)' }}>
                    <SettingsRounded
                        className={classes.settingButton}
                        onClick={() => setSettingsModalOpen(true)}
                    />
                    &nbws;
                </div>
            ),
            value: 'icon',
            width: '5%',
        },
        {
            label: '',
            value: 'name',
            width: '25%',
            textAlign: 'left'
        },
        {
            label: 'M',
            value: 'm',
            width: '5%',
        },
        {
            label: 'WS',
            value: 'ws',
            width: '5%',
        },
        {
            label: 'BS',
            value: 'bs',
            width: '5%',
        },
        {
            label: 'S',
            value: 's',
            width: '5%',
        },
        {
            label: 'T',
            value: 't',
            width: '5%',
        },
        {
            label: 'W',
            value: 'w',
            width: '5%',
        },
        {
            label: 'A',
            value: 'a',
            width: '5%',
        },
        {
            label: 'Ld',
            value: 'ld',
            width: '5%',
        },
        {
            label: 'Sv',
            value: 'sv',
            width: '5%',
        },
        {
            label: 'Weapons',
            value: 'weapons',
            width: '15%',
        },
        {
            label: 'Abilities',
            value: 'abilities',
            width: '10%',
        },
    ];

    const getIconFromRole = (role) => {
        switch (role) {
            case 'troops':
                return (<img height="18px" src={troopIcon} alt="troop icon" />)
            case 'fastAttack':
                return (<img height="18px" src={fastAttackIcon} alt="fastAttack icon" />)
            case 'elite':
                return (<img height="18px" src={eliteIcon} alt="elite icon" />)
            case 'heavySupport':
                return (<img height="18px" src={heavySupportIcon} alt="heavySupport icon" />)
            case 'hq':
                return (<img height="18px" src={hqIcon} alt="hq icon" />)
            default:
                return (<img height="18px" src={fistIcon} alt="default icon" />)
        }
    }

    const getCellStylesForUnit = (unit) => {
        switch (unit.role) {
            case 'troops':
                return { background: troopColor };
            case 'fastAttack':
                return { background: fastAttackColor };
            case 'elite':
                return { background: eliteColor };
            case 'heavySupport':
                return { background: heavySupportColor };
            case 'hq':
                return { background: hqColor };
            default:
                return {};
        }
    }

    const getFormattedValues = () => {
        const out = [];
        for (let i = 0; i < rosterUnits.length; i++) {
            const unit = rosterUnits[i];
            unit.stats?.forEach((statline, statlineIndex) => {
                if (!showBrackets && statlineIndex > 0) return;
                out.push({
                    name: statlineIndex === 0 ? unit.name : '- - -',
                    m: statline.m,
                    ws: statline.ws,
                    bs: statline.bs,
                    s: statline.s,
                    t: statline.t,
                    w: statline.w,
                    a: statline.a,
                    ld: statline.ld,
                    sv: statline.sv,
                    icon: statlineIndex === 0 ? getIconFromRole(unit.role) : '',
                    cellStyles: unitRoleBackgrounds ? getCellStylesForUnit(unit) : '',
                    weapons: statlineIndex === 0 ? (
                        <div className={classes.weaponLink} onClick={() => setSelectedUnitWeapon(unit)}>
                            View
                        </div>
                    ) : '',
                    abilities: statlineIndex === 0 ? (
                        <div className={classes.weaponLink} onClick={() => setSelectedUnitAbility(unit)}>
                            View
                        </div>
                    ) : '',
                });
            })
        }
        return out;
    };

    return (
        <>
            <InfoBanner
                onSiClick={() => setSiModalOpen(true)}
                onWiClick={() => setWtModalOpen(true)}
                onPpClick={() => setPpModalOpen(true)}
                onApClick={() => setApModalOpen(true)}
                onRClick={() => setRModalOpen(true)}
            />
            <div>
                <InteractiveTable
                    headers={headers}
                    values={getFormattedValues()}
                />
            </div>
            <div style={{ paddingBottom: '15px' }}>
                <HiveFleetPanel currentHiveFleet={currentHiveFleet} setCurrentHiveFleet={setCurrentHiveFleet} />
            </div>
            <SettingsModal
                open={settingsModalOpen}
                onClose={() => setSettingsModalOpen(false)}
                showBrackets={showBrackets}
                unitRoleBackgrounds={unitRoleBackgrounds}
                toggleShowBrackets={() => setShowBrackets(!showBrackets)}
                toggleShowBackgrounds={() => setUnitRoleBackgrounds(!unitRoleBackgrounds)}
            />
            <UnitWeaponsModal
                open={!!selectedUnitWeapons}
                onClose={() => setSelectedUnitWeapon(null)}
                unit={selectedUnitWeapons}
            />
            <UnitAbilitiesModal
                open={!!selectedUnitAbilities}
                onClose={() => setSelectedUnitAbility(null)}
                unit={selectedUnitAbilities}
            />
            <SynapticImperativesModal
                open={siModalOpen}
                onClose={() => setSiModalOpen(false)}
            />
            <WarlordTraitsModal
                open={wtModalOpen}
                onClose={() => setWtModalOpen(false)}
                currentHiveFleet={currentHiveFleet}
            />
            <PsychicPowerModal
                open={ppModalOpen}
                onClose={() => setPpModalOpen(false)}
                currentHiveFleet={currentHiveFleet}
            />
            <AdaptivePhysoilogyModal
                open={apModalOpen}
                onClose={() => setApModalOpen(false)}
            />
            <RelicsModel
                open={rModalOpen}
                onClose={() => setRModalOpen(false)}
                currentHiveFleet={currentHiveFleet}
            />
        </>
    );
};

export default UnitStatsTablePanel; 
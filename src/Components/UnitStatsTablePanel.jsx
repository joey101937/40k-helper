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
import SettingsModal from './SettingsModal';
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import UnitWeaponsModal from './UnitWeaponsModal';


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
            cursor: 'pointer'
        }),
        weaponLink: () => ({
            color: 'blue',
            cursor: 'pointer',
            display: 'inline-block',
        }),
    }
});

const UnitStatsTablePanel = (props) => {
    const classes = useStyles(props);

    const [showBrackets, setShowBrackets] = useState(true);
    const [unitRoleBackgrounds, setUnitRoleBackgrounds] = useState(true);

    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const [selectedUnitWeapons, setSelectedUnitWeapon] = useState(null);



    const headers = [
        {
            label: (
            <div style={{color: 'rgba(0,0,0,0)'}}>
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
        switch(role) {
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
                return(<img height="18px" src={fistIcon} alt="default icon" />)
        }
    }

    const getCellStylesForUnit = (unit) => {
        if(!unitRoleBackgrounds) return {};
        switch(unit.role) {
            case 'troops':
                return { background: 'rgb(250,150,150)' };
            case 'fastAttack':
                return { background: '#FFFF99' };
            case 'elite':
                    return { background: '#bbbbbb' };
            case 'heavySupport':
                return { background: '#a05B20' };
            case 'hq':
                return { background: '#d4af37' };
            default: 
                return {};
        }
    }

    const getFormattedValues = () => {
        const out = [];
        for(let i = 0; i < units.length; i++) {
            const unit = units[i];
            unit.stats?.forEach((statline, statlineIndex) => {
                if(!showBrackets && statlineIndex > 0) return;
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
                    cellStyles: getCellStylesForUnit(unit),
                    weapons: statlineIndex === 0 ? (
                        <div className={classes.weaponLink} onClick={() => setSelectedUnitWeapon(unit)}>
                            View
                        </div>
                    ) : ''
                });
            })
        }
        return out;
    };
    
    return (
        <>
        <InteractiveTable
            headers={headers}
            values={getFormattedValues()}
        />
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
        </>
    );
};

export default UnitStatsTablePanel; 
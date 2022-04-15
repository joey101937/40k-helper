import * as abilities from "./abilities";
import * as weapons from "./weapons";


export const units = [
    {
        name: 'Hive Tyrant',
        type: 'monster',
        role: 'hq',
        stats: [{
            m: '9"',
            ws: '2+',
            bs: '2+',
            s: '7',
            t: '8',
            w: '12',
            a: '5',
            ld: '10',
            sv: '2+',
        },{
            m: '8"',
            ws: '3+',
            bs: '3+',
            s: '7',
            t: '8',
            w: '<7',
            a: '5',
            ld: '10',
            sv: '2+',
        },{
            m: '6"',
            ws: '4+',
            bs: '4+',
            s: '7',
            t: '8',
            w: '<4',
            a: '5',
            ld: '10',
            sv: '2+',
        }],
        weapons: [
            weapons.tyrantVenomCannon,
            weapons.tyrantStranglethron,
            weapons.tyrantBonesword,
            weapons.tyrantScythingTalons
        ],
        abilities: [
            abilities.psychicBarrier,
            abilities.willOfTheHiveMind,
            abilities.deathThroes,
            abilities.psyker2,
            abilities.relentlessFurocity
        ]
    },
    {
        name: 'Tervigon',
        type: 'monster',
        role: 'hq',
        stats: [{
            m: '8"',
            ws: '3+',
            bs: '3+',
            s: '7',
            t: '8',
            w: '17',
            a: '4',
            ld: '10',
            sv: '2+',
        },{
            m: '7"',
            ws: '4+',
            bs: '4+',
            s: '7',
            t: '8',
            w: '<9',
            a: '4',
            ld: '10',
            sv: '2+',
        },{
            m: '6"',
            ws: '5+',
            bs: '5+',
            s: '7',
            t: '8',
            w: '<5',
            a: '5',
            ld: '10',
            sv: '2+',
        }],
        weapons: [
            weapons.tervigonStingerSalvoes,
            weapons.tervigonCrushingClaws,
            weapons.tervigonTalonsStrike,
            weapons.tervigonTalonsSweep,
        ],
        abilities: [
            abilities.spawnTermagants,
            abilities.broodProgenitor,
            abilities.wallOfflesh,
            abilities.deathThroes,
            abilities.psyker1,
            abilities.surgingVitality
        ]
    },
    {
        name: 'Genestealers',
        type: 'infantry',
        role: 'elite',
        stats: [{
            m: '8"',
            ws: '3+',
            bs: '6+',
            s: '4',
            t: '4',
            w: '1',
            a: '4',
            ld: '8',
            sv: '5+',
        }],
        weapons: [
            weapons.genestealerClaws
        ],
        abilities: [
            abilities.lightningReflexes,
            abilities.vanguardPredator,
            abilities.infiltrationSpawning,
            abilities.insidiousInfestation,
            abilities.insidiousinfestationAction,
        ],
    },
    {
        name: 'Venomthrope',
        type: 'infantry',
        role: 'elite',
        stats: [{
            m: '8"',
            ws: '3+',
            bs: '3+',
            s: '5',
            t: '5',
            w: '4',
            a: '5',
            ld: '5',
            sv: '4+',
        }],
        weapons: [
            weapons.venomthropeLashes,
        ],
        abilities: [
            abilities.graspingTendrils,
            abilities.toxicMiasma,
            abilities.foulSpores
        ]
    },
    {
        name: 'Termigant',
        type: 'infantry',
        role: 'troops',
        stats: [{
            m: '6"',
            ws: '4+',
            bs: '4+',
            s: '3',
            t: '3',
            w: '1',
            a: '1',
            ld: '5',
            sv: '5+',
        }],
        weapons: [
            weapons.termigantFleshborer,
            weapons.termigantDevourer,
            weapons.termigantSpineFist,
        ],
        abilities:[
            abilities.swarmingMasses,
        ]
    },
    {
        name: 'Hormagaunt',
        type: 'infantry',
        role: 'troops',
        stats: [{
            m: '10"',
            ws: '4+',
            bs: '4+',
            s: '3',
            t: '3',
            w: '1',
            a: '3',
            ld: '5',
            sv: '5+',
        }],
        weapons: [
            weapons.hormagauntClaws
        ],
        abilities:[
            abilities.swarmingMasses,
            abilities.boundingLeap
        ]
    },
    {
        name: 'Gargoyle',
        type: 'infantry',
        role: 'troops',
        stats: [{
            m: '12"',
            ws: '4+',
            bs: '4+',
            s: '3',
            t: '3',
            w: '1',
            a: '1',
            ld: '5',
            sv: '6+',
        }],
        weapons: [
            weapons.termigantFleshborer
        ],
        abilities:[
            abilities.swarmingMasses,
        ]
    },
    {
        name: 'Warriors',
        type: 'infantry',
        role: 'troops',
        stats: [{
            m: '6"',
            ws: '3+',
            bs: '3+',
            s: '5',
            t: '5',
            w: '3',
            a: '3',
            ld: '9',
            sv: '4+',
        }],
        weapons:[
            weapons.warriorDeathspitter,
            weapons.warriorDevourer,
            weapons.warriorSpinefists,
            weapons.warriorBarbedStrangler,
            weapons.warriorVenomCannon,
            weapons.warriorBonesword,
            weapons.warriorDualBonesword,
            weapons.warriorRendingClaw,
            weapons.warriorScythingtalon,
        ],
        abilities: [
            abilities.warriorSpawning,
            abilities.goadedToSlaughter
        ]
    },
    {
        name: 'Trygon',
        type: 'monster',
        role: 'fastAttack',
        stats: [{
            m: '10"',
            ws: '3+',
            bs: '3+',
            s: '7',
            t: '7',
            w: '14',
            a: '12',
            ld: '7',
            sv: '3+',
        },{
            m: '8"',
            ws: '4+',
            bs: '4+',
            s: '7',
            t: '7',
            w: '<7',
            a: '12',
            ld: '7',
            sv: '3+',
        },{
            m: '6"',
            ws: '5+',
            bs: '5+',
            s: '7',
            t: '7',
            w: '<4',
            a: '12',
            ld: '7',
            sv: '3+',
        }],
        weapons: [
            weapons.trygonBioPulse,
            weapons.trygonTalons,
            weapons.trygonToxinSpike,
        ],
        abilities:[
            abilities.deathFromBelow,
            abilities.serpentineCoils,
            abilities.deathThroes
        ]
    },
    {
        name: 'Ripper Swarm',
        type: 'infantry',
        role: 'fastAttack',
        stats: [{
            m: '6"',
            ws: '5+',
            bs: '5+',
            s: '3',
            t: '3',
            w: '4',
            a: '4',
            ld: '4',
            sv: '6+',
        }],
        weapons: [
            weapons.ripperClaws,
            weapons.ripperSpineMaw,
        ],
        abilities: [
            abilities.lesserOrganism,
            abilities.deathFromBelow,
            abilities.burrowAndSqurim,
        ]
    },
    {
        name: 'Carnifex',
        type: 'monster',
        role: 'heavySupport',
        stats: [{
            m: '8"',
            ws: '3+',
            bs: '4+',
            s: '6',
            t: '7',
            w: '9',
            a: '4',
            ld: '6',
            sv: '2+',
        }],
        weapons: [
            weapons.carnifexBioPlasma,
            weapons.carnifexDeathspitter,
            weapons.carnifexDevourer,
            weapons.carnifexSpineBanks,
            weapons.carnifexStranglethornCannon,
            weapons.carnifexVenomCannon,
            weapons.carnifexBoneMace,
            weapons.carnifexCrushingClaw,
            weapons.carnifexScythingTalon,
            weapons.carnifexThresherScythe
        ],
        abilities: [
            abilities.ArmouredExoskeleton,
            abilities.blisteringAssault,
            abilities.monsterousBrood,
            abilities.deathThroes
        ]
    },
];
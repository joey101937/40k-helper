import { gorgon, hydra, jormungandr, kraken, kronos, leviathan } from "./fleets"

export const catalyst = {
    name: 'Catalyst',
    warpChargeValue: '6',
    desc: 'Blessing: Target one unit within synaptic link range of this psycher, until the start of your next psychic phase: Each time the unit would receive a wound, roll a d6. On a 5+, that wound is not lost. If the target model is TITANIC, you need to roll a 6+ instad'
}

export const theHorror = {
    name: 'The Horror',
    warpChargeValue: '5',
    desc: 'Malediction: Target one enemy unit within 24" or within synaptic link range. Until the start of your next psychic phase, subtract 2 from that unit\'s leadership and subtract 1 from combat attrition tests taken for that unit'
}

export const neuroparasite = {
    name: 'Neuroparasite',
    warpChargeValue: '7',
    desc: 'Witchfire: Target one enemy unit within 18" or within syntaptic link range. Roll a D6 for each model in that unit and for each roll that exceeds that model\'s toughness, that model\'s unit takes one mortal wound up to a maximum of 6'
}

export const onslaught = {
    name: 'Onslaught',
    warpChargeValue: '6',
    desc: 'Blessing: Target one unit within synaptic link range of this psycher. Until your next psychic phase, models in that unit can fire assault weapons after advancing, and fire heavy weapons after moving without the usual penalty. They can also declare a charge after advancing.'
}

export const paroxysm = {
    name: 'Paroxysm',
    warpChargeValue: '7',
    desc: 'Malediction: Target one enemy unit within 18" or within synaptic link range. Until the start of your next psyhcic phase, that unit cannot fire overwatch or set to defend. Also, each time a model in that unit makes a melee attack, subtract 1 from that attack\'s wound role'
}

export const psychicScream = {
    name: 'Psychic Scream',
    warpChargeValue: '5',
    desc: 'Witchfire: Select the closest enemy unit within 18". that unit suffers D3 mortal wounds. If that unit has the psyker keyword, and the result of the Psychic Test is higher than the leadership of that unit, randomly select one psychic power that unit knows. It no longer knows that power for the rest of the battle.'
}

export const smite = {
    name: 'Smite',
    warpChargeValue: '5*',
    desc: 'Increase the warp charge value of this power by 1 for each other attempt that has been made to use this power by another unit in your army this phase. The closest enemy unit within 18" of and visible to the psyker suffers D3 mortal wounds. If the result of the Psychic test was 11 or more, that unit suffers D6 mortal wounds instead.'
}

export const unstoppableOnslaught = {
    name: '(BEHEMOTH) Unstoppable Onslaught',
    warpChargeValue: '7',
    desc: 'Select one friendly BEHEMOTH unit within Synaptic Link range of this PSYKER. Until the start of your next turn, each time a model in that unit makes a melee attack, add 1 to that attack\'s wound roll.',
    fleet: 'behemoth'
}

export const synapticLure = {
    name: `(${kraken.name.toUpperCase()}) Synaptic Lure`,
    warpChargeValue: '5',
    desc: `Malediction: Select one enemy unit within Synaptic Link range or within 18" of this PSYKER. Until the start of your next Psychic phase, each time a friendly KRAKEN unit declares a charge, if that enemy unit is one of the targets of that charge, you can re-roll the charge roll.`,
    fleet: kraken.key
}

export const hiveNexus = {
    name: `(${leviathan.name.toUpperCase()}) Hive Nexus`,
    warpChargeValue: '7',
    desc: `Blessing: Select one friendly LEVIATHAN Synapse model within synaptic link range. You may then choose another LEVIATHAN CORE unit within synaptic link range to grant the benefits of the synapse unit's \"Synaptic Imperative\" ability as if it were active for your army.`,
    fleet: leviathan.key
}

export const poisonousInfluence = {
    name: `(${gorgon.name.toUpperCase()}) Poisonous Influence`,
    warpChargeValue: '7',
    desc: `Blessing: Select one friendly GORGON unit within Synaptic Link range of this PSYKER. Until the start of your next Psychic phase, each time a model in that unit makes a melee attack, an unmodified wound roll of 6 inflicts 1 mortal wound on the target in addition to any normal damage (to a maximum of 6 mortal wounds).`,
    fleet: gorgon.key,
}

export const lurkingMaws = {
    name: `(${jormungandr.name.toUpperCase()}) Lurking Maws`,
    warpChargeValue: '7',
    desc: `Malediction: Select one enemy unit within Synaptic Link range of this PSYKER or one enemy unit within 18" of this PSYKER. Until the start of your next Psychic phase, each time a friendly JORMUNGANDR model makes a melee attack against that enemy unit, improve the Armour Penetration characteristic of that attack by 1.`,
    fleet: jormungandr.key,
}

export const symbiostorm = {
    name: `(${kronos.name.toUpperCase()}) Symbiostorm`,
    warpChargeValue: '7',
    desc: `Blessing: Select one friendly KRONOS unit within Synaptic Link range of this PSYKER. Until the start of your next Psychic phase, each time a model in that unit makes a ranged attack, add 1 to the Strength characteristic of that attack.`,
    fleet: kronos.key,
}

export const psychicShreik = {
    name: `(${hydra.name.toUpperCase()}) Psychic Shreik`,
    warpChargeValue: '6',
    desc: `Witchfire: Select one enemy unit within Synaptic Link range or within 18" of this PSYKER. Roll one D6 for each friendly HYDRA INFANTRY or HYDRA BEAST model within 3" of that unit and three D6s for each friendly HYDRA MONSTER model within 3" of that unit: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).`,
    fleet: hydra.key,
}

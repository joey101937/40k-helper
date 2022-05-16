import { jormungandr, kraken, kronos } from './fleets';


export const hivePredator = {
    name: 'Hive Predator',
    timing: 'beforeBattle',
    type: 'Requisition',
    cost: '1cp',
    desc: 'If your WARLORD has the HIVE TENDRIL keyword. Select one HIVE TENDRIL CHARACTER model from your army and determine one Warlord Trait for that model (this must be a Warlord Trait they can have); that model is only regarded as your Warlord for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (twice) or Onslaught battle (thrice)'
}


export const infestation = {
    name: 'Infestation',
    timing: 'beforeBattle',
    type: 'Strategic Ploy - Crusade',
    cost: '1cp',
    desc: 'Use this Stratagem before the battle, during the Declare Reserves and Transports step (if you are playing a mission without this step, use this Stratagem during deployment instead). Select one ENDLESS MULTITUDE unit from your army. During deployment, when you set up that unit, it can be set up anywhere on the battlefield that is wholly within an Area Terrain feature and more than 9" away from the enemy deployment zone and any enemy models.'
}

export const rarefiedEnhancements = {
    name: 'Rarefied Enhancements',
    timing: 'beforeBattle',
    type: 'Requisition',
    cost: '1cp',
    desc: 'Use this Stratagem before the battle, when you are mustering your army, if your WARLORD has the HIVE TENDRIL keyword. Select one HIVE TENDRIL CHARACTER model from your army and give them one Relic (this must be a Relic they can have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (twice), or an Onslaught battle (thrice).'
}

export const burriedInWait = {
    name: 'Burried in Wait',
    timing: 'beforeBattle',
    type: 'Requisition',
    fleet: jormungandr,
    cost: '1cp',
    desc: 'Use this Stratagem before the battle, during the Declare Reserves and Transports step (if you are playing a mission without this step, use this Stratagem during deployment instead). Select one ENDLESS MULTITUDE unit from your army. During deployment, when you set up that unit, it can be set up anywhere on the battlefield that is wholly within an Area Terrain feature and more than 9" away from the enemy deployment zone and any enemy models.'
}

export const synapticLegacy = {
    name: 'Synaptic Legacy',
    timing: 'startOfRound',
    type: 'Epic Deed',
    cost: '1cp',
    desc: 'Use this Stratagem when selecting a Synaptic Imperative ability to be active for your army. If your WARLORD is on the battlefield and has the HIVE TENDRIL keyword, this turn you can select the Synaptic Imperative ability of a destroyed model from your army instead of one from a model that is on the battlefield. Note that, unless otherwise allowed, you still cannot select that ability if it has already been selected by you earlier in the battle.'
}

export const rapicRegeneration = {
    name: 'Rapid Regeneration',
    timing: 'commandPhase',
    type: 'Strategic Ploy',
    cost: '1cp',
    desc: 'Select one HIVE TENDRIL model from your army. That model regenerates and regains up to D3 lost wounds. Each model can only be regenerated once per turn.'
}

export const endlessSwarm = {
    name: 'Endless Swarm',
    timing: 'commandPhase',
    type: 'Strategic Ploy',
    cost: '1cp',
    desc: 'Select one ENDLESS MULTITUDE unit from your army. Up to D3+3 destroyed models can be added back to that unit with their full wounds remaining. These returned models can only be set up within Engagement Range of enemy units that are already within Engagement Range of the unit they are being added back to.'
}

export const boundingAdvance = {
    name: 'Bounding Advance',
    timing: 'movementPhase',
    type: 'Epic Deed',
    cost: '1-2cp',
    desc: 'Use this Stratagem in your Movement phase, when a HORMAGAUNTS unit from your army is selected to Advance. Until the end of the turn, each time that unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of models in that unit. That unit is still eligible to declare a charge this turn even though it Advanced. If that unit has 15 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.'
}

export const enfoldingStrike = {
    name: 'Enfolding Strike',
    timing: 'movementPhase',
    type: 'Epic Deed',
    cost: '1cp',
    desc: 'Use this Stratagem in your Movement phase, when a PARASITE OF MORTREX model from your army finishes a Normal Move or Advances. Select one enemy unit that PARASITE OF MORTREX model moved across this phase. Roll one D6: on a 2-5, that unit suffers D3 mortal wounds and becomes infected with parasites (see Parasitic Infection ability, on model\'s datasheet); on a 6, that unit suffers 3 mortal wounds and becomes infected with parasites.'
}

export const sporeClouds = {
    name: 'Spore Clouds',
    timing: 'movementPhase',
    type: 'Strategic Ploy',
    cost: '1cp',
    desc: 'Use this Stratagem in your Movement phase, when a SPORECASTER unit from your army is selected to Remain Stationary. Until the start of your next Command phase, add 6" to the range of that unit’s aura abilities.'
}

export const subterrainianAssault = {
    name: 'Subterrainian Assault',
    timing: 'movementPhase',
    type: 'Strategic Ploy',
    cost: '1cp',
    desc: 'Use this Stratagem in the Reinforcements step of your Movement phase, when a <HIVE FLEET> TRYGON or <HIVE FLEET> TRYGON PRIME model from your army is set up on the battlefield using its Death From Below ability. Select one friendly <HIVE FLEET> unit with the Troops Battlefield Role that is in Strategic Reserves. Set that unit up anywhere on the battlefield that is wholly within 9" of that TRYGON or TRYGON PRIME model and not within 9" of any enemy models.'
}

export const opportunisticAdvance = {
    name: 'Opportunistic Advance',
    timing: 'movementPhase',
    type: 'Strategic Ploy',
    cost: '1cp',
    fleet: kraken,
    desc: 'Use this strategem when a friendly KRAKEN unit is selected to move. The following effects apply to that unit: When that unit would roll to advance, do not roll any dice and instead add 8" to that unit\'s movement characteristic. This unit does not suffer the penalty to hit-rolls when shooting after advancing, (cannot be combined with bounding advance strategem).'
}

export const powerOfTheHiveMind = {
    name: 'Power of the Hive Mind',
    timing: 'psychicPhase',
    type: 'Epid Deed',
    cost: '1cp',
    desc: 'Select one HIVE TENDRIL PSYKER unit from your army. Until the end of the phase, that unit can attempt to manifest one additional psychic power.'
}

export const synapticChanneling = {
    name: 'Synaptic Channeling',
    timing: 'psychicPhase',
    type: 'Epid Deed',
    cost: '1cp',
    desc: 'Select one <HIVE FLEET> PSYKER unit from your army. Until the end of the phase, that unit knows all of the psychic powers known by friendly <HIVE FLEET> PSYKER units that are on the battlefield.'
}

export const theDeepestShadow = {
    name: 'Power of the Hive Mind',
    timing: 'PsychicPhase',
    type: 'Epid Deed',
    cost: '1cp',
    enemyTurn: true,
    fleet: kronos,
    desc: 'Use this Stratagem in your opponent’s Psychic phase, when an enemy unit fails a Psychic test. Select a friendly KRONOS PSYKER unit within 18" of that enemy unit. That enemy unit suffers D3 mortal wounds and the selected friendly unit gains the following aura ability: While an enemy PSYKER unit is within 18" of this unit, each time a Psychic test taken for that unit is failed, that unit suffers D3 mortal wounds.'
}

/*
export const rapicRegeneration = {
    name: 'Rapid Regeneration',
    timing: 'commandPhase',
    type: 'Strategic Ploy',
    cost: '1cp',
    desc: 'Select one HIVE TENDRIL model from your army. That model regenerates and regains up to D3 lost wounds. Each model can only be regenerated once per turn.'
}
*/
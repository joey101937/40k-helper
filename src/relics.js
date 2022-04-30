import { behemoth, gorgon, hydra, jormungandr, kraken, kronos, leviathan } from "./fleets"

export const monsterousMusculature = {
    name: '(BEHEMOTH) Monsterous Musculature',
    desc: 'Add 1 to the Damage characteristic of melee weapons the bearer is equipped with.',
    fleet: behemoth.key,
}

export const chameleonicMutation = {
    name: `(${kraken.name.toUpperCase()}) Chameleonic Mutation`,
    desc: 'Each time an attack is made against the bearer: Subtract 1 from that attack\'s hit roll. The hit roll cannot be re-rolled.',
    fleet: kraken.key,
}

export const precepticNode = {
    name: `(${leviathan.name.toUpperCase()}) Preceptic Node`,
    desc: 'In the Reinforcements step of your opponent\'s Movement phase, each time an enemy unit is set up as Reinforcements within 18" of the bearer, you can select one friendly LEVIATHAN (CORE OR CHARACTER) unit within 6" of the bearer. If you do, that friendly unit can shoot as if it were your Shooting phase, but its models can only target that enemy Reinforcements unit. A unit cannot be selected to fire more than once per phase as a result of this Relic.',
    fleet: leviathan.key,
}

export const hypermorphicBiology = {
    name: `(${gorgon.name.toUpperCase()}) Hypermorphic Biology`,
    desc: 'Add 1 to the Toughness characteristic of the bearer. If the bearer\'s characteristics can change as they suffer damage, they are considered to have double the number of wounds remaining for the purposes of determining what those characteristics are.',
    fleet: gorgon.key,
}

export const infrasonicRoar = {
    name: `(${jormungandr.name.toUpperCase()}) Infrasonic Roar`,
    desc: 'At the end of your Movement phase, select one enemy unit within 12" of the bearer and roll 3D6; if the result is equal to or higher than that enemy unit’s Leadership characteristic, until the start of your next Movement phase, that unit cannot perform actions (if that unit is currently performing an action, it immediately fails).',
    fleet: jormungandr.key,
}

export const nullnode = {
    name: `(${kronos.name.toUpperCase()}) Nullnode`,
    desc: 'In your Command phase, select one enemy unit within Synaptic Link range of the bearer. Until the start of your next Command phase: Each time a model in that unit makes an attack, the hit roll cannot be re-rolled and the wound roll cannot be re-rolled. Psychic tests taken for that unit cannot be re-rolled.',
    fleet: kronos.key,
}

export const barbwormInfestation = {
    name: `(${hydra.name.toUpperCase()}) Barbworm Infestation`,
    desc: 'Each time the bearer makes a ranged attack, you can re-roll the wound roll.',
    fleet: hydra.key,
}

export const balethornCannon = {
    name: 'Balethorn Cannon',
    desc: 'Replaces the user\'s stranglethorn cannon with a balethron cannon',
    weapon: {
        name: 'Balethorn Cannon',
        type: 'Heavy D3+3',
        range: '36"',
        s: '10',
        ap: '-3',
        d: '3',
        notes: 'Blast',
    },
}


export const shardgullet = {
    name: 'Shardgullet',
    desc: 'Replaces the user\'s venom cannon cannon with a Shardgullet',
    weapon: {
        name: 'Shardgullet',
        type: 'Assault 3',
        range: '36"',
        s: '12',
        ap: '-5',
        d: '5',
        notes: '-',
    },
}

export const scythesOfTyran = {
    name: 'Scythes Of Tyran',
    desc: 'Replaces the user\'s 2 Monsterous Scything Talons with a Scythes Of Tyran',
    weapon: {
        name: 'Scythes Of Tyran',
        type: 'Melee',
        range: 'Melee',
        s: '+2',
        ap: '-4',
        d: '3',
        notes: 'Each time the bearer fights, it makes 2 additional attacks with this weapon.',
    },
}

export const gestationSac = {
    name: 'Gestation Sac',
    desc: 'Once per battle, the bearer can perform the following action: At the start of your Shooting phase, this model can start to perform this action. The action is completed at the end of that phase. When it is completed, set up a new <HIVE FLEET> RIPPER SWARMS unit on the battlefield within 3" of this model and not within Engagement Range of any enemy units. That RIPPER SWARMS unit contains D3+1 models, and, if you are playing a game that uses a points limit, does not cost any Reinforcement points.',
}

export const pathogenesis = {
    name: 'Pathogenesis',
    desc: 'Add 8" to the Range characteristic of ranged weapons the bearer is equipped with. Each time the bearer shoots, you can re-roll one hit roll and you can re-roll one wound roll when resolving those attacks.',
}

export const resonanceBarb = {
    name: 'Resonance Barb',
    desc: 'Add 1 to Psychic tests taken for the bearer Bearer knows one additional psychic power from the Hive Mind discipline.',
}

export const searhive = {
    name: 'Searhive',
    desc: 'TOXIN SACS model only. Each time the bearer makes a melee attack against a unit (excluding MONSTER and VEHICLE units), if a hit is scored, it automatically wounds the target.'
}

export const theDirgeheartOfKharis = {
    name: 'The Dirgeheart Of Kharis',
    desc: 'Each time the bearer is selected to fight, after resolving its attacks, select one enemy unit hit by an attack made by the bearer this phase. Until the end of the next turn: That unit loses the Objective Secured ability. Subtract 1 from the Leadership characteristic of models in that unit.'
}

export const mawclawsOfThyrax = {
    name: 'The Maw Claw of Thyrax',
    desc: 'Add 1 to the bearer\'s Attacks characteristic. Each time the bearer makes a melee attack, you can re-roll the wound roll. Each time the bearer destroys an enemy unit as the result of a melee attack, until the end of the battle, add 1 to the bearer\'s Attacks characteristic (to a maximum of +3).',
}

export const thePassenger = {
    name: 'The Passenger',
    desc: 'ADRENAL GLANDS model only. Add 2 to Advance and Charge rolls made for the bearer.',
}

export const theReaperOfObliterax = {
    name: 'The Reaper of Obliterax',
    desc: 'Model equipped with bonesword or monstrous bonesword only. That model\'s bonesword or monstrous bonesword gains the following abilities: Each time an attack is made with this weapon, if that attack successfully wounds the target, the target suffers 1 mortal wound in addition to any other damage. Each time an attack made with this weapon is allocated to an enemy model, that model cannot use any rules to ignore the wounds it loses.',
}

export const theYmgarlFactor = {
    name: 'The Ymgarl Factor',
    desc: 'At the start of the Fight phase, select one of the following augments which last until the end of the phase: Add 2 to the bearer\'s Strength characteristic, Add 1 to the bearer\'s attack characteristic, add 1 to the bearer\'s Toughness characteristic.',
}

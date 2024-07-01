import { atom } from "recoil";

const DiceAtom = atom({
        key: "DiceNumberAtom",
        default:0
})

const isAnimateAtom = atom({
        key: "Isanimating",
        default:false
})

const turnAtom = atom({
        key: 'turnAtom',
        default: ""
})

const playersAtom = atom({
        key: "PlayersAtom",
        default: [] as { username: string; color: string; }[]
})
export { DiceAtom ,isAnimateAtom,turnAtom,playersAtom};
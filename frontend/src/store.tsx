import { atom } from "recoil";

const diceNumberAtom = atom({
        key: "diceNumber",
        default: 0
})

const playersAtom = atom({
        key: "players",
        default:[] as string[]
})

export {diceNumberAtom,playersAtom}


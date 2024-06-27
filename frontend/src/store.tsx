import { atom } from "recoil";

const DiceAtom = atom({
        key: "DiceNumberAtom",
        default:0
})

const isAnimateAtom = atom({
        key: "Isanimating",
        default:false
})

export { DiceAtom ,isAnimateAtom};
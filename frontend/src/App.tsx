
import { useMemo, useState } from 'react'
import './App.css'
import Canvas from './canvas'
import { SelectPlayerBox } from './components/selectplayers'
import Dice from './dice'
import { useRecoilValue } from 'recoil'
import { playersAtom } from './store'
function App() {
  const selectPlayers = useRecoilValue(playersAtom);
  const [startGame, setStart] = useState(false)
  const startFlag = useMemo(() => {
    if (selectPlayers.length > 1 && startGame) {
      return true;
    } else {
      setStart(false)
    return false}
  },[selectPlayers, startGame])
  return (
      <div className='contanier'>
<h1 className='text-2xl font-bold'>Snake and Ladders Game</h1>
      {(selectPlayers.length > 1 && startFlag) ? <Game selectPlayers={selectPlayers} /> :<SelectPlayerBox setStart={setStart} ></SelectPlayerBox>}
    </div>
  )
}

interface gameprops {
selectPlayers:string[]
}

function Game ({selectPlayers}:gameprops){

  return <div className='flex justify-around  align-center flex-wrap'>
  <Canvas></Canvas>
  <Dice/>
  </div>
}



export default App

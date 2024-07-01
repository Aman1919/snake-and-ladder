import { useState } from "react";
import OfflineGame from "./game";
function App() {
  const [click, setClick] = useState('');
  const [NoOfPlayer, setNoofPlayer] = useState(0);
  function offline() {
  let a = prompt("Enter No. Player to be player");
  
  if (a !== null) {
    let b = parseInt(a, 10);
    if (b >= 2 && b <= 4) {
      setNoofPlayer(b);
      setClick('offline');
    } else {
      alert("Please enter a number between 2 and 4.");
    }
  } else {
    alert("Input cannot be empty.");
  }
}
  
  return (
    <div className="App">
      <h1>Snake and ladder Game</h1>
      {(click==='')?<><button onClick={()=>setClick('online')}>Online</button>
    <button onClick={offline}>Offline</button> </>: ''}
      
      {(click === 'offline') ? <OfflineGame noOfPlayers={NoOfPlayer} /> : ''}
      {(click === 'online') ? 'online' : ''}
      
    </div>
  );
}






export default App;

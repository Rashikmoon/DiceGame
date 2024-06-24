
import { useState } from 'react'
import './App.css'
import StartGame from './componenets/StartGame'
import GamePlay from './componenets/GamePlay';

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }

  return (
    <div>
      {isGameStarted ? <GamePlay/> : <StartGame 
       toggle={toggleGamePlay}  />}
      
    </div>
  );
}

export default App;

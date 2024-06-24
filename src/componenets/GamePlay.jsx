import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import Rolldice from './Rolldice';
import ShowRules from './ShowRules';

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setcurrentDice] = useState(1);
  const [error,seterror] = useState();


  const [showrules,setshowrules] = useState(false);

  const toggleshowrules =() =>{
      setshowrules((prev)=> !prev)
      
  }


  const genrateRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);


  };

const doreset =() =>{
  setScore(0);
}

const roledice =()=>{
  if(!selectedNumber) {
    seterror("You have not selected any number")
    return
  };
  
  
 const randomNumber = genrateRandomNumber(1,7);

 setcurrentDice((prev) => randomNumber);

 if(selectedNumber === randomNumber){
  setScore((prev)=> prev + randomNumber);
 }else{
  setScore((prev)=> prev - 2);
 }
 selectedNumber(undefined);

};

  return (
    <MainContainer>
       <div className='top-section'> <TotalScore score={score}/>
        <NumberSelector seterror={seterror} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/></div>
        <Rolldice currentDice={currentDice} roledice={roledice} />
        <div className="btn">
          <Button onClick={doreset}>Reset</Button>
          <Button onClick={toggleshowrules} >Show Rules</Button>
        </div>
        <div>
          
        </div>
        {showrules && <ShowRules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
padding-top: 72px;
.top-section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btn{
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  
  align-items: center;
}

`;
const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';
const Rolldice = ({currentDice,roledice}) => {

 
 

  return (
    <DiceContainer>
    <div className='dice'>
        <img className='imagedice' onClick={roledice} src={`/images/dice0${currentDice}.png`} alt="dice1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default Rolldice;

const DiceContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top:48px;

.dice{
  cursor: pointer;
  
}
p{
    font-size: 24px;
}
/* */

`;


import React, { useState } from 'react'
import styled from "styled-components";
const NumberSelector = ({seterror,selectedNumber,setSelectedNumber,error}) => {

const seterrorhandler = (value) =>{

  setSelectedNumber(value);
  seterror("")

}


console.log(selectedNumber);


    const arrNumber = [1,2,3,4,5,6];
  return (
    <NumberSelectorContainer>
         <p className='Red'>{error}</p>
        <div className='flex'>{arrNumber.map((value,i)=>(<Box isSelected={value === selectedNumber} key={i} onClick={ () => seterrorhandler(value) }>{value}</Box>))}</div>    
        <p>Select Number</p>

    </NumberSelectorContainer>
  )
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;

.flex{
  display: flex;
  gap:24px ;
}
.flex p{
  font-size: 24px;
  font-weight: 700px;
}
.Red{
  color: red;
}
`;

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;
background-color: ${(props) =>props.isSelected ? "black" : "white" };
color: ${(props) =>props.isSelected ? "white" : "black" } ;




`;


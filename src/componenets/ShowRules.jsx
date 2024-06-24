import React, { useState } from 'react';
import styled from 'styled-components';


const ShowRules = ({toggle}) => {
  return (
    <Rules>
<div>
<p>Select any Number click on dice  after clicking on dice if selected number is equal to dice number you will get same point as dice  if you get wrong guess the two points will be deducted</p>
</div>

    </Rules>
  );
};

export default ShowRules;

const Rules = styled.div`

max-width: 1000px;
margin: 0 auto;
text-align: center;

`;
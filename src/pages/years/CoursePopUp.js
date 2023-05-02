import React from 'react';
import * as styled from "./yearsElements";

function CoursePopUp(props) {
  return (props.trigger) ? (
    <styled.popUpBackground onClick={() => props.setTrigger(false)}>
      <styled.popUpCard>
        <styled.textContainer>
        {props.children}
        <button onClick={() => props.setTrigger(false)}>Close</button>
        </styled.textContainer>
      </styled.popUpCard>
    </styled.popUpBackground>
  ) : null;
}

export default CoursePopUp;

import React from 'react';
import * as styled from "./calculatorElements";


function HelpPopUp(props) {
  return (props.trigger) ? (
    <styled.popUpBackground>
      <styled.popUpCard>
        <styled.textContainer>
        {props.children}
        You can find your current CGPA and the number of credits that currently contritbute to your CGPA by running an audit on carleton central.
            <img src = "audit.jpg" alt="not working"  style={{ maxWidth: '100%', maxHeight: '100%', width: '350px', height: '80px',border: '2px solid #ccc' }}/>
            <img src = "creds.jpg" alt="not working"  style={{ maxWidth: '100%', maxHeight: '100%', width: '350px', height: '80px',  border: '2px solid #ccc' }}/>
        
        <styled.bButton onClick={() => props.setTrigger(false)}>Close </styled.bButton>
        </styled.textContainer>
      </styled.popUpCard>
    </styled.popUpBackground>
  ) : null;
}

export default HelpPopUp;
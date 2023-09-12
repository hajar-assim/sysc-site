
import React from 'react';
import * as styled from "./calculatorElements";


function HelpPopUp(props) {
  return (props.trigger) ? (
    <styled.popUpBackground>
      <styled.popUpCard>
        <styled.textContainer>
        {props.children}
        If u have any questions feel free to contact us! 
        You can do so by joining our discord server:
          <styled.bButton> <a  href = "https://discord.gg/e3TbEdZa" target = "_blank" > Discord</a> </styled.bButton>
        Or by directly emailing us:
        <styled.bButton> <a  href = "mailto:syscsuccess@outlook.com" target = "_blank" > Mail</a> </styled.bButton>
          <br>
          </br>
        <styled.bButton onClick={() => props.setTrigger(false)}>Close </styled.bButton>
        </styled.textContainer>
      </styled.popUpCard>
    </styled.popUpBackground>
  ) : null;
}

export default HelpPopUp;
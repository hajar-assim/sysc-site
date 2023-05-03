import React from 'react';
import * as styled from "./popup";

function HelpPopUp() {
  return(
    <styled.popUpBackground>
      <styled.popUpCard>
        <styled.textContainer>

        <button> Close </button>
        </styled.textContainer>
      </styled.popUpCard>
    </styled.popUpBackground>
  );
}

export default HelpPopUp;
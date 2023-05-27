import * as styled from "./yearsElements";
import * as b from "../calculator/calculatorElements";

function CoursePopUp(props) {
  return (props.trigger) ? (
     
    <styled.popUpBackground>
      <styled.popUpCard>
        <styled.textContainer>
        {props.children}
        
  
        <b.bButton onClick={() => props.setTrigger(false)}>CLOSE</b.bButton>
        </styled.textContainer>
      </styled.popUpCard>
    </styled.popUpBackground>
  ) : null;
}

export default CoursePopUp;
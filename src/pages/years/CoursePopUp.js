import * as styled from "./yearsElements";

function CoursePopUp(props) {
  return (props.trigger) ? (
     
    <styled.popUpBackground>
      <styled.popUpCard>
        <styled.textContainer>
        {props.children}
        
        <button>Midterms/Tests</button>
        <button>Exams</button>
        <button onClick={() => props.setTrigger(false)}>Close</button>
        </styled.textContainer>
      </styled.popUpCard>
    </styled.popUpBackground>
  ) : null;
}

export default CoursePopUp;
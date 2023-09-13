import * as styled from "./yearsElements";
import * as b from "../calculator/calculatorElements";

function CoursePopUp(props) {
  const LogoComponent = () => {
    return (
      <img
        src="https://carleton.ca/brand/wp-content/uploads/social-media-sample-red-247w-1.png"
        alt="Logo"
        style={{
          position: 'fixed',
          top: '155px',
          left: '400px',
          width: '100px',
          height: '100px',
        }}
      />
    );
  };
  return (props.trigger) ? (
     
    <styled.popUpBackground>
      <styled.popUpCard>
        <styled.textContainer>
        <LogoComponent/>
        {props.children}
        

        <b.bButton onClick={() => props.setTrigger(false)}>CLOSE</b.bButton>
        </styled.textContainer>
      </styled.popUpCard>
    </styled.popUpBackground>
  ) : null;
}

export default CoursePopUp;
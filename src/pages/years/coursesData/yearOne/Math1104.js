import * as styles from "./courseElements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusMinus} from '@fortawesome/free-solid-svg-icons';

const Math1104 = () =>{
    return(
        <>
        <styles.courseName>Math 1104   <FontAwesomeIcon icon={faPlusMinus} style={{color: "#000000",}} /> </styles.courseName>
         <h1>Past Tests:</h1>
         <div>
         <a href="/PDFS/MATH1104/TESTS/test1Fall14Soln.pdf" target="_blank" >Test 1 2014</a>
         </div>
         <div>
         <a href="/PDFS/MATH1104/TESTS/test2Fall14Soln.pdf" target="_blank" >Test 2 2014</a>
         </div>
         <div>
         <a href="/PDFS/MATH1104/TESTS/test3Soln.pdf" target="_blank" >Test 3 2014</a>
         </div>

         <h1>Past Exams:</h1>

         <div>
         <a href="/PDFS/MATH1104/EXAMS/LIN-FINAL-2010.pdf" target="_blank" >2010 Exam</a>
         </div>

         <div>
         <a href="/PDFS/MATH1104/EXAMS/LIN-FINAL-2010-ANS.pdf" target="_blank" >2010 Exam SOLUTIONS</a>
         </div>

         <div>
         <a href="/PDFS/MATH1104/EXAMS/MATH 1104.pdf" target="_blank" >Practice Exam</a>
         </div>

        </>
    );
}

export default Math1104
import * as styles from "./courseElements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAtom} from '@fortawesome/free-solid-svg-icons';

const Phys1004 = () =>{
    return(
        <>
        <styles.courseName>PHYS 1004 <FontAwesomeIcon icon={faAtom} style={{color: "#000000",}} /> </styles.courseName>
        <h1>Practice:</h1>
        <div>
         <a href="/PDFS/PHYS1004/PRACTICE/Flux and Charge Self Test.pdf" target="_blank" >Flux and charge Self Test</a>
         </div>

         <div>
         <a href="/PDFS/PHYS1004/PRACTICE/Flux and Charge Self Test Solutions.pdf" target="_blank" >Flux and charge Self Test SOLUTIONS</a>
         </div>

         <div>
         <a href="/PDFS/PHYS1004/PRACTICE/Physics-1004C-Practice-Questions (1).pdf" target="_blank" >Practice Questions</a>
         </div>

         <div>
         <a href="/PDFS/PHYS1004/PRACTICE/Physics-1004C-Practice-Questions-and-Solutions.pdf" target="_blank" >Practice Questions SOLUTIONS</a>
         </div>


        <h1>Past Midterms:</h1>

        <div>
         <a href="/PDFS/PHYS1004/MIDTERMS/Physics-1004-S2013-Midterm-Exam-Solutions.pdf" target="_blank" >2013 Midterm with SOLUTIONS</a>
         </div>
         <div>
         <a href="/PDFS/PHYS1004/MIDTERMS/Phys1004-S2012-Mid-term-Solutions.pdf" target="_blank" >2012 Midterm with SOLUTIONS</a>
         </div>

        <h1>Past Exams:</h1>

        <div>
         <a href="/PDFS/PHYS1004/EXAMS/Exam-PHYS1004-2008April.pdf" target="_blank" >2008 Exam</a>
         </div>
         <div>
         <a href="/PDFS/PHYS1004/EXAMS/Final-Exam-Physics-1004-Deferred-S2012.pdf" target="_blank" >2012 Exam</a>
         </div>
         <div>
         <a href="/PDFS/PHYS1004/EXAMS/Final-Exam-Physics-1004-Def-S2012-Soln-B.pdf" target="_blank" >2012 Exam SOLUTIONS</a>
         </div>
         <div>
         <a href="/PDFS/PHYS1004/EXAMS/Final-Exam-Physics-1004-S2013.pdf" target="_blank" >2013 Exam</a>
         </div>
         <div>
         <a href="/PDFS/PHYS1004/EXAMS/Final-Exam-Physics-1004-S2013-solutions-v2.pdf" target="_blank" >2013 Exam  SOLUTIONS</a>
         </div>
         

        <h1>Resources:</h1>
        <div>
         <a href="/PDFS/PHYS1004/RESOURCES/Highlighter Pals PHYS 1004 MASTER SHEET.pdf" target="_blank" >MASTER SHEET</a>
         </div>
         <div>
         <a href="/PDFS/PHYS1004/RESOURCES/BIGBANKBABY.pdf" target="_blank" >2022 ALL WEEKLY QUIZES BANK</a>
         </div>

        </>
    );
}

export default Phys1004
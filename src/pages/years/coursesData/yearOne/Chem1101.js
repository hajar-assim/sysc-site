import * as styles from "./courseElements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFlaskVial} from '@fortawesome/free-solid-svg-icons';

const Chem1101 = () =>{
    return (
        <>
        <styles.courseName>Chem 1101  <FontAwesomeIcon icon={faFlaskVial} style={{color: "#000000",}} /></styles.courseName>

        <h1>Past Exams for Chem1101:</h1>
        <div>
        <a href="/PDFS/CHEM1101/Exam-CHEM1101-2012Winter.pdf" target="_blank">2012 Winter Exam</a>
        </div>

        <div>
        <a href="/PDFS/CHEM1101/MOCK 1.docx.pdf" target="_blank">2013 MOCK</a>
        </div>
        
        <div>
        <a href="/PDFS/CHEM1101/Sample final for Fall 2014.docx.pdf" target="_blank">2014 Sample Exam</a>
        </div>

        </>

    );
}

export default Chem1101
import * as styles from "./courseElements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareRootVariable} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Math1004 = () =>{

    return (
        <>
        <styles.courseName>Math 1004  <FontAwesomeIcon icon={faSquareRootVariable} style={{color: "#000000",}} /></styles.courseName>
        <h1>Past Tests for Math1004:</h1>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test-1-1004-Solutions.pdf" target="_blank" >Test 1 2014</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test 2, 2014, Solutions.pdf" target="_blank">Test 2 2014 Solutions</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test-2-1004-2016-Solutions.pdf" target="_blank">Test 2 2016 Solutions</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test 3 1004 2014 Solutions.pdf" target="_blank">Test 3 2014 Solutions</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test-3-1004-2016-Solutions.pdf" target="_blank">Test 3 2016 Solutions</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test-4-2013-1004-answers.pdf" target="_blank">Test 4 2013 Solutions</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test-4-1004-2016-Solutions.pdf" target="_blank">Test 4 2016 Solutions</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test-5-1004-2016-Solutions.pdf" target="_blank">Test 5 2016 Solutions</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/TESTS/Test 5 Math 1004 2014 Solutions.pdf" target="_blank">Test 5 2014 Solutions</a>
        </div>

        <div>
          <a href="public/PDFS/MATH1004/TESTS/Mock-Test-6-Solutions (1).pdf" target="_blank">Test 6 Mock Solutions</a>
        </div>
        
        <h1>Past Exams:</h1>

        <div>
          <a href="/PDFS/MATH1004/EXAMS/Final-Dec-2013-1004-REVISED.pdf" target="_blank">Final Exam 2013</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/EXAMS/2013 Final Examination Solutions.pdf" target="_blank">Final Exam 2013 SOLUTIONS</a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/EXAMS/Final Dec 2014 1004.pdf" target="_blank">Final Exam 2014 </a>
        </div>

        <div>
          <a href="/PDFS/MATH1004/EXAMS/Final April 2019 1004 solutions.pdf" target="_blank">Final Exam 2019 </a>
        </div>
        


        
        
        </>

    );
}

export default Math1004
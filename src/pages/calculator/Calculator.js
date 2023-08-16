import NavBar from "../home/navBar/NavBar";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import * as styles from "./calculatorElements";
import HelpPopUp from "./pop";

const Calculator = () => {

    
    const [buttonPopUp, setButtonPopUp] = useState(false);

    const handleCourseClick = () => {
        setButtonPopUp(true);
    }
    
    const [cgpa,setCGPA] = useState();
    const [credits,setCredits] = useState();

    const [letterGPA,setLetterGPA] = useState("");

    const [course1, setCourse1] = useState();
    const [course2, setCourse2] = useState();
    const [course3, setCourse3] = useState();
    const [course4, setCourse4] = useState();
    const [course5, setCourse5] = useState();

    const [grade1, setGrade1] = useState('');
    const [grade2, setGrade2] = useState('');
    const [grade3, setGrade3] = useState('');
    const [grade4, setGrade4] = useState('');
    const [grade5, setGrade5] = useState('');

    const [courseCode1, setCourseCode1] = useState();
    const [courseCode2, setCourseCode2] = useState();
    const [courseCode3, setCourseCode3] = useState();
    const [courseCode4, setCourseCode4] = useState();
    const [courseCode5, setCourseCode5] = useState();

    
    function calc() {
        var qualityPoints = parseFloat(cgpa) * parseFloat(credits);
        const validGrades = ['F','D-','D','D+','C-','C','C+','B-','B','B+','A-','A','A+']

        var newGrades = convertGrades();
        var sumGrades = qualityPoints;
        for (let i = 0; i < newGrades.length; i++) {
            if(! isNaN(parseFloat(newGrades[i]))){
                sumGrades += newGrades[i];
            }
        }

        var newCredits = [course1,course2,course3,course4,course5];
        var sumCredits = (parseFloat(credits));
        for (let i = 0; i < newCredits.length; i++) {
            if(! isNaN(parseFloat(newCredits[i]))){

                if(parseFloat(newCredits[i]) < 0){
                    alert("Cannot have a negative credit");
                    return;
                }
                else if(newGrades[i] == null){
                    alert('Missing a Grade');
                    return;
                }
                else{ sumCredits += parseFloat(newCredits[i]);}
            }
        }

        var newCGPA = sumGrades / sumCredits;

        var resultString = '';

        if (newCGPA.toFixed(2) === 'NaN') {
            resultString = 'There was an error calculating your CGPA. Maybe you did something wrong.';
        } else {
            resultString = 'Your projected calculated CGPA is '+  newCGPA.toFixed(2) + '.';
            setLetterGPA(validGrades[Math.floor(newCGPA)])
        }

        document.getElementById("results").innerHTML = '<p>' + resultString + '</p>';

        return newCGPA;
        
    }

    function convertGrades(){
        
        const creditList = [course1,course2,course3,course4,course5];
        const gradesList = [grade1,grade2,grade3,grade4,grade5];

        const validGrades = ['F','D-','D','D+','C-','C','C+','B-','B','B+','A-','A','A+']

        const newGrades =[];

            for(let i = 0; i < gradesList.length; i++){

                let x = gradesList[i].toUpperCase();
                let gradePoint = creditList[i];

                if(validGrades.includes(x)){
                    newGrades.push((validGrades.indexOf(x) * gradePoint));
                }
                else if(x !== ''){
                    alert('Invalid Grade Input');
                }
            } 
    

        return newGrades;
    }

    function clear(){
        setCourse1('');
        setCourse2('');
        setCourse3('');
        setCourse4('');
        setCourse5('');

        setGrade1('');
        setGrade2('');
        setGrade3('');
        setGrade4('');
        setGrade5('');

        setCourseCode1('');
        setCourseCode2('');
        setCourseCode3('');
        setCourseCode4('');
        setCourseCode5('');

        document.getElementById("results").innerHTML = '<p> </p>'
    }


    return (
        < >
        <NavBar/> 
        <styles.calculatorPageContent>
        <p>This calculator is intended to show your projected CGPA after inputting hypothetical grades for future classes. This CGPA calculator is in accordance with Carleton University's Grade Point Scale (12 point scale).</p>
        <p>Enter your current CGPA: <input type="number" value = {cgpa} onChange = {(event) => setCGPA(event.target.value)} /> </p> 
        <p>Enter the number of credits: <input type="number" value = {credits} onChange = {(event) => setCredits(event.target.value)}/> <FontAwesomeIcon id = "help-icon" icon={faQuestionCircle} spin onClick={() => handleCourseClick()} style={{cursor:'pointer'}} /> </p>
        <HelpPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}> </HelpPopUp>

        <styles.gradesContainer>

        <styles.tableContainer>

        <table>
            <thead>
            <tr>
                <th>Course Code </th>
                <th> Credits</th>
                <th> Grade </th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <th> <input placeholder = "ex: SYSC2004" value = {courseCode1} onChange = {(event) => setCourseCode1(event.target.value)}/> </th>
                <th> <input type="number" placeholder = "ex: 0.50" value = {course1} onChange = {(event) => setCourse1(event.target.value)}/> </th>
                <th> <input placeholder = "ex: A+" value = {grade1} onChange = {(event) => setGrade1(event.target.value)} /> </th>
            </tr>

            <tr>
                <th> <input value = {courseCode2} onChange = {(event) => setCourseCode2(event.target.value)}/> </th>
                <th> <input type="number" value = {course2} onChange = {(event) => setCourse2(event.target.value)}/> </th>
                <th> <input value = {grade2} onChange = {(event) => setGrade2(event.target.value)} /> </th>
            </tr>
            <tr>
                <th> <input value = {courseCode3} onChange = {(event) => setCourseCode3(event.target.value)}/> </th>
                <th> <input type="number" value = {course3} onChange = {(event) => setCourse3(event.target.value)}/> </th>
                <th> <input value = {grade3} onChange = {(event) => setGrade3(event.target.value)} /> </th>
            </tr>
            <tr>
                <th> <input value = {courseCode4} onChange = {(event) => setCourseCode4(event.target.value)}/> </th>
                <th> <input type="number" value = {course4} onChange = {(event) => setCourse4(event.target.value)}/> </th>
                <th> <input  value = {grade4} onChange = {(event) => setGrade4(event.target.value)} /> </th>
            </tr>
            <tr>
                <th> <input value = {courseCode5} onChange = {(event) => setCourseCode5(event.target.value)}/> </th>
                <th> <input type="number" value = {course5} onChange = {(event) => setCourse5(event.target.value)}/> </th>
                <th> <input value = {grade5} onChange = {(event) => setGrade5(event.target.value)} /> </th>
            </tr>
            </tbody>
        </table>
        </styles.tableContainer>

        <styles.gradeDisplay>
            {letterGPA}
        </styles.gradeDisplay>

        </styles.gradesContainer>

        <styles.buttonContainer>
        <styles.bButton onClick={calc}  >calculate</styles.bButton>
        <styles.bButton onClick = {clear}>clear</styles.bButton>
        </styles.buttonContainer>
        

        <div id="results"> </div>
        </styles.calculatorPageContent>
        </>
    );
}

export default Calculator

<<<<<<< Updated upstream
import NavBar from "../home/navBar/NavBar";
=======
import NavBar from "../home/NavBar/NavBar";
import { useState } from "react";
>>>>>>> Stashed changes
const Calculator = () => {
    
    
    const [cgpa,setCGPA] = useState();
    const [credits,setCredits] = useState();

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

    
    function calc() {
        var qualityPoints = parseFloat(cgpa) * parseFloat(credits);

        var newGrades = convertGrades();
        var sumGrades = qualityPoints;
        for (let i = 0; i < newGrades.length; i++) {
            if(! isNaN(newGrades[i])){
                sumGrades += newGrades[i];
            }
        }

        var newCredits = [course1,course2,course3,course4,course5];
        var sumCredits = (parseFloat(credits));
        for (let i = 0; i < newCredits.length; i++) {
            if(! isNaN(newCredits[i])){
                sumCredits += parseFloat(newCredits[i]);
            }
        }
        alert(newCredits);
        alert(newGrades);
        alert(sumCredits);
        alert(sumGrades);

        var newCGPA = sumGrades / sumCredits;

        alert(newCGPA);
        <p> Your new calculated CGPA is {newCGPA}!! </p>
    }

    function convertGrades(){
        
        const creditList = [course1,course2,course3,course4,course5];
        const gradesList = [grade1,grade2,grade3,grade4,grade5];

        const newGrades =[];

            for(let i = 0; i < gradesList.length; i++){

                let x = gradesList[i].toUpperCase();
                let gradePoint = creditList[i];

                if(x === 'A+'){
                    newGrades.push(12 * gradePoint);
                }

                else if(x === 'A'){
                    newGrades.push(11 * gradePoint);
                }

                else if(x === 'A-'){
                    newGrades.push(10 * gradePoint);
                }

                else if(x === 'B+'){
                    newGrades.push(9 * gradePoint);
                }

                else if(x === 'B'){
                    newGrades.push(8 * gradePoint);
                }

                else if(x === 'B-'){
                    newGrades.push(7 * gradePoint);
                }

                else if(x === 'C+'){
                    newGrades.push(6 * gradePoint);
                }

                else if(x === 'C'){
                    newGrades.push(5 * gradePoint);
                }

                else if(x === 'C-'){
                    newGrades.push(4 * gradePoint);
                }

                else if(x === 'D+'){
                    newGrades.push(3 * gradePoint);
                }

                else if(x === 'D'){
                    newGrades.push(2 * gradePoint);
                }

                else if(x === 'D-'){
                    newGrades.push(1 * gradePoint);
                }

                else if(x === 'F'){
                    newGrades.push(0 * gradePoint);
                }
            } 
    

        return newGrades;
    }

    return (
        <>
        <NavBar/>
        <p>Enter your current CGPA: <input type="number" value = {cgpa} onChange = {(event) => setCGPA(event.target.value)} /> </p> 
        <p>Enter the number of credits: <input type="number" value = {credits} onChange = {(event) => setCredits(event.target.value)}/> </p>

        <table>
            <tr>
                <th>Course Code </th>
                <th> Credits</th>
                <th> Grade </th>
            </tr>

            <tr>
                <th> <input placeholder = "ex: SYSC2004"/> </th>
                <th> <input type="number" placeholder = "ex: 0.50" value = {course1} onChange = {(event) => setCourse1(event.target.value)}/> </th>
                <th> <input placeholder = "ex: A+" value = {grade1} onChange = {(event) => setGrade1(event.target.value)} /> </th>
            </tr>

            <tr>
                <th> <input/> </th>
                <th> <input type="number" value = {course2} onChange = {(event) => setCourse2(event.target.value)}/> </th>
                <th> <input value = {grade2} onChange = {(event) => setGrade2(event.target.value)} /> </th>
            </tr>
            <tr>
                <th> <input/> </th>
                <th> <input type="number" value = {course3} onChange = {(event) => setCourse3(event.target.value)}/> </th>
                <th> <input value = {grade3} onChange = {(event) => setGrade3(event.target.value)} /> </th>
            </tr>
            <tr>
                <th> <input/> </th>
                <th> <input type="number" value = {course4} onChange = {(event) => setCourse4(event.target.value)}/> </th>
                <th> <input  value = {grade4} onChange = {(event) => setGrade4(event.target.value)} /> </th>
            </tr>
            <tr>
                <th> <input/> </th>
                <th> <input type="number" value = {course5} onChange = {(event) => setCourse5(event.target.value)}/> </th>
                <th> <input value = {grade5} onChange = {(event) => setGrade5(event.target.value)} /> </th>
            </tr>
        </table>
        <button onClick={calc}>Calculate Now!</button>

        </>
    );
}

export default Calculator


 
import NavBar from "../home/navBar/NavBar";
import { Link } from "react-router-dom";
import * as styles from "./yearsElements";
import * as b from "../calculator/calculatorElements";
import {courses} from "./yearsData/yearOneData";
import {courses2} from "./yearsData/yearTwoData";
import {courses3} from "./yearsData/yearThreeData";
import {courses4} from "./yearsData/yearFourData";
import SearchBar from "./searchBar";
import { useState } from "react";
import CoursePopUp from "./CoursePopUp";

const Years = () => {
    
    const allCourses = courses.concat(courses2,courses3,courses4)
    
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');

    const [courseDescription,setcourseDescription] = useState('');
    const [coursePrecludes,setCoursePrecludes] = useState('');
    const [coursePrereqs,setCoursePrereqs] = useState('');
    const [courseLink,setCourseLink] = useState('');

    function getCourseDetails(title){
        let foundItem = allCourses.find(item => item.title === title);
        if(foundItem){
            setcourseDescription(foundItem.detailedDescription);
            setCoursePrecludes(foundItem.precludes);
            setCoursePrereqs(foundItem.prerequisites);
            setCourseLink(foundItem.link);

        }
    }
    
    const handleCourseClick = (title) => {
        setButtonPopUp(true);
        setSelectedCourse(title);
        getCourseDetails(title);
    }

    
      
    
    return (
        <>
        <NavBar/>

        <SearchBar/>
        

        {/* list of courses in boxes visual skeleton */}
        <styles.yearTitle>year one</styles.yearTitle>
        <styles.courseContainer>
            {courses.map(course=> (
                <styles.colourContainer borderColor={course.color} onClick={() => handleCourseClick(course.title)}>
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>

            ))}
        </styles.courseContainer>


        <styles.yearTitle>year two</styles.yearTitle>
        <styles.courseContainer>
            {courses2.map(course=> (
                <styles.colourContainer borderColor={course.color} onClick={() => handleCourseClick(course.title)}>
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>

            ))}
        </styles.courseContainer>


        <styles.yearTitle>year three</styles.yearTitle>
        <styles.courseContainer>
            {courses3.map(course=> (
                <styles.colourContainer borderColor={course.color} onClick={() => handleCourseClick(course.title)}>
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>

            ))}
            

        </styles.courseContainer>


        <styles.yearTitle>year four</styles.yearTitle>
        <styles.courseContainer>
            {courses4.map(course=> (
                <styles.colourContainer borderColor={course.color} onClick={() => handleCourseClick(course.title)}>
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>

            ))}
            

        </styles.courseContainer>


        {/* pop up when you click a specific course */}
        <CoursePopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} course = {selectedCourse}>
            
            <header style={{ marginRight: '450px' }}>
                <h1>{selectedCourse}</h1>
            </header>

            <p>{courseDescription}</p> 
            <p>{coursePrecludes}</p> 
            <p>{coursePrereqs}</p>

            <b.ButtonsContainer>
            
            <Link to = {courseLink} target= "_blank"> <b.bButton>Material</b.bButton> </Link>
            <Link to = {courseLink} target= "_blank"> <b.bButton>Practice Problems</b.bButton> </Link>
            <Link to = {courseLink} target= "_blank"> <b.bButton>Chatroom</b.bButton> </Link>
            </b.ButtonsContainer>
        </CoursePopUp>
        
        </>
    );
}

export default Years
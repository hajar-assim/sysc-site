import NavBar from "../home/navBar/NavBar";
import * as styles from "./yearsElements";
import {courses} from "./yearOneData";
import { useState } from "react";
import CoursePopUp from "./CoursePopUp";

const Years = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');
    const handleCourseClick = (title) => {
        setButtonPopUp(true);
        setSelectedCourse(title);
    }
    return (
        <>
        <NavBar/>

        {/* list of courses in boxes visual skeleton */}
        <styles.yearTitle>year one</styles.yearTitle>
        <styles.courseContainer>
            {courses.map(course=> (
                <styles.colourContainer borderColor={course.color} onClick={() => handleCourseClick(course.title)}>
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>

            ))}
            

        </styles.courseContainer>

        {/* pop up when you click a specific course */}
        <CoursePopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            this was triggered for {selectedCourse}.
        </CoursePopUp>

        </>
    );
}

export default Years
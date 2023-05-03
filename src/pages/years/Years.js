import NavBar from "../home/navBar/NavBar";
import * as styles from "./yearsElements";
import {courses} from "./yearOneData";
import {courses2} from "./yearTwoData";
import {courses3} from "./yearThreeData";
import {courses4} from "./yearFourData";
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

        <styles.yearTitle>year two</styles.yearTitle>
        <styles.courseContainer>
            {courses2.map(course=> (
                <styles.colourContainer borderColor={course.color} onClick={() => handleCourseClick(course.title)}>
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>

            ))}
            

        </styles.courseContainer>

        {/* pop up when you click a specific course */}
        <CoursePopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            this was triggered for {selectedCourse}.
        </CoursePopUp>

        <styles.yearTitle>year three</styles.yearTitle>
        <styles.courseContainer>
            {courses3.map(course=> (
                <styles.colourContainer borderColor={course.color} onClick={() => handleCourseClick(course.title)}>
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>

            ))}
            

        </styles.courseContainer>

        {/* pop up when you click a specific course */}
        <CoursePopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            this was triggered for {selectedCourse}.
        </CoursePopUp>

        <styles.yearTitle>year four</styles.yearTitle>
        <styles.courseContainer>
            {courses4.map(course=> (
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
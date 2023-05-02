<<<<<<< Updated upstream
import NavBar from "../home/navBar/NavBar";
import * as styles from "./yearsElements";
import {courses} from "./yearOneData";


=======
import NavBar from "../home/NavBar/NavBar";
>>>>>>> Stashed changes
const Years = () => {
    return (
        <>
        <NavBar/>
        <styles.yearTitle>year one</styles.yearTitle>
        <styles.courseContainer>
            {courses.map(course=> (
                <styles.colourContainer borderColor={course.color} >
                <styles.textContainer><strong>{course.title}</strong>{course.description}</styles.textContainer>
                </styles.colourContainer>
            ))}
            

        </styles.courseContainer>
        </>
    );
}

export default Years
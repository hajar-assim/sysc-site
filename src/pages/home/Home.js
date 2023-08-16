import NavBar from "../home/navBar/NavBar";
import * as styles from "./homeElements";
import Footer from "./navBar/Footer";

const Home = () => {
    return (
        <>
        <NavBar/>
        <styles.homePageContent>
            <styles.syscTitle>success in sysc</styles.syscTitle>
            <styles.animationContainer>add animation</styles.animationContainer>
            <styles.textContainer>
            Welcome to sysc.ca, your ultimate resource for engineering students. We are a team of software engineering students committed to providing comprehensive support for other engineering students. Our platform offers course resources, assignment and exam help, and connections with like-minded students.
            <br/>
            <br/>
            As engineering students ourselves, we understand the challenges of pursuing a degree in this field. That's why we have created a space where students can find the support they need to thrive. At Sysc.ca, we believe that success in engineering is achieved through collaboration and community. Get involved, interact with other students, and share your knowledge and resources. If you have any questions or suggestions, don't hesitate to reach out. We're here to help and support you on your journey as an engineering student.
            </styles.textContainer>

        </styles.homePageContent>
        <Footer/>
        
        </>
    );
}

export default Home
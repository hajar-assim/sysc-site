import React from "react";
import CollapseItem from "./CollapseItem";
import './Faq.css';
import NavBar from "../home/navBar/NavBar";

const Faq = () => {
  return (
    <div>
      <NavBar/>
      <h1> The FAQ</h1>
      <p>University life can be challenging, which is why we're thrilled to provide you with this comprehensive support hub. Whether you're a freshman 
        trying to find your way around or a senior student in depresate need of some extra help, our study tool is designed to assist you every step of 
        the way. Below, you'll find answers to frequently asked questions that cover a wide range of university-related topics, from how to navigate 
        through an academic intergrity violation to how different services at Carleton works. If you can't find what you're looking for, don't hesitate 
        to reach out to our dedicated support team by e-mail, <a href="mailto:yokaielwahid@gmail.com">yokaielwahid@gmail.com</a>, or  
        <a href="https://discord.gg/8QA5ZucC"> join our discord server</a></p>

       

      <CollapseItem
        question="I failed a class."
        answer={
          <>
            Tough luck, there is a few things to tackle before we do anything. First, find the root of the problem. Did you fail because of a lack of studying, 
            an external factor, or just tried your best and fell short? Regardless of your answer, head over to Carleton Central and find if the course is 
            offered in the following term (i.e. failed in Fall so check for Winter). You want to take the course as soon as possible so you do not derail yourself. 
            Next, check if the failed course is a prerequisite for any of your future courses. If its not, perfect you can take it in another semester if the following 
            semester is already packed enough. Though the common advice is to take it as soon as possible to avoid having to scramble closer to graduation. If it is, 
            then e-mail advisor as soon as possible. Some instances, you can take the failed course along side it's prerequisites.

            <br />
            If you are in First Year, then email: <a href="mailto:ECORSupport@carleton.ca"> ECORSupport@carleton.ca</a>
            If you are in Second Year or higher, then email: <a href="mailto:EngAcadSupport@carleton.ca"> EngAcadSupport@carleton.ca</a>
          </>
        }
      />

      <CollapseItem
        question="How does UNS/SAT work? "
        answer={
          <>
          SAT and UNS stands for Satisfactory and Unsatisfactory. Essentrilally, this supercedes any grade that you choose. This allows you to "redact" any 
          grades from your audit and does not affect your CGPA. Carleton typically has a credit limit, for example, only 1.0 credits can be requested for SAT, so 
          that could be 2 courses worth 0.5 credits, 4 courses worth 0.25 credits or just 1 course worth 1.0 credits. Typically when Carleton introduces this, automatically,
          any failed (F) courses are converted to UNS. Thus making those failed courses not affect your audit or CPGA. 

          <br />
          In order to request the SAT, there is a form you must fill out. 
          <a href="https://carleton.ca/academicadvising/faqs-about-sat-uns/"> This website </a> should host where to get the form as its not publicly avaiable 
          outside permitted periods. Of course, for any direct questions, send an email for to: <a href="mailto:Registrar@carleton.ca"> Registrar@carleton.ca </a>
          </>
        }
      />



      <CollapseItem
        question="I do not meet a prerequisite "
        answer={
          <>
          Apply for an override as soon as possible. It's not a guarantee since priority will go to those who qualify and need the course to graduate, but 
          there is a slim chance that you can be approved. Determine what the prerequisite that you're missing is by checking your audit or 
          <a href="https://carleton.ca/engineering-design/current-students/undergrad-academic-support/prerequisites/"> the engineering tree </a> and going to your 
          corresponding year (what year you started, i.e. I started in September 2021 so I follow 202130). 
          </>
        }
      />


      <CollapseItem
        question="I failed a course and the next term course for it is full "
        answer={
          <>
          
          </>
        }
      />


      <CollapseItem
        question="i got an AI "
        answer={
          <>
          
          </>
        }
      />


      <CollapseItem
        question="How do I receive OSAP? How do I know if I qualify?"
        answer={
          <>
          
          </>
        }
      />


      <CollapseItem
        question="Best way to balance school, work, sports, etc. ? "
        answer={
          <>
          
          </>
        }
      />


      <CollapseItem
        question="I'm not from Ottawa, how do I find good housing? "
        answer={
          <>
          
          </>
        }
      />


    </div>
  );
};

export default Faq;





























// import { useState } from "react";
// import NavBar from "../home/navBar/NavBar";
// import './Faq.css';
// import { Link } from "react-router-dom";
// import {theQuestions} from "../resources/questionData";

// const Faq = () => {
//   const [visible, setVisible] = useState(false);
//   const [visible2, setVisible2] = useState(false);
//   const [visible3, setVisible3] = useState(false);
//   const [visible4, setVisible4] = useState(false);
//   const [visible5, setVisible5] = useState(false);


//   // function toggleCollapse(title){
//   //   let foundItem = allCourses.find(item => item.title === title);
//   //   if(foundItem){
//   //       setcourseDescription(foundItem.detailedDescription);
//   //       setCoursePrecludes(foundItem.precludes);
//   //       setCoursePrereqs(foundItem.prerequisites);
//   //       setCourseLink(foundItem.link);

//   //   }
// //}

//   function toggleCollapse(num) {

//     const dictionary = {};
//     dictionary[] = 

//     if (num = 1) {
//       setVisible(!visible);
//       // make a dictionary, assign each
//     }
    
//     if (num = 2) {
//       setVisible2(!visible2);    
//     }

//     if (num = 3) {
//       setVisible3(!visible3);
//     }

//     // if (num = 4) {
//     //   setVisible4(!visible4);
//     // }

//     // if (num = 5) {
//     //   setVisible5(!visible5);
//     // }
    
//   };

//   return (
//       <>
//       <NavBar/>

//       {/* list of courses in boxes visual skeleton */}
//       <h>FAQ </h>
      
//           {theQuestions.map(question=> (
//               <button onClick={() => toggleCollapse(question.num)}>
//                 <h1><strong>{question.question}</strong></h1>
//               <span className={`arrow ${visible ? 'arrow-up' : 'arrow-down'}`} />
//               {visible && (
//                 <div className="answer">
//                   <p>{question.answer}</p>
//                 </div>
//               )}
              
//               </button>

//           ))}
//       </>


//     // <div className="faq">
//     //   <NavBar />
//     //   <button className="question" onClick={toggleCollapse}>
//     //     Question
//     //     <span className={`arrow ${visible ? 'arrow-up' : 'arrow-down'}`} />
//     //   </button>
//     //   {visible && (
//     //     <div className="answer">
//     //       Answer
//     //     </div>
//     //   )}

//     // </div>

//   );
// };

// export default Faq;

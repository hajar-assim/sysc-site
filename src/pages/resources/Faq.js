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
        to reach out to our dedicated support team by e-mail, some_email@email.com, or join our discord server, INVITE LINK.</p>

       

      <CollapseItem
        question="I failed a class."
        answer="Answer 1"
      />

      <CollapseItem
        question="How does UNSAT/SAT work? "
        answer="Answer 2"
      />



      <CollapseItem
        question="I don’t meet a pre-eq "
        answer="Answer 3"
      />


      <CollapseItem
        question="I failed a course and the next term course for it is full "
        answer="Answer 4"
      />


      <CollapseItem
        question="i got an AI "
        answer="Answer 5"
      />


      <CollapseItem
        question="How do I receive OSAP? How do I know if I qualify?"
        answer="Answer 6"
      />


      <CollapseItem
        question="Best way to balance school, work, sports, etc. ? "
        answer="Answer 7"
      />


      <CollapseItem
        question="I'm not from Ottawa, how do I find good housing? "
        answer="Answer 8"
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

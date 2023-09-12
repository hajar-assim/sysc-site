import React from 'react'
import NavBar from "../home/navBar/NavBar";
import Footer from '../home/navBar/Footer';
import * as styles from "./resourcesElements";

function Resources() {
  return (
    <>
    <NavBar />
    <styles.resourcePageContent>
    <styles.intro>
      All you need resources for SYSC students!
    </styles.intro>

    
    <styles.titles>Program Trees (by catalogue year): </styles.titles> 
    
    <styles.textContainer>
    
      <a href="/IMAGES/19-20-SOFT.pdf" target="_blank">
      2019</a>
   
      <br/>
      <br/>
    
    <a href="/IMAGES/20-21-SOFT.pdf" target="_blank">
      2020</a>
    
      <br/>
      <br/>
  
    <a href="/IMAGES/21-22-SOFT-1.pdf" target="_blank">
      2021</a>

      <br/>
      <br/>

    <a href="/IMAGES/SOFT-22-23.pdf" target="_blank">
      2022</a>
  
      <br/>
      <br/>
  
    <a href="/IMAGES/SOFT-23-24.pdf" target="_blank">
      2023</a>
 
    </styles.textContainer>

    <styles.titles>Discord Servers:</styles.titles>

    <styles.textContainer>
    <p> <a href='https://discord.gg/24c3Jp3aWk' target="_blank"> Carleton Engineering</a> </p>
    <p > <a href='https://discord.gg/fvdmVyZbJx' target="blank">Carleton Computer Science Society</a> </p>
    <p> <a href='https://discord.gg/7w6tudKQZ5' target="_blank"> Systems and Computer Engineering Society</a> </p>
    </styles.textContainer>


    <styles.titles>Scheduling Tools:</styles.titles>

    <styles.textContainer>
      <p><a href='https://ughelp.sce.carleton.ca/plan/' target="_blank">Course Planner</a></p>
      <p><a href='https://cuscheduling.ca' target="_blank">Schedule Planner</a></p>
    </styles.textContainer>



    </styles.resourcePageContent>
    <Footer/>
    </>
  )
}

export default Resources

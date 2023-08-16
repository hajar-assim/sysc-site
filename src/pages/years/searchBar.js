import React, { useState } from "react";
import { courses } from "./yearsData/yearOneData";
import { courses2 } from "./yearsData/yearTwoData";
import { courses3 } from "./yearsData/yearThreeData";
import { courses4 } from "./yearsData/yearFourData";
import CoursePopUp from "./CoursePopUp";

const SearchBar = () => {
  const allCourses = courses.concat(courses2, courses3, courses4);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null); // Use null to indicate no selected course

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Find the first course that matches the search input
      const foundCourse = allCourses.find((course) =>
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      // If a course is found, set it as the selected course and open the pop-up
      if (foundCourse) {
        setSelectedCourse(foundCourse);
      } else {
        // If no course is found, reset the selected course to null
        setSelectedCourse(null);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Trigger the search on Enter key press
      />

      {/* Render the pop-up with the selected course */}
      {selectedCourse && (
        <CoursePopUp
          trigger={true} // Always show the pop-up when selectedCourse is not null
          setTrigger={() => setSelectedCourse(null)} // Close the pop-up when triggered
          course={selectedCourse}
        />
      )}
    </div>
  );
};

export default SearchBar;

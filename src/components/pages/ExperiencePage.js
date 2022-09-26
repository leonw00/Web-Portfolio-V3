import React from "react";
import { Element } from "react-scroll";
import ExperienceItem from "../reusable-objects/ExperienceItem";
import "./ExperiencePage.css";
import Fade from "react-reveal/Fade";

function ExperiencePage() {
  return (
    <div className="experience_page">
      <Element name="experience_page" />
      <h1>
        Work <p className="colorize__blue">Experience</p>
      </h1>
      <div className="experience_container">
        <ul className="experience_items">
          <Fade>
            <ExperienceItem
              title="Grader / Marker"
              location="University of Manitoba"
              duration="August 2020 - April 2022"
              src="logo/umanitoba.png"
              text="As a Grader / Marker, my responsibilites are providing constructive feedback on the students’ assignments to make sure they understand their mistakes and
                            grade the students’ tests, quizzes and assignments based on the rubric provided by the instructor fairly and objectively. Being a Grader, I have imporved my time management skill,
                            being able to effectively finish my assigned work and keep my class grades well"
            />

            <ExperienceItem
              title="Assistant Adjuster"
              location="General Adjuster Indonesia"
              duration="May 2021 - July 2021"
              src="logo/gai.png"
              text="During my time working at General Adjuster Indonesia, I held various responsibilites from working with other adjusters to handling clients. Mainly as an assistant adjuster,
                            I wrote highly detailed reports for adjusters and validates the quality and the accuracy of the reports. This has improved my ability to be more precise and accurate in my work. Furthermore,
                            I also created a work management application that tracks the progress of all reports and schedules which made for a more efficient work flow."
            />
          </Fade>
        </ul>
      </div>
    </div>
  );
}

export default ExperiencePage;

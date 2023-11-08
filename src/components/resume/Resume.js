import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience"
import Exp from './exp';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [expData, setExpData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="our company" des="Problem we solve" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setExpData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent text-black"
            } resumeLi`}
          >
            Education
          </li>
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li> */}
          <li
            onClick={() =>
              setEducationData(false) &
              setExpData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent text-black"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExpData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent text-black"
            } resumeLi`}
          >
            Exp
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExpData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent text-black"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {expData && <Exp/>}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default Resume
// import React, { useRef } from 'react'; // Added useRef import
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from '../../utils/data';
import Experiencecard from './ExperienceCard/Experiencecard';
// import Slider from 'react-slick';
// import { FaChevronRight } from "react-icons/fa6";
// import { FaChevronLeft } from "react-icons/fa6";
const WorkExperience = () => {
  // const slideRef = useRef();

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      {/* <div className="experience-content">
        <div className="arrow-right">
        <FaChevronRight style={{fontSize:"2rem", fontWeight:"500"}} />
        </div>
        <div className="arrow-left">
          <FaChevronLeft style={{fontSize:"2rem", fontWeight:"500"}}/>
        </div>
      </div> */}

      <div className="experience-content">
        {/* <Slider ref={slideRef} {...settings}> */}
          {WORK_EXPERIENCE.map((item) => (
            <Experiencecard key={item.title} details={item} />
          ))}
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default WorkExperience;

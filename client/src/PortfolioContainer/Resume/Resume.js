import React,{useState} from 'react'
import ScreenHeading from '../../utilies/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilies/ScrollService'
import Animations from '../../utilies/Animations'
import './Resume.css'

export default function Resume(props) {
    const[selectedBulletIndex, setSelectBulletIndex]=useState(0)
    const[carousalOffSetStyle, setCarousalOffSetStyle]=useState({})

    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen !==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading= (props)=>{
        return(
        <div className="resume-heading">
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ): (
                    <div></div>)}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        </div>
        )
    }
        


    const resumeBullets=[
        {lable: "Education",logoSrc:"education.svg"},
        {lable: "Programming skills",logoSrc:"programming-skills.svg"},
        {lable: "Projects",logoSrc:"projects.svg"},
        {lable: "Intrests",logoSrc:"intrests.svg"},
    ];
    const programmingskillsDetails=[
        {skill: "C++",ratingPercentage:75},
        {skill: "JavaScript",ratingPercentage:70},
        {skill: "ReactJS",ratingPercentage:70},
        {skill: "ExpressJS",ratingPercentage: 65},
        {skill: "NodeJS",ratingPercentage:70},
        {skill: "MongoDB",ratingPercentage:60},
        {skill: "HTML",ratingPercentage:70},
        {skill: "CSS",ratingPercentage:65},
    ];
    const projectsDatails=[
        {
            title: "Personal Portfolio Website",
            duration: {fromDate:"2021", toDate: "2022"},
            description: "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
            title: "ResumeMaker",
            duration: {fromDate: "2021",toDate: "2021"},
            description: "Online Resumemaker is a quick and straightforward tool to create a resume",
            subHeading: "Technologies Used: Mongo DB, Epress Js, HTML,CSS, Node JS,Bootstrap.",
        },
        {
            title: "DigitalOne",
            duration:{fromDate: "2020", toDate: "2020"},
            description: "Online Transaction management system for college students.",
            subHeading: "Technologies Used: HTML,CSS,Bootstrap,php,sql.",
        }
    ];
    const resumeDetails=[
        <div className='resume-screen-container' key="education">

           <ul className='ul-container'>
            <li>
            <p><h4><b>
                    Dhirubhai Ambani Institute Of Information And Communication Technology </b></h4>
                    <h6>Master of Technology in Information and Communication Technology</h6>
                    2020-2022</p>
            </li>

          <li>
          <p>
                <h4><b>
                Shantilal Shah Engineering College</b>
                </h4>
                <h6>
                Bachelor of Engineering in Information Technology
                </h6>
                2016-2020
            </p>
            </li>  
           <li>
           <p>
                <h4><b>
                Navnit School Of Science</b>
                </h4>
                <h6>
                12th Science
                </h6>
                2014-2016
            </p>

           </li>
           
        </ul>
           
        </div>,
        <div className='resume-screen-container programming-skills-container' key="Programming-skills">
            {programmingskillsDetails.map((skill,index)=>(
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skill.ratingPercentage +"%"}} className='active-parcentage'></div>
                    </div>

                </div>
            ))}

        </div>,
         <div className='resume-screen-container' key="projects">
              <ul className='ul-container'>
                  <li>
             <p>
                <h4>
                <b>Personal Portfolio Website</b>
                </h4>
                <h6>
                A Personal Portfolio website to showcase all my details and projects at one place.
                </h6>
                <h6>
                Technologies Used: React JS, Bootsrap
                </h6>
                
            </p>
            </li>
            <li>
            <p>
                <h4>
                <b>ResumeMaker</b>
                </h4>
                <h6>
                Online Transaction management system for college students.
                </h6>
                <h6>
                Technologies Used: Mongo DB, Epress Js, HTML,CSS, Node JS,Bootstrap.
                </h6>
                
            </p>
            </li>
            <li>
            <p>
                <h4>
                <b>DigitalOne</b>
                </h4>
                <h6>
                Online Resumemaker is a quick and straightforward tool to create a resume
                </h6>
                <h6>
                Technologies Used: HTML,CSS,Bootstrap,php,sql.
                </h6>
               
            </p>
            </li>
            </ul>
         </div>,
          <div className='resume-screen-container' key="intrests">
               <ul className='ul-container'>
              <li><p><h5><b>Competitive Gaming</b></h5>
              <h6>I like to challenge my reflexes a lot while competing in games, pushing the rank and having interactive gaming sessions excites me the most.</h6>
              </p>
              </li>
              <li>
              <p><h5><b>Sports</b></h5>
              <h6>I like to play all kinds of sports, but cricket is my favorite; apart from that, I enjoy weight lifting and muscle gain exercises in the gym.</h6>
              </p>
              </li>
              <li>
              <p>
                  <h5><b>Music</b></h5>
                  <h6>Listening to soothing music is something i can never compromise with, skimming through Spotify Top songs charts is at times the best stress reliever that i can get my hands on.</h6>
              </p>
              </li>
              </ul>
              
          </div>
    ];

    const handleCarousal=(index)=>{
        let offsetHeight=360;
        let newCarousalOffset={
            style:{
                transform:"translateY("+ index * offsetHeight * -1+ "px)"}
            };
            
            setCarousalOffSetStyle(newCarousalOffset);
            setSelectBulletIndex(index);
        };
        const getBullets=()=>{
            return resumeBullets.map((bullet,index)=>(
                <div onClick={()=>handleCarousal(index)}
                className={index===selectedBulletIndex ?"bullet selected-bullet" : "bullet"}
                key={index}>
                    <div className='resume=logo'>
                {bullet.lable}
                </div>
                 </div>
            ))
        }
        const getResumeScreen=()=>{
            return(
                <div
                style={carousalOffSetStyle.style}
                className='resume-details-carousal'
                >{resumeDetails.map((ResumeDetail)=>ResumeDetail) 
                }</div>
            )
        }
   
    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullets-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullets-details'>{getResumeScreen()}</div>
                </div>
            </div>
            
        </div>
    )
}

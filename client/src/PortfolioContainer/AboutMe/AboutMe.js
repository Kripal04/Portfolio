import React,{useEffect} from 'react'
import ScreenHeading from '../../utilies/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilies/ScrollService'
import Animations from '../../utilies/Animations'
import './AboutMe.css'



export default function AboutMe(props) {
    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen !==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTASANTS={
        descricption: "Full stack web developer with background knowledge of MERN stacks , along with a knack of building applications with utmost efficiency. willing to be an asset for an organization.",
        highlights:{
            bullets:["Full Stack web development",
                    "Interactive Front End as per the design",
                    "React development",   
                ],
            heading:"Here are a Few Highlights:"

    }
    }
    const RenderHighlights=()=>{
        return(
            SCREEN_CONSTASANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'>

                    </div>
                    <span className='values'>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading='Why Choose Me?'/>
                <div className='about-me-card'>
                        <div className='about-me-details'>
                            <span className='about-me-discription'>
                                {SCREEN_CONSTASANTS.descricption}
                            </span>
                            <div className='about-me-highlights'>
                                <div className='highlight-heading'>
                                    <span>{SCREEN_CONSTASANTS.highlights.heading}</span>
                                </div>
                            {RenderHighlights()}
                            </div>
                            <div className='about-me-options'>
                            <button className='btn primary-btn'
                             onClick={() => ScrollService.scrollhandler.scrollTOHireMe()}
                            >
                            Hire Me
                        </button>
                        <a href='CV.pdf' download='CV.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                            </div>
                        </div>  
                </div>
            </div>

            
        </div>
    )
}

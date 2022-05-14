import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import ScrollService from '../../utilies/ScrollService';


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                        <a href='https://www.linkedin.com/in/kripalsinh-makvana-2446b816a/'>
                            <i className='fa fa-linkedin'></i>
                           
                        </a>
                        
                        <a href='https://www.instagram.com/makvana_kripalsinh13/'>
                            <i className='fa fa-instagram'></i>
                           
                        </a>
                        <a href='https://www.facebook.com/kripal.makvana.9/'>
                            <i className='fa fa-facebook-square'></i>
                           
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                        {" "}
                        Hello,I am <span className='highlighted-text'>Kripalsinh</span>

                        </span> 
                        </div>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                       <h1>
                           {" "}
                           <Typical
                           loop={Infinity}
                           steps={
                               [
                                   "Full stack Dev",
                                   2000,
                                   "MERN stack Dev",
                                   2000,
                                   "React Dev",
                                   2000,
                               ]
                           }
                           />

                       </h1>
                        </span> 
                        <span className='profile-role-tagline'>
                            Knack of buliding applications with front and back end operations.

                        </span>
                    </div>
                    <div className='profile-options'>
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
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>

                    </div>
            </div>
            
        </div>
    )
}

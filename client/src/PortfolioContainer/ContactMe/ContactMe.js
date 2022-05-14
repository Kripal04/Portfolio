import React,{useState} from 'react';
import Typical from 'react-typical'

import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilies/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilies/ScrollService'
import Animations from '../../utilies/Animations';
import './ContantMe.css'
import {toast} from 'react-toastify'
import emailjs from 'emailjs-com';

export default function ContactMe(props) { 

    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen !==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [message,setMessage]= useState("")
    const [banner,setBanner]= useState("")
    const [bool,setBool]= useState(false)

    const handleName = (e) =>{
      setName(e.target.value);
  };
  const handleEmail = (e) =>{
      setEmail(e.target.value);
  };
  const handleMessage = (e) =>{
      setMessage(e.target.value);
  };
    
  const sendEmail=async(e)=>{
        e.preventDefault();

        try {
          let data= {
              name,
              email,
              message,
          };
          setBool(true)
          if(name.length===0 ||email.length===0||message.length===0)
          {
              setBanner("Please Fill All The Fields")
              toast.error("Please Fill All The Fields")
              setBool(false)
          }
          else if(emailjs.sendForm('gmail', 'template_hz2q8li', e.target, 'user_XP0g4C0gEWtzN0qhdgypy')){
              setBanner("Thank You For Contacting")
              toast.success("Thank You For Contacting")
              setBool(false)

              setName("");
              setEmail("");
              setMessage("");

          }
        } catch (error) {
          console.log(error)
          
      }
    
      }
    
      return <div className='main-container' id={props.id||''}>
      <ScreenHeading
      subHeading={"Lets Keep In Touch"}
      title={"Contact Me"}
      />
      <div className='central-form'>
          <div className='col'>

          <h2 className='title'>
                           {" "}
                           <Typical
                           loop={Infinity}
                           steps={
                               [
                                   "Get In Touch",
                                   2000,
                                    "Get Your Job Done",
                                    2000,
                                ]
                           }
                           />

                       </h2>
                       <a href='https://www.instagram.com/makvana_kripalsinh13/'>
                       <i className='fa fa-instagram'></i>
                      
                   </a>
                   <a href='https://www.facebook.com/kripal.makvana.9/'>
                       <i className='fa fa-facebook-square'></i>
                      
                   </a>
            
          </div>

          <div className='back-form'>
              <div className='img-back'>
                  <h4>Send Your Email Here!</h4>
                  <img src={imgBack} alt='not found'/>
              </div>
              <form onSubmit={sendEmail}>
                  <p>{banner}</p>
                  <label htmlFor='name'>Name</label>
                  <input type='text'
                  onChange={handleName}
                  name="from_name"
                  value={name}
                  />

                  <label htmlFor='email'>Email</label>
                  <input type='email'
                  onChange={handleEmail}
                  name="from_email"
                  value={email}
                  />
                  
                  <label htmlFor='massage'>Massage</label>
                  <textarea type='text'
                  onChange={handleMessage}
                  name="message"
                  value={message}
                  />


                  <div className='sned-btn'>
                      <button type='submit'>
                          Send<i className='fa fa-paper-plane'/>
                          {bool?<b className='load'>
                              <img src={load1} alt='image not found'/>
                          </b> :("")}

                      </button>
                  </div>
              </form>
          </div>
      </div>

  </div>;

}
    


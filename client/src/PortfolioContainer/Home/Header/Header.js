import React,{useState} from 'react'
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilies/commonutils'
import ScrollService from '../../../utilies/ScrollService'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Header.css'

export default function Header() {
    const [selectedScreen,setSelectedScreen]= useState(0)
    const [ShowHeaderOptions,setShowHeaderOptions]=useState(false)

    const updateCurrentScreen = (currentScreen)=>{
        if(!currentScreen || !currentScreen.screenInView)
        return;
        let screenIndex= GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex<0)
        return

    }
    let currentScreenSubscription=ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)

    const getHeaderOptions = ()=>{
        return(
            TOTAL_SCREENS.map((screen,i)=>(
                <div key={screen.screen_name} className={"header-option-seperator"}
                onClick={()=>switchScreen(i,screen)}>
                    <span>
                        {screen.screen_name}
                    </span>
                </div>
            ))
        )
    }

    const switchScreen = (index,screen)=>{
        let screenComponent=document.getElementById(screen.screen_name);
        if(!screenComponent)
        return;

        screenComponent.scrollIntoView({behavior:'smooth'})
        setSelectedScreen(index);
        setShowHeaderOptions(false);

    };


    return (
        <div>
            <div className='header-container' onClick={()=>setShowHeaderOptions(!ShowHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger'  onClick={()=> setShowHeaderOptions(!ShowHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars}/>
                    </div>
                    <div className='header-logo'>
                        <span>
                            ~KIP
                        </span>
                    </div>
                    <div className={(ShowHeaderOptions)? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}

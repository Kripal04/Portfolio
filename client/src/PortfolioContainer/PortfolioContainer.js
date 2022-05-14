import React from 'react'
import {TOTAL_SCREENS} from '../utilies/commonutils'

export default function portfolioContainer() {
 
    const mapAllscreens = ()=>{
        return(
             TOTAL_SCREENS.map((screen)=>(
                 (screen.component) ? <screen.component screenName={screen.screen_name}key={screen.screen_name}
                 id={screen.screen_name}/> : <div key={screen.screen_name}></div>
             ))
        )
            
    } 
    return (
        <div className='portfolio-container'>
            {mapAllscreens()};
        </div>
    )
}

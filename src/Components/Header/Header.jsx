import { useState } from 'react'
import styles from './header.module.scss'
import { DisplayOptions } from '../DisplayOptions/DisplayOptions'
import { cardIcons } from '../Icons/icons'

export function Header({display,setDisplay}){
    const [isOptionsShowing,setOptionsShowing] = useState(false)

    function toogleView(){
        setOptionsShowing(!isOptionsShowing)
    }
    return(
        <div className = {styles["header"]}>
            <button onClick={toogleView}>
                <div className={styles['displayOption']}>
                    <div style={{alignSelf:'center'}}>{cardIcons.display}</div>
                    <div style={{alignSelf:'center',fontSize:'15px',fontWeight: '500'}}>Display</div>
                    {cardIcons.downKey}
                </div>
            </button>
            {isOptionsShowing && <DisplayOptions onClose={toogleView} display= {display} setDisplay={setDisplay} />}
        </div>
    )
}
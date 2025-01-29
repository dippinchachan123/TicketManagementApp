import { display_grouping_data, display_ordering_data } from "../../Data/SelectBoxData"
import styles from './displayOptions.module.scss'
import { getSelectBoxOption } from "../../Helpers/Global"

export function DisplayOptions({display, setDisplay,onClose}) {
    function onchange(e) {
        const name = e.target.name
        const displayNew = {...display}
        displayNew[name] = e.target.value
        setDisplay(displayNew) 
        onClose()
    }

    return (
        <div className={styles["DisplayOptions"]}>
            <div className={styles["option"]}>
                <div style={{color : "grey"}}>Grouping</div>
                <select
                    id="grouping"
                    name='grouping'
                    value={display?.grouping}
                    onChange={onchange}
                >
                {getSelectBoxOption(display_grouping_data)}    
                </select>
            </div>
                
            <div className={styles["option"]}>
                <div style={{color : "grey"}}>Ordering</div>
                <select
                    id="ordering"
                    name='ordering'
                    value={display?.ordering}
                    onChange={onchange}
                >
                {getSelectBoxOption(display_ordering_data)}    
                </select>
            </div>
        </div>
    )
}
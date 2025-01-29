import './columnheader.scss'
import { cardIcons } from "../Icons/icons"
import UserCircle from "../UserCircle/UserContainer";

function getPriorityName(priority){
    switch(priority){
        case 0:
            return "No priority"
        case 1:
            return "Low"
        case 2:
            return "Medium"
        case 3:
            return "High"
        case 4:
            return "Urgent"  
    }
}

function getName(ticket,displayType){
    if(displayType == "priority"){
        return getPriorityName(ticket["priority"])
    }else if(displayType == "userId"){
        return ticket["user"].name
    }
    else{
        return ticket[displayType]
    }
}

export const ColumnHeader = ({column,display}) => {
    const ticket = column[0];
    const totalTickets = column?.length || 0;
    let icon = null;
    if(display.grouping == "userId"){
        icon = <UserCircle name={ticket.user.name} status={ticket.user.available?"active":"inactive"}/>
    }else{
        icon = cardIcons[display.grouping][ticket[display.grouping]]
    }
    const name = getName(ticket,display.grouping)
    return (
        <div className="CardHeader">
            <div className="CardHeader_1">
                {icon}
                <div>{name}</div>
                <div>{totalTickets}</div>
            </div>
            <div className="CardHeader_2">
                {cardIcons.plusIcon}
                {cardIcons.dots}
            </div>
        </div>
    )
}
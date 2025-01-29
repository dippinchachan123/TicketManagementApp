import styles from './ViewTickets.module.scss'
import { useEffect, useState } from "react"
import { Main } from "../../Apis/Main"
import { ViewTicketsService } from "../../Services/Tickets/viewTicketsService"
import { TicketViewPage } from "../../Pages/ViewTicketsPage/viewTicketPage"
import { Header } from '../../Components/Header/Header'

export const TicketsViewContainer = () => {
    const [tickets, setTickets] = useState([])
    const [ticketLayout, setLayout] = useState(null)

    const defaultDisplay = {
        grouping: "userId",
        ordering: "priority"
    };
    
    // Check if a saved value exists in local storage
    let savedDisplay = null
    if(localStorage.getItem('display')){
        savedDisplay = JSON.parse(localStorage.getItem('display'))
    }
    
    const [display, setDisplay] = useState(savedDisplay || defaultDisplay)

    useEffect(() => {
        // Save state to local storage whenever it changes
        localStorage.setItem('display', JSON.stringify(display));
    }, [display]);  


    //for tickets loading
    useEffect(() => {
        Main.getTickets()
        .then(res => {
            if(!res.err){
                setTickets(res.data)
            }
        })
        .catch(err => console.log("error in getting Tickets :",err))
    },[])


    //for setting the layout
    useEffect(() => {
        setLayout([...ViewTicketsService.getLayout(tickets,display)])
    }, [display,tickets])


    return(
        <div className={styles["ticketViewContainer"]}>
            <Header display = {display} setDisplay = {setDisplay}  />
            <TicketViewPage ticketslayout={ticketLayout} display={display}/>
        </div>
    )

}
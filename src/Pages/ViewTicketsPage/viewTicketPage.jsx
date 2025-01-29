import { MemoizedTicketCard } from '../../Components/Card/Card'
import { ColumnHeader } from '../../Components/ColumnHeader/ColumnHeader'
import styles from './viewTicketPage.module.scss'

export const TicketViewPage = ({ticketslayout,display}) => {
    return (
        <div className = {styles["ticketViewPage"]}>
            {
                ticketslayout?.map(column => {
                    return (
                        <div className = {styles['ticketColumn']}>
                            <ColumnHeader column={column} display={display}/>
                            {
                                column?.map(ticket => {
                                    return (<MemoizedTicketCard  display = {display} key = {ticket.id} ticket = {ticket}/>)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
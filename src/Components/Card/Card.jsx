import { useMemo } from 'react';
import styles from './card.module.scss'
import { cardIcons } from '../Icons/icons';
import UserCircle from '../UserCircle/UserContainer';

const TicketCardComponent = ({ ticket,display, id }) => {
    return (
      <div key = {id} className={styles['card']}>
        <div className={styles['header']}>
          <div style={{color:'grey'}}>{ticket.id}</div>
          <div style={{position : 'absolute',right : 0}}>{display.grouping != "userId" && <UserCircle name={ticket.user.name} 
          status= {ticket.user.available?"active":"inactive"}/>}</div>
        </div>
        
        <div className={styles['title']}>
          {display.grouping != "status" && <div>{cardIcons.status[ticket.status]}</div>}
          <div>{ticket.title}</div>
        </div>

        <div className={styles['featureSection']}>
          {display.grouping != "priority" && <div className={styles['feature']}>{cardIcons.priority[ticket.priority]}</div>}
          <div className={styles['feature']}>
            {cardIcons.feature}
            <div>{ticket.tag[0]}</div>
          </div>
        </div>
      </div>
    );
  };
  
// Create a variable to hold the memoized component
export const MemoizedTicketCard = ({ ticket ,display}) => {
    return useMemo(() => <TicketCardComponent display = {display} key = {ticket.id} id = {ticket.id} ticket={ticket} />, [ticket,display]);
};


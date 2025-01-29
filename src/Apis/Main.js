import axios from "axios"
import { URLs } from "./URLs"
import { error_messages, success_messages } from "./messages";

export class Main {
    static Domain_URL = "https://api.quicksell.co"

    static async getTickets(){
        const config = URLs.TICKETS_AND_USER_DATA_URL;
        return (axios.get(this.Domain_URL + config.url)
        .then(res => {
            if(res.data && res.status == 200){
                const tickets = Main.assignUserToTickets(res.data.tickets,res.data.users)
                return {msg : success_messages.DATA_FETCHED_SUCCESS,err : false,data : tickets}
            }else{
                return {msg : error_messages.DATA_FETCHED_ERROR,err : true,data : res.data}
            }
        })
        .catch(err => {
            return {msg : error_messages.DATA_FETCHED_ERROR,err : true,data : err}
        })
        
        )
    }

    static assignUserToTickets(tickets,users){
        return tickets.map(ticket => {
            const user = users.filter(ele => ele.id == ticket.userId)
            if(user.length > 0){
                ticket.user = user[0]
            }else{
                ticket.user = null
            }
            return ticket
        })

    }

}
export class ViewTicketsService{

    static getLayout(tickets,display){
        let groupByCategory = tickets.reduce((group, ticket) => {
            const category  = ticket[display.grouping];
            group[category] = group[category] ?? [];
            group[category].push(ticket);
            return group;
          }, {});

        groupByCategory = Object.values(groupByCategory)
        if(display.grouping == "priority"){
            groupByCategory.reverse();
        }

        groupByCategory.map(column => {
            return column.sort((a,b) => {
                if(display.ordering == "priority"){
                    return a.priority < b.priority?1:-1
                }else if(display.ordering == "title"){
                    return a.title > b.title?1:-1
                }
            })
        })
        return groupByCategory.length > 0?groupByCategory:[]
    } 

}
export function getSelectBoxOption(data){
    return data.map((entry)=>{
        return(
            <option key={entry.label} value={entry.value}>{entry.label}</option>
        )
      })
}
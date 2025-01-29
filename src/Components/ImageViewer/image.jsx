import { useEffect, useState } from "react"
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './image.scss'

export const ImageContainer = ({imageDetails,setTotalError})=> {
    const [error,setError] = useState(false)
    const [loadedImage,setLoadedImage] = useState(null)
    const [count,setCount] = useState(0)

    setInterval(() => {
        if(count < 3){
            setCount((countS) => countS + 1)
        }

    },5000)

    useEffect(() => {
        setLoadedImage(<img src = {imageDetails.url} onError={()=> handleError(true)} 
        onLoad={()=> handleError(false)} alt="not loaded"   width = '38px' height = '38px'/>)
    },[count])

    function handleError(error){
        if(error == true){
            setTotalError(true);
        }
        setError(error)
    }

    return (
        <div className="imageContainer">
            {error || !imageDetails.ready?<ReportProblemIcon sx={{ fontSize: 30 ,color : 'red' }} />:loadedImage}
        </div>
    )
}
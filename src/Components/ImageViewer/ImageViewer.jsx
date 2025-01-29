import { useState } from "react"
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import { ImageContainer } from "./image";
import './imageViewer.scss'


export const ImageViewerContainer = ({imagesData})=> {
    const [wholeError,setWholeError] = useState(false);

    const image1 = <div className="image1">{imagesData.images[0]?<ImageContainer imageDetails={imagesData.images[0]} setTotalError={setWholeError} />:<DataUsageOutlinedIcon />}</div>
    const image2 = <div className="image2">{imagesData.images[1]?<ImageContainer imageDetails={imagesData.images[1]} setTotalError={setWholeError} />:<DataUsageOutlinedIcon />}</div>
    const image3 = <div className="image3">{imagesData.images[2]?<ImageContainer imageDetails={imagesData.images[2]} setTotalError={setWholeError} />:<DataUsageOutlinedIcon />}</div>
    const image4 = <div className="image4">{imagesData.images[3]?<ImageContainer imageDetails={imagesData.images[3]} setTotalError={setWholeError} />:<DataUsageOutlinedIcon />}</div>



    return(
        <div className="ImageContainer">
            <div className="Left">
                <div className="ImageCollection">
                    {image1}{image2}{image3}{image4}
                </div>
                <div className="details">
                    <h1>{imagesData.name}</h1>
                    <div style={{marginLeft:'10px'}}>{imagesData.count} Products</div>
                </div>
            </div>
            <div className="right">
                {
                    wholeError && 
                    <div className="BigError" ><ReportProblemIcon sx={{ fontSize: 60 ,color : 'white' }} /></div>
                }
            </div>
            
        </div>
    )
}
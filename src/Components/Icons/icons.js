import CircleIcon from '@mui/icons-material/Circle';//filled Circle
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';//outlined circle
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';//three horizontal dots
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';//plus icon

//status
import CheckCircleIcon from '@mui/icons-material/CheckCircle';//done
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';//canceled
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';//inprogress
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';//backlog

//priority
import SignalWifi1BarIcon from '@mui/icons-material/SignalCellular1Bar';//low - 1
import SignalWifi3BarIcon from '@mui/icons-material/SignalCellular3Bar';//medium - 2
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalCellular4Bar';//high - 3
import SignalCellularConnectedNoInternet4BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet4Bar';//urgernt


//Display
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const cardIcons = {
    status : {
        "done" : <CheckCircleIcon sx={{ color: "blue",fontSize : 15}} />,
        "Todo" : <Brightness1OutlinedIcon sx={{ color: "grey",fontSize : 15}} />,
        "In progress" : <TimelapseOutlinedIcon sx={{ color: "#FFA500",fontSize : 15}} />,
        "Backlog" : <HistoryOutlinedIcon sx={{ color: "red",fontSize : 15}} />,
        "Canceled" : <CancelOutlinedIcon sx={{ color: "grey",fontSize : 15}} />
    },
    feature : <CircleIcon sx={{ color: 'grey' ,fontSize : 10}} />,
    priority : {
        0 : <MoreHorizOutlinedIcon sx={{color: "black",fontSize : 15}}/>,
        1 : <SignalWifi1BarIcon sx={{color: "black",fontSize : 15}} />,
        2 : <SignalWifi3BarIcon sx={{color: "black",fontSize : 15}} />,
        3 : <SignalWifiStatusbar4BarIcon sx={{color: "black",fontSize : 15}} />,
        4 : <SignalCellularConnectedNoInternet4BarIcon sx={{color: "black",fontSize : 15}} />
    },
    plusIcon : <AddOutlinedIcon />,
    dots : <MoreHorizOutlinedIcon />,
    downKey : <KeyboardArrowDownIcon   />,
    display : <TuneIcon  sx={{color: "grey",fontSize : 18}} />
}
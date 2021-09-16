import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CachedIcon from '@material-ui/icons/Cached';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const LocationMarker = ({event_type, lat, lng, onClick }) => {
     console.log('here',event_type)
    function getIcon(){
    // console.log('here',event_type)
    switch (event_type) {
        case 8:
            
            return  <WhatshotIcon className="location-icon"/>

        case 10:

            return <CachedIcon style={{color:'green'}} className="location-icon" />

        case 12:
            
            return  <FilterHdrIcon style={{color:'navy'}} className="location-icon"/>
        
        case 1:
            
        return  <LocationOnIcon style={{color:'black'}} className="location-icon"/>
    
        default:
            break;
    }
    }
    return (
        <div className="location-marker" onClick={onClick}> 
            
         
         {getIcon()}
        
        </div>
    )
}

export default LocationMarker
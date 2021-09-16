import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import DropDownMenu from './DropDownMenu'
import { withStyles } from '@material-ui/styles'
import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent,
  } from "@material-ui/core";

//components
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import AutoCompleteBar from './AutoCompleteBar'




const Map = ({ eventData,zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [markers , setMarkers] = useState(null)
    const [locationMarker, setLocationMarker] = useState(null)
    const [center, setCenter] = useState({
        lat: 42.3265,
        lng: -122.8756
    })
    const KEY = process.env.REACT_APP_MAP_KEY
   
    useEffect(() => {
        setMarkers(
            
           <LocationMarker  event_type={1} lat={center.lat} lng={center.lng} />)
        
        //getLocationMarker();
    }, [center])
    

    // const markers = eventData.map((ev, index) => {
    //     switch (ev.categories[0].id) {
    //         case NATURAL_EVENT_WILDFIRE:
    //             return <LocationMarker key={index} event_type={NATURAL_EVENT_WILDFIRE} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            
    //         case VOLCANOS:
    //             if(ev && ev.categories[0].id === VOLCANOS) {                    
    //                   if(ev.geometries[0].coordinates.length > 1 ){                
    //                       return <LocationMarker key={index} event_type={VOLCANOS} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
    //                   }
    //                   if(ev.geometries[0].coordinates.length <= 1 ){
    //                       let items = ev.geometries[0].coordinates;                          
    //                       const temp = items[0].map((item,index)=>{                 
    //                           return <LocationMarker key={index} event_type={VOLCANOS} lat={item[1]} lng={item[0]} />                              
    //                       })
    //                   return temp                         
    //                   }
                      
    //               }
            
    //         case SEVERE_STORMS:
    //             if(ev && ev.categories[0].id === SEVERE_STORMS) {                    
    //                 let temp = ev.geometries.map((item,index)=>{                      
    //                     return <LocationMarker key={index} event_type={SEVERE_STORMS} lat={item.coordinates[1]} lng={item.coordinates[0]} />
    //                 })                                    
    //                 return temp                       
    //             }

    //         default:
    //             return null;
    //     }              
    // })

    const showSelectedIcons = (e) => {
        console.log(e.target.value)
        setMarkers(eventData.map((ev, index) => {
            switch (e.target.value) {
                case 8:
                    return <LocationMarker key={index} event_type={8} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
                
                    case 10:
                    if(ev.categories[0].id === 10) {
                        console.log(ev.categories[0].id)                    
                        var temp1 = ev.geometries.map((item,index)=>{                      
                            return <LocationMarker key={index} event_type={10} lat={item.coordinates[1]} lng={item.coordinates[0]} />
                        })                                                
                    }
                    return temp1 
                case 12:
                    if(ev.categories[0].id === 12) { 
                        console.log(ev.categories[0].id)  
                            console.log(ev)
                          if(ev.geometries[0].coordinates.length > 1 ){                
                              return <LocationMarker key={index} event_type={12} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
                          }
                          if(ev.geometries[0].coordinates.length <= 1 ){
                              let items = ev.geometries[0].coordinates;                          
                              const temp = items[0].map((item,index)=>{                 
                                  return <LocationMarker key={index} event_type={12} lat={item[1]} lng={item[0]} />                              
                              })
                          return temp                         
                          }
                          
                      }
                
                
    
                default:
                    return null;
            }              
        }))
    }

    return (
        <div className="map">
            <AutoCompleteBar setCenter={setCenter}/>
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: KEY }}
                defaultCenter={ center }
                center={center}
                defaultZoom={ zoom }
            >                
                <DropDownMenu onChange={showSelectedIcons} />
                {locationMarker}
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 10
}

export default Map
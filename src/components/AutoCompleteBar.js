import React,{useState} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';

import LocationMarker from './LocationMarker';
  
  

const AutoCompleteBar = (props) => {

    const [address, setAddess] = useState(null)
    const [coordinates, setCoordinates] = useState({
        let:null,
        lng:null
    })

   const handleSelect = async value => {
    const result = await geocodeByAddress(value)  
    const ll = await getLatLng(result[0])  
    setAddess(value);
    setCoordinates(ll)
    props.setCenter(ll)
      };
     
    

    return (
        <div className='autocomplete_bar'>
           <PlacesAutocomplete
        value={address}
        onChange={setAddess}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {console.log(suggestions)}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        </div>
    )
}

export default AutoCompleteBar

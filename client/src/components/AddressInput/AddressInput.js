import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css

 
const AddressInput = () => (
  <div>
    <GooglePlacesAutocomplete
      onSelect={console.log}
      
    />

    <div id="locationField">
    <input id="autocomplete"
        placeholder="Enter your address"
        onFocus="geolocate()"
        type="text"/>
    </div>
  </div>


);
 
export default AddressInput;
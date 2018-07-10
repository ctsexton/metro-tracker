import axios from 'axios';
import convert from 'xml-js';

export default {
  getVehicles: function (line, lastTime = 0) {
    let encodedURI = window.encodeURI('http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=lametro&r=' + line + '&t=' + lastTime);
    return axios.get(encodedURI, {responseType: 'text'}).then(function (response) {
      let results = JSON.parse(convert.xml2json(response.data)).elements[0].elements;
      results = results.filter(function (element) {
        return element.name === 'vehicle';
      });
      return results;
    });
  }
}

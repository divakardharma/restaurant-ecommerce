import React from 'react';
import './Location.css';
// import Img1 from '../../assets/location.gif'

const Locations = () => {
  const locations = [
    {
      name: 'Tambaram',
      address: `10,15 GST Main Road
Tambaram
Chennai 600045`,
    },
    {
      name: 'Chromepet',
      address: `33, GST Main Road
Chromepet
Chennai 600044`,
    },
    {
      name: 'Velachery',
      address: `10,15 Babynagar, Main Road
Velachery
Chennai 600042`,
    },
  ];

  return (
    <div className="locations-container" id='location'>
        {/* <img src={Img1} alt="" /> */}
      <h2 id="locheading">Our Branches in various Location</h2>
      <div className="locations">
        {locations.map((location, index) => (
          <div className="location" key={index}>
            <h2>{location.name}</h2>
            <address>
              {location.address.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;

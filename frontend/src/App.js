import { useState } from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import {Room, Star} from "@material-ui/icons";
import "./app.css"

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 4
  });
  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/shubhamhire/ckw6rmdgx5w1o15o6vykamclc"
    >
      <Marker latitude={27.1751} longitude={78.0421} offsetLeft={-20} offsetTop={-10}>
      <Room style={{fontSize:viewport.zoom * 7, color:'slateblue'}}/>
      </Marker>
      <Popup
          latitude={27.1751}
          longitude={78.0421}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Taj Mahal</h4>
            <label>Review</label>
            <p>Amazing Place, loved it!</p>
            <label>Rating</label>
            <div className="stars">

            <Star className="star"/>
            <Star className="star"/>
            <Star className="star"/>
            <Star className="star"/>
            <Star className="star"/>
            </div>
            <label>Information</label>
            <span className="username">Created by <b>Tanishq</b></span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
    </ReactMapGL>
    </div>
  );
}

export default App;

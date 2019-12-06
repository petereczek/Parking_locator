import React from 'react';
import Loading from '../components/Loading';
import axios from 'axios';
// import { Map, TileLayer, Marker, Popup } from '../../src'

console.log("came into posts list page in client/pages/postlistpage.js")
class MapPage extends React.Component {
  state = {
    nodes: [],
    loading: true,
  }

  componentDidMount() {
    console.log('--mounted, sent request to api/nodes')
    return axios("/api/nodes")
      .then(res => {
        const nodes = res.data;
        console.log('===nodes', nodes)
        this.setState({
          loading: false,
          nodes: nodes,
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    console.log('--this.state', this.state.nodes)
    if(this.state.loading) {
      return <Loading />;
    }
    // const position = [this.state.nodes[0].Latitude, this.state.nodes[0].Longitude];
    return (
      <div>Yello</div>
      // <Map center={position} zoom={this.state.zoom}>
      //   <TileLayer
      //     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //   />
      //   <Marker position={position}>
      //     <Popup>
      //       A pretty CSS3 popup. <br /> Easily customizable.
      //     </Popup>
      //   </Marker>
      // </Map>
    )
  }

}
export default MapPage;

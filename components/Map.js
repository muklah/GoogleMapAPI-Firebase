import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";

const Marker = MapView.Marker;
export default class Map extends Component {
  renderMarkers() {
    return this.props.places.map((marker, i) => (
      <Marker key={i} title={marker.name} coordinate={marker.coords} />
    ));
  }
  componentDidMount() {}

  render() {
    const region = this.props.region;
    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>
    );
  }
}
const styles = {
  container: {
    width: "100%",
    height: "100%"
  }
};

import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { MapView } from "expo";
import { Svg } from 'expo';
import StarRating from './StarRating';
import { withNavigation } from 'react-navigation';

const { Image, Circle, Rect } = Svg;

const Marker = MapView.Marker;

class Map extends Component {
  renderMarkers() {
    return this.props.places.map((marker, i) => (
      <Marker key={i} title={marker.name} coordinate={marker.coords} 
      onPress={() => this.props.navigation.navigate('Details')} >
        <View style={{
          flexDirection: 'row', width: 70, height: 60,
          backgroundColor: 'none',
        }}>
          <Svg
            width={60} height={50}>
            <Rect
              fill="#BB0A21" x="15" y="10" width="35" height="33"
              style={{
                borderRadius: 10,
              }}
            />
            <Image
              href={require('../assets/barber-icon.png')}
              x={17}
              y={12}
              width={30}
              height={30}
            />

            <Circle
              cx="48" cy="10" r="7" stroke="green" strokeWidth="1" fill="white"
            >
            </Circle>
            <Text
              id="queue"
              style={{
                fontSize: 9,
                marginTop: 3,
                marginLeft: 46,
                color: '#BB0A21',
                fontWeight: 'bold',
              }}
            >7</Text>

            <StarRating rating={marker.rating} />

          </Svg>
        </View>

      </Marker>
    ));
  }
  componentDidMount() { }

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

// class BarberDetails extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Map')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }


const styles = {
  container: {
    width: "100%",
    height: "100%"
  }
};

export default withNavigation(Map);

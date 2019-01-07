import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Map from './components/Map';
import { Location, Permissions } from 'expo';
import FirebaseService from './components/FirebaseService'

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class App extends React.Component {

  state = {
    region: null,
    barberShops: []
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  getBarberShops = async () => {
    const { latitude, longitude } = this.state.region;
    const userLocation = { latitude, longitude };
    const barberShops = await FirebaseService.getBarberShops(userLocation);
    this.setState({ barberShops });
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
      await this.getBarberShops();
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas
    };
    await this.setState({ region });
  }


  render() {
    const { region, barberShops } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Map
          region={region}
          places={barberShops}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

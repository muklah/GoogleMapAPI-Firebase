import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import Map from "./components/Map";
import { Location, Permissions } from "expo";

import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAVfjkKpsVsaR5HRlSMieQTUoCs0hz6D_8",
  authDomain: "barbie-d07f5.firebaseapp.com",
  databaseURL: "https://barbie-d07f5.firebaseio.com",
  projectId: "barbie-d07f5",
  storageBucket: "barbie-d07f5.appspot.com",
  messagingSenderId: "485266392528"
};
firebase.initializeApp(config);

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dbs: null,
      region: null,
      barberShops1: [
        {
          coords: {
            latitude: 34.35479,
            longitude: 41.960243
          },
          name: "mmmm"
        }
      ]
    };
  }
  componentWillMount() {
    this.getLocationAsync();
  }
  componentDidMount() {
    firebase
      .database()
      .ref("/Barbers")
      .on("value", snapshot => {
        let x = snapshot.val();
        this.setState({
          dbs: x
        });
        this.formatFirebaseData(this.state.dbs);
      });
  }
  formatFirebaseData(data) {
    let markersArray = [];
    for (x in data) {
      markersArray.push(data[x]);
    }
    this.setState({
      barberShops1: markersArray
    });
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        ...deltas
      };
      await this.setState({ region });
    }
  };

  render() {
    const { region, barberShops1 } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Map region={region} places={barberShops1} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

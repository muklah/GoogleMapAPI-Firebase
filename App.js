import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { Location, Permissions } from "expo";

import firebase from "firebase";
import { createAppContainer, createStackNavigator } from 'react-navigation';

import BarbersMap from "./components/Map";
import StarRating from "./components/StarRating";
import BarberDetails from "./components/BarberDetails";

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

// type Props = {};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dbs: null,
      region: null,
      barberShops: [
        {
          name: "mmmm",
          rating: 0,
          coords: {
            latitude: 34.35479,
            longitude: 41.960243
          }
        }
      ]
    };
  }
  componentWillMount() {
    this.getLocationAsync();

    // var coords = { latitude: 33.296598, longitude: 44.2881 }
    // const api2 =
    //   firebase.database().ref('Barbers/').push({
    //     name: 'mmmm',
    //     rating: 2,
    //     coords: coords
    //   }).then((data) => {
    //     //success callback
    //     console.log('data ', data)
    //   }).catch((error) => {
    //     //error callback
    //     console.log('error ', error)
    //   })
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
      barberShops: markersArray
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
    // const { region, barberShops } = this.state;
    return (
      <RootStack />
      // <SafeAreaView style={styles.container}>
      //   <BarbersMap region={region} barberShops={barberShops} />
      // </SafeAreaView>
    );
  }
}

const { region, barberShops } = this.state;
const RootStack = createStackNavigator(
  {
    Home: {
      screen: props=> <BarbersMap {...props} screenProps={region}></BarbersMap>
    },
    Details: {
      screen: BarberDetails,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

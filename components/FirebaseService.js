
// var firebase = require("firebase");
import firebase from 'firebase';
import { ACTION_SHOW_INPUT_METHOD_PICKER } from 'expo/build/IntentLauncherAndroid/IntentLauncherAndroid';

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
var shopss;
const api =
    firebase.database().ref('/Barbers').on('value', (snapshot) => {
        console.log('Muklaaaaaaaaaaaaah2')
        // console.log(snapshot.val())
        const shops = snapshot.val()
        console.log(shops)
        shopss = Object.values(shops)
    });

var coords = { latitude: 34.35479, longitude: 41.960243 }
const api2 =
    firebase.database().ref('Barbers/').push({
        name: 'mmmm',
        coords: coords
    }).then((data) => {
        //success callback
        console.log('data ', data)
    }).catch((error) => {
        //error callback
        console.log('error ', error)
    })

const getBarbersShops = userLocation => {
    console.log('teeeeeeeest2')
    console.log(shopss)
    return shopss
        //   .get('/businesses/search', {
        //     params: {
        //       limit: 10,
        //       categories: 'coffee,coffeeroasteries,coffeeshops',
        //       ...userLocation,
        //     },
        //   })
        // .then(res =>
        //     res.data.businesses.map(business => {
        //         return {
        //             name: business.name,
        //             coords: business.coordinates,
        //         }
        //     })
        // )
        // .catch(error => console.error(error))
}

export default {
    getBarbersShops,
}
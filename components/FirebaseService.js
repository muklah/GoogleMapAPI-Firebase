
// var firebase = require("firebase");
import firebase from 'firebase';

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

const shops
const api =
    firebase.database().ref('/Barbers').on('value', (snapshot) => {
 
        shops = snapshot.val();
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
    console.log(api);
    
    // return api
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
        return shops
}

export default {
    getBarbersShops,
}
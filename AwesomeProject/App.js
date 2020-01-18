/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid, 
} from 'react-native';

import {
  Header, 
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import Geolocation from 'react-native-geolocation-service';
import UserMap from './components/UserMap';


import FetchLocation from './components/FetchLocation';

export async function requestLocationPermission(){
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Example App',  
        'message': 'Example App access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
      alert("You can use the location");
    } else {
      console.log("location permission denied")
      alert("Location permission denied");
    }
  } catch (err) {
    console.warn(err)
  }
}

export default class App extends React.Component{

  async componentDidMount() {
   await requestLocationPermission()
  }

  state ={
    userLocation:null
  }





  getUserLocation=()=> {


     Geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                  userLocation:{
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.0421
                  }
                })
                console.log(position);

            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
   }

  
   render(){
      return (
        <View style={styles.container}>
          <FetchLocation onGetLocation={ this.getUserLocation } />
           <UserMap userLocation={this.state.userLocation} />
       
        </View>
        );
    }
   }



const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: 'center',

  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});



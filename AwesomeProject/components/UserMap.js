import React from 'react';
import {View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';



const userMap = props => {

	let userLocationMarker=null;

	if(props.userLocation){
		userLocationMarker=<MapView.Marker coordinate={props.userLocation}/>;
	}



	return (
		<View style={styles.mapContainer}>
			<MapView 
			initialRegion={{
      			latitude: 40.730610,
      			longitude: -73.935242,
      			latitudeDelta: 0.0922,
      			longitudeDelta: 0.0421,
    		}} 
    		region={props.userLocation}
			style={styles.map}>
				{userLocationMarker}
				</MapView>
		</View>

		); 
};



const styles=StyleSheet.create({
	mapContainer: {
		width: '100%',
		height: 400,
		margin: 20
	},

	map: {
		width: '100%',
		height: 400
	}
});

export default  userMap;
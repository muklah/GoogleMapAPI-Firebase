import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class StarRating extends Component {
	render() {
		const { rating } = this.props;
		let stars = [];

		for (var i = 1; i <= 5; i++) {

			let path = require('../assets/star-filled.png');

			if (i > rating) {
				path = require('../assets/star-unfilled.png');
			}

			stars.push((<Image style={styles.image} source={path} />));
		}

		return (
			<View style={styles.container}>
				{ stars }
				{/* <Image
					style={styles.image}
					source={require('../assets/star-filled.png')}
				/>
				<Image
					style={styles.image}
					source={require('../assets/star-filled.png')}
				/>
				<Image
					style={styles.image}
					source={require('../assets/star-filled.png')}
				/>
				<Image
					style={styles.image}
					source={require('../assets/star-unfilled.png')}
				/>
				<Image
					style={styles.image}
					source={require('../assets/star-unfilled.png')}
				/> */}
			</View>
		);
	}
}

class DetailsScreen extends React.Component {
	render() {
	  return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		  <Text>Details Screen</Text>
		  <Button
			title="Go to Details... again"
			onPress={() => this.props.navigation.push('Details')}
		  />
		  <Button
			title="Go to Home"
			onPress={() => this.props.navigation.navigate('Home')}
		  />
		  <Button
			title="Go back"
			onPress={() => this.props.navigation.goBack()}
		  />
		</View>
	  );
	}
  }

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		width: 13,
		height: 15,
		marginTop: 22
	}
});
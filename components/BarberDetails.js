import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StarRating from "./StarRating";

export default class BarberDetails extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.image} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}>
                    </Image>
                    <View style={styles.starRating}>
                        <StarRating />
                        <Text style={styles.reviews}> 24 reviews</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.description}>Over Priced Hair Place where you only go to make a check in, and your hair will defiantly stay the same wether you go or not</Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#2A2E43"
    },
    header: {
        backgroundColor: "#2A2E43",
        height: 200,
    },
    image: {
        height: 200,
    },
    starRating: {
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: "#2A2E43"
    },
    reviews: {
        fontSize: 16,
        color: "#FFFFFF",
        marginTop: 22
    },
    descriptionTitle: {
        fontSize: 26,
        color: "#000000",
        fontWeight: '400',
        marginTop: 10,
        textAlign: 'left'
    },
    description: {
        fontSize: 14,
        color: "#000000",
        marginTop: 10
    },
    body: {
        marginTop: 40,
        backgroundColor: "#2A2E43",
    },
    bodyContent: {
        flex: 1,
        padding: 10,
        backgroundColor: "#2A2E43",
    },
    buttonContainer: {
        marginTop: 40,
        marginBottom: 20,
        height: 50,
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#7BD8EB",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16
    }
});


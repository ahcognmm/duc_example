//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

// create a component
const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerItem}>
                <Icon.Button
                    name="arrow-back"
                    color="black"
                    backgroundColor="#FFF"
                    size={20}
                />
            </View>
            <View style={styles.centerItem}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#eeeeee'
    },
    centerItem: {
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
    }

});

//make this component available to the app
export default Header;

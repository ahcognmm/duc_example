//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Header from '../component/Header';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Header title="Tạo tài khoản" />
            <View style={styles.content}>
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={{ uri: "https://www.topcv.vn/v3/images/topcv-logo-4.png" }}
                />
                <Text style={styles.join}>
                    Tham gia Topcv
                </Text>
                <Text style={styles.guide}>
                    Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{
                        color: "#FFF",
                        fontSize: 16
                    }}>
                        Tiếp
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 36
                }}>
                    <Text style={{
                        color: "#0097e6",
                        fontWeight: "bold"
                    }}>
                        Bạn đã có tài khoản ?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#FFF'
    },
    logo: {
        height: 200,
        width: "60%",
    },
    content: {
        flex: 1,
        alignItems: "center",
    },
    join: {
        fontSize: 25,
        fontWeight: "bold"
    },
    guide: {
        paddingTop: 15,
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10
    },
    button: {
        marginTop: 50,
        backgroundColor: '#0984e3',
        width: "90%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
});

//make this component available to the app
export default Home;

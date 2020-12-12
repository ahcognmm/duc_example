//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SubCmt from './SubComment';

// create a component
const CommentItem = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "column", height: "100%" }}>
                <Avatar style={{}} urlImage="https://picsum.photos/200" />
            </View>
            <CmtBox />
        </View>
    );
};

const Avatar = ({ urlImage }) => {
    return (
        <Image
            resizeMode="contain"
            style={styles.logo}
            source={{ uri: urlImage }}
        />

    )
}

const CmtBox = () => {
    return (
        <View style={{ marginLeft: 15 }}>
            <View style={styles.cmtBox}>
                <Text style={styles.user}>Dat Mai</Text>
                <Text style={styles.cmt}>Pho bo nhe cac ban</Text>
            </View>
            <View style={styles.underBox}>
                <Text style={styles.textUnderBox}>1 giờ</Text>
                <Text style={styles.textUnderBox}>Thích</Text>
                <Text style={styles.textUnderBox}>Trả lời</Text>
            </View>
            <View>
                <SubCmt />
                <SubCmt />
            </View>
        </View>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        padding: 10
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 25,
    },
    cmtBox: {
        backgroundColor: "#eeeeee",
        flexDirection: "column",
        borderRadius: 15,
        alignSelf: 'flex-start'
    },
    user: {
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingTop: 6,
        paddingBottom: 3
    },
    cmt: {
        paddingHorizontal: 10,
        paddingBottom: 6,
        paddingTop: 3
    },
    underBox: {
        flexDirection: 'row',
    },
    textUnderBox: {
        fontWeight: "500",
        paddingHorizontal: 6,
        marginTop: 5
    }
});

//make this component available to the app
export default CommentItem;

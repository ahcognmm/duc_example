//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommentHeader from '../component/CommentHeader';
import CommentItem from '../component/CommentItem';

// create a component
const Comment = () => {
    return (
        <View style={styles.container}>
            <CommentHeader />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
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
});

//make this component available to the app
export default Comment;

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView } from 'react-native';

class HomePage extends React.Component {
    render() {
        return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>My habit name is : {this.props.habitName}</Text>
        </ScrollView>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

const mapStateToProps = (state) => ({
    habitName: state.habits.habitName,
});

export default connect(
    mapStateToProps
)(HomePage);
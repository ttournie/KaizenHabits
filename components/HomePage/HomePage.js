import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView } from 'react-native';

class HomePage extends React.Component {
    render() {
        return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            {this.props.habitList.map((habit, i) => (
                <Text key={i}>My habit name is {habit.name}</Text>
            ))}
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
    habitList: state.habits.habitList,
});

export default connect(
    mapStateToProps
)(HomePage);
import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import AddHabitFormRF from './AddHabitFormRF';
import { addHabit } from './../../reducers/habits';

class AddHabitForm extends React.Component {
  handleSubmit = ({ habitName }) => {
    this.props.addHabit(habitName);
  }

  render() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text>My Habit Form</Text>
          <AddHabitFormRF onSubmit={this.handleSubmit}/> 
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });

const mapStateToProps = (state) => ({
    habitName: state.habits.habitName,
});

const mapDispatchToProps = (dispatch) => ({
  addHabit: (habitName) => dispatch(addHabit(habitName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddHabitForm);
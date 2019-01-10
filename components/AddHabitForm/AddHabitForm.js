import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import AddHabitFormRF from './AddHabitFormRF';
import { addHabit } from './../../reducers/habits';

class AddHabitForm extends React.Component {
  handleSubmit = ({ habitName }) => {
    const habit = {name: habitName}
    this.props.addHabit(habit);
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
    habitList: state.habits.habitList,
});

const mapDispatchToProps = (dispatch) => ({
  addHabit: (habit) => dispatch(addHabit(habit)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddHabitForm);
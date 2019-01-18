import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import AddHabitFormRF from './AddHabitFormRF';
import { addHabit } from './../../reducers/habits';

class AddHabitForm extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Add Habit',
    };
  };

  handleSubmit = ({ habitName }) => {
    const habit = {
      key: habitName,
      name: habitName
    }
    this.props.addHabit(habit);
    this.props.navigation.navigate('Home');
  }

  render() {
    console.log(this.props.editMode)
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
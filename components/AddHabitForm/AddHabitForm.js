import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import AddHabitFormRF from './AddHabitFormRF';
import { addHabit } from './../../reducers/habits';

class AddHabitForm extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Add Habit',
    };
  };

  handleSubmit = ({ habitName, habitFrequency }) => {
    const habit = {
      key: habitName,
      name: habitName,
      streak: [],
    }
    console.log(habitFrequency);
    this.props.addHabit(habit);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <AddHabitFormRF onSubmit={this.handleSubmit}/> 
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
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
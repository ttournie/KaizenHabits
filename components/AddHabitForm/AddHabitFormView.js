import { PropTypes } from 'prop-types';
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../RFTextInput/RFTextInput';
import RFFrequencyPicker from '../RFFrequencyPicker/RFFrequencyPicker';
import RFRadioForm from '../RFRadioForm/RFRadioForm';

const AddHabitFormView = ({ handleSubmit, valid }) => (
  <View>
    <Field
      label="Name"
      name="habitName"
      component={RFTextView}
    />
    <View style={styles.habitFrequency}>
      <Text style={styles.habitFrequencyLabel}>Habit Frequency</Text>
      <Field
        label="number of occurence"
        name="habitFrequencyNumber"
        component={RFTextView}
      />
      <Field
        label="habitFrequency"
        name="radio"
        values={[
          {label: 'week', value: 'week' },
          {label: 'month', value: 'month' },
          {label: 'year', value: 'year' }
        ]}
        component={RFRadioForm}
      />
    </View>
    
    <Button
      title="Submit"
      disabled={!valid}
      onPress={handleSubmit}
      color="#43c744"
    />
  </View>
);

const styles = StyleSheet.create({
  habitFrequency: {
    marginTop: 20,
  },
  habitFrequencyLabel: {
    fontSize: 20,
  }
});

AddHabitFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default AddHabitFormView;
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../RFTextInput/RFTextInput';

const AddHabitFormView = ({ handleSubmit, valid }) => (
  <View>
    <Field
      name="habitName"
      component={RFTextView}
    />
    <Button
      title="Submit"
      disabled={!valid}
      onPress={handleSubmit}
    />
  </View>
); 

AddHabitFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default AddHabitFormView;
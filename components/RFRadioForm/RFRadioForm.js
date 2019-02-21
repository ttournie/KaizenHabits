import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const RFRadioForm = ({
  input: { onChange, value },
  values
}) => (
    <React.Fragment>
      <RadioForm
        radio_props={values}
        initial={0}
        onPress={value => onChange(value)}
        />
    </React.Fragment>
  );

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#CED0CE",
    marginTop: 5,
    height: 50,
    borderRadius: 8,
    paddingLeft: 20,
  },
  error: {
    marginTop: 2,
    marginLeft: 10,
  }
});

RFRadioForm.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
}

export default RFRadioForm;
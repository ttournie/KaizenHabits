import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';

const RFTextInput = ({
  input: { onChange, onBlur, onFocus, value },
  meta: { error, touched, valid },
  label
}) => (
  <React.Fragment>
    <TextInput
      onChangeText={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      placeholder={label}
      style={[{ borderColor: !valid && touched ? 'red' : 'gray' }, styles.input]}
    />
    {!valid && touched && <Text style={styles.error}>{error}</Text>}
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

RFTextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
}

export default RFTextInput;